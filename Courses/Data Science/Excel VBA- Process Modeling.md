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
created: 2026-05-03
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

#### [Analyze your business processes using Excel VBA](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/analyze-your-business-processes-using-excel-vba?u=76281980&t=0)** - [Narrator] [[Microsoft Excel]] is a powerful and versatile tool for analyzing business processes. Mastering the skills you need to model and simulate your operations will let you work quickly and support great decision making. In this course, I'll use real world examples to demonstrate how you can apply the incredible power of [[Microsoft Excel|Excel]] and Excel VBA to business process analysis. Whether you are running a neighborhood sandwich shop, or a large production line. I'm Curt Frye. Join me at [[LinkedIn]] Learning for an introduction to the essential skills for analyzing business processes using Microsoft Excel VBA.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel]] (2), [[Microsoft Excel|Excel]] (2), [[LinkedIn]] (1)
> **Env Vars:** vba (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Gain insight into your business through simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=0)** - [Instructor] Thanks again for your interest in this course. Before I get started, I want to share some important information that you should know. I assume that you have basic proficiency in [[Microsoft Excel|Excel]] VBA. If not, you'll pick up a lot as we go along, but the more you know before you get started, the better off you'll be. Secondly, this is not the type of course where I teach a specific skill within each movie. Instead, the movies build progressively within each chapter. And that means also that not every movie ends with code that you can run. Many of them do, but some of them, especially in the later chapters do not. I make sure though that all the workbooks contain previous code from the chapter. That way you will never have to retype anything. Also, chapters two through four include a workbook With the completed code, you can complete the exercises yourself for chapters five and later, and create the code that you need. And finally, I need to cover how to manage macro security for downloaded files. As of September 20th, 2024, [[Microsoft]] has changed how [[Microsoft Office]] handles files that are downloaded from the internet. So I'm going to switch to the exercise files folder, and show you what you need to do to be able to run the code. I have switched over to File Explorer, and I have chapter two of the exercise files collection open. But any exercise files folder will do. Let me show you what happens when you open a file without changing its macro security settings.
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=94)** So I will double-click 0205 and we won't actually do any work. I'm just using it as an example. So I have enable editing on the warning bar here. So I'll click Enable Editing. After I click Enable Editing, I receive a [[Security Risk]] message saying that Microsoft has blocked macros from running because the source of this file is untrusted. If I click Learn more, I'll go to an online article. So if you want to learn more, I encourage you to click that. But instead, there's a setting that you can make to the files properties that will keep this from happening because as the file is right now, none of the macros in it will run. So I will close the file. and then in File Explorer, I'll right-click the files icon, and then click properties. In the properties dialogue box on the general tab, if you look down at the bottom, almost all the way to the bottom right, there's a security note saying, "This file came from another computer, and might be blocked to help protect this computer." That's because this file was in fact downloaded from the internet. To open the file and have the macros be usable, you need to check the unblock checkbox here. So this will allow you to use macros in this file and in this file only. So it does mean that you need to repeat this process for every file. However, that's great for security. So always make sure you trust a file
>
> **[3:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/gain-insight-into-your-business-through-simulation?u=76281980&t=186)** before you allow macros to run. I'll click okay. And then I will double-click the same file 0205 and I get the notes saying that macros have been disabled. So I will enable the content, and the security warning that I received earlier indicating that macros were disallowed has been removed. So I can now work with the file including the macros that it contains. And also to reiterate, I apologize, but you will need to do this for each file that you download.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Microsoft Excel|Excel]] (1), [[Microsoft Office]] (1), [[Security Risk]] (1)
> **UI Navigation:** double-click (2), switch to (1), go to (1), right-click (1), open the (1)
> **CLI Commands:** make (3)
> **Exercise Files:** exercise files (3)
> **Warnings:** warning (2)
> **Env Vars:** vba (1)
> **Best Practices:** always make sure (1)
> **Speakers:** - [instructor] (1)


