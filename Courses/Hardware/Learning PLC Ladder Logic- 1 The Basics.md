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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/program-plcs-with-ladder-logic-22700400?u=76281980&t=0)** - So you've heard about [[PLC]] Ladder Programming, but you don't know where to start. Then this course is for you. I'll be teaching the language from scratch, covering the basics of [[PLC Ladder Logic]] Programming, like input, output, timer, counter, and more. I'll explore each instruction separately and go through examples to better understand the concept. At the end, we will have a case study example. In industrial automation, many PLC controllers use Ladder Logic as their main programming language. I'm Zara Khalil, I am an engineering instructor, and I love teaching courses, covering topics on industry automation, and [[PLC Programming]] languages. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[PLC Ladder Logic]] (1), [[PLC Programming]] (1)
> **Env Vars:** plc (4)
> **Speakers:** - so (1)

#### [What you should know](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is an introduction to [[PLC Ladder Logic]] programming, so you should know some of the terminologies used within industrial automation that will help you to better understand the course. Check out my other course, Learn Industrial Automation, to learn more about the components and networks involved in each level of automation.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/plc-programming-languages?u=76281980&t=0)** - [Instructor] Simply, [[PLC Programming]] languages are used to program the automation devices within industrial field. The controllers that are used in industrial automation need to be programmed to perform certain tasks like moving [[Microsoft Products|products]] or sorting them. In industrial automation, devices are connected through PLCs that are programmed using softwares. There are five programming languages for [[PLC]] that are divided into two main sections, text based and graphical. The two common methods for PLC programming are ladder logic and block diagram. All these languages are defined by the international standard for PLC programming languages and concepts. The standard explains the format, syntax, and display for the five PLC languages available. Each language is used and best suited for certain types of applications. We will be learning the basic principles for ladder logic programming, how to read, write, assemble ladder logic. Ladder logic is one of the languages used to develop software for programmable logic controllers, PLCs, used in industrial control applications. A PLC programmer is the person responsible for coming up with the logic needed and programming the controller to solve the required task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Programming]] (3), [[PLC]] (3), [[Microsoft Products|Products]] (1)
> **Env Vars:** plc (6)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [LogixPro PLC simulation software](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=0)** - [Instructor] For the purpose of better understanding the language, I'll be using a [[Simulation Software]] to test the programs. I'll be using it to demonstrate each instruction we cover. However, I'll focus more upon the language and the concept other than teaching the software. The concept is the same for each [[PLC]] type that uses ladder logic. Each PLC manufacturer users their own [[PLC Ladder Logic]] software. They might have differences, but the logic is the same. The simulation software is called LogixPro provided by Learning Pit. This software mimics Allen Bradley Rockwell RSLogix 500. So you can download the simulation software from the website, [thelearningpit.com](https://thelearningpit.com). There is a free 15 day trial if you want to give it a try. So you can click on LogixPro Allen Bradley RSLogix Simulator in order to download the free trial. Once you download the software and install it, then you click on LogixPro software. Once you open the program, it tells you how many days left for the free trial. So then you click on Continue in order to get into the software. So this is the platform for the simulation software we are using. All of the ladder logic is going to be happening in this white area. So in order to add the ladder logic instructions, you go to the PLC Instruction Panel, and then you add a new rung. And in order to get the instructions,
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=94)** you just click on it and drag it to the rung. Notice here that once you see the green light, this indicates that you can place the instruction on this specific location. And you can add as many instructions as you want depending on the logic you are using. And in order to delete the instruction, you just click on the instruction, and using the keyboard Delete button in order to delete the instruction. So this [[Simulation]] comes with a built-in example that you can give it a try. So you go to the Simulations tab, and then you can select any simulation example that you would like to. For the free trial, you are limited to the first three ones, the I/O Simulator, the Door Simulator, and the Silo Simulator. So in the course I'm going to use the I/O Simulator in order to see how the program works. So now for to get the addresses of each button, you just move the mouse to the device, and notice here that you can see the different addresses for each button. So for example, for the first one you can see I:1/0. I indicates this is an input, then one is for the rack module. So you can take the address and associate that with an instruction by double-click on the instruction and then write down the address that you would like to. And then you can do the same thing for any other instructions. So for example, if I want this light to be connected to the output, so you just move your mouse in order to get the address O:2/0,
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=189)** and you add that to that specific instruction that you would like to. Now if you want to add description for each instruction, you right-click on it, and click on Edit Symbol. So for example if this one is a push button, then you are going to add the description that you would like to. Now the program does not work. We need to go online and download the program to the PLC. So you go here, and then you click to go online. Download to PLC. And then you click on the Run mode. Once you are in the Run mode, now the PLC scans the ladder logic. Once you hit on the selected push button, your output will work. Now if you want to make any changes while you're online, you can select the program mode. So let's say for example instead of using this output, I'm going to use for example, let's say the fourth light. Now the fourth light has an address of O, stands for output, 2/4. So you take that address and you put it here by double-clicking on it. And then just change the light number. After making any changes online, you need to download the program again. So after downloading the program, you go to Run mode again, and you click on it and see that
>
> **[4:41](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=281)** the other light turns on. If you want to change the color of the light, you right-click on it, and then you select any color available. And that will reflect any changes. Now the same thing happens for the different instruction for the different buttons. If, for example, you want to use a normally closed then you right-click, and that will change it to a normally closed. If you want to use a limit switch, you right-click and then keep changing to whatever device that you would like to try. Then you would go offline, and then continue programming the ladder logic. Please note for the free trial you cannot save the ladder logic. Now if you want to give it a try, for another simulation, for example, let's go to Silo Simulator. So this is how the simulation looks like. Now if you'd like to add more rungs or start a new program, you either delete the rung by clicking on it and hit on the Delete in the keyboard. Or you can go to File and start a new file. Now the same thing applies, if you'd like to add more rungs, then you click on the rung in here, and then you drag any instruction you would like to place it on your ladder logic. And if you'd like to have the addresses
>
> **[6:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/logixpro-plc-simulation-software?u=76281980&t=374)** of each button, then you just move the mouse to that specific button and it shows you the specific address for each one.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=0)** - [Instructor] Ladder logic is used to develop software for Programmable Logic Controllers, [[PLC]], that are used in industrial control applications. So devices are connected to the input and output module within PLC and according to the software, controlling industrial applications happen. The name ladder logic programming came from the fact that the program at the end looks similar to a ladder with different instructions and rungs. [[PLC Ladder Logic]] programming basics begin in making a clear distinction between input and output within the program itself. In PLC ladder logic, generally speaking, inputs are written on the left side of the ladder logic. Outputs are on the right side. You will learn later in the course that not all inputs and outputs are necessarily connected to a physical device, but for simplicity let's assume so for now. The left and right rails indicate the positive and the ground of the power supply. Electrical current flows from left to right. The logic is read as following. When the switch is on, the light is on from left to right. Each line is called rung. The rungs represent how the program is designed. If we have multiple rungs, the way we read the program is from left to right top to bottom. So each rung is read by the software and the same thing applies, left to right. Each ladder logic program ends in a rung
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/programming-concept?u=76281980&t=97)** with an end instruction to indicate that this is the end of the program. Knowing this will help you in programming PLC ladder logic as where to place each input and output according to the logic you design. So for example if you have a light and a fan and you have two switches and you want to execute the light first, then you need to place it in the first rung and so on.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=0)** - [Instructor] Let's take a look at what input means in [[PLC Ladder Logic]] programming. The way we write input is as following: as two bars facing each other representing the input. And to differentiate between the physical input device and the input within the software, we will refer to the input in the [[PLC]] program as input instruction. There are two main types of input instructions; Examine If Closed, XIC, and sometimes called normally open, Examine If Open, XIO, and sometimes it's called normally closed. Notice, that the only difference between them, is that the XIO has a sidebar that indicates it's already closed and we're examining if it opens. In ladder logic program, the instruction is highlighted when the logic state is true. I'll be using a green highlight in the slides here, similar to what is used in Allan-Bradley software. However, it's very similar in any other PLC types. Different colors might be used in different softwares but they all indicate the same concept. Examine If Closed, Examine If Open instructions, tell the processor to test for an ON condition from the reference address bits. Simply, the instruction checks a memory location. And according to the bit, zero or one, then the instruction is either activated or not. So here's a simple layout of a digital input device
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=98)** connected to a PLC input module, to provide an input, and it has a specific memory location to indicate the status. And by using this memory location address in the PLC instruction, we can connect the physical to the program we are writing. So, the input signal is received from a physical device. The physical device is connected to the PLC input module terminal, and the bit is then stored in the input memory address location. And according to the bit address, the input instruction behaves accordingly. The two input instructions, XIC, Examine If Closed, and XIO, Examine If Open, are Boolean type. Which means, either on or off, zero and one, and we refer to it as the logic state. In the case of Examine If Closed, XIC, the instruction is highlighted when the memory location associated with it is one. Usually in many softwares, a gidian highlight is at a presentation that the logic state is true. So, XIC is true when the memory address bit is one, and is false when the memory address bit is zero. The XIO, Examine If Open instruction, acts the opposite way. It is activated when the logic state is zero, and not activated when the logic state is one.
>
> **[3:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/input-instructions?u=76281980&t=194)** So, XIO is true when it has a zero, and false when the logic state is one. To summarize, in the ladder logic program, the instruction is highlighted in green when it's logic state is true. Example, one is not necessarily true, as we saw. True, active, or highlighted all mean the same thing. Simply means, an ON condition. The difference between XIC and XIO is when each of them is a true. XIC is true when the logic state is one. XIO is true when the logic state is zero. So try not to associate one as true. Inputs are written in the left side of the ladder logic.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=0)** - [Narrator] Let's see what an output instruction in [[PLC Ladder Logic]] programing. The way we write an output instruction is similar to two brackets as you see and to differentiate between the physical output device and the output within a program, we refer to the output as output instruction. There are three main types of outputs. An empty bracket is referred to an output energize, OTE. The other two types are output latch, OTL, output unlatch, OTU. Outputs are written in the right-hand side. So, what's an output instruction? An output instruction represents the action that is to be taken when the input instructions or instructions are true. Basically, when the rung is true, the output is activated as a result and since the output is connected to a memory address and according to that bit as status, the device turn on or off. A physical output device is connected to the output module of the [[PLC]] and work accordingly. Output is always the last instruction before the right power rail. So, you cannot put an input after placing an output. Everything in front of the output tends to be an input instruction for that specific output. Please, keep in mind not all outputs are connected to a physical devices.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/output-instructions?u=76281980&t=94)** Sometimes, we use an internal register tag or address instead, so thing as a real device and a virtual device. A rung can still work with only an output and once the program is activated, the rung is true and the output is activated. Every rung must have the minimum of one output instructions, so I cannot have a rung without any outputs. Only use a particular output one time in your program, so if you have two switches to turn on the same light, then use the particular output one time in your program. If you have multiple outputs, associate it with the same input, then put them in parallel. Multiple outputs are preferred to programed in parallel. Output is activated when the memory location is one, so it is true when it's one and false when it's zero. I always recommend that having this table when you start programming. It makes it easier for you to remember when each instruction is highlighted.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=0)** - So let's try to take an example that demonstrates how the input instructions, XIC and XIO and Output instruction work. So in a simple example we have a normally opened push button that's connected to a light using [[PLC]]. The input device provides the input module with a status of the device. Example if it's on or off, and using this memory location within the program reflects the change. The same thing applies for an output device where the specific memory location within the output module is to reflect any changes accordingly. So, the input device, which is the push button is connected to the PLC input module and the output device which is light is connected to the output module of the PLC. So let's see how the Ladder Logic Program behaves when using Examine If Closed instruction. Using XIC instruction, the instruction is only activated when the memory location is one. So, when the push button is not pressed, this means that the logic state is zero and the instruction is false and the light will not turn on. When the push button is pressed, meaning the logic state now is true, equals to one, then the instructions highlighted and according to the continuity, the light will turn on. XIC, Examine If Close instruction is true when the logic state equals to 1.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=95)** This means that the time assigned to that specific XIC instruction is active. Instructions read a memory location and according to the value there, it will be highlighted. So let's use the software to demo this simple example. In this [[Simulation Software]] we have the push button that's connected to a light. I'm going to use the first push button address I one zero, and for the light I'm going to use the first light. The address for the first light is O two slash zero. So, the first thing you need to do is you need to go online and then download the program to the PLC and select RAN mode. Now, the light is off because it's an XIC instruction. As soon as I press on the push button, the light will turn on. Now let's use Examine If Open instruction. XIO instruction acts the opposite way. It is activated when the logic state is zero, and not activated when the logic state is one. So let's take the same example and we are using the same connection with the push button and the light, but only changing the PLC Latter Logic program, while using XIO instruction. When the push button is not pressed, then this means the
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=188)** logic state is 0, and since we are using XIO instruction, then it's activated and the light will be on. When the push button is pressed, meaning the logic state is one, true, this means the XIO instruction is false and is not highlighted and the light will not turn on. XIO is true when its logic state equals to 0. This means that the tag assigned to the XIO instruction is active. Instructions, again, reads the memory location and according to the value there, it will be highlighted. So let's use the simulation software in order to see how the program behaves when using XIO instruction. So now we are using the same wire connection. The only thing that we need to change is we need to change the instruction. There are two methods in order to change the instruction: You either right click on the instruction that you want to change, and then change it to XIO instruction. Another method is you can just drag the instruction from the instruction panel. Now, we are doing the same thing. We need to go online. Download the program, and then click on the RUN mode. Notice here that without even pressing on the push button, the light is on. As soon as we press on the push button, now the memory location will change to 1 and the instruction will not be activated. As a result, the light will turn off.
>
> **[4:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-a-push-button-and-light?u=76281980&t=284)** So this shows you how different programs can behave while having the same wiring connection, but the choice of either using XIC or XIO makes the difference. So, as a PLC programmer, you need to know what to use in the program according to each problem separately.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=0)** - [Narrator] So, let's take another simple example to show the uses of input and output instruction. In this example, we are trying to achieve an alternating light. We have a Pushbutton connected to the input module of the [[PLC]] and the two lights are connected to the output module of the PLC. When the Pushbutton is pressed, a green light is on. When the Pushbutton is not pressed, a red light is on indicating that the Pushbutton is not pressed. In any example, try to do it one step at a time, so first, we are using an XIC instruction to program the Pushbutton. Remember, XIC instruction is highlighted when the memory location is one and then, we add a green light as an output, so now the program works this way. When the Pushbutton is pressed, the instruction is highlighted. The green light turns on as a results. Now, the question is, when the Pushbutton is not pressed, a red light turns on. Remember, we are using the same Pushbutton. So, let's take an advantage of the XIO instruction. XIO instruction is activated when the logic state is zero. So, when the Pushbutton is not pressed, the red light turns on. Now, the whole program works this way. When the Pushbutton is pressed, a green light turns on. When the Pushbutton is not pressed, a red light turns on. So, let's use the [[Simulation Software]] to see how this program works. So, this is how the program looks like
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/i-o-with-alternating-lights?u=76281980&t=94)** in the simulation software and for the Pushbutton, I use the same address for the first and second drawing. The only difference is that I'm using an XIC instruction in the first drawing and XIO instruction in the second drawing. Now, we do the same thing. We go Online, download the program and select the Run mode. So, notice here, as soon as I the Run mode, the red light turns on indicating that the Pushbutton is not pressed. As soon as I press on the Pushbutton, the red light turns off and the green light turns on. Once I let go, the red light turns on.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=0)** - [Instructor] Let's take a look on how the field devices and the program instructions work together and how to differentiate between them. To differentiate input devices and input instructions, we refer to the physical devices as a field input devices or contacts and the input within the [[PLC]] program as input instructions. There are two common types of field devices relay that we usually deal with. A normally open and a normally closed relay. This can apply to any field device. This is how a normally open pushbutton looks like and this is how a normally closed pushbutton looks like. You can check this document for more details about the different symbols by simply going to page 38, you can find the different symbols for the contacts, switches, and relays. This is the example that we covered for the pushbutton. A normally open pushbutton contact and a normally closed pushbutton contacts. In the [[Simulation Software]], you can change the type of the contact by right click on the device. When you right click, this is a normally open pushbutton, this is a normally closed pushbutton, a normally open switch, a normally closed switch. So, for the field devices contact,
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/field-devices-and-program-instructions?u=76281980&t=94)** we have a normally open and a normally closed contacts. And within the software, the program instructions, we have examine if open, examine if closed. Note that they are not the same thing. You could have a normally open contact with an XIC instruction or with XIO instruction depending on the logic.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=0)** - [Instructor] Let's take an example that can demonstrate the differences between contacts and instructions. We'll take a simple example that shows how the program behaves when using a normally open contact, which is a physical device, and using two different instructions within the software. It might sound repetitive but I want to compare the effect of using a normally open, and normally closed contacts. The next video, will take a normally closed contact with the same instructions. For this one, we are going to count straight on normally open contact, or relay, and using two types of instructions. So let's see what happens when using a normally open relay and having two different instructions in the [[PLC]], examine if closed and examine if opened. Let's assume that we have a push button that is in normally open relay. It's connected to the input module in the PLC and a light connected to the output module in the PLC. And remember, that field devices and program instructions are not the same thing. So depending now on the program written in the software, using light or logic, the output will behave differently. Since the content is normally open contact, this means it's usually open and when the push button is pressed, the contact closes and hence provides the continuity within the electrical circuits. Let's see what happens in the program using XIC.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=97)** When using an XIC, remember XIC is activated when the memory location is one. So, if the push button is not pressed, the memory location is zero, and as a result, the XIC instruction, will not be highlighted and the light will not turn on. And once the push button is pressed, the memory location is one, and XIC instruction is activated. On the other hand, when having the same physical device, normally opened relay, and using different instruction examine if open, XIO. XIO is activated when the memory location is zero. So, if the push button is not pressed, the memory location is zero and as a result the XIO instruction will be highlighted, and the light will turn on. Once we press on the push button, the memory location is one, and the XIO is not activated anymore. So as you can see, although we are using the same physical device, which is a normally open contact, the way we program it in the software using ladder logic, produces a different output. This is to demonstrate the difference between using an XIC and XIO while having the same normally open contact, the same physical device. XIC and XIO have their uses in the programming. Each is used for a certain tasks, like emergency stop,
>
> **[3:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-open-no-contact-with-xic-and-xio?u=76281980&t=193)** for example, as you will see later in the course.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=0)** - [Narrator] Now, we'll take the same previous example but use a normally closed contact instead. So using a normally closed relay and having two different instructions in the [[PLC]] program. Examine if closed. Examine if open. A normally closed contact is normally closed and it provides the electrical continuity. It opens when the contact is pressed. The physical contact is open. Now, we're using a normally closed pushbutton that is connected to an input module in PLC. And a red light connected to the output module in PLC. For a normally closed contact pushbutton, if the pushbutton is not pressed, the memory location connected to that pushbutton within the module is showing one. As soon as the pushbutton is pressed, the continuity changes and then the memory address changes its state to zero. There is no physical continuity. Now let's see what happens in the program when using two different instructions. Using XIC, remember XIC instruction is activated when the memory location is one, so if the pushbutton is not pressed, the memory location is one. Because it's a normally closed pushbutton, the current is flowing. As a result, the XIC instruction will be highlighted,
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=95)** and the light will turn on without you pressing on the pushbutton. Once the pushbutton is pressed, the memory location is zero because we don't have physical contact and the XIC is not activated any more. It works the opposite way as a normally open contact. Having the same physical device normally closed relay, we'll examine if open XIO instruction. Again, remember that XIO is activated when the memory location is zero. If the pushbutton is not pressed, the memory location is one because remember, we're using a normally closed relay. As a result, the XIO instruction will not be highlighted and the light will not turn on. Once the pushbutton is pressed, the memory changes to zero and the XIO is activated and the light will turn on. As you can see, although we are using the same physical device, normally closed contact, the way we program it in the software using Ladder Logic produces different outputs. Here's how the program will behave when having two different instructions while having the same contact. This to show you the difference, that the program behaves when using different physical contact, and how the Ladder Logic behaves when using XIC, XIO with different normally open and normally closed contacts. As a PLC programmer, you need to take into consideration
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/normally-closed-nc-contact-with-xic-and-xio?u=76281980&t=191)** what type of contact, what type of physical device you are using because that will determine what instruction you need to do in order to achieve what you're looking for.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=0)** - [Narrator] In one operation, we are going to learn how to program letter logic when we have more than one inputs. Inputs are placed in the left side of the letter logic, so depending on how many inputs and the logic of a program all need to be placed in the left side. There are two methods to program multiple inputs. AND, OR. The AND is similar to the function of the AND gate where you can have any number of inputs, but only one output. The truth table that you can on the screen shows you that the output is only turned on when all inputs are true, so if both inputs are zero, output is zero. If one of the inputs is zero, the output is zero, as well. The only time that the output is equal to one, when both inputs are one. If you have multiple inputs that you need them all to be on in order to activate a certain output, then use AND. AND inputs are added in series. Just two or more normal instructions side by side. Using OR. If you have multiple inputs that you want any input to trigger at the same output, then use OR. The OR is similar to the function of the OR gate where you can have any number of inputs, but only one output. Here is the truth table of the OR gate.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-inputs?u=76281980&t=95)** Notice that if any of the inputs is true, the output is true, as well. The way to add OR inputs is to add them in parallel. This is how the OR instructions are placed. So, think about it as another route to the output. Another option; OR. So depending on the logic, AND, OR are added to the letter logic in order to activate the output.

