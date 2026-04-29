---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-vpn-17334607
url: "https://www.linkedin.com/learning/cisco-network-security-vpn-17334607"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 2/5/2025
learners: 14955
skills:
  - Cisco VPN
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQF31SgzrqPg8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670433939935?e=2147483647&amp;v=beta&amp;t=z3ERHTsJr7RrZPTKQ3Uxn3crKUJraOKL0Cz--0W4zFI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Cisco Network Security- Safeguarding Network Integrity and Data]]'
prev_courses:
  - '[[Cisco Network Security- Secure Access]]'
next_courses:
  - '[[Cisco Network Security- Secure Routing and Switching]]'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":3,"total":7,"prev":"Cisco Network Security- Secure Access","next":"Cisco Network Security- Secure Routing and Switching"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/cisco-vpn
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20VPN.md)

![Cisco Network Security: VPN](https://media.licdn.com/dms/image/v2/C4D0DAQF31SgzrqPg8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670433939935?e=2147483647&amp;v=beta&amp;t=z3ERHTsJr7RrZPTKQ3Uxn3crKUJraOKL0Cz--0W4zFI)

# Cisco Network Security: VPN

> Suggested prerequisites Cisco Certified Network Administrator (CCNA) training and/or knowledge of networking fundamentals, devices, cables, and topologies Projects Practice core networking skills using self-grading examples from Packet Tracer. Configure a clientless SSL VPN that allows a remote user to securely access predefined corporate resources from any location using a browser. Configure basi

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607) | 1h 45m | Intermediate | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - Securing data in transit
  - Discovering resources
  - Using Packet Tracer
  - Enrolling in Cisco Network Academy
- [**1. Understand VPN Concepts**](#1-understand-vpn-concepts) (7 videos)
  - Describing a VPN
  - Evaluating types of VPNs
  - Recognizing VPN topologies
  - Comparing the main types of VPNs
  - Dissecting VPN components
  - Discovering the Cisco ASA
  - Using the Cisco ASDM
- [**2. Discover IP Security (IPsec)**](#2-discover-ip-security-ipsec) (5 videos)
  - Summarizing IPsec
  - Reviewing IPsec components
  - Using the IPsec AH
  - Outlining the IPsec ESP
  - Evaluating operating modes
- [**3. Configure a VPN**](#3-configure-a-vpn) (4 videos)
  - Connecting with an always-on VPN
  - Comparing hairpin vs. split tunnel
  - Translating the network address
  - Traversing through a NAT device
- [**4. Examine a Remote Access VPN**](#4-examine-a-remote-access-vpn) (4 videos)
  - Challenge: Clientless SSL VPN
  - Solution: Clientless SSL VPN
  - Employing an AnyConnect SSL VPN
  - Assessing endpoint posture
- [**5. Investigate a Site-to-Site VPN**](#5-investigate-a-site-to-site-vpn) (4 videos)
  - Ensuring Perfect Forward Secrecy
  - Setting up an IPsec site-to-site VPN
  - Challenge: Configure a site-to-site VPN
  - Solution: Configure a site-to-site VPN
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Securing data in transit
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=0)** - [Lisa] In today's complex world corporate network boundaries are blurred.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=5)** Virtual private networks provide a way for remote workers and sales staff to communicate with the internal network over and insecure public network.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=17)** In this course, I'll cover VPN concepts and outline how they provide confidentiality, integrity and authentication.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=26)** I'll review the various types of VPNs along with the different choices that include IP SEC, SSH and SSL VPNs.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=37)** I'll cover the framework of IP SEC and the components and I'll discuss the various types of configuration options such as Hairpin, always on and that traversal and we'll learn how to configure a remote access and site to site VPN.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=56)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=60)** I am super excited to bring you this series on CCNA network security and this section on VPN technology so that you can improve your skills and configuration and maintenance of Cisco devices.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=75)** Are you ready?
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=76)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (3), sec (2), ssh (1), ssl (1), ccna (1)
> **Code Keywords:** private (1), public (1), super (1), let (1)
> **CLI Commands:** ssh (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [lisa] (1)

#### Discovering resources
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=0)** - [Narrator] This course is an intermediate level course for network administrators, engineers, managers, students and anyone with an interest in learning more about Cisco Network Security.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=14)** Participants should have a solid knowledge of networking fundamentals, devices, cables, along with various topologies, and have completed CCNA training prior to starting this course.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=28)** I cover a lot of information but I provided some files for you.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=33)** Go to the exercise file on the welcome screen where you will see the following.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=39)** Packet tracer files that we will use in the challenge exercises and a challenge and hyperlinks document.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=48)** So you can follow along, I included the links to the resources that I reference throughout the course.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=55)** And then during selected segments, I'll assess your knowledge by using the following icon with a question from the video.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=63)** Use the document to write out your responses for that question.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=67)** You'll also find a challenge question for each of the segments.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=72)** So sharpen your pencil and let's start the learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Env Vars:** ccna (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Using Packet Tracer
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=1)** - [Instructor] During this course, I'll demonstrate some of the concepts using Packet Tracer, an application made available through Cisco Networking Academy.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=11)** Packet Tracer lets us configure common networking equipment.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=15)** In this segment, we'll take a brief look at Packet Tracer so you can navigate the interface more confidently.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=24)** Each time you launch Packet Tracer, it will make you re-authenticate with Cisco Networking Academy.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=31)** And then once done, you can use the app.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=35)** I've opened up Packet Tracer so we can explore the interface.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=39)** Yours might look a little different, but at the top we're going to see some common menu choices.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=45)** And those include, File, Edit, Options, and I'll select Preferences.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=52)** And here what I commonly do is change the font, and that's just to modify the size of the application and possibly the command line interface.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=62)** But there's lots you can do to personalize your own interface.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=67)** View, where you can zoom in or zoom out, or go to specific views.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=73)** Tools.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=74)** Extensions, and there you see the Activity Wizard.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=79)** Now this is where you can build your own activities, and this is commonly used by instructors, but of course you can do it yourself.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=89)** The Window and, of course, Help.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=93)** Now in the center, this blank white space is the logical drawing canvas.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=98)** Now of course there are pre-made Packet Tracer activities that instructors use for assessments with students, but you can easily build a simple network and practice configuration on your own.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=113)** Now in the lower left-hand corner, this is where you can add certain devices.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=117)** So if you just click on, for example, Network Devices, you can see a nice selection.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=123)** And when you find one you like, you can just pull it up.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=128)** Now you can also rename it, and we can put R1, and then we can select some other devices.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=137)** Here are some end devices, and there's a nice selection here.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=141)** Components.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=144)** And connections.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=146)** And there's a nice selection of connections, for example, Console, Copper Straight Through, Cross-Over, Fiber, and many others.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=156)** Here's Miscellaneous, and Multiuser Connection.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=162)** Now when you're done, and if you don't want that device, and I just click on it and it'll open it, but really I just want to delete it.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=168)** So I'll just hit Delete.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=170)** And it says, "Do you really want to delete R1?"
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=174)** And I say Delete.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=176)** And then once done, I'll go back to the Select tool, and now we'll go over to the lower right-hand corner.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=182)** Now on the right-hand side, we'll see the Realtime and Simulation bar.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=187)** Now, I'll most likely be in Realtime, but you can go into Simulation if you want to.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=193)** And in some courses we may do this.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=196)** So I'll select Simulation.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=199)** Now this is where we can see the status of a packet traveling from one device to another.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=205)** It's like a packet analysis tool built into Packet Tracer.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=210)** And I'll go back to Realtime.
>
> **[3:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=213)** Well, now there's also some nice pre-made samples that I'll be using throughout the course.
>
> **[3:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=219)** Let's take a look.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=220)** I'll go to File, and Open Samples.
>
> **[3:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=224)** It'll warn you that, "Any unsafe changes will be lost.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=227)** Do you want to save your network?"
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=229)** And I'll say No.
>
> **[3:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=231)** And then you'll see the saves.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=233)** And there are different categories.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=236)** I'll select Cybersecurity, and then I'll go to AAA, and then I'll select Simple Authentication, and then I'll open it.
>
> **[4:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=246)** Now, once it's open, you can move the instructions over.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=249)** But what it will have you do is just one simple task so you get a feel for how something's supposed to work.
>
> **[4:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=258)** Cisco Academy offers a tutorial.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=260)** If you haven't already taken it, or it's been a while since you've used Packet Tracer, it's well worth your time.
>
> **[4:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=268)** I know you'll enjoy working with Packet Tracer on my course and any of the CCNA courses in the library.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), delete (4), include, (1), this. (1), let (1)
> **UI Navigation:** go to (3), click on (2)
> **Analogies:** for example (2), it's like (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** aaa (1), ccna (1)
> **Cross-References:** go back to (2)
> **Tools:** command line (1)
> **Prerequisites:** configure (1)

#### Enrolling in Cisco Network Academy
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=0)** - [Instructor] Cisco developed Packet Tracer in order for students to have an interactive way to practice for CCNA exams.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=9)** In this segment, I'll show you how you can download your own copy of Packet Tracer from Cisco Network Academy.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=18)** If it's been a while since you had CCNA, you'll want to check out the Cisco Network Academy at [netacad.com](https://netacad.com), where we can see information about the academy.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=32)** Cisco Network Academy is a skills-building program for learning institutions and individuals.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=40)** Cisco offers many courses that are instructor-led through academies that are scattered throughout the world, which is where you may have taken your CCNA.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=52)** Cisco now offers a number of free courses that are self-paced on a variety of current world skills.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=60)** Let's take a look.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=62)** I'll select explore, and then I'll scroll down, where we can see many subject areas, such as cybersecurity, networking, programming, and information technology, but here's the one I want you to select, Cisco Packet Tracer, and here is where we'll see a few self-paced courses, and I'll select this one.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=85)** Now, to get your own copy of Packet Tracer, you'll need to sign up, and then you'll need to enroll in one of the self-paced courses.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=94)** So you'll put in your information, and you'll get an email link that will allow you to go in, take the course, and you'll learn a lot about Packet Tracer and what it can do, and then once you're done, you can download your own copy of Packet Tracer.

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


