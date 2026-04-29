---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-secure-access
url: "https://www.linkedin.com/learning/cisco-network-security-secure-access"
duration_minutes: 91
duration: 1h 31m
level: Intermediate
updated: 11/8/2024
learners: 46310
skills:
  - Cisco Networking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHspeiNrJaWKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286327010?e=2147483647&amp;v=beta&amp;t=jNpymW0Evl5l1utTNxm84Pr6iTXtG1GOtnQpS-D39HU"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Cisco Network Security- Safeguarding Network Integrity and Data]]'
prev_courses:
  - '[[Cisco Network Security Core Security Concepts]]'
next_courses:
  - '[[Cisco Network Security- VPN]]'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":2,"total":7,"prev":"Cisco Network Security Core Security Concepts","next":"Cisco Network Security- VPN"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/cisco-networking
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Secure%20Access.md)

![Cisco Network Security: Secure Access](https://media.licdn.com/dms/image/v2/D560DAQHspeiNrJaWKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286327010?e=2147483647&amp;v=beta&amp;t=jNpymW0Evl5l1utTNxm84Pr6iTXtG1GOtnQpS-D39HU)

# Cisco Network Security: Secure Access

> Administering a network means controlling access to network resources: granting, limiting, preventing, and revoking permissions as necessary. This course covers the topic of secure access, including in-band and out-of-band management, secure device access, and protocols such as NTP, SCP, and SNMP. Security ambassador Lisa Bock introduces the three a's of triple-A security: authentication, authoriz

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access) | 1h 31m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Packet Tracer]]** (2 videos)
- **[[#2. Secure Management]]** (7 videos)
- **[[#3. AAA Concepts]]** (4 videos)
- **[[#4. RADIUS and TACACS+]]** (3 videos)
- **[[#5. BYOD]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Securely accessing resources
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=0)** - [Lisa] By effectively managing access to network assets, organizations can block unauthorized users from infiltrating resources and safeguard critical data and systems from potential threats.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=15)** Join me as I share my knowledge on protocols that serve specific purposes in managing and maintaining systems over a network.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=25)** I'll cover AAA security and compare RADIUS and TACACS authentication.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=31)** I'll finish with ways to deal with the challenging environment network administrators manage today when dealing with bring your own device and the Internet of Things.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=43)** Hello, my name is Lisa Bock, and I'm a security ambassador.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=48)** Are you ready?
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=49)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** aaa (1), radius (1), tacacs (1)
> **Code Keywords:** let (1)
> **Speakers:** - [lisa] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=0)** - [Instructor] This course is an intermediate level course for network administrators, managers, students, and anyone with an interest in learning more about Cisco Security.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=12)** Participants should have a solid knowledge of networking fundamentals, devices and cables, along with various topologies.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=21)** This course and the entire learning path covers the components included in the security fundamentals section of the CCNA exam.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=30)** I'll take you here to this site where you can learn more about the CCNA exam.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=36)** The exam will test your knowledge and skills related to networking, and is an excellent addition to a career in information technology.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=46)** I'll scroll down where you can see the objectives, and then I'll expand the section on Security Fundamentals so that you can see what I'll be covering throughout the learning path.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=58)** I am super excited to bring you this series on CCNA security so that you can improve your skills in securing an organization's infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (3)
> **Definitions:** is an  (2)
> **Code Keywords:** super (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 1. Packet Tracer

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Cisco Networking Academy
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=0)** - [Instructor] Cisco developed Packet Tracer in order for students to have an interactive way to practice for CCNA exams.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=9)** In this segment, I'll show you how you can download your own copy of Packet Tracer from Cisco Network Academy.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=18)** If it's been a while since you had CCNA, you'll want to check out the Cisco Network Academy at [netacad.com](https://netacad.com) where we can see information about the academy.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=32)** Cisco Network Academy is a skills building program for learning institutions and individuals.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=40)** Cisco offers many courses that are instructor-led through academies that are scattered throughout the world, which is where you may have taken your CCNA.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=52)** Cisco now offers a number of free courses that are self-paced on a variety of current world skills.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=60)** Let's take a look.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=62)** I'll select Explore, and then I'll scroll down where we can see many subject areas, such as cybersecurity, networking, programming, and information technology.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=76)** But here's the one I want you to select, Cisco Packet Tracer.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=80)** And here is where we'll see a few self-paced courses.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=84)** And I'll select this one.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=85)** Now to get your own copy of Packet Tracer, you'll need to sign up, and then you'll need to enroll in one of the self-paced courses.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=94)** So you'll put in your information and you'll get an email link that will allow you to go in, take the course, and you'll learn a lot about Packet Tracer and what it can do.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=105)** And then once you're done, you can download your own copy of Packet Tracer.

> [!info]- Semantic Content
>
> **Code Keywords:** self (3), let (1)
> **Env Vars:** ccna (3)
> **Prerequisites:** you'll need (2)
> **URLs:** [netacad.com](https://netacad.com) (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Packet Tracer interface
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=1)** - [Instructor] During this course, I'll demonstrate some of the concepts using Packet Tracer, an application made available through Cisco Networking Academy.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=11)** Packet Tracer lets us configure common networking equipment.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=15)** In this segment, we'll take a brief look at Packet Tracer so you can navigate the interface more confidently.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=23)** Each time you launch Packet Tracer, it will make you re-authenticate with Cisco Networking Academy.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=31)** And then once done, you can use the app.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=34)** I've opened up Packet Tracer so we can explore the interface.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=39)** Yours might look a little different, but at the top we're going to see some common menu choices.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=45)** And those include File, Edit, Options, and I'll select Preferences.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=52)** And here what I commonly do is change the font, and that's just to modify the size of the application and possibly the command line interface.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=62)** But there's lots you can do to personalize your own interface.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=67)** View, where you can zoom in or zoom out or go to specific Views, Tools, Extensions.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=75)** And there you see the Activity Wizard.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=78)** Now, this is where you can build your own activities.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=82)** And this is commonly used by instructors, but of course you can do it yourself.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=89)** The Window, and of course, Help.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=93)** Now in the center, this blank white space is the logical drawing canvas.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=98)** Now of course, there are pre-made Packet Tracer activities that instructors use for assessments with students, but you can easily build a simple network and practice configuration on your own.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=113)** Now in the lower left-hand corner, this is where you can add certain devices.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=117)** So if you just click on, for example, Network Devices, you can see a nice selection.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=123)** And when you find one you like it, you can just pull it up.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=127)** Now you can also rename it, and we can put R1.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=135)** And then we can select some other devices.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=136)** Here are some end devices, and there's a nice selection here, Components and Connections.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=146)** And there's a nice selection of connections, for example, Console, Copper Straight-Through, Crossover, Fiber, and many others.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=156)** Here's Miscellaneous and Multiuser Connection.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=162)** Now, when you're done, and if you don't want that device, and I just click on it and it'll open it, but really I just want to delete it.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=168)** So I'll just hit Delete.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=170)** And it says, "Do you really want to delete R1?"
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=174)** And I say Delete.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=176)** And then once done, I'll go back to the Select tool, and now we'll go over to the lower right-hand corner.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=181)** Now on the right-hand side, we'll see the Realtime and Simulation bar.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=187)** Now, I'll most likely be in Realtime, but you can go into Simulation if you want to.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=193)** And in some courses we may do this.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=196)** So I'll select Simulation.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=199)** Now, this is where we can see the status of a packet traveling from one device to another.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=205)** It's like a packet analysis tool built into Packet Tracer.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=210)** And I'll go back to Realtime.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=213)** Well, now there's also some nice pre-made samples that I'll be using throughout the course.
>
> **[3:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=219)** Let's take a look. I'll go to File and Open Samples.
>
> **[3:44](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=224)** It'll warn you that any unsafe changes will be lost.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=227)** Do you want to save your network? And I'll say No.
>
> **[3:51](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=231)** And then you'll see the saves.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=233)** And there are different categories.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=236)** I'll select cybersecurity, and then I'll go to AAA.
>
> **[4:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=240)** And then I'll select Simple Authentication, and then I'll open it.
>
> **[4:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=246)** And once it's open, you can move the instructions over.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=249)** But what it will have you do is just one simple task so you get a feel for how something's supposed to work.
>
> **[4:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=258)** Cisco Academy offers a tutorial.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=260)** If you haven't already taken it or it's been a while since you've used Packet Tracer, it's well worth your time.
>
> **[4:28](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=268)** I know you'll enjoy working with Packet Tracer on my course and any of the CCNA courses in the library.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), delete (4), this. (1), let (1)
> **UI Navigation:** go to (3), click on (2)
> **Analogies:** for example (2), it's like (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** aaa (1), ccna (1)
> **Cross-References:** go back to (2)
> **Tools:** command line (1)
> **Prerequisites:** configure (1)