> [!info]- Semantic Content
>
> **Analogies:** similar to (2)
> **Speakers:** - [narrator] (1)

#### [Example of multiple inputs (AND and OR)](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=0)** - [Instructor] I'm going to go through examples that show us how to use AND and OR when having multiple inputs. Let's start with AND. An example would be, in manufacturing settings, we have two sensors. One level sensor that's mounted on the top of the tank using ultrasonic method, and another sensor that's on the bottom of the tank. When both sensors reach a set point, a light indicates that the level reach the set point. All inputs are digital devices. So, if sensor one and sensor two reaches the indicated level, a green light is turned on. Sensor one and sensor two are inputs. Green light is an output. The way we program the ladder logic is add them in series. Note here that I need both inputs to be on, both instructions to be activated and highlighted for the output to turn on, for the light to turn on. So, if I have one of the inputs on, and the other one is off, the output is not going to be activated as the continuity will not be achieved. So, let's see how the program works when we have two instructions that are added in series. So, here we have level sensor one and level sensor two as XIC instructions, and the green light as an output. So, for the first one is used for level sensor one. The second one is used for level sensor two, and, for the green light, I'm using the first light.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=95)** So, you go online, download the program, (successful chiming) and then go to the run mode. Notice here that, when the level sensor one is active, nothing happens to the output because I need both instructions to be on for the output to be activated. Once the level sensor two is on the green light turns on. If any of the inputs is off, then the light will not turn on because I need both instructions to be highlighted for the light to turn on. And to demonstrate the OR part, I'm going to use the same example. The change would be when one of the sensor reaches the set point, a light indicates that the level reached the set point. So, if level sensor one or level sensor two reaches the set point, a red light is to turn on. So, to program this in the ladder logic, we use or. The light will be on if one of the sensor is activated. The ladder logics scan one rung at a time, so the program will check the first rung if the level sensor one is true, then the output is true, too. If level sensor one is not on and level sensor two is on, the ladder logic scans the first rung and then goes to the second one in order to activate the output.
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/example-of-multiple-inputs-and-and-or?u=76281980&t=189)** So, now let's use the [[Simulation Software]] to see how the program works when we have two instructions that are added using or. So, here in the simulation software, we have level sensor one and level sensor two are added in parallel using an or condition. For output light, I'm going to use the second light with an address O2/1. For level sensor one and level sensor two, I'm going to use the first and second. So, the first thing you need to do is you need to go online, download the program, (successful chiming) and then go to the Run mode. Notice here, for the or condition, I don't need both sensor to be on. One of them will activate the output. So, when the first one is on, the red light turns on, or, if the second one is on, the red light will turn on. So, I don't need both sensors to be on for the light to turn on. Just one of them can activate the output, and this is the difference between and and or.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-outputs?u=76281980&t=0)** - [Instructor] In run operation now we are going to learn how to program the ladder logic when we have multiple outputs. The case of having two lights for example. Outputs are placed in the right hand side of the ladder logic. Multiple outputs are preferred to be programmed in parallel. So, if you have multiple outputs associated with the same input then put them in parallel. Having multiple outputs in series is not a preferred in ladder logic because, as you know by now, in each run the continuity starts from left to right one by one. So if you have an example of having two motors to start when the pushbutton is pressed if we add them in series then motor one has to start for motor two to start. So, if for any reason, motor one could not start then motor two will not work because it depends on the previous instruction. However, if the outputs are added in parallel then they both will be activated, and if one of them is not working that will not affect the other motor, and we can have as many outputs as the program requires. We can also combine multiple inputs, and multiple outputs together depending on the program, and the logic used.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Seal-in and hold-in instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=0)** - [Instructor] A hold-in instruction is basically an instruction that holds a certain instruction and keeps the status of it. We also refer to it as a seal-in instruction that seals in the condition of that specific instruction. For example, if we're using a start pushbutton to start a motor, the motor runs as log as the pushbutton is held in. It would be unreasonable to keep holding the pushbutton for the time the motor is to run. So, to allow the motor to stay running we use a seal-in instruction to keep the output on. The simplest was is using the output motor address as a seal-in instruction. The address of the instruction is either internal bit or a physical contact. So the program first reads rung by rung. When the pushbutton is pressed, the motor starts and the memory location status now equals to one. Since we're using the same memory address for the hold-in instruction, then as soon as the motor instruction is one, the instruction is highlighted, and now even if the pushbutton is not pressed anymore the motor stays on. So think about it as another route for the output, another option to keep the output on. Let's use the [[Simulation Software]] to see how this works. So here I have a start pushbutton and motor. I'm going to use a green light for the motor to see when it's on and when it's off. So let's see how this program works. Again, you go online, download program and hit the Run mode.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=94)** So now as soon as I press the pushbutton the motor turns on. As soon as I let go, the motor turns off. So one way to keep the motor on is to use a seal-in instruction. So we go offline, and in order to use the seal-in instruction you are going to use the Rung Branch instruction, so you drag it and then you place the instruction inside it because we want to hold that, and then use an xic instruction for the seal-in instruction. And here for the address we use the same address for the output. So notice here that the seal-in instruction and output have the same address. Now you do the same thing. You go online, download program and hit the run mode. And as soon as I press on the start pushbutton and let go, the motor will turn on and stay on. So this instruction keeps the output on. It seals in the output. One of the common ways to use a seal-in instruction is to create an internal tag within the software and not connected to any external device. So for the same example, using an internal tag to hold the status bit, and then use it to run the motor. The internal tag is a Boolean tag, so it's either on or off, zero or one. Seal-in instruction can be for one input or it can be for multiple inputs,
>
> **[3:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/seal-in-and-hold-in-instruction?u=76281980&t=187)** depending on your program and the logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Branching operation and examples](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=0)** - [Announcer] Branching simply means adding more rungs that are associated with the same output, or having multiple outputs for the same inputs. We can also have a combination of both, like having multiple inputs and multiple outputs for each rung, all depending on the logic and how to solve the program. So let's take two examples to show how to do Branching. Let's say that we have a cooling fan that's turned on when two switches are turned on, or when a pushbutton is pressed. So, the two options to turn on the cooling fan are: two switches, both need to be on, or pressing the pushbutton. The way to programming is adding the two switches as an ADD, adding them in serious. Then, since the pushbutton is an OR, then I can just add it in the OR rung. Now the cooling fan is turned on, is activated by either the two switches or the pushbutton. So now let's use the [[Simulation Software]] to see how this program works. So notice here that switch one and switch two are added in serious, and the pushbutton is added in parallel. And for demonstration purposes, I'm going to use a green light instead of the cooling fan. So I'm going to use the green light to turn on when the fan is activated, and to turn off when the fan is not activated. So the very first thing that you need to do again
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=95)** is you need to go online, download the program, and choose the right mode. Notice here that nothing happens at the beginning. When the switch one is on, nothing happens. I need both switches to turn on for the light, or for the cooling fan, to turn on. When one of the switches is off, the cooling fan turns off. The other option to turn on the light, or the cooling fan, is to press on the pushbutton. Once the pushbutton is pressed, the light turns on and the cooling fan is on. Once you let go, this will turn off the light. So this is a demonstration of how the program works using a Branching technique. Here's another example. Let's say that we have two pushbuttons, that if we press any of them, we will turn on three lights. Since any of the inputs will produce an output, then we use them as an OR. And for the outputs, we can just add them in a parallel. So this is how the program looks like. If pushbutton one is pressed, the three lights will turn on, or, if pushbutton two is pressed, the three lights will turn on. So now let's use the simulation software to see how this program works. Note here we added pushbutton one
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/branching-operation-and-examples?u=76281980&t=188)** and pushbutton two in parallel, and for the lights we add them all in parallel because we have multiple outputs. So you need to go online, download the program, and select the run mode. When the first pushbutton is pressed, the three lights will turn on. Or, if the second pushbutton is pressed, the same outputs will be activated, the three lights will turn on. So either the pushbutton one or pushbutton two will give the same outputs.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=0)** - [Instructor] I'm going to go through an example that covers all the concepts we've learned so far. This example has two parts. For part one, we will develop a Ladder Logic program, to start and stop a conveyor belt. So for part one, the example is, a normally open push button, to start a conveyor and manufacturing setting. As soon as the operator pushes the Start pushbutton, and let go, the conveyor starts and stays on. There is a Stop pushbutton, so once the operator presses on it, the conveyor stops. The Stop pushbutton is a normally open relay as well. So Start and Stop pushbuttons are Inputs, and both are normally open contacts. The Conveyor is an Output. So let's start programming, by knowing How to Start the Conveyor. Since we're using a normally open for the Start pushbutton, to start the conveyor. So in the Ladder Logic, we are going to use an XIC instruction. And a regular output for the conveyor. And in order to keep the conveyor on, in order to keep the conveyor working, we are going to use a CLN instruction. And in the CLN instruction, we are going to use the same address as the conveyor to keep the output on, to keep the conveyor working. So now, the program works this way. At the beginning, nothing is activated. But as soon as the pushbutton is pressed, the instruction is highlighted, and the conveyor starts. Now, the memory address of the conveyor within [[PLC]] software, equals to one.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=95)** So as soon as the pushbutton is released, the Ladder Logic will use the CLN instruction to keep the output on, to keep the conveyor working. Now, we need to program the Stop pushbutton. We need to program it in a way that the conveyor stops, when the Stop Pushbutton is pressed. Since we're using a normally open contact for the Stop Pushbutton, we are going to use an XIO instruction to keep the continuity. And we add in series with a Start pushbutton. Now, as a normal situation, the Stop pushbutton is not pressed. It's a normally open contact. So the memory location equals to zero. And when using an XIO instruction, the instruction's highlighted when the memory location is zero. So, the instruction is highlighted, without the need to press the Stop pushbutton. And that's what we need. Because the Stop is only pressed, when we need to stop the conveyor. So now the Stop pushbutton instruction is highlighted, and as soon as the Start pushbutton is pressed, the conveyor starts. So when both inputs are on, output is on as a result. And the CLN instruction works the same way. The output will stay on, even if the Start pushbutton is released. As soon as the operator presses on the Stop pushbutton, remember it's a normally open contact, so it changes the state to one. And this means the XIO instruction is not activated any more.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-1?u=76281980&t=191)** And as a result, the conveyor stops. Even if the Start pushbutton is on. Because remember, that both instructions need to be activated for the conveyor to stay on. The two instructions are in series, so both need to be on for the output to stay on. Note here, that the XIO instruction cannot be included in the CLN instruction. Because this will keep the conveyor on, even if the Stop is pressed, because it's part of the CLN instruction. And in this case, if the Stop pushbutton is pressed, the conveyor will stay on. The other mistake that a PLC programmer might turn to, is using an XIC instruction. Note here, that since we're using a Normally Open contact for the Stop Pushbutton, we cannot use an XIC instruction. Because when using an XIC, then the Stop pushbutton needs to be pressed for the conveyor to start, and we don't want that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2)
> **Env Vars:** cln (6), xic (4), xio (4), plc (2)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Rung operation case study, part 2](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=0)** - [Instructor] Here is part two of the Conveyor Belt example. We are going to use the same previous example and add in some features to it. The new features are when the conveyor starts, when the conveyor is on, there are two green lights to indicate that the conveyor is working. When the conveyor stops, when the conveyor is not working, there is a red light indicating that the conveyor is off. So the inputs are start pushbutton and stop pushbutton. The outputs in this case are the conveyor, stop light, and the two green lights. In the previous section, we programmed how to start and stop the conveyor. So this is the ladder logic for the first part of the problem. Next we need to program that when the conveyor starts, when the conveyor is on, two green lights indicating that the conveyor is working. So we have one input and two outputs. The input in this case is the conveyor memory bit. Remember that inputs and outputs can be in internal bits. So now using the memory as its location of the conveyor bit, in order to turn on the two lights. Since we have multiple outputs, we add them in parallel. Now once the operator pushes the start push button, the conveyor starts. As soon as the conveyor starts, the two lights turn on. The last thing to program is adding the red light when the conveyor is not working. For this task, we use the same memory location
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=95)** of the conveyor bit. But this time we use an XIO instruction to indicate that the output is only on when the conveyor is not working, when the conveyor is not on. Which basically means the memory location is zero. The reason to use the conveyor memory bit address and not the stop push button is that we need the light to be linked to the conveyor. Because if we use the stop push button, then the red light will be on as soon as the stop push button is pressed, regardless if the conveyor is on or off. And in case we have any wiring issues, we need to know that the light is connected to the conveyor, not to the stop push button to ensure that the conveyor stops. So this is how the complete program looks like for the two parts of the conveyor belt. So this is how the program looks like in the [[Simulation Software]]. Note here that I used the same address for the conveyor for the two green lights. And I used the same address as the conveyor to connect it to the red light. The only difference is that I used an XIO instruction. And for the purpose of demonstration, I'm going to use the first light as a yellow to indicate that the conveyor is on. The second light is green light one. The third light is for the green light two. And finally, this is the red light to indicate that the conveyor stops. Again, I'm using the first stop push button for the start and the second one for the stop.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/rung-operation-case-study-part-2?u=76281980&t=191)** Then you do the same thing, you go online, you download the program, and hit RUN mode. (computer dings) And notice here, as soon as I click on the RUN mode, the red light turns on. Because, remember that we're using an XIO instruction for the red light. Whenever the conveyor is not working, the red light should turn on. Now as soon as I hit on the start push button, notice here that the first light for the conveyor is on and we have two green lights. As soon as I press on the stop push button, now the conveyor stops and a red light turns on.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=0)** - [Instructor] Let's take another example that uses the concepts we've learned so far. In this example, I start pushbutton to open a valve to start filling a tank with a liquid. Once the liquid inside the tank reaches a certain level, a level sensor turns on and the valve closes. And then, a mixer starts mixing the liquid inside the tank. The mixer stays on until the stop pushbutton is pressed. We are using a normally open contact for all inputs and outputs. Here's a list of the inputs and outputs of this example. So let's start programming. As soon as the start pushbutton is pressed, the valve opens. However, it will be unreasonable to expect the operator to keep holding the start pushbutton to keep the valve on. So to keep the valve open, we use a sealant instruction to keep the output on. And in the sealant instruction we use the same output address. Now, the program works this way. As soon as the start pushbutton is pressed, the valve opens and the output memory location is one. And once the start pushbutton is released, the sealant instruction will keep the valve open. Now, once the liquid reaches a set point that is sensed by the level sensor, the valve closes. So again, once the level sensor input is on, the valve stops, very similar to what we covered in the conveyor belt example. The sensor is an input and it's off
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=93)** until the liquid reaches a certain level. Then, the sensor turns on. So, I'm going to use an instruction here. And I need to choose an instruction that is highlighted when the memory location is zero to keep the continuity. So, we are going to use an XIO instruction for the level sensor. Remember that the instruction is highlighted. The instruction is activated. But the physical sensor is not on. The level sensor has not reached the required level yet. Now the program works this way. Once the start pushbutton is pressed, the start pushbutton instruction is activated and the level sensor instruction is already highlighted, because it's an XIO instruction. So the valve opens and stays on. As soon as the liquid reaches the required level, the level sensor will turn on and the XIO instruction will not be highlighted anymore and the valve will close. Now, once the level sensor is on, the mixer starts mixing. So I use an XIC instruction and a regular output for the mixer. Now, as soon as the liquid reaches the desired level, the valve closes and the mixer starts. The last thing, the mixer stops when the stop pushbutton is pressed. Remember that the stop pushbutton is a normally closed contact. Because I want the mixer to stop once we press on the stop pushbutton,
>
> **[3:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/multiple-i-o-case-study?u=76281980&t=186)** I need to add the stop pushbutton in this rank. And since it's a normally open relay, I'm going to use an examine if open instruction. So now, as soon as the stop pushbutton is pressed, the instruction is not activated anymore and the mixer stops. So this is how the final program looks like for this specific example. Please note that this is not a complete practical solution. I just chose this example to show you how to build a ladder logic. For demonstration purposes, I'm going to use a yellow light for the valve and a green light for the mixer. And for the start pushbutton I'm going to use the first one, the second one for the stop, and the third one for the level sensor. Now, we need to go online, download the program, and select the run mode. As soon as you hit the start pushbutton, notice here that the valve opens using the yellow light. And as soon as you reach the level, the valve closes and the mixers start mixing. You can see the green light. And the mixer will stay on until you press on the stop pushbutton.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=0)** - [Instructor] Latch and unlatch output. Output latching and unlatching are used together. They are types of output instruction they used in ladder logic. So, when latching an output, we need to unlatch it within the same program. So, what latching instruction actually means. An output latching instruction is an output instruction used to maintain or latch an output on, even if the input condition changes. So, if any run has a latching instruction, this means that the output reference to the latching instruction is turned on and remain on even if the run logic or the [[PLC]] power is lost. Latch, to latch an output on, output stays on until unlatch instruction becomes true. Unlatch instruction, to unlatch a latched on instruction with the same address. Let's see what this means. This is a regular output instruction. We have a pushbutton in order to start a motor. Since we're using a regular output, once I press on the pushbutton, the motor starts, but once I let go, the motor turns off. So, one way to keep the motor on is to use a sealing instruction, as we learned. So, once I press on the pushbutton, the motor starts and stays on even if the pushbutton is not on. We can use a latch instruction that works the same way.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=96)** In order to keep the motor on, a latching instruction is used to keep the output on. So, once I press on the pushbutton, the motor starts, and when I let go, the motor stays on even if the pushbutton is no longer on. A latching instruction is also called a retentive instruction. Retentive basically means remember, so as if the instruction keeps remembering the last state it had. A latching instruction will remain on, in another [[Microsoft Word|word]], will stay latched on until the unlatch instruction with the same address reference is energized. So, we use unlatch instruction to unlatch or to clear the status bit. So, for the motor, in order to unlatch the motor, I need to use an unlatch instruction. So, once the first pushbutton is pressed, this latches the motor. Once the second pushbutton is pressed, this is unlatch the same motor. Notice here that the output is having the same reference, the same memory address. It needs to be the same output for the latching and unlatching. So, let's use the software in order to see how the latch and unlatch works. So, now two runs, one for pushbutton one and one for pushbutton two, and in order to get the latch output, you can take it from the User tab Output Latch. Take it and just drag it in the same run.
>
> **[3:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=193)** The same thing for the second one, for the unlatch here. And for demonstration purposes, I'm going to use one of the lights as an indication for the motor to be on. So, this is the first pushbutton, this is the second pushbutton, and I'm going to use, for example, the fifth light for the motor. Notice here that the latch and unlatch have the same address, 02/5, and in the second run, 02/5. So, we download the software, the program, to the PLC and go to the Run mode. So, the first pushbutton, this is going to latch the motor, so once I press it and let go, the motor turns on and stays on, in another word, latches the output, and then once you press on the second one, it unlatches the same output. Remember that the output will stay on unless you use an unlatch instruction. So, latch and unlatch instructions, always used in pairs. Latch and unlatch instructions must have the same reference address. Latch and unlatch instructions do not have to be grouped together in the ladder logic. So, you can have many runs in between,
>
> **[4:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-output?u=76281980&t=288)** but always keep in mind that latch and unlatch work together. Latching and unlatching instructions have their uses, but you need to be careful when using them in case of a power goes off. The output keeps the same status, and it might be a hazard case to keep the motor or the heater on, for example, when the power comes back. This is a very common example of how a start and stop ladder logic looks like and the equivalent latch and unlatch circuit to it.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=0)** - [Instructor] So, now I'm going to use the same previous example of filling a tank and mixing the liquid, but instead I'm going to use a latch and unlatch instructions. Again, the example was there's a start pushbutton to start and filling valve opens to start filling the tank with the liquid. Once the liquid reaches a certain point, the valve closes and the mixer starts mixing until we press on the stop pushbutton. So, here we have three inputs and two outputs, and again, they're all normally open contacts. So, this is what we did, and once the start pushbutton is pressed, the valve is open and start filling. And as soon as you let go, the valve closes. So, in order to keep the valve open, previously we used a sealing instruction, or holding instruction, to keep the output on. This time we are going to use a latch instruction. Remember, latch instruction is an output instruction used to maintain or latch an output, even if the input condition changes. Any rung that has a latching instruction, this means that the output reference to the latching instruction is turned on and stays on. Keep in mind that the latch output stays latched unless I use an unlatch instruction. Now I'm going back to the problem. Once the liquid reaches a set point, the level sensor is activated and the valve closes. So, I need the level sensor to be active,
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=98)** I can use it for the unlatch instruction to unlatch the valve. Remember that latch and unlatch work in pair and must have the same address. So, now the program works this way. Once the start pushbutton is pressed, the valve opens and starts filling the tank with the liquid. Once the liquid reaches a certain level, the level sensor is activated and the unlatch instruction will be turned on, or highlighted, and the valve will close. The other thing that happens once the level sensor is on is that the mixer starts mixing. So, I add the level sensor as an XIC to the mixer. So, the program now works this way. As soon as the liquid reaches the desired level, the valve stops and the mixer starts. And this is how the program looks like so far. Once the start pushbutton is pressed, the valve opens and it's this latch, so it stays on, and the tank starts filling with the liquid. Once the liquid reaches a certain level, the level sensor is activated and the unlatch instruction will be highlighted in order to close the valve, and in the same time, the mixer starts mixing. Note here that the level sensor activates two outputs. It's activates the filling valve unlatch instruction and it activates the mixer. So, since I have multiple outputs to the same input, I can add them in parallel.
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=191)** So, now as soon as the level sensor is on, it activates both outputs, the valve is unlatched, and the mixer is on. The last thing is that the mixer stops when the pushbutton is pressed. Again, remember that it's a normally open contact. So, now I need to think about where to put the stop pushbutton. The stop pushbutton is going to be added to this rung because I want the mixer to stop once I press on the stop pushbutton. Again, since we're using a normally open contact, we are going to just examine if open instruction XIO. So, now the program looks this way. Since it's a normally open contact, we are going to use an XIO instruction for the stop pushbutton. Once the level sensor is activated, or is active, the filling valve is unlatched and the mixer turns on. As soon as the stop pushbutton is pressed, the instruction is not activated anymore and the mixer stops. So, this is how the complete program looks like using a latch and unlatch. It does the same thing as the previous example, the only difference is that we're using a latch and unlatch instruction instead of using a hold or sealing instructions. And using the [[Simulation Software]], you can see that once you press on the start pushbutton, it latches the output, the valve is open. Once we reach the level sensor,
>
> **[4:48](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/latch-unlatch-example?u=76281980&t=288)** now it unlatches the valve and the mixer starts mixing. And notice here that once we press on the stop pushbutton, this stops the whole thing.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=0)** - Timer instruction is a very common instruction used in Ladder Logic programming. Timers are used to delay actions, or to keep an output on or off for a specific time. This is the congregation of typical [[PLC]] timer instruction. And it has the following parts. A timer name, or a time address, timer base, preset value, and accumulated value. Let's see what each part is. A timer is name is the timer unique identifier in the PLC memory. No matter what brand of PLC, each timer will have a name or a number to identify it. Depending on the PLC type, there is a certain way to write the name. An example is one of the Allen Bradley PLC address is T40. T, and then the timer file number, and finally, the time element number. So, T40, is time file four, timer element zero. Every timer has a timer base. Times are typically programmed with several different timer bases. The timer base is also referred to as the timer accuracy. The timer base specifies at what rate the timer will increment. So, depending on the time base, as a PLC programmer, you can specify the preset value. For example, if you want to have a three second delay,
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=95)** then you need to check what's the time base of the timer instruction that this particular PLC software deals with. So, if the time base is 0.0001 second, and you want it program a three second delay, then the number to put in the preset value is three divided by 0.001, and this equals to 3,000. The equation is that the desired time delay equals the preset value times the time base. Here is another example. If a programmer enters 0.1 for the time base, and 50 for the number of delay increments, the timer would have a five second delay. 50 times 0.1 equals five second. Timers must have a preset value. The preset value is the number of time increments the timer must count before changing the state of the output. And it depends on the time base, as we mentioned. So, simply, a timer preset value is the length of the time for which the timer is to run. While the time base specifies at what rate the timer will increment. Finally, the accumulated value indicates the time increments accumulated when the timer rung and instruction are active. Timers are an output instruction.
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=189)** Times are usually added on the right hand side. And the timer starts timing when the rung condition is true. So, if there's no input, the timer will start timing as soon as the rung is true. If we add an input, for example, a switch, once the switch is on, the rung is true, and as a result, the timer starts timing. A timer resets with the change in the rung condition. So, if the rung is true, the timer starts timing. Once the rung goes false, the accumulator resets. So, if you don't have any input, then the timer will not reset, unless the rung goes to false. But once we add an input, then the timer starts timing, when the input is true, and once the input goes false, the timer resets. Here's a simple example of using a switch as an input, and a timer as an output. The timer base, for simplicity, I'll use one. And the preset value is five seconds. So, once the switch is turned on, the rung becomes true. And then, the timer starts timing until it reaches the preset value. Once the timer reaches the preset value, then it stops accumulating, because the accumulated value equals the preset. Then, in order to reset the timer, the way to do it is to turn off the switch. Once the switch is turned off, the rung goes to false, and there is a change in the rung condition,
>
> **[4:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-instruction-overview?u=76281980&t=284)** and the timer accumulated value resets. And to start the timer again, simply turn on the switch.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=0)** - [Instructor] A timer instruction comes with three main status bits. Timer done bits, timer timing bits, and timer enable bits. And depending on the [[PLC]] type, the bits are either attached to the timer instruction or hidden. A timer done bit is true when the accumulated value is equal to the preset value. It is basically on when the timer is done timing. It changes from false to true or from true to false depending on the type of the timer instructions you use. The bit is commonly used to control another logic when the timer is done timing. A simple example in my process that the heating of the liquid is to begin 30 seconds after signal is received from a limit switch. So we use a timer on delay to set a 30 second and use the done bit to start the heating process. So here, we use an XIC instruction for the limit switch and when the limit switch is activated, the timer starts timing for 30 seconds. For the timer instructions, for simplicity, let's use a timer base of one, second and the preset is 30 seconds. And after 30 seconds, after the timer is done timing, the timer done bit is true and as a result, the heater starts. So we use an XIC instruction for the timer done bit and use the heater as the output instruction.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=94)** Note here that during the timer timing, the done bit is not true and the heater is only on when the timer is done timing. When the done bit is true, the accumulator equals the preset. And also, note here when using the status bit, we use the same timer name. The second bit is a timer timing bit. This bit is true only when the accumulator is incrementing. The timer timing bit is true whenever the rung is true and the accumulated value is less than the preset value. So basically, while the timer is timing. If we have an input, then the timer timing is true whenever the input is true and as long as the accumulated value is less than the preset value. When the timer done bit is set, the timer timing bit resets. So using the same previous example, let's say that we have a yellow light to turn on while the timer is timing during the 30 seconds, indicating that the heating process is going to start after this delay. In a lot of logic, we are going to use the timer on delay to set the 30 second and use the timer timing bit to connect it to the yellow light. So an XIC instruction for the timer timing bit and connecting it to the yellow light which is the output. Now, the program works this way. Once the limit switch is true,
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=188)** the first rung is true and the timer starts timing. Timer timing bit, in the second rung, is true as soon as the timer starts timing and it stays on or stays true as long as the accumulated value is less than or equal to the preset. Note again that we're using the same name of the timer, but now we're specifying the timer timing bits. As soon as the timer is done timing, the timer timing bit goes to false and the light turns off. And the timer done bit now goes on in the third rung and the heater starts. The third bit is a timer enable bit. An enable bit is true when the rung input is true and enable bit is false when the rung input is false. The main difference between timer enable bit and timer timing bit is that the timer timing is only true while the timer is timing. As for the enable bit, the enable is true as long as the rung is true even after the timer is done timing. So basically, whenever the rung is true, the timer enable is true anytime the timer instruction is true. So if you have an input, as long as the input is true, the timer instruction is considered enabled. So in other words, as long as there is continuity through all input instructions to the timer instruction, no matter what the relationship between the preset
>
> **[4:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-status-bits-en-dn-and-tt?u=76281980&t=284)** and accumulated value, the timer enable bit will be set. So even if the timer's done timing or accumulator is equal to the preset or zero, the timer enable is true when the rung is true. The enable bit is reset or goes to false when the rung goes to false. So now, using the same example, let's have the red light that is turned on during the whole process when the timer is timing for the 30 seconds and when the timer is done and the heater is turned on. In this case, the timer status bit that we're using is timer enable bits. So here is the yellow light is only on when the timer is timing. When the timer is timing for the 30 seconds. While the red light is on, the whole process while the timer is timing and even when the timer is done, as long as the rung is true.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1)
> **Env Vars:** xic (3), plc (1)
> **Definitions:** is a  (2), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Timer types (TON and TOF) and diagrams](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=0)** - The main two types of timers are, Timer ON Delay and Timer OFF Delay. And it's usually written on the timer instruction, what type of timer that is. Timer On Delay instruction, usually use to turn on an output, on or off after the timer has been on for a preset value. So let's take an example of a Timer On Delay that is set for 20 second. And, we use an input like a switch. I'm going to use a timer diagram, in order to explain the concept and to show the difference between the two timer types. This is the time diagram for the Rung. It goes from False to True. And if we have an input in the Rung, like in our case we have a switch, then when the input is True the Rung is True. This is showing how long the Rung is being True, or how long we have kept this switch on. Let's say that the Rung stays on for 40 seconds. Whenever the Rung is True, the Enable bit becomes True as long as the Rung is on. The timer is set to time for 20 seconds, so the timer is timing for 20 seconds only. This means the Timer Timing Bit is activated only for 20 seconds. After the 20 seconds, the Timer Timing bit goes to False. Even if the Rung is True, the Timer Timing bit goes to False after reaching the preset value.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=97)** The Done bit is activated after the timer is done and stays on as long as the Rung is True. Once the Rung goes to False, the Timer Done bit resets too. This how a Timer On Delay Timing Diagram looks like for our example. Note here that all the bits work only when the Rung is activated. So, if the Rung is only on or is only True for 10 seconds, then the Enable bit will be True and the Timer Timing bit will be True. While the Done bit will not get to be True, because it will never reach the preset value of 20 seconds. So keep that in mind when using a timer and you notice that the Done bit does not work. Use the Timer On Delay instruction, if you want to program a time delay before an instruction becomes true. So this is an example of a Timer On Delay. Let's say a garage door, that after pressing an open gate button, the garage opens after five second delay. So we use Timer On Delay in this case. The other timer type is Timer Off Delay. Use Timer Off Delay instruction, if you want to program a timed delay to begin, after a Rung input goes False. The Timer Off Delay works in a little bit different format. The Enable bit is True when the Rung is True. The timer starts timing when the Rung goes to False.
>
> **[3:14](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/timer-types-ton-and-tof-and-diagrams?u=76281980&t=194)** And the Done bit is on, as soon as the Rung is True, and stays on until the timer done timing. So one of the example of using a Timer Off Delay... Let's say we have an external cooling fan, for a motor is to run all the time the motor is running and for 10 seconds after the motor is turned off. This involves a 10 second off delay timer. The 10 second timer cycle begins when the motor is turned off.

