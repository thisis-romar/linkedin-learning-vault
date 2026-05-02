---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: operating-system-forensics-24652677
url: "https://www.linkedin.com/learning/operating-system-forensics-24652677"
duration_minutes: 101
duration: 1h 41m
level: Intermediate
updated: 9/16/2024
learners: 8826
skills:
  - Computer Forensics
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHxthMjoNASww/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722364787912?e=2147483647&amp;v=beta&amp;t=brpZV3LM-YGhIYT8Ndx3qNlkCZHtZap11YiilkPVHfw"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Computer Forensics]]'
prev_courses:
  - '[[Cybersecurity Foundations- Computer Forensics]]'
next_courses:
  - '[[Network Forensics]]'
path_nav: '[{"path":"Explore a Career in Computer Forensics","position":3,"total":9,"prev":"Cybersecurity Foundations- Computer Forensics","next":"Network Forensics"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/computer-forensics
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Operating%20System%20Forensics.md)

![Operating System Forensics](https://media.licdn.com/dms/image/v2/D560DAQHxthMjoNASww/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722364787912?e=2147483647&amp;v=beta&amp;t=brpZV3LM-YGhIYT8Ndx3qNlkCZHtZap11YiilkPVHfw)

# Operating System Forensics

> Criminals rely on the intricacies of operating systems like Windows, macOS, and Linux to conceal their activities and hide data. However, a skilled digital forensics expert knows the places to look and the tools to use to access evidence of their crimes. This course covers all the major concepts and tools of the growing field of operating system forensics. Instructor Jungwoo Ryoo (J.R.) reviews th

> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677) | 1h 41m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Operating system forensics](#operating-system-forensics)
  - [What you should know](#what-you-should-know)
- [**1. Operating Systems and Digital Forensics**](#1-operating-systems-and-digital-forensics) (7 videos)
  - [Introduction to OSs and digital forensics](#introduction-to-oss-and-digital-forensics)
  - [History](#history)
  - [Core concepts](#core-concepts)
  - [Roles in computing](#roles-in-computing)
  - [Process management hands-on](#process-management-hands-on)
  - [Roles in forensics](#roles-in-forensics)
  - [Future](#future)
- [**2. File System Types**](#2-file-system-types) (7 videos)
  - [Introduction to file system types](#introduction-to-file-system-types)
  - [Windows file systems](#windows-file-systems)
  - [Windows hands-on](#windows-hands-on)
  - [Linux file systems](#linux-file-systems)
  - [Linux hands-on](#linux-hands-on)
  - [Apple file systems](#apple-file-systems)
  - [Apple hands-on](#apple-hands-on)
- [**3. File Recovery**](#3-file-recovery) (7 videos)
  - [Introduction to file recovery](#introduction-to-file-recovery)
  - [Data carving](#data-carving)
  - [Data carving preparation](#data-carving-preparation)
  - [Data carving hands-on](#data-carving-hands-on)
  - [Slack space](#slack-space)
  - [Data hiding and ADS](#data-hiding-and-ads)
  - [Data hiding hands-on](#data-hiding-hands-on)
- [**4. Live Acquisition**](#4-live-acquisition) (9 videos)
  - [Introduction to live acquisition](#introduction-to-live-acquisition)
  - [Addressing](#addressing)
  - [Memory structure](#memory-structure)
  - [Virtual memory](#virtual-memory)
  - [Memory dump analysis with Volatility](#memory-dump-analysis-with-volatility)
  - [Processes](#processes)
  - [Network connections](#network-connections)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Operating system forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=0)** - [Instructor] Every computing device we encounter uses its own operating system.
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=5)** Criminals use the intricacies of operating systems to conceal information.
>
> **[0:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=11)** So it's up to you to find out where the evidence is hidden.
>
> **[0:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=15)** In this course, I'll teach you the foundations of operating system forensics, including where evidence may be hidden, like deleted files, slack spaces, and alternate data streams and file systems.
>
> **[0:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=31)** Hi, I'm Jungwoo Ryoo.
>
> **[0:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=34)** For decades, I've been a college professor helping students develop their careers in digital forensics.
>
> **[0:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=41)** So join me, and let's start our investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (1), data (1), [[Digital Forensics]] (1)
> **CLI Commands:** find (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=0)** - Let's talk about what you should know before taking this course.
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=5)** I aim to help you quickly learn essential operating system forensics concepts, and develop an overall understanding of the field.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=13)** Having background knowledge in digital forensics would be helpful, and for that, you can check out my other course, [[Cybersecurity Foundations]] Computer Forensics.
>
> **[0:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=24)** Throughout this course, we'll use Windows, Mac OS, and Linux operating systems.
>
> **[0:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=31)** But don't worry if you don't have any spare computers to practice your skills on.
>
> **[0:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=36)** Watching the demos without doing them yourself will still be effective.
>
> **[0:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=41)** Finally, please remember that many operating system forensics investigations require proficiency in using various operating systems and specialized tools, so the more you are exposed to those, the better.
>
> **[0:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=57)** All the versions also come in handy because they frequently offer functionality discontinued in the latest releases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (1), [[Cybersecurity]] (1), [[Computer Forensics]] (1), [[Windows]] (1), [[Linux]] (1)
> **Speakers:** - let (1)


### 1. Operating Systems and Digital Forensics

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to OSs and digital forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=0)** - [Narrator] Digital forensics relies heavily on operating systems, or OSs, as one of its major sources of evidence.
>
> **[0:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=9)** OSs retain a wealth of information on their users because they have full control and view of the hardware and software resources.
>
> **[0:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=18)** People use OSs daily and constantly leave clues about who they are and what they do.
>
> **[0:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=26)** OSs manage computing hardware resources and allocate them to solve their applications.
>
> **[0:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=32)** For a computer program like your favorite web browser to run, it needs sufficient processor time and memory space.
>
> **[0:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=41)** Let's use a timeshare as an analogy for what an OS does.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=47)** Software applications are like the customers of a timeshare property, which in our analogy corresponds to computing hardware resources, an OS schedules when programs can use the central processing unit or CPU, just like a timeshare company will do for its customers.
>
> **[1:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=69)** OSs also make other hardware resources called peripherals available to applications.
>
> **[1:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=76)** The peripherals are devices connected to a computer like printers, monitors, mice or keyboards.
>
> **[1:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=86)** Peripherals require special software called drivers to function properly.
>
> **[1:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=92)** These drivers are installed on an OS.
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=95)** Because an OS controls almost everything happening on a computer and its applications, it's one of the richest sources of information for digital forensics investigators.
>
> **[1:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=109)** OS forensics plays a major role in digital forensics, which is why we treat it as its own discipline and discourse.
>
> **[1:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=118)** File systems are one of the most important aspects of OS forensics since they offer a more permanent means of storing data and information, which include traces of criminal activities.
>
> **[2:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=132)** File systems vary from one OS to another and they're challenging to keep up with because there are so many of them and they change constantly.
>
> **[2:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=142)** Main memory, also known as random access memory, or RAM, keeps most of the application data while programs are running.
>
> **[2:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=152)** It's volatile so you could lose the data as soon as the computer is turned off.
>
> **[2:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=158)** Because critical information like unencrypted passwords only resides in RAM, you'll need to capture the data while the computer is still running.
>
> **[2:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=170)** This process is called live acquisition and it's becoming increasingly important in OS forensics.
>
> **[2:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=177)** This course focuses on covering the essential details of file systems and memory forensics.
>
> **[3:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=184)** You may have a strong preference for a particular OS, however, if you decide to pursue a digital forensics career, I recommend you do your best to be proficient with as many OSs as possible.
>
> **[3:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=198)** The reason is simple.
>
> **[3:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=201)** You never know what OSs you'll encounter in your next investigation and your learning curve will be less deep if you're already familiar with the OS at play.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (4), [[Hardware]] (4), data (4), web (1), application (1)
> **Env Vars:** ram (2), cpu (1)
> **Definitions:** known as (1), is called (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### History
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=0)** - [Instructor] In the 60s, computers were huge and expensive.
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=5)** They were as big as a large room, and called mainframes, because people had to share a single machine remotely using terminals connected through a communication channel.
>
> **[0:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=17)** I still remember my college days when our email system was available on a mainframe computer.
>
> **[0:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=24)** Unix and its variations were these mainframe systems, dominant operating systems, or OSs.
>
> **[0:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=31)** Then, a technological revolution called the personal computer, or PC, occurred in the 1980s.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=39)** PCs started replacing mainframe computers and providing more flexible and economical solutions to everyday tasks like email, word processing, and internet surfing.
>
> **[0:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=54)** IBM began building PCs in 1981.
>
> **[0:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=58)** Disk Operating System, or DOS, and its variants, including Microsoft DOS, or MS-DOS, were the first OSs for IBM PCs and their clones.
>
> **[1:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=72)** These used floppy disks as their storage mechanism.
>
> **[1:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=77)** Apple released the Macintosh in 1984 with its own OS called System 1.
>
> **[1:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=84)** At this time, forensics tools were primitive and unavailable to the public.
>
> **[1:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=90)** Governments funded the development of most of them.
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=95)** Mac SE, in 1987, was the first PC with its own hard drive, with a capacity of a whopping 60 megabytes.
>
> **[1:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=105)** This was also when Apple first named its OS as Macintosh System Software.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=112)** Apple rebranded its OSs as Mac OS in 1996.
>
> **[1:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=118)** This has since been succeeded by Mac OS X, OS X, and back to macOS.
>
> **[2:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=126)** MS-DOS was command prompt-based, meaning users had to type in text-based commands to communicate with the OS.
>
> **[2:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=135)** This changed in 1985 when Microsoft announced its first graphical user interface, or GUI-based OS called Windows OS.
>
> **[2:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=147)** Since the first release of Windows OS, Microsoft produced its successors, such as Windows NT, Windows 95 Windows XP, Windows 7, Windows Vista, and Windows 10.
>
> **[2:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=165)** Linux is the PC version of the Unix OS.
>
> **[2:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=168)** Its source code was open to the public from its birth in 1991 by Linus Torvalds.
>
> **[2:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=175)** Because of its open nature, Linux has explosive growth and numerous distributions.
>
> **[3:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=182)** The kernel is the core of Linux OS, and its first version was created in 1991.
>
> **[3:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=190)** Although, not as popular as Windows OS and Mac OS among PC users, Linux has a strong presence in the cloud computing and server market because of its availability, versatility, and scalability.
>
> **[3:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=208)** We've come a long way in developing new OS technologies over the past decades.
>
> **[3:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=215)** I expect more rapid changes in the next decade, especially in the mobile OS field, driving technological innovations in phones and tablets.
>
> **[3:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=226)** It'll be interesting to see how Android and iOS evolve into their future successors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Linux]] (4), [[Microsoft]] (3), [[Microsoft Word|Word]] (1), prompt (1)
> **Env Vars:** dos (4), ibm (2), gui (1)
> **Code Identifiers:** macos (1), ios (1)
> **Cross-References:** in the next (1)
> **Tools:** command prompt (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Core concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=0)** - [Instructor] There are several core operating system or OS concepts to understand.
>
> **[0:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=7)** Building a foundation for these key topics will help you become a more effective digital forensics investigator and allow you to go beyond simply relying on the results produced by various forensics tools.
>
> **[0:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=23)** It's also true that there are problems tools alone cannot solve.
>
> **[0:29](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=29)** These problems will require your expertise and analytical skills.
>
> **[0:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=35)** Let's dive into the core concepts of OS.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=39)** We'll explore managing processes, memory, and input/output or I/O.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=47)** When you install a program on a computer, it's source code, which is in the form of zeroes and ones, is stored on a storage device, like a solid state drive or SSD.
>
> **[1:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=62)** Once you start the program, your OS loads the code into the main memory to be executed on a CPU.
>
> **[1:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=71)** A process is a program in this active stage of running.
>
> **[1:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=77)** There is a limited number of CPU cores where these processes can be executed, which is why process management is necessary.
>
> **[1:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=88)** Depending on the availability of the CPU resources, an OS needs to keep its processes waiting and run them again.
>
> **[1:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=98)** Memory management is also mandatory because we don't have unlimited memory space.
>
> **[1:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=105)** If you have too many applications running at the same time, the OS will eventually run out of memory space.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=112)** It will swap out the most inactive process and save its status to a secondary storage device, such as SSD or hard drive.
>
> **[2:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=123)** I/O refers to peripheral devices attached to a computer that allows an end user to interact with the software.
>
> **[2:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=133)** Examples of I/O devices are keyboards, mice, monitors, printers and storage devices.
>
> **[2:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=143)** I/O management is relevant to digital forensics because it monitors all the activities occurring on a computer.
>
> **[2:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=152)** Let's say a criminal plugged a USB drive into a computer.
>
> **[2:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=157)** The OS' I/O management function records this activity, and the information can be made available should a judicial court requires it as evidence.
>
> **[2:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=170)** It's impossible to simultaneously cover all the details of these complicated OS concepts.
>
> **[2:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=178)** It usually takes several months to make decent coverage of these subjects in a typical computer science curriculum.
>
> **[3:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=187)** I recommend that you continuously learn as much as possible about these core topics and update your knowledge to maintain your competitive edge as a digital forensics investigator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (3), management (3), [[Memory Management]] (1)
> **Env Vars:** cpu (3), ssd (2), usb (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Roles in computing
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=0)** - [Instructor] By now, you should have a concrete sense of the OSs critical role in computing.
>
> **[0:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=6)** Let's explore this topic further to better understand what an OS does, engage the amount of learning involved.
>
> **[0:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=15)** Take process management, for example, as we learned earlier, OSs create a process out of lines of static source code and allocate a memory space to support its execution.
>
> **[0:29](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=29)** The allocated memory space for each process has four distinct areas, text, data stack, and heap.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=40)** The arrows show the directions in which the stack and heap grow.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=47)** The text section is where the binary version of program instructions are stored.
>
> **[0:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=52)** The data area is where the contents of global and static variables reside.
>
> **[0:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=59)** The stack is a memory segment that contains temporary data, including function or method parameter values, local variable contents and return addresses.
>
> **[1:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=73)** The heap is a memory space dynamically allocated by a running program.
>
> **[1:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=79)** What do you think?
>
> **[1:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=80)** Do these terms sound familiar to you?
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=83)** If the terms sound like a foreign language, I recommend increasing your knowledge by taking OS Theory courses from the LinkedIn Learning Library.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=94)** In the meantime, I'll do my best to fill you in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), management (1), [[LinkedIn]] (1)
> **Definitions:** is a  (2)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Process management hands-on
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=0)** - [Instructor] Let's start a web server here called apache2.
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=5)** Type: sudo service apache2 start.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=13)** Press Enter.
>
> **[0:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=14)** To check if the new process is running, type: sudo ps -A | grep -i apache.
>
> **[0:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=36)** Press Enter.
>
> **[0:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=37)** The ps command with the -A option shows all the active processes on my virtual machine.
>
> **[0:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=46)** The vertical line is the pipe command that passes the output of the ps command to the grep command.
>
> **[0:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=55)** The grep command searches for the keyword apache and displays the lines containing the string of our interest.
>
> **[1:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=64)** In this case, apache appears to be running.
>
> **[1:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=68)** Let's now stop the web server by typing: sudo service apache2 stop.
>
> **[1:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=79)** Press Enter.
>
> **[1:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=81)** Let's recall the command we used earlier by pressing the up arrow key.
>
> **[1:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=86)** Press Enter.
>
> **[1:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=87)** This time, nothing shows up, which means that the apache web server is no longer running.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=94)** As you can see, the Ubuntu OS plays a key role in one of the critical aspects of computing, namely process management, by allowing us to start, stop, and restart processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (3), [[Ubuntu]] (1), management (1)
> **CLI Commands:** apache (4), sudo (3), grep (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Roles in forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=0)** - [Tutor] OS's are crime scenes in digital forensic investigations.
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=5)** They contain traces of digital crimes, such as information theft or ransomware attacks.
>
> **[0:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=12)** An investigator's job is to skillfully excavate and preserve the evidence.
>
> **[0:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=19)** To do this effectively, in-depth knowledge of OS's is essential.
>
> **[0:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=25)** As we learned earlier, OS's allow us to interact with computers to tell them what we want to do.
>
> **[0:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=32)** Criminals are not exceptions.
>
> **[0:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=35)** When committing crimes through computers or other digital devices, criminals must rely on OS's and leave trails of evidence.
>
> **[0:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=46)** These days, one of the first acts law enforcement officers do to investigate a crime is to check a suspect's computer or phone.
>
> **[0:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=57)** What officers look for could be as simple as the website's criminals visited and their search terms.
>
> **[1:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=65)** If they looked for how to create a bomb, you might be a step closer to linking the people to the crime you're investigating.
>
> **[1:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=74)** To find clues like these, investigators must rely on an OS to retain the evidence of their interest.
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=83)** OS's do keep the data.
>
> **[1:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=87)** The challenge is knowing where to look and what tools to use to retrieve it.
>
> **[1:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=93)** In the search history example, tech savvy computer users may know where to find the information and how do we raise it.
>
> **[1:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=103)** In Microsoft Edge, you can do this by clicking on the settings and more icon and choosing the history option, like this.
>
> **[1:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=115)** Do you see the delete browsing data icon?
>
> **[2:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=122)** Criminals can use this feature and remove the entire browsing history.
>
> **[2:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=128)** If you're not trained in OS forensics, this user action could end your investigation.
>
> **[2:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=135)** However, if you are, you know there are many other places you can look for the search history data.
>
> **[2:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=143)** This is the powerful role OS's and their mastery play in digital forensics and why it's critical to learn OS forensics techniques to be an effective investigator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (3), data (3), [[Microsoft]] (1), feature (1), [[Digital Forensics]] (1)
> **CLI Commands:** find (2)
> **Analogies:** such as (1)
> **Speakers:** - [tutor] (1)

#### Future
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=0)** - [Instructor] OSs have come a long way since their humble beginnings.
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=5)** The original OS concept of sharing centralized computing resources through mainframes is now being revived in the form of Cloud computing.
>
> **[0:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=16)** We're also increasingly dependent on mobile devices, which currently have their own specialized OSs, such as iOS and Android.
>
> **[0:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=27)** A potential path for the future is to consolidate all these customized OSs into a universal system that blurs the boundaries.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=40)** Cloud computing enables this convergence by allowing users to move between devices without worrying about copying files.
>
> **[0:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=51)** Your information is always in sync with Cloud storage solutions like OneDrive.
>
> **[0:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=58)** However, we have a long way to go because there are still limitations on what can be done across different hardware platforms.
>
> **[1:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=70)** This is due to variations in processing and memory capacities.
>
> **[1:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=76)** There are also porting challenges.
>
> **[1:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=79)** Frequently, you cannot run the same code on different flavors of OSs, especially between a traditional OS and its mobile version.
>
> **[1:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=90)** A good example is iOS versus Mac OS.
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=95)** They're essentially different OSs, and don't support the same code base.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=100)** The hope is that a more seamless solution will address these portability problems.
>
> **[1:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=108)** Fortunately, we are already seeing much faster progress in the hardware world.
>
> **[1:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=115)** Manufacturers continue to announce new devices, such as foldable smartphones, and I'm hopeful that a universal OS will soon follow.
>
> **[2:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=127)** From the perspective of a digital forensics specialist, these convergence trends are positive because we'll be less worried about learning new OSs every time a new device comes out.
>
> **[2:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=142)** However, other changes, like more prevalent and stronger data encryption will make it extremely difficult to retrieve readable data.
>
> **[2:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=154)** Our only hope may be a Cloud service provider who can unlock the relevant data, but this attempt could still face barriers, such as privacy laws and jurisdiction disputes.
>
> **[2:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=170)** After all, not everything on your device syncs in the Cloud.
>
> **[2:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=176)** Another trend that may help is that OSs increasingly keep track of user activities and store them in the Cloud.
>
> **[3:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=186)** This type of surveillance is already occurring on work computers, but it seems to be expanding into personal computing.
>
> **[3:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=196)** The bottom line here is that digital forensics specialists will have more data to analyze, and intelligent tools leveraging technologies, including artificial intelligence and machine learning will be inevitable to make our work feasible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cloud (6), data (4), [[Hardware]] (2), [[Digital Forensics]] (2), [[Android]] (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** ios (2)
> **Speakers:** - [instructor] (1)


### 2. File System Types

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to file system types
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=0)** - [Instructor] File systems provide a non-volatile means to store data on computing devices.
>
> **[0:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=7)** Here, non-volatile indicates that the information will still be available on your storage solution even after the power is turned off.
>
> **[0:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=17)** File systems are indispensable for computing because they store the operating system code.
>
> **[0:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=24)** When you switch on your computer, it reads the OS code from the file system and loads it into the main memory.
>
> **[0:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=31)** The basic input up system or BIOS is responsible for this initial stage of the startup process.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=39)** A more modern version called Unified Extensible Former Interface, or UEFI, is slowly replacing BIOS.
>
> **[0:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=50)** File systems also store all the code for your favorite applications, such as word processors and spreadsheet programs.
>
> **[1:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=60)** OSS load the application code into the main memory for execution on a CPU.
>
> **[1:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=67)** File systems store all the user data.
>
> **[1:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=72)** Your applications allow you to create and store new files on the local file system.
>
> **[1:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=78)** There are also system generated files like log files.
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=83)** Whether created by users or the system, these files are highly relevant to digital forensics investigations because they may contain direct evidence of criminal activities.
>
> **[1:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=96)** File systems make it possible to keep track of individual files after storing them.
>
> **[1:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=103)** To do this, an OS must set aside space in a file system to store information about files.
>
> **[1:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=111)** Most importantly, their locations.
>
> **[1:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=114)** Files and information on them are both data.
>
> **[1:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=119)** Therefore, you can say that the details on files are data about data, which is metadata.
>
> **[2:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=126)** Other examples of metadata include name, owner and timestamps of when files are created and last accessed or modified.
>
> **[2:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=138)** This chapter explores three of the most popular file systems in news today.
>
> **[2:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=144)** These are Windows, Linux, and Mac OS.
>
> **[2:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=148)** You'll learn many similarities among them, but there are also unique ways the OSS handle the expected file system features we've discussed so far.
>
> **[2:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=159)** Let's jump right into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Metadata]] (2), power (1), [[Microsoft Word|Word]] (1), application (1)
> **Env Vars:** bios (2), oss (2), uefi (1), cpu (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Windows file systems
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=0)** - [Instructor] Windows File Systems have their origin in Microsoft Disk Operating System, also known as MS-DOS.
>
> **[0:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=9)** Many of the original MS-DOS design ideas remain in Windows File Systems.
>
> **[0:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=15)** The command prompt Window is a good example.
>
> **[0:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=18)** There are three main types of Windows File Systems.
>
> **[0:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=22)** They are File Allocation Table or FAT, New Technology File System or NTFS, and Resilient File System or ReFS.
>
> **[0:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=35)** ReFS is the latest Windows File System, while NTFS is the successor to FAT.
>
> **[0:42](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=42)** Among these, FAT uses the simplest design.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=47)** Let's delve into this file type further.
>
> **[0:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=51)** There are three versions of FAT that support different partition sizes.
>
> **[0:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=56)** The original FAT supported 12-bit entries, so it could handle only up to 256 megabytes.
>
> **[1:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=67)** FAT 16 can handle, at most, four gigabytes.
>
> **[1:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=72)** As we know, it's now common to have terabytes storage devices.
>
> **[1:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=77)** This is why Windows created FAT 32, which can accommodate a maximum of 16 terabytes.
>
> **[1:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=87)** Due to its simplicity, FAT is one of the most widely used Windows File Systems.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=94)** Consumer electronics devices, like digital cameras, often use FAT as their default file.
>
> **[1:42](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=102)** System exFAT or Extended FAT is a more recent file system designed for USB drives and SD cards.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=112)** It can support larger file sizes, and it's compatible with more OSs than FAT.
>
> **[2:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=120)** Let's look at the core design concepts FAT uses to better understand how Windows File Systems generally work.
>
> **[2:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=129)** The Partition Boot Sector or PBS is the first sector in a partition.
>
> **[2:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=136)** A sector is the smallest physical unit in a file system.
>
> **[2:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=141)** PBS contains information on where to find the OS code and the partition details.
>
> **[2:29](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=149)** A cluster consists of a fixed number of sectors.
>
> **[2:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=153)** PBS tells how big a cluster is in terms of sectors.
>
> **[2:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=158)** It also stores the location of the file table.
>
> **[2:42](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=162)** File tables track each cluster's location on a storage device.
>
> **[2:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=168)** When allocating a space for a file, the OS looks for an available cluster or clusters in a file table.
>
> **[2:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=177)** Each cluster has its own entry in a file table, which takes up a significant amount of space and is an overhead that comes with FAT.
>
> **[3:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=189)** The file table entries don't store file metadata.
>
> **[3:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=194)** On FAT file systems, the root directory stores metadata and information on the files stored in each directory.
>
> **[3:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=202)** All these new acronyms and concepts can be overwhelming.
>
> **[3:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=208)** Let's get more familiar with them in our hands-on exercise next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[Metadata]] (2), [[Microsoft]] (1), prompt (1), [[Electronics]] (1)
> **Env Vars:** fat (14), pbs (3), dos (2), ntfs (2), usb (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** exfat (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### Windows hands-on
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=0)** - [Instructor] Let's check out a real life FAT file system and try to apply the concepts we learned in the previous lesson.
>
> **[0:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=9)** You can easily create partitions on a storage device by using software tools like GParted.
>
> **[0:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=18)** All you have to do is to create a bootable USB drive with GParted installed.
>
> **[0:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=25)** This is what GParted looks like when you boot from it.
>
> **[0:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=30)** It's easy to see the partitions and create, delete, and resize them.
>
> **[0:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=37)** You can see why criminals love to use GParted, it's simple and allows them to erase the evidence that incriminates them.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=47)** When creating a new partition, tools like GParted also creates a Master Boot Record or MBR in the first sector of your storage device.
>
> **[0:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=59)** The MBR contains the partition table.
>
> **[1:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=62)** Each FAT partition has its own Partition Booth Sector or PBS in the beginning.
>
> **[1:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=69)** Although GParted is useful, you'll need a more professional tool like The Sleuth Kit or TSK to investigate a file system more in depth.
>
> **[1:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=82)** In this exercise, let's see if we can extract the partition table from a partition.
>
> **[1:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=90)** We'll use a utility called mmls, which is part of TSK.
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=97)** Please note that I'm using Kali Linux, which already comes with TSK.
>
> **[1:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=103)** Type mmls /dev/sdb.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=112)** Press Enter.
>
> **[1:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=114)** Here, /dev/sdb refers to the second storage device attached to my computer.
>
> **[2:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=121)** What you see are the details of the partition table stored on /dev/sdb.
>
> **[2:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=128)** According to the partition table, I have two partitions which use FAT32 and NTFS as their file formats.
>
> **[2:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=139)** Next, we'll use another TSK command called fls.
>
> **[2:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=144)** This displays the files and directories of a specific partition Type fls /dev/sdb1.
>
> **[2:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=158)** Press Enter.
>
> **[2:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=160)** Note that we added the number, 1, to our reference to the storage device, /dev/sdb.
>
> **[2:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=168)** The number indicates a specific partition, in this case, it's the first partition.
>
> **[2:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=175)** This command lists all the files and directories as promised.
>
> **[3:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=180)** You can see my test file called test.txt.
>
> **[3:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=185)** r/r denotes a regular file, while d/d indicates a directory.
>
> **[3:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=194)** v/v are TSK virtual files and directories.
>
> **[3:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=200)** You should now have a good feel for what real-life implications technical terms like partition and partition tables have in the context of digital forensics.
>
> **[3:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=213)** TSK has many other features you can use to explore file systems, and you should try them out on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (1), next (1), [[Digital Forensics]] (1)
> **Env Vars:** tsk (6), fat (2), mbr (2), usb (1), pbs (1)
> **Warnings:** note that (2)
> **File Paths:** test.txt (1)
> **Definitions:** refers to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Linux file systems
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=0)** - [Instructor] Linux uses a default file system called Extensible File System or ext.
>
> **[0:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=8)** ext has been evolving since its creation in 1992.
>
> **[0:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=14)** Its latest version is ext4.
>
> **[0:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=18)** Unix existed well before Linux and the ext file systems build on the Unix file system design concepts.
>
> **[0:29](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=29)** Like its cousin Unix, Linux treats everything as a file, including directories and devices like printers.
>
> **[0:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=41)** On a Linux file system, a directory is simply another file containing information about the files in the same container.
>
> **[0:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=52)** In Linux, a Superblock stores details on the configuration of its file system.
>
> **[0:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=58)** It keeps track of the locations of the critical data structures of the file system and their sizes.
>
> **[1:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=66)** Superblock entries include the total number of free blocks and the size of each block.
>
> **[1:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=74)** ext uses blocks and block groups, while Windows-based file systems rely on clusters.
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=83)** Block groups are a set of continuous blocks necessary to enhance the performance of the ext file system.
>
> **[1:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=93)** Block groups attempt to keep fragments of the same file as close to one another as possible.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=100)** Each block group has its own Superblock, data blocks, and block bitmap, which is a sequence of bits representing a block's state.
>
> **[1:53](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=113)** A block bitmap can be used to indicate whether a block is available or not.
>
> **[2:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=121)** A block group also includes group descriptors, a inode table, and an inode bitmap.
>
> **[2:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=130)** One purpose of the group descriptor block is to indicate how full a block group is.
>
> **[2:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=137)** An inode is a data structure that describes files and directories in the ext file system.
>
> **[2:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=145)** It stores the metadata on the files and directories.
>
> **[2:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=151)** Linux keeps track of inodes in a table called inode table.
>
> **[2:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=156)** The inode bitmap is similar to the block bitmap, but maintains information on the inode's status, such as whether it's being used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), data (3), [[Windows]] (1), [[Metadata]] (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Linux hands-on
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=0)** - [Instructor] Let's try out some Linux commands to explore various inode details.
>
> **[0:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=6)** Inodes are what Linux uses to store file or directory metadata.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=13)** Each file or directory has a unique inode number.
>
> **[0:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=18)** Let's see if this is true.
>
> **[0:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=20)** Type ls -ai and press enter.
>
> **[0:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=27)** This gives you a glimpse of the structure of a directory inode.
>
> **[0:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=32)** The numeric values to the left hand side of the file and directory names are inode numbers.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=39)** The first item in the listing is a number and a dot.
>
> **[0:44](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=44)** One dot in Linux means the current directory.
>
> **[0:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=48)** Therefore, the inode number for the current directory is 2752513.
>
> **[0:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=56)** Two dots in Linux signifies the parent directory, and the number next to them here is its inode number.
>
> **[1:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=65)** The rest is a list of inode number and file name pairs.
>
> **[1:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=71)** That's it.
>
> **[1:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=72)** It's that easy.
>
> **[1:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=74)** The metadata items a directory inode contains are the mappings between inode numbers and the current directory, the parent directory and the files in the current directory.
>
> **[1:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=88)** Let's now take a closer look at file inodes and their metadata.
>
> **[1:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=93)** The Linux command to use here is stat.
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=97)** Type stat and the file name of your choice.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=100)** Here, my file is called forensic.
>
> **[1:44](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=104)** Type stat, space, forensic.
>
> **[1:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=108)** Press Enter.
>
> **[1:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=110)** Do you see the inode number of the file?
>
> **[1:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=114)** There are also file permission information, user ID, and group ID next to the first access label.
>
> **[2:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=130)** The second access label shows when a user read the file last time.
>
> **[2:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=136)** There are also timestamps for change and modification.
>
> **[2:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=141)** What's not listed here, but included in the file inode is a list of pointers to the actual data blocks that contain the file data.
>
> **[2:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=151)** There's only a limited number of these pointers.
>
> **[2:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=154)** This implies that the maximum number of data blocks of file inode can point to, the size, the maximum file size of a Linux file system.
>
> **[2:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=165)** Inodes are the most fundamental building blocks of a Linux file system.
>
> **[2:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=170)** Learning more details on your files through inode commands is an essential skill.
>
> **[2:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=176)** Therefore, a good understanding of inodes will serve you well in your future investigations of Linux-based systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (8), [[Metadata]] (3), data (3), next (2), ai (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **CLI Commands:** ls (1)
> **Speakers:** - [instructor] (1)

#### Apple file systems
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=0)** - [Instructor] Like its Windows and Linux counterparts, Apple's file systems have also evolved over the years.
>
> **[0:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=8)** The Macintosh File System or MFS was the very first Apple file system.
>
> **[0:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=14)** It was released in 1984 and designed for floppy disks.
>
> **[0:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=20)** The hierarchical File System or HFS was next, and this was necessary to offer larger and faster storage hardware.
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=33)** Apple launched HFS in 1985 to support its first hard disk drive.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=40)** HFS+ replaced HFS in 1998 with the release of Mac OS 8.1.
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=49)** It's an enhanced version of HFS.
>
> **[0:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=52)** HFS+ uses sectors as its base storage unit.
>
> **[0:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=58)** One sector in HFS+ is equivalent to 512 bytes.
>
> **[1:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=64)** An allocation block is a collection of contiguous sectors.
>
> **[1:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=69)** HFS+ uses allocation blocks to build a file.
>
> **[1:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=75)** The default size of an allocation block is eight sectors or four kilobytes.
>
> **[1:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=81)** An extent is a series of contiguous allocation blocks that do not have a predefined size.
>
> **[1:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=90)** Allocation blocks correspond to clusters in Windows FAT and to blocks in Linux ext.
>
> **[1:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=98)** A volume header is equivalent to BIOS partition block or BPB in Windows systems, or Superblock in Linux.
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=106)** It occupies the first 1,024 bytes of each volume.
>
> **[1:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=111)** Apple File System or APFS is Apple's latest file system technology.
>
> **[1:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=119)** It has succeeded HFS+ since Mac OS High Sierra and saves space and power.
>
> **[2:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=127)** APFS is more resilient to crashes, efficient in backing up data, and provides speed improvements.
>
> **[2:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=136)** The evolution of Apple File Systems from MFS to APFS demonstrates how OS technologies constantly change.
>
> **[2:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=147)** It's another reminder of the necessity of continuing education in digital forensics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Linux]] (3), next (1), [[Hardware]] (1), power (1)
> **Env Vars:** hfs (9), apfs (3), mfs (2), fat (1), bios (1)
> **Definitions:** is a  (2)
> **Versions:** 8.1 (1)
> **Speakers:** - [instructor] (1)

