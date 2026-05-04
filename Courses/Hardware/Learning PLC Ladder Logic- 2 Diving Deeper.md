---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-plc-ladder-logic-2-diving-deeper
url: "https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper"
duration_minutes: 95
duration: 1h 35m
level: Intermediate
updated: 10/22/2019
learners: 182590
skills:
  - Programmable Logic Controller (PLC)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHX0LhQJAamxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1571761946936?e=2147483647&amp;v=beta&amp;t=-TJ7yoH2gA_OOIhjkmkT0Fd3Afs4IT6arfCAyOSNhjQ"
linkedin_topic: Hardware
learning_paths:
  - '[Become a PLC Developer](../../Paths/Hardware/Learning%20Paths/Become%20a%20PLC%20Developer.md)'
prev_courses:
  - '[Learning PLC Ladder Logic- 1 The Basics](Learning%20PLC%20Ladder%20Logic-%201%20The%20Basics.md)'
next_courses:
  - '[PLC Memory Organization](PLC%20Memory%20Organization.md)'
path_nav: '[{"path":"Become a PLC Developer","position":3,"total":7,"prev":"Learning PLC Ladder Logic- 1 The Basics","next":"PLC Memory Organization"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - skill/programmable-logic-controller-plc
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Learning%20PLC%20Ladder%20Logic-%202%20Diving%20Deeper.md)

