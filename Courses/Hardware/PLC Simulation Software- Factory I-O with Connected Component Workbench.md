---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: plc-simulation-software-factory-i-o-with-connected-component-workbench
url: "https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench"
duration_minutes: 136
duration: 2h 16m
level: Intermediate
updated: 7/16/2025
learners: 93923
skills:
  - Simulation
  - Modeling and Simulation
  - Simulation Software
  - PLC Programming
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFLO0GUYTDZnA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664216279875?e=2147483647&amp;v=beta&amp;t=_0jCWXWIOpKcK0jd0Sfbkv24quflvLK1KihAnEIyMsA"
linkedin_topic: Hardware
learning_paths:
  - '[[Become a PLC Developer]]'
prev_courses:
  - '[[PLC Program Flow and Control Instructions]]'
path_nav: '[{"path":"Become a PLC Developer","position":7,"total":7,"prev":"PLC Program Flow and Control Instructions","next":null}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - skill/simulation
  - skill/modeling-and-simulation
  - skill/simulation-software
  - skill/plc-programming
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/PLC%20Simulation%20Software-%20Factory%20I-O%20with%20Connected%20Component%20Workbench.md)

![PLC Simulation Software: Factory I/O with Connected Component Workbench](https://media.licdn.com/dms/image/v2/C560DAQFLO0GUYTDZnA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664216279875?e=2147483647&amp;v=beta&amp;t=_0jCWXWIOpKcK0jd0Sfbkv24quflvLK1KihAnEIyMsA)

# PLC Simulation Software: Factory I/O with Connected Component Workbench

> There’s a strong demand for people who can program Programmable Logic Controllers (PLCs). However, new learners might not have access to an actual PLC to learn. Simulation software helps fill that gap. In this course, instructor Zara Khalil covers two simulation softwares by going through projects that grow progressively more complicated. Zara goes over the interface and programming methodologies 

> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench) | 2h 16m | Intermediate | 94K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Connected Components Software** (6 videos)
- **3. 2. Factory I/O Software** (3 videos)
- **4. 3. CCW and Factory I/O First Project: Control Panel** (3 videos)
- **5. 4. CCW and Factory I/O Conveyor Belt Project** (5 videos)
- **6. 5. CCW and Factory I/O Filling Tank with Timer Project** (7 videos)
- **7. 6. Sorting Boxes by Height** (9 videos)
- **8. 7. Troubleshooting** (1 videos)
- **9. Conclusion** (1 videos)

### 1. Introduction

#### PLC programming using a 3D factory simulation software
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/plc-programming-using-a-3d-factory-simulation-software-22833119?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/plc-programming-using-a-3d-factory-simulation-software-22833119?u=76281980&t=0)** - Wouldn't it be nice that even without having access to real devices, that you could practice PLC programming using factory setting?
>
> **[0:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/plc-programming-using-a-3d-factory-simulation-software-22833119?u=76281980&t=9)** Well, Factor IO is a 3D factory simulation software for learning automation technologies and it's a great tool to practice PLC programming.
>
> **[0:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/plc-programming-using-a-3d-factory-simulation-software-22833119?u=76281980&t=19)** Using a simulator PLC, I will go through few projects like programming a control panel to control a conveyor belt programming filling a water tank with a timer and programming conveyor belt to separate boxes by height.
>
> **[0:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/plc-programming-using-a-3d-factory-simulation-software-22833119?u=76281980&t=37)** I'm Zara Khalil.
>
> **[0:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/plc-programming-using-a-3d-factory-simulation-software-22833119?u=76281980&t=38)** I am an engineering instructor and teaching is something I always love to do.
>
> **[0:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/plc-programming-using-a-3d-factory-simulation-software-22833119?u=76281980&t=43)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** plc (3)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - wouldn (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/what-you-should-know?u=76281980&t=0)** - Before you start this course, you should be a little bit familiar with how ladder logic programming works using the basic instructions, like how to use input and output instructions, and you are familiar with how timer instruction works.
>
> **[0:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/what-you-should-know?u=76281980&t=18)** This course focuses on introducing the two software, Connected Components Workbench software and Factory I/O software.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/what-you-should-know?u=76281980&t=28)** And I will cover four projects during this course, like, programming a control panel, conveyor belts to separate boxes and filling a water tank.
>
> **[0:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/what-you-should-know?u=76281980&t=41)** I will cover everything needed for this course, but if you need a refresher on the basics, or, if you have zero experience with ladder logic programming, I recommend that you check out my course, Learning PLC Ladder Logic, that we have in the library to get you prepared for this course.
>
> **[1:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/what-you-should-know?u=76281980&t=62)** And also, you can check out the Learning Path, Become a PLC Developer, where I have designed the courses to cover the concept from the basic to more advanced level.

> [!info]- Semantic Content
>
> **Env Vars:** plc (2)
> **Speakers:** - before (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The exercise files are divided by chapters, as you can see here.
>
> **[0:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=6)** Similar to the order of the chapters within this course.
>
> **[0:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=11)** For chapter one, it includes the files for connected components workbench software, showing both the start and the final file for this chapter.
>
> **[0:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=23)** Starting from chapter two, you would see two folders, one for connected components workbench software, and one for factory IO software.
>
> **[0:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=37)** Connected components workbench folder has two files.
>
> **[0:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=42)** One for the start of the project, and one showing the end POC program.
>
> **[0:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=48)** I recommend that you open the start file first.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=51)** Follow along as I explain in the videos, and then you can check the final answer at the end.
>
> **[1:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=60)** For the factory IO software folder, it includes the factory IO scene needed for the project for this chapter.
>
> **[1:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=71)** And the same applies for chapter three, chapter four, chapter five, and chapter six.
>
> **[1:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=79)** Now to open the files in connected components workbench software, you go to file, and then click open.
>
> **[1:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=88)** And now you would go to where you saved the exercise files.
>
> **[1:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=93)** So for me, they are saved on my desktop in a folder named LinkedIn Learning.
>
> **[1:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=99)** Then I'm going to click on the exercise files, choosing the chapter that I want to open the file from.
>
> **[1:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=107)** So for example, I can go to chapter three, and then select connected components workbench software, and I'm going to start with the control panel start.
>
> **[1:58](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=118)** So I click on that folder, and then choose this file, and then click open, and this should open the project file in connected components workbench software.
>
> **[2:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=133)** Now for factory IO software, once you opened the software, you can go to scenes, and then select my scenes.
>
> **[2:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=144)** I currently have all the project files in one place.
>
> **[2:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=147)** I'll show you later how to place them in one folder.
>
> **[2:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=152)** Now, there are two options to open the factory IO scenes from the exercise files.
>
> **[2:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=159)** You can click here, and then choose where we have saved the exercise files.
>
> **[2:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=164)** For me, I'm going to go to the desktop, then I'm going to click on LinkedIn Learning.
>
> **[2:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=170)** Then the exercise files.
>
> **[2:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=172)** Then for example, if I want to open the scene from chapter three again, so I'm going to go to chapter three, select factory IO software, and then select the folder.
>
> **[3:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=184)** Now you would see the scene showing here.
>
> **[3:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=187)** So once you click on it, this will take you to the scene within factory IO software.
>
> **[3:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=195)** For option two, you can open the factor IO folder in your computer, it's usually installed with the software.
>
> **[3:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=203)** I currently have mine in documents.
>
> **[3:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=206)** Then go to my scenes.
>
> **[3:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=210)** Here, I have a list of all the files that I'm using for this course.
>
> **[3:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=216)** For you, you would go to the exercise files, and then for example, you go to chapter two, select factor IO software, and then you would take the file from here and then place it in that folder.
>
> **[3:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=231)** So, copy and paste, simply.
>
> **[3:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=236)** And once you have all the files in one folder, you go to factory IO software, and then you click on my scenes again, then you would select that folder.
>
> **[4:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=249)** I'm going to copy the folder path, go to factor IO, and paste the path here, click enter, and then select the folder.
>
> **[4:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=263)** You would see the folder empty, but don't worry, once you select the folder, all the scenes are showing here.
>
> **[4:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/using-the-exercise-files?u=76281980&t=273)** Now you can choose any of the options to open the factor IO scenes for this course.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (11), open the (8), click on (5), select the (3)
> **Exercise Files:** exercise files (7)
> **Analogies:** for example (3), similar to (1)
> **Code Keywords:** from. (1)
> **Env Vars:** poc (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Connected Components Software

#### Connected Components Workbench software introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=0)** - [Instructor] Connected Components Workbench software is developed by Rockwell Automation for writing and configuring PLC controllers and programs.
>
> **[0:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=13)** It is used mainly with Allen-Bradley Micro800 family of controllers.
>
> **[0:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=20)** Micro800 are programmable logic controllers or PLCs.
>
> **[0:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=26)** Here is a list of the different types available.
>
> **[0:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=30)** They range from small size controllers to more advanced controllers with multiple IO modules, and communication connection options.
>
> **[0:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=42)** You can also check this document for more information for each type.
>
> **[0:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=49)** This chapter is for Connected Components Workbench software.
>
> **[0:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=54)** I will go through the download, installation, a software tour, connection path set up, Micro 850 PLC simulator, and a demo showing the simulator working.
>
> **[1:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=68)** If this is your first time working with Connected Components Workbench software, then this chapter will give you a great start.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-introduction?u=76281980&t=77)** However, if you are familiar with the software and it's PLC simulator, you can skip this part into the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** plc (3)
> **Code Keywords:** type. (1)
> **Cross-References:** next chapter (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Connected Components Workbench software download guide
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=0)** - [Instructor] You can download Connected Components Workbench software from Rockwell Automation website.
>
> **[0:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=7)** I'm going to scroll down looking for Download Software.
>
> **[0:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=13)** There is a free Standard Edition that I'm going to use throughout this course, and a Developer Edition that is available for purchase.
>
> **[0:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=26)** So once you click on the Standard Edition, this will take you to another page.
>
> **[0:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=33)** Click on Selected Files, then you will need to create an account that you can use to download the software.
>
> **[0:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=43)** So I'm going to go ahead and log in using my credentials.
>
> **[0:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=48)** So I logged in using my account.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=51)** Once you create an account and log in, you will be promoted with this window.
>
> **[0:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=57)** If you don't see it, just go back to the main Connected Component website that I showed at the beginning and click Download Again, this should take you back to this step.
>
> **[1:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=69)** I'm going to go ahead and select the first option and click on Download.
>
> **[1:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=75)** Then here it's already selected, so I'm going to zoom out a little bit and then click Download Now.
>
> **[1:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=86)** Then here, obviously, click Accept and Download for the terms and conditions.
>
> **[1:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=93)** Then here, click on Direct Download.
>
> **[1:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=97)** And here you need to download both files.
>
> **[1:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=100)** Select each one and will be downloaded to your computer.
>
> **[1:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=105)** Once the files are downloaded, you're going to have four files as you can see on the screen.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=112)** Then you need to double click on this file in order to extract the files inside it.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=120)** It's going to look something like this.
>
> **[2:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=122)** So you need to scroll down and then click on the Setup application file to start installing the software.
>
> **[2:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connected-components-workbench-software-download-guide?u=76281980&t=131)** Follow the steps shown in the installation window and just a heads up, the installation process will take a while before it's done and you might need to start your computer after the process is completed.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (2), select the (1)
> **Code Keywords:** this. (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### CCW software interface tour
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=0)** - [Instructor] After completing the installation, I have opened the software and I'm going to start a new project.
>
> **[0:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=7)** You see here, it's showing that I already have some previous or recent projects, but for you, it might look empty the first time you start the software, looking like this.
>
> **[0:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=19)** I'll go ahead and click on New, then I'll give a name for the project, I'll call it demo1, click on Create.
>
> **[0:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=29)** Here, we need to add a device to our project.
>
> **[0:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=33)** For our case, we are going to select the type of the PLC controller we are going to work with.
>
> **[0:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=40)** The controllers here are part of Micro800 family of controllers.
>
> **[0:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=46)** For this course, I'll be selecting the PLC simulator under Micro850.
>
> **[0:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=53)** So I'll go ahead to Micro850, then to here, and I'll select the simulator and then I click Select, and then add it to the project.
>
> **[1:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=69)** If you have a physical PLC device, then you need to select the same controller type.
>
> **[1:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=75)** This is an example of Micro820 PLC that I used in other projects.
>
> **[1:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=82)** Then for this one, I need to select the same type as it appears on the physical PLC device.
>
> **[1:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=91)** The Connected Components Workbench software looks pretty similar to the layout of the other Ellen Bradley software, that you would find the controller organizer on the left where you can see the controller type, the controller variables, task, which is the main PLC program, and any add on or communication cards.
>
> **[1:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=116)** You can switch between Project or Controller Organizer View using these tabs at the bottom.
>
> **[2:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=125)** You can also select or switch between the views from the View tab over here.
>
> **[2:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=129)** You can select Controller Organizer or Project Organizer.
>
> **[2:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=135)** I'll keep the Controller Organizer view, as this is the one I'm going to use throughout the course.
>
> **[2:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=141)** Now for the main page.
>
> **[2:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=143)** Sometimes if you don't see the whole PLC picture at the center of the page, you can click on this arrow icon over here to hide or unhide the PLC picture.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=158)** The main PLC program is done under the Main Task section here.
>
> **[2:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=164)** So you go here, you'll right click, and then click on Add.
>
> **[2:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=169)** There are three options to add a new program, Structured Text, Ladder Diagram, and Function Block Diagram.
>
> **[3:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=182)** I'll be using Ladder Diagram when working on projects for this course.
>
> **[3:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=189)** Now for the tabs here, the File tab includes creating new project, opening a previous project, add devices, save, import, or export a project.
>
> **[3:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=202)** The Edit tab includes what you need when editing, like copy, paste, delete, et cetera.
>
> **[3:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=210)** The View tab is, again, where you can switch between Controller/Project Organizer view.
>
> **[3:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=216)** You can also see the device toolbox that includes a catalog of the different controllers, devices that can be used within the software.
>
> **[3:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=228)** I'll go ahead and close that window.
>
> **[3:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=231)** For the Device tab, the Configure option will show the main page in case you don't see it at the beginning when you start the software, or if you hide it by mistake, I'll show you what that means.
>
> **[4:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=244)** So for example, let's say this is the main page, and then you close it by mistake, then you go to device, you click on Configure, and then you'll see the main page again.
>
> **[4:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=255)** Now, the main page includes a quick access to the setting of the controller itself.
>
> **[4:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=260)** Like any general information, any ethernet connection, embedded I/O, et cetera.
>
> **[4:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=268)** Going back to the Device tab, the Setup Connection Path shows the ethernet connection to connect to the PLC.
>
> **[4:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=277)** I'll go through this in details in another video.
>
> **[4:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=281)** The other three tabs, Connect, Download, and Upload, are related to the PLC program that we write and send to the PLC device.
>
> **[4:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=294)** You can also see them here for a quick access.
>
> **[5:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=300)** Now for the tools tab, there are many options, but the one I want to focus on is this Micro800 PLC Simulator that I'm going to use throughout the course.
>
> **[5:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=314)** This will show you the simulator PLC, mimicking a real PLC.
>
> **[5:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=320)** Close the window.
>
> **[5:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=321)** You can access the simulator PLC as well from this icon here.
>
> **[5:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=328)** The window tab includes the window settings for the different tabs within the software.
>
> **[5:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=334)** The Help tab includes great resources like this one, Connected Components Workbench page.
>
> **[5:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=343)** Here, you can type any command or instructions to read more about it.
>
> **[5:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=348)** For example, I can go for timer and then I can read more about timer within the Connected Component Workbench software.
>
> **[5:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=356)** I'll be using this page a lot during the course.
>
> **[6:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=360)** Here's a reference for Connected Component Workbench software.
>
> **[6:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-interface-tour?u=76281980&t=363)** This PDF includes quick tips for the software and this manual includes a great guide for the software that I personally refer to when working with Connected Component Workbench and if I need to read anything about the software when I work on projects.

