---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-plc-ladder-logic-1-the-basics
url: "https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics"
duration_minutes: 125
duration: 2h 5m
level: Beginner
updated: 8/18/2023
learners: 229949
skills:
  - PLC Ladder Logic
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHUfFwJtXJYEg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692377629184?e=2147483647&amp;v=beta&amp;t=beUXRnlvechO_6OlRUOvbPDAu9C8YsfNs4OxLLIdJNo"
linkedin_topic: Hardware
learning_paths:
  - '[[Become a PLC Developer]]'
prev_courses:
  - '[[Learning Industrial Automation]]'
next_courses:
  - '[[Learning PLC Ladder Logic- 2 Diving Deeper]]'
path_nav: '[{"path":"Become a PLC Developer","position":2,"total":7,"prev":"Learning Industrial Automation","next":"Learning PLC Ladder Logic- 2 Diving Deeper"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - skill/plc-ladder-logic
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Learning%20PLC%20Ladder%20Logic-%201%20The%20Basics.md)

![Learning PLC Ladder Logic: 1 The Basics](https://media.licdn.com/dms/image/v2/D4E0DAQHUfFwJtXJYEg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692377629184?e=2147483647&amp;v=beta&amp;t=beUXRnlvechO_6OlRUOvbPDAu9C8YsfNs4OxLLIdJNo)

# Learning PLC Ladder Logic: 1 The Basics

> Industrial automation technologies have made manufacturing processes increasingly more efficient. Programmable logic controllers (PLCs) are commonly used in industrial automation, and many of these industrial computer control systems use ladder logic as their main programming language. In this course, engineer and educator Zara Khalil covers the basics of PLC ladder logic programming. Explore fund

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics) | 2h 5m | Beginner | 230K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Program PLCs with ladder logic](#program-plcs-with-ladder-logic)
  - [What you should know](#what-you-should-know)
- [**1. PLC Programming**](#1-plc-programming) (2 videos)
  - [PLC programming languages](#plc-programming-languages)
  - [LogixPro PLC simulation software](#logixpro-plc-simulation-software)
- [**2. Ladder Logic Basics**](#2-ladder-logic-basics) (8 videos)
  - [Programming concept](#programming-concept)
  - [Input instructions](#input-instructions)
  - [Output instructions](#output-instructions)
  - [I/O with a push button and light](#io-with-a-push-button-and-light)
  - [I/O with alternating lights](#io-with-alternating-lights)
  - [Field devices and program instructions](#field-devices-and-program-instructions)
  - [Normally open (NO) contact with XIC and XIO](#normally-open-no-contact-with-xic-and-xio)
  - [Normally closed (NC) contact with XIC and XIO](#normally-closed-nc-contact-with-xic-and-xio)
- [**3. Rung Operation**](#3-rung-operation) (10 videos)
  - [Multiple inputs](#multiple-inputs)
  - [Example of multiple inputs (AND and OR)](#example-of-multiple-inputs-and-and-or)
  - [Multiple outputs](#multiple-outputs)
  - [Seal-in and hold-in instruction](#seal-in-and-hold-in-instruction)
  - [Branching operation and examples](#branching-operation-and-examples)
  - [Rung operation case study, part 1](#rung-operation-case-study-part-1)
  - [Rung operation case study, part 2](#rung-operation-case-study-part-2)
  - [Multiple I/O case study](#multiple-io-case-study)
  - [Latch/unlatch output](#latchunlatch-output)
  - [Latch/unlatch example](#latchunlatch-example)
- [**4. Timers and Counters**](#4-timers-and-counters) (7 videos)
  - [Timer instruction overview](#timer-instruction-overview)
  - [Timer status bits (EN, DN, and TT)](#timer-status-bits-en-dn-and-tt)
  - [Timer types (TON and TOF) and diagrams](#timer-types-ton-and-tof-and-diagrams)
  - [Use a timer to flash a light](#use-a-timer-to-flash-a-light)
  - [Counter instruction](#counter-instruction)
  - [Examples of counter types](#examples-of-counter-types)
  - [Counter and timer case study](#counter-and-timer-case-study)
- [**5. Detailed Case Study: Plywood Sheets Process**](#5-detailed-case-study-plywood-sheets-process) (7 videos)
  - [Case overview](#case-overview)
  - [Part 1: Counting sheets](#part-1-counting-sheets)
  - [Part 2: Running the conveyer](#part-2-running-the-conveyer)
  - [Part 3: Applying paint](#part-3-applying-paint)
  - [Part 4: Programming the second conveyer](#part-4-programming-the-second-conveyer)
  - [Ladder logic program simulation](#ladder-logic-program-simulation)
  - [Part 5: Add stops to complete the program](#part-5-add-stops-to-complete-the-program)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Program PLCs with ladder logic](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=0)** - So you've heard about [[PLC]] Ladder Programming, but you don't know where to start.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=5)** Then this course is for you.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=7)** I'll be teaching the language from scratch, covering the basics of [[PLC Ladder Logic]] Programming, like input, output, timer, counter, and more.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=19)** I'll explore each instruction separately and go through examples to better understand the concept.
>
> **[0:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=26)** At the end, we will have a case study example.
>
> **[0:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=30)** In industrial automation, many PLC controllers use Ladder Logic as their main programming language.
>
> **[0:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=37)** I'm Zara Khalil, I am an engineering instructor, and I love teaching courses, covering topics on industry automation, and [[PLC Programming]] languages.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=46)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[PLC Ladder Logic]] (1), [[PLC Programming]] (1)
> **Env Vars:** plc (4)
> **Speakers:** - so (1)

#### [What you should know](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is an introduction to [[PLC Ladder Logic]] programming, so you should know some of the terminologies used within industrial automation that will help you to better understand the course.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/what-you-should-know?u=76281980&t=10)** Check out my other course, Learn Industrial Automation, to learn more about the components and networks involved in each level of automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Ladder Logic]] (1)
> **Env Vars:** plc (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. PLC Programming

[↑ Back to Table of Contents](#table-of-contents)

#### [PLC programming languages](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=0)** - [Instructor] Simply, [[PLC Programming]] languages are used to program the automation devices within industrial field.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=7)** The controllers that are used in industrial automation need to be programmed to perform certain tasks like moving [[Microsoft Products|products]] or sorting them.
>
> **[0:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=16)** In industrial automation, devices are connected through PLCs that are programmed using softwares.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=22)** There are five programming languages for [[PLC]] that are divided into two main sections, text based and graphical.
>
> **[0:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=31)** The two common methods for PLC programming are ladder logic and block diagram.
>
> **[0:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=38)** All these languages are defined by the international standard for PLC programming languages and concepts.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=46)** The standard explains the format, syntax, and display for the five PLC languages available.
>
> **[0:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=52)** Each language is used and best suited for certain types of applications.
>
> **[1:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=60)** We will be learning the basic principles for ladder logic programming, how to read, write, assemble ladder logic.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=68)** Ladder logic is one of the languages used to develop software for programmable logic controllers, PLCs, used in industrial control applications.
>
> **[1:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=79)** A PLC programmer is the person responsible for coming up with the logic needed and programming the controller to solve the required task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Programming]] (3), [[PLC]] (3), [[Microsoft Products|Products]] (1)
> **Env Vars:** plc (6)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [LogixPro PLC simulation software](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=0)** - [Instructor] For the purpose of better understanding the language, I'll be using a [[Simulation Software]] to test the programs.
>
> **[0:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=6)** I'll be using it to demonstrate each instruction we cover.
>
> **[0:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=9)** However, I'll focus more upon the language and the concept other than teaching the software.
>
> **[0:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=14)** The concept is the same for each [[PLC]] type that uses ladder logic.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=19)** Each PLC manufacturer users their own [[PLC Ladder Logic]] software.
>
> **[0:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=24)** They might have differences, but the logic is the same.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=27)** The simulation software is called LogixPro provided by Learning Pit.
>
> **[0:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=32)** This software mimics Allen Bradley Rockwell RSLogix 500.
>
> **[0:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=37)** So you can download the simulation software from the website, [thelearningpit.com](https://thelearningpit.com).
>
> **[0:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=42)** There is a free 15 day trial if you want to give it a try.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=46)** So you can click on LogixPro Allen Bradley RSLogix Simulator in order to download the free trial.
>
> **[0:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=55)** Once you download the software and install it, then you click on LogixPro software.
>
> **[1:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=63)** Once you open the program, it tells you how many days left for the free trial.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=68)** So then you click on Continue in order to get into the software.
>
> **[1:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=74)** So this is the platform for the simulation software we are using.
>
> **[1:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=79)** All of the ladder logic is going to be happening in this white area.
>
> **[1:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=84)** So in order to add the ladder logic instructions, you go to the PLC Instruction Panel, and then you add a new rung.
>
> **[1:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=92)** And in order to get the instructions, you just click on it and drag it to the rung.
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=98)** Notice here that once you see the green light, this indicates that you can place the instruction on this specific location.
>
> **[1:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=106)** And you can add as many instructions as you want depending on the logic you are using.
>
> **[1:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=112)** And in order to delete the instruction, you just click on the instruction, and using the keyboard Delete button in order to delete the instruction.
>
> **[2:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=120)** So this [[Simulation]] comes with a built-in example that you can give it a try.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=125)** So you go to the Simulations tab, and then you can select any simulation example that you would like to.
>
> **[2:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=132)** For the free trial, you are limited to the first three ones, the I/O Simulator, the Door Simulator, and the Silo Simulator.
>
> **[2:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=140)** So in the course I'm going to use the I/O Simulator in order to see how the program works.
>
> **[2:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=147)** So now for to get the addresses of each button, you just move the mouse to the device, and notice here that you can see the different addresses for each button.
>
> **[2:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=157)** So for example, for the first one you can see I:1/0.
>
> **[2:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=162)** I indicates this is an input, then one is for the rack module.
>
> **[2:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=167)** So you can take the address and associate that with an instruction by double-click on the instruction and then write down the address that you would like to.
>
> **[2:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=177)** And then you can do the same thing for any other instructions.
>
> **[3:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=180)** So for example, if I want this light to be connected to the output, so you just move your mouse in order to get the address O:2/0, and you add that to that specific instruction that you would like to.
>
> **[3:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=194)** Now if you want to add description for each instruction, you right-click on it, and click on Edit Symbol.
>
> **[3:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=201)** So for example if this one is a push button, then you are going to add the description that you would like to.
>
> **[3:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=209)** Now the program does not work.
>
> **[3:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=211)** We need to go online and download the program to the PLC.
>
> **[3:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=215)** So you go here, and then you click to go online.
>
> **[3:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=219)** Download to PLC.
>
> **[3:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=223)** And then you click on the Run mode.
>
> **[3:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=227)** Once you are in the Run mode, now the PLC scans the ladder logic.
>
> **[3:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=232)** Once you hit on the selected push button, your output will work.
>
> **[3:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=237)** Now if you want to make any changes while you're online, you can select the program mode.
>
> **[4:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=243)** So let's say for example instead of using this output, I'm going to use for example, let's say the fourth light.
>
> **[4:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=252)** Now the fourth light has an address of O, stands for output, 2/4.
>
> **[4:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=258)** So you take that address and you put it here by double-clicking on it.
>
> **[4:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=262)** And then just change the light number.
>
> **[4:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=266)** After making any changes online, you need to download the program again.
>
> **[4:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=274)** So after downloading the program, you go to Run mode again, and you click on it and see that the other light turns on.
>
> **[4:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=283)** If you want to change the color of the light, you right-click on it, and then you select any color available.
>
> **[4:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=292)** And that will reflect any changes.
>
> **[4:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=295)** Now the same thing happens for the different instruction for the different buttons.
>
> **[5:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=300)** If, for example, you want to use a normally closed then you right-click, and that will change it to a normally closed.
>
> **[5:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=307)** If you want to use a limit switch, you right-click and then keep changing to whatever device that you would like to try.
>
> **[5:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=317)** Then you would go offline, and then continue programming the ladder logic.
>
> **[5:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=323)** Please note for the free trial you cannot save the ladder logic.
>
> **[5:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=328)** Now if you want to give it a try, for another simulation, for example, let's go to Silo Simulator.
>
> **[5:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=338)** So this is how the simulation looks like.
>
> **[5:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=341)** Now if you'd like to add more rungs or start a new program, you either delete the rung by clicking on it and hit on the Delete in the keyboard.
>
> **[5:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=351)** Or you can go to File and start a new file.
>
> **[5:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=359)** Now the same thing applies, if you'd like to add more rungs, then you click on the rung in here, and then you drag any instruction you would like to place it on your ladder logic.
>
> **[6:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=372)** And if you'd like to have the addresses of each button, then you just move the mouse to that specific button and it shows you the specific address for each one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (6), [[Simulation Software]] (4), [[Simulation]] (4), [[PLC Ladder Logic]] (1)
> **UI Navigation:** click on (9), go to (5), right-click (4), open the (1), double-click (1)
> **Env Vars:** plc (7)
> **Analogies:** for example (7)
> **Exercise Files:** download the (5)
> **Definitions:** is a  (2), is called (1), is an  (1), stands for (1)
> **CLI Commands:** make (1)
> **URLs:** [thelearningpit.com](https://thelearningpit.com) (1)


### 2. Ladder Logic Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Programming concept](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=0)** - [Instructor] Ladder logic is used to develop software for Programmable Logic Controllers, [[PLC]], that are used in industrial control applications.
>
> **[0:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=9)** So devices are connected to the input and output module within PLC and according to the software, controlling industrial applications happen.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=19)** The name ladder logic programming came from the fact that the program at the end looks similar to a ladder with different instructions and rungs.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=29)** [[PLC Ladder Logic]] programming basics begin in making a clear distinction between input and output within the program itself.
>
> **[0:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=37)** In PLC ladder logic, generally speaking, inputs are written on the left side of the ladder logic.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=43)** Outputs are on the right side.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=45)** You will learn later in the course that not all inputs and outputs are necessarily connected to a physical device, but for simplicity let's assume so for now.
>
> **[0:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=56)** The left and right rails indicate the positive and the ground of the power supply.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=61)** Electrical current flows from left to right.
>
> **[1:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=65)** The logic is read as following.
>
> **[1:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=67)** When the switch is on, the light is on from left to right.
>
> **[1:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=73)** Each line is called rung.
>
> **[1:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=75)** The rungs represent how the program is designed.
>
> **[1:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=79)** If we have multiple rungs, the way we read the program is from left to right top to bottom.
>
> **[1:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=87)** So each rung is read by the software and the same thing applies, left to right.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=94)** Each ladder logic program ends in a rung with an end instruction to indicate that this is the end of the program.
>
> **[1:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=102)** Knowing this will help you in programming PLC ladder logic as where to place each input and output according to the logic you design.
>
> **[1:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=111)** So for example if you have a light and a fan and you have two switches and you want to execute the light first, then you need to place it in the first rung and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Ladder Logic]] (3), [[PLC]] (2)
> **Env Vars:** plc (5)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** rails (1)
> **Cross-References:** later in (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Input instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=0)** - [Instructor] Let's take a look at what input means in [[PLC Ladder Logic]] programming.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=5)** The way we write input is as following: as two bars facing each other representing the input.
>
> **[0:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=12)** And to differentiate between the physical input device and the input within the software, we will refer to the input in the [[PLC]] program as input instruction.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=22)** There are two main types of input instructions; Examine If Closed, XIC, and sometimes called normally open, Examine If Open, XIO, and sometimes it's called normally closed.
>
> **[0:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=38)** Notice, that the only difference between them, is that the XIO has a sidebar that indicates it's already closed and we're examining if it opens.
>
> **[0:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=50)** In ladder logic program, the instruction is highlighted when the logic state is true.
>
> **[0:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=56)** I'll be using a green highlight in the slides here, similar to what is used in Allan-Bradley software.
>
> **[1:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=62)** However, it's very similar in any other PLC types.
>
> **[1:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=66)** Different colors might be used in different softwares but they all indicate the same concept.
>
> **[1:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=72)** Examine If Closed, Examine If Open instructions, tell the processor to test for an ON condition from the reference address bits.
>
> **[1:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=83)** Simply, the instruction checks a memory location.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=86)** And according to the bit, zero or one, then the instruction is either activated or not.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=94)** So here's a simple layout of a digital input device connected to a PLC input module, to provide an input, and it has a specific memory location to indicate the status.
>
> **[1:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=107)** And by using this memory location address in the PLC instruction, we can connect the physical to the program we are writing.
>
> **[1:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=116)** So, the input signal is received from a physical device.
>
> **[2:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=121)** The physical device is connected to the PLC input module terminal, and the bit is then stored in the input memory address location.
>
> **[2:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=130)** And according to the bit address, the input instruction behaves accordingly.
>
> **[2:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=136)** The two input instructions, XIC, Examine If Closed, and XIO, Examine If Open, are Boolean type.
>
> **[2:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=145)** Which means, either on or off, zero and one, and we refer to it as the logic state.
>
> **[2:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=153)** In the case of Examine If Closed, XIC, the instruction is highlighted when the memory location associated with it is one.
>
> **[2:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=164)** Usually in many softwares, a gidian highlight is at a presentation that the logic state is true.
>
> **[2:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=171)** So, XIC is true when the memory address bit is one, and is false when the memory address bit is zero.
>
> **[3:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=181)** The XIO, Examine If Open instruction, acts the opposite way.
>
> **[3:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=186)** It is activated when the logic state is zero, and not activated when the logic state is one.
>
> **[3:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=194)** So, XIO is true when it has a zero, and false when the logic state is one.
>
> **[3:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=204)** To summarize, in the ladder logic program, the instruction is highlighted in green when it's logic state is true.
>
> **[3:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=212)** Example, one is not necessarily true, as we saw.
>
> **[3:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=217)** True, active, or highlighted all mean the same thing.
>
> **[3:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=223)** Simply means, an ON condition.
>
> **[3:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=225)** The difference between XIC and XIO is when each of them is a true.
>
> **[3:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=232)** XIC is true when the logic state is one.
>
> **[3:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=235)** XIO is true when the logic state is zero.
>
> **[4:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=240)** So try not to associate one as true.
>
> **[4:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=243)** Inputs are written in the left side of the ladder logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (5), [[PLC Ladder Logic]] (1)
> **Env Vars:** xio (7), plc (6), xic (6)
> **Cross-References:** as we saw (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Output instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=0)** - [Narrator] Let's see what an output instruction in [[PLC Ladder Logic]] programing.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=5)** The way we write an output instruction is similar to two brackets as you see and to differentiate between the physical output device and the output within a program, we refer to the output as output instruction.
>
> **[0:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=18)** There are three main types of outputs.
>
> **[0:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=21)** An empty bracket is referred to an output energize, OTE.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=27)** The other two types are output latch, OTL, output unlatch, OTU.
>
> **[0:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=35)** Outputs are written in the right-hand side.
>
> **[0:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=39)** So, what's an output instruction?
>
> **[0:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=42)** An output instruction represents the action that is to be taken when the input instructions or instructions are true.
>
> **[0:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=51)** Basically, when the rung is true, the output is activated as a result and since the output is connected to a memory address and according to that bit as status, the device turn on or off.
>
> **[1:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=64)** A physical output device is connected to the output module of the [[PLC]] and work accordingly.
>
> **[1:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=71)** Output is always the last instruction before the right power rail.
>
> **[1:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=77)** So, you cannot put an input after placing an output.
>
> **[1:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=82)** Everything in front of the output tends to be an input instruction for that specific output.
>
> **[1:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=89)** Please, keep in mind not all outputs are connected to a physical devices.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=94)** Sometimes, we use an internal register tag or address instead, so thing as a real device and a virtual device.
>
> **[1:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=103)** A rung can still work with only an output and once the program is activated, the rung is true and the output is activated.
>
> **[1:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=113)** Every rung must have the minimum of one output instructions, so I cannot have a rung without any outputs.
>
> **[2:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=123)** Only use a particular output one time in your program, so if you have two switches to turn on the same light, then use the particular output one time in your program.
>
> **[2:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=137)** If you have multiple outputs, associate it with the same input, then put them in parallel.
>
> **[2:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=143)** Multiple outputs are preferred to programed in parallel.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=148)** Output is activated when the memory location is one, so it is true when it's one and false when it's zero.
>
> **[2:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=156)** I always recommend that having this table when you start programming.
>
> **[2:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=160)** It makes it easier for you to remember when each instruction is highlighted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Ladder Logic]] (1), [[PLC]] (1)
> **Env Vars:** plc (2), ote (1), otl (1), otu (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [I/O with a push button and light](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=0)** - So let's try to take an example that demonstrates how the input instructions, XIC and XIO and Output instruction work.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=10)** So in a simple example we have a normally opened push button that's connected to a light using [[PLC]].
>
> **[0:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=16)** The input device provides the input module with a status of the device.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=22)** Example if it's on or off, and using this memory location within the program reflects the change.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=29)** The same thing applies for an output device where the specific memory location within the output module is to reflect any changes accordingly.
>
> **[0:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=39)** So, the input device, which is the push button is connected to the PLC input module and the output device which is light is connected to the output module of the PLC.
>
> **[0:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=51)** So let's see how the Ladder Logic Program behaves when using Examine If Closed instruction.
>
> **[0:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=58)** Using XIC instruction, the instruction is only activated when the memory location is one.
>
> **[1:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=65)** So, when the push button is not pressed, this means that the logic state is zero and the instruction is false and the light will not turn on.
>
> **[1:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=75)** When the push button is pressed, meaning the logic state now is true, equals to one, then the instructions highlighted and according to the continuity, the light will turn on.
>
> **[1:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=87)** XIC, Examine If Close instruction is true when the logic state equals to 1.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=95)** This means that the time assigned to that specific XIC instruction is active.
>
> **[1:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=101)** Instructions read a memory location and according to the value there, it will be highlighted.
>
> **[1:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=108)** So let's use the software to demo this simple example.
>
> **[1:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=113)** In this [[Simulation Software]] we have the push button that's connected to a light.
>
> **[1:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=117)** I'm going to use the first push button address I one zero, and for the light I'm going to use the first light.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=125)** The address for the first light is O two slash zero.
>
> **[2:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=131)** So, the first thing you need to do is you need to go online and then download the program to the PLC and select RAN mode.
>
> **[2:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=147)** Now, the light is off because it's an XIC instruction.
>
> **[2:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=150)** As soon as I press on the push button, the light will turn on.
>
> **[2:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=157)** Now let's use Examine If Open instruction.
>
> **[2:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=160)** XIO instruction acts the opposite way.
>
> **[2:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=164)** It is activated when the logic state is zero, and not activated when the logic state is one.
>
> **[2:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=172)** So let's take the same example and we are using the same connection with the push button and the light, but only changing the PLC Latter Logic program, while using XIO instruction.
>
> **[3:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=185)** When the push button is not pressed, then this means the logic state is 0, and since we are using XIO instruction, then it's activated and the light will be on.
>
> **[3:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=197)** When the push button is pressed, meaning the logic state is one, true, this means the XIO instruction is false and is not highlighted and the light will not turn on.
>
> **[3:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=209)** XIO is true when its logic state equals to 0.
>
> **[3:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=214)** This means that the tag assigned to the XIO instruction is active.
>
> **[3:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=219)** Instructions, again, reads the memory location and according to the value there, it will be highlighted.
>
> **[3:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=226)** So let's use the simulation software in order to see how the program behaves when using XIO instruction.
>
> **[3:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=234)** So now we are using the same wire connection.
>
> **[3:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=236)** The only thing that we need to change is we need to change the instruction.
>
> **[4:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=240)** There are two methods in order to change the instruction: You either right click on the instruction that you want to change, and then change it to XIO instruction.
>
> **[4:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=249)** Another method is you can just drag the instruction from the instruction panel.
>
> **[4:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=254)** Now, we are doing the same thing.
>
> **[4:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=256)** We need to go online.
>
> **[4:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=258)** Download the program, and then click on the RUN mode.
>
> **[4:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=266)** Notice here that without even pressing on the push button, the light is on.
>
> **[4:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=271)** As soon as we press on the push button, now the memory location will change to 1 and the instruction will not be activated.
>
> **[4:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=280)** As a result, the light will turn off.
>
> **[4:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=284)** So this shows you how different programs can behave while having the same wiring connection, but the choice of either using XIC or XIO makes the difference.
>
> **[4:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=295)** So, as a PLC programmer, you need to know what to use in the program according to each problem separately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (6), [[Simulation Software]] (2)
> **Env Vars:** xio (10), xic (6), plc (6), ran (1), run (1)
> **Definitions:** means that (3)
> **UI Navigation:** click on (2)
> **Exercise Files:** download the (2)
> **Speakers:** - so (1)

#### [I/O with alternating lights](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=0)** - [Narrator] So, let's take another simple example to show the uses of input and output instruction.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=5)** In this example, we are trying to achieve an alternating light.
>
> **[0:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=8)** We have a Pushbutton connected to the input module of the [[PLC]] and the two lights are connected to the output module of the PLC.
>
> **[0:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=16)** When the Pushbutton is pressed, a green light is on.
>
> **[0:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=20)** When the Pushbutton is not pressed, a red light is on indicating that the Pushbutton is not pressed.
>
> **[0:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=28)** In any example, try to do it one step at a time, so first, we are using an XIC instruction to program the Pushbutton.
>
> **[0:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=36)** Remember, XIC instruction is highlighted when the memory location is one and then, we add a green light as an output, so now the program works this way.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=45)** When the Pushbutton is pressed, the instruction is highlighted.
>
> **[0:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=49)** The green light turns on as a results.
>
> **[0:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=53)** Now, the question is, when the Pushbutton is not pressed, a red light turns on.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=59)** Remember, we are using the same Pushbutton.
>
> **[1:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=63)** So, let's take an advantage of the XIO instruction.
>
> **[1:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=66)** XIO instruction is activated when the logic state is zero.
>
> **[1:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=73)** So, when the Pushbutton is not pressed, the red light turns on.
>
> **[1:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=78)** Now, the whole program works this way.
>
> **[1:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=81)** When the Pushbutton is pressed, a green light turns on.
>
> **[1:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=84)** When the Pushbutton is not pressed, a red light turns on.
>
> **[1:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=88)** So, let's use the [[Simulation Software]] to see how this program works.
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=93)** So, this is how the program looks like in the simulation software and for the Pushbutton, I use the same address for the first and second drawing.
>
> **[1:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=101)** The only difference is that I'm using an XIC instruction in the first drawing and XIO instruction in the second drawing.
>
> **[1:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=108)** Now, we do the same thing.
>
> **[1:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=110)** We go Online, download the program and select the Run mode.
>
> **[1:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=118)** So, notice here, as soon as I the Run mode, the red light turns on indicating that the Pushbutton is not pressed.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=125)** As soon as I press on the Pushbutton, the red light turns off and the green light turns on.
>
> **[2:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=132)** Once I let go, the red light turns on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[Simulation Software]] (2)
> **Env Vars:** xic (3), xio (3), plc (2)
> **UI Navigation:** select the (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [narrator] (1)

#### [Field devices and program instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=0)** - [Instructor] Let's take a look on how the field devices and the program instructions work together and how to differentiate between them.
>
> **[0:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=9)** To differentiate input devices and input instructions, we refer to the physical devices as a field input devices or contacts and the input within the [[PLC]] program as input instructions.
>
> **[0:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=24)** There are two common types of field devices relay that we usually deal with.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=29)** A normally open and a normally closed relay.
>
> **[0:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=33)** This can apply to any field device.
>
> **[0:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=36)** This is how a normally open pushbutton looks like and this is how a normally closed pushbutton looks like.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=43)** You can check this document for more details about the different symbols by simply going to page 38, you can find the different symbols for the contacts, switches, and relays.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=59)** This is the example that we covered for the pushbutton.
>
> **[1:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=62)** A normally open pushbutton contact and a normally closed pushbutton contacts.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=68)** In the [[Simulation Software]], you can change the type of the contact by right click on the device.
>
> **[1:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=75)** When you right click, this is a normally open pushbutton, this is a normally closed pushbutton, a normally open switch, a normally closed switch.
>
> **[1:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=91)** So, for the field devices contact, we have a normally open and a normally closed contacts.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=97)** And within the software, the program instructions, we have examine if open, examine if closed.
>
> **[1:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=106)** Note that they are not the same thing.
>
> **[1:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=109)** You could have a normally open contact with an XIC instruction or with XIO instruction depending on the logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1), [[Simulation Software]] (1)
> **Env Vars:** plc (1), xic (1), xio (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** we covered (1)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Normally open (NO) contact with XIC and XIO](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=0)** - [Instructor] Let's take an example that can demonstrate the differences between contacts and instructions.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=7)** We'll take a simple example that shows how the program behaves when using a normally open contact, which is a physical device, and using two different instructions within the software.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=19)** It might sound repetitive but I want to compare the effect of using a normally open, and normally closed contacts.
>
> **[0:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=26)** The next video, will take a normally closed contact with the same instructions.
>
> **[0:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=32)** For this one, we are going to count straight on normally open contact, or relay, and using two types of instructions.
>
> **[0:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=41)** So let's see what happens when using a normally open relay and having two different instructions in the [[PLC]], examine if closed and examine if opened.
>
> **[0:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=51)** Let's assume that we have a push button that is in normally open relay.
>
> **[0:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=56)** It's connected to the input module in the PLC and a light connected to the output module in the PLC.
>
> **[1:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=63)** And remember, that field devices and program instructions are not the same thing.
>
> **[1:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=70)** So depending now on the program written in the software, using light or logic, the output will behave differently.
>
> **[1:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=77)** Since the content is normally open contact, this means it's usually open and when the push button is pressed, the contact closes and hence provides the continuity within the electrical circuits.
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=93)** Let's see what happens in the program using XIC.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=97)** When using an XIC, remember XIC is activated when the memory location is one.
>
> **[1:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=103)** So, if the push button is not pressed, the memory location is zero, and as a result, the XIC instruction, will not be highlighted and the light will not turn on.
>
> **[1:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=116)** And once the push button is pressed, the memory location is one, and XIC instruction is activated.
>
> **[2:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=124)** On the other hand, when having the same physical device, normally opened relay, and using different instruction examine if open, XIO.
>
> **[2:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=135)** XIO is activated when the memory location is zero.
>
> **[2:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=139)** So, if the push button is not pressed, the memory location is zero and as a result the XIO instruction will be highlighted, and the light will turn on.
>
> **[2:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=151)** Once we press on the push button, the memory location is one, and the XIO is not activated anymore.
>
> **[2:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=160)** So as you can see, although we are using the same physical device, which is a normally open contact, the way we program it in the software using ladder logic, produces a different output.
>
> **[2:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=174)** This is to demonstrate the difference between using an XIC and XIO while having the same normally open contact, the same physical device.
>
> **[3:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=184)** XIC and XIO have their uses in the programming.
>
> **[3:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=190)** Each is used for a certain tasks, like emergency stop, for example, as you will see later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (3)
> **Env Vars:** xic (7), xio (6), plc (3)
> **Cross-References:** next video (1), later in (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Normally closed (NC) contact with XIC and XIO](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=0)** - [Narrator] Now, we'll take the same previous example but use a normally closed contact instead.
>
> **[0:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=8)** So using a normally closed relay and having two different instructions in the [[PLC]] program.
>
> **[0:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=14)** Examine if closed.
>
> **[0:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=15)** Examine if open.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=17)** A normally closed contact is normally closed and it provides the electrical continuity.
>
> **[0:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=24)** It opens when the contact is pressed.
>
> **[0:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=28)** The physical contact is open.
>
> **[0:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=31)** Now, we're using a normally closed pushbutton that is connected to an input module in PLC.
>
> **[0:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=37)** And a red light connected to the output module in PLC.
>
> **[0:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=42)** For a normally closed contact pushbutton, if the pushbutton is not pressed, the memory location connected to that pushbutton within the module is showing one.
>
> **[0:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=54)** As soon as the pushbutton is pressed, the continuity changes and then the memory address changes its state to zero.
>
> **[1:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=63)** There is no physical continuity.
>
> **[1:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=66)** Now let's see what happens in the program when using two different instructions.
>
> **[1:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=72)** Using XIC, remember XIC instruction is activated when the memory location is one, so if the pushbutton is not pressed, the memory location is one.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=86)** Because it's a normally closed pushbutton, the current is flowing.
>
> **[1:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=91)** As a result, the XIC instruction will be highlighted, and the light will turn on without you pressing on the pushbutton.
>
> **[1:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=101)** Once the pushbutton is pressed, the memory location is zero because we don't have physical contact and the XIC is not activated any more.
>
> **[1:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=111)** It works the opposite way as a normally open contact.
>
> **[1:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=116)** Having the same physical device normally closed relay, we'll examine if open XIO instruction.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=125)** Again, remember that XIO is activated when the memory location is zero.
>
> **[2:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=130)** If the pushbutton is not pressed, the memory location is one because remember, we're using a normally closed relay.
>
> **[2:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=138)** As a result, the XIO instruction will not be highlighted and the light will not turn on.
>
> **[2:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=145)** Once the pushbutton is pressed, the memory changes to zero and the XIO is activated and the light will turn on.
>
> **[2:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=154)** As you can see, although we are using the same physical device, normally closed contact, the way we program it in the software using Ladder Logic produces different outputs.
>
> **[2:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=165)** Here's how the program will behave when having two different instructions while having the same contact.
>
> **[2:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=173)** This to show you the difference, that the program behaves when using different physical contact, and how the Ladder Logic behaves when using XIC, XIO with different normally open and normally closed contacts.
>
> **[3:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=187)** As a PLC programmer, you need to take into consideration what type of contact, what type of physical device you are using because that will determine what instruction you need to do in order to achieve what you're looking for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (4)
> **Env Vars:** xic (5), xio (5), plc (4)
> **Speakers:** - [narrator] (1)


### 3. Rung Operation

[↑ Back to Table of Contents](#table-of-contents)

#### [Multiple inputs](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=0)** - [Narrator] In one operation, we are going to learn how to program letter logic when we have more than one inputs.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=7)** Inputs are placed in the left side of the letter logic, so depending on how many inputs and the logic of a program all need to be placed in the left side.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=19)** There are two methods to program multiple inputs.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=22)** AND, OR.
>
> **[0:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=25)** The AND is similar to the function of the AND gate where you can have any number of inputs, but only one output.
>
> **[0:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=33)** The truth table that you can on the screen shows you that the output is only turned on when all inputs are true, so if both inputs are zero, output is zero.
>
> **[0:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=47)** If one of the inputs is zero, the output is zero, as well.
>
> **[0:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=52)** The only time that the output is equal to one, when both inputs are one.
>
> **[0:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=58)** If you have multiple inputs that you need them all to be on in order to activate a certain output, then use AND.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=68)** AND inputs are added in series.
>
> **[1:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=71)** Just two or more normal instructions side by side.
>
> **[1:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=76)** Using OR.
>
> **[1:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=77)** If you have multiple inputs that you want any input to trigger at the same output, then use OR.
>
> **[1:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=84)** The OR is similar to the function of the OR gate where you can have any number of inputs, but only one output.
>
> **[1:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=92)** Here is the truth table of the OR gate.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=95)** Notice that if any of the inputs is true, the output is true, as well.
>
> **[1:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=101)** The way to add OR inputs is to add them in parallel.
>
> **[1:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=104)** This is how the OR instructions are placed.
>
> **[1:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=108)** So, think about it as another route to the output.
>
> **[1:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=112)** Another option; OR.
>
> **[1:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=114)** So depending on the logic, AND, OR are added to the letter logic in order to activate the output.

> [!info]- Semantic Content
>
> **Analogies:** similar to (2)
> **Speakers:** - [narrator] (1)

#### [Example of multiple inputs (AND and OR)](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=0)** - [Instructor] I'm going to go through examples that show us how to use AND and OR when having multiple inputs.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=7)** Let's start with AND.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=10)** An example would be, in manufacturing settings, we have two sensors.
>
> **[0:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=14)** One level sensor that's mounted on the top of the tank using ultrasonic method, and another sensor that's on the bottom of the tank.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=22)** When both sensors reach a set point, a light indicates that the level reach the set point.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=29)** All inputs are digital devices.
>
> **[0:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=31)** So, if sensor one and sensor two reaches the indicated level, a green light is turned on.
>
> **[0:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=40)** Sensor one and sensor two are inputs.
>
> **[0:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=44)** Green light is an output.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=46)** The way we program the ladder logic is add them in series.
>
> **[0:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=51)** Note here that I need both inputs to be on, both instructions to be activated and highlighted for the output to turn on, for the light to turn on.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=61)** So, if I have one of the inputs on, and the other one is off, the output is not going to be activated as the continuity will not be achieved.
>
> **[1:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=71)** So, let's see how the program works when we have two instructions that are added in series.
>
> **[1:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=78)** So, here we have level sensor one and level sensor two as XIC instructions, and the green light as an output.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=86)** So, for the first one is used for level sensor one.
>
> **[1:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=89)** The second one is used for level sensor two, and, for the green light, I'm using the first light.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=95)** So, you go online, download the program, (successful chiming) and then go to the run mode.
>
> **[1:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=103)** Notice here that, when the level sensor one is active, nothing happens to the output because I need both instructions to be on for the output to be activated.
>
> **[1:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=117)** Once the level sensor two is on the green light turns on.
>
> **[2:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=124)** If any of the inputs is off, then the light will not turn on because I need both instructions to be highlighted for the light to turn on.
>
> **[2:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=135)** And to demonstrate the OR part, I'm going to use the same example.
>
> **[2:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=140)** The change would be when one of the sensor reaches the set point, a light indicates that the level reached the set point.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=148)** So, if level sensor one or level sensor two reaches the set point, a red light is to turn on.
>
> **[2:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=158)** So, to program this in the ladder logic, we use or.
>
> **[2:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=161)** The light will be on if one of the sensor is activated.
>
> **[2:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=165)** The ladder logics scan one rung at a time, so the program will check the first rung if the level sensor one is true, then the output is true, too.
>
> **[2:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=176)** If level sensor one is not on and level sensor two is on, the ladder logic scans the first rung and then goes to the second one in order to activate the output.
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=189)** So, now let's use the [[Simulation Software]] to see how the program works when we have two instructions that are added using or.
>
> **[3:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=198)** So, here in the simulation software, we have level sensor one and level sensor two are added in parallel using an or condition.
>
> **[3:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=206)** For output light, I'm going to use the second light with an address O2/1.
>
> **[3:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=211)** For level sensor one and level sensor two, I'm going to use the first and second.
>
> **[3:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=217)** So, the first thing you need to do is you need to go online, download the program, (successful chiming) and then go to the Run mode.
>
> **[3:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=226)** Notice here, for the or condition, I don't need both sensor to be on.
>
> **[3:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=230)** One of them will activate the output.
>
> **[3:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=233)** So, when the first one is on, the red light turns on, or, if the second one is on, the red light will turn on.
>
> **[4:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=242)** So, I don't need both sensors to be on for the light to turn on.
>
> **[4:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=246)** Just one of them can activate the output, and this is the difference between and and or.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (2)
> **UI Navigation:** go to (2)
> **Exercise Files:** download the (2)
> **Env Vars:** xic (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Multiple outputs](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=0)** - [Instructor] In run operation now we are going to learn how to program the ladder logic when we have multiple outputs.
>
> **[0:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=8)** The case of having two lights for example.
>
> **[0:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=11)** Outputs are placed in the right hand side of the ladder logic.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=17)** Multiple outputs are preferred to be programmed in parallel.
>
> **[0:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=21)** So, if you have multiple outputs associated with the same input then put them in parallel.
>
> **[0:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=30)** Having multiple outputs in series is not a preferred in ladder logic because, as you know by now, in each run the continuity starts from left to right one by one.
>
> **[0:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=42)** So if you have an example of having two motors to start when the pushbutton is pressed if we add them in series then motor one has to start for motor two to start.
>
> **[0:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=55)** So, if for any reason, motor one could not start then motor two will not work because it depends on the previous instruction.
>
> **[1:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=66)** However, if the outputs are added in parallel then they both will be activated, and if one of them is not working that will not affect the other motor, and we can have as many outputs as the program requires.
>
> **[1:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=82)** We can also combine multiple inputs, and multiple outputs together depending on the program, and the logic used.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Seal-in and hold-in instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=0)** - [Instructor] A hold-in instruction is basically an instruction that holds a certain instruction and keeps the status of it.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=7)** We also refer to it as a seal-in instruction that seals in the condition of that specific instruction.
>
> **[0:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=14)** For example, if we're using a start pushbutton to start a motor, the motor runs as log as the pushbutton is held in.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=22)** It would be unreasonable to keep holding the pushbutton for the time the motor is to run.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=27)** So, to allow the motor to stay running we use a seal-in instruction to keep the output on.
>
> **[0:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=35)** The simplest was is using the output motor address as a seal-in instruction.
>
> **[0:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=39)** The address of the instruction is either internal bit or a physical contact.
>
> **[0:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=44)** So the program first reads rung by rung.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=46)** When the pushbutton is pressed, the motor starts and the memory location status now equals to one.
>
> **[0:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=53)** Since we're using the same memory address for the hold-in instruction, then as soon as the motor instruction is one, the instruction is highlighted, and now even if the pushbutton is not pressed anymore the motor stays on.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=68)** So think about it as another route for the output, another option to keep the output on.
>
> **[1:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=74)** Let's use the [[Simulation Software]] to see how this works.
>
> **[1:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=78)** So here I have a start pushbutton and motor.
>
> **[1:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=81)** I'm going to use a green light for the motor to see when it's on and when it's off.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=86)** So let's see how this program works.
>
> **[1:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=88)** Again, you go online, download program and hit the Run mode.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=94)** So now as soon as I press the pushbutton the motor turns on.
>
> **[1:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=99)** As soon as I let go, the motor turns off.
>
> **[1:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=102)** So one way to keep the motor on is to use a seal-in instruction.
>
> **[1:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=106)** So we go offline, and in order to use the seal-in instruction you are going to use the Rung Branch instruction, so you drag it and then you place the instruction inside it because we want to hold that, and then use an xic instruction for the seal-in instruction.
>
> **[2:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=126)** And here for the address we use the same address for the output.
>
> **[2:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=133)** So notice here that the seal-in instruction and output have the same address.
>
> **[2:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=138)** Now you do the same thing.
>
> **[2:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=139)** You go online, download program and hit the run mode.
>
> **[2:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=145)** And as soon as I press on the start pushbutton and let go, the motor will turn on and stay on.
>
> **[2:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=154)** So this instruction keeps the output on.
>
> **[2:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=157)** It seals in the output.
>
> **[2:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=160)** One of the common ways to use a seal-in instruction is to create an internal tag within the software and not connected to any external device.
>
> **[2:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=169)** So for the same example, using an internal tag to hold the status bit, and then use it to run the motor.
>
> **[2:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=176)** The internal tag is a Boolean tag, so it's either on or off, zero or one.
>
> **[3:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=182)** Seal-in instruction can be for one input or it can be for multiple inputs, depending on your program and the logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Branching operation and examples](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=0)** - [Announcer] Branching simply means adding more rungs that are associated with the same output, or having multiple outputs for the same inputs.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=10)** We can also have a combination of both, like having multiple inputs and multiple outputs for each rung, all depending on the logic and how to solve the program.
>
> **[0:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=21)** So let's take two examples to show how to do Branching.
>
> **[0:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=25)** Let's say that we have a cooling fan that's turned on when two switches are turned on, or when a pushbutton is pressed.
>
> **[0:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=35)** So, the two options to turn on the cooling fan are: two switches, both need to be on, or pressing the pushbutton.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=45)** The way to programming is adding the two switches as an ADD, adding them in serious.
>
> **[0:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=51)** Then, since the pushbutton is an OR, then I can just add it in the OR rung.
>
> **[0:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=57)** Now the cooling fan is turned on, is activated by either the two switches or the pushbutton.
>
> **[1:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=65)** So now let's use the [[Simulation Software]] to see how this program works.
>
> **[1:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=72)** So notice here that switch one and switch two are added in serious, and the pushbutton is added in parallel.
>
> **[1:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=79)** And for demonstration purposes, I'm going to use a green light instead of the cooling fan.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=86)** So I'm going to use the green light to turn on when the fan is activated, and to turn off when the fan is not activated.
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=93)** So the very first thing that you need to do again is you need to go online, download the program, and choose the right mode.
>
> **[1:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=105)** Notice here that nothing happens at the beginning.
>
> **[1:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=108)** When the switch one is on, nothing happens.
>
> **[1:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=112)** I need both switches to turn on for the light, or for the cooling fan, to turn on.
>
> **[1:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=118)** When one of the switches is off, the cooling fan turns off.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=125)** The other option to turn on the light, or the cooling fan, is to press on the pushbutton.
>
> **[2:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=130)** Once the pushbutton is pressed, the light turns on and the cooling fan is on.
>
> **[2:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=137)** Once you let go, this will turn off the light.
>
> **[2:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=142)** So this is a demonstration of how the program works using a Branching technique.
>
> **[2:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=149)** Here's another example.
>
> **[2:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=150)** Let's say that we have two pushbuttons, that if we press any of them, we will turn on three lights.
>
> **[2:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=159)** Since any of the inputs will produce an output, then we use them as an OR.
>
> **[2:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=165)** And for the outputs, we can just add them in a parallel.
>
> **[2:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=169)** So this is how the program looks like.
>
> **[2:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=171)** If pushbutton one is pressed, the three lights will turn on, or, if pushbutton two is pressed, the three lights will turn on.
>
> **[3:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=181)** So now let's use the simulation software to see how this program works.
>
> **[3:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=186)** Note here we added pushbutton one and pushbutton two in parallel, and for the lights we add them all in parallel because we have multiple outputs.
>
> **[3:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=195)** So you need to go online, download the program, and select the run mode.
>
> **[3:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=204)** When the first pushbutton is pressed, the three lights will turn on.
>
> **[3:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=208)** Or, if the second pushbutton is pressed, the same outputs will be activated, the three lights will turn on.
>
> **[3:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=217)** So either the pushbutton one or pushbutton two will give the same outputs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (2)
> **Exercise Files:** download the (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** add (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [announcer] (1)

#### [Rung operation case study, part 1](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=0)** - [Instructor] I'm going to go through an example that covers all the concepts we've learned so far.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=5)** This example has two parts.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=7)** For part one, we will develop a Ladder Logic program, to start and stop a conveyor belt.
>
> **[0:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=14)** So for part one, the example is, a normally open push button, to start a conveyor and manufacturing setting.
>
> **[0:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=20)** As soon as the operator pushes the Start pushbutton, and let go, the conveyor starts and stays on.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=27)** There is a Stop pushbutton, so once the operator presses on it, the conveyor stops.
>
> **[0:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=32)** The Stop pushbutton is a normally open relay as well.
>
> **[0:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=36)** So Start and Stop pushbuttons are Inputs, and both are normally open contacts.
>
> **[0:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=42)** The Conveyor is an Output.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=45)** So let's start programming, by knowing How to Start the Conveyor.
>
> **[0:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=50)** Since we're using a normally open for the Start pushbutton, to start the conveyor.
>
> **[0:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=54)** So in the Ladder Logic, we are going to use an XIC instruction.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=59)** And a regular output for the conveyor.
>
> **[1:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=62)** And in order to keep the conveyor on, in order to keep the conveyor working, we are going to use a CLN instruction.
>
> **[1:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=69)** And in the CLN instruction, we are going to use the same address as the conveyor to keep the output on, to keep the conveyor working.
>
> **[1:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=78)** So now, the program works this way.
>
> **[1:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=81)** At the beginning, nothing is activated.
>
> **[1:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=83)** But as soon as the pushbutton is pressed, the instruction is highlighted, and the conveyor starts.
>
> **[1:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=90)** Now, the memory address of the conveyor within [[PLC]] software, equals to one.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=95)** So as soon as the pushbutton is released, the Ladder Logic will use the CLN instruction to keep the output on, to keep the conveyor working.
>
> **[1:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=105)** Now, we need to program the Stop pushbutton.
>
> **[1:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=108)** We need to program it in a way that the conveyor stops, when the Stop Pushbutton is pressed.
>
> **[1:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=115)** Since we're using a normally open contact for the Stop Pushbutton, we are going to use an XIO instruction to keep the continuity.
>
> **[2:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=124)** And we add in series with a Start pushbutton.
>
> **[2:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=127)** Now, as a normal situation, the Stop pushbutton is not pressed.
>
> **[2:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=131)** It's a normally open contact.
>
> **[2:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=133)** So the memory location equals to zero.
>
> **[2:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=136)** And when using an XIO instruction, the instruction's highlighted when the memory location is zero.
>
> **[2:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=143)** So, the instruction is highlighted, without the need to press the Stop pushbutton.
>
> **[2:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=149)** And that's what we need.
>
> **[2:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=151)** Because the Stop is only pressed, when we need to stop the conveyor.
>
> **[2:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=156)** So now the Stop pushbutton instruction is highlighted, and as soon as the Start pushbutton is pressed, the conveyor starts.
>
> **[2:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=164)** So when both inputs are on, output is on as a result.
>
> **[2:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=170)** And the CLN instruction works the same way.
>
> **[2:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=172)** The output will stay on, even if the Start pushbutton is released.
>
> **[2:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=177)** As soon as the operator presses on the Stop pushbutton, remember it's a normally open contact, so it changes the state to one.
>
> **[3:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=185)** And this means the XIO instruction is not activated any more.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=191)** And as a result, the conveyor stops.
>
> **[3:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=193)** Even if the Start pushbutton is on.
>
> **[3:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=196)** Because remember, that both instructions need to be activated for the conveyor to stay on.
>
> **[3:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=202)** The two instructions are in series, so both need to be on for the output to stay on.
>
> **[3:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=210)** Note here, that the XIO instruction cannot be included in the CLN instruction.
>
> **[3:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=215)** Because this will keep the conveyor on, even if the Stop is pressed, because it's part of the CLN instruction.
>
> **[3:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=222)** And in this case, if the Stop pushbutton is pressed, the conveyor will stay on.
>
> **[3:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=228)** The other mistake that a PLC programmer might turn to, is using an XIC instruction.
>
> **[3:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=235)** Note here, that since we're using a Normally Open contact for the Stop Pushbutton, we cannot use an XIC instruction.
>
> **[4:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=244)** Because when using an XIC, then the Stop pushbutton needs to be pressed for the conveyor to start, and we don't want that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2)
> **Env Vars:** cln (6), xic (4), xio (4), plc (2)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Rung operation case study, part 2](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=0)** - [Instructor] Here is part two of the Conveyor Belt example.
>
> **[0:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=2)** We are going to use the same previous example and add in some features to it.
>
> **[0:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=8)** The new features are when the conveyor starts, when the conveyor is on, there are two green lights to indicate that the conveyor is working.
>
> **[0:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=18)** When the conveyor stops, when the conveyor is not working, there is a red light indicating that the conveyor is off.
>
> **[0:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=26)** So the inputs are start pushbutton and stop pushbutton.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=29)** The outputs in this case are the conveyor, stop light, and the two green lights.
>
> **[0:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=35)** In the previous section, we programmed how to start and stop the conveyor.
>
> **[0:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=40)** So this is the ladder logic for the first part of the problem.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=45)** Next we need to program that when the conveyor starts, when the conveyor is on, two green lights indicating that the conveyor is working.
>
> **[0:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=55)** So we have one input and two outputs.
>
> **[0:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=58)** The input in this case is the conveyor memory bit.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=61)** Remember that inputs and outputs can be in internal bits.
>
> **[1:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=65)** So now using the memory as its location of the conveyor bit, in order to turn on the two lights.
>
> **[1:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=72)** Since we have multiple outputs, we add them in parallel.
>
> **[1:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=76)** Now once the operator pushes the start push button, the conveyor starts.
>
> **[1:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=82)** As soon as the conveyor starts, the two lights turn on.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=86)** The last thing to program is adding the red light when the conveyor is not working.
>
> **[1:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=92)** For this task, we use the same memory location of the conveyor bit.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=96)** But this time we use an XIO instruction to indicate that the output is only on when the conveyor is not working, when the conveyor is not on.
>
> **[1:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=107)** Which basically means the memory location is zero.
>
> **[1:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=112)** The reason to use the conveyor memory bit address and not the stop push button is that we need the light to be linked to the conveyor.
>
> **[2:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=121)** Because if we use the stop push button, then the red light will be on as soon as the stop push button is pressed, regardless if the conveyor is on or off.
>
> **[2:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=131)** And in case we have any wiring issues, we need to know that the light is connected to the conveyor, not to the stop push button to ensure that the conveyor stops.
>
> **[2:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=142)** So this is how the complete program looks like for the two parts of the conveyor belt.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=148)** So this is how the program looks like in the [[Simulation Software]].
>
> **[2:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=152)** Note here that I used the same address for the conveyor for the two green lights.
>
> **[2:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=157)** And I used the same address as the conveyor to connect it to the red light.
>
> **[2:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=161)** The only difference is that I used an XIO instruction.
>
> **[2:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=166)** And for the purpose of demonstration, I'm going to use the first light as a yellow to indicate that the conveyor is on.
>
> **[2:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=173)** The second light is green light one.
>
> **[2:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=177)** The third light is for the green light two.
>
> **[3:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=180)** And finally, this is the red light to indicate that the conveyor stops.
>
> **[3:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=184)** Again, I'm using the first stop push button for the start and the second one for the stop.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=191)** Then you do the same thing, you go online, you download the program, and hit RUN mode.
>
> **[3:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=199)** (computer dings) And notice here, as soon as I click on the RUN mode, the red light turns on.
>
> **[3:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=209)** Because, remember that we're using an XIO instruction for the red light.
>
> **[3:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=214)** Whenever the conveyor is not working, the red light should turn on.
>
> **[3:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=219)** Now as soon as I hit on the start push button, notice here that the first light for the conveyor is on and we have two green lights.
>
> **[3:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=233)** As soon as I press on the stop push button, now the conveyor stops and a red light turns on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (1)
> **Env Vars:** xio (3), run (2)
> **Definitions:** is a  (1), basically means (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Multiple I/O case study](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=0)** - [Instructor] Let's take another example that uses the concepts we've learned so far.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=5)** In this example, I start pushbutton to open a valve to start filling a tank with a liquid.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=10)** Once the liquid inside the tank reaches a certain level, a level sensor turns on and the valve closes.
>
> **[0:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=18)** And then, a mixer starts mixing the liquid inside the tank.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=22)** The mixer stays on until the stop pushbutton is pressed.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=27)** We are using a normally open contact for all inputs and outputs.
>
> **[0:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=31)** Here's a list of the inputs and outputs of this example.
>
> **[0:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=36)** So let's start programming.
>
> **[0:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=38)** As soon as the start pushbutton is pressed, the valve opens.
>
> **[0:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=42)** However, it will be unreasonable to expect the operator to keep holding the start pushbutton to keep the valve on.
>
> **[0:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=48)** So to keep the valve open, we use a sealant instruction to keep the output on.
>
> **[0:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=54)** And in the sealant instruction we use the same output address.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=59)** Now, the program works this way.
>
> **[1:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=60)** As soon as the start pushbutton is pressed, the valve opens and the output memory location is one.
>
> **[1:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=67)** And once the start pushbutton is released, the sealant instruction will keep the valve open.
>
> **[1:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=74)** Now, once the liquid reaches a set point that is sensed by the level sensor, the valve closes.
>
> **[1:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=82)** So again, once the level sensor input is on, the valve stops, very similar to what we covered in the conveyor belt example.
>
> **[1:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=91)** The sensor is an input and it's off until the liquid reaches a certain level.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=96)** Then, the sensor turns on.
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=98)** So, I'm going to use an instruction here.
>
> **[1:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=101)** And I need to choose an instruction that is highlighted when the memory location is zero to keep the continuity.
>
> **[1:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=109)** So, we are going to use an XIO instruction for the level sensor.
>
> **[1:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=113)** Remember that the instruction is highlighted.
>
> **[1:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=116)** The instruction is activated.
>
> **[1:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=119)** But the physical sensor is not on.
>
> **[2:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=121)** The level sensor has not reached the required level yet.
>
> **[2:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=127)** Now the program works this way.
>
> **[2:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=129)** Once the start pushbutton is pressed, the start pushbutton instruction is activated and the level sensor instruction is already highlighted, because it's an XIO instruction.
>
> **[2:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=138)** So the valve opens and stays on.
>
> **[2:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=142)** As soon as the liquid reaches the required level, the level sensor will turn on and the XIO instruction will not be highlighted anymore and the valve will close.
>
> **[2:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=154)** Now, once the level sensor is on, the mixer starts mixing.
>
> **[2:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=159)** So I use an XIC instruction and a regular output for the mixer.
>
> **[2:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=165)** Now, as soon as the liquid reaches the desired level, the valve closes and the mixer starts.
>
> **[2:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=173)** The last thing, the mixer stops when the stop pushbutton is pressed.
>
> **[2:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=177)** Remember that the stop pushbutton is a normally closed contact.
>
> **[3:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=181)** Because I want the mixer to stop once we press on the stop pushbutton, I need to add the stop pushbutton in this rank.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=191)** And since it's a normally open relay, I'm going to use an examine if open instruction.
>
> **[3:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=197)** So now, as soon as the stop pushbutton is pressed, the instruction is not activated anymore and the mixer stops.
>
> **[3:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=207)** So this is how the final program looks like for this specific example.
>
> **[3:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=212)** Please note that this is not a complete practical solution.
>
> **[3:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=215)** I just chose this example to show you how to build a ladder logic.
>
> **[3:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=219)** For demonstration purposes, I'm going to use a yellow light for the valve and a green light for the mixer.
>
> **[3:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=228)** And for the start pushbutton I'm going to use the first one, the second one for the stop, and the third one for the level sensor.
>
> **[3:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=236)** Now, we need to go online, download the program, and select the run mode.
>
> **[4:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=246)** As soon as you hit the start pushbutton, notice here that the valve opens using the yellow light.
>
> **[4:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=252)** And as soon as you reach the level, the valve closes and the mixers start mixing.
>
> **[4:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=258)** You can see the green light.
>
> **[4:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=261)** And the mixer will stay on until you press on the stop pushbutton.

