---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: plc-sequencer-logic
url: "https://www.linkedin.com/learning/plc-sequencer-logic"
duration_minutes: 86
duration: 1h 26m
level: Advanced
updated: 2/14/2020
learners: 182590
skills:
  - PLC Ladder Logic
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFSNTNumnDGdg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1581532514983?e=2147483647&amp;v=beta&amp;t=3hKY0PVYyLRk2oM7Y6IUJwTjgBKWThfQNbbmcFMU37M"
linkedin_topic: Hardware
learning_paths:
  - '[[Become a PLC Developer]]'
prev_courses:
  - '[[PLC Memory Organization]]'
next_courses:
  - '[[PLC Program Flow and Control Instructions]]'
path_nav: '[{"path":"Become a PLC Developer","position":5,"total":7,"prev":"PLC Memory Organization","next":"PLC Program Flow and Control Instructions"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - skill/plc-ladder-logic
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/PLC%20Sequencer%20Logic.md)

![PLC Sequencer Logic](https://media.licdn.com/dms/image/v2/C4E0DAQFSNTNumnDGdg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1581532514983?e=2147483647&amp;v=beta&amp;t=3hKY0PVYyLRk2oM7Y6IUJwTjgBKWThfQNbbmcFMU37M)

# PLC Sequencer Logic

> Sequence processes are common in manufacturing and used often in ladder logic, the popular language for programming major PLC devices. In this practical course, instructor Zara Khalil demonstrates how to use sequencer instructions in PLC ladder logic programming. To help lend each concept a real-world context, Zara shares practical examples involving everything from traffic lights to dishwashers. 

> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic) | 1h 26m | Advanced | 183K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. PLC Sequencer Output Instruction (SQO)]]** (10 videos)
- **[[#2. SQO Examples]]** (12 videos)
- **[[#3.PLC Sequencer Compare Instruction (SQC)]]** (8 videos)
- **[[#4. PLC Sequencer Load Instruction (SQL)]]** (8 videos)
- **[[#5. Final Challenge]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting to know PLC sequencers
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=0)** - Have you ever wondered what a dishwasher, traffic lights, and food pack and processes have in common?
>
> **[0:07](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=7)** All of these have a sequence of some kind.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=11)** In manufacturing and industrial settings, PLC programming is often used to control machines that have a stepped sequence of repeatable operations.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=23)** In this LinkedIn Learning course, I'll explain a couple of the Sequencer instructions used in PLC ladder logic programming like Sequencer output, compare, and load instructions.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=37)** We will explore each instruction separately and go through examples with step-by-step solutions to better understand the concept.
>
> **[0:47](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=47)** You will also see the examples in the simulation software.
>
> **[0:50](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=50)** At the end of each chapter, I'll propose a challenge for you to work on.
>
> **[0:56](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=56)** The last chapter is a challenge that includes all the instructions we worked on during this course.
>
> **[1:04](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=64)** Hi, I'm Zharaa Khalil.
>
> **[1:06](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=66)** I am an engineering instructor and I love teaching students just like you.
>
> **[1:11](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=71)** Join me in my LinkedIn Learning course as we explore Sequencer instructions used in PLC ladder logic programming.

> [!info]- Semantic Content
>
> **Env Vars:** plc (3)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - have (1)

#### What you should know before watching
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=0)** - This course focuses on Lotto Logic programming and going through sequential instructions specifically.
>
> **[0:07](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=7)** So, before you start this course, you should be familiar with how Lotto Logic programming works, using basic instructions like how to use input and output instructions, and how timer instructions work.
>
> **[0:21](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=21)** If you need a refresher on the basics of Lotto Logic programming, I recommend that you check out my other LinkedIn Learning courses so you're prepared for this course.
>
> **[0:31](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=31)** Throughout the course, I'll be using Logix Pro PLC simulator from Learning Pit.
>
> **[0:38](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=38)** This simulation software mimics Allen-Bradley Rockwell ARIS Logix 500.
>
> **[0:45](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=45)** The simulation software is used to only demo the examples.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=49)** The course does not teach specific software so you can apply the knowledge to any PLC software that uses Lotto Logic.
>
> **[0:59](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=59)** Okay folks, let's get started and have fun.

> [!info]- Semantic Content
>
> **Env Vars:** plc (2), aris (1)
> **Code Keywords:** let (1)
> **Speakers:** - this (1)

#### LogixPro PLC Simulator software
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980&t=0)** - [Instructor] For this course I'll be using LogixPro PLC Simulator from LearningPit.
>
> **[0:06](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980&t=6)** This simulation software mimics Allen Bradley's Rockwell RSLogix 500.
>
> **[0:13](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980&t=13)** Please refer to this video LogixPro PLC Simulation Software where I go through the software and how to download it.
>
> **[0:22](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980&t=22)** The simulation software is used to only demo the examples.
>
> **[0:26](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980&t=26)** The course does not teach the software, as you can apply the knowledge to any PLC software that uses ladder logic.

> [!info]- Semantic Content
>
> **Env Vars:** plc (3)
> **Speakers:** - [instructor] (1)


### 1. PLC Sequencer Output Instruction (SQO)

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Intro to sequencer instructions
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=0)** - [Instructor] In most manufacturing and industrial settings the process is usually programmed to perform the same output pattern for a period of time.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=10)** The sequencer instructions control a pre-determined sequence of events.
>
> **[0:17](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=17)** They are instructions that control several outputs with multiple step patterns.
>
> **[0:25](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=25)** So, they're often used to control machines that have a stepped sequence of repeatable operations.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=34)** Sequencer instructions simplify the letter program by allowing you to use a single instruction or pair of instructions to perform complex operations.
>
> **[0:48](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=48)** The generic sequencer instruction is usually a block type and has the following.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=54)** The number of steps, file that has a starting register, destination register, step pointer for the current step, and how to control the sequence.
>
> **[1:07](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=67)** The sequencer instructions are available on most PLCs.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=72)** Even though the basic operating principle of the sequencer is the same regardless of the manufacturer.
>
> **[1:20](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=80)** Each manufacturer, will have its own specific programming procedures for the sequencer instructions.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Sequencer output instruction (SQO)
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=0)** - [Instructor] One type of sequencer instruction is a Sequencer Output Instruction.
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=5)** It is a blog type instruction with a following parameters, File, Mask, Destination, Control, Length, and Position.
>
> **[0:18](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=18)** This instruction basically transfers data from the Sequencer Source File to the Output Destination Module through a mask.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=27)** It is programmed as an output and placed on the right hand side of the rung.
>
> **[0:33](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=33)** Each False-to-True wrong transition, causes the sequencer output instruction to increment to the next sequence step.
>
> **[0:44](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=44)** The transition from false to true in the rung can be caused by two types of triggers.
>
> **[0:51](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=51)** It can be either Event driven by something passing in front of a photo sensor, or a switch or can be Time driven, triggered or driven by a clock.
>
> **[1:05](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=65)** Each sequencer uses 116 point output module.
>
> **[1:11](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=71)** As the sequencer advances through its file, the stored data are transferred one word at a time through a mask to the destination.
>
> **[1:23](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=83)** Each word is a step, it represents output status bits for the current sequence or step.
>
> **[1:32](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=92)** Each word gets sent to the output module to control whatever the bit is programmed to do.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), switch (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### SQO parameters, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=0)** - [Instructor] Now, let's go through the sequencer output parameters.
>
> **[0:04](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=4)** First, the file parameter, which defines the starting address of the sequencer file.
>
> **[0:12](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=12)** The file contains the data that will be transferred to the destination when the instruction is true.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=20)** The length parameter defines how many words are contained in the file.
>
> **[0:26](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=26)** So the file gives the starting point while the length tells us how many words are needed for the steps.
>
> **[0:35](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=35)** These two parameters are linked together.
>
> **[0:40](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=40)** Let's use this example to simplify the concept.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=43)** Data are stored in registers.
>
> **[0:46](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=46)** Think about it as a file cabinet.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=49)** File name is the drawer that contains that specific data we want to use.
>
> **[0:56](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=56)** In this case, drawer one.
>
> **[0:59](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=59)** And the length tells us how many sections are inside the drawer.
>
> **[1:05](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=65)** So the file gives the starting point while the length tells us how many words are needed for the steps.
>
> **[1:13](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=73)** And this is what we mean by the length parameter defines how many words are contained in the file.
>
> **[1:23](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=83)** For example, if the file number is B three word zero we use file indicator hashtag or number sign and B is for binary.
>
> **[1:36](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=96)** Then, this is the beginning address of the sequencer file making B three word zero the starting point.
>
> **[1:45](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=105)** Now, to know how many words are in this file the length parameter determines that.
>
> **[1:53](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=113)** If the length is four words, this means that word B three word one, two, B three word four are for the steps.
>
> **[2:07](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=127)** The first step, step zero, is where everything is off and it's called position zero, the startup position.
>
> **[2:15](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=135)** This only activates at the beginning of the program when you download it.
>
> **[2:20](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=140)** The length is the number of steps of the sequencer file starting at position one.
>
> **[2:27](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=147)** So count after position zero, making the actual file length equals to one plus the length entered in the instruction.
>
> **[2:38](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=158)** The instruction resets to position one at each cycle completion.
>
> **[2:45](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=165)** And in order to go back to position zero, we can use a reset instruction to reset the values to step zero.
>
> **[2:55](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=175)** The length always follows the starting address of the file.
>
> **[2:59](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=179)** Here is another example.
>
> **[3:01](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=181)** If the file starts from B three word 53 and the length is four, then the words are B three word 54 to B three word 57.
>
> **[3:17](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=197)** Remember that we reserve the first word, B three word 53, for the startup position, step zero.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### SQO parameters, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=0)** - [Instructor] The destination parameter of the sequencer instruction is the output module address, the address of the output word or file.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=11)** Due to the way in which the sequencer instruction operates all output points must be on a single output module.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=20)** So the output devices controlled by one sequencer output instruction will be interfaced to a single 16-point output module.
>
> **[0:32](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=32)** The sequencer output instruction executes the word as following: bit zero first, then bit one, and so on until bit 15.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=43)** So depending on what you want to execute first the wiring connections and the bits' status change.
>
> **[0:52](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=52)** So in this example on the screen, for step one bit zero execute first, followed by bit one and so on until bit 15.
>
> **[1:03](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=63)** Here's another example.
>
> **[1:05](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=65)** In step one, if we have two devices connected to bit zero and bit three, then bit zero is executed first followed by bit three.
>
> **[1:20](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=80)** The mask parameter is the bit pattern through which the sequencer instruction moves source data to the destination.
>
> **[1:31](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=91)** It is a hexadecimal value and if the mask bits are set to one, this means allow data to pass.
>
> **[1:41](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=101)** And if the mask bits are set to zero, this means mask the data or restrict the passage.
>
> **[1:50](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=110)** If you want to learn more about the mask and how it operates please refer to this video from the previous PLC course.
>
> **[1:59](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=119)** Control parameter is the address of the control file that contains the parameter with control information for the instruction.
>
> **[2:09](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=129)** It is different than the file address.
>
> **[2:13](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=133)** The control register file has three words: The status bits in word zero, sequencer file length in word one, and the current step of the sequence, the position, is in word two.
>
> **[2:29](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=149)** Status bits are enable, indicating that the instruction is enabled, done bit is set after the last word in the sequencer file is transferred, and sequence error is set when the processor detects a negative position value or zero-length value.
>
> **[2:50](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=170)** In Allen-Bradley, sequencer control parameter does not have a designated data file like a timer or a counter.
>
> **[2:58](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=178)** We use T4 for timer and C5 for counter.
>
> **[3:02](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=182)** So usually we use control file R6 for the control parameter.
>
> **[3:09](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=189)** The control file address may be used only once for each sequencer output instruction.
>
> **[3:16](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=196)** So if we use multiple sequencer output instructions in a programming, then each has its own control file address.
>
> **[3:27](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=207)** There are some cases where the same control file can be used for multiple instructions, for example if we have two sequencer output instructions and we want both instructions to step in unison to provide sequentially timed outputs.
>
> **[3:47](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=227)** Finally, the last parameter is the position parameter which tells the current step the sequencer is operating.
>
> **[3:56](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=236)** You can find the instruction using the simulation software under File Shift/Sequencer tab and you can find different sequencer instructions.
>
> **[4:08](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=248)** We're looking for sequencer output instruction.
>
> **[4:11](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=251)** And this is what the instruction looks like inside the simulation software.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), pass (1), finally, (1)
> **CLI Commands:** find (2)
> **Env Vars:** plc (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### SQO operation example
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=0)** - [Instructor] Let's use an example to illustrate the operation of the sequencer output instruction.
>
> **[0:06](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=6)** For the 16 points output module we can connect devices to each output port starting from output zero all the way to output 15.
>
> **[0:17](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=17)** And according to the sequence we design we can group multiple outputs or devices together or activate outputs or devices separately or in different orders.
>
> **[0:30](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=30)** For our example the sequence is as follows, for each step we energize four outputs.
>
> **[0:39](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=39)** Step one, outputs zero, one, two, and three will be energized.
>
> **[0:45](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=45)** Step two, outputs four, five, six, and seven.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=49)** And step three, outputs eight, nine, 10, and 11 will be energized.
>
> **[0:57](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=57)** So we have a total of three steps for the sequence process.
>
> **[1:01](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=61)** And the number of the physical outputs used on the output module is 12 outputs out of the 16 outputs available.
>
> **[1:11](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=71)** And now to program the sequencer instruction.
>
> **[1:14](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=74)** Binary information, zeros or and ones are entered into the sequencer file for each step filling all the 16 bits for each step.
>
> **[1:27](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=87)** We start with step zero, the start position.
>
> **[1:30](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=90)** This is where all outputs are off so we place zeros for all 16 bits of the word.
>
> **[1:38](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=98)** And for step one outputs zero, one, two, and three will be energized.
>
> **[1:46](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=106)** So bits zero to three will be one for step one.
>
> **[1:50](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=110)** And the rest is zero for all bits.
>
> **[1:54](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=114)** Now when the instruction registers a false to true transition from the input instruction the sequencer will move to step one.
>
> **[2:03](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=123)** And we usually refer to it as pointing to step one.
>
> **[2:08](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=128)** Then the 16-bit word will be sent through a mask to pass or to block the data.
>
> **[2:16](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=136)** The mask is usually chosen according to the bits needed to be passed or blocked.
>
> **[2:23](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=143)** And after passing through the mask the 16 bit word output status is sent to the output module.
>
> **[2:30](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=150)** So now the devices or lights that are connected to these outputs turn on.
>
> **[2:38](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=158)** And the same thing happens when instruction registers a second false to true transition.
>
> **[2:43](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=163)** Then it moves to step two where outputs four, five, six, and seven will be energized.
>
> **[2:51](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=171)** And finally, for step three where outputs eighth, nine, 10, and 11 will be energized.
>
> **[3:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=180)** This is what we call the truth table for the sequence process and the data are entered for each sequencer step according to the process sequence designed.
>
> **[3:11](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=191)** Now when the position parameter reaches three the value in the length parameter, meaning that all words would have been moved, so the done bit in the control file in the instruction is set to one.
>
> **[3:28](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=208)** After step three and when the next false to true transition happens the sequencer instruction will return to step one.
>
> **[3:37](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=217)** The instruction resets or wraps to position one at each cycle completion.
>
> **[3:45](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=225)** The sequencer will continuously repeat the cycle until no additional input signals are registered.
>
> **[3:53](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=233)** And this is the purpose of a sequencer where the process repeats without the need to restart the whole thing again.
>
> **[4:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=240)** If we want to reset the sequencer instruction to position zero we can use a reset instruction to reset the values of the control file using for example an external device like a pushbutton or using an internal bit like the controller done bit to reset the control file value R6 word zero.
>
> **[4:23](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=263)** One note on choosing the mask bits pattern.
>
> **[4:27](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=267)** For our example we didn't have anything connected to the last four outputs.
>
> **[4:32](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=272)** So we can choose a mask to pass all data by placing one for all 16 bits.
>
> **[4:40](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=280)** However, if we have a case where one of the last outputs is connected to a device, let's say a fan is connected to output 14, or a motor.
>
> **[4:51](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=291)** Then our choice of the mask bits pattern needs to take into account the bit for output 14 by blocking any bit pattern that might affect the operation of the fan or the motor.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), let (2), pass (2), finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Example motor and pilot lights
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=0)** - [Instructor] In this example, I'm going to use sequencer output instruction to control different outputs and develop the ladder of program for it.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=10)** In this operation, a stop push button is used to start and move through the process, to turn on two motors and three pilot lights in a specific sequence.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=23)** For this process, step one, all is off.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=27)** Step two, motor one and motor two are on.
>
> **[0:31](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=31)** Step three, red and green pilot lights are on.
>
> **[0:36](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=36)** And step four, red and yellow pilot lights are on.
>
> **[0:41](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=41)** Remember that the sequencer goes back to step one at each cycle completion.
>
> **[0:47](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=47)** Note that all examples are used to demonstrate the operation of the instruction.
>
> **[0:53](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=53)** Any live design needs to take into account all the specific devices and their behavior within the system.
>
> **[1:01](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=61)** For example, motors need time to speed up and time to stop so you cannot physically turn them on or off instantly.
>
> **[1:09](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=69)** And different motors behave differently.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=72)** So keep that in mind when you design a real process.
>
> **[1:16](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=76)** For our process, the sequencer file is B three word zero.
>
> **[1:22](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=82)** So bit zero and bit one are used to control motor one and motor two.
>
> **[1:28](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=88)** Bit two is for the green pilot light.
>
> **[1:31](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=91)** Bit three is for the red pilot light.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=95)** And bit four is for the yellow pilot light.
>
> **[1:40](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=100)** The startup position is position zero.
>
> **[1:43](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=103)** This is only at the beginning of the process when you download the program into the PLC.
>
> **[1:49](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=109)** Now, let's fill in the truth table for each step.
>
> **[1:54](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=114)** Step one, where all is off.
>
> **[1:58](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=118)** I chose to have it all off so at the repeat of each sequence cycle, everything goes off.
>
> **[2:05](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=125)** So we place zeroes for all bits for step one.
>
> **[2:11](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=131)** We know that for step two, motor one and motor two are on so we place ones for motor one and motor two and everything else is zero.
>
> **[2:23](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=143)** Now for step three, red and green pilot lights are on so bit two and bit three are ones.
>
> **[2:32](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=152)** And step four, red and yellow pilot lights are on so bit three and bit four are ones.
>
> **[2:40](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=160)** Now you can see that I only used the low bits of the sequencer file.
>
> **[2:46](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=166)** So in order to choose a mask to pass only these bits then the mask is either only placing ones for these values or if the other bits are already zeroes and we don't need the other ones, just place one for all bits to pass all data.
>
> **[3:08](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=188)** So this makes the mask zero and the rest of them are F in hexa or 65,535 in decimal.
>
> **[3:18](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=198)** You can use any hexa to decimal or binary to hexa converter to find the conversion between the numbers.
>
> **[3:26](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=206)** You notice that I gave you two ways to choose a mask for the data.
>
> **[3:31](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=211)** Well, with work and depending on your preferred way of programming, you can choose either.
>
> **[3:37](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=217)** I personally however like to only pass the data I want to deal with so I would choose mask two for my work to ensure that only the bits that are meant to program the outputs are passed to be kind of on the safe side.
>
> **[3:54](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=234)** You don't want a motor to go on accidentally that you did not program it to do so.
>
> **[4:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=240)** Now, in some of the examples in this course I chose mask one because it's easier to work with.
>
> **[4:06](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=246)** You can just place ones for the bits and that works for learning how to do this.
>
> **[4:13](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=253)** But in a real-world process, I prefer mask two personally.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (1), this. (1)
> **CLI Commands:** find (1)
> **Env Vars:** plc (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Ladder logic for motor and pilot lights
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=0)** - [Instructor] Let's look at the ladder logic for our example.
>
> **[0:03](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=3)** Now for the sequencer instruction in the software, we place the following values.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=10)** The file is B3, word zero, indicating the starting point for the file.
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=16)** The mask is zero, and the rest of them are Fs.
>
> **[0:19](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=19)** The destination is the output module output two, the control file is R6 word 0, and the length is four because I want to count all the steps.
>
> **[0:32](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=32)** Note in programming, using the simulation software, we need to place the pattern of the bits inside the binary bit table.
>
> **[0:40](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=40)** Now, for the ladder logic.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=43)** With each false-to-true transition of the run.
>
> **[0:46](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=46)** Basically, pressing on the sub-push button.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=49)** The sequencer moves to each step one at a time.
>
> **[0:55](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=55)** So, one run and one sequencer instruction for the whole sequence process.
>
> **[1:00](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=60)** We can use another push button that can reset the control file values to zero, or we can use the control done bit to reset the instruction.
>
> **[1:11](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=71)** However, keep in mind that due to how fast the PLC scans, the last step won't be visible, because as soon as the position reaches four, the done bit activates, and resets the value.
>
> **[1:27](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=87)** So we can either increase the length to five, the last one will be zeros, so it won't effect the sequence, or simply use another push button to reset the instruction when needed.
>
> **[1:42](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=102)** When using the control file done bit, the reset of the file happens only at the end of the process, when the position parameter equals the length parameter.
>
> **[1:53](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=113)** And, if you're using a reset push button to reset the position back to zero, it can happen at any stage during the process.
>
> **[2:01](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=121)** Both methods reset the control file, but depending on what you want to do, you might choose one or the other.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), module (1)
> **Env Vars:** plc (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Motor and pilot lights software demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=0)** - [Instructor] So, now, we have the program in the simulation software.
>
> **[0:04](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=4)** The first thing that I want you to know is we input the data of the truth table into the binary file.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=11)** In order to get to the binary file, you go here, and you click on this button, and this will take us to the binary table.
>
> **[0:21](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=21)** In order to get the binary file specifically, you go to the table, and then you choose the binary B3.
>
> **[0:28](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=28)** Notice here you can also choose between representing the data in decimal, in binary, whatever you want to do.
>
> **[0:36](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=36)** So, you go to binary, and then, here in the binary table, starting from B3 word zero, all the way to B3 word four, we enter the data that we have for the truth table.
>
> **[0:50](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=50)** So the values we get from the truth table, I take them and I put them inside the binary table.
>
> **[0:58](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=58)** In order to look at the data, you just double click on the specific bit you want, and then you enter the value into it and you press enter.
>
> **[1:07](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=67)** So I'm going to go ahead and close the binary table.
>
> **[1:11](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=71)** Now for demonstration purposes, I'm using LEDs to represent the motor and LEDs.
>
> **[1:19](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=79)** So for motor one and motor two, I'm using the first LEDs in output two, zero, and output two one.
>
> **[1:27](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=87)** And then for the rest of the LEDs, the green, red, and yellow pilot lights, I'm using output two, bit two, and this is green, and then output two, bit three for red, and then finally four yellow.
>
> **[1:43](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=103)** So I'm going to go ahead and go online, download the software to the PLC, and then I will hit run.
>
> **[1:51](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=111)** This is the step push button, so once I press on the step push button notice that the position is moving to position one.
>
> **[2:01](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=121)** As soon as I press again, I'm going to step two.
>
> **[2:05](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=125)** In step two, I have motor one and motor two are on.
>
> **[2:11](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=131)** Step three, we have the green and red pilot lights.
>
> **[2:15](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=135)** Step four, red and yellow pilot lights.
>
> **[2:19](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=139)** And then once I press again, notice here that position goes back to step one.
>
> **[2:26](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=146)** And in step one, I chose to have everything off, so you can see that none of the lights are on.
>
> **[2:33](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=153)** I'll do it again, and if I want to reset the value of the control file, I can press on the reset push button, here, and then notice here that the position goes back to zero.
>
> **[2:44](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=164)** And then I can start the whole process again.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (2)
> **Env Vars:** plc (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Motor and pilot lights challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=0)** - Ready to try something yourself?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=8)** For this same example, can you try solving the same process, but this time using a timer to go through the steps?
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=16)** Here are some suggestions.
>
> **[0:18](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=18)** Use a switch instead of a push button, and a timer, and everything else is the same.
>
> **[0:25](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=25)** You can choose any rate for the timer preset value to toggle between the steps.
>
> **[0:32](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=32)** Give it a try, and then you can look at my suggested answer for adding a timer to the same process.
>
> **[0:39](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=39)** Note that your answer or program might be slightly different than the one you see in my suggested answer, and that is fine.
>
> **[0:48](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=48)** If your program works and achieves the same objective, then all methods can work.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=54)** Each PLC programmer has her or his own style or preferred way to program.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1), try, (1)
> **Env Vars:** plc (1)
> **UI Navigation:** toggle (1)
> **Warnings:** note that (1)
> **Speakers:** - ready (1)
> **Non-Speech:** (upbeat music) (1)