![Learning PLC Ladder Logic: 2 Diving Deeper](https://media.licdn.com/dms/image/v2/C4E0DAQHX0LhQJAamxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1571761946936?e=2147483647&amp;v=beta&amp;t=-TJ7yoH2gA_OOIhjkmkT0Fd3Afs4IT6arfCAyOSNhjQ)

# Learning PLC Ladder Logic: 2 Diving Deeper

> Programmable logic controllers (PLCs) are essential to the industrial automation industry—and ladder logic is one of the most popular languages for programming major PLC devices, including Allen Bradley, Siemens, and OMRON. This course introduces you to the essentials of PLC programming with ladder logic. Learn how to convert data for input and output, perform calculations with math instructions, 

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper) | 1h 35m | Intermediate | 183K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn to climb the PLC ladder](#learn-to-climb-the-plc-ladder)
  - [What you should know](#what-you-should-know)
  - [Using LogixPro PLC software simulation](#using-logixpro-plc-software-simulation)
- [**1. PLC Data Input/Output BCD**](#1-plc-data-inputoutput-bcd) (11 videos)
  - [Introduction to binary coded decimal](#introduction-to-binary-coded-decimal)
  - [Thumbwheel in PLC](#thumbwheel-in-plc)
  - [FRD instruction](#frd-instruction)
  - [Example: FRD](#example-frd)
  - [Solution: FRD](#solution-frd)
  - [LED displays in PLC](#led-displays-in-plc)
  - [TOD instruction](#tod-instruction)
  - [Example: TOD](#example-tod)
  - [Solution: TOD](#solution-tod)
  - [Example: FRD and TOD](#example-frd-and-tod)
  - [Solution: FRD and TOD](#solution-frd-and-tod)
- [**2. Math Instructions**](#2-math-instructions) (10 videos)
  - [Introduction to math instructions](#introduction-to-math-instructions)
  - [Types of math instructions](#types-of-math-instructions)
  - [Considerations with math instructions](#considerations-with-math-instructions)
  - [Example: Convert Fahrenheit to Celsius](#example-convert-fahrenheit-to-celsius)
  - [Solution: Convert Fahrenheit to Celsius](#solution-convert-fahrenheit-to-celsius)
  - [Example: Use arithmetic instructions](#example-use-arithmetic-instructions)
  - [Solution 1: Use arithmetic instructions](#solution-1-use-arithmetic-instructions)
  - [Solution 2: Use arithmetic instructions](#solution-2-use-arithmetic-instructions)
  - [ONS: One-shot instruction](#ons-one-shot-instruction)
  - [Example: ONS with math instructions](#example-ons-with-math-instructions)
- [**3. Data Compare Instructions**](#3-data-compare-instructions) (7 videos)
  - [Introduction to comparison instructions](#introduction-to-comparison-instructions)
  - [Common comparison instructions](#common-comparison-instructions)
  - [Example: Comparison instruction](#example-comparison-instruction)
  - [Solution: Comparison instruction](#solution-comparison-instruction)
  - [Limit Comparison instruction](#limit-comparison-instruction)
  - [Example and solution 1: LIM](#example-and-solution-1-lim)
  - [Example and solution 2: LIM](#example-and-solution-2-lim)
- [**4. Data Transfer Operation**](#4-data-transfer-operation) (7 videos)
  - [Introduction to MOV instruction](#introduction-to-mov-instruction)
  - [Example: MOV instruction](#example-mov-instruction)
  - [Solution: MOV instruction](#solution-mov-instruction)
  - [Masked move instruction](#masked-move-instruction)
  - [Mask parameter](#mask-parameter)
  - [Example: MVM instruction](#example-mvm-instruction)
  - [Solution: MVM instruction](#solution-mvm-instruction)
- [**5. Sequence Logic**](#5-sequence-logic) (11 videos)
  - [Introduction to sequence logic](#introduction-to-sequence-logic)
  - [Introduction to state diagrams](#introduction-to-state-diagrams)
  - [Example: Develop a state diagram](#example-develop-a-state-diagram)
  - [Solution: Develop a state diagram](#solution-develop-a-state-diagram)
  - [Understand bottle style logic](#understand-bottle-style-logic)
  - [Example: Sequential process](#example-sequential-process)
  - [Solution 1: Develop the state diagram](#solution-1-develop-the-state-diagram)
  - [Solution 2: Bottle logic for state 1](#solution-2-bottle-logic-for-state-1)
  - [Solution 3: Control section](#solution-3-control-section)
  - [Solution 4: Output section](#solution-4-output-section)
  - [Solution 5: Using the software](#solution-5-using-the-software)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn to climb the PLC ladder](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/learn-to-climb-the-plc-ladder?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/learn-to-climb-the-plc-ladder?u=76281980&t=1)** - Everyday [products](../../Skills/Software%20Development/Microsoft%20Products.md) that you use are built according to specific requirements. In manufacturing and industrial settings, robotic arms, conveyor belts, sensors and the process sequence itself are programmed to perform task to meet those requirements. [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) programming is one of the common languages used to program industrial and manufacturing processes. Although there are many types of [PLC](../../Glossary/Tool/PLC.md) devices, the concepts of the language are the same. In this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, I'll explain the basics of PLC Ladder Logic programming like math, compare and some of the data transfer instructions. I will show you sequence logic and how to use state diagrams in programming PLC processes. I'll explore each instruction separately and go through examples, step by step, to better understand each concept. You will also see the examples in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). Hello, I'm Zaharaa Khalil. I am an engineering instructor and I love teaching students just like you. Join me in my LinkedIn Learning course to explore the world of PLC Ladder Logic programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (3), [PLC](../../Glossary/Tool/PLC.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Env Vars:** plc (5)
> **Analogies:** just like (1)
> **Speakers:** - everyday (1)

#### [What you should know](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/what-you-should-know?u=76281980&t=1)** - Before you start this course, you should be able to understand a simple ladder logic program. You should be familiar with how ladder logic programming works using the basics instructions, like how to use input and output instructions, and how timer and counter instructions work. I'll focus on the concept of ladder logic programming in this course, including math instructions, compare instructions, some data transfer instructions, and learning about sequenced logic. I'll be using LogixPro [PLC](../../Glossary/Tool/PLC.md) Simulator from LearningPit. This [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) mimics Allen-Bradley Rockwell RSLogix 500. I will only use this software to demo the examples and show you how the programs work. This course does not teach the software, because you will be able to apply the knowledge to any PLC software that uses ladder logic. This course is designed as a continuation of Learning [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md). If you need a refresher on the basics of programming ladder logic, I recommend that you check it out first.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (2), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1), [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1)
> **Env Vars:** plc (3)
> **Speakers:** - before (1)

#### [Using LogixPro PLC software simulation](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/using-logixpro-plc-software-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/using-logixpro-plc-software-simulation?u=76281980&t=1)** - [Instructor] For this course, I'll be using LogixPro [PLC](../../Glossary/Tool/PLC.md) simulator from Learning Pit. This [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) mimics Allen-Bradley Rockwell RSLogix 500. Please refer to this video, LogixPro PLC Simulation Software, where I go through the software and how to download it. The simulation software is used to only demo the examples and show how the programs work. This course does not teach the software, as you can apply the knowledge to any PLC software that uses ladder logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (3), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (3)
> **Env Vars:** plc (3)
> **Speakers:** - [instructor] (1)


### 1. PLC Data Input/Output BCD

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to binary coded decimal](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-binary-coded-decimal?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-binary-coded-decimal?u=76281980&t=1)** - [Female Instructor] For a [PLC](../../Glossary/Tool/PLC.md) to control any process or application it must be able to receive signals from outside devices. As humans, we prefer to work with decimal numbers, while the PLC only understands binary information. Thumbwheels are used to allow us to input numerical data into the programmable controller. And, in the PLC, they are being read as BCD, Binary Coded Decimal. The Binary Coded Decimal System provides a means of converting a number used by humans in decimal to a number understood by the controller in binary. The BCD System uses four bits to represent each decimal digits. The four bits used are the binary equivalents of the numbers from zero to nine. Let's fresh up on the concepts of binary weightings to understand how BCD numbers are represented. A binary number means that each bit has a power of two assigned to it. The least significant bit is giving weighting of two to the power zero, that gives number one. The next bit is giving a weighting of two to the power one, which gives number two and it continues for all the remaining bits. Here's and example of a decimal number one. The binary equivalent is zero zero zero one. Another example, number three, the binary equivalent output is
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-binary-coded-decimal?u=76281980&t=95)** zero zero one one. Remember, that we place one for each binary weighting so the total is equal to the decimal representation of three. So we place one under the weighting for number one and place one for number two, that gives a total of three. In the BCD system the largest decimal number that can be displayed by any four digits is nine. So if we have a decimal number that has three digits the BCD representation of that decimal number is obtained by replacing each decimal digit by its BCD equivalent. To distinguish the BCD numbering system from the binary system, a BCD designation is placed to the right of the unit digits. Here is the BCD equivalent for number eight hundred sixty three, and the binary equivalent for the same number. Binary and BCD have the same representation in terms of zeros and ones when you look at them. But BCD uses four bits to represent each decimal digits. So you can see that BCD is different than binary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (3)
> **Env Vars:** bcd (12), plc (3)
> **Definitions:** means that (1)
> **Speakers:** - [female (1)

#### [Thumbwheel in PLC](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/thumbwheel-in-plc?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/thumbwheel-in-plc?u=76281980&t=1)** - [Instructor] A thumbwheel switch is one example of an input device that uses BCD system. Thumbwheel has four output connections and a common output. Each of the four connections, the first, second, fourth, and eight, represent the binary weighing of that number. And they are individually wired to the [PLC](../../Glossary/Tool/PLC.md) input. So for number seven, the PLC sees it as a BCD 0111, representing the decimal number. The thumbwheel, or any other input devices, are connected to the input model of the PLC. Then, within PLC, there is a BCD to binary conversion for that input. Now if we want to enter a two-digits number, then thumbwheel switches can be grouped together to support multiple digits. Now this brings us to an issue that need to be addressed. When using two thumbwheel switches, the software wrongly sees the digits as one long number. So instead of showing a binary number, a presentation of 87, the PLC wrongly interprets that as one number. The binary now shows 135 instead of 87. In order to tell the software to read each four-bit separately, the BCD number, [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) uses an instruction called FRD, that looks for each four bits as one number.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (5), [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) (1)
> **Env Vars:** plc (6), bcd (4), frd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [FRD instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/frd-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/frd-instruction?u=76281980&t=1)** - [Instructor] A decimal number is sent to the [PLC](../../Glossary/Tool/PLC.md) as BCD equivalent. And the PLC software uses an instruction to convert it to a binary value that matches the decimal number. The definition of the FRD instruction is an instruction that is used to convert the binary coded decimal, BCD, source value to an integer data and then place the results in the destination. That integer number is stored as a binary number inside the software. So, FRD can be named as BCD to binary number equivalent to the source decimal value or BCD to integer number that is equivalent to the source decimal value. You can find the two names in the documentation. FRD is a block type instruction and it has two parameters, source and destination. It is an output instruction, so we put it to the right-hand side of the Ladder Logic. The address of the source is the entire input model address. In case of the thumb wheel switch, it is the entire input model that the thumb wheel switch is connected to. And the destination is the address to where to store the data, for example, to set up a time preset
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/frd-instruction?u=76281980&t=95)** or a counter preset. For the rung control, this instruction operates continuously if there is no input. If we add an input to the rung, the instruction operates when the rung is true. So here's an example of having two-digit decimal number 18. It gets sent to the PLC as a BCD value. Software reads it as a binary which shows 24 instead of 18, so to ensure the proper conversion, FRD instruction is used to convert it to a binary equivalent of 18. In this one rung program, a decimal number 18 is read from the thumb wheel switch on inputs five I:5 and placed in I:5 as a BCD value. Then FRD instruction converts it to a binary equivalent and place it on a discreet output model O:2. So here we have the program and the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). I'm going to go ahead and download the program to PLC. Click to go online. And then I click on Run. So now notice here, nothing happens. If I go use the thumbnail, even if I go to the number that I want which is 18, notice here in rung zero, the FRD instruction only takes a number,
>
> **[3:07](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/frd-instruction?u=76281980&t=187)** it does not give it to the destination because we have a push button here that needs to be active for the FRD instruction to convert the number to the proper decimal equivalent. So I'll go ahead, I'll press on the start push button and now if you look back to the FRD instruction, so here you see the source that's coming from I:5 which is our thumb wheel, it reads the decimal number as 24 and then when it's sent back to the destination, it converts it back to the proper equivalent of the decimal number. Now the same thing if we have three thumb wheel switches representing three-digit number. FRD instruction tells the software to read each four bits separately. So this will solve the problem of wrongly interpreting the binary number as one whole number.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (4), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Env Vars:** frd (9), bcd (6), plc (4)
> **Definitions:** is an  (2), is a  (1)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)

#### [Example: FRD](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-frd?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-frd?u=76281980&t=1)** - [Instructor] Here's a simple example that uses a thumbwheel switch. Let's say, in a factory setting, we need to use the thumbwheel to preset a timer. The timer is used to keep track of heating a product. The timer can be an internal virtual device or an external device. So, simply using the thumbwheel switch to set the timer to a specific time as required and press on the start switch to start the timer. The thumbwheel switch is connected to input five module, and the start switch is connected to input one module in the [PLC](../../Glossary/Tool/PLC.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: FRD](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-frd?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-frd?u=76281980&t=1)** - [Instructor] For programming this scenario, the first rung is to having the FRD instruction. The source we need to use the whole input address, so it's local five for input and five is the input module address. Note that for the first rung, no input is placed prior to the FRD instruction. This means the FRD instruction is operating continuously. The second rung is the timer and the destination from the FRD instruction is the timer preset. We put the input switch ahead of the timer so the timer will start when the switch is on and we can control the reset of the timer when needed. Please refer to the timer section from [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) Programming course to understand more about the timer operation. If we use a push button instead, we can simply use the timer timing bit as as a seal-in instruction to keep the timer working. So let's see how this program works. I'm going to go to the rung. I'll select the preset for the timer, so let's use 20, for example, and then I'll press on the switch. You can see the timer is timing up to number 20 and notice here, if we want to select another time, I can simply just go to the thumb wheel and select another preset value and press on the start switch again and the timer will start timing to the preset value selected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1)
> **Env Vars:** frd (4), plc (1)
> **UI Navigation:** go to (2), select the (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [LED displays in PLC](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/led-displays-in-plc?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/led-displays-in-plc?u=76281980&t=1)** - [Instructor] One of the devices that are used with [PLC](../../Glossary/Tool/PLC.md) as an output is LED display. LED displays are example of PLC devices that use BCD numbering system. They display values from zero to nine and in order to show a certain number, very similar to a thumb wheel concept, LED display show the values that are based on the BCD values received using a binary weighing. So to show a number eight, then the values to be sent to the LED display are one, zero, zero, zero. This is how it works. The binary number that needed to be shown on the LED display gets converted to a BCD value then sent out to the display that shows the number in decimal. And to do so, PLC software uses an instruction called TOD. TOD behaves similarly to FRD that it converts the BCD value to a decimal number. So when the numbering needs to be shown as two digits, it looks to each four bits separately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (3)
> **Env Vars:** led (5), bcd (4), plc (3), tod (2), frd (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [TOD instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/tod-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/tod-instruction?u=76281980&t=1)** - [Instructor] [PLC](../../Glossary/Tool/PLC.md) sends out BCD number equivalent to a binary number, and it gets displayed as decimal number on the LED display. The TOD instruction is used to convert a binary value of a decimal number to its equivalent BCD value and place the results in the destination. So TOD can be named as binary to BCD conversion, or you may read it in some documentation as integer or decimal to BCD. It simply means that it converts the binary number of a decimal value to a BCD equivalent. The instruction has two parameters, source and destination, very similar to FRD. It is a block type output instruction. The source is where the incoming BCD value is coming from, and the destination is where the outgoing BCD value is going to. Here is an example of a source when using LED display. If we want to show the current time of a timer, then the source is the timer timing bit, and the destination is the entire output module. Now in order to know when to use each instruction, think about them as TOD is two. You are sending out to something.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/tod-instruction?u=76281980&t=94)** And RFD is from, so you are receiving from an output device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** bcd (7), tod (3), led (2), plc (1), frd (1)
> **Definitions:** means that (1), is a  (1), is an  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Example: TOD](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-tod?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-tod?u=76281980&t=1)** - [Instructor] Here's a scenario of an example that involves using TOD instruction. Let's assume that we want to count the number of boxes to be shipped in a mail distribution department. Every time an operator finishes a full box he or she presses on push button to start counting. And when four boxes are done a green pilot light turns on. A reset push button is used to reset the counter back to zero. Now I want to show the number of boxes on an LED display. The box and the reset push buttons are connected to input card one. The green pilot light is connected to output card two. The LED display is connected to output card six.

> [!info]- Semantic Content
>
> **Env Vars:** led (2), tod (1)
> **Speakers:** - [instructor] (1)

#### [Solution: TOD](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-tod?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-tod?u=76281980&t=1)** - [Instructor] Now to program this example, we are going to use counter up, to count the current number of finished boxes. The first thing is to have the box push button, so every time the operator presses on the push button, after the box is finished, the counter counts up. The preset is four because we need four boxes. Please refer to the counter section from [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) programming course to understand more about the counter operation. Next is to send the data to the LED display. So we use TOD instruction in the next round. The source is the counter accumulator value, because we want to see the current number of finished boxes. And the destination is the output six. Now the LED display will show whatever number shown in the counter accumulated value. The third step is to program the green pilot light to turn on when four boxes are done. So simply adding an XIC instruction with using the counter done bit and the output instruction using the address of the green pilot light. Now remember that for the counter we need to have a counter reset. So we are going to use the reset push button to reset the counter using a reset instruction and linking that to the counter address.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-tod?u=76281980&t=97)** In order to not exceed the preset value of the counter, we are going to add an XIO instruction in the first strike to disable the counter from counting beyond the preset value. And this is how the final program looks like. Let's see how the program behaves. So download the program. And then I'll hit on run. Now, I'm going to use the push button to represent the finished boxes. The first one, the second, the third, and then when the fourth is done, a green pilot light turns on. The second push button is to reset the counter. And once I press on the reset push button, the LED display goes back to zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1)
> **Env Vars:** led (3), plc (1), tod (1), xic (1), xio (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Example: FRD and TOD](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-frd-and-tod?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-frd-and-tod?u=76281980&t=0)** - [Narrator] Here's a scenario of an example where we use both RFD and TOD instructions. Let's say that we have different stations in a production floor, where a lab technician can use any of them for a temporary task. And each station has a pilot light attached to it. When the station is occupied, the technician sets the time for the pilot light to flash using a thumbwheel switch. The faster the flashing, the shorter the time needed. And the time is shown on the LED display. The technician presses on a start switch to start the process. The switch is connected to input one. The pilot light is connected to output two. Thumbwheel switch is connected to input five, and LED display is connected to output six. We need to use the thumbwheel switch to enter the number of seconds we need the LED to flash on and off. Both on and off are always the same. The LED display is to show the current time selected.

> [!info]- Semantic Content
>
> **Env Vars:** led (4), rfd (1), tod (1)
> **Speakers:** - [narrator] (1)

#### [Solution: FRD and TOD](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-frd-and-tod?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-frd-and-tod?u=76281980&t=1)** - [Instructor] The first thing we need to do is to add the FRD instruction that takes the values from the thumb wheel switch for the FRD source is input five and destination is the timer preset value because we want to set the time for the flashing light. Now for the flashing light. We need to have two timers. One to keep track of the on time and the other time is to keep track of the off time. Please refer to this video that explains the flashing light example. And we will add the XIC instruction for the start switch to associate the flashing when the technician presses on the switch and this is how the program looks like so far. And since we have two timers, then we need to add two FRD instructions to send the value to both timers. There are other methods to do so, like for example, using a move instruction. And for the light to flash, we are going to use the timer timing bit to keep it on while the on timer is working. And then finally adding the TOD instruction to take the value of one of the timers to show it on the LED. The source is the timer accumulated value and the destination is the LED display address output six. So this is how the program is going to work.
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-frd-and-tod?u=76281980&t=96)** We will set the timer for the flashing light. I'll start with 10 and then press on the start switch and notice here that the green light is on and off according to the time I selected. Once I let go the switch, I can change the preset value to, for example, 30 and then press on the start switch again and then you can see that it takes longer for the flashing light to turn one and off. Please keep in mind here that the timer base is 0.1. And the proper way is that we need to modify the input before adding it to the timer. We are going to learn this in the next chapter. The purpose of this example is to use both FRD and TOD instructions together.

> [!info]- Semantic Content
>
> **Env Vars:** frd (4), tod (2), led (2), xic (1)
> **Analogies:** for example (2)
> **Versions:** 0.1 (1)
> **Cross-References:** in the next (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Math Instructions

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to math instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-math-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-math-instructions?u=76281980&t=1)** - [Instructor] Math instructions are one of the common instructions used in [PLC](../../Glossary/Tool/PLC.md). They are used within the program to perform mathematical operations on values stored in memory words or registers. All math instructions have a similar layout. They are block instructions with two sources and one destination. Math instructions are output instructions, so we add them to the right hand side of the rung. They all work the same way. The calculation is done as destination equals source A and whatever operation is selected and then source B. So they use the content of two words or registers and perform the desired operation. The source values are simply read only, we don't change them, and the destination values are changed according to the operation used. Math instructions operation can be conditional and unconditional. With conditional arithmatic instruction, the input logic determines when the instruction executes and for unconditional, the instruction executes with every scan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### [Types of math instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/types-of-math-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/types-of-math-instructions?u=76281980&t=1)** - [Instructor] The type of operation is usually written at the top of the block to indicate what type of operation is currently used. For source A and source B fields, it can be an input rack location, file address, instruction field, or a constant. For the destination field, it can be an output location, file address, or an instruction field. In terms of operation of the math instruction, it happens every scan when the rung is true. So if we have addition, then it adds every scan when the rung is true. If there is an input in the rung, then as long as the input is true, the add operation works. These are the basic four mathematical functions performed by [PLC](../../Glossary/Tool/PLC.md). The operation of each math instruction is the same. They all have two sources and one destination, only depending on what is selected, the instruction works accordingly. In subtraction, the order of the two sources' value becomes important here. Source B is always subtracted from source A. One of the special cases is division by zero, and this results in infinity. In this case, the division instruction refuses to operate, and the destination is unchanged. So you might need to keep it in mind
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/types-of-math-instructions?u=76281980&t=94)** to not run into this situation, or remember that when debugging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Considerations with math instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/considerations-with-math-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/considerations-with-math-instructions?u=76281980&t=1)** - [Instructor] There are a couple of things I want to point out about the math instructions. For the sources and destination, one recommendation is to use different tag names for each one, otherwise it keeps adding to itself. If you have to use the same tag name we will learn how to overcome this later when we discuss the one shot instruction. Here's a demo of how fast the addition happens when adding to the same tag name. I'll click on the data table so we can see how fast the addition happens. I'll reset it back to zero so we start from zero. And then I selected the integer value, it's the value that I'm choosing for my addition instruction. So as soon as I hit on the RUN button you can see the addition happens very fast. One of the recommendations, if we want to control when the rung is true, is to add an XIC instruction before the math instruction. The input instruction can be switch address, the done bit of the timer, et cetera. Add instruction will still work the same way, keeps adding as long as the rung is true. So I'll use the same example here. I'll set it back to zero, I'll go offline, and then I will add an input instruction here for the first push button.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/considerations-with-math-instructions?u=76281980&t=94)** So the address is I:1/0 which is the start push button. Download the program to the [PLC](../../Glossary/Tool/PLC.md) and go online. I'll click on the data table again, so we can see the addition, and then I'll hit RUN. Notice here nothing happens because we need the start push button in order to start addition. So I'll click on the start push button and notice here the addition only happens as long as the start push button is true. As soon as I let it go the addition stops. You certainly don't need to add it to your PLC program if your program does not require that. But it is a suggestion to have more control when the add operation happens. Also another thing that has to do with using the same tag address for the two sources, and saving it back to the same address, you might run into an overflow for the results, because in this case, the addition will increase as a power of two, one, two, four, eight, 16, and so on. And this applies to all the arithmetic operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (2)
> **Env Vars:** run (2), plc (2), xic (1)
> **UI Navigation:** click on (3)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example: Convert Fahrenheit to Celsius](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-convert-fahrenheit-to-celsius?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-convert-fahrenheit-to-celsius?u=76281980&t=1)** - [Instructor] Here's an example to convert Fahrenheit temperature to a degree Celsius. This is the equation to convert from Fahrenheit to degrees Celsius. And for that purpose, I'm going to use the thumbwheel switch to input the temperature in Fahrenheit and then use LED display to show the temperature in degrees Celsius. A thumbwheel switch is connected to the input module five to enter the temperature in Fahrenheit and LED display is connected to output module six to display the temperature in Celsius.

> [!info]- Semantic Content
>
> **Env Vars:** led (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Convert Fahrenheit to Celsius](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-convert-fahrenheit-to-celsius?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-convert-fahrenheit-to-celsius?u=76281980&t=1)** - [Instructor] For the solution, the first thing we do, we place the FRD instruction to receive values from the thumbwheel switch. The input is, input five, and then we save the number we read in an integer number location N7 bit zero. Integer helps in displaying a whole number. Then we will add the math instructions needed. First, subtract 32, so source A is the address where we kept the values from the thumbwheel switch N7 bit zero, and save it in another location N7 bit one.
>
> **[0:43](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-convert-fahrenheit-to-celsius?u=76281980&t=43)** Then multiply by five and then divide by nine. Notice here that I kept using different integer addresses for each operation. And finally add the TOD. TOD instruction is used to convert BCD values into integer and send it back to the display. So here's how the program works. I'll hit into the run. And any number I put in here, it will show on the display. So example, I'll use 68. And it gives you the number in degrees celsius. So the thumbwheel takes it in fahrenheit and the LOD display shows it in degrees celsius. Some software might work differently and prefer separate rungs for each math instruction. I find it easier to debug when I have them in separate rungs if I don't have a long program. Otherwise, I'll keep them all in one rung. But this is just my preference.

> [!info]- Semantic Content
>
> **Env Vars:** tod (2), frd (1), bcd (1), lod (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Example: Use arithmetic instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-use-arithmetic-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-use-arithmetic-instructions?u=76281980&t=1)** - [Instructor] In manufacturing process, the scenario goes this way. We need to leave the fan on for a certain time to cool down the finished [products](../../Skills/Software%20Development/Microsoft%20Products.md) and we want to keep track of the remaining time. A technician sets the time, the thumbwheel switch is used to enter the value for the timer, and a press on the start push button to start timing. Then LED display is used to show the countdown of the remaining time in minutes or seconds depending on the program preference. During that time, a yellow pilot light is on so the yellow LED is used to show when the fan is on and when the timer is done timing, a red pilot light turns on. The start push button is connected to input one, the pilot lights, red and yellow, are connected to output two. The same thing with the fan. The thumbwheel switch is connected to input five and the LED display is connected to output six.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** led (3)
> **Speakers:** - [instructor] (1)

#### [Solution 1: Use arithmetic instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-1-use-arithmetic-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-1-use-arithmetic-instructions?u=76281980&t=1)** - [Instructor] For the solution, the first step is using FRD to get the values from the thumbwheel switch. This number is actually the time limit we have. Now, since the timer has the time base of 0.1, so for 10 seconds, for example, we need to multiply any number we enter using the thumbwheel switch by 100, and then take the number and put it in the timer preset. For one second, we multiply by 10. For 10 seconds, we multiply by 100. Please refer to the timer section in the Learning [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) course if you want to learn more about the timer base. So we are going to add a multiply math instruction, multiplying by 10 or 100 depending on what you want to show in the timer. I use 10 to see the timer faster. And the destination is actually the timer presets. Now we need to focus little bit on this rung that has the timer. Since the timer starts timing when the push button is pressed, so we need to add an XIC instruction for the start push button. And in order to reset the timer, an XIO instruction is added using the timer done bit. Now to keep the timer active during the timer timing, we add a seal-in instruction
>
> **[1:33](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-1-use-arithmetic-instructions?u=76281980&t=93)** using the timer enable bit to keep the rung activated during the time selected. The reason that I selected the enable bit, not the timer timing bit, because I want to use the timer done bit when it's done timing. And during the timer timing, a yellow pilot light is on, so we add that as another output. The same thing applies for the fan. And this is how the program looks like so far. Now adding the time done bit to activate the red pilot light when the timer is done timing. And to keep it on as long as the timer is not enabled, we add a seal-in instruction of an XIO instruction for the timer enabled bits. And this is how the program looks like so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1)
> **Env Vars:** xio (2), frd (1), plc (1), xic (1)
> **Versions:** 0.1 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution 2: Use arithmetic instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-2-use-arithmetic-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-2-use-arithmetic-instructions?u=76281980&t=1)** - [Instructor] Now for the next step in order to show the time remaining, I'll explain what I'm going to do using this simple visualization. Think about it this way: if I ask you to count from one to 10, 10 being the preset value here, you would start counting from one, two, three until you reach 10, right? Now, if I want you to count backwards, 10, nine, eight and so on, notice here that going backwards is simply subtracting 10 minus the number I was counting up to. So 10 minus one equals nine. 10 minus two equals eight and so on. So I can use the 10 which is my preset value minus the accumulated value in order to show the remaining time. Simply the time remaining equals timer preset minus timer accumulator. For that, we are going to use a subtraction instruction in the run subtracting the preset minus the accumulated value and saving the results in address N7 bit one. And then finally, to send the values to the LED display, we need to divide it back to the original number. So dividing by 10. The same number we used to multiply it in the beginning. So if you use 100, you need to divide by 100. And then using the TOD instruction to send it to the LED display.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-2-use-arithmetic-instructions?u=76281980&t=95)** And this how the program looks like at the end. So this is the program in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). You can see in rung two that I used the yellow pilot light for output 2/0. And for the fan, I used another pilot light to show demonstration of the fan working which is output 2/1 and then finally, for the red pilot light in rung three, I have it on output 2/2. So I'm going to go ahead and run the program. Notice here there is a red light right away. It shows that there's no timer is timing. So I'm going to go ahead and select the time that I want to leave it on. I'll select 30 second, for example, and then I'm pressing on the Start Push button. Notice on the left-hand side, you have the yellow pilot lights is on as well as the fan. And you can see in the LED display over here that it's counting down the time remaining for the fan to be on. Once the time is up, a red pilot light turns on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Env Vars:** led (3), tod (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [ONS: One-shot instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/ons-one-shot-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/ons-one-shot-instruction?u=76281980&t=1)** - [Instructor] One Shot Instruction is an input instruction that allows an event to happen only once per scan and it requires a single tag of a Boolean type, either zero or one. One Shot Instruction is placed in the middle of the rung as an input instruction, so after the input XIC instruction in this case. And it's used to turn an output on for one program scan only. It is usually given an address. Every One Shot Instruction has a different address if we're using multiple ones during the program. When the logic or instructions ahead of the One Shot are true, the One Shot Instruction allows logical power to the instruction on its right, which is in this case is the output for exactly one scan. After the one scan, if the logic ahead of the One Shot is still true, the One Shot Instruction will not let the logical power through. When the logic ahead of the One Shot Instruction is false, the One Shot Instruction resets and it's ready to operate again. We usually use it when we want an event to happen only once per scan, no matter how long we keep it on. One of the uses for it is for a timestamp.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/ons-one-shot-instruction?u=76281980&t=95)** Here's an example. If we want to take timestamp of the time when a technician first enters the room, turns the switch on, and leave it on throughout the day. No matter how long we leave the door switch on, we only take the time of the first scan. There are two common types of One Shot Instruction. One Shot Rising, and One Shot Falling. In this course, we will use One Shot Rising, which is the most common type you will see.

> [!info]- Semantic Content
>
> **Env Vars:** xic (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Example: ONS with math instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-ons-with-math-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-ons-with-math-instructions?u=76281980&t=1)** - [Instructor] Now let's try to see how the one shot instruction comes in handy when working with math instructions. Whenever we use math instructions, and the result is placed back to the same initial address, you can get multiple iteration of the same compounding. So in our example, this causes the instruction to keep adding two to the same tag and will increment many times per second whenever the input is true. To solve this problem, we use one shot instruction. This will ensure that we have the addition happening only one time per scan. Let's take this example. This is a very simple Ladder Logic code. I use a Start Pushbutton that is connected to an addition instruction and I'm going to use N7 address which is the integer in the data table for the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). So in order to see the data table, you click over here and then I'll just drag it so you can see it and then you can select the type of address that you want to see. And I want to look into the N7, so it's N7 integer and then you have an option of seeing it in binary, octa or decimal and I'll select decimal. Now, please pay attention to the N70, the value of the N70. So the value will be changing as soon as the input is true.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-ons-with-math-instructions?u=76281980&t=94)** I'll go ahead and I'll run the program. And then as soon as I press on the Start Pushbutton, notice how fast addition happens. As soon as I let go, it stops. Now, after adding the one shot instruction, which is a Boolean type, so the address for the one shot will be B3:0 bit zero. So I'll go ahead to the same program that we had and then I'll add a one shot instruction. I'll close that, go offline. You can find the one shot under the tab User and it's over here, so I'll just drag it and then I'll use the binary address. B3 0/0. And if you want to know exactly where this address is, I'll go to the data table again, I'll reset this back to zero because we need to see it from the beginning and then you can go that binary B3 and then show it in binary and it's this bit over here. So it's a bit 30/0. I'll go again to the integer, choose it as a decimal and let's see now what difference does it make when adding the one shot instruction. So again, you need to go online, download the program and then see what happens when I press on the Start Pushbutton, we need to run the program,
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-ons-with-math-instructions?u=76281980&t=188)** as soon as I press, it only adds two. No matter how long I keep it on, no further addition is happening. Once I let go, it resets, so if I press it again, it adds two again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** n70 (2)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 3. Data Compare Instructions

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to comparison instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-comparison-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-comparison-instructions?u=76281980&t=1)** - [Instructor] When working with a programming ladder logic, you may run into a situation where you need to compare numerical quantities, like if the temperature reached the specific value. A data compare instruction is used to compare two values. It is an input block-type instruction with two sources only, Source A, and Source B. Since it's an input, so the instruction is added to the left-hand side of the rung where inputs are placed. It compares two values and produces a discrete logic output based on the comparison. And remember that our rung must have an output, so we'll have an output for that specific rung. The two sources are Read-only, so they do not change. The instruction is to compare any two values stored in the data register table, so two tags from the tag table, or compare a value stored in the register, the tag table, with a constant. If the comparison instruction is true, then the whole block instruction is set true, which means whatever it's connected to turns on. Otherwise, it will remain false.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Common comparison instructions](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/common-comparison-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/common-comparison-instructions?u=76281980&t=1)** - [Instructor] The common conversion instructions that are used in [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) programming are equal, not equal, greater than, greater than or equal, less than, less than or equal. The name of the instruction is written on the top of the block. An equal instruction is true whenever the source values for A and B are equal. Then the rung is true and the output turns on. An example is if the temperature reaches 50 degrees, a light turns on indicating that. Since compare instructions are input, so we can have as many other inputs required by the logic. For example, we can have a start push button. In this case, the red pilot light turns on only when the start push button is pressed, and the temperature equals 50. Both inputs need to be true. The not equal instruction is true whenever the source values are not equal. So in this case, whenever the temperature does not equal 50 degrees, the green pilot light turns on. If the temperature reaches 50 or it equals 50, in this case, the light turns off. The same applies, depending on the instruction type. For example, when you use greater than, less than, and the same for all other conversion instructions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1)
> **Analogies:** for example (2)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### [Example: Comparison instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-comparison-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-comparison-instruction?u=76281980&t=1)** - [Narrator] Here's a scenario for a section within a production line. This is part of a batch-counting operation to sort parts automatically for quality control. A sensor is used to detect the defective parts. The proximity sensor is used to count the parts as they pass by on the conveyor for the quality control line. Once eight parts have been detected, a red pilot light turns on. When less than eight parts detected, a green pilot light is on, indicating we're still within the accepted limits. A reset push button is used to reset it back to zero when the new batch of parts are coming. The two pilot lights are connected to output two. Reset push button and the sensor are connected to input one.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Solution: Comparison instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-comparison-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-comparison-instruction?u=76281980&t=1)** - [Instructor] For the first rung, we are going to use a counter up to count the number of parts. And the proximity sensor is an input. Every time a part passes by the quality control line, the counter counts up. Now, the tag we are going to use in the compare instruction is the counter accumulated value, because we want to use the current number of parts. If the accumulated value is less than eight, then a green pilot light turns on. If the accumulated value equals eight, then a red pilot light turns on. Now, we need to add the reset pushbutton for the counter. Remember that counter needs a reset instruction to reset it back to zero. We can also add another compare instruction, less than, in the first rung. This is used to prevent the counter from exceeding the preset value. So, as long as the accumulated value is less than the preset, the counter keeps counting. As soon as the accumulated value equals the preset, eight parts have been detected, now no matter how many times the proximity sensor is activated, the counter won't count up. We need both instructions to be true for the logic to work. And this is how the complete program looks like at the end.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-comparison-instruction?u=76281980&t=95)** So, here we have the program in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). I'll go ahead and run the program. Notice here, as soon as I run the program, a green pilot light turns on, indicating we have less than eight parts detected. I'll use the pushbutton to mimic the proximity sensor, and I will count to eight to see if a red light turns on.
>
> **[2:06](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-comparison-instruction?u=76281980&t=126)** So, as soon as the accumulated value equals eight, the red pilot light turns on, and I can reset it back to zero. Notice here that the green pilot light turns on again, and then we can start the counting again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Limit Comparison instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/limit-comparison-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/limit-comparison-instruction?u=76281980&t=1)** - [Instructor] There is a special instruction that we can use to replace two comparison instructions, which is limit comparison instruction. The limit comparison instruction is used to test for values if they are within or outside of a specific range. The instruction has three parameters, low limit, test, and high limit. And the instruction uses the test to compare it to the limits. Limits and the test can be [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) addresses or constants. The instruction goes true if the value of the test is equal to or greater than the low limit and the test is less than or equal to the high limit. So instead of using two compare instructions limit instruction is used. The limit instruction can work in two different ways depending on what is selected for low and high limits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example and solution 1: LIM](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-and-solution-1-lim?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-and-solution-1-lim?u=76281980&t=1)** - [Instructor] Here is a simple example to show how the limit instruction works. Let's say that we have a machine application where an operator is allowed to enter the motor speed. The motor speed needs to be between zero and 1,750 RPM.
>
> **[0:22](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-and-solution-1-lim?u=76281980&t=22)** If the value entered is between zero and 1,750 RPM, then the motor works. We are going to use a thumbwheel to enter the speed of the motor. The first thing we do is to use FRD instruction to take the values from the thumbwheel switch and save them in an integer value, N7:0. Then, in the second run, we add the limit instruction. The value of the low limit is zero, and the value for the high limit is 1,750. Now the value we're testing is the one we saved in N7:0, the thumbwheel value that the operator entered. If the value is within the limits, then the motor turns on, and I will use an LED to represent the motor operation. So here's the example in the software, and for the motor, I use the output 2/2. So I'm going to go ahead and run the program. Notice here, because the speed is zero, the motor is on, and then as soon as I start the operation, we're still having the motor on. As long as I'm within the limit, the motor is on. So I'll go ahead and exceed the limit that I have for the high limit. As soon as I go to 1,800, the motor turns off.

> [!info]- Semantic Content
>
> **Env Vars:** rpm (2), frd (1), led (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example and solution 2: LIM](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-and-solution-2-lim?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-and-solution-2-lim?u=76281980&t=0)** - [Instructor] Here is how to use the limit instruction differently. Let's say we want to look at the temperature value and determine if it's outside a desired range. If the value is outside the limit, a yellow pilot light turns on, indicating it's outside the limits. We are going to use a thumbwheel to enter the temperature value. Think about it this way, if we want to test for a value between two limits, zero and 100, the low limit is zero, and the high is 100. Now, using the limits instruction is pretty straightforward, right? Now, what happens if I want to test outside the limits? The value could be more than the high limits or less than the low limits. So the way to include all the values below the low limits and above the high limits is to switch them. Switch the low and high limits. So the high limit is zero and the low limit is 100. In this case, if the temperature is anything outside the range of low limit 100 and high limit of zero, the instruction will be true. The LED is on, indicating we're outside the limits. A temperature value within zero and 100 degrees will make the instruction false and the LED will not turn on. And for that purpose, we're using the thermal switch
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-and-solution-2-lim?u=76281980&t=95)** to enter the value of the temperature, so we need to add an FRD instruction in the first rung. So this is the program that we have in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) and we're going to go ahead and download it to the [PLC](../../Glossary/Tool/PLC.md). And then go online and then the program. So see here, because you're within the limit, the LED does not turn on. As soon as I go above the limit, the red LED or the yellow LED, whatever you select, will turn on. So if you're outside the limit, zero and 100, the LED is on, as soon as I go back within the limit, the LED is off again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1), [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** led (7), frd (1), plc (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Data Transfer Operation

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to MOV instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-mov-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-mov-instruction?u=76281980&t=1)** - [Instructor] The MOV instruction is considered one of the data transfer instructions. Data transfer instructions simply involve the transfer of the content from one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) or register to another. A MOV instruction comes in a block format with both a source and a destination parameter. The MOV instruction moves a copy of one data file word to a specific destination. This instruction only copies the data, although the name says move, but it moves a copy of the data from the source to the destination. It does not convert or manipulate the data in any way. The source and the destination tags should be of the same data type. They both can be tag addresses, or you can move a constant into a tag. So it can either be a variable value stored in a word with changes during the program execution, or a fixed constant value, which is entered during the programming. It is a block output instruction, so we add it to the right-hand side, and it performs whenever the input is true.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **Env Vars:** mov (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example: MOV instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-mov-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-mov-instruction?u=76281980&t=1)** - [Instructor] Here is an example that we are going to use move instruction to move a value. Let's say we have 10 desks that operators can leave [products](../../Skills/Software%20Development/Microsoft%20Products.md) to air dry them while in the production floor. Every time a station gets used, a push button is pressed to start counting. If less than 10 stations are occupied, then we will show the number of the current station used on the LED display. When all 10 stations are used, then a red pilot light will turn on and someone needs to come to press on a push button to reset the counter. Station Count push button and the Reset push button are connected to Input 1, the red pilot light for indicating stations are full is connected to Output 2 and the LED display is connected to Output 6.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** led (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: MOV instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mov-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mov-instruction?u=76281980&t=1)** - [Instructor] For the first rung, adding the station count push button and the counter up with a preset value of 10. Now to not exceed more than 10, we are going to add an XIO input instruction using the done bit of the counter. Then we use a compare instruction. If the counter accumulated value is less than or equal to 10, we need to show that on the LED display, so we use less than or equal instruction, then we use a move instruction and move the accumulated value to an internal integer N7 bit zero that eventually will be sent to the LED display. The next rung is where we want to show it on the LED display, so we use TOD instruction. The source is the N7 bit zero where we saved the data of the accumulator value and the output is output six. And once the accumulator value reaches 10, the red pilot light turns on, indicating that no more spaces are available. In this case, we use equal compare instruction and the output is the red LED. And finally, adding a reset and push button to reset the counter. So here we have the program
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mov-instruction?u=76281980&t=94)** in the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). I'm going to go ahead and run the program and notice here, no pilot light is on because we're less than 10 stations. I'm going to use the push button to count for the station. Notice here that the counter is counting up in rung zero. And then you can also see the current number of station occupied on the LED display. So until we reach 10 stations, once 10 stations are on, a pilot light turns on. I'll change it to red pilot light to match our example. And then once we can click on the reset push button, the counter resets and then I can go ahead and count for another 10 stations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Env Vars:** led (5), xio (1), tod (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Masked move instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/masked-move-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/masked-move-instruction?u=76281980&t=1)** - [Instructor] Another instruction that is part of the data transfer instructions is masked move instruction. It is an instruction that is similar to the move instruction, that it moves a copy of a value from a source to a desired destination. The difference is that the masked move instruction allows portion of the source data to pass through a mask to the destination address. The source value is unchanged. A mask is used to filter out source bits that are not required to be transferred to the destination. The masked move instruction is an output instruction, so we add it to the right hand side of the rung. And it moves the values during each scan, providing the rung conditions are true. Masked move instruction is considered one of the advanced instructions. The instruction has three parameters, source, mask, and destination. The source can be a constant, or the address of [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of the data you want to move. Example could be inputs one or internal tag n seven zero, or values from timer or counter. The destination is the specific address of word where the data is to be moved to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Definitions:** is an  (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Mask parameter](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/mask-parameter?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/mask-parameter?u=76281980&t=1)** - [Instructor] In the mask parameter, we put the value that is used to mask, or filter, the source data. The mask is a hexadecimal value. Mask bits can be either a constant or the address where the mask will be found. Data is passed through the mask bit by bit. The mask bit in the same position as the source bit determines if the data is to pass or not. To pass data through the mask, we set the bit to be equal to one in order to make the data pass through. To mask data from passing from the source to the destination, we set the bit to be equal to zero. So here's how it works. If the source data is this 16 bit [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) binary number and the mask is this 16 bit word binary number, now the values that are going to be moved to the destination are the ones with one. Remember, to pass data is to make the mask one and to block the passing is to make it equal to zero. So the first eight bits of this 16 bit word source will only be allowed to pass from the source to the destination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example: MVM instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-mvm-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-mvm-instruction?u=76281980&t=1)** - [Instructor] I am going to use the same move example with a little modification to show you how the Masked Move Instruction works. Since the Masked Move Instruction is considered more of an advanced instruction, so I will not dive into a very detailed example, as this instruction is usually used in more advanced applications. For this example, this time we will use the Masked Move Instruction to only pass the first bit of the accumulator value. And then, use this number to turn on or off a yellow pilot light. It is only when bit, so it's going to be Boolean, either zero or one. The purpose is to show you that it only passes according to the masked value selected. The source is the Counter Accumulator Value, the mask, in order to only pass the first bit, is simply one, and the destination is to move it to an internal integer value N7:1. So for that, once we press for the first station, the number will be one, so the bits are zero, zero, zero, one. And this means that only the first bit is going to get passed and the LED will turn on. Now, once we press for the second station, the accumulator value is two,
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-mvm-instruction?u=76281980&t=94)** so the binary number is zero, zero, one, zero. So, since one is only at the least bit of the mask, the only number that gets passed is zero. And in this case, the LED will not turn on. For number three, the binary is zero, zero, one, one. So, the destination has number one and the light will turn on. And the same thing applies now to all the numbers until we reach for station number 10.

> [!info]- Semantic Content
>
> **Env Vars:** led (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Solution: MVM instruction](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mvm-instruction?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mvm-instruction?u=76281980&t=1)** - [Instructor] Now for the solution, and in order to show the values together, and only for demonstration purposes, let's move accumulative value to an internal integer, N7:7. And then use the Masked Move Instruction to move the masked values to the destination of N7:8.
>
> **[0:26](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mvm-instruction?u=76281980&t=26)** So you will see it similar to what you see now on the screen. You will see the source value, and you can see the bits that get passed using the Masked Move Instruction which is only the least bit. As for the yellow pilot light, we will use a compare instruction. If the value of the masked is one, then turn on the LED. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the program is the same. I did however just remove the previous move instruction from the previous solution. And I passed the values that I want to show on the LED display using the TOD instruction right away, as you can see now on the screen for this rung. Both styles work the same way. You can certainly keep it as it is if you prefer it that way. So this is the program, it is [Simulation Software](../../Skills/Hardware/Simulation%20Software.md). You can see in rung one that I moved the accumulative value to N7:7 and I used Masked Move Instruction to mask the D.O. And move the values to N7:8. And to see the data, I'm going to click on the data table over here and I'll drag it to the side. Now we want to see the data in integer N7. I'll change them to binary so we can visualize the bits easier. So I want you not to pay attention to the values
>
> **[1:59](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mvm-instruction?u=76281980&t=119)** that you see in N7:7 and N7:8. So I'm going to go ahead and run the program and then the first thing, nothing happens because we only have zero. Once I press for the first station, look at the values in N7:7 and N7:0 and then you could also see that the yellow pilot light is on because the mask value is already one in N7 8. Now I'll press for the second station. Once I press for the second station notice here for N7:7 and N7:8 that it has a zero in the least bit.
>
> **[2:50](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-mvm-instruction?u=76281980&t=170)** So the yellow LED will not turn on because it's receiving a zero. I'll go head for the third station, again look at the values and the two addresses. Now the yellow pilot light is on because we have one in the masked destination and then I'll continue for the rest of the station you can see this one has a zero, this one has one, and so on and so forth. I hope this example shows you how the masked move works in terms of moving one bit at a time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Env Vars:** led (3), tod (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 5. Sequence Logic

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to sequence logic](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-sequence-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-sequence-logic?u=76281980&t=1)** - [Instructor] Many [PLC](../../Glossary/Tool/PLC.md) applications are usually done for operations that require a specific sequence. Here's a simple sequence for an operation. We load a part, cut it, paint it, and then unload it into a box. These steps repeat multiple times according to a preset plan and each step depends on the previous one. Now each of these steps would have various outputs to be On in order to do that specific step and various inputs would have to be True in order to move from step to another. In order to make it easier for programmers to follow a generic form to program a sequence operation, a state diagram is used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to state diagrams](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-state-diagrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-state-diagrams?u=76281980&t=1)** - [Instructor] A state diagram is a standardized method to visualize the sequence and defining sequential logic problems. Simply, where each step in a sequential process can be thought of as a state. Now, the way the state diagram is created is by having the states drawn as circles, and lines with arrows show the path from a state to another. Now, depending on how many states you have defined, the state diagram changes. In our example, we had four states, then we will have four circles, each representing a state. Most sequential processes repeat and hence we go back to the beginning state, where state diagrams usually have a defined starting point for each sequence. Now for numbering the sequence, there are two kinds of approaches. One, is to start with zero, the other one is start numbering from one, either one works. And we usually keep or reserve the first state to be the when where all outputs are off, a null state. The sequence always goes back to the first step When it's complete.
>
> **[1:35](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/introduction-to-state-diagrams?u=76281980&t=95)** We list the conditions needed to move from a state to a state on the path. Think about it as the inputs to the next state. And inside each state or circle, we list the outputs which needed to be on. Any outputs that are not listed are assumed to be off.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Example: Develop a state diagram](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-develop-a-state-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-develop-a-state-diagram?u=76281980&t=1)** - [Instructor] Now let's take a simple sequence process and develop a state diagram for it. In this example, we have a start push button to open a value to start filling a tank with a liquid. Once the liquid inside the tank reaches a certain level, a level sensor will indicate that. Then, the mixer starts for three seconds and once the three seconds end, the process is complete and everything shuts off. And here are the steps for this specific sequence process.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Develop a state diagram](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-develop-a-state-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-develop-a-state-diagram?u=76281980&t=1)** - [Instructor] The first thing in developing a state diagram is to indicate the null state where everything is off and this is state zero. And to start the process, we need to press on the start pushbutton to get us out of the current state to the next one, so pressing on the start pushbutton is considered as the input to the next following state and we put that on the arrow leading to the next state. As you remember, the first part is for the pushbutton to open the valve. For state one, the only output that is currently on is the valve. Valve opens in order to fill in the tank. No other outputs are on during this state, for example, the mixer or the timer. Remember that only the outputs that are currently on, we put them inside the circle. Now, the next part was once the liquid reaches a certain level, the level sensor will indicate that and the mixer will turn on. Then the input to the next state is when the level sensor turns on. That is when the liquid is up to the specific level needed. For the next part, you see that the mixer is on for three seconds and in state two of the state diagram, the outputs that are currently on
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-develop-a-state-diagram?u=76281980&t=96)** are the mixer and the timer that are set for three seconds. The mixer starts mixing and the timer starts timing. Now for the last part, when the timer is done timing, the process completes and in order to go back to the first null state, we use the timer done bit to go to the next state which is in this case going back to state zero. And this completes the state diagram that represents this simple sequence we have. Note here that this example is done very simply for educational purposes to explain the concept of state diagram and hence, it is not a complete practical one.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1), go to (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understand bottle style logic](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/understand-bottle-style-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/understand-bottle-style-logic?u=76281980&t=0)** - [Instructor] When it comes to [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) programming there is a general format for the rungs for the sequential logic. And the format is called the bottle logic. It is named after the shape of the control rung which have a bottle like shape. Each state in the state diagram will have one bottle control rung in the control section. So if we have three states then we will have three rungs off the bottle logic in the control section. This is the general format. The rung has the following. Three input instructions, and a second rung, a CLN instruction, for the fourth input instruction. And one output. And we call this the control section. This is how the control section looks like. As the name says it. It only programs the control part of the logic. The outputs are in the output section. So the ladder logic will look like this, with two main sections. Control and output sections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1)
> **Definitions:** is a  (1), is called (1), we call this (1)
> **Env Vars:** plc (1), cln (1)
> **Speakers:** - [instructor] (1)

#### [Example: Sequential process](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-sequential-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-sequential-process?u=76281980&t=1)** - [Instructor] Let's take this sequence example and create a state diagram for it, and then, programming it using the sequential method ladder logic. So, here we have a sequence process where we need to paint a part and load it into a box. The process goes this way. First, we put the part, and then press on the start pushbutton to start the conveyor. Then, a sensor detects a part in the middle, and the conveyor stops. A paint is turned on for three seconds. After three seconds are done, the conveyor is on again. A box sensor detects the part when it reaches the end, and finally, place it in a box. The sequence repeats until 10 parts are painted. These are the steps for the sequence. The first thing we need to do is to identify the inputs and outputs, which makes it easier when developing a state diagram. As for the inputs, we have a start pushbutton, sensor that detects the parts, and the box sensor. As for the outputs, we have the conveyor that turns on or off, paint valve, the timer that times for three seconds, and finally, the counter that counts the 10 parts.
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/example-sequential-process?u=76281980&t=98)** So, here are the inputs and outputs for our example. And this is the schematic of the wiring to the [PLC](../../Glossary/Tool/PLC.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (1)
> **Speakers:** - [instructor] (1)

#### [Solution 1: Develop the state diagram](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-1-develop-the-state-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-1-develop-the-state-diagram?u=76281980&t=0)** - [Teacher] Let's develop the state diagram together. The first state is where everything is off. Now, in order to get out of the state we need to press on the start push button to start the conveyor. This will be the path to move from state zero to state one. Think about it this way, as an input in order to move to the next state, and for state one notice here I have one output that needs to be on. In state one only the conveyor is on. Now when the part reaches the middle of the conveyor a sensor detects a part, then the conveyor turns off, and a paint valve is turned on for three seconds. So I know that the sensor is the input that leads to the next state. In state two the outputs that are currently on are the paint valve and the timer for three seconds. Paint and timer are placed inside the circle as they are the outputs to be on during that state. No other output is on. The conveyor is off and hence we don't have it inside the circle this time. Then after the timer is done timing the conveyor moves again.
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-1-develop-the-state-diagram?u=76281980&t=94)** So the input that takes us to the next state is the timer done bit and the conveyor output is on during state three. Notice here that I did not go back to state one, even though the output is the same having the conveyor on, because we need to maintain the sequence and the conditions that lead to state three are different than those for state one. The conveyor then keeps moving until the box sensor detects the part. The conveyor stops at that time so the condition that takes us out of the current state to the next one is the detection of the part by the sensor. Then the counter starts counting the parts so the output that is on during this state is only the counter. Now the counter done bit is not activated yet. In other words we did not reach 10 parts yet. Then the counter is not done counting. The conveyor and the sequence starts again with a new part. So this time we go back to state one. We don't need to press on the start push button again because we did not finish the parts yet. Counter is not done counting yet. If the counter is done counting the 10 parts then the process is finished and the sequence goes back
>
> **[3:09](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-1-develop-the-state-diagram?u=76281980&t=189)** to the null state where everything is off until another box is ready and the whole sequence starts again, and this is the complete state diagram for our example.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (2)
> **Definitions:** in other words (1)
> **Speakers:** - [teacher] (1)

#### [Solution 2: Bottle logic for state 1](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-2-bottle-logic-for-state-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-2-bottle-logic-for-state-1?u=76281980&t=1)** - [Instructor] So now we'll take the complete state diagram and convert it to a [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) program. The first part is to develop the control section using the bottle logic format. And this is the general format for a bottle logic. Let's get started by going through the first state. I will start with state one. I'll go back to state zero later, and I will follow the format as it is. So according to the bottle logic format, I'm currently in state one. So the current step is step one. Notice here, in the bottle format, I renamed them as steps for simplicity, but you can keep them as state if that what you prefer. So what I do is I replace that whenever it mentions the current step. So it's mentioned here and here. And I simply rename them as step one. Now the previous step is a step zero, the next step is step two, so simply writing that down, following the format of the bottle logic. Now the input condition to go to step one is by pressing on the start push button, and replace it where the input condition is. You take the input condition from the writing above the arrow leading to step one.
>
> **[1:37](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-2-bottle-logic-for-state-1?u=76281980&t=97)** And this is the complete bottle logic rung for state one. And I take that and place it in the beginning of the ladder logic for the control section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1)
> **Env Vars:** plc (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution 3: Control section](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-3-control-section?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-3-control-section?u=76281980&t=0)** - [Teacher] Let's take the second state which is state two. The current state is step two, the previous one is step one, and the next one is step three. Simple, right? Now, the conditions this time are different. The input is when the part sensor is on. Remember, the input conditions are above the arrow leading to that state. So simply placing them according to the bodologic format. And the same thing applies for step three and step four, we need to know what step we're currently in and then change the input conditions accordingly, and this is how the control section looks like for the four states we have. For step four, we don't need to use the hold in for that state, because if the counter is not done yet, it goes back to step one, so I simply removed the seal in part. Now for state zero, little bit different than the other states. We know that it's only on when everything is off so simply one rung where all steps are off. So using XIO instructions. And we also know that to come back to step zero is when the counter at step four is done counting. So step four and the counter done bit
>
> **[1:36](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-3-control-section?u=76281980&t=96)** instructions are added to the same rung. And this is how the control section of this example looks like so far. Now let's look back at state one. Notice here that we have two arrows going to state one. We have included the one that comes from state zero but we need to also include the one that comes from state four. That is when the counter is not done yet counting. There are two paths leading to state one. The first one is when the start push button is pressed at the beginning or the second one is when the counter is not yet complete and dump the counting for the ten parts from step four. And this is the complete control section for this example. Notice here that we've covered all the inputs needed for this part. And also I would like to point out that the steps are internal tags of a Boolean type. They're not connected to any physical outputs. They're either on or off.

> [!info]- Semantic Content
>
> **Env Vars:** xio (1)
> **Speakers:** - [teacher] (1)

#### [Solution 4: Output section](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-4-output-section?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-4-output-section?u=76281980&t=1)** - [Instructor] Now for the output section we will focus on the outputs as indicated by its name. Now for the output section we need to look back at the outputs inside the state diagram. Remember, that outputs are inside the circles. So the first output is the conveyor. And looking into the state diagram the conveyor is on in step one and step three. And remember that for the outputs only use a particular output one time in your program. And this is the first part of the output section. And then we go again to the state diagram and see step two, to check what outputs are currently on. In step two only the paint and the timer are on. Notice here that the paint and the timer are only on in step two, no other step require any of them. And this part gets added to the output section too in the ladder logic. Now back again to the state diagram, the conveyor in step three was already covered. Remember that we use the output only once in the program for multiple inputs. Please refer to this video to learn more about outputs in [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md). Finally for the counter, it is on in step four only. Now remember the counter needs a reset
>
> **[1:38](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-4-output-section?u=76281980&t=98)** in order to go back to zero when it's complete. And to reset the counter is when we repeat the sequence. So when the start push button is pressed and the counter done is activated. Another way to reset the counter is using step zero and counter done bits. Here it comes your kind of [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) style, both methods work. And this is how the complete output section looks like for our example. Notice here in the output section we cover all the outputs of example. And finally, this is how the complete program looks like for our example. The control section and the output section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (1), [PLC Programming](../../Skills/Hardware/PLC%20Programming.md) (1)
> **Env Vars:** plc (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Solution 5: Using the software](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-5-using-the-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-5-using-the-software?u=76281980&t=1)** - [Instructor] So before we see the demo using the [Simulation Software](../../Skills/Hardware/Simulation%20Software.md), let's just recall the process. So first of all, we have a part that we put on the conveyor. I'm pressing the Start Push button, the conveyor starts until it reaches the middle where it can be our steps, the paint is on for a couple of seconds. After the timer is done, the conveyor starts again until it gets to the box sensor where it gets loaded to a box until 10 parts are done. So this is how the program in the simulation software, you can see that starting from rung zero all the way to rung four is the control section. And then if I scroll down a little bit to the bottom, starting from rung five, all the way to the end which is rung eight is the output section. So I have them all as one program in one Ladder Logic. Now I'll scroll up a little bit more to the top and I would like to point out something regarding to the steps. You can see the steps on the right-hand side, step zero, one, two, three and four. Steps are meant to be in internal tags so they're Booleans here on one. But for demonstration purposes and for you to see what is the current step that we're currently in, I linked the steps to LEDs. So you can see for step zero, it is linked to the output 2/0. So I'm using the LED on the left-hand side,
>
> **[1:34](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-5-using-the-software?u=76281980&t=94)** starting from zero all the way to four. So I'll scroll down more to the output section. You can see here in rung five, I have the conveyor connected again to an LED for you to see when the conveyor is on. So it's linked to output 2/6 and I selected the LED to be green and for rung six, I have the paint linked to another LED in output 2/7 and I selected a yellow LED. So for you to visualize when the conveyor is on, when the paint is on and so on and so forth. So for rung six where we have the timer, I change the preset value for us to be able to visualize the timer's timing, again only for demonstration purposes and for rung seven, this is the counter where we count the number of parts when we need to put them in the box. Again, I change the preset to be two to make it a little bit shorter when we do the demo. I'll go ahead, I'll download the program to the [PLC](../../Glossary/Tool/PLC.md). Go online and then I'll run the program. The first thing you see, the LED that's connected to 0/0, so this LED indicating we're in step zero where everything is off. So the very first thing we need to do now is to press on the start push button to start the process. So I'll go ahead and I'll press on the start push button. As soon as a press on the start push button, you can see that I'm currently in step one
>
> **[3:08](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-5-using-the-software?u=76281980&t=188)** and the conveyor is on and then I'll scroll down a little bit to the bottom for you to see that the conveyor is on as well. Now the conveyor is on until the parts inside, the text to the part in the middle, as soon as the parts inside the text part, the conveyor stops, the paint is on for a certain time. So I'll scroll down a little bit for you to see timer timing and the paint is on during this step. So this is the push button for the part sensor. As soon as I press on the part sensor, you can see that we're in step two. The paint is on and the timer is timing for a certain amount of seconds. Once the timer is done, we automatically go to step three where the conveyor starts again for the part to be going to the box. Now, we need to go to step four so in order to go to step four, the box sensor detects the part, so I'm going to go ahead and notice here that it have the box sensor connected to input 1/4 and as soon as I press on the push button, you see that the conveyor starts again and then we go to step one. Notice here in rung seven that the counter went up. So we have one part done inside the box. Now the process starts again. We have another part moving on the conveyor until the part sensor detects the part for the paint to happen,
>
> **[4:40](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/solution-5-using-the-software?u=76281980&t=280)** we're at step two, the paint is on for a certain time and then you can see the timer on the right-hand side is timing. Once the paint is done, we go to the next step, the conveyor starts again until the box sensor detects the part and then once I click on that, notice in rung seven over here that the counter, accumulated value equals the preset because I selected only two, and then now the counter is done counting and notice that we're back to step zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (2), [PLC](../../Glossary/Tool/PLC.md) (1)
> **UI Navigation:** go to (5), scroll down (4), scroll up (1), click on (1)
> **Env Vars:** led (7), plc (1)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-plc-ladder-logic-2-diving-deeper/next-steps?u=76281980&t=1)** - Thank you for taking the time to join me in this course. If you would like to learn more, I encourage you to dive into the documentation for each manufacturer of the specific [PLC](../../Glossary/Tool/PLC.md) device you're currently working with. While the foundations of ladder logic are the same, each manufacturer has differences in their implementations. If you're interested in understanding more about PLCs and how they fit within the field of industrial automation, check out this course, Learn Industrial Automation, which walks through each level of the industrial automation field. I hope this course gave you an opportunity to learn more about [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md), and to dive into the world of PLC ladder logic programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PLC Ladder Logic](../../Skills/Hardware/PLC%20Ladder%20Logic.md) (2), [PLC](../../Glossary/Tool/PLC.md) (1)
> **Env Vars:** plc (3)
> **Documentation:** the documentation (1)
> **Speakers:** - thank (1)


## Instructor

- [Zahraa Khalil](../../Instructors/Hardware/Zahraa%20Khalil.md)

## Resources

- Exercise files available

## Skills Covered

- Programmable Logic Controller (PLC)

## Path Context

### In [Become a PLC Developer](../../Paths/Hardware/Learning%20Paths/Become%20a%20PLC%20Developer.md)
← [Learning PLC Ladder Logic- 1 The Basics](Learning%20PLC%20Ladder%20Logic-%201%20The%20Basics.md) | **3 of 7** | [PLC Memory Organization](PLC%20Memory%20Organization.md) →

## Appears In

- [Become a PLC Developer](../../Paths/Hardware/Learning%20Paths/Become%20a%20PLC%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [PLC Memory Organization](PLC%20Memory%20Organization.md) — Programmable Logic Controller (PLC)

---

[↑ Back to top](#)