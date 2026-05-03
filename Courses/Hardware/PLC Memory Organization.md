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
created: 2026-05-03
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

#### [Memory organization for PLCs](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/memory-organization-for-plcs?u=76281980&t=0)** - [Zahraa] At some point, we might have heard that organizing and knowing where you placed an item helps in finding it when needed, or not. But when it comes to [[PLC Programming]], understanding the memory structure will help in knowing where to find, refer, and assign data to use them in the ladder logic program. In this [[LinkedIn]] Learner course, I'll explain to you memory structures that Allen Bradley controllers use, rack-based systems, and tag-based systems. I'll explore each system separately by explaining the structure of each memory type and its associated components. I am Zahraa Khalil. I am an engineering instructor, and I love teaching students just like you. Join me in my LinkedIn Learner course and explore the world of [[PLC Ladder Logic]] programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[PLC Programming]] (1), [[PLC Ladder Logic]] (1)
> **Env Vars:** plc (2)
> **CLI Commands:** find (1)
> **Analogies:** just like (1)
> **Speakers:** - [zahraa] (1)

#### [What you should know before watching](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/what-you-should-know-before-watching?u=76281980&t=0)** - [Instructor] Before you start this course, you should be familiar with how ladder logic programming works, knowing the basic operation and basic instructions. This course covers the theory part for Allen Bradley [[PLC]] memory structure. Although no programming is covered in this course, but understanding the memory structure helps in programming, as you will be able to know where to find, refer, and assign data to use in the ladder logic program. This course is designed as a continuation of the learning path. Become a PLC developer. If you need a refresher on the basics of programming ladder logic, I recommend that you check this course. "Learning [[PLC Ladder Logic]]."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[PLC Ladder Logic]] (1)
> **Env Vars:** plc (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [LogixPro PLC software simulation](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/logixpro-plc-software-simulation?u=76281980&t=0)** - [Instructor] For this course, I'll be using LogixPro [[PLC]] simulator from LearningPit. This [[Simulation Software]] mimics Allen Bradley RSLogix 500. Please refer to this video, "LogixPro PLC Simulation Software," where I go through the software and how to download it. The simulation software is only used for demo. The course does not teach the software, as you can apply the knowledge to any PLC software that uses ladder logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (3), [[Simulation Software]] (3)
> **Env Vars:** plc (3)
> **Speakers:** - [instructor] (1)


### 1. Processor Memory Organization

[↑ Back to Table of Contents](#table-of-contents)

#### [Allen-Bradley PLCs types](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=0)** - [Narrator] There are different types of [[PLC]] controllers on the market from various manufacturers. Here are a couple of examples of the ones by Allen Bradley from Rockwell Automation. In general while the fundamental concepts of [[PLC Programming]] are common to all manufacturers there are differences between them. For example, the controller size, memory organization, I/O addressing, instruction set and the applications that are used for which means that PLC programs are never perfectly interchangeable among the various models of PLCs. The two PLCs you see here are from Allen Bradley and Siemens and sometimes even within the same product line of a single manufacturer different models may not even be compatible. As for example Allen Bradley ControlLogix and MicroLogix. Allen Bradley controllers are generally classified into three categories depending on the controller group type and its associated software. The controller category is organized by the size of the controller and its application. The software comes in two types. RSLogix 500 and RSLogix 5,000.
>
> **[1:37](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-types?u=76281980&t=97)** The first group is MicroLogix controllers. There are relatively small controllers used for low cost stand alone machines for small control systems. MicroLogix controllers use RSLogix 500 software. The second group is CompactLogix and SLC 500 controllers they are still considered small controllers used for medium sized applications and processes but they have more advanced capabilities to be used in manufacturing. CompactLogix controllers use RSLogix 5,000 software and SLC controllers use RSLogix 500 software. The third group is ControlLogix controllers. They are used for large control systems. In general they provide faster system performance for large processes compared to the other two controller groups. ControlLogix controllers use RSLogix 5,000 software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[PLC Programming]] (1)
> **Env Vars:** plc (3), slc (2)
> **Analogies:** for example (2)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Allen-Bradley PLCs memory structures](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/allen-bradley-plcs-memory-structures?u=76281980&t=0)** - [Instructor] The different types of Allen Bradley controllers deal with data in terms of storing and retrieving them according to the memory structure of the controller. Allen Bradley controllers have two different memory structures; rack-based system and tag-based systems. MicroLogix controllers and SLC 500 series of controllers use a rack-based fixed memory structure. CompactLogix controllers use a tag-based system that has a flexible memory structure. Finally, ControlLogics series of controllers also use a tag-based memory structure for assigning and referring to memory locations. Understanding the different memory structures helps in the programming process as we need to know where the data are stored and how to assign and refer to memory locations in order to use them in the Ladder Logic Programming.