#### Motor and pilot lights solution
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=0)** - [Instructor] So folks, how did you feel about the challenge?
>
> **[0:09](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=9)** I have provided my suggestive solution in the exercise files so you can follow along.
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=16)** Your program might be different and that is fine.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=20)** I chose to do it this way.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=23)** I'm not going to go through the whole thing again because it's similar to the previous example.
>
> **[0:28](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=28)** Instead, I'm just going to highlight the differences.
>
> **[0:32](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=32)** You can see in my suggestive solution in one zero I used a switch and I added a timer with a very short time of rate for demo.
>
> **[0:45](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=45)** Then, in line one, I used the timer done bit to move between the steps to achieve the false to true run transition for the sequencer instruction.
>
> **[0:57](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=57)** Everything else in the Ladder Logic program is the same as the previous example.
>
> **[1:03](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=63)** Now to choose the switch, you can right-click on here and then you can toggle between the options that you have.
>
> **[1:10](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=70)** I'm going to choose a switch instead of a push button, and then I'll download the program and then hit run.
>
> **[1:18](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=78)** Notice here, nothing happens as soon as I turn on the switch.
>
> **[1:24](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=84)** Now the timer starts timing and the sequencer goes through the steps without me having to press on this switch again.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (5)
> **UI Navigation:** right-click (1), toggle (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. SQO Examples

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Example dishwasher sequence
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=0)** - [Narrator] Let's use a sequencer output instruction to control a more advanced operation.
>
> **[0:06](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=6)** A dishwasher cycle that has the following timed steps in its operation.
>
> **[0:12](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=12)** The design of the dishwasher cycle sequence involves soap, filling water, wash, drain and dry.
>
> **[0:22](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=22)** Start and stop push buttons are used to enable and disable the dishwasher operation.
>
> **[0:28](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=28)** And each step takes 30 seconds within the dishwasher cycle process.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=34)** The 30 second is used to demo only.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=37)** In real design, you need to keep a more reasonable number between the steps.
>
> **[0:41](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=41)** 30 seconds obviously isn't going to wash anything.
>
> **[0:45](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=45)** The sequence goes this way, step one is to fill in water, wash and then drain, then dispense the soap, for step two.
>
> **[0:55](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=55)** For step three, fill, wash, drain doing this again.
>
> **[1:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=60)** Step four, fill, wash, drain, another round.
>
> **[1:04](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=64)** Finally, the last step, step five, is dry.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Speakers:** - [narrator] (1)

