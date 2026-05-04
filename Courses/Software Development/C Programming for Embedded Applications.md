---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: c-programming-for-embedded-applications-14537235
url: "https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235"
duration_minutes: 125
duration: 2h 5m
level: Advanced
updated: 2/3/2022
learners: 42091
skills:
  - Embedded C
  - C (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFepN06Mn31bg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647638570276?e=2147483647&amp;v=beta&amp;t=le3nrmq-tmW8c7yFZcTuhJqlJzRiQbQPu5w2gG2xrpI"
linkedin_topic: Software Development
learning_paths:
  - '[The Top Skills Engineering Professionals Have Right Now](../../Paths/Software%20Development/Learning%20Paths/The%20Top%20Skills%20Engineering%20Professionals%20Have%20Right%20Now.md)'
  - '[Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)'
prev_courses:
  - '[Test Automation Foundations](Test%20Automation%20Foundations.md)'
  - '[Complete Guide to C Programming Foundations](../Hardware/Complete%20Guide%20to%20C%20Programming%20Foundations.md)'
next_courses:
  - null
  - '[Arduino- Prototyping](../Hardware/Arduino-%20Prototyping.md)'
path_nav: '[{"path":"The Top Skills Engineering Professionals Have Right Now","position":9,"total":9,"prev":"Test Automation Foundations","next":null},{"path":"Become an Arduino Developer","position":9,"total":11,"prev":"Complete Guide to C Programming Foundations","next":"Arduino- Prototyping"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/hardware
  - topic/network-and-system-administration
  - skill/embedded-c
  - skill/c-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/C%20Programming%20for%20Embedded%20Applications.md)