> [!info]- Semantic Content
>
> **Env Vars:** xio (3), xic (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** we covered (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** download the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Latch/unlatch output](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=0)** - [Instructor] Latch and unlatch output.
>
> **[0:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=3)** Output latching and unlatching are used together.
>
> **[0:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=6)** They are types of output instruction they used in ladder logic.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=10)** So, when latching an output, we need to unlatch it within the same program.
>
> **[0:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=16)** So, what latching instruction actually means.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=19)** An output latching instruction is an output instruction used to maintain or latch an output on, even if the input condition changes.
>
> **[0:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=28)** So, if any run has a latching instruction, this means that the output reference to the latching instruction is turned on and remain on even if the run logic or the [[PLC]] power is lost.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=45)** Latch, to latch an output on, output stays on until unlatch instruction becomes true.
>
> **[0:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=53)** Unlatch instruction, to unlatch a latched on instruction with the same address.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=61)** Let's see what this means.
>
> **[1:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=63)** This is a regular output instruction.
>
> **[1:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=65)** We have a pushbutton in order to start a motor.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=68)** Since we're using a regular output, once I press on the pushbutton, the motor starts, but once I let go, the motor turns off.
>
> **[1:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=78)** So, one way to keep the motor on is to use a sealing instruction, as we learned.
>
> **[1:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=83)** So, once I press on the pushbutton, the motor starts and stays on even if the pushbutton is not on.
>
> **[1:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=91)** We can use a latch instruction that works the same way.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=96)** In order to keep the motor on, a latching instruction is used to keep the output on.
>
> **[1:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=103)** So, once I press on the pushbutton, the motor starts, and when I let go, the motor stays on even if the pushbutton is no longer on.
>
> **[1:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=114)** A latching instruction is also called a retentive instruction.
>
> **[1:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=117)** Retentive basically means remember, so as if the instruction keeps remembering the last state it had.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=125)** A latching instruction will remain on, in another [[Microsoft Word|word]], will stay latched on until the unlatch instruction with the same address reference is energized.
>
> **[2:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=137)** So, we use unlatch instruction to unlatch or to clear the status bit.
>
> **[2:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=143)** So, for the motor, in order to unlatch the motor, I need to use an unlatch instruction.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=148)** So, once the first pushbutton is pressed, this latches the motor.
>
> **[2:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=152)** Once the second pushbutton is pressed, this is unlatch the same motor.
>
> **[2:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=157)** Notice here that the output is having the same reference, the same memory address.
>
> **[2:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=162)** It needs to be the same output for the latching and unlatching.
>
> **[2:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=167)** So, let's use the software in order to see how the latch and unlatch works.
>
> **[2:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=175)** So, now two runs, one for pushbutton one and one for pushbutton two, and in order to get the latch output, you can take it from the User tab Output Latch.
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=189)** Take it and just drag it in the same run.
>
> **[3:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=193)** The same thing for the second one, for the unlatch here.
>
> **[3:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=199)** And for demonstration purposes, I'm going to use one of the lights as an indication for the motor to be on.
>
> **[3:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=206)** So, this is the first pushbutton, this is the second pushbutton, and I'm going to use, for example, the fifth light for the motor.
>
> **[3:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=219)** Notice here that the latch and unlatch have the same address, 02/5, and in the second run, 02/5.
>
> **[3:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=233)** So, we download the software, the program, to the PLC and go to the Run mode.
>
> **[4:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=241)** So, the first pushbutton, this is going to latch the motor, so once I press it and let go, the motor turns on and stays on, in another word, latches the output, and then once you press on the second one, it unlatches the same output.
>
> **[4:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=261)** Remember that the output will stay on unless you use an unlatch instruction.
>
> **[4:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=268)** So, latch and unlatch instructions, always used in pairs.
>
> **[4:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=274)** Latch and unlatch instructions must have the same reference address.
>
> **[4:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=280)** Latch and unlatch instructions do not have to be grouped together in the ladder logic.
>
> **[4:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=285)** So, you can have many runs in between, but always keep in mind that latch and unlatch work together.
>
> **[4:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=293)** Latching and unlatching instructions have their uses, but you need to be careful when using them in case of a power goes off.
>
> **[5:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=302)** The output keeps the same status, and it might be a hazard case to keep the motor or the heater on, for example, when the power comes back.
>
> **[5:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=312)** This is a very common example of how a start and stop ladder logic looks like and the equivalent latch and unlatch circuit to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (2), is an  (1), means that (1), basically means (1)
> **Env Vars:** plc (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1), be careful (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Latch/unlatch example](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=0)** - [Instructor] So, now I'm going to use the same previous example of filling a tank and mixing the liquid, but instead I'm going to use a latch and unlatch instructions.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=10)** Again, the example was there's a start pushbutton to start and filling valve opens to start filling the tank with the liquid.
>
> **[0:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=18)** Once the liquid reaches a certain point, the valve closes and the mixer starts mixing until we press on the stop pushbutton.
>
> **[0:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=26)** So, here we have three inputs and two outputs, and again, they're all normally open contacts.
>
> **[0:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=34)** So, this is what we did, and once the start pushbutton is pressed, the valve is open and start filling.
>
> **[0:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=41)** And as soon as you let go, the valve closes.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=45)** So, in order to keep the valve open, previously we used a sealing instruction, or holding instruction, to keep the output on.
>
> **[0:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=53)** This time we are going to use a latch instruction.
>
> **[0:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=57)** Remember, latch instruction is an output instruction used to maintain or latch an output, even if the input condition changes.
>
> **[1:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=66)** Any rung that has a latching instruction, this means that the output reference to the latching instruction is turned on and stays on.
>
> **[1:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=76)** Keep in mind that the latch output stays latched unless I use an unlatch instruction.
>
> **[1:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=84)** Now I'm going back to the problem.
>
> **[1:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=85)** Once the liquid reaches a set point, the level sensor is activated and the valve closes.
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=93)** So, I need the level sensor to be active, I can use it for the unlatch instruction to unlatch the valve.
>
> **[1:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=102)** Remember that latch and unlatch work in pair and must have the same address.
>
> **[1:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=109)** So, now the program works this way.
>
> **[1:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=111)** Once the start pushbutton is pressed, the valve opens and starts filling the tank with the liquid.
>
> **[1:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=117)** Once the liquid reaches a certain level, the level sensor is activated and the unlatch instruction will be turned on, or highlighted, and the valve will close.
>
> **[2:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=129)** The other thing that happens once the level sensor is on is that the mixer starts mixing.
>
> **[2:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=136)** So, I add the level sensor as an XIC to the mixer.
>
> **[2:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=140)** So, the program now works this way.
>
> **[2:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=142)** As soon as the liquid reaches the desired level, the valve stops and the mixer starts.
>
> **[2:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=149)** And this is how the program looks like so far.
>
> **[2:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=152)** Once the start pushbutton is pressed, the valve opens and it's this latch, so it stays on, and the tank starts filling with the liquid.
>
> **[2:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=161)** Once the liquid reaches a certain level, the level sensor is activated and the unlatch instruction will be highlighted in order to close the valve, and in the same time, the mixer starts mixing.
>
> **[2:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=175)** Note here that the level sensor activates two outputs.
>
> **[2:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=179)** It's activates the filling valve unlatch instruction and it activates the mixer.
>
> **[3:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=185)** So, since I have multiple outputs to the same input, I can add them in parallel.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=191)** So, now as soon as the level sensor is on, it activates both outputs, the valve is unlatched, and the mixer is on.
>
> **[3:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=201)** The last thing is that the mixer stops when the pushbutton is pressed.
>
> **[3:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=205)** Again, remember that it's a normally open contact.
>
> **[3:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=209)** So, now I need to think about where to put the stop pushbutton.
>
> **[3:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=213)** The stop pushbutton is going to be added to this rung because I want the mixer to stop once I press on the stop pushbutton.
>
> **[3:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=223)** Again, since we're using a normally open contact, we are going to just examine if open instruction XIO.
>
> **[3:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=232)** So, now the program looks this way.
>
> **[3:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=234)** Since it's a normally open contact, we are going to use an XIO instruction for the stop pushbutton.
>
> **[4:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=240)** Once the level sensor is activated, or is active, the filling valve is unlatched and the mixer turns on.
>
> **[4:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=248)** As soon as the stop pushbutton is pressed, the instruction is not activated anymore and the mixer stops.
>
> **[4:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=256)** So, this is how the complete program looks like using a latch and unlatch.
>
> **[4:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=261)** It does the same thing as the previous example, the only difference is that we're using a latch and unlatch instruction instead of using a hold or sealing instructions.
>
> **[4:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=275)** And using the [[Simulation Software]], you can see that once you press on the start pushbutton, it latches the output, the valve is open.
>
> **[4:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=285)** Once we reach the level sensor, now it unlatches the valve and the mixer starts mixing.
>
> **[4:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=292)** And notice here that once we press on the stop pushbutton, this stops the whole thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (1)
> **Env Vars:** xio (2), xic (1)
> **Definitions:** is an  (1), means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. Timers and Counters

