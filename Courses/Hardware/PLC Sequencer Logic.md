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
  - '[Become a PLC Developer](../../Paths/Hardware/Learning%20Paths/Become%20a%20PLC%20Developer.md)'
prev_courses:
  - '[PLC Memory Organization](PLC%20Memory%20Organization.md)'
next_courses:
  - '[PLC Program Flow and Control Instructions](PLC%20Program%20Flow%20and%20Control%20Instructions.md)'
path_nav: '[{"path":"Become a PLC Developer","position":5,"total":7,"prev":"PLC Memory Organization","next":"PLC Program Flow and Control Instructions"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - skill/plc-ladder-logic
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/PLC%20Sequencer%20Logic.md)

![PLC Sequencer Logic](https://media.licdn.com/dms/image/v2/C4E0DAQFSNTNumnDGdg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1581532514983?e=2147483647&amp;v=beta&amp;t=3hKY0PVYyLRk2oM7Y6IUJwTjgBKWThfQNbbmcFMU37M)

# PLC Sequencer Logic

> Sequence processes are common in manufacturing and used often in ladder logic, the popular language for programming major PLC devices. In this practical course, instructor Zara Khalil demonstrates how to use sequencer instructions in PLC ladder logic programming. To help lend each concept a real-world context, Zara shares practical examples involving everything from traffic lights to dishwashers. 

> [LinkedIn Learning](https://www.linkedin.com/learning/plc-sequencer-logic) | 1h 26m | Advanced | 183K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Getting to know PLC sequencers](#getting-to-know-plc-sequencers)
  - [What you should know before watching](#what-you-should-know-before-watching)
  - [LogixPro PLC Simulator software](#logixpro-plc-simulator-software)
- [**1. PLC Sequencer Output Instruction (SQO)**](#1-plc-sequencer-output-instruction-sqo) (10 videos)
  - [Intro to sequencer instructions](#intro-to-sequencer-instructions)
  - [Sequencer output instruction (SQO)](#sequencer-output-instruction-sqo)
  - [SQO parameters, part 1](#sqo-parameters-part-1)
  - [SQO parameters, part 2](#sqo-parameters-part-2)
  - [SQO operation example](#sqo-operation-example)
  - [Example motor and pilot lights](#example-motor-and-pilot-lights)
  - [Ladder logic for motor and pilot lights](#ladder-logic-for-motor-and-pilot-lights)
  - [Motor and pilot lights software demo](#motor-and-pilot-lights-software-demo)
  - [Motor and pilot lights challenge](#motor-and-pilot-lights-challenge)
  - [Motor and pilot lights solution](#motor-and-pilot-lights-solution)
- [**2. SQO Examples**](#2-sqo-examples) (12 videos)
  - [Example dishwasher sequence](#example-dishwasher-sequence)
  - [Dishwasher sequence truth table](#dishwasher-sequence-truth-table)
  - [Dishwasher sequence ladder logic](#dishwasher-sequence-ladder-logic)
  - [Dishwasher software demo](#dishwasher-software-demo)
  - [Dishwasher SQO challenge](#dishwasher-sqo-challenge)
  - [Dishwasher SQO solution](#dishwasher-sqo-solution)
  - [Traffic lights example](#traffic-lights-example)
  - [Traffic light sequence truth table](#traffic-light-sequence-truth-table)
  - [Traffic light ladder logic](#traffic-light-ladder-logic)
  - [Traffic light software demo](#traffic-light-software-demo)
  - [Traffic light SQO challenge](#traffic-light-sqo-challenge)
  - [Traffic light SQO solution](#traffic-light-sqo-solution)
- [**3.PLC Sequencer Compare Instruction (SQC)**](#3plc-sequencer-compare-instruction-sqc) (8 videos)
  - [Sequencer compare instruction (SQC)](#sequencer-compare-instruction-sqc)
  - [Instruction SQC parameter](#instruction-sqc-parameter)
  - [Example: Three-machine products](#example-three-machine-products)
  - [Three-machine truth table](#three-machine-truth-table)
  - [Three-machine ladder logic](#three-machine-ladder-logic)
  - [Three-machine software demo](#three-machine-software-demo)
  - [SQC instruction challenge](#sqc-instruction-challenge)
  - [SQC instruction solution](#sqc-instruction-solution)
- [**4. PLC Sequencer Load Instruction (SQL)**](#4-plc-sequencer-load-instruction-sql) (8 videos)
  - [Sequencer load instruction (SQL)](#sequencer-load-instruction-sql)
  - [Instruction (SQL) parameter](#instruction-sql-parameter)
  - [Illustrate operation of SQL](#illustrate-operation-of-sql)
  - [Example of SQL](#example-of-sql)
  - [SQL ladder logic](#sql-ladder-logic)
  - [SQL demo](#sql-demo)
  - [SQL instruction challenge](#sql-instruction-challenge)
  - [SQL instruction solution](#sql-instruction-solution)
- [**5. Final Challenge**](#5-final-challenge) (6 videos)
  - [Final challenge introduction](#final-challenge-introduction)
  - [Car wash process](#car-wash-process)
  - [Car wash truth table](#car-wash-truth-table)
  - [Car wash solution, part 1](#car-wash-solution-part-1)
  - [Car wash solution, part 2](#car-wash-solution-part-2)
  - [Sequencer things to consider](#sequencer-things-to-consider)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting to know PLC sequencers](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/getting-to-know-plc-sequencers?u=76281980&t=0)** - Have you ever wondered what a dishwasher, traffic lights, and food pack and processes have in common? All of these have a sequence of some kind. In manufacturing and industrial settings, [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) is often used to control machines that have a stepped sequence of repeatable operations. In this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, I'll explain a couple of the Sequencer instructions used in [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) programming like Sequencer output, compare, and load instructions. We will explore each instruction separately and go through examples with step-by-step solutions to better understand the concept. You will also see the examples in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). At the end of each chapter, I'll propose a challenge for you to work on. The last chapter is a challenge that includes all the instructions we worked on during this course. Hi, I'm Zharaa Khalil. I am an engineering instructor and I love teaching students just like you. Join me in my LinkedIn Learning course as we explore Sequencer instructions used in PLC ladder logic programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (2), [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) (1), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Env Vars:** plc (3)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - have (1)

#### [What you should know before watching](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/what-you-should-know-before-watching?u=76281980&t=0)** - This course focuses on Lotto Logic programming and going through sequential instructions specifically. So, before you start this course, you should be familiar with how Lotto Logic programming works, using basic instructions like how to use input and output instructions, and how timer instructions work. If you need a refresher on the basics of Lotto Logic programming, I recommend that you check out my other [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses so you're prepared for this course. Throughout the course, I'll be using Logix Pro [PLC](../../Glossary/Tool/PLC.md) simulator from Learning Pit. This [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) mimics Allen-Bradley Rockwell ARIS Logix 500. The simulation software is used to only demo the examples. The course does not teach specific software so you can apply the knowledge to any PLC software that uses Lotto Logic. Okay folks, let's get started and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (2), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** plc (2), aris (1)
> **Speakers:** - this (1)

#### [LogixPro PLC Simulator software](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/logixpro-plc-simulator-software?u=76281980&t=0)** - [Instructor] For this course I'll be using LogixPro [PLC](../../Glossary/Tool/PLC.md) Simulator from LearningPit. This [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) mimics Allen Bradley's Rockwell RSLogix 500. Please refer to this video LogixPro PLC Simulation Software where I go through the software and how to download it. The simulation software is used to only demo the examples. The course does not teach the software, as you can apply the knowledge to any PLC software that uses ladder logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (3), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (3)
> **Env Vars:** plc (3)
> **Speakers:** - [instructor] (1)


### 1. PLC Sequencer Output Instruction (SQO)

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to sequencer instructions](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/intro-to-sequencer-instructions?u=76281980&t=0)** - [Instructor] In most manufacturing and industrial settings the process is usually programmed to perform the same output pattern for a period of time. The sequencer instructions control a pre-determined sequence of events. They are instructions that control several outputs with multiple step patterns. So, they're often used to control machines that have a stepped sequence of repeatable operations. Sequencer instructions simplify the letter program by allowing you to use a single instruction or pair of instructions to perform complex operations. The generic sequencer instruction is usually a block type and has the following. The number of steps, file that has a starting register, destination register, step pointer for the current step, and how to control the sequence. The sequencer instructions are available on most PLCs. Even though the basic operating principle of the sequencer is the same regardless of the manufacturer. Each manufacturer, will have its own specific programming procedures for the sequencer instructions.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Sequencer output instruction (SQO)](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=0)** - [Instructor] One type of sequencer instruction is a Sequencer Output Instruction. It is a blog type instruction with a following parameters, File, Mask, Destination, Control, Length, and Position.
>
> **[0:18](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-output-instruction-sqo?u=76281980&t=18)** This instruction basically transfers data from the Sequencer Source File to the Output Destination Module through a mask. It is programmed as an output and placed on the right hand side of the rung. Each False-to-True wrong transition, causes the sequencer output instruction to increment to the next sequence step. The transition from false to true in the rung can be caused by two types of triggers. It can be either Event driven by something passing in front of a photo sensor, or a switch or can be Time driven, triggered or driven by a clock. Each sequencer uses 116 point output module. As the sequencer advances through its file, the stored data are transferred one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) at a time through a mask to the destination. Each word is a step, it represents output status bits for the current sequence or step. Each word gets sent to the output module to control whatever the bit is programmed to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [SQO parameters, part 1](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=0)** - [Instructor] Now, let's go through the sequencer output parameters. First, the file parameter, which defines the starting address of the sequencer file. The file contains the data that will be transferred to the destination when the instruction is true. The length parameter defines how many words are contained in the file. So the file gives the starting point while the length tells us how many words are needed for the steps. These two parameters are linked together. Let's use this example to simplify the concept. Data are stored in registers. Think about it as a file cabinet. File name is the drawer that contains that specific data we want to use. In this case, drawer one. And the length tells us how many sections are inside the drawer. So the file gives the starting point while the length tells us how many words are needed for the steps. And this is what we mean by the length parameter defines how many words are contained in the file. For example, if the file number is B three [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero we use file indicator hashtag or number sign and B is for binary.
>
> **[1:36](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=96)** Then, this is the beginning address of the sequencer file making B three word zero the starting point. Now, to know how many words are in this file the length parameter determines that. If the length is four words, this means that word B three word one, two, B three word four are for the steps. The first step, step zero, is where everything is off and it's called position zero, the startup position. This only activates at the beginning of the program when you download it. The length is the number of steps of the sequencer file starting at position one. So count after position zero, making the actual file length equals to one plus the length entered in the instruction. The instruction resets to position one at each cycle completion. And in order to go back to position zero, we can use a reset instruction to reset the values to step zero. The length always follows the starting address of the file. Here is another example. If the file starts from B three word 53 and the length is four, then the words are B three word 54
>
> **[3:13](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-1?u=76281980&t=193)** to B three word 57. Remember that we reserve the first word, B three word 53, for the startup position, step zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (10)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [SQO parameters, part 2](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=0)** - [Instructor] The destination parameter of the sequencer instruction is the output module address, the address of the output [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) or file. Due to the way in which the sequencer instruction operates all output points must be on a single output module. So the output devices controlled by one sequencer output instruction will be interfaced to a single 16-point output module. The sequencer output instruction executes the word as following: bit zero first, then bit one, and so on until bit 15. So depending on what you want to execute first the wiring connections and the bits' status change. So in this example on the screen, for step one bit zero execute first, followed by bit one and so on until bit 15. Here's another example. In step one, if we have two devices connected to bit zero and bit three, then bit zero is executed first followed by bit three. The mask parameter is the bit pattern through which the sequencer instruction moves source data to the destination. It is a hexadecimal value and if the mask bits
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=95)** are set to one, this means allow data to pass. And if the mask bits are set to zero, this means mask the data or restrict the passage. If you want to learn more about the mask and how it operates please refer to this video from the previous [PLC](../../Glossary/Tool/PLC.md) course. Control parameter is the address of the control file that contains the parameter with control information for the instruction. It is different than the file address. The control register file has three words: The status bits in word zero, sequencer file length in word one, and the current step of the sequence, the position, is in word two. Status bits are enable, indicating that the instruction is enabled, done bit is set after the last word in the sequencer file is transferred, and sequence error is set when the processor detects a negative position value or zero-length value. In Allen-Bradley, sequencer control parameter does not have a designated data file like a timer or a counter. We use T4 for timer and C5 for counter. So usually we use control file R6 for the control parameter. The control file address may be used only once
>
> **[3:13](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-parameters-part-2?u=76281980&t=193)** for each sequencer output instruction. So if we use multiple sequencer output instructions in a programming, then each has its own control file address. There are some cases where the same control file can be used for multiple instructions, for example if we have two sequencer output instructions and we want both instructions to step in unison to provide sequentially timed outputs. Finally, the last parameter is the position parameter which tells the current step the sequencer is operating. You can find the instruction using the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) under File Shift/Sequencer tab and you can find different sequencer instructions. We're looking for sequencer output instruction. And this is what the instruction looks like inside the simulation software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (6), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (2), [PLC](../../Glossary/Tool/PLC.md) (1)
> **CLI Commands:** find (2)
> **Env Vars:** plc (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [SQO operation example](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=0)** - [Instructor] Let's use an example to illustrate the operation of the sequencer output instruction. For the 16 points output module we can connect devices to each output port starting from output zero all the way to output 15. And according to the sequence we design we can group multiple outputs or devices together or activate outputs or devices separately or in different orders. For our example the sequence is as follows, for each step we energize four outputs. Step one, outputs zero, one, two, and three will be energized. Step two, outputs four, five, six, and seven. And step three, outputs eight, nine, 10, and 11 will be energized. So we have a total of three steps for the sequence process. And the number of the physical outputs used on the output module is 12 outputs out of the 16 outputs available. And now to program the sequencer instruction. Binary information, zeros or and ones are entered into the sequencer file for each step filling all the 16 bits for each step. We start with step zero, the start position. This is where all outputs are off so we place zeros for all 16 bits of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md).
>
> **[1:38](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=98)** And for step one outputs zero, one, two, and three will be energized. So bits zero to three will be one for step one. And the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is zero for all bits. Now when the instruction registers a false to true transition from the input instruction the sequencer will move to step one. And we usually refer to it as pointing to step one. Then the 16-bit word will be sent through a mask to pass or to block the data. The mask is usually chosen according to the bits needed to be passed or blocked. And after passing through the mask the 16 bit word output status is sent to the output module. So now the devices or lights that are connected to these outputs turn on. And the same thing happens when instruction registers a second false to true transition. Then it moves to step two where outputs four, five, six, and seven will be energized. And finally, for step three where outputs eighth, nine, 10, and 11 will be energized. This is what we call the truth table for the sequence process and the data are entered for each sequencer step according to the process sequence designed. Now when the position parameter reaches three
>
> **[3:15](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=195)** the value in the length parameter, meaning that all words would have been moved, so the done bit in the control file in the instruction is set to one. After step three and when the next false to true transition happens the sequencer instruction will return to step one. The instruction resets or wraps to position one at each cycle completion. The sequencer will continuously repeat the cycle until no additional input signals are registered. And this is the purpose of a sequencer where the process repeats without the need to restart the whole thing again. If we want to reset the sequencer instruction to position zero we can use a reset instruction to reset the values of the control file using for example an external device like a pushbutton or using an internal bit like the controller done bit to reset the control file value R6 word zero. One note on choosing the mask bits pattern. For our example we didn't have anything connected to the last four outputs. So we can choose a mask to pass all data by placing one for all 16 bits. However, if we have a case where one of the last outputs is connected to a device, let's say a fan is connected to output 14, or a motor.
>
> **[4:51](https://www.linkedin.com/learning/plc-sequencer-logic/sqo-operation-example?u=76281980&t=291)** Then our choice of the mask bits pattern needs to take into account the bit for output 14 by blocking any bit pattern that might affect the operation of the fan or the motor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Example motor and pilot lights](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=0)** - [Instructor] In this example, I'm going to use sequencer output instruction to control different outputs and develop the ladder of program for it. In this operation, a stop push button is used to start and move through the process, to turn on two motors and three pilot lights in a specific sequence. For this process, step one, all is off. Step two, motor one and motor two are on. Step three, red and green pilot lights are on. And step four, red and yellow pilot lights are on. Remember that the sequencer goes back to step one at each cycle completion. Note that all examples are used to demonstrate the operation of the instruction. Any live design needs to take into account all the specific devices and their behavior within the system. For example, motors need time to speed up and time to stop so you cannot physically turn them on or off instantly. And different motors behave differently. So keep that in mind when you design a real process. For our process, the sequencer file is B three [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero. So bit zero and bit one are used to control motor one and motor two. Bit two is for the green pilot light. Bit three is for the red pilot light.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=95)** And bit four is for the yellow pilot light. The startup position is position zero. This is only at the beginning of the process when you download the program into the [PLC](../../Glossary/Tool/PLC.md). Now, let's fill in the truth table for each step. Step one, where all is off. I chose to have it all off so at the repeat of each sequence cycle, everything goes off. So we place zeroes for all bits for step one. We know that for step two, motor one and motor two are on so we place ones for motor one and motor two and everything else is zero. Now for step three, red and green pilot lights are on so bit two and bit three are ones. And step four, red and yellow pilot lights are on so bit three and bit four are ones. Now you can see that I only used the low bits of the sequencer file. So in order to choose a mask to pass only these bits then the mask is either only placing ones for these values or if the other bits are already zeroes and we don't need the other ones, just place one for all bits to pass all data. So this makes the mask zero and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them
>
> **[3:10](https://www.linkedin.com/learning/plc-sequencer-logic/example-motor-and-pilot-lights?u=76281980&t=190)** are F in hexa or 65,535 in decimal. You can use any hexa to decimal or binary to hexa converter to find the conversion between the numbers. You notice that I gave you two ways to choose a mask for the data. Well, with work and depending on your preferred way of programming, you can choose either. I personally however like to only pass the data I want to deal with so I would choose mask two for my work to ensure that only the bits that are meant to program the outputs are passed to be kind of on the safe side. You don't want a motor to go on accidentally that you did not program it to do so. Now, in some of the examples in this course I chose mask one because it's easier to work with. You can just place ones for the bits and that works for learning how to do this. But in a real-world process, I prefer mask two personally.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [PLC](../../Glossary/Tool/PLC.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** plc (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Ladder logic for motor and pilot lights](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=0)** - [Instructor] Let's look at the ladder logic for our example. Now for the sequencer instruction in the software, we place the following values. The file is B3, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero, indicating the starting point for the file. The mask is zero, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them are Fs. The destination is the output module output two, the control file is R6 word 0, and the length is four because I want to count all the steps. Note in programming, using the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md), we need to place the pattern of the bits inside the binary bit table. Now, for the ladder logic. With each false-to-true transition of the run. Basically, pressing on the sub-push button. The sequencer moves to each step one at a time. So, one run and one sequencer instruction for the whole sequence process. We can use another push button that can reset the control file values to zero, or we can use the control done bit to reset the instruction. However, keep in mind that due to how fast the [PLC](../../Glossary/Tool/PLC.md) scans, the last step won't be visible, because as soon as the position reaches four, the done bit activates, and resets the value. So we can either increase the length to five, the last one will be zeros, so it won't effect the sequence,
>
> **[1:34](https://www.linkedin.com/learning/plc-sequencer-logic/ladder-logic-for-motor-and-pilot-lights?u=76281980&t=94)** or simply use another push button to reset the instruction when needed. When using the control file done bit, the reset of the file happens only at the end of the process, when the position parameter equals the length parameter. And, if you're using a reset push button to reset the position back to zero, it can happen at any stage during the process. Both methods reset the control file, but depending on what you want to do, you might choose one or the other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1), [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Motor and pilot lights software demo](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=0)** - [Instructor] So, now, we have the program in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). The first thing that I want you to know is we input the data of the truth table into the binary file. In order to get to the binary file, you go here, and you click on this button, and this will take us to the binary table. In order to get the binary file specifically, you go to the table, and then you choose the binary B3. Notice here you can also choose between representing the data in decimal, in binary, whatever you want to do. So, you go to binary, and then, here in the binary table, starting from B3 [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero, all the way to B3 word four, we enter the data that we have for the truth table. So the values we get from the truth table, I take them and I put them inside the binary table. In order to look at the data, you just double click on the specific bit you want, and then you enter the value into it and you press enter. So I'm going to go ahead and close the binary table. Now for demonstration purposes, I'm using LEDs to represent the motor and LEDs. So for motor one and motor two, I'm using the first LEDs in output two, zero, and output two one. And then for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the LEDs, the green, red, and yellow pilot lights, I'm using output two, bit two,
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-software-demo?u=76281980&t=95)** and this is green, and then output two, bit three for red, and then finally four yellow. So I'm going to go ahead and go online, download the software to the [PLC](../../Glossary/Tool/PLC.md), and then I will hit run. This is the step push button, so once I press on the step push button notice that the position is moving to position one. As soon as I press again, I'm going to step two. In step two, I have motor one and motor two are on. Step three, we have the green and red pilot lights. Step four, red and yellow pilot lights. And then once I press again, notice here that position goes back to step one. And in step one, I chose to have everything off, so you can see that none of the lights are on. I'll do it again, and if I want to reset the value of the control file, I can press on the reset push button, here, and then notice here that the position goes back to zero. And then I can start the whole process again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [PLC](../../Glossary/Tool/PLC.md) (1)
> **UI Navigation:** click on (2), go to (2)
> **Env Vars:** plc (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Motor and pilot lights challenge](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-challenge?u=76281980&t=0)** - Ready to try something yourself? For this same example, can you try solving the same process, but this time using a timer to go through the steps? Here are some suggestions. Use a switch instead of a push button, and a timer, and everything else is the same. You can choose any rate for the timer preset value to toggle between the steps. Give it a try, and then you can look at my suggested answer for adding a timer to the same process. Note that your answer or program might be slightly different than the one you see in my suggested answer, and that is fine. If your program works and achieves the same objective, then all methods can work. Each [PLC](../../Glossary/Tool/PLC.md) programmer has her or his own style or preferred way to program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **UI Navigation:** toggle (1)
> **Warnings:** note that (1)
> **Speakers:** - ready (1)
> **Non-Speech:** (upbeat music) (1)

#### [Motor and pilot lights solution](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/motor-and-pilot-lights-solution?u=76281980&t=0)** - [Instructor] So folks, how did you feel about the challenge? I have provided my suggestive solution in the exercise files so you can follow along. Your program might be different and that is fine. I chose to do it this way. I'm not going to go through the whole thing again because it's similar to the previous example. Instead, I'm just going to highlight the differences. You can see in my suggestive solution in one zero I used a switch and I added a timer with a very short time of rate for demo. Then, in line one, I used the timer done bit to move between the steps to achieve the false to true run transition for the sequencer instruction. Everything else in the Ladder Logic program is the same as the previous example. Now to choose the switch, you can right-click on here and then you can toggle between the options that you have. I'm going to choose a switch instead of a push button, and then I'll download the program and then hit run. Notice here, nothing happens as soon as I turn on the switch. Now the timer starts timing and the sequencer goes through the steps without me having to press on this switch again.

> [!info]- Semantic Content
>
> **UI Navigation:** right-click (1), toggle (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. SQO Examples

[↑ Back to Table of Contents](#table-of-contents)

#### [Example dishwasher sequence](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-dishwasher-sequence?u=76281980&t=0)** - [Narrator] Let's use a sequencer output instruction to control a more advanced operation. A dishwasher cycle that has the following timed steps in its operation. The design of the dishwasher cycle sequence involves soap, filling water, wash, drain and dry. Start and stop push buttons are used to enable and disable the dishwasher operation. And each step takes 30 seconds within the dishwasher cycle process. The 30 second is used to demo only. In real design, you need to keep a more reasonable number between the steps. 30 seconds obviously isn't going to wash anything. The sequence goes this way, step one is to fill in water, wash and then drain, then dispense the soap, for step two. For step three, fill, wash, drain doing this again. Step four, fill, wash, drain, another round. Finally, the last step, step five, is dry.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Dishwasher sequence truth table](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=0)** - [Instructor] For building the truth table for this process, I have outputs on the top of the table and I'll place the steps on the side. In step one, fill, wash, drain are on so we place one for each one of the outputs. The reason for putting them in different rows, or words, is that each output is activated separately. If I place them in one row, meaning one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), so in this case, the fill, wash and drain will be all on at the same time, and this is not what we want. We want the steps to happen sequentially, not on the same time, so we need to keep them in different words. For step two, only soap is on. For step three, fill, wash, drain are on, so we place ones under these outputs. Step four, fill, wash, drain for the second time. Finally, step five is dry. And we place zeroes for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the operation when they are off. Notice that we have 11 steps, so the length is 11 that goes inside the instruction. Now we know the sequence, we need to check for the mask. Since we want only the first five bits, so the mask is 11,111.
>
> **[1:36](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-truth-table?u=76281980&t=96)** That is 01f in hexa or 31 in decimal. Or since I don't use the other bits, then I can keep them all one, making the mask this time as 65,535 in decimal or zero and the rest of them are f in hexa. Now for the connection. This is the way we connect the output signals for the dishwasher output valves. Dry output is connected to output two, bit zero. Drain valve is connected to output two, bit one, then wash, fill and soap. The reason I connected them this way so that it matches the bit pattern that comes from the sequencer file. The instruction, execute bit zero first, then one, two until bit 15. So soap is for bit four that comes from the sequencer file. Fill is for bit three, and so on for the rest of them. You can certainly change the wiring of the outputs but you need to account for that when creating the bit pattern for the truth table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Speakers:** - [instructor] (1)

#### [Dishwasher sequence ladder logic](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=0)** - [Instructor] For the sequencer instruction, the file is B three [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero, the mask is 01 F, the destination is the output module 0 two the control file is our six word zero, and the length is 11 because I want to count all the steps. So I entered the truth table values to the binary bit table in the [PLC](../../Glossary/Tool/PLC.md), starting from be three words zero to be three words 11. Always remember that the first one is where all is off. So be three words zero, has old zeros. Now for the ladder logic program, the first step is to have the start push button that energizes a Boolean bit. I'm going to use this Boolean bit to start the timer and to stay Safe away from the bits off the dishwasher sequence process. I'm going to choose be three words 17 bits zero, and I use it as a sealant instruction to keep the bits on. Now I'm going to add an X IO instruction for the stop push button. For the second run, I use the start bit to start the timer and adding an X IO instruction of the timer dump it so the timer restarts every 30 seconds while the start bid is true.
>
> **[1:38](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sequence-ladder-logic?u=76281980&t=98)** Now the next step is using the sequencer instruction. Whenever the timer done bit is on this advanced is the sequencer from step zero to step one, and to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the steps. When the sequencer reaches step 11. The sequencer control register, our six done bit is activated. So I can use this bit to stop the operation of the dishwasher cycle by linking it to a Boolean bits. I named it stop bit and I chose be three words 17 bit one, this bit, activate one the sequence is done, and I add that to the first trying to stop the start bit. Now I can use the stop bit to reset the control file values back to position 01 the process is done. Another option you can also add an external reset push button to reset the control bit. This one however, is going to reset the sequencer instruction anytime regardless of the operation cycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [PLC](../../Glossary/Tool/PLC.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### [Dishwasher software demo](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=0)** Now we have the ladder logic program inside the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). In the binary table I have the sequence all the way from B3, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero to B3, word 11. And for the start bit and stop bit I used word 17, so that's all the way over here. For the dishwasher output signals, I'm using output two, zero all the way to output two, four. And this is the way we connect them. We have dry as connected to output two, zero. Drain is connected to output two, one. Wash is connected to output two, two. Fill is output two, three. And soap is output two, four. You can choose any colors for the LEDs, I just choose them randomly. I chose red for dry, green for drain, yellow for wash, green for fill, and for soap I chose yellow. I'm going to go ahead and download. Go online, download the program and then run the process.
>
> **[1:16](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-software-demo?u=76281980&t=76)** Notice here, nothing happens because I need to press on the Start push button to start the dishwasher cycle. So as soon as I press on the Start push button, the timer starts timing and the sequence starts with fill, wash, drain, then soap, fill, wash, drain again, then doing fill, wash, drain for the second round, and finally is the dry. I'm going to go ahead and start the process again and I want to show you the Stop push button. So this is the Start, this starts the process again. Now when I press on the Stop push button, which is in input one, one, notice here that the sequencer stops, so this stops the steps until we press on Start again. Once I press on Start push button again, it continues from where it was left off. So we left it at position three, once I press on Start again, it takes off from step three and then the process continues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Exercise Files:** download the (1)

#### [Dishwasher SQO challenge](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-challenge?u=76281980&t=0)** - [Instructor] Are you ready for another challenge? We know for our example, once we press on the stop push button, the process stops, but it keeps the current step. So the challenge now is to try to modify the process by adding another push button that actually forces the process to restart when needed. Now we have stop push button is to stop the current step, start push button is to continue where it left off and a restart push button is the one that actually restarts the process to step one, regardless of where it stopped. Give it a try and then go through the suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Dishwasher SQO solution](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/dishwasher-sqo-solution?u=76281980&t=0)** - [Narrator] So, how did you feel about the challenge? I have provided my suggested solution in the exercise files so you can follow along with me. I'm not going to go through the whole thing again because it's similar to the previous example. Instead I'm just going to highlight the differences. You can see in my suggested solution in order to force the process to go back to step one, you're simply using a reset instruction. So in rung four I use the restart push button as another way to reset the control file R640. And I added an XIO instruction off the restart push button in the first rung, rung zero, in order to stop the process.

> [!info]- Semantic Content
>
> **Env Vars:** r640 (1), xio (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Traffic lights example](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-lights-example?u=76281980&t=0)** - [Instructor] Here's another example where the sequencer is to be used to control traffic in two directions. The first traffic lights control north and south. And the second traffic lights control east and west. Now, the lights on the traffic lights have the following output addresses. For north and south, output two bit zero is for the red light. Output two bit one is for the yellow light. And output two bit two for green light. And for east and west, output two bit three for the red light. Bit four for yellow light. And bit five for a green light. So, the first three bits are for the north and south. And the second set of bits are for the east and west. The operation of the process can be summarized as following. The first step is east and west green light is on, and the north, south red light is on. Then, east and west yellow light is on, while the north and south red light is still on. For the second part, when the east and west is red, then the north and south green light is on. And finally, while still keeping east and west red light is on, the north and south yellow light is on.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Traffic light sequence truth table](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sequence-truth-table?u=76281980&t=0)** - [Instructor] The truth table for this sequence is as follows. Step one, output two bit zero and output two bit five are on. And we add them into the process truth table. Step two, output two bit zero and output two bit four are on. And we add them to the truth table as well. The same thing applies for step three. Output two, bit two and output two bit three are on. And finally for step four, output two bit one and output two bit three are on. After adding them to the truth table, we have four steps. This makes the length for the sequencer, is four. Then we take the values and we put them in the binary table. We place them starting from B3 [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) one. Now for the mask since we want the first six bits. Then the mask parameter is three F in hexa, or 63 in decimal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Speakers:** - [instructor] (1)

#### [Traffic light ladder logic](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-ladder-logic?u=76281980&t=0)** - [Instructor] The sequencer output instruction has the following parameters. The file is #B3:0, the mask is 03F, destination is output two, control file is R6, and finally, the length is four. For the solution, I'm going to use a timer to achieve the false to true trigger to go through the sequencer steps of the traffic lights. Any preset value for the timer can be used. I used 30 seconds between the transition. However, note that 30 seconds is short time, obviously. It is used for demo only. Then when the timer is done, the position on the sequencer instruction is incremented by one for each false to true transition of the sequencer run. When the position parameter reaches four, the value in the length parameter, the done bit in the instruction is set to one. On the next false to true transition on the run, the position parameter is automatically reset to one. And the process keeps repeating by alternating between the traffic lights. An optional addition if we need to reset the control bits, we can use a reset push button. That takes us back to position zero if needed during the process.

> [!info]- Semantic Content
>
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Traffic light software demo](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-software-demo?u=76281980&t=0)** - [Instructor] Here we have the ladder logic program in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). We have the values of the truth table inside the binary table. Taking from bit three, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero to bit three, word four. Now for the LEDs of the traffic lights. Try to match the colors to the one we have in the slides. So north and south, we have the red in bit zero, yellow in bit one, and green in bit three. East and west we have red in bit three, yellow in bit four, and green in bit five. So you can simply change the color of the LEDs by right click, and then choose the corresponding colors for each one. Now as soon as I download the program, I go online and download it, once I hit run, the process starts. So go through the red and then green for the east and west, and then it toggles between the traffic lights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Traffic light SQO challenge](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=0)** (techno music)
>
> **[0:06](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=6)** - [Instructor] Excited for another challenge? Let's program the traffic lights example but this time with variable time steps. The timing is according to the chart you see on the screen. For North and South, the red light is on for 30 seconds in the same time, the East and West green light is on for 25 seconds and the yellow light is on for five seconds. Once that is done, the North and South green light is now on for 25 seconds and the yellow light is on for five seconds while the East and West red light is on for 30 seconds and the process keeps repeating. This is a more advanced challenge so it might take you some time to solve it. Maybe half an hour but this is part of learning. To go through the development of the ladder logic program for more advanced scenarios. And remember, in real world scenarios, you also need to account for all the devices within the process, like having different sensors, motors, etc. Back to our challenge. The new variable time steps are to keep track of the traffic lights according to the same scenario we had, but now having a time associated with each light. Here are some tips to help you with this challenge.
>
> **[1:40](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-challenge?u=76281980&t=100)** Try using two sequencer output instructions, one, to keep track of the traffic lights as we did previously. And the other one is for the time steps. For the one that keeps track of the time steps enter the values directly to the binary table where you choose to keep the data. For my suggested solution, I chose the bits from B three, worth 10 to B three worth 15. Here's a hint, to save the data inside the binary table, you can change the way you see the numbers to decimal and enter the values in decimal. Know that, the values you see on the screen are according to the timer base, which is zero point one. Give it a try and you can look at my suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno music) (1)

#### [Traffic light SQO solution](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=0)** - [Educator] So, how was the challenge? Hope you enjoyed working on it. I have provided you with a suggested solution in the exercise files so you can follow online with me. In my solution you can see in rung zero, I used two sequencer output instructions. One for the traffic lights and one for the variable time steps. In the binary table you can see that starting from B3 [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero to B3 word four are for the traffic lights and B3 word 10 to B3 word 15 are for the time steps. I changed the way I see the numbers by going here and I selected decimal in order to make it easier for me to enter the values for the time steps. You can enter the value by simply just double-clicking on each value and insert the number you want to put. I'll exit that window. Now you can see in the second sequencer output instruction, I have the destination to be the timer preset value because I want the values of the variable time steps to be moved to the timer preset value to control the traffic lights.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/traffic-light-sqo-solution?u=76281980&t=95)** So, we're using one timer for all the variable time steps and in this instruction, you can see that the length is four. One thing to notice as well is that I used different control files for the two instructions. R6 word zero and R6 word one. And finally in rung two, you can see that I used the reset push button to [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) the values of the two instructions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [educator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3.PLC Sequencer Compare Instruction (SQC)

[↑ Back to Table of Contents](#table-of-contents)

#### [Sequencer compare instruction (SQC)](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-compare-instruction-sqc?u=76281980&t=0)** - [Instructor] Sequencer Compare Instruction is an instruction that compares input data with a reference. It is very similar to the Sequencer Output Instruction, but instead of a destination parameter, this instruction has a source parameter. Everything else is the same: file, mask, control, length, and position. It is an output instruction, so it is placed on the right-hand side of the rung. It increments the position parameter with false-to-true run transition very similar to the Sequencer Output Instruction. The Sequencer Compare Instruction can be used as a diagnostic tool. For example, to determine if a machine has the correct signal with values in a register to start a production run. So it is used to compare the status of a machine's input devices, on or off, with what is required for a normal operation.

> [!info]- Semantic Content
>
> **Analogies:** similar to (2), for example (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### [Instruction SQC parameter](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sqc-parameter?u=76281980&t=0)** - [Instructor] The sequencer compare instruction reads the input source data and compares it with the file data. The source can be an input module or a register. Then the instruction compares the input data to the set patterns that are stored in a [Big Data](../../Skills/Data%20Science/Big%20Data.md) file, B3, or integer data file and seven. The sequencer compare instruction has an additional status bit in the control file. The additional status bit is a found bit. The found bit in the control data file indicates whether the data on the input port matches the data stored in the sequencer data file. So, when the source pattern matches the sequencer file pattern, the found bit in the control data file is enabled, set to one. It is zero under all other conditions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example: Three-machine products](https://www.linkedin.com/learning/plc-sequencer-logic/example-three-machine-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-three-machine-products?u=76281980&t=0)** - [Narrator] Let's take this simple example to compare the status of an input from three machines. Let's say that we have three production machines to produce [products](../../Skills/Software%20Development/Microsoft%20Products.md) A, B, and C. When two of the three machines are ready, they send a signal to the [PLC](../../Glossary/Tool/PLC.md) and a green pilot flight turns on. A reset push button is used to reset the values once all products have been removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **Speakers:** - [narrator] (1)

#### [Three-machine truth table](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=0)** - [Narrator] The first thing we do is to come up with a truth table for the sequence. This is the table we are going to use to compare the input data. We have three machines. For the truth table we need to put any two that are ready or when the three of them are ready. For step one is when all are on, so simply placing one for each machine. Then for step two is when two of the machines are on. Let's say machine A and C. And the same for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the steps in any two combination. Making the link four. We take the values of the truth table and place them inside the binary table starting from #B3:0. Remember that #B3:0 is when all is off so everything is zero. The binary number for the mask is 0111. Which means seven in hexa or seven in decimal. The three machines are connected to input one. So, the values that are coming from the machines are read in source and the instruction compares them to the ones inside the file #B3:0. Here are the parameters, value inside the sequencer compare instruction. File is #B3:0, mask is 7H.
>
> **[1:37](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-truth-table?u=76281980&t=97)** Source is input one, control file is R6:1. And finally the length is four.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Speakers:** - [narrator] (1)

#### [Three-machine ladder logic](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-ladder-logic?u=76281980&t=0)** - [Instructor] For the ladder logic solution, first, I'm going to use a timer to achieve the false to true transition for the sequencer compare instruction. The timer is set to check every two seconds. And using the timer done bit to reset it again. Now the timer will keep timing as long as the [products](../../Skills/Software%20Development/Microsoft%20Products.md) are not done yet, two or more machines. So, I'm going to use an XIO instruction using the green pilot light in the same rung. Then, adding the sequencer compare instruction in the second rung, and having the timer done bit in the same rung. So the done bit helps to increment and move through the different steps. Then using the found bit from the control file of the sequencer compare instruction to turn on the green light. The found bit is on when the source values match the data inside the instruction file. Finally, using the reset push button to reset the process when the products are removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Env Vars:** xio (1)
> **Speakers:** - [instructor] (1)

#### [Three-machine software demo](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/three-machine-software-demo?u=76281980&t=0)** - [Instructor] For the demo, I'm going to use the switches to represent each machine. In order to get the switches, you can simply go here, and right click in order to toggle between the options. So I'm going to go ahead and choose switch, for the first machine. Switch for the second one. And switch for the third machine. And, in order to change the color of the LED, you go over here to output two zero, and then right click and change it to green. Okay, I'm going to go ahead, go online and download the program. As soon as I hit run, the timer starts timing, and the computer instruction starts to compare the values coming from the input. So I'm going to go ahead and try to get one machine ready. And then notice here that the green pilot light does not turn on because I need at least two. So I'm going to go ahead and get the second machine ready. And then you can notice here that the green pilot light turns on. Now, once I remove the [products](../../Skills/Software%20Development/Microsoft%20Products.md), I go ahead to input one eight, which is the reset push button, and then I reset the values again. And the process keeps repeating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** led (1)
> **UI Navigation:** toggle (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [SQC instruction challenge](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=0)** Excited for this chapter challenge? For our challenge this time, lets take the same dishwasher cycle example, and now when the sequence reaches step three "soap", lets add another pilot light, flashing during that time. lets add another pilot light, flashing during that time. I chose a yellow pilot light. You can select any flashing rate for the yellow pilot light and you can certainly choose any other color. I chose one that matches the one we had for the soap. Soap is in step 4, and this is the pattern we need to use Soap is in step 4, and this is the pattern we need to use to compare two. To indicate whether the flashing light is on or not. So here are some tips that may help you with solving this challenge. The first one is, take the bits pattern off the step that involves the soap, and store it in a binary file. Use [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) file other than the ones we use for the dishwasher steps. The second one If you need a refresher on how to achieve the flashing light, look up this video from the previous [PLC](../../Glossary/Tool/PLC.md) course that explains using a timer to flash a light. Last one,
>
> **[1:32](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-challenge?u=76281980&t=92)** obviously this challenge is within the sequencer compare instruction section. So maybe you need to think about using this instruction too. Give it a try, and then you can look at my suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **Non-Speech:** (upbeat music) (1)

#### [SQC instruction solution](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=0)** (funky music)
>
> **[0:05](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=5)** - [Instructor] How was the challenge this time? A little bit different? Hope you enjoyed working on it. I have provided you with a suggested solution in the exercise files so you can follow along with me. I'm going to go through my suggested solution, highlighting what I did to solve the challenge. First, I saved the data of the binary number of the soap in B320. So, I'll show you over here. You go to the binary table. And then I'll go all the way to B320.
>
> **[0:48](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=48)** Now, in line two, I added the sequencer compare instruction to compare the data coming from the source, output two, the outputs of the steps of the dishwasher sequence, and compare it to the soap bit pattern saved in file B320.
>
> **[1:12](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=72)** Note in the instruction, I have added the file to be B319, because as we know that the instruction always says the first [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for step zero position. Now, the length is one because I have just one word to compare it to. Okay, I'll scroll down a little bit. In line three, you can see the timers used for the flashing light. Choose any rate you prefer for the timer pre-set value. I chose a very short rate for demo. In line four, I used the control file found bits of R61 from the compare instruction and the timer timing bit to achieve flashing light in output two, bit eight. All right, I'm going to scroll down a little bit more. Now, in line six, I have added an xio instruction of the found bit from the compare instructions so the instruction resets as long as we have not reached the soap step yet. Because, I'm checking only for one word. And finally, adding the reset push button to reset the control values of both instructions when needed. Again, your answer program might be slightly different
>
> **[2:48](https://www.linkedin.com/learning/plc-sequencer-logic/sqc-instruction-solution?u=76281980&t=168)** than the one you see in my suggested solution and that is fine. If your program works and achieves the same objectives, then all methods can work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **Env Vars:** b320 (3), b319 (1), r61 (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (funky music) (1)


### 4. PLC Sequencer Load Instruction (SQL)

[↑ Back to Table of Contents](#table-of-contents)

#### [Sequencer load instruction (SQL)](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=0)** - [Instructor] The sequencer load instruction, is used to read the [PLC](../../Glossary/Tool/PLC.md) input module, and store the input data, in a file. Simply, loading data into a file, one step at a time. Example is using the sequencer load instruction, to read input data from machines, during designated time period. The most common application, for the sequencer load instruction is for loading data registers. The robot arm is an example for loading large number of input conditions, a two access robot part loader, is one type. Load a logic program, using the sequencer load instruction could read the outputs of every sensor installed, at each part of the robotic arm, and move the sensor bit patterns, into a sequencer [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) file. The procedure includes, manually moving, a robot to a home position and pressing a push button to make the sequencer load instruction true. With all the sensors outputs connected to the same input word, the instruction, moves the values, of all sensors to a register. This continuous for every position, until the completion of the robot motion cycle. The result of the complete cycle,
>
> **[1:37](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-load-instruction-sql?u=76281980&t=97)** is a stored in a sequencer file. And the sequence of the process can be used in, sequencer compare and sequencer output instruction pair, or a sequencer, input and sequencer output pair. Sequencer load instruction can also be used, as a diagnostic tool, and or, for analysis purposes. An example is to ensure that the process sequence, is following the proper steps, that we designed or sent out. So every time the process runs the sequence, we load it into a file, using the sequencer load instruction, and save the data. And we can run a regular analysis, weekly, monthly, to check that the process sequence is working fine, for a [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md). Or if anything goes wrong during the process, we have a record of what actually was working. So we can go and recheck the loading file, and see where it was different, for troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [PLC](../../Glossary/Tool/PLC.md) (1), [Quality Assurance](../../Skills/Software%20Development/Quality%20Assurance.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### [Instruction (SQL) parameter](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/instruction-sql-parameter?u=76281980&t=0)** - [Instructor] The parameters for the sequencer load instruction are file, source, control, length, and position. There is no mask parameter. It is a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md)-to-file transfer without a mask. It is used to transfer data from source address into sequencer file on every false-to-true transition of the sequencer load instruction rung, basically loading into a file every time the instruction is true. This sequencer load instruction is an output instruction, so we place it on the right-hand side of the ladder logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Illustrate operation of SQL](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=0)** - [Instructor] Here's an example to illustrate the operation of the sequencer load instruction. Here, the instruction length is eight, so eight values moves from the source to the file. The source is input two and the data move to file N7. Eight words taken from N7 [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero to N7 word eight. On each full citral transition author on the sequencer load instruction position is incremented by one. In the table you see on the screen, you see that the source value is getting moved to position five. When the instruction has reached position eight the length value, the done bit is set. When the instruction has operated to the last position and has a true to false transition it resets to position one. So in this case, on the next full citral transition, the instruction recycles to position one and the value of the input is moved into that location overriding whatever it has. So we need to keep that in mind when programming. The size of the file depends on the number of data needed to be stored, and that changes the length parameter accordingly.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/illustrate-operation-of-sql?u=76281980&t=95)** The length is, the number of steps of the sequencer load file starting at position one

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Speakers:** - [instructor] (1)

#### [Example of SQL](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/example-of-sql?u=76281980&t=0)** - In this example, hypothetically, we are going to record, load the sequence of moving this robotic arm. We have different sensors along the arm. I chose 4 for simplicity. We are going to load the position of each sensor when I press on the record push button. The sensors are connected to input 1, and data will be recorded every time the record push button is pressed. Then sequence has load instruction, will read and record them in a data file B3. The record push button is connected to input 3, bit 0. The sequence will load instruction, replaces the manual loading of data into the file. It copies the data directly from the source address to the sequencer file. The length is determined by the amount of data needing to be loaded into the file. So, I'll chose 10 different data sets to be recorded within the time selected. When using Logic [Simulation Software](../../Skills/Hardware/Simulation%20Software.md), the sensors are connected this way: sensor 1 is connected input 1, bit 1, sensor 2 to bit 2, sensor 3 to bit 3, and sensor 4 is connected to bit 4.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Speakers:** - in (1)

#### [SQL ladder logic](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-ladder-logic?u=76281980&t=0)** The instruction has the following parameters: File is: B-3-0. Source has values from input one. Control is R6:0. And the length is 10. I used the record push button to regulate when to load the data to the file, basically achieving the true to false transition. For the same rung, adding an X-I-O instruction using the control DunBite: R-6 DunBite, to prevent the instruction from reloading the data to position one again. Remember, that when the instruction has operated to the last position and has a true to false transition, it resets to position one. Every time the sequencer load instruction is energized one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) from the input module is being read and recorded in Data File B-3. When ten words of data have been recorded the sequencer DunBite R6 word zero DunBite energizes. Then an X-I-O instruction off the controlled DunBite and rung zero opens and stops the data recording process. And I can use another push button to reset the sequencer load instruction control file when needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)

#### [SQL demo](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=0)** - [Instructor] So here we have the ladder logic program inside the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). I'm going to use the switches from input one, bit one, to input one, bit four, to represent the sensors. Okay, I'm going to go ahead and change them to switches. So you right-click on here, in order to get a normally open switch. And I don't really need the first one, so I'll just replace it back to push button. So hypothetically, when the robot arm moves, the sensors associated with each angle turn on or off. And they are presented by the switches we have here. I'm going to go ahead and go online, download the program, and then click on run. Then, I'll go to the binary table, over here, and I want you to see what happens once I press on the record push button. Remember, we will start loading from this bit. So now, I don't have any of the sensors moving. So I'll go ahead and I'll turn on the first sensor, and maybe the second one. And then I'll go to the record push button over here, and then I press on it. Notice what happened to B3, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) one.
>
> **[1:35](https://www.linkedin.com/learning/plc-sequencer-logic/sql-demo?u=76281980&t=95)** So the data are being recorded into the file. Now I'll move the robotic arm to a different position. So maybe one and three and four. I'll go again to the record push button, and then once I press it, the next set of data is being recorded. So, you can check the binary table to see that the recording or loading is actually happening. And, you can always reset the values back to the first one if you hit the second push button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** go to (2), right-click (1), click on (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (clicking) (1)

#### [SQL instruction challenge](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-challenge?u=76281980&t=0)** - [Instructor] Ready for this chapter challenge? Can you use the same example, but this time, we need to turn on a record switch once, and the recording of data happens every five seconds. So the true-to-false transition is regulated by a timer. I suggested using a switch instead of a push button for simplicity. Give it a try, and you can check my suggested solution for this challenge.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [SQL instruction solution](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sql-instruction-solution?u=76281980&t=0)** - [Instructor] So, how was the challenge? Hope you enjoyed working on it. I have provided you with a suggested solution in the Exercise Files so you can follow along with me. You can see in rung zero I added a switch and a timer. The timer preset value is five seconds. And in run one, the timer dumpit is used to regulate the full (mumbles) transition for the load instruction. Everything else is the same as the previous example.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Final Challenge

[↑ Back to Table of Contents](#table-of-contents)

#### [Final challenge introduction](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/final-challenge-introduction?u=76281980&t=0)** - For the final Challenge, I'm going to give you a scenario that incorporates everything we've learned so far. And step it up a little bit because you're up to the challenge. I'm going to go through the scenario with you, state the requirements needed for the process and give you some tips on how to start the solution. Give it a try and try to come up with the latter logic for this process. Approach the solution the way you're comfortable with. The way I usually start to solve any similar problem is simply grabbing pen and paper. And as I always say to my students, even if you can get half the solution or make it halfway through, that is great. Learning is gradual. And by attempting to solve it yourself before looking to the suggested solution, you are working toward mastering the [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) skills you have. All right folks, let's get started and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** plc (1)
> **Speakers:** - for (1)
> **Non-Speech:** (upbeat music) (1)

#### [Car wash process](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=0)** - [Instructor] Now for our final challenge. We want to develop a program to implement an automatic car wash process, and save the data for analysis. The process is to the event-driven by the vehicle, that activates various limit switches, Limit Switch 1 to Limit Switch 6 along the tunnel for the car wash steps. Let's go through the steps together, starting by the vehicle is connected to the conveyor chain both inside the car wash bay. Limit Switch 1 turns on the water input valve, Limit Switch 2 turns on the soap release valve, which mixes with the water input valve to provide a wash spray. Limit Switch 3 shuts off the soap valve and the water input valve remains on to rinse the vehicle. Limit Switch 4 shuts off the water input valve and activates a hot wax valve. Limit Switch 5 shuts off the hot wax valve and starts the air blower motor. A flashing light is on indicating the process is almost done. Finally, Limit Switch 6 shuts off the air blower
>
> **[1:37](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-process?u=76281980&t=97)** and the vehicle exits the car wash. Here are the steps for our process for the automatic car wash. And the data for each step is to be saved into a file. I'm going to choose 30 data sets to be loaded for our analysis part. So the next step is to come up with a truth table for this process. You can pause the video and try to come up with it and then continue to see what I have next.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Car wash truth table](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-truth-table?u=76281980&t=0)** - [Instructor] This is the truth table for the process we have. Step one, water valve is on. Step two, both water and soap are on. Step three, only water is on. Step four, only hot wax valve is on. Step five, only air blower motor is on. And step six, all are off and the car exits. And everything else is zeros. And this is the truth table for our current process. Now for the connection. This is the way I connected the output signals for the car wash outputs. Air blower motor output is connected to output two bit zero. Hot wax valve is connected to output two bit one. Then soap and water valves. The reason I connected them this way, so that it matches the bits pattern that comes from the sequencer file. The instruction executes bit zero first, then one, two, until bit 15. If you chose a different way to connect the outputs, that is fine. Just keep in mind that the truth table for different outputs arrangement is different.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Car wash solution, part 1](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=0)** - [Instructor] So how was the final challenge? Hope it was fun working on it. I have provided you with a suggested solution in the exercise files so you can follow along with me. First, for the carwash process, I have six steps. So I have the values inside the Binary Table starting from B3 [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) zero to B3 word six. In rung zero, I have added the different limit switches as inputs to the sequencer output instruction. This is to achieve the false to true transition for the instruction to move between the steps. And for the same rung, having the sequencer compare instruction to compare the data to see when to get to step five in order to activate the flashing light. I have saved the bits pattern for step five in B3 word 12. The length in this instruction is one because I have only one word to compare it to. In rung one, you can see the timers used for the flashing light. Choose any rate you prefer for the timer preset value. I chose a very short rate for demo. All right, I'll scroll down a little bit more so we can see the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program.
>
> **[1:34](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-1?u=76281980&t=94)** In rung two, I used the control file found bit from the compare instruction R61 and the timer timing bit to achieve flashing the light in output four, bit zero in rung three, using the reset push button and input three to reset the control files of the sequencer instructions above.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** r61 (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Car wash solution, part 2](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/car-wash-solution-part-2?u=76281980&t=0)** - [Instructor] Now in rung 4, I have the sequence that load instruction to load the data of the process for analysis purposes. The data will be loaded in the binary table staring from file B3, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) 14. And the source is the output values, because I want to load and save the actual outputs of the process. The length is 30, because I want to load 30 data sets. I have an XIC instruction of the controlled filed of the sequencer output instruction R60 enabled bit. So, whenever the instruction is enabled, and the other instruction is an XIO instruction of the sequencer load control file R62 done bit. In rung five, note that I chose to have another push button to reset the values of the load instruction, because I want to give the option of freezing this instruction when the analysis is done, and that it does not happen during the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** xic (1), r60 (1), xio (1), r62 (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Sequencer things to consider](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/sequencer-things-to-consider?u=76281980&t=0)** - One of the things to consider is that this is a [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) and has some limitations. For example, in this software, we only have one binary table. In other [PLC](../../Glossary/Tool/PLC.md) softwares like Allen Bradley, we would have different files and different binary tables to save multiple data sets. Also remember, this program is focused on demonstrating the use of the sequencer instructions. It is not a complete [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) program, so don't program your carwash just yet. If we're designing this for real, then we need to consider the different possible scenarios that might happen during the process, like what would happen if a car moves backwards a step or one of the limit switches breaks down? These are things that are important to include in designing the PLC ladder logic program. But this example is a good practice for learning and understanding the sequencer instructions. Feel free to go back and try it in a different way if you want and see what you come up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (2), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1), [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Speakers:** - one (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-sequencer-logic/next-steps?u=76281980&t=0)** - Thanks for taking the time to join me in this course. If you would like to learn more, I encourage you to dive into the documentation for each manufacturer of the specific [PLC](../../Glossary/Tool/PLC.md) device you're currently working with. This gives you a more in-depth knowledge of the specific device you're working with. If you're interested in understanding more about PLCs and how they fit within the field of industrial automation, check out my other course on industrial automation that goes through each level of the automation field. I hope this course gave you an opportunity to continue learning more about PLC Lotto Logic and to dive in deeper into the world of PLC Lotto Logic programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (3)
> **Env Vars:** plc (3)
> **Documentation:** the documentation (1)
> **Speakers:** - thanks (1)


## Instructor

- [Zahraa Khalil](../../Instructors/Hardware/Zahraa%20Khalil.md)

## Resources

- Exercise files available

## Skills Covered

- PLC Ladder Logic

## Path Context

### In [Become a PLC Developer](../../Paths/Hardware/Learning%20Paths/Become%20a%20PLC%20Developer.md)
← [PLC Memory Organization](PLC%20Memory%20Organization.md) | **5 of 7** | [PLC Program Flow and Control Instructions](PLC%20Program%20Flow%20and%20Control%20Instructions.md) →

## Appears In

- [Become a PLC Developer](../../Paths/Hardware/Learning%20Paths/Become%20a%20PLC%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [PLC Program Flow and Control Instructions](PLC%20Program%20Flow%20and%20Control%20Instructions.md) — PLC Ladder Logic
- [Learning PLC Ladder Logic- 1 The Basics](Learning%20PLC%20Ladder%20Logic-%201%20The%20Basics.md) — PLC Ladder Logic

---

[↑ Back to top](#)