> [!info]- Semantic Content
>
> **Env Vars:** plc (16), pdf (1)
> **Code Keywords:** switch (3), this. (1), new, (1), case, (1), type. (1)
> **UI Navigation:** click on (5), select the (4), go to (1)
> **Analogies:** picture (2), for example (2), similar to (1)
> **Prerequisites:** configure (2), setup (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### CCW Micro800 PLC simulator
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=0)** - The simulator PLC in Connected Components Workbench software is mimicking Allen-Bradley Micro850 Controllers.
>
> **[0:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=10)** Now, if you go to the software and click on "Controller" and then you click on "General" here, this is the full name Catalog ID of this specific PLC type.
>
> **[0:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=23)** Now, the SIM at the end of the name is to indicate that this is a simulation.
>
> **[0:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=30)** When checking this manual for the same PLC Catalog ID name, then this simulator would be mimicking this specific PLC type.
>
> **[0:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=41)** So I'm going to go ahead and open the PLC window.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=44)** I can either go to "Tools" and select "Micro800 simulator," or I can go to the shortcut here and click on the simulator icon.
>
> **[0:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=56)** This simulator PLC has 48 inputs and outputs.
>
> **[1:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=63)** The top side is for the input pins.
>
> **[1:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=66)** The bottom side is for the output pins.
>
> **[1:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=70)** The addresses for the input and output pins are found under the "Controller Variable" section.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=77)** So I'm going to go ahead here and double click on "Controller Variables."
>
> **[1:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=82)** And here, you can see the addresses for this simulator PLC.
>
> **[1:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=88)** The address, the logical name you see in the software is following this format.
>
> **[1:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=95)** IO is for input and output, D indicates it's a digital value: zero or one, O is for an output address, I is for an input address.
>
> **[1:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=110)** What you see here are the output addresses.
>
> **[1:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=114)** So, the first one is actually for this address.
>
> **[1:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=119)** The second one is for this one, and then the same for the rest.
>
> **[2:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=126)** And then if I scroll down to the input addresses, then this address here is actually the address of the first input pin.
>
> **[2:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=136)** And the same is for the rest of the input addresses.
>
> **[2:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=144)** Here's a demonstration showing the digital input and output addresses, and their places on the simulator PLC pins.
>
> **[2:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=155)** Now, to work with the simulator PLC we need to make sure that the power is on, as if we're using a physical device.
>
> **[2:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=164)** Currently, this simulator PLC is off.
>
> **[2:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=169)** You can check that with the "Controller Status" showing "OFF."
>
> **[2:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=173)** So, as soon as I go here to the power on and click on that, you notice that the "Controller Status" is showing "ON".
>
> **[3:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=185)** The simulator can only operate in the run mode for 10 minutes.
>
> **[3:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=189)** I can always change that later.
>
> **[3:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-micro800-plc-simulator?u=76281980&t=193)** I will go through this process multiple times throughout the course, but I hope this gave you an introduction to the simulator PLC that we are going to work with.

> [!info]- Semantic Content
>
> **Env Vars:** plc (11), sim (1), off (1)
> **UI Navigation:** click on (5), go to (3), open the (1), scroll down (1)
> **Code Keywords:** type. (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### Establishing the connection path for the PLC Simulator
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=0)** - [Instructor] A very important step is establishing a connection path.
>
> **[0:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=5)** A connection path is to link and connect the software part to the PLC device.
>
> **[0:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=13)** Whether it's a real physical device, like Allen-Bradley Micro820, the picture on the top, right.
>
> **[0:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=21)** Or in our case, a simulator, the picture you see on the bottom, right.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=28)** And in both cases you see on the screen, I'm using an ethernet connection.
>
> **[0:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=34)** When using an ethernet connection, we need to know the IP address of the PLC device we are using.
>
> **[0:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=43)** For our simulator PLC, although it is within the same computer, but it acts as if it's a device by itself, so we still need to establish a connection path.
>
> **[0:58](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=58)** It is done once at the beginning only, and then you can keep using the same settings.
>
> **[1:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=64)** Let's see how we do that.
>
> **[1:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=67)** So here in the software, I'm going to click on this little icon, and open the simulator PLC window.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=77)** Then I'm going to go to "device", and then select "setup connection path."
>
> **[1:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=85)** You see on my screen that I have multiple recent IP addresses from my previous projects, but for you it will probably be empty if this is the first time you are setting up a connection path.
>
> **[1:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=101)** Now, in order to know which one is related to my PLC simulator, or add a new one for your simulator PLC, click on "browse here," and this will take you to the connection browser, showing the drivers that have been configured for this workstation, meaning for our computer.
>
> **[2:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=125)** So I'm going to go ahead and click on the Allen-Bradley ethernet.
>
> **[2:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=131)** It is showing us a list of the different communication available from different devices, PLCs in our case.
>
> **[2:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=141)** Notice here, it's showing a red X on each of the addresses shown for the PLCs, indicating none of them is on, none of them is active.
>
> **[2:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=154)** To show you the difference, I'm going to grab back the window for our PLC simulator.
>
> **[2:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=161)** Now, obviously I know the IP address of this simulator PLC, it's showing here, but let's see what happens when I click on the power on.
>
> **[2:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=174)** You see here that the IP address of this specific simulator PLC is now active.
>
> **[3:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=183)** So I know that this is the IP address that I need for my simulator PLC.
>
> **[3:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=190)** All right, I'm going to go ahead and click on this IP address and then click "Okay."
>
> **[3:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=198)** Notice now that the selected path is showing the IP address that I've just selected.
>
> **[3:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=205)** Also, if you already know the IP address, you can select it from the recent path list available.
>
> **[3:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=213)** Okay, I'm going to click "close" here.
>
> **[3:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=216)** You can see the connection path, also showing on the main page, having the IP address selected.
>
> **[3:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=223)** There's also a shortcut.
>
> **[3:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=225)** If you click on this little pen icon, this will take you back to the setup connection path window.
>
> **[3:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=234)** Now for you, you will probably have a different IP address for your simulator PLC because it depends on your network.
>
> **[4:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=245)** Now, when the connection is done, that means I can download programs to the PLC, or receive upload from the PLC.
>
> **[4:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=256)** Establishing network connection is an essential step.
>
> **[4:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=261)** You won't be able to do anything with your PLC if your connection is not done.
>
> **[4:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=269)** So after the connection path has been established, we can now connect to our simulator PLC.
>
> **[4:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=276)** I can either click on "connect" here, or I can click on "connect" here, then click on "download current project to the controller" and then click on "download."
>
> **[4:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=293)** Once the download is complete, you notice the orange bar at the bottom, indicating that the connection has been established between the PLC and the software.
>
> **[5:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=306)** Also the main page is showing the status of the PLC, showing it is connected and in the program mode.
>
> **[5:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=317)** Now I can change the program mode to the run mode here, click "okay," and you see the change on the main page as well, showing that this PLC simulator is currently in the run mode.
>
> **[5:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/establishing-the-connection-path-for-the-plc-simulator?u=76281980&t=332)** Now to disconnect, I'm going to click back on the program mode, go back to the software, and click to disconnect.

> [!info]- Semantic Content
>
> **Env Vars:** plc (18)
> **UI Navigation:** click on (9), open the (1), go to (1)
> **Code Keywords:** let (2), case, (1), case. (1)
> **Analogies:** picture (2)
> **Prerequisites:** setup (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### CCW software demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=0)** - [Instructor] I will write a simple program to test the simulator PLC.
>
> **[0:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=5)** I have provided you with this Connected Components Workbench project file for this demo.
>
> **[0:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=11)** You can find it in chapter one folder.
>
> **[0:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=15)** Or you can start from scratch and follow along with me.
>
> **[0:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=20)** Now to start, I'm going to go ahead here, right click, select add and then select a new ladder diagram.
>
> **[0:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=31)** This creates a program.
>
> **[0:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=33)** So I'm going to go ahead and double click on it.
>
> **[0:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=37)** This will take me to the main page where I can add the instructions for the ladder logic program.
>
> **[0:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=45)** Now, if you click here notice there is a local variables tab.
>
> **[0:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=52)** Once you create a program it comes with its own local variables.
>
> **[0:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=57)** Here is a demonstration showing the controller variables versus the local variables.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=65)** In general, the controller variables are related to the controller and they are available to all programs.
>
> **[1:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=73)** Program variables are related to one program.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=77)** In our case, it is program one.
>
> **[1:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=81)** All right, I'm going to grab an XIC instruction and then drag it to the rung.
>
> **[1:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=89)** What you see here is the variable selector window.
>
> **[1:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=94)** So I'm going to go here and from the dropdown menu I'm going to select Micro850.
>
> **[1:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=102)** You see here, the addresses for this simulator PLC.
>
> **[1:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=107)** So I'm going to scroll down, looking for an input address.
>
> **[1:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=113)** This is an input address, so I can either double click on it or highlight it and click okay.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=120)** Now this step, adds this address to this instruction.
>
> **[2:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=126)** I'll do the same with the output instruction.
>
> **[2:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=128)** So I'm going to grab an output instruction and drag it to the rung and then I'll do the same thing.
>
> **[2:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=133)** So I'm going to go here, select Micro850 but this time I'm going to select an output address.
>
> **[2:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=142)** So I'm going to highlight this one and then hit okay.
>
> **[2:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=146)** This ladder logic program consists of one rung including one input and one output.
>
> **[2:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=155)** All right, I'm going to go ahead and open the simulator PLC window.
>
> **[2:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=159)** I'm going to click on this icon here then click on power on.
>
> **[2:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=165)** Now in this step I want to download the PLC program into our simulator PLC.
>
> **[2:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=173)** So I'm going to go ahead to the main page here and click here.
>
> **[3:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=180)** This will open the connection browser.
>
> **[3:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=183)** So I'm going to go here select the IP address of this simulator PLC, click on it and hit okay.
>
> **[3:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=194)** Then select download current project to the controller.
>
> **[3:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=201)** Click download.
>
> **[3:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=203)** Now the download is complete.
>
> **[3:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=205)** I can go ahead and test this program.
>
> **[3:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=209)** So I want to make sure that the PLC simulator is in the run mode.
>
> **[3:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=214)** Click okay.
>
> **[3:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=215)** Now, once I click on input zero you notice here that output zero is on.
>
> **[3:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=224)** This means that our simulator PLC has the program we have in the software.
>
> **[3:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=231)** And it's working.
>
> **[3:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=232)** So our testing is complete.
>
> **[3:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=236)** All right, I'm going to click on it again.
>
> **[4:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=240)** Go to program mode and then go to the main software page and then click to disconnect.
>
> **[4:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=251)** Connected Components Workbench Software has two themes has a default one and a logix one.
>
> **[4:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=260)** The logix theme makes the software similar to Allen Bradley RSLogix 5,000.
>
> **[4:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=269)** The software still behaves the same.
>
> **[4:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=272)** And throughout the course, I'll be using both themes when working on projects.
>
> **[4:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=279)** Now for this simulator PLC it is important to follow the following sequence for these steps in order to get the software working.
>
> **[4:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=290)** First, you need to make sure that the PLC simulator window is open.
>
> **[4:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=296)** Then you need to click on power on, connect and download the program.
>
> **[5:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=302)** And finally click on run.
>
> **[5:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=305)** One thought I want to share before we proceed.
>
> **[5:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=309)** The simulator PLC is a great tool to use it to learn and test your PLC programming skills.
>
> **[5:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=317)** However, remember that the simulator PLC can be similar to an actual PLC, but not the same.
>
> **[5:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=325)** If you have a previous experience with a real physical PLC you might find the program execution for the simulator is a little bit delayed especially when you have multiple rungs.
>
> **[5:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=339)** Or have some limitation with the different I/O used.
>
> **[5:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=344)** So keep that in mind when working with it.
>
> **[5:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=347)** But again, it's a great tool to learn and explore.
>
> **[5:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ccw-software-demo?u=76281980&t=351)** And I'll be using it for the whole course.