> [!info]- Semantic Content
>
> **Env Vars:** slc (1)
> **Speakers:** - [instructor] (1)


### 2. Rack-Based System

[↑ Back to Table of Contents](#table-of-contents)

#### [Rack-based systems](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=0)** - [Instructor] MicroLogix and SLC 500 controllers use a rack-based fixed-memory structure. As the name indicates, the memory locations are fixed. The memory space for rack-based system is divided into two broad categories; program files and data files. In RSLogix500 software, the data are saved in the highlighted area. The common memory structure for this type of system is a two-drawer filing cabinet. One drawer for program files and the second drawer for data files. The data and program file groups are also subdivided. So think about it like each drawer has certain number of files inside and the location is fixed for each file. The order matters as well. Program files, in general, contain controller information, main ladder logic program, interrupt subroutines, and all subroutine programs. In RSLogix500, there are up to 256 program files divided like this. System files and program files. The second category is data files. This is the area of the processor memory where input and output status are stored,
>
> **[1:36](https://www.linkedin.com/learning/plc-memory-organization/rack-based-systems?u=76281980&t=96)** processor status and the status of various bits and numerical data, and the same number of files, 256, are included in the data file section. They're also subdivided into instruction-specific files and file types. For example, timer and counter instruction and input and output status. So for all the controller types that use a rack-based system and use RSLogix500, these memory files will be exactly the same. The memory locations for program files in data files are fixed.

> [!info]- Semantic Content
>
> **Env Vars:** slc (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Program files](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=0)** - [Instructor] Program files are the part of the processor memory that store the user ladder logic program. In RSLogix500, the name of the ladder logic program appears under the program file section. Inside the program files, there are two program file types; system and program. In much of the documentation, they are represented as file folders. For the system files, they are subdivided into system functions; files zero and one. The program files include file two that has the main ladder logic program and separate team programs included in file three through file 255. System file zero. This file is always included and contains various system related and user programs information such as processor type, input and output modules configuration, processor file name, and password, if needed. System file one is reserved by the processor and not accessible to the user. File two is the default location for the main ladder logic program. It contains the logic and the instructions that define how the controller operates.
>
> **[1:36](https://www.linkedin.com/learning/plc-memory-organization/program-files?u=76281980&t=96)** This file is always included because as soon as you start a new program inside the software, you will have at least one ladder logic program in it. And program files from file three to file 255 are user created files that are available for separate teams.

> [!info]- Semantic Content
>
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data files: Part 1](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=0)** - [Instructor] Data files store the information needed to carry out the user program, like the status of inputs and outputs, the processor status, and the status of various bits and numerical data. Status is the on and off type of information represented by one and zero. The files are organized by the type of data they contain. Files number zero through eight are specified data files, and files number nine through 255 are user defined data files. In RSLogix500, the files are placed under the data file section with the same order. Output file zero, this file stores the status of the output module terminals. You see here the output module is placed in slot number three, but the data inside the memory are stored in file zero. As the memory location is fixed, input file one, this file stores the status of the input terminals for the controller. In the example here, the input module is in slot one. Status file two, this file stores controller operation information and sometimes it is used for troubleshooting. Bit file three, this file consists of binary digits
>
> **[1:39](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-1?u=76281980&t=99)** and often referred to as Boolean type. It is used to store internal bits. Internal bits can be values for internal outputs, internal coils, internal control relays, or simply, we refer to them as internal bits. You see here the internal bits in the binary table inside file three and you can select any bit to use it in your program. An example is [[Microsoft Word|word]] four, bit nine, and it's used as an output internal bit. Internal means the bit is not connected to any physical device. It is used in situation in programming where an output is required, but a physical device is not needed. The internal output operates just like any output that is controlled by ladder logic program, but it's used strictly for internal purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Data files: Part 2](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=0)** - [Instructor] Timer file four. This file stores the data for each timer instruction used in the latter logic program. Counter file five. This file stores the data for each counter instruction used in the latter logic program. Control file six. This file stores the data for specific instructions such as shift registers and sequencers. Integer file seven. This file is used to store whole number values or bit information. Let's say, for example, we want to store temperature and pressure values or mathematical operation constants. File eight. The floating-point file is used to store fractional numerical data. This comes in handy when dealing with math operations. This file applies to selected [[PLC]] processor types. Now files from nine up to 255 are called user-defined files and are used to create any file type from zero through eight. They are used to expand the number of data files available to the programmer if needed. So this is generally what the memory structure of a rack-based systems looks like. Having both files categories with their subdivision files,
>
> **[1:39](https://www.linkedin.com/learning/plc-memory-organization/data-files-part-2?u=76281980&t=99)** and in RSLogix500, they are shown in this area. If you would like to learn more, I recommend checking out the user manual of your desired controller. Here's an example of the user manual for SLC500 Controller by Ellen Bradley.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (1)
> **Env Vars:** plc (1), slc500 (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [LogixPro demo](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/logixpro-demo?u=76281980&t=0)** - [Instructor] I regularly use LogixPro [[Simulation]]. This [[Simulation Software]] mimics Allen Bradley RSLogix500. This software uses a rack-based system and you can see the different files represented here. You can access the files by clicking on data table and you can see all the files over here. However, there are some limitations as you don't have access to the program files, which is fine for our demonstration. This simulation is used to show the behavior of the Ladder Logic Program and the configuration of the controller in the IO modules is done in the background.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), [[Simulation Software]] (1)
> **Speakers:** - [instructor] (1)

#### [I/O address format for rack-based PLC](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=0)** - [Instructor] The I/O addresses for rack-based system are derived using the slot location of the input and output modules within the [[PLC]] rack. The rack is the back plane where the controller in the other modules are placed. The modules like input and output modules or the processor module can be plugged in in different locations on the rack or chasis. A slot location is simply the physical location to insert a module on the rack. In the example you see here, an I/O module is being inserted into slot location one. Modules are counted starting from zero. Usually the first module is the PLC controller in slot zero. Then the input and output modules. Here, the controller is in slot zero. Input module is in slot one and output module is in slot two. Keep in mind that there are different arrangements for placing the modules according to various designs. So you might see them in different slots. Here on the left-hand arrangement, the PLC input module is placed in slot one. On the right hand arrangement, the PLC input module is placed in slot two. This is the IO address format for rack-based system.
>
> **[1:37](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=97)** First we identify whether the data is an input or output. I is used for inputs and O is used for outputs followed by the module slot number. It depends on each rack design, but usually between slots zero and 30 and a forward slash then the terminal number or the bits number. And again, this depends on the module design but usually there are up to 16 bits. Here are two examples. The first address is I 1/2 meaning it's an input in slot one bit number two. The second address is O 2/4, meaning it's an output module in slot two bit number four. The way to say it is, input one bit two, O bit two bit four. The bit number comes from the module terminals. It basically specifies where the device is connected. For this module type you see here, it has 16 terminals, meaning 16 devices can be connected to any of the terminals within the module. Here's an example of switches connected to an input module as you will see in this [[Simulation Software]].
>
> **[3:13](https://www.linkedin.com/learning/plc-memory-organization/i-o-address-format-for-rack-based-plc?u=76281980&t=193)** If we need to use the switch connected to terminal two, the address of this specific switch is input 1/2. Here's another example of an address for an led connected to a terminal 11 on an output module. The address is output 2/11.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (4), [[Simulation Software]] (1)
> **Env Vars:** plc (4)
> **Tools:** terminal (3)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Data storage 16-bit words](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=0)** - [Narrator] Now let's talk about how the information or data are being stored inside each file. PLCs work on binary numbers. So in general, anything that gets stored inside the [[PLC]] memory is saved in binary format. In a PLC, the memory locations are referred to as words. Each [[Microsoft Word|word]] stores data in the form of binary digits or bits. The number of bits that a word can store depends on the type of the PLC system being used. Each digit of a binary number is known as a bit. A bit is either a zero or one. Eight bits are called a byte. Two bytes or 16 bits form a word. A double word is two 16 bit words or 32 bits. PLC memory is organized using bytes, single words or double words. Older PLCs use eight bit or 16 bits memory words. While the newer systems such as ControlLogix controllers use 32 bit double words. The size of the controller memory helps in estimating the amount of user program that can be stored. A common memory size for a rock based system starts
>
> **[1:38](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=98)** with one K word or one kilobytes. It can store up to 1,024 words or 16,384 bits of information using 16 bit words
>
> **[1:56](https://www.linkedin.com/learning/plc-memory-organization/data-storage-16-bit-words?u=76281980&t=116)** by multiplying 1,024 by 16 or using 32 bit words, it can store up to 32,768 bits of information by multiplying 1,024 by 32. The one K word is the basic in the start of memory size for SLC controllers. You see here that the size goes up in various depending on the controller model. So the processor memory is specified by its size. Meaning the number of words it can hold.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[PLC]] (4)
> **Env Vars:** plc (4), slc (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)


### 3. Tag-Based System

[↑ Back to Table of Contents](#table-of-contents)

#### [Tag-based system](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=0)** - [Instructor] Unlike the rack-based system that uses a fixed location and predefined data tables for each data type, the tag-based memory structure is a flexible memory structure, meaning that there are no fixed areas or predefined data tables in memory allocated for IO addresses or other types of data. So for tent-based memory structures, you can use and assign any area within the memory and associate it with the type of data you want. Now, having this flexibility allows you to arrange the memory to meet the needs of your application rather than requiring your application to fit a particular memory structure. The internal memory configuration of the controller is done by the user when creating a project for that controller with RSLogicx5000 software. A project is simply a term used to refer to a file that RSLogix5000 software uses to store the controller program data and configuration information. It is a way to organize the data within the memory to grew them together in one place. Here are some of the main components of the project file: tasks, programs, and routines. Also, inside the project file is where you can find
>
> **[1:36](https://www.linkedin.com/learning/plc-memory-organization/tag-based-system?u=76281980&t=96)** the data stored in the memory or design the memory locations.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Project file components overview](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=0)** - [Instructor] Knowing the structure of the project file, helps in understanding the memory structure of the tag-based system. Here is a block diagram of the controller project file. The information inside the project is organized this way. First, having IO data, control and system information together, and task that includes ladder logic programs, and all the associated data. This is how the project looks inside this software. The RSLogix5000, displays the project structure in a tree format. A task is a collection of scheduled programs. You see here, the name routine appears, are routine is another name for LATA logic program. When a task is executed, the associated LATA logic program are executed as well. One task can include multiple programs depending on the software version, in the controller model up to 100 programs can be scheduled within each task. We group programs in a task to organize them and specify the order in which the programs execute. So the programs will execute in the order listed below their associated task. Here you can see in the RSLogix5000 software, that the main task has two programs.
>
> **[1:35](https://www.linkedin.com/learning/plc-memory-organization/project-file-components-overview?u=76281980&t=95)** In this case, program one executes first, program to execute second and so on. Keep in mind that only one program executes at a time. Within a project, we can also have up to 32 tasks. The number of tasks depends on the specific controller used. In the RSLogix5000 window, you can see that there is a main task that contains two programs, and a second one, under the name task two. But for each process, a controller can hold and execute only one project file at a time, and one task at a time. Programs that are not assigned to a task are called unscheduled. Unscheduled programs are downloaded to the controller but do not execute. These programs remain unscheduled until needed.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Env Vars:** lata (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Tags in PLC](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=0)** - [Narrator] The location of save data in memory is giving a name and it's called a tag. A tag is a meaningful friendly name for a memory location, where data is stored. So if we have a device, a sensor, for example and I want the sensor data to be saved in a specific memory location, I will give this location a tag by naming that memory location it makes it easier to find the required data to refer to it in the latter logic program or monitor the data if needed. Tag names are usually chosen to be descriptive to the application and in general, there are not merely generic addresses. So if we have a temperature sensor a tag name would be something like this, temp sensor. This is also a great way for documenting the ladder logic program. The tag serves two purposes. It's represents the data and identifies where the data are stored in the memory. The tag name points directly to a specific location in memory. Another name for a tag is a variable name. Both are used in documentation to refer to memory locations. Assigning tags or variable names is done using the software RSlogix 5,000. Tags are giving to field devices
>
> **[1:35](https://www.linkedin.com/learning/plc-memory-organization/tags-in-plc?u=76281980&t=95)** both inputs and outputs, internal relays and data values. In RSLogix 5,000 software the tags are grouped together, either under controller tags or program tags. On the right window you see the tag it is our inside RSLogix 5,000 showing the names of different tags. So a tag is a text-based name for an area of the controller memory where data is stored. As you create the tag the software automatically designates a place for it and as a programmer, in order to access the data you just need to use the appropriate tag name. Like if I want to use this tart tag data in the Lauder logic program instruction I just need to use the tag name inside the ladder logic and the software internally knows where the location of that specific data is.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Tags types for ControlLogix controllers](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=0)** - ControlLogix controllers use 32 bits double where it's memory structure. So the minimum memory allocation for a tag is four bytes or 32 bits of data. Now, when you create a tag to store data that require less than four bytes, the controller creates four bytes tag but the data only fills the parts it needs. The types of data that a tag can be are Boolean, Single Integer, Integer, Double Integer, and a Real Number.
>
> **[0:46](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=46)** Here's an overview of each data type and how many bits each data type uses. This window shows how the tags look like inside the software. A column for tag name and for data type. For example, north tank mix is a Boolean type tag. You can also see here, couple of different data types. Like, counter, timer and tank. They are part of structure tags. Structure type tags are used for grouping different data types that function as a single unit and serve a specific purpose. The first type is called predefined structure type tag. Counter, and time or data types are example of commonly used predefined structure tags. For example, this tag that is a time data type. It includes all the data related to the timer instruction. Like, three secs, accumulator, enable, done and timer timing values. And each has its own data type. For example, accumulator is a double integer. Enable bit is a Boolean type. So the timer data tag it groups them together
>
> **[2:20](https://www.linkedin.com/learning/plc-memory-organization/tags-types-for-controllogix-controllers?u=76281980&t=140)** and deals with them as one tag. The second type is module-defined structure tags. They're automatically created when I/O modules are configured in the software. When you add input and output modules, a number of defined tags that are related to the input and output modules are added to the controller tags. A third type is a user-defined structure tag. A programmer can create custom defined structure tags to store and handle data as a group. An example you see here is data type tank. The name is recipe for the datatype named tank which is a user defined tag. This is done to make it easier to access a group of tags that are used as one unit within the Ladder Logic program.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), is called (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Speakers:** - controllogix (1)

#### [Global and local tags](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=0)** - [Instructor] Now, when creating tags in the software, we need to specify their scope, meaning, where these tags can be used. For each project file within RSLogix5000 Software, the tags are grouped together either under controller tags or program tags. There are two scopes for tags, controller tags, or global tags and program tags or local tags. Global tag data can be used in any program within the project file, while local tag data is restricted to one program. Within a project file, the local tags can only be used for the ladder logic program they are designed to. So the tags for Program A, for example, cannot be used by Program B and vice versa. On the other hand, global tags are the tags that are available to all programs. Global tags are also called controller tags because they are linked to the controller, the physical device, and hence the name. Local tags are called program tags because they're are linked to their ladder logic program used within the project. As for the tag names, here is an example
>
> **[1:35](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=95)** that shows two programs, A and B, within a project. Notice here, that each program has tags with identical names, Tag_1, Tag_2, and Tag_3.
>
> **[1:51](https://www.linkedin.com/learning/plc-memory-organization/global-and-local-tags?u=76281980&t=111)** They are used for different programs and since you cannot overlap between program tags, then the same name may appear. This is not the case for global tags. So avoid using the same name for both a controller tag and a local tag. Within a ladder logic program, you cannot reference a controller tag if a local tag of the same name exists for that program. And now this is what it means to select the scope of the tags, meaning where are the tags intended to be used? Do you want them to be specific to one program or available to all? And we refer to them as controller scoped tags or program scoped tags. A scope refers to which programs have excess to a tag. The scope of the tag must be specified when creating the tag in the software.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), refers to (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Addressing format for tag-based systems](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=0)** - [Tutor] The address name for the tasks that are associated with the input or output modules is based on the location of the I/O module in the system. The I/O address format for tag-based systems has the following parameters, location, slot, type, member and two optional parameters, sub member and bit. The location means the network location. If it says local, it means the module is on the same chassis or back plane as the controller. Adapter name means a remote communication adapter or bridge module. Slot is simply the slot number of the I/O module on the back plane. Usually, slot zero is reserved for the controller, which is placed beside the power. Type is identifying the type of data. I for input, O for output, C for configuration and S for status. Members specifying the type of data that the module can store. Usually here we just write the [[Microsoft Word|word]] data. This is optional. Sometimes more specific information is needed here related
>
> **[1:33](https://www.linkedin.com/learning/plc-memory-organization/addressing-format-for-tag-based-systems?u=76281980&t=93)** to the previous parameter member and finally, bit parameter that specify terminals on a digital I/O module. Here's an example of a tag address of evolve controls switch connected to input module in slot one. The tag address is local one, input data one. Local means the input module is on the same rack as the controller. One indicates the module is in slot one on the rack. I indicates the module is an input module. Data one is data stored in bit one since the bit is shown here, it's means that it is a digital input module. Another example is local two output data four meaning an output data tag on an output module that is in a slot two and using bit four. The I/O address format is usually shown in the latter logic program below the name chosen for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** is an  (1), means that (1)
> **Speakers:** - [tutor] (1)

#### [Base and Alias tags](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=0)** - [Instructor] Tags are also classified into four types: base tags, alias tags, produced and consumed tags. Now let's look at the concept of base tags. Whenever a device is added into one of the I/O modules, RSLogix 5000 automatically assigns a tag or an address to it. The tag defines a memory location where data are stored. You can see here examples of I/O tag addresses; Local:1 Input Data.1, Local:2 Output Data.4. These tags that are created are called base tags. A base tag is a tag that represents the location where the data is stored in memory. By default, all tags created are base tags. The tags that are associated with I/O modules or internal tags that are created by the user during programming. Now, when we give a name for that base tag, this is called an alias tag. An alias tag is simply another name for an already named memory location. You can see here in this window three columns showing the name of the tag, the alias tag, and the base tag.
>
> **[1:38](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=98)** An alias tag shares the same data value as its base tag. If the value of one of the tags changes, the other tag reflects the change as well. They are linked together. Now you might ask, what is the point of it? Or what is the difference between them if they both share the same value? The base tag is the original source of our data in memory. An alias tag is simply another name for a base tag. To understand the difference, let's look at it this way. Base tag is the name assigned to you at birth. Alias tag is another name given to you, like a nickname for example. For the example you see on the screen, Local:1 Input Data.1 is a name that the software comes up with rather than requiring us to use the physical 32-bit memory address. However, we want a name that makes more sense to us for our application. So we give a name for that base tag. The alias tag name here is Valve control switch. An alias tag does not contain any data. It's simply redirects the access to the tag that does contain the data. A base tag has a memory location for the data, an alias tag does not.
>
> **[3:14](https://www.linkedin.com/learning/plc-memory-organization/base-and-alias-tags?u=76281980&t=194)** Here you can see base tags and alias tags used in ladder logic programming. Now for the last two types. Produced tags and consumed tags are used to share tag information over a network between two or more devices. A produced tag sends data, while a consumed tag receives data. Produced tags are always controlled scoped tags.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/plc-memory-organization/next-steps?u=76281980&t=0)** - [Instructor] Thank you for taking the time to join me in this course. This course covers the theory part for Allen Bradley [[PLC]] member structure. If you'd like to learn more about [[PLC Ladder Logic]] Programming, I recommend checking out the learning path; Become a PLC Developer. The learning path covers Ladder Logic Programming starting with the basics to some advanced instructions. If you're interested in understanding more about PLCs and how they fit within the field of industrial automation, check out the course; Learn Industrial Automation. That goes through each level of the automation field, and I always suggest and encourage you to dive into the documentation for each manufacturer of the specific PLC device you're currently working with. I hope this course gave you an opportunity to learn more about the world of PLC Ladder Logic Programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (3), [[PLC Ladder Logic]] (2)
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