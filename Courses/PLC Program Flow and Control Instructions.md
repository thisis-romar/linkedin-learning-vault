---
type: course
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
tags:
  - course
  - topic/hardware
  - skill/plc-ladder-logic
status: not-started
created: 2026-04-17
---

# PLC Program Flow and Control Instructions

> Ladder logic is a common programming language used in industrial and manufacturing processes. The controller, using a programmable logic controller (PLC) program, specifies what action each device needs to perform. Many PLC operations follow linear sequences, but as you develop more complex applications, you also need to build more sophisticated logic into your projects. In this course, explore ad

> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions) | 43m | Advanced | 183K learners

## Instructor

- [[Zahraa Khalil]]

## Resources

- Exercise files available

## Skills Covered

- PLC Ladder Logic

## Table of Contents

### Introduction

#### PLC program flow and control
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=1)** - [Zahraa] Very similar to a play, in manufacturing and industrial settings, every device, sensor, or machine needs to have a specific task to perform, all orchestrated to produce a certain outcome.
>
> **[0:18](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=18)** The controller, using a PLC program, specifies what action each device needs to perform.
>
> **[0:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=28)** PLC Ladder Logic is one of the common programming languages used in industrial and manufacturing processes.
>
> **[0:38](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=38)** Although there are many types of PLC devices, the concepts of the language are the same.
>
> **[0:46](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=46)** In this LinkedIn Learning course, we'll explore some of the advanced instructions of PLC Ladder Logic programming, including bit shift, word shift, MCR, Jump and Label, and sub-routine instructions.
>
> **[1:05](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=65)** I'll explore each instruction separately by explaining its parameters and operation.
>
> **[1:13](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=73)** I am Zahraa Kahlil.
>
> **[1:14](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=74)** I am an engineering instructor, and I love teaching students just like you.
>
> **[1:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/plc-program-flow-and-control?u=76281980&t=80)** Join me in my LinkedIn Learning course and explore the world of PLC Ladder Logic programming.

> [!info]- Semantic Content
>
> **Env Vars:** plc (5), mcr (1)
> **Analogies:** similar to (1), just like (1)
> **Speakers:** - [zahraa] (1)

#### What you should know before watching
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=0)** - [Instructor] Before you start this course, you should be familiar with how ladder logic programming works, knowing the basic instructions.
>
> **[0:10](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=10)** This course introduces instructions that are used in advanced operations.
>
> **[0:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=16)** Like bit shift, word shift instructions, master control resets, jump and label instructions, and the concept of subroutine and its instructions.
>
> **[0:29](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=29)** I'll be using LogixPro PLC Simulator from LearningPit.
>
> **[0:35](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=35)** This simulation software mimics Allen-Bradley's Rockwell RSLogix 500.
>
> **[0:42](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=42)** This course is designed as a continuation of the learning path, Become a PLC Developer.
>
> **[0:50](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/what-you-should-know-before-watching?u=76281980&t=50)** If you need a refresher on the basics of programming, ladder logic, I recommend that you check Learning PLC Ladder Logic course so you are prepared for this one.

> [!info]- Semantic Content
>
> **Env Vars:** plc (3)
> **Speakers:** - [instructor] (1)


### 1. Bit Shift Register

#### Concepts of bits and words
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=0)** - [Instructor] A basic requirement of PLC devices is to represent, store, and operate on numbers.
>
> **[0:08](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=8)** Usually, PLCs work on binary numbers.
>
> **[0:12](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=12)** So in general, anything that gets stored inside the PLC memory, is saved in binary formats.
>
> **[0:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=20)** In a PLC, the processor memory consists of hundreds or thousands of storage locations.
>
> **[0:27](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=27)** These locations, or registers, are referred to as words.
>
> **[0:33](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=33)** Each word stores data in the form of binary digits, or bits.
>
> **[0:39](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=39)** The number of bits that a word can store depends on the type of the PLC system being used.
>
> **[0:47](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=47)** Each digit of a binary number is known as a bit.
>
> **[0:52](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=52)** A bit is either a zero or one.
>
> **[0:55](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=55)** If we have multiple bits in a binary number, the least significant bit, or LSB, represents the smallest value.
>
> **[1:05](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=65)** The most significant bit, or MSB, represents the largest value.
>
> **[1:12](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=72)** When we have eight bits, they are called a byte.
>
> **[1:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=76)** Two bytes, or 16 bits, form a word, and usually this is how we refer to memory locations within a PLC.
>
> **[1:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=88)** A double word is two 16 bit words, or 32 bits.
>
> **[1:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/concepts-of-bits-and-words?u=76281980&t=94)** PLC memory is organized using bytes, single words, or double words.