> [!info]- Semantic Content
>
> **Env Vars:** off (1)
> **Definitions:** is an  (1)
> **Speakers:** - the (1)

#### [Use a timer to flash a light](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=0)** - [Narrator] One of the common applications for Timer, is using it for flashing lights. Flashing lights are used in many applications, and industry and even I'm commercial environments. In a flashing light, simply the light is on for a certain time, and off for a certain time. So we need to think about how long to keep it on, and how long to keep it off. Let's take an example where we need to program a flashing light, and in our example, the light is on for six seconds and off for two seconds. So, one timer to keep track of the six seconds, and one timer to keep track of the two seconds. Note here, as mentioned previously, we need to know what is the timer base of the specific [[PLC]] timer we're using. In our example we are going to use a timer base of 0.1. So for the six second delay, and for the two seconds delay, we are going to use 60 and 20 for the preset value. I chose the names to be on timer for the six second delay, and off timer for the two seconds delay, but I'm using a timer on delay for both. Now let's start programming, the first step is adding the timer in the Rung, as soon as the program starts, the Rung is true and the timer starts timing. Once the six seconds is done, then we'll be using the done bit of the timer, to start the second timer. This will ensure that the second timer starts only, when the first timer is done timing.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=95)** Now we need to think about how to reset the first timer, remember that timers, resets in a change in a Rung condition, and for timer on delay, I need the Rung to have the transition from true to false, because at this point without having any input instruction, the rung will be true and stay that way, and the timer will stop once it reaches the preset value. So now we need to think about how to make the rung goes from false to true, and in the same time ensuring that the timer increments to the preset value. So we can take advantage of the second timer by using the timer done bit. Now think about either using XIC, or XIO instruction. Let's see how the program works when using XIO instruction. So at the beginning, the second timer done bit, is not activated yet, because the second timer has not even start timing. So XIO instruction in the first rung is highlighted, and this will ensure that the first timer starts timing. As soon as the first timer is done timing, it stops and the done bit in the second rung is activated, and as a result the second timer starts timing, and once the second timer is done timing, the second timer done bit changes to one. So the XIO instruction in the first rung, is not highlighted anymore and the first timer resets back to zero, and at the same time,
>
> **[3:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=187)** as soon as the first timer resets, the done bit resets as well. So the second rung XIC instruction goes to zero, and this makes the second timer resets as well. At this point we go back to the beginning, and the whole process starts again. The timers are used to reset each other, after each one is done timing. Now we got the flashing part working, we have two timers, one is for six seconds, and one for two seconds. Now we need to link back to the light, since we want the light to stay on for six seconds, and off for two seconds, then we are going to use the six second timer timing bit, to connect it to the light. So let's use this [[Simulation Software]], to see how this program works. In the simulation software note here I'm using two timers, the address for the six second timer delay, is T40 and the address for the two seconds timer is T41.
>
> **[4:19](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/use-a-timer-to-flash-a-light?u=76281980&t=259)** Now we go online, download the program, and hit the remote. Notice here as soon as we hit the remote, the flashing light works, it's on for six second and off for two seconds.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=0)** - [Instructor] Many times, when dealing with machinery in manufacturing situations, you have to count items, whether you're putting [[Microsoft Products|products]] in a box or two dozens of bottles into a container, you need to count the items coming off the machine. Every [[PLC]] has counter instructions. Although they may be programmed differently, they operate the same way. So once you become familiar with one, the [[Representational State Transfer (REST)|rest]] are easy to learn. The two main types of counters in PLC is counter up and counter down. The choice of which to use depends on the task to be done. For example, if we're counting the finished products leaving a machine, we might use a counter up. If we're tracking how many parts are left, we might use counter down. Most PLC contain both up and down, and here are some of the other examples of the counters used. This is the configuration of the typical PLC counter function. A counter instruction is an output instruction. Most PLC counter counts the false to true transition of the rung input logic. The counter instruction counts each time the input logic changes the rung from false to true. Counters normally use the low to high transition from an input to trigger the counting action. Simply, when the rung is activated, the counter counts one. And we need the rung to have the false to true transition
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=97)** for the counter to continue counting. Input logic can be a signal coming from an external device like sensor, or an internal logic as we learned before. Each time the counter instruction sees a false to true rung transition, now depending on the counter type, a counter-up counter is incremented by one. A counter-down counter accumulated value is decremented by one. The type of the counter is usually listed on the tip of the instruction. The counter instruction has generally three values associated with it: counter name, counter preset, and accumulated value. A typical counter counts from zero to a predetermined value that's called the preset. The preset value specifies the target number of counting, while accumulated value indicates the actual number of counts that have already occurred. So here's an example, if you want to count from zero to 100, you would count up and use a counter-up counter. The predetermined value of 100 would be the preset value, and accumulated value is the current or accumulated counts. So if our counter had counted 45 pieces that had passed on the conveyor, the accumulated count, or the value, would be 45. And when all 100 pieces had passed on the conveyor, the counter accumulated value and the preset would be equal.
>
> **[3:15](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-instruction?u=76281980&t=195)** At this point, the counter would signal that the counter is done counting, and it's complete. Counters need a reset instruction for it to reset back to zero. The reset instruction name should match the counter name. Now, a counter down works a little bit different. Each time a count-down counter sees a false to true transition, its accumulated value is decremented by one. Since the accumulated value is decremented each time the input logic changes the rung from false to true, the accumulated value must be starting point of the count. Counters and PLC come with bits that are associated with them. Each bit is activated at a certain task. CU when the counter is counting up, CD when the counter is counting down, and then the done bits counter is when the counter is done counting. The accumulated is equal or greater than the preset value. The way to use the bits is by using the name of the counter and then select the specific bit attached to it.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=0)** - [Instructor] So now we'll go through the examples for counter up, counter down, and up and down counter. So let's see an example of using counter up in [[PLC Programming]]. For example let's say we have a sensor on a conveyor to count 24 cans that go into a case. And while the counter is counting there's a yellow light that turns on indicating that the case is not full yet. Once the counter reaches 24 cans then there is a green light indicates that the case is full and it's ready to go to the next step. We need to have a reset push button that can reset the counter to fill in another case. So in the [[PLC]] program we have a sensor as an input. Note here we're using an XIC instruction and having the counter as an output for that specific run. We need to give the name to the counter and specify the preset as 24. After using the counter we need to associate the yellow light to the counter while it's counting. So the bit that we use here is counter up bit. Remember that we nee to use this name of the counter and select the counter up bit. Now in the second run the yellow light will turn on as long as the counter is counting and not finished yet. Then to program the green light we need to show that when the counter is done counting when the case has 24 cans then the green light turns on.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=97)** So we need, this time we use the done bit of the counter and associated that with the green light. And I'm using an XIC instruction. Remember than an XIC is activated when the number location is one. So the bit, the counter up bit, is activated when the counter is counting. And then the done bit will only be activated when the counter is finished counting. In order to reset the counter we are going to use a reset instruction. And remember that we needed to use the same name of the counter. So we add a push button XIC instruction and have a reset instruction as an output to that specific rung. The second example is using counter down. For a counter down, each time the counter sees a false to true rung transition, its accumulated value is decremented by one. Since the accumulated value is decremented each time the input logic changes from false to true the accumulated value must be starting point of the count. For example when counting a batch of 100 parts, each time the part is made the remaining total is displayed on an operator interface so that the operator can see how many parts are needed to be manufactured. So every part that is being manufactured, the remaining total is displayed. For the counter, accumulated value will be
>
> **[3:11](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=191)** programmed with a value of 100, the total number of parts whereas the preset value will be zero. In this case the accumulated value will be set to 100 and the preset value will be zero so each time a part is completed and passed through the sensor the accumulated value will be decremented by one. When all 100 parts have been made the accumulated value and the preset value will be zero. The done bit in the counter done is activated at that point when the accumulated is equal or greater than the preset value. The value that we need to send to the monitor is the counter accumulated value. Because we want to see how many parts are left. We name it as the counter name .ACC, which is the accumulated value. I am going to use a move instruction to move it to that monitor. The last example is combining up and down counter. So let's take an example where we need to keep track of the net numbers of parts on a conveyor. The number of parts coming on the conveyor is counted by a proximity sensor and the number of parts leaving the conveyor is counted by another proximity sensor, if we want to keep track of the same entity we use the same address, the same memory location for both counter up and counter down.
>
> **[4:44](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/examples-of-counter-types?u=76281980&t=284)** So we use a separate count up instruction and a separate count down instruction with the same address. With the same memory address. Sensor one will increment the counter up and sensor two will increment the counter down. Since both counters share the same address the accumulated value will be shared between the two counter instructions. And because the accumulated is shared it will reflect any count seen by either count up or count down instruction. And we're doing the same thing. We are going to use a move instruction to move the accumulated value to the monitor to show how many parts are left.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=0)** - [Instructor] So let's take an example where we use both timers and counters. Let's design a system where a parking lot has 10 spots. Whenever a car comes in, a sensor detects a car, and the door opens for three seconds. The three seconds are used for demonstration purposes. In real life, three seconds is really short to keep the door open. So let's keep it for three seconds for programming purposes. A green light is showing that there are some spots left in the parking lot, and a red light, that's showing there is no spots left when the parking is full. The first part in any problem, let's try to identify the inputs and outputs of the system, and I mean the physical devices. So the car sensor is an input to the system. The parking lot door, the green light, and the red light are output to the system. The first thing is that once the car comes in, detected by the sensor, the door opens. So we are going to use an XIC instruction for the car sensor, and for the door, we use it as an output. Now every time the door opens, it stays on for three seconds. So now we need a timer. As soon as the sensor detects a car, the door opens for three seconds. For the three-second timer delay, we need to add a timer on delay to keep track of the time. And if we select the base to be 0.1, then the preset value is 30.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=96)** Now the program works this way. As soon as the sensor detects a car, the timer starts timing. So now I need to add the parking lot door, so the door stays on, stays open, for three seconds. Remember that we have three status bits for the timer. So I need to select the bit that the door opens while the timer is timing. So in this case, we are going to select timer timing bits. Now, as soon as the car comes in, a sensor detects the car, and the timer starts timing for three seconds, and during that time, the door opens and stays on for three seconds. As soon as the timer reaches the preset, which is at three seconds, the timer timing bit goes default, and the door closes. The second part of the problem is that we need to keep track of how many cars get sent to the parking lot. So now I need to use a counter. We are going to use a counter app, because we're counting how many cars get sent to the parking lot. For the preset value, we are going to use 10, because we need to keep track of 10 cars. The counter name is going to be Car_counter. There's a good practice in programming is to choose a name that's related to the task. Now every time the door opens, the counter counts by one. Remember that the counter counts in the transition from false to true. Every time the door opens, the counter incremented by one.
>
> **[3:13](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=193)** And we place this after the second ring. Now the program works this way. Once the car gets in the front of the parking lot door, the car sensor senses the car, and the door opens for three seconds. And once the parking lot door is activated, the counter increments by one. Remember again, that the counter counts in the transition from false to true. Let's continue programming. Once there are available parking spots, there's a green light that needs to be turned on. So we are going to use the counter to achieve that task. As long as the counter is not yet done counting, in other words, as long as the accumulated value is less than the preset, a green light is on. As you learned before, the counters in [[PLC]] come with bits that are associated with them, counter up, counter down, and done bits. Since I want the green light to be on while counting, and while the accumulated value is less than the preset, the bit that I'm going to use is counter up bit. So now, as the long as the accumulated value is less than the preset, a green light will turn on, indicating we have enough spots for parking. So this is how the logic looks like so far. Now, the last thing is that when the parking spots are filled, once there are 10 cars inside the parking lot, a red light turns on,
>
> **[4:46](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/counter-and-timer-case-study?u=76281980&t=286)** indicating that there is no more parking spots available. Again, we are going to use the counter instruction. Once the accumulated value reaches the preset, the done bit is now true. So we use the done bit, and connect that to the red light. The program now behaves this way. While the counter did not reach the preset, the counter up bit is active, and a green light is on. Once the accumulator reaches the preset, the counter up bit is not active any more, so the green light turns off, and at the same time, the done bit is activated, and a red light turns on. So this is the solution for this specific problem. In other cases, we might need to keep track of the cars coming in, and leaving out the parking lot, but this is the complete program for the example that I'm using in these slides.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=0)** - [Narrator] So I'm going to go through a detailed example that combines everything we've learned in this course. In this video, I'm going to explain, what is the problem and what are we trying to achieve? You can give it a try and try to come up with a ladder logic and check your solution later. In any [[PLC]] Programing, each PLC programmer has his or her own preferred method. So each problem has more than one right way to solve it. There are some general rules that will make programming a little bit easier and help you to build the ladder logic. So let's take this example that involves programming in automatic control for the system shown. When the start pushbutton starts, a stacker starts stacking plywood sheets at Position A using Sensor A. When 12 sheets are stacked, the conveyor goes on and moves the stacks to Position B. A sensor is used to stop the conveyor at Position B. At B, there's a paint that's applied for 10 seconds. After painting is complete, the conveyor restarts automatically. The conveyor then moves to Position C. At Position C, the stacks stops automatically and stacks are removed manually. A stop push button is used to stop the process at any time. So let's assume that we're only using one stack on the conveyor at a time, and all relays are normally open,
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/case-overview?u=76281980&t=94)** except for the stop pushbutton. It's a normally closed relay. The first part in any problem, let's try to identify the inputs and outputs of the system, and any of the physical devices. So the start and stop pushbutton, they are considered inputs. The sensors at each position, they're all inputs because they provide data to the system and according to the bits, the conveyor either starts of stops. The paint turns on and off and the conveyor moves on or stops. They are considered as outputs. Inputs and outputs are connected in an input module and output module of the PLC, accordingly. And each has a specific address connected to it. Input address name is I, for input, one for the number that specifies the input module that placed in, and finally a specific bit. Output address is O, for output, two is the rack module number, and finally, the specific bit. So here are the addresses for each input and output for the system. I'm going to use that later on when we do the [[Simulation]], So the layout of the process is as following: you press a start pushbutton to start the process. After 12 sheets, conveyor starts. At Position B, conveyor stops, the paint starts on for 10 seconds. After 10 seconds, the conveyor starts again. At Position C, the conveyor stops.
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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=0)** - [Narrator] Let's start building the Ladder Logic program. When starting a [[PLC Ladder Logic]], always try to break down the problem one step at a time. It makes it easier for you to program the task, and also for debugging purposes. Let's look at the first task. The start push button is pressed and let go. A stacker starts stacking sheets of wood and then when we have 12 sheets, the conveyor starts. I need to use a start push button to keep it on, even after letting go the start push button. Because we cannot expect a technician to keep holding the start push button while stacking the sheets. So we use an XIC for this example, and we'll create an internal tag, we name it as Start_process. And seal the start push button to keep the start process on. Now, as soon as the push button is pressed, the XIC instruction is activated, instruction is highlighted, and the internal tag is activated. The bit status is one. And as soon as the internal tag is one, the XIC and the seal in instruction is activated too. Even if the push button is no longer pressed, the internal start process tag is kept on, as the run now uses an or option to keep the output on. Then, we use Sensor A to keep start counting for the 12 sheets. We need to count up to 12 sheets. For Sensor A, it is an input, so it senses each sheet, and counts them.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-1-counting-sheets?u=76281980&t=95)** We use an XIC instruction as an input to start counting the 12 sheets. For counting, we use counter up instruction. Our preset value is 12. Note here that the counting of the sheets should happen after pressing the start push button. So if the start push button is not pressed prior to this step, the counter should not start counting. For that purpose, we need to use a start push button instruction in the same run of the counter, as the counting cannot start if the start push button has not pressed yet. For that purpose we are going to use them in series, because we want both the start process, and the sensor to work in order for the counter to start counting. This is how the Ladder Logic is for the first part. Pressing the start push button, and then counting for the 12 sheets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Ladder Logic]] (1)
> **Env Vars:** xic (4), plc (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Part 2: Running the conveyer](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=0)** - [Instructor] The next step is after counting the 12 sheets, the conveyor starts again until it reaches position B. So, we need to use the counter done bit after the counter is done counting the 12 sheets and use an XIC instruction for the counter done bit. The output of that rung is the conveyor starting and output is the conveyor motor. Then to make the conveyor stop when reaching position B which is sensor B, we need to add a condition in that specific rung to keep the conveyor on but stops only when reaching to sensor B. So now let's think about using XIC or XIO instruction for sensor B. If we use XIC, then the rung will look this way. In this case, once the counter is done counting and the bit is activated, the conveyor needs to start, but if we use XIC, then XIC is not activate yet, because we're not in position B yet and the memory address bit is zero, so the conveyor will not start in this case. But if we use XIO instruction, remember that XIO is active when the memory location is 0, then the XIO instruction is activated before reaching sensor B. Remember that the instruction is activated, not the actual physical device. The rung will behave this way. Once the counter is done counting, the done bit is true.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-2-running-the-conveyer?u=76281980&t=95)** The instruction is activated, and since we are using XIO for sensor B, then it's already highlighted and this will make the conveyor start. So this is how the program looks like for this part. Once the start pushbutton is pressed, the start process starts. Once counting for 12 sheets, then the counter is done counting, the conveyor starts, and only stops when reaching sensor B.