### 1. Defining Necessary VBA Constructs

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a class module](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=1)** - [Narrator] When you create a [[Simulation]], you model the behavior of business objects, such as customers, as they move through an environment. That environment is made up of other business objects, which could include customer service stations within a store. In this movie, I will show you how to create a class module. A class module is a place within [[Microsoft Excel|Excel]] VBA where you can define a class that you'll use as part of your VBA programming. I don't need to do any work in a worksheet, so I'll press alt-F11 to move to the Visual Basic editor. And here I'm in the Visual Basic Editor and I have my project explorer over on the left. And this displays all of the open workbooks and that can include add-ins such as Solver, which I have installed and is treated as a separate workbook. So I have my Solver project, and I also have the project for chapter 101, which is what I'm currently working on. To create a class module, I'll go up to the insert menu and then click class module. And this module, as I said, is a container where I can create my class definition. One last thing I'll do before I close here, is to rename the class module so that it's more descriptive than class one. With class one clicked, and I'll make sure that it is selected. I'll go down to the properties box and I will change the name properties value from class one to C customer.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-a-class-module?u=76281980&t=96)** The capital C in front is not required, but I like to add it to my class definitions, so I remember that, in fact, it is a class that I've created. So with that, and I'll press enter. And the class module has been renamed to C customer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** vba (2), f11 (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Define class properties](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=0)** - [Instructor] After you create a class module in [[Microsoft Excel|Excel]] VBA, you can define the class itself, and those include variables for properties that contain values describing the object. For example, that could be the name of a customer. In this movie, I will show you how to create a class definition. My sample file is chapter 0102, and you can find it in the chapter one folder of the exercise files collection. I don't need to do any work in a worksheet, so I'll press alt F11 to move to the Visual Basic Editor. And there I already have my code module created and pulled up. And I will increase the size of that code window. The first thing I need to do is declare the variables for my class module. And rather than use dim for dimension, I will use private, so the variables stay within the definition. So I have private, and I'll do customer ID, and I'll put a P in front of it to indicate that it is private. C-U-S-T-I-D as long. And most of the variables that I use for numbers could be integers, but long gives me more flexibility in case the numbers do get large. So there was private customer ID. Then I'll do private p station. Again as long, private p start time. As long. And actually I will copy what I am typing there.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=96)** So I have private. Then I'll double click P start time and replace that with P lowercase p, end time. Then click below. And the next variable name will be P entered. And this is the time that a customer entered a specific workstation. And then P, and then P left, which is the time that a customer left a particular workstation. So there are all of my variables, and I've spelled them correctly, and they are all of type long. And now I can define my customers. So for that, I will do a comment that says C-U-S-T-I-D property. Then enter twice, and I'll have a public property. Then the get keyword, which allows me to assign a variable to a property. So going from outside the property or outside the class to within. So I have public property, get, customer ID. Then open and close parenthesis, as long. there I have my property definition, and I'll tab in, and it'll be customer ID equals P customer ID. So this gives me a way to assign a customer ID from outside of the property itself.
>
> **[3:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-class-properties?u=76281980&t=192)** If we want to write the property value out to a variable, then we use the let keyword. So public property, let, then customer ID, and now we need to tell Excel what type of variable is going out. So that will be value as long. Then enter a couple of times, and it'll be P customer ID equals value, and I already have end property. So this is the start of a definition for a class using the get and let keywords for the customer ID property. There are other properties that you can see listed here for the variables, but rather than have you watch me create them, I'll do that offline and see you in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2)
> **Env Vars:** vba (1), f11 (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Create an instance of a class](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=0)** - [Instructor] After you define a class and its properties, you can create an object that is a member of that class. In [[Object-Oriented Programming (OOP)|object-oriented programming]]. An example of a class is called an instance. For example, if you're simulating movement of customers through a sandwich shop, you would create instances of the shop stations as well as instances of each customer. And once you create an instance, you can assign values to its properties. To demonstrate, I'll work in Chapter01_03 and that is a macro-enabled [[Microsoft Excel|Excel]] workbook you can find in the chapter one folder of the exercise files collection. And I don't have any data in my worksheet, but I do have some code already written. So, I'll press ALT F11 to move to the Visual Basic editor. And here I have my definition in the CCustomer class module. And if I resize the code window, you can see that I have defined the property is required for each of the variables up top. Now, I can create a regular code module and refer to an instance of the customer class within it. So, go to the Insert menu and click Module. And again, this is just a standard code module, and I will resize it to cover up the class module in the background so it's not distracting (inhales). The subroutine, I'll call SimTest, so, it's just testing the [[Simulation]] open and close parentheses, (keyboard clicking)
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=94)** 'cause we're not expecting any data from the outside. Now, I need to define a customer object. So, to declare that I'll do Dim for dimension O-B-J-C, and as the O-B-J indicates, this will be an object variable, so, as CCustomer. And note that because I have CCustomer as a defined class, it appears in the auto-complete when I'm entering in this command. So, I have CCustomer highlighted, so, I'll press tab, (keyboard clicking) a couple of enters, and then I need to actually create an instance of that object variable. And for that we use Set O-B-J C equals New CCustomer.
>
> **[2:28](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=148)** Now, I can assign values to a couple of its properties to make sure it works and then use the Debug.Print statement to send the output to the immediate window to make sure the assignment worked. So, I'll do O-B-J-C.Customer ID, so that property appears again in the auto complete list, equals one. This is just a test. Then O-B-J-C.StartTime, I will also set to one and below that I will do Debug.Print statements for both of those properties, so, Debug.Print, O-B-J-C.Customer ID, and then the same Debug.Print O-B-J-C.StartTime. All right, that looks good. If I run this code, then the output will appear in the immediate window. If the immediate window isn't open in your version of the Visual Basic editor, then you can go to the view menu and click Immediate Window, which is about a third of the way down, or you can press Control G to open it. For me, it's already displayed at the bottom. So, I will click inside of the subroutine and press F5 to run it. And at the bottom I have one and one. So, I have the customer ID and start time. And if I change the start time to two
>
> **[4:02](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-instance-of-a-class?u=76281980&t=242)** and press F5 to run again, then I get the values of one and two. So, it appears that my code is working correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Microsoft Excel|Excel]] (1), [[Simulation]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** alt (1), f11 (1)
> **UI Navigation:** go to (2)
> **Non-Speech:** (keyboard clicking) (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Create collections](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=0)** - [Instructor] In [[Microsoft Excel|Excel]] VBA, classes let you sort instances of an object you use in your [[Simulation]]. Those objects could be customers or stations within a process. One useful way to manage instances of a class is to create a collection and if you have programmed an Excel VBA before then you're probably familiar with the worksheets collection, which contains all of the worksheets within a workbook. In this movie, I will show you how to create a collection for objects of your own classes. My sample file is chapter 0104 and you can find it in the chapter one folder of the exercise files collection. I don't have any data to work with in the worksheet, so I'll press alt F11 to move to the Visual Basic Editor. And here in the front I have my customer class definition and behind it and I'll use the window menu to display Module one, I have the code for my test and I will drag and resize my module one code module so that I'm not distracted by the customer class module in the back. I have created the outline of the code that I want to run. So I have a sub-routine and I have declared object C as an object type of customer. My goal for this movie is to create a customer collection and have two customers to add to it.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=96)** So let's start by assigning customers as a collection. So I'll do DIM for dimension, which is declaring a variable, then customers as collection. So that is a collection type. And below that I will set customers as a new collection. So set customers equal new collection, that's good. Now I can use a counter variable to move through two instances where I will create a new customer object and assign values to its properties. So we'll start by four and then I'll just use I as a counter variable equals one to two. Then below that I will create a new customer object. So you set objC equals new customer, New CCustomer. And now I can use the collections add method to add the object I just created. So customers.add then objC, the object I just created. And with that I can assign property values. So that will be customers. And then the index will be my counter variable in the four next loop. So customers(i).CustID= i.
>
> **[3:14](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=194)** Then I will press enter and Customers(i).StartTime will be equal to one,
>
> **[3:27](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=207)** then enter a couple of times. Then next i and I make the i a comment by putting a single quote in front of it because you don't actually need to assign the variable to the next statement. Excel just looks back out and uses the closest four to close out the four next loop. But I like to add it so I can keep track. So there's that. And now I want to print values for customer ID and start time. So I made that a comment. And because I'm working with a collection I can use For Each objC in Customers,
>
> **[4:15](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-collections?u=76281980&t=255)** then I'll do Debug.Print objC.CustID and we'll do the same for Debug.Print objC.StartTime and next, objC looks good. So when I run my code, I should see the output in the immediate window below. If the immediate window isn't displayed, you can go to the view menu and click immediate window, or you can press Ctrl G. Mine is already displayed and actually I will track its top edge up a little bit more. There we go. And with the insertion point or the cursor flashing in my subroutine, I'll press F5 and it's run and I get one, which is the first customer ID followed by the start time of one. Then the second customer ID, which was number two, and its start time is also one. So the code to create our collection and add two instances of our customer class to it has been successful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Simulation]] (1), cursor (1)
> **Code Identifiers:** objc (6)
> **Env Vars:** vba (2), f11 (1), dim (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Delete objects to free up memory](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=0)** - [Instructor] When you use VBA to create instances of objects in [[Microsoft Excel]] or other [[Microsoft Office|Office]] programs, the program keeps those instances in memory until your code finishes running or you delete the objects deliberately. [[Microsoft Excel|Excel]] handles object cleanup pretty well, but you can manage your computer's memory effectively by getting rid of objects you no longer need. And in this movie, I will show you how to do that. My sample file is Chapter01_05, and you can find it in the Chapter01 of the Exercise Files collection. Everything we need to do is in Visual Basics, so I will press Alt + F11 to move to the Visual Basic editor. In the Visual Basic editor, I have my existing code, and the first is the Customer Class Definition. I have the variables up top. And you can see for each of the properties, I have Get and Let statements, which allow us to write values in and out of each of these objects. And behind that, I have a code window, which is a regular code module as opposed to the class module that runs through each of the objects in the Customers collection and prints out their Customer ID. And if I press F5, we get the output in the immediate window. If you don't see the immediate window, you can display it one of two ways. First, you could go to the View menu and click Immediate Window, or you can use the keyboard shortcut Control + G. This code module runs as expected,
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-objects-to-free-up-memory?u=76281980&t=94)** but I can aid memory cleanup by clearing out the objects that I created before closing out the routine. So at the end, above End Sub and after Next, I'll type Set Customers = Nothing. I created Customers as a collection using this line of code here, and then I assigned two customers as objects or instances within that collection. When I set Customers to Nothing, I am erasing that collection and returning the memory use to store those two customer instances to main memory, and it's now available for the [[Representational State Transfer (REST)|rest]] of the program to use. Modern computers have a lot of memory, so this step isn't as necessary as it used to be. But cleaning up unneeded objects is a good programming practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel]] (1), [[Microsoft Office|Office]] (1), [[Microsoft Excel|Excel]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** vba (1), f11 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 2. Developing Process Control Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe process flow and programming goals](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123394?u=76281980&t=0)** - [Instructor] In this chapter, we will create a [[Simulation]] that defines a series of three stations and then moves two customers through those stations. As part of that process, we will declare the variables that we need and we'll also define classes for customers and stations and then add stations with property values. So we will get information about the average and the standard deviation of the processing time for each of the stations in the process. We will also clean up unneeded objects and run the simulation one time to get a single set of values and then run the simulation several times to get more values to help with our analysis. The idea is that the first customer will move through the entire sequence of stations before the second customer starts and that is an unrealistic scenario, but it provides a simplified framework we can use at the base for more complicated models later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Declare variables used in the simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=0)** - [Instructor] Every VBA code module requires variables to represent values used within the module's procedures. In this case, we will use quite a few variables to store values that include the number of stations in the [[Simulation]], the average processing time, and the total time that an individual customer spends within the system. In this movie, we will start to define the variables and procedures that we'll use. My sample file is chapter 0202, and that's a macro enabled [[Microsoft Excel|Excel]] workbook you can find in the chapter two folder of the exercise files collection. I have a sim setup worksheet out front, and this is customer simulation data for three stations. So we have the mean and the standard deviation of the processing time. We will use this data later, but for now, I'll press alt+F11 to move to the Visual Basic Editor. And here, I have two separate class modules. In front, I have the customer class module and I'll expand that a bit. This is the same class module that we used in the previous chapter, and I'll click the window menu header, and go to see station, and this is a similar class definition for the stations that we'll use. So I have the station ID, mean processing time, the station standard deviation processing time, and also the next station. So if we have station number one, then we need to know
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=95)** that the customer, after completing their time in station one, would move to station two. And the other window, which I'll display, so I have window, and then module one, is the code that will allow us to move through the processes going from station to station. I have the immediate window open in my visual basic editor, so I will click the close button to close that, and then expand the module one code module window. At the top, you might have noticed that I have the statement option explicit. Option explicit requires you to declare a variable before using it, and it's especially useful for avoiding misspellings. If you leave a letter out of a variable name for example, you have asked Excel VBA to use a separate variable, one you might not have assigned a value to, so option explicit can save you a lot of time in avoiding mistakes because it won't let you, literally will not let you use a variable that you haven't declared above. So let's start with declaring some variables, and under the first comment, I will declare collections and objects within collections. So I'll start by creating the customer object. So Dim objC as CCustomer, and again, that's the customer class that we defined.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=190)** Then Dim objS, so that's an object variable. Actually I will do all lowercase objs as CStation, and now we need to define collections to hold our customers and any stations that we create. So I'll do Dim Customers as Collection, then Dim Stations as Collection as well. So there I have my objects for the customer station and collections to store them. Now I can declare the loop counter random and processing time variables that we will use, and these will generate the results for each of our simulation runs. So I have Dim lStCntr, that will be station counter, as Long. Then Dim lCustIDCntr also as Long. All of the numerical variables that I'll use here, with one exception, will be long integers. Then I'll have Dim lStaTime as Long.
>
> **[4:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=274)** And then finally, we will have a single precision numerical value, so this will have a decimal component and that will be for our random values. So Dim and then I use sng as the prefix for a single precision decimal number. S, for me, usually means string as opposed to str, so I use sng to make sure it's clear. So I have sngRand as Single. Now we can declare a variable to store the number of stations and this won't make such a difference in this rather simple procedure that we are putting together, but later on, it will allow us to have more flexibility and use information stored in a worksheet as opposed to hard coded in the VBA code. And so this will be the count of the number of stations, so Dim lNbrStas as Long.
>
> **[5:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/declare-variables-used-in-the-simulation?u=76281980&t=340)** Next, assign a value for the number of stations, and this is where we will draw the number from a worksheet cell. So that will be lNbrStas and that again, is the variable that we declared above, and this will come from the SimSetup worksheet, so it'll be Worksheets using the worksheets collection, and the name will be SimSetup, that's in double quotes, then a period, and the property we'll use as range because we're looking at a specific cell, and then within parentheses and double quotes, that will be ("B2").Value, and now we can initialize the customer counter variable. Ah, I forgot to type a right parentheses there. Okay, that's good. And now I can initialize the customer identification number counter variable because we will give them an increasing number starting at one as we go along. So that would be lCustIDCntr = 1, so that's where we will start. And to make sure that my code at least runs, even though we won't see any output, I will press F5 and we didn't get an error, so that means that even though everything might not be exactly the way we want it, at least we don't have any errors going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Microsoft Excel|Excel]] (2)
> **Code Identifiers:** lcustidcntr (2), lnbrstas (2), objc (1), objs (1), lstcntr (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** vba (3), f11 (1)
> **Definitions:** is a  (1), means that (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Define the Customers class and add a customer](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=0)** - [Instructor] In this course of simulations, we're modeling the flow of customers through a sandwich shop. The process has two main elements, customers and stations. And in this movie, I will create collections that will allow us to assign values to the customers that are going through our process. My sample file is Chapter02_03, and you can find it in the Chapter 2 folder of the Exercise Files collection. We're getting closer to using the data in the sim setup worksheet, but we're not quite there yet. There's a bit more that we need to do in [[Microsoft Excel|Excel]] VBA. So I'll press Alt + F11 to move to the Visual Basic Editor. I have the Customers class defined in front. You can go through that if you like, but I will click the Module 1 code window's title bar to bring it to the front so we can add more code. And I will drag the bottom-right corner to increase the size of the code window. I have already declared a lot of variables and those include the customer objects and collections to keep them, loop, counter, and random variables. And then the variable for the number of stations, and also assigning values to the number of stations. Next, I want to create customers and add them to my collections. So I'll click below all of the existing code, but above the end substatement at the end of the subroutine. I'll type a single quote and add the comment,
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=97)** Create Customers collection, then enter to move below that. And I'll say Set Customers equals New collection. And below that, I can add a single customer for this round. So again, single quote, add a single customer for this round. And now I can use the object C objects variable to add a new customer to that collection. So I'll say set objC equal New Customer.
>
> **[2:23](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-customers-class-and-add-a-customer?u=76281980&t=143)** Now having created it, I can add it. So I'll use the customers collections add method to add the object C that I just created to the collection. So that'll be Customers.add, space, objC, which is my object variable. That's good. Now I can assign a customer ID to that customer, and for that I will use the customer ID counter variable that I defined above and assigned the value of one. So Customers. And then in parentheses, I'll indicate the index number and it will just be number one. So that is lCustIDCntr. And then the property is the customer ID number. So CustID equals zero. And that's all I'll do for now. I have created a new customer, added it to the customers collection, and assigned it a customer ID of zero. And even though I won't see any output, I will press F5 to run my code. And I didn't get an error. So I'm not 100% sure that everything is correct, but at least Excel VBA didn't find an error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2)
> **Code Identifiers:** objc (2), lcustidcntr (1)
> **Env Vars:** vba (2), f11 (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Define the Stations class and add stations](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=0)** - [Lecturer] In this course of simulations, we are modeling the flow of customers through a sandwich shop. The process has two main elements, customers and stations. In this movie I will define the stations class and then add stations objects using VBA code. Because each station has properties such as the station ID, average processing time and standard deviation of processing time, I will read those values from the sim setup worksheet. The sample file I'm using is chapter 0204. You can find that in the chapter two folder of the exercise files collection. And I have the data that I will be using for my stations in the sim setup worksheet. I'll be doing most of my work in [[Microsoft Excel|Excel]] VBA. So I'll press Alt F11 to move to the Visual Basic editor. And here I have my code, and I'm going to click on module one, which is the main module I'm working with, and I will increase the size of the window. All the code that we created earlier can stay the same and I will continue below the existing code, but above the end sub-statement. I will note that I have already defined OBJS as a class of station type and I also have stations as a collection. That's where we will put these stations that we create later. So I'll start by adding a comment, create station objects and initialize values.
>
> **[1:40](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=100)** Then I will activate the sim setup worksheet. So it'll be worksheets. And then I'll refer to it by name rather than by index, sim setup. And that's in parentheses and double quotes. Then period and activate. And then I will activate cell B4. So that is a range. Range. And then B4, period, activate. And as a reminder, I'll press Alt F11 and B5 is the mean of station number one. So we'll start at B4 and then read down to B5, B6 and B7, using the offset property. So Alt F11 again. And I'll use a for-next loop to read in the values. So I'll do for and then L-S-T-C-N-T-R, and this variable as my counter. We'll go from one to the number of stations, that's L-N-M-B-R-S-C-A-S. And I have that variable here, which I initialized as type long, and I'm reading the value from cell B2 on the sim setup worksheet. So that was the number of stations. So I have that for the for-next loop. And I'll go down and press tab to move in, and then for a comment I'll add a station
>
> **[3:17](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=197)** and I'll scroll down a bit. So I have... Actually, I'll press enter a number of times so I have a bit more wide space. Okay? So I've added a station and I'll do set OBJS. And again, that's a station object. Equals new C station. So station class. And then we'll add it to the collection. So stations.add OBJS, and enter. Now I can assign the station ID and the mean and standard deviation by reading the values from the sim setup worksheet. So as a comment, assign station ID and read mean and standard deviation from worksheet, and enter and scroll down a bit. So I'll start with stations and then the index will be the number of the station counter. So L-S-T-C-N-T-R. So this will be the value of the counter in the for-next loop, dot STA ID equals, and we'll just give it the list counter number. So L-S-T-C-N-T-R and enter. Now we'll do the mean. So I will copy the first part of the text so I don't have to retype it and paste it in, and that will be STA mean equals activecell.offset,
>
> **[4:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=295)** and then we're going to be moving down a number of rows and moving zero columns to the right for this. So the row offset will be LST counter, comma zero, and then type a right parentheses and then I will copy that entire line of code because we're going to be reusing most of it. Enter. Control V. And then the station standard deviation, which is STA SD, will be the list count or number of rows, and then it will be one column to the right. So again, this code we will read in one line of data, starting at the active cell offset by the list counter, which is one from the sim setup worksheet. Now we'll set the next station property and I'll put in a comment set next STA property. If last station, set next station to minus one. So here I will use an if then statement. So if stations, L-S-T-C-N-T-R, dot station ID, is less than the number of stations, so L-N-M-B-R-S-C-A-S, then, and I'll tab in, the stations, next station will be its own number plus one.
>
> **[6:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=391)** So that will be stations, L-S-T-C-N-T-R, dot next station.
>
> **[6:41](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-the-stations-class-and-add-stations?u=76281980&t=401)** So N-E-X-T-S-T-A equals the current value of the list counter. So L-S-T-C-N-T-R, plus one. So if we're in station one, the next station will be station two. Then we'll use an else statement. So else, stations, and then the station counter. So L-S-T-C-N-T-R, dot next station, equals minus one. So if the station has the same number as the total number of stations, its next station will be minus one. Then we can back out of the code that we've created. So we have if, and then that ends with and if, and we have a for-next loop. So I'll do next. And then as a comment, I'll do L-S-T-C-N-T-R, and I will delete my other lines of code so I don't have quite as much wide space. So what we've done is create a collection of stations and then created a new station for the number of stations defined in our workbook. We read in characteristics, the id, the mean, and the standard deviation, and then use the if then else statement to assign its next station number.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sta (4), f11 (3), objs (3), vba (2), lst (1)
> **Prerequisites:** setup (7)
> **UI Navigation:** scroll down (2), click on (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Add code to calculate and write out times](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=0)** - [Instructor] In the approach to process modeling I'm demonstrating in this course, I use classes to represent business objects such as customers and stations. When you create an instance of a class, you can add that instance to a collection of objects. And in this movie, I will use a For Next loop to move through the objects in the Station's collection to calculate processing of times. I will use other techniques later in this course, but I wanted you to see how For Next works in this situation. My sample file is chapter 02_05, and you can find that in the chapter two folder of the exercise files collection. I don't need to do any work in the sim setup worksheet, so I will press Alt + F11 to move to the visual basic editor. And then I will click the title bar of module one for my code and increase the size of the window. I want to add my code to the bottom of the existing code, just above End Sub, so I will go there. Before I start typing, I will add some line breaks, pressing enter a number of times to give myself a little bit more room. And my comment says that I'm going to step through the stations using a For Next loop. So let's do that. I'm going to use my station counter variable as my counter. So For, l, which is a long, stCntr = 1 to the number of stations, and that is l and Nbrscas. We used that variable before in the previous movie.
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=97)** So enter twice and tab in. I'll start this demonstration by assigning a station number to the first customer in my collection. So Customers, and then index number (1).station, so that's the station they're currently in, equals the station counter variable. So they will be in one the first time. Now I want to generate a random processing time for that customer at that station. So Generate random processing time, and enter. This will be a random decimal number between zero and one, and that is a single precision floating point number. So the variable we use is sngRand, which we declared earlier, and that equals the output of the Rnd function. Then enter. Now I will calculate the station time using the station number, its mean and its standard deviation. So the station time, which is a long StaTime equals Application.Worksheetfunction. And we'll use the inverse of the normal distribution, so Norm_Inv. And Norm.Inv, which is the proper function name returns a value from a distribution.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=190)** You generate a random number between zero and one, so a decimal number like we're doing here. And the output is based on a mean and standard deviation. So the random number will be sngRand, then a comma, and it's based on the second argument, which is the mean of the station, so stations, and then the index we're using is the station counter variable, so StaMean, then a comma. Then I'm reaching the end of my line and I don't want to scroll too far over, so I'll type a space and underscore and a space and then enter. And that allows me to wrap this line of code onto two lines within the module. Then stations, then the station counter variable, which gives the index for the station, then a period and the standard deviation, so StaSD, which is the name of that property. Then a right parentheses, and that line looks good. Now I can write the processing time out to the immediate window. So I'll make a comment for write processing time, and I'll use Debug.Print but I'll add a little bit of extra text so we're not just reading numbers. So Debug.Print, and then we'll start with station followed by a space in double quotes,
>
> **[4:44](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=284)** and then ampersand for concatenation, stations, and then the station counter variable with the station id and followed by a space and time, colon, then a space, double quotes. And then one last thing to add in will be the variable of the time that we calculated before randomly, and that will be lStaTime. Now I want to close the station counter loop, so that will be Next, and then I'll add an inline comment to close the station counter loop, and down. Okay. Close, not Cloe. There we go. So all of my text appears to be correct. I'll press Ctrl + G to open at the immediate window, and I'll drag it up a bit so I can see the values a little bit better. Then I'll click in the body of the subroutine code and press F5 to run. And there I have the results. So the station time for station one was 20 ticks of the clock, or 20 minutes. The second was 10, and station three was 16. So it appears that my code is successfully generating the values that I need
>
> **[6:18](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-calculate-and-write-out-times?u=76281980&t=378)** and I can move on to the next step.