> [!info]- Semantic Content
>
> **Env Vars:** plc (6), lsb (1), msb (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Bit shift registers intro
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=0)** - [Instructor] Bit shift register is an instruction that allows the shifting of bits through a single register or group of registers.
>
> **[0:10](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=10)** Here is an illustration of the basic concept of a bit shift register.
>
> **[0:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=16)** You can see a memory allocation for a 16-bit word.
>
> **[0:21](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=21)** A shift pulse or a clock causes each bit in the shift register to move one position to the right in this case.
>
> **[0:31](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=31)** Usually, bit shift registers are used when we want to track, for example, bottles on a status basis, zero or one, on and off.
>
> **[0:42](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=42)** So it's often used in material handling processes where some form of binary information must be synchronized with a moving part on a conveyor.
>
> **[0:55](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=55)** Here's a scenario using a shift register.
>
> **[0:57](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=57)** We have bottles moving along on a conveyor belt.
>
> **[1:02](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=62)** Data is collected using a sensor to track the presence and the absence of bottles.
>
> **[1:09](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=69)** So every time there's a bottle, the sensor outputs a one, otherwise it outputs a zero.
>
> **[1:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=76)** This data can then be loaded into a specific shift register allocation.
>
> **[1:23](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=83)** The bit shift instruction is a block type instruction.
>
> **[1:26](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=86)** The instruction has the following parameters: file, control, bit address, and length.
>
> **[1:35](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=95)** It is an output instruction, so it's placed on the right-hand side of the ladder logic.
>
> **[1:42](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=102)** The instruction is activated every time it goes from false to true.
>
> **[1:47](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=107)** You can program a shift register to shift data either to the right or to the left.
>
> **[1:54](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=114)** And hence there are two types of shift instructions, bit shift left and bit shift right.
>
> **[2:04](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=124)** Both instructions have the same parameters.
>
> **[2:08](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=128)** The difference is the direction in which the bits are moved.
>
> **[2:13](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-registers-intro?u=76281980&t=133)** In the simulation software, you can find the bit shift register instructions over here if you scroll to the right until you find the tab file shift sequencer, and then you can find the two instructions, BSL and BSR.

> [!info]- Semantic Content
>
> **Definitions:** is an  (3), is a  (1)
> **CLI Commands:** find (3)
> **Env Vars:** bsl (1), bsr (1)
> **Code Keywords:** case. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Bit shift register parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=0)** - [Teacher] The two instructions, BSL and BSR have the same parameters.
>
> **[0:07](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=7)** The first parameter, file is the address location.
>
> **[0:11](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=11)** Simply, the file to shift the data in.
>
> **[0:15](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=15)** The address must start with the hashtag sign.
>
> **[0:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=20)** An example is B3:10, which means binary file three word 10 starting from bit zero.
>
> **[0:30](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=30)** Any remaining bits in this word cannot be used all swear in the program because the instruction invalidates them.
>
> **[0:39](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=39)** The second parameter, bit address, is the interest of the source bit.
>
> **[0:44](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=44)** It could be an internal or external address.
>
> **[0:48](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=48)** Here's an example.
>
> **[0:49](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=49)** A sensor is connected to input one, bit one.
>
> **[0:54](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=54)** So this is the source of the bit and it's being shifted side B3 word 10.
>
> **[1:02](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=62)** The length parameter indicates the number of bits to be shifted or the file length in bits, whether using the whole word or couple of bits within a word.
>
> **[1:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=76)** The control parameter is the address of the control file which monitors and controls the shift instruction.
>
> **[1:24](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=84)** It is a three-word element that consists of, the status word, the length and the position.
>
> **[1:32](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=92)** In the control register, two status bits can be seen with instruction.
>
> **[1:37](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=97)** The enabled bit is activated when the instruction is on.
>
> **[1:43](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=103)** The done bit is when the instruction has shifted all bits as is specified by the length.
>
> **[1:51](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=111)** The other status bits are error and unload bits.
>
> **[1:56](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=116)** I will discuss more about unload bits in another video within this course.
>
> **[2:01](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bit-shift-register-parameters?u=76281980&t=121)** You can refer to this manual for Allen-Bradley PLC page 536 to check the status bits of the control file for bit shift register.

> [!info]- Semantic Content
>
> **Env Vars:** bsl (1), bsr (1), plc (1)
> **Ports:** :10 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [teacher] (1)