> [!info]- Semantic Content
>
> **Env Vars:** xic (5), xio (5)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Part 3: Applying paint](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=0)** - [Instructor] So this is how the program looks like so far. So let's continue our programming. Once the sheets reaches position B, the conveyor stops and the paint is activated, turns on and stays on for ten seconds. So to program that we are going to use an XIC instruction for sensor B and then have the paint as an output. And to have the conveyor stops at position B, remember that was achieved in the previous run where the XIO instruction is used for sensor B. So once the sheets reaches position B, sensor B is activated and then XIO instructions turns to one and as a result the conveyor stops. The paint is applied for ten seconds, so we need to add a timer, timer on delay, to keep track of the time and if we select the time of base zero point one then the preset value is 100. And in order to keep the paint on we are going to use a hold n or a sealant instruction to keep the paint on during that time. So this is how the program looks like so far. So we need to think on how to turn off the paint after the 10 second delay. First we are going to use a timer DN Bit. The question is where to use it. Always try to think when you program. The DN Bit is used to turn off the paint. So I'm going to use it in this rung. Now I know where to use the instruction
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-3-applying-paint?u=76281980&t=93)** but the same logic applies, the same question applies, are we using XIC or XIO instruction? Again since I want to keep there on continuity and only disabling the output when the timer is done timing for the 10 seconds then I'm going to use an XIO instruction. XIO instruction is highlighted when the bit is zero so as soon as the timer is done timing, the DN Bit is activated and XIO turns off. It's not highlighted anymore and the paint is off. At the same time the timer resets. Remember the timer resets are the rung transition between true to false. The timer resets with a change in the rung condition so this is how the program looks like so far.