### 2. Secure Management

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Secure Access Control System overview
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=0)** - [Instructor] In the early days of computing security focused on protecting individual systems.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=6)** As we see in this image, of the ENIAC, Electronic Numerical Integrator and Computer, which began calculating in 1945.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=19)** And it was so big, it filled a room.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=23)** At the time it was the only computer.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=26)** However, in today's world there are a number of potential attackers that include nation states, competitors, hackers, and disgruntled employees that can gain access to our systems.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=38)** If we go to African Cyber Risk Institute, we can see examples of how to secure the network.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=46)** This image lists 10 steps for organizational cyber security.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=51)** Let's take a look.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=53)** Network security means we protect our networks against external and internal attacks.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=60)** On the upper right-hand corner, we see we should develop policies that include home and mobile networking, and train all employees on secure cyber practices while at home and on mobile devices.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=74)** Secure configuration.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=76)** This means patch and configuration management of all systems.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=81)** We can't overlook the need for policies that provide access control and proper use and disposal of removable media.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=92)** Manage user privileges.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=94)** Control access to all activities, and monitor all user activity which include people and processes such as file transfer protocol.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=107)** At the bottom we see incident management.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=110)** All companies should establish an incident response and disaster recovery program, so that you're prepared in case of an incident or disaster.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=121)** Over in the left-hand corner lists user education and awareness.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=125)** Which is critical in an infrastructure as people can be our weakest link.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=130)** Establish monitoring strategy and produce supporting policies to monitor all your systems and analyze your logs for unusual activity that can indicate an attack.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=144)** And malware protection against all business areas.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=149)** Today's networks are very complex, networked, and interconnected, as we see from this graphic of a campus area network.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=158)** Most organizations have multiple attack vectors that can lead to unauthorized access of your network.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=166)** In general, there are a lot of moving parts to manage and secure an enterprise network that include technical, physical, and administrative controls.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=176)** The network security specialist is responsible for some of the physical aspects, such as ensuring the server room doors are properly locked, along with the technical or logical controls such as access control lists and intrusion detection, intrusion prevention signatures, and implementing password policies.
>
> **[3:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=198)** When dealing with the various networking devices as they move data throughout the network, there are three planes.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=205)** The management plane.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=207)** Now this is where the connection between the workstation and the managed devices where the administrator monitors and configures services on the device, that would be possibly a router or a switch.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=221)** Protocols in this plane include Telnet, File Transfer Protocol, Secure FTP, Simple Network Management Protocol, and Secure Shell.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=233)** The control plane is responsible for routing protocols and routers that talk with one another.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=239)** Protocols in this plane work independently of the network administrator.
>
> **[4:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=245)** They work on their own and include routing protocols such as Open Shortest Path First, Intermediary System - Intermediary System, and Enhanced Interior Gateway Routing Protocol, along with other protocols such as IGMP, Protocol Independent Multicast, ICMP and ARP.
>
> **[4:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=267)** The data plane processes and moves user traffic.
>
> **[4:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=272)** The data plane influences and controls the flow of data by using access control lists and quality of service.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=280)** In this graphic, we see all three planes.
>
> **[4:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=283)** The management plane is independent, and that's because this is where the administrator gains access to the individual device.
>
> **[4:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=292)** In the control and data plane, we see the interaction among the devices.
>
> **[4:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=297)** In today's world, there are a number of potential attackers that can gain access to our systems.
>
> **[5:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=303)** As a result, the network security specialist must be vigilant in enforcing secure access control.

> [!info]- Semantic Content
>
> **Env Vars:** eniac (1), ftp (1), igmp (1), icmp (1), arp (1)
> **Analogies:** such as (5)
> **Code Keywords:** let (1), switch (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Compare in-band and out-of-band management
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=0)** [Narrator]
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=1)** - On an enterprise network we'll have a variety of devices to manage that include routers, switches, adaptive security appliances, along with intrusion detection and intrusion prevention.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=14)** It's essential to defend the network and the devices against the many possible threats that include unauthorized access, man in-the-middle attacks, denial service, botnets, and privilege escalation.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=29)** If any of the infrastructure devices are compromised, the security of the entire network can be compromised.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=37)** As a result, there are a number of best practices for securing the network infrastructure.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=43)** One concept, is Network Foundation Protection, which includes tools, technologies, controls, and services to prevent unauthorized access and defend against key threats to the infrastructure.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=57)** Devices often provide a range of ways to access them so that we can manage and secure the IOS.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=65)** That includes Telnet, remote login, HTTP, and Secure Shell.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=71)** Cisco IOS-based platforms have console and modem access right out of the box and are enabled by default.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=79)** The network administrator should lock down and properly secure the device before placing the device in service.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=87)** The first step in securing the device is to gain Administrative Access to the management plane.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=95)** To manage your network device, the network administrator can use either In-Band or Out-of-Band access to manage the devices via the command line interface.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=107)** On a router, there are different types of lines.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=110)** Understand that not all lines are available.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=113)** It will depend on the device.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=116)** The CTY line is the console port.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=120)** The AUX or auxiliary is the secondary console line.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=124)** However, this isn't always available.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=127)** TTY line is an asynchronous line used for modem and terminal connections.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=133)** You must have an asynchronous serial card in order to use a TTY line.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=140)** More commonly though, you'll see a VTY line.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=143)** A VTY line is a virtual TTY line and that's what we use when accessing the router via Telnet or SSH from another device.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=155)** Commonly on a device you'll see five VTY lines numbered zero to four.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=160)** To see what you have available on your device, you can either use show ip interface brief or show line.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=169)** That will tell you what lines or what interfaces are available.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=173)** There are two ways of accessing a device.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=176)** Either Out-of-Band Network Management uses a dedicated interface to access the device.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=182)** Or In-Band Network Management requires an active network connection.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=188)** With In-Band Network Management, you will access the device using the same media and interfaces as the data flow.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=196)** Here we see accessing a router using the Ethernet or IP Interface.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=202)** For In-Band Management the Network Administrator can either use Telnet or a Simple Network Management Protocol tools like OpenView from Hewlett Packard.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=213)** In-Band Management offers a flexible option to remotely manage a device.
>
> **[3:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=218)** For Out-of Band Network Management, here we'll use a dedicated interface to access the device.
>
> **[3:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=225)** We can access the device via a Console Port.
>
> **[3:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=228)** If you use the Console Port, you must have physical access to the device and use a console or rollover cable.
>
> **[3:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=235)** Which is generally a flat, light blue cable.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=239)** We can access the device via an auxiliary port via a modem connection to the auxiliary port of the device.
>
> **[4:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=247)** Most of the time we'll manage new devices using Out-of-Band Network Management.
>
> **[4:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=253)** Primarily because the device really doesn't have any network connectivity.
>
> **[4:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=258)** In addition, if the network is down, you're not going to be able to access the device using In-Band Management so you'll need to access using Out-of-Band Network Management.
>
> **[4:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=269)** In addition, for some devices, the only option for managing the device, is Out-of-Band Network Management.
>
> **[4:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=277)** When dealing with device configuration, most consider Out-of-Band Network Management the most secure method and is generally preferred over In-Band Management.