[↑ Back to Table of Contents](#table-of-contents)

#### [Timer instruction overview](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=0)** - Timer instruction is a very common instruction used in Ladder Logic programming.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=5)** Timers are used to delay actions, or to keep an output on or off for a specific time.
>
> **[0:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=13)** This is the congregation of typical [[PLC]] timer instruction.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=17)** And it has the following parts.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=19)** A timer name, or a time address, timer base, preset value, and accumulated value.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=27)** Let's see what each part is.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=29)** A timer is name is the timer unique identifier in the PLC memory.
>
> **[0:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=35)** No matter what brand of PLC, each timer will have a name or a number to identify it.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=43)** Depending on the PLC type, there is a certain way to write the name.
>
> **[0:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=48)** An example is one of the Allen Bradley PLC address is T40.
>
> **[0:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=55)** T, and then the timer file number, and finally, the time element number.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=61)** So, T40, is time file four, timer element zero.
>
> **[1:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=67)** Every timer has a timer base.
>
> **[1:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=70)** Times are typically programmed with several different timer bases.
>
> **[1:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=75)** The timer base is also referred to as the timer accuracy.
>
> **[1:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=80)** The timer base specifies at what rate the timer will increment.
>
> **[1:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=85)** So, depending on the time base, as a PLC programmer, you can specify the preset value.
>
> **[1:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=91)** For example, if you want to have a three second delay, then you need to check what's the time base of the timer instruction that this particular PLC software deals with.
>
> **[1:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=104)** So, if the time base is 0.0001 second, and you want it program a three second delay, then the number to put in the preset value is three divided by 0.001, and this equals to 3,000.
>
> **[2:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=124)** The equation is that the desired time delay equals the preset value times the time base.
>
> **[2:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=132)** Here is another example.
>
> **[2:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=134)** If a programmer enters 0.1 for the time base, and 50 for the number of delay increments, the timer would have a five second delay.
>
> **[2:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=144)** 50 times 0.1 equals five second.
>
> **[2:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=149)** Timers must have a preset value.
>
> **[2:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=153)** The preset value is the number of time increments the timer must count before changing the state of the output.
>
> **[2:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=160)** And it depends on the time base, as we mentioned.
>
> **[2:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=163)** So, simply, a timer preset value is the length of the time for which the timer is to run.
>
> **[2:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=170)** While the time base specifies at what rate the timer will increment.
>
> **[2:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=176)** Finally, the accumulated value indicates the time increments accumulated when the timer rung and instruction are active.
>
> **[3:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=186)** Timers are an output instruction.
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=189)** Times are usually added on the right hand side.
>
> **[3:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=193)** And the timer starts timing when the rung condition is true.
>
> **[3:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=199)** So, if there's no input, the timer will start timing as soon as the rung is true.
>
> **[3:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=204)** If we add an input, for example, a switch, once the switch is on, the rung is true, and as a result, the timer starts timing.
>
> **[3:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=213)** A timer resets with the change in the rung condition.
>
> **[3:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=217)** So, if the rung is true, the timer starts timing.
>
> **[3:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=221)** Once the rung goes false, the accumulator resets.
>
> **[3:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=225)** So, if you don't have any input, then the timer will not reset, unless the rung goes to false.
>
> **[3:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=232)** But once we add an input, then the timer starts timing, when the input is true, and once the input goes false, the timer resets.
>
> **[4:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=241)** Here's a simple example of using a switch as an input, and a timer as an output.
>
> **[4:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=246)** The timer base, for simplicity, I'll use one.
>
> **[4:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=249)** And the preset value is five seconds.
>
> **[4:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=252)** So, once the switch is turned on, the rung becomes true.
>
> **[4:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=257)** And then, the timer starts timing until it reaches the preset value.
>
> **[4:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=262)** Once the timer reaches the preset value, then it stops accumulating, because the accumulated value equals the preset.
>
> **[4:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=271)** Then, in order to reset the timer, the way to do it is to turn off the switch.
>
> **[4:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=277)** Once the switch is turned off, the rung goes to false, and there is a change in the rung condition, and the timer accumulated value resets.
>
> **[4:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=287)** And to start the timer again, simply turn on the switch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (7)
> **Env Vars:** plc (7), t40 (2)
> **Versions:** 0.1 (2), 0.0001 (1), 0.001 (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **Cross-References:** we mentioned (1)
> **Speakers:** - timer (1)

#### [Timer status bits (EN, DN, and TT)](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=0)** - [Instructor] A timer instruction comes with three main status bits.
>
> **[0:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=4)** Timer done bits, timer timing bits, and timer enable bits.
>
> **[0:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=10)** And depending on the [[PLC]] type, the bits are either attached to the timer instruction or hidden.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=17)** A timer done bit is true when the accumulated value is equal to the preset value.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=22)** It is basically on when the timer is done timing.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=27)** It changes from false to true or from true to false depending on the type of the timer instructions you use.
>
> **[0:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=34)** The bit is commonly used to control another logic when the timer is done timing.
>
> **[0:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=41)** A simple example in my process that the heating of the liquid is to begin 30 seconds after signal is received from a limit switch.
>
> **[0:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=50)** So we use a timer on delay to set a 30 second and use the done bit to start the heating process.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=59)** So here, we use an XIC instruction for the limit switch and when the limit switch is activated, the timer starts timing for 30 seconds.
>
> **[1:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=69)** For the timer instructions, for simplicity, let's use a timer base of one, second and the preset is 30 seconds.
>
> **[1:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=77)** And after 30 seconds, after the timer is done timing, the timer done bit is true and as a result, the heater starts.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=86)** So we use an XIC instruction for the timer done bit and use the heater as the output instruction.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=94)** Note here that during the timer timing, the done bit is not true and the heater is only on when the timer is done timing.
>
> **[1:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=104)** When the done bit is true, the accumulator equals the preset.
>
> **[1:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=109)** And also, note here when using the status bit, we use the same timer name.
>
> **[1:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=117)** The second bit is a timer timing bit.
>
> **[2:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=120)** This bit is true only when the accumulator is incrementing.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=125)** The timer timing bit is true whenever the rung is true and the accumulated value is less than the preset value.
>
> **[2:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=133)** So basically, while the timer is timing.
>
> **[2:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=137)** If we have an input, then the timer timing is true whenever the input is true and as long as the accumulated value is less than the preset value.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=148)** When the timer done bit is set, the timer timing bit resets.
>
> **[2:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=153)** So using the same previous example, let's say that we have a yellow light to turn on while the timer is timing during the 30 seconds, indicating that the heating process is going to start after this delay.
>
> **[2:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=167)** In a lot of logic, we are going to use the timer on delay to set the 30 second and use the timer timing bit to connect it to the yellow light.
>
> **[2:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=177)** So an XIC instruction for the timer timing bit and connecting it to the yellow light which is the output.
>
> **[3:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=184)** Now, the program works this way.
>
> **[3:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=186)** Once the limit switch is true, the first rung is true and the timer starts timing.
>
> **[3:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=192)** Timer timing bit, in the second rung, is true as soon as the timer starts timing and it stays on or stays true as long as the accumulated value is less than or equal to the preset.
>
> **[3:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=206)** Note again that we're using the same name of the timer, but now we're specifying the timer timing bits.
>
> **[3:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=214)** As soon as the timer is done timing, the timer timing bit goes to false and the light turns off.
>
> **[3:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=222)** And the timer done bit now goes on in the third rung and the heater starts.
>
> **[3:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=229)** The third bit is a timer enable bit.
>
> **[3:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=231)** An enable bit is true when the rung input is true and enable bit is false when the rung input is false.
>
> **[4:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=240)** The main difference between timer enable bit and timer timing bit is that the timer timing is only true while the timer is timing.
>
> **[4:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=251)** As for the enable bit, the enable is true as long as the rung is true even after the timer is done timing.
>
> **[4:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=259)** So basically, whenever the rung is true, the timer enable is true anytime the timer instruction is true.
>
> **[4:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=267)** So if you have an input, as long as the input is true, the timer instruction is considered enabled.
>
> **[4:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=275)** So in other words, as long as there is continuity through all input instructions to the timer instruction, no matter what the relationship between the preset and accumulated value, the timer enable bit will be set.
>
> **[4:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=289)** So even if the timer's done timing or accumulator is equal to the preset or zero, the timer enable is true when the rung is true.
>
> **[4:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=299)** The enable bit is reset or goes to false when the rung goes to false.
>
> **[5:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=305)** So now, using the same example, let's have the red light that is turned on during the whole process when the timer is timing for the 30 seconds and when the timer is done and the heater is turned on.
>
> **[5:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=318)** In this case, the timer status bit that we're using is timer enable bits.
>
> **[5:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=325)** So here is the yellow light is only on when the timer is timing.
>
> **[5:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=329)** When the timer is timing for the 30 seconds.
>
> **[5:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=332)** While the red light is on, the whole process while the timer is timing and even when the timer is done, as long as the rung is true.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1)
> **Env Vars:** xic (3), plc (1)
> **Definitions:** is a  (2), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Timer types (TON and TOF) and diagrams](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=0)** - The main two types of timers are, Timer ON Delay and Timer OFF Delay.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=7)** And it's usually written on the timer instruction, what type of timer that is.
>
> **[0:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=12)** Timer On Delay instruction, usually use to turn on an output, on or off after the timer has been on for a preset value.
>
> **[0:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=21)** So let's take an example of a Timer On Delay that is set for 20 second.
>
> **[0:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=26)** And, we use an input like a switch.
>
> **[0:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=30)** I'm going to use a timer diagram, in order to explain the concept and to show the difference between the two timer types.
>
> **[0:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=38)** This is the time diagram for the Rung.
>
> **[0:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=40)** It goes from False to True.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=43)** And if we have an input in the Rung, like in our case we have a switch, then when the input is True the Rung is True.
>
> **[0:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=52)** This is showing how long the Rung is being True, or how long we have kept this switch on.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=59)** Let's say that the Rung stays on for 40 seconds.
>
> **[1:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=63)** Whenever the Rung is True, the Enable bit becomes True as long as the Rung is on.
>
> **[1:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=70)** The timer is set to time for 20 seconds, so the timer is timing for 20 seconds only.
>
> **[1:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=77)** This means the Timer Timing Bit is activated only for 20 seconds.
>
> **[1:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=84)** After the 20 seconds, the Timer Timing bit goes to False.
>
> **[1:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=89)** Even if the Rung is True, the Timer Timing bit goes to False after reaching the preset value.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=97)** The Done bit is activated after the timer is done and stays on as long as the Rung is True.
>
> **[1:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=106)** Once the Rung goes to False, the Timer Done bit resets too.
>
> **[1:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=113)** This how a Timer On Delay Timing Diagram looks like for our example.
>
> **[1:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=118)** Note here that all the bits work only when the Rung is activated.
>
> **[2:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=124)** So, if the Rung is only on or is only True for 10 seconds, then the Enable bit will be True and the Timer Timing bit will be True.
>
> **[2:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=134)** While the Done bit will not get to be True, because it will never reach the preset value of 20 seconds.
>
> **[2:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=141)** So keep that in mind when using a timer and you notice that the Done bit does not work.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=148)** Use the Timer On Delay instruction, if you want to program a time delay before an instruction becomes true.
>
> **[2:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=155)** So this is an example of a Timer On Delay.
>
> **[2:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=158)** Let's say a garage door, that after pressing an open gate button, the garage opens after five second delay.
>
> **[2:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=165)** So we use Timer On Delay in this case.
>
> **[2:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=169)** The other timer type is Timer Off Delay.
>
> **[2:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=172)** Use Timer Off Delay instruction, if you want to program a timed delay to begin, after a Rung input goes False.
>
> **[3:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=182)** The Timer Off Delay works in a little bit different format.
>
> **[3:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=186)** The Enable bit is True when the Rung is True.
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=189)** The timer starts timing when the Rung goes to False.
>
> **[3:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=194)** And the Done bit is on, as soon as the Rung is True, and stays on until the timer done timing.
>
> **[3:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=204)** So one of the example of using a Timer Off Delay... Let's say we have an external cooling fan, for a motor is to run all the time the motor is running and for 10 seconds after the motor is turned off.
>
> **[3:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=219)** This involves a 10 second off delay timer.
>
> **[3:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=222)** The 10 second timer cycle begins when the motor is turned off.