### 1. Understand VPN Concepts

> [↑ Back to Table of Contents](#table-of-contents)

#### Describing a VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=0)** - [Instructor] Today, when you click on a hyperlink, you'll want to access a remote resource.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=5)** In most cases, we must transport data over an insecure network such as the internet.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=12)** In this segment, we'll learn how a virtual private network can secure communications and provide confidentiality, authentication, and integrity.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=23)** We access resources in the cloud or remote office, on a mobile device or laptop, in an airport, or even another country.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=35)** As a result, many businesses and consumers use virtual private network technology to transmit data.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=43)** The history of VPN began in the late 1990s when a software engineer at Microsoft developed a secure way for a client to connect to a server.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=54)** The engineer developed Point-to-Point Tunneling Protocol, which is the forerunner of today's VPNs.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=62)** Microsoft included VPN capabilities in their operating systems for anyone to use.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=69)** However, during that time, only businesses were using VPN technology.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=74)** Eventually, home users started to embrace the idea of protecting their data, and e-commerce sites began to use SSL VPNs to secure credit card transactions.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=87)** Concurrently, businesses expanded the use of VPN technology to protect communications of the growing number of remote workers.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=98)** After the initial setup, using a VPN is transparent to the client, as they access network resources in the same way they would as if they were sitting in the private network, but remotely using cryptographic tunneling protocols.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=116)** VPN technology has improved and are adaptable for all types of internet users, from desktop to laptop, and mobile operating systems.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=127)** A VPN uses technology such as IPsec and transport layer security to secure network traffic between sites.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=137)** Today, there are many reasons to have a VPN.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=141)** A VPN protects your communication, and can protect your identity while traversing the internet.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=148)** VPNs provide confidentiality by encrypting the data, authentication to ensure only authorized entities are communicating, and integrity by detecting any message modification.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=163)** Now let's test your knowledge.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=166)** A virtual private network secures communications when traveling over an insecure network.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=173)** Explain the benefits of using a VPN.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=177)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (10), ssl (1)
> **Code Keywords:** private (4), let (1)
> **Analogies:** such as (2)
> **UI Navigation:** click on (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Evaluating types of VPNs
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=0)** - [Instructor] A VPN is a secure channel or tunnel between two endpoints that encrypts and keeps data confidential as it crosses through an insecure network.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=12)** VPNs can protect at different layers of the OSI model from the data link all the way to the application layer.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=20)** There are choices in the way you create a VPN, such as IPsec, SSL/TLS, and browser-based VPNs for consumers.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=30)** Let's start with IPsec.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=33)** An internet protocol security or IPsec VPN, works by creating a secure channel, using the internet key exchange protocol or IKE to first authenticate the secure connection.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=46)** Then IPsec uses symmetric encryption, such as AES, to secure the data between the endpoints.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=53)** An IPsec VPN is a solid choice, however it can run into trouble with network address translation and firewall rules.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=64)** Secure Shell offers VPN tunneling and built-in username and password authentication to establish a connection to a single computer.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=74)** It uses port 22 to authenticate the process.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=79)** PuTTY is something that you can use to create the connection for Secure Shell.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=84)** I'm here at the PuTTY download page and you would be able to download the appropriate version for your system.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=92)** Now here's the interface for your PuTTY configuration and it's pretty well straightforward.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=97)** Here you put in the host name or IP address and it's defaulted at port 22.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=105)** SSL/TLS-based VPNs have been around since the early 1990s and were first developed by Netscape and eventually adopted by nearly everyone to create tunnels between specific applications, primarily in web browsers.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=123)** SSL/TLS VPNs provide encryption and reliability for the upper layers of the OSI model.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=132)** We use an SSL/TLS VPN for transmitting sensitive information, such as banking or credit card information to a server using HTTPS..
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=144)** Businesses will most likely use an SSL certificate to reassure clients.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=150)** Unlike SSH, it doesn't require any authentication and typically uses port 443 to make a connection.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=159)** Multi-protocol label switching includes various methods for creating VPNs, using MPLS, and it provides a flexible way to route traffic through an MPLS network.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=174)** Now, there are other solutions as well.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=177)** I'm here at this website, Open VPN, which is an open source solution that has many security and control features.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=186)** Open VPN uses SSL/TLS so it's able to cross network address translation and firewalls with minimal problems.
>
> **[3:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=198)** In some case, you might simply want or need a browser-based VPN, and you can go online to select a couple of them.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=207)** I'm here at HTTPS everywhere, whereas you can see you can download it and install it and it will work with your browser.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=216)** ZenMate is another option where you can browse anonymously when a secure connection is not available.
>
> **[3:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=225)** Now let's test your knowledge discuss VPN choices available today.
>
> **[3:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=231)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (10), ssl (6), tls (5), osi (2), https (2)
> **Code Keywords:** let (2), interface (1), require (1), case, (1)
> **Ports:** port 22 (2), port 443 (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (3)
> **CLI Commands:** ssh (1), make (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** install (1)

#### Recognizing VPN topologies
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=1)** - [Instructor] A VPN topology defines the way we configure devices to support the VPN.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=7)** An organization decides to implement a VPN according to business needs.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=13)** In general, we group VPN topology in three main categories: remote access VPN, intranet VPN, extranet VPN.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=26)** A classic concept of a VPN is a remote access VPN, which allows users to have the ability to securely access internal resources.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=37)** When using a remote access VPN, users must be part of the corporate network and the network administrator invites mobile and small office/home office employees to join by setting up a VPN so they can access the corporate network anytime, anywhere.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=56)** And intranet is either a confined private network within the LAN, or it may be globally interconnected LANs that use WAN technologies to communicate.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=67)** We limit access to the internet to people, processes, and devices that are part of the organization's directory.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=76)** We use an intranet site to site VPN to link branch offices.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=82)** An extranet is an internet or private network that only authorized outsiders can access.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=90)** That could include subcontractors, temporary workers, or business-to-business communication.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=98)** The network administrator sets up a secure tunnel so they can securely access the corporate network anytime.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=106)** Here we see in this graphic the main company is Samurai Blazers.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=111)** With business-to-business communication, we see that Scorpion Paint, Silver Star Leather, and Fireball Engines access resources using an extranet.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=124)** Physical topologies include hub and spoke, mesh, and hybrid configuration.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=131)** A common configuration is the hub and spoke topology.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=136)** The hub is the central office, as we see on the left, and the remote offices are the spokes.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=144)** Many organizations use this hierarchy design, such as governments, retail, and banks.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=151)** A hub and spoke configuration works well when sites have to communicate with the central office but not to each other.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=159)** Hub and spoke topology might not work for everyone, sometimes because of prohibitive cost associated with international links, or an organization may require peer communication, where they must talk with one another.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=177)** As a result, an organization may choose a mesh or partial-mesh topology.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=184)** With a full-mesh, all links communicate with one another.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=188)** With a partial-mesh, sites may only have communication with certain other sites.
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=194)** Here we see a partial-mesh where Boston will be able to communicate with New York, and New York will be able to communicate with London, but New York is unable to communicate directly with Madrid.
>
> **[3:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=208)** Large multinational companies may have a hybrid formation that combines hub and spoke with a partial-mesh topology.
>
> **[3:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=217)** Here we see Boston and Paris using hub and spoke topology, and the rest of the network is using a partial-mesh topology.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=227)** A VPN topology defines the way we configure devices to support the VPN.
>
> **[3:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=234)** Topologies include remote access, internet, and extranet VPN.
>
> **[4:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=240)** And physical topologies include hub and spoke, mesh, and hybrid configuration.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (15), lan (1), wan (1)
> **Code Keywords:** private (2), require (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** configure (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Comparing the main types of VPNs
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=1)** - [Instructor] An external access VPN can be remote access or site-to-site.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=7)** A remote access VPN connects clients on the outside to the corporate network.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=13)** Clients include outside sales staff and teleworkers that need access to corporate resources.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=20)** In order for a remote access VPN to work, such as a remote access full tunnel, the remote worker must install VPN client software on their device.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=33)** A remote access VPN can also include clientless SSL VPN, which provides access without requiring client software on the remote device.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=46)** When accessing the corporate boundary, the client initiates a connection, and the request passes through the internet.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=54)** Once it reaches the corporate boundary, the VPN server receives the request and either accepts or rejects the request to connect.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=64)** The VPN server will many times pass the request through a radius server.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=70)** The radius server consults a list of policies, such as connection request policies.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=77)** This includes checking authentication and authorization conditions along with any accounting policies.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=85)** Health policies assess the health of a device prior to joining the network, includes the status of a client's Windows updates and possible malware.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=97)** Network policies include the set of conditions, constraints, and settings that allow clients to join according to parameters, such as time of day, geolocation, and how long they can be on the network.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=113)** A site-to-site VPN connects entire networks.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=117)** For example, a hub and spoke topology, where the hub is the central office and the remote offices are the spokes.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=125)** When using a site-to-site VPN, the individual hosts do not have client software.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=133)** The connection is transparent in that clients are unaware that they are connecting via a VPN.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=140)** Clients send traffic via normal TCP/IP connections through a VPN gateway.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=147)** When setting up a VPN, the network administrator has choices.
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=153)** A common secure tunneling protocol is IPsec encapsulating security payload as a full tunnel or site-to-site VPN.
>
> **[2:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=164)** The encapsulating security payload protocol provides confidentiality, authentication, integrity, and anti-replay service for IP version four and IP version six.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=177)** The network administrator may also use an SSL/TLS as a full tunnel or clientless VPN.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=186)** With a clientless VPN, the client doesn't have to have any VPN client software.
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=191)** They simply connect through a web browser.
>
> **[3:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=195)** The Cisco ASA offers choices in how to configure the VPN.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=201)** We could use an IPsec site-to-site VPN, a full tunnel SSL VPN, clientless SSL VPN, or a full tunnel IPsec VPN.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=216)** Whether an external access VPN is a remote access or site-to-site, the network administrator has choices as to how to configure the VPN, so that clients can securely connect and communicate with the network.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (24), ssl (4), tcp (1), tls (1), asa (1)
> **Analogies:** such as (3), for example (1)
> **Prerequisites:** configure (2), install (1)
> **Code Keywords:** pass (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Dissecting VPN components
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=0)** - [Instructor] The purpose of a VPN is to secure network communications and as a critical component of an organization's overall security plan.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=10)** Today, the market has multiple VPN choices and the networking team must ensure the best possible solution for the organization.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=20)** Now, there are a number of key components to ensure an effective VPN and those include the VPN platform, either hardware or software, and the cryptographic techniques that ensure confidentiality, integrity and authentication and key exchange so that both parties have the same shared key.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=41)** One of the key components is the platform and you have a choice whether to select a hardware or software VPN.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=50)** When looking at a hardware VPN, many consider a dedicated appliance more secure because the manufacturer design the device solely to manage multiple VPN connections.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=63)** Hardware VPNs have better performance and offer load balancing.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=67)** However, when using a hardware solution, upgrading and expanding VPN capabilities can be a problem and may require purchasing a newer model.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=79)** Software VPN solutions are available that scale easier as many times they only require additional memory and processing.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=88)** However, software VPNs rely on the host operating system that may have vulnerabilities which makes the overall system more prone to attacks.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=98)** In addition, performance may suffer as the VPN must coexist with other applications.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=106)** At the heart of a VPN are the cryptographic techniques that ensure confidentiality, integrity, and authentication.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=115)** For data confidentiality, we use symmetric encryption algorithms that include AES and AES cipher block chaining mode.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=125)** For data integrity, we use hash algorithms that include SHA-224 and SHA-256.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=133)** And for data authentication, we can either use a pre shared key or the asymmetric encryption algorithm RSA.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=143)** And of course, when using a VPN, key exchange is essential as both parties must use the same shared key.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=151)** Choices for key exchange include RSA, internet Key Exchange or IKE which is a method used in IPsec and in some cases we use a pre shared key.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=165)** Whatever solution you decide on, make sure the platform is in line with the most secure cryptographic algorithms available.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=173)** And I'm here at this website where we can learn more about next generation cryptography.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=179)** And now if we drill down the document, we can see some recommendations for cryptographic algorithms.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=185)** Of course, if it says avoid you should not use those and some are labeled acceptable and what would be more in line with the latest cryptographic requirements.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=196)** Now let's test your knowledge.
>
> **[3:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=198)** Describe the VPN components required to secure data in transit.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=203)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (13), aes (2), sha (2), rsa (2), ike (1)
> **Code Keywords:** require (2), let (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Discovering the Cisco ASA
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=0)** - Throughout the CCNA Network Security coursework we reference the different types of equipment network administrators can use to secure their organization.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=11)** One of the devices is the Cisco Adaptive Security Appliance.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=16)** The ASA is a firewall that offers several additional functions, and that includes malware defense, intrusion prevention, content inspection, and VPN capabilities for networks of all sizes.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=33)** Although a single device, the ASA has a number of different form factors that you might work with.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=39)** And that includes Blade, standalone or virtual appliance.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=44)** The ASA software integrates well with other enterprise equipment such as Unified communication and cloud technology.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=55)** As a student, you may work with Packet Tracer and this includes the ability to configure an ASA.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=62)** Let's take a look.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=63)** I'm in Packet Tracer, and over in the lower left hand corner we can see some of the devices and connections we can use when we configure a network.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=73)** Here we see connections, components, and devices, and network devices.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=80)** And here we see the ASA and there are two.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=83)** I'll slide the 5505 out onto the canvas.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=88)** (mouse clicking) And now we'll open it up and we'll boot it up.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=92)** Now, keep in mind when working with the ASA in Packet Tracer it will provide many configuration options, but it won't support all of the features of an actual ASA.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=105)** And once you get in, there is no password, we can go right in and config t, and begin configuration.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=115)** We can then go to the global settings and in here we can change the display name to ASA Corporate and we'll close that.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=125)** And that's what you would see when you view it on your Canvas.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=129)** Now I'll show you one more thing.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=131)** When working with Packet Tracer there are a number of different samples you can work with.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=136)** I'll go to File and Open Samples.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=141)** And here you can see a list of several folders including Networking, (mouse clicking) Cybersecurity, (mouse clicking) and programming among others.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=151)** And I encourage you to take a look at those samples as they're a brief way to get familiar with a specific topic.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=159)** And I'll close that.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=162)** Now, let's test your knowledge.
>
> **[2:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=164)** Describe some of the functions of the Cisco ASA that help secure a network.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=170)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** asa (9), ccna (1), vpn (1)
> **Non-Speech:** (mouse clicking) (3)
> **Code Keywords:** let (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)