> [!info]- Semantic Content
>
> **Env Vars:** tty (3), vty (3), ios (2), http (1), cty (1)
> **Code Keywords:** interface (5), default. (1)
> **Tools:** command line (1), terminal (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** ssh (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - on (1)

#### Secure network management
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=0)** - [Narrator] Organizational security is a holistic approach, which requires monitoring all attack vectors and staying abreast of current threats.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=10)** The security analyst oversees the entire organization, which includes the network, administrative policies, applications, services, along with the human factor.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=24)** The network administrator monitors the network domain, which in itself is very complex.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=32)** For a proactive approach, a comprehensive view of the network is necessary.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=37)** Gather and monitor access control lists, protocols, services, routing tables, vulnerabilities, and patches.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=46)** Assess what you might be missing, such as logins, banners, passwords, and access control list entries.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=55)** Baseline each subnetwork on an annual basis to get a clear picture of what is happening, and use network maps with hard copy printouts for easy reference.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=68)** With a macro view of the network in hand, the network administrator is better prepared to face the daily challenges and keep the network up and operational.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=80)** At the heart of network administration, is secure network management.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=85)** Although we view the network as a whole, we must secure each and every individual device, either via console or virtual terminal access.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=98)** Let's look at some common security features and best practices.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=102)** Most modern devices have a number of built-in security features.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=108)** The network administrator should familiarize themselves on all available features, along with how to activate and monitor the features.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=118)** One of the most basic configuration options is to use a complex password along with a secured enabled password.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=130)** I'm in Packet Tracer and let's do a couple of password enabled.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=135)** I'm going to use Cisco for my password, just to keep it simple, although of course on a production system, you're going to use something more complex.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=145)** Now that's simply entering a password, Cisco, but keep in mind, protocol analyzers can sniff network traffic and read passwords that are in plain text.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=161)** So we want to increase security by encrypting passwords, so I'll type the following in global config mode.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=170)** Now let's use a password on the VTY lines.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=175)** Finally, it's a good idea to set timeout values on your VTY lines so that idle sessions won't remain up indefinitely.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=201)** Now let's check our work by showing run config.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=205)** Alright, there we can see the encrypted password, and the password for our VTY lines.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=221)** The network administrator should configure several standard services, such as Network Time Protocol, Simple Network Management Protocol, Secure Copy Protocol, and Secure Shell.
>
> **[3:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=234)** Whatever protocols or services the network administrator selects, it's important to use the most secure version that the device supports.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=244)** Simple Network Management Protocol gathers and reports information on the status of the network.
>
> **[4:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=250)** Configure for remote management along with remote alerts such as traps or informs.
>
> **[4:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=256)** In the early days of networking, the network administrator used Telnet, or Terminal Network, to access a command line interface on a device.
>
> **[4:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=265)** Telnet is not secure as it sends data in plain text.
>
> **[4:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=269)** To securely access and manage a device, we use Secure Shell, which uses encryption to protect data in transit.
>
> **[4:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=278)** Time values skew throughout the course of the day.
>
> **[4:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=281)** Even a few seconds will make a difference.
>
> **[4:44](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=284)** So it's best to use a method to update the time value.
>
> **[4:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=288)** Configure network time protocols, so all devices have synchronized and accurate time values.
>
> **[4:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=295)** Because time is so important, it's best to use Network Time Protocol authentication so devices do not get rogue time values.
>
> **[5:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=305)** For many years, network administrators would use Trivial File Transfer Protocol, an unauthenticated, unsecured plain text file transfer method.
>
> **[5:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=315)** The method of choice is Secure Copy Protocol, which uses Secure Shell for data transport, and it's just as easy to use.
>
> **[5:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=324)** We can also configure advanced security methods, such as authentication, authorization, and accounting, using either RADIUS or TACACS+, but at the very least, start with basic security configurations, and use password protection.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), interface (1)
> **Env Vars:** vty (3), radius (1), tacacs (1)
> **Analogies:** such as (4), picture (1)
> **Prerequisites:** configure (4)
> **Tools:** terminal (2), command line (1)
> **Non-Speech:** (typing) (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### Simple Network Management Protocol (SNMP)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=0)** - [Instructor] In order to assure that all devices and servers and printers are operating correctly, network administrators can use a variety of tools and techniques.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=11)** Many administers use Simple Network Management Protocol, which gathers and reports information on the status of the network devices.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=22)** SNMP has the following main components.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=26)** The SNMP manager, which is also known as the network management server, gathers information from the SNMP agents.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=37)** And the managed devices, which include any device that requires monitoring, such as workstations, printers, routers, switches, or servers.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=47)** The SNMP agent collects data from the device and then stores the information in a local management information database on the device and sends the status to the SNMP manager when queried by the manager.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=65)** The management information base, or, as some call it, management information database, is where the agent's references are stored in a hierarchy format.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=77)** In this graphic, we see the exchange of messages between the manager and a single device, and the agent, which references information in the management information base.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=90)** The devices that need managed are programmed to be SNMP agents, which collect data from the device and then store the information in a local management information database.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=103)** SNMP has the following commands.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=107)** Get, the manager queries the agent to request the value of a specific OID, or object identifier.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=115)** Response, an agent responds to a Get message with a Response message.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=121)** GetNext allows a manager to request the next sequential object in the MIB.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=127)** Set, which is sent by a manager to an agent to change a value, such as configuration information held by a variable on an agent.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=137)** GetBulk, which is essentially multiple GetNext requests.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=142)** The agent will send the manager as much data as possible.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=146)** Trap, an agent sends traps to a manager, which are a notification that inform managers of events that are happening on the managed device.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=158)** It could be bad, it could be just a startup or warming up.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=162)** An Inform is sent by the manager to confirm that they've received a Trap.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=167)** A Trap can be simply a notification that the device is moving online, or a more serious event, such as the printer is jammed, that there's no toner, or services requested.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=179)** The following are from RFC 3805.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=183)** And here, you can see that you might get a trap that simply says Warm Up and then you can see Critical Active Alert, which it's notifying the manager that there's a jam, or there's no paper, no toner, or the cover's open.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=199)** SNMP has been around since 1988 and has evolved over the years.
>
> **[3:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=204)** Currently, there area three versions.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=207)** Version one, which doesn't have any encryption and uses the community name.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=212)** Version two, which is essentially just a slight improvement over version one, does not have any encryption and uses the community name.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=222)** But version three uses encryption and also provides authentication by using an MD5 or SHA hash.
>
> **[3:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=230)** SNMP version three is the one you will want to use, because it ensures confidentiality, authentication, and access control.
>
> **[4:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=240)** Let's take a look at a Simple Network Management Protocol transaction in Wireshark, a free open-source protocol analysis tool.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=249)** I've opened up this capture and what we'll do is go to the display filter and type SNMP and Enter, so I only see the frames that have SNMP.
>
> **[4:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=261)** Those two frames show get request, get response, and then we'll focus on frame 25.
>
> **[4:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=269)** Down below here, we can see the encapsulation and the Simple Network Management Protocol, which we'll blow out.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=280)** Now, the one thing I want to show you is here it says Simple Network Management Protocol and this is version one.
>
> **[4:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=288)** This is the original version and, as you can see, the most insecure version, where the second line says Community Public.
>
> **[4:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=296)** Now, remember, that's like a password and it is in cleartext, where I can read it.
>
> **[5:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=301)** In addition, that's the default password and the agent is sending it in cleartext.
>
> **[5:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=308)** But down below here, this is where we see the object identifier, or OID.
>
> **[5:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=313)** That large number here, we could reference, and see what it is that it's getting information on.
>
> **[5:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=319)** We can Control+Shift+V and copy that value and then do a search.
>
> **[5:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=325)** And I'm at this webpage here where it tells us a little bit about the status of some of the OIDs.
>
> **[5:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=330)** And here are the first one, where you see the printer operational status, like up, down, or warning.
>
> **[5:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=337)** So, because version one shares its information in plain text, we'll want to use SNMP version three.
>
> **[5:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=346)** Some still use version one, but, really, the most secure option is version three.
>
> **[5:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=352)** That was offered in 1998.
>
> **[5:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=354)** Version three ensures confidentiality by encrypting data, authentication, that the request comes from a genuine source, and access control.
>
> **[6:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=364)** Here, we can see version three that allows the following options.
>
> **[6:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=368)** No authentication and no encryption, this is the least secure, and if you really don't want any, you would select that.
>
> **[6:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=376)** The second one is authentication required yet no encryption.
>
> **[6:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=380)** This would prove who it came from, but there is no encryption.
>
> **[6:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=384)** And the last one is the most secure, which is the one you should use, authentication required and encrypts messages.
>
> **[6:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=392)** In addition, the network administrator can choose to send messages via Secure Shell or Transport Layer Security.
>
> **[6:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=399)** So, Simple Network Management Protocol gathers and reports information on the status of the network.
>
> **[6:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=405)** The most secure version and the one you should use is SNMP version three, which offers authentication and encryption.