> [!info]- Semantic Content
>
> **Env Vars:** off (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)

#### [Use a timer to flash a light](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=0)** - [Narrator] One of the common applications for Timer, is using it for flashing lights.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=5)** Flashing lights are used in many applications, and industry and even I'm commercial environments.
>
> **[0:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=11)** In a flashing light, simply the light is on for a certain time, and off for a certain time.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=17)** So we need to think about how long to keep it on, and how long to keep it off.
>
> **[0:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=23)** Let's take an example where we need to program a flashing light, and in our example, the light is on for six seconds and off for two seconds.
>
> **[0:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=34)** So, one timer to keep track of the six seconds, and one timer to keep track of the two seconds.
>
> **[0:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=41)** Note here, as mentioned previously, we need to know what is the timer base of the specific [[PLC]] timer we're using.
>
> **[0:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=48)** In our example we are going to use a timer base of 0.1.
>
> **[0:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=52)** So for the six second delay, and for the two seconds delay, we are going to use 60 and 20 for the preset value.
>
> **[1:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=60)** I chose the names to be on timer for the six second delay, and off timer for the two seconds delay, but I'm using a timer on delay for both.
>
> **[1:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=71)** Now let's start programming, the first step is adding the timer in the Rung, as soon as the program starts, the Rung is true and the timer starts timing.
>
> **[1:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=82)** Once the six seconds is done, then we'll be using the done bit of the timer, to start the second timer.
>
> **[1:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=89)** This will ensure that the second timer starts only, when the first timer is done timing.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=95)** Now we need to think about how to reset the first timer, remember that timers, resets in a change in a Rung condition, and for timer on delay, I need the Rung to have the transition from true to false, because at this point without having any input instruction, the rung will be true and stay that way, and the timer will stop once it reaches the preset value.
>
> **[1:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=119)** So now we need to think about how to make the rung goes from false to true, and in the same time ensuring that the timer increments to the preset value.
>
> **[2:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=129)** So we can take advantage of the second timer by using the timer done bit.
>
> **[2:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=134)** Now think about either using XIC, or XIO instruction.
>
> **[2:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=139)** Let's see how the program works when using XIO instruction.
>
> **[2:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=144)** So at the beginning, the second timer done bit, is not activated yet, because the second timer has not even start timing.
>
> **[2:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=152)** So XIO instruction in the first rung is highlighted, and this will ensure that the first timer starts timing.
>
> **[2:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=161)** As soon as the first timer is done timing, it stops and the done bit in the second rung is activated, and as a result the second timer starts timing, and once the second timer is done timing, the second timer done bit changes to one.
>
> **[2:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=177)** So the XIO instruction in the first rung, is not highlighted anymore and the first timer resets back to zero, and at the same time, as soon as the first timer resets, the done bit resets as well.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=191)** So the second rung XIC instruction goes to zero, and this makes the second timer resets as well.
>
> **[3:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=200)** At this point we go back to the beginning, and the whole process starts again.
>
> **[3:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=205)** The timers are used to reset each other, after each one is done timing.
>
> **[3:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=212)** Now we got the flashing part working, we have two timers, one is for six seconds, and one for two seconds.
>
> **[3:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=220)** Now we need to link back to the light, since we want the light to stay on for six seconds, and off for two seconds, then we are going to use the six second timer timing bit, to connect it to the light.
>
> **[3:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=236)** So let's use this [[Simulation Software]], to see how this program works.
>
> **[4:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=242)** In the simulation software note here I'm using two timers, the address for the six second timer delay, is T40 and the address for the two seconds timer is T41.
>
> **[4:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=259)** Now we go online, download the program, and hit the remote.
>
> **[4:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=268)** Notice here as soon as we hit the remote, the flashing light works, it's on for six second and off for two seconds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (2), [[PLC]] (1)
> **Env Vars:** xio (4), xic (2), plc (1), t40 (1), t41 (1)
> **CLI Commands:** make (1)
> **Versions:** 0.1 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [narrator] (1)