> [!info]- Semantic Content
>
> **Code Identifiers:** sngrand (2), stcntr (1), lstatime (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** f11 (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### [Delete unneeded objects](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/delete-unneeded-objects?u=76281980&t=0)** - [Instructor] After you run a [[Simulation]] or have written any other code that uses objects, you should delete the objects from memory within your sub-routine. [[Microsoft Excel|Excel]] has good [[Memory Management]] routines that usually free up your system resources after your code stops running, but it's still good practice to remove the objects when you're done with them, and I will show you how to do that in this movie. My sample file is chapter 0206, and you can find it in the chapter two folder of the Exercise Files collection. Everything I need to do will be in the Visual Basic Editor, so I'll press Alt F11 to move there, and then I will click the title bar of the module one code module where I will perform my edits. Releasing memory by setting objects to nothing is usually the last thing that you do. So I will scroll all the way down to the bottom of the code and click above end sub and actually give myself a little bit of white space. I'll put a comment in for what I'm doing, so single quote, set collections to nothing to free up memory, then enter. Now I will use the keyword nothing for my customers and stations collections. So set customers equal nothing, and then below that set stations equal nothing. And there we go.
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

#### [Run the simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=0)** - [Instructor] So far in this chapter, you have created a [[Simulation]] that takes information about a series of stations within a business process, such as a sandwich shop that makes food to order and applied that information to discover how long customers will spend within the system. In this movie, we will run the simulation a couple of times to see its results. My sample file is chapter 0207, and you can find it in the chapter two folder of the exercise files collection. I don't need to do anything in the sim setup worksheet, so I'll press ALT+F11 to move to the Visual Basic editor, and then I will click the title bar of the module one code module and then I'll just expand a little bit so the contents are easier to read, although we won't do any editing. The output will be written to the immediate window, which is below, and if you don't see it, you can press Ctrl+G to display it. So I can hide it and then press Ctrl+G to display it again. To run my code, I will click inside of the main test sub-routine, so the insertion point is clicking within it, and then press F5 to run it and we'll do it a few times. So I'll do F5 and we get times of 20, 10, and 16, then F5 again, 16, 8, and 19 and F5 again, so we have 9, 12, and 19 and one more time and it scrolled down, so we have 20, 5, and 14.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25122475?u=76281980&t=93)** So we're generating random values in sets of three as we expected, and we have a good base to go forward with our simulation of the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3)
> **Env Vars:** alt (1), f11 (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Adapt the code for multiple runs](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=0)** - [Instructor] In the previous movie, we ran a [[Simulation]] that calculated the time a customer would spend at each station of a sandwich shop. The code we created only allowed for a single run, and even though we ran it multiple times by ourselves, it's much easier to do that in code. So in this movie, I will show you how to add a loop to your simulation code that lets you run multiple simulations so you get more data to analyze. My sample file is chapter 0208, and you can find it in the chapter two folder of the exercise files collection. I want to make the number of runs easily visible for anyone who uses the workbook, so I'm going to put the number of runs in the Sim Setup worksheet. So in cell D2, I will type a label for the number of runs. So I'll do a hashtag for number of runs, then I'll click A2. Then on the home tab of the ribbon, click the format painter button and then click D2. Then in cell E2 I will type in the number of runs and I'll just do two, that will make sure that the code operates as required. That's all we need to do here. So I'll press Alt F11 to move to the visual basic editor and then display the module one code module by clicking its title bar. And then I will increase the size of that code window. Now I can define a variable for my loop counter
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=95)** and also the number of runs. So I'll do that here under the declare loop counter and other variables comment. So give myself a new line and I will dim L run counter, as long, and then I will do the same for the number of runs. So dim L NMBR runs as long and it doesn't matter how you spell it, as long as it's consistent. Now I need to put in the Forex loop that will run through the simulation the number of times indicated on the Sim Setup worksheet. So I will scroll down and we'll start just above where we step through the number of stations using a Fornex loop. So I will give myself some white space between the next and the comment. So first I will read in the number of runs. So I'll add a comment define the number of runs, and that will come from the Sim Setup worksheet. So I will activate that worksheet, so worksheets rather than with an index number. I'll use its name in parentheses and double quotes, period activate for that method. And then LNMBR runs equals the value from E2 of the active worksheet.
>
> **[3:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=192)** So range E2 again double quotes and parentheses period value. Directly below that I will start the for next loop by typing four. So two runs or rather press enter twice. And then as a comment start the outer loop for customers up to L number of runs, enter, then the four statement. So four L run counter equals 1 to L number runs NMBR RUNS. There we go. Now I can close out the next loop. So I will scroll down and after this next, which is actually for the station counter, I'll type next. And then as an inline comment I'll say LNMBR runs. So there we go. I have added the code that will let us read the number of runs from the Sim Setup worksheet and then output it here within our module one code module. To make sure that works I will run it, and as a reminder, the output will go to the immediate window because we're using debug dot print.
>
> **[4:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/adapt-the-code-for-multiple-runs?u=76281980&t=285)** I already have the immediate window open, but if you don't see it, for example here, you can press Ctrl G to open it. Now I will click back up in my subroutine and press F5 to run, and I get two runs through the entire process. And if I press it again, I get two more, and again two more. So it looks like my code is working properly up to this point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3)
> **Env Vars:** nmbr (2), lnmbr (2), f11 (1), runs (1)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** setup (4)
> **UI Navigation:** scroll down (2), go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Adding a Ticker to Track Time

[↑ Back to Table of Contents](#table-of-contents)

#### [Define process flow and programming goals](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/define-process-flow-and-programming-goals?u=76281980&t=0)** - [Instructor] In the previous chapter, you created a [[Simulation]] that generated random ties for customers moving through a business process. In this chapter, we will make the simulation more realistic by adding a timer or ticker that updates the status of every object within the system with every tick of the clock. We'll start by creating an outline, using "for... next" and "if... then" statements. Then in a later movie, we will add functionality to those statements, and then write out the results of the simulation using Debug.Print. So sending the output to the immediate window. And then finally we will run the simulation. The procedure we describe here is substantially more complex than just estimating times, but it's a helpful step toward modeling your system more accurately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Create an outline of IF and For Next statements](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=0)** - [Instructor] In this module, you will add a timer or a ticker to your [[Simulation]], and update each object status with each tick of the clock. For example, suppose a customer will stay at station one until tick 20. With each tick, you must update the clock and check the customer status against that value. If the time is less than 20 ticks, the customer stays at the station. On the 20th tick, the customer must be moved to the next station and the statuses of both the customer and the stations updated appropriately. I'll start the process using the sample file named Chapter 0302, which you can find in the chapter three folder of the Exercise Files collection. I won't do anything with the information on the sim setup worksheet. So I'll press Alt F11 to move to the visual basic editor. And here, I have my ticker routine code module, and I'll close the immediate window so I have a bit more room to work. So I'll move that up and resize. I have code to initialize all of my variables and to define customers and stations. So I will scroll down to the bottom and start working below the create the ticker and internal constructs starting here comment. As a demonstration, I will set the ticker to a For-loop going from one to 85. So I will have For. And then Lticker, which is a variable that I declared above,
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=94)** equals 1 to 85. So there will be a total of 85 counts. Then within that loop, I will have a For Each loop that works with each object in the customer's collection. And if we look up here, you see that I have two customers created. So this will be For Each OBJC and customers. And to make this easier to follow, I will add my Next statements for those two For statements. So I'll have Next, OBJC, and then go down, and Next, Lticker. And again, I am adding the name of the variable as a comment even though it's not necessary, but it helps me keep track of which For-loop I'm in. Now within the internal For Next loop, where we're working with each of the individual customers, we will check where the customer is, and that will be If objc.station is not equal to -1. And remember that -1 indicates that a customer has made it through the process successfully. So if they're still in the process, then we do a second If to check if the customer IsIdle.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=190)** So objc.IsIdle, so that's the IsIdle property equals one. Then, and this is the last of the If statements for the moment. So If stations, specifically the station that the customer wants to move to, so objc.next station, .station IsIdle equal zero. So in other words, if the station is not idle, then we add one to the customer idle time if the next station is busy. And I will add a comment for that here. So add one to customer idle time if the next station is busy. And because I'm just creating an outline here, I won't actually put in the code to do that. We'll do that in the next movie. Then Else, and three lines of comments. So move customer to next station. Set these stations idle property to zero. Then another comment, calculate the customer's processing time, set customer idle to zero.
>
> **[4:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=286)** And finally, another comment set start time property to current ticker value. And again, these are just notes for what I want to do, and I will enter the code later. So that is all I do here. So I will end the If statement here, then enter and go back. Now we need to add an ElseIf statement to what to do if the customer is not idle. So ElseIf objc.endtime equals Lticker, then, and here I will add more comments. Again, we'll put in the actual working code in a moment. So comment set station to idle, set customer to idle and set the customer's current station to its next station property value. So if it's currently in station one, its next station would be station two. So the current station would be updated. Now I can end this If statement. And finally attached to the If statement at top we can have an Else statement.
>
> **[6:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/create-an-outline-of-if-and-for-next-statements?u=76281980&t=379)** So that's Else stations and then the number of stations, so L and then BRSTAS .stationIsIdle equals one. And I'll just do an inline comment that notes that sets last station to idle when a customer leaves. Okay, so that is a lot. I have my Else statement there and I'll do End If, and again that attaches to the If statement up here. Actually I will backspace here so that it is at the proper level. And then that is the end of the For Next loop. So I'll do Next and then name the variable, even though I don't have to, I'll ticker. So this movie has been somewhat abstract, and what I've done is add code that provides an outline for what I want to happen for every tick of the clock. In the next movie, we will add the code that actually runs and provide a bit more detail that will hopefully make this easier to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1)
> **Env Vars:** objc (2), f11 (1), brstas (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), in other words (1)
> **Cross-References:** in the next (2)
> **Code Identifiers:** stationisidle (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)