> [!info]- Semantic Content
>
> **Env Vars:** snmp (13), oid (2), mib (1), rfc (1), md5 (1)
> **Code Keywords:** let (1), public (1), from, (1)
> **Analogies:** such as (3)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Configure SNMP
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=0)** - [Narrator] We use Simple Network Management Protocol to monitor and manage the network.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=6)** Simple Network Management Protocol components include the manager, which is also known as the network management server, managed devices such as workstations, printers and routers, agents that collect data from the device and then stores information in a local Management Information Base, and the Management Information Base, which is also called the Management Information Database.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=33)** This is where the agent's references are stored in a hierarchy format.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=37)** We'll enable Simple Network Management Protocol on a router.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=41)** And here we can see those two lines of code that allows us to put a community name for read only access and a community name for read write access.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=52)** I'm in Packet Tracer.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=53)** Here's where we can build our own network, however, when you download Packet Tracer there are some samples that we can use to do some basic configuration of Simple Network Management Protocol.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=66)** We'll go to file and then open samples.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=70)** We'll go to PC, MIB browser, and SNMP router.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=81)** Once you open it, so you retain the samples, I'll save it locally.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=85)** File, save as, and we'll just simply call it SNMP Router.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=98)** Now we'll just move this around here, and which you can manipulate.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=101)** Again, this is a very simple configuration if you wanted to practice with adding a switch or other devices, that's entirely up to you.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=111)** We just want to show you what it would be like to do some basic configurations.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=117)** Now first of all, we're going to open up the SNMP Router.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=121)** It's already configured, but we'll do it again just so we can step through the process.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=129)** Now your interface might look a little different.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=131)** I've increased the font so you can read this.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=139)** Alright.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=140)** Now I'm in configuration mode.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=141)** Now what I want to do if you start typing SNMP server, community, and I want to make sure it's exactly written like you can see this test read only.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=156)** For read community, test read only.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=165)** Space, R-O.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=168)** We'll do the same thing, but this time it'll be read write.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=176)** And I will exit.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=180)** And I'll close that.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=182)** Now that I have the router configured for some basic SNTP agent functions, we'll open up the PC.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=190)** When you open the PC, go to desktop, and go to the MIB browser.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=199)** I'll want to enlarge this because once you see the hierarchy in the MIB tree, it gets pretty extended.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=206)** If you want to reference the instructions, we'll just do this so we can at least set this up and then I'll extend it.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=213)** We'll go to advanced.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=220)** Now what we want to do first is put the address of the router 10 dot zero dot zero dot one port 161, now this won't echo back to you so type carefully.
>
> **[3:58](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=238)** Test R-O, and test R-W.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=244)** And then select version three and say okay.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=249)** Now what I want you to do is expand the MIB tree on the left so we can actually go down to some of the system descriptions and then make some modifications.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=260)** So take a look at the instructions now, I'll expand it again.
>
> **[4:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=264)** Now here you can see the tree, and again, this is going to be quite extensive as we see the object identifier.
>
> **[4:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=278)** And now you see your system.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=280)** So go to the system description and what I want to do is get that system description and then we'll say go.
>
> **[4:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=290)** And then you can see here at Cisco IOS Software, which is correct.
>
> **[4:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=294)** Now go to the system contact and this time we'll go get it, but there isn't any.
>
> **[5:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=301)** So what we'll do is we'll set the system contact and we'll make it whatever you want to.
>
> **[5:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=307)** You can put your own name in it, we'll go to Octet String and I'll type Roxy, and I'll say okay.
>
> **[5:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=317)** Now we'll set that.
>
> **[5:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=319)** Now we know it's in there, but let's just double check.
>
> **[5:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=322)** Let's go back to system up time and say get.
>
> **[5:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=327)** It's been up four minutes and 42 seconds.
>
> **[5:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=331)** Again, system description and here we see the IOS Software.
>
> **[5:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=337)** Then let's go back to the contact and we can see it's Roxy.
>
> **[5:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=341)** Which again, you can change if you like.
>
> **[5:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=343)** Course more advanced configuration would include access control list and other variables, but this is a simple Simple Network Management Protocol and you can see some of the variables and the Management Information Base tree and what you can get and what you can set as long as you've configured this correctly.

> [!info]- Semantic Content
>
> **Env Vars:** mib (4), snmp (4), ios (2), sntp (1)
> **UI Navigation:** go to (8), open the (1)
> **Code Keywords:** let (3), switch (1), interface (1), this. (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** go back to (2)
> **Ports:** port 161 (1)
> **Analogies:** such as (1)

#### Configure and verify security for Network Time Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=0)** - [Instructor] The concept of accurate time on a network is very important.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=5)** Syslog audits and logs events, which you can use to track problems and troubleshoot issues.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=12)** In addition, some protocols such as Kerberos require synchronized time on the network.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=19)** Periodically, I check my wall clock with a more official source here at [time.gov](https://time.gov).
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=26)** On a Cisco router, there are two types of clocks.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=30)** A hardware clock that's battery powered, and is referred to as the calendar in the IOS.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=36)** A software clock, which is the primary source for time, and is referenced as the clock in the IOS.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=43)** The software clock runs from the moment the system is up, and can be updated from a number of different sources, such as Network Time Protocol, Simple Network Time Protocol, VINES Time Service, and manual configuration using the hardware clock.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=61)** Because the software clock can be dynamically udpated, it has the potential to be more accurate than the hardware clock.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=69)** To update the software clock on an enterprise network, we can use Network Time Protocol, or NTP.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=77)** It's a great protocol that's easy to configure.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=80)** For NTP, you'll need a device that acts as the NTP server or master time keeper.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=87)** The NTP server will need to obtain the time from a valid source.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=93)** Once you have an NTP server on your network, all devices can get the time from the server.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=99)** In order to configure NTP on the device, you'll need the IP address of the NTP server, along with the authentication key and key ID.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=110)** As with any protocol, you'll want to run the latest version that your operating system supports.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=117)** If you select NTP and then a question mark, you can see what's available.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=122)** If offered, select version four.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=124)** Verify that you can reach the NTP server by doing a ping.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=128)** Errors do occur with NTP.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=130)** Sometimes it's simply due to an incorrect IP address.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=134)** And don't have too many hops from the network NTP server, or your time will not be accurate.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=141)** If possible, you can configure the master server using atomic time, which is the most accurate time.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=148)** A network administrator has resources such as the NTP pool project, where they can obtain synchronized time for their system.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=157)** I'm at this web server, and here are just some of the resources that you can see as far as NTP server related resources.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=166)** Some of them have disclaimers, and that you're not to hit their servers too often, or else it will be viewed as a denial of service attack.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=175)** But let's take a look at configuring NTP.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=178)** I've opened up Packet Tracer, and I've increased the font so you can see it a little bit easier.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=184)** Now I'm going to open up one of the samples.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=190)** I'll open up PC and Simple Network Management Protocol Router.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=196)** We're not going to do SNMP, we're actually just going to modify the layout.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=202)** I'll save this locally, so I don't disrupt the sample.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=212)** I'll just title it NTP Master.
>
> **[3:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=218)** I don't need these instructions, so we'll take those away.
>
> **[3:44](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=224)** Then we'll just stretch these out so we have a little bit more landscape.
>
> **[3:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=234)** Now you'll want to rename this router right here, so we'll say that this is the NTP Client.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=257)** And here the server is going to act as our network time protocol master.
>
> **[4:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=262)** You'll want to make sure that they have access to one another.
>
> **[4:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=266)** And now what we'll do, is go to the services.
>
> **[4:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=271)** You should be able to see services in here.
>
> **[4:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=274)** And one of the services that we're going to need is Network Time Protocol.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=280)** I'll select NTP, and the service is already on.
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=286)** But we're going to say enable, and we'll say key one.
>
> **[4:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=296)** And the password we'll put NTPCiscoPass.
>
> **[5:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=301)** Remember it's case sensitive so we'll be careful when we spell it, and check the time.
>
> **[5:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=308)** Now we'll go to the NTP client.
>
> **[5:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=312)** And let's enlarge this so you can see it.
>
> **[5:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=316)** I'll go to Exit, and let me just close this up a little so we can bring it into the center so we can see the commands a little easier.
>
> **[5:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=335)** So we'll say Show clock.
>
> **[5:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=342)** And here we see that it's March 1st, 1993.
>
> **[5:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=347)** Well we know that that's not the case, but it's because it doesn't have any reference for time.
>
> **[5:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=352)** So what we want to do is to get it to authenticate and let it be the client for the NTP master.
>
> **[6:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=361)** We need to go back into ConfigT, and we'll type NTP and a question mark.
>
> **[6:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=371)** Well now you can see what's available.
>
> **[6:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=372)** Remember, Packet Tracer is a simulation software product, so it might not have all of the options available.
>
> **[6:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=381)** But it does have enough at least to get us started.
>
> **[6:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=383)** So what we need to do is NTP Authentication Key.
>
> **[6:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=387)** You'll need to spell it out, only because it won't be able to tab because it's not sure if you want to do authenticate or authentication key.
>
> **[6:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=398)** Once you have the dash and type key, then it will allow you to complete by tabbing.
>
> **[6:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=405)** 1MD5 and then we'll put the password, NTPCiscoPass.
>
> **[6:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=415)** NTP Server, and we'll have the IP address of the server.
>
> **[7:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=427)** NTP Trusted Key 1.
>
> **[7:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=434)** And NTP Authenticate.
>
> **[7:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=443)** And Exit.
>
> **[7:28](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=448)** We'll say show clock.
>
> **[7:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=450)** And now you can see that it's updated the time because it got the time from the NTP Master.
>
> **[7:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=457)** As you can see, network time protocol is a great protocol that's easy to configure.
>
> **[7:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=463)** Once configured, all your devices can be updated and synchronized with the latest time.