> [!info]- Semantic Content
>
> **Env Vars:** xio (6), xic (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Part 4: Programming the second conveyer](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=0)** - This is how the program looks like till now. After the paint is done, the conveyor starts automatically and the sheets are moved to Position C. Now we need to program how to start the conveyor again after the timer is done timing. Note that since we already have the conveyor output, then we use the same rung. As you learned before, that use one particular output one time in your program. So if you have multiple inputs that are associated with the same output, then we need to put them in parallel. So I cannot have two rungs that have the same output. Here, we can apply the branching technique. So once the timer is done timing, the conveyor will start again. So one thing that you need to think about is that the timer will reset as soon as it's done. Refer back to the solution part three. As mentioned previously that the timer resets when there's a change in the rung, when there's a true to false transition for the timer on delay. So I'm going to use the enable bit of the timer to keep the timer rung true. And this will ensure that the conveyor starts again after the timer is done timing. The timer done bit is true, and stays true as long as rung four is true. So this is how the program looks like so far. Now the conveyor needs to stop when reaches Position C. We can apply the same thing as Sensor B.
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-4-programming-the-second-conveyer?u=76281980&t=98)** We use XIO instruction for Position C. So, the XIO instruction for Sensor C is highlighted since the sheet have not reached Sensor C yet. Once the timer is done timing, the down bit is activated and the conveyor starts again. As soon as we reach Position C, the XIO is not activated anymore and the conveyor stops. One last thing to add is that to ensure that the conveyor only works when the timer is done timing, so we add an XIO instruction of the timer timing bits. This will ensure that the conveyor is stopped while the timer is timing. And that's what we want, because the paint is on during that time. So once we get to Position C, let's restart the counter and the timer. So for the timer I'm going to use an XIO instruction for Sensor C because we need the transition between true to false. And for the counter, remember that I need the reset instruction so I'm going to use Sensor C in order to reset the counter once we reach Position C. So now, both counter and timer resets once we reach Position C. So this is how the program looks like so far.