#### BSL instruction (bit shift left)
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=0)** - [Tutor] The bit shift left instruction shifts the bits to the left once for every low to high transition on its inputs, the shifting starts from the least significant bit address of the word.
>
> **[0:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=16)** To show the operation of the instruction, I will use our previous example of detecting the presence and absence of bottles, the file is #B3:0 , the control file is R6:0, the bit address source is the address of the sensor input 1:1, I'm going to choose six for the file length, meaning I will log and shift only six bits within the file.
>
> **[0:49](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=49)** When the instruction is enabled, goes from false to true, the BSL instruction starts at bit zero, taking the data coming from the sensor bit and put it in B3:0.
>
> **[1:06](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=66)** Now let's say after a while, the file contains several values.
>
> **[1:11](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=71)** Now, when the bits from input one comes, let's say we have value of one coming in, the last bit is shifted out of the array and stored in the unknown bits and the remaining bits are shifted to the left.
>
> **[1:29](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=89)** So the data in bit five is lost.
>
> **[1:32](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=92)** Unless additional programming is done to retain the data, the remaining bits of the word six to 15 are invalid.
>
> **[1:42](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=102)** This is what the table looks like before the shifting and after shifting the bits to the left.
>
> **[1:49](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=109)** Sometimes in different PLC software, you might see the bits still shifting within the word beyond the length indicated.
>
> **[1:58](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=118)** That is fine, because the operation is still the same.
>
> **[2:02](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=122)** And the ones related to the shifting instruction are only within the specified length.
>
> **[2:09](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-bit-shift-left?u=76281980&t=129)** Again, it's always a good practice to check the documentation of the specific PLC you're working with

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), while, (1)
> **Env Vars:** plc (2), bsl (1)
> **Documentation:** the documentation (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [tutor] (1)

#### BSR instruction (bit shift right)
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=0)** - [Instructor] Bit shifts right instruction shifts the bits in the data file to the right once for every low to high transition.
>
> **[0:09](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=9)** The shifting starts from the most significant bit address of the word.
>
> **[0:15](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=15)** Using the same previous example, when the instruction is enabled, goes from false to true.
>
> **[0:22](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=22)** The BSR instruction starts at bit five.
>
> **[0:27](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=27)** Since the length is six, taking the data coming from the sensor bit address, input one, bit one.
>
> **[0:35](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=35)** The operation is the same for both instructions.
>
> **[0:38](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=38)** The difference is only in the direction.
>
> **[0:41](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsr-instruction-bit-shift-right?u=76281980&t=41)** This is how the table looks like before the shifting and after shifting of the bits to the right.

> [!info]- Semantic Content
>
> **Env Vars:** bsr (1)
> **Speakers:** - [instructor] (1)

#### BSL instruction demonstration
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=0)** - In this demo, you can see in the first run, I have a switch to generate a status bit.
>
> **[0:07](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=7)** I'm trying to mimic the presence and the absence of bottles.
>
> **[0:12](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=12)** In the second drawing, a push button is used to load the data into the BSL instruction.
>
> **[0:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=20)** I'm going to go ahead and go online, download the program, and then click on run.
>
> **[0:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=28)** And before I do anything, I'll click on that data table to see the bits inside the file.
>
> **[0:35](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=35)** So you go over here, click on data table.
>
> **[0:41](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=41)** I'll move it little bit to the side and notice in the BSL instruction, the file is B3 zero.
>
> **[0:49](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=49)** So we are going to load the data inside B3 word zero, starting from bit zero.
>
> **[0:57](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=57)** All right, I'm going to go ahead and press on the switch to turn the switch on.
>
> **[1:03](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=63)** So once I have the switch on, meaning that there is a bottle in front of the sensor, I'm going to go ahead and load the data inside the file.
>
> **[1:14](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=74)** So as soon as I press on input one bits one, the data will be loaded inside B3, word zero.
>
> **[1:23](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=83)** You notice, loading the data starts at bit zero.
>
> **[1:27](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=87)** I'm going to go ahead and generate another bit.
>
> **[1:30](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=90)** So I'll turn off the switch, and then I'll press on load again.
>
> **[1:37](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/bsl-instruction-demonstration?u=76281980&t=97)** And notice what happens is that the bit is being shifted to the left and the same thing happens for all the bits that get generated through the process.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (5)
> **UI Navigation:** click on (3), switch to (2)
> **Env Vars:** bsl (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)


### 2. Word Shift Operations

#### Word shift operations intro
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=0)** - [Tutor] Word shifting operation provides a simpler method of loading and unloading data into a file.
>
> **[0:08](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=8)** Now the word shifting operates this way, rather than shifting bits of information within a word, it shifts the data from a complete word into a file or stack.
>
> **[0:22](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=22)** Two separate shift pulses are required, one to shift data into the file, (load), and one to shift data out of the file, (unload).
>
> **[0:33](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=33)** The movement of data in and out of the file, for word shifting, operates in two ways.
>
> **[0:40](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=40)** The first one is called First In, First Out instruction, (FIFO).
>
> **[0:48](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=48)** The first word enters the file is the first one out.
>
> **[0:53](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=53)** The second instruction, which has the opposite principle is Last In, First Out (LIFO).
>
> **[1:01](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=61)** The last word entered is the first one out.
>
> **[1:06](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=66)** A useful analogy to understand the two types of word shifting instructions is a pile of work on your desk.
>
> **[1:14](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=74)** Let's say a new work arrives, you drop the paper on the top of the stack you already have.
>
> **[1:21](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=81)** If your stack is FIFO, then you pick your work from the bottom of the pile, because you want to use the first one that was placed on your desk.
>
> **[1:33](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=93)** The first one in is the first one out.
>
> **[1:37](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=97)** If the stack is LIFO, then you pick the paper from the top of the pile.
>
> **[1:43](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=103)** The last one came in is the first one to work on.
>
> **[1:48](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=108)** This is another representation to show the differences between FIFO and LIFO.
>
> **[1:55](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=115)** FIFO instruction unloads the words from the file in the same order as the words were entered.
>
> **[2:03](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=123)** The LIFO instruction inverts the order of the data it receives by opening the last data received first.
>
> **[2:12](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/word-shift-operations-intro?u=76281980&t=132)** In this section, I'll focus on First In, First Out instruction.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (4), lifo (4)
> **Definitions:** is called (1), is a  (1)
> **Code Keywords:** let (1)
> **Speakers:** - [tutor] (1)