#### [Add instructions within the framework](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=0)** - [Instructor] In the previous movie, we added the framework of if and for next statements that we will use to manage the movement of customers through a series of stations in a business process. In this movie, we will fill in the detailed instructions for the if statements, so the process will move customers to the next available station at the appropriate tick of the clock. My sample file is Chapter 0303. And that's an [[Microsoft Excel|Excel]] workbook that you can find in the chapter three folder of the exercise files collection. We won't do anything with the data on the SIM setup worksheet, so I will press Alt F11. To move to the visual basic editor. And I will. Increase the size. Of the code window. I'm going to scroll down. Almost all the way to the bottom. And we will start from where I have the L ticker variable. Which is the clock that we used to track actions within our simulated process. So I have my comments that tell me where to add items, so the first action will be to add one to customer idle time if the next station is busy. So that will be OBJC, and again that is a customer object. Dot IdleTime. Equals. Itself plus one. So it would be JC.IdleTime. Plus one. And for the purposes of this demonstration,
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=93)** I will send the output of this instruction to the immediate window using debug.print. So enter, then debug.print. And I'll provide a little extra text. So in double quotes, "customer". Then a space, then double quotes, "ampersand," and then the customer ID. So that'll be JC.CustomerID. Ampersand. Then double quotes and a space, "has been idle for." Then a space and double quote. "Ampersand objc.IdleTime." And it just fits, but I will resize my window. There we go. Now we'll go down under the Ls. Where we have the instructions for what to add if the next station is not idle. So I'll type in objc.Station. And we will set that to what it was previously as NextStation. So objc.NextStation. So we are moving it from its current station to the next one. Then we need to set its current station. Idle variable to zero, so that'll be stations. Objc.Station. And closed parentheses dot StaIsIdle equals zero. So it is no longer idle, indicating it has a customer in it.
>
> **[3:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=187)** And then we will update the next station value for the customer to the value of the next station. for the station that just entered. So if the customer just went to station two. Then we update its station property to two. And then station two's next station property is three. So that's what gets read in here. So that will be objc.NextStation. Equals. Stations. Objc.Station. Dot N-E-X-T-S-T-A. Now we need to calculate the amount of time that the customer will spend in the station it just moved to. So that will be a random number. So I have sngRand equals Rnd. Then open and close parentheses. And we will use that based on the station's mean, and also its standard deviation of service time. So that will be objc.EndTime equals LTicker which is the current value on the clock. Plus, and we'll use norm.inverse like we did before. Application.WorksheetFunction.Norm_inv.
>
> **[4:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=276)** Then left parentheses, and the first argument will be sndRand, then a comma. Then a space and an underscore followed by another space so we can wrap around to the next line. Then we'll have the station's mean processing time, so stations. And we're referring to the station that the customer is currently in, so we use the customer station property. Then right parentheses. Dot StaMean, so that's the average processing time. Then a comma, and the final argument is the standard deviation. So I will copy this. And then the name of the property is S-T-A-S-D. And a right parentheses. I think that's right. It's a lot of typing, so we'll see how it goes. And then I also want to set the customer's idle property to zero because it is actually in a station. So objc.IsIdle. Equals zero. And finally, we will set the customer's start time in the station to the current value on the clock. So enter, and objc.StartTime equals the value of the ticker variable. So that's all we have for this segment, and then I'll move down, and we will do the last one. And this is what happens if the customer's end time, that is the time it's supposed to leave a station,
>
> **[6:12](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-instructions-within-the-framework?u=76281980&t=372)** is the actual time on the clock. So this is how we move it along to the next station or out of the process. So go below the comment that I have here. And I'll say stations. And we're referring to the customer's Customer ID. Dot station is idle. Equals one. We'll then set the customer's is idle property to one because it has left the previous station. So objc.IsIdle. Equals one. And then we'll set its current station to the next station. And this is the same type of update that we did before. So objc.Station. Equals objc.NextStation. And we can handle the other updates later in other parts of the code. And I think you can see why I broke the outline and the detail code into two separate movies. There's a lot going on. And what I would encourage you to do is to take the time and run through this code one line at a time. I wouldn't necessarily go through all 85 ticks of the clock that we have set for the ticker variable. Instead, just do one or two. And see how everything flows throughout the code. You'll see where it goes, you'll see what gets updated, and if you want you can add some debug.print statements of your own to see how the variables change over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sim (1), f11 (1), objc (1)
> **CLI Commands:** find (1), ls (1)
> **Code Identifiers:** sngrand (1), sndrand (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### [Add code to write out simulation results](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=0)** - [Instructor] Adding a ticker or a clock to a [[Simulation]] lets you track the state of each customer and station precisely as the simulation moves along. We have almost created a version of the simulation that works with the ticker, but we still need to add a line of code to write out the state of the simulation at each step. As before, I'll use Debug.Print to write those results to the immediate window. My sample file is Chapter03_04, and you can find it in the chapter three folder of the exercise files collection. I don't need to work with anything on the sim setup worksheet, so I'll press Alt + F11, and that takes me to the Visual Basic Editor, and I've already opened the ticker routine code module. I need to add my code toward the bottom of what exists here, so I will scroll down and I have a comment that tells me where I need to add the code. And there will just be a single statement, and that will be Debug.Print. And then I'm going to add in some text. So in double quotes, "I'm a Customer." I'll use a capital C, Customer, then a space, then double quotes and an ampersand so I can concatenate text and values, the customer objects customer id, then an ampersand, then double quotes and a space, " and I'm in station"
>
> **[1:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results?u=76281980&t=98)** then a space and double quotes. And I'll do a space and underscore, and then another space so that I can wrap to a second line. And so I am concatenating the customer station number, so that'll be objC.Station. Wrong one. Station &, double quotes and a space, " at time", then a space double quote, and then a final & lTicker, so the value of the ticker variable. And I won't worry about putting a period at the end. So now when we run through this simulation, we should see a couple of customers. And at each step, after they have gone through one tick of the clock, we should get their status.

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

#### [Run the simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=0)** - [Instructor] In this chapter, you have added code to your [[Simulation]] module to manage a business process by creating a timer. At each click of the timer or tick of the clock, your VBA code updates the status of each customer and station, moving customers through stations at the appropriate times. In this movie, you will run the simulation and take a look at the results that have been sent to the immediate window. The sample file is Chapter 0305, and you can find that in the Chapter Three folder of the Exercise Files collection. We don't need to work with any of the data on the Sim Setup worksheet directly. So I'll press Alt + F11 to move to the Visual Basic Editor. And here is my code module. I'll click in the body of the subroutine. And I don't see the immediate window displayed, so I'll press Ctrl + G to display it. And there it is at the bottom. So, now, I can click back in the body of the subroutine and press F5 to run my code and hopefully I'll get updates on each of the customer statuses as they move along. So, I'll press F5. And there we go. So I will drag the immediate window up so we can see all the results. So I have created two customers and they both started at Time One. So I see that I am Customer One and I'm in Station One at Time One. And Customer Two is waiting
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation?u=76281980&t=93)** 'cause it's also waiting for Station One, and it has been idle and remains idle until 20. Now I see that I have Customer Two and I'm in Station One at Time 21. And then, Customer One has updated its status so that it is in Station Two, starting at Time 22. So there is a transition. Then, Customer One moves to Station Three at Time 34. And then, Customer Two moves to Station Two at Time 40, and Customer Two then moves to Station Three at Time 49. I did not add any code to indicate when the customers left the process, but that is something that we can do in future iterations of our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2)
> **Env Vars:** vba (1), f11 (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Adding Customers during the Simulation

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe process flow and programming goals](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25122472?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25122472?u=76281980&t=0)** - [Instructor] In chapter three, we added a timer to our [[Simulation]] so we could track the movements of two customers through three stations. In this chapter, we will extend that model to include multiple customers added throughout the simulation, and we will calculate their arrival times using the Poisson distribution. We will move the customer generation code inside of the timer, and we will write the results of the simulation to a worksheet. Then we will run the simulation, and if necessary, fix a mistake that can lead to customers getting stuck inside of the simulation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (5)
> **Speakers:** - [instructor] (1)

#### [Use the Poisson distribution to calculate arrival times](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=0)** - [Instructor] When you model the amount of time between events such as customers entering a store or cars arriving at a toll booth, you use the Poisson distribution from [[Statistics]] to calculate the inter-arrival times. There's no easy way to calculate Poisson distribution results using a single [[Microsoft Excel|Excel]] function. But in this movie, I'll show you a straightforward way to get the values you need using a couple of worksheet formulas that work together. My sample file is Chapter04_02, and that's an Excel workbook you can find in the chapter four folder of the exercise files collection. I'm on the sim setup worksheet of this workbook and I have new information over on the right under the Poisson Data heading. The Poisson distribution only has one parameter, and that is the average or the mean. That's also referred to as lambda. So, in this case, I have assumed that we have an average of 20 ticks of the clock between customer arrivals. Now, I need to create a lookup table that will allow me to generate values. So, I'll click in cell M2 and here I'll create my first formula. And I have values going from one, so one tick of the clock going all the way up to 53. And when you have a mean of 20, that gives you the range. Also, note that I do not have a value of zero, and that's because I don't want two customers arriving at the same time.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=93)** So, in cell M2, I'll type equal and I will create my Poisson distribution. So, I have P-O-I-S-S-O-N.D-I-S-T, and yes, that is a French [[Microsoft Word|word]], la Poisson for fish, but it was a gentleman's name. So, we have POISSON.DIST and the value that we're going to look up is in L2, then a comma, and then the average or the mean is in cell J2, and I don't want that changing as we copy the formula down. So, I press F4 to make an absolute reference, then a comma. And I do want it to be a cumulative distribution function, so I want to know the [[Probability]] of getting one or below, not just one exactly. So, I'll do, true, (keyboard clicking) right parentheses and enter, and I get a very small number. But I can copy it down for each of the values in column L. So, I've clicked cell M2, and I'll double click the fill handle and I get my other values filled in there. And as I scroll down, you see that at 53 we get a value of one. So, that means that our random lookup that we put in, in a moment, will give us a value and we don't have to worry about getting an error when we generate those numbers. Now, in cell K2 I will create a lookup formula that will use the table we just created to generate random arrival times. So, I'll go back up and clicking K2, type equal,
>
> **[3:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=187)** and we'll use the XLOOKUP function. The lookup value will be a random decimal number between zero and one, so that is the rand function, then a comma. The lookup array will be M2 to M54. Those are the values that we generated using the Poisson distribution, then a comma. The value that we return will be from column L, so that would be L2 to L54, then a comma. We don't need to worry if a value is not found because we have all of our possibilities from zero to one covered. So, I'll type of comma. And the reason that we know that we will incorporate all values is that we'll go for an exact match or the next larger item. So, if we get a number that is below the very small number that refers to the value of one, then we'll get one. And if we get anything between our second largest value and one at the end, then we will get 53 minutes or 53 ticks of the clock. So, I'll type a one and then a right parentheses and enter. And we get a value of 16, which means that the random number generated must have been greater than this number and less than this number. So, I'll press F9 a couple of times. So, we get 25. That number is between 0.84 and about 0.88, and F9 again for 18, close to the average. And there we go.
>
> **[4:39](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/use-the-poisson-distribution-to-calculate-arrival-times?u=76281980&t=279)** With these random number generations and formulas in place, we can now generate inter-arrival times for the customers coming into our store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Statistics]] (1), [[Microsoft Word|Word]] (1), [[Probability]] (1)
> **Env Vars:** poisson (1), dist (1), xlookup (1), m54 (1), l54 (1)
> **Definitions:** means that (2), is a  (1), refers to (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 0.84 (1), 0.88 (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)

#### [Add customers to the simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=0)** - [Instructor] Now that we have the structure in place to calculate each customer's arrival time, with the first starting at time one, we can add the code to create new customers when the ticker, which is the simulations internal clock, reaches that arrival time. In this movie, I will add the customer generation code inside of the ticker loop, and calculate the arrival time for the next customer as well. My sample file is chapter 0403, and that is a macro enabled workbook that you can find in the chapter four folder of the exercise files collection. On the SIM setup worksheet, I have the Poisson Data lookup that I created earlier, and we are going to use that inside of our [[Microsoft Excel|Excel]] VBA code to generate random customer arrival times. You'll probably see a different number than 20, because, it's a random number. And, I'll just press F nine a few times to recalculate, so we get 11, which is pretty small, 18, closer to average, back to 11, and we could keep going. It appears that everything works as it should, so let's switch over to the Visual Basic editor and add code to generate our customers. I'll press alt F 11 to move to the Visual Basic editor, and I am working in the main code module. All of these statements at the top are initializations, so we're declaring variables, and also, creating our customer collections and station collection.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=95)** So I will drag down, after all of that and here we get some new code. So first is I have a note that says that the total ticks for each run will be 2,880. So that means that each tick represents 10 seconds in an eight hour day. So if a customer had an inter arrival time of six, that is six six of the clock, then they would appear 60 seconds or one minute after the previous customer. I initialize the create next at variable to one, so the first customer arrives at clock tick number one, and the customer counter is one as well. And the next step is to activate the SIM setup worksheet to make sure that we can look up the values that we need later, so now we can start the [[Simulation]]. So I have created a new outside loop for L ticker to go from one to L total ticks. And the first thing we do is check if a customer is due to be created on this tick, if not, this portion of the code does nothing. So this is an if then statement. So if L ticker equals L, create next at then, and and I will go down and end the end if, so end if. And tab in to give myself some white space.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=188)** Then we will create a new customer using the set keyword. So set OBJ customer equals new C customer, so a new object of the customer class. And we will add that customer to the customer's collection, so that'll be customers dot add, the variable that we just created, so OBJ customer. And I have a capital O there, ah, it got corrected down to a lowercase O, that's good. And now I can initialize the customer's properties. So I'll do customers and we will use the customer ID counter variable, which is of type long. So that's L-C-U-S-T ID counter. And this is the variable that we have here. So customers with the ID counter dot customer ID, so C-U-S-T ID, and we'll set that to the variable. So we have L-C-U-S-T, ID, C-N-T-R. For the next properties, I will copy everything up to the period, then go down below and paste in what I had. The start time will equal one and enter, paste again.
>
> **[4:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=287)** The next station equals one, paste again. Then whether the customer is idle or not will be set to true or one, so is idle equals one, and then their total idle time, so idle time equals zero. And then finally, we will record when the customer entered the simulation, that is, entered the process with the entered property. So entered equals, and this will be the value of the ticker, so L ticker. Now we need to generate a new random value in cell K two. And I'll flip back to the SIM setup worksheet by pressing alt F 11. And in K two we are generating random inter arrival times. So again, F nine will generate that. So F nine is the keyboard shortcut to recalculate a worksheet, but we need to use it in VBA, and there's a command for that. So alt F 11, and that is active sheet dot calculate, then enter. So now we can set the variable, recording when we will create our next customer. And again, that's checked here in the for next loop, to see whether a customer should be created on that particular tick of the clock.
>
> **[6:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-customers-to-the-simulation?u=76281980&t=379)** So L, create next at, equals the current value of that variable, so L create next at, plus, and we'll just read in the value from sell K two on the active worksheet. So active sheet range, (keyboard clinking) then in parenthesis and double quotes, sell K two dot value. And the last thing to do is to increment the customer ID counter. So L customer ID counter equals itself, and I'll just copy it, plus one. And there we go, we have now generated a random time for a customer to enter the simulation, and we have also incremented the customer ID counter. So when one customer comes in, the identification number will go up by one for the next customer to enter the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** sim (3), vba (2), obj (2)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Prerequisites:** setup (3)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Add code to write out simulation results](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=0)** - [Instructor] Now that we have the code in place to run the [[Simulation]], we can write its output to the Results worksheet. Debug.print works well for testing and for smaller situations, but when you start generating hundreds of values as output, you really do need to use a worksheet to manage and summarize that data. In this movie, I will show you how to write values from object properties to a worksheet. My sample file is Chapter 04_04, and you can find it in the Chapter 4 folder of the Exercise Files collection. I am currently on the SimSetup worksheet, but because we're going to be writing it to the Results worksheet, let's take a look there. So I'll click Results, and here I have a table. So I have the headers for the customer ID, the time they entered the system, left the system, their current station, and again, this is for each tick of the clock, whether they're idle, total idle time, their time in the system. And from that, we can calculate the percent of time that they were idle. So there I have all of that information. And I'll click cell A1 again. I'll move to the Visual Basic Editor by pressing Alt F11. And here is my code. And I will increase the size of the code window. And I want to write out the values at the end of each step of the simulation. So I will scroll down to the bottom. And just above End Sub, I have notes to myself, comments,
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=94)** to write the results to the Results worksheet and to step through each customer record and write property values. So that is a handy reminder. First, I will ensure that the Results worksheet is active and also that cell A1 at the top-left corner of the worksheet is active, 'cause we will use those references throughout the [[Representational State Transfer (REST)|rest]] of this code. So I will do Worksheets, and then Results, rather than an index number, because index numbers can change if worksheets are moved within a workbook. So I have Results.Activate, then Enter. And I will also activate cell A1. So ActiveSheet.Range, and then A1, parentheses, double quotes, .activate. So now I'm sure that the worksheet we want to use is active and we have also activated the cell that we'll base our calculations on. So I'll scroll down. And now we can step through each customer record and write property values. So I'll give myself a little bit of white space to work with here. To step through each member of a collection, we can use the foreach loop. So I'll do For Each objC in Customers. And I will use the down arrow to move down, and I'll say Next, and then objC as a comment.
>
> **[3:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=191)** And again, that's just a personal preference, you absolutely do not have to do that. And now we will write out each of the values that we have. So I have ActiveCell. So ActiveCell's A1. And we'll use this offset property to calculate where to write the value. And that will be based off of the customer ID. So objC.CustomerID, comma, so that's the row offset. So we start with customer ID number one. So we will move down one row. And the customer offset to start will be zero because we'll be writing in column A. Then write parentheses, and we're setting the value of that cell equal to the Customer ID. So objC.CustomerID. Now, I'll press Enter a few times, and copy the line that I just typed, 'cause that will save us a lot of time. Enter, then Control V to paste, then we're staying on the same row, so the customer ID remains the same, but we're moving one column to the right. So we're changing the column offset to one, and this will be the entered property. Then press Enter, we'll move two columns over. And we'll have Left, Control V,
>
> **[4:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-code-to-write-out-simulation-results-25119867?u=76281980&t=286)** three columns. And next is the station. And I won't comment as I go along, I'll just change to and offset a column offset of four, whether they are idle, so the IsIdle property. Then Control V. Five over. And then IdleTime. And I'll scroll down to make sure that I already added the next statement to close that out. That looks good. So I'll just delete a little bit of white space to close that up. And we are now ready to run the simulation and see the results on the Results worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** objc (4)
> **UI Navigation:** scroll down (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** f11 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Run the simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=0)** - [Instructor] Okay, we have done a lot of work in this chapter. We have extended the clock-based [[Simulation]] that we created in chapter 3 to add new customers as the simulation runs. Those customers arrival times were calculated using the Poisson distribution, and their time at each station calculated using the normal distribution. In this movie, I will show you how to run your simulation and correct an aspect of station timing that I originally overlooked. The sample file that I will use is Chapter04_05, and you can find it in the Chapter04 folder of the Exercise Files collection. I'm currently on the SimSetup worksheet, which has information about the simulation setup, and also, to generate customer interarrival times. And then we'll write our results out to the Results worksheet. And I have added a couple of formulas to this particular worksheet. In column G, I have the time that a customer has spent in the system, and then also calculating the percentage of idle time. So we have their idle time divided by their time in the system, and that will give us the percentage. And because my code will activate the worksheets and specific cells that I need to make everything run properly, I don't need to click back at cell A1 or change the worksheet. So now, I'll press Alt + F11 to move to the Visual Basic Editor. And I'll drag down to make the code window larger.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=95)** Then I'll click inside of the subroutine and press F5 to run. Okay, it ran. So now, I'm going to press Alt + F11 again. And here we are on the Results worksheet, and I can see that we have what looked like good results. So I have the first customer that entered the system at time 1 and left at 46. And I can tell that they left, because they have a current station of -1. And we have small bits of idle time at the start in various small percentages, and then we have a large percentage, but it drops back down. And so, I'll scroll down. And for customer number 42, I noticed that something has happened. So let me see what happens here in column C. What am I measuring there? The time they left the system. Okay, so they never left the system, but they never advanced either, they never advanced beyond station 2. And of course, none of the customers behind them did either. So, let's go back to the SimSetup worksheet and see what station 2 has. Okay, so we have a mean value of 10, ah, and I see a standard deviation of 3. A standard deviation of 3 is a fairly high standard deviation in relation to the mean. So what that indicates
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=190)** is that it's possible and in fact probable that we would get a negative value, a negative time that a customer spent at a station. And of course, that would throw off the logic of the simulation that we created. So let's press Alt + F11 to move back to the Visual Basic Editor and add a bit of error correction code to handle that circumstance. And I inserted a comment on where I needed to make the fix, so I'll scroll down. There we go. So we have to make sure that the customer spends at least one tick in a station. So I'll click there. And the code that we use is an if-then statement on a single line. So if the customer object's end time is less than or equal to the ticker time, so lTicker, then we'll just increment it by one, so objC.EndTime = lTicker + 1.
>
> **[4:19](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=259)** Okay, that looks good. And I'll go back to the worksheets by pressing Alt + F11, and then go to the Results worksheet. And I will select the cells from A3 to H3. Then press Ctrl + Shift + down arrow to select everything else, and then press Delete. So this leaves my formulas here. So I have customer ID number 1, and this value I know will be overwritten. So now, I'll press Alt + F11 to move back to the Visual Basic Editor, and then click inside the subroutine and press F5, it's run. And I'll press Alt + F11 to move back. And there I have the results. And for the time in system, I'll just select cells G2 and H2, and double click the fill handle. So those are copied down, so I have all of the calculations that I need. And so, we have some significant idle time at the start, and then it smooths out, but then goes up again, then moves down. And this time, we get past customer number 42, we don't have a negative time. And in fact, as we go through the day, we see a bit of an increase and decrease in idle percentage. And then I have a couple of values at the end that I can delete and work with inside of my values. And there we see it, we have our simulation run,
>
> **[5:55](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25118883?u=76281980&t=355)** and we have written the results out to the Results worksheet. And from there, we can perform analysis on what just occurred.

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