#### Dishwasher sequence truth table
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=0)** - [Instructor] For building the truth table for this process, I have outputs on the top of the table and I'll place the steps on the side.
>
> **[0:09](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=9)** In step one, fill, wash, drain are on so we place one for each one of the outputs.
>
> **[0:19](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=19)** The reason for putting them in different rows, or words, is that each output is activated separately.
>
> **[0:28](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=28)** If I place them in one row, meaning one word, so in this case, the fill, wash and drain will be all on at the same time, and this is not what we want.
>
> **[0:41](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=41)** We want the steps to happen sequentially, not on the same time, so we need to keep them in different words.
>
> **[0:50](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=50)** For step two, only soap is on.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=54)** For step three, fill, wash, drain are on, so we place ones under these outputs.
>
> **[1:01](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=61)** Step four, fill, wash, drain for the second time.
>
> **[1:05](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=65)** Finally, step five is dry.
>
> **[1:09](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=69)** And we place zeroes for the rest of the operation when they are off.
>
> **[1:15](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=75)** Notice that we have 11 steps, so the length is 11 that goes inside the instruction.
>
> **[1:22](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=82)** Now we know the sequence, we need to check for the mask.
>
> **[1:27](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=87)** Since we want only the first five bits, so the mask is 11,111.
>
> **[1:36](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=96)** That is 01f in hexa or 31 in decimal.
>
> **[1:42](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=102)** Or since I don't use the other bits, then I can keep them all one, making the mask this time as 65,535 in decimal or zero and the rest of them are f in hexa.
>
> **[1:58](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=118)** Now for the connection.
>
> **[2:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=120)** This is the way we connect the output signals for the dishwasher output valves.
>
> **[2:06](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=126)** Dry output is connected to output two, bit zero.
>
> **[2:11](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=131)** Drain valve is connected to output two, bit one, then wash, fill and soap.
>
> **[2:19](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=139)** The reason I connected them this way so that it matches the bit pattern that comes from the sequencer file.
>
> **[2:26](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=146)** The instruction, execute bit zero first, then one, two until bit 15.
>
> **[2:34](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=154)** So soap is for bit four that comes from the sequencer file.
>
> **[2:38](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=158)** Fill is for bit three, and so on for the rest of them.
>
> **[2:43](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=163)** You can certainly change the wiring of the outputs but you need to account for that when creating the bit pattern for the truth table.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### Dishwasher sequence ladder logic
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=0)** - [Instructor] For the sequencer instruction, the file is B three word zero, the mask is 01 F, the destination is the output module 0 two the control file is our six word zero, and the length is 11 because I want to count all the steps.
>
> **[0:22](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=22)** So I entered the truth table values to the binary bit table in the PLC, starting from be three words zero to be three words 11.
>
> **[0:36](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=36)** Always remember that the first one is where all is off.
>
> **[0:40](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=40)** So be three words zero, has old zeros.
>
> **[0:45](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=45)** Now for the ladder logic program, the first step is to have the start push button that energizes a Boolean bit.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=54)** I'm going to use this Boolean bit to start the timer and to stay Safe away from the bits off the dishwasher sequence process.
>
> **[1:05](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=65)** I'm going to choose be three words 17 bits zero, and I use it as a sealant instruction to keep the bits on.
>
> **[1:15](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=75)** Now I'm going to add an X IO instruction for the stop push button.
>
> **[1:21](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=81)** For the second run, I use the start bit to start the timer and adding an X IO instruction of the timer dump it so the timer restarts every 30 seconds while the start bid is true.
>
> **[1:38](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=98)** Now the next step is using the sequencer instruction.
>
> **[1:42](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=102)** Whenever the timer done bit is on this advanced is the sequencer from step zero to step one, and to the rest of the steps.
>
> **[1:51](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=111)** When the sequencer reaches step 11.
>
> **[1:53](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=113)** The sequencer control register, our six done bit is activated.
>
> **[1:59](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=119)** So I can use this bit to stop the operation of the dishwasher cycle by linking it to a Boolean bits.
>
> **[2:08](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=128)** I named it stop bit and I chose be three words 17 bit one, this bit, activate one the sequence is done, and I add that to the first trying to stop the start bit.
>
> **[2:24](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=144)** Now I can use the stop bit to reset the control file values back to position 01 the process is done.
>
> **[2:33](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=153)** Another option you can also add an external reset push button to reset the control bit.
>
> **[2:40](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=160)** This one however, is going to reset the sequencer instruction anytime regardless of the operation cycle.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### Dishwasher software demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=0)** Now we have the ladder logic program inside the simulation software.
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=5)** In the binary table I have the sequence all the way from B3, word zero to B3, word 11.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=15)** And for the start bit and stop bit I used word 17, so that's all the way over here.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=23)** For the dishwasher output signals, I'm using output two, zero all the way to output two, four.
>
> **[0:32](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=32)** And this is the way we connect them.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=34)** We have dry as connected to output two, zero.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=37)** Drain is connected to output two, one.
>
> **[0:40](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=40)** Wash is connected to output two, two.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=43)** Fill is output two, three.
>
> **[0:46](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=46)** And soap is output two, four.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=49)** You can choose any colors for the LEDs, I just choose them randomly.
>
> **[0:53](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=53)** I chose red for dry, green for drain, yellow for wash, green for fill, and for soap I chose yellow.
>
> **[1:06](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=66)** I'm going to go ahead and download.
>
> **[1:08](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=68)** Go online, download the program and then run the process.
>
> **[1:16](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=76)** Notice here, nothing happens because I need to press on the Start push button to start the dishwasher cycle.
>
> **[1:24](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=84)** So as soon as I press on the Start push button, the timer starts timing and the sequence starts with fill, wash, drain, then soap, fill, wash, drain again, then doing fill, wash, drain for the second round, and finally is the dry.
>
> **[1:50](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=110)** I'm going to go ahead and start the process again and I want to show you the Stop push button.
>
> **[1:56](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=116)** So this is the Start, this starts the process again.
>
> **[2:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=120)** Now when I press on the Stop push button, which is in input one, one, notice here that the sequencer stops, so this stops the steps until we press on Start again.
>
> **[2:15](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=135)** Once I press on Start push button again, it continues from where it was left off.
>
> **[2:21](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=141)** So we left it at position three, once I press on Start again, it takes off from step three and then the process continues.