#### First in, first out (FIFO) instruction
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=0)** - [Narrator] There are two instructions for FIFO function.
>
> **[0:03](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=3)** The first one is called First In First Out Load and the second one is, First In First Out Unload.
>
> **[0:14](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=14)** The two instructions are used in pairs.
>
> **[0:18](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=18)** The load instruction is used to load words into a user created file called a FIFO Stack, the unload instruction is used to unload the words from the FIFO file in the same order as the words were entered as you can see, the two instructions are Block Type Instructions.
>
> **[0:42](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=42)** The name on the top is to specify whether it's a load or unload instruction.
>
> **[0:50](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=50)** The FIFO instructions are output instructions.
>
> **[0:53](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=53)** So there are placed on the right hand side of the ladder logic.
>
> **[0:58](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=58)** The load and the unload happens on every false to true transition of the instruction.
>
> **[1:06](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=66)** You can find the two instructions under the tab, file, shift, slash sequencer and you can see the first two are for FIFO.
>
> **[1:17](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=77)** And the last two are for LIFO.
>
> **[1:22](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=82)** One example of using Word Shifting Instructions in manufacturing is for tracking parts through an assembly line, like using a barcode reader for reading printed barcode data on boxes.
>
> **[1:38](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=98)** Another scenario, the FIFO instruction is often used for inventory control.
>
> **[1:45](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=105)** One example is where different parts need to be removed from inventory to be used in production.
>
> **[1:54](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=114)** Each part is assigned a unique code which is loaded into a FIFO Stack and parts are removed in order.
>
> **[2:05](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/first-in-first-out-fifo-instruction?u=76281980&t=125)** This type of control, ensures that the oldest part in the inventory is used first, as the first part entered is the first part removed.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (7), lifo (1)
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)