> [!info]- Semantic Content
>
> **Env Vars:** xio (5)
> **Warnings:** note that (1)
> **Speakers:** - this (1)

#### [Ladder logic program simulation](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=0)** - [Instructor] So this is how the program looks like so far. Start push button that starts the process, when 12 sheets are stacked the conveyor moves to Position B. Sensor B is used to stop the conveyor and the paint is applied for 10 seconds. After painting is complete, the conveyor then moves to Position C, and at Position C the conveyor stops and everything resets. So let's use this [[Simulation Software]] in order to see how this program works. This is how the program looks like in the simulation software. And for demonstration purposes, I'm going to use the light. So I'm going to use the first light to indicate the start process. The second light is for the conveyor and the third light is for the paint. The first light is a yellow light, the second one, which is the one for the conveyor, is a green light, and the third light is red that's indicating the paint. For the start push button I'm going to use the first push button. For Sensor A, B, C, I'm using number two, three, four.
>
> **[1:20](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/ladder-logic-program-simulation?u=76281980&t=80)** So for Sensor A, B, and C, I'm using exactly the same addresses. So you go online, download the program, and then hit the run node, and the start push button. So as soon as I hit the start push button, the start process turns on and stays on. So for Sensor A, this one that counts the number of sheets, so every time you click on the push button, that indicates a one transition. So you need to do it for 12 times to indicate that you reach the 12 sheets. Once we reach the 12th sheet, the conveyor then moves. Notice here that the green light is on indicating that the conveyor has moved to Position B. This sensor is for Position B, so once we get to Position B, now the conveyor stops and the paint stays on for 10 seconds. As soon as the timer is done timing, the paint stops and the conveyor starts again, and you can notice that the lights, the red turns off and the green turns on. So the conveyor stays on until we reach Position C, that's in push button four, so once we reach Position C, the conveyor stops and everything resets.

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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/part-5-add-stops-to-complete-the-program?u=76281980&t=0)** - So now the final thing that's left is adding the stop pushbutton. So we need to add the stop pushbutton that stops the process at any time. Remember that the stop pushbutton is normally closed. Everything else is normally open, except for the stop pushbutton, it's normally closed. So adding the stop pushbutton in the latter logic, we are going to use XIC. And to make sure that the process stops at any time, we are going to add the stop pushbutton in every single run. So this is how the program looks like after adding the stop pushbutton. Let's use the [[Simulation Software]] in order to see how the program works after adding the stop pushbutton. So in the simulation software, I added the stop pushbutton every single run using XIC instruction. I notice here, in the IO [[Simulation]], I chose a normally closed, because it's a normal closed relay. So you do the same thing. You go online, download the program, and then go to the run mode. Notice here that because it's a normally closed relay the instruction is already highlighted and that's what we want because we want the process to stop only when pressing on the stop pushbutton. Now as soon as you hit the start pushbutton, the process starts. Once you get to position A, you start counting. Up to 12 sheets. Now the conveyor starts.
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
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-1-the-basics/next-steps-22803390?u=76281980&t=0)** - Thanks for taking the time to join me in this course. This course was to give you an introduction to the basic instructions used in [[PLC]] Lateral Logic programming. I recommend for the next step is to check the following courses, Learning PLC Lateral Logic 2 Diving Deeper, which is a continuation of this one where I cover more basic instructions like Math, compare and data transfer instructions. You can also check PLC [[Simulation Software]] Factory IO with Connected Components Workbench software where I cover four projects with solutions to better understand the language and to continue learning about PLC later logic programming, I recommend checking out the learning path, become a PLC developer where I have designed the courses to cover the concept from the basics to more advanced levels. If you'd like to learn more about the common industrial sensors used with PLCs, I recommend checking out these two courses, PLC industrial Sensors and Input Sensors with PLC syncing and sourcing. Thanks again, and I look forward to seeing you in another course.

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