#### [Describe process flow and programming goals](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals-25123393?u=76281980&t=0)** - [Instructor] In Chapter 4, we extended our clock base [[Simulation]] to add multiple customers while the simulation ran. In this movie, we will add three more extensions to the model. The first will be allowing each station to handle multiple customers at the same time. The second will be to add more stations, we currently have three, but we can go to as many as we want. And, finally, we will implement rework loops. A rework loop is when a customer needs to go through a particular process again. So the work that they received at Station 2 perhaps wasn't what they needed, so they need to go back through. This is a common occurrence in business, and it's important that you'd be able to handle it in your simulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Add capacity to each station](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=0)** - [Instructor] Very few business processes can only handle one customer at a time. Even in a smaller shop, a manager or other employee could step away from what they were doing and help when the line is long. In this movie, I will show you the changes you need to make to the stations class and your code to model station capacities above one. My sample file is chapter 0502, and that's an [[Microsoft Excel|Excel]] workbook that you can find in the Chapter 5 folder of the exercise files collection. I've made a couple of changes to the data on the SimSetup worksheet. Specifically, I have added a capacity column so we know how many customers each station can serve at one time. And then I've also changed the mean. So we've been using a mean of 20 ticks of the clock before, and I've changed it to 15 just so we get some different numbers. So with those changes in mind, I'll switch over to the Visual Basic editor by pressing Alt + F11. And here I have made some changes to the station class in the CStation code module, and those are these two properties here. I have the capacity and also serving. Capacity is the number of customers that a station can serve at the same time. And serving is the number that they actually have at the station at the moment. So if you have one customer in a station that is capable of serving two, then capacity will be two and serving will be one. With that in mind, I can switch over
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=97)** to the Module2 code module and scroll down until I see the location where I want to make the first change. And I have added a comment here to make the first change. The first line asks if a station is idle, and if that value is zero, then it does some things below that. So we're asking if the station is engaged. And again, we're assuming at the moment it can only handle one at a time. So the change I need to make is to check the serving property and see if it is equal to the station's capacity. So we have If Stations and then NextSta.serving. So we're looking at the next station for a customer and we're checking if the value equals not zero, but the capacity of the next station. So that will be stations, and then objC.NextSta, so the customer's NextSta.capacity, and everything else remains the same. So instead of seeing if the station is idle or not, we are checking to see if it is at capacity. And if it is, that's equivalent to the station idle property being set to zero, so we would add one idle time or wait time to the customer. However, if the next station is available,
>
> **[3:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=191)** then we want to change its serving property so that it is serving one more customer. So the customer that we just said can move on to the next station. So instead of using the station as idle property for the next station that the customer will move to, we'll use the serving property that we worked with before. And instead of being equal to zero, we will set it to its current value plus one. So I will copy this code here, which is the object property we want to change. So serving plus one. The third change we want to make, which is down here, asks what to do when a customer is done at a station. In other words, when the ticker equals the time that they are scheduled to leave the station. So for that, instead of saying the station is idle, again, we want to set the serving property to its current value minus one. So whereas before we added a customer, here we are taking it away. So I'll copy that property reference. So we have the number of customers that the station is serving and subtracting one. And finally, below, we can indicate that a station is idle. But as before, in this case, we're assuming that a customer just left the station so we want to subtract one. And that is similar to the code that we had before,
>
> **[4:46](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-capacity-to-each-station?u=76281980&t=286)** except we're looking at a station that is indicated by the current loop variable. So that is the number of stations. So I'll have stations and then LNumberStas.Serving. And then we are going to subtract one from that value. So I'll copy the property reference Station Serving minus one. Okay, that looks good. Those are the four changes that I needed to make. And in the next movie we can run the code and see what it does to our results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** make (6), find (1)
> **Code Identifiers:** objc (1)
> **Env Vars:** f11 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** in other words (1)