> [!info]- Semantic Content
>
> **Env Vars:** ntp (25), ios (2), vines (1), snmp (1)
> **Prerequisites:** configure (4), you'll need (3)
> **Code Keywords:** let (4), require (1), case, (1)
> **UI Navigation:** go to (3)
> **Analogies:** such as (3)
> **Definitions:** is a  (2)
> **Warnings:** troubleshoot (1), be careful (1)
> **CLI Commands:** make (1)

#### Secure Copy Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=0)** - [Instructor] When transferring files, we must be mindful of the fact that unauthorized individuals could read or modify file contents.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=9)** There are a few ways to transfer files.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=12)** If you need to list directories and/or modify, rename, move, or delete files, you'll need to use file transfer protocol.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=22)** Native FTP is not secure.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=24)** To transfer files securely use secure FTP, which uses Secure Shell to handle authentication and encryption.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=34)** If you only need to transfer a file, you could use Trivial File Transfer Protocol.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=41)** For many years, network administrators would use Trivial File Transfer Protocol, or TFTP, which is a light weight file transfer protocol that uses UDP.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=53)** TFTP is an unauthenticated, unsecured plaintext file transfer method.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=61)** A large configuration file could send a lot of small packets across the network.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=67)** Let's take a look at a TFTP file transfer with CloudShark.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=72)** I'm in CloudShark, which is a free protocol analysis tool that's online.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=77)** You can follow along if you like, just follow the link.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=81)** Here's it's just a simple TFTP capture.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=85)** Now, this wasn't contiguous, it was just simply a series of small captures, and down below, you can see the plaintext entry.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=95)** But, I'll go to analysis tool and follow stream.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=99)** And here you see the information about the device.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=102)** The configuration, it's just a device name, that's coming across using TFTP.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=109)** In addition, we see the length, which they're small packets.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=113)** The method of choice is Secure Copy Protocol.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=116)** Secure Copy Protocol uses Secure Shell for data transport and creates a tunnel between the client and the server.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=125)** Secure Copy Protocol transfers file via the shell and relies on triple A, so you must configure authentication, authorization, and accounting.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=136)** To configure Secure Copy Protocol on a router, we'll use the following commands.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=142)** First, triple A must be configured.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=144)** Here we see triple A new model and authentication, authorization, and then username and password, and then we'll want to configure Secure Shell.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=155)** Authentication retries three.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=158)** And one more thing, you'll need a valid host name, not router, and domain name and then you can generate your rsa keys, crypto key generate rsa.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=169)** And then finally, enable Secure Copy, Secure Copy Protocol, server enable.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=175)** To transfer files securely, use Secure Copy Protocol.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=179)** Secure Copy Protocol uses Secure Shell for data transport, and creates a tunnel between the client and the server.

> [!info]- Semantic Content
>
> **Env Vars:** tftp (5), ftp (2), udp (1)
> **Prerequisites:** configure (3), you'll need (2)
> **Code Keywords:** delete (1), let (1), finally, (1)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. AAA Concepts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### AAA security
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=0)** - [Instructor] Network security threats can gain access to the network and violate the confidentiality of data, alter the integrity of the network, or disrupt the availability of resources.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=14)** Access control is a framework comprised of methods and logical controls to ensure confidentiality, integrity, and availability.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=24)** The goal is to allow a subject, which is the entity that requests access to a resource, to interact with objects, which is the resource on the network.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=34)** We grant permissions in order to perform certain duties, complete operations, or access applications and files.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=43)** To ensure compliance with the access controls and policies, we employ auditing, which detects and records and logs events such as a user attempting to create, access, or delete files and folders.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=58)** All access control models should follow the least privilege rule, which states, Assign only the privileges needed to a program, process, or privileged user of a system for the shortest period necessary, and in as small a domain as possible to complete a task without hindrance.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=80)** With a wide range of data available on the network, including the Internet, controls are put into place to allow or disallow access to objects, implement a layered approach according to the needs of an organization.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=95)** Considerations include what level of security is required and also the impact of the security measures.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=103)** Access control can be enforced in one of three main categories: Administrative, by enforcing rules through policies, Logical, by enforcing rules through access controls, and Physical, by limiting physical access to the hardware.
>
> **[1:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=119)** Authentication, authorization, and accounting or Triple A security is a commonly accepted model to control access and defend the infrastructure, ensure data privacy, and adhere to regulatory compliance.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=135)** Authentication asks the question, "Who are you?
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=139)** "Provide proof."
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=140)** Authorization asks, "Now that I know who you are, "let's see what you're allowed to do while you're here."
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=148)** Accounting monitors what has been done.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=151)** Core components of Triple A include the following: A client is the person, device, or process attempting to authenticate and gain access to the network.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=161)** The policy enforcement point is the guard that checks with the policy decision point and grants access once authenticated.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=170)** The policy enforcement point can be a firewall, gateway, or switch.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=175)** The policy decision point or AAA server decides whether or not to grant access based on available permissions and security policies.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=186)** A policy information point holds information on all clients that access the network.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=193)** And monitoring and reporting systems gather information and statistics and can alert the administrator of activity that's outside of the range of acceptable activity.
>
> **[3:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=204)** Triple A Deployment can be local or decentralized or server-based or central.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=211)** Server-based access can use either RADIUS or TACACS+ authentication.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=216)** And Cisco has options to implement AAA that includes Secure Access Control System and Cisco's Identity Services Engine.

