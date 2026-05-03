---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: plc-program-flow-and-control-instructions
url: "https://www.linkedin.com/learning/plc-program-flow-and-control-instructions"
duration_minutes: 43
duration: 43m
level: Advanced
updated: 7/15/2025
learners: 182590
skills:
  - PLC Ladder Logic
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH7WzdT8xZtLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1602860356984?e=2147483647&amp;v=beta&amp;t=nq9HIO7d69cXYHqEFwISzC0eSvcZDnHx6taNLhDK0YA"
linkedin_topic: Hardware
learning_paths:
  - '[[Become a PLC Developer]]'
prev_courses:
  - '[[PLC Sequencer Logic]]'
next_courses:
  - '[[PLC Simulation Software- Factory I-O with Connected Component Workbench]]'
path_nav: '[{"path":"Become a PLC Developer","position":6,"total":7,"prev":"PLC Sequencer Logic","next":"PLC Simulation Software- Factory I-O with Connected Component Workbench"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - skill/plc-ladder-logic
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/PLC%20Program%20Flow%20and%20Control%20Instructions.md)

![PLC Program Flow and Control Instructions](https://media.licdn.com/dms/image/v2/C4E0DAQH7WzdT8xZtLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1602860356984?e=2147483647&amp;v=beta&amp;t=nq9HIO7d69cXYHqEFwISzC0eSvcZDnHx6taNLhDK0YA)

# PLC Program Flow and Control Instructions

> Ladder logic is a common programming language used in industrial and manufacturing processes. The controller, using a programmable logic controller (PLC) program, specifies what action each device needs to perform. Many PLC operations follow linear sequences, but as you develop more complex applications, you also need to build more sophisticated logic into your projects. In this course, explore ad

> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions) | 43m | Advanced | 183K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [PLC program flow and control](#plc-program-flow-and-control)
  - [What you should know before watching](#what-you-should-know-before-watching)
- [**1. Bit Shift Register**](#1-bit-shift-register) (6 videos)
  - [Concepts of bits and words](#concepts-of-bits-and-words)
  - [Bit shift registers intro](#bit-shift-registers-intro)
  - [Bit shift register parameters](#bit-shift-register-parameters)
  - [BSL instruction (bit shift left)](#bsl-instruction-bit-shift-left)
  - [BSR instruction (bit shift right)](#bsr-instruction-bit-shift-right)
  - [BSL instruction demonstration](#bsl-instruction-demonstration)
- [**2. Word Shift Operations**](#2-word-shift-operations) (9 videos)
  - [Word shift operations intro](#word-shift-operations-intro)
  - [First in, first out (FIFO) instruction](#first-in-first-out-fifo-instruction)
  - [FFL (FIFO load) parameters, part 1](#ffl-fifo-load-parameters-part-1)
  - [FFL (FIFO load) parameters, part 2](#ffl-fifo-load-parameters-part-2)
  - [FFU (FIFO unload) parameters](#ffu-fifo-unload-parameters)
  - [Illustrate FIFO operation: Example](#illustrate-fifo-operation-example)
  - [Illustrate FFL operation, part 1](#illustrate-ffl-operation-part-1)
  - [Illustrate FFL operation, part 2](#illustrate-ffl-operation-part-2)
  - [Example program](#example-program)
- [**3. Program Flow Control Instructions**](#3-program-flow-control-instructions) (9 videos)
  - [Intro to program control instructions](#intro-to-program-control-instructions)
  - [Jump (JMP) to label (LBL) instructions](#jump-jmp-to-label-lbl-instructions)
  - [Master control rest (MCR) instruction](#master-control-rest-mcr-instruction)
  - [Difference between JMP and MCR](#difference-between-jmp-and-mcr)
  - [Introduction to subroutines](#introduction-to-subroutines)
  - [Jump to subroutine (JSR) instruction](#jump-to-subroutine-jsr-instruction)
  - [Subroutine (SBR) instruction](#subroutine-sbr-instruction)
  - [Return from subroutine (RET)](#return-from-subroutine-ret)
  - [Nested subroutines](#nested-subroutines)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [PLC program flow and control](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=1)** - [Zahraa] Very similar to a play, in manufacturing and industrial settings, every device, sensor, or machine needs to have a specific task to perform, all orchestrated to produce a certain outcome. The controller, using a [[PLC]] program, specifies what action each device needs to perform. [[PLC Ladder Logic]] is one of the common programming languages used in industrial and manufacturing processes. Although there are many types of PLC devices, the concepts of the language are the same. In this [[LinkedIn]] Learning course, we'll explore some of the advanced instructions of PLC Ladder Logic programming, including bit shift, [[Microsoft Word|word]] shift, MCR, Jump and Label, and sub-routine instructions. I'll explore each instruction separately by explaining its parameters and operation. I am Zahraa Kahlil. I am an engineering instructor, and I love teaching students just like you. Join me in my LinkedIn Learning course and explore the world of PLC Ladder Logic programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Ladder Logic]] (3), [[PLC]] (2), [[LinkedIn]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** plc (5), mcr (1)
> **Analogies:** similar to (1), just like (1)
> **Speakers:** - [zahraa] (1)

#### [What you should know before watching](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=0)** - [Instructor] Before you start this course, you should be familiar with how ladder logic programming works, knowing the basic instructions. This course introduces instructions that are used in advanced operations. Like bit shift, [[Microsoft Word|word]] shift instructions, master control resets, jump and label instructions, and the concept of subroutine and its instructions. I'll be using LogixPro [[PLC]] Simulator from LearningPit. This [[Simulation Software]] mimics Allen-Bradley's Rockwell RSLogix 500. This course is designed as a continuation of the learning path, Become a PLC Developer. If you need a refresher on the basics of programming, ladder logic, I recommend that you check Learning [[PLC Ladder Logic]] course so you are prepared for this one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[Microsoft Word|Word]] (1), [[Simulation Software]] (1), [[PLC Ladder Logic]] (1)
> **Env Vars:** plc (3)
> **Speakers:** - [instructor] (1)


### 1. Bit Shift Register

[↑ Back to Table of Contents](#table-of-contents)

#### [Concepts of bits and words](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=0)** - [Instructor] A basic requirement of [[PLC]] devices is to represent, store, and operate on numbers. Usually, PLCs work on binary numbers. So in general, anything that gets stored inside the PLC memory, is saved in binary formats. In a PLC, the processor memory consists of hundreds or thousands of storage locations. These locations, or registers, are referred to as words. Each [[Microsoft Word|word]] stores data in the form of binary digits, or bits. The number of bits that a word can store depends on the type of the PLC system being used. Each digit of a binary number is known as a bit. A bit is either a zero or one. If we have multiple bits in a binary number, the least significant bit, or LSB, represents the smallest value. The most significant bit, or MSB, represents the largest value. When we have eight bits, they are called a byte. Two bytes, or 16 bits, form a word, and usually this is how we refer to memory locations within a PLC. A double word is two 16 bit words, or 32 bits. PLC memory is organized using bytes,
>
> **[1:38](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=98)** single words, or double words.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (6), [[Microsoft Word|Word]] (4)
> **Env Vars:** plc (6), lsb (1), msb (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Bit shift registers intro](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=0)** - [Instructor] Bit shift register is an instruction that allows the shifting of bits through a single register or group of registers. Here is an illustration of the basic concept of a bit shift register. You can see a memory allocation for a 16-bit [[Microsoft Word|word]]. A shift pulse or a clock causes each bit in the shift register to move one position to the right in this case. Usually, bit shift registers are used when we want to track, for example, bottles on a status basis, zero or one, on and off. So it's often used in material handling processes where some form of binary information must be synchronized with a moving part on a conveyor. Here's a scenario using a shift register. We have bottles moving along on a conveyor belt. Data is collected using a sensor to track the presence and the absence of bottles. So every time there's a bottle, the sensor outputs a one, otherwise it outputs a zero. This data can then be loaded into a specific shift register allocation. The bit shift instruction is a block type instruction. The instruction has the following parameters: file, control, bit address, and length. It is an output instruction,
>
> **[1:37](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=97)** so it's placed on the right-hand side of the ladder logic. The instruction is activated every time it goes from false to true. You can program a shift register to shift data either to the right or to the left. And hence there are two types of shift instructions, bit shift left and bit shift right. Both instructions have the same parameters. The difference is the direction in which the bits are moved. In the [[Simulation Software]], you can find the bit shift register instructions over here if you scroll to the right until you find the tab file shift sequencer, and then you can find the two instructions, BSL and BSR.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Simulation Software]] (1)
> **Definitions:** is an  (3), is a  (1)
> **CLI Commands:** find (3)
> **Env Vars:** bsl (1), bsr (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Bit shift register parameters](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=0)** - [Teacher] The two instructions, BSL and BSR have the same parameters. The first parameter, file is the address location. Simply, the file to shift the data in. The address must start with the hashtag sign. An example is B3:10, which means binary file three [[Microsoft Word|word]] 10 starting from bit zero. Any remaining bits in this word cannot be used all swear in the program because the instruction invalidates them. The second parameter, bit address, is the interest of the source bit. It could be an internal or external address. Here's an example. A sensor is connected to input one, bit one. So this is the source of the bit and it's being shifted side B3 word 10. The length parameter indicates the number of bits to be shifted or the file length in bits, whether using the whole word or couple of bits within a word. The control parameter is the address of the control file which monitors and controls the shift instruction. It is a three-word element that consists of, the status word, the length and the position. In the control register,
>
> **[1:33](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=93)** two status bits can be seen with instruction. The enabled bit is activated when the instruction is on. The done bit is when the instruction has shifted all bits as is specified by the length. The other status bits are error and unload bits. I will discuss more about unload bits in another video within this course. You can refer to this manual for Allen-Bradley [[PLC]] page 536 to check the status bits of the control file for bit shift register.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7), [[PLC]] (1)
> **Env Vars:** bsl (1), bsr (1), plc (1)
> **Ports:** :10 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [teacher] (1)

#### [BSL instruction (bit shift left)](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=0)** - [Tutor] The bit shift left instruction shifts the bits to the left once for every low to high transition on its inputs, the shifting starts from the least significant bit address of the [[Microsoft Word|word]]. To show the operation of the instruction, I will use our previous example of detecting the presence and absence of bottles, the file is #B3:0 , the control file is R6:0, the bit address source is the address of the sensor input 1:1, I'm going to choose six for the file length, meaning I will log and shift only six bits within the file. When the instruction is enabled, goes from false to true, the BSL instruction starts at bit zero, taking the data coming from the sensor bit and put it in B3:0. Now let's say after a while, the file contains several values. Now, when the bits from input one comes, let's say we have value of one coming in, the last bit is shifted out of the array and stored in the unknown bits and the remaining bits are shifted to the left. So the data in bit five is lost. Unless additional programming is done
>
> **[1:35](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=95)** to retain the data, the remaining bits of the word six to 15 are invalid. This is what the table looks like before the shifting and after shifting the bits to the left. Sometimes in different [[PLC]] software, you might see the bits still shifting within the word beyond the length indicated. That is fine, because the operation is still the same. And the ones related to the shifting instruction are only within the specified length. Again, it's always a good practice to check the documentation of the specific PLC you're working with

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[PLC]] (2)
> **Env Vars:** plc (2), bsl (1)
> **Documentation:** the documentation (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [tutor] (1)

#### [BSR instruction (bit shift right)](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=0)** - [Instructor] Bit shifts right instruction shifts the bits in the data file to the right once for every low to high transition. The shifting starts from the most significant bit address of the [[Microsoft Word|word]]. Using the same previous example, when the instruction is enabled, goes from false to true. The BSR instruction starts at bit five. Since the length is six, taking the data coming from the sensor bit address, input one, bit one. The operation is the same for both instructions. The difference is only in the direction. This is how the table looks like before the shifting and after shifting of the bits to the right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** bsr (1)
> **Speakers:** - [instructor] (1)

#### [BSL instruction demonstration](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=0)** - In this demo, you can see in the first run, I have a switch to generate a status bit. I'm trying to mimic the presence and the absence of bottles. In the second drawing, a push button is used to load the data into the BSL instruction. I'm going to go ahead and go online, download the program, and then click on run. And before I do anything, I'll click on that data table to see the bits inside the file. So you go over here, click on data table. I'll move it little bit to the side and notice in the BSL instruction, the file is B3 zero. So we are going to load the data inside B3 [[Microsoft Word|word]] zero, starting from bit zero. All right, I'm going to go ahead and press on the switch to turn the switch on. So once I have the switch on, meaning that there is a bottle in front of the sensor, I'm going to go ahead and load the data inside the file. So as soon as I press on input one bits one, the data will be loaded inside B3, word zero. You notice, loading the data starts at bit zero. I'm going to go ahead and generate another bit. So I'll turn off the switch,
>
> **[1:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=94)** and then I'll press on load again. And notice what happens is that the bit is being shifted to the left and the same thing happens for all the bits that get generated through the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **UI Navigation:** click on (3), switch to (2)
> **Env Vars:** bsl (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)


### 2. Word Shift Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Word shift operations intro](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=0)** - [Tutor] [[Microsoft Word|Word]] shifting operation provides a simpler method of loading and unloading data into a file. Now the word shifting operates this way, rather than shifting bits of information within a word, it shifts the data from a complete word into a file or stack. Two separate shift pulses are required, one to shift data into the file, (load), and one to shift data out of the file, (unload). The movement of data in and out of the file, for word shifting, operates in two ways. The first one is called First In, First Out instruction, (FIFO). The first word enters the file is the first one out. The second instruction, which has the opposite principle is Last In, First Out (LIFO). The last word entered is the first one out. A useful analogy to understand the two types of word shifting instructions is a pile of work on your desk. Let's say a new work arrives, you drop the paper on the top of the stack you already have. If your stack is FIFO, then you pick your work from the bottom of the pile, because you want to use the first one that was placed on your desk. The first one in is the first one out.
>
> **[1:37](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=97)** If the stack is LIFO, then you pick the paper from the top of the pile. The last one came in is the first one to work on. This is another representation to show the differences between FIFO and LIFO. FIFO instruction unloads the words from the file in the same order as the words were entered. The LIFO instruction inverts the order of the data it receives by opening the last data received first. In this section, I'll focus on First In, First Out instruction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8)
> **Env Vars:** fifo (4), lifo (4)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [tutor] (1)

#### [First in, first out (FIFO) instruction](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=0)** - [Narrator] There are two instructions for FIFO function. The first one is called First In First Out Load and the second one is, First In First Out Unload. The two instructions are used in pairs. The load instruction is used to load words into a user created file called a FIFO Stack, the unload instruction is used to unload the words from the FIFO file in the same order as the words were entered as you can see, the two instructions are Block Type Instructions. The name on the top is to specify whether it's a load or unload instruction. The FIFO instructions are output instructions. So there are placed on the right hand side of the ladder logic. The load and the unload happens on every false to true transition of the instruction. You can find the two instructions under the tab, file, shift, slash sequencer and you can see the first two are for FIFO. And the last two are for LIFO. One example of using [[Microsoft Word|Word]] Shifting Instructions in manufacturing is for tracking parts through an assembly line, like using a barcode reader for reading printed barcode data on boxes.
>
> **[1:38](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=98)** Another scenario, the FIFO instruction is often used for inventory control. One example is where different parts need to be removed from inventory to be used in production. Each part is assigned a unique code which is loaded into a FIFO Stack and parts are removed in order. This type of control, ensures that the oldest part in the inventory is used first, as the first part entered is the first part removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** fifo (7), lifo (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)

#### [FFL (FIFO load) parameters, part 1](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=0)** - [Instructor] For our first in first out instructions, both load and unload half the same parameters, except load instruction has a source and unload instruction has a destination. I'm going to go over the parameters of FIFO load instruction first, starting with source. The source is the [[Microsoft Word|word]] address from which the data are entered into the FIFO file. Data of the source could be coming from an input device, like thumbwheel input address, or from an internal location, like a counter accumulator. Second parameter is FIFO. This is the address of the file in which the data are entered. The address must start with a hashtag sign. The FIFO parameter specifies the first word of the FIFO stack. Here is an example, data is coming from the counter accumulator, which is the source, and saved in file B3, starting from ward zero. Typically, the source and the FIFO are the same data type. We know that there are some differences for different [[PLC]] types, but for Ellen Bradley, if source and FIFO data types mismatch,
>
> **[1:37](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=97)** the instruction converts the source value to the data type of the FIFO file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[PLC]] (1)
> **Env Vars:** fifo (8), plc (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [FFL (FIFO load) parameters, part 2](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=0)** - [Narrator] To continue with FIFO load parameters, the control parameter is the address of the control file for the instruction. It includes the status bits, stack length, and position. Example is R6:0 meaning file six [[Microsoft Word|word]] zero. The status bits of the control word are; enabled bits when the instruction is true, done bits when the instruction position equals the length, empty bits when all the data have been unloaded from the FIFO file. The control file also includes length and position. You can refer to the following manual page 545 for more details about Fifo load instructions. The control file of the load instruction also includes the length and position. Links parameter specifies the maximum number of words in this stack. In this FIFO stack you see, the length is five words. Position parameter is the next available location where to put the data in. The first address in the stack is position zero. For example, if FIFO file is B3:0, and the position parameter is stating three,
>
> **[1:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=96)** meaning that the next word would be loaded into position three because this is the next available location. So data are stored in memory locations, B3:0, B3:1, B3:2 and B3:3. The stack is considered full when the position value equals the length. For the same example we have, if the length is four, then when the position parameter reaches four, this simply means the FIFO file is full. I want to point out that the first address in the stack is position zero. And we start counting starting from the file address. Here's an example. If the file address is B3 word five, now this is position zero for that file address. And the next available position is position one, and the word address for it is B3:6.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5)
> **Env Vars:** fifo (5)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [FFU (FIFO unload) parameters](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=0)** - [Instructor] The parameters are the same for both Load and Unload instructions, except that Unload instruction has a destination instead of source. Destination parameter simply specifies where the data is going. Here's an example of having the destination as the LED display. Now, since it's a FIFO instruction, the Unload instruction is used to unload the words from the FIFO stack in the same order as the words were entered. So the operation for the Unload instruction goes this way. First, it unloads the one in position zero, and sends it to the destination address, then shifts the remaining words one position toward the starting address of the file. And then the process continues for unloading the [[Representational State Transfer (REST)|rest]] of the data from the stack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** fifo (2), led (1)
> **Speakers:** - [instructor] (1)

#### [Illustrate FIFO operation: Example](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=0)** - [Instructor] I'm going to use this example to show you how the FIFO instructions work, since both load and unload instructions always work in pairs. To illustrate the operation, let's say we're using a thumbwheel to input the data in. The data is loaded into a FIFO stack using a load instruction. Then, using the unload instruction, the data is unloaded to a destination, which is an LED display. Now the parameters. For the load instruction, the source is thumbwheel address input five, and for the unload instruction, the destination is the LED display output six. FIFO stack is file N7 integer starting from ward zero. The same address is programmed for the load and unload instructions. The control file, R6:0. FIFO load and unload instructions have the same control element, which may not be used to control any other instruction. And for the length, I'll choose six words for demonstration. And by default, the position starts with zero. So these are the parameters for the two instructions we have.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (4), led (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Illustrate FFL operation, part 1](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=0)** - [Instructor] For the ladder logic program, I will use two toggle switches to achieve the false the true transition, for the instructions. I'm choosing the numbers randomly to load them into the file. If you want to practice, you can certainly choose any other numbers. First, to input number two, using a thumbwheel, the load switch is activated. Now the FIFO load instruction loads the data from the source to the FIFO stack, starting from N7:0. You can see, I have demonstrated the numbers in both binary and decimal. Now the next value to input is four, the load switch needs to be opened and closed again for the false to true transition, the same process happens and you see that the position now points to one. Meaning that the next available position to load the data is now position one N7:1. The same process continues for the next [[Microsoft Word|word]] into the FIFO file until reaching the number of the file length.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** fifo (3)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)

#### [Illustrate FFL operation, part 2](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=0)** - [Instructor] Now to unload the data, unload switch is used. The unload operation goes this way. The unload instruction position points at position six. Now, on a false to true transition, the unload instruction sends the values at position zero to the destination address, output six. It is a FIFO instruction, so the first value will be shown on the LED display. Now the position will change to five. This causes all the data of the FIFO file to shift one position towards the starting address of the file. Position five is the position that's getting emptied. Now on the next false to true transition the element instruction will increment position to position four, indicating that this time this is the position will get empty. Again, unloading and displaying the value of the starting address of the file. This causes all data of the FIFO file to shift one position towards the starting address of the file and the same thing happens for position three, and for the [[Representational State Transfer (REST)|rest]] until you reach the end of the stack length. The final step is when the whole stack file is empty and the position is zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** fifo (3), led (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example program](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=0)** - [Instructor] I have the ladder logic program inside the [[Simulation Software]]. Now for the input, if you don't have it already, you can change the type of the input by going over here and then simply just right-click until you find the one that you want. So I'm going to go ahead and change it to switches. So normally I open switch and I'll do the same for the Unload Switch. Okay, then I'll go ahead, go online, download the program and then click on Run. Now in order to see the values inside the file, I'm going to click on Data Table, then I'll move it here for you to see. And then I'll go to file N7 because this is the file for the data that are coming in. I'll change the way I see it to decimal. All right, I'm going to use the same values that I had in the example, but I'll choose only the first three for demo. So the very first number was two. So I'll go ahead, put two. Then as soon as I press on the Load Switch, notice what happened to N7.0. Now the same thing when I load the next value, which is four. I'll go ahead and load it into the file. And then finally, number five, I would load it into the file.
>
> **[1:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=94)** So we have FIFO instructions. So once I click on the Unload Switch, the instruction starts unloading from position zero, showing the number on the LED display. The next time I click on the Unload Switch, it shows the next available value and so on for the [[Representational State Transfer (REST)|rest]] of the values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (4), right-click (1), go to (1)
> **Env Vars:** fifo (1), led (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 3. Program Flow Control Instructions

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to program control instructions](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/intro-to-program-control-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/intro-to-program-control-instructions?u=76281980&t=0)** - [Instructor] Program control instructions are used to enable or disable a block of logic program or to move the execution of a program from one place to another. Basically, these instructions are used to control the flow of the ladder logic program. The use of program control instructions can shorten the time required to complete a program scan or alter the program scan from its normal sequence. In the [[PLC]] [[Simulation Software]], you will find the program flow instructions under the program control tab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1), [[Simulation Software]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** plc (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Jump (JMP) to label (LBL) instructions](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=0)** - [Instructor] The jump instruction is an instruction used to jump over portions of ladder logic program. It is an output instruction, looking like this, with jump between parentheses. The jump instruction works in pair with a label instruction. The label instruction is a target for the jump instruction. When a jump instruction is used, the [[PLC]] skips all the rungs between jump instruction and its associated label instruction, and the rungs will not be scanned by the processor. In the jump zone, input conditions are not examined and outputs remain in their last state. They jump instruction with its associated label instruction must have the same address, so the program knows where to go jump to. If a ladder logic program has many jump instructions, each jump instruction must have a label instruction with a matching address. The label instruction must be programmed as the first instruction on the rung where it resides. The instructions to the right of the label on the label rung are outside the jump zone, and as such, are not affected by the jump. The processor continues scanning after the label instruction. Here is one of the examples for using
>
> **[1:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=94)** jump and label instructions in manufacturing. In certain cases, sections of a program may be programmed to be jumped should a production fault happens, so simply skipping certain rungs to reduce any damage that may happen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1)
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### [Master control rest (MCR) instruction](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=0)** - [Instructor] The Master Control Reset instruction, or MCR, is an output instruction that works in pairs, and it has no address. It is used to disable or enable a section of rungs within a ladder logic program. One MCR instruction is used to define the start of the ladder area to be effected, and one MCR instruction is used to define the end of the area. And input instruction is usually added on the rung of the first MCR to control rung logic continuity, and to control when to start and stop the MCR effect. The ending MCR instruction must be the only instruction on the rung. The operation of this instruction goes this way. When input instruction is true, making MCR instruction true, all outputs within the MCR zone act normally according to their rung logic, as if the zone does not exist, we call this a true MCR zone. When the MCR instruction is false, all rungs within the zone are treated as false. We call this a false MCR zone. When that happens all non-retentive outputs, within the MCR zone are disabled, example, a regular output, timer on delay, et cetera.
>
> **[1:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=96)** All retentive outputs remain in their last state. example is a large output. So the scan ignores the inputs and de-energizes all non-retentive outputs. One of the common uses for MCR instruction is to provide an emergency stop capability. As when the MCR is false it stops all outputs within the MCR zone. So MCR output instruction is used to set up areas or zones of ladder logic program where all non retentive outputs may be disabled at the same time, for the same length of time.

> [!info]- Semantic Content
>
> **Env Vars:** mcr (16)
> **Definitions:** we call this (2), is an  (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Difference between JMP and MCR](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=0)** - [Instructor] The four [[Microsoft Word|word]] jump and label Instructions are similar to an MCR Instruction in that both instructions skip over a block of [[PLC Ladder Logic]] program. The main difference between the two is in how the outputs are handled when the instructions are executed. When a jump instruction is used, the [[PLC]] skips all the rungs between Jump Instruction and its associated Label Instruction. And the rungs will not be scanned by the processor. The MCR instruction sets all non-retentive outputs to the false state. And keeps the retentive outputs in their loss states. You should never jump into MCR reset zone. If you do instructions that are programmed within the MCR zone starting at the Label Instruction and ending of the end MCR Instruction will always be evaluated as though the MCR zone is true regardless of the state of the start MCR Instruction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[PLC Ladder Logic]] (1), [[PLC]] (1)
> **Env Vars:** mcr (7), plc (2)
> **Analogies:** similar to (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to subroutines](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=0)** - When you have a Long Ladder Logic Program, depending on the application, oftentimes, it's better to kind of chop the program into smaller pieces when applicable. The smaller pieces are called subroutines. A subroutine is a short program that is used by the main program to perform a specific function. The subroutines are called and executed from the main program, as you can see in the illustration here. Each subroutine must have a unique file number. This is how it works. When a subroutine is called from the main ladder logic program, the program is able to scape and go to a subroutine to perform certain functions and then, return to the main program. The main program is called the Main Routine. Sometimes a portion of the Ladder Logic Program must be repeated several times, during, for example, one machine cycle. The subroutine can save a great deal of duplicate programming. The sequence of rungs could be programmed one time into a subroutine and just called when needed. Using subroutines is useful for many reasons. Easy to debug and troubleshoot, easy to read and understand, easy to program and to document the Ladder Logic Program. When programs are written in subroutines, each subroutine can be tested individually
>
> **[1:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=94)** for functionality. The subroutine related instructions used in Allen Bradley PLCs are, Jump to Subroutine or JSR, Subroutine or SBR and Return or RET. In Allen Bradley PLCs, the main ladder logic is stored in the program file number two, and subroutines are stored starting from file three. You can find the instructions in the [[Simulation Software]] under the tab, program control

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation Software]] (1)
> **Env Vars:** jsr (1), sbr (1), ret (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - when (1)

#### [Jump to subroutine (JSR) instruction](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-to-subroutine-jsr-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-to-subroutine-jsr-instruction?u=76281980&t=0)** - [Instructor] The jump to subroutine instruction is an output instruction. When it's true, it redirects the program execution from the current ladder logic file to a specific subroutine file. It is a block type instruction, and simply specifies the file to jump to. You can see here in the example, I have two JSR instructions, and each is meant to take the program to a different subroutine, one to file three and one to file four.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** jsr (1)
> **Speakers:** - [instructor] (1)

#### [Subroutine (SBR) instruction](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/subroutine-sbr-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/subroutine-sbr-instruction?u=76281980&t=0)** - [Instructor] The subroutine instruction is an input instruction, and it is the first input instruction on the first rung in the subroutine file. It serves as an identifier to indicate that the program in this file is a subroutine. It includes the file number, use, and the JSR instruction to identify the target to which the program should jump into. Since it is an input instruction, an output instruction must be connected to the SBR instruction in that rung.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** jsr (1), sbr (1)
> **Speakers:** - [instructor] (1)

#### [Return from subroutine (RET)](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980&t=0)** - [Instructor] The return from subroutine is an output instruction that marks the end of the subroutine file. It causes the scan to return to the main program, at the instruction following the GSR instruction where it left the program. It is a block type. Nothing is written inside because it simply just returned the scan back to where the subroutine came from. So the three instructions work together. JSR to jump to a subroutine, SBR to specify the number of the subroutine, and return is to return back to the main program.

> [!info]- Semantic Content
>
> **Env Vars:** gsr (1), jsr (1), sbr (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Nested subroutines](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/nested-subroutines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/nested-subroutines?u=76281980&t=0)** - [Instructor] Nested subroutines allow you to direct program flow from the main program to a subroutine, and then to another subroutine. Nested subroutines make complex programming easier and program operation faster, because the programmer does not have to continually return from one subroutine to enter another. One thing to note that programming nested subroutine may cause delay in the scanning of the main program, because while the subroutine is being scanned, the main program is not.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/next-steps?u=76281980&t=0)** - [Instructor] Thanks for taking the time to join me in this course. If you would like to learn more, I always suggest and encourage you to dive into the documentation for each manufacturer of the specific [[PLC]] device you are currently working with. If you're interested in understanding more about PLCs, and how they fit within the field of industrial automation, check out the course Learn Industrial Automation that goes through each level of the automation field. I hope this course gave you an opportunity to learn more about [[PLC Ladder Logic]] programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1), [[PLC Ladder Logic]] (1)
> **Env Vars:** plc (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Zahraa Khalil]]

## Resources

- Exercise files available

## Skills Covered

- PLC Ladder Logic

## Path Context

### In [[Become a PLC Developer]]
← [[PLC Sequencer Logic]] | **6 of 7** | [[PLC Simulation Software- Factory I-O with Connected Component Workbench]] →

## Appears In

- [[Become a PLC Developer]]

## Related Courses

_Courses sharing skills:_

- [[PLC Sequencer Logic]] — PLC Ladder Logic
- [[Learning PLC Ladder Logic- 1 The Basics]] — PLC Ladder Logic

---

[↑ Back to top](#)