#### Apple hands-on
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=0)** - [Instructor] It's time to do some hands-on again.
>
> **[0:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=4)** Apple files consist of two parts called data fork and resource fork.
>
> **[0:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=11)** As its name suggests, data fork stores file data created by users through applications like word processors and spreadsheets.
>
> **[0:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=23)** Resource fork contains file metadata and application-specific information such as icons and window locations.
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=33)** Let's try this out.
>
> **[0:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=35)** Open your terminal and locate your favorite folder.
>
> **[0:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=38)** Let's pick a file.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=39)** Here I already created a file called apple.jpg.
>
> **[0:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=45)** Type ls -l@ apple.jpg.
>
> **[0:53](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=53)** Press Enter.
>
> **[0:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=55)** Do you see the line starting with com.apple.metadata?
>
> **[1:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=60)** These are the information stored in the resource fork _kMDItemUserTags contains the names and colors of associated Finder tags.
>
> **[1:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=71)** Finder tags allow MacOS users to categorize their files by assigning specific colors to them.
>
> **[1:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=78)** An example Finder use would be to attach a color like blue to all the documents to be reviewed by your coworker.
>
> **[1:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=87)** The number 42 next to the file attribute is the size of the space needed to store the Finder tag information.
>
> **[1:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=96)** That is 42 bytes are necessary to store the Finder tag color information.
>
> **[1:42](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=102)** As you can see, there's also another file attribute.
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=106)** These file attributes take up a significant amount of space.
>
> **[1:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=111)** This is why it's important to be efficient when storing the file metadata.
>
> **[1:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=117)** Just like the other OS we've checked out so far, Apple OS are getting better at managing the overhead associated with its file system.
>
> **[2:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=128)** APFS is the latest solution, but I'm sure there'll be endless future enhancements.
>
> **[2:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=137)** How Apple implements the file attributes also allows criminals to abuse the same mechanism, which is why it's important to know about what we learned in this lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Metadata]] (3), [[Microsoft Word|Word]] (1), application (1), next (1)
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** ls (1)
> **Env Vars:** apfs (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 3. File Recovery

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to file recovery
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=0)** - [Instructor] One of the major tasks of digital forensics investigators is to recover and preserve data.
>
> **[0:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=7)** Special attention is necessary because deleted, damaged, or hidden files present substantial challenges.
>
> **[0:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=17)** Tools and techniques for recovering files are available, and learning how to use them is necessary to pursue a digital forensics career.
>
> **[0:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=27)** Salvaging deleted files could be as simple as using a free digital forensics software application like Autopsy, which automatically detects and displays them for recovery.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=40)** If a software solution doesn't work, a manual approach, like data carving, provides a viable choice.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=47)** You'll still need tools like software utilities, but you are expected to have the skills and insight to navigate through a file system and retrieve what you seek.
>
> **[0:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=59)** This takes a higher level of training than using a fully-automated computer forensics software suite that does everything for you.
>
> **[1:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=68)** What makes the job of a digital forensics specialist even more challenging is the hide and seek nature of the field.
>
> **[1:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=77)** Criminals constantly hide their data in the increasingly vast expense of a storage device.
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=83)** Knowing where to look is essential, which is why this chapter will cover potential hiding places such as slack space and alternate data streams.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=94)** The more you learn about the data hiding tricks, the more options you have when searching for evidence.
>
> **[1:42](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=102)** Based on our discussion so far, it's obvious that you cannot always rely on automation, and you should develop problem solving skills to overcome many potential obstacles ahead of you.
>
> **[1:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=116)** Resources are often limited, and you must work with what you have.
>
> **[2:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=121)** This is why creativity and flexibility are important qualifications for a competent digital forensics investigator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (5), data (5), career (1), application (1), [[Computer Forensics]] (1)
> **Tools:** slack (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Data carving
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=0)** - Data carving is a technique for locating the start and the end of a file, and its fragments in between to eventually retrieve the original file in its entirety.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=13)** Data carving is necessary because criminals temper with files.
>
> **[0:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=19)** One of the most common tempering methods is to delete a file which doesn't erase its data, but simply removes an entry in a file table such as FAT or inode.
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=33)** Here, data carving techniques help investigators find the beginning of the deleted file and hopefully the rest of it.
>
> **[0:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=43)** The second tampering technique is to alter file extensions to mislead investigators.
>
> **[0:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=51)** Changing a file extension from JPG to docx to throw off a forensics investigation is a good example.
>
> **[1:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=60)** The third trick is to hide information in a slack space, which is a remaining free space after creating a file in a cluster or block.
>
> **[1:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=71)** Tools such as Bmap makes it straightforward to write and retrieve data to and from a slack space.
>
> **[1:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=80)** Later in this chapter, we'll take a closer look at carving data in a slack space using Bmap.
>
> **[1:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=88)** Sparse files contain a significant number of sectors of null bytes that are actually allocated in the file system.
>
> **[1:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=96)** Applications use sparse files to have more control over the logical structure of an individual file.
>
> **[1:44](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=104)** Virtual machines or VMs use sparse files to initially create their data storage.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=112)** There's no need to store gigabytes of zeros in hexa decimal when the file system can just make a note of the empty space reserved for VM.
>
> **[2:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=123)** Awareness of sparse files is important when carving data because it allows investigators to reconstruct files properly without removing the null bytes.
>
> **[2:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=136)** Although their values are null, null bytes are still part of the file.
>
> **[2:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=142)** Therefore, it's essential to restore the null bytes to their original form.
>
> **[2:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=148)** There are also other use cases in which we need data carving, including hidden data in unallocated spaces or alternate data streams, or ADS.
>
> **[2:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=160)** We'll take a deep dive into these in the following lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), [[Slack]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[Virtual Machines]] (1)
> **Env Vars:** fat (1), jpg (1), ads (1)
> **Tools:** slack (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (2)
> **Cross-References:** later in (1)
> **Speakers:** - data (1)

#### Data carving preparation
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=0)** - [Instructor] Before we can try data carving, we need to take some preparatory steps, which involve initializing a USB drive and creating new partitions.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=13)** We then copy a JPEG file to our FAT partition and delete it so that we can try to carve the deleted picture file in our next hands-on lab.
>
> **[0:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=25)** I'm doing this particular hands-on exercise on Windows and using the diskpart command, you can find a similar command like diskutil on Mac too.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=39)** First, get an empty USB drive and plug it into your computer.
>
> **[0:44](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=44)** We'll then use diskpart to create partitions.
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=49)** Press the Windows key and start typing diskpart.
>
> **[0:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=55)** Click on diskpart.
>
> **[0:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=57)** Click on Yes.
>
> **[1:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=60)** Let's make it full screen.
>
> **[1:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=62)** Type list disk, press Enter.
>
> **[1:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=67)** My USB stick is Disk 1.
>
> **[1:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=71)** Type select disk 1, press Enter.
>
> **[1:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=80)** Next, let's initialize the USB stick by typing clean, press Enter.
>
> **[1:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=88)** This erases everything on your USB.
>
> **[1:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=92)** Make sure that you have nothing important on it before pressing Enter.
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=97)** Now let's create a partition by typing create partition primary
>
> **[1:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=110)** size=100.
>
> **[1:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=114)** We are creating a primary partition whose size is 100 megabytes here.
>
> **[2:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=120)** The size is 100 megabytes because we just need a very small partition for our demo.
>
> **[2:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=126)** press Enter.
>
> **[2:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=128)** Let's create another primary partition to take up the rest of the USB drive space.
>
> **[2:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=135)** Type create partition primary, and press Enter.
>
> **[2:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=145)** Let's check out the partitions we just created.
>
> **[2:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=148)** Type list partition.
>
> **[2:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=150)** List partition, press Enter.
>
> **[2:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=156)** Select the first partition by typing select partition 1, and press Enter.
>
> **[2:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=169)** Let's format the first partition with format quick fs=fat32 label="carving"
>
> **[3:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=187)** and press Enter.
>
> **[3:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=191)** Let's select the second partition by typing select partition 2, press Enter.
>
> **[3:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=202)** Let's format the second partition with format quick fs=ntfs label="data".
>
> **[3:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=218)** Press Enter.
>
> **[3:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=220)** Note that we used FAT32 for the first partition and NTFS for the second partition.
>
> **[3:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=228)** I did this just to show you how easy it is to create different types of partitions using the format command.
>
> **[3:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=236)** Type exit to quit diskpart.
>
> **[4:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=241)** Let's check if the partitions are there by opening File Explorer.
>
> **[4:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=246)** The new partition called CARVING shows up as expected.
>
> **[4:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=251)** Now let's copy a JPEG file and then delete it to see if we can recover it in our next lesson.
>
> **[4:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=260)** By deleting the file, we're removing the JPEG file entry from the file allocation table or FAT.
>
> **[4:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=268)** Now let's switch to a Linux machine and get an image of the partition we just created.
>
> **[4:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=275)** Digital forensics investigators never conduct their investigation directly on an evidence drive, which is why we are creating the image.
>
> **[4:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=286)** We'll then be able to search for the deleted file in the image file of the USB stick.
>
> **[4:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=294)** The USB is mounted and present on the desktop.
>
> **[4:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=298)** Double click the USB icon, CARVING.
>
> **[5:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=301)** Since we deleted the JPEG file, we see nothing on the partition other than the folder generated by the system.
>
> **[5:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=309)** Double click the folder.
>
> **[5:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=311)** There's no picture file.
>
> **[5:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=314)** Let's now use dd to create an image.
>
> **[5:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=318)** First type sudo fdisk -l
>
> **[5:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=327)** to find out how Linux is recognizing the partition.
>
> **[5:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=331)** press Enter.
>
> **[5:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=333)** It appears as dev/sdb1 on my machine.
>
> **[5:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=338)** Now, type sudo dd if, which means input file,
>
> **[5:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=348)** =/dev/sdb1 of, output file,
>
> **[5:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=356)** =carving.dd.
>
> **[6:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=361)** Press Enter.
>
> **[6:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=363)** Earlier, we intentionally kept the partition size small so that this doesn't take a long time.
>
> **[6:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=370)** Now, type ls -l to check if the new image file has been created.
>
> **[6:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=378)** Press Enter.
>
> **[6:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=379)** As you can see, it's a success.
>
> **[6:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=383)** Now, we are ready to do some data carving to retrieve the deleted JPEG file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), next (3), [[Windows]] (2), [[Linux]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** usb (9), jpeg (5), fat (2), carving (2), fat32 (1)
> **CLI Commands:** find (2), make (2), sudo (2), ls (1)
> **UI Navigation:** click on (2), select the (2), switch to (1)
> **Analogies:** picture (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Data carving hands-on
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=0)** - [Instructor] JPEG files have a specific header signature pattern, that is they always start with JFIF.
>
> **[0:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=10)** Grep is a Linux command for searching for a texturing.
>
> **[0:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=15)** Let's see if you can find the string JFIF in the image file we just created.
>
> **[0:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=22)** Type grep JFIF carving.dd, press Enter.
>
> **[0:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=35)** The output indicates that there's a match, but we need to know the location of the JFIF string, which in turn tells us where the JPEG file begins.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=47)** The oba option of dd allows us to find the offset value of the search result.
>
> **[0:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=54)** In other words, it shows how many bytes are between the start of the image and where the string match is.
>
> **[1:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=63)** Type grep -oba JFIF carving.dd.
>
> **[1:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=76)** Press Enter.
>
> **[1:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=77)** You can see that the offset value is 4198406, which is the location of the JFIF string in the image.
>
> **[1:29](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=89)** JPEG files also have a distinct trailer.
>
> **[1:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=92)** The trailer consists of unprintable bites, which is why I cannot do a simple string search.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=100)** Here, we need another tool called xxd that converts a binary file into its hexadecimal or hex representation.
>
> **[1:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=111)** The hex pattern we are searching for is ff d9 Type xxd carving.dd | grep 'd9 ff'.
>
> **[2:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=128)** Note that we're using little endian here, which we'll talk about in the next chapter.
>
> **[2:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=135)** The vertical line in Linux is called pipe.
>
> **[2:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=139)** It sends the output of the xxd command as an input to the grep command.
>
> **[2:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=146)** This allows grep to do its text search in the hexadecimal dump of the carving.dd image instead of its original binary format.
>
> **[2:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=157)** Press Enter.
>
> **[2:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=159)** There are a number of matches, but let's try the one closest to the beginning of the JPEG file header signature whose offset value was 4198406 in decimal.
>
> **[2:53](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=173)** We need to convert this number to hex because that's what is used by xxd to indicate offset values.
>
> **[3:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=181)** Type echo "obase=16;
>
> **[3:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=192)** 4198406"
>
> **[3:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=201)** | bc, press Enter.
>
> **[3:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=205)** This command does the conversion, and the result is 401006.
>
> **[3:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=213)** We use the output base or O base number 16 here because hex numbers use base 16.
>
> **[3:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=221)** Now go back to the search results, and we can see that 4110a0 is the match right after 401006.
>
> **[3:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=232)** Based on this information, let's carve the data we want out of the entire image file that is carving.dd.
>
> **[4:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=242)** We need to convert the hex number 4110a0 back to decimal, which is 4264096.
>
> **[4:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=253)** Divide 401006 by 512, which is the size of a sector in FAT.
>
> **[4:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=262)** The result is 8,200.
>
> **[4:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=265)** Next, divide 4264096 by 512, which produces 8,328.
>
> **[4:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=276)** Subtracting 8,200 from 8,328 gives us the number of sectors between the beginning and the end of the image file we're trying to carve.
>
> **[4:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=289)** The distance is 128 sectors.
>
> **[4:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=294)** Now type dd if=carving.dd
>
> **[5:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=304)** of=carved.jpg
>
> **[5:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=312)** bs=512 skip=8200
>
> **[5:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=322)** count=128.
>
> **[5:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=326)** The dd command uses the skip option, which allows us to skip the first 8,200 sectors, and only extract the picture file whose size is 128 sectors.
>
> **[5:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=339)** Bs=512 indicates that the size of a sector is 512.
>
> **[5:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=347)** Press Enter.
>
> **[5:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=348)** As you can see, this produces a new file called carved.jpg.
>
> **[5:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=355)** Let's open it.
>
> **[6:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=363)** Congratulations, the data carving exercise is a success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (4), [[Linux]] (2), next (2), data (2)
> **Env Vars:** jfif (6), jpeg (4), fat (1)
> **CLI Commands:** grep (6), find (2)
> **Definitions:** is a  (2), in other words (1), is called (1)
> **Cross-References:** in the next (1), go back to (1)
> **Analogies:** picture (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Slack space
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=0)** - [Instructor] Slack space is leftover storage created from writing a file to a cluster which consists of individual sectors on Windows OS's.
>
> **[0:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=12)** A sector often contains 512 bytes of data, but the size varies depending on the file system configurations of your choice.
>
> **[0:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=22)** Fsutil is a Windows command that allows users to see their file system details, including the bytes per sector information.
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=33)** Let's give fsutil a try.
>
> **[0:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=36)** Start your Command Prompt on Windows as Administrator.
>
> **[0:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=41)** Click on Yes.
>
> **[0:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=43)** Type fsutil fsinfo ntfsinfo c:.
>
> **[0:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=57)** Press Enter.
>
> **[0:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=59)** According to this output, this file system is set up to have 512 bytes per sector.
>
> **[1:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=67)** The Bytes Per Cluster line says 4,096, which means that each cluster has eight sectors.
>
> **[1:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=76)** That is 4,096 divided by 512 is eight.
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=83)** If your file size is 100 bytes, seven of your sectors are unoccupied in the cluster, as well as the remaining space in the first sector, which is 412 bytes.
>
> **[1:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=98)** These unused spaces are called slack spaces.
>
> **[1:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=103)** It's possible to hide information in the slack spaces.
>
> **[1:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=108)** Let's do that now on our Linux machine.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=112)** First, download bmap from this GitHub website, and install it on your Linux machine.
>
> **[1:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=119)** I had to install gcc-multilib to make bmap work on Ubuntu.
>
> **[2:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=127)** Let's first create a file by typing echo "slack space test" > slack.txt.
>
> **[2:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=144)** Press Enter.
>
> **[2:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=145)** The greater than symbol is redirection in Linux.
>
> **[2:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=151)** It sends the output of the echo command, which is the text between the double quotation marks to a new file called slack.txt.
>
> **[2:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=163)** Let's check the file content by typing cat slack.txt.
>
> **[2:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=171)** Press Enter.
>
> **[2:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=172)** You should see this text slack space test.
>
> **[2:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=176)** Let's check the file size by typing ls -l slack.txt, press Enter, and the size is 17.
>
> **[3:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=190)** Bmap is the utility we use to find out how much slack space is present in a file.
>
> **[3:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=197)** Type sudo bmap
>
> **[3:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=203)** - -mode slack slack.txt, press Enter.
>
> **[3:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=212)** According to this output, the slack size is 4,079.
>
> **[3:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=218)** This means that we have 4,079 bytes of free space to hide our data.
>
> **[3:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=225)** Now type echo "Top Secret" | bmap --mode putslack slack.txt.
>
> **[4:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=241)** We need to be a super user to run the bmap command, which is why I put sudo in front of it.
>
> **[4:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=250)** This command inserts the string Top Secret into the slack space of the slack.txt file.
>
> **[4:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=259)** Press Enter. The command executed successfully.
>
> **[4:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=264)** Now the secret text is in the slack space.
>
> **[4:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=268)** Type ls -l slack.txt.
>
> **[4:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=273)** Press Enter.
>
> **[4:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=275)** The file size is still 17 bytes because we didn't add the secret message to the actual file.
>
> **[4:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=283)** Now type cat slack.txt, and press Enter.
>
> **[4:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=289)** As expected, the output doesn't include our secret message.
>
> **[4:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=294)** To see the secret message, type sudo bmap
>
> **[5:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=302)** - -mode slack slack.txt.
>
> **[5:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=307)** Press Enter.
>
> **[5:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=308)** Only by using this command, you can see the Top Secret text I hid earlier in the slack space, right here.
>
> **[5:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=319)** As an investigator, you'll be using a utility like bmap to check if there is anything hidden in the slack space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (23), [[Windows]] (3), [[Linux]] (3), data (2), prompt (1)
> **Tools:** slack (23), command prompt (1), github (1)
> **File Paths:** slack.txt (10)
> **CLI Commands:** sudo (3), cat (2), ls (2), make (1), find (1)
> **Definitions:** means that (2), is a  (1)
> **Prerequisites:** install (2), set up (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Data hiding and ADS
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=0)** - [Instructor] We just tried hiding data in a slack space, which was quite straightforward with the help of a tool.
>
> **[0:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=7)** There are also many other ways to hide data in a file system.
>
> **[0:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=12)** One of them is using the alternate data stream, or ADS, on Windows.
>
> **[0:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=19)** ADS is an NTFS feature that allows users to store extra data streams in addition to the default file data.
>
> **[0:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=28)** The original purpose of ADS was to mirror a similar feature found in hierarchical file system, or HFS, on MacOS.
>
> **[0:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=38)** NTFS uses a concept called attributes.
>
> **[0:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=43)** It sees a file as a collection of attributes, such as its name, security settings, and data.
>
> **[0:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=52)** Each attribute has a unique ID called an attribute type code, and optionally a meaningful name.
>
> **[1:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=60)** The master file table, or MFT, is the file table used to store these attributes in NTFS.
>
> **[1:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=67)** As I mentioned earlier, the MFT contains attribute data that are both metadata and user data.
>
> **[1:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=75)** An attribute that can fit within an MFT record is a resident attribute while non-resident attributes, such as the data attribute, require allocating clusters outside the MFT.
>
> **[1:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=93)** NTFS allows multiple data attributes, enabling criminals to hide data in their own custom data streams, which are not obvious to end users.
>
> **[1:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=105)** Today's digital forensics tools are ADS-aware, but investigators need to be knowledgeable about ADS to actively seek criminal use of these features.
>
> **[1:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=118)** The default data stream is unnamed and used to save file data.
>
> **[2:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=123)** We just tried hiding data in a slack space, which was quite straightforward with the help of a tool.
>
> **[2:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=131)** There are also many other ways to hide data in a file system, including using the alternate data stream, or ADS, on Windows.
>
> **[2:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=142)** ADS is an NTFS feature that allows users to store extra streams of data in addition to the default file data.
>
> **[2:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=153)** The original purpose of ADS was to mirror a similar feature found in hierarchical file system, or HFS, on MacOS.
>
> **[2:44](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=164)** NTFS uses a concept called attributes.
>
> **[2:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=169)** It sees a file as a collection of attributes such as file name, security settings, and its data.
>
> **[2:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=178)** Each has a unique ID called an attribute type code and, optionally, a meaningful name.
>
> **[3:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=186)** The master file table, or MFT, is the file table used to store these attributes in NTFS.
>
> **[3:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=195)** As I mentioned earlier, the MFT contains attribute data that are both metadata and user data.
>
> **[3:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=203)** An attribute that can fit within an MFT record is a resident attribute while non-resident attributes, such as the data attribute, require allocating clusters outside the MFT.
>
> **[3:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=220)** NTFS allows multiple data attributes, which is why criminals are able to hide data in their own custom data streams, which are not obvious to end users.
>
> **[3:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=234)** The digital forensics tools in news today are ADS-aware, but it's important for you to be knowledgeable about ADS so that you're able to actively seek and use these features.
>
> **[4:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=247)** The default data stream is unnamed and used to save file data.
>
> **[4:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=254)** PowerShell is an enhanced version of the default command line interface, or CLI, on Windows OS.
>
> **[4:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=262)** PowerShell is now part of the default Windows installation.
>
> **[4:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=266)** To find PowerShell on Windows 10, start typing PowerShell in the search box like this.
>
> **[4:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=277)** We can use PowerShell to display all the data streams associated with a specific file.
>
> **[4:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=285)** Let's first go to my pictures folder by typing cd pictures.
>
> **[4:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=291)** Press Enter. Type dir.
>
> **[4:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=294)** I'm going to be using the hacker.jpeg file for my demonstration.
>
> **[4:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=299)** Type Get-Item, the file name, which is hacker.jpeg,
>
> **[5:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=307)** - stream *.
>
> **[5:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=313)** Press Enter.
>
> **[5:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=314)** The output shows that there's only one data stream associated with the file.
>
> **[5:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=321)** In addition to simply displaying data streams, we can also add new ones.
>
> **[5:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=327)** Let's take a closer look at this in our next lesson.
>
> **[5:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=331)** I hope you're excited.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (31), [[Powershell]] (5), [[Windows]] (4), feature (4), [[Slack]] (2)
> **Env Vars:** ads (10), ntfs (8), mft (8), hfs (2), cli (1)
> **Tools:** powershell (5), slack (2), command line (1)
> **Definitions:** is an  (3), is a  (2)
> **Analogies:** such as (4)
> **CLI Commands:** find (1), cd (1)
> **Speakers:** - [instructor] (1), - stream (1)
> **UI Navigation:** go to (1)