#### [Run the simulation with added station capacity](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=0)** - [Instructor] In the previous movie, we added properties to the station class and code to the main subroutine to give each station the ability to handle multiple customers at a time. In this movie, we will run the [[Simulation]] and see how increasing capacity copes with shorter and shorter times between customer arrivals. My sample file is Chapter 05_03, and that is a macro-enabled [[Microsoft Excel|Excel]] workbook that you can find in the Chapter 5 folder of the Exercise Files collection. I made a couple of changes to the SimSetup workbook. Specifically I added a capacity column, so now each station has a capacity. So Station 1 can handle two customers at once, Station 2 can still only do one, but Station 3 can also do two. And I also changed the mean for the poisson distribution, and we have our lookup table here. And the maximum value is 44. All right, with all of that in mind, I'll press Alt-F11 to move to the Visual Basic editor. And here I have code Module2 displayed. And I will make the code window a bit larger. And now I can click inside of the code and run it so we can see our results. So I've clicked inside the AdditionalCapacity subroutine, and I'll press F5. Takes a few seconds to run, and there we go. Now I'll press Alt-F11. And here we have the Results worksheet with the results written out.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=93)** And if you remember back before, we had some significant idle time percentages, over 20% or 30% in some cases. So let's scroll down and see what we have here. The largest I've seen so far was about 9%. Okay, and later in the day, after customer 45, we have over 20%. But then this goes down, and I'm seeing a lot of lower numbers, although we do go back up over 20 again as we go further in. But overall, I am seeing very good performance. So while some individuals do have to wait and spend about 25% of their time in the system waiting rather than being served, this is not such a bad result. But now let's see what happens if we change the mean. So I will start from the bottom of the Results,
>
> **[2:31](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=151)** and then I'll scroll up until Cell A3 is selected, and then press Delete. And so that gets rid of all the values, and I started at cell H196. Yours might be different based on the results that you see. All right, so I wanted to change the mean to 10. So I'll do SimSetup and I'll change the mean to 10, and Enter. And when the mean goes down to 10, the maximum value that we will see is 35. And I don't need to worry about deleting any of the other rows because Excel using the XLOOKUP formula will never get to them. So I'll go up, and then press Alt-F11 again, and click inside of the code module, and also specifically within the subroutine, and press F5 to run. And it takes a few seconds to run, and I'll press Alt-F11. And I have my formulas in G2 and H2. So I've selected those cells, and I'll double-click the fill handle to copy the formulas down. And we can see that with the lower interval arrival time, we have significant idle time or at least idle time percentage for customers within the system. And that's even with increase in capacity. So I have idle time there, and I'll just scroll down. And again, these numbers are high and they don't seem to be going back down to zero, at least not quickly, although they do here.
>
> **[4:06](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=246)** And so yeah, we're starting to see customers that are spending almost half of their time in the system waiting. And exactly half there, 55 and 60. So increasing the rate at which customers arrive, and in this case, that was going from 15 down to 10, we get very high idle times. But now let's go back to the SimSetup worksheet, and change the capacity for Station 2 to two. So that way we will hopefully be able to serve more customers and get them through more quickly. I'll leave everything else the same. So go back to the Results worksheet. And again, I will delete everything below row 1. So I'll just drag down. Have our values there. And then I'll go to the Visual Basic editor, pressing Alt-F11, making sure the insertion point is within the subroutine. Press F5. And it runs again. That looks good. And Alt-F11. And here, I see that we're getting some idle time, but with luck and good planning, the idle time percentages will be lower. So we do have zero idle time at the start, and then it goes up a little bit. However, we are not seeing nearly the idle time percentages that we did previously.
>
> **[5:38](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-added-station-capacity?u=76281980&t=338)** Whereas before, customers were spending about half of their time in the system waiting, in this case, even though the percentages do go up for a while, we can see that they do go back down as the system catches up. So by changing the capacity of specific stations and also working with the arrival time, you can generate interesting scenarios about your business process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Simulation]] (1)
> **Env Vars:** f11 (6), h196 (1), xlookup (1)
> **UI Navigation:** scroll down (2), scroll up (1), double-click (1), go to (1)
> **Cross-References:** go back to (2), later in (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Add more stations to the simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=0)** - [Instructor] Up until now, all of our examples have assumed a business process with three stations. In this movie, I will show you how to add more stations to the process. And the good news is that all we really need to do is add information about the station's average processing time, standard deviation and capacity. The code we've built can bring in the data with no problem. My sample file is chapter 0504, and you can find it in the chapter five folder of the exercise files collection. This is the same data that we used in the previous movie with one change, and that is for station number three. The next station is four instead of minus one. And again, minus one is the next station value we are using to indicate that a customer has successfully completed the process and has left the business. So let's go ahead and add in information for stations four and five. So click cell A8, and this will be station number four. And then the mean processing time, the average is 12, standard deviation is two, the next station is five, and the capacity is one. Now for the station number five, which I'll type in A9, the mean is 14. Standard deviation is four. Next is minus one indicating that when they leave, they are outside the process and the capacity is also two. Another thing we need to do is to change the number of stations value in B2.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=95)** And there are two ways that you could do that. The first just make the change, but the second would be to drive the number of stations from the value in cell B2. So I'll click in cell A5 and type equal, and we'll use the new sequence function. If you have an older version of [[Microsoft Excel|Excel]], sequence will not be available to you. But if you have a current version of [[Microsoft 365]], then it is. So we have the sequence and the number of rows will be the value in B2, then a comma. The number of columns we can leave blank. The start value will be one and the step will be one. You don't have to type those values in directly if you want, because one and one for start and step are the default values. But I'll put them in here just so we have them visible in case you haven't used sequence before. So with that formula in place, I'll press enter. Ah, I get a spill error and that's because I had values already in A6 through A9. So I'll delete. And there I have my formula in A5 and stations one through five and cells A5 through A9. And if I were to change the value in B2 to 6, then I would get a row for station six and I would be expected to add in that data.
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-more-stations-to-the-simulation?u=76281980&t=190)** But in this case, it's just five so I'll press ctrl + Z to undo. And there I have everything that I need. And having the new parameters for stations four and five allows us to model our updated process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Microsoft 365]] (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Run the simulation with additional stations](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=0)** - [Instructor] In the previous movie, we added stations four and five to a process that only had three stations before. We didn't have to modify the code to read in data about the stations, but we did need to let the model know how many to expect. And in this movie, we'll run the [[Simulation]] and see how increasing the number of stations affects our results. My sample file is Chapter 0505, and that is a macro-enabled [[Microsoft Excel|Excel]] workbook you can find in the Chapter 5 folder of the Exercise Files Collection. To review the changes we made in the previous movie, I increased the number of stations to five, and then so that I had more flexibility, I put a sequence formula in cell A5 to give me the numbers one through five, and the formula appears in the screen. If you have an older version of Excel, you might not have the sequence function, and in that case, you just want to make sure that you have an entry for exactly as many stations as you have in B2. With these changes in place, let's go to the Visual Basic Editor by pressing Alt F11, and then go to Code Module 2. I don't need to make any changes to the code, so I won't change the size of the code window. I've clicked inside of the Add More Stations subroutine, and I'll press F5 to run it. Takes a few seconds to run. I have more stations, so it takes a little bit longer than previously. And now I can press Alt F11 and move back to the Results workbook.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-additional-stations?u=76281980&t=95)** So here I have customers that were added. And again, even though I have more stations, I'm seeing similar idle percentage results to what I had before. Of course, the time and system and total idle time will tend to go up because they have more jumps to go through in the system. So I will scroll down, and we do get one fairly high idle time there, over 40%. However, a lot of the values are actually fairly reasonable. And if they do go up, then they come back down toward the end of the day. So there we go, we have one, two, three, four customers that are in the system at the end of the day. But after we lock the door and don't allow any new customers in, we can take care of them, and then go home for the evening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Simulation]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Env Vars:** f11 (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Add rework loops to stations](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=0)** - [Instructor] As hard as we try to provide good customer service and quality manufacturing, the truth is there will be times when we need to do something over. The extra time could be due to poor communication or bad luck, but the result is the same. If a customer needs to go through a particular process a second time, it is called a rework loop. The same is true for manufacturing, where if you have a piece of equipment that didn't come out exactly right, you will need to rework it. The sample file I will use to incorporate the possibility of rework loops into our model is chapter 0506, and that's an [[Microsoft Excel|Excel]] workbook you can find in the chapter five folder of the exercise files collection. Everything on the sim setup worksheet is the same, however, I have made an addition to the results worksheet. So I'll click that tab and here I have my table, tracking each customer through the system. But over on the left, I have the customer ID, the station number, and the rework time. So anytime a customer needs to go through a station a second time or third, that will be recorded here. Now, let's switch over to the visual basic editor, so we can add code to incorporate the possibility of a rework loop. So Alt + F11, and I'm in the module two code module and toward the end of my code, I have a section set aside for the possibility of a rework loop. And here it is and I'll actually increase the size
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=95)** or width of the window. So we'll check for rework loop, which will be implemented as a longer stay in the station. We'll generate them randomly, so SNG rand, which is our single precision decimal number, will be equal to the output of the Rnd function. And next, we check if a rework loop has happened. So if sngRand is less than or equal to 0.05, so one out of every 20 times, then we need to copy in, or rather generate the rework time. And this is a variable that I'd cleared separately up above. So lReworktime equals and then we'll use the code from above to generate a random time in the station. And fortunately, on the screen, I have the code that I need to use, which is here. So I'll just wait or go past the compile error. And so, I've selected Application.WorksheetFunction.norm underscore inv, and everything that follows that. So it's selected, press Control + C to copy, and then I've added it to the lReworktime assignment line. So there we go. Yep, that's exactly what I need. And then I will add that to the customer's end time in the station. So objC.endtime equals the current end time.
>
> **[3:13](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=193)** So objC.endtime, again plus lReworktime. There we go. To avoid errors and to avoid customers getting stuck, we need to ensure that they spend at least one tick in the rework loop. So I'll add that as comment. Actually, I will copy the text from above 'cause it's very similar. There we go, so I've copied that. And Control + V, make sure the customer spends at least one tick in a station. And I'll go over. There we go. So I have object C endtime is lesser or equal to L ticker. Then the end time is the ticker plus one. That looks good. Now, we can write the rework time result out to the results worksheet with the new section that I created. So go below here, go back, and add a comment after a single quote saying, write out the rework time result. I'll make sure the results worksheet is activated, so worksheets, because we're working with an element of the collection then results in double quotes and parentheses that activate. So the correct worksheet will be activated. Then I want to activate cell J1. So that will be ActiveSheet.Range.
>
> **[4:52](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=292)** And then the range, we're going to name it is J1.activate. And then we can write out our three values. So ActiveCell.Offset, then left parentheses, and then we will go down the number of rows of the rework counter which starts at one. So I have lReworkCounter, comma, and then zero. Zero will be the number of columns we're going to move to the right, then right parentheses dot value, so we're setting the value of that cell to the customer ID. So objC customer ID. Then I will copy everything up to the bit before the customer ID property identifier, then Control + V. We'll go over one column and the property will write is the current station. So that is where the rework loop occurred. Then Enter, Control + V will go over two columns, and we'll write out the rework time. And that is lReworkTime. And finally, we will increment the rework counter. So that is lRework counter, CNTR, equals itself. So lRework counter plus one, and then we're in an if statement.
>
> **[6:24](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-rework-loops-to-stations?u=76281980&t=384)** So we need to close it, so and if. All right, that looks good. We have created a rework loop if required. They will occur 5% of the time. And if they do, we use the time for the current station and add that to the ticker for when the customer leaves. And we make a record of what has occurred in the separate section that we created and added it to the results worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Code Identifiers:** lreworktime (4), objc (3), lrework (2), sngrand (1), lreworkcounter (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** f11 (1), sng (1), cntr (1)
> **Definitions:** is called (1), is a  (1)
> **Versions:** 0.05 (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### [Run the simulation with rework loops](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=0)** - [Instructor] In the previous movie, we added the possibility that a customer would need to spend more time at a station than planned. We changed our code to allow a 5% possibility that the customer would spend another randomly generated time period at the station. In this movie, we'll run the [[Simulation]] and see how adding rework loops to the simulation affects our results. My sample file is chapter 05_07, and you can find it in the chapter five folder of the Exercise Files collection. I haven't made any changes to the sim setup worksheet, however, I did add a new section to results. So I'll click there and over on the right, I am tracking the rework time. So I have the customer IDs, the station where the rework loop occurred, and then the rework time, so the amount of time that it took for the customer to go through the station a second time. All right, with all that in place, I'll press Alt F11 to move to the Visual Basic Editor. And here I have my subroutine for the rework loops. I won't review the code. Instead, I'll just press F5 to run and see how the simulation goes. There we go, it has run, and I'll press Alt F11 to move back to the worksheets. And here I am. So I have my customers over on the left, and I'll just scroll down through the idle time. And I'm not seeing anything horrible. I've got 37% here, which isn't great.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-rework-loops?u=76281980&t=93)** They spent more than a third of their time in the system waiting to be served. And then 28%, almost 30% again. And overall these values are not too bad. And then I have some customers down at the end who were not served, or at least we didn't finish them before we started accepting new customers. So I'll go back up and take a look at the rework loops. And remember, this happened with a 5% [[Probability]]. So I have customer number five at station three that took four extra minutes or four ticks of the clock. And let's see if anyone got caught twice. Yes, customer 108 happened twice. So they had rework loops at stations two and three, and that appears to be the only customer that had to spend extra time twice. And of course, we don't like to have rework loops, but it is a fact of business that they do happen. And if you want to account for them based on historical data in your simulation, you can do that using the techniques shown here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (4), [[Probability]] (1)
> **Env Vars:** f11 (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 6. Allowing Conditional Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Describe process flow and programming goals](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/describe-process-flow-and-programming-goals?u=76281980&t=0)** - [Presenter] So far in this course, we have worked through simulations that allow customers to work through a process in a straightforward way, but we can add elements of chance to our [[Simulation]] to make it more realistic. For example, we could allow customers to skip some stations. In other words, they don't need the service that is provided there. We can also record probabilities of moving to one station or another, and we can allow supervisors to help to reduce time. Not every employee is capable of helping every customer, so for the more difficult cases, we can have someone who is a supervisor or more experienced step in. And also, we can allow customers to finish the process after closing time. One of the limitations of the simulations we've created before was that customers couldn't make it all the way through before closing time. In this chapter, I will show you how to add code that creates customers until the business closes, but then keep track of the customers once they are there to record the time that they left. Adding each of these elements makes your simulations more realistic and will add a great deal to your analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Allow conditional station paths](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=0)** - [Instructor] In chapter five, we extended our [[Simulation]] to allow for rework loops where a customer spends more than the expected time at a station. In this chapter, we will simulate a related scenario where a customer has a [[Probability]] of moving past the station without having to go through it. My sample file is chapter 0602, and you can find it in the chapter six folder of the exercise files collection. I'm on the Sim Setup worksheet and here I have the previous data for my five stations. However, I have a new column that has the label Probability Must Do. And this is the probability that a customer will have to go through a particular station rather than skip it. And I have done some observations of the business and I know, based on experience, what those values are. I need to express them as numbers rather than percentages. So in F5, I'll type one, and that means that everyone has to go through step one or station one. Then 85% of the people have to go through station two. So that's 0.85. Only about 15% of the people actually need to go through station three, so that'll be 0.15. And then everyone has to go through four and five, so that's one and one. So there are the probabilities expressed as decimal numbers for each of the stations. Now we can switch over to the visual basic editor and now add code to handle these probabilities.
>
> **[1:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=95)** So I'll press ALT F11, and here I will display the station customer definition. So that will be a station class module. And you'll notice that I've added a new variable and that is probability and it is a single precision floating point number. And then down at the bottom of the definition, I have the get and let methods. So now let's switch over to our main code module where we have the simulation and add the code that will see if a customer can skip or not. So I'll scroll down to where I have my comment. There we go. So add conditional processing logic here, and this is to the right of an L statement and we need to keep everything else below that. All we're doing is seeing if we need to essentially reset the next station property for the customer. And it will be an if then statement. So if R and D, so a random single precision decimal number, between zero and one is greater than a station's probability property. So you have stations and we're looking at the station that the customer will be moving to. So next station dot probability then,
>
> **[3:07](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-conditional-station-paths?u=76281980&t=187)** and I'll add my end if at the bottom and go back up. Then the station for the customer. So object C dot station equals the next station plus one, so OBJC dot next station plus one. So this version of the code does not determine if a customer skips directly to a specific station, instead we're just asking if they skip the next station. And of course it can happen more than once. So we have plus one and then otherwise we will set it to the next station. So that will be an L statement. And then OBJC dot station equals OBJC next station. And I've already ended my and if, and I've covered both possibilities, whether they can skip or whether they can't. And the next station will be written and I do need to keep this statement that assigns the customer station property, updating it from its next station property because if this code doesn't run because they can't skip, then that statement updating it as well would not run. So I need to run it either here or here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (6), [[Simulation]] (2)
> **Env Vars:** objc (3), alt (1), f11 (1)
> **Versions:** 0.85 (1), 0.15 (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### [Run the simulation](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=0)** - [Instructor] In this chapter, we have modified an existing [[Simulation]] to give a [[Probability]] that customers will have to do a station instead of everyone having to do all of them. The sample file that I'm using is Chapter 06_03, and you can find that in the Chapter 6 folder of the Exercise Files collection. The specific changes we made are to the SimSetup worksheet, and here I have a new column for probability must do, and that is the probability a customer has to go through a particular station. So 85% of the time, customers will need to go through Station 2, but only 15% of the time, they will have to go through Station 3. So let's run a simulation and see what kind of results that we get. The results will be tabulated on the Results worksheet, and we're especially interested in the amount of time that customers are idle within the system. Our goal is to minimize that. So I'll press Alt-F11 to move to the Visual Basic editor. And then I'll change the window to the Module2 code module, which I'll expand just to make it easier to read, even though we won't actually be doing any edits. So I'll click in the subroutine, and then press F5. And after a moment, we will have our result. There we go. So I'll press Alt F11 to move back to the worksheet. And I see the idle times over on the right. So we're starting out, early on,
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=94)** we have some times where customers are idle more than 25% of the time. And as we scroll down, we see another batch where they are at about 25%, 27. Hopefully it won't get too much higher than that. 27 again. 26, 34, so that's not great. 32 and 33. And basically, once we have idle time, that is customers waiting, because a customer takes a long time to go through a particular station, then others tend to have to wait as well. So there are those results. Now, I will delete the table rows, and I am using an [[Microsoft Excel|Excel]] table. So I've selected the table row, and I'll press Control-Shift, down arrow. So there I have the remaining table rows. I'll move the mouse pointer over the edge of a row so that it is a right-pointing black arrow, then right-click, then point to Delete and Table Rows. And we're back up to just the one row that we had before. And now I'll go to the SimSetup worksheet by clicking its tab, and see if there's anything that I can change. Well, the first thing that I will note is that I have two people helping 15% of the customers. So what I can do is change the capacity of Station 3 to one in cell E7, then Enter.
>
> **[3:09](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-25125096?u=76281980&t=189)** And add that person to Station 4 in E8, so that now I have more capacity in the station where I know customers will be coming through. I don't have any summary operations in the table on the Results worksheet, but hopefully, just by looking at it, we'll see some improvement. So I'll press Alt-F11 to move to the Visual Basic editor, make sure the insertion point is flashing in the subroutine, and press F5. And then, once again, Excel will run through the simulation. And I'll press Alt-F11 to move to the Results worksheet. And I can already see that my change made a big difference. The idle times at the start are much lower. So I will scroll down. There's someone who had to spend about 25% of the time waiting. However, and another one, but it is obvious that the change we made has greatly decreased the amount of time that people are waiting and not being served within the system. So always look at how to manage your resources and assign them within a process. You might be able to speed things up dramatically with a very small change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Probability]] (3), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** f11 (4)
> **UI Navigation:** scroll down (2), right-click (1), go to (1)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Allow other employees to help the process](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=0)** - [Instructor] So far in this course, we have assumed that every customer service agent can handle every situation. That is not always the case. Some situations require more experienced people to help. You can think of level one or level two [[Technical Support]]. In this movie, I will show you how to add code so that supervisors can take on cases a junior employee would take too long to solve. My sample file is Chapter 06-04, and you can find it in the Chapter 6 folder of the Exercise Files collection. I've made a couple of changes on the worksheets and also in [[Microsoft Excel|Excel]] VBA. So let's start with the worksheet. First thing that I've done on the sim setup worksheet is to change the number of stations to four. I only have three that customers will need to go through, but I've created the fourth one so that the customers have a place to go within the [[Simulation]] when they're being helped by a supervisor. Also, if we look at results, you'll see that I have added a calculation for the average percentage idle, and we are going to use that when we run the simulation later to see how adding supervisors helps, or doesn't, with the time spent in the system. We're not going to run the simulation in this movie, so I won't change the results table, but I will press Alt+F11 to move to the Visual Basic Editor so we can see the changes that have been made. In the Visual Basic Editor, in the MainCode module,
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=97)** there are a couple of changes that I made. The first is indicated here, with a single quote followed by three star signs, or asterisks, and I use that to indicate where I made the change. I turned off screen updating, and that's because we can get flashing sometimes when a worksheet is displayed and then we move to another worksheet. So if we turn off screen updating at the start, none of those updates will happen until the code is finished running. Later, if I scroll down, I see that I have a variable to count supervisor calls. I didn't end up using it, but I declared it here and I wanted to show you one way to track what's going on. And then, if we scroll down further, we get into the part where we check each customer's status. And here is where we determine whether a customer service time is greater than or equal to 25 ticks on the clock. And if it is, we send that customer to station four for separate processing. So we set the current station to idle, that is, their station is idle property goes to one. And then the customer's station property goes to four. Also, I'm assuming that the supervisor works more quickly, so we'll set the time to either 15, 12, or 10 ticks. And that won't be done randomly, we're just going to do it when we run. We implement those instructions by checking
>
> **[3:10](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=190)** if the end time is greater than or equal to the current ticker value plus 25. So if we're at 100, and I see a value of 125 or more, then the following code would be run. The supervisor count goes up by one, and then the station that the customer was at is set to idle. So that value goes to one. The customer's current station is set to four. And then the end time for the customer at the current station is set to the ticker value plus 15. So instead of going 25 or more, we assume the supervisor can work more quickly because of their experience, and we set it to 15. And by making just those changes and not adding anything else, we're able to use the remainder of the code to determine when it is time for a customer to move along. And another thing is that because we check each customer's status every time through the loop, and I'll go back up to the top to show that. So I'll scroll back down. That's all the initialization. There we go. So for each tick in TotalTicks, we check if a customer is due to be created. And then below that, we start checking each customer's status. So for every customer in Customers, we check if their station is minus one, that is they're done. And if it is, then we skip them and move to the next customer. And from there, we see if the customer is idle,
>
> **[4:43](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/allow-other-employees-to-help-the-process?u=76281980&t=283)** and if it is, we try to find out what to do with them to move to the next station, and whether or not they need to wait, and all the other code runs as before. So, with this in mind, we can go forward and run the simulation and see how the results compare when we have supervisors helping, and when we don't.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (4), [[Technical Support]] (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** vba (1), f11 (1)
> **UI Navigation:** scroll down (2)
> **Prerequisites:** setup (1), initialization (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Run the simulation with helpers](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=0)** - [Instructor] In the previous movie, we reviewed code that allowed supervisors or more experienced employees to take over when a customer's processing time was estimated to be 25 ticks or more. In this movie, we will run the [[Simulation]] with and without our changes to see how it affects average idle time. We will also change the time it takes a supervisor to help the customers with more challenging cases to see how that affects the results. My sample file is chapter 0605, and you can find it in the chapter six folder of the exercise files collection. As a reminder on SIM setup, I have increased the number of stations to four, and we have the mean of standard deviation and next station for the first three. And number four is a placeholder where customers will go when they're working with a supervisor. And we're assuming that we have enough supervisors on hand to take care of all capacity. So we don't need to worry about the mean standard deviation or next because we assume a set time for each supervisor, whether 15, 12, or 10 ticks of the clock. On the results worksheet, I have the start of my table and then also calculate the average idle time based on the values in the percent idle column. And then we'll record those values here in columns M through P, and then calculate the average. Okay, let's press ALT + F11 to move to the Visual Basic editor.
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=94)** And in the main code module, if I scroll down, I currently have the supervisor code that checks if a service time is greater than or equal to 25 ticks, in which case we would implement the supervisor loop. I want to run a number of samples without that turned on. So I have that code commented out. Everything's ready to go. So I'll press F5 for the first run, then alt + F11 to move, and I have a percent idle time of 13.54%. So in M2, I'll type 13.54 and enter. Now I will delete the table rows by selecting the table row for customer ID number two, and then control shift down arrow to select all the way down to the end of the table. And then right click the edge of one of the table rows, point to delete and click table rows. And we are back to an almost empty table that can be overwritten without having any values from a previous simulation still there. I need to press ALT + F11 then F5. Alt + F11 and 18.81. That's a high value. And then I'll do the same thing to delete the rows. And there we go. Same process as before.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=188)** Alt + F11, F5, and ALT + F11, 7.75. So that was much better performance. Then I will again delete the values, and this is the sort of repetitive thing that you would definitely want to write a macro for. But we have enough VBA code already in this class, so I decided not to do it, and I'm doing it by hand. So this takes longer than it might otherwise, but I think it's worth seeing the process. So we're there. Alt + F11, F5 to run. And this will be our last run without supervisors. So Alt + F11 and 16.98. And you can see the variance or variation in those values with a low of 7.75% and a high of 18.81. Right, so that's the last one we'll do without supervisors. Now we'll do the same thing with supervisors, and assuming that each of them takes 15 ticks of the clock to help a customer. So Alt + F11, oh, excuse me, I'll go back and delete the table rows below one. Table rows. There we go. And ALT + F11. And now I will remove the comment indicators,
>
> **[4:35](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=275)** the single quotes or apostrophes from the supervisor code so that now each time a supervisor helps, it will take 15 ticks of the clock instead of 25 or more. And we'll see how that affects idle time. So I'll press F5, Alt + F11, we get 6.3% and then I'll delete the rows using the same procedure as before. There we are ALT + F11, F5, ALT + F11, and at 12.35%. There we go. And two more. So again, deleting the rows.
>
> **[5:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=334)** F5 to run. 8.9 and, one more. Oh, excuse me. I should delete all these. There we go. Control + shift + enter. Delete table rows. Okay, ALT + F11 and F5, and ALT + F11 and 10.56. So that is a pretty good result. Oh, excuse me, I forgot to do control + shift + down arrow, then do that and delete table rows. There we go. Alt + F11, F5. But this time actually, before I press F5, I'm going to change the end time to 12. So it's 12. F5, Alt + F11, get 5.45, enter.
>
> **[6:47](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=407)** ALT + F11, go back, 6.1. Control + shift + down arrow. Delete table rows. 7.49. So it looks like that if we can get the average helping time down to 12, that we'll see a significant reduction in average percent idle. So there we go. And I will delete one more time,
>
> **[7:26](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=446)** ALT + F11 and F5, 10.75%. So I'm not surprised that it went up a little bit 'cause those values honestly did seem a little bit low for my trial runs. Okay, now we'll do four more at 10, and select the row. Control + shift + down arrow, delete the rows. ALT + F11, and I will edit the 12 to 10. It'd be interesting to see how this works 'cause I actually did not do this during my preparation, so I am as interested to see whether it helps or not as you are. So F5 to run, and ALT + F11, 7.86. Enter. Then delete the rows. So ALT + F11, F5 to run ALT + F11, 8.87. Delete. So control + shift + down arrow, delete, table rows, ALT + F11, F5 to run. ALT + F11, 9.86. And okay, last one.
>
> **[8:59](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=539)** And then we'll calculate the averages. So again, deleting the rows, Control + shift + down, enter, and delete the rows. ALT + F11, F5. ALT + F11, 9.93. There we go. And now we can calculate our averages. So I will select M6 through P6 and do equal average. Then I will select M2 to M5, type a right parentheses, and then press control + enter, which will enter the same formula into each of the selected cells. But because I have relative references, it will be M2 to M5, N2 to N5, O2 to O5 and P2 to P5. So control + enter, and we get averages of 14.27%, 9.53, 7.45, and 9.13.
>
> **[9:57](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/run-the-simulation-with-helpers?u=76281980&t=597)** So it appears from a very small number of trials that without supervisors, individuals spend about 14.25% of their time idle within the system. If we allow supervisors to help, we can reduce that by about 5% and reduce it even further if they're able to help in 12 minutes. And then we probably push customers into the system more quickly than the other stations can handle them at 10 minutes, so I'm not surprised the time went up a bit. So the question you need to make as a planner is is it worth having supervisors move away from the other things that they're doing to help? And if so, what level of performance should we look for? 'Cause the question of an individual who comes to you for help being idle for 15 about percent of the time that they're in your system might not be a significant barrier. However, if time is of the essence, then it might be worth having supervisors help to reduce the idle time from 14% to about 9.5%.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2)
> **Env Vars:** f11 (27), alt (18), sim (1), vba (1)
> **Versions:** 13.54 (2), 18.81 (2), 7.75 (2), 16.98 (1), 6.3 (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Definitions:** is a  (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)

#### [Add time for customers to complete the process](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=0)** - [Instructor] As we have run our simulations throughout this course, you probably noticed that some customers don't finish the process before we run out of time on the clock. In this movie, I will show you how to add new customers until the end of normal business hours and then allow the existing customers to complete the process. My sample file is chapter 0606 and you can find it in the chapter six folder of the exercise files collection. I'm working with the same data that I had before for the [[Simulation]]. So I have four stations. Although, in this case, I have turned off the code to allow supervisors to help, but I didn't change the outline just in case I wanted to add it later. On the results worksheet, I have an existing results table and I'll scroll down to the bottom to show you what it looks like when customers do not complete the process. So we have them at their current station of three, or one in this case rather than minus one, indicating that they have not left the system. And also, the left system value is set to zero and that indicates that they haven't left the system so the property value was not updated. So rather than have that happen, in this movie, I will show you how to add code to prevent it and allow them time to run through. So I'll press control home to move up and then I'll select the entire row for customer ID two in my results table.
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=96)** Then shift control down arrow to select down to the bottom of the table. Then right-click at the left edge of one of the rows in the table and then point to delete and click table rows. So there we go. Now, I'll press alt F11 to move to the visual basic editor. And here I have my update on tick code module, subroutine. So as I scroll down, you'll see that there are a couple of new variables that I've created. The first is the maximum time at which a customer can be created. So that is last customer at as a long integer, and that value is 2,880, so that is eight hours, assuming a ten second increment. So six increments per minute and then 360 per hour multiplied by eight. Then when we scroll down, I have changed the value for total ticks from 2,880, which is eight hours to 3,600, and this represents 10 seconds in an eight-hour day plus two hours. So this is 10 hours total, giving our customers plenty of time to finish the process. And then down below, I added an extra check. So instead of just seeing whether it is time to create a new customer using the create next at variable,
>
> **[3:11](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/add-time-for-customers-to-complete-the-process?u=76281980&t=191)** I have a second test, asking if we are early enough to create another customer. So less than or equal to 2,880. And then below, if the ticker value is less than or equal to 2,880, then we can calculate the create next value. And I have a second end if to close out that extra bit of logic. So now, I'll press F5 to run. It takes a moment, then alt F11 to move to the results worksheet and I'll scroll down. And hopefully, our last customers will have made it through. And in fact they have. So I have customers that came in as late as tick number 2,854, and the last customer left at 2,908, which is after our original cutoff time of 2,880. So our simulation has allowed customers to enter up until closing time and then tracked how long it took to serve them after that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2)
> **UI Navigation:** scroll down (4), select the (1), right-click (1)
> **Env Vars:** f11 (2)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 7. Analyzing Simulation Results