#### FFL (FIFO load) parameters, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=0)** - [Instructor] For our first in first out instructions, both load and unload half the same parameters, except load instruction has a source and unload instruction has a destination.
>
> **[0:18](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=18)** I'm going to go over the parameters of FIFO load instruction first, starting with source.
>
> **[0:27](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=27)** The source is the word address from which the data are entered into the FIFO file.
>
> **[0:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=34)** Data of the source could be coming from an input device, like thumbwheel input address, or from an internal location, like a counter accumulator.
>
> **[0:47](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=47)** Second parameter is FIFO.
>
> **[0:50](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=50)** This is the address of the file in which the data are entered.
>
> **[0:56](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=56)** The address must start with a hashtag sign.
>
> **[1:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=60)** The FIFO parameter specifies the first word of the FIFO stack.
>
> **[1:06](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=66)** Here is an example, data is coming from the counter accumulator, which is the source, and saved in file B3, starting from ward zero.
>
> **[1:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=80)** Typically, the source and the FIFO are the same data type.
>
> **[1:25](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-1?u=76281980&t=85)** We know that there are some differences for different PLC types, but for Ellen Bradley, if source and FIFO data types mismatch, the instruction converts the source value to the data type of the FIFO file.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (8), plc (1)
> **Code Keywords:** type. (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### FFL (FIFO load) parameters, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=0)** - [Narrator] To continue with FIFO load parameters, the control parameter is the address of the control file for the instruction.
>
> **[0:10](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=10)** It includes the status bits, stack length, and position.
>
> **[0:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=16)** Example is R6:0 meaning file six word zero.
>
> **[0:24](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=24)** The status bits of the control word are; enabled bits when the instruction is true, done bits when the instruction position equals the length, empty bits when all the data have been unloaded from the FIFO file. The control file also includes length and position. You can refer to the following manual page 545 for more details about Fifo load instructions.
>
> **[0:56](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=56)** The control file of the load instruction also includes the length and position.
>
> **[1:03](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=63)** Links parameter specifies the maximum number of words in this stack. In this FIFO stack you see, the length is five words. Position parameter is the next available location where to put the data in.
>
> **[1:22](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=82)** The first address in the stack is position zero.
>
> **[1:27](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=87)** For example, if FIFO file is B3:0, and the position parameter is stating three, meaning that the next word would be loaded into position three because this is the next available location.
>
> **[1:45](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=105)** So data are stored in memory locations, B3:0, B3:1, B3:2 and B3:3.
>
> **[1:56](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=116)** The stack is considered full when the position value equals the length.
>
> **[2:02](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=122)** For the same example we have, if the length is four, then when the position parameter reaches four, this simply means the FIFO file is full.
>
> **[2:14](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=134)** I want to point out that the first address in the stack is position zero.
>
> **[2:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=140)** And we start counting starting from the file address.
>
> **[2:25](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=145)** Here's an example. If the file address is B3 word five, now this is position zero for that file address.
>
> **[2:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffl-fifo-load-parameters-part-2?u=76281980&t=154)** And the next available position is position one, and the word address for it is B3:6.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (5)
> **Code Keywords:** continue (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### FFU (FIFO unload) parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=0)** - [Instructor] The parameters are the same for both Load and Unload instructions, except that Unload instruction has a destination instead of source.
>
> **[0:11](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=11)** Destination parameter simply specifies where the data is going.
>
> **[0:17](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=17)** Here's an example of having the destination as the LED display.
>
> **[0:22](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=22)** Now, since it's a FIFO instruction, the Unload instruction is used to unload the words from the FIFO stack in the same order as the words were entered.
>
> **[0:35](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=35)** So the operation for the Unload instruction goes this way.
>
> **[0:40](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=40)** First, it unloads the one in position zero, and sends it to the destination address, then shifts the remaining words one position toward the starting address of the file.
>
> **[0:55](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/ffu-fifo-unload-parameters?u=76281980&t=55)** And then the process continues for unloading the rest of the data from the stack.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (2), led (1)
> **Speakers:** - [instructor] (1)

#### Illustrate FIFO operation: Example
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=0)** - [Instructor] I'm going to use this example to show you how the FIFO instructions work, since both load and unload instructions always work in pairs.
>
> **[0:11](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=11)** To illustrate the operation, let's say we're using a thumbwheel to input the data in.
>
> **[0:17](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=17)** The data is loaded into a FIFO stack using a load instruction.
>
> **[0:23](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=23)** Then, using the unload instruction, the data is unloaded to a destination, which is an LED display.
>
> **[0:32](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=32)** Now the parameters.
>
> **[0:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=34)** For the load instruction, the source is thumbwheel address input five, and for the unload instruction, the destination is the LED display output six.
>
> **[0:47](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=47)** FIFO stack is file N7 integer starting from ward zero.
>
> **[0:53](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=53)** The same address is programmed for the load and unload instructions.
>
> **[0:59](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=59)** The control file, R6:0.
>
> **[1:02](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=62)** FIFO load and unload instructions have the same control element, which may not be used to control any other instruction.
>
> **[1:11](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=71)** And for the length, I'll choose six words for demonstration.
>
> **[1:15](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=75)** And by default, the position starts with zero.
>
> **[1:18](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-fifo-operation-example?u=76281980&t=78)** So these are the parameters for the two instructions we have.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (4), led (2)
> **Code Keywords:** let (1), default, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Illustrate FFL operation, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=0)** - [Instructor] For the ladder logic program, I will use two toggle switches to achieve the false the true transition, for the instructions.
>
> **[0:11](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=11)** I'm choosing the numbers randomly to load them into the file.
>
> **[0:15](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=15)** If you want to practice, you can certainly choose any other numbers.
>
> **[0:19](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=19)** First, to input number two, using a thumbwheel, the load switch is activated.
>
> **[0:26](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=26)** Now the FIFO load instruction loads the data from the source to the FIFO stack, starting from N7:0.
>
> **[0:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=36)** You can see, I have demonstrated the numbers in both binary and decimal.
>
> **[0:42](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=42)** Now the next value to input is four, the load switch needs to be opened and closed again for the false to true transition, the same process happens and you see that the position now points to one.
>
> **[0:58](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=58)** Meaning that the next available position to load the data is now position one N7:1.
>
> **[1:07](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-1?u=76281980&t=67)** The same process continues for the next word into the FIFO file until reaching the number of the file length.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (3)
> **Code Keywords:** switch (2)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)