#### Data hiding hands-on
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=0)** - [Instructor] In this lesson, we'll first create an alternate data stream or ADS to later demonstrate how to detect it.
>
> **[0:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=10)** Creating an ADS is simple.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=13)** All you have to do is to use the output redirection command, which is a greater than sign.
>
> **[0:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=20)** Just like the Linux redirection symbol, this command takes the output of the first command and sends it as an input to the next.
>
> **[0:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=30)** Now open a command prompt on your Windows machine.
>
> **[0:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=34)** Let's first create a new empty file called ads.txt by typing type null greater than sign ads.txt.
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=49)** Press Enter.
>
> **[0:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=51)** Enter type dir to see if the file has been created.
>
> **[0:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=54)** Press Enter.
>
> **[0:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=57)** Note that it's an empty file whose size is zero.
>
> **[1:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=61)** Now let's add the second data stream by typing echo ADS test ads.txt:secret.
>
> **[1:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=77)** Press Enter.
>
> **[1:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=79)** The greater than sign redirects the output of the echo command into the ads.txt file.
>
> **[1:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=86)** The output here is the string ADS test and the output redirection command puts it in the second data stream of the ads.txt file, whose name is secret.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=100)** Now type dir adds.txt.
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=106)** Press Enter.
>
> **[1:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=108)** Please note that the file size is still zero, although we added the new data stream secret.
>
> **[1:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=117)** This is why end users won't notice the difference until they use the PowerShell command get item.
>
> **[2:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=125)** Now let's switch to PowerShell.
>
> **[2:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=129)** Type get-item space ads.txt space dash stream space asterisk.
>
> **[2:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=145)** Press Enter.
>
> **[2:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=147)** Now you see the secret data stream added to the default file data stream.
>
> **[2:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=154)** To view the content of the new data stream, type get-content space ads.txt space dash stream space secret.
>
> **[2:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=172)** Press Enter.
>
> **[2:53](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=173)** And you see the secret text.
>
> **[2:57](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=177)** Instead of adding a text as a new data stream, it's also possible to add an executable file, which is much more dangerous.
>
> **[3:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=188)** Let's switch back to the command prompt window.
>
> **[3:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=193)** The command is type space C:Windows\System32\notepad.exe redirection
>
> **[3:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=210)** ads.txt:note.
>
> **[3:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=217)** Please note that notepad.ext is an executable file.
>
> **[3:42](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=222)** Press Enter.
>
> **[3:44](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=224)** Surprisingly, this works.
>
> **[3:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=227)** Now let's go back to our PowerShell window again.
>
> **[3:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=231)** Type get-item space ads.txt space dash stream space asterisk.
>
> **[4:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=245)** Press Enter.
>
> **[4:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=247)** You can now see that the third data stream called note has been added.
>
> **[4:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=253)** The danger here is that the executable could be a malicious application.
>
> **[4:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=259)** It's very possible for criminals to run a program hidden in an alternate data stream to steal information or inflict damage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Powershell]] (3), prompt (2), [[Windows]] (2), [[Linux]] (1)
> **File Paths:** ads.txt (9), adds.txt (1)
> **Tools:** powershell (3), command prompt (2)
> **Env Vars:** ads (4)
> **Warnings:** note that (3)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** switch to (1)