> [!info]- Semantic Content
>
> **Env Vars:** aaa (2), radius (1), tacacs (1)
> **Code Keywords:** delete (1), let (1), switch (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=0)** - [Instructor] Authentication confirms the identity of a process, system, or person.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=6)** Authenticate everyone and everything who accesses data in some manner.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=12)** When authenticating into a system, I can use one of three things.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=16)** What you know, such as a password, passphrase, PIN, or even a lock combination.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=24)** What you have in your hand, such as a smart card, a token, or even a dongle.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=30)** A smart card is a small device that contains a microchip and has data storage capabilities.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=37)** It can store several forms of identification, such as a fingerprint and a password, and it's available in several form factors, such as cards, key fobs, and USB tokens.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=50)** And what you are.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=52)** Well, that will be in the form of a biometric, such as a fingerprint, iris recognition, or voice recognition.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=59)** Biometrics authenticate by using an individual's unique attributes or behavior, and recognize an individual by matching the captured biometric with a stored biometric template in the system.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=74)** Of the three, the password is simple and inexpensive, and even with all the technologies we use today, the password will most likely continue to be used in some form.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=87)** When we log into a system, you present your user name stating who I am.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=94)** The password verifies who you say you are.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=97)** Then you're allowed to gain access into the system.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=100)** A password is simply a sequence of characters.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=104)** Passwords are stored as a hash value.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=108)** When you enter a password, a hash is generated, and then compared to the stored value.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=114)** If it's a one to one match, you'll be authenticated.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=118)** If the hash values do not match, the password you entered will be rejected.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=124)** Rainbow tables are a database of many hashed passwords.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=128)** Hackers try to crack passwords using rainbow tables.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=133)** Salting the password with a random string can protect against a rainbow table attack.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=138)** However, you still should create complex passwords.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=143)** Let's check a weak password against a complex password when we hash them.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=150)** I'm at this website, MD5 Hash Generator, and I'm going to put a quick password that I'm going to make up that's very simple, tiger.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=163)** Now we'll generate this.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=165)** Now I'll take the hash and we'll go into CrackStation, and I'll put my captcha.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=185)** And there you can see the result.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=187)** It cracked it very quickly, it's tiger.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=190)** Well, now I want to create another hash.
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=194)** Before you try to crack this, don't.
>
> **[3:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=197)** Know we'll generate it, it's very complex, and it's a passphrase, which is a good thing to use instead of a password.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=205)** So there's your hash, and I'll copy that.
>
> **[3:28](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=208)** Now we'll go back in and paste this really long passphrase, and I'll put my captcha.
>
> **[3:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=223)** And as we can see, it's not found.
>
> **[3:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=226)** Most likely, we will continue to use passwords in some form for a long time, so as you can see, the best defense is to create complex passwords.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), match, (2), let (1), this. (1), this, (1)
> **Analogies:** such as (5)
> **Env Vars:** pin (1), usb (1), md5 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=0)** - [Instructor] Once a user authenticates into the network, the next step is authorization.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=6)** The concept of authorization is saying what the entity is allowed to do once they're on the network.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=13)** If the user is not authorized to access a resource, such as drive or file, there may be a notification that makes them aware of that fact.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=24)** It may be because they didn't enter the correct password, or they may be denied access because of policy.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=32)** After authenticating, the object or device may have to check with a directory service, which allows information to be stored, classified and retrieved.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=43)** To see what polices are in place, that will either allow or deny access.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=49)** Microsoft's directory is called Active Directory, which is a database of objects that stores, organizes and enables access to other objects.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=61)** Active Directory provides essential network services, such as DNS and Kerberos-based authentication.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=69)** Once the system grants access to the network drives, the client may not have authorization to access any files or folders.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=78)** That will depend on file and folder permissions, which can restrict or allow a user, to modify, list folder contents, read or write.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=89)** If someone were to gain unauthorized access to a device, the first thing they should see is a notification banner, which is like a no trespassing sign.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=101)** In Cisco IOS, a number of banner options are available, including banner message of the day, banner login, banner incoming and banner exec.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=113)** An example would be the following, using strong language and let those that are not authorized, they're not welcome.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=122)** Unauthorized access to this device is prohibited.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=126)** You must have explicit authorized permission to access or configure this device.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=132)** Unauthorized attempts and actions to access or use this system may results in civil and or criminal penalties.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=140)** All activities performed on this device are logged and monitored.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=145)** Authorization states what an entity is allowed to do, once they're on a network.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=151)** Intrusion detection and intrusion prevention should pick up unauthorized behavior and block potential malicious activity.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** dns (1), ios (1)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Accounting
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=0)** - [Instructor] To gain access into a system, the user authenticates by providing a username and password.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=7)** Authorization determines whether or not they're allowed on the network and what they can access.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=13)** And Accounting logs the session.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=15)** Accounting and Auditing detects and records or logs events such as a user attempting to create, access, or delete files and folders along with non-security related events, such as starting or stopping a service.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=32)** Auditing is done for a variety of reasons as it is a means to monitor what users and processes on the system are doing.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=41)** Auditing can also alert the administrator to unusual or suspicious activities that suggest further investigation.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=49)** Most operating systems, network services, and devices offer logging capabilities.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=55)** Keep in mind, logging occurs after an event.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=59)** However, it's a critical component in a comprehensive security plan.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=63)** Capturing data in the logs and then carefully reviewing the logs is essential for intrusion detection and forensics investigations.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=72)** On any system there are multiple types of auditing and logging methods.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=76)** Each organization should determine their own process of auditing and which logging capabilities should be activated as to what to log, how long to keep the logs, where to store the logs, and what security events are to be reported to the network administrator.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=94)** All operating systems should be set up to generate access control logs whenever a user is trying to access resources without proper privileges.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=104)** In addition to configuring logging, test to ensure each managed device is generating logs.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=110)** At any slice of time, a lot of events take place and can fill the log files.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=117)** Generating log files can have a negative effect on system performance.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=121)** In order to minimize resource overhead, the administrator can do the following: Limit data collected in logs and set thresholds, or clipping levels, for when to start collecting data.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=134)** Remote users have various ways to gain access to the corporate network.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=138)** Two protocols used to offer centralized authentication, authorization, and accounting for hosts to connect to a network and use network services are RADIUS, or Remote Authentication Dial-In User Service, and TACACS+, or Terminal Access-Controller Access Control System.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=158)** Both RADIUS and TACACS+ servers respond to queries from VPN clients, wireless access points, routers, and switches.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=167)** All remote access systems, along with firewalls, proxies, and all edge devices should be configured for logging to detect failed and successful intrusion attempts and to initiate alerts for when further investigation is needed.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=183)** Logging can monitor an attacker's activities and help in post-event investigations by providing evidence in case of legal proceedings.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=193)** Store and secure log files in case a follow-up investigation is required after a suspected breach.
>
> **[3:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=200)** When conducting an investigation, logs can provide supplementary data relative to specific events and can trace events back to originating users.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=211)** Logging can be very powerful.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=213)** Ensure procedures and tools are in place to process and analyze the log files and review alert notifications.