#### Illustrate FFL operation, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=0)** - [Instructor] Now to unload the data, unload switch is used.
>
> **[0:04](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=4)** The unload operation goes this way.
>
> **[0:07](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=7)** The unload instruction position points at position six.
>
> **[0:12](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=12)** Now, on a false to true transition, the unload instruction sends the values at position zero to the destination address, output six.
>
> **[0:24](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=24)** It is a FIFO instruction, so the first value will be shown on the LED display.
>
> **[0:32](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=32)** Now the position will change to five.
>
> **[0:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=36)** This causes all the data of the FIFO file to shift one position towards the starting address of the file.
>
> **[0:45](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=45)** Position five is the position that's getting emptied.
>
> **[0:49](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=49)** Now on the next false to true transition the element instruction will increment position to position four, indicating that this time this is the position will get empty.
>
> **[1:01](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=61)** Again, unloading and displaying the value of the starting address of the file.
>
> **[1:07](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=67)** This causes all data of the FIFO file to shift one position towards the starting address of the file and the same thing happens for position three, and for the rest until you reach the end of the stack length.
>
> **[1:23](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/illustrate-ffl-operation-part-2?u=76281980&t=83)** The final step is when the whole stack file is empty and the position is zero.

> [!info]- Semantic Content
>
> **Env Vars:** fifo (3), led (1)
> **Code Keywords:** switch (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Example program
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=0)** - [Instructor] I have the ladder logic program inside the simulation software.
>
> **[0:05](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=5)** Now for the input, if you don't have it already, you can change the type of the input by going over here and then simply just right-click until you find the one that you want.
>
> **[0:18](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=18)** So I'm going to go ahead and change it to switches.
>
> **[0:22](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=22)** So normally I open switch and I'll do the same for the Unload Switch.
>
> **[0:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=28)** Okay, then I'll go ahead, go online, download the program and then click on Run.
>
> **[0:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=36)** Now in order to see the values inside the file, I'm going to click on Data Table, then I'll move it here for you to see.
>
> **[0:46](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=46)** And then I'll go to file N7 because this is the file for the data that are coming in.
>
> **[0:53](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=53)** I'll change the way I see it to decimal.
>
> **[0:57](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=57)** All right, I'm going to use the same values that I had in the example, but I'll choose only the first three for demo.
>
> **[1:04](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=64)** So the very first number was two.
>
> **[1:07](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=67)** So I'll go ahead, put two.
>
> **[1:10](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=70)** Then as soon as I press on the Load Switch, notice what happened to N7.0.
>
> **[1:18](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=78)** Now the same thing when I load the next value, which is four.
>
> **[1:24](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=84)** I'll go ahead and load it into the file.
>
> **[1:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=88)** And then finally, number five, I would load it into the file.
>
> **[1:34](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=94)** So we have FIFO instructions.
>
> **[1:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=96)** So once I click on the Unload Switch, the instruction starts unloading from position zero, showing the number on the LED display.
>
> **[1:49](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/example-program?u=76281980&t=109)** The next time I click on the Unload Switch, it shows the next available value and so on for the rest of the values.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (5), finally, (1)
> **UI Navigation:** click on (4), right-click (1), go to (1)
> **Env Vars:** fifo (1), led (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 3. Program Flow Control Instructions

#### Intro to program control instructions
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/intro-to-program-control-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/intro-to-program-control-instructions?u=76281980&t=0)** - [Instructor] Program control instructions are used to enable or disable a block of logic program or to move the execution of a program from one place to another.
>
> **[0:13](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/intro-to-program-control-instructions?u=76281980&t=13)** Basically, these instructions are used to control the flow of the ladder logic program.
>
> **[0:19](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/intro-to-program-control-instructions?u=76281980&t=19)** The use of program control instructions can shorten the time required to complete a program scan or alter the program scan from its normal sequence.
>
> **[0:32](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/intro-to-program-control-instructions?u=76281980&t=32)** In the PLC simulation software, you will find the program flow instructions under the program control tab.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** plc (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Jump (JMP) to label (LBL) instructions
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=0)** - [Instructor] The jump instruction is an instruction used to jump over portions of ladder logic program.
>
> **[0:08](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=8)** It is an output instruction, looking like this, with jump between parentheses.
>
> **[0:15](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=15)** The jump instruction works in pair with a label instruction.
>
> **[0:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=20)** The label instruction is a target for the jump instruction.
>
> **[0:25](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=25)** When a jump instruction is used, the PLC skips all the rungs between jump instruction and its associated label instruction, and the rungs will not be scanned by the processor.
>
> **[0:40](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=40)** In the jump zone, input conditions are not examined and outputs remain in their last state.
>
> **[0:48](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=48)** They jump instruction with its associated label instruction must have the same address, so the program knows where to go jump to.
>
> **[0:58](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=58)** If a ladder logic program has many jump instructions, each jump instruction must have a label instruction with a matching address.
>
> **[1:09](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=69)** The label instruction must be programmed as the first instruction on the rung where it resides.
>
> **[1:17](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=77)** The instructions to the right of the label on the label rung are outside the jump zone, and as such, are not affected by the jump.
>
> **[1:26](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=86)** The processor continues scanning after the label instruction.
>
> **[1:31](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=91)** Here is one of the examples for using jump and label instructions in manufacturing.
>
> **[1:38](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-jmp-to-label-lbl-instructions?u=76281980&t=98)** In certain cases, sections of a program may be programmed to be jumped should a production fault happens, so simply skipping certain rungs to reduce any damage that may happen.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Code Keywords:** this, (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### Master control rest (MCR) instruction
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=0)** - [Instructor] The Master Control Reset instruction, or MCR, is an output instruction that works in pairs, and it has no address.
>
> **[0:11](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=11)** It is used to disable or enable a section of rungs within a ladder logic program.
>
> **[0:19](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=19)** One MCR instruction is used to define the start of the ladder area to be effected, and one MCR instruction is used to define the end of the area.
>
> **[0:30](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=30)** And input instruction is usually added on the rung of the first MCR to control rung logic continuity, and to control when to start and stop the MCR effect.
>
> **[0:43](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=43)** The ending MCR instruction must be the only instruction on the rung.
>
> **[0:49](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=49)** The operation of this instruction goes this way.
>
> **[0:53](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=53)** When input instruction is true, making MCR instruction true, all outputs within the MCR zone act normally according to their rung logic, as if the zone does not exist, we call this a true MCR zone.
>
> **[1:12](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=72)** When the MCR instruction is false, all rungs within the zone are treated as false.
>
> **[1:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=80)** We call this a false MCR zone.
>
> **[1:23](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=83)** When that happens all non-retentive outputs, within the MCR zone are disabled, example, a regular output, timer on delay, et cetera.
>
> **[1:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=96)** All retentive outputs remain in their last state.
>
> **[1:41](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=101)** example is a large output.
>
> **[1:44](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=104)** So the scan ignores the inputs and de-energizes all non-retentive outputs.
>
> **[1:51](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=111)** One of the common uses for MCR instruction is to provide an emergency stop capability.
>
> **[1:59](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=119)** As when the MCR is false it stops all outputs within the MCR zone.
>
> **[2:06](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/master-control-rest-mcr-instruction?u=76281980&t=126)** So MCR output instruction is used to set up areas or zones of ladder logic program where all non retentive outputs may be disabled at the same time, for the same length of time.