### 4. Live Acquisition

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to live acquisition
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=0)** - [Instructor] Live acquisition is a digital forensics technique that takes a snapshot of the main memory of a running computer system.
>
> **[0:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=9)** Primary memory and random access memory or RAM are other names for main memory.
>
> **[0:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=15)** The importance of live acquisition is increasing for multiple reasons.
>
> **[0:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=21)** First, volatile information is only kept in the main memory.
>
> **[0:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=26)** This includes information on active network connections, encryption keys, and passwords.
>
> **[0:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=34)** In particular, unencrypted data and passwords are invaluable in obtaining access to evidence that could make or break a criminal case.
>
> **[0:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=45)** With strong encryption and password protected data, it's often impossible to acquire any data at all these days.
>
> **[0:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=54)** Another important type of data is the network transaction details.
>
> **[0:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=59)** These details allow documenting a crime in action by capturing messages exchanged between criminals.
>
> **[1:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=67)** Imagine a malware program communicating with its writer during a live acquisition attempt.
>
> **[1:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=74)** This is comparable to a surveillance camera capturing a crime in action.
>
> **[1:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=80)** Here, the relevant information includes users who were signed on and the details of all the active processes at the moment of the memory capture.
>
> **[1:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=92)** Some programs and their data reside only in the main memory.
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=97)** You lose them when you shut down your computer.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=100)** Malware tend to use this volatile nature of main memory to minimize its footprint and to evade detection.
>
> **[1:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=109)** There are also disadvantages associated with live acquisition.
>
> **[1:54](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=114)** Because a software tool is needed to conduct live acquisition and occupies a space in the main memory, live acquisition inevitably compromises the integrity of the acquired evidence.
>
> **[2:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=129)** Corrupt data in main memory can also cause a system crash.
>
> **[2:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=134)** Despite these potential downfalls, live acquisition is becoming an indispensable tool for digital forensics professionals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Digital Forensics]] (2)
> **CLI Commands:** make (1)
> **Env Vars:** ram (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Addressing
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=0)** - [Instructor] In the early days of computing, main memory was a premium space because it was much more expensive and limited.
>
> **[0:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=9)** My first computer's main memory size was in kilobytes.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=13)** We've come a long way since that time.
>
> **[0:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=17)** Gigabyte main memory sizes are now common.
>
> **[0:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=21)** This change presents its share of new opportunities for exploits and challenges, particularly in digital forensics.
>
> **[0:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=30)** The main memory space must be divided into manageable blocks with assigned addresses, regardless of size.
>
> **[0:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=38)** Depending on its implementation, the block size can vary.
>
> **[0:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=43)** Let's assume that each block consists of one byte, for example.
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=49)** Every byte is composed of eight bits.
>
> **[0:53](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=53)** Therefore, one memory block can house eight individual binary digits or two hexadecimal digits.
>
> **[1:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=61)** One hexadecimal digit represents four binary numbers.
>
> **[1:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=65)** Imagine that there is a number you want to store in the main memory.
>
> **[1:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=71)** The number is 10001000 in binary, which translates into 88 in hexadecimal.
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=83)** This hex number 88 fits nicely in one block of memory.
>
> **[1:29](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=89)** What if we have a bigger number like 1000 1000 0010 0010 in binary equivalent to 8822 hex?
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=106)** In this case, breaking this up into two separate memory blocks is necessary.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=112)** Let's say you have two memory blocks available at two contiguous locations: 0x0007 and 0x0008.
>
> **[2:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=125)** Here, the prefix 0x simply indicates that we're using a hex number for addresses.
>
> **[2:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=133)** If we put the most significant bite of 8822, which is 88 in the first memory slot 0x0007, and 22, next in 0x0008, this sequential flavor of writing data to memory is called Big-Endian.
>
> **[2:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=153)** Putting the least significant bit first in the memory slots, writing 22 first and 88 next is called Little-Endian.
>
> **[2:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=165)** These differences are important to recognize because they affect how you interpret the data you collect from the main memory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), data (2), [[Digital Forensics]] (1)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### Memory structure
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=0)** - [Instructor] There are primarily three different types of computer memory: primary, secondary, and cache.
>
> **[0:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=8)** Primary memory refers to the main memory called RAM, or random access memory.
>
> **[0:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=14)** There is also read-only memory or ROM, which stores essential information necessary to boot a computer.
>
> **[0:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=22)** The BIOS uses ROM.
>
> **[0:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=25)** Secondary memory is required to store extra data that is not needed immediately for processing.
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=33)** Examples are solid state drives or SSDs, hard drives, and USB drives.
>
> **[0:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=41)** The secondary memory devices also store data while computers are turned off.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=47)** Cache memory is the smallest in capacity, but the fastest.
>
> **[0:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=52)** To be fast, its size has to be small.
>
> **[0:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=56)** Its sits between a central processing unit or CPU and main memory.
>
> **[1:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=62)** Cache memory works as a buffer and holds data that is soon to be used by the CPU.
>
> **[1:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=69)** This way, the CPU has almost immediate access to the data it needs and doesn't have to wait for the slower main memory unit to respond.
>
> **[1:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=79)** The goal is to minimize the time it takes to load data from the main memory into the CPU.
>
> **[1:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=86)** Whatever is in the cache memory is a subset of what the main memory contains.
>
> **[1:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=92)** Therefore, dumping the contents of the main memory is sufficient for live acquisition.
>
> **[1:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=98)** Making a memory dump is straightforward.
>
> **[1:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=101)** Thanks to the tools that are readily and freely available such as FTK Imager, all you have to do is run the software and make a few clicks.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=112)** The software automatically stores a memory dump file on the medium of your choice for future analysis.
>
> **[2:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=121)** Not too bad, right?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5)
> **Env Vars:** cpu (4), rom (2), ram (1), bios (1), usb (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Virtual memory
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=0)** - [Instructor] Virtual memory is a way to expand main memory by leveraging secondary memory.
>
> **[0:06](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=6)** For example, the OS can allocate space on a solid state drive and utilize it as virtual memory.
>
> **[0:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=15)** It gives end users an illusion of a much larger memory space than what the main memory is actually able to provide physically.
>
> **[0:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=25)** No matter how large the main memory is, it's always possible to eventually run out of space.
>
> **[0:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=32)** Because of this possibility, it's necessary to have a backup plan, which in this case is virtual memory.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=40)** All OSs implement virtual memory and create virtual memory addresses to map perceived memory locations to either physical addresses in main memory or secondary memory addresses.
>
> **[0:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=56)** When the main memory starts to run out, an OS will swap the data which is unlikely to be used again soon out of the main memory and move it to a secondary storage device.
>
> **[1:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=69)** This creates space for other processes requiring immediate memory access until they themselves are swapped out.
>
> **[1:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=79)** The OS logic dictates the priority of using the main memory space.
>
> **[1:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=85)** One disadvantage of using virtual memory is its impact on performance.
>
> **[1:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=91)** Constant swapping slows down the processing speed of a computer.
>
> **[1:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=96)** Therefore, the less swapping occurs, the better.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=100)** This is why it's ideal to have a large main memory space, which minimizes the use of virtual memory.
>
> **[1:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=108)** In the context of virtual memory, the memory segments being swapped are called pages.
>
> **[1:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=115)** The page sizes are dependent on the OS doing memory management.
>
> **[2:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=120)** A page or swap file is used to store swapped out pages on a secondary memory device.
>
> **[2:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=129)** Live acquisition needs to include this page or swap file for completeness.
>
> **[2:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=135)** On Windows 11, you can see and configure the details of your virtual memory.
>
> **[2:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=141)** First, open File Explorer.
>
> **[2:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=147)** Next, select This PC and then right click on it.
>
> **[2:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=156)** Choose Properties.
>
> **[2:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=159)** Scroll down. Choose Advanced system settings.
>
> **[2:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=166)** Under Performance, select Settings.
>
> **[2:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=171)** Then, choose Advanced.
>
> **[2:53](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=173)** Finally, we can see the virtual memory setting.
>
> **[2:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=176)** As you can see, my current total paging file size is 512 megabytes.
>
> **[3:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=184)** Remember to include the pager swap file in the second memory when you perform live acquisition.
>
> **[3:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=190)** This applies to Linux and Mac too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), [[Memory Management]] (1), [[Windows]] (1), next (1), [[Linux]] (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Memory dump analysis with Volatility
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=0)** - [Instructor] Volatility is an open source memory dump analysis program.
>
> **[0:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=4)** Shown here is the Volatility Project website.
>
> **[0:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=8)** The name Volatility stems from the volatile nature of main memory.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=13)** Volatility is written in Python and available on both Windows and Linux.
>
> **[0:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=20)** Let's install volatility on my Linux machine.
>
> **[0:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=24)** Type sudo apt-get install volatility, press enter,
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=33)** type password, press enter, and type Y.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=39)** As you can see, the volatility 2.6 installation is successful.
>
> **[0:45](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=45)** Please note that this installation process may not work on your flavor of Linux.
>
> **[0:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=51)** You may need an alternate way of installing Volatility 2.6.
>
> **[0:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=56)** Type volatility -h, press enter.
>
> **[1:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=64)** The output shows a number of plugins that come with the default volatility installation, which are what makes the tool so useful and powerful.
>
> **[1:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=76)** In a real-life situation, investigators receive a memory dump file to analyze.
>
> **[1:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=83)** They don't necessarily know its source, which is why the image info plugin is important.
>
> **[1:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=90)** Type volatility -f ./Documents/windows.raw imageinfo.
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=106)** Here, -f specifies the location of the target memory dump file to analyze.
>
> **[1:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=111)** In my case, my memory dump file is located in my documents folder and the name of the file is windows.raw.
>
> **[2:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=121)** The ./ indicates the current directory.
>
> **[2:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=125)** The last parameter is the name of the plugin to be used, which is imageinfo. Press enter.
>
> **[2:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=134)** Here, Volatility displays the details on the memory dump file, including the profile information.
>
> **[2:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=142)** The first item in the suggested profile list is Win7SP1x64.
>
> **[2:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=153)** That is 64-bit Windows 7 with Service Pack one installed.
>
> **[2:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=159)** The guess is correct because I acquired the memory dump from a machine running a 64-bit Windows 7 version with a service pack installation.
>
> **[2:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=169)** Volatility is a great free tool to get familiar with because of its rich set of features that are useful in many everyday investigations.
>
> **[3:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=180)** Let's learn more about its capabilities in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Linux]] (3), [[Python (Programming Language)|Python]] (1), next (1)
> **CLI Commands:** python (1), sudo (1), apt (1)
> **Versions:** 2.6 (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Processes
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=0)** - [Instructor] One of the most useful Volatility commands allow you to check what processes were running when live acquisition was done.
>
> **[0:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=10)** The plugin to use is pslist.
>
> **[0:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=13)** Type volatility --profile=Win7SP1x64
>
> **[0:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=31)** pslist -f ./Documents/windows.raw.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=40)** The -- profile option lets Volatility use an appropriate profile for its analysis.
>
> **[0:47](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=47)** We're using Win7SP1x64 here because we obtained this information from the image info plugin from the previous lesson.
>
> **[0:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=59)** Press Enter.
>
> **[1:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=61)** The output lists all the processes that were running when the memory dump was made.
>
> **[1:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=67)** If there were malware running on the evidence computer, you'd find one or more suspicious processes here.
>
> **[1:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=75)** Another way to list processes is in their parent child relationship.
>
> **[1:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=82)** This is significant because malware programs often spawn child processes to do damage behind the scene.
>
> **[1:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=90)** The plugin to be used here is pstree.
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=95)** Type volatility --profile=Win7SP1x64
>
> **[1:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=109)** pstree -f ./Documents/windows.raw.
>
> **[1:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=118)** Press Enter.
>
> **[2:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=120)** When you see two dots or more ahead of a process name, the same process is a child of the process immediately above itself.
>
> **[2:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=130)** PPid stands for parent process ID, which makes the relationship even clearer.
>
> **[2:18](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=138)** The services that exe process has many child processes whose PPid is 448.
>
> **[2:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=146)** After finding a suspicious process that spawned multiple child processes, it's time to check if it's truly malicious.
>
> **[2:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=156)** For this, we can use the malfind plugin.
>
> **[2:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=161)** Type volatility --profile=Win7SP1x64 malfind
>
> **[2:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=179)** - p448 -f the file location,
>
> **[3:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=187)** ./Documents/windows.raw.
>
> **[3:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=191)** This command produces an output if the specified process ID is associated with a known malicious dynamic link libraries or DLLs.
>
> **[3:24](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=204)** Press Enter.
>
> **[3:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=205)** There is no output, which means the process 448 is not malware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3)
> **Definitions:** is a  (1), stands for (1)
> **Speakers:** - [instructor] (1), - p448 (1)
> **CLI Commands:** find (1)