[↑ Back to Table of Contents](#table-of-contents)

#### [Read the simulation results as written](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=0)** - [Instructor] After you run a [[Simulation]] or a set of simulations, you should take some time to examine your results to gain insights into your system. The code we've created in this course writes out information about each customer's progress through a series of stations in a process, but we could just as easily have written out information about stations, and the time they spend idle and occupied. In this movie, I will show you how to gain insights into your operation by looking over simulations results as written. My sample file is Chapter 0701, and you can find it in the chapter seven folder of the exercise files collection. I have already run the simulation, so I will change to the results worksheet, and here I have my [[Microsoft Excel|Excel]] table. And what I can do is just scroll through the data, and see if there's anything that catches my attention. For example, the first thing that I see looking down to the right is that this customer, customer number 16, had an idle time of 36.17%. However, when I look at the amount of time they spent in the system, I see that it was 47 ticks of the clock. So that means they were idle 17 of those, so they only spent 30 ticks of the clock being serviced. And that's not bad. What it means is that they were done unusually early at at least one of their stations, and that means that they had to wait for the next person to be served.
>
> **[1:32](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/read-the-simulation-results-as-written?u=76281980&t=92)** So that's not so bad. I'm also very happy to see that most of the idle times are below 10, and in fact, there are quite a few of them that are at zero. And so if I scroll down, I see a nice long run of zero or very low idle times. And then as we move down, I see idle times in the 17 to 25%. And again, that's not particularly concerning, and keep scrolling down. I see clusters of people who are idle, but again, not bad as a percentage goes, and keeps scrolling down, long runs of zero, another increase, and we get to the bottom where I had a couple of customers who did not quite make it out of the simulation. So overall, just looking at the data, this seems to be a pretty good run, and if we are able to keep up this level of performance with perhaps a supervisor stepping in here or there, if someone has a very long processing time, then the performance that I see here is very acceptable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 36.17 (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Manually reset the results cells](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=0)** - [Narrator] To be effective, a [[Simulation]] will use random numbers to generate its results. That means every time you run it, you should get a different output. In this movie, I will show you how to delete records from a results table so that you can record a new set and perform a new analysis. My sample file is chapter 07_02, and you can find it in the chapter 7 folder of the exercise files collection. I have already run the simulation, so I will go to the results worksheet. And here I have the output from a previous simulation. However, I want to delete what I currently have here, and there are a couple of ways that I could do that. If I were working with regular worksheet rows, in other words, not an [[Microsoft Excel|Excel]] table, then I could select the rows in the worksheet that I wanted to delete. And I would do that by moving the mouse pointer over, in this case, row three, and the header at the left side is highlighted in green. I clicked, and that selected the entire row. And then I can scroll down to the last row where I have data written, and that's row 145. Hold down the shift key and select all of the rows. From there, I can right click any of these selected row headers and click delete, and that deletes all of the rows from the worksheet. If I want to only delete rows from an Excel table, then I can do that from within the table itself. So I'll press Ctrl + Z to undo the deletion,
>
> **[1:37](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/manually-reset-the-results-cells?u=76281980&t=97)** and then click inside the Excel table. And you know you're in an Excel table because when you click one of the cells, the table design contextual tab appears on the ribbon. So to select a complete row within an Excel table, you move your mouse pointer over the left edge of the table row. So note I'm not over the row header. Instead, I am inside of the table. And here I will left click. That selects the entire row, and now I can select all rows down to the end of the table by pressing control + shift + down arrow. Then with the mouse pointer still inside the table and showing as a right pointing black arrow, I'll right click, point to delete, and then click table rows. And that gets rid of all the table rows. And I can rerun the simulation, and the results will appear inside of my table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Simulation]] (4)
> **UI Navigation:** go to (1), select the (1), scroll down (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** in other words (1)
> **Speakers:** - [narrator] (1)

#### [Summarize results using the Total row](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]] tables are useful and versatile tools. It's a shame that more users aren't aware of them. One of the elements of Excel tables that I use a lot is the total row. You can display a total row in your table and use it to summarize values from a column, such as finding the sum of all processing times or the average values in a column. In this movie, I will show you how to add the total row and change it so it summarizes your table data. My sample file is chapter 07_03, and you can find it in the chapter seven folder of the exercise files collection. I've already run the [[Simulation]], so I will move to the results worksheet. And here I have an Excel table that shows my data. To display the total row at the bottom, I click any cell within the body of the Excel table and then go up to the Table Design, contextual tab on the ribbon, and then in the Table Style options group, check the Total Row box, and that displays the total row. You can define totals and that can be any calculation for each of the columns. By default, Excel creates a calculation for the bottom right. That is the right most column, 'cause that's typically where data is stored. And here I have the total of all of the percentages that customers were idle. In this case, a total, or sum, isn't the best way to summarize this data. Instead, it would be to find an average.
>
> **[1:33](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=93)** So I will click the cell, and this is in H143. Although, you can just go to the cell where you see the calculation. And after you click that, you see a down arrow to the right. That's for a list. So I'll click that, and I can set the calculation to None. Any of the ones that are listed here, which are the common ones, or if you want to define your own formula, you can do that by selecting Other Functions. In this case, I'll click Average, and we get an average idle time of 3.54%, which is not that bad. If you want to find the sum of individual's time in the system, that is for all customers that were part of the simulation, then click to the left for Time in System. Click its down arrow, and then click Sum. So they were idle, or rather they were in the system, for a total of 6,655 ticks of the clock. And if you want to add up all of the idle time, you can also have a sum there. So I'll click the cell in the total row under Idle Time. Click this down arrow, click Sum, and we get a total of 243. Or if you wanted to find the maximum idle time, you could click the same list arrow, click Max, and you see that the maximum idle time within the simulation was 15. When you're done with the total row, you can clear the Total Row check box and it disappears.
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/summarize-results-using-the-total-row?u=76281980&t=188)** And before you close your workbook, you can check the Total Row box again, and your previous measures come back. But that only happens if you have not closed the workbook without saving your changes. So as long as you are still working in your workbook and it hasn't been too long in the past, you can redisplay the total row and see the calculations that you created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Simulation]] (3)
> **CLI Commands:** find (4)
> **Env Vars:** h143 (1)
> **Versions:** 3.54 (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Sort and filter Excel table values](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=0)** - [Instructor] When you send your [[Simulation]]'s output to an [[Microsoft Excel|Excel]] table, you gain the ability to analyze your results in many ways. Two of the techniques you can use on your data are sorting and filtering. Sorting lets you change the order of your data based on the values in one or more columns while filtering lets you concentrate on just the results that matter to you. In this movie, I'll show you how to sort and filter using an Excel table's filter errors. My sample file is chapter 07_04, and you can find it in the chapter seven folder of the Exercise Files collection. I've already run a simulation in this workbook, so I'll switch to the Results worksheet. And here I have my table. One way to sort this data in an interesting way would be to discover the highest and lowest time in the system. So I would sort Time in System here in column G from its largest value to its smallest. So I'll click that column's filter arrow, and then at the top I can sort from largest to smallest. So I'll click there and I have my values. So it appears that the longest time in the system was 66 and we get below 60 pretty quickly, and then we start to have fairly common values in the mid fifties. And then if I scroll down to the bottom, I see that the shortest period that anyone spent in the system was 30 ticks of the clock. So they got very lucky on all
>
> **[1:36](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/sort-and-filter-excel-table-values?u=76281980&t=96)** of their randomly generated processing times, and in fact, they also had no idle time. So now I will scroll back up and if I want to focus only on customers that have time in the system of greater than 55, then I can create a filter. So I'll go back to the Time of System column's filter arrow, and click that, and then point to number filters, and then I will click greater than, and then in the custom auto filter dialogue box, verify that I have is greater than. And in the criteria box next to it, I will type 55. So anything 56 or above will be displayed in the filter. Now click okay. And I have an Excel table that only shows rows for customers with a Time in System of 56 or higher. And when I want to get rid of the filter, then I can go back to Time in System and then click clear filter from the field name. So the filter has been removed. And then if I want to put my data back into the original order, which was by customer ID, then I can go to the customer ID column's filter arrow, and then click sort smallest to largest. And my data is back in its original order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Simulation]] (2)
> **UI Navigation:** switch to (1), scroll down (1), go to (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshoot errors in your code](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=0)** - [Instructor] Creating a [[Simulation]] can be tricky whether you do it in [[Microsoft Excel|Excel]] or in another program or programming language. In this movie, I will describe some of the mistakes that I made while recording this course so you can avoid them in your own work. My sample file is chapter 0705 and you can find it in the chapter seven folder of the exercise files collection. I'm on the sim setup worksheet of the workbook and the first error deals with having a zero inter arrival time for customers. So if you look over on the right, in Poisson data lookup table, you'll see that the first value is zero and it happens with a very low [[Probability]]. But if it does, then the code that I created will break. So rather than have the lowest possible value be zero, we should make it one. So in cell L2, I'll type a one, then in L3, I'll type two and enter. Then I'll select cells L2 and L3, and I will double click the fill handle at the bottom right corner. And I know my mouse pointers in the right place when it changes to a solid black cross. So I'll double click and I get the numbers one through 54. We have one duplicated for the lookup or return values of 53 and 54. But because the formula
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=94)** that we use looks from the top down, we will never see that second one. So the formula will not generate an error and also it's extremely unlikely to happen because we have all these nines up in front of it. So that is how you can avoid having a zero inter arrival time or two customers arrive at exactly the same time. The other errors or considerations are related to VBA. So I'll press alt F11 to move to the visual basic editor. And I have two code modules in this workbook. One I copied from an earlier workbook so that I didn't have to open two separate files. So you can see that second one in the back. But the first one for update on tick is where I had a problem with a zero or negative time spent at a station. So if I scroll down, you can see where we calculate the amount of time that a customer will spend at a station, and that is here. We generated a random decimal value and then we used that along with the inverse of the normal distribution to calculate how long a customer was going to spend at a station. Because the means are fairly low. I believe the lowest one we had was 10, but with a standard deviation of three, it's not uncommon to get zero or a negative value. And what that means is that a customer would be going backwards in time,
>
> **[3:08](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=188)** which of course is not something our simulation can handle. So below that, I ensured that if there were a negative or zero time spent in a station, then the actual time spent would be one. So the end time would be set to the current value of the ticker plus one. Another obvious thing that I did incorrectly, and I should have known this, is not using option explicit. And that is something that you set above the sub in subroutine. So before you declare the subroutine itself. Option explicit forces you to declare a variable using a dim statement before you can refer to it in your code. So what this takes care of is misspellings. That way you don't have values that are blank or zero divide by zero errors and other things that will absolutely drive you crazy. So always use option explicit and declare your variables before you use them in code that is anything more than a few lines long. The final thing I'll mention, and you probably noticed this from earlier in the course, but I've waited till now to show you how to fix it, is related to random number generation. So I'll go to the debug.print code module, and if you didn't move yours to the front, you can go to window and then click debug print. And this is what happens when you have random numbers,
>
> **[4:45](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=285)** but you don't tell Excel VBA to randomize. So if I drag the debug print code module to the top and press CTRL G to display the immediate window, which I will resize to make a little bit larger and run this code by pressing F5, then I get the station time for station one of 20, then 10, then 16, and if I press F5, I get different values. However, remember 20, 10, and 16. So if I close this workbook by pressing alt F11 and then Ctrl W, and I'm not going to save any of my changes and then reopen it by going to file and then chapter 7-05 and alt F11. So I'm back in my main code module, but notice that the immediate window is still there. I'll go to window and click debug print. So I'm back in the debug.print code module and I'll press F5. Actually, I'll make sure that the insertion point is flashing within my main test subroutine and press F5. Then I get 20, 10, 16, and then there was 16, 8, 19. So I'll press F five and I get 16, 8, 19. So you get exactly the same values. How do you fix that? Well, you can do that with a single keyword and I will put that right up at the top under sub main test, and that is randomize.
>
> **[6:20](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/troubleshoot-errors-in-your-code?u=76281980&t=380)** If you type in randomize, you will get random numbers. So the insertion point is flashing inside of main tests. I'll press F5 instead of 20, 10, and 16, then F5 again, 15, 10 and 10. So completely different values. One more time. 17, 11, 15, 17, 13, 27. And you can see that the values have been randomized as best a computer can do it. I made a lot more mistakes when I was creating the code that was used in this course, but these are the ones that I think are most likely for you to encounter, and I wanted to bring them up and let you know that it's not just you. Even the person teaching you makes mistakes and has to figure out how to correct them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), [[Microsoft Excel|Excel]] (2), [[Probability]] (1)
> **Env Vars:** f11 (3), vba (2), ctrl (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Further resources](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=0)** - [Instructor] Thanks again for your interest in this course. Before I go, I want to point out some additional resources that you can use to learn more about process modeling and [[Microsoft Excel|Excel]] VBA. There are three books, and the first one is a "Business Process Modeling, [[Simulation]], and Design" a second edition by Laguna and Marklund from CRC Press. This book is more advanced than the level at which I taught this course, but it gives you great information and tactics and techniques that you can use to simulate and model other processes. The second is more of a business analysis book, and that is "Matching Supply with Demand" by Cachon and Terwiesch published by McGraw-Hill Irwin. And this is a business book put together by professors, one of whom was at the Wharton School, at the University of Pennsylvania. And it's great for business analysis for problems related to what I taught you here. For more specific Excel VBA training, I highly recommend finding a copy of "Professional Excel Development" 2nd Edition, and this book by Bovey and several other authors published by Addison-Wesley Professional is the go-to reference for professional Excel developers. It's an older book, but the techniques that are taught are timeless, and even if you buy other books to supplement what you learn there, having a copy of "Professional Excel Development" is a great investment. Thanks again for your time.
>
> **[1:34](https://www.linkedin.com/learning/excel-vba-process-modeling-25158426/further-resources?u=76281980&t=94)** I hope you got a lot out of the course. I certainly enjoyed creating it for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Simulation]] (1)
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