#### Using the Cisco ASDM
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=0)** - [Instructor] When working through the Cisco network security curriculum, many students use Packet Tracer, which is simulation software to learn basic device configuration.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=12)** The ASA on Packet Tracer is a simulated device and supports a limited number of features.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=20)** One of the tools that you might use when working with a physical device on a production network is the Adaptive Security Device Manager.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=29)** The device manager is a graphical user interface used to configure the ASA.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=35)** So you're familiar with some of the basic features, we'll cover some of the menu choices and ways you can customize your interface based on preferences.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=46)** Once you launch the Adaptive Security Device Manager, you'll see a graphical user interface similar to this graphic that will include things such as a menu bar, search field, toolbar, and status bar.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=61)** The toolbar allows you to access different functions and features, such as monitor and configure the ASA and search for a specific feature.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=72)** Additionally, the device manager has a number of different menu choices that include File, Tools, Window, and Help.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=80)** Let's talk about a few of these.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=84)** The File menu allows you to manage different configurations.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=88)** The View menu lets you display parts of the user interface where you can customize the layout of the dashboard.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=96)** The Windows menu allows you to move between the different windows in the Adaptive Security Device Manager.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=103)** And the Tools menu allows you to work with a number of different tools, such as command-line interface, ping, traceroute, and also Packet Tracer, which is a function that allows you to trace a packet from a source address and interface to a destination.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=120)** The Help menu provides links to online help.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=124)** And the Wizards menu offers several choices, such as Unified Communications Wizard, Packet Capture Wizard, along with a VPN wizard to streamline your workflow.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=138)** Before you can access the device manager, you must configure web server access on the ASA.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=145)** But also keep in mind if you understand the steps that you need to take when configuring the ASA, you'll be able to use the device manager.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=155)** There is a graphical user interface.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=157)** However, the commands will run in the background.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=162)** I've reviewed some of the main topics of interest.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=165)** To learn more, you can view this document on the device manager, where you can find more detailed information.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=172)** And I scroll down where we can see some of the ways that you can modify the user interface and also a full list of the wizards that are available.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=183)** Now, let's test your knowledge.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=186)** The Cisco Adaptive Security Device Manager is a graphical user interface used to configure the ASA.
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=194)** Outline some of the menu choices and ways you can customize your interface based on preferences.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=201)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (10), let (2), function (1)
> **Env Vars:** asa (6), vpn (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (4), similar to (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** keep in mind (1)


### 2. Discover IP Security (IPsec)

> [↑ Back to Table of Contents](#table-of-contents)

#### Summarizing IPsec
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=0)** - [Instructor] IPsec is not a single protocol, but a framework for securing IP communications.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=7)** We can add IPsec to IPv4 or IPv6 by using additional headers.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=15)** IPsec can then both encrypt and authenticate each IP packet of a session between hosts on a LAN or across the internet.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=26)** If we take a look at our diagram on security tools in the TCP/IP stack, we see that IPsec provides security at the network layer and can protect a much wider range of applications than SSL.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=41)** IPsec has four main components: the security protocols, key management, security associations, and the algorithms.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=52)** We'll start with the security protocols.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=55)** The security protocols include the authentication header.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=60)** Now this provides support for data integrity and authentication of IP packets.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=66)** And the encapsulating security payload provides a combination encryption and authentication of IP packets.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=76)** Another part of the IPsec framework is key management.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=80)** We can either use manual, which is practical for small static environments, or automated using the Internet Key Exchange or IKE in an enterprise network.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=92)** A security association is a relationship between two entities and describes the components for the entities including the security protocols, algorithms, and keys required for the services requested for either the encapsulating security payload protocol or the authentication header process.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=115)** As we see in this illustration, each side will pass its security association information to the other host.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=123)** Now, within the security association, you see a number of different algorithms.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=129)** Algorithms are essential in providing the following: key exchange, integrity, encryption, and authentication.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=140)** IPsec provides flexibility in how it's set up and what level of security is required.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=147)** IPsec can protect one or more paths that include host to host, gateway to gateway, and outside host to the gateway.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=158)** Services IPsec can provide include access control, integrity, authentication, preventing replay attacks, and confidentiality.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=170)** Now let's bring it all together and take a look at this illustration of the IP framework.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=177)** On the left-hand side, we see the encapsulating security payload protocol which includes encryption algorithms such as AES cipher-block chaining mode.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=188)** On the right, we see the authentication header protocol, which includes authentication algorithms such as SHA-256.
>
> **[3:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=198)** And because cryptographic techniques and algorithms rely on keys, encompassing all of these things is key management.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=207)** Now, when setting up IPsec, the network administrator may need more advanced configuration, as in the case of using IPsec in network address translation environments or for providing support for IP multicast.
>
> **[3:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=225)** Now, let's test your knowledge.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=227)** IPsec is not a single protocol, but a framework for securing IPv4 and IPv6 communications.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=236)** Summarize ways IPsec can both encrypt and authenticate each IP packet between hosts.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=244)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** lan (1), tcp (1), ssl (1), ike (1), aes (1)
> **Code Keywords:** let (2), static (1), pass (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Reviewing IPsec components
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=0)** - [Instructor] IPsec is an internet exchange taskforce standard that outlines how we can configure a VPN to secure traffic across an insecure network.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=11)** Because IPsec works at the network layer, it can then protect upper layer traffic.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=18)** IPsec provides many services.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=21)** It provides confidentiality using encryption, integrity using hash algorithms, authentication using key exchange, and secure key exchange using Diffie-Hellman.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=35)** The network administrator has flexibility in the way they can configure IPsec.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=41)** During configuration, when preparing the site for IPsec, the device will list the most current options.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=49)** And then once the network administrator has made the selection, IPsec will then create the security association.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=57)** A security association is a relationship between two entities and describes the components for the entities, including the security protocols, algorithms and keys required for the services requested.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=72)** And then both sides must share the same security association.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=77)** So let's take a look at an example of what you might see when you're setting up your IPsec VPN.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=85)** Within that first section, the ISAKMP policy, is where the network administrator can make selections for IPsec that include protocol, confidentiality, integrity, authentication and Diffie-Hellman.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=99)** So in this policy we see the encryption algorithm is AES, authentication is pre-share, and Diffie-Hellman is group 2.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=110)** Now, today, you wouldn't use group 2, it's been deprecated, but that goes to speak to what we should use is the most recent and current cryptographic techniques.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=122)** So we'll take you to this document here where it talks about next-generation cryptography.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=127)** Now if you scroll down, you'll see a chart that provides recommendations for cryptographic algorithms.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=134)** And then within that, you'll see some that are marked acceptable and then some that say avoid because they're simply not secure.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=143)** So now let's take a look at the IPsec framework and what you have as far as choices.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=150)** So for the protocol, you can select the authentication header, the encapsulating security payload protocol or the encapsulating security payload and authentication header.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=162)** For confidentiality, you would use protocols, such as AES or AES Cipher-Block Chaining mode.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=170)** Integrity, you would use hash algorithms, such as SHA-256 or SHA-384.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=178)** For authentication, you might use RSA or pre-shared key.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=183)** And Diffie-Hellman, you would use the most appropriate group for your organization.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=189)** Now, key management is also another consideration and in most cases, the network administrator will opt for dynamic key exchange, and this allows the VPN servers on each end of the connection to negotiate new keys at specified intervals using internet key exchange.
>
> **[3:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=209)** Now, internet key exchange, or IKE, is a protocol used to set up security associations in IPsec.
>
> **[3:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=217)** This provides a standard method for dynamically authenticating IPsec peers, negotiating security services and generating shared keys.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=229)** Internet key exchange, or IKE, has two distinct functions.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=233)** ISAKMP, or Internet Security Association and Key Management Protocol, defines procedures for authenticating a communicating peer, and the creation and management of security association key generation techniques.
>
> **[4:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=248)** Oakley is a key distribution process that supports perfect forward secrecy.
>
> **[4:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=254)** Oakley allows the devices to exchange keys using the Diffie-Hellman key exchange algorithm.
>
> **[4:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=262)** Now let's test your knowledge, discuss IPsec components that include encryption algorithm and methods to ensure integrity and authentication, along with ways to securely exchange the keys.
>
> **[4:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=276)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (3), aes (3), isakmp (2), sha (2), ike (2)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** let (3)
> **Prerequisites:** configure (2), set up (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Using the IPsec AH
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=0)** - [Educator] The IPsec Authentication Header provides connectionless support for data integrity and authentication along with protection against a replay attack.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=12)** The Authentication Header authenticates as much of the IP header as possible along with any upper-layer protocols.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=19)** However, IPsec cannot authenticate any field values that change.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=26)** The Authentication Header can be used alone or with the Encapsulating Security Payload protocol, and may be used in either transport or tunnel mode.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=38)** Prior to exchanging data, IPsec creates a security association between the two communicating entities.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=46)** This provides the attributes necessary for the Authentication Header process.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=53)** Here is an illustration of the Authentication Header format.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=57)** Let's talk about the three key fields.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=61)** The Security Parameter Index is an essential part of IPsec as it distinguishes between the traffic streams that use different encryption rules and algorithms.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=72)** The security association defines the Security Parameter Index and therefore only has local significance between the two entities.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=82)** The Sequence Number is a mandatory 32-bit field containing an incrementing counter value that supports anti-replay.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=91)** The sender must always transmit this field, but the receiver doesn't have to act on it.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=96)** Both sender and receiver will initialize the counter to zero.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=101)** When IPsec establishes a new security association, this will trigger the counter to reinitialize at zero.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=110)** The Sequence Number must never recycle.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=113)** Some vendors support the extended 64-bit Sequence Number, which is an extension to the 32-bit Sequence Number.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=121)** The Integrity Check Value is a variable field that contains the Integrity Check Value for the packet.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=129)** The field must be a multiple of 32 bits in length and it may include some padding.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=135)** The security association will specify the Integrity Check Value authentication algorithms, which include message authentication code using symmetric encryption, such as AES, or one-way hash function, such as SHA-256 or SHA-384.
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=154)** The Authentication Header is an appropriate protocol to use when confidentiality is not required, such as providing assurance that a neighbor advertisement comes from an authorized router.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=167)** If encryption is required, the network administrator should use the Encapsulating Security Payload protocol.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=176)** Now, let's test your knowledge.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=178)** Outline how the Authentication Header ensures data integrity, authentication, and protection against a replay attack.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=187)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Definitions:** is an  (4), is a  (2)
> **Code Keywords:** let (2), function (1)
> **Env Vars:** sha (2), aes (1)
> **Analogies:** such as (3)
> **Speakers:** - [educator] (1)