> [!info]- Semantic Content
>
> **Env Vars:** plc (15), xic (1)
> **UI Navigation:** click on (9), open the (2), go to (2), dropdown (1), scroll down (1)
> **Definitions:** is a  (4), is an  (1), means that (1)
> **CLI Commands:** find (2), make (2)
> **Exercise Files:** download the (2)
> **Analogies:** similar to (2)
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Factory I/O Software

#### Factory I/O overview and download
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=0)** - Factory I/O is a 3D factory simulation for learning automation technologies.
>
> **[0:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=6)** A very great tool as a PLC training platform to practice any of the automation and industrial applications.
>
> **[0:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=16)** You can download a 30-days free trial from this website.
>
> **[0:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=23)** You can select a specific edition, like for example Allen-Bradley, if you want to purchase it for a specific project and you don't need the other PLC controllers.
>
> **[0:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=34)** For this course, I'll be using the Ultimate edition even though I will only use Allen-Bradley controllers.
>
> **[0:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=43)** So the free trial for the Ultimate edition would be good for this course.
>
> **[0:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=50)** Once you click on Start trial, then you'll need to complete a form for your free trial.
>
> **[0:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=57)** The trial period will start on the first run of the software.
>
> **[1:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-overview-and-download?u=76281980&t=62)** Here's more information on how to install Factory I/O software on your computer.

> [!info]- Semantic Content
>
> **Env Vars:** plc (2)
> **Prerequisites:** you'll need (1), install (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - factory (1)

#### Factory I/O software tour
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=0)** - Now when you open Factory IO Software, there are many options you can select from, including a ready to use scenes.
>
> **[0:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=10)** You can click here for the scenes.
>
> **[0:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=12)** A scene is simply an application scenario.
>
> **[0:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=16)** You can choose any of the pre-defined scenes or create your own from scratch.
>
> **[0:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=24)** I'll go ahead and select this one, for example, this is a pre-built example.
>
> **[0:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=29)** On the right hand side on the toolbar here this is a pallet window where you can select any item from the library provided.
>
> **[0:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=40)** So I'll go ahead and select one item randomly.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=44)** Let's say this one, for example and then I can place it in the scene.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=51)** Now I can change the item orientation.
>
> **[0:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=54)** I can click on the item, right click and then I can change the orientation by clicking on plus or minus here.
>
> **[1:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=63)** Obviously, now the item is hanging on the air so I can even change where to place it in the scene.
>
> **[1:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=70)** I can click on the item and then right click and select, for example, the horizontal, I can place it anywhere I want or vertical, and then I can put it on the floor.
>
> **[1:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=83)** I'm going to go ahead and delete this item from the scene.
>
> **[1:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=87)** And then I will hide the pallet window.
>
> **[1:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=91)** The next two on the toolbar are the tags for sensors and actuators within the scene.
>
> **[1:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=98)** Notice that I can make the tags appear or disappear within the scene, which is great if you want to know how many tags are in the scene.
>
> **[1:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=110)** I'm going to adjust the scene here.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=112)** I can also click on the tag itself and I can change the name for it.
>
> **[1:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=119)** For example, let's say I have multiple sensors.
>
> **[2:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=122)** I can say this is sensor number one, and then hit enter and that will change the tag name.
>
> **[2:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=129)** A tag is made of a name and a value.
>
> **[2:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=135)** Tags can be three different data types depending on the sensors and actuators type and configurations, BOOL IN is for on and off, float is for real numbers and integer is for integer numbers.
>
> **[2:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=152)** Here's more information about tags within Factory IO Software.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=158)** Now for each scene, you have to choose the driver, simply choosing the PLC for the scene selected.
>
> **[2:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=167)** So I'll go ahead to file and then click on driver.
>
> **[2:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=172)** Let's say, for example, I'm working with Allen Bradley, so I can select that from the dropdown menu over here.
>
> **[2:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=179)** So I'll go ahead to Allen Bradley Micro800.
>
> **[3:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=185)** The Factory IO mimics the factory setting as if this is a real setting.
>
> **[3:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=192)** And with that, I can have a real PLC connected to my computer or a simulator PLC, like the one we have in Connected Component Workbench Software.
>
> **[3:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=204)** What you see here are the input and output pin addresses.
>
> **[3:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=209)** They are the addresses from the PLC selected.
>
> **[3:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=213)** The left side is for inputs.
>
> **[3:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=216)** The right side is for outputs, and you can also see the left side showing the sensors within the scene and the right side, showing the actuators within the scene.
>
> **[3:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=231)** And once the PLC is selected, you can click on configuration here, for configuration, the host address is the IP address of the PLC selected.
>
> **[4:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=245)** If you are using a simulator PLC, then you need to add the IP address shown on the simulator.
>
> **[4:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=253)** As you can see for micro 850 simulator PLC from Connected Component Workbench Software, in case of a real PLC, as shown for Allen Bradley Micro820 PLC, that I used in previous projects.
>
> **[4:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=269)** Then for this case, I need to have the IP address associated with this PLC to be added to Factory IO Software.
>
> **[4:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=280)** You can also adjust the number of inputs and outputs for your PLC within Factory IO.
>
> **[4:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=286)** Let's say I need more sensors or more actuators.
>
> **[4:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=291)** For example, for this process you see on the screen, I want to have three sensors instead of one.
>
> **[4:58](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=298)** So I need to increase the number of inputs for this scene, two, three, the choice of BOOL IN, float, or integer depends on the sensor type.
>
> **[5:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=309)** I'll explain more about this in details throughout this course.
>
> **[5:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=314)** The Factory IO website has many great resources to explore.
>
> **[5:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=319)** Click on getting started, where you can check the steps.
>
> **[5:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/factory-i-o-software-tour?u=76281980&t=323)** You can also explore the manual and navigate through each section to learn more.

> [!info]- Semantic Content
>
> **Env Vars:** plc (12), bool (2)
> **Code Keywords:** let (4), from, (1), delete (1), case, (1), type. (1)
> **UI Navigation:** click on (6), dropdown (1)
> **Analogies:** for example (6)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - now (1)

#### Connect Factory I/O software with CCW software
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=0)** - [Instructor] To make communication between Connected Components Workbench software and factory IO software, we need to go through the following steps.
>
> **[0:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=11)** I have the scene from factory IO, and this project in Connected Components Workbench software.
>
> **[0:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=19)** I have provided you with this project file in chapter two.
>
> **[0:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=25)** I used the same setting for the simulator PLC that we established in the previous chapter.
>
> **[0:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=33)** So the first step is I go back to factor IO software and then click on File then Select Drivers.
>
> **[0:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=42)** Now I need to select the PLC controller that I'm working with.
>
> **[0:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=47)** So I go from the dropdown menu and then I select Allen-Bradley Micro800.
>
> **[0:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=54)** Then I'll go to Configuration.
>
> **[0:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=57)** Now, what I need to do here is to add the IP address from the simulator PLC.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=65)** The IP address for the simulator PLC that I have is 192, 168, 86, 22.
>
> **[1:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=74)** So I'm going to go ahead and add that here then I'll go back.
>
> **[1:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=80)** The next step is to add the IO addresses inside Connected Component software to use them in the ladder logic program.
>
> **[1:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=91)** So I need to add that in the controller variables.
>
> **[1:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=93)** So I'll double click here, then I'll scroll down all the way to the end and then add a new address.
>
> **[1:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=103)** So the first address is Boolean, N zero and that is sensor A.
>
> **[1:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=114)** Then the next address is Boolean N one and that is sensor B.
>
> **[2:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=126)** And then obviously you need to do the same for all the addresses.
>
> **[2:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=129)** But for demo purposes, I'm going to go ahead and download that to the simulator PLC.
>
> **[2:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=136)** So I need to make sure that the PLC is on.
>
> **[2:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=140)** So I'm going to turn on the power and then I'll go ahead and connect to the PLC simulator.
>
> **[2:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=149)** Click on Download Current Project to the controller, then Download.
>
> **[2:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=156)** All right, now the download is complete.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=158)** So I need to go back to factory IO software.
>
> **[2:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=162)** Then I'm going to click on Connect.
>
> **[2:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=166)** This means that I'm connecting factory IO software to the simulator PLC.
>
> **[2:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=172)** Once you don't see any error messages, that means the connection has been established.
>
> **[2:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=177)** And you can also see here that there is a disconnect option appearing.
>
> **[3:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=184)** Obviously there is no program yet so you won't be able to see anything happening within factory IO yet.
>
> **[3:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=191)** But I want to show you something, I'm going to click on Disconnect here.
>
> **[3:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=196)** Then I'll go back to the Connected Components Workman software.
>
> **[3:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=202)** I'll disconnect here.
>
> **[3:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=206)** Then I'll close the window of the simulator PLC.
>
> **[3:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=210)** What I'm going to do again is I'm going to open the window again, but this time I will not click on the power, I'll leave it off and you can see that the controller status is showing off.
>
> **[3:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=223)** All right, so I'm going to go back to factory IO and I'm going to try to connect to this simulator PLC.
>
> **[3:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=232)** So you see what's happening.
>
> **[3:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=233)** You would get this error message indicating that the factory IO software cannot connect to the PLC simulator even though I have the correct IP address.
>
> **[4:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=245)** So you need to make sure that your PLC simulator is on before you connect to it from factory IO.
>
> **[4:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/connect-factory-i-o-software-with-ccw-software?u=76281980&t=255)** Now, if you want to explore more, you can check factor IO website that provide instructions on how to set up micro 800 PLC in factory IO software.