#### [Counter instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=0)** - [Instructor] Many times, when dealing with machinery in manufacturing situations, you have to count items, whether you're putting [[Microsoft Products|products]] in a box or two dozens of bottles into a container, you need to count the items coming off the machine.
>
> **[0:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=14)** Every [[PLC]] has counter instructions.
>
> **[0:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=18)** Although they may be programmed differently, they operate the same way.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=22)** So once you become familiar with one, the [[Representational State Transfer (REST)|rest]] are easy to learn.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=27)** The two main types of counters in PLC is counter up and counter down.
>
> **[0:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=33)** The choice of which to use depends on the task to be done.
>
> **[0:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=37)** For example, if we're counting the finished products leaving a machine, we might use a counter up.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=43)** If we're tracking how many parts are left, we might use counter down.
>
> **[0:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=49)** Most PLC contain both up and down, and here are some of the other examples of the counters used.
>
> **[0:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=57)** This is the configuration of the typical PLC counter function.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=61)** A counter instruction is an output instruction.
>
> **[1:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=64)** Most PLC counter counts the false to true transition of the rung input logic.
>
> **[1:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=71)** The counter instruction counts each time the input logic changes the rung from false to true.
>
> **[1:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=80)** Counters normally use the low to high transition from an input to trigger the counting action.
>
> **[1:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=88)** Simply, when the rung is activated, the counter counts one.
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=93)** And we need the rung to have the false to true transition for the counter to continue counting.
>
> **[1:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=100)** Input logic can be a signal coming from an external device like sensor, or an internal logic as we learned before.
>
> **[1:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=109)** Each time the counter instruction sees a false to true rung transition, now depending on the counter type, a counter-up counter is incremented by one.
>
> **[2:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=122)** A counter-down counter accumulated value is decremented by one.
>
> **[2:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=128)** The type of the counter is usually listed on the tip of the instruction.
>
> **[2:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=132)** The counter instruction has generally three values associated with it: counter name, counter preset, and accumulated value.
>
> **[2:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=143)** A typical counter counts from zero to a predetermined value that's called the preset.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=148)** The preset value specifies the target number of counting, while accumulated value indicates the actual number of counts that have already occurred.
>
> **[2:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=160)** So here's an example, if you want to count from zero to 100, you would count up and use a counter-up counter.
>
> **[2:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=167)** The predetermined value of 100 would be the preset value, and accumulated value is the current or accumulated counts.
>
> **[2:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=176)** So if our counter had counted 45 pieces that had passed on the conveyor, the accumulated count, or the value, would be 45.
>
> **[3:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=186)** And when all 100 pieces had passed on the conveyor, the counter accumulated value and the preset would be equal.
>
> **[3:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=195)** At this point, the counter would signal that the counter is done counting, and it's complete.
>
> **[3:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=203)** Counters need a reset instruction for it to reset back to zero.
>
> **[3:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=208)** The reset instruction name should match the counter name.
>
> **[3:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=213)** Now, a counter down works a little bit different.
>
> **[3:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=216)** Each time a count-down counter sees a false to true transition, its accumulated value is decremented by one.
>
> **[3:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=227)** Since the accumulated value is decremented each time the input logic changes the rung from false to true, the accumulated value must be starting point of the count.
>
> **[4:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=240)** Counters and PLC come with bits that are associated with them.
>
> **[4:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=244)** Each bit is activated at a certain task.
>
> **[4:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=247)** CU when the counter is counting up, CD when the counter is counting down, and then the done bits counter is when the counter is done counting.
>
> **[4:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=260)** The accumulated is equal or greater than the preset value.
>
> **[4:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=266)** The way to use the bits is by using the name of the counter and then select the specific bit attached to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (6), [[Microsoft Products|Products]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** plc (6)
> **CLI Commands:** cd (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Examples of counter types](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=0)** - [Instructor] So now we'll go through the examples for counter up, counter down, and up and down counter.
>
> **[0:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=6)** So let's see an example of using counter up in [[PLC Programming]].
>
> **[0:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=11)** For example let's say we have a sensor on a conveyor to count 24 cans that go into a case.
>
> **[0:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=18)** And while the counter is counting there's a yellow light that turns on indicating that the case is not full yet.
>
> **[0:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=25)** Once the counter reaches 24 cans then there is a green light indicates that the case is full and it's ready to go to the next step.
>
> **[0:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=35)** We need to have a reset push button that can reset the counter to fill in another case.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=43)** So in the [[PLC]] program we have a sensor as an input.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=46)** Note here we're using an XIC instruction and having the counter as an output for that specific run.
>
> **[0:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=53)** We need to give the name to the counter and specify the preset as 24.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=59)** After using the counter we need to associate the yellow light to the counter while it's counting.
>
> **[1:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=66)** So the bit that we use here is counter up bit.
>
> **[1:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=70)** Remember that we nee to use this name of the counter and select the counter up bit.
>
> **[1:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=76)** Now in the second run the yellow light will turn on as long as the counter is counting and not finished yet.
>
> **[1:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=85)** Then to program the green light we need to show that when the counter is done counting when the case has 24 cans then the green light turns on.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=97)** So we need, this time we use the done bit of the counter and associated that with the green light.
>
> **[1:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=103)** And I'm using an XIC instruction.
>
> **[1:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=106)** Remember than an XIC is activated when the number location is one.
>
> **[1:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=110)** So the bit, the counter up bit, is activated when the counter is counting.
>
> **[1:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=115)** And then the done bit will only be activated when the counter is finished counting.
>
> **[2:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=122)** In order to reset the counter we are going to use a reset instruction.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=125)** And remember that we needed to use the same name of the counter.
>
> **[2:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=130)** So we add a push button XIC instruction and have a reset instruction as an output to that specific rung.
>
> **[2:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=139)** The second example is using counter down.
>
> **[2:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=142)** For a counter down, each time the counter sees a false to true rung transition, its accumulated value is decremented by one.
>
> **[2:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=153)** Since the accumulated value is decremented each time the input logic changes from false to true the accumulated value must be starting point of the count.
>
> **[2:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=165)** For example when counting a batch of 100 parts, each time the part is made the remaining total is displayed on an operator interface so that the operator can see how many parts are needed to be manufactured.
>
> **[3:02](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=182)** So every part that is being manufactured, the remaining total is displayed.
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=188)** For the counter, accumulated value will be programmed with a value of 100, the total number of parts whereas the preset value will be zero.
>
> **[3:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=199)** In this case the accumulated value will be set to 100 and the preset value will be zero so each time a part is completed and passed through the sensor the accumulated value will be decremented by one.
>
> **[3:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=214)** When all 100 parts have been made the accumulated value and the preset value will be zero.
>
> **[3:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=222)** The done bit in the counter done is activated at that point when the accumulated is equal or greater than the preset value.
>
> **[3:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=230)** The value that we need to send to the monitor is the counter accumulated value.
>
> **[3:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=236)** Because we want to see how many parts are left.
>
> **[3:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=239)** We name it as the counter name .ACC, which is the accumulated value.
>
> **[4:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=246)** I am going to use a move instruction to move it to that monitor.
>
> **[4:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=251)** The last example is combining up and down counter.
>
> **[4:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=255)** So let's take an example where we need to keep track of the net numbers of parts on a conveyor.
>
> **[4:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=262)** The number of parts coming on the conveyor is counted by a proximity sensor and the number of parts leaving the conveyor is counted by another proximity sensor, if we want to keep track of the same entity we use the same address, the same memory location for both counter up and counter down.
>
> **[4:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=284)** So we use a separate count up instruction and a separate count down instruction with the same address.
>
> **[4:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=291)** With the same memory address.
>
> **[4:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=293)** Sensor one will increment the counter up and sensor two will increment the counter down.
>
> **[4:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=299)** Since both counters share the same address the accumulated value will be shared between the two counter instructions.
>
> **[5:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=307)** And because the accumulated is shared it will reflect any count seen by either count up or count down instruction.
>
> **[5:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=315)** And we're doing the same thing.
>
> **[5:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=317)** We are going to use a move instruction to move the accumulated value to the monitor to show how many parts are left.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Programming]] (1), [[PLC]] (1)
> **Env Vars:** xic (4), plc (2), acc (1)
> **UI Navigation:** go to (1), select the (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Counter and timer case study](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=0)** - [Instructor] So let's take an example where we use both timers and counters.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=5)** Let's design a system where a parking lot has 10 spots.
>
> **[0:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=9)** Whenever a car comes in, a sensor detects a car, and the door opens for three seconds.
>
> **[0:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=16)** The three seconds are used for demonstration purposes.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=19)** In real life, three seconds is really short to keep the door open.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=22)** So let's keep it for three seconds for programming purposes.
>
> **[0:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=26)** A green light is showing that there are some spots left in the parking lot, and a red light, that's showing there is no spots left when the parking is full.
>
> **[0:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=38)** The first part in any problem, let's try to identify the inputs and outputs of the system, and I mean the physical devices.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=46)** So the car sensor is an input to the system.
>
> **[0:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=49)** The parking lot door, the green light, and the red light are output to the system.
>
> **[0:55](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=55)** The first thing is that once the car comes in, detected by the sensor, the door opens.
>
> **[1:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=60)** So we are going to use an XIC instruction for the car sensor, and for the door, we use it as an output.
>
> **[1:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=67)** Now every time the door opens, it stays on for three seconds.
>
> **[1:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=73)** So now we need a timer.
>
> **[1:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=75)** As soon as the sensor detects a car, the door opens for three seconds.
>
> **[1:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=81)** For the three-second timer delay, we need to add a timer on delay to keep track of the time.
>
> **[1:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=88)** And if we select the base to be 0.1, then the preset value is 30.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=96)** Now the program works this way.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=97)** As soon as the sensor detects a car, the timer starts timing.
>
> **[1:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=101)** So now I need to add the parking lot door, so the door stays on, stays open, for three seconds.
>
> **[1:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=110)** Remember that we have three status bits for the timer.
>
> **[1:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=113)** So I need to select the bit that the door opens while the timer is timing.
>
> **[2:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=121)** So in this case, we are going to select timer timing bits.
>
> **[2:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=126)** Now, as soon as the car comes in, a sensor detects the car, and the timer starts timing for three seconds, and during that time, the door opens and stays on for three seconds.
>
> **[2:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=139)** As soon as the timer reaches the preset, which is at three seconds, the timer timing bit goes default, and the door closes.
>
> **[2:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=148)** The second part of the problem is that we need to keep track of how many cars get sent to the parking lot.
>
> **[2:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=154)** So now I need to use a counter.
>
> **[2:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=157)** We are going to use a counter app, because we're counting how many cars get sent to the parking lot.
>
> **[2:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=164)** For the preset value, we are going to use 10, because we need to keep track of 10 cars.
>
> **[2:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=169)** The counter name is going to be Car_counter.
>
> **[2:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=172)** There's a good practice in programming is to choose a name that's related to the task.
>
> **[2:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=178)** Now every time the door opens, the counter counts by one.
>
> **[3:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=183)** Remember that the counter counts in the transition from false to true.
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=188)** Every time the door opens, the counter incremented by one.
>
> **[3:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=193)** And we place this after the second ring.
>
> **[3:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=196)** Now the program works this way.
>
> **[3:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=198)** Once the car gets in the front of the parking lot door, the car sensor senses the car, and the door opens for three seconds.
>
> **[3:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=207)** And once the parking lot door is activated, the counter increments by one.
>
> **[3:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=213)** Remember again, that the counter counts in the transition from false to true.
>
> **[3:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=219)** Let's continue programming.
>
> **[3:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=221)** Once there are available parking spots, there's a green light that needs to be turned on.
>
> **[3:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=227)** So we are going to use the counter to achieve that task.
>
> **[3:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=230)** As long as the counter is not yet done counting, in other words, as long as the accumulated value is less than the preset, a green light is on.
>
> **[4:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=243)** As you learned before, the counters in [[PLC]] come with bits that are associated with them, counter up, counter down, and done bits.
>
> **[4:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=251)** Since I want the green light to be on while counting, and while the accumulated value is less than the preset, the bit that I'm going to use is counter up bit.
>
> **[4:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=263)** So now, as the long as the accumulated value is less than the preset, a green light will turn on, indicating we have enough spots for parking.
>
> **[4:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=273)** So this is how the logic looks like so far.
>
> **[4:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=277)** Now, the last thing is that when the parking spots are filled, once there are 10 cars inside the parking lot, a red light turns on, indicating that there is no more parking spots available.
>
> **[4:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=290)** Again, we are going to use the counter instruction.
>
> **[4:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=294)** Once the accumulated value reaches the preset, the done bit is now true.
>
> **[5:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=300)** So we use the done bit, and connect that to the red light.
>
> **[5:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=305)** The program now behaves this way.
>
> **[5:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=308)** While the counter did not reach the preset, the counter up bit is active, and a green light is on.
>
> **[5:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=315)** Once the accumulator reaches the preset, the counter up bit is not active any more, so the green light turns off, and at the same time, the done bit is activated, and a red light turns on.
>
> **[5:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=328)** So this is the solution for this specific problem.
>
> **[5:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=332)** In other cases, we might need to keep track of the cars coming in, and leaving out the parking lot, but this is the complete program for the example that I'm using in these slides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1)
> **Env Vars:** xic (1), plc (1)
> **UI Navigation:** select the (2)
> **Definitions:** is an  (1), in other words (1)
> **Versions:** 0.1 (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 5. Detailed Case Study: Plywood Sheets Process

[↑ Back to Table of Contents](#table-of-contents)

#### [Case overview](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=0)** - [Narrator] So I'm going to go through a detailed example that combines everything we've learned in this course.
>
> **[0:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=6)** In this video, I'm going to explain, what is the problem and what are we trying to achieve?
>
> **[0:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=11)** You can give it a try and try to come up with a ladder logic and check your solution later.
>
> **[0:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=15)** In any [[PLC]] Programing, each PLC programmer has his or her own preferred method.
>
> **[0:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=21)** So each problem has more than one right way to solve it.
>
> **[0:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=25)** There are some general rules that will make programming a little bit easier and help you to build the ladder logic.
>
> **[0:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=33)** So let's take this example that involves programming in automatic control for the system shown.
>
> **[0:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=39)** When the start pushbutton starts, a stacker starts stacking plywood sheets at Position A using Sensor A.
>
> **[0:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=48)** When 12 sheets are stacked, the conveyor goes on and moves the stacks to Position B.
>
> **[0:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=56)** A sensor is used to stop the conveyor at Position B.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=61)** At B, there's a paint that's applied for 10 seconds.
>
> **[1:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=65)** After painting is complete, the conveyor restarts automatically.
>
> **[1:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=71)** The conveyor then moves to Position C.
>
> **[1:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=74)** At Position C, the stacks stops automatically and stacks are removed manually.
>
> **[1:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=82)** A stop push button is used to stop the process at any time.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=86)** So let's assume that we're only using one stack on the conveyor at a time, and all relays are normally open, except for the stop pushbutton.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=96)** It's a normally closed relay.
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=98)** The first part in any problem, let's try to identify the inputs and outputs of the system, and any of the physical devices.
>
> **[1:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=106)** So the start and stop pushbutton, they are considered inputs.
>
> **[1:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=110)** The sensors at each position, they're all inputs because they provide data to the system and according to the bits, the conveyor either starts of stops.
>
> **[2:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=120)** The paint turns on and off and the conveyor moves on or stops.
>
> **[2:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=126)** They are considered as outputs.
>
> **[2:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=129)** Inputs and outputs are connected in an input module and output module of the PLC, accordingly.
>
> **[2:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=136)** And each has a specific address connected to it.
>
> **[2:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=139)** Input address name is I, for input, one for the number that specifies the input module that placed in, and finally a specific bit.
>
> **[2:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=149)** Output address is O, for output, two is the rack module number, and finally, the specific bit.
>
> **[2:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=157)** So here are the addresses for each input and output for the system.
>
> **[2:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=160)** I'm going to use that later on when we do the [[Simulation]], So the layout of the process is as following: you press a start pushbutton to start the process.
>
> **[2:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=171)** After 12 sheets, conveyor starts.
>
> **[2:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=174)** At Position B, conveyor stops, the paint starts on for 10 seconds.
>
> **[3:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=180)** After 10 seconds, the conveyor starts again.
>
> **[3:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=184)** At Position C, the conveyor stops.
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=188)** I'll go through the ladder logic first, how to come up with it and how to solve it step by step and at the end, I'll do a [[Simulation Software]] to test the program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (3), [[Simulation]] (1), [[Simulation Software]] (1)
> **Env Vars:** plc (3)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Part 1: Counting sheets](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=0)** - [Narrator] Let's start building the Ladder Logic program.
>
> **[0:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=3)** When starting a [[PLC Ladder Logic]], always try to break down the problem one step at a time.
>
> **[0:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=9)** It makes it easier for you to program the task, and also for debugging purposes.
>
> **[0:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=15)** Let's look at the first task.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=17)** The start push button is pressed and let go.
>
> **[0:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=20)** A stacker starts stacking sheets of wood and then when we have 12 sheets, the conveyor starts.
>
> **[0:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=27)** I need to use a start push button to keep it on, even after letting go the start push button.
>
> **[0:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=32)** Because we cannot expect a technician to keep holding the start push button while stacking the sheets.
>
> **[0:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=39)** So we use an XIC for this example, and we'll create an internal tag, we name it as Start_process.
>
> **[0:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=46)** And seal the start push button to keep the start process on.
>
> **[0:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=51)** Now, as soon as the push button is pressed, the XIC instruction is activated, instruction is highlighted, and the internal tag is activated.
>
> **[1:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=60)** The bit status is one.
>
> **[1:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=63)** And as soon as the internal tag is one, the XIC and the seal in instruction is activated too.
>
> **[1:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=69)** Even if the push button is no longer pressed, the internal start process tag is kept on, as the run now uses an or option to keep the output on.
>
> **[1:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=81)** Then, we use Sensor A to keep start counting for the 12 sheets.
>
> **[1:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=86)** We need to count up to 12 sheets.
>
> **[1:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=89)** For Sensor A, it is an input, so it senses each sheet, and counts them.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=95)** We use an XIC instruction as an input to start counting the 12 sheets.
>
> **[1:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=100)** For counting, we use counter up instruction.
>
> **[1:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=103)** Our preset value is 12.
>
> **[1:47](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=107)** Note here that the counting of the sheets should happen after pressing the start push button.
>
> **[1:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=113)** So if the start push button is not pressed prior to this step, the counter should not start counting.
>
> **[2:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=120)** For that purpose, we need to use a start push button instruction in the same run of the counter, as the counting cannot start if the start push button has not pressed yet.
>
> **[2:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=131)** For that purpose we are going to use them in series, because we want both the start process, and the sensor to work in order for the counter to start counting.
>
> **[2:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=144)** This is how the Ladder Logic is for the first part.
>
> **[2:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=149)** Pressing the start push button, and then counting for the 12 sheets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Ladder Logic]] (1)
> **Env Vars:** xic (4), plc (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Part 2: Running the conveyer](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=0)** - [Instructor] The next step is after counting the 12 sheets, the conveyor starts again until it reaches position B.
>
> **[0:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=7)** So, we need to use the counter done bit after the counter is done counting the 12 sheets and use an XIC instruction for the counter done bit.
>
> **[0:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=16)** The output of that rung is the conveyor starting and output is the conveyor motor.
>
> **[0:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=23)** Then to make the conveyor stop when reaching position B which is sensor B, we need to add a condition in that specific rung to keep the conveyor on but stops only when reaching to sensor B.
>
> **[0:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=40)** So now let's think about using XIC or XIO instruction for sensor B.
>
> **[0:45](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=45)** If we use XIC, then the rung will look this way.
>
> **[0:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=49)** In this case, once the counter is done counting and the bit is activated, the conveyor needs to start, but if we use XIC, then XIC is not activate yet, because we're not in position B yet and the memory address bit is zero, so the conveyor will not start in this case.
>
> **[1:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=70)** But if we use XIO instruction, remember that XIO is active when the memory location is 0, then the XIO instruction is activated before reaching sensor B.
>
> **[1:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=83)** Remember that the instruction is activated, not the actual physical device.
>
> **[1:30](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=90)** The rung will behave this way.
>
> **[1:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=92)** Once the counter is done counting, the done bit is true.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=95)** The instruction is activated, and since we are using XIO for sensor B, then it's already highlighted and this will make the conveyor start.
>
> **[1:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=106)** So this is how the program looks like for this part.
>
> **[1:49](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=109)** Once the start pushbutton is pressed, the start process starts.
>
> **[1:53](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=113)** Once counting for 12 sheets, then the counter is done counting, the conveyor starts, and only stops when reaching sensor B.