#### Outlining the IPsec ESP
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=0)** - [Instructor] The Encapsulating Security Payload provides confidentiality, authentication, integrity, and anti-replay service for IPv4 and IPv6.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=14)** We can provide security services between a pair of hosts, between a pair of security gateways, or between a security gateway and a host.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=24)** During IPsec conversations, IPsec creates a security association that provides the necessary attributes for the Encapsulating Security Payload.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=36)** The device adds the Security Parameter Index to the IP header, and that differentiates between the traffic streams using different encryption rules and algorithms.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=47)** You can use the encryption-only feature to provide for confidentiality with the Encapsulating Security Payload.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=54)** However, using encryption without integrity may leave the communication stream vulnerable to attacks.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=62)** Best practice is to use an integrity method when using the Encapsulating Security Payload protocol by using an integrity check value in the Encapsulating Security Payload header or providing authentication separately by adding an authentication header.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=82)** Here we see a top-level format of an Encapsulating Security Payload packet.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=89)** The Encapsulating Security Payload has most of the same fields as the authentication header, but the fields are in three sections.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=98)** The header contains two fields, the Security Parameters Index and a sequence number, and comes before the encrypted data.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=108)** IPsec adds the security parameter index to the header as this distinguishes between traffic streams that use different encryption rules and algorithms.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=118)** The sequence number is a mandatory 32-bit field value that contains an incrementing counter value.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=127)** When possible, use the extended 64-bit sequence number, which is an extension to the current 32-bit sequence number.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=136)** The payload data is a variable length field containing data from the original IP packet.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=143)** The trailer goes after the encrypted data and may contain padding.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=148)** Padding is optional as some encryption algorithms require the data to be padded to have a certain block size.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=156)** Authenticated data contains an integrity check value when using the optional authentication feature.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=163)** The Encapsulating Security Payload header can provide a mix of security services in IPv4 and IPv6.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=172)** The network administrator may choose to apply the Encapsulating Security Payload alone or in combination with the authentication header in a nested fashion.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=183)** I've opened up Wireshark, where here we see both the authentication header and the Encapsulating Security Payload.
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=191)** As you can see here, is the frame header, the IP header, authentication header, and the Encapsulating Security Payload.
>
> **[3:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=202)** We use both because the authentication header ensures authentication and integrity but not confidentiality.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=210)** The Encapsulating Security Payload provides confidentiality, authentication, and integrity services.
>
> **[3:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=217)** However, the field values that IPsec hashes are different.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=221)** The authentication header hashes both the payload and header of a packet.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=227)** The Encapsulating Security Payload uses a hash algorithm.
>
> **[3:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=231)** However, it doesn't include the IP header of the packet in that, that IP header is a mutable field, meaning that it changes as it passes through a NAT device.
>
> **[4:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=245)** We can use the Encapsulated Security Payload in either transport or tunnel mode.
>
> **[4:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=252)** The set of services offered will depend on what options the network administrator selected and where on the network IPsec must travel.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** require (1)
> **Env Vars:** nat (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Evaluating operating modes
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=0)** - [Narrator] An IPSec VPN can operate in two modes: Transport and Tunnel.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=6)** In this segment, we'll compare each mode and outline use cases for each.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=12)** First, let's talk about Transport Mode.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=16)** In this mode, only the data portion of each packet is encrypted, leaving the header unencrypted.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=24)** Transport Mode is more efficient and uses less overhead, making it ideal for scenarios where devices like firewalls or NAT devices need to access the source and destination addresses for routing or network address translation.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=43)** After passing through the firewall or NAT device, the packet typically transitions to Tunnel Mode before being sent out onto the internet.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=53)** Tunnel Mode is used to create secure network connections by protecting the entire original IP packet, encrypting both the header and data portion.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=66)** In this mode, a new header is added to the IP packet, and IPSec treats the original packet as the data portion.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=76)** Tunnel Mode is commonly used between two gateways, where the gateway often acts as a proxy for the hosts behind the router.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=85)** Next, let's learn why both modes are commonly used.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=90)** Many times when using IPSec, a data communication stream will use both Transport and Tunnel Modes when traveling from point A to point B.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=102)** Now, as we see in this illustration, starting in the private network, the IP packet might start out in Transport Mode, and then after passing through the firewall and network address translation device, IPSec can add a header, and then be in Tunnel Mode as the packet travels across an insecure WAN.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=125)** Now coming back in and once safely in the private network, on the other side, the device can remove the Tunnel Mode header and deliver the packet.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=137)** And finally, let's outline how when using IPSec, both Transport and Tunnel Mode, is accomplished by adding new headers to the IP packet.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=149)** This illustration shows the transformations of an IP packet when using the Authentication Header.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=157)** First we see the original IP packet.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=161)** In Transport Mode, the Authentication Header follows the IP header.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=167)** In Tunnel Mode, the Authentication Header comes after the original IP header, but IPSec adds a new IP header around the entire packet, treating the original IP packet as data.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=183)** This illustration depicts the transformations of an IP packet when using the Encapsulating Security Payload.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=192)** First we see the original IP packet.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=196)** In Transport Mode, the Encapsulating Security Payload header is placed after the IP header, And then in Tunnel Mode, the Encapsulating Security Payload header follows the original IP header, but IPSec adds a new IP header around the entire packet, treating the original IP packet as data.
>
> **[3:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=223)** Now, let's test your knowledge.
>
> **[3:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=226)** Compare IPSec Transport versus Tunnel Mode, and outline use cases for each.
>
> **[3:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=234)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), private (2), finally, (1)
> **Env Vars:** nat (2), vpn (1), wan (1)
> **Speakers:** - [narrator] (1)


