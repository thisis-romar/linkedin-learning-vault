---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: plc-memory-organization
url: "https://www.linkedin.com/learning/plc-memory-organization"
duration_minutes: 45
duration: 45m
level: Advanced
updated: 7/15/2025
learners: 47070
skills:
  - Programmable Logic Controller (PLC)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEdQs8tEi3FdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615392756499?e=2147483647&amp;v=beta&amp;t=Se2aa2cjWXeW7y6Vuk6GJd6DwG5nm1nmpoTjHHlm7PY"
linkedin_topic: Hardware
learning_paths:
  - '[[Become a PLC Developer]]'
prev_courses:
  - '[[Learning PLC Ladder Logic- 2 Diving Deeper]]'
next_courses:
  - '[[PLC Sequencer Logic]]'
path_nav: '[{"path":"Become a PLC Developer","position":4,"total":7,"prev":"Learning PLC Ladder Logic- 2 Diving Deeper","next":"PLC Sequencer Logic"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - skill/programmable-logic-controller-plc
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/PLC%20Memory%20Organization.md)

![PLC Memory Organization](https://media.licdn.com/dms/image/v2/C560DAQEdQs8tEi3FdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615392756499?e=2147483647&amp;v=beta&amp;t=Se2aa2cjWXeW7y6Vuk6GJd6DwG5nm1nmpoTjHHlm7PY)

# PLC Memory Organization

> You've made PLCs do simple things, but now you need to optimize processes based on data you're collecting. Where does the data go? How can you access that data from memory efficiently? In this course, instructor Zara Khalil explains the details of data storage, how it interacts with input and output (I/O), and how you can approach memory structures. Zara introduces you to the different software an

> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization) | 45m | Advanced | 47K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Memory organization for PLCs](#memory-organization-for-plcs)
  - [What you should know before watching](#what-you-should-know-before-watching)
  - [LogixPro PLC software simulation](#logixpro-plc-software-simulation)
- [**1. Processor Memory Organization**](#1-processor-memory-organization) (2 videos)
  - [Allen-Bradley PLCs types](#allen-bradley-plcs-types)
  - [Allen-Bradley PLCs memory structures](#allen-bradley-plcs-memory-structures)
- [**2. Rack-Based System**](#2-rack-based-system) (7 videos)
  - [Rack-based systems](#rack-based-systems)
  - [Program files](#program-files)
  - [Data files: Part 1](#data-files-part-1)
  - [Data files: Part 2](#data-files-part-2)
  - [LogixPro demo](#logixpro-demo)
  - [I/O address format for rack-based PLC](#io-address-format-for-rack-based-plc)
  - [Data storage 16-bit words](#data-storage-16-bit-words)
- [**3. Tag-Based System**](#3-tag-based-system) (7 videos)
  - [Tag-based system](#tag-based-system)
  - [Project file components overview](#project-file-components-overview)
  - [Tags in PLC](#tags-in-plc)
  - [Tags types for ControlLogix controllers](#tags-types-for-controllogix-controllers)
  - [Global and local tags](#global-and-local-tags)
  - [Addressing format for tag-based systems](#addressing-format-for-tag-based-systems)
  - [Base and Alias tags](#base-and-alias-tags)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Memory organization for PLCs
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=0)** - [Zahraa] At some point, we might have heard that organizing and knowing where you placed an item helps in finding it when needed, or not.
>
> **[0:10](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=10)** But when it comes to PLC programming, understanding the memory structure will help in knowing where to find, refer, and assign data to use them in the ladder logic program.
>
> **[0:23](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=23)** In this LinkedIn Learner course, I'll explain to you memory structures that Allen Bradley controllers use, rack-based systems, and tag-based systems.
>
> **[0:36](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=36)** I'll explore each system separately by explaining the structure of each memory type and its associated components.
>
> **[0:46](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=46)** I am Zahraa Khalil.
>
> **[0:47](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=47)** I am an engineering instructor, and I love teaching students just like you.
>
> **[0:53](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=53)** Join me in my LinkedIn Learner course and explore the world of PLC ladder logic programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** plc (2), [[Programming]] (2), [[LinkedIn]] (2), data (1), [[Engineering]] (1)
> **Env Vars:** plc (2)
> **CLI Commands:** find (1)
> **Analogies:** just like (1)
> **Speakers:** - [zahraa] (1)

#### What you should know before watching
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=0)** - [Instructor] Before you start this course, you should be familiar with how ladder logic programming works, knowing the basic operation and basic instructions.
>
> **[0:11](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=11)** This course covers the theory part for Allen Bradley PLC memory structure.
>
> **[0:17](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=17)** Although no programming is covered in this course, but understanding the memory structure helps in programming, as you will be able to know where to find, refer, and assign data to use in the ladder logic program.
>
> **[0:32](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=32)** This course is designed as a continuation of the learning path.
>
> **[0:36](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=36)** Become a PLC developer.
>
> **[0:39](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=39)** If you need a refresher on the basics of programming ladder logic, I recommend that you check this course.
>
> **[0:46](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=46)** "Learning PLC Ladder Logic."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming]] (4), plc (3), data (1)
> **Env Vars:** plc (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### LogixPro PLC software simulation
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980&t=0)** - [Instructor] For this course, I'll be using LogixPro PLC simulator from LearningPit.
>
> **[0:07](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980&t=7)** This simulation software mimics Allen Bradley RSLogix 500.
>
> **[0:13](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980&t=13)** Please refer to this video, "LogixPro PLC Simulation Software," where I go through the software and how to download it.
>
> **[0:23](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980&t=23)** The simulation software is only used for demo.
>
> **[0:27](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980&t=27)** The course does not teach the software, as you can apply the knowledge to any PLC software that uses ladder logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** plc (3), [[Simulation Software]] (3)
> **Env Vars:** plc (3)
> **Speakers:** - [instructor] (1)


### 1. Processor Memory Organization

[↑ Back to Table of Contents](#table-of-contents)

#### Allen-Bradley PLCs types
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=0)** - [Narrator] There are different types of PLC controllers on the market from various manufacturers.
>
> **[0:06](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=6)** Here are a couple of examples of the ones by Allen Bradley from Rockwell Automation.
>
> **[0:16](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=16)** In general while the fundamental concepts of PLC programming are common to all manufacturers there are differences between them.
>
> **[0:25](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=25)** For example, the controller size, memory organization, I/O addressing, instruction set and the applications that are used for which means that PLC programs are never perfectly interchangeable among the various models of PLCs.
>
> **[0:46](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=46)** The two PLCs you see here are from Allen Bradley and Siemens and sometimes even within the same product line of a single manufacturer different models may not even be compatible.
>
> **[1:03](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=63)** As for example Allen Bradley ControlLogix and MicroLogix.
>
> **[1:09](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=69)** Allen Bradley controllers are generally classified into three categories depending on the controller group type and its associated software.
>
> **[1:21](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=81)** The controller category is organized by the size of the controller and its application.
>
> **[1:28](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=88)** The software comes in two types.
>
> **[1:31](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=91)** RSLogix 500 and RSLogix 5,000.
>
> **[1:37](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=97)** The first group is MicroLogix controllers.
>
> **[1:41](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=101)** There are relatively small controllers used for low cost stand alone machines for small control systems.
>
> **[1:51](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=111)** MicroLogix controllers use RSLogix 500 software.
>
> **[1:57](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=117)** The second group is CompactLogix and SLC 500 controllers they are still considered small controllers used for medium sized applications and processes but they have more advanced capabilities to be used in manufacturing.
>
> **[2:18](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=138)** CompactLogix controllers use RSLogix 5,000 software and SLC controllers use RSLogix 500 software.
>
> **[2:32](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=152)** The third group is ControlLogix controllers.
>
> **[2:35](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=155)** They are used for large control systems.
>
> **[2:39](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=159)** In general they provide faster system performance for large processes compared to the other two controller groups.
>
> **[2:49](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=169)** ControlLogix controllers use RSLogix 5,000 software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** plc (3), [[Automation]] (1), [[Programming]] (1), product (1), application (1)
> **Env Vars:** plc (3), slc (2)
> **Analogies:** for example (2)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### Allen-Bradley PLCs memory structures
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980&t=0)** - [Instructor] The different types of Allen Bradley controllers deal with data in terms of storing and retrieving them according to the memory structure of the controller.
>
> **[0:12](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980&t=12)** Allen Bradley controllers have two different memory structures; rack-based system and tag-based systems.
>
> **[0:22](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980&t=22)** MicroLogix controllers and SLC 500 series of controllers use a rack-based fixed memory structure.
>
> **[0:32](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980&t=32)** CompactLogix controllers use a tag-based system that has a flexible memory structure.
>
> **[0:39](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980&t=39)** Finally, ControlLogics series of controllers also use a tag-based memory structure for assigning and referring to memory locations.
>
> **[0:50](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980&t=50)** Understanding the different memory structures helps in the programming process as we need to know where the data are stored and how to assign and refer to memory locations in order to use them in the Ladder Logic Programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Programming]] (2)
> **Env Vars:** slc (1)
> **Speakers:** - [instructor] (1)


### 2. Rack-Based System

[↑ Back to Table of Contents](#table-of-contents)

#### Rack-based systems
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=0)** - [Instructor] MicroLogix and SLC 500 controllers use a rack-based fixed-memory structure.
>
> **[0:08](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=8)** As the name indicates, the memory locations are fixed.
>
> **[0:14](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=14)** The memory space for rack-based system is divided into two broad categories; program files and data files.
>
> **[0:25](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=25)** In RSLogix500 software, the data are saved in the highlighted area.
>
> **[0:31](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=31)** The common memory structure for this type of system is a two-drawer filing cabinet.
>
> **[0:38](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=38)** One drawer for program files and the second drawer for data files.
>
> **[0:45](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=45)** The data and program file groups are also subdivided.
>
> **[0:49](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=49)** So think about it like each drawer has certain number of files inside and the location is fixed for each file.
>
> **[0:58](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=58)** The order matters as well.
>
> **[1:01](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=61)** Program files, in general, contain controller information, main ladder logic program, interrupt subroutines, and all subroutine programs.
>
> **[1:12](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=72)** In RSLogix500, there are up to 256 program files divided like this.
>
> **[1:21](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=81)** System files and program files.
>
> **[1:26](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=86)** The second category is data files.
>
> **[1:29](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=89)** This is the area of the processor memory where input and output status are stored, processor status and the status of various bits and numerical data, and the same number of files, 256, are included in the data file section.
>
> **[1:50](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=110)** They're also subdivided into instruction-specific files and file types.
>
> **[1:56](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=116)** For example, timer and counter instruction and input and output status.
>
> **[2:03](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=123)** So for all the controller types that use a rack-based system and use RSLogix500, these memory files will be exactly the same.
>
> **[2:14](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=134)** The memory locations for program files in data files are fixed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8)
> **Env Vars:** slc (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Program files
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=0)** - [Instructor] Program files are the part of the processor memory that store the user ladder logic program.
>
> **[0:08](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=8)** In RSLogix500, the name of the ladder logic program appears under the program file section.
>
> **[0:17](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=17)** Inside the program files, there are two program file types; system and program.
>
> **[0:26](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=26)** In much of the documentation, they are represented as file folders.
>
> **[0:32](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=32)** For the system files, they are subdivided into system functions; files zero and one.
>
> **[0:40](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=40)** The program files include file two that has the main ladder logic program and separate team programs included in file three through file 255.
>
> **[0:55](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=55)** System file zero.
>
> **[0:57](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=57)** This file is always included and contains various system related and user programs information such as processor type, input and output modules configuration, processor file name, and password, if needed.
>
> **[1:16](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=76)** System file one is reserved by the processor and not accessible to the user.
>
> **[1:23](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=83)** File two is the default location for the main ladder logic program.
>
> **[1:29](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=89)** It contains the logic and the instructions that define how the controller operates.
>
> **[1:36](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=96)** This file is always included because as soon as you start a new program inside the software, you will have at least one ladder logic program in it.
>
> **[1:49](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=109)** And program files from file three to file 255 are user created files that are available for separate teams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** teams (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Data files: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=0)** - [Instructor] Data files store the information needed to carry out the user program, like the status of inputs and outputs, the processor status, and the status of various bits and numerical data.
>
> **[0:17](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=17)** Status is the on and off type of information represented by one and zero.
>
> **[0:24](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=24)** The files are organized by the type of data they contain.
>
> **[0:29](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=29)** Files number zero through eight are specified data files, and files number nine through 255 are user defined data files.
>
> **[0:42](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=42)** In RSLogix500, the files are placed under the data file section with the same order.
>
> **[0:50](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=50)** Output file zero, this file stores the status of the output module terminals.
>
> **[0:56](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=56)** You see here the output module is placed in slot number three, but the data inside the memory are stored in file zero.
>
> **[1:07](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=67)** As the memory location is fixed, input file one, this file stores the status of the input terminals for the controller.
>
> **[1:18](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=78)** In the example here, the input module is in slot one.
>
> **[1:24](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=84)** Status file two, this file stores controller operation information and sometimes it is used for troubleshooting.
>
> **[1:34](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=94)** Bit file three, this file consists of binary digits and often referred to as Boolean type.
>
> **[1:43](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=103)** It is used to store internal bits.
>
> **[1:46](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=106)** Internal bits can be values for internal outputs, internal coils, internal control relays, or simply, we refer to them as internal bits.
>
> **[2:00](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=120)** You see here the internal bits in the binary table inside file three and you can select any bit to use it in your program.
>
> **[2:10](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=130)** An example is word four, bit nine, and it's used as an output internal bit.
>
> **[2:19](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=139)** Internal means the bit is not connected to any physical device.
>
> **[2:24](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=144)** It is used in situation in programming where an output is required, but a physical device is not needed.
>
> **[2:33](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=153)** The internal output operates just like any output that is controlled by ladder logic program, but it's used strictly for internal purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Troubleshooting]] (1), [[Microsoft Word|Word]] (1), [[Programming]] (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Data files: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=0)** - [Instructor] Timer file four.
>
> **[0:02](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=2)** This file stores the data for each timer instruction used in the latter logic program.
>
> **[0:09](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=9)** Counter file five.
>
> **[0:11](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=11)** This file stores the data for each counter instruction used in the latter logic program.
>
> **[0:18](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=18)** Control file six.
>
> **[0:21](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=21)** This file stores the data for specific instructions such as shift registers and sequencers.
>
> **[0:30](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=30)** Integer file seven.
>
> **[0:32](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=32)** This file is used to store whole number values or bit information.
>
> **[0:39](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=39)** Let's say, for example, we want to store temperature and pressure values or mathematical operation constants.
>
> **[0:47](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=47)** File eight.
>
> **[0:49](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=49)** The floating-point file is used to store fractional numerical data.
>
> **[0:55](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=55)** This comes in handy when dealing with math operations.
>
> **[1:00](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=60)** This file applies to selected PLC processor types.
>
> **[1:06](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=66)** Now files from nine up to 255 are called user-defined files and are used to create any file type from zero through eight.
>
> **[1:19](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=79)** They are used to expand the number of data files available to the programmer if needed.
>
> **[1:27](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=87)** So this is generally what the memory structure of a rack-based systems looks like.
>
> **[1:33](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=93)** Having both files categories with their subdivision files, and in RSLogix500, they are shown in this area.
>
> **[1:44](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=104)** If you would like to learn more, I recommend checking out the user manual of your desired controller.
>
> **[1:51](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=111)** Here's an example of the user manual for SLC500 Controller by Ellen Bradley.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), plc (1)
> **Env Vars:** plc (1), slc500 (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### LogixPro demo
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980&t=0)** - [Instructor] I regularly use LogixPro Simulation.
>
> **[0:04](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980&t=4)** This simulation software mimics Allen Bradley RSLogix500.
>
> **[0:10](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980&t=10)** This software uses a rack-based system and you can see the different files represented here.
>
> **[0:17](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980&t=17)** You can access the files by clicking on data table and you can see all the files over here.
>
> **[0:27](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980&t=27)** However, there are some limitations as you don't have access to the program files, which is fine for our demonstration.
>
> **[0:36](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980&t=36)** This simulation is used to show the behavior of the Ladder Logic Program and the configuration of the controller in the IO modules is done in the background.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), [[Simulation Software]] (1), data (1)
> **Speakers:** - [instructor] (1)

#### I/O address format for rack-based PLC
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=0)** - [Instructor] The I/O addresses for rack-based system are derived using the slot location of the input and output modules within the PLC rack.
>
> **[0:11](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=11)** The rack is the back plane where the controller in the other modules are placed.
>
> **[0:18](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=18)** The modules like input and output modules or the processor module can be plugged in in different locations on the rack or chasis.
>
> **[0:28](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=28)** A slot location is simply the physical location to insert a module on the rack.
>
> **[0:36](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=36)** In the example you see here, an I/O module is being inserted into slot location one.
>
> **[0:43](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=43)** Modules are counted starting from zero.
>
> **[0:47](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=47)** Usually the first module is the PLC controller in slot zero.
>
> **[0:52](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=52)** Then the input and output modules.
>
> **[0:55](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=55)** Here, the controller is in slot zero.
>
> **[0:59](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=59)** Input module is in slot one and output module is in slot two.
>
> **[1:06](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=66)** Keep in mind that there are different arrangements for placing the modules according to various designs.
>
> **[1:14](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=74)** So you might see them in different slots.
>
> **[1:17](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=77)** Here on the left-hand arrangement, the PLC input module is placed in slot one.
>
> **[1:24](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=84)** On the right hand arrangement, the PLC input module is placed in slot two.
>
> **[1:32](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=92)** This is the IO address format for rack-based system.
>
> **[1:37](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=97)** First we identify whether the data is an input or output.
>
> **[1:43](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=103)** I is used for inputs and O is used for outputs followed by the module slot number.
>
> **[1:52](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=112)** It depends on each rack design, but usually between slots zero and 30 and a forward slash then the terminal number or the bits number.
>
> **[2:05](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=125)** And again, this depends on the module design but usually there are up to 16 bits.
>
> **[2:13](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=133)** Here are two examples.
>
> **[2:15](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=135)** The first address is I 1/2 meaning it's an input in slot one bit number two.
>
> **[2:25](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=145)** The second address is O 2/4, meaning it's an output module in slot two bit number four.
>
> **[2:35](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=155)** The way to say it is, input one bit two, O bit two bit four.
>
> **[2:43](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=163)** The bit number comes from the module terminals.
>
> **[2:47](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=167)** It basically specifies where the device is connected.
>
> **[2:53](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=173)** For this module type you see here, it has 16 terminals, meaning 16 devices can be connected to any of the terminals within the module.
>
> **[3:05](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=185)** Here's an example of switches connected to an input module as you will see in this simulation software.
>
> **[3:13](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=193)** If we need to use the switch connected to terminal two, the address of this specific switch is input 1/2.
>
> **[3:24](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=204)** Here's another example of an address for an led connected to a terminal 11 on an output module.
>
> **[3:33](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=213)** The address is output 2/11.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** plc (4), data (1), [[Simulation Software]] (1)
> **Env Vars:** plc (4)
> **Tools:** terminal (3)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Data storage 16-bit words
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=0)** - [Narrator] Now let's talk about how the information or data are being stored inside each file.
>
> **[0:07](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=7)** PLCs work on binary numbers.
>
> **[0:10](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=10)** So in general, anything that gets stored inside the PLC memory is saved in binary format.
>
> **[0:19](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=19)** In a PLC, the memory locations are referred to as words.
>
> **[0:24](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=24)** Each word stores data in the form of binary digits or bits.
>
> **[0:31](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=31)** The number of bits that a word can store depends on the type of the PLC system being used.
>
> **[0:39](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=39)** Each digit of a binary number is known as a bit.
>
> **[0:44](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=44)** A bit is either a zero or one.
>
> **[0:48](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=48)** Eight bits are called a byte.
>
> **[0:51](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=51)** Two bytes or 16 bits form a word.
>
> **[0:56](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=56)** A double word is two 16 bit words or 32 bits.
>
> **[1:03](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=63)** PLC memory is organized using bytes, single words or double words.
>
> **[1:10](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=70)** Older PLCs use eight bit or 16 bits memory words.
>
> **[1:16](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=76)** While the newer systems such as ControlLogix controllers use 32 bit double words.
>
> **[1:25](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=85)** The size of the controller memory helps in estimating the amount of user program that can be stored.
>
> **[1:33](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=93)** A common memory size for a rock based system starts with one K word or one kilobytes.
>
> **[1:43](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=103)** It can store up to 1,024 words or 16,384 bits of information using 16 bit words
>
> **[1:56](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=116)** by multiplying 1,024 by 16 or using 32 bit words, it can store up to 32,768 bits of information by multiplying 1,024 by 32.
>
> **[2:17](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=137)** The one K word is the basic in the start of memory size for SLC controllers.
>
> **[2:25](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=145)** You see here that the size goes up in various depending on the controller model.
>
> **[2:31](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=151)** So the processor memory is specified by its size.
>
> **[2:36](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=156)** Meaning the number of words it can hold.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), plc (4), data (2)
> **Env Vars:** plc (4), slc (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)


### 3. Tag-Based System

[↑ Back to Table of Contents](#table-of-contents)

#### Tag-based system
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=0)** - [Instructor] Unlike the rack-based system that uses a fixed location and predefined data tables for each data type, the tag-based memory structure is a flexible memory structure, meaning that there are no fixed areas or predefined data tables in memory allocated for IO addresses or other types of data.
>
> **[0:26](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=26)** So for tent-based memory structures, you can use and assign any area within the memory and associate it with the type of data you want.
>
> **[0:37](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=37)** Now, having this flexibility allows you to arrange the memory to meet the needs of your application rather than requiring your application to fit a particular memory structure.
>
> **[0:51](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=51)** The internal memory configuration of the controller is done by the user when creating a project for that controller with RSLogicx5000 software.
>
> **[1:03](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=63)** A project is simply a term used to refer to a file that RSLogix5000 software uses to store the controller program data and configuration information.
>
> **[1:17](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=77)** It is a way to organize the data within the memory to grew them together in one place.
>
> **[1:24](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=84)** Here are some of the main components of the project file: tasks, programs, and routines.
>
> **[1:32](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=92)** Also, inside the project file is where you can find the data stored in the memory or design the memory locations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), application (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Project file components overview
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=0)** - [Instructor] Knowing the structure of the project file, helps in understanding the memory structure of the tag-based system.
>
> **[0:08](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=8)** Here is a block diagram of the controller project file.
>
> **[0:13](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=13)** The information inside the project is organized this way.
>
> **[0:18](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=18)** First, having IO data, control and system information together, and task that includes ladder logic programs, and all the associated data.
>
> **[0:31](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=31)** This is how the project looks inside this software.
>
> **[0:35](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=35)** The RSLogix5000, displays the project structure in a tree format.
>
> **[0:42](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=42)** A task is a collection of scheduled programs.
>
> **[0:46](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=46)** You see here, the name routine appears, are routine is another name for LATA logic program.
>
> **[0:54](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=54)** When a task is executed, the associated LATA logic program are executed as well.
>
> **[1:01](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=61)** One task can include multiple programs depending on the software version, in the controller model up to 100 programs can be scheduled within each task.
>
> **[1:13](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=73)** We group programs in a task to organize them and specify the order in which the programs execute.
>
> **[1:22](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=82)** So the programs will execute in the order listed below their associated task.
>
> **[1:28](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=88)** Here you can see in the RSLogix5000 software, that the main task has two programs.
>
> **[1:35](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=95)** In this case, program one executes first, program to execute second and so on.
>
> **[1:43](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=103)** Keep in mind that only one program executes at a time.
>
> **[1:49](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=109)** Within a project, we can also have up to 32 tasks.
>
> **[1:54](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=114)** The number of tasks depends on the specific controller used.
>
> **[1:59](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=119)** In the RSLogix5000 window, you can see that there is a main task that contains two programs, and a second one, under the name task two.
>
> **[2:11](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=131)** But for each process, a controller can hold and execute only one project file at a time, and one task at a time.
>
> **[2:21](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=141)** Programs that are not assigned to a task are called unscheduled.
>
> **[2:27](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=147)** Unscheduled programs are downloaded to the controller but do not execute.
>
> **[2:32](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=152)** These programs remain unscheduled until needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **Definitions:** is a  (3)
> **Env Vars:** lata (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Tags in PLC
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=0)** - [Narrator] The location of save data in memory is giving a name and it's called a tag.
>
> **[0:07](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=7)** A tag is a meaningful friendly name for a memory location, where data is stored.
>
> **[0:15](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=15)** So if we have a device, a sensor, for example and I want the sensor data to be saved in a specific memory location, I will give this location a tag by naming that memory location it makes it easier to find the required data to refer to it in the latter logic program or monitor the data if needed.
>
> **[0:39](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=39)** Tag names are usually chosen to be descriptive to the application and in general, there are not merely generic addresses.
>
> **[0:48](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=48)** So if we have a temperature sensor a tag name would be something like this, temp sensor.
>
> **[0:55](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=55)** This is also a great way for documenting the ladder logic program.
>
> **[1:00](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=60)** The tag serves two purposes.
>
> **[1:03](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=63)** It's represents the data and identifies where the data are stored in the memory.
>
> **[1:10](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=70)** The tag name points directly to a specific location in memory.
>
> **[1:16](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=76)** Another name for a tag is a variable name.
>
> **[1:19](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=79)** Both are used in documentation to refer to memory locations.
>
> **[1:25](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=85)** Assigning tags or variable names is done using the software RSlogix 5,000.
>
> **[1:33](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=93)** Tags are giving to field devices both inputs and outputs, internal relays and data values.
>
> **[1:43](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=103)** In RSLogix 5,000 software the tags are grouped together, either under controller tags or program tags.
>
> **[1:53](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=113)** On the right window you see the tag it is our inside RSLogix 5,000 showing the names of different tags.
>
> **[2:03](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=123)** So a tag is a text-based name for an area of the controller memory where data is stored.
>
> **[2:10](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=130)** As you create the tag the software automatically designates a place for it and as a programmer, in order to access the data you just need to use the appropriate tag name.
>
> **[2:24](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=144)** Like if I want to use this tart tag data in the Lauder logic program instruction I just need to use the tag name inside the ladder logic and the software internally knows where the location of that specific data is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), application (1), generic (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Tags types for ControlLogix controllers
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=0)** - ControlLogix controllers use 32 bits double where it's memory structure.
>
> **[0:07](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=7)** So the minimum memory allocation for a tag is four bytes or 32 bits of data.
>
> **[0:16](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=16)** Now, when you create a tag to store data that require less than four bytes, the controller creates four bytes tag but the data only fills the parts it needs.
>
> **[0:30](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=30)** The types of data that a tag can be are Boolean, Single Integer, Integer, Double Integer, and a Real Number.
>
> **[0:46](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=46)** Here's an overview of each data type and how many bits each data type uses.
>
> **[0:53](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=53)** This window shows how the tags look like inside the software.
>
> **[0:59](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=59)** A column for tag name and for data type.
>
> **[1:03](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=63)** For example, north tank mix is a Boolean type tag.
>
> **[1:10](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=70)** You can also see here, couple of different data types.
>
> **[1:14](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=74)** Like, counter, timer and tank.
>
> **[1:20](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=80)** They are part of structure tags.
>
> **[1:24](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=84)** Structure type tags are used for grouping different data types that function as a single unit and serve a specific purpose.
>
> **[1:34](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=94)** The first type is called predefined structure type tag.
>
> **[1:39](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=99)** Counter, and time or data types are example of commonly used predefined structure tags.
>
> **[1:47](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=107)** For example, this tag that is a time data type.
>
> **[1:52](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=112)** It includes all the data related to the timer instruction.
>
> **[1:57](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=117)** Like, three secs, accumulator, enable, done and timer timing values.
>
> **[2:07](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=127)** And each has its own data type.
>
> **[2:09](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=129)** For example, accumulator is a double integer.
>
> **[2:13](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=133)** Enable bit is a Boolean type.
>
> **[2:17](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=137)** So the timer data tag it groups them together and deals with them as one tag.
>
> **[2:24](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=144)** The second type is module-defined structure tags.
>
> **[2:28](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=148)** They're automatically created when I/O modules are configured in the software.
>
> **[2:35](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=155)** When you add input and output modules, a number of defined tags that are related to the input and output modules are added to the controller tags.
>
> **[2:46](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=166)** A third type is a user-defined structure tag.
>
> **[2:51](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=171)** A programmer can create custom defined structure tags to store and handle data as a group.
>
> **[2:58](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=178)** An example you see here is data type tank.
>
> **[3:04](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=184)** The name is recipe for the datatype named tank which is a user defined tag.
>
> **[3:12](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=192)** This is done to make it easier to access a group of tags that are used as one unit within the Ladder Logic program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16)
> **Definitions:** is a  (6), is called (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Speakers:** - controllogix (1)

#### Global and local tags
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=0)** - [Instructor] Now, when creating tags in the software, we need to specify their scope, meaning, where these tags can be used.
>
> **[0:10](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=10)** For each project file within RSLogix5000 Software, the tags are grouped together either under controller tags or program tags.
>
> **[0:23](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=23)** There are two scopes for tags, controller tags, or global tags and program tags or local tags.
>
> **[0:35](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=35)** Global tag data can be used in any program within the project file, while local tag data is restricted to one program.
>
> **[0:48](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=48)** Within a project file, the local tags can only be used for the ladder logic program they are designed to.
>
> **[0:57](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=57)** So the tags for Program A, for example, cannot be used by Program B and vice versa.
>
> **[1:04](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=64)** On the other hand, global tags are the tags that are available to all programs.
>
> **[1:13](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=73)** Global tags are also called controller tags because they are linked to the controller, the physical device, and hence the name.
>
> **[1:22](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=82)** Local tags are called program tags because they're are linked to their ladder logic program used within the project.
>
> **[1:32](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=92)** As for the tag names, here is an example that shows two programs, A and B, within a project.
>
> **[1:40](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=100)** Notice here, that each program has tags with identical names, Tag_1, Tag_2, and Tag_3.
>
> **[1:51](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=111)** They are used for different programs and since you cannot overlap between program tags, then the same name may appear.
>
> **[2:01](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=121)** This is not the case for global tags.
>
> **[2:05](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=125)** So avoid using the same name for both a controller tag and a local tag.
>
> **[2:12](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=132)** Within a ladder logic program, you cannot reference a controller tag if a local tag of the same name exists for that program.
>
> **[2:23](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=143)** And now this is what it means to select the scope of the tags, meaning where are the tags intended to be used?
>
> **[2:32](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=152)** Do you want them to be specific to one program or available to all?
>
> **[2:37](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=157)** And we refer to them as controller scoped tags or program scoped tags.
>
> **[2:45](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=165)** A scope refers to which programs have excess to a tag.
>
> **[2:51](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=171)** The scope of the tag must be specified when creating the tag in the software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **Definitions:** is an  (1), refers to (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Addressing format for tag-based systems
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=0)** - [Tutor] The address name for the tasks that are associated with the input or output modules is based on the location of the I/O module in the system.
>
> **[0:12](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=12)** The I/O address format for tag-based systems has the following parameters, location, slot, type, member and two optional parameters, sub member and bit.
>
> **[0:33](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=33)** The location means the network location.
>
> **[0:36](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=36)** If it says local, it means the module is on the same chassis or back plane as the controller.
>
> **[0:44](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=44)** Adapter name means a remote communication adapter or bridge module.
>
> **[0:51](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=51)** Slot is simply the slot number of the I/O module on the back plane.
>
> **[0:57](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=57)** Usually, slot zero is reserved for the controller, which is placed beside the power.
>
> **[1:06](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=66)** Type is identifying the type of data.
>
> **[1:09](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=69)** I for input, O for output, C for configuration and S for status.
>
> **[1:18](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=78)** Members specifying the type of data that the module can store.
>
> **[1:23](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=83)** Usually here we just write the word data.
>
> **[1:27](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=87)** This is optional.
>
> **[1:28](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=88)** Sometimes more specific information is needed here related to the previous parameter member and finally, bit parameter that specify terminals on a digital I/O module.
>
> **[1:44](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=104)** Here's an example of a tag address of evolve controls switch connected to input module in slot one.
>
> **[1:54](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=114)** The tag address is local one, input data one.
>
> **[2:00](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=120)** Local means the input module is on the same rack as the controller.
>
> **[2:06](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=126)** One indicates the module is in slot one on the rack.
>
> **[2:12](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=132)** I indicates the module is an input module.
>
> **[2:17](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=137)** Data one is data stored in bit one since the bit is shown here, it's means that it is a digital input module.
>
> **[2:27](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=147)** Another example is local two output data four meaning an output data tag on an output module that is in a slot two and using bit four.
>
> **[2:42](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=162)** The I/O address format is usually shown in the latter logic program below the name chosen for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), power (1), [[Microsoft Word|Word]] (1)
> **Definitions:** is an  (1), means that (1)
> **Speakers:** - [tutor] (1)

#### Base and Alias tags
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=0)** - [Instructor] Tags are also classified into four types: base tags, alias tags, produced and consumed tags.
>
> **[0:11](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=11)** Now let's look at the concept of base tags.
>
> **[0:15](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=15)** Whenever a device is added into one of the I/O modules, RSLogix 5000 automatically assigns a tag or an address to it.
>
> **[0:27](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=27)** The tag defines a memory location where data are stored.
>
> **[0:33](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=33)** You can see here examples of I/O tag addresses; Local:1 Input Data.1, Local:2 Output Data.4.
>
> **[0:44](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=44)** These tags that are created are called base tags.
>
> **[0:49](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=49)** A base tag is a tag that represents the location where the data is stored in memory.
>
> **[0:58](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=58)** By default, all tags created are base tags.
>
> **[1:03](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=63)** The tags that are associated with I/O modules or internal tags that are created by the user during programming.
>
> **[1:14](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=74)** Now, when we give a name for that base tag, this is called an alias tag.
>
> **[1:21](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=81)** An alias tag is simply another name for an already named memory location.
>
> **[1:27](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=87)** You can see here in this window three columns showing the name of the tag, the alias tag, and the base tag.
>
> **[1:38](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=98)** An alias tag shares the same data value as its base tag.
>
> **[1:44](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=104)** If the value of one of the tags changes, the other tag reflects the change as well.
>
> **[1:51](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=111)** They are linked together.
>
> **[1:54](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=114)** Now you might ask, what is the point of it?
>
> **[1:57](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=117)** Or what is the difference between them if they both share the same value?
>
> **[2:02](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=122)** The base tag is the original source of our data in memory.
>
> **[2:07](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=127)** An alias tag is simply another name for a base tag.
>
> **[2:14](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=134)** To understand the difference, let's look at it this way.
>
> **[2:17](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=137)** Base tag is the name assigned to you at birth.
>
> **[2:22](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=142)** Alias tag is another name given to you, like a nickname for example.
>
> **[2:27](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=147)** For the example you see on the screen, Local:1 Input Data.1 is a name that the software comes up with rather than requiring us to use the physical 32-bit memory address.
>
> **[2:43](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=163)** However, we want a name that makes more sense to us for our application.
>
> **[2:49](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=169)** So we give a name for that base tag.
>
> **[2:52](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=172)** The alias tag name here is Valve control switch.
>
> **[2:58](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=178)** An alias tag does not contain any data.
>
> **[3:01](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=181)** It's simply redirects the access to the tag that does contain the data.
>
> **[3:07](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=187)** A base tag has a memory location for the data, an alias tag does not.
>
> **[3:14](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=194)** Here you can see base tags and alias tags used in ladder logic programming.
>
> **[3:22](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=202)** Now for the last two types.
>
> **[3:24](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=204)** Produced tags and consumed tags are used to share tag information over a network between two or more devices.
>
> **[3:36](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=216)** A produced tag sends data, while a consumed tag receives data.
>
> **[3:43](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=223)** Produced tags are always controlled scoped tags.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), [[Programming]] (2), application (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=0)** - [Instructor] Thank you for taking the time to join me in this course.
>
> **[0:04](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=4)** This course covers the theory part for Allen Bradley PLC member structure.
>
> **[0:11](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=11)** If you'd like to learn more about PLC Ladder Logic Programming, I recommend checking out the learning path; Become a PLC Developer.
>
> **[0:22](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=22)** The learning path covers Ladder Logic Programming starting with the basics to some advanced instructions.
>
> **[0:31](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=31)** If you're interested in understanding more about PLCs and how they fit within the field of industrial automation, check out the course; Learn Industrial Automation.
>
> **[0:42](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=42)** That goes through each level of the automation field, and I always suggest and encourage you to dive into the documentation for each manufacturer of the specific PLC device you're currently working with.
>
> **[0:58](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=58)** I hope this course gave you an opportunity to learn more about the world of PLC Ladder Logic Programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** plc (5), [[Programming]] (3), [[Automation]] (3)
> **Env Vars:** plc (5)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Zahraa Khalil]]

## Skills Covered

- Programmable Logic Controller (PLC)

## Path Context

### In [[Become a PLC Developer]]
← [[Learning PLC Ladder Logic- 2 Diving Deeper]] | **4 of 7** | [[PLC Sequencer Logic]] →

## Appears In

- [[Become a PLC Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning PLC Ladder Logic- 2 Diving Deeper]] — Programmable Logic Controller (PLC)

---

[↑ Back to top](#)