---
type: course
cssclasses:
  - lle-course
slug: learning-industrial-automation
url: "https://www.linkedin.com/learning/learning-industrial-automation"
duration_minutes: 41
duration: 41m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH7-WAsAUGMQw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638212551748?e=2147483647&amp;v=beta&amp;t=lfwpoXtom98EyFjnoLmTNZE6xfInlHjyPL138d4SA90"
linkedin_topic: Hardware
learning_paths:
  - '[[CSCMP Supply Chain Foundations- Manufacturing and Service Operations Professional Certificate]]'
  - '[[Become a PLC Developer]]'
prev_courses:
  - '[[Lean Six Sigma Foundations]]'
  - null
next_courses:
  - '[[Excel- Value Stream Mapping]]'
  - '[[Learning PLC Ladder Logic- 1 The Basics]]'
path_nav: '[{"path":"CSCMP Supply Chain Foundations- Manufacturing and Service Operations Professional Certificate","position":3,"total":4,"prev":"Lean Six Sigma Foundations","next":"Excel- Value Stream Mapping"},{"path":"Become a PLC Developer","position":1,"total":7,"prev":null,"next":"Learning PLC Ladder Logic- 1 The Basics"}]'
path_count: 2
tags:
  - course
  - topic/hardware
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Learning%20Industrial%20Automation.md)