### 3. Configure a VPN

> [↑ Back to Table of Contents](#table-of-contents)

#### Connecting with an always-on VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=1)** - [Narrator] In addition to the highly regulated industries, such as financial and healthcare, many other companies filter traffic and monitor client activity, such as web browsing and communication via email and instant messaging.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=17)** When employees are inside of the trusted LAN, all traffic adheres to corporate policies, such as acceptable use, content monitoring, web security, and email filtering.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=31)** However, when clients are outside of the trusted network, there is a risk of security threats and data exfiltration.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=40)** With an always-on VPN, companies can force all traffic to travel through the corporate network, even when someone is off premise.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=50)** With an always-on VPN, you have control of corporate owned devices and corporate compliant external devices, such as bring your own and mobile devices, and can enforce an always-on VPN.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=65)** External users adhere to the same policies as internal users, as they must come through the corporate network, while accessing internal or external resources to ensure they are in line with corporate policies.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=81)** When the network administrator enables always-on, the first thing that happens is location awareness.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=89)** If the device is internal and on the trusted network, they do not need to connect to the VPN.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=97)** However, after an off-premise user logs in and the device detects that they're in an untrusted network, it automatically establishes a VPN session.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=108)** The VPN session remains open until the session timer expires or the user logs off or shuts down the device.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=118)** The network administrator can limit how long to maintain the VPN connection.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=124)** The administrator can also set a maximum connection time or allow an unlimited connection time, which is the default.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=133)** With an always-on VPN, clients cannot drop off the VPN.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=138)** If they do drop off, always-on will reestablish and reactivate the session.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=144)** In some cases, the network administrator can activate lockdown mode, which if they disconnect, this will prevent any traffic from leaving the device.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=155)** During the course of an always-on VPN session, a device may enter sleep mode or simply stop responding.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=163)** The ASA maintains a connection with external devices and periodically sends "keep alive" or "are you their messages" to monitor the device's responsiveness.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=176)** The ASA can terminate the session if inactive for a specified time.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=182)** If a VPN session goes idle, you can terminate the connection and force the client to re-authenticate their device and create a new VPN session.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=192)** The default wait period is 30 minutes.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=196)** The advantages of always-on VPN include support for granular network access control, as the policy server will monitor the connection and provide access control.
>
> **[3:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=209)** And always-on VPN will allow both IP version four and IP version six.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=216)** And once a client logs on, a VPN session begins.
>
> **[3:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=221)** There are some limitations of an always-on VPN.
>
> **[3:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=225)** It doesn't support connecting through a proxy and there may be some performance issues.
>
> **[3:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=231)** An always-on VPN ensures corporate compliance and monitors and protects the company from security threats.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (17), asa (2), lan (1)
> **Analogies:** such as (4)
> **Code Keywords:** default. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Comparing hairpin vs. split tunnel
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=1)** - [Announcer] When you establish an always-on remote access VPN from home to the office, the network administrator has additional configuration options so that the client can access resources outside the corporate network and can select either a hairpin or split-tunnel VPN.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=22)** A hairpin connection is when traffic enters a gateway and the device immediately reroutes the traffic to the internet or another company site, such as in a hub and spoke configuration.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=36)** We call this configuration hairpin because the traffic pattern resembles a hairpin.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=43)** When using a hairpin VPN, all traffic must go through an always-on VPN tunnel to the corporate office where it checks any applicable policies and then exits the corporate device to the internet or another company site.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=60)** The traffic may exit out and go to another office, such as in a hub and spoke configuration.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=67)** For example, traffic from branch office A will go to the security appliance at the corporate office and then go back out again to branch office B.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=78)** We use split-tunneling if the corporate policy allows an always-on VPN to split traffic.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=85)** With a split tunnel, when traffic leaves the device, some traffic will go to the corporate network and some of the traffic splits off and goes directly to an internet connection.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=97)** When this happens, the VPN software on the remote access client splits the traffic.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=103)** If traffic is going to the corporate network, it travels over the VPN tunnel as you can see in red and only protects traffic going into the LAN.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=114)** Otherwise, traffic is going to flow to the untrusted internet.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=120)** Some of the traffic can flow to sites such as YouTube or possibly even a captive portal.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=128)** A captive portal occurs before going to a public access network, such as the portal at the hotel or coffee shop, where the user must provide additional information such as name and email address before going out onto the internet.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=144)** As with any configuration, we have both pros and cons.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=149)** An always-on VPN will tunnel and protect all traffic and inspect everything a user is doing and protect users from malware and other internet threats.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=160)** Splitting the traffic and tunneling only the traffic that is destined for internal resources will preserve bandwidth on the internet connection and reduce the load on the VPN concentrator.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=172)** With an always-on VPN, the network administrator has choices.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=177)** They can select a hairpin connection.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=180)** With a hairpin connection, the corporate device reroutes traffic to the internet, or another company site or they might select split tunnel, where the client device splits traffic to either flow to the corporate network or to an internet connection.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (10), lan (1)
> **Analogies:** such as (5), for example (1)
> **UI Navigation:** go to (3)
> **Code Keywords:** public (1)
> **Definitions:** we call this (1)
> **Speakers:** - [announcer] (1)

#### Translating the network address
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=1)** - [Instructor] Any visible company on the internet requires a public IP address.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=6)** Internally, organizations use private IP addressing.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=11)** As a result, many organizations use Network Address Translation.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=17)** Network Address Translation operates on a router and converts private IP addresses to a public IP address and vice versa.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=26)** The receiving host will only see the public IP address providing an additional layer of security by concealing the entire internal network behind that address.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=37)** The network administrator configures NAT to allow internal users to access the internet.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=44)** Prior to exiting the internet, the traffic must pass through the router and be converted to a public IP address.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=52)** When configuring traditional NAT ethernet interfaces on a router are NAT inside, and serial interfaces are NAT outside.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=62)** And the administrator must configure a set of rules for translating the IP addresses in the packet headers.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=70)** Here you can see a NAT router configuration and here we say which one is inside.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=76)** This define what the IP addresses would be for the inside, and this defines what the IP addresses would be for the outside.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=86)** Many cases, however, we use Port Address Translation.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=91)** This is NAT overloading.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=93)** PAT uses the original source port number of the internal host to form a unique registered IP address and port number combination, which will be greater than 1024.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=107)** Remember, any port under 1024 is a well known port and can't be used.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=113)** For example, we'll take a look at two hosts cell.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=117)** The one host might have the IP address at 10.10.20.200 and the other host might have an IP address of 10.10.20.201.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=129)** In order to send and receive traffic from the internet they need to use the public IP address of 145.44.68.88.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=140)** Once getting to the NAPT router, port will search for an available source port.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=146)** Once converted, internal host can access the public IP address and have a new IP address and port combination so then they can access the internet.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=158)** Many organizations use NAT or PAT.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=161)** This provides an additional layer of security and allows internal hosts to access internet resources.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=168)** Understanding NAT and PAT is essential, as when setting up an IPsec VPN, the network administrator will need more advanced configuration, as in the case of using IPsec in an environment using NAT and PAT.