> [!info]- Semantic Content
>
> **Env Vars:** xic (5), xio (5)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Part 3: Applying paint](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=0)** - [Instructor] So this is how the program looks like so far.
>
> **[0:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=4)** So let's continue our programming.
>
> **[0:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=6)** Once the sheets reaches position B, the conveyor stops and the paint is activated, turns on and stays on for ten seconds.
>
> **[0:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=15)** So to program that we are going to use an XIC instruction for sensor B and then have the paint as an output.
>
> **[0:23](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=23)** And to have the conveyor stops at position B, remember that was achieved in the previous run where the XIO instruction is used for sensor B.
>
> **[0:32](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=32)** So once the sheets reaches position B, sensor B is activated and then XIO instructions turns to one and as a result the conveyor stops.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=43)** The paint is applied for ten seconds, so we need to add a timer, timer on delay, to keep track of the time and if we select the time of base zero point one then the preset value is 100.
>
> **[0:57](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=57)** And in order to keep the paint on we are going to use a hold n or a sealant instruction to keep the paint on during that time.
>
> **[1:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=65)** So this is how the program looks like so far.
>
> **[1:10](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=70)** So we need to think on how to turn off the paint after the 10 second delay.
>
> **[1:16](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=76)** First we are going to use a timer DN Bit.
>
> **[1:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=79)** The question is where to use it.
>
> **[1:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=81)** Always try to think when you program.
>
> **[1:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=84)** The DN Bit is used to turn off the paint.
>
> **[1:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=87)** So I'm going to use it in this rung.
>
> **[1:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=91)** Now I know where to use the instruction but the same logic applies, the same question applies, are we using XIC or XIO instruction?
>
> **[1:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=100)** Again since I want to keep there on continuity and only disabling the output when the timer is done timing for the 10 seconds then I'm going to use an XIO instruction.
>
> **[1:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=114)** XIO instruction is highlighted when the bit is zero so as soon as the timer is done timing, the DN Bit is activated and XIO turns off.
>
> **[2:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=125)** It's not highlighted anymore and the paint is off.
>
> **[2:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=129)** At the same time the timer resets.
>
> **[2:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=131)** Remember the timer resets are the rung transition between true to false.
>
> **[2:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=137)** The timer resets with a change in the rung condition so this is how the program looks like so far.