> [!info]- Semantic Content
>
> **Env Vars:** plc (13)
> **UI Navigation:** click on (4), select the (1), dropdown (1), go to (1), open the (1)
> **Cross-References:** go back to (4), previous chapter (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. 3. CCW and Factory I/O First Project: Control Panel

#### Control panel project
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=0)** - [Instructor] For the first project, I'm going to write a program for a control panel in Factory IO using a simulator PLC in Connected Components, Workbench Software.
>
> **[0:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=15)** I have provided you with the Factory IO scene file and a starting project file for Connected Components, Workbench Software.
>
> **[0:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=25)** You can find them both in chapter three folder.
>
> **[0:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=29)** However, you can start a new one if you prefer, as I demonstrated in the first chapter.
>
> **[0:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=36)** In this scene within Factory IO, I have a control panel with start and stop push buttons and green and red LEDs.
>
> **[0:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=49)** The push buttons also have light attached to them.
>
> **[0:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=54)** A start push button light, and a stop push button light.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=59)** They are separate from the other LEDs.
>
> **[1:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=63)** The first step is to connect the factory IO scene to our simulator PLC.
>
> **[1:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=71)** So I'm going to go back here and click on the simulator PLC window.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=77)** Then I'm going to click on power on.
>
> **[1:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=80)** Now I need to take the IP address of this PLC simulator and add it to Factory IO.
>
> **[1:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=88)** So I'm going to go ahead to file, click on drivers, then from the dropdown menu select Allen Bradley micro 800, and then go to configuration, and add the IP address here.
>
> **[1:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=108)** Then I'll go back.
>
> **[1:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=110)** The second step is to add the IO addresses from Factory IO into Connected Components, Workbench Software.
>
> **[2:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=121)** So I'm going to go here and double click on controller variables.
>
> **[2:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=126)** Then I'm going to scroll down all the way to the end.
>
> **[2:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=130)** In the file provided, I have added the input addresses.
>
> **[2:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=134)** I'm going to go ahead and write the output addresses.
>
> **[2:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=139)** Now the address's name should be the same as in factor IO software, but for the alias naming I usually choose the same naming as it is in factory IO because it makes it easier for me to keep track when I have multiple IOs.
>
> **[2:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/control-panel-project?u=76281980&t=156)** But feel free to change them as long as you understand which one is which.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), dropdown (1), go to (1), scroll down (1)
> **Env Vars:** plc (4)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Ladder logic program in CCW software
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=0)** - [Instructor] All right, I'm going to go ahead and start the programming.
>
> **[0:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=4)** So I'm going to go to Program1 and double click in here.
>
> **[0:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=8)** Now, this will take me to the main window where I can add the instructions.
>
> **[0:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=13)** If you have started a project from scratch, then you need to go to the MainTask, right click, and then add a new ladder diagram.
>
> **[0:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=24)** However, in the provided file, I already added Program1.
>
> **[0:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=30)** Now, what I want to program is when I press on the start push button, I want the green LED to turn on, as well as the start push button light, and the same thing for the stop push button.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=44)** Once I press on the stop push button, the red LED turns on, as well as the stop push button light.
>
> **[0:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=53)** So I'm going to go ahead and grab an XIC instruction.
>
> **[0:58](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=58)** And drag it to the rung.
>
> **[1:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=62)** Then go to the dropdown menu here and select Micro850.
>
> **[1:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=70)** And then I'll scroll down all the way to the bottom and then I select start push button.
>
> **[1:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=78)** I can either highlight it and click OK or I can double click on it.
>
> **[1:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=85)** Now I'm going to grab an output instruction and drag it again to the rung.
>
> **[1:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=92)** Then go to Micro850 and scroll down looking for the Green LED.
>
> **[1:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=101)** Highlight it and click OK.
>
> **[1:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=105)** Now the start push button activates the green LED, as well as the start push button light.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=112)** So I'm going to add a branch here.
>
> **[1:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=117)** And then add that there.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=120)** And I'm going to add another output.
>
> **[2:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=122)** So I'll grab an instruction and add it here.
>
> **[2:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=127)** And then from the dropdown menu again, select Micro850.
>
> **[2:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=131)** Scroll down.
>
> **[2:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=134)** And then select Start push button light.
>
> **[2:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=139)** OK.
>
> **[2:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=141)** Now for the stop push button.
>
> **[2:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=143)** It is a normally closed contact, according to the Factory I/O website as shown here.
>
> **[2:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=152)** So I'm going to add another rung.
>
> **[2:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=155)** Then I'm going to add an XIO instruction.
>
> **[2:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=161)** And then add it for the stop push button.
>
> **[2:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=164)** Again, from the Variable Selector, I'm going to select Micro850.
>
> **[2:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=170)** And this time I'm going to select stop push button.
>
> **[2:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=176)** I used an XIO instruction because it is a normally closed contact.
>
> **[3:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=182)** All right, and this one activates the red LED.
>
> **[3:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=185)** So I'm going to grab an output instruction.
>
> **[3:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=195)** And then select the Red LED, as well as another output, which is the stop push button light.
>
> **[3:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=214)** Now if I want only one push button to be pressed at a time, I'm going to add an XIC instruction for the stop push button in the first rung.
>
> **[3:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=230)** Again, it is an XIC because it is a normally closed contact.
>
> **[3:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=236)** Now I'll do the same for the second rung but this time, I'm going to choose an XIO instruction.
>
> **[4:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=245)** And for this one, I'm going to select the start push button.
>
> **[4:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=250)** For our simulation, we probably won't need this step as you cannot press two push buttons at the same time.
>
> **[4:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=258)** However, if this is a real setting, then you need to ensure that only one push button is pressed at a time.
>
> **[4:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=267)** All right, now the next step, I need to download this program into the Simulator PLC.
>
> **[4:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=274)** So I have the SIMulator PLC window open.
>
> **[4:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=277)** I have the power on.
>
> **[4:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=280)** So I'm going to go ahead and click on Connect.
>
> **[4:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=284)** And here I need to select the connection path.
>
> **[4:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=288)** I'm going to select the IP address of the Simulator PLC.
>
> **[4:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=292)** Click OK.
>
> **[4:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=294)** Then click on Download current project to the controller.
>
> **[5:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=300)** Click Download here.
>
> **[5:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=302)** Now the download is completed.
>
> **[5:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/ladder-logic-program-in-ccw-software?u=76281980&t=305)** That means we have successfully downloaded the PLC program into the Simulator PLC and now we're ready to test it with Factory I/O software.

> [!info]- Semantic Content
>
> **Env Vars:** led (6), plc (5), xic (3), xio (3)
> **UI Navigation:** go to (4), select the (4), scroll down (3), click on (3), dropdown (2)
> **Definitions:** is a  (4), is an  (1)
> **Speakers:** - [instructor] (1)

#### Project demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=0)** - [Instructor] Now in Factory IO, I need to go to file, click on drivers and then click on connect.
>
> **[0:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=9)** The green check mark showing that the connection has been established between Factory IO software and the Simulator PLC.
>
> **[0:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=20)** Then I'll go back to the scene.
>
> **[0:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=22)** I'm going to grab back the Simulator PLC window and click on the run mode, click Okay.
>
> **[0:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=31)** Then go back to the scene and select the run mode.
>
> **[0:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=37)** Now, I'm going to test the program.
>
> **[0:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=41)** So once I press on the start push button, the green LED and the start push button lights are on.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=51)** Once I let go, they both turn off.
>
> **[0:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=55)** The same thing with the stop push button.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=59)** Once I press on the stop push button, the red LED as well as the stop push button light are on.
>
> **[1:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=68)** Once I let go, they both turn off.
>
> **[1:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=73)** Once we reach to this point, we know that we have successfully connected both softwares, and that the PLC program we wrote actually works.
>
> **[1:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=85)** All right.
>
> **[1:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=86)** Now I have the two softwares on the screen and I want to show you what happens when I press on the start push button.
>
> **[1:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=95)** So once I click on the start push button, you see that it activates the first rung in Connected Components Workbench software, and both the green LED and the start push button light are on.
>
> **[1:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=113)** Once I let go, this deactivates the rung.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=120)** The same thing happens when I press on the stop push button.
>
> **[2:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=125)** This activates the second rung, making the red LED and the stop push button lights activated.
>
> **[2:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16978713?u=76281980&t=134)** Once I let go, that deactivates the second rung.

> [!info]- Semantic Content
>
> **Env Vars:** led (4), plc (3)
> **UI Navigation:** click on (4), go to (1), select the (1)
> **Code Keywords:** let (4)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)


### 5. 4. CCW and Factory I/O Conveyor Belt Project

#### Conveyor belt project
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=0)** - [Instructor] For this project, I'm using a pre-built scene from Factory I/O called from A to B, Set and Reset.
>
> **[0:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=10)** And I added the control panel that I used in the previous chapter.
>
> **[0:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=15)** I have provided you with this Factory I/O C file, you can find it in chapter four folder.
>
> **[0:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=25)** This scene consists of a control panel, two conveyors besides each other, and there are two retro reflector sensors, one at the beginning of the second conveyor, and one at the end of it.
>
> **[0:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=43)** I made some modification to the original scene.
>
> **[0:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=46)** I moved sensor B a little bit toward the middle to have a better demonstration for this project.
>
> **[0:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=54)** Here is a layout of the process for this project, showing the components and the location of the two sensors on the conveyors.
>
> **[1:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=64)** This is a demo of what we want to accomplish for this project.
>
> **[1:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=69)** The process is to transport a box along the two conveyors, from sensor A to sensor B.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=77)** Start push button will activate the first conveyor, and once the box reaches sensor A, the second conveyor starts, until the box reaches sensor B, where the two conveyors stop.
>
> **[1:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=93)** The last step of the process is adding a stop push button that stops the process at any time.
>
> **[1:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=101)** And once we press on start push button again, the process resume.
>
> **[1:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=107)** Here is a list of the inputs and outputs of this process.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=112)** Sensors and push buttons are inputs, conveyors and LEDs are outputs.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=120)** You can also check the inputs and outputs by going to File, Drivers, and here, you can see a list of the inputs and outputs of this project.
>
> **[2:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=132)** Now for the Connected Components Workbench software, I have provided you with a starting project file that you can find in chapter four.
>
> **[2:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=143)** However, you can start a new one if you prefer, as I demonstrated in the first chapter.
>
> **[2:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=151)** Now to establish connection between Factory I/O software and Connected Components Workbench software, I need to add the IP address of the simulator PLC back in Factory I/O.
>
> **[2:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=165)** I have already added the IP address for this project, but remember for you, you just need to change the IP address to match whatever you have on your simulator PLC.
>
> **[2:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=177)** And you can do that by clicking on Configuration, and then change the host IP address here.
>
> **[3:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=185)** The next step is to have the I/O addresses from Factory I/O to be added to the Connected Components Workbench software in the Controller Variables section, which I already added them in the provided project file, as you can see here.
>
> **[3:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/conveyor-belt-project?u=76281980&t=203)** The address names have to match whatever is in Factory I/O software, but for the alias naming, again, I prefer to use the same naming as it is in Factory I/O to make it easier for me to know which I/O I'm working with, but you are free to make any changes if you prefer.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (3)
> **Env Vars:** plc (2)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### Part 1: Programming
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=0)** - For this project, I'll show the programming in two steps.
>
> **[0:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=4)** The same way I would approach it when solving any PLC program.
>
> **[0:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=10)** The first part is to program this scenario.
>
> **[0:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=14)** When a start push button is pressed the entry conveyor starts.
>
> **[0:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=19)** As soon as the box arrives to sensor A the second conveyor starts while keeping the first one on.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=28)** Both conveyors stop when the box arrives to sensor B.
>
> **[0:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=34)** So the start push button will activate these outputs; The entry conveyor, the green LED, and the start push button light.
>
> **[0:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=46)** So I'll go ahead and grab an XIC instruction, and then select Micro850, and then scroll down to find the start push button.
>
> **[1:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=62)** Then I'm going to select it and then I click OK Now for the output, the first output is the entry conveyor so I'm going to grab an output instruction and then go to Micro850 again, and look for the entry conveyor.
>
> **[1:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=80)** Select it and then I click OK.
>
> **[1:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=84)** I'm going to add a branch because I want to add the next two outputs
>
> **[1:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=96)** the green LED, and finally the start push button light.
>
> **[1:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=108)** Now, in order to keep this rung active, I'm going to add a ceiling instruction using the bit of the entry conveyor.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=120)** So I'm going to Micro850 and then select entry conveyor.
>
> **[2:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=130)** The reason for this seal in instruction.
>
> **[2:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=133)** So I don't have to keep pressing on the push button as soon as I press on the start push button once, the rung activates and stays on.
>
> **[2:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=144)** Now for the second part of the program the second conveyor is activated when the box arrives to sensor A.
>
> **[2:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=153)** At the same time, the entry conveyor is still on.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=158)** So our inputs are both sensor A and the bit address of the entry conveyor.
>
> **[2:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=167)** The bit address here is an internal bit.
>
> **[2:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=172)** I'm going to add a second rung then I'm going to use an XIO instruction for sensor A.
>
> **[3:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=183)** So I'm going to look for sensor A select it and then I click OK.
>
> **[3:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=191)** I used an XIO instruction for sensor A because the retro-reflector sensor acts as normally closed contact.
>
> **[3:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=203)** Then I'm going to grab an XIC instruction for the entry conveyor so I'm going to Micro850 and look for the address of the entry conveyor.
>
> **[3:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=218)** Select it and hit OK.
>
> **[3:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=221)** And finally, I'm going to grab an output instruction and then select the second conveyor.
>
> **[3:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=234)** Now to keep the rung on I'm going to add a seal in instruction of the second conveyor bit.
>
> **[4:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=242)** So I'm going to grab a branch here then using an XIC instruction and place it here.
>
> **[4:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=253)** And then look for the bit address of the second conveyor.
>
> **[4:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=261)** Finally, I'm going to add the instruction for sensor B meaning when the box reaches sensor B this will stop the conveyor.
>
> **[4:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=271)** So I'm going to grab an XIC instruction and then place it here and look for the address of sensor B.
>
> **[4:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=283)** Select it and click OK.
>
> **[4:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=286)** Now the reason why I used an XIC instruction for sensor B because sensor B acts as normally closed.
>
> **[4:58](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=298)** Then I'll do the same for the first rung I'll grab an XIC instruction and add it here and then look for sensor B address.
>
> **[5:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=313)** Select it and hit OK.
>
> **[5:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=316)** Now this instruction makes sure that the entry conveyor stops when the box reaches sensor B.
>
> **[5:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-1-programming?u=76281980&t=325)** If you need a refresher on why these sensors act similar to a normally closed contact I have an optional video at the end of this chapter giving an overview of retro-reflector sensors.