> [!info]- Semantic Content
>
> **Env Vars:** nat (9), pat (4), napt (1), vpn (1)
> **Code Keywords:** public (6), private (2), pass (1)
> **Versions:** 10.10.20 (2), 145.44.68 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Traversing through a NAT device
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=0)** - [Instructor] Organizations use IPSec to protect communications.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=5)** Yet this can cause issues when using network address translation.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=11)** In this segment, we'll discover how NAT traversal allows IPSec traffic to pass through a NAT or PAT device.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=21)** Many organizations use network address translation, which translates a private IP address to a public address, and vice versa.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=32)** Organizations also use VPN technology to protect communications of remote workers.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=40)** Organizations will commonly use an IPSec VPN.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=45)** However, IPSec can run into trouble with network address translation and firewall rules.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=53)** As a result, the device may need more advanced configuration.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=59)** NAT Traversal is a feature that allows IPSec traffic to pass through a NAT or PAT device and addresses several issues that can occur when using IPSec.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=73)** So now let's talk about how the IPSec authentication header and the encapsulating security payload react when using network address translation and port address translation.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=88)** Let's cover the authentication header first.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=92)** The authentication header provides connectionless support for data integrity and authentication of packets.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=101)** The authentication header authenticates the source and destination IP addresses and other fixed parts of the IP header using a cryptographic hash.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=114)** At the receiving end, IPSec recalculates the hash based on the received packet and compares it with the original hash sent by the sender to verify integrity.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=128)** When NAT or PAT changes these fields, the hash value computed by the sender will no longer match the newly created hash by the receiver, and the message integrity check will fail.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=144)** So now let's talk about the encapsulating security payload.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=149)** The encapsulating security payload protocol provides confidentiality, authentication, integrity, and anti replay.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=160)** Now, in transport mode, the encapsulating security payload does not include the source and destination IP addresses in the integrity check.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=171)** So it's less affected by NAT.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=174)** However, PAT is different as it requires ports so that it can properly translate the IP address.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=183)** Using the native encapsulating security payload without encapsulation can cause issues as it does not have a TCP or UDP port, and this makes it difficult for PAT to handle the translation.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=201)** So next, let's talk about how this works in Wireshark.
>
> **[3:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=206)** To follow along, you can grab this capture found on CloudShark, and I'll put the link in the document.
>
> **[3:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=214)** And what I did was go to Export, Download File, and what I did was download the original file and then I opened it in Wireshark.
>
> **[3:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=226)** And now we'll start with Frame 1.
>
> **[3:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=228)** And down below you can see that it's the encapsulating security payload protocol.
>
> **[3:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=234)** And let's drill down Frame 1.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=236)** Here we see the frame header, Ethernet II, the transport layer header, the authentication header, and the encapsulating security payload.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=249)** However, there is no transport layer header, and therefore there are no port addresses.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=257)** So now let's talk about how we use NAT traversal to resolve problems with NAT and PAT.
>
> **[4:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=266)** IPSec uses UDP encapsulation, typically using port 4500 to enable NAT traversal.
>
> **[4:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=275)** And this is done by adding a UDP header, which provides port information needed by NAT and PAT for address translation.
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=286)** UDP encapsulation can be applied to both transport and tunnel mode.
>
> **[4:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=292)** And remember, these modes determine how IPSec secures packets.
>
> **[4:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=298)** In transport mode, this encrypts and/or authenticates only the payload of the IP packet, leaving the original IP header intact.
>
> **[5:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=310)** In tunnel mode, this encapsulates the entire IP packet, including the header and payload within a new IP header, providing security for the entire packet.
>
> **[5:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=324)** Now a couple of things happens before we see NAT traversal.
>
> **[5:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=329)** First, both sides will determine if the other peer supports NAT traversal during the first two ISAKMP main mode messages using UDP port 500.
>
> **[5:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=342)** Then NAT discovery will determine if NAT is taking place somewhere along the transmission path.
>
> **[5:49](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=349)** The exchange then moves from UDP port 500 to UDP port 4500, so the PAT device can translate the encapsulating security payload packets.
>
> **[6:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=363)** So now let's step through the process.
>
> **[6:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=366)** We can go to CloudShark and we can download the capture and open it in Wireshark.
>
> **[6:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=372)** And again, I'll go to Export, Download File, and then download the original file.
>
> **[6:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=379)** Now once I've opened it in Wireshark, I'm going to filter on ISAKMP So in the display filter, we'll just start typing i-s, and here we can see isakmp.
>
> **[6:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=390)** And we'll put that in and then we'll say go.
>
> **[6:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=393)** And now we just see ISAKMP packets.
>
> **[6:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=396)** So let's see what happens.
>
> **[6:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=398)** Now first, we're going to go to number one, and now we're just going to see ISAKMP packets.
>
> **[6:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=405)** So first let's start with the first packet.
>
> **[6:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=408)** And here we see the UDP header and there is where we're seeing that it's using port 500.
>
> **[6:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=415)** And then in the second frame, again, we see it's using port 500.
>
> **[7:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=421)** Then, we go to Frame 5.
>
> **[7:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=424)** And now this time we see that it will move to port 4500.
>
> **[7:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=429)** And that frame will then begin the NAT traversal on port 4500 on both ends.
>
> **[7:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=436)** So then, all the frames are going to be encapsulated as we see UDP encapsulation of IPSec packets.
>
> **[7:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=446)** Now let's test your knowledge.
>
> **[7:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=449)** Organizations use IPSec to protect communications, yet this can cause issues.
>
> **[7:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=456)** Discuss how NAT traversal allows IPSec traffic to pass through a NAT or PAT device.
>
> **[7:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=464)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** nat (17), pat (9), udp (9), isakmp (4), vpn (2)
> **Code Keywords:** let (10), pass (3), export, (2), private (1), public (1)
> **Ports:** port 4500 (4), port 500 (4)
> **UI Navigation:** go to (5)
> **Exercise Files:** download the (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Examine a Remote Access VPN

> [↑ Back to Table of Contents](#table-of-contents)

#### Challenge: Clientless SSL VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=0)** - [Instructor] Let's do a challenge.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=8)** Remote users that need to securely access corporate resources can use a VPN.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=14)** In this challenge, we'll configure a clientless SSL VPN.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=20)** Remote access VPNs include clientless SSL VPN using a web browser, SSL or IPsec VPN using Cisco AnyConnect Client, or IPsec VPN remote access.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=38)** A clientless SSL VPN is a browser-based VPN that allows a remote user to securely access the corporate resources.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=47)** They access the resources from any location using HTTP over an SSL connection.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=55)** Once they authenticate, they'll see a portal page where they can access specific, predefined internal resources.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=63)** The steps to configure a basic clientless SSL VPN include: generate a certificate for the ASA.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=73)** Now the network administrator can create an X.509 certificate, or use the default certificate that the ASA generates on startup.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=84)** Optionally, enable domain name server lookups.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=87)** The WebVPN server acts as a proxy for client connections.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=93)** This optional configuration will perform any DNS lookups for the client.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=99)** You'll need to create users on the ASA and then create group policy for the VPN users.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=107)** Create a connection profile and then test the connection.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=114)** So now we'll go to Packet Tracer.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=117)** The ASA in Packet Tracer is a simulated device that supports a limited number of features for VPN.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=125)** However, it will support a basic site to site VPN.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=129)** Let's take a look.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=131)** Once in Packet Tracer, I've downloaded a sample and I've enlarged the font so it's easier for you to see.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=138)** So once you open the file, I suggest you save it locally so you preserve the sample.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=144)** So to get the sample, go to File, Open Samples, and then once there go to Cybersecurity, ASA and select ASA Clientless VPN.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=158)** And then complete the instructions.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=161)** This challenge should take about 20 minutes, good luck.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (12), ssl (6), asa (6), http (1), dns (1)
> **UI Navigation:** go to (3), open the (1)
> **Code Keywords:** let (2), include: (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Clientless SSL VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=0)** - [Instructor] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=8)** The first thing we're going to see is that there are already two user accounts configured on the ASA, and we'll begin with instruction one.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=17)** So we'll need to go into PC0 and then to the Desktop, and then the Web Browser.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=23)** And then we'll put the IP address of the ASA.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=29)** And we'll say Go.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=32)** Well, we don't see anything.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=33)** So I'll say Stop because the ASA is not responding with a webpage.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=39)** Now I'm going to close that, and now we'll go to instruction two, enable web service on the ASA.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=46)** And we'll go in and I'll just show you here are the instructions, but we'll step through this, go to the command line, enable, there is no password, and go into config t.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=61)** Then, you'll issue the command webvpn and then you'll issue the command enable outside.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=71)** Now I'll close that and now we'll go back to PC0, back to the Web Browser, and again, we'll put the IP address of the ASA.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=85)** Now, we'll say go.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=87)** And now, it's asking for a username and password.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=90)** Now this one is class and class, and we'll say OK.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=96)** All right, so now you can see that we have a standard webpage that is presented by the ASA, but nothing else.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=104)** So now we need to create some bookmarks.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=107)** We're going to create a bookmark and we'll see what happens when we do that.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=112)** Back into the ASA and now we're on instruction three.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=116)** So now we can go into the Config tab and then on the Bookmark Manager and we're going to use the bookmark title bookmark1, and our URL is 192.168.1.2.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=140)** Then we'll say Add.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=142)** Now in instruction four, it says assign the bookmark and group policy to a user on the ASA.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=150)** So this time we go into the User Manager and we can see that there are already two users here.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=158)** All right, so we're going to select cisco and we're purposely going to do this so that one will have a bookmark and the other won't, and you'll see the difference.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=170)** So we select cisco and the bookmark.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=172)** We're going to select bookmark1 and the profile name profile1, and the group policy, policy1.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=182)** And now, I'll say Set.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=184)** Now we'll scroll down, and now it wants us to compare.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=187)** So we're going to go to both PCs and you'll see the difference.
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=191)** So first we'll go back to PC0 and the Web Browser and I'll enter the IP address of the ASA.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=201)** Now remember, this is class, and this is class.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=207)** And we'll say OK.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=210)** So there's your standard ASA homepage but nothing else.
>
> **[3:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=214)** Now we'll close this and we'll go to PC1.
>
> **[3:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=218)** Go to Desktop, Web Browser, and again, the IP address of the ASA.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=227)** Now this one's cisco and password is cisco.
>
> **[3:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=232)** All right, so what do we see different because it has a bookmark?
>
> **[3:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=237)** Now I have this bookmark1, and I'll select that.
>
> **[4:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=241)** And there you can see Cisco Packet Tracer and a couple of links.
>
> **[4:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=247)** So now we see a simple example of configuring a clientless SSL VPN.
>
> **[4:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=254)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** asa (11), pc0 (3), url (1), pc1 (1), ssl (1)
> **Code Keywords:** class, (2), else. (2), let (1), this, (1), class. (1)
> **UI Navigation:** go to (5), scroll down (1)
> **Cross-References:** go back to (2)
> **Versions:** 192.168.1 (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Employing an AnyConnect SSL VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=1)** - [Instructor] When setting up a VPN for remote users to connect to company resources, the network administrator can use Cisco AnyConnect, which supports both SSL and IPsec VPNs.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=14)** AnyConnect provides a wide range of security services.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=18)** That includes posture enforcement and web security features for a wide range of operating systems.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=25)** Administrators can granularly control what network resources endpoints can connect to, whether they're company owned or bring your own device.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=35)** Cisco AnyConnect identifies and monitors the devices that are accessing the corporate network for unusual or suspicious behavior and defends the network against malware along with safeguarding web browsing sessions.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=50)** The AnyConnect Posture Module connects the Host Scan package, pre-login assessment, and can detect virtual machines or keystroke loggers in the end device, and remediate devices across wired, wireless, and VPN environments.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=67)** To configure AnyConnect, we first configure the ASA for AnyConnect.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=73)** Some configuration options include: specify the AnyConnect image the users must download, enable AnyConnect access on the outside ASA interface, and create a local IP address pool to assign remote users.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=88)** You'll configure the client for AnyConnect.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=91)** Clients will need to obtain the AnyConnect client software from the Cisco software download website that is specific to the operating systems users have on their computer.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=102)** Then verify configuration and connection.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=107)** Cisco AnyConnect supports both SSL and IPsec VPNs and provides a wide range of security services that include posture enforcement and web security features for a wide range of operating systems.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (2), ssl (2), asa (2)
> **Code Keywords:** module (1), include: (1), interface (1)
> **Prerequisites:** configure (3)
> **Speakers:** - [instructor] (1)