> [!info]- Semantic Content
>
> **Env Vars:** xio (6), xic (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Part 4: Programming the second conveyer](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=0)** - This is how the program looks like till now.
>
> **[0:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=4)** After the paint is done, the conveyor starts automatically and the sheets are moved to Position C.
>
> **[0:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=11)** Now we need to program how to start the conveyor again after the timer is done timing.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=17)** Note that since we already have the conveyor output, then we use the same rung.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=22)** As you learned before, that use one particular output one time in your program.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=29)** So if you have multiple inputs that are associated with the same output, then we need to put them in parallel.
>
> **[0:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=35)** So I cannot have two rungs that have the same output.
>
> **[0:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=41)** Here, we can apply the branching technique.
>
> **[0:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=44)** So once the timer is done timing, the conveyor will start again.
>
> **[0:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=50)** So one thing that you need to think about is that the timer will reset as soon as it's done.
>
> **[0:56](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=56)** Refer back to the solution part three.
>
> **[0:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=59)** As mentioned previously that the timer resets when there's a change in the rung, when there's a true to false transition for the timer on delay.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=68)** So I'm going to use the enable bit of the timer to keep the timer rung true.
>
> **[1:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=73)** And this will ensure that the conveyor starts again after the timer is done timing.
>
> **[1:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=79)** The timer done bit is true, and stays true as long as rung four is true.
>
> **[1:25](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=85)** So this is how the program looks like so far.
>
> **[1:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=89)** Now the conveyor needs to stop when reaches Position C.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=94)** We can apply the same thing as Sensor B.
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=98)** We use XIO instruction for Position C.
>
> **[1:42](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=102)** So, the XIO instruction for Sensor C is highlighted since the sheet have not reached Sensor C yet.
>
> **[1:51](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=111)** Once the timer is done timing, the down bit is activated and the conveyor starts again.
>
> **[1:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=118)** As soon as we reach Position C, the XIO is not activated anymore and the conveyor stops.
>
> **[2:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=126)** One last thing to add is that to ensure that the conveyor only works when the timer is done timing, so we add an XIO instruction of the timer timing bits.
>
> **[2:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=137)** This will ensure that the conveyor is stopped while the timer is timing.
>
> **[2:21](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=141)** And that's what we want, because the paint is on during that time.
>
> **[2:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=146)** So once we get to Position C, let's restart the counter and the timer.
>
> **[2:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=151)** So for the timer I'm going to use an XIO instruction for Sensor C because we need the transition between true to false.
>
> **[2:39](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=159)** And for the counter, remember that I need the reset instruction so I'm going to use Sensor C in order to reset the counter once we reach Position C.
>
> **[2:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=168)** So now, both counter and timer resets once we reach Position C.
>
> **[2:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=174)** So this is how the program looks like so far.