> [!info]- Semantic Content
>
> **Exercise Files:** download the (1)

#### Dishwasher SQO challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980&t=0)** - [Instructor] Are you ready for another challenge?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980&t=8)** We know for our example, once we press on the stop push button, the process stops, but it keeps the current step.
>
> **[0:17](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980&t=17)** So the challenge now is to try to modify the process by adding another push button that actually forces the process to restart when needed.
>
> **[0:29](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980&t=29)** Now we have stop push button is to stop the current step, start push button is to continue where it left off and a restart push button is the one that actually restarts the process to step one, regardless of where it stopped.
>
> **[0:47](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980&t=47)** Give it a try and then go through the suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Dishwasher SQO solution
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=0)** - [Narrator] So, how did you feel about the challenge?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=8)** I have provided my suggested solution in the exercise files so you can follow along with me.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=15)** I'm not going to go through the whole thing again because it's similar to the previous example.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=20)** Instead I'm just going to highlight the differences.
>
> **[0:24](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=24)** You can see in my suggested solution in order to force the process to go back to step one, you're simply using a reset instruction.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=34)** So in rung four I use the restart push button as another way to reset the control file R640.
>
> **[0:44](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=44)** And I added an XIO instruction off the restart push button in the first rung, rung zero, in order to stop the process.