> [!info]- Semantic Content
>
> **Env Vars:** radius (2), tacacs (2), vpn (1)
> **Analogies:** such as (2)
> **Code Keywords:** delete (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. RADIUS and TACACS+

> [[#Table of Contents|↑ Back to Table of Contents]]

#### RADIUS and TACACS+ authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=0)** - [Instructor] Access Control can either be decentralized or centralized.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=5)** Decentralized access control gives control the access to the users who are closer to the resource.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=12)** Decentralized access control however, has no method for consistent control.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=18)** Centralized access control gives a single centralized entity the ability to oversee access to the corporate resources and provides a consistent and uniform method of controlling access.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=33)** One of the methods we can use for access control, when having users from the outside come in is RADIUS.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=41)** RADIUS is remote authentication dial-in user service.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=47)** RADIUS provides authentication, authorization, and accounting.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=53)** And is what is considered a client-server model whereby a network access server is a client of the RADIUS server.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=63)** RADIUS supports a number of Flexible Authentication Options.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=68)** Challenge-Handshake Authentication Protocol or CHAP is a challenge-response authentication method.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=75)** Password Authentication Protocol or PAP is similar to a normal login procedure and Extensible Authentication Protocol or EAP is used in point-to-point and Wi-Fi networks.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=90)** 802.1X is Port-based authentication that provides Network Access Control.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=97)** Switches and wireless access points use 802.1X to authenticate clients that want to join a LAN.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=105)** The protocol in 802.1X is EAPOL or Extensible Authentication Protocol encapsulation over LANs.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=115)** When using 802.1X you'll need a RADIUS server for authentication.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=120)** RADIUS insures secure communications.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=123)** As any passwords that are sent between the client and RADIUS server are encrypted.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=129)** Let's step through this process.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=131)** We see that in using RADIUS we have a remote client that would like to gain access to the internal network.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=140)** The remote client goes through the internet and first hits the Network Access Server, which is a Client of the RADIUS server.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=149)** The RADIUS server checks the User Accounts with the username and password given by the user.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=155)** It passes the information back to the access server and then acts on the response received.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=162)** The user is either allowed or denied access to the corporate network.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=168)** Similar to RADIUS is TACACS+, or Terminal Access Controller Access Control System.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=176)** This provides access control for routers, network access servers, and other networked computing devices.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=184)** TACACS+ is an authentication program used on UNIX and Linux systems.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=190)** It's an extension of the RADIUS protocol that integrates well with Cisco devices.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=196)** It uses TCP, not UDP. And other benefits is that it separates authentication, authorization, and accounting.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=206)** Both RADIUS and TACACS+ provide authentication, authorization, and accounting.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=212)** As we can see, there are a couple of differences.
>
> **[3:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=215)** For Triple A, RADIUS combines authentication, authorization, and accounting.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=222)** And TACACS separates each of the authentication, authorization, and accounting functions.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=229)** For the Transport Protocol, RADIUS uses UDP, and TACACS+ uses TCP.
>
> **[3:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=237)** For Encryption, with RADIUS the password is encrypted, and with TACACS+ the entire payload is encrypted.
>
> **[4:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=246)** RADIUS and TACACS+ provide authentication, authorization, and accounting.
>
> **[4:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=253)** TACACS+ is an extension of the RADIUS protocol that integrates well with Cisco devices.

> [!info]- Semantic Content
>
> **Env Vars:** radius (19), tacacs (8), tcp (2), udp (2), chap (1)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** similar to (2)
> **Code Keywords:** let (1)
> **Tools:** terminal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Using TACACS+
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=0)** - [Instructor] I'm in Packet Tracer and here we'll see a short example of AAA security using TACACS+.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=8)** We'll go up to File, and then Open Samples.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=13)** Once you've downloaded Packet Tracer, you'll have these samples available to use.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=20)** Go to Router, and AAA and the plain AAA TACACS Server.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=29)** We'll slide this over, and so you'd retain this, I'll save this as the TACACS2 Server.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=41)** I'll save that locally so you retain your samples so if you want to go back in and modify or play with them again.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=50)** Now we'll just pull this up here and just show you what was going on.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=54)** We have a router, we have a switch, we have a server, and here we want to make sure that everything's talking to one another.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=63)** And the router itself is configured to use AAA Accounting.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=67)** Now one of the things is you'll see that it's configured to provide authentication.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=73)** And what you're going to see is the notification in accounting that takes place when we do some modification we just log in, it will let us know that we logged in.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=84)** So what you're going to do is open the TACACS server, and I'll just bring this here so we can see it, and we're going to go to Desktop and AAA Accounting, and here we see the TACACS+ Accounting.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=102)** And there's nothing in it 'cause we haven't done anything yet.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=106)** I'll close this up.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=108)** Now again we know there's connectivity, and what we're going to go into is R1 or Router 1.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=117)** I did make the font larger so you can see this a little bit easier.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=122)** Here you can see the user name, user and password Sisco.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=127)** It will ask for that so I'll type user, and Sisco.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=136)** And put the password in again, and we'll go into config T.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=146)** And you can do Make Modifications, whatever you'd like to do.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=150)** I'm just going to exit back out.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=153)** But now let's just go back, and I'll minimize this, let's go back in and look at the server, and see the accounting.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=163)** So we go back in AAA Accounting, and you can see that the notification that the user name user did go into the router.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=177)** So that's just a brief example of seeing TACACS+ Accounting.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=181)** And on a production network of course, we'd see many, many more entries.

> [!info]- Semantic Content
>
> **Env Vars:** aaa (6), tacacs (5), tacacs2 (1)
> **Code Keywords:** let (3), this, (2), switch (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), open the (1)
> **Speakers:** - [instructor] (1)

#### Enforcing security with AAA
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=0)** - [Instructor] Dealing with AAA Security can be challenging.
>
> **[0:04](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=4)** In this segment, we'll learn how the Cisco Identity Service Engine provides support for RADIUS and TACACS+ to seamlessly implement AAA security.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=15)** Because of the complexity of securing the network using AAA security, many vendors help streamline the process by offering an all-in-one solution.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=27)** Cisco's Identity Service Engine helps manage AAA security by providing centralized control over network access and enforcing security policies.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=39)** I'm here at this site where you can learn more about ICE.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=44)** ICE works with multiple types of users and devices that want to join the network, including LAN and IoT devices, along with wireless and VPN users.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=57)** Once users and devices have gained access and authenticated into the network, ICE monitors and logs all activities.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=66)** Cisco's ICE helps manage AAA security using RADIUS and TACACS+ protocols by acting as a central policy decision point for network access.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=79)** The protocols work in the following manner.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=82)** RADIUS is primarily used for network access control for Wi-Fi and VPN users by authenticating end users and devices.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=93)** TACACS+ is often used for administrative access to network devices, such as routers, switches, or firewalls.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=103)** So, now let's step through an example of how Cisco's ICE works with each protocol in the context of AAA.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=112)** The first step is authentication, where the client requests access to the network, and will log in using either credentials, such as a username and password, certificates, or multi-factor authentication.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=127)** The authentication process is usually where Cisco's ICE acts as the RADIUS server and communicates with the network device, such as a switch or a wireless access point.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=140)** The process will verify the user's identity and credentials against a directory service, such as Active Directory or LDAP to ensure that only legitimate users and devices gain access.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=155)** Once the client is authenticated, the RADIUS server then checks the user account to see their permissions.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=162)** If the user has the proper rights and access to network resources, it then grants the user access to the network.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=172)** Cisco ICE provides accounting by keeping logs of user and device activities across the network using RADIUS.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=181)** It logs detailed information on events, such as login and logout times, bandwidth usage and specific action taken by users.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=193)** This allows organizations to monitor suspicious activity and provide audit trails for compliance purposes.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=201)** Dealing with AAA security can be challenging.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=205)** The Cisco Identity Service Engine is an appliance that provides support for RADIUS and TACACS+ to seamlessly provide AAA security.