![C Programming for Embedded Applications](https://media.licdn.com/dms/image/v2/C4E0DAQFepN06Mn31bg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647638570276?e=2147483647&amp;v=beta&amp;t=le3nrmq-tmW8c7yFZcTuhJqlJzRiQbQPu5w2gG2xrpI)

# C Programming for Embedded Applications

> From medical devices to a car’s dashboard to a video game controller, embedded systems are all around us. Learning to write embedded software in C will help you deliver applications that are small, efficient, and fast. In this course, instructor Eduardo Corpeño explains how C programming and the Internet of Things combine in embedded applications—software that permanently resides on a device—and d

> [LinkedIn Learning](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235) | 2h 5m | Advanced | 42K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Getting started in embedded systems](#getting-started-in-embedded-systems)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Embedded Systems**](#1-embedded-systems) (7 videos)
  - [Applications: OS vs. embedded](#applications-os-vs-embedded)
  - [Memory](#memory)
  - [Storage](#storage)
  - [Energy consumption](#energy-consumption)
  - [Processing power](#processing-power)
  - [Hardware awareness](#hardware-awareness)
  - [C vs. Embedded C](#c-vs-embedded-c)
- [**2. Data Types**](#2-data-types) (4 videos)
  - [Integral types](#integral-types)
  - [Floating-point types](#floating-point-types)
  - [A quick analysis of memory usage with Keil](#a-quick-analysis-of-memory-usage-with-keil)
  - [Checking memory usage with Arduino](#checking-memory-usage-with-arduino)
- [**3. Bit Manipulation**](#3-bit-manipulation) (4 videos)
  - [Masking](#masking)
  - [Bit masking with Arduino](#bit-masking-with-arduino)
  - [Bit fields](#bit-fields)
  - [A bit field example with Keil](#a-bit-field-example-with-keil)
- [**4. Qualifiers**](#4-qualifiers) (4 videos)
  - [The volatile qualifier](#the-volatile-qualifier)
  - [The const qualifier](#the-const-qualifier)
  - [Protect variables using volatile](#protect-variables-using-volatile)
  - [Don't let the optimizer remove your while loop](#dont-let-the-optimizer-remove-your-while-loop)
- [**5. Function Alternatives**](#5-function-alternatives) (6 videos)
  - [Lookup tables](#lookup-tables)
  - [Macro functions](#macro-functions)
  - [Inline functions](#inline-functions)
  - [LUT vs. function example in Arduino](#lut-vs-function-example-in-arduino)
  - [LUT vs. function example in Keil](#lut-vs-function-example-in-keil)
  - [Inline function example in Keil](#inline-function-example-in-keil)
- [**6. Floating-Point Unit Alternatives**](#6-floating-point-unit-alternatives) (4 videos)
  - [Software implementation of float](#software-implementation-of-float)
  - [Fixed-point math](#fixed-point-math)
  - [Float-point vs. fixed-point example](#float-point-vs-fixed-point-example)
  - [Float-point unit example in Keil](#float-point-unit-example-in-keil)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started in embedded systems](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/getting-started-in-embedded-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/getting-started-in-embedded-systems?u=76281980&t=0)** - [Instructor] Embedded systems are all around us. From a video game controller, a coffee maker, all the way to your car dashboard and medical devices. Did you know that an average car has over 50 micro-controllers on board? My name is Eduardo Corpeno. I've been working with embedded systems, and also teaching embedded programming for over 15 years. I'm excited about getting you started in embedded design by leveraging your skills as a C programmer. In this course, you'll learn about several complications that aren't a concern in traditional operating system applications like limited Ram or a low-end CPU. So you'll learn several techniques like working with a microcontroller that doesn't have a floating point unit, working with an optimizing compiler without getting hurt and manipulating single bits in a [Hardware](../../Topics/Hardware.md) friendly way. We'll showcase all of these techniques using an [Arduino](../../Skills/Software%20Development/Arduino.md) UNO, mainly because it has a very limited CPU. So you'll get to see how to make the best out of this very basic piece of hardware. We'll also show some simulations on Arm Cortex M microcontrollers. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** cpu (2), uno (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/what-you-should-know?u=76281980&t=0)** - [Instructor] Here are some details you should know before we start. This course is intended for programmers who want to dive into embedded design, so we expect you to be familiar with the C programming language and its basic concepts, like binary and hexadecimal number representations, functions, data types, and so on. We will focus on important concepts for designing better embedded solutions, but please be aware that we will not cover the basics of C and we will not implement an embedded project from scratch. Although you are not required to follow along with the examples in this course, you may do so, in which case you'll need an [Arduino](../../Skills/Software%20Development/Arduino.md) Uno board, which you can buy at virtually any [Electronics](../../Skills/Software%20Development/Electronics.md) online store, including the Arduino store. You'll also need the Arduino IDE, which you may download from the Arduino website. There are versions available for several operating systems. I will also show you some examples of Arm Cortex-M microcontrollers in the Keil MicroVision Microcontroller Development Kit, or MDK for short. If you'd like to try those, too, you'll have to download the MDK from Keil's website. The flavor I'll use is the MDK light edition, and you will also need the MDK version for Legacy support add-on, which you can download from this link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (4), [Electronics](../../Skills/Software%20Development/Electronics.md) (1)
> **Env Vars:** mdk (4), ide (1)
> **Prerequisites:** before we start (1), required to (1), you'll need (1)
> **Exercise Files:** download the (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The programming files in this course are available in a zip file, which you may extract in any folder you'd like. The code is organized in a folder structure that matches the video numbers divided by chapters. In some of the examples, I'll show you a piece of regular code that performs poorly in an embedded system, and then I'll apply a few fixes to make it suitable for embedded systems. That's why most exercise files have a Begin and an End folder where you can look at the before and after versions of the code. So, for example, to see how the improved version of the code looks at the end of the third video in chapter two, you can browse to see Ch02, 02_03, End, and here you'll find the project folder. If you want to open a Keil project, look for the MicroVision 4 project file. The extension for these files is uvproj. Just remember that you need to have legacy support for Keil version 4 projects and for [Arduino](../../Skills/Software%20Development/Arduino.md) projects, just open the .ino file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **CLI Commands:** make (1), find (1)
> **Exercise Files:** zip file (1), exercise files (1)
> **Versions:** version 4 (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 1. Embedded Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Applications: OS vs. embedded](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/applications-os-vs-embedded?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/applications-os-vs-embedded?u=76281980&t=0)** - [Instructor] Before we get to the code, it's very important to be aware of the many differences between embedded applications and the traditional operating system applications you may be familiar with. Computing systems have many different applications, like information systems, medical devices, video games, automotive control, and so on. As you may guess, these applications have different goals and so, different complications come up. This happens in every field of engineering. For example, designing a passenger car has very different goals than designing construction trucks. Computers are no exception to this. We are interested in two categories of computing systems. On the one hand, we have traditional desktop, and more recently, mobile computers. Where you have a general purpose architecture, over one megabyte of memory, the microprocessor usually has a high-performance CPU, energy is not a primary concern. By that, I mean that the user is expected to provide power or recharge the devices battery because a design goal is to get the best cost performance ratio. On the other hand, we have embedded systems. And this is where we need to pay special attention to the typical parameters. Embedded systems normally have a specific purpose, which is digital control of [Hardware](../../Topics/Hardware.md).
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/applications-os-vs-embedded?u=76281980&t=94)** Embedded systems tend to have much less memory available. Normally, less than two kilobytes. The CPUs aren't so powerful in embedded systems. So we are looking at a low-end microcontroller with a very modest CPU. They are usually either battery operated, or their power consumption over time is meaningful. For example, the microwave oven is on at all times. So we don't want to waste too much energy. Finally, a common goal in embedded systems is to reach the necessary performance at the lowest cost possible. Now, let me set the boundaries of what I mean by embedded systems in this course. We are talking about digital control applications. Say, a microwave oven, a pedometer, an automotive dashboard, and so on. These applications may have one of two software architectures. The first is a simple main function with an endless loop, which is known as a bare metal application. And the second would be a [Real-Time](../../Skills/Database%20Management/Real-Time.md) operating system, or RTOS, which is not a traditional operating system like [Android](../../Glossary/Sdk/Android.md), [Windows](../../Glossary/Service/Windows.md) or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) at all. An RTOS is really the least necessary framework for basic multi-threading. So again, we are talking about any digital control application that runs on its own software, other than a fancy OS. As a popular saying in engineering goes,
>
> **[3:08](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/applications-os-vs-embedded?u=76281980&t=188)** "You want your designs to be fast, cheap, and good." You'll have to pick two. The reality of an embedded application is quite different from a desktop computer. Throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course, I will refer to five aspects we care about in embedded systems. Keep an eye out for these icons as these are the means by which we can achieve our design goals. These aspects are memory, storage, energy consumption, processing power, and hardware awareness.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Android](../../Glossary/Sdk/Android.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** cpu (2), rtos (2)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** for example (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Memory](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/memory?u=76281980&t=0)** - [Instructor] Memory is one of the elements we care about in embedded systems, because it is often very limited, but this limitation is not a bad thing. Actually manufacturers design their microcontrollers with a small memory because digital controlled programs are usually fine with just a few variables. Smaller memories use less area in the chip. This means that the chip will cost less, plus it will use less energy. An additional benefit often overlooked is that a memory much smaller than 64 kilobytes helps keep addresses shorter, up to 16 bits. Plus this prevents the need for a more complicated schemes, such as a virtual memory. Let's see the amount of RAM available in some popular microcontroller units or MCUs. First we have a member of the Kinetis KL series by NXP. This is an ARM Cortex M0+ CPU. This one has 16 kilobytes of RAM. This is not enough to store the incoming message sound in your smartphone, which is a very small file. Next, we have the STM32F series by ST micro. This is a better CPU. It's an ARM Cortex M4 with just 12K of RAM. Finally, we have the AT mega 328P by microchip. This is the one on the [Arduino](../../Skills/Software%20Development/Arduino.md) Uno. This one has 2K of RAM, which is less than a text file. Now let me take a moment to clarify that the term RAM
>
> **[1:36](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/memory?u=76281980&t=96)** has two different meanings in operating system based applications and embedded systems. They both stand for random access memory and they are both volatile. However, in traditional, always based systems like [Windows](../../Glossary/Service/Windows.md) or [Android](../../Glossary/Sdk/Android.md), the term RAM usually means the so-called main memory in a scheme called a memory hierarchy, where the CPU is only able to access a very small but fast memory called a cache. The cache contains the most popular memory blocks stored in the next level of the hierarchy, which is the main memory or RAM. It's larger, but slower than the cache, and it contains the most popular blocks of an even larger memory called a virtual memory, which is often stored in the hard drive. This is an advanced computer architecture for getting the largest, cheapest and fastest memory possible. The microprocessor chip usually contains some of the cache and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is external in a motherboard. Now in embedded bare metal systems, the term RAM means something different. It's a temporary volatile memory, which works on a fixed address range. This is where your variables and stack are stored. The CPU has direct access to this memory through its data bus. To store programs and constants, and to retrieve the instructions in the program,
>
> **[3:10](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/memory?u=76281980&t=190)** the CPU uses the same bus to access a non-volatile memory. This is typically an EEP ROM or flash memory, also working on a fixed address range. These three elements are all inside the microcontroller unit or MCU chip. The takeaway is that RAM is very simply implemented in embedded systems, and it's usually very limited in size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Android](../../Glossary/Sdk/Android.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** ram (9), cpu (5), arm (2), nxp (1), stm32f (1)
> **Definitions:** is an  (2), is a  (2), means that (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Storage](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/storage?u=76281980&t=0)** - [Instructor] Just like RAM, non-volatile memory for storage is also very limited in embedded systems. This is also done on purpose because digital control uses simple [Algorithms](../../Skills/Software%20Development/Algorithms.md) that require short programs. So we get the same benefits of a small RAM. It uses less area in the chip, making it less expensive and reducing energy consumption. Roughly, having a combined RAM and ROM space smaller than 64K will avoid complex memory schemes, and may even help reduce the size of the stored program. Let's see the amount of RAM available in the microcontroller units we saw earlier. The Kinetis KL series by NXP has 128 kilobytes of flash. This is four times the maximum allowed program size in the free version of Keil Microcontroller Development Kit by Arm. So this microcontroller is expected to be used for professional applications, way beyond hobby projects. The STM32F series by STMicro has 64K of flash. That's half the size of the Kinetis. And lastly, the ATmega328P by Microchip has 32K of RAM. The takeaway is that ROM is usually implemented with flash memory in microcontrollers, and has just enough space for the application. In fact, it is a common practice
>
> **[1:35](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/storage?u=76281980&t=95)** to select a specific microcontroller based on the expected program size rather than selecting the largest. To put this in perspective, a simple [Windows](../../Glossary/Service/Windows.md) program, say, Notepad, is 240 kilobytes, nearly twice all the flash memory in the largest microcontroller we just saw.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** ram (5), rom (2), nxp (1), stm32f (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Energy consumption](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/energy-consumption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/energy-consumption?u=76281980&t=0)** - [Instructor] Energy consumption is important in embedded systems because the devices controlled by the embedded system are you surely battery operated. Unlike mobile devices or laptop computers, recharging or replacing the batteries may be complicated. Even AC powered embedded devices have to keep energy consumption low because they are usually plugged in and turned on all the time. Their small energy consumption will add up over time. Especially if we have many of these devices in the same location. Embedded MCUs rarely have heat sinks so the less energy consumed, the less heat you'll need to get rid of. The good news is that modern microcontroller units are designed with this in mind so they always include some types of low power modes. Professional embedded systems use these low power modes in their code. Here's a top level example of a bare metal application that uses a sleep function. The typology of the code is very straightforward. The main function simply calls an initialization function for the [Hardware](../../Topics/Hardware.md) it uses. Then it goes into an endless loop that calls two functions over and over. The first function is the useful work of the embedded application. And the next one is a low power pause. In this example, it goes to sleep for two milliseconds. The result is that the microcontroller will call the useful function once
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/energy-consumption?u=76281980&t=94)** then it will take a nap and repeat this indefinitely. As long as the length of the nap doesn't compromise the applications responsiveness, this is okay. Note that this sleep_ms function is just an example, but all manufacturers provide similar functions in the rate PIs that cost the microcontroller to enter different levels of low power consumption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Prerequisites:** you'll need (1), initialization (1)
> **Code Identifiers:** sleep_ms (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Processing power](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/processing-power?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/processing-power?u=76281980&t=0)** - When designing embedded applications, we care about the processing power required by the software, because we are usually using low-end microcontroller units. Once more, this is done on purpose because low-end MCUs consume less energy. The [Algorithms](../../Skills/Software%20Development/Algorithms.md) for digital control are so simple, that they don't require a very powerful CPU. Less processing power usually means low cost. And finally, memory is small in embedded systems anyway. Let's look at some example low-end MCUs, paying special attention to the size of the registers. This is a general indication of how aggressive the architecture is. First, we have the SO8 architecture by NXP, which is present in several appliances like washers and dryers, and also in automotive controllers. This is an 8-bit CPU. Just like the [Arduino](../../Skills/Software%20Development/Arduino.md) Uno, the MSP 430 architecture by Texas Instruments, also has an 8-bit CPU. Today, ARM Cortex-Microcontrollers are everywhere. Mostly because they are manufactured by, virtually, every semiconductor company. All microcontrollers in the ARM Cortex-M family, have a 32-bit CPU, which is admittedly oversized for digital control. However, they are risk processors, meaning that their instruction set is very basic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** cpu (4), arm (2), so8 (1), nxp (1), msp (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - when (1)

#### [Hardware awareness](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/hardware-awareness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/hardware-awareness?u=76281980&t=0)** - [Instructor] In embedded applications, we care about the [Hardware](../../Topics/Hardware.md), because, well, first, embedded systems are all about digital control. So we are ultimately dealing with hardware that is reading sensor data and controlling devices, such as motors, speakers, and lights. Second, microcontroller units contain in-chip operational hardware elements, which are independent digital systems by themselves, like timers, serial ports, and analog to digital converters. Third, all of the supporting hardware, both inside and outside the chip, is typically configured by hand. Yes, there are functions and software tools provided by the manufacturer to ease this process, but you'll always have to manipulate individual bits in specific addresses to control the hardware. Because of these reasons, we need a good interface to enable our software to control the hardware in an optimal and reliable way. To get an idea of how demanding digital control can be, here are some example applications of microcontrollers. First we have microwave ovens. They had a keypad, a door sensor, a display, an internal lamp, a motor to rotate the internal plate, and a radiation generator. All of these devices can be controlled by digital input and output pins in the microcontroller. Another example would be an HVAC system,
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/hardware-awareness?u=76281980&t=94)** which has the usual digital output requirement with a keypad and a digital display, but they also have an analog input that's a temperature sensor. Clearly, some way of converting temperature to a software number is needed. In order to help us interface with the external hardware, microcontroller units always have in-chip peripherals, which are separate circuits that typically communicate with the CPU in a memory-mapped IO fashion, that is, by using fixed memory addresses to send messages back and forth. Here are some examples of these modules. General purpose input/output, or the plain and simple set of parallel digital input or output pins. Timers, which are digital counters with hardware to generate interrupts when some time has elapsed, and to keep track of the time when external events happen. Serial ports, which allow the microcontroller to communicate with external systems through a few wires. Finally, analog-to-digital converters, which convert an analog value of voltage, 3.44 volts, for example, to a software representation of that voltage. This is useful for collecting sensor data. The big picture is this, microcontroller units are equipped with hardware modules that implement several operations in parallel with the data crunching the CPU is supposed to perform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (9)
> **Env Vars:** cpu (2), hvac (1)
> **Analogies:** such as (1), for example (1), picture (1)
> **Versions:** 3.44 (1)
> **Speakers:** - [instructor] (1)

#### [C vs. Embedded C](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/c-vs-embedded-c?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/c-vs-embedded-c?u=76281980&t=0)** - [Instructor] You may be wondering about the difference between regular C and [Embedded C](../../Skills/Software%20Development/Embedded%20C.md). So let me tell you a bit about both. Embedded C is a series of extensions to the C programming language. It's specified in the ISO/IEC TR 18037 standard. These extensions contemplate common elements in embedded systems, like support for fixed point arithmetic, named address spaces, access to machine registers, and basic [Hardware](../../Topics/Hardware.md) I/O addressing. There are several coding styles, like MISRA C and CERT C, which are regarded as Embedded C. Among other objectives, these styles focus on reliability and security, however many IDEs for embedded applications, like those by ARM, NXP, SD micro, and microchip, simply use C or C++, implementing the elements of the language that the vendor considers appropriate. That's why in this course, we will not follow any of the Embedded C standards, and yet we will see many of the techniques readily available in commercial IDEs for embedded applications. Now I'm not suggesting that you stay away from Embedded C standards, but most IDEs don't follow any of them. Instead, they implement their own libraries with the techniques you'll see up ahead. Speaking of which, these techniques apply for the most part to C and C++, despite being two different programming languages.
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/c-vs-embedded-c?u=76281980&t=94)** This is the case for the [Arduino](../../Skills/Software%20Development/Arduino.md) IDE, for example, which uses a C++ compiler. But the language is often used without objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Embedded C](../../Skills/Software%20Development/Embedded%20C.md) (5), [Hardware](../../Topics/Hardware.md) (1), [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** iso (1), iec (1), misra (1), cert (1), arm (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Data Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Integral types](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/integral-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/integral-types?u=76281980&t=0)** - [Instructor] Data types that allow us to represent integers are known as integral. They all can represent different ranges of integers, but choosing the smallest data type that achieves our goals is crucial. The type of our variables has an impact on memory because having smaller variables means having more RAM available. It may also have an impact on storage because some instruction sets have separate instructions for larger, and smaller data types. Smaller types result in a smaller store executable. Also smaller constants will be stored in the program. The same applies to the required processing power. Operations on larger data types require more space either because of larger instructions or more instructions to perform the operation in several steps. These three details apply to any computing system, but remember that the are especially important in embedded applications. Finally, being specific on the size of variable types is important to the [Hardware](../../Topics/Hardware.md). There are memory map registers that control the supporting hardware, and those registers need to be treated exclusively with their exact size. Here we have the typical integral data types supported by the C programming language on a compiler for a 32 bit instruction set architecture. There are two things I want you to notice here.
>
> **[1:33](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/integral-types?u=76281980&t=93)** First, let's look at the sizes. While some of these may vary from compiler to compiler, the point is that there is a variety of available sizes for your variables. So char is 8 bits, short is 16 bits, and int and long are both 32 bits. Here we also have the ranges you may already be familiar with. The second detail to notice is that some of these types are architecture dependent. That's why in some architectures, especially 8 bit architectures, the int type is a 16 bit number. So this does not look very good on portability. The stdint.h file in the C standard library contains exact length types along with other definitions. These are very useful to produce portable code, and there's no reason not to use these types because it doesn't affect the compiled code size. Using these types is a way of making sure your variables are exactly the size you want them to be. So this improves portability of your code. But if you look at the naming convention of these types, you may agree with me that it also improves the readability of your code. The naming format for sign types is int followed by a number, which is the length in bits. Then underscore t for type. For unsigned numbers, the same format is used,
>
> **[3:06](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/integral-types?u=76281980&t=186)** but starting with uint. For signed an on-site numbers, stdint always offers 8, 16 and 32 bit types. Most implementations also offered the 64 bit variant. As takeaways, here are two recommended good practices to make sure you use your memory in a consistent manner. First, use portable fixed size types. You may define your own types with the typed keyword, or you may simply use a library. This is important especially when other programmers read your code. Everything must be clear, especially when someone wants to adapt or port your code to some other architecture. Second, make a reasonable effort to estimate the range your variables will require and use the smallest type that meets those requirements. This is to avoid running out of memory. Of course, it may be difficult to estimate the expected range for some variable in which case, you may want to play it safe, and use a rather large data type. That's okay. But it should not be the rule. It's always important to be mindful of the data types you are using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** make (2)
> **File Paths:** stdint.h (1)
> **Env Vars:** ram (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Floating-point types](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/floating-point-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/floating-point-types?u=76281980&t=0)** - [Instructor] Now, let's go through some details about floating point numbers. Floating point numbers are implemented just like scientific notation, where you have a significand, also known as mantissa, or fraction, and the exponent that sets the position of what is humanly known as the decimal point, which here is actually a binary point because the radix is binary. The illustration shows the IEEE 754 standards format for the single precision floating point numbers. This format is also known as binary 32. There are several special cases, but in the simplest sense, it has three fields, sign, exponent, and significand. Floating point formats are useful for representing real numbers, which is a continuous domain. Since this is ultimately a binary encoding, floating point numbers are often approximations with an inevitable degree of error. For example, 0.1 can't be completely expressed in this format. Just like 1/3 can't be written in exactly with a zero and a series of threes. This is not exactly a bad thing because this error is very, very small, and there is not really a much better alternative. Here are the typical floating point data types supported by the C programming language. They are float, implemented with 32 bits, double with 64 bits, and long double with 80 bits.
>
> **[1:37](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/floating-point-types?u=76281980&t=97)** As you can see, the difference between these three types is the range and precision, or decimal places. Float reaches a decimal exponent of 38. That's positive and negative for very large and very small numbers. For more precision doubled reaches 308 and long double nearly 5,000. Precision translates to six decimal places for float, 15 for double, and 19 for long double. This is the error I mentioned earlier. So, when accuracy is critical, a larger data type is more suitable. The next element we care about is a floating point unit, or FPU, which is a separate processing unit dedicated to performing operations on floating point numbers. It has often been called a math coprocessor. When there is no FPU, either you're stuck with integers, or software libraries are used by the compiler, which you may guess is expensive. Now, here's a quick heads-up. The FPU is only used for its supported type. So, if your FPU works with 32-bit floats, then using doubles will result in software libraries anyway. To see an example let's check the data sheet for a popular microcontroller unit. So, this is the webpage for the Tiva C LaunchPad,
>
> **[3:11](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/floating-point-types?u=76281980&t=191)** which is a microcontroller platform by Texas Instruments, and let's see its data sheet. So, let me scroll down and show you in this section that says the Cortex M4F processor, we are interested in the block diagram. And right above the MC4 core block, you can see the FPU, which stands for floating point unit. That means that this CPU has the support of an FPU, and actually every Cortex M4F microprocessor includes this floating point unit. That's what the F in M4F stands for. Now, using floating point numbers has a cost in many aspects we care about. And the bad news is that even with the help of an FPU, it's still expensive. This table shows the different aspects in which floating point math is expensive, the reason, and whether it's still expensive when using a floating point unit. The impact in memory is having 32 or 64-bit variables, even for small numbers. So, there's clearly a more ambitious memory demand. Since this affects the variables, it doesn't matter if you use an FPU or not. Next, the impact on storage is due
>
> **[4:45](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/floating-point-types?u=76281980&t=285)** to the extensive functions present in the runtime libraries used for all the arithmetic calculations. This case only applies to not using an FPU. Now, about energy consumption, well, it's expensive either way. When you use an FPU, you have to provide power to it. On the other hand, not using an FPU means running the code for the substitute functions in runtime libraries, which is a lot of work. The FPU is not there to save energy, but rather to take some load off the main CPU so that your programs run faster. Finally, we have processing power demand. When there's no FPU, the CPU will have to deal with a lot of floating point work, so it's only expensive in this case. So, here are the takeaways. Before using floating point variables in your code, you have to make sure you need them. You have to make sure it's worth the cost. If you have a FPU and you decide to use it, make sure you use the type of floating point variables it supports. And if possible, stick only to using that type in all of your variables and constants, because you don't want the overhead of runtime libraries when you're already using an FPU. Finally, when your code has more than one thread, either because you're using exception handlers, or because you're using a multi-threaded platform,
>
> **[6:19](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/floating-point-types?u=76281980&t=379)** you'll need to plan for more memory to hold the context when switching threads.

> [!info]- Semantic Content
>
> **Env Vars:** fpu (15), m4f (3), cpu (3), ieee (1), mc4 (1)
> **Definitions:** is a  (5), known as (3), stands for (2), means that (1)
> **CLI Commands:** make (3)
> **Analogies:** just like (2), for example (1)
> **Versions:** 0.1 (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [A quick analysis of memory usage with Keil](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-quick-analysis-of-memory-usage-with-keil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-quick-analysis-of-memory-usage-with-keil?u=76281980&t=0)** - [Instructor] Now, let me show you a quick demo on how data types have a real impact on the [Hardware](../../Topics/Hardware.md) platform we are using. You can find this code in the exercise files folder, if you'd like to play around with it. But I will just make a few changes to it here, so you may want to just sit back and watch. This is a skeleton project for an application that will gather sensor data into an array. In our example, we are interested in getting 4,000 sensor readings. So that's why in line three I have defined a symbol called size, with the value 4,000. Let's say we want to run this on the STM32F303 microcontroller by SD micro. The really important part here is in lines five and six, where I have declared an integer X to traverse the array, and the integer array that will hold the 4,000 sensor readings. Let's say that our sensor provides its readings as bytes. So the data we are expecting is a number from zero to 255. Notice in lines five and six that I have carelessly declared both types as integers. Now, the C int type uses 32 bits in this platform. So this is not the best type for our example. Now, the main function is simply staging the population of the sensor data into the array. This is simulated in my example, as simply copying X into the array slots
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-quick-analysis-of-memory-usage-with-keil?u=76281980&t=94)** as the loop advances. Finally, we have an endless loop, where the actual application code would be written in a real application. Now, when I compile the code, we will see no errors reported, but there will be something wrong. To see what's wrong, we'll have to look at the output of the linker, which will show us the memory footprint. The linker output is located in the project folder under the listings sub folder. We are interested in the dot map file. This file contains all of the variable definitions and their location in the memory map. Let me scroll down all the way to the end of the file, where we have a summary of the RAM usage. The second to last section is a table where we have the many areas of the addressing space and their usage. We are interested in two areas, the read-write data segment, and the zero-initialized data segment. All of these numbers are expressed in bytes, not bits. Our X variable went to the RW segment, because it's not initialized to zero, and it's global. Actually, X is lonely in this segment. The number four on the RW data is X, because it takes four bytes or 32 bits. The array went into the ZI data segment, which shows 17,636 bytes. That's because an integer takes four bytes.
>
> **[3:12](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-quick-analysis-of-memory-usage-with-keil?u=76281980&t=192)** So our array of 4,000 elements ended up taking 16,000 bytes. The remaining bytes in this area are used by the initialization routines provided by the development platform. Now, the contents of the RAM are summarized in the last part as the sum of the RW and ZI data segments. As you can see, our application is taking 17.23 kilobytes, but our SDM32F303 microcontroller only has 12K of RAM. A wrong conclusion would be that this application wouldn't fit the STM32 microcontroller, when in fact the wrong data types were used. So let's fix this by changing the variable types. First, I'll make use of stdint.h, which I had already included in the first line. So X will change to an unsigned 32-bit integer. Remember that these types are defined in stdint.h, and that they specify the number of bits, not bytes. Next, I will resize the array content type to unsigned eight-bit integers, which can hold just the data we need to hold. And lastly, in line 12, let me cast X to uint8_t to make sure that the compiler knows I only want the least significant byte of X. That's it. Let's compile again.
>
> **[4:49](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-quick-analysis-of-memory-usage-with-keil?u=76281980&t=289)** And let's take a look at the new memory map. Now we expect something closer to 4,000 in the ZI data segment. And as you can see, in the summary at the bottom, we are only using 5.51 kilobytes, this time, which perfectly fits in 12K. So I hope you can see that by using the appropriate data types, we are able to reduce the memory footprint. If you are trying this code in your computer, you may have gotten a slightly different result than the one we just saw. For example, a different value in the ZI segment, or maybe your array went to the RW segment. That's why it's important to review our results and pay attention to what really matters to us. First, we saw that the array got four times smaller. If you subtract the values we got in the ZI segment, you'll see that we got rid of 12,000 bytes, which makes sense. As a sanity check, you may want to try using different data types for the array, like 16-bit integers, for example, just to confirm that the reduction in size is the one you expect. You may also want to try with a different array size, like 1000, and see if your results make sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** ram (3), stm32f303 (1), sdm32f303 (1), stm32 (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (3)
> **File Paths:** stdint.h (2)
> **Versions:** 17.23 (1), 5.51 (1)
> **Analogies:** for example (2)
> **Cross-References:** in the last (1)

#### [Checking memory usage with Arduino](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/checking-memory-usage-with-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/checking-memory-usage-with-arduino?u=76281980&t=0)** - [Instructor] Let's see another version of the same demo now in the [Arduino](../../Skills/Software%20Development/Arduino.md) platform so that you can see the differences between these two. You can find this code in the exercise files folder and I encourage you to reproduce it and play around with it. The code is pretty much the same thing, it has the variable definitions in lines seven and eight and the arrays being used in line 14. As you may already know, the Arduino platform uses the main function in a separate hidden file and it calls the setup function once and then the look function repeatedly. In line 15, I'm incrementing the value of X and making sure it goes from zero to size. It's the same thing we were doing with the for-loop in the previous example. Now line 16 is only there to use the newly assigned value in the array, that's because the compiler may conclude that since the array is populated, but never used, then we are better off without it. So this is just a place holder line of code that forces the compiler to implement the array. In a real application, you would definitely use the data somewhere. Now let's focus on lines seven and eight. Again, notice that the carelessly chosen type is int. This time the sensor data array has only 1000 elements, and there's a reason for it. The 80 mega microcontroller in the Arduino Uno has only two K of RAM, that's 2048 bytes. And so this demo has only 1000 elements
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/checking-memory-usage-with-arduino?u=76281980&t=94)** in the sensor data array. Let's see what happens if we compile this code for the int type. As you can see at the bottom, we get a report of what happened in the compilation process. And this is a very interesting result because it says that the global variables are occupying 98% of dynamic memory. That means that the 1000 elements in sensor data are taking up almost all of the 2048 bytes available and this is because the int type in the Arduino platform is 16 bits, not 32 bits like we saw before on Kyle. So now let's be a little more specific on the types we want to use. Let's try and reproduce the types we used in the previous example. So let me change the type for X two a uint 32. By the way, the Arduino platform also includes SDB int somewhere else so we don't need to include it in this file. And now let's try and use the same type for the sensor data array. What we expect from this is definitely to run out of memory, let's check it out. As you can see, we get a compiling error. The IDE just won't compile, it says not enough memory and that's what we expect. The report claims that the global variables are using 195% of the available memory. So again, the easy fix is to change the type
>
> **[3:08](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/checking-memory-usage-with-arduino?u=76281980&t=188)** to exactly what we expect in line eight. Remember we are expecting only bites here, so, I will change this to the uint eight type. And I also need to cast X in the assignment in line 14. Let's try it one more time, and there it is,
>
> **[3:36](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/checking-memory-usage-with-arduino?u=76281980&t=216)** it's only using 1013 bytes, which is 49% of dynamic memory. Once more, being specific about types is very important especially in embedded applications where memory is so limited.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (5)
> **Env Vars:** ram (1), sdb (1), ide (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 3. Bit Manipulation

[↑ Back to Table of Contents](#table-of-contents)

#### [Masking](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/masking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/masking?u=76281980&t=0)** - [Instructor] In embedded systems, being able to manipulate specific bits in data has an impact on memory because variables that use less than eight bits become possible. For example, an integers to hold numbers between one and 12 to represent the month in a date, well, this would only take four bits. Second bit manipulation is a must to deal with the [Hardware](../../Topics/Hardware.md), especially because the in chip supporting hardware communicates with the CPU in a bit wise manner. Let's see three Bitwise operations we can perform by means of bit masking. First, we use masking to set and clear bits that is to write the logical one or a logical zero to specific bits respectively. Here's one way of doing it in C. Let's say we are working with eight bit variables and that we want to pay attention to bit number three, which is the fourth bit from the right. To write a one or zero to a specific bit, we need an eight bit mask with a one at the bit position we are interested in and zeros everywhere else. Let's say that the bit of interest is a variable called X. So writing a one, to X in that particular bit is a CCS performing a bit wise or operation between X and the mask. This makes sense because any bit Ord with a one results in one. Similarly, to clear a bit, number three in in X,
>
> **[1:35](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/masking?u=76281980&t=95)** we do a bit wise and operation between X and the inverted mask. This makes sense because any bit added with a zero results in zero and it's on changed otherwise. Notice that the mask always marks the bits of interest with a one. Masking is also useful to read bits. Using the same mask, we can read the state of bit number three. Performing a Bit wise and operation between X and the mask will result in either zero or the mask itself. Luckily in C, zero means false and anything other than zero is true, so this is perfectly valid. Finally, we use masking to invert specific bits. Following our example, we can invert this state of bit number three in X, simply by performing a Bitwise XR operation between X and the mask. Let's see a coding example. Here we have a convenient macro function that produces a mask for a single bit. This is done by shifting the constant one, X times to the left. This is not expensive at all because it happens at compile time, so your target CPU will never know about this shifting. This example code, modifies the states have several pins in a general purpose input output port of a real microcontroller in the SO8 family by Freescale now in XP.
>
> **[3:09](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/masking?u=76281980&t=189)** This eight bit port is called port B and each bit can be configured as input or as an output. Reading input pins and writing to output pins is as easy as reading or writing to a memory mapped bit called port BD. So as the comment says, we want to set pins two and five and clear pins, zero, three and seven, then if pin four is high, we want to invert pin, number one. These are roles, separate operations on the same port, but at different bits. So the first thing this managed port B function does, is freezing the state of the port BD register to work with a copy called temp. Then we said bits two and five with a mask created from separate masks for bits two and five. As you can see, the result is a mask with ones in bits two and five. Next, we clear bit zero, three and seven with an inverted mask. Before the inversion, this mask is produced just like the previous one, that is with a mask for B zero, a mask for bit three and a mask for a bit seven. Now in the conditional part, we check the state of bit number four. This is presumably an input pin and if it is high, the inversion is done by a bit Bit wise XR on bit number one.
>
> **[4:43](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/masking?u=76281980&t=283)** Finally, we commit the changes collected with temp into port BD. There are three key ideas in this video. First, masking is a safe way to only deal with the bits of interest. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the bits are ignored and unchanged. Second, if you decide to use masks in your code, you are expected to make it easy to read. It's not nice to write your masks in decimal or with complex expressions because other programmers may misunderstand your code. And third, don't worry about mass calculations. These are done by the compiler, not your target CPU.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (5), is called (1)
> **Env Vars:** cpu (3), ccs (1), so8 (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Bit masking with Arduino](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/bit-masking-with-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/bit-masking-with-arduino?u=76281980&t=0)** - Now let's see the technique of bit masking working on an [Arduino](../../Skills/Software%20Development/Arduino.md) UNO. This application will simply blink the onboard LED of the Arduino UNO, which happens to be at port B bit five. Now this port B is part of the internal architecture of the 80 Mega microcontroller that's on the Arduino UNO. And so we will use exactly the configuration register for that board. As you can see in line seven, we have the definition of the macro function for generating a mask at whichever bit we want. It does so by shifting the constant 1, x times to the left. And remember this is done by the compiler, not by the Arduino. So this is not computationally expensive at all. It's just a shorthand notation for a mask, that's easier to read for someone looking at the code. Now let's look at the setup function. As you can see in line 10, we are modifying one bit in a register called DDRB. DDRB stands for Data Direction Register for port B. And what this register does is map each of its bits to the input output pins of port B. Whichever bit is set as one, configures its corresponding pin in port B as an output. Conversely, whichever pin is cleared as zero in DDRB, causes the corresponding pin in port B to be configured as an input. So as you can see, I am setting bit five. That is I'm telling the microcontroller,
>
> **[1:33](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/bit-masking-with-arduino?u=76281980&t=93)** I want bit five on DDRB set to one, or I want pin five in port B to behave as an output. Remember, this is the onboard LED on the Arduino UNO. Now in the main loop, if you look at line 14, I am setting bit five of another register that's called port B. That's the data register for port B. So by setting that bit, I am turning the LED on. Next we have a delay of 500 milliseconds. That's half a second. And in line 16, we are clearing that bit. Recall that to clear a bit, we need to use the and operation while using the inverted mask. We wait for 500 milliseconds again, and the loop runs indefinitely. So let's see it running. Let me compile and download the application to the Arduino. Now, if you look at the onboard LED, you can see that it's blinking at the rate we expected, which is a period of about one second.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (6)
> **Env Vars:** uno (4), led (4), ddrb (4)
> **Definitions:** stands for (1), is a  (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - now (1)

#### [Bit fields](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/bit-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/bit-fields?u=76281980&t=0)** - A bit field is a data structure intended for the access of specific bits. This is a construct readily available in the C programming language. These bits can be accessed for reading or writing exclusively, without effecting other bits in the byte or [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). Bit fields are useful for controlling the [Hardware](../../Topics/Hardware.md), as many vendor provided libraries use them. Up to this point, bits fields seem to have the same application as masking, but bit fields are also useful for making a better use of the memory because they allow us to work with data that is smaller than eight bits. Here's a code snippet that shows how bit fields help us compact the data inside the available types. Suppose we have an embedded application in a smart ID card that will grant or deny access to some room or service, based only on the day of the week. Let's say that the enabled days are stored in a very limited memory. So using one byte as a Boolean flag for each of the days of the week is out of the question. This code shows a typical data structure with bit fields that allows the programmer to easily treat one byte as a whole C language structure. These [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) are almost always unions because we are usually interested in referring to data in more than one way. The code shows a type definition of a union called weekdays. The union contains two elements,
>
> **[1:37](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/bit-fields?u=76281980&t=97)** a struct finally named days and an unsigned byte named byte_sized. Because of being a union, the same eight bits are used for the days element and for the byte element. The struct element days is where we have the bit fields and the syntax is the same as in a struct, but the type of the fields is not always specified. Instead, each field name is appended with a colon followed by the number of bits you wanted to use. In this example, all fields are one bit long and are specified as unsigned. At the bottom, we have the declaration of a variable type weekdays, with the name active_days. To use the bit fields we can refer to the names shown at the right. So, for example, to read the monday field, the syntax would be active_days.days.monday. You may freely read it in an if statement or you can write one or zero to it, and you may [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured that this will only have an effect on the monday field. Also notice that the first field to be specified takes up the lowest ordered bits, and the next fields are assigned to subsequent bits. Now be aware that bit field implementation is architecture dependent, so padding is common when the assignment
>
> **[3:10](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/bit-fields?u=76281980&t=190)** of some fields is not convenient for the compiler. You shouldn't worry about this as long as you comply with the advice in your compilers documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** active_days (2), byte_sized (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - a (1)

#### [A bit field example with Keil](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-bit-field-example-with-keil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-bit-field-example-with-keil?u=76281980&t=0)** - [Instructor] Here's a real example, where we can see the benefit of packing data while improving readability. This is a typical configuration register seen in SOA microcontrollers by NXP. This is a structure for a timer status and control register. This eight bit register is used to configure the operation of a [Hardware](../../Topics/Hardware.md) timer module, which is useful for keeping track of time. Notice that here we have two fields that are longer than one bit each, PS and CLKS, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) are one bit long. Let's see the code to implement this data structure. This code is available in the exercise files folder, but I won't change much either, so it's okay to just watch. In line five, we have a union definition that contains three elements. The first element is in line six. This is the byte itself. As you can see, this is a uint8 from stdint. The next element is the struct with the bit fields for all the individual fields that we want to control. This one is called Bits, and it's defined in lines seven through 16. Take a moment to pause the video and notice the names of the individual bits, including the bits that [compose](../../Glossary/Framework/Jetpack%20Compose.md) the multibit fields, PS and CLKS. Also notice that I declared these fields as uint8 type, but again, their length is specified by the number on the right. Now, in lines 17 through 21, we have the third element,
>
> **[1:37](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-bit-field-example-with-keil?u=76281980&t=97)** which contains the two fields that have more than one bit, that's PS and CLKS. This one is called MergedBits. Hit pause again, and take a moment to notice how I'm only naming the fields I'm interested in, leaving the remaining bits packed in an unnamed field. Finally, in line 22, the whole structure, or rather union, is named MultiFieldByte. In line 24, I am defining a new MultiFieldByte variable called reg. This is all we need in this example for you to see this whole structure working. Next, we have a main function with placeholder code that uses one bit in the reg variable. I did this to force the compiler to implement the bit field variable. So, let's build this code, and see what the compiler understood by all of this, and now let me start the debugger. (computer chimes) Now, here in the debugger, if you look at the lower right section, that's a watch window, and I've already entered the reg variable I just defined. Remember, this is the union we just saw in the code. So, after expanding this variable, we can see it's three fields. We can see the byte that is called Byte. We see the structure that is made out of the individual bits. It's called Bits. And we can see the MergedBits part. You may want to hit pause,
>
> **[3:09](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/a-bit-field-example-with-keil?u=76281980&t=189)** and take a moment to pay attention to all of the individual fields in every part of this union. Now, notice how I can modify the value of some of these fields and the representation in the other elements of the union will be affected by these changes. For example, I will change what is stored in the PS field in the MergedBits elements. I will change this zero to five, and try to notice what happens to the Bits element and to the Byte element. The individual bits of PS, that is PS0, PS1, and PS2, they got modified to store the number five I just entered. That is one zero one in that three bit field. Now, the whole byte changed to just number five. Now, notice what happens if I change the TOF bit. Since this is a bit, it can only take zero or one, so I will change it to one. And as you can see, the Byte field changed to 85, because if we read the whole Byte bitwise, you will see that its hexadecimal representation is 85. After seeing these details, I hope you can see that bit fields are useful to save memory, and to improve the readability of your code. Lastly, you should always comply with the vendor's recommendations in the compiler's documentation, especially because bit fields are implementation specific. So, they may work differently for different platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1)
> **Env Vars:** clks (3), soa (1), nxp (1), ps0 (1), ps1 (1)
> **Definitions:** is a  (4), is called (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 4. Qualifiers

[↑ Back to Table of Contents](#table-of-contents)

#### [The volatile qualifier](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-volatile-qualifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-volatile-qualifier?u=76281980&t=0)** - [Instructor] The C programming language provides a few qualifiers to let the compiler know some important details about variables. So being specific about variables has an impact on memory and storage because qualifiers determine whether a variable will be stored in RAM or ROM. The [Hardware](../../Topics/Hardware.md) has access to some variables and the software can be made aware of this with qualifiers. Finally, this may have an effect on undesired compiler optimizations. Let's start with a thought experiment. Take a look at this Goethe. Notice that after assigning eight to the global variable, A, the, if statement compares A to eight, printing different messages for each case. Try to answer the following questions. First, what's the output of running this function? Is it A, a equals eight, B, a is not eight or C, it's not possible to tell, and second, is it possible to execute the else part? Yes or no? You may want to pause the video to take some time to think about it and play it back when you're ready. Well, the answer to the first question is C. It's not possible to tell. Now it may make sense that the answer to the second question is yes, it is possible to execute the else part. In other words, the variable a may change sometime
>
> **[1:36](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-volatile-qualifier?u=76281980&t=96)** between its assignment and the if statement, why is that? Well, there are many reasons, here are four. First, we may be working with a multiprocessor with shared memory. This is a system with more than one CPU core, where more than one CPU has access to the variable a. This way, some other CPU running a different piece of code may change a without the CPU that's running our experiment ever knowing about it. Second, this function could be running on a multithreading environment, where some other thread has access to a. Third, hardware attached variables, also known as memory mapped I/O. This is the most common case in embedded applications. Some pieces of supporting hardware have access to memory mapped registers, which are seen to the CPU as memory locations or variables in C. Just like the timer status and control register we just manipulate it through bit fields. And finally, we have interrupts and exceptions, which are asynchronous events that cause special threats to interrupt the CPU, to perform urgent tasks. These handler functions may modify a. Because of these, an uninformed optimizing compiler, may wrongfully ignore parts of the code in an effort to optimize for speed. This is where the volatile qualifier comes in.
>
> **[3:12](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-volatile-qualifier?u=76281980&t=192)** It tells the compiler that the variable may change at any time by some source, other than the code being compiled. In our previous example, an easy fix is to declare a as volatile. This way, the compiler will not assume the permanence of data in a, so no optimizations will happen in any part of the code that uses a. Another example are blocking delay functions. Now this is not the best idea for delays, but it's still widely used. These delays are loops that iterate for a long time, doing nothing useful. This uselessness can be detected by the compiler and optimized out, leaving us without our wanted delay. Here's one such delay and how a volatile variable can help keep the optimizations away. Notice that a drastic optimization would ignore the whole function as it does nothing with the local variable X. Here are the takeaways of this video. The volatile qualifier informs the compiler that the variable may be modified by other means, especially hardware and interrupt handlers. You should use it to explicitly avoid optimizations that ignore parts of your code in a bad way. Remember that most optimizations are good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (4)
> **Env Vars:** cpu (6), ram (1), rom (1)
> **Definitions:** in other words (1), is a  (1), known as (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [The const qualifier](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-const-qualifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-const-qualifier?u=76281980&t=0)** - [Instructor] When defining constants, you may have used either of the methods shown in this example. Both define a constant for the digital pin where some LED is to be connected. This is an [Arduino](../../Skills/Software%20Development/Arduino.md) example, so pin 13 is a valid option. The first one uses the const qualifier in a variable definition. Although defining a constant variable sounds like a contradiction, the language never called it a variable, I did. The second option is using the help of the pre-processor with the #define directive. This type of constant is called a macro. The main difference between these options is that the so-called constant variables are usually stored in read only memory. Macros are always stored in ROM because they are inlined. So they are part of the code. That means they are copied as constants in the code each time they are used. So what does the const qualifier do? The const qualifier means that a variable will not be changed by our code. Because of this, compilers usually implement variables declared with the const qualifier in a read only segment of memory. This may be a special segment of RAM, or even the flash memory where the program is stored. However, this is not always the case. Whether a const variable is stored in RAM or ROM is implementation dependent. The compiler is not forced to store const variables in ROM. So some modifiers may be required to place constants in ROM.
>
> **[1:40](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-const-qualifier?u=76281980&t=100)** This is the case of the Arduino UNO, where the PROGMEM modifier is used. Lastly, be aware that const has slightly different meanings between C and C++. For example, constants can be used as the size arrays at declarations in C++, but not in C. So you should be mindful of the language you are using when it comes to the const qualifier. Because of this, I think it's very important to learn C and C++ in parallel, as so many compilers support both languages. So you may see that there's a trade-off between const and macros, but I claim there's not. #define simply finds and replaces text. So the good news is that if you need to refactor your code by changing the value of a constant that is used in many places, you get to change it only once in the #define line. For example, you can change the size of many arrays in one line, but that's it. You get to avoid using magic numbers. Now there's a lot of bad things about macros. The constants will be copied each time they are used. So there's a risk of code bloating, that is, unnecessary growth of the compiled code. There is no type or syntax checking. So syntax errors, or even runtime errors, may arise. And the list goes on. These constants don't have a scope, and they are not allocated.
>
> **[3:12](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/the-const-qualifier?u=76281980&t=192)** So they are not visible to the debugger. All of these problems come from the fact that the actual compiler isn't aware of these constants, just the pre-processor. Hopefully you'll see that the downsides of #define outnumber its benefits. On the other hand, using const variables usually causes the compiler to allocate them in ROM. So it has to use a memory addressing mode. The good news is that no matter what size your constants are, they will be placed in memory just once, and they will be referenced by each use. This will waste much less ROM. All of the disadvantages of #define I mentioned are fixed by const. That's it. I have no bad news about const. I understand if this comparison seems biased, but seriously, there's no real disadvantage in having a constant that the compiler is aware of. So in conclusion, const is definitely the winner. #define will not hurt your code if used right The problem is that only the pre-processor deals with it, not the remainder of the compilation process. Plus with const and maybe a ROM modifier, your constants are guaranteed to get stored only once in memory. So it's definitely better for large constants, like 64 bit data types. So the bottom line is that #define does not have a real advantage over const.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (2)
> **Env Vars:** rom (7), ram (2), led (1), uno (1), progmem (1)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **Analogies:** for example (2)
> **Warnings:** be aware (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Protect variables using volatile](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/protect-variables-using-volatile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/protect-variables-using-volatile?u=76281980&t=0)** - [Instructor] Now, let's see a version of the volatile qualifiers example in Keil. You can find this code in the exercise files folder if you'd like to play around with it. As you can see, this code is very similar to the one we just saw. Look at the main function starting at line 8. First, we assign 8 to the int variable a, then in line 12, we are checking if a is still 8. Now notice that the functions I used in the two cases of the if statement are printf and sprintf respectively. I did this to make it easier to tell them apart when we look at the compiled code later. So now we expect the compiler to ignore the else part of that if statement, but that will only happen if the compiler is performing aggressive optimizations. So let me show you how to set up the compiler to do that. In Keil, we can press the magic one button to open the options for target dialog box. Go to the C/C++ tab, which is where we configure the compiler. There are two changes we are going to make here. First, we'll look at the optimization level in the language and cogeneration section. As you can see, the default is level 0. This means that no optimizations will be performed, but if we want to be very aggressive, we can go all the way to level 3.
>
> **[1:36](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/protect-variables-using-volatile?u=76281980&t=96)** And second, we will inform the compiler that we want to optimize for time. That's all we need. So let me click, OK. Now let's see how the compiler optimizations may result in something we don't want.
>
> **[1:59](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/protect-variables-using-volatile?u=76281980&t=119)** We are going to focus on two parts of the Keil debugger. First, we're going to look at the window where the C code is, the main.c file, and I want you to look at the gutter of the left of the line numbers. As you can see some lines have a darker gray square, each line with that darker square has some corresponding assembly language code, meaning that the compiler decided to pay attention to that line and compile it. On the other hand, the lines that don't have that darker square are lines that were either optimized out or just were unnecessary to produce any assembly code. The second part we'll focus on is the Disassembly window on top, this contains the resulting assembly code created by the compiler. The code is shown like this. First we have one or more lines of the C code in red, showing the original line numbers, and then we have the implementation of those lines in assembly language, showing the address of each instruction, it's encoding, and the assembly instructions. For example, here we have a = 8, followed by its implementation. By the way, don't worry, we are not going to look at the assembly language or the hexadecimal code too deeply. We are only going to look for some function calls and I will show you the lines we care about. So if you look at the C code, the part of the code that the compiler may think is not necessary
>
> **[3:32](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/protect-variables-using-volatile?u=76281980&t=212)** or impossible to reach is the else part of the if statement, because a is expected to keep its value of 8. So if you look at line 15, you'll see that it's not compiled. It does not have the darker square at the left, and the call to the sprintf function is nowhere to be found in the disassembly. Now, let me show you the line where printf is called. Let's look at the disassembly on top. Here, we can see the call to a function called __2printf. So the printf function did get compiled, which is the true case of the if statement. So this is a case where the compiler performed an optimization we didn't want, because we wanted to know when a is changed by something other than our code. In fact, notice that the if statement in line 12, doesn't have the dark square in the gutter either, which means that the compiler decided that there's no point in performing a comparison, when we already know the result. We told the compiler to optimize, so it was doing its job, it was simply uninformed that we wanted to know if a had changed. So let's go back to the code and perform the easy fix. As you may have guessed, we only needed to make a volatile. So let's do that. Also notice that b doesn't need to be volatile, and this is very important
>
> **[5:06](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/protect-variables-using-volatile?u=76281980&t=306)** because we can't get away with declaring all of our variables as volatile. If we do that, the compiler won't be able to perform all of the optimizations we need. So let's compile again and see the resulting code. We can see the good news right away in line 12. Look at the gutter, the comparison got compiled. Now look at the disassembly. The highlighted line shows a comparison of registered r0 with the immediate value 8, that's because our 0 is currently implementing a. Now let's check if both function calls were compiled, let me select the line with the printf function call in the C code, and we can see in the disassembly that it made it to the final application. Now let's look at the else part. As you can see in the disassembly, we have the __2sprintf function, which is the else part of the if statement. So yes, it made it to the final application. If you are following along, keep in mind that a slight difference in the compiler settings may cost some addresses or instructions to look a little different than this. So try to stay focused on the effects of the volatile qualifier we care about.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Definitions:** means that (2), is called (1), is a  (1)
> **UI Navigation:** open the (1), go to (1), select the (1)
> **Prerequisites:** set up (1), configure (1)
> **File Paths:** main.c (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Don't let the optimizer remove your while loop](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/don-t-let-the-optimizer-remove-your-while-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/don-t-let-the-optimizer-remove-your-while-loop?u=76281980&t=0)** - [Instructor] Now let's see a practical example where the optimizer will eat up a while loop that's performing a delay function. As in previous examples, you can find this code in the exercise files folder. First, I have to find the measure macro in line seven to enable or disable reporting back through the serial port. Now let's go to line 11. If the measure macro is defined, then we will use some bookkeeping variables to take note of the time when we started the wait and get an idea of its length. Scrolling down to line 15, the setup function simply configures both the LED and the serial port. Now line 20 is where we have the wait function, which uses a UInt32 type integer called X. Remember, this is a delay function, so we want the loop to take its time. Notice that the while loop is only decrementing X and taking up some time. As for the loop function in line 26, the first thing we do is toggle the LED by changing the state of bit five in port B. Notice that we are using a bitwise X or operation. Then we have a conditional block of code where we call the Millis function in line 30, and we'll use this value later to calculate how long it took. Starting at line 33, we have five codes to the wait function. And finally in line 39, we have the time calculations
>
> **[1:33](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/don-t-let-the-optimizer-remove-your-while-loop?u=76281980&t=93)** and the functions to report back if we want to. Let's see this application without reporting back first so that you can see the blinking of the LED, just a series. Let's compile and download the code. If you pay attention to the onboard LED, it doesn't seem to be blinking. And that's because this is happening very fast at megahertz. So it is blinking, but it's not visible to the naked eye. Now let's try and change X to volatile in line 21, where it is defined. Let's try it one more time. And there it is. As you can see, the LED is blinking at a period of about two seconds. That's one second on, and one second off. As I mentioned before, this code has to measure macro to enable reporting back. So let me enable it and let's see it working. Let me open the serial monitor. And now we can confirm that it's taking about one second to complete the whole set of five codes of the wait loop. This is consistent with the blinking of the LED. And now to have some evidence of the optimization that's going on, let me remove the volatile qualifier in the variable X definition to measure how long the loop will take now. As you can see, what's being reported back
>
> **[3:10](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/don-t-let-the-optimizer-remove-your-while-loop?u=76281980&t=190)** to the serial terminal is that it's taking zero seconds. What this means is that it's taking less than one millisecond to complete each of the iterations of the loop function, which contains five codes to the wait function. Looking at the [Arduino](../../Skills/Software%20Development/Arduino.md), you may see that the LED is blinking rapidly, but don't worry. The loop is indeed taking less than one millisecond. However, the functions that report back to the computer through the serial port are taking their time. So much so that we can perceive the blinking of the LED. The point we proved is that the compiler was removing our while loop, in the function that was supposed to implement a delay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** led (8)
> **UI Navigation:** go to (1), toggle (1), open the (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1), download the (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)


### 5. Function Alternatives

[↑ Back to Table of Contents](#table-of-contents)

#### [Lookup tables](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lookup-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lookup-tables?u=76281980&t=0)** - [Instructor] There are several alternatives to traditional functions, and the decision on which to use has an impact on memory, because normal functions use a lot of memory for the stack and the alternatives, well, not so much. It has an impact on storage, because the alternatives perform very well at the expense of space in ROM. And finally, it has an impact on the processing power demand. Lookup tables are the lightest load of all, as we'll see. The first alternative we'll explore are lookup tables. These are constant arrays that contain the return values of a function or operation. And this is done to save the CPU some work. Lookup tables have been in our lives since grade school. One clear example are multiplication tables. If we have to calculate 7 x 8, we're not really adding seven to itself eight times. But instead, we recall this value we already learned. Some calculators have lookup tables to implement expensive functions like logarithms and roots. The idea is to have those hard-to-calculate values already stored in ROM so that instead of a lengthy function call, we only have to [Fetch](../../Skills/Web%20Development/Fetch.md) a value from memory. Let's see an example. Here we have a partial lookup table with the base 10 logarithm for integer values from zero to 255. The lookup table is called log_LUT
>
> **[1:37](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lookup-tables?u=76281980&t=97)** and it's an array of constant floats. The const qualifier is essential here. If it's missing, then the array will be allocated in RAM, so the initial assignment would occur during startup. This means that the whole table would be stored twice, one copy in ROM and the other in RAM, which is really bad. Now the way to use this function substitute is by indexing the table. Here we have a byte variable x and a float y. This float can be assigned either the result of calling the log function in the math.h header file or the index value in the lookup table. The lookup table is way faster because there are no calculations in it, just the indexing of an array. Now let me tell you about some limitations of lookup tables. First, since this is an array, it has to have an integer type as the index, so the function has to be a discrete domain function. This means that we can't evaluate the function for a value between two neighboring indexes. This is usually dealt with by linear interpolation. Basically, this consists of some extra calculations to find the value within a straight line between the two points that surround the point of interest. This is not perfect, but it is certainly better than settling for the discrete domain. Another limitation is that implementing the whole function is sometimes impractical,
>
> **[3:12](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lookup-tables?u=76281980&t=192)** because it repeats its behavior in a way that's easy to adapt. Take this sine function, for example, there's no need to store values other than those for a domain angle between zero and 90 degrees. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the function is easy to adapt by manipulating the angle and sine of the result. Even the cosine function wouldn't be necessary, because we could just add 90 degrees to the angle. Going even further, cosecant and secant can be calculated by fetching this table and then calculating a reciprocal. All of these table calculations may be worth the effort to avoid storing another heavy lookup table. So what's the lesson? What is the takeaway? First, lookup tables are excellent to take some computational load off the CPU. Next, higher domain precision means a larger table. That's the price of the speed up. In reality, lookup tables are used with minor additional computations to account for their limitations. And finally, lookup tables pose a trade off between speed and storage. When speed is crucial, and there's enough storage to spare, lookup tables are an excellent choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** rom (3), cpu (2), ram (2)
> **Definitions:** means that (2), is called (1), is an  (1)
> **File Paths:** math.h (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Macro functions](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/macro-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/macro-functions?u=76281980&t=0)** - [Instruction] Here's another alternative to regular functions that has its subtle advantages and disadvantages. That's the macro function. This is another preprocessor trick, and it consists of using the #define directive. Here's an example. This definition does not simply replace the first part for the second. It actually causes the preprocessor to find all function calls for the macro, and replace them by the expression at the right with the appropriate argument. That's what inlining means. The function is copied in the code every time it's used. So this is an example, square macro function, and it's equivalent regular function definition. They both calculate the square of the argument. And as you can see, the syntax for using both functions is pretty much the same. So which is better? Let's see some advantages of the macro function over regular functions. A macro function runs a little faster, because being an inline function, it doesn't have to send parameters nor return values. Next, a macro function may make code seem a little easier to understand, as C has some rather esoteric functions. For example, the following macro is semantically much more meaningful than its implementation. The use of the ternary operator isn't as clear as a function
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/macro-functions?u=76281980&t=94)** called mean, which clearly suggests returning the minimum between A and B. Now, for the advantages of regular functions over macro functions. A traditional function is well-defined in terms of its behavior because it's part of the formal programming language definition. Whereas, the macro function is part of the pre-processor directive implementation. So weird stuff may happen. For example, calling square macro with the argument 2 plus 3 will result in 11. When clearly, the square of 5 is 25. The reason for this wrong result is that the macro is expanded from square macro of 2 plus 3 to calculating 2 plus the product of 3 times 2. That's 6. Plus 3, which overall is 11. Too bad. Next, macros are supposed to take just one line. So writing multi-line macros is really a work around that may easily go wrong. Finally, macro functions are always inline functions. So each time the source code calls one of these functions, the actual code is copied in place of the function call. This means that if a macro function is called 100 times in my source code, I'd better have a hundred times the size of the produce code for that function
>
> **[3:09](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/macro-functions?u=76281980&t=189)** available in non-volatile memory. This is known as code bloating, by the way. There are many more benefits and caveats to using macro functions. In general, I don't like to use them so much, simply because the C programming language by itself is so well-defined that I feel there are more things to be careful not to break, than benefits when using macro functions. One real advantage of these functions is their inline nature because of the improvement in speed. All of the problems with macro functions come from the fact that the compiler can't enforce much for correctness because the preprocessor has already changed the code before the compiler has anything to say. If only there was a better alternative for creating inline functions managed by the compiler. The good news, there is.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), means that (1), is called (1), known as (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** source code (2)
> **Analogies:** for example (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instruction] (1)

#### [Inline functions](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-functions?u=76281980&t=0)** - [Instructor] While traditional functions may take too long to run, and macros can be quite limited, inlining is a mechanism provided by the C programming language that offers the best of both worlds. Inline functions are actual functions that return a value, evaluate parameters, have defined return data types, and naturally support multiple lines. All you need to do is add a keyword or an attribute to implement as inline. Inlining functions is part of the many optimizations a compiler will perform on your code. This means that some calls to a certain function may be inlined in the produced code, and some calls may not. It all depends on the level of optimizations you ask your compiler to perform on your code. Only functions that include the inline keyword are suggested to be inlined. The compiler decides whether or not to finally inline them, depending on the optimization situation. There are two options for inlining in C. There's a keyword to ask the compiler to consider inlining, and there's an attribute to force the compiler to inline a function, if that's what you want. Here's how to force and suggest inlining. Forced inlining is communicated at the function declaration, with the added part that reads, attribute always inline, just the way it's shown in the code
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-functions?u=76281980&t=94)** with the double parentheses. Next, you proceed to implement the function the way you always have. Now to suggest inlining and let the compiler decide what's best, you just have to add the inline keyword right after the return type. This way, the function named square AI will always be inlined. Whereas the square SI function may be inlined sometimes. Here are some further advantages of inline functions over macro functions. Parameter types are inspected by the compiler. So compile errors and warnings will help you debug. These include type checking of parameters and return value expressions in parameters, operator precedence, and so on. For the same reason, weird parameters are much less risky. By weird, I mean arguments like function calls, increment operators, and expressions that would be sensitive to the order of the operands in a poorly defined macro. For example, these two calls to a square macro function like the one we saw before are different. But they're the same for an inline function implementation, just the way they're supposed to be. Debugging is much easier, because the compiler is informed of the inline functions implementation,, as opposed to macro functions, which are mere substitutions which the compiler has no semantic knowledge about.
>
> **[3:10](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-functions?u=76281980&t=190)** Here are the key ideas of this video. Macros are okay for very simple functions that may make your code easier to read. If you really need to inline a multi-line function, remember that you have a mechanism to do it by force. Just make sure it's what you want, as it may result in code bloating. For everything else, you should leave inlining to the compiler by just suggesting it, if anything.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [LUT vs. function example in Arduino](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980&t=0)** - [Instructor] In this practical example, we'll see the speed up obtained by using a lookup table instead of a regular function in a program that performs a big number of calculations. Again, this code is available in the exercise files folder, and I encourage you to play around with it. This is the longest source file in the course. You may want to take some time to look at the whole file, but there are only three parts I want you to pay attention to. First, we have three macro definitions in lines nine, 12, and 15, respectively, which modify the behavior of the code with ifdef directives. So you may leave either of these definitions or comment them out depending on how you want the program to behave. The first one is called USE_LUT, and it's there to select whether you want to use a lookup table or a regular function in the calculations ahead. We'll start disabling this macro to test the performance of a function implementation. The second macro called USE_LOG enables the use of a logarithm function or lookup table. If you come in this definition out, the function or lookup table will calculate a square instead of a logarithm. The third macro is called MEASURE and it's the same we've been using to report the time it takes to perform one iteration of the loop function using the serial monitor. You'll see ifdef directives throughout the code to build different versions of the application, according to these macros.
>
> **[1:33](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980&t=93)** The next part of the code I want you to pay attention to are the lookup tables. Starting at line 26, we have the lookup table for the base-10 logarithm for numbers from zero to 255. As you can see, it's an array of const double types. I use doubles because I'm about to compare this to the log10 function in math.h, which returns a double. For the [Arduino](../../Skills/Software%20Development/Arduino.md) UNO, however, the double type is the same as the float type, so they are both binary 32. As you may imagine, this will take up a lot of room in non-volatile memory. Starting at line 61, we have the lookup table to calculate the square of an 8-bit unsigned number. This one uses 32-bit unsigned integers, so it's the same size of the logarithm table. The third part of the code I want you to pay attention to is the main loop, which is a set of two nested loops starting at line 121. The while loop will iterate j times running the nested for loop, which runs 255 times, calling the function or accessing the lookup table according to the macro definitions. Up ahead, we will see the execution of the code in line 125 for the logarithm lookup table or line 131 for the regular function of logarithm, which is defined in math.h. So let me compile and open the serial monitor. As you can see, going through all of the function calls,
>
> **[3:11](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980&t=191)** that's 255 function calls, around all of the iterations of the while loop, it's taking four seconds. Clearly, that is very slow. Now let's see what happens when we switch to using the lookup table instead of a function. We can do that by simply uncommenting the USE_LUT macro definition. As you can see, it's only taking 32 milliseconds. This is way faster, 127 times faster to be exact. So this is a clear example where using a lookup table is much more convenient than a regular function. And this shouldn't surprise you much, because the CPU in the Arduino UNO is very limited. It doesn't have a floating-point unit and we are demanding logarithms from it. Lastly, you may remember that the const qualifier is essential in lookup table definitions to prevent the table from going to RAM. But sometimes this is not enough. It all depends on the specific compiler you are using. In the case of the Arduino UNO, we need the PROGMEM modifier to specify that we need this array in the non-volatile program memory. So if you look at the output below, you'll see that global variables are using 1,248 bytes or 60% of dynamic memory. Well, it turns out that this number includes the lookup tables. In other words,
>
> **[4:43](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980&t=283)** our lookup tables are occupying space in RAM and ROM. Now let me add the PROGMEM modifier to our lookup table definitions, and let's see what happens to the dynamic memory.
>
> **[5:03](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980&t=303)** As you can see, now we get 224 bytes for our global variables or 10% of dynamic memory. That's a reduction of 1,024 bytes, which is exactly our lookup table of 256 32-bit doubles. If you're trying this code on your Arduino UNO, there are plenty of things that may turn out differently in your setting. Your times may vary and you may need to do some adjustments to see the difference. So let's recap on what we really care about. First, we saw that the lookup table implementation works much faster than the function version. Next, in the Arduino UNO, we need to use the PROGMEM modifier to get our lookup tables to ROM. This is not very common, many compilers take const as a command to send variables to flash or other non-volatile ROM. Also, go ahead and try the same experiment for the square function. Simply comment out the USE_LOG macro definition. You may also want to try adjusting the values of j if the LED is blinking too fast for you to notice, for example. Now let me tell you about the trade-off between storage and speed we got from the experiment with logarithms. This table shows the program memory requirement and the running time obtained for the function and the lookup table implementations of the code. At the rightmost column, we have the trade-off,
>
> **[6:37](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980&t=397)** which can be summarized like this. It will cost you an extra 18.8% in your program memory to get your program to run 127 times faster. However, the benefits aren't always this dramatic. Remember that we are dealing with a complicated function that uses floating-point numbers, so a lookup table is an excellent alternative. Also consider that our lookup table is quite small with only 256 entries, so the 18.8% investment in storage may be overly optimistic. For a less dramatic example, here are my results for the other function you can select in this exercise. If we comment out the macro definition of USE_LOG, then the program will calculate a square instead of a logarithm. There is one key difference between this example and the previous one. The square function is definitely simpler than the logarithm function in math.h, however, it may be implemented. To calculate a square, we simply multiply the argument by itself. As you can see in the trade-off column, it will cost you an extra 29.2% in program memory to get your program to run 4.84 times faster. The improvement is not as impressive as the previous one because the lookup table is saving the CPU the trouble of performing a simple calculation it's completely capable of performing.
>
> **[8:12](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-arduino?u=76281980&t=492)** So it's always a good idea to compare the alternatives to decide if you want to use a lookup table or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (5)
> **Env Vars:** uno (5), use_log (3), progmem (3), rom (3), use_lut (2)
> **Definitions:** is called (2), is a  (2), in other words (1), is an  (1)
> **Versions:** 18.8 (2), 29.2 (1), 4.84 (1)
> **File Paths:** math.h (3)
> **Analogies:** imagine (1), for example (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)

#### [LUT vs. function example in Keil](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-keil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-keil?u=76281980&t=0)** - [Instructor] Checking in with Keil, here we have an implementation of the same program to compare lookup tables to regular functions. As usual, you can find this in the exercise files folder. The code is pretty much the same as the [Arduino](../../Skills/Software%20Development/Arduino.md) example we just saw. So I'd like to focus on two things, how the const qualifiers sends the lookup table to ROM and a [Simulation](../../Skills/Hardware/Simulation.md) to make a performance comparison. In line 29, we have the logarithm lookup table. Notice that I'm using the const qualifier, but that's it. The Keil compiler for ARM Cortex microcontrollers takes const to mean send this to ROM. Let me show you how to check where the lookup table is located. We'll start sending the table to RAM, so I'll removed const here. So let's compile and start the debugger.
>
> **[0:58](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-keil?u=76281980&t=58)** If you look at the lower right section, I've created a watch for the log_LUT table, you may verify that the data is there by expanding it. Now, if you look at the right of the table's name, you will see its address. It starts with 20, that's the variable segment, so it's RAM. You can also check the map file in the listings folder and scroll all the way down. Now look at the RW Data column near the middle of the screen. The value of 2064 is the memory used for variables. The lookup table occupies 2048 bytes because doubles are 64 bits in the ARM Cortex platform. Now let's go back to the code and restore the const qualifier, and let me compile and run the debugger. Now look at the address in the Watch window. It starts at 08, which is flash memory, However, the address is not telling us much, so let's go look at the map file. Now we can see our 2K table in the RO Data segment. Those 2,472 bytes include our lookup table, so the point I'm trying to make is that in many compilers for embedded microcontrollers that have RAM and flash memories in the same address in space, const means read only,
>
> **[2:30](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-keil?u=76281980&t=150)** and so the const data goes to ROM. As for the simulation, let me tell you how we'll measure time in this example, and in a few more examples ahead. The code is setting a flag called computing in line 114, just before running the computation loop. Then this flag is cleared in line 134, right after finishing the loop. Let me open the debugger to see it working. We are about to run a simulation and we are going to observe this computing flag as the simulation runs. For this, I will open the Logic Analyzer, and as you can see, I have already set up the analyzer to show a timing diagram for the computing flag. So let me start the simulation and stop it when we can see several cycles in the analyzer. Now I will adjust the [Zoom](../../Skills/Software%20Development/Zoom.md) until we can see exactly one cycle to make the best use of the screen resolution. Notice that the signal seems to stay high most of the time, and it goes low periodically, very briefly, just as we would expect from the code. To make a measurement, make sure the cursor is enabled in the check boxes at the right. Now, click on the leftmost low point of the signal. This leaves the cursor fixed at that point and shows over the mouse pointer,
>
> **[4:04](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/lut-vs-function-example-in-keil?u=76281980&t=244)** the time difference between the cursor and the mouse pointer. So let me place the pointer in the second low point of the signal, and this is what I get 57.6 milliseconds. You can see it in this small text box under the cursor as the d measurement. So let's look at the speedup for this experiment. We just saw how I got 57.6 milliseconds for the lookup table implementation. Then I used the same procedure for the regular functions implementation and got 7.53 seconds. This means that the lookup table implementation is about 130 times faster than using functions. Interestingly enough, this is very similar to the speedup we got with the Arduino UNO.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation](../../Skills/Hardware/Simulation.md) (5), cursor (4), [Arduino](../../Skills/Software%20Development/Arduino.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** rom (3), ram (3), arm (2), uno (1)
> **CLI Commands:** make (5), find (1)
> **Versions:** 57.6 (2), 7.53 (1)
> **UI Navigation:** open the (2), click on (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** means that (1)

#### [Inline function example in Keil](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-function-example-in-keil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-function-example-in-keil?u=76281980&t=0)** - [Instructor] Here, we have a performance comparison between regular functions and inline functions in CAIO. You can find this example in the exercise files folder if you'd like to take the time to read the code, but here are the highlights. If you look at line 17, I have written a simple function called wsum, which calculates an arbitrary weighted sum between its arguments. Now look at line 15. This is the prototype for the wsum function, and it wouldn't normally be useful, but I'm using it to force the compiler to inline the function. Notice the attribute at the end. For this example, I will use this line to inline the function or comment it out to implement it as a normal function. Now I'm not trying to convince you to use inline functions, I just want you to see that there's a slight difference in the running time and I want you to see the resulting assembly code for both cases. The function is used in the loop in line 37. This loop runs 30,000 times, calling the function three times per iteration. First, let me show you how the assembly code looks for a regular function, so let me comment line 15 out. So let's take a look. In the C code, let me select one line where the function is called to pinpoint the function called in the assembly code.
>
> **[1:35](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-function-example-in-keil?u=76281980&t=95)** Let's look at the second function call, and if you look at the assembly code here we have a BL.W instruction, which is the function call as shown at the right. So now we are sure that this implementation is calling a function, which will eventually return to allow this part of the code to resume. Now let me restore line 15 in the code to inline the function, and let's see it working. Once again, let me go to the C code and scroll down to the second function call.
>
> **[2:19](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/inline-function-example-in-keil?u=76281980&t=139)** Now, as you can see, in the assembly code, first we have the implementation for line 39 and then the implementation for line 18, which is the return statement of the function. This last part is the inline function. Every time we call this function in the code, we will see this block. You may have noticed in the code that I used the computing flag trick again to measure how long the loop takes in the simulator, so here we have my results. I got 169 milliseconds for the inline function implementation. Then I got 251 milliseconds for the regular function implementation. And, so, the speedup for using an inline function instead of a regular function was an unimpressive 1.5. Keep in mind that the function I used here is super simple. Its calculation is performed in one assembly instruction. So this is an example of the best speedups you could get from inlining a function as it would be getting rid of the hassle of passing parameters and returning values. But, as you can see, the benefits aren't so impressive, and there's a cost in program memory, so you must have a very good reason to insist on inlining your functions.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), we call this (1), is an  (1)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** find (1)
> **Env Vars:** caio (1)
> **Versions:** 1.5 (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 6. Floating-Point Unit Alternatives

[↑ Back to Table of Contents](#table-of-contents)

#### [Software implementation of float](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/software-implementation-of-float?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/software-implementation-of-float?u=76281980&t=0)** - [Narrator] Low-End CPU's usually don't have a floating point unit. Using software routines instead of an FPU has an impact on memory because these substitute libraries use the RAM for temporary calculations all the time. These libraries have to be stored in ROM, so extra storage is needed. Energy consumption is also affected because the floating-point work has to be delegated to the CPU. For the same reason, the processing power demand is higher because the CPU utilization increases. This means that overall performance drops with this extra work. Recall that floating-point numbers have a standardized format known as IEEE 754 with three levels of range and precision in C. We have 32 bit floats, 64 bit doubles and 80 bit long doubles. The one shown in the figure is the 32 bit float. The difference between these types is the number of bits in the exponent and significant. To work with these numbers, the software or [Hardware](../../Topics/Hardware.md) has to extract these three parts and translate them into numbers. A one in the sign bit means negative, and a zero means positive. The exponent is encoded in the offset binary representation, and the significant is a fixed point number. So there's a lot of calculations involved just to use these numbers. So what's the content of a floating-point library?
>
> **[1:37](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/software-implementation-of-float?u=76281980&t=97)** Well, these libraries have to provide the code to implement these numbers, which is done by manipulating the three parts encoded in them. Virtually every floating-point runtime library contains three types of routines. These are data conversion, these routines are the ones that implement the standard structure we just saw. They also implement useful conversions between integer, long, float and double. Next we have arithmetic operations, including the basic ones to add, subtract, multiply, and divide. But also other popular operations like raising a number to some power, calculating a square root, calculating an absolute value and so on. And finally, we have comparison routines. These are necessary for useful [Algorithms](../../Skills/Software%20Development/Algorithms.md), and these help determine if two numbers are equal, one greater than the other, one less than the other and their combinations. So here are the key points to remember so far. Runtime libraries are the default way of working with floating-point numbers when you don't have an FPU. Although highly optimized, floating-point routines greatly increased the demand of CPU processing power. This translates to overall slower applications. Finally, a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of caution. Even if you have a microcontroller with an FPU, your compiler may decide to use these software libraries for some reason.
>
> **[3:09](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/software-implementation-of-float?u=76281980&t=189)** A common mistake is trying to use doubles on an FPU that only supports floats, so be careful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** cpu (4), fpu (4), ram (1), rom (1), ieee (1)
> **Definitions:** means that (1), known as (1), is a  (1)
> **Warnings:** caution (1), common mistake (1), be careful (1)
> **Speakers:** - [narrator] (1)

#### [Fixed-point math](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/fixed-point-math?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/fixed-point-math?u=76281980&t=0)** - [Instructor] At this point, it's important to understand that floating-point numbers are not a silver bullet. They're just not adequate for every situation or application. Take [Banking](../../Skills/Software%20Development/Banking.md) for instance, did you know that you just can't add 100 million to one with 32-bit floats? Feel free to try it, just make sure you're using 32-bit floats. Now, this would mean that if you go to the bank and make a deposit for $1 into your account with a balance of 100 million, your balance will stay unchanged. Sure it's just a dollar, but if you made a 100 million consecutive deposits of $1 each, your balance would still remain unchanged. This is due to the fact that floats have a precision of about six decimal places, this is sometimes referred to as the big number eating the small number. So, now let's get to know fixed-point numbers with a comparison. At the left, we have floating-point numbers and some characteristics. And to the right, we have the same characteristics for fixed-point numbers. Floats have a dynamic range while fixed-point numbers have a fixed range. This means that for floats, the level of granularity or resolution gets larger as the numbers get larger, that's because floats use a non-linear encoding. Next, we have three fields and three different encodings in floating-point, but fixed-point uses binary scaling of an integer type.
>
> **[1:35](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/fixed-point-math?u=76281980&t=95)** Floats require special operations because of these encodings, whereas fixed-point uses something very close to regular integer operations. And lastly, both have widely-used standard types. Floating-points has the well-known IEEE 754, and fixed-point has Q encoding types like Q7.8, Q5.10, and Q1.14. So, how does Q encoding work? It's a linearly scale integer, meaning that its value is encoded with an integer, which you can multiply by a scaling factor to get your number. Exactly as with integers, this number can be signed or unsigned by using the Two's Complement format. The format is usually specified as the letter Q followed by two numbers, which specify the number of bits in the integer part, and the number of bits in the fractional part. Now, you shouldn't worry about implementing these numbers more than about implementing floats, because there are several libraries that implements fixed-point types. The figure shows the unsigned Q8.8 fixed-point number format, this is implemented with 16 bits. The way this number works is just like an integer, but the weights of the bits are shifted to the left so negative powers of two start to appear. As you can see, the radix point is located exactly
>
> **[3:10](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/fixed-point-math?u=76281980&t=190)** at the middle of the number. Signed-Q encoded numbers use two's complement sign integers so the encoding remains the same with the sign encoded in their most significant bit, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) just like the Q encoding for unsigned numbers. Thus, the encoding shown in the figure is now signed Q7.8, that's seven bits for the integer, and eight bits for the fractional part. Here are the key ideas in this video. Fixed-point numbers may be a better option when there's no floating-point unit, especially because of their apparently simple arithmetic. I don't want you to get the wrong idea, floating point is still useful for scientific calculations where you don't mind about big numbers consuming much smaller numbers. And finally, you should use fixed-point numbers when you can anticipate the range your values will have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** just like (2), for instance (1)
> **CLI Commands:** make (2)
> **Env Vars:** ieee (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Float-point vs. fixed-point example](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-vs-fixed-point-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-vs-fixed-point-example?u=76281980&t=0)** - [Instructor] In this practical [Arduino](../../Skills/Software%20Development/Arduino.md) demo, we'll do pretty much the same thing we've been doing in the last exercises. That is observe how long it takes to iterate through a lot of calculations with fixed point numbers as compared to the same calculations with floating point numbers. Once again, you can find this code in the exercise files folder. Now, to run this application, you'll need to install one particular library. If you look at lines seven and eight, those two header files are part of the same library, which is called FixedPoints. You can download this library in the Arduino IDE by simply going to Sketch, include library and manage libraries. You can look for the library by using the search bar. Simply type in FixedPoints. As you can see, this library is already installed in my setting. If you don't have it installed, you can simply click on the install button. As usual, there are some parts of the code I want you to pay attention to. Let's go to line 10 where I have defined the macro code USE_FIXED_POINT to select whether to use fixed point numbers or floating point numbers. This selection is done in lines 15 through 19. If we are using fixed point numbers, then notice in line 16 that a, b and c are variables of a type defined in the library we've just included.
>
> **[1:34](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-vs-fixed-point-example?u=76281980&t=94)** This type is signed Q7.8 meaning assigned number with seven bits in the integer part and eight bits in the fractional part. On the other hand, if we decide to use floating point numbers, then I define them in line 18 as volatile float. We are using the same three variables and I use the volatile trick to avoid optimizations from the compiler to make this a fair comparison. Speaking of fairness, you may have noticed that the fixed point numbers in line 16 were not declared as volatile. It turns out that this implementation of fixed point numbers uses templates. So it gets tricky to add the volatile qualifier. However, their operators are overloaded to implement the required arithmetic. The bottom line is that there is no risk of unwanted optimizations for this type. Another disclaimer worth mentioning is that this is a C++ library. You can tell because it uses templates and operator overloading. But once again, chances are you'll find yourself working with a C++ compiler much more often than a C compiler. Now going to the loop function, the loop we care about is in line 41. It's a while loop that involves a lot of calculations with a, b and c. As you can see in line 42, we have an assignment, two multiplications,
>
> **[3:07](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-vs-fixed-point-example?u=76281980&t=187)** an addition, a subtraction and a division. All of this is then multiplied by c. The important part is that intensive calculations are being performed here, either with fixed point numbers or with floating point numbers. Let's see it working. First, we will use floating point numbers. So let me comment out line 10. Now let me compile, download and switch to the Serial Monitor. As you can see, this is taking about 2.58 seconds. This is our baseline case and remember, this is using floating point numbers. The ones that employ a runtime library because the Arduino does not have a floating point unit. Now let's us fixed point numbers and see what happens. As you can see, the difference is dramatic. It's about 7.5 times faster than the floating point implementation. So once again, this is another trick you can use to make the best out of a very limited CPU.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** ide (1), use_fixed_point (1), cpu (1)
> **Prerequisites:** install (2), you'll need (1)
> **Versions:** 2.58 (1), 7.5 (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the last (1)

#### [Float-point unit example in Keil](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-unit-example-in-keil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-unit-example-in-keil?u=76281980&t=0)** - [Instructor] I haven't told you much about the microcontroller we are using in the Keil examples. It turns out that the SDM32F303K8 microcontroller has an ARM Cortex, M4F CPU, which means that it has a floating point unit. So here's a code demo you can find in the exercise files folder to see some important details about the floating point unit. This is the same code we solve for the fixed point numbers example in the [Arduino](../../Skills/Software%20Development/Arduino.md) UNO, except this time we are only using floats. So in line 32, we have the usual loop with a bunch of calculations with three floats. This loop runs 30,000 times per iteration of the main loop. So now I'm about to show you how the assembly code looks when we decide not to use the floating point unit. For this, let me click on the magic wand button and at the right, I'll make sure the dropdown that reads floating point [Hardware](../../Topics/Hardware.md) is set to not used. Now let's build the application and open the debugger.
>
> **[1:16](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-unit-example-in-keil?u=76281980&t=76)** First, let's look at the declaration and initialization of the float variables a, b and c. In the assembly code, an important detail is that the registers r0 and r1 are used. These are regular integer registers of the ARM Cortex CPU. Now let's go to line 33 in the code where the calculations are done. Notice in the C code that there are three multiplications, one division, one addition and one subtraction. So in the assembly code, we will see function calls to perform those operations. The names of these functions start with aeabi followed by a descriptive name. For example, here's fdiv for floating point division. Here's some multiplication, another multiplication, an addition, a subtraction
>
> **[2:17](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-unit-example-in-keil?u=76281980&t=137)** and the remaining multiplication. So this is what the use of a runtime library looks like. And now let's see how the code looks when we use the floating point unit. For this I'll click on the magic wand button again, go to the floating point hardware dropdown and select single precision. This is an interesting detail. The floating point unit only supports 32 bit floats, not 64 bit doubles. In fact, if we have used one double variable in our code, it's possible that many values get extended to double and the run-time libraries may have been used when we think we are using the floating point unit. So it's important to check your code and make sure you are only using floats. Let's click okay, build and open the debugger. Now the assembly code looks different. Look at the initializations. The VMOV instruction is used. That's a floating point instruction. The mnemonics for these instructions start with the letter V. Also notice that the s0 register is used. S stands for single precision float. So if you are thinking that s0 is not a regular CPU register, but a floating point register, you are correct. So now let's go to the calculations. Now we will see arithmetic floating point instructions
>
> **[3:51](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/float-point-unit-example-in-keil?u=76281980&t=231)** in the assembly code, instead of function calls. These instructions are easy to spot because they all start with the letter V. Here we have the division, here's one multiplication, here's one multiplication with an ensuing addition, the subtraction, and the last multiplication. As you can see, we are using an extended set of instructions and registers. So once again, I measured the running times for both cases, and here are the results I got. I got 246 milliseconds for the floating point unit. Then I got 1.2 seconds with the runtime library floats. And so using a floating point unit turned out to be about 4.86 times faster, which is a good reason for choosing this hardware aid.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (3), [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** cpu (3), arm (2), sdm32f303k8 (1), m4f (1), uno (1)
> **UI Navigation:** go to (3), click on (2), dropdown (2), open the (2)
> **Definitions:** means that (1), is an  (1), stands for (1), is a  (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 1.2 (1), 4.86 (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/c-programming-for-embedded-applications-14537235/next-steps?u=76281980&t=0)** - [Eduardo] Great job! You made it to the end of the course. I hope you enjoyed getting to know some of the special details of working with [Hardware](../../Topics/Hardware.md) for digital control for either professional applications or just for fun as a hobby. So as next steps, if you liked the [Arduino](../../Skills/Software%20Development/Arduino.md) examples, I'd like to encourage you to consider further courses in our library. Arduino Pulse Width Modulation or Learning Arduino. Also, if you'd like to move on to other platforms like the ones featured in our Keil examples, I'd like to recommend visiting os.[mbed.com](https://mbed.com). This is a community that has a nice online IDE for embedded applications in the ARM Cortex family of microcontrollers. It has a nice editor and compiler, and it supports tons of microcontroller platforms. So that's it. Thank you for taking the course. Now I'll leave you to get to work on your next embedded application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** ide (1), arm (1)
> **URLs:** [mbed.com](https://mbed.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [eduardo] (1)


## Instructor

- [Eduardo Corpeño](../../Instructors/Artificial%20Intelligence%20(AI)/Eduardo%20Corpe%C3%B1o.md)

## Resources

- Exercise files available

## Skills Covered

- Embedded C
- C (Programming Language)

## Path Context

### In [The Top Skills Engineering Professionals Have Right Now](../../Paths/Software%20Development/Learning%20Paths/The%20Top%20Skills%20Engineering%20Professionals%20Have%20Right%20Now.md)
← [Test Automation Foundations](Test%20Automation%20Foundations.md) | **9 of 9**

### In [Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)
← [Complete Guide to C Programming Foundations](../Hardware/Complete%20Guide%20to%20C%20Programming%20Foundations.md) | **9 of 11** | [Arduino- Prototyping](../Hardware/Arduino-%20Prototyping.md) →

## Appears In

- [The Top Skills Engineering Professionals Have Right Now](../../Paths/Software%20Development/Learning%20Paths/The%20Top%20Skills%20Engineering%20Professionals%20Have%20Right%20Now.md)
- [Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Complete Guide to C Programming Foundations](../Hardware/Complete%20Guide%20to%20C%20Programming%20Foundations.md) — C (Programming Language)

---

[↑ Back to top](#)