> [!info]- Semantic Content
>
> **Env Vars:** r640 (1), xio (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Traffic lights example
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=0)** - [Instructor] Here's another example where the sequencer is to be used to control traffic in two directions.
>
> **[0:07](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=7)** The first traffic lights control north and south.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=11)** And the second traffic lights control east and west.
>
> **[0:17](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=17)** Now, the lights on the traffic lights have the following output addresses.
>
> **[0:22](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=22)** For north and south, output two bit zero is for the red light.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=27)** Output two bit one is for the yellow light.
>
> **[0:31](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=31)** And output two bit two for green light.
>
> **[0:35](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=35)** And for east and west, output two bit three for the red light.
>
> **[0:40](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=40)** Bit four for yellow light.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=43)** And bit five for a green light.
>
> **[0:47](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=47)** So, the first three bits are for the north and south.
>
> **[0:50](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=50)** And the second set of bits are for the east and west.
>
> **[0:55](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=55)** The operation of the process can be summarized as following.
>
> **[1:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=60)** The first step is east and west green light is on, and the north, south red light is on.
>
> **[1:10](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=70)** Then, east and west yellow light is on, while the north and south red light is still on.
>
> **[1:18](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=78)** For the second part, when the east and west is red, then the north and south green light is on.
>
> **[1:26](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=86)** And finally, while still keeping east and west red light is on, the north and south yellow light is on.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Traffic light sequence truth table
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=0)** - [Instructor] The truth table for this sequence is as follows.
>
> **[0:04](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=4)** Step one, output two bit zero and output two bit five are on.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=11)** And we add them into the process truth table.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=15)** Step two, output two bit zero and output two bit four are on.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=23)** And we add them to the truth table as well.
>
> **[0:26](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=26)** The same thing applies for step three.
>
> **[0:30](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=30)** Output two, bit two and output two bit three are on.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=37)** And finally for step four, output two bit one and output two bit three are on.
>
> **[0:46](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=46)** After adding them to the truth table, we have four steps.
>
> **[0:51](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=51)** This makes the length for the sequencer, is four.
>
> **[0:56](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=56)** Then we take the values and we put them in the binary table.
>
> **[1:02](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=62)** We place them starting from B3 word one.
>
> **[1:07](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=67)** Now for the mask since we want the first six bits.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=72)** Then the mask parameter is three F in hexa, or 63 in decimal.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Traffic light ladder logic
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=0)** - [Instructor] The sequencer output instruction has the following parameters.
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=5)** The file is #B3:0, the mask is 03F, destination is output two, control file is R6, and finally, the length is four.
>
> **[0:19](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=19)** For the solution, I'm going to use a timer to achieve the false to true trigger to go through the sequencer steps of the traffic lights.
>
> **[0:29](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=29)** Any preset value for the timer can be used.
>
> **[0:32](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=32)** I used 30 seconds between the transition.
>
> **[0:36](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=36)** However, note that 30 seconds is short time, obviously.
>
> **[0:39](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=39)** It is used for demo only.
>
> **[0:42](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=42)** Then when the timer is done, the position on the sequencer instruction is incremented by one for each false to true transition of the sequencer run.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=54)** When the position parameter reaches four, the value in the length parameter, the done bit in the instruction is set to one.
>
> **[1:04](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=64)** On the next false to true transition on the run, the position parameter is automatically reset to one.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=72)** And the process keeps repeating by alternating between the traffic lights.
>
> **[1:17](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=77)** An optional addition if we need to reset the control bits, we can use a reset push button.
>
> **[1:24](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=84)** That takes us back to position zero if needed during the process.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Traffic light software demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=0)** - [Instructor] Here we have the ladder logic program in the simulation software.
>
> **[0:04](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=4)** We have the values of the truth table inside the binary table.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=10)** Taking from bit three, word zero to bit three, word four.
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=16)** Now for the LEDs of the traffic lights.
>
> **[0:19](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=19)** Try to match the colors to the one we have in the slides.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=23)** So north and south, we have the red in bit zero, yellow in bit one, and green in bit three.
>
> **[0:32](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=32)** East and west we have red in bit three, yellow in bit four, and green in bit five.
>
> **[0:39](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=39)** So you can simply change the color of the LEDs by right click, and then choose the corresponding colors for each one.
>
> **[0:48](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=48)** Now as soon as I download the program, I go online and download it, once I hit run, the process starts.
>
> **[0:58](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=58)** So go through the red and then green for the east and west, and then it toggles between the traffic lights.

> [!info]- Semantic Content
>
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Traffic light SQO challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=0)** (techno music)
>
> **[0:06](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=6)** - [Instructor] Excited for another challenge?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=8)** Let's program the traffic lights example but this time with variable time steps.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=15)** The timing is according to the chart you see on the screen.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=20)** For North and South, the red light is on for 30 seconds in the same time, the East and West green light is on for 25 seconds and the yellow light is on for five seconds.
>
> **[0:35](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=35)** Once that is done, the North and South green light is now on for 25 seconds and the yellow light is on for five seconds while the East and West red light is on for 30 seconds and the process keeps repeating.
>
> **[0:53](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=53)** This is a more advanced challenge so it might take you some time to solve it.
>
> **[0:58](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=58)** Maybe half an hour but this is part of learning.
>
> **[1:02](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=62)** To go through the development of the ladder logic program for more advanced scenarios.
>
> **[1:08](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=68)** And remember, in real world scenarios, you also need to account for all the devices within the process, like having different sensors, motors, etc.
>
> **[1:21](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=81)** Back to our challenge.
>
> **[1:22](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=82)** The new variable time steps are to keep track of the traffic lights according to the same scenario we had, but now having a time associated with each light.
>
> **[1:37](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=97)** Here are some tips to help you with this challenge.
>
> **[1:40](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=100)** Try using two sequencer output instructions, one, to keep track of the traffic lights as we did previously.
>
> **[1:49](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=109)** And the other one is for the time steps.
>
> **[1:54](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=114)** For the one that keeps track of the time steps enter the values directly to the binary table where you choose to keep the data.
>
> **[2:04](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=124)** For my suggested solution, I chose the bits from B three, worth 10 to B three worth 15.
>
> **[2:13](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=133)** Here's a hint, to save the data inside the binary table, you can change the way you see the numbers to decimal and enter the values in decimal.
>
> **[2:26](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=146)** Know that, the values you see on the screen are according to the timer base, which is zero point one.
>
> **[2:35](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=155)** Give it a try and you can look at my suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno music) (1)

#### Traffic light SQO solution
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=0)** - [Educator] So, how was the challenge?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=8)** Hope you enjoyed working on it.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=11)** I have provided you with a suggested solution in the exercise files so you can follow online with me.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=20)** In my solution you can see in rung zero, I used two sequencer output instructions.
>
> **[0:28](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=28)** One for the traffic lights and one for the variable time steps.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=34)** In the binary table you can see that starting from B3 word zero to B3 word four are for the traffic lights and B3 word 10 to B3 word 15 are for the time steps.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=54)** I changed the way I see the numbers by going here and I selected decimal in order to make it easier for me to enter the values for the time steps.
>
> **[1:05](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=65)** You can enter the value by simply just double-clicking on each value and insert the number you want to put.
>
> **[1:13](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=73)** I'll exit that window.
>
> **[1:15](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=75)** Now you can see in the second sequencer output instruction, I have the destination to be the timer preset value because I want the values of the variable time steps to be moved to the timer preset value to control the traffic lights.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=95)** So, we're using one timer for all the variable time steps and in this instruction, you can see that the length is four.
>
> **[1:46](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=106)** One thing to notice as well is that I used different control files for the two instructions.
>
> **[1:54](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=114)** R6 word zero and R6 word one.
>
> **[1:59](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=119)** And finally in rung two, you can see that I used the reset push button to rest the values of the two instructions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [educator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3.PLC Sequencer Compare Instruction (SQC)

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Sequencer compare instruction (SQC)
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=0)** - [Instructor] Sequencer Compare Instruction is an instruction that compares input data with a reference.
>
> **[0:09](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=9)** It is very similar to the Sequencer Output Instruction, but instead of a destination parameter, this instruction has a source parameter.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=20)** Everything else is the same: file, mask, control, length, and position.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=27)** It is an output instruction, so it is placed on the right-hand side of the rung.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=34)** It increments the position parameter with false-to-true run transition very similar to the Sequencer Output Instruction.
>
> **[0:44](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=44)** The Sequencer Compare Instruction can be used as a diagnostic tool.
>
> **[0:50](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=50)** For example, to determine if a machine has the correct signal with values in a register to start a production run.
>
> **[1:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=60)** So it is used to compare the status of a machine's input devices, on or off, with what is required for a normal operation.