> [!info]- Semantic Content
>
> **Env Vars:** aaa (8), radius (7), ice (7), tacacs (4), vpn (2)
> **Analogies:** such as (5)
> **Code Keywords:** let (1), switch (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. BYOD

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Managing a BYOD infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=0)** - [Narrator] Bring your own device includes smartphones, laptops, tablets, and gaming devices.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=7)** In this segment, we'll learn how to manage a bring-your-own-device environment using Cisco Meraki to keep data and networks secure.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=17)** Despite the fact that client-owned devices can pose a risk to the corporate environment, many companies allow and even encourage their use.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=27)** By far, the most common bring-your-own device is the smartphone, but there are many other devices employees want to bring in and tether to the network.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=37)** Now, the concept of employee-owned devices that are not owned by the company is called shadow IT.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=45)** Network administrators must address bring your own device.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=49)** Companies today are accepting bring your own device into the workplace, which continues to grow at an accelerated rate.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=57)** In fact, studies show that many employees have two or more mobile devices connected to the network at any given time.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=66)** Managers expect employees to be always available, and users feel that mobile devices help productivity, which helps overall satisfaction in the workplace.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=78)** In order to manage bring your own device, there are several options out there.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=83)** I wanted to talk about the Cisco Meraki.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=86)** So, this is going to provide device-based security policies.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=90)** In addition, it's going to help built-in network access control and mobile device management.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=97)** We managed these devices so that they do not pose a risk.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=103)** Now, the Meraki even allows the network administrator to see all the devices on the network where they can lock down and even erase the devices, so I wanted to show you some of the options.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=116)** Now, one of the things you can do is say, Get a Demo, and you can go to this dashboard, and then if you sign up, then you'll be able to get a simple overview of the Meraki.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=128)** And once you open it, there is a video which you can go through, and it shows you what's available, but within it, you can see all of the options in making sure it has total visibility of the network, and this is very powerful.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=142)** Now, over here, you can see some of the policies, Data Loss Prevention, Zero Trust Access, Endpoint Posture, and we'll select that, and it'll come up with a policy.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=153)** Now, this is, again, just a demo, but you can see that once you get that, you can add your own policies.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=160)** We'll go back to the data center for all networks, and then you can see Network-Wide, all the clients and the organizations, again, visibility across the entire network.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=171)** Now, within the Meraki, within this application itself, you can see that you can enable device restrictions, and allow or disallow device functionality, and then automatically apply policies by device and type, and this basically locks out certain applications from your network that might pose a risk.
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=194)** You can protect the LAN resources by enabling firewall capabilities, protect against malware, and actually analyze your bring-your-own-device activities within automatic reporting, and again, this is sometimes for compliance reasons.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=210)** If I select Manage Clients, again, this could give us an option to take a look at who is involved in the network, Secure Connect, and go to Security Activity.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=222)** And then once you get in, you would be in the Cisco umbrella, and you'd sign in and have a better visualization of your own network.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=229)** In addition to having visualization across the entire network, for successfully implementing a bring-your-own-device deployment, user education is also very important.
>
> **[4:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=243)** Now, in addition to the job that the network administrator must do, we want to talk to our users.
>
> **[4:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=250)** Essentially, we want to emphasize what will not be tolerated on our network.
>
> **[4:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=256)** For example, your device must be safe and free of malware.
>
> **[4:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=262)** Do not jailbreak or root the device.
>
> **[4:26](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=266)** Do not install apps that can compromise the data or network.
>
> **[4:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=270)** And you'll need to teach them to learn a little bit more about apps, and read the end-user license agreement, and then also do some research, and when in doubt, simply ask.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=280)** Bring your own device is a part of today's corporate environment, so with a proactive approach, companies can keep the data and the network secure.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (1), you'll need (1)
> **Code Keywords:** type, (1)
> **Env Vars:** lan (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Mobile device management (MDM)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=0)** - [Narrator] In today's networks, bring your own device is the new normal.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=5)** Employees bring and use their mobile devices and network administrators face the challenge of keeping the network secure and easily apply network specific policies.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=17)** Today's mobile devices are essentially a small, portable, always on computer.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=22)** Businesses allow mobile devices as they have been proven to increase employee productivity.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=29)** However, along with the benefits come challenges.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=33)** Cisco's Meraki addresses the challenge of mobile device management.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=38)** I'm at Cisco's Meraki mobile device management site where you can see how the network administrator can address many of the security issues they face when managing mobile devices.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=51)** Meraki can provide device-based security policies, network access control, and mobile device management.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=59)** I'll scroll down so you can take a look at some of the benefits.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=63)** A unified multi-platform device management, security policy enforcement,
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=77)** and ability to apply policies by device type.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=81)** So you can see that the network administrator can have granular control over the devices on the network.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=88)** However, along with network administration, user education is very important.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=95)** Because of an always on connection and the amount of time spent on mobile devices, users should take precaution to secure the device.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=104)** Mobile devices are small and they can easily be lost or stolen, passwords can be compromised.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=111)** A couple of things that you should keep in mind as far as mobile device best practices include: keep software updated, patches and updates reduce the threats from malware attacks, secure your phone to slow someone down from gaining access to your information you should use a passphrase or a password, use a biometric such as a fingerprint if available and set idle timeout to lock the phone when not in use.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=142)** Beware of apps. Don't download every app you see because apps can expose sensitive data such as call history and contacts.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=151)** Apps can perform suspicious action such as recording conversation.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=156)** They can also disable anti-malware.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=159)** Only obtain apps from trusted sources, such as Apple iTunes, Google Play, or Amazon App Store for Android.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=168)** This helps prevent malware which is often distributed via apps.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=173)** Also, once you download, you'll want to review any privacy policies and understand what data the app wants to access, such as your location, social media information, before you download and install the app.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=188)** With privacy, only give your cell phone number to someone you know.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=193)** Don't give other people's numbers away without their permission.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=196)** Disable the geotagging feature so they don't always know where you are at any given time.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=202)** And don't respond to numbers that you don't know.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=205)** You should know how to block calls.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=207)** Either all incoming calls or individual names and numbers.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=211)** Vishing is another name for voice over IP phishing.
>
> **[3:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=215)** It's just like regular phishing in that an attacker will call the party and request confidential information.
>
> **[3:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=223)** Don't root or jailbreak your phone.
>
> **[3:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=225)** This voids the manufacturer's warranty and it may be in violation of corporate policy.
>
> **[3:51](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=231)** Use good web sense. Use a secure connection while shopping or banking.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=236)** Enroll in something such as Find my iPhone or equivalent service if it isn't supported at your workplace.
>
> **[4:03](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=243)** And you should use caution when connecting.
>
> **[4:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=246)** Avoid unsecured or unprotected networks.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=249)** Bring your own device is the new normal.
>
> **[4:12](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=252)** Employees bring and use their mobile devices.
>
> **[4:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=256)** Along with applying device specific policies, user education and safe mobile device practices can help keep the network secure.

> [!info]- Semantic Content
>
> **Analogies:** such as (6), just like (1)
> **Code Keywords:** type. (1), include: (1)
> **Code Identifiers:** itunes (1), iphone (1)
> **Warnings:** keep in mind (1), caution (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Securely integrating IoT devices
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=0)** - [Instructor] The Internet of Things offers numerous opportunities for consumers, businesses, and governments.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=7)** In this segment, we'll learn how to safely integrate IOT devices into the network using a zero trust approach.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=16)** The Internet of Things is a collection of tens of billions of devices attached to the internet that collect and exchange data using nodes, sensors, and controllers.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=29)** For most of the early growth in the IoT, we didn't incorporate any traditional security methods such as firewalls and intrusion detection systems.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=39)** The belief was these tiny devices were not an attractive target to hackers, or they couldn't possibly be susceptible to an attack.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=49)** However, many IoT devices are vulnerable as they're small, have minimal processing, and are generally not able to defend themselves.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=60)** As a result, many have moved away from the traditional approach and have adopted a zero trust model.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=68)** Zero trust is an approach to cybersecurity that assumes no absolute trust for users, devices, or applications regardless of location or level of access.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=83)** A zero trust framework helps reduce the risk of a malicious actor gaining access and moving through the network.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=91)** A zero trust model spans across networks, applications, and all environments.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=99)** Using this model helps secure access from anyone or anything that might be able to access the network.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=108)** I'm here at First Data, and I'll scroll down, where we can see a visual of zero trust using the Cisco model, and I've opened it in a new tab.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=120)** Now, when using a zero trust approach any place where an access control decision is required should be considered a perimeter.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=130)** The zero trust concept is comprised of three pillars that include workforce, workloads, and workplace.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=139)** So let's talk about each one.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=142)** Zero trust for the workplace involves anyone who can access organizational resources using either their personal or corporate-managed devices.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=153)** Zero trust restricts access so that only users with the appropriate permissions and secure devices can access corporate resources regardless of their location.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=166)** With zero trust for the workloads this applies to applications that are running in the cloud, or data centers, or other virtualized environments that need to interact with one another.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=180)** In this case, zero trust focuses on secure access when an application programming interface, or API, microservice, or container is accessing a database within an application.
>
> **[3:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=195)** And zero trust for the workplace focuses on securing access for all devices that connect to the enterprise network.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=205)** And those devices include the Internet of Things, endpoints, physical and virtual servers, and printers.
>
> **[3:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=214)** The IoT offers numerous opportunities for consumers, businesses, and governments.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=220)** To ensure safe integration within the network, use a zero trust framework that uses the approach never trust, always verify to prevent unauthorized access of network resources.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), interface (1)
> **Env Vars:** iot (1), api (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=0)** - [Instructor] Thank you for watching.
>
> **[0:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=2)** In this course, I covered the various elements involved in securely accessing resources.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=9)** Including accessing devices through either in-band, or out-of-band access.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=15)** As well as network management protocols, such as network time protocol, secure copy protocol, and simple network management protocol.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=25)** Additionally, I reviewed AAA security, including authentication, authorization, and accounting.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=32)** I compared RADIUS and TACACs authentication, along with the extended environment network administrators manage, when dealing with Bring Your Own Device, along with the integration of the Internet of Things.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=47)** If you're interested in learning more, please check out the library, where we add new courses all the time.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=55)** If you're interested in learning about packet analysis, please check out my courses on Wireshark.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=62)** My course, "[[Introduction to Pen Testing for Cybersecurity Professionals]]", will be well worth your time.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=70)** You might also want to see what my colleague, Malcolm Shore, has for you on his homepage.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=77)** Keep learning.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=78)** I hope to see you again, soon.

> [!info]- Semantic Content
>
> **Env Vars:** aaa (1), radius (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Cisco Networking

## Path Context

### In [[Cisco Network Security- Safeguarding Network Integrity and Data]]
← [[Cisco Network Security Core Security Concepts]] | **2 of 7** | [[Cisco Network Security- VPN]] →

## Appears In

- [[Cisco Network Security- Safeguarding Network Integrity and Data]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Cisco Networking
- [[Cisco Networking Foundations- Switching and Routing]] — Cisco Networking
- [[Cisco Networking Foundations- IP Addressing]] — Cisco Networking
- [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] — Cisco Networking
- [[Cisco Network Security- Content and Endpoint Security]] — Cisco Networking

---

[↑ Back to top](#)