#### Assessing endpoint posture
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=1)** - [Educator] A Remote Access VPN connects clients on the outside of the corporate network so they can access corporate resources.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=9)** Clients include outside sales staff and teleworkers that need access.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=15)** When allowing access to the corporate network, we must keep in mind that a network device without appropriate protection, such as updated patches, antimalware protection, and an active firewall compose a significant risk to the corporate network.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=32)** Therefore, when using a Remote Access VPN, it's important to assess the health of the client's device before they join the network so they will not pose a risk to the infrastructure.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=45)** When a device attempts to log into a VPN server, the device determines the status according to the policy set by the administrator.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=54)** After passing the requirements, the client is allowed to join the network.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=60)** If the device is found to be non-compliant according to the policy created, it may have restricted access or even be blocked from joining the network.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=71)** Endpoint Posture Assessment gathers information, such as the operating system, antimalware, and active firewall status that is installed on the host using Host Scan.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=84)** Host Scan can also determine whether the device is corporate-owned, corporate-compliant mobile device, or a public computer.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=94)** The network administrator can create pre-login policies on the ASA that evaluates external user attributes, such as the IP address, operating system, certificates, and other attributes.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=110)** Some of the information can be obtained by the initial request where the ASA can detect the geolocation using the IP address and also the operating system by using the HTTP header.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=123)** I'll go up here, I'm in Wireshark, and I have a precaptured packet and I'll type HTTP.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=131)** This is just to show you what you would see in a header.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=134)** If I right-click and I say Follow the TCP Stream, here you can see information as to what the user agent is, what the operating system, and other information that it could use to evaluate the system.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=149)** In addition to identifying the IP address, operating system certificates, and other attributes on the endpoint, the Host Scan can complete a more comprehensive search to detect keystroke loggers or virtual machines on the end device.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=166)** Once the ASA gathers enough information to match the policy, it will either allow or deny the connection.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=175)** A Dynamic Access Policy will use the posture assessment and apply a dynamically generated policy specific to a user's session.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=185)** If they connect from a device that is not company-compliant, they'll only be granted access to a limited amount of company resources, if any.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=196)** Endpoint Posture Assessment gathers information on the device to ensure they do not pose a risk to the corporate environment.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (3), asa (3), http (2), tcp (1)
> **Analogies:** such as (3)
> **Code Keywords:** public (1)
> **UI Navigation:** right-click (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [educator] (1)


### 5. Investigate a Site-to-Site VPN

> [↑ Back to Table of Contents](#table-of-contents)

#### Ensuring Perfect Forward Secrecy
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=1)** - [Instructor] When encrypting traffic using symmetric encryption, both sides must share the same secret key.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=8)** During the initial handshake, the client creates the master secret, encrypts it with the server's public key to prevent exposure while in transit, and sends it to the server.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=21)** Once the server receives the master secret, it decrypts it with its own private key, and then both client and server have their own key.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=30)** From the master secret, both client and server generate session keys to exchange data.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=37)** During the course of exchanging encrypted traffic, it's essential to protect the server's private key.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=44)** If disclosed, an attacker can have access to the transmitted data, which poses a serious risk to data security.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=52)** Well, how can this happen?
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=54)** Cybercriminals work hard to get into systems and steal information and have created several malware variants that can steal both private keys and digital certificates from Windows certificate doors by exploiting the operating systems's functionality.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=72)** Some variants include Trojan.Zbot, Downloader.Parshell, and Trojan.Spyeye.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=80)** The solution is to use perfect forward secrecy.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=85)** Perfect forward secrecy provides assurance that no one can compromise the session keys, even if someone obtains the server's private key.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=96)** Perfect forward secrecy generates a unique session key for every session a user initiates.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=103)** It uses the Diffie-Hellman key exchange.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=107)** If a hacker is able to obtain a single session key, this only affects the data exchanged in the current session protected by that specific key.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=118)** To enable perfect forward secrecy, both the client and the server must use a cipher suite that employs the Diffie-Hellman key exchange.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=128)** Let's review Diffie-Hellman.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=130)** Whitfield Diffie and Martin Hellman were two of a few groups that developed public key technology in the 1970s as the need for securely exchanging a secret key became evident.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=144)** We use Diffie-Hellman for key exchange, not for encryption, but the concept of Diffie-Hellman is it allows two users to share a secret key securely over a public network when using symmetric encryption.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=160)** With perfect forward secrecy, both client and server generate a new set of Diffie-Hellman parameters for each session that are not stored or reused.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=172)** The key exchange session lasts for a short time.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=175)** And periodically, a new session begins, and both parties then create a new shared secret.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=183)** Perfect forward secrecy ensures data protection by forcing the IPsec VPN tunnel to generate and use a different key when first setting up a tunnel, along with any subsequent keys.
>
> **[3:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=197)** Perfect forward secrecy provides assurance that no one can compromise the session keys, even if someone obtains the server's private key.
>
> **[3:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=208)** Enable perfect forward secrecy when using an IPsec VPN to create a more secure VPN tunnel.

> [!info]- Semantic Content
>
> **Code Keywords:** private (5), public (3), protected (1), let (1)
> **Env Vars:** vpn (3)
> **Speakers:** - [instructor] (1)