> [!info]- Semantic Content
>
> **Analogies:** similar to (2), for example (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### Instruction SQC parameter
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=0)** - [Instructor] The sequencer compare instruction reads the input source data and compares it with the file data.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=10)** The source can be an input module or a register.
>
> **[0:14](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=14)** Then the instruction compares the input data to the set patterns that are stored in a big data file, B3, or integer data file and seven.
>
> **[0:26](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=26)** The sequencer compare instruction has an additional status bit in the control file.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=34)** The additional status bit is a found bit.
>
> **[0:38](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=38)** The found bit in the control data file indicates whether the data on the input port matches the data stored in the sequencer data file.
>
> **[0:50](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=50)** So, when the source pattern matches the sequencer file pattern, the found bit in the control data file is enabled, set to one.
>
> **[1:02](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=62)** It is zero under all other conditions.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Example: Three-machine products
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/example-three-machine-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-three-machine-products?u=76281980&t=0)** - [Narrator] Let's take this simple example to compare the status of an input from three machines.
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/example-three-machine-products?u=76281980&t=8)** Let's say that we have three production machines to produce products A, B, and C.
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/example-three-machine-products?u=76281980&t=16)** When two of the three machines are ready, they send a signal to the PLC and a green pilot flight turns on.
>
> **[0:26](https://www.linkedin.com/learning/plc-sequencer-logic/example-three-machine-products?u=76281980&t=26)** A reset push button is used to reset the values once all products have been removed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** plc (1)
> **Speakers:** - [narrator] (1)

#### Three-machine truth table
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=0)** - [Narrator] The first thing we do is to come up with a truth table for the sequence.
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=5)** This is the table we are going to use to compare the input data.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=11)** We have three machines.
>
> **[0:13](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=13)** For the truth table we need to put any two that are ready or when the three of them are ready.
>
> **[0:21](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=21)** For step one is when all are on, so simply placing one for each machine.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=27)** Then for step two is when two of the machines are on.
>
> **[0:31](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=31)** Let's say machine A and C.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=34)** And the same for the rest of the steps in any two combination.
>
> **[0:39](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=39)** Making the link four.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=43)** We take the values of the truth table and place them inside the binary table starting from #B3:0.
>
> **[0:51](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=51)** Remember that #B3:0 is when all is off so everything is zero.
>
> **[0:57](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=57)** The binary number for the mask is 0111.
>
> **[1:04](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=64)** Which means seven in hexa or seven in decimal.
>
> **[1:10](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=70)** The three machines are connected to input one.
>
> **[1:13](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=73)** So, the values that are coming from the machines are read in source and the instruction compares them to the ones inside the file #B3:0.
>
> **[1:26](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=86)** Here are the parameters, value inside the sequencer compare instruction.
>
> **[1:32](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=92)** File is #B3:0, mask is 7H.
>
> **[1:37](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=97)** Source is input one, control file is R6:1.
>
> **[1:42](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=102)** And finally the length is four.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Three-machine ladder logic
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=0)** - [Instructor] For the ladder logic solution, first, I'm going to use a timer to achieve the false to true transition for the sequencer compare instruction.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=10)** The timer is set to check every two seconds.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=15)** And using the timer done bit to reset it again.
>
> **[0:19](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=19)** Now the timer will keep timing as long as the products are not done yet, two or more machines.
>
> **[0:28](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=28)** So, I'm going to use an XIO instruction using the green pilot light in the same rung.
>
> **[0:36](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=36)** Then, adding the sequencer compare instruction in the second rung, and having the timer done bit in the same rung.
>
> **[0:45](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=45)** So the done bit helps to increment and move through the different steps.
>
> **[0:51](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=51)** Then using the found bit from the control file of the sequencer compare instruction to turn on the green light.
>
> **[1:00](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=60)** The found bit is on when the source values match the data inside the instruction file.
>
> **[1:08](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=68)** Finally, using the reset push button to reset the process when the products are removed.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Env Vars:** xio (1)
> **Speakers:** - [instructor] (1)

#### Three-machine software demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=0)** - [Instructor] For the demo, I'm going to use the switches to represent each machine.
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=5)** In order to get the switches, you can simply go here, and right click in order to toggle between the options.
>
> **[0:12](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=12)** So I'm going to go ahead and choose switch, for the first machine.
>
> **[0:17](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=17)** Switch for the second one.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=20)** And switch for the third machine.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=23)** And, in order to change the color of the LED, you go over here to output two zero, and then right click and change it to green.
>
> **[0:33](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=33)** Okay, I'm going to go ahead, go online and download the program.
>
> **[0:39](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=39)** As soon as I hit run, the timer starts timing, and the computer instruction starts to compare the values coming from the input.
>
> **[0:51](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=51)** So I'm going to go ahead and try to get one machine ready.
>
> **[0:58](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=58)** And then notice here that the green pilot light does not turn on because I need at least two.
>
> **[1:04](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=64)** So I'm going to go ahead and get the second machine ready.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=72)** And then you can notice here that the green pilot light turns on.
>
> **[1:17](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=77)** Now, once I remove the products, I go ahead to input one eight, which is the reset push button, and then I reset the values again.
>
> **[1:30](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=90)** And the process keeps repeating.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3)
> **Env Vars:** led (1)
> **UI Navigation:** toggle (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### SQC instruction challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=0)** Excited for this chapter challenge?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=8)** For our challenge this time, lets take the same dishwasher cycle example, and now when the sequence reaches step three "soap", lets add another pilot light, flashing during that time.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=23)** lets add another pilot light, flashing during that time.
>
> **[0:26](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=26)** I chose a yellow pilot light.
>
> **[0:29](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=29)** You can select any flashing rate for the yellow pilot light and you can certainly choose any other color.
>
> **[0:35](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=35)** I chose one that matches the one we had for the soap.
>
> **[0:41](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=41)** Soap is in step 4, and this is the pattern we need to use Soap is in step 4, and this is the pattern we need to use to compare two.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=49)** To indicate whether the flashing light is on or not.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=54)** So here are some tips that may help you with solving this challenge.
>
> **[0:59](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=59)** The first one is, take the bits pattern off the step that involves the soap, and store it in a binary file.
>
> **[1:10](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=70)** Use word file other than the ones we use for the dishwasher steps.
>
> **[1:16](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=76)** The second one If you need a refresher on how to achieve the flashing light, look up this video from the previous PLC course that explains using a timer to flash a light.
>
> **[1:31](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=91)** Last one, obviously this challenge is within the sequencer compare instruction section.
>
> **[1:37](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=97)** So maybe you need to think about using this instruction too.
>
> **[1:41](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=101)** Give it a try, and then you can look at my suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** try, (1)
> **Env Vars:** plc (1)
> **Non-Speech:** (upbeat music) (1)

#### SQC instruction solution
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=0)** (funky music)
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=5)** - [Instructor] How was the challenge this time?
>
> **[0:07](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=7)** A little bit different?
>
> **[0:09](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=9)** Hope you enjoyed working on it.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=11)** I have provided you with a suggested solution in the exercise files so you can follow along with me.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=20)** I'm going to go through my suggested solution, highlighting what I did to solve the challenge.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=27)** First, I saved the data of the binary number of the soap in B320.
>
> **[0:35](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=35)** So, I'll show you over here.
>
> **[0:36](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=36)** You go to the binary table.
>
> **[0:38](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=38)** And then I'll go all the way to B320.
>
> **[0:48](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=48)** Now, in line two, I added the sequencer compare instruction to compare the data coming from the source, output two, the outputs of the steps of the dishwasher sequence, and compare it to the soap bit pattern saved in file B320.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=72)** Note in the instruction, I have added the file to be B319, because as we know that the instruction always says the first word for step zero position.
>
> **[1:27](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=87)** Now, the length is one because I have just one word to compare it to.
>
> **[1:33](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=93)** Okay, I'll scroll down a little bit.
>
> **[1:38](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=98)** In line three, you can see the timers used for the flashing light.
>
> **[1:43](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=103)** Choose any rate you prefer for the timer pre-set value.
>
> **[1:48](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=108)** I chose a very short rate for demo.
>
> **[1:52](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=112)** In line four, I used the control file found bits of R61 from the compare instruction and the timer timing bit to achieve flashing light in output two, bit eight.
>
> **[2:09](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=129)** All right, I'm going to scroll down a little bit more.
>
> **[2:14](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=134)** Now, in line six, I have added an xio instruction of the found bit from the compare instructions so the instruction resets as long as we have not reached the soap step yet.
>
> **[2:31](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=151)** Because, I'm checking only for one word.
>
> **[2:35](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=155)** And finally, adding the reset push button to reset the control values of both instructions when needed.
>
> **[2:44](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=164)** Again, your answer program might be slightly different than the one you see in my suggested solution and that is fine.
>
> **[2:52](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=172)** If your program works and achieves the same objectives, then all methods can work.