> [!info]- Semantic Content
>
> **Env Vars:** xic (6), led (2), xio (2), plc (1)
> **Code Keywords:** finally, (2)
> **UI Navigation:** scroll down (1), select the (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Speakers:** - for (1)

#### Part 2: Programming
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=0)** - [Instructor] The last part of the process is adding the stop-push button.
>
> **[0:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=4)** To stop the process at any time, both conveyors need to be off.
>
> **[0:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=10)** And once we press on the start-push button again, the process resume.
>
> **[0:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=16)** So I'm going to add an XIC instruction in both rungs.
>
> **[0:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=21)** I'm using an XIC instruction because the stop-push button is a normally closed contact.
>
> **[0:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=29)** So I'm going to grab an XIC instruction and then look for the address of the stop-push button.
>
> **[0:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=38)** And I'll do the same for the second rung.
>
> **[0:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=45)** Now, this part ensures that both conveyors will stop as soon as the stop-push button is pressed.
>
> **[0:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=53)** Now, looking back at the program, we see that for the entry conveyor, it will start again as soon as I press on the start-push button.
>
> **[1:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=64)** However, in order to make these second conveyor start again, I need to program another option in case it stops in the middle of the process.
>
> **[1:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=74)** So for that, I'm going to add another branch for the second rank.
>
> **[1:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=80)** And for this option, I'm going to add an XIC instruction of the start-push button and an XIO instruction of the second conveyor.
>
> **[1:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=103)** So this option means; whenever the start-push button is pressed and the second conveyor isn't working, then activate the second conveyor.
>
> **[1:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=115)** Finally, I'm going to add another rung and I'm going to add an XIO instruction of the stop-push button.
>
> **[2:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=129)** And I'm going to add the output which is red LED
>
> **[2:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=140)** as well as the stop-push button light.
>
> **[2:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/part-2-programming?u=76281980&t=147)** So this rung means; whenever the stop-push button is pressed, both the red LED and the stop-push button light are on.

> [!info]- Semantic Content
>
> **Env Vars:** xic (4), xio (2), led (2)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Project demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=0)** - [Narrator] Now in order to test the program, I need to download it to the simulator PLC.
>
> **[0:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=5)** So I'm going to go ahead click on the simulator PLC window, turn on the power.
>
> **[0:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=14)** And I want to make sure that I have the connection path, which is there.
>
> **[0:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=20)** Now I'm going to go ahead and click on connect.
>
> **[0:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=26)** Click on download current project to the controller, click download.
>
> **[0:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=33)** Now the download is complete.
>
> **[0:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=35)** So I'm going to go ahead to factory IO and then I go to file drivers and then connect to the simulator PLC.
>
> **[0:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=48)** All right, I'm going to go back to the scene.
>
> **[0:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=50)** Now we need to make sure that the PLC simulator is in the run mode.
>
> **[0:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=55)** So click on run here, click okay.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=59)** And then go back to the scene and click run.
>
> **[1:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=64)** Now to test the program, I'm going to go ahead and click on the start push button.
>
> **[1:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=75)** Now you see, I can stop the process at any time.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=77)** Once I press on, start again, the process resume.
>
> **[1:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=91)** Now I have the two softwares on the screen and I want you to track what happens at each rank during the process.
>
> **[1:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=100)** So I'm going to go ahead and start the process and you can follow along.
>
> **[2:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-16980134?u=76281980&t=121)** And once we reach to this point, we know now that we have successfully connected both softwares and that the PLC program that we wrote actually works.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (1)
> **Env Vars:** plc (5)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Speakers:** - [narrator] (1)

#### Optional: Retroreflective sensors overview
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=0)** - [Instructor] This is an optional video, a refresher to give you an overview on the working mechanism of retro-reflector sensors that are part of the photo electric sensors.
>
> **[0:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=14)** These sensors in this scene are retro-reflector sensors.
>
> **[0:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=19)** And there is a reflector part as well for each sensor.
>
> **[0:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=24)** Retro-reflector sensors act as normally closed contact.
>
> **[0:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=30)** They are part of photoelectric sensors.
>
> **[0:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=34)** A photoelectric sensor consists of an emitter for emitting light and a receiver for receiving light.
>
> **[0:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=45)** The light source for the majority of photoelectric sensors is infrared or visible light, generally red.
>
> **[0:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=54)** When the emitted light is interrupted or reflected by the sensing object, it changes the amount of light that arrives at the receiver.
>
> **[1:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=66)** The receiver detects the change and converts that into an electrical output.
>
> **[1:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=73)** In a retro-reflector sensor, the emitter and the receiver are integrated into a single housing.
>
> **[1:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=83)** The light emitted by the emitter is being reflected using a reflector to be received back by the retro-reflector sensor.
>
> **[1:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=94)** If the light beam is interrupted by an object the output is switched off.
>
> **[1:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=101)** So the sensor is always on if there's no interruption, acting similar to a normally closed contact.
>
> **[1:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/optional-retroreflective-sensors-overview?u=76281980&t=109)** And here is an illustration showing the placement of one of the retro-reflector sensors within the project of this chapter.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 6. 5. CCW and Factory I/O Filling Tank with Timer Project

#### Filling a water tank project
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=0)** - [Narrator] This project includes using the scene from Factory IO to fill an empty tank, using a timer.
>
> **[0:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=10)** I have provided you with the scene file.
>
> **[0:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=12)** You can find it in chapter five folder.
>
> **[0:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=16)** For this project, I'm going to write a latter logic program following these steps.
>
> **[0:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=23)** When pressing on the fill push button, a timer starts and the fill valve is open for 15 seconds.
>
> **[0:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=32)** The time is showing on the display.
>
> **[0:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=36)** When the time is done, the fill valve closes.
>
> **[0:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=42)** Then, when we press on the discharge push button, the discharge valve is activated, releasing the water out of the tank.
>
> **[0:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=52)** This is a demonstration of the project showing the valves, the tank, and the Control Panel in the Factory IO scene.
>
> **[1:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=61)** And, also, I'm using a PLC simulator from Connected Components Workbench software.
>
> **[1:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=69)** Here is a list of the inputs and outputs for this project.
>
> **[1:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=76)** You can also see them in Factory IO by going to File and Drivers.
>
> **[1:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=81)** And here's a list of the inputs and outputs for this scene.
>
> **[1:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=87)** I have provided you with this start project file of Connected Components Workbench software and you can find it in chapter five.
>
> **[1:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=98)** I've added the input and output addresses in the Controller Variables section.
>
> **[1:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=104)** I've also kept the alias names the same as they appear in Factory IO software.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=112)** Now, for this chapter, and for the next one, I'm going to change the theme of the Connected Components Workbench software to Logix.
>
> **[2:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=123)** The software is going to behave the same, but I thought I would give you the opportunity to see both themes.
>
> **[2:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=131)** I'm going to go ahead and open the simulator PLC window, and click on Power on.
>
> **[2:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=138)** Now, going back to Factory IO software, I have added the IP address of the simulator PLC into Factory IO.
>
> **[2:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=147)** But for you, you need to change the IP address to match what you have in your simulator PLC.
>
> **[2:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=153)** And you can do that by going to Configuration, and then change it from here.
>
> **[2:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=161)** I will show the programming for this project in three steps.
>
> **[2:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=167)** First, by covering the programming of the Fill and Discharge push buttons and valves.
>
> **[2:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=173)** Second, covering the programming of adding timer into the later logic program.
>
> **[3:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=180)** Third, covering the programming of sending and showing the time on the display.
>
> **[3:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/filling-a-water-tank-project?u=76281980&t=186)** Here is a demo from Factory IO website showing this scene for reference, if you want to explore more.

> [!info]- Semantic Content
>
> **Env Vars:** plc (4)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)