> [!info]- Semantic Content
>
> **Env Vars:** mcr (16)
> **Definitions:** we call this (2), is an  (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Difference between JMP and MCR
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=0)** - [Instructor] The four word jump and label Instructions are similar to an MCR Instruction in that both instructions skip over a block of PLC ladder logic program.
>
> **[0:13](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=13)** The main difference between the two is in how the outputs are handled when the instructions are executed.
>
> **[0:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=20)** When a jump instruction is used, the PLC skips all the rungs between Jump Instruction and its associated Label Instruction.
>
> **[0:29](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=29)** And the rungs will not be scanned by the processor.
>
> **[0:33](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=33)** The MCR instruction sets all non-retentive outputs to the false state.
>
> **[0:39](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=39)** And keeps the retentive outputs in their loss states.
>
> **[0:44](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=44)** You should never jump into MCR reset zone.
>
> **[0:47](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/difference-between-jmp-and-mcr?u=76281980&t=47)** If you do instructions that are programmed within the MCR zone starting at the Label Instruction and ending of the end MCR Instruction will always be evaluated as though the MCR zone is true regardless of the state of the start MCR Instruction.

> [!info]- Semantic Content
>
> **Env Vars:** mcr (7), plc (2)
> **Analogies:** similar to (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### Introduction to subroutines
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=0)** - When you have a Long Ladder Logic Program, depending on the application, oftentimes, it's better to kind of chop the program into smaller pieces when applicable.
>
> **[0:12](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=12)** The smaller pieces are called subroutines.
>
> **[0:16](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=16)** A subroutine is a short program that is used by the main program to perform a specific function.
>
> **[0:23](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=23)** The subroutines are called and executed from the main program, as you can see in the illustration here.
>
> **[0:31](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=31)** Each subroutine must have a unique file number.
>
> **[0:35](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=35)** This is how it works.
>
> **[0:37](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=37)** When a subroutine is called from the main ladder logic program, the program is able to scape and go to a subroutine to perform certain functions and then, return to the main program.
>
> **[0:51](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=51)** The main program is called the Main Routine.
>
> **[0:54](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=54)** Sometimes a portion of the Ladder Logic Program must be repeated several times, during, for example, one machine cycle.
>
> **[1:03](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=63)** The subroutine can save a great deal of duplicate programming.
>
> **[1:08](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=68)** The sequence of rungs could be programmed one time into a subroutine and just called when needed.
>
> **[1:15](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=75)** Using subroutines is useful for many reasons.
>
> **[1:19](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=79)** Easy to debug and troubleshoot, easy to read and understand, easy to program and to document the Ladder Logic Program.
>
> **[1:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=88)** When programs are written in subroutines, each subroutine can be tested individually for functionality.
>
> **[1:36](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=96)** The subroutine related instructions used in Allen Bradley PLCs are, Jump to Subroutine or JSR, Subroutine or SBR and Return or RET.
>
> **[1:54](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=114)** In Allen Bradley PLCs, the main ladder logic is stored in the program file number two, and subroutines are stored starting from file three.
>
> **[2:06](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/introduction-to-subroutines?u=76281980&t=126)** You can find the instructions in the simulation software under the tab, program control