> [!info]- Semantic Content
>
> **Env Vars:** b320 (3), b319 (1), r61 (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Code Keywords:** finally, (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (funky music) (1)


### 4. PLC Sequencer Load Instruction (SQL)

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Sequencer load instruction (SQL)
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=0)** - [Instructor] The sequencer load instruction, is used to read the PLC input module, and store the input data, in a file.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=10)** Simply, loading data into a file, one step at a time.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=15)** Example is using the sequencer load instruction, to read input data from machines, during designated time period.
>
> **[0:26](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=26)** The most common application, for the sequencer load instruction is for loading data registers.
>
> **[0:35](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=35)** The robot arm is an example for loading large number of input conditions, a two access robot part loader, is one type.
>
> **[0:46](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=46)** Load a logic program, using the sequencer load instruction could read the outputs of every sensor installed, at each part of the robotic arm, and move the sensor bit patterns, into a sequencer word file.
>
> **[1:03](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=63)** The procedure includes, manually moving, a robot to a home position and pressing a push button to make the sequencer load instruction true.
>
> **[1:14](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=74)** With all the sensors outputs connected to the same input word, the instruction, moves the values, of all sensors to a register.
>
> **[1:27](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=87)** This continuous for every position, until the completion of the robot motion cycle.
>
> **[1:34](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=94)** The result of the complete cycle, is a stored in a sequencer file.
>
> **[1:40](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=100)** And the sequence of the process can be used in, sequencer compare and sequencer output instruction pair, or a sequencer, input and sequencer output pair.
>
> **[1:54](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=114)** Sequencer load instruction can also be used, as a diagnostic tool, and or, for analysis purposes.
>
> **[2:02](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=122)** An example is to ensure that the process sequence, is following the proper steps, that we designed or sent out.
>
> **[2:11](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=131)** So every time the process runs the sequence, we load it into a file, using the sequencer load instruction, and save the data.
>
> **[2:20](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=140)** And we can run a regular analysis, weekly, monthly, to check that the process sequence is working fine, for a quality assurance.
>
> **[2:31](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=151)** Or if anything goes wrong during the process, we have a record of what actually was working.
>
> **[2:38](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=158)** So we can go and recheck the loading file, and see where it was different, for troubleshooting.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1), type. (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### Instruction (SQL) parameter
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980&t=0)** - [Instructor] The parameters for the sequencer load instruction are file, source, control, length, and position.
>
> **[0:09](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980&t=9)** There is no mask parameter.
>
> **[0:12](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980&t=12)** It is a word-to-file transfer without a mask.
>
> **[0:17](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980&t=17)** It is used to transfer data from source address into sequencer file on every false-to-true transition of the sequencer load instruction rung, basically loading into a file every time the instruction is true.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980&t=34)** This sequencer load instruction is an output instruction, so we place it on the right-hand side of the ladder logic.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Illustrate operation of SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=0)** - [Instructor] Here's an example to illustrate the operation of the sequencer load instruction.
>
> **[0:06](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=6)** Here, the instruction length is eight, so eight values moves from the source to the file.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=15)** The source is input two and the data move to file N7.
>
> **[0:21](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=21)** Eight words taken from N7 word zero to N7 word eight.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=27)** On each full citral transition author on the sequencer load instruction position is incremented by one.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=37)** In the table you see on the screen, you see that the source value is getting moved to position five.
>
> **[0:46](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=46)** When the instruction has reached position eight the length value, the done bit is set.
>
> **[0:53](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=53)** When the instruction has operated to the last position and has a true to false transition it resets to position one.
>
> **[1:05](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=65)** So in this case, on the next full citral transition, the instruction recycles to position one and the value of the input is moved into that location overriding whatever it has.
>
> **[1:21](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=81)** So we need to keep that in mind when programming.
>
> **[1:25](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=85)** The size of the file depends on the number of data needed to be stored, and that changes the length parameter accordingly.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=95)** The length is, the number of steps of the sequencer load file starting at position one

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **Speakers:** - [instructor] (1)

#### Example of SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=0)** - In this example, hypothetically, we are going to record, load the sequence of moving this robotic arm.
>
> **[0:09](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=9)** We have different sensors along the arm.
>
> **[0:12](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=12)** I chose 4 for simplicity.
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=16)** We are going to load the position of each sensor when I press on the record push button.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=23)** The sensors are connected to input 1, and data will be recorded every time the record push button is pressed.
>
> **[0:33](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=33)** Then sequence has load instruction, will read and record them in a data file B3.
>
> **[0:41](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=41)** The record push button is connected to input 3, bit 0.
>
> **[0:48](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=48)** The sequence will load instruction, replaces the manual loading of data into the file.
>
> **[0:55](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=55)** It copies the data directly from the source address to the sequencer file.
>
> **[1:01](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=61)** The length is determined by the amount of data needing to be loaded into the file.
>
> **[1:08](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=68)** So, I'll chose 10 different data sets to be recorded within the time selected.
>
> **[1:15](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=75)** When using Logic Simulation Software, the sensors are connected this way: sensor 1 is connected input 1, bit 1, sensor 2 to bit 2, sensor 3 to bit 3, and sensor 4 is connected to bit 4.

> [!info]- Semantic Content
>
> **Speakers:** - in (1)

#### SQL ladder logic
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=0)** The instruction has the following parameters: File is: B-3-0.
>
> **[0:06](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=6)** Source has values from input one.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=10)** Control is R6:0.
>
> **[0:13](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=13)** And the length is 10.
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=16)** I used the record push button to regulate when to load the data to the file, basically achieving the true to false transition.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=27)** For the same rung, adding an X-I-O instruction using the control DunBite: R-6 DunBite, to prevent the instruction from reloading the data to position one again.
>
> **[0:42](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=42)** Remember, that when the instruction has operated to the last position and has a true to false transition, it resets to position one.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=54)** Every time the sequencer load instruction is energized one word from the input module is being read and recorded in Data File B-3.
>
> **[1:07](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=67)** When ten words of data have been recorded the sequencer DunBite R6 word zero DunBite energizes.
>
> **[1:16](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=76)** Then an X-I-O instruction off the controlled DunBite and rung zero opens and stops the data recording process.
>
> **[1:26](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=86)** And I can use another push button to reset the sequencer load instruction control file when needed.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1)

#### SQL demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=0)** - [Instructor] So here we have the ladder logic program inside the simulation software.
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=5)** I'm going to use the switches from input one, bit one, to input one, bit four, to represent the sensors.
>
> **[0:15](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=15)** Okay, I'm going to go ahead and change them to switches.
>
> **[0:18](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=18)** So you right-click on here, in order to get a normally open switch.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=23)** And I don't really need the first one, so I'll just replace it back to push button.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=37)** So hypothetically, when the robot arm moves, the sensors associated with each angle turn on or off.
>
> **[0:47](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=47)** And they are presented by the switches we have here.
>
> **[0:50](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=50)** I'm going to go ahead and go online, download the program, and then click on run.
>
> **[0:59](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=59)** Then, I'll go to the binary table, over here, and I want you to see what happens once I press on the record push button.
>
> **[1:10](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=70)** Remember, we will start loading from this bit.
>
> **[1:15](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=75)** So now, I don't have any of the sensors moving.
>
> **[1:19](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=79)** So I'll go ahead and I'll turn on the first sensor, and maybe the second one.
>
> **[1:25](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=85)** And then I'll go to the record push button over here, and then I press on it.
>
> **[1:30](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=90)** Notice what happened to B3, word one.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=95)** So the data are being recorded into the file.
>
> **[1:39](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=99)** Now I'll move the robotic arm to a different position.
>
> **[1:42](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=102)** So maybe one and three and four.
>
> **[1:47](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=107)** I'll go again to the record push button, and then once I press it, the next set of data is being recorded.
>
> **[1:57](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=117)** So, you can check the binary table to see that the recording or loading is actually happening.
>
> **[2:06](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=126)** And, you can always reset the values back to the first one if you hit the second push button.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), right-click (1), click on (1)
> **Code Keywords:** switch (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (clicking) (1)

#### SQL instruction challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980&t=0)** - [Instructor] Ready for this chapter challenge?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980&t=8)** Can you use the same example, but this time, we need to turn on a record switch once, and the recording of data happens every five seconds.
>
> **[0:21](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980&t=21)** So the true-to-false transition is regulated by a timer.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980&t=27)** I suggested using a switch instead of a push button for simplicity.
>
> **[0:33](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980&t=33)** Give it a try, and you can check my suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), try, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### SQL instruction solution
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=0)** - [Instructor] So, how was the challenge?
>
> **[0:07](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=7)** Hope you enjoyed working on it.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=10)** I have provided you with a suggested solution in the Exercise Files so you can follow along with me.
>
> **[0:18](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=18)** You can see in rung zero I added a switch and a timer.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=23)** The timer preset value is five seconds.
>
> **[0:28](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=28)** And in run one, the timer dumpit is used to regulate the full (mumbles) transition for the load instruction.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=37)** Everything else is the same as the previous example.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Final Challenge

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Final challenge introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=0)** - For the final Challenge, I'm going to give you a scenario that incorporates everything we've learned so far.
>
> **[0:12](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=12)** And step it up a little bit because you're up to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=16)** I'm going to go through the scenario with you, state the requirements needed for the process and give you some tips on how to start the solution.
>
> **[0:25](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=25)** Give it a try and try to come up with the latter logic for this process.
>
> **[0:30](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=30)** Approach the solution the way you're comfortable with.
>
> **[0:34](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=34)** The way I usually start to solve any similar problem is simply grabbing pen and paper.
>
> **[0:40](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=40)** And as I always say to my students, even if you can get half the solution or make it halfway through, that is great.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=49)** Learning is gradual.
>
> **[0:51](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=51)** And by attempting to solve it yourself before looking to the suggested solution, you are working toward mastering the PLC programming skills you have.
>
> **[1:02](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=62)** All right folks, let's get started and have fun.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** plc (1)
> **Speakers:** - for (1)
> **Non-Speech:** (upbeat music) (1)