#### Step 1: Program fill and discharge pushbuttons
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=0)** - [Instructor] Now for this chapter and for the next one, I'm going to change the theme in Connected Components Workbench software to Logix, making the software similar to Allen Bradley Autologic's 5000.
>
> **[0:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=17)** The software still behaves the same but I thought I would give you the opportunity to try and see both themes.
>
> **[0:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=26)** So now first, I'm going to go to Program1 and double click.
>
> **[0:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=31)** Then I'm going to add an instruction for the fill push button.
>
> **[0:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=36)** So I'm going to grab an XIC instruction and add it to the rung.
>
> **[0:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=41)** Then go to the dropdown menu here and then select Micro850.
>
> **[0:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=47)** And then scroll down all the way until you find the fill push button.
>
> **[0:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=53)** So I'm going to double click here.
>
> **[0:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=56)** Now, this will activate the filling valve and the green LED.
>
> **[1:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=62)** So I'm going to grab an output instruction, and then go to Micro850.
>
> **[1:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=72)** And look for the fill valve.
>
> **[1:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=76)** It's output zero, so I'm going to select it and hit OK.
>
> **[1:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=81)** Then I'm going to add a branch here.
>
> **[1:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=87)** And grab another output and add it here.
>
> **[1:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=92)** Go to Micro850.
>
> **[1:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=98)** And then select the Filling LED Green.
>
> **[1:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=102)** And hit OK.
>
> **[1:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=105)** Now you may notice that the output instructions look a little bit different than the previous projects because now they're matching the new theme that we've just selected, which is Logix, similar to Allen Bradley Autologic's 5000.
>
> **[2:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=122)** All right, now I'm going to add another rung.
>
> **[2:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=126)** And then I'll grab an XIO instruction, and then I will look for the discharge push button.
>
> **[2:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=136)** So I'm going to scroll down.
>
> **[2:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=139)** Here's the address for the discharge push button.
>
> **[2:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=142)** I select it and click OK.
>
> **[2:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=146)** And now this activates the discharge valve and the red LED.
>
> **[2:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=151)** So I'm going to grab an output instruction.
>
> **[2:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=155)** Again, go to Micro850.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=158)** And look for the discharge valve, which is output two.
>
> **[2:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=167)** And here's another output.
>
> **[2:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=170)** Go into Micro850 and then look for the red LED here.
>
> **[2:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=177)** If you don't see the full name, I'm going to expand it so you can see the full name here.
>
> **[3:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=182)** All right, I'm going to select it, hit OK.
>
> **[3:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-fill-and-discharge-pushbuttons?u=76281980&t=187)** Note here that I used an XIO instruction because the red button is normally close contact.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), scroll down (2), dropdown (1), select the (1)
> **Env Vars:** led (4), xio (2), xic (1)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Step 2: Adding timer (TON) in CCW software
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=0)** - [Instructor] The next step is adding a timer, that when pressing on the fill push button, a timer starts and the valve is open for 15 seconds.
>
> **[0:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=12)** After the time is done, then the full valve closes.
>
> **[0:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=19)** So I need to add the timer in this rung because I want to link it with the fill push button.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=28)** All right, I'm going to go ahead and look for the timer instruction.
>
> **[0:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=32)** So I'm going to use this arrow to scroll.
>
> **[0:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=35)** Then I'm going to click on the timer counter tab.
>
> **[0:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=39)** And here I'm going to add first a branch.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=44)** Then I'm going to select timer, on-delay and add it here.
>
> **[0:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=50)** You can read more about timers within Connected Components software here using this document.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=59)** You can also find a reference by going to Help, and click on Connected Components Workbench.
>
> **[1:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=68)** This will take you to this page.
>
> **[1:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=70)** Then you can type in timer, for example, and here you can see the timer instructions.
>
> **[1:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=78)** So I'm going to look for the timer, on-delay, and I click on it here.
>
> **[1:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=84)** For the timer in Connected Components software, the PT stands for the maximum programmed time, which is the preset value.
>
> **[1:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=96)** How long you want to program the timer for.
>
> **[1:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=101)** The ET is the current elapsed time, meaning the accumulated time.
>
> **[1:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=110)** Now, unlike other software, in Connected Components software, the timer does not need a time base.
>
> **[1:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=119)** So here's an example from the manual.
>
> **[2:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=122)** If I want to set a timer for three seconds, then I would type T, the number sign, three and S, as shown here.
>
> **[2:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=135)** So for our example, I would type in T, the number sign, 15 and then S.
>
> **[2:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=146)** So this sets the timer to 15 seconds.
>
> **[2:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=150)** This is a great feature comparing to other software.
>
> **[2:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=155)** Another difference in Connected Components software is that the timer does not have a timer timing bit, like in RSLogix, for example.
>
> **[2:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=168)** If we look back at the manual here, the Q bit is true when the programmed time has elapsed.
>
> **[2:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=177)** So this one acts as a done bit.
>
> **[3:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=182)** Now, when we add a timer instruction, this adds a timer tag in the local variables.
>
> **[3:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=190)** So here I'm going to adjust the window so we can see the bits.
>
> **[3:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=194)** I'm going to expand it here.
>
> **[3:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=198)** Now, here you can see all the bits for the timer instruction.
>
> **[3:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=203)** Now, the one I'm interested in is the Redge bit.
>
> **[3:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=207)** This bit is true on a rising edge, basically acting like an enabled bit.
>
> **[3:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=215)** So I can use both bits to create an equivalent to a timer timing bit.
>
> **[3:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=224)** Timer timing is when the timer is enabled and when the time has not elapsed yet.
>
> **[3:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=233)** So now I'm going to go back to the program.
>
> **[3:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=235)** So I'm going to adjust the window.
>
> **[3:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=237)** Double click on Program 1.
>
> **[4:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=241)** And then I'm going to add a seal in instruction.
>
> **[4:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=244)** So here I'm going to grab a branch.
>
> **[4:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=249)** Now I'm using this arrow, so I want to go back to the Favorite tab here.
>
> **[4:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=255)** And then I will add the two instructions here.
>
> **[4:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=259)** So I'm going to grab an XIC instruction and place it here.
>
> **[4:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=265)** Now, in order to see the timer tag, I need to deselect the condition here.
>
> **[4:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=271)** So I'm going to close that one here.
>
> **[4:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=274)** Now, I can see the timer tag, so I'm going to expand it.
>
> **[4:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=280)** Then I'm going to select the Redge bit.
>
> **[4:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=285)** Click OK.
>
> **[4:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=287)** The second one that I'm looking for is an XIO instruction.
>
> **[4:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=291)** So I'm going to place it here.
>
> **[4:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=294)** Then I'll do the same.
>
> **[4:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=295)** I'm going to deselect the DataType condition.
>
> **[5:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=301)** Expand the timer tag.
>
> **[5:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=304)** And then I'm going to select the Q bit and hit OK.
>
> **[5:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=310)** So basically, these two instructions act like a timer TON bit.
>
> **[5:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=317)** This will keep the rung on.
>
> **[5:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-adding-timer-ton-in-ccw-software?u=76281980&t=319)** As soon as the fill push button is pressed, the fill valve is open as long as the timer is timing.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), select the (2)
> **Env Vars:** xic (1), xio (1), ton (1)
> **Definitions:** stands for (1), is a  (1), is an  (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Code Keywords:** for. (1)
> **Speakers:** - [instructor] (1)

#### Step 3, part 1: Showing time on display in Factory I/O
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=0)** - [Instructor] Now the next step is showing the time on the timer display.
>
> **[0:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=6)** The digital display in Factory I/O software has multiple configuration settings: voltage, integer, BCD, and hexa.
>
> **[0:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=18)** Now in order to know what setting I'm using, so you click on the item here, you right-click and then go to configuration.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=28)** For this example, I used integer values.
>
> **[0:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=34)** Now at this step, I need to send the value of the timer ET which is the current elapsed time to our address of the timer display in Factory I/O.
>
> **[0:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=49)** The timer display address is integer output zero.
>
> **[0:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=55)** So I need to use a move instruction that moves values from one address to another.
>
> **[1:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=64)** You can read more about the move instruction using this document.
>
> **[1:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=69)** For the move instruction, the data types of the two addresses must be the same.
>
> **[1:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=76)** For example, moving integer to an integer, Boolean to a Boolean, et cetera.
>
> **[1:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=83)** In our case, the data type here is time.
>
> **[1:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=88)** That is different than the destination data type, which is an integer.
>
> **[1:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=94)** So for that, we can use one of the data conversion instructions.
>
> **[1:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=100)** They are used to convert the data type of a variable to a different data type.
>
> **[1:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=108)** Here is a full list of data conversion instructions.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=112)** The one we're interested in is any to integer.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=120)** I can add this instruction before the move instruction.
>
> **[2:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=124)** This will convert the time to an integer value, then I can use that and send it to the display address.
>
> **[2:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=134)** So going back to the software, I'm going to add a rung here, then I'm going to click on the Conversion tab and select any to integer conversion.
>
> **[2:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=148)** So I'll drag it to the rung here.
>
> **[2:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=152)** Now, the next thing I want to do is I want to go to the Move tab and then select the move instruction and drag it to the rung.
>
> **[2:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=162)** Now I need to create a local variable tag.
>
> **[2:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=167)** I'm going to name it TimeInInteger.
>
> **[2:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=171)** The data type is integer.
>
> **[2:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=175)** And going back to the program, so here, I'm going to choose the elapsed time.
>
> **[3:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=183)** So I'm going to type in the name of the timer, which is TON dot and then select this bit.
>
> **[3:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=194)** Then this instruction will convert that to an integer and I'm going to use the tag that I just created, which is TimeInInteger.
>
> **[3:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-1-showing-time-on-display-in-factory-i-o?u=76281980&t=205)** Then I'll use this value TimeInInteger and I'll send it to the timer display.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (2), right-click (1), select the (1)
> **Code Keywords:** case, (1), type, (1), type. (1)
> **Env Vars:** bcd (1), ton (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Project demo 1
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=0)** - [Instructor] Now let's try to test what we have so far.
>
> **[0:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=4)** So I'm going to go to the simulator window.
>
> **[0:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=8)** Click on power on.
>
> **[0:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=10)** And then I'm going to download this program into the PLC Simulator.
>
> **[0:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=16)** So I'm going to click on Connect here, then select the connection path.
>
> **[0:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=24)** Click on the IP address of the simulator PLC.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=28)** Click OK.
>
> **[0:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=30)** Then click on Download current project to controller.
>
> **[0:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=35)** And click Download.
>
> **[0:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=39)** Then I'm going to Factory I/O here to Drivers, and I'm going to connect to the PLC Simulator.
>
> **[0:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=49)** All right, I'm going to go back, and I'm going to make sure that the Simulator PLC is in the run mode.
>
> **[0:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=57)** Click OK.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=59)** And then go back to the scene, and click Run.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=65)** Now we click on the full push button, and we see that the values are showing on the display, which is great.
>
> **[1:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=73)** However, they are not in seconds.
>
> **[1:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=76)** The display is showing the values in milliseconds.
>
> **[1:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo-1?u=76281980&t=81)** We can actually fix that in the Connected Components program.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (1), select the (1)
> **Env Vars:** plc (4)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Step 3, part 2: Showing time on display in Factory I/O
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=0)** - [Instructor] I'm going to go back to this manual, showing the any to integer instruction.
>
> **[0:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=7)** I'm going to scroll down a little bit here and I want to show you these examples.
>
> **[0:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=15)** In this example, it is showing that if the time is t# zero seconds, 46 milliseconds,
>
> **[0:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=27)** it's going to show us a number of 46.
>
> **[0:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=32)** This means for our example, if the time is set for 15 seconds, it's going to show us a number of 15,000.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=44)** So in order to show values in seconds we need to multiply the value after the conversion by 0.001.
>
> **[0:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=56)** So going back to the software, I'm going to the math tab here and I'm going to use a multiply instruction and add it before the MOV instruction.
>
> **[1:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=72)** If you want to read more about the multiply instruction, please refer to this manual.
>
> **[1:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=79)** All right, so now I'm going to add the TimeInInteger.
>
> **[1:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=85)** This is the tag that we took from the conversion here and I want to multiply it by 0.001.
>
> **[1:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=96)** Then I'll save the results in the same tag.
>
> **[1:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=101)** So I'm going to say, TimeInInteger, I'm going to go ahead and open the PLC simulator window, if it's not open for you, and I'm going to turn on the power and let's see what happens when I try to download this program into the PLC simulator.
>
> **[2:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=123)** So I'm going to go to connect, click on download current project to the controller.
>
> **[2:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=131)** Now, this gives me an error message.
>
> **[2:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=134)** So let's see what this error message is.
>
> **[2:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=139)** So you see here in the error list, there is an error saying we are expecting an integer type variable or constant.
>
> **[2:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=149)** So in order to know what this message is representing, I can double click on it and then scroll down, and this takes me to the multiply instruction.
>
> **[2:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=165)** Now, the data type of this number is long real and the data type of this tag is integer.
>
> **[2:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=174)** Both of them need to be matching.
>
> **[2:58](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=178)** So in order to overcome this issue, I'm going to multiply first and then send the data to the timer display.
>
> **[3:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=188)** I'm going to move the multiply instruction here, I'm going to the conversion tab, and then I'm going to select ANY_TO_LREAL, and then I'm going to add it here.
>
> **[3:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=202)** Now, what I'm trying to do is I'm going to change the timer value into a long real and I'm going to multiply that by 0.001, and then I'm going to change that to integer and send it to the timer display.
>
> **[3:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=221)** So to do that, I'm going to the local variables here and I'm going to create a tag.
>
> **[3:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=231)** I'm going to name it TimeValueInLREAL
>
> **[3:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=239)** and this is type long real and then hit enter.
>
> **[4:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=247)** And I'm going to create another tag and I'm going to name it TimerValueMultiply which is the value after the multiplication, and this is a long real as well.
>
> **[4:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=262)** Alright, I'm going to just enter here so I can save it.
>
> **[4:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=266)** And then I'll go back to the program here and I'm going to look for the timer ET bit,
>
> **[4:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=279)** this is the bit of the elapsed time, hit enter.
>
> **[4:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=285)** Then I'm going to save that in the TimerValueInLREAL.
>
> **[4:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=292)** So this instruction converts the timer type to a long real,
>
> **[5:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=301)** then I'm going to take the value in long real, multiply it by 0.001, and I'm going to save that in the TimerValueMultiply.
>
> **[5:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=318)** Then for this instruction here, I'm going to take the timer value after multiplication here and this instruction will convert that into a TimerInInteger.
>
> **[5:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=337)** And then the last instruction is actually taking that value and send it to the timer display.
>
> **[5:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=345)** So now in order to know if there are any errors, I can either connect again and download the program to the simulator PLC, or I can verify the program or build it and see if there are any errors.
>
> **[6:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=361)** So I'm going to show you what happens when we actually build the program.
>
> **[6:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=367)** So now in the message you see at the bottom where it says outputs, so you see here, it says there are zero errors.
>
> **[6:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=376)** So you can either try to verify the program before downloading it, which is a very good practice.
>
> **[6:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=383)** But since we're using a simulator PLC you can go ahead and download it right away.
>
> **[6:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=389)** Now, one of the reasons that I wanted to show you this step one programming is to put emphasis on the fact that troubleshooting while programming is actually part of the learning process.
>
> **[6:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=403)** I still go through it to this day, but once you advance your programming skills, once you get familiar with the software you're working with, you would start to think about these steps ahead of time including the conversion, the data type, the download, et cetera.
>
> **[7:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=421)** So I'm going to go back to the program here and the last part is I want to add an XIO instruction.
>
> **[7:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=429)** So I'll go to the favorite tab here and grab an XIO instruction and place it in the second rung, and then go to Micro850 and here I'm looking for the filling valve, so I'm going to highlight it and click OK.
>
> **[7:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=450)** Now this ensures that the discharge valve cannot be activated while the filling valve is on.
>
> **[7:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=459)** And for the third rung here, I'm going to grab an XIC instruction and add it at the beginning, and what I'm looking for is for the timer tag.
>
> **[7:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=472)** So I'm going to deselect this one and then go to the timer instruction and then select the Redge bits, click OK, and this adds it to this instruction.
>
> **[8:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=490)** Now this instruction will ensure that the display is only on while the timer is on.
>
> **[8:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=500)** I'm going to also add a branch here and then I'm going to grab an XIO instruction and then go to Micro850 and this time select the discharge push button and click OK.
>
> **[8:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=522)** Now, this instruction ensures that the display number keeps showing until the discharge push button is pressed.
>
> **[8:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=532)** I added an XIO instruction because it's a normally closed contact.
>
> **[8:58](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=538)** Now, if you want to read more about the time data type, go to help and click on connected components workbench.
>
> **[9:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=547)** This will take you to this page and type in time data type, and then click here.
>
> **[9:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-part-2-showing-time-on-display-in-factory-i-o?u=76281980&t=556)** Now, this page is showing you the time data type and the format, if you want to show it in days, hours, minutes, seconds, and milliseconds, and you can see there are two examples at the bottom showing you a time format including hours and minutes.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), click on (3), scroll down (2), select the (2), open the (1)
> **Env Vars:** plc (4), xio (4), mov (1), any_to_lreal (1), xic (1)
> **Code Keywords:** type, (3), let (2)
> **Versions:** 0.001 (4)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** download the (1)
> **Best Practices:** good practice (1)

#### Final project demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=0)** - So now I'm going to download this program into the simulator PLC.
>
> **[0:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=5)** So, the first thing is I'm going to open the simulator PLC window, make sure that the power is on, then I'm going to go back to the software and click to connect.
>
> **[0:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=21)** Then select "Download current project to the controller," click on "Download."
>
> **[0:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=29)** So, now the download is completed.
>
> **[0:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=31)** That means the ladder logic program has been downloaded into the simulator PLC.
>
> **[0:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=38)** So, going back to factory IO, I'm going to go to "File," click on "Drivers," then connect to the simulator PLC.
>
> **[0:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=48)** Right, I'm going to go back to the scene.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=51)** And now I want to make sure that the simulator PLC is in the "Run" mode.
>
> **[0:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=56)** Click "Okay," then click on "Run here."
>
> **[1:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=63)** Now I'm going to test the program and see the time showing in the timer display.
>
> **[1:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=69)** So, I'm going to go ahead and click on the "Full" push button.
>
> **[1:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=89)** You see now that the time now is showing in seconds.
>
> **[1:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=93)** I can also test the program and click on the "Discharge" push button and that will let the water out of the tank.
>
> **[1:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/final-project-demo?u=76281980&t=105)** So, now we have accomplished exactly what we needed for this project.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (1)
> **Env Vars:** plc (5)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Code Keywords:** let (1)
> **Speakers:** - so (1)


### 7. 6. Sorting Boxes by Height