> [!info]- Semantic Content
>
> **Env Vars:** jsr (1), sbr (1), ret (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - when (1)

#### Jump to subroutine (JSR) instruction
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-to-subroutine-jsr-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-to-subroutine-jsr-instruction?u=76281980&t=0)** - [Instructor] The jump to subroutine instruction is an output instruction.
>
> **[0:05](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-to-subroutine-jsr-instruction?u=76281980&t=5)** When it's true, it redirects the program execution from the current ladder logic file to a specific subroutine file.
>
> **[0:15](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-to-subroutine-jsr-instruction?u=76281980&t=15)** It is a block type instruction, and simply specifies the file to jump to.
>
> **[0:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/jump-to-subroutine-jsr-instruction?u=76281980&t=20)** You can see here in the example, I have two JSR instructions, and each is meant to take the program to a different subroutine, one to file three and one to file four.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** jsr (1)
> **Speakers:** - [instructor] (1)

#### Subroutine (SBR) instruction
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/subroutine-sbr-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/subroutine-sbr-instruction?u=76281980&t=0)** - [Instructor] The subroutine instruction is an input instruction, and it is the first input instruction on the first rung in the subroutine file.
>
> **[0:10](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/subroutine-sbr-instruction?u=76281980&t=10)** It serves as an identifier to indicate that the program in this file is a subroutine.
>
> **[0:18](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/subroutine-sbr-instruction?u=76281980&t=18)** It includes the file number, use, and the JSR instruction to identify the target to which the program should jump into.
>
> **[0:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/subroutine-sbr-instruction?u=76281980&t=28)** Since it is an input instruction, an output instruction must be connected to the SBR instruction in that rung.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** jsr (1), sbr (1)
> **Speakers:** - [instructor] (1)

#### Return from subroutine (RET)
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980&t=0)** - [Instructor] The return from subroutine is an output instruction that marks the end of the subroutine file.
>
> **[0:08](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980&t=8)** It causes the scan to return to the main program, at the instruction following the GSR instruction where it left the program.
>
> **[0:19](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980&t=19)** It is a block type.
>
> **[0:20](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980&t=20)** Nothing is written inside because it simply just returned the scan back to where the subroutine came from.
>
> **[0:28](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980&t=28)** So the three instructions work together.
>
> **[0:31](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/return-from-subroutine-ret?u=76281980&t=31)** JSR to jump to a subroutine, SBR to specify the number of the subroutine, and return is to return back to the main program.

> [!info]- Semantic Content
>
> **Env Vars:** gsr (1), jsr (1), sbr (1)
> **Code Keywords:** type. (1), from. (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Nested subroutines
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/nested-subroutines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/nested-subroutines?u=76281980&t=0)** - [Instructor] Nested subroutines allow you to direct program flow from the main program to a subroutine, and then to another subroutine.
>
> **[0:10](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/nested-subroutines?u=76281980&t=10)** Nested subroutines make complex programming easier and program operation faster, because the programmer does not have to continually return from one subroutine to enter another.
>
> **[0:24](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/nested-subroutines?u=76281980&t=24)** One thing to note that programming nested subroutine may cause delay in the scanning of the main program, because while the subroutine is being scanned, the main program is not.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/next-steps?u=76281980&t=0)** - [Instructor] Thanks for taking the time to join me in this course.
>
> **[0:04](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/next-steps?u=76281980&t=4)** If you would like to learn more, I always suggest and encourage you to dive into the documentation for each manufacturer of the specific PLC device you are currently working with.
>
> **[0:17](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/next-steps?u=76281980&t=17)** If you're interested in understanding more about PLCs, and how they fit within the field of industrial automation, check out the course Learn Industrial Automation that goes through each level of the automation field.
>
> **[0:33](https://www.linkedin.com/learning/plc-program-flow-and-control-instructions/next-steps?u=76281980&t=33)** I hope this course gave you an opportunity to learn more about PLC ladder logic programming.

> [!info]- Semantic Content
>
> **Env Vars:** plc (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Become a PLC Developer]]
← [[PLC Sequencer Logic]] | **6 of 7** | [[PLC Simulation Software- Factory I-O with Connected Component Workbench]] →

## Appears In

- [[Become a PLC Developer]]

## Related Courses

_Courses sharing skills:_

- [[PLC Sequencer Logic]] — PLC Ladder Logic
- [[Learning PLC Ladder Logic- 1 The Basics]] — PLC Ladder Logic