> [!info]- Semantic Content
>
> **Env Vars:** xio (5)
> **Warnings:** note that (1)
> **Speakers:** - this (1)

#### [Ladder logic program simulation](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=0)** - [Instructor] So this is how the program looks like so far.
>
> **[0:05](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=5)** Start push button that starts the process, when 12 sheets are stacked the conveyor moves to Position B.
>
> **[0:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=13)** Sensor B is used to stop the conveyor and the paint is applied for 10 seconds.
>
> **[0:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=19)** After painting is complete, the conveyor then moves to Position C, and at Position C the conveyor stops and everything resets.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=29)** So let's use this [[Simulation Software]] in order to see how this program works.
>
> **[0:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=36)** This is how the program looks like in the simulation software.
>
> **[0:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=41)** And for demonstration purposes, I'm going to use the light.
>
> **[0:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=44)** So I'm going to use the first light to indicate the start process.
>
> **[0:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=48)** The second light is for the conveyor and the third light is for the paint.
>
> **[0:54](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=54)** The first light is a yellow light, the second one, which is the one for the conveyor, is a green light, and the third light is red that's indicating the paint.
>
> **[1:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=68)** For the start push button I'm going to use the first push button.
>
> **[1:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=72)** For Sensor A, B, C, I'm using number two, three, four.
>
> **[1:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=80)** So for Sensor A, B, and C, I'm using exactly the same addresses.
>
> **[1:28](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=88)** So you go online, download the program, and then hit the run node, and the start push button.
>
> **[1:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=100)** So as soon as I hit the start push button, the start process turns on and stays on.
>
> **[1:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=108)** So for Sensor A, this one that counts the number of sheets, so every time you click on the push button, that indicates a one transition.
>
> **[1:58](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=118)** So you need to do it for 12 times to indicate that you reach the 12 sheets.
>
> **[2:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=128)** Once we reach the 12th sheet, the conveyor then moves.
>
> **[2:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=132)** Notice here that the green light is on indicating that the conveyor has moved to Position B.
>
> **[2:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=140)** This sensor is for Position B, so once we get to Position B, now the conveyor stops and the paint stays on for 10 seconds.
>
> **[2:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=151)** As soon as the timer is done timing, the paint stops and the conveyor starts again, and you can notice that the lights, the red turns off and the green turns on.
>
> **[2:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=163)** So the conveyor stays on until we reach Position C, that's in push button four, so once we reach Position C, the conveyor stops and everything resets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (2)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Part 5: Add stops to complete the program](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=0)** - So now the final thing that's left is adding the stop pushbutton.
>
> **[0:04](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=4)** So we need to add the stop pushbutton that stops the process at any time.
>
> **[0:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=8)** Remember that the stop pushbutton is normally closed.
>
> **[0:12](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=12)** Everything else is normally open, except for the stop pushbutton, it's normally closed.
>
> **[0:17](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=17)** So adding the stop pushbutton in the latter logic, we are going to use XIC.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=22)** And to make sure that the process stops at any time, we are going to add the stop pushbutton in every single run.
>
> **[0:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=31)** So this is how the program looks like after adding the stop pushbutton.
>
> **[0:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=36)** Let's use the [[Simulation Software]] in order to see how the program works after adding the stop pushbutton.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=43)** So in the simulation software, I added the stop pushbutton every single run using XIC instruction.
>
> **[0:52](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=52)** I notice here, in the IO [[Simulation]], I chose a normally closed, because it's a normal closed relay.
>
> **[1:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=60)** So you do the same thing.
>
> **[1:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=61)** You go online, download the program, and then go to the run mode.
>
> **[1:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=67)** Notice here that because it's a normally closed relay the instruction is already highlighted and that's what we want because we want the process to stop only when pressing on the stop pushbutton.
>
> **[1:18](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=78)** Now as soon as you hit the start pushbutton, the process starts.
>
> **[1:24](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=84)** Once you get to position A, you start counting.
>
> **[1:27](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=87)** Up to 12 sheets.
>
> **[1:31](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=91)** Now the conveyor starts.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=94)** And then once you've reached position B, the pane says on and then you scan stop the process at any time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (2), [[Simulation]] (1)
> **Env Vars:** xic (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - so (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980&t=0)** - Thanks for taking the time to join me in this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980&t=3)** This course was to give you an introduction to the basic instructions used in [[PLC]] Lateral Logic programming.
>
> **[0:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980&t=11)** I recommend for the next step is to check the following courses, Learning PLC Lateral Logic 2 Diving Deeper, which is a continuation of this one where I cover more basic instructions like Math, compare and data transfer instructions.
>
> **[0:29](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980&t=29)** You can also check PLC [[Simulation Software]] Factory IO with Connected Components Workbench software where I cover four projects with solutions to better understand the language and to continue learning about PLC later logic programming, I recommend checking out the learning path, become a PLC developer where I have designed the courses to cover the concept from the basics to more advanced levels.
>
> **[1:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980&t=60)** If you'd like to learn more about the common industrial sensors used with PLCs, I recommend checking out these two courses, PLC industrial Sensors and Input Sensors with PLC syncing and sourcing.
>
> **[1:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980&t=75)** Thanks again, and I look forward to seeing you in another course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (7), [[Simulation Software]] (1)
> **Env Vars:** plc (7)
> **Definitions:** is a  (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Zahraa Khalil]]

## Skills Covered

- PLC Ladder Logic

## Path Context

### In [[Become a PLC Developer]]
← [[Learning Industrial Automation]] | **2 of 7** | [[Learning PLC Ladder Logic- 2 Diving Deeper]] →

## Appears In

- [[Become a PLC Developer]]

## Related Courses

_Courses sharing skills:_

- [[PLC Program Flow and Control Instructions]] — PLC Ladder Logic
- [[PLC Sequencer Logic]] — PLC Ladder Logic

---

[↑ Back to top](#)