#### Sorting boxes by height project
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=0)** - [Instructor] The objective of the fourth project is to write a program to sort cardboard boxes by height.
>
> **[0:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=9)** I am using a pre-built scene from Factory IO called Sorting by Height, Basic.
>
> **[0:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=17)** I have provided you with this Factory IO scene file.
>
> **[0:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=21)** You can find it in chapter six folder.
>
> **[0:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=25)** For this project, I chose to have the small boxes to go left and the large boxes to go right.
>
> **[0:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=35)** The boxes are being admitted randomly into the scene.
>
> **[0:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=45)** Now, in order to see the input and output addresses, you click here, go to Drivers and here is a list of the input and output addresses for this scene.
>
> **[1:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=60)** I have provided you with this start project file of Connected Components Workbench software.
>
> **[1:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=67)** You can find it in chapter six folder.
>
> **[1:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=71)** I have added the input and output addresses from the Factory IO scene into this start project file under the Controller Variable section.
>
> **[1:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=84)** I have added the IP address of the simulator PLC into the factory IO scene.
>
> **[1:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=91)** For you, you just need to change the IP address to match what you have in your simulator PLC.
>
> **[1:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=99)** You can do that by clicking on Configuration and change the IP address here.
>
> **[1:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=106)** For this project I'm not going to use everything in this scene, but for scenes like this one that has multiple items in it.
>
> **[1:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=116)** This is how I personally approach it before I actually start the later logic programming.
>
> **[2:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=122)** I would save a copy of the scene, maybe name it, copy one,
>
> **[2:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=131)** click Save, and then I would literally try to separate each item and look for its sensors and actuators something for me so I can get familiar with the scene and its objects.
>
> **[2:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=145)** If it's something I want to read about, I would go to the factory IO website and search for it.
>
> **[2:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/sorting-boxes-by-height-project?u=76281980&t=153)** So for the first section of this chapter, I will give you an overview of the items and show you what is needed to help us in the latter logic programming.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Env Vars:** plc (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Understanding the Factory I/O scene, part 1: Entry conveyor and light array
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=0)** - This scene consists of three conveyors, an entry conveyor and right and left conveyors.
>
> **[0:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=9)** There is a chain transfer in the middle that connects the three conveyors together, looking like this in general.
>
> **[0:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=22)** Each conveyor has couple of sensors and actuators, meaning inputs and outputs.
>
> **[0:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=31)** Here are the tags for the first conveyor.
>
> **[0:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=34)** We have an emitter, a light array sensor and the entry conveyor output.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=44)** The emitter is used to emit items into the scene.
>
> **[0:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=48)** For our case, we have boxes.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=51)** The emitter comes with different options for configuration.
>
> **[0:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=57)** I can click on the emitter here and then right click and you can see the options here.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=65)** I'm going to keep the same settings.
>
> **[1:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=67)** Note that the maximum and minimum time are equal.
>
> **[1:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=73)** This ensures a constant emission intervals for the boxes.
>
> **[1:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=79)** There are four types of boxes, as you can see listed here.
>
> **[1:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=86)** To select the parts to be emitted, click on part to emit.
>
> **[1:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=92)** For this scene I chose to emit these boxes.
>
> **[1:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=97)** If more than option is selected, which is the case here, the emitter will emit randomly.
>
> **[1:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=105)** I will keep the settings as they are here.
>
> **[1:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=109)** At the end of the first conveyor, there is a light array sensor.
>
> **[1:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=114)** The light array includes an emitter and a receiver which consists of a set of parallel light beams used to create a sensing field.
>
> **[2:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=128)** The light array sensor can be configured to work in numerical, digital or analog mode.
>
> **[2:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=138)** To select the configuration, you can click on the item and then right click on it and select configuration.
>
> **[2:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=147)** I currently have it as digital.
>
> **[2:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=150)** When selected as digital, the light sensors act as normally open sensors.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=158)** And in order to add name to each of the light beams you can simply click on this icon here and then you can give it a name.
>
> **[2:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=168)** So for example, I can say this is a high sensor, two and hit enter, and the same thing goes for the other naming.
>
> **[2:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=179)** So I can select any of them and I can change the name as well.
>
> **[3:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=185)** I will leave the names as shown in the scene.
>
> **[3:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=189)** I have four of the light beams selected.
>
> **[3:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=193)** Pallet, low, high, and very high sensors.
>
> **[3:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-1-entry-conveyor-and-light-array?u=76281980&t=200)** This will help to determine the size of the cupboard boxes.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), select the (2)
> **Definitions:** is a  (3)
> **Code Keywords:** case, (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - this (1)

#### Understanding the Factory I/O scene, part 2: Chain transfer
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=0)** - [Instructor] Now the part that helps in deciding where to transfer the boxes is the chain transfer.
>
> **[0:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=8)** The chain transfer is used to transfer the boxes into adjacent conveyors.
>
> **[0:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=15)** In our scene the chain transfer is placed between the three conveyors.
>
> **[0:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=21)** Now I'm going to go to the pallet window here and then search for chain transfer.
>
> **[0:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=29)** So I'm going to grab this one here and then place it in the scene.
>
> **[0:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=35)** I'm going to close the pallet window and then I'll drag it a little bit to the side.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=44)** I'm going to click on the actuators tags to see the tags for the chain transfer.
>
> **[0:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=50)** And I'm going to right click and adjust its orientation.
>
> **[0:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=57)** The chain transfer has four Boolean outputs one on each side as you can see here.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=65)** Now I'm going to grab the chain transfer from our scene.
>
> **[1:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=72)** So the chain transfer is actually here so I'm going to drag it and then place it beside the one that I just added.
>
> **[1:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=81)** I'm going to put them close to each other so we can compare these two items.
>
> **[1:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=87)** For our scene each output of the chain transfer has a name as following.
>
> **[1:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=95)** The one at the back is load.
>
> **[1:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=98)** And I'm going to use this one to make the boxes move into the chain transfer.
>
> **[1:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=103)** The one on the front is unload then the left and right are transfer left and transfer right.
>
> **[1:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=115)** So here's a demo showing the chain transfer tags for our scene.
>
> **[2:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=122)** The chain transfer in this scene also has some sensors placed around it.
>
> **[2:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=129)** There is a capacitive sensor at the back that I named "Loaded capacitive sensor" and two retro reflector sensors on each side named "At left entry sensor" and "At right entry sensor".
>
> **[2:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=151)** Here are more information about the capacitive sensor and the retro reflector sensor.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=158)** Retro reflector sensors act as normally closed contact.
>
> **[2:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-2-chain-transfer?u=76281980&t=164)** Capacitive sensors act as normally open contacts.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Understanding the Factory I/O scene, part 3: Right and left conveyors
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=0)** - [Instructor] Now the left and right conveyors have similar setups.
>
> **[0:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=5)** At the end of each conveyor there is a remover.
>
> **[0:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=9)** As the name indicates, removes one or more items from the scene.
>
> **[0:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=16)** For our case, the remover removes the cupboard boxes once they are sorted.
>
> **[0:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=24)** Here is more information about the remover item including the configuration settings.
>
> **[0:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=31)** There are also two retro-reflector sensors at the end of each conveyor, named At Right Exit Sensor and At Left Exit Sensor.
>
> **[0:46](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=46)** They are similar to the ones placed by the chain transfer at the beginning of each conveyor.
>
> **[0:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=54)** So each conveyor has an entry and an exit sensor.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=59)** Both are retro-reflector type.
>
> **[1:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/understanding-the-factory-i-o-scene-part-3-right-and-left-conveyors?u=76281980&t=63)** The example you see on the screen showing these sensors and actuators for the right conveyor.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), type. (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Step 1: Program Start button to start the entry conveyor
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=0)** - [Narrator] The first part is to program the movement of the entry conveyor.
>
> **[0:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=5)** That pressing on the start pushbutton activates the entry conveyor, while carrying the boxes toward the chain transfer.
>
> **[0:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=16)** So I'm going to grab an XIC instruction.
>
> **[0:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=22)** And then click Micro850, and scroll down, looking for the start pushbutton.
>
> **[0:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=27)** Highlight it, and then click OK.
>
> **[0:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=30)** Then I'm going to grab an output instruction.
>
> **[0:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=35)** Go to Micro850, then scroll down, to look for the entry conveyor address.
>
> **[0:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=45)** Select it and hit OK.
>
> **[0:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=47)** Then I'm going to grab a branch.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=51)** And I'm going to place this one here.
>
> **[0:55](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=55)** Look for another output.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=59)** And this time I'm going to look for the start light.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=65)** Select it and hit OK.
>
> **[1:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=67)** Now, in order to keep the entry conveyor on, I'm going to use a seal in instruction.
>
> **[1:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=75)** And then I'm going to grab an XIC instruction here.
>
> **[1:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=80)** Go to Micro850 and look for the address of the entry conveyor.
>
> **[1:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=88)** Select it and hit OK.
>
> **[1:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=90)** I'm going to add another instruction, an XIC instruction.
>
> **[1:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=96)** And this time, I'm going to look for the factory IO running.
>
> **[1:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=102)** Select it and hit OK.
>
> **[1:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=105)** This instruction is actually to indicate when the factory IO is in the run mode.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=112)** So every time we click on the run mode here, that instruction is activated.
>
> **[2:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=120)** Now I want the entry conveyor to stop once the box reaches near the chain transfer.
>
> **[2:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=127)** I chose it this way so that the software can pick up which lights of the light array are on.
>
> **[2:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=135)** And to have some time to prepare the box for the next step.
>
> **[2:21](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=141)** I'm going to use the pallet sensor from the light array.
>
> **[2:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=145)** So that when the box arrives to the light array, the conveyor stops.
>
> **[2:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=152)** So since the light array acts as normally open contact, I'm going to use an XIO instruction, and then I'm going to drag it to the rung, and then go to Micro850 and look for the pallet sensor address.
>
> **[2:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=170)** Highlight it and click OK.
>
> **[2:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=174)** I also want the entry conveyor to stop if there is a box already on the chain transfer.
>
> **[3:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=180)** I'm going to use the loaded capacitive sensor to tell me if there is a box there.
>
> **[3:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=187)** The capacitive sensor also acts as normally open contact.
>
> **[3:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=192)** So I'm going to use an XIO instruction as well.
>
> **[3:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=197)** So I'm going to select Micro850, and then look for the loaded capacitive sensor address.
>
> **[3:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=205)** Highlight it and click OK.
>
> **[3:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=209)** The last case that I want to stop the entry conveyor is if one of the boxes is already being transferred, left or right.
>
> **[3:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=220)** For that, I'm going to use the retro reflector sensors on each side of the chain transfer.
>
> **[3:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=228)** For the two sensors, they act as normally close contact.
>
> **[3:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=232)** So I'm going to use an XIC instructions.
>
> **[3:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=236)** I'm going to select Micro850.
>
> **[3:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=239)** And then look for the at right entry sensor.
>
> **[4:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=245)** Select it and hit OK.
>
> **[4:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=248)** Then I'm going to grab another XIC instruction.
>
> **[4:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=252)** Go to Micro850 and look for the left entry retro reflector sensor.
>
> **[4:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=260)** Finally, another condition for the entry conveyor to activate again is when one of the other conveyors are on.
>
> **[4:30](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=270)** Meaning there are already boxes there, and we are ready for another box to be loaded.
>
> **[4:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=278)** This will be more obvious in the next few rungs.
>
> **[4:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=283)** So now I'm going to add a seal in instruction for the both conveyors.
>
> **[4:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=289)** So I'm going to grab this one and place it here.
>
> **[4:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=292)** Then place an XIC instruction.
>
> **[4:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=296)** And then go to Micro850.
>
> **[4:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=299)** Scroll down, looking for the left conveyor.
>
> **[5:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=305)** Select it and hit OK.
>
> **[5:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=308)** And I'll do the same for the right conveyor.
>
> **[5:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=312)** I'm going to grab an XIC instruction.
>
> **[5:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=315)** Select Micro850, and then look for the right conveyor.
>
> **[5:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-1-program-start-button-to-start-the-entry-conveyor?u=76281980&t=323)** Select it and hit OK.

> [!info]- Semantic Content
>
> **Env Vars:** xic (7), xio (2)
> **UI Navigation:** go to (5), scroll down (3), click on (1)
> **Definitions:** is a  (2)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Step 2: Program moving into the chain transfer
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=0)** - The second part is, programming moving the boxes into the Chain Transfer.
>
> **[0:07](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=7)** Meaning any type of box.
>
> **[0:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=9)** As soon as the box reaches the Array Sensor, and there isn't any box already on the Chain Transfer, then transfer the box there.
>
> **[0:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=20)** In order to move the box into the Chain Transfer, I'm going to use the Loaded Capacitive Sensor, to know if there is a box there or not.
>
> **[0:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=31)** And the loading from the Chain Transfer, gets activated, when the box reaches the Light Array.
>
> **[0:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=39)** So I'm going to use the Pallet Sensor tag.
>
> **[0:44](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=44)** So going back to the software, I'm going to grab a Rung here, then adding an XIC instruction into the Rung, and then go to Micro850, looking for the address of the Pallet Sensor.
>
> **[1:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=62)** Selected and click OK.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=65)** Then I'm going to grab an XIO instruction, and drag it into the Rung.
>
> **[1:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=73)** Then select Micro850.
>
> **[1:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=77)** And I'm going to look for the, Loaded Capacitive Sensor address.
>
> **[1:23](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=83)** Highlight it and click OK.
>
> **[1:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=87)** Finally, I'm going to grab an Output instruction.
>
> **[1:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=91)** Go to Micro850.
>
> **[1:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=94)** And then I'm going to look, for the address of the Load tag, from the Chain Transfer.
>
> **[1:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=101)** The Load tag is an Output tag, so highlight it, and click OK.
>
> **[1:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-2-program-moving-into-the-chain-transfer?u=76281980&t=108)** This Rung means, that when the Pallet Sensor is activated, and no box is on the Chain Transfer, then Load the box into the Chain Transfer.