![Learning Industrial Automation](https://media.licdn.com/dms/image/v2/C4E0DAQH7-WAsAUGMQw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638212551748?e=2147483647&amp;v=beta&amp;t=lfwpoXtom98EyFjnoLmTNZE6xfInlHjyPL138d4SA90)

# Learning Industrial Automation

> Industrial automation is the use of computers and robots to control industrial processes, like manufacturing, without significant human intervention. Used correctly, automation can increase the quality, safety, and accuracy of these processes. It's the job of the people in industrial automation to design the systems, configure the controllers, and monitor the processes. This course provides an ove

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-industrial-automation) | 41m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction to industrial automation](#introduction-to-industrial-automation)
  - [What you should know](#what-you-should-know)
- [**1. Industrial Automation**](#1-industrial-automation) (6 videos)
  - [Basics of industrial automation](#basics-of-industrial-automation)
  - [Field level](#field-level)
  - [Communication level 1: EtherNET](#communication-level-1-ethernet)
  - [Communication level 2: ControlNET](#communication-level-2-controlnet)
  - [Communication level 3: Device](#communication-level-3-device)
  - [Control (PLC and DCS) and management level](#control-plc-and-dcs-and-management-level)
- [**2. Programmable Logic Controller**](#2-programmable-logic-controller) (8 videos)
  - [Programmable logic controller (PLC) overview](#programmable-logic-controller-plc-overview)
  - [Main components](#main-components)
  - [Programmable logic controller programming languages](#programmable-logic-controller-programming-languages)
  - [Programmable logic controller programming: Block diagram](#programmable-logic-controller-programming-block-diagram)
  - [Programmable logic controller programming: Ladder logic](#programmable-logic-controller-programming-ladder-logic)
  - [Human-machine interface (HMI)](#human-machine-interface-hmi)
  - [Open Platform Communications (OPC)](#open-platform-communications-opc)
  - [Open Platform Communications (OPC) software](#open-platform-communications-opc-software)
- [**3. Supervisory Control and Data Acquisition**](#3-supervisory-control-and-data-acquisition) (3 videos)
  - [Supervisory Control and Data Acquisition (SCADA) defined](#supervisory-control-and-data-acquisition-scada-defined)
  - [Components, layout, and design](#components-layout-and-design)
  - [SCADA functions and usage](#scada-functions-and-usage)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to industrial automation](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980&t=0)** - Have you ever wondered while you sip a cup of coffee how the coffee you drink is produced and packaged?
>
> **[0:07](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980&t=7)** Well, this is done as a part of a process in industrial automation.
>
> **[0:11](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980&t=11)** Industrial automation is a fundamental aspect of modern manufacturing, transforming the way [[Microsoft Products|products]] are manufactured, packaged, and delivered.
>
> **[0:21](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980&t=21)** We will also examine the different types of industrial controllers and give you an introduction to [[SCADA]] system.
>
> **[0:29](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980&t=29)** I'm Zara Khalil.
>
> **[0:30](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980&t=30)** I am an engineering instructor, and I'm passionate about teaching courses, covering topics on industrial automation, and [[PLC Ladder Logic]] programming.
>
> **[0:40](https://www.linkedin.com/learning/learning-industrial-automation/introduction-to-industrial-automation?u=76281980&t=40)** So, folks, let's get started and explore this field together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[SCADA]] (1), [[PLC Ladder Logic]] (1)
> **Env Vars:** scada (1), plc (1)
> **Definitions:** is a  (1)
> **Speakers:** - have (1)

#### [What you should know](https://www.linkedin.com/learning/learning-industrial-automation/what-you-should-know-14447222?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/what-you-should-know-14447222?u=76281980&t=0)** - [Instructor] This course is to introduce you to the area of industrial automation.
>
> **[0:04](https://www.linkedin.com/learning/learning-industrial-automation/what-you-should-know-14447222?u=76281980&t=4)** If you have ever wondered how manufacturing automate their processes or how the robots in industrial automations are programmed, or simply want to gain the knowledge by knowing the terminology and the different areas within industrial automation, this course is for you.
>
> **[0:20](https://www.linkedin.com/learning/learning-industrial-automation/what-you-should-know-14447222?u=76281980&t=20)** No previous knowledge is required, as I will take you through the concepts and you'll be learning about what industrial automation is, the different levels and components within industrial automation, the programming languages used, and we'll be focusing on the common languages, ladder logic and a block diagram.
>
> **[0:38](https://www.linkedin.com/learning/learning-industrial-automation/what-you-should-know-14447222?u=76281980&t=38)** And finally, introducing the [[OPC]] and [[SCADA]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OPC]] (1), [[SCADA]] (1)
> **Env Vars:** opc (1), scada (1)
> **Speakers:** - [instructor] (1)


### 1. Industrial Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Basics of industrial automation](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=0)** - [Instructor] Industrial automation simply means that a placement with computers, robots, and machines do that of human thinking.
>
> **[0:07](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=7)** In another words, they simply do the work instead of humans, and operators with an industrial settings.
>
> **[0:15](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=15)** So the definition of an industrial automation is the use of set of technologies, and automatic control devices for control systems, such as computers and robots.
>
> **[0:26](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=26)** These devices are used for handling different operations, and control of industrial processes without significant human intervention.
>
> **[0:36](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=36)** The [[Microsoft Word|word]] automation means to act of oneself or to act and advisedly.
>
> **[0:42](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=42)** And it's derived from a Greek word auto, which means self and word matters, which means moving.
>
> **[0:49](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=49)** Automation therefore is the mechanism for system that moves by itself.
>
> **[0:55](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=55)** So automation industry replaces the human involvement with the use of logic programming commands and powerful machines to achieve the desired tasks.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=65)** Industrial automation components include controllers, including different types like programmable logic controllers, [[PLC]], [[DCS|distributed control system]], [[DCS]], field industrial devices, industrial communication and networking, [[HMI|human machine interface]], [[HMI]], supervisor control and [[Data Acquisition]], [[SCADA]], and personal computers.
>
> **[1:31](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=91)** Industrial automation system can be very complex in nature, having large number of devices working in synchronization with automation technology.
>
> **[1:39](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=99)** However to simplify the concept, there are three main level within the automation system, field level, control level, management and information level.
>
> **[1:49](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=109)** Field level are the devices used within the field.
>
> **[1:53](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=113)** Control level is the different type of controller used.
>
> **[1:57](https://www.linkedin.com/learning/learning-industrial-automation/basics-of-industrial-automation-14444217?u=76281980&t=117)** Management and information level is the upper level where the logic and design is done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[PLC]] (1), [[DCS|Distributed control system]] (1), [[DCS]] (1), [[HMI|Human machine interface]] (1)
> **Env Vars:** plc (1), dcs (1), hmi (1), scada (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Field level](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=0)** - [Instructor] Industry is now using computers to control and monitor the sequence of machines.
>
> **[0:05](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=5)** Any controller cannot hear, see, and monitor processes by themselves as operators do.
>
> **[0:12](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=12)** So industrial control systems use industrial sensors to help the controller perform their tasks and capabilities.
>
> **[0:20](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=20)** Sensors within industrial field level check whether parts are present, size of the part, color of the part, and whether or not the product is full or empty, good or bad.
>
> **[0:31](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=31)** Sensors also used to ensure safety of the equipment, [[Microsoft Products|products]], and operators.
>
> **[0:38](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=38)** A common classifications of sensors is contact and non-contact.
>
> **[0:43](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=43)** One of the simple ways to identify it is if the sensor must contact the part to sense it, the sensor is classified as a contact sensor.
>
> **[0:52](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=52)** Non-contact sensors can detect the part without touching it physically.
>
> **[0:57](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=57)** An example is using limit switch on a conveyor belt.
>
> **[1:00](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=60)** When the part moves the level of the switch, the switch changes its state.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=65)** This is an example of non-contact sensor, vision sensor.
>
> **[1:08](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=68)** When the part moves on a conveyor belt, the sensor detects the part without touching it.
>
> **[1:14](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=74)** Another way to classify sensors is by analog and digital.
>
> **[1:18](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=78)** Digital sensor has two states: on 1, off 0.
>
> **[1:23](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=83)** The output is either on or off.
>
> **[1:25](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=85)** If a sensor senses the object, it gives an output of one.
>
> **[1:29](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=89)** And the output is usually connected to a [[PLC]] input.
>
> **[1:33](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=93)** Light sensor is an example.
>
> **[1:36](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=96)** Analog sensor can provide more information about the process.
>
> **[1:39](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=99)** Temperature sensor is an example where a temperature sensor gives a wide range of reading.
>
> **[1:44](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=104)** The analog sensor sends the temperature and send a current to the PLC.
>
> **[1:50](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=110)** Pressure sensors and level sensors are example of analog sensors and usually give an output of 4-20 milliamps.
>
> **[1:59](https://www.linkedin.com/learning/learning-industrial-automation/field-level-14444219?u=76281980&t=119)** Here are examples of different types of sensors used in industrial automation: temperature sensors, level sensors, proximity sensors, light sensors, fiber-optic sensors, displacement sensors, vision and photoelectric sensors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[Microsoft Products|Products]] (1)
> **Definitions:** is an  (3)
> **Env Vars:** plc (2)
> **Speakers:** - [instructor] (1)

#### [Communication level 1: EtherNET](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=0)** - [Instructor] There are many communication networks used within control system in industrial automation.
>
> **[0:05](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=5)** The networks are called industrial networks referring to the applications where they are used with an industry.
>
> **[0:12](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=12)** Here are some of the industrial network types, [[DeviceNet]], Modbus, HART communication, [[PROFIBUS]], Ethernet, [[ControlNet]].
>
> **[0:22](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=22)** The communication networks are based on the OSI, Open Systems Interconnection reference model.
>
> **[0:29](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=29)** The OSI model was introduced by the International Organization for Standardization, ISO in 1984.
>
> **[0:38](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=38)** It is a conceptual model of how various components communicate in a database networks.
>
> **[0:45](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=45)** It is a seven layer model, each layer represents a different level of communication and provides support to the layer above it.
>
> **[0:54](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=54)** The layers are physical, data link, network, transport, session, presentation, and application.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=65)** The OSI model is not itself a communication network standard like Ethernet.
>
> **[1:10](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=70)** Rather it's a framework under which the various network standards can operate.
>
> **[1:17](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=77)** The OSI model specifies the characteristic of various networks standards, so it function as a standard for data communication standards.
>
> **[1:26](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=86)** A common classification of industrial networks is having three main networks within industrial settings, device, control and management network.
>
> **[1:37](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=97)** The network that regulates the devices within the field level.
>
> **[1:41](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=101)** The network that regulates the controllers and the network that connects the application and management layer.
>
> **[1:49](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=109)** The first category of industrial network is the one with an information and management level.
>
> **[1:54](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=114)** An example is Ethernet.
>
> **[1:57](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=117)** Ethernet is the most widely used protocol at the application management level of communication networks due to the use of computers within industrial settings.
>
> **[2:08](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=128)** Ethernet is a standard by IEEE known as IEEE standard 8020.3.
>
> **[2:19](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=139)** Ethernet is popular because it's fast, inexpensive and easy to install.
>
> **[2:24](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=144)** Ethernet IP is a communication standard supported by open DeviceNet Vender Association, ODVA, and ControlNet International Association.
>
> **[2:37](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=157)** Ethernet TCP/IP, where TCP means Transport Control Protocol, and IP means Internet Protocol.
>
> **[2:46](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=166)** It is an application layer industrial protocol that is built on the standard of TCP/IP stack.
>
> **[2:54](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=174)** Ethernet IP uses a standard Ethernet [[Hardware]] and operates over Ethernet, using the Common Industrial Protocol, CIP, ControlNet and DeviceNet and the TCP/IP protocol stack.
>
> **[3:09](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=189)** Here's an example of how to implement Ethernet protocol and Ethernet IP within industrial settings.
>
> **[3:15](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-1-ethernet?u=76281980&t=195)** Where it's used to connect computer to the controller devices, a [[PLC]] is an example, and to connect to a linking devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DeviceNet]] (3), [[ControlNet]] (3), [[PROFIBUS]] (1), [[Hardware]] (1), [[PLC]] (1)
> **Env Vars:** osi (4), tcp (4), ieee (2), hart (1), profibus (1)
> **Definitions:** is a  (4), is an  (2), known as (1)
> **Versions:** 8020.3 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Communication level 2: ControlNET](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=0)** - [Instructor] To continue the discussion about the three main networks with industrial settings, the second category is industrial network within the control level.
>
> **[0:09](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=9)** An example of control level is [[ControlNet]] network.
>
> **[0:13](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=13)** ControlNet is an open industrial network protocol for industrial automation applications, also known as Fieldbus.
>
> **[0:22](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=22)** ControlNet is an open network that supports both field devices and control level communication used for real time data transfer for time critical and non-time time critical data between processors or inputs and outputs on the same link.
>
> **[0:39](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=39)** ControlNet was developed by Allen-Bradley and managed by ControlNet international organization of vendor since 1997.
>
> **[0:47](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=47)** Since 2008, ControlNet management is handled by Open Device Vendor Association, ODVA.
>
> **[0:56](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=56)** For ControlNet, being an open network, [[Hardware]] from many vendors can be purchased and connected to as a node to the network.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=65)** It can connect up to 99 nodes.
>
> **[1:08](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=68)** Each is having ControlNet communication interface.
>
> **[1:11](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=71)** The nodes can be a variable frequency devices, control valves, sensors, and controllers, or PLCs.
>
> **[1:20](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=80)** In ControlNet Fieldbus systems, only session layer is missing from the OSI model.
>
> **[1:25](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=85)** ControlNet communication is a high-speed network used for transition of time critical application.
>
> **[1:32](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-2-controlnet?u=76281980&t=92)** Here are examples of devices and [[Microsoft Products|products]] of ControlNet provided by Allen-Bradley.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ControlNet]] (11), [[Hardware]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is an  (2), known as (1), is a  (1)
> **Env Vars:** odva (1), osi (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [Communication level 3: Device](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=0)** - [Instructor] The device-level network is the lowest level.
>
> **[0:03](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=3)** It consists of planted floor devices.
>
> **[0:07](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=7)** Many device-level networks are available.
>
> **[0:09](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=9)** [[DeviceNet]] is one of them.
>
> **[0:12](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=12)** DeviceNet is an open network protocol based on CAN technology.
>
> **[0:17](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=17)** It was introduced in 1994.
>
> **[0:20](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=20)** DeviceNet is an implementation of the Common Industrial Protocol, CIP, for industrial communication networks.
>
> **[0:28](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=28)** Developed originally by Allen-Bradley and now DeviceNet is managed by a group called Open DeviceNet Vendors Association, ODVA.
>
> **[0:40](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=40)** DeviceNet is an open network used mainly for the connection of industrial controllers and input and output devices, low-level devices such as sensors, valves, push buttons, and variable frequently drivers.
>
> **[0:54](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=54)** And because it's an open network, devices or nodes from many different manufacturers can be used.
>
> **[1:01](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=61)** Here are examples of devices and [[Microsoft Products|products]] of DeviceNet network provided by Allen-Bradley.
>
> **[1:09](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=69)** A DeviceNet network can have up to 64 devices or nodes.
>
> **[1:14](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=74)** Address is from zero to 63.
>
> **[1:17](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=77)** The second example of industrial network is a HART communication network.
>
> **[1:23](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=83)** HART communication is bidirectional communication protocol that provides data access between field devices and control systems.
>
> **[1:33](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=93)** Bidirectional communication is to send and receive from the devices.
>
> **[1:39](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=99)** HART is an acronym for Highway Addressable Remote Transducer.
>
> **[1:46](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=106)** HART uses Bell 202 Frequency-Shift Keying standards, FSK, on top of 4-20 milliamps.
>
> **[1:55](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=115)** The HART protocol is often called the hybrid protocol because it combines analog and digital communication.
>
> **[2:02](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=122)** The HART protocol communicates without interrupting the 4-20 milliamp signal and thus allowing the master application to get more digital updates from the smart field device.
>
> **[2:14](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=134)** This way, helps to enable two-way field communication from and to the device.
>
> **[2:20](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=140)** Here's an example of connecting a field HART pressure sensor device to a master application, a [[PLC]], a [[DCS]] for example, using a HART communication.
>
> **[2:30](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=150)** The third communication protocol is a [[PROFIBUS]] communication.
>
> **[2:35](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=155)** PROFIBUS is a protocol introduced by a field bus working group in 1987.
>
> **[2:42](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=162)** It is supported by PI, PROFIBUS and PROFINET International.
>
> **[2:48](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=168)** Using a single bus cable, PROFIBUS links controller or control systems with decentralized field devices, an example is sensors or actuators on the field level, and also enables consistent data exchange with higher ranking communication systems.
>
> **[3:07](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=187)** There are two types within PROFIBUS protocol.
>
> **[3:10](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=190)** PROFIBUS DP is a high-speed data network for factory automation.
>
> **[3:16](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=196)** A PROFIBUS PA is a communication system for PROFIBUS automation application.
>
> **[3:23](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=203)** This is an example of how a PROFIBUS communication is structured.
>
> **[3:27](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=207)** A PROFIBUS DP device is connection to the control system using a single cable.
>
> **[3:33](https://www.linkedin.com/learning/learning-industrial-automation/communication-level-3-device?u=76281980&t=213)** A PROFIBUS PA, however, use a DP/PA coupler to be connected to the control system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PROFIBUS]] (11), [[DeviceNet]] (8), [[Microsoft Products|Products]] (1), [[PLC]] (1), [[DCS]] (1)
> **Env Vars:** profibus (11), hart (8), cip (1), odva (1), fsk (1)
> **Definitions:** is an  (5), is a  (5)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Control (PLC and DCS) and management level](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=0)** - [Instructor] Control and Management Level.
>
> **[0:03](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=3)** The basic function of industrial automation controllers is to examine the status of inputs and response controls some processes or machines through outputs.
>
> **[0:14](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=14)** Control level is the second level with an industrial automation system.
>
> **[0:18](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=18)** It basically controls the flow of data from the device level to the management level, according to a certain logic or program.
>
> **[0:27](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=27)** The logic combination on inputs to produce an output or outputs are called control logic.
>
> **[0:35](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=35)** The common industrial controllers are [[DCS|distributed control system]], [[DCS]], [[PLC|programmable logic controller]], [[PLC]], and PC-based control.
>
> **[0:48](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=48)** Distributed control system, DCS.
>
> **[0:52](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=52)** DCS is a platform for automated control system used to control complex, large and geographically distributed applications in industrial processes where controllers are distributed through the entire planet area.
>
> **[1:08](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=68)** A DCS combines the following into a single automated system, a [[HMI|human machine interface]], [[HMI]], logic control and solvers, supervisor control, alarm management, and a common database.
>
> **[1:23](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=83)** In DCS systems, controllers are disappeared through the entire plant area.
>
> **[1:29](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=89)** Programmable logic controllers, PLC.
>
> **[1:33](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=93)** Programmable controllers are industrial computers, which control devices by continuously monitoring the state of the input devices and control the state of the output devices.
>
> **[1:44](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=104)** Programmable logic controllers, PLC, and distributed control systems, DCS.
>
> **[1:53](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=113)** Programmable logic controllers and distributed control systems are used to send, receive and process data from sensors, control valves and actuators as part of the control system.
>
> **[2:06](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=126)** Both systems share the following components, field devices, input and output models, controllers, human machine interface, HMI, engineer supervisor control, and in business integration.
>
> **[2:20](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=140)** DCS does not monitor items.
>
> **[2:22](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=142)** It monitors a whole process and it can monitor multiple processes at the same time.
>
> **[2:28](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=148)** The response time is slow comparing to PLC.
>
> **[2:31](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=151)** The PLC on the other hand monitors discrete things.
>
> **[2:35](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=155)** It has a high speed response comparing to DCS.
>
> **[2:40](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=160)** PC based control.
>
> **[2:42](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=162)** PC based controllers are used for simple control system where a computer can be used to control a device or multiple devices with an industrial area.
>
> **[2:52](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=172)** Computer software programmers develop an application that can be used in the control system.
>
> **[2:58](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=178)** One of the advantages of using computers due to their graphical capabilities, the software systems are easier to use in the development of the logic, the data collected can be easily transferred to spreadsheets, [[Microsoft Word|word]] processor, or any other analysis software.
>
> **[3:14](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=194)** It is also easier to connect computer to a LAN network within the area.
>
> **[3:20](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=200)** Management level, management level includes different types of software application programs for process control.
>
> **[3:28](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=208)** They're gathering of data in a real time from a remote location in order to control the process.
>
> **[3:34](https://www.linkedin.com/learning/learning-industrial-automation/control-plc-and-dcs-and-management-level-14448223?u=76281980&t=214)** The management level usually acquire data from remote devices, such as valves, bombs, transmitters, et cetera, and provide an overall control remotely from the host software platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DCS]] (8), [[PLC]] (5), [[DCS|Distributed control system]] (2), [[HMI|Human machine interface]] (2), [[HMI]] (2)
> **Env Vars:** dcs (8), plc (5), hmi (2), lan (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Programmable Logic Controller

[↑ Back to Table of Contents](#table-of-contents)

#### [Programmable logic controller (PLC) overview](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=0)** - [Instructor] Programmable logic controllers, [[PLC]].
>
> **[0:04](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=4)** PLC is an acronym for a [[PLC|programmable logic controller]].
>
> **[0:09](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=9)** PLC is an industrial computer control system, which control devices by continuously monitoring the state of input devices and make decision based on a logic program to control the state of an output device.
>
> **[0:24](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=24)** Incoming control signal called an input.
>
> **[0:27](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=27)** A signal going out of the PLC to control a field device is an output.
>
> **[0:33](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=33)** PLC is a special form of microprocessor based controller that uses programmable memory to store instruction to control machines and processes, sense, receives and processes data from and to the field devices.
>
> **[0:49](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=49)** PLC monitors discreet things.
>
> **[0:52](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=52)** It has a high speed response.
>
> **[0:54](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=54)** So usually they're using application where a high speed response is required like manufacturing processes, industrial application, and some traffic systems.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-plc-overview?u=76281980&t=65)** Basically, any application that needs that regulation of an input and an output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (6), [[PLC|Programmable logic controller]] (1)
> **Env Vars:** plc (6)
> **Definitions:** is an  (3), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Main components](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=0)** - [Instructor] The main components of a [[PLC]] system are power supply, controller CPU, I/O system, inputs and outputs, and [[PLC Programming]] software.
>
> **[0:12](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=12)** Most PLCs need one or more power supplies for the CPU, and sometimes for the inputs and outputs.
>
> **[0:18](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=18)** Usually, all the PLC manufacturers make a compatible power supply for their PLC.
>
> **[0:24](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=24)** Controller or Central Processing Unit, CPU, is the brain of the PLC.
>
> **[0:30](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=30)** The CPU reads signals and follows the instruction that a programmer has stored in the PLC memory.
>
> **[0:38](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=38)** And according to the program, the PLC turns certain outputs or field devices.
>
> **[0:43](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=43)** The CPU has different operating modes, programming and a run mode.
>
> **[0:48](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=48)** And usually has LEDs or marquee showing on the controller module within the PLC to show what mode is the PLC currently operating.
>
> **[0:56](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=56)** In a programming mode, the CPU accepts and download the logic from the PC.
>
> **[1:02](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=62)** The CPU is then placed in a run mode so that it can execute the program and operates the process.
>
> **[1:10](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=70)** I/O system includes the inputs and outputs for the PLC.
>
> **[1:16](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=76)** Input section is connected to field devices that provide input data like sensors, limit switches, pressure devices, et cetera.
>
> **[1:25](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=85)** Input devices can consist of digital and analog devices.
>
> **[1:30](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=90)** Output section is connected to the devices that need certain logic according to the program within the PLC.
>
> **[1:37](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=97)** Output devices can also consist of digital and analog types.
>
> **[1:42](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=102)** Digital output cart either turns the device on or off.
>
> **[1:46](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=106)** Examples are lights, LEDs, small motors and relays.
>
> **[1:51](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=111)** Typical analog output signals can range from zero to 10 volts, four to 20 milliamps.
>
> **[1:58](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=118)** Examples are mass flow controllers, pressure regulators, and position controllers.
>
> **[2:05](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=125)** The I/O System provides the physical connection between the equipment, devices and the PLC.
>
> **[2:12](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=132)** Software is the component where the logic is done to run the PLC.
>
> **[2:16](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=136)** PLC simply follows instructions stored in the memory.
>
> **[2:21](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=141)** These instructions are usually programmed by a PLC programmer and sent to the PLC during the programming mode.
>
> **[2:29](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=149)** Two common methods for a PLC programming, ladder logic, and a block diagram.
>
> **[2:36](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=156)** PLC components are mounted on a chassis, rack, or a base plate where the power supply, CPU, input and output modules are placed.
>
> **[2:45](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=165)** In a PLC, the I/O and the components are plug in type removable units called modules.
>
> **[2:53](https://www.linkedin.com/learning/learning-industrial-automation/main-components-14444214?u=76281980&t=173)** Different type of modules for each specific task like inputs and outputs, communication and power.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (17), [[PLC Programming]] (2)
> **Env Vars:** plc (19), cpu (8)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Programmable logic controller programming languages](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=0)** - [Instructor] [[PLC Programming]] Languages.
>
> **[0:03](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=3)** IEC 61131-3 international standard that defines PLC programming languages and concepts.
>
> **[0:15](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=15)** This defines the specifications required for languages that operate the programmable logic controllers.
>
> **[0:22](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=22)** Programming languages are divided into two main sections to represent the five main programming languages: a text-based and a graphical.
>
> **[0:34](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=34)** Text-based, instruction list, structured text, graphical, ladder logic diagram, function block diagram, sequential function chart.
>
> **[0:46](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=46)** Two common methods for PLC programming is ladder logic and block diagram.
>
> **[0:53](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=53)** So the standard explains the format, the syntax, and display for the five [[PLC]] languages available.
>
> **[1:00](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-languages?u=76281980&t=60)** Each language is used and best suited for certain types of applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Programming]] (3), [[PLC]] (1)
> **Env Vars:** plc (4), iec (1)
> **Speakers:** - [instructor] (1)

#### [Programmable logic controller programming: Block diagram](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=1)** - [Instructor] Function Block Diagram, FBD.
>
> **[0:04](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=4)** Function Block Diagram is a graphical programming language used for [[PLC Programming]] base on functions and function block composition.
>
> **[0:13](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=13)** It shows a graphic representation of executable code.
>
> **[0:17](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=17)** It consists of a series of blocks representing instructions connected by lines, cold wires.
>
> **[0:24](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=24)** A function block is represented as a rectangular block with inputs entering from the left and outputs emerging from the right.
>
> **[0:34](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=34)** The function of block type name is shown in the box where the block function name is written as well.
>
> **[0:40](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=40)** Examples: and function block, or function block, xor function block.
>
> **[0:47](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=47)** Notice the name and the different inputs and outputs for each block.
>
> **[0:51](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=51)** This is an example of a ladder diagram program, and the equivalent functional block diagram.
>
> **[0:57](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=57)** You can see that is shows the same process but only using block instead.
>
> **[1:03](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=63)** Here's an example of multiple blocks used to represent a logic within the program of a logic controller.
>
> **[1:09](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=69)** The type of a blog is written inside the box.
>
> **[1:12](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=72)** The name of the function block in the system is shown above it and using wires to connect the output to the input of the next block.
>
> **[1:21](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=81)** The way you read the program is from left to right.
>
> **[1:24](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=84)** Here's an example of a function block diagram within the software.
>
> **[1:28](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-block-diagram?u=76281980&t=88)** Notice the different blocks used to represent the whole process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC Programming]] (1)
> **Env Vars:** fbd (1), plc (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Programmable logic controller programming: Ladder logic](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=0)** - [Instructor] Ladder logic diagram is the primary programming language of a [[PLC|programmable logic controller]].
>
> **[0:06](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=6)** These symbols are interconnected by lines to indicate the flow of the current through the relay.
>
> **[0:12](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=12)** The complete program looks like a ladder, but in reality, it represents an electrical circuit.
>
> **[0:19](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=19)** The left and the right rails indicate the positive and the ground of the power supply.
>
> **[0:25](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=25)** Electrical current flows from the left to the right.
>
> **[0:29](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=29)** Each line is called a rung.
>
> **[0:31](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=31)** The rungs represent the wiring between the different components in the electrical circuit.
>
> **[0:38](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=38)** Ladder logic is a programming language that creates and represents a program through a ladder diagram that is based on a circuit diagram.
>
> **[0:48](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=48)** [[PLC]] program is set of instructions that is stored in the memory.
>
> **[0:52](https://www.linkedin.com/learning/learning-industrial-automation/programmable-logic-controller-programming-ladder-logic?u=76281980&t=52)** Instructions tell the PLC what to do with the input signals, and where to send the output signals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PLC]] (2), [[PLC|Programmable logic controller]] (1)
> **Env Vars:** plc (2)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** rails (1)
> **Speakers:** - [instructor] (1)

#### [Human-machine interface (HMI)](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=0)** - [Instructor] An [[HMI]] is a software application that presents information to the users about the state of a process, and also to accept the user and control instructions.
>
> **[0:11](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=11)** HMI provides a graphical representation of the control system process and provides real time [[Data Acquisition]].
>
> **[0:18](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=18)** It monitors data and make it available to users as well as provides an interface for inputs from the users.
>
> **[0:26](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=26)** One of the advantages that HMI provides is that they provide an interface between the user and the machine within the factory floor, a centralized control unit and a local interface of the process for a quick monitoring and adjusting.
>
> **[0:42](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=42)** So as the name applies, HMI, [[HMI|human machine interface]], allows humans and machines to interact.
>
> **[0:51](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=51)** The size of HMI varies.
>
> **[0:53](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=53)** It depends on the different applications as well as the vendors.
>
> **[0:57](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=57)** Here are some examples of human machine interfaces provided by Ellen Bradley and Siemens.
>
> **[1:04](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=64)** This is an example of a build-in HMI interface used for monitoring a continuous process for a mixing project.
>
> **[1:11](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=71)** This HMI takes inputs, the status of the valve, and presents output like the level of the tank.
>
> **[1:19](https://www.linkedin.com/learning/learning-industrial-automation/human-machine-interface-hmi-14448222?u=76281980&t=79)** HMI can be a small device or built in within the system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HMI]] (8), [[Data Acquisition]] (1), [[HMI|Human machine interface]] (1)
> **Env Vars:** hmi (8)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Open Platform Communications (OPC)](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=0)** - [Instructor] [[OPC]] stands for Open Platform Communications.
>
> **[0:04](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=4)** OPC name was originally referred to OLE for Process Control, Object Linking and Embedding for Process Control.
>
> **[0:13](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=13)** Both names are still used in industry and mean the same thing.
>
> **[0:17](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=17)** The OPC Foundation is responsible for the development and the maintenance of this standard.
>
> **[0:23](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=23)** OPC is the standard for secure and reliable exchange of data in industrial automation and in other industries, like industrial [[IoT|internet of things]].
>
> **[0:32](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=32)** It ensures the seamless flow of information among devices from multiple vendors.
>
> **[0:39](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=39)** OPC is implemented in a server/client pairs.
>
> **[0:43](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=43)** The OPC client and OPC server relationship is a parent/child one, where the server is the parent and client is the child.
>
> **[0:53](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=53)** So let's see what an OPC client means.
>
> **[0:56](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=56)** An OPC client is basically any device or software that the data are going to, either to be collected, analyzed, or to be sent somewhere else.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=65)** An OPC server is a software application that has been written to one of the OPC specifications.
>
> **[1:11](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=71)** An OPC server will respond to request and provide data to one or more OPC clients.
>
> **[1:18](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=78)** OPC clients can interface with and request data from any OPC server, regardless of the vendor.
>
> **[1:25](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=85)** In a parent/child model, the parent application controls one or more other applications, the children.
>
> **[1:32](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=92)** Once the parent/child relationship is established, the direction of control is always from the parent to the child, which means one OPC server will only transfer data to and from a data source if an OPC client commands it to.
>
> **[1:49](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=109)** Again, OPC server is the parent and OPC client is the child.
>
> **[1:54](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=114)** The OPC server is a software program that converts the [[Hardware]] communication protocol used by a [[PLC]] into an OPC protocol.
>
> **[2:04](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=124)** The OPC client software, on the other hand, is any program that needs to connect to the hardware, such as an [[HMI]], for example.
>
> **[2:12](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=132)** The OPC client uses the OPC server to get data from or send commands to the hardware.
>
> **[2:21](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=141)** One of the main advantages of using OPC is the ability to connect different controllers from different vendors and to enable the communication between them.
>
> **[2:29](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=149)** So if a field device is connected to one or multiple controllers, for example, Siemens or ABB, the data is transferred from the devices to the controller and from the controller to an OPC client, where all data from different vendors are accessible using one place.
>
> **[2:46](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=166)** The data collected from different vendors can then be used for different applications, HMI, [[SCADA]], or simply just stored in database.
>
> **[2:55](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=175)** One of the greatest uses of OPC protocol is to transfer data over a network and overcoming the security problems.
>
> **[3:04](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=184)** So OPC communication protocol is a powerful tool that is used in application where the need to access data from any data source and then present them in any other devices.
>
> **[3:16](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=196)** The value of OPC is that it's an open standard, which means any OPC client can interface with and request data from any OPC server, regardless of the vendor.
>
> **[3:27](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=207)** Cogent DataHub demonstrates the OPC connections in a simple way to understand.
>
> **[3:32](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=212)** So let's go over the different scenarios that an OPC connection can happen.
>
> **[3:37](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=217)** The first one is a typical OPC connection scenario, where a single server/client connection on a single computer.
>
> **[3:44](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=224)** The second scenario is an OPC client connected to many OPC servers, and that's called OPC aggregation.
>
> **[3:55](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=235)** When an OPC client is connected to an OPC server over a network, this is called an OPC tunneling.
>
> **[4:03](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=243)** When an OPC server is connected to another OPC server to share data, this is called OPC bridging.
>
> **[4:10](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=250)** In many cases, the controller has its own server and can be used as an OPC server that can be demonstrated to an OPC client.
>
> **[4:19](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-14446218?u=76281980&t=259)** So here's an example of using DeltaV system, where DeltaV has its own OPC server, then using DataHub application to connect to another OPC client over a network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OPC]] (47), [[Hardware]] (3), [[HMI]] (2), [[IoT|Internet of things]] (1), [[PLC]] (1)
> **Env Vars:** opc (47), hmi (2), ole (1), plc (1), abb (1)
> **Definitions:** is a  (5), is called (2), stands for (1), is an  (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Open Platform Communications (OPC) software](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=0)** - [Instructor] So let's take a look at some of the open source [[OPC]] softwares that are used in industrial automation.
>
> **[0:06](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=6)** Please note that usually manufacturers provide an OPC server to their [[Microsoft Products|products]] and applications.
>
> **[0:12](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=12)** OPC Cogent DataHub is one of the OPC softwares.
>
> **[0:16](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=16)** The Cogent DataHub can act as both OPC server and a client at the same time.
>
> **[0:22](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=22)** This means it can read from multiple OPC servers while acting as a client and make this data available to any OPC client while acting as a server.
>
> **[0:36](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=36)** You can download a demo and it only runs for an hour if you would like to try it.
>
> **[0:41](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=41)** So here's an overview of what the software looks like.
>
> **[0:44](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=44)** As you can see, this is a Cogent DataHub server.
>
> **[0:49](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=49)** You can see the different OPC options, OPC UA, OPC DA, OPC A&E, web view, web server, database, and many other options.
>
> **[1:04](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=64)** OPC A&E server stands for OPC Alarm and Events.
>
> **[1:10](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=70)** Under the OPC A&E, you can select if you want the OPC to act then as a client to many servers by checking the box under OPC Alarm and Event client.
>
> **[1:22](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=82)** You can also configure an OPC S&E server by specifying the connection name, OPC server name and data domain, and select the proper options for your application.
>
> **[1:34](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=94)** To connect an OPC client to an OPC server over a network, tunneling across a network where you can specify the primary host, the secondary host, and the different ports needed as a remote server.
>
> **[1:48](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=108)** Bridging when you want to connect an OPC server to another OPC server to share data.
>
> **[1:54](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=114)** You need to configure bridges by specifying the source and destination.
>
> **[1:59](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=119)** Then under the transformation section, you need to select the proper options to your project.
>
> **[2:05](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=125)** For transform, examples like direct copy, linear transformation, and under the direction section, you can specify whether it's a forward, source to destination, or inverse, destination to source.
>
> **[2:19](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=139)** Know that you can download a demo and it runs for an hour if you would like to try it.
>
> **[2:23](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=143)** More information about each function is available at their website.
>
> **[2:27](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=147)** KEPServer is another example of an OPC software.
>
> **[2:32](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=152)** KEPServer is provided by Kepware.
>
> **[2:36](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=156)** This is how a KEPServer looks like.
>
> **[2:39](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=159)** In Kepware server, different functions are available too, like alarm and events, data logger, [[IoT]] gateway, and many more.
>
> **[2:51](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=171)** Under each project, there are many tasks, like connectivity for example.
>
> **[2:55](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=175)** This specifies the channels and each device connected to the server.
>
> **[3:00](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=180)** When adding a new channel, different types of controllers are available to be used from different vendors.
>
> **[3:10](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=190)** And when adding a new tag, you can specify the address of each tag used in order to save the data or to be sent out.
>
> **[3:18](https://www.linkedin.com/learning/learning-industrial-automation/open-platform-communications-opc-software?u=76281980&t=198)** One last note, you can use both servers on the same machine and configure each one separately, one as a server and one as a client or any other preferred method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OPC]] (23), [[Microsoft Products|Products]] (1), [[IoT]] (1)
> **Env Vars:** opc (23)
> **Prerequisites:** configure (3)
> **UI Navigation:** select the (2)
> **Definitions:** is a  (1), stands for (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)


### 3. Supervisory Control and Data Acquisition

[↑ Back to Table of Contents](#table-of-contents)

#### [Supervisory Control and Data Acquisition (SCADA) defined](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=0)** - [Instructor] [[SCADA]].
>
> **[0:01](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=1)** SCADA is an acronym for supervisory control, and [[Data Acquisition]].
>
> **[0:06](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=6)** The major function of SCADA is for acquiring data from a remote devices, such as valves, pumps, transmitters, et cetera, and providing an overall control remotely from a SCADA host software platform.
>
> **[0:22](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=22)** This provides process control locally so that these devices turn on, and off at right time, and a remote method for capturing data, and events for monitoring these processes.
>
> **[0:33](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=33)** SCADA host platforms also provide function for graphical displays, alarming, trending and historical storage of data.
>
> **[0:42](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=42)** A typical SCADA system consists of SCADA Master, that is connected to either a remote location unit that contains controllers, remote terminal units or PLCs, or connected locally to a local location units that is connected to a control system.
>
> **[1:00](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=60)** It could be either a [[PLC]] or [[DCS]] and a field devices.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=65)** SCADA was traditionally used for [[Data Collection]] from PLC, and floor controllers.
>
> **[1:11](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=71)** SCADA assistants were used for monitoring, and supervisor control for processes.
>
> **[1:17](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=77)** The role of SCADA now expanded.
>
> **[1:19](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=79)** They are a vital part of many manufacturer information systems.
>
> **[1:23](https://www.linkedin.com/learning/learning-industrial-automation/supervisory-control-and-data-acquisition-scada-defined?u=76281980&t=83)** They provide manufacturing data to many other software systems in a typical manufacturing settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (10), [[PLC]] (2), [[Data Acquisition]] (1), [[DCS]] (1), [[Data Collection]] (1)
> **Env Vars:** scada (10), plc (2), dcs (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Components, layout, and design](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=0)** - [Instructor] [[SCADA]] components.
>
> **[0:02](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=2)** SCADA systems consists of field data interface devices, communications network system, controllers like PLCs or [[DCS]], et cetera.
>
> **[0:13](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=13)** SCADA hosts software and master terminal units.
>
> **[0:17](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=17)** The basic SCADA architecture begins with any type of controllers like PLCs or remote terminal units, RTUs.
>
> **[0:25](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=25)** PLCs and controllers are microcomputers that communicate with field devices to provide information to the computers within a SCADA software.
>
> **[0:36](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=36)** The SCADA software processes, distributes and displays the data, helping operators and other users to analyze the data and make important decisions.
>
> **[0:48](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=48)** So this is an example of a simple temperature control system consists of a temperature sensor of a tank within a manufacturing setting.
>
> **[0:57](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=57)** The temperature sensor is connected to a controller, [[PLC]] for example.
>
> **[1:02](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=62)** Our Rockwell Automation PLC takes input from the sensor and controls output, a heater in this example, to adjust the temperature.
>
> **[1:12](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=72)** Usually the input connected to a PLC have an address.
>
> **[1:15](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=75)** An example of an address to a PLC would be like I:3/15 to indicate slot three input 15.
>
> **[1:26](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=86)** An output is O:7/8 which is an output in slot seven output eight.
>
> **[1:35](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=95)** The data then gets sent to an application within SCADA software for data analysis.
>
> **[1:40](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=100)** It can be established as a client and server between the application and the controller.
>
> **[1:45](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=105)** The data received by the SCADA application can be used in the same program or different other programs like Database, [[Microsoft Excel|Excel]], Access and based on the algorithm, it sends an output as a response.
>
> **[1:59](https://www.linkedin.com/learning/learning-industrial-automation/components-layout-and-design-14445180?u=76281980&t=119)** The whole system represents SCADA system with its components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (9), [[PLC]] (4), [[DCS]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** scada (9), plc (4), dcs (1)
> **Tools:** terminal (2)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [SCADA functions and usage](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=0)** - [Narrator] [[SCADA]] layout and design.
>
> **[0:03](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=3)** The basic SCADA layout includes the components from field devices, controllers, up to the end user applications, SCADA software.
>
> **[0:13](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=13)** SCADA is data-gathering oriented, where it collects data to be used within the control system.
>
> **[0:20](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=20)** SCADA [[Software Design]] includes the following, user and machine interface, graphic display, alarms and reports, trends, database, and real time data updates.
>
> **[0:35](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=35)** SCADA functions.
>
> **[0:36](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=36)** Here are some examples of SCADA system functions, [[Data Acquisition]] and database, data communication, information and data presentation, monitoring and control, and alarm system.
>
> **[0:49](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=49)** SCADA applications.
>
> **[0:50](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=50)** SCADA systems are used by industrial organizations, and companies in public and private sectors to control and maintain efficiency, distribute data for smart decisions, and communicate system issues.
>
> **[1:04](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=64)** So where is SCADA used?
>
> **[1:06](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=66)** SCADA systems are used in many modern industries.
>
> **[1:09](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=69)** And examples are manufacturing, power, transportation, energy, water, and wastewater, oil, and gas.
>
> **[1:19](https://www.linkedin.com/learning/learning-industrial-automation/scada-functions-and-usage?u=76281980&t=79)** And these are just an examples of the different industries where SCADA is used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (12), [[Software Design]] (1), [[Data Acquisition]] (1)
> **Env Vars:** scada (12)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=0)** - Thanks for taking the time to watch this course.
>
> **[0:03](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=3)** In this course, I gave you an overview of Industrial Automation Field.
>
> **[0:08](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=8)** If you'd like to learn more about [[SCADA]], I recommend checking out this course, "Learning SCADA."
>
> **[0:15](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=15)** I have designed the course to gradually introduce you to SCADA concept and covering what's needed to work on a SCADA project in chapter four.
>
> **[0:26](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=26)** If you'd like to learn more about the common sensors used in industrial automation, I recommend checking out these two courses, "[[PLC]]: Industrial Sensors" and "Input Sensors with PLC: Sinking and Sourcing."
>
> **[0:42](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=42)** This course covers the commonly used circuit when connecting digital sensors to PLCs.
>
> **[0:48](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=48)** If you'd like to learn more about [[PLC Ladder Logic]] programming, I recommend checking out the learning path, "Become a PLC Developer," where I have designed the courses to cover the concept from the basics to more advanced levels.
>
> **[1:05](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=65)** I look forward to seeing you in another course.
>
> **[1:08](https://www.linkedin.com/learning/learning-industrial-automation/next-steps-22802778?u=76281980&t=68)** Until next time, enjoy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (4), [[PLC]] (3), [[PLC Ladder Logic]] (1)
> **Env Vars:** scada (4), plc (4)
> **Speakers:** - thanks (1)


## Instructor

- [[Zahraa Khalil]]

## Path Context

### In [[CSCMP Supply Chain Foundations- Manufacturing and Service Operations Professional Certificate]]
← [[Lean Six Sigma Foundations]] | **3 of 4** | [[Excel- Value Stream Mapping]] →

### In [[Become a PLC Developer]]
**1 of 7** | [[Learning PLC Ladder Logic- 1 The Basics]] →

## Part of

- [[CSCMP Supply Chain Foundations- Manufacturing and Service Operations Professional Certificate]]

## Appears In

- [[CSCMP Supply Chain Foundations- Manufacturing and Service Operations Professional Certificate]]
- [[Become a PLC Developer]]

---

[↑ Back to top](#)