#### Network connections
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=0)** - [Instructor] Analyzing network connections is another ingredient necessary to complete a criminal case you build as an investigator.
>
> **[0:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=8)** Volatility is capable of reporting active network connections at the time of live acquisition.
>
> **[0:16](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=16)** The plugin for this is netscan.
>
> **[0:19](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=19)** Type volatility --profile=Win7SP1x64 netscan -f,
>
> **[0:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=38)** the location of your memory dump file.
>
> **[0:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=41)** Press Enter.
>
> **[0:43](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=43)** The output shows all the active network connections when the memory dump file was created.
>
> **[0:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=50)** They show the IP addresses and the port numbers being used.
>
> **[0:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=55)** If we picked up a mailer process from our previous lesson, this is a place where we would find the same process opening connections to an outside computer so that criminals can connect to the victim computer and start messing around.
>
> **[1:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=73)** We can also verify and further solidify their criminal activities by checking the command history of the same computer.
>
> **[1:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=82)** The plugin for this is cmdscan.
>
> **[1:26](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=86)** So far, we've only looked at a subset of Volatility features and there is so much more you can do with the program.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=94)** They continue to develop new plugins through annual competitions they organize.
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=100)** The Volatility project appears to be very active, as you can see on their website.
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=106)** I encourage you to read more about their initiatives by following the links here.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=0)** (lively upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=5)** - [Instructor] The latest version of Volatility is 3.0.
>
> **[0:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=11)** You can download it on this website.
>
> **[0:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=15)** Your challenge is to install a Windows version on your computer and produce a process list as I showed you in my Volatility 2.6 Demo on Linux.
>
> **[0:28](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=28)** If you don't already have Python installed on your Windows PC, let's get it by visiting this [python.org](https://python.org) website.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=40)** After installation, type "python -V"
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=49)** to check your Python version on your Windows Command Prompt.
>
> **[0:55](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=55)** Press enter.
>
> **[1:01](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=61)** We have Python 3.12.5.
>
> **[1:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=72)** Ensure that your Python version exceeds the requirement specified on the Volatility 3.0 website.
>
> **[1:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=82)** Now you're ready to install Volatility 3.0.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Windows]] (3), [[Linux]] (1), prompt (1)
> **CLI Commands:** python (6)
> **Versions:** 3.0 (3), 2.6 (1), python 3 (1), 12.5 (1)
> **Prerequisites:** install (2)
> **URLs:** [python.org](https://python.org) (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively upbeat music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=0)** - [Instructor] Were you able to retrieve the process list?
>
> **[0:09](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=9)** Here is a solution.
>
> **[0:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=12)** On the Volatility 3.0 GitHub website, click on Code, and choose Download ZIP.
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=33)** Unzip the ZIP file in your Downloads folder.
>
> **[0:39](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=39)** I put my files in the sub folder called volatility3-develop.
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=49)** On the Windows command prompt, ensure that you're in the correct directory.
>
> **[0:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=59)** Type pip3 install -r requirements.txt.
>
> **[1:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=81)** To install Volatility 3.0 press Enter.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=94)** Also we need the memory dump file to analyze, which is windows.raw this course provides as an exercise file.
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=106)** I downloaded the file in my Downloads folder.
>
> **[1:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=111)** Now we are ready to run our instance of volatility3.
>
> **[1:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=118)** Type python vol.py -f
>
> **[2:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=135)** and then the location of my memory dump file, so it's under c:\Users\instructor\Downloads\windows.raw.
>
> **[2:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=166)** And then space the plugin name, which is windows.pslist.
>
> **[3:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=183)** Press Enter.
>
> **[3:32](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=212)** That's it. You can see the details of all the processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[GitHub]] (1), prompt (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** unzip (1), pip3 (1), python (1)
> **File Paths:** requirements.txt (1), vol.py (1)
> **Env Vars:** zip (2)
> **Versions:** 3.0 (2)
> **Tools:** github (1), command prompt (1)
> **Exercise Files:** zip file (1), exercise file (1)
> **Prerequisites:** install (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980&t=0)** - Thanks for watching this course.
>
> **[0:03](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980&t=3)** It was fun to develop it.
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980&t=5)** If you'd like to advance your knowledge of more core domains in digital forensics, I recommend you take my other courses such as [[[[Cybersecurity Foundations]]- Computer Forensics]], Network Forensics, and Web Forensics.
>
> **[0:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980&t=22)** The digital forensics field is constantly evolving and there are always new technologies to explore.
>
> **[0:29](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980&t=29)** This is why continuing education is critical, and I hope to see you again in my other digital forensics courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (3), [[Cybersecurity]] (1), [[Computer Forensics]] (1), [[Network Forensics]] (1), web (1)
> **Analogies:** such as (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Jungwoo Ryoo]]

## Skills Covered

- Computer Forensics

## Path Context

### In [[Explore a Career in Computer Forensics]]
← [[Cybersecurity Foundations- Computer Forensics]] | **3 of 9** | [[Network Forensics]] →

## Appears In

- [[Explore a Career in Computer Forensics]]

## Related Courses

_Courses sharing skills:_

- [[Wireshark- Malware and Forensics]] — Computer Forensics

---

[↑ Back to top](#)