#### Car wash process
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=0)** - [Instructor] Now for our final challenge.
>
> **[0:03](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=3)** We want to develop a program to implement an automatic car wash process, and save the data for analysis.
>
> **[0:14](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=14)** The process is to the event-driven by the vehicle, that activates various limit switches, Limit Switch 1 to Limit Switch 6 along the tunnel for the car wash steps.
>
> **[0:30](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=30)** Let's go through the steps together, starting by the vehicle is connected to the conveyor chain both inside the car wash bay.
>
> **[0:42](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=42)** Limit Switch 1 turns on the water input valve, Limit Switch 2 turns on the soap release valve, which mixes with the water input valve to provide a wash spray.
>
> **[0:58](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=58)** Limit Switch 3 shuts off the soap valve and the water input valve remains on to rinse the vehicle.
>
> **[1:07](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=67)** Limit Switch 4 shuts off the water input valve and activates a hot wax valve.
>
> **[1:17](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=77)** Limit Switch 5 shuts off the hot wax valve and starts the air blower motor.
>
> **[1:25](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=85)** A flashing light is on indicating the process is almost done.
>
> **[1:32](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=92)** Finally, Limit Switch 6 shuts off the air blower and the vehicle exits the car wash.
>
> **[1:41](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=101)** Here are the steps for our process for the automatic car wash.
>
> **[1:47](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=107)** And the data for each step is to be saved into a file.
>
> **[1:53](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=113)** I'm going to choose 30 data sets to be loaded for our analysis part.
>
> **[1:59](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=119)** So the next step is to come up with a truth table for this process.
>
> **[2:04](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=124)** You can pause the video and try to come up with it and then continue to see what I have next.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (8), let (1), finally, (1), continue (1)
> **Speakers:** - [instructor] (1)

#### Car wash truth table
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=0)** - [Instructor] This is the truth table for the process we have.
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=5)** Step one, water valve is on.
>
> **[0:09](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=9)** Step two, both water and soap are on.
>
> **[0:14](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=14)** Step three, only water is on.
>
> **[0:18](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=18)** Step four, only hot wax valve is on.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=23)** Step five, only air blower motor is on.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=27)** And step six, all are off and the car exits.
>
> **[0:33](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=33)** And everything else is zeros.
>
> **[0:36](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=36)** And this is the truth table for our current process.
>
> **[0:41](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=41)** Now for the connection.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=43)** This is the way I connected the output signals for the car wash outputs.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=49)** Air blower motor output is connected to output two bit zero.
>
> **[0:54](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=54)** Hot wax valve is connected to output two bit one.
>
> **[0:59](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=59)** Then soap and water valves.
>
> **[1:03](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=63)** The reason I connected them this way, so that it matches the bits pattern that comes from the sequencer file.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=72)** The instruction executes bit zero first, then one, two, until bit 15.
>
> **[1:20](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=80)** If you chose a different way to connect the outputs, that is fine.
>
> **[1:25](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=85)** Just keep in mind that the truth table for different outputs arrangement is different.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Car wash solution, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=0)** - [Instructor] So how was the final challenge?
>
> **[0:08](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=8)** Hope it was fun working on it.
>
> **[0:11](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=11)** I have provided you with a suggested solution in the exercise files so you can follow along with me.
>
> **[0:19](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=19)** First, for the carwash process, I have six steps.
>
> **[0:23](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=23)** So I have the values inside the Binary Table starting from B3 Word zero to B3 word six.
>
> **[0:33](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=33)** In rung zero, I have added the different limit switches as inputs to the sequencer output instruction.
>
> **[0:42](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=42)** This is to achieve the false to true transition for the instruction to move between the steps.
>
> **[0:49](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=49)** And for the same rung, having the sequencer compare instruction to compare the data to see when to get to step five in order to activate the flashing light.
>
> **[1:02](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=62)** I have saved the bits pattern for step five in B3 word 12.
>
> **[1:08](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=68)** The length in this instruction is one because I have only one word to compare it to.
>
> **[1:15](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=75)** In rung one, you can see the timers used for the flashing light.
>
> **[1:20](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=80)** Choose any rate you prefer for the timer preset value.
>
> **[1:24](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=84)** I chose a very short rate for demo.
>
> **[1:28](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=88)** All right, I'll scroll down a little bit more so we can see the rest of the program.
>
> **[1:34](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=94)** In rung two, I used the control file found bit from the compare instruction R61 and the timer timing bit to achieve flashing the light in output four, bit zero in rung three, using the reset push button and input three to reset the control files of the sequencer instructions above.

> [!info]- Semantic Content
>
> **Env Vars:** r61 (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Car wash solution, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=0)** - [Instructor] Now in rung 4, I have the sequence that load instruction to load the data of the process for analysis purposes.
>
> **[0:10](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=10)** The data will be loaded in the binary table staring from file B3, word 14.
>
> **[0:18](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=18)** And the source is the output values, because I want to load and save the actual outputs of the process.
>
> **[0:27](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=27)** The length is 30, because I want to load 30 data sets.
>
> **[0:33](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=33)** I have an XIC instruction of the controlled filed of the sequencer output instruction R60 enabled bit.
>
> **[0:43](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=43)** So, whenever the instruction is enabled, and the other instruction is an XIO instruction of the sequencer load control file R62 done bit.
>
> **[0:58](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=58)** In rung five, note that I chose to have another push button to reset the values of the load instruction, because I want to give the option of freezing this instruction when the analysis is done, and that it does not happen during the process.

> [!info]- Semantic Content
>
> **Env Vars:** xic (1), r60 (1), xio (1), r62 (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Sequencer things to consider
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=0)** - One of the things to consider is that this is a simulation software and has some limitations.
>
> **[0:07](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=7)** For example, in this software, we only have one binary table.
>
> **[0:12](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=12)** In other PLC softwares like Allen Bradley, we would have different files and different binary tables to save multiple data sets.
>
> **[0:22](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=22)** Also remember, this program is focused on demonstrating the use of the sequencer instructions.
>
> **[0:29](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=29)** It is not a complete PLC ladder logic program, so don't program your carwash just yet.
>
> **[0:37](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=37)** If we're designing this for real, then we need to consider the different possible scenarios that might happen during the process, like what would happen if a car moves backwards a step or one of the limit switches breaks down?
>
> **[0:52](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=52)** These are things that are important to include in designing the PLC ladder logic program.
>
> **[0:59](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=59)** But this example is a good practice for learning and understanding the sequencer instructions.
>
> **[1:06](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=66)** Feel free to go back and try it in a different way if you want and see what you come up with.

> [!info]- Semantic Content
>
> **Env Vars:** plc (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Speakers:** - one (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980&t=0)** - Thanks for taking the time to join me in this course.
>
> **[0:03](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980&t=3)** If you would like to learn more, I encourage you to dive into the documentation for each manufacturer of the specific PLC device you're currently working with.
>
> **[0:14](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980&t=14)** This gives you a more in-depth knowledge of the specific device you're working with.
>
> **[0:20](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980&t=20)** If you're interested in understanding more about PLCs and how they fit within the field of industrial automation, check out my other course on industrial automation that goes through each level of the automation field.
>
> **[0:35](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980&t=35)** I hope this course gave you an opportunity to continue learning more about PLC Lotto Logic and to dive in deeper into the world of PLC Lotto Logic programming.

> [!info]- Semantic Content
>
> **Env Vars:** plc (3)
> **Code Keywords:** continue (1)
> **Documentation:** the documentation (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Zahraa Khalil]]

## Resources

- Exercise files available

## Skills Covered

- PLC Ladder Logic

## Path Context

### In [[Become a PLC Developer]]
← [[PLC Memory Organization]] | **5 of 7** | [[PLC Program Flow and Control Instructions]] →

## Appears In

- [[Become a PLC Developer]]

## Related Courses

_Courses sharing skills:_

- [[PLC Program Flow and Control Instructions]] — PLC Ladder Logic
- [[Learning PLC Ladder Logic- 1 The Basics]] — PLC Ladder Logic

---

[↑ Back to top](#)