#### Setting up an IPsec site-to-site VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=1)** - [Instructor] We use an IPsec site-to-site VPN when a company has branch offices that need to communicate with one another.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=10)** In order to configure a Cisco iOS command line interface based site-to-site IPsec VPN, there are five major steps.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=23)** Make sure that all the access control lists on all devices in the pathway for the IPsec VPN such as routers, firewalls and other devices are compatible with IPsec.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=37)** Create a logical drawing so that you can trace and check each device.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=43)** Although this might take a little time to complete, it will save you time in preventing any conflicts with access control lists.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=53)** Internet key exchange phase one.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=56)** ISAKMP policy configuration using the crypto ISO policy command to set the parameters used when establishing the internet key exchange phase one tunnel.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=71)** In addition, configure the pre-shared key.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=75)** Within the ISAKMP configuration mode, configure the following: Encryption, Hash, Authentication algorithms, Diffie-Hellman Group and Lifetime.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=88)** The result in commands will look like this.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=92)** We see the encryption is aes.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=95)** Hash is Sha256.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=97)** Authentication pre-share, Diffie-Hellman Group Five.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=104)** Internet Key Exchange Phase Two.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=108)** We now configure the IPsec transform set which defines the parameters that the IPsec tunnel uses and includes the authentication method, authentication header, HMAC or encapsulating security payload HMAC transform.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=126)** Encryption method, the encapsulating security payload encryption transform.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=132)** And IPsec mode, either transport or tunnel.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=138)** Create a crypto access control list which defines what traffic is sent through the IPsec tunnel.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=146)** Create and apply a crypto map that groups all configured parameters together and defines the IPsec peer devices.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=155)** Apply the crypto map to the outgoing interface of the VPN device.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=162)** Once everything is set up, we'll want to verify the IPsec VPN.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=167)** Start by running show crypto IPsec security association command.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=173)** Here we see, once run, we have an encrypted anything.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=178)** Then create interesting traffic.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=180)** That traffic is defined by the access control list that is used to determine the traffic to encrypt.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=188)** Verify the tunnel after sending interesting traffic to test to see that the tunnel is working.
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=194)** Again, run the show Crypto IPsec Security Association to ensure that you do see packets are being encrypted.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=203)** An IPsec site-to-site VPN allows companies to communicate securely with one another.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=210)** Configure an IPsec VPN using five major steps.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (7), isakmp (2), hmac (2), iso (1)
> **Prerequisites:** configure (5), set up (1)
> **Code Keywords:** interface (2), this. (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Configure a site-to-site VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=0)** (snappy music)
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=6)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=7)** In this challenge, we'll configure an IPsec site-to-site VPN.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=13)** First, you'll need to open the Packet Tracer file found in the exercise folder.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=18)** Configure and verify a site-to-site IPsec VPN.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=24)** Then you'll follow the instructions found within Packet Tracer, and the challenge is complete when the percentage is 100%.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=32)** But first, let's get you started.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=35)** I've opened up the file and saved it locally so I preserve the original.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=40)** On the left hand side we see the instructions, and we can do a couple of things with this.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=45)** I can undock it so it floats, but I'll put it back, and I can right click to zoom in and make the font larger or zoom out to make it smaller.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=55)** I can also print to PDF if I want to print out the instructions.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=61)** Now, as you proceed through this challenge, you'll see the completion rate change.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=66)** If you need to, you can check the results and look at the assessment items, and see what you need to complete.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=73)** Now let's take a look at the instructions.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=75)** And here we have the addressing table and some of the parameters, but I want you to take note of one thing.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=82)** We see that hash algorithm is MD5 or SHA-1.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=87)** Understand we normally wouldn't use those algorithms, as they have been deprecated and they're not secure.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=93)** But for this exercise we'll use those as the parameters.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=98)** And I'll scroll down.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=99)** And here we see that the routers have been preconfigured with the following, so you know what the passwords are.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=107)** Now first we'll need to test connectivity by going into PC-A and pinging PC-C.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=114)** All right, take a look at your canvas here, and we see the IP addresses.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=118)** And now we'll go into PC-A to the desktop and the command prompt, where we'll type ping 192 dot 168 dot 3 dot 3.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=132)** The devices are all configured with routing, and the ping did succeed.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=136)** So we'll close that.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=139)** Next we'll need to go into router one and make sure the security technology package is enabled.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=146)** So we'll go into router one, and we'll go into the command line interface, and we'll scroll down, and we'll need the password, which is Cisco con PA 55.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=158)** Now we'll enable.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=160)** And that will be Cisco E N P A 55.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=165)** Now we'll issue the command, show version.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=169)** And we'll press enter.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=171)** And here we see the security technology package is not enabled.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=177)** So now we'll go into config T.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=180)** Now we need to enable the package.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=183)** Now I'm going to go over here, and here's the command.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=187)** And I'm going to right click, and we'll copy it so I make sure I get all of it correct, and paste.
>
> **[3:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=195)** And now we'll press enter.
>
> **[3:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=197)** And of course we want to accept that.
>
> **[3:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=204)** And now we'll need to exit.
>
> **[3:28](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=208)** And now I'll copy run start.
>
> **[3:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=211)** Now we need to reload.
>
> **[3:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=215)** And this will take a few seconds.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=220)** Now we need to reenter the passwords.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=222)** Cisco con PA 55, enable.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=227)** Cisco E N P A 55.
>
> **[3:52](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=232)** And now we'll issue the command, show version.
>
> **[3:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=238)** Press enter.
>
> **[4:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=241)** And here we see the security package is enabled, and it says evaluation, which means this is a temporary license, but we're good to go.
>
> **[4:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=251)** Next, we'll need to identify interesting traffic on router one.
>
> **[4:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=256)** Interesting traffic is the traffic that needs to be encrypted.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=260)** So we'll need to configure an access control list to identify the traffic from the LAN on router one to the LAN on router three as interesting.
>
> **[4:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=270)** So go back into config T, and the access control list is here, and we're going to select it and copy it.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=280)** And now we'll paste that.
>
> **[4:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=282)** And the access control list will trigger the IPsec VPN to encrypt the traffic between the router one and router three networks.
>
> **[4:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=291)** And traffic from any other LANs will not be encrypted because it's uninteresting traffic.
>
> **[4:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=298)** So I'll close that, and then you'll continue with the challenge.
>
> **[5:03](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=303)** This challenge should take you about 30 minutes.
>
> **[5:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=306)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (3), lan (2), pdf (1), md5 (1), sha (1)
> **Code Keywords:** let (3), this. (1), interface (1), continue (1)
> **CLI Commands:** make (4)
> **Prerequisites:** configure (3), you'll need (1)
> **UI Navigation:** scroll down (2), open the (1)
> **Tools:** command prompt (1), command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Configure a site-to-site VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=0)** - [Instructor] Okay, let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=8)** So to catch up, I configured router one and then I went over to router three and then I enabled the security technology package.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=18)** And now we're going to go here into router three and continue with the commands.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=25)** Now understand they're pretty much exactly the same as what we did on router one.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=30)** So we'll start here and configure router three to support a site to site VPN with router one.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=37)** So we'll open up router three and we'll need to enter the passwords ciscoconpa55 and then we'll enable ciscoenpa55.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=54)** Now we'll go into config T, and first we'll need to create that access control list
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=66)** and we'll paste that.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=70)** And now that will identify the site to site VPN with router one.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=75)** Now we'll want to configure the internet key exchange.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=78)** Phase one isakamp properties on router three.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=83)** And so here are our commands, and now we'll go into isakamp and we'll identify the encryption as aes 256.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=97)** The authentication is the pre-share.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=102)** We'll use Jesse Hellman Group five and understand on a production network we would use something higher, such as Jesse Hellman Group 14.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=113)** Exit and issue this command here.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=120)** And now it will know that it has to reach that tunnel will go from router one to router three.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=128)** All right, now configure the internet key exchange phase two IPsec policy on router three.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=136)** So we create the transform set VPN set to use the encapsulating security payload, aes and the encapsulating security payload, sha-hmac.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=149)** So that identifies the transform set.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=155)** And now we'll create the crypto map that binds all of phase two parameters together.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=159)** And in this case it's using sequence number 10 and identify it as an IPsec isakamp map.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=167)** And we'll paste.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=169)** And again, anytime you can you should put a description just so you keep yourself straight.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=176)** And when we go back it'll say VPN connection to router one.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=182)** And that just helps when you're troubleshooting to identify what you have done.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=186)** And my peer is of course router one and set transform set VPN set.
>
> **[3:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=195)** And then we'll match that access control list we just created one 110.
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=201)** And exit.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=203)** Now we want to configure the crypto map on the outgoing interface, s/0/0/1.
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=210)** So we need to go into that interface.
>
> **[3:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=214)** Now we'll then bind the crypto map with this command and now we can exit out of that.
>
> **[3:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=226)** And we'll exit as well out of that.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=227)** Now, understand that we've created all of this and now we want to make sure it works.
>
> **[3:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=234)** So whenever you complete something like this in setting up an IPsec VPN and you could see all of the different steps that were necessary to make this happen, then you want to test.
>
> **[4:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=246)** So verify the tunnel prior to interesting traffic.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=249)** We'll go back to router one and enter the passwords.
>
> **[4:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=253)** ciscoconpa55 enable ciscoenpa55.
>
> **[4:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=262)** All right, so now we want to show the crypto IPsec security association command.
>
> **[4:29](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=269)** Now, once we do this you can see that nothing really has been done.
>
> **[4:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=274)** Okay?
>
> **[4:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=275)** So we see the packets that have been encrypted, or encapsulated, de-capsulated, nothing.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=280)** They're all set to zero because nothing's been done.
>
> **[4:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=285)** Now we want to create interesting traffic.
>
> **[4:48](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=288)** So in order to do that we'll close this.
>
> **[4:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=290)** and now we'll go back into PC-A.
>
> **[4:53](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=293)** So we're going to ping pcc and that will be our interesting traffic.
>
> **[4:59](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=299)** So we'll ping 192.168.3.3 Now remember, a Windows operating system will try four times to get through, and it did.
>
> **[5:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=312)** So now we've created interesting traffic.
>
> **[5:16](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=316)** All right, we'll go back to router one and we just use your arrow up and now issue that command.
>
> **[5:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=325)** And now you can see that it identified some of the traffic and then encrypted it.
>
> **[5:31](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=331)** So now we know it's working.
>
> **[5:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=335)** But in contrast, let's create some uninteresting traffic and we'll take a look at the numbers.
>
> **[5:40](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=340)** They should remain the same, right?
>
> **[5:41](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=341)** Because it's not going to encrypt uninteresting traffic.
>
> **[5:45](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=345)** So what we're going to do is ping PC-B which is 2.3 from PC-A.
>
> **[5:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=358)** All right, now we'll go back into router one, arrow up and as we see, the numbers have not changed and that's because uninteresting traffic is not encrypted.
>
> **[6:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=373)** We'll close that.
>
> **[6:15](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=375)** Now we see our completion rate is 100%.
>
> **[6:19](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=379)** So now you've configured an IPsec site to site VPN.
>
> **[6:24](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=384)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (7)
> **Code Keywords:** let (2), interface (2), continue (1), this. (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** make (2)
> **Versions:** 192.168.3 (1), 2.3 (1)
> **Cross-References:** go back to (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=0)** - [Instructor] Thank you for watching Cisco Network Security VPN Technologies.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=6)** In this course, I covered VPN concepts and outlined how VPNs ensure data confidentiality, integrity, and authentication.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=17)** I reviewed the various types of VPNs including clientless SSL and IPsec site to site.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=25)** I then covered the framework of IPsec and the components.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=30)** I discussed the various types of VPN configuration such as hairpin, split tunnel, always-on, and NAT traversal.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=39)** And then we took a deep dive on how to set up a remote access and site-to-site VPN.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=47)** If you're interested in learning more, please check out the library.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=51)** New courses are added every day.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=54)** If you want to learn more about encryption, check out my course "Learn Cryptography and Network Security."
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=61)** Any course in the Cisco CyberOps Series will be well worth your time.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=66)** And for a complete list of courses, check out my author page.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=70)** Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (4), ssl (1), nat (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Cisco VPN

## Path Context

### In [[Cisco Network Security- Safeguarding Network Integrity and Data]]
← [[Cisco Network Security- Secure Access]] | **3 of 7** | [[Cisco Network Security- Secure Routing and Switching]] →

## Appears In

- [[Cisco Network Security- Safeguarding Network Integrity and Data]]

---

[↑ Back to top](#)