> [!info]- Semantic Content
>
> **Env Vars:** xic (1), xio (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - the (1)

#### Step 3: Program sorting the small boxes
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=0)** - [Instructor] To determine if this box is a small box, I'm going to use the first two sensors.
>
> **[0:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=8)** If the pallet sensor and the load sensor are on, and not the high sensor, this means this is a small box.
>
> **[0:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=19)** So to start programming this part, I'm going to click here, and go to the Local Variables.
>
> **[0:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=26)** And I'm going to create a Boolean tag for the small box.
>
> **[0:32](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=32)** So I named the tag SmallBox_LOW and it is a Boolean type.
>
> **[0:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=38)** And I'm also going to create another internal tag for the large box.
>
> **[0:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=45)** I'm going to name it LargeBox_high.
>
> **[0:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=50)** The tag name is LargeBox_high and it is a Boolean type as well.
>
> **[0:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=56)** All right, and then I'm going to go back to the program.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=59)** So I'm going to double click here.
>
> **[1:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=61)** And I'm going to add a rung.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=65)** Then I'm going to add an XIC instructions for the pallet and the low sensors.
>
> **[1:12](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=72)** So I'm going to go to Micro850.
>
> **[1:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=75)** And then look for the Pallet_sensor.
>
> **[1:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=79)** Hit OK.
>
> **[1:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=89)** I'm also going to add an XIO instruction for the High_sensor.
>
> **[1:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=100)** So now if the pallet sensor and the low sensor are active, and not the high sensor, this will activate the internal tag that I just created of the small box.
>
> **[1:53](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=113)** So I'm going to grab an output tag.
>
> **[1:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=116)** And this time, I'm going to select this Boolean tag.
>
> **[2:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=121)** And hit OK.
>
> **[2:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=123)** I'm also going to add a ceiling instruction and then I'm going to add an XIC instruction here and add the tag of the SmallBox and click OK.
>
> **[2:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=140)** Then I'm going to grab an XIO instruction and this time, I'm going to choose the LargeBox tag.
>
> **[2:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=149)** These two instructions will keep the small box bit on, as long as we don't have a large box.
>
> **[2:40](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=160)** I'm going to add another XIC instruction, and add it here.
>
> **[2:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=165)** And I'll go to the Micro850.
>
> **[2:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=171)** And this time, I'm going to select add Left_entry sensor.
>
> **[2:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=177)** Click OK.
>
> **[3:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=180)** This is to make sure that the left entry sensor is not on.
>
> **[3:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=185)** In order to avoid overlapping to make sure that there is no box at the left entry sensor.
>
> **[3:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=195)** Once it is a small box, and the box is already loaded on the chain transfer, then this activates the transfer left of the chain transfer.
>
> **[3:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=208)** The transfer left is part of the chain transfer to unload the box into the left side.
>
> **[3:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=218)** Now I'm going to add another rung.
>
> **[3:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=222)** And I'm going to add an XIC instruction of the SmallBox.
>
> **[3:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=228)** Click OK.
>
> **[3:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=231)** And I'm going to add an XIC instruction of the loaded capacitive sensor.
>
> **[3:57](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=237)** Go to Micro850.
>
> **[4:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=244)** This instruction ensures that there is a box already on the chain transfer.
>
> **[4:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=250)** Then this one activates the transfer left.
>
> **[4:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=253)** So I'm going to add an output instruction.
>
> **[4:16](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=256)** Go to Micro850.
>
> **[4:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=259)** And look for Transfer_left.
>
> **[4:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=264)** Highlight it and click OK.
>
> **[4:26](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=266)** I'm going to add another XIO instruction here and this time, select the LargeBox tag and click OK.
>
> **[4:35](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=275)** This instruction ensures that the transfer_left is only on when the box is small.
>
> **[4:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=285)** Once we transfer the box to the left, we need to activate the left conveyor to move the box all the way to the remover.
>
> **[4:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=296)** So I'm going to add another rung.
>
> **[5:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=300)** And then add an XIO instruction, go to Micro850 and look for add_left entry sensor.
>
> **[5:10](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=310)** So highlight it.
>
> **[5:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=313)** And click OK.
>
> **[5:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=315)** This instruction means that the box has already transferred to the left side.
>
> **[5:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=322)** Then I want to activate now the left conveyor, so I'm going to grab an output instruction.
>
> **[5:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=329)** Go to Micro850 and look for the left conveyor.
>
> **[5:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=336)** Highlight it and click OK.
>
> **[5:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=339)** So now I'm going to add the two instructions needed to keep the conveyor on until the box reaches the remover.
>
> **[5:48](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=348)** So I'm going to add a ceiling instruction first.
>
> **[5:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=351)** And add an XIC instruction of the left conveyor.
>
> **[6:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-3-program-sorting-the-small-boxes?u=76281980&t=364)** I'm going to add an XIC instruction of the ritual reflective sensor at the end of the conveyor, which is the Left_exit sensor.

> [!info]- Semantic Content
>
> **Env Vars:** xic (7), xio (4)
> **UI Navigation:** go to (7), select the (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (2)
> **Code Identifiers:** transfer_left (1), add_left (1)
> **Code Keywords:** type. (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Step 4: Program sorting the large boxes
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=0)** - [Instructor] For the large boxes the same principle is applied.
>
> **[0:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=4)** I'm going to use the light array sensors to determine the size of the box.
>
> **[0:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=11)** For a large box, there are two options.
>
> **[0:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=14)** The box is going to cut through the three sensors, pallet, low and high sensors, or all of the sensors including the very high sensor.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=28)** So I'm going to add a rank here, and then I will add the options for the large sensor.
>
> **[0:37](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=37)** So I have added the two options to activate the large box bit.
>
> **[0:43](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=43)** The first one is when the three sensors are on or the second option where all sensors are on.
>
> **[0:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=52)** So I can either add all the sensors, the pallet, low sensor, high sensor and very high sensor, or I choose to have only the pallet and the very high sensor to achieve the same output.
>
> **[1:05](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=65)** Now, in order to keep the large box bit on I'm going to add a seal-in instruction.
>
> **[1:14](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=74)** And finally, I'm going to add an XIC instruction and select the right entry sensor.
>
> **[1:25](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=85)** So this instruction means that the large box bit is on until the box is transferred to the right.
>
> **[1:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=96)** Now the rest has a similar operation to what we had for the small box.
>
> **[1:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=102)** Once there is a box on the chain transfer and it is a large box then transfer right.
>
> **[1:52](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=112)** As soon as the box being transferred to the right, at right entry sensor detects that then the right conveyor is activated until the box reaches the remover.
>
> **[2:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=126)** So I'm going to go ahead and add the two ranks similar to what we had for the small box.
>
> **[2:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=133)** First, I'm going to select the large box high.
>
> **[2:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=138)** Then add the loaded capacitive sensor.
>
> **[2:29](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=149)** Then add the transfer right.
>
> **[2:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=161)** Then adding an XI on struction of the right entry sensor.
>
> **[2:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=170)** The output for the right conveyor.
>
> **[3:04](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/step-4-program-sorting-the-large-boxes?u=76281980&t=184)** Then adding a seal-in instruction to keep the conveyor on until the box reaches the right exit sensor.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **UI Navigation:** select the (2)
> **Code Keywords:** finally, (1)
> **Env Vars:** xic (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Project demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=1)** To download the program I'm going to click on the simulator PLC window, click on power on, then go back to the software and click connect.
>
> **[0:15](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=15)** Now I'm going to choose the connection path, which is simply selecting the IP address of the simulator PLC.
>
> **[0:24](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=24)** Highlight it and click okay.
>
> **[0:28](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=28)** Then click on download current project to the controller.
>
> **[0:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=34)** So what I'm basically doing is downloading the later logic program into the simulator PLC.
>
> **[0:41](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=41)** Then select download. All right.
>
> **[0:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=45)** So now the download is complete.
>
> **[0:47](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=47)** I'm going to go ahead to factory IO.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=51)** Click on file drivers and then click connect.
>
> **[0:59](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=59)** I'm going to go back to the scene and I'm going to grab back the simulator panel C window, select run, and select run in factory IO as well.
>
> **[1:13](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=73)** All right, I'm going to click on the start push button.
>
> **[1:42](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=102)** So now you see in the demo that the program is actually working that the small boxes go to the left side and the large boxes go to the right side.
>
> **[1:54](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=114)** So the later logic program actually works according to what we programmed.
>
> **[2:01](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=121)** I want to share with you something that sometimes if the factory IO software does not behave, according to what you planned, you can change actually the speed by clicking here and change the speed accordingly.
>
> **[2:17](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=137)** So I currently have it at the default setting for the time scale.
>
> **[2:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=142)** But for example, I want to show you if I click on this one for example, the simulator will be a little bit faster.
>
> **[2:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=151)** So I want to show you a demo.
>
> **[2:33](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=153)** You will not see a big difference than the previous demo but I thought I would share this with you.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/project-demo?u=76281980&t=158)** If the simulator does not work when you try the same program.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), go to (2)
> **Env Vars:** plc (3)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Troubleshooting

#### Troubleshooting tips
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=0)** - For this video, I'm going to share with you some troubleshooting tips when working with the two softwares.
>
> **[0:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=8)** So the first one is when I go to the Factory I/O software and I click on connect and I get this error message.
>
> **[0:18](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=18)** This indicates that the Factory I/O software cannot connect with the PLC with this IP address shown.
>
> **[0:27](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=27)** So this means either the simulator PLC window is not open or the simulator PLC is not on.
>
> **[0:36](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=36)** So if I go back to connected components, Workbench software and I click on the simulator window so either having the window open, but the power is not on, or I don't have the window at all.
>
> **[0:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=51)** So once I click on the power on, then connect to this PLC so once I connect to the PLC if I go back to Factory I/O, click Okay, and then try to connect again.
>
> **[1:09](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=69)** Once I don't see any error messages this means that the connection has been established and you can also see a disconnect option appearing.
>
> **[1:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=80)** Now, if you see this exclamation mark showing beside any of the addresses, then make sure that these addresses are added into the connected components, Workbench software.
>
> **[1:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=94)** So you see here in the connected components Workbench software, under the controller variables, that the three addresses are not added here.
>
> **[1:45](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=105)** So in this case, you just need to add the addresses here.
>
> **[1:51](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=111)** Now, one of the other things is that if sometimes by mistake you delete one of those, so for example, if you drag it out, if you leave the address blank then your program will not work because you did not associate the address with the device.
>
> **[2:08](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=128)** The same thing goes with the sensors here.
>
> **[2:11](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=131)** So for example, if I don't have the push button, or, in case any other scenario that I have different sensors if I don't associate the sensors with the address, your program will not work because you wouldn't know what does this address represent?
>
> **[2:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=151)** So always make sure to drag the right sensor into the right address.
>
> **[2:38](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=158)** If your simulation within Factory I/O scene is delayed, or it behaves differently than expected, then you can adjust the time scale from here.
>
> **[2:50](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=170)** You can select slow motion, neutral or fast mode.
>
> **[2:56](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=176)** Currently, it's showing the default setting so you can try it out and see what actually works for your project.
>
> **[3:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=186)** The last thing I want to share, sometimes the connected components work in software specifically when you open the simulator PLC window would give you this error message.
>
> **[3:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=200)** In this case, you need to click here on this little icon beside the power in order to reset the simulator configuration.
>
> **[3:31](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=211)** You can check this document for troubleshooting.
>
> **[3:34](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/troubleshooting-tips?u=76281980&t=214)** Here, it's showing a list of ITER codes for Micro800 controllers.

> [!info]- Semantic Content
>
> **Env Vars:** plc (6), iter (1)
> **UI Navigation:** click on (3), go to (1), open the (1)
> **Code Keywords:** case, (2), delete (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Best Practices:** always make sure (1)


### 9. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=0)** - Thanks for taking the time to join me in this course.
>
> **[0:03](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=3)** I hope you enjoyed the ride.
>
> **[0:06](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=6)** In this course, I used a simulator PLC to work on industrial application scenarios with Factory I/O software using ladder logic programming.
>
> **[0:20](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=20)** If you'd like to learn more about PLC ladder logic programming, I recommend checking out the Learning Path, Become a PLC Developer, where I have designed the courses to cover the concept from the basic to more advanced level.
>
> **[0:39](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=39)** You can also check these courses, PLC Industrial Sensors, that gives you an overview of different industrial sensors.
>
> **[0:49](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=49)** And, Input Sensors with PLC, Sinking and Sourcing, that covers the commonly used circuit when connecting digital sensors to PLCs.
>
> **[1:02](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=62)** If you are interested in understanding more about PLCs, and how they fit within the field of industrial automation, check out the course, Learn Industrial Automation, that goes through each level of the automation field.
>
> **[1:19](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=79)** I look forward to seeing you in another course.
>
> **[1:22](https://www.linkedin.com/learning/plc-simulation-software-factory-i-o-with-connected-component-workbench/next-steps?u=76281980&t=82)** Until next time. Enjoy learning.

> [!info]- Semantic Content
>
> **Env Vars:** plc (5)
> **Speakers:** - thanks (1)


## Instructor

- [[Zahraa Khalil]]

## Resources

- Exercise files available

## Skills Covered

- Simulation
- Modeling and Simulation
- Simulation Software
- PLC Programming

## Path Context

### In [[Become a PLC Developer]]
← [[PLC Program Flow and Control Instructions]] | **7 of 7**

## Appears In

- [[Become a PLC Developer]]

---

[↑ Back to top](#)