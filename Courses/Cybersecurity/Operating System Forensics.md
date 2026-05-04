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
  - '[Explore a Career in Computer Forensics](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Computer%20Forensics.md)'
prev_courses:
  - '[Cybersecurity Foundations- Computer Forensics](Cybersecurity%20Foundations-%20Computer%20Forensics.md)'
next_courses:
  - '[Network Forensics](../../Skills/Cybersecurity/Network%20Forensics.md)'
path_nav: '[{"path":"Explore a Career in Computer Forensics","position":3,"total":9,"prev":"Cybersecurity Foundations- Computer Forensics","next":"Network Forensics"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/computer-forensics
status: not-started
created: 2026-05-03
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

#### [Operating system forensics](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/operating-system-forensics?u=76281980&t=0)** - [Instructor] Every computing device we encounter uses its own operating system. Criminals use the intricacies of operating systems to conceal information. So it's up to you to find out where the evidence is hidden. In this course, I'll teach you the foundations of operating system forensics, including where evidence may be hidden, like deleted files, [Slack](../../Skills/Software%20Development/Slack.md) spaces, and alternate data streams and file systems. Hi, I'm Jungwoo Ryoo. For decades, I've been a college professor helping students develop their careers in [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md). So join me, and let's start our investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Slack](../../Skills/Software%20Development/Slack.md) (1), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1)
> **CLI Commands:** find (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/what-you-should-know?u=76281980&t=0)** - Let's talk about what you should know before taking this course. I aim to help you quickly learn essential operating system forensics concepts, and develop an overall understanding of the field. Having background knowledge in [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) would be helpful, and for that, you can check out my other course, [Cybersecurity Foundations](Cybersecurity%20Foundations.md) [Computer Forensics](../../Skills/Cybersecurity/Computer%20Forensics.md). Throughout this course, we'll use [Windows](../../Glossary/Service/Windows.md), Mac OS, and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating systems. But don't worry if you don't have any spare computers to practice your skills on. Watching the demos without doing them yourself will still be effective. Finally, please remember that many operating system forensics investigations require proficiency in using various operating systems and specialized tools, so the more you are exposed to those, the better. All the versions also come in handy because they frequently offer functionality discontinued in the latest releases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Computer Forensics](../../Skills/Cybersecurity/Computer%20Forensics.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Speakers:** - let (1)


### 1. Operating Systems and Digital Forensics

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to OSs and digital forensics](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=0)** - [Narrator] [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) relies heavily on operating systems, or OSs, as one of its major sources of evidence. OSs retain a wealth of information on their users because they have full control and view of the [Hardware](../../Topics/Hardware.md) and software resources. People use OSs daily and constantly leave clues about who they are and what they do. OSs manage computing hardware resources and allocate them to solve their applications. For a computer program like your favorite web browser to run, it needs sufficient processor time and memory space. Let's use a timeshare as an analogy for what an OS does. Software applications are like the customers of a timeshare property, which in our analogy corresponds to computing hardware resources, an OS schedules when programs can use the central processing unit or CPU, just like a timeshare company will do for its customers. OSs also make other hardware resources called peripherals available to applications. The peripherals are devices connected to a computer like printers, monitors, mice or keyboards. Peripherals require special software called drivers to function properly. These drivers are installed on an OS.
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=95)** Because an OS controls almost everything happening on a computer and its applications, it's one of the richest sources of information for digital forensics investigators. OS forensics plays a major role in digital forensics, which is why we treat it as its own discipline and discourse. File systems are one of the most important aspects of OS forensics since they offer a more permanent means of storing data and information, which include traces of criminal activities. File systems vary from one OS to another and they're challenging to keep up with because there are so many of them and they change constantly. Main memory, also known as random access memory, or RAM, keeps most of the application data while programs are running. It's volatile so you could lose the data as soon as the computer is turned off. Because critical information like unencrypted passwords only resides in RAM, you'll need to capture the data while the computer is still running. This process is called live acquisition and it's becoming increasingly important in OS forensics. This course focuses on covering the essential details of file systems and memory forensics. You may have a strong preference for a particular OS, however, if you decide to pursue a digital forensics career,
>
> **[3:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction?u=76281980&t=193)** I recommend you do your best to be proficient with as many OSs as possible. The reason is simple. You never know what OSs you'll encounter in your next investigation and your learning curve will be less deep if you're already familiar with the OS at play.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (4), [Hardware](../../Topics/Hardware.md) (4)
> **Env Vars:** ram (2), cpu (1)
> **Definitions:** known as (1), is called (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [History](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=0)** - [Instructor] In the 60s, computers were huge and expensive. They were as big as a large room, and called mainframes, because people had to share a single machine remotely using terminals connected through a communication channel. I still remember my college days when our email system was available on a mainframe computer. Unix and its variations were these mainframe systems, dominant operating systems, or OSs. Then, a technological revolution called the personal computer, or PC, occurred in the 1980s. PCs started replacing mainframe computers and providing more flexible and economical solutions to everyday tasks like email, [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) processing, and internet surfing. IBM began building PCs in 1981. Disk Operating System, or DOS, and its variants, including [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) DOS, or MS-DOS, were the first OSs for IBM PCs and their clones. These used floppy disks as their storage mechanism. Apple released the Macintosh in 1984 with its own OS called System 1. At this time, forensics tools were primitive and unavailable to the public. Governments funded the development of most of them. Mac SE, in 1987, was the first PC with its own hard drive,
>
> **[1:41](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=101)** with a capacity of a whopping 60 megabytes. This was also when Apple first named its OS as Macintosh System Software. Apple rebranded its OSs as Mac OS in 1996. This has since been succeeded by Mac OS X, OS X, and back to macOS. MS-DOS was command prompt-based, meaning users had to type in text-based commands to communicate with the OS. This changed in 1985 when Microsoft announced its first graphical user interface, or GUI-based OS called [Windows](../../Glossary/Service/Windows.md) OS. Since the first release of Windows OS, Microsoft produced its successors, such as Windows NT, Windows 95 Windows XP, Windows 7, Windows Vista, and [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md). [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) is the PC version of the Unix OS. Its source code was open to the public from its birth in 1991 by Linus Torvalds. Because of its open nature, Linux has explosive growth and numerous distributions. The kernel is the core of Linux OS, and its first version was created in 1991. Although, not as popular as Windows OS and Mac OS among PC users,
>
> **[3:17](https://www.linkedin.com/learning/operating-system-forensics-24652677/history?u=76281980&t=197)** Linux has a strong presence in the [Cloud Computing](../../Topics/Cloud%20Computing.md) and server market because of its availability, versatility, and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). We've come a long way in developing new OS technologies over the past decades. I expect more rapid changes in the next decade, especially in the mobile OS field, driving technological innovations in phones and tablets. It'll be interesting to see how [Android](../../Glossary/Sdk/Android.md) and iOS evolve into their future successors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (8), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (4), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1)
> **Env Vars:** dos (4), ibm (2), gui (1)
> **Code Identifiers:** macos (1), ios (1)
> **Cross-References:** in the next (1)
> **Tools:** command prompt (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Core concepts](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=0)** - [Instructor] There are several core operating system or OS concepts to understand. Building a foundation for these key topics will help you become a more effective [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) investigator and allow you to go beyond simply relying on the results produced by various forensics tools. It's also true that there are problems tools alone cannot solve. These problems will require your expertise and analytical skills. Let's dive into the core concepts of OS. We'll explore managing processes, memory, and input/output or I/O. When you install a program on a computer, it's source code, which is in the form of zeroes and ones, is stored on a storage device, like a solid state drive or SSD. Once you start the program, your OS loads the code into the main memory to be executed on a CPU. A process is a program in this active stage of running. There is a limited number of CPU cores where these processes can be executed, which is why process management is necessary. Depending on the availability of the CPU resources, an OS needs to keep its processes waiting
>
> **[1:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=96)** and run them again. [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) is also mandatory because we don't have unlimited memory space. If you have too many applications running at the same time, the OS will eventually run out of memory space. It will swap out the most inactive process and save its status to a secondary storage device, such as SSD or hard drive. I/O refers to peripheral devices attached to a computer that allows an end user to interact with the software. Examples of I/O devices are keyboards, mice, monitors, printers and storage devices. I/O management is relevant to digital forensics because it monitors all the activities occurring on a computer. Let's say a criminal plugged a USB drive into a computer. The OS' I/O management function records this activity, and the information can be made available should a judicial court requires it as evidence. It's impossible to simultaneously cover all the details of these complicated OS concepts. It usually takes several months to make decent coverage of these subjects in a typical computer science curriculum. I recommend that you continuously learn
>
> **[3:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/core-concepts?u=76281980&t=190)** as much as possible about these core topics and update your knowledge to maintain your competitive edge as a digital forensics investigator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (3), [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) (1)
> **Env Vars:** cpu (3), ssd (2), usb (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Roles in computing](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=0)** - [Instructor] By now, you should have a concrete sense of the OSs critical role in computing. Let's explore this topic further to better understand what an OS does, engage the amount of learning involved. Take process management, for example, as we learned earlier, OSs create a process out of lines of static source code and allocate a memory space to support its execution. The allocated memory space for each process has four distinct areas, text, data stack, and heap. The arrows show the directions in which the stack and heap grow. The text section is where the binary version of program instructions are stored. The data area is where the contents of global and static variables reside. The stack is a memory segment that contains temporary data, including function or method parameter values, local variable contents and return addresses. The heap is a memory space dynamically allocated by a running program. What do you think? Do these terms sound familiar to you? If the terms sound like a foreign language, I recommend increasing your knowledge by taking OS Theory courses from the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-computing?u=76281980&t=94)** In the meantime, I'll do my best to fill you in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (2)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Process management hands-on](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=0)** - [Instructor] Let's start a web server here called apache2. Type: sudo service apache2 start. Press Enter. To check if the new process is running, type: sudo ps -A | grep -i apache.
>
> **[0:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/process-management-hands-on?u=76281980&t=36)** Press Enter. The ps command with the -A option shows all the active processes on my virtual machine. The vertical line is the pipe command that passes the output of the ps command to the grep command. The grep command searches for the keyword apache and displays the lines containing the string of our interest. In this case, apache appears to be running. Let's now stop the web server by typing: sudo service apache2 stop. Press Enter. Let's recall the command we used earlier by pressing the up arrow key. Press Enter. This time, nothing shows up, which means that the apache web server is no longer running. As you can see, the [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) OS plays a key role in one of the critical aspects of computing, namely process management, by allowing us to start, stop, and restart processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **CLI Commands:** apache (4), sudo (3), grep (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Roles in forensics](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=0)** - [Tutor] OS's are crime scenes in digital forensic investigations. They contain traces of digital crimes, such as information theft or ransomware attacks. An investigator's job is to skillfully excavate and preserve the evidence. To do this effectively, in-depth knowledge of OS's is essential. As we learned earlier, OS's allow us to interact with computers to tell them what we want to do. Criminals are not exceptions. When committing crimes through computers or other digital devices, criminals must rely on OS's and leave trails of evidence. These days, one of the first acts law enforcement officers do to investigate a crime is to check a suspect's computer or phone. What officers look for could be as simple as the website's criminals visited and their search terms. If they looked for how to create a bomb, you might be a step closer to linking the people to the crime you're investigating. To find clues like these, investigators must rely on an OS to retain the evidence of their interest. OS's do keep the data. The challenge is knowing where to look and what tools to use to retrieve it. In the search history example,
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/roles-in-forensics?u=76281980&t=95)** tech savvy computer users may know where to find the information and how do we raise it. In [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Edge, you can do this by clicking on the settings and more icon and choosing the history option, like this. Do you see the delete browsing data icon? Criminals can use this feature and remove the entire browsing history. If you're not trained in OS forensics, this user action could end your investigation. However, if you are, you know there are many other places you can look for the search history data. This is the powerful role OS's and their mastery play in [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) and why it's critical to learn OS forensics techniques to be an effective investigator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1)
> **CLI Commands:** find (2)
> **Analogies:** such as (1)
> **Speakers:** - [tutor] (1)

#### [Future](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=0)** - [Instructor] OSs have come a long way since their humble beginnings. The original OS concept of sharing centralized computing resources through mainframes is now being revived in the form of [Cloud Computing](../../Topics/Cloud%20Computing.md). We're also increasingly dependent on mobile devices, which currently have their own specialized OSs, such as iOS and [Android](../../Glossary/Sdk/Android.md). A potential path for the future is to consolidate all these customized OSs into a universal system that blurs the boundaries. Cloud computing enables this convergence by allowing users to move between devices without worrying about copying files. Your information is always in sync with [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) solutions like [OneDrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md). However, we have a long way to go because there are still limitations on what can be done across different [Hardware](../../Topics/Hardware.md) platforms. This is due to variations in processing and memory capacities. There are also porting challenges. Frequently, you cannot run the same code on different flavors of OSs, especially between a traditional OS and its mobile version. A good example is iOS versus Mac OS. They're essentially different OSs,
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=97)** and don't support the same code base. The hope is that a more seamless solution will address these portability problems. Fortunately, we are already seeing much faster progress in the hardware world. Manufacturers continue to announce new devices, such as foldable smartphones, and I'm hopeful that a universal OS will soon follow. From the perspective of a [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) specialist, these convergence trends are positive because we'll be less worried about learning new OSs every time a new device comes out. However, other changes, like more prevalent and stronger data encryption will make it extremely difficult to retrieve readable data. Our only hope may be a Cloud service provider who can unlock the relevant data, but this attempt could still face barriers, such as [Privacy](../../Skills/Data%20Science/Privacy.md) laws and jurisdiction disputes. After all, not everything on your device syncs in the Cloud. Another trend that may help is that OSs increasingly keep track of user activities and store them in the Cloud. This type of surveillance is already occurring on work computers,
>
> **[3:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/future?u=76281980&t=192)** but it seems to be expanding into personal computing. The bottom line here is that digital forensics specialists will have more data to analyze, and intelligent tools leveraging technologies, including [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning will be inevitable to make our work feasible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Hardware](../../Topics/Hardware.md) (2), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (2), [Android](../../Glossary/Sdk/Android.md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** ios (2)
> **Speakers:** - [instructor] (1)


### 2. File System Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to file system types](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=0)** - [Instructor] File systems provide a non-volatile means to store data on computing devices. Here, non-volatile indicates that the information will still be available on your storage solution even after the power is turned off. File systems are indispensable for computing because they store the operating system code. When you switch on your computer, it reads the OS code from the file system and loads it into the main memory. The basic input up system or BIOS is responsible for this initial stage of the startup process. A more modern version called Unified Extensible Former Interface, or UEFI, is slowly replacing BIOS. File systems also store all the code for your favorite applications, such as [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) processors and spreadsheet programs. OSS load the application code into the main memory for execution on a CPU. File systems store all the user data. Your applications allow you to create and store new files on the local file system. There are also system generated files like log files. Whether created by users or the system, these files are highly relevant to [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) investigations because they may contain direct evidence
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379530?u=76281980&t=94)** of criminal activities. File systems make it possible to keep track of individual files after storing them. To do this, an OS must set aside space in a file system to store information about files. Most importantly, their locations. Files and information on them are both data. Therefore, you can say that the details on files are data about data, which is [Metadata](../../Skills/Web%20Development/Metadata.md). Other examples of metadata include name, owner and timestamps of when files are created and last accessed or modified. This chapter explores three of the most popular file systems in news today. These are [Windows](../../Glossary/Service/Windows.md), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and Mac OS. You'll learn many similarities among them, but there are also unique ways the OSS handle the expected file system features we've discussed so far. Let's jump right into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** bios (2), oss (2), uefi (1), cpu (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Windows file systems](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=0)** - [Instructor] [Windows](../../Glossary/Service/Windows.md) File Systems have their origin in [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Disk Operating System, also known as MS-DOS. Many of the original MS-DOS design ideas remain in Windows File Systems. The command prompt Window is a good example. There are three main types of Windows File Systems. They are File Allocation Table or FAT, New Technology File System or NTFS, and Resilient File System or ReFS. ReFS is the latest Windows File System, while NTFS is the successor to FAT. Among these, FAT uses the simplest design. Let's delve into this file type further. There are three versions of FAT that support different partition sizes. The original FAT supported 12-bit entries, so it could handle only up to 256 megabytes. FAT 16 can handle, at most, four gigabytes. As we know, it's now common to have terabytes storage devices. This is why Windows created FAT 32, which can accommodate a maximum of 16 terabytes. Due to its simplicity, FAT is one of the most widely used Windows File Systems. Consumer [Electronics](../../Skills/Software%20Development/Electronics.md) devices, like digital cameras,
>
> **[1:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=98)** often use FAT as their default file. System exFAT or Extended FAT is a more recent file system designed for USB drives and SD cards. It can support larger file sizes, and it's compatible with more OSs than FAT. Let's look at the core design concepts FAT uses to better understand how Windows File Systems generally work. The Partition Boot Sector or PBS is the first sector in a partition. A sector is the smallest physical unit in a file system. PBS contains information on where to find the OS code and the partition details. A cluster consists of a fixed number of sectors. PBS tells how big a cluster is in terms of sectors. It also stores the location of the file table. File tables track each cluster's location on a storage device. When allocating a space for a file, the OS looks for an available cluster or clusters in a file table. Each cluster has its own entry in a file table, which takes up a significant amount of space and is an overhead that comes with FAT. The file table entries don't store file [Metadata](../../Skills/Web%20Development/Metadata.md).
>
> **[3:14](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-file-systems?u=76281980&t=194)** On FAT file systems, the root directory stores metadata and information on the files stored in each directory. All these new acronyms and concepts can be overwhelming. Let's get more familiar with them in our hands-on exercise next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (7), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Electronics](../../Skills/Software%20Development/Electronics.md) (1)
> **Env Vars:** fat (14), pbs (3), dos (2), ntfs (2), usb (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** exfat (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### [Windows hands-on](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=0)** - [Instructor] Let's check out a real life FAT file system and try to apply the concepts we learned in the previous lesson. You can easily create partitions on a storage device by using software tools like GParted. All you have to do is to create a bootable USB drive with GParted installed. This is what GParted looks like when you boot from it. It's easy to see the partitions and create, delete, and resize them. You can see why criminals love to use GParted, it's simple and allows them to erase the evidence that incriminates them. When creating a new partition, tools like GParted also creates a Master Boot Record or MBR in the first sector of your storage device. The MBR contains the partition table. Each FAT partition has its own Partition Booth Sector or PBS in the beginning. Although GParted is useful, you'll need a more professional tool like The Sleuth Kit or TSK to investigate a file system more in depth. In this exercise, let's see if we can extract the partition table from a partition. We'll use a utility called mmls, which is part of TSK. Please note that I'm using [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md),
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=100)** which already comes with TSK. Type mmls /dev/sdb.
>
> **[1:52](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=112)** Press Enter. Here, /dev/sdb refers to the second storage device attached to my computer. What you see are the details of the partition table stored on /dev/sdb. According to the partition table, I have two partitions which use FAT32 and NTFS as their file formats. Next, we'll use another TSK command called fls. This displays the files and directories of a specific partition Type fls /dev/sdb1.
>
> **[2:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/windows-hands-on?u=76281980&t=158)** Press Enter. Note that we added the number, 1, to our reference to the storage device, /dev/sdb. The number indicates a specific partition, in this case, it's the first partition. This command lists all the files and directories as promised. You can see my test file called test.txt. r/r denotes a regular file, while d/d indicates a directory. v/v are TSK virtual files and directories. You should now have a good feel for what real-life implications technical terms like partition and partition tables have in the context of [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md). TSK has many other features you can use to explore file systems, and you should try them out on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1)
> **Env Vars:** tsk (6), fat (2), mbr (2), usb (1), pbs (1)
> **Warnings:** note that (2)
> **File Paths:** test.txt (1)
> **Definitions:** refers to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Linux file systems](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=0)** - [Instructor] [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) uses a default file system called Extensible File System or ext. ext has been evolving since its creation in 1992. Its latest version is ext4. Unix existed well before Linux and the ext file systems build on the Unix file system design concepts. Like its cousin Unix, Linux treats everything as a file, including directories and devices like printers. On a Linux file system, a directory is simply another file containing information about the files in the same container. In Linux, a Superblock stores details on the configuration of its file system. It keeps track of the locations of the critical [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) of the file system and their sizes. Superblock entries include the total number of free blocks and the size of each block. ext uses blocks and block groups, while [Windows](../../Glossary/Service/Windows.md)-based file systems rely on clusters. Block groups are a set of continuous blocks necessary to enhance the performance of the ext file system. Block groups attempt to keep fragments of the same file
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-file-systems?u=76281980&t=97)** as close to one another as possible. Each block group has its own Superblock, data blocks, and block bitmap, which is a sequence of bits representing a block's state. A block bitmap can be used to indicate whether a block is available or not. A block group also includes group descriptors, a inode table, and an inode bitmap. One purpose of the group descriptor block is to indicate how full a block group is. An inode is a data structure that describes files and directories in the ext file system. It stores the [Metadata](../../Skills/Web%20Development/Metadata.md) on the files and directories. Linux keeps track of inodes in a table called inode table. The inode bitmap is similar to the block bitmap, but maintains information on the inode's status, such as whether it's being used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (6), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Linux hands-on](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=0)** - [Instructor] Let's try out some [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) commands to explore various inode details. Inodes are what Linux uses to store file or directory [Metadata](../../Skills/Web%20Development/Metadata.md). Each file or directory has a unique inode number. Let's see if this is true. Type ls -ai and press enter. This gives you a glimpse of the structure of a directory inode. The numeric values to the left hand side of the file and directory names are inode numbers. The first item in the listing is a number and a dot. One dot in Linux means the current directory. Therefore, the inode number for the current directory is 2752513. Two dots in Linux signifies the parent directory, and the number next to them here is its inode number. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is a list of inode number and file name pairs. That's it. It's that easy. The metadata items a directory inode contains are the mappings between inode numbers and the current directory, the parent directory and the files in the current directory. Let's now take a closer look at file inodes and their metadata.
>
> **[1:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=93)** The Linux command to use here is stat. Type stat and the file name of your choice. Here, my file is called forensic. Type stat, space, forensic. Press Enter. Do you see the inode number of the file? There are also file permission information, user ID, and group ID next to the first access label.
>
> **[2:10](https://www.linkedin.com/learning/operating-system-forensics-24652677/linux-hands-on?u=76281980&t=130)** The second access label shows when a user read the file last time. There are also timestamps for change and modification. What's not listed here, but included in the file inode is a list of pointers to the actual data blocks that contain the file data. There's only a limited number of these pointers. This implies that the maximum number of data blocks of file inode can point to, the size, the maximum file size of a Linux file system. Inodes are the most fundamental building blocks of a Linux file system. Learning more details on your files through inode commands is an essential skill. Therefore, a good understanding of inodes will serve you well in your future investigations of Linux-based systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (8), [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **CLI Commands:** ls (1)
> **Speakers:** - [instructor] (1)

#### [Apple file systems](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=0)** - [Instructor] Like its [Windows](../../Glossary/Service/Windows.md) and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) counterparts, Apple's file systems have also evolved over the years. The Macintosh File System or MFS was the very first Apple file system. It was released in 1984 and designed for floppy disks. The hierarchical File System or HFS was next, and this was necessary to offer larger and faster storage [Hardware](../../Topics/Hardware.md). Apple launched HFS in 1985 to support its first hard disk drive. HFS+ replaced HFS in 1998 with the release of Mac OS 8.1. It's an enhanced version of HFS. HFS+ uses sectors as its base storage unit. One sector in HFS+ is equivalent to 512 bytes. An allocation block is a collection of contiguous sectors. HFS+ uses allocation blocks to build a file. The default size of an allocation block is eight sectors or four kilobytes. An extent is a series of contiguous allocation blocks that do not have a predefined size. Allocation blocks correspond to clusters in Windows FAT
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-file-systems?u=76281980&t=95)** and to blocks in Linux ext. A volume header is equivalent to BIOS partition block or BPB in Windows systems, or Superblock in Linux. It occupies the first 1,024 bytes of each volume. Apple File System or APFS is Apple's latest file system technology. It has succeeded HFS+ since Mac OS High Sierra and saves space and power. APFS is more resilient to crashes, efficient in backing up data, and provides speed improvements. The evolution of Apple File Systems from MFS to APFS demonstrates how OS technologies constantly change. It's another reminder of the necessity of continuing education in [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Hardware](../../Topics/Hardware.md) (1), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1)
> **Env Vars:** hfs (9), apfs (3), mfs (2), fat (1), bios (1)
> **Definitions:** is a  (2)
> **Versions:** 8.1 (1)
> **Speakers:** - [instructor] (1)

#### [Apple hands-on](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=0)** - [Instructor] It's time to do some hands-on again. Apple files consist of two parts called data fork and resource fork. As its name suggests, data fork stores file data created by users through applications like [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) processors and spreadsheets. Resource fork contains file [Metadata](../../Skills/Web%20Development/Metadata.md) and application-specific information such as icons and window locations. Let's try this out. Open your terminal and locate your favorite folder. Let's pick a file. Here I already created a file called apple.jpg. Type ls -l@ apple.jpg.
>
> **[0:53](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=53)** Press Enter. Do you see the line starting with com.apple.metadata? These are the information stored in the resource fork _kMDItemUserTags contains the names and colors of associated Finder tags. Finder tags allow MacOS users to categorize their files by assigning specific colors to them. An example Finder use would be to attach a color like blue to all the documents to be reviewed by your coworker. The number 42 next to the file attribute is the size of the space needed to store the Finder tag information. That is 42 bytes are necessary to store the Finder tag color information. As you can see, there's also another file attribute. These file attributes take up a significant amount of space. This is why it's important to be efficient when storing the file metadata. Just like the other OS we've checked out so far, Apple OS are getting better at managing the overhead associated with its file system. APFS is the latest solution, but I'm sure there'll be endless future enhancements. How Apple implements the file attributes also allows criminals to abuse the same mechanism, which is why it's important
>
> **[2:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/apple-hands-on?u=76281980&t=145)** to know about what we learned in this lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** such as (1), just like (1)
> **CLI Commands:** ls (1)
> **Env Vars:** apfs (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 3. File Recovery

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to file recovery](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=0)** - [Instructor] One of the major tasks of [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) investigators is to recover and preserve data. Special attention is necessary because deleted, damaged, or hidden files present substantial challenges. Tools and techniques for recovering files are available, and learning how to use them is necessary to pursue a digital forensics career. Salvaging deleted files could be as simple as using a free digital forensics software application like Autopsy, which automatically detects and displays them for recovery. If a software solution doesn't work, a manual approach, like data carving, provides a viable choice. You'll still need tools like software utilities, but you are expected to have the skills and insight to navigate through a file system and retrieve what you seek. This takes a higher level of training than using a fully-automated [Computer Forensics](../../Skills/Cybersecurity/Computer%20Forensics.md) software suite that does everything for you. What makes the job of a digital forensics specialist even more challenging is the hide and seek nature of the field. Criminals constantly hide their data in the increasingly vast expense of a storage device. Knowing where to look is essential, which is why this chapter will cover potential hiding places such as [Slack](../../Skills/Software%20Development/Slack.md) space and alternate data streams. The more you learn about the data hiding tricks,
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24377627?u=76281980&t=97)** the more options you have when searching for evidence. Based on our discussion so far, it's obvious that you cannot always rely on automation, and you should develop problem solving skills to overcome many potential obstacles ahead of you. Resources are often limited, and you must work with what you have. This is why creativity and flexibility are important qualifications for a competent digital forensics investigator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (5), [Computer Forensics](../../Skills/Cybersecurity/Computer%20Forensics.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1)
> **Tools:** slack (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data carving](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=0)** - Data carving is a technique for locating the start and the end of a file, and its fragments in between to eventually retrieve the original file in its entirety. Data carving is necessary because criminals temper with files. One of the most common tempering methods is to delete a file which doesn't erase its data, but simply removes an entry in a file table such as FAT or inode. Here, data carving techniques help investigators find the beginning of the deleted file and hopefully the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of it. The second tampering technique is to alter file extensions to mislead investigators. Changing a file extension from JPG to docx to throw off a forensics investigation is a good example. The third trick is to hide information in a [Slack](../../Skills/Software%20Development/Slack.md) space, which is a remaining free space after creating a file in a cluster or block. Tools such as Bmap makes it straightforward to write and retrieve data to and from a slack space. Later in this chapter, we'll take a closer look at carving data in a slack space using Bmap. Sparse files contain a significant number of sectors of null bytes that are actually allocated
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving?u=76281980&t=94)** in the file system. Applications use sparse files to have more control over the logical structure of an individual file. [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or VMs use sparse files to initially create their [Data Storage](../../Skills/Data%20Science/Data%20Storage.md). There's no need to store gigabytes of zeros in hexa decimal when the file system can just make a note of the empty space reserved for VM. Awareness of sparse files is important when carving data because it allows investigators to reconstruct files properly without removing the null bytes. Although their values are null, null bytes are still part of the file. Therefore, it's essential to restore the null bytes to their original form. There are also other use cases in which we need data carving, including hidden data in unallocated spaces or alternate data streams, or ADS. We'll take a deep dive into these in the following lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Slack](../../Skills/Software%20Development/Slack.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1)
> **Env Vars:** fat (1), jpg (1), ads (1)
> **Tools:** slack (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (2)
> **Cross-References:** later in (1)
> **Speakers:** - data (1)

#### [Data carving preparation](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=0)** - [Instructor] Before we can try data carving, we need to take some preparatory steps, which involve initializing a USB drive and creating new partitions. We then copy a JPEG file to our FAT partition and delete it so that we can try to carve the deleted picture file in our next hands-on lab. I'm doing this particular hands-on exercise on [Windows](../../Glossary/Service/Windows.md) and using the diskpart command, you can find a similar command like diskutil on Mac too. First, get an empty USB drive and plug it into your computer. We'll then use diskpart to create partitions. Press the Windows key and start typing diskpart. Click on diskpart. Click on Yes. Let's make it full screen. Type list disk, press Enter. My USB stick is Disk 1. Type select disk 1, press Enter.
>
> **[1:20](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=80)** Next, let's initialize the USB stick by typing clean, press Enter. This erases everything on your USB. Make sure that you have nothing important on it before pressing Enter. Now let's create a partition by typing create partition primary
>
> **[1:50](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=110)** size=100. We are creating a primary partition whose size is 100 megabytes here. The size is 100 megabytes because we just need a very small partition for our demo. press Enter. Let's create another primary partition to take up the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the USB drive space. Type create partition primary, and press Enter.
>
> **[2:25](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=145)** Let's check out the partitions we just created. Type list partition. List partition, press Enter. Select the first partition by typing select partition 1, and press Enter.
>
> **[2:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=169)** Let's format the first partition with format quick fs=fat32 label="carving"
>
> **[3:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=187)** and press Enter. Let's select the second partition by typing select partition 2, press Enter.
>
> **[3:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=202)** Let's format the second partition with format quick fs=ntfs label="data".
>
> **[3:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=218)** Press Enter. Note that we used FAT32 for the first partition and NTFS for the second partition. I did this just to show you how easy it is to create different types of partitions using the format command. Type exit to quit diskpart. Let's check if the partitions are there by opening File Explorer. The new partition called CARVING shows up as expected. Now let's copy a JPEG file and then delete it to see if we can recover it in our next lesson. By deleting the file, we're removing the JPEG file entry from the file allocation table or FAT. Now let's switch to a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) machine and get an image of the partition we just created. [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) investigators never conduct their investigation directly on an evidence drive, which is why we are creating the image. We'll then be able to search for the deleted file in the image file of the USB stick. The USB is mounted and present on the desktop. Double click the USB icon, CARVING. Since we deleted the JPEG file, we see nothing on the partition other than the folder generated by the system. Double click the folder.
>
> **[5:11](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=311)** There's no picture file. Let's now use dd to create an image. First type sudo fdisk -l
>
> **[5:27](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=327)** to find out how Linux is recognizing the partition. press Enter. It appears as dev/sdb1 on my machine. Now, type sudo dd if, which means input file,
>
> **[5:48](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=348)** =/dev/sdb1 of, output file,
>
> **[5:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-preparation?u=76281980&t=356)** =carving.dd. Press Enter. Earlier, we intentionally kept the partition size small so that this doesn't take a long time. Now, type ls -l to check if the new image file has been created. Press Enter. As you can see, it's a success. Now, we are ready to do some data carving to retrieve the deleted JPEG file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1)
> **Env Vars:** usb (9), jpeg (5), fat (2), carving (2), fat32 (1)
> **CLI Commands:** find (2), make (2), sudo (2), ls (1)
> **UI Navigation:** click on (2), select the (2), switch to (1)
> **Analogies:** picture (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Data carving hands-on](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=0)** - [Instructor] JPEG files have a specific header signature pattern, that is they always start with JFIF. Grep is a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) command for searching for a texturing. Let's see if you can find the string JFIF in the image file we just created. Type grep JFIF carving.dd, press Enter. The output indicates that there's a match, but we need to know the location of the JFIF string, which in turn tells us where the JPEG file begins. The oba option of dd allows us to find the offset value of the search result. In other words, it shows how many bytes are between the start of the image and where the string match is. Type grep -oba JFIF carving.dd. Press Enter. You can see that the offset value is 4198406, which is the location of the JFIF string in the image. JPEG files also have a distinct trailer. The trailer consists of unprintable bites,
>
> **[1:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=96)** which is why I cannot do a simple string search. Here, we need another tool called xxd that converts a binary file into its hexadecimal or hex representation. The hex pattern we are searching for is ff d9 Type xxd carving.dd | grep 'd9 ff'. Note that we're using little endian here, which we'll talk about in the next chapter. The vertical line in Linux is called pipe. It sends the output of the xxd command as an input to the grep command. This allows grep to do its text search in the hexadecimal dump of the carving.dd image instead of its original binary format. Press Enter. There are a number of matches, but let's try the one closest to the beginning of the JPEG file header signature whose offset value was 4198406 in decimal. We need to convert this number to hex because that's what is used by xxd to indicate offset values. Type echo "obase=16;
>
> **[3:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=192)** 4198406"
>
> **[3:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=201)** | bc, press Enter. This command does the conversion, and the result is 401006. We use the output base or O base number 16 here because hex numbers use base 16. Now go back to the search results, and we can see that 4110a0 is the match right after 401006. Based on this information, let's carve the data we want out of the entire image file that is carving.dd. We need to convert the hex number 4110a0 back to decimal, which is 4264096. Divide 401006 by 512, which is the size of a sector in FAT. The result is 8,200. Next, divide 4264096 by 512, which produces 8,328. Subtracting 8,200 from 8,328 gives us the number of sectors between the beginning and the end of the image file we're trying to carve. The distance is 128 sectors. Now type dd if=carving.dd
>
> **[5:04](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=304)** of=carved.jpg
>
> **[5:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=312)** bs=512 skip=8200
>
> **[5:22](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-carving-hands-on?u=76281980&t=322)** count=128. The dd command uses the skip option, which allows us to skip the first 8,200 sectors, and only extract the picture file whose size is 128 sectors. Bs=512 indicates that the size of a sector is 512. Press Enter. As you can see, this produces a new file called carved.jpg. Let's open it. Congratulations, the data carving exercise is a success.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **Env Vars:** jfif (6), jpeg (4), fat (1)
> **CLI Commands:** grep (6), find (2)
> **Definitions:** is a  (2), in other words (1), is called (1)
> **Cross-References:** in the next (1), go back to (1)
> **Analogies:** picture (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Slack space](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=0)** - [Instructor] [Slack](../../Skills/Software%20Development/Slack.md) space is leftover storage created from writing a file to a cluster which consists of individual sectors on [Windows](../../Glossary/Service/Windows.md) OS's. A sector often contains 512 bytes of data, but the size varies depending on the file system configurations of your choice. Fsutil is a Windows command that allows users to see their file system details, including the bytes per sector information. Let's give fsutil a try. Start your Command Prompt on Windows as Administrator. Click on Yes. Type fsutil fsinfo ntfsinfo c:. Press Enter. According to this output, this file system is set up to have 512 bytes per sector. The Bytes Per Cluster line says 4,096, which means that each cluster has eight sectors. That is 4,096 divided by 512 is eight. If your file size is 100 bytes, seven of your sectors are unoccupied in the cluster, as well as the remaining space in the first sector,
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=95)** which is 412 bytes. These unused spaces are called slack spaces. It's possible to hide information in the slack spaces. Let's do that now on our [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) machine. First, download bmap from this [GitHub](../../Skills/Software%20Development/GitHub.md) website, and install it on your Linux machine. I had to install gcc-multilib to make bmap work on [Ubuntu](../../Skills/Web%20Development/Ubuntu.md). Let's first create a file by typing echo "slack space test" > slack.txt. Press Enter. The greater than symbol is redirection in Linux. It sends the output of the echo command, which is the text between the double quotation marks to a new file called slack.txt. Let's check the file content by typing cat slack.txt. Press Enter. You should see this text slack space test. Let's check the file size by typing ls -l slack.txt, press Enter, and the size is 17. Bmap is the utility we use to find out
>
> **[3:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=193)** how much slack space is present in a file. Type sudo bmap
>
> **[3:23](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=203)** - -mode slack slack.txt, press Enter. According to this output, the slack size is 4,079. This means that we have 4,079 bytes of free space to hide our data. Now type echo "Top Secret" | bmap --mode putslack slack.txt. We need to be a super user to run the bmap command, which is why I put sudo in front of it. This command inserts the string Top Secret into the slack space of the slack.txt file. Press Enter. The command executed successfully. Now the secret text is in the slack space. Type ls -l slack.txt. Press Enter. The file size is still 17 bytes because we didn't add the secret message to the actual file. Now type cat slack.txt, and press Enter. As expected, the output doesn't include our secret message. To see the secret message,
>
> **[4:56](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=296)** type sudo bmap
>
> **[5:02](https://www.linkedin.com/learning/operating-system-forensics-24652677/slack-space?u=76281980&t=302)** - -mode slack slack.txt. Press Enter. Only by using this command, you can see the Top Secret text I hid earlier in the slack space, right here. As an investigator, you'll be using a utility like bmap to check if there is anything hidden in the slack space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Slack](../../Skills/Software%20Development/Slack.md) (23), [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Tools:** slack (23), command prompt (1), github (1)
> **File Paths:** slack.txt (10)
> **CLI Commands:** sudo (3), cat (2), ls (2), make (1), find (1)
> **Definitions:** means that (2), is a  (1)
> **Prerequisites:** install (2), set up (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Data hiding and ADS](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=0)** - [Instructor] We just tried hiding data in a [Slack](../../Skills/Software%20Development/Slack.md) space, which was quite straightforward with the help of a tool. There are also many other ways to hide data in a file system. One of them is using the alternate data stream, or ADS, on [Windows](../../Glossary/Service/Windows.md). ADS is an NTFS feature that allows users to store extra data streams in addition to the default file data. The original purpose of ADS was to mirror a similar feature found in hierarchical file system, or HFS, on MacOS. NTFS uses a concept called attributes. It sees a file as a collection of attributes, such as its name, security settings, and data. Each attribute has a unique ID called an attribute type code, and optionally a meaningful name. The master file table, or MFT, is the file table used to store these attributes in NTFS. As I mentioned earlier, the MFT contains attribute data that are both [Metadata](../../Skills/Web%20Development/Metadata.md) and user data. An attribute that can fit within an MFT record is a resident attribute while non-resident attributes, such as the data attribute, require allocating clusters outside the MFT. NTFS allows multiple data attributes,
>
> **[1:36](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=96)** enabling criminals to hide data in their own custom data streams, which are not obvious to end users. Today's [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) tools are ADS-aware, but investigators need to be knowledgeable about ADS to actively seek criminal use of these features. The default data stream is unnamed and used to save file data. We just tried hiding data in a slack space, which was quite straightforward with the help of a tool. There are also many other ways to hide data in a file system, including using the alternate data stream, or ADS, on Windows. ADS is an NTFS feature that allows users to store extra streams of data in addition to the default file data. The original purpose of ADS was to mirror a similar feature found in hierarchical file system, or HFS, on MacOS. NTFS uses a concept called attributes. It sees a file as a collection of attributes such as file name, security settings, and its data. Each has a unique ID called an attribute type code and, optionally, a meaningful name. The master file table, or MFT, is the file table used to store these attributes in NTFS.
>
> **[3:15](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=195)** As I mentioned earlier, the MFT contains attribute data that are both metadata and user data. An attribute that can fit within an MFT record is a resident attribute while non-resident attributes, such as the data attribute, require allocating clusters outside the MFT. NTFS allows multiple data attributes, which is why criminals are able to hide data in their own custom data streams, which are not obvious to end users. The digital forensics tools in news today are ADS-aware, but it's important for you to be knowledgeable about ADS so that you're able to actively seek and use these features. The default data stream is unnamed and used to save file data. [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) is an enhanced version of the default command line interface, or [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), on Windows OS. PowerShell is now part of the default Windows installation. To find PowerShell on [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md), start typing PowerShell in the search box like this. We can use PowerShell to display all the data streams associated with a specific file. Let's first go to my pictures folder by typing cd pictures.
>
> **[4:51](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=291)** Press Enter. Type dir. I'm going to be using the hacker.jpeg file for my demonstration. Type Get-Item, the file name, which is hacker.jpeg,
>
> **[5:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-and-ads?u=76281980&t=307)** - stream *. Press Enter. The output shows that there's only one data stream associated with the file. In addition to simply displaying data streams, we can also add new ones. Let's take a closer look at this in our next lesson. I hope you're excited.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (5), [Windows](../../Glossary/Service/Windows.md) (4), [Slack](../../Skills/Software%20Development/Slack.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (2)
> **Env Vars:** ads (10), ntfs (8), mft (8), hfs (2), cli (1)
> **Tools:** powershell (5), slack (2), command line (1)
> **Definitions:** is an  (3), is a  (2)
> **Analogies:** such as (4)
> **CLI Commands:** find (1), cd (1)
> **Speakers:** - [instructor] (1), - stream (1)
> **UI Navigation:** go to (1)

#### [Data hiding hands-on](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=0)** - [Instructor] In this lesson, we'll first create an alternate data stream or ADS to later demonstrate how to detect it. Creating an ADS is simple. All you have to do is to use the output redirection command, which is a greater than sign. Just like the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) redirection symbol, this command takes the output of the first command and sends it as an input to the next. Now open a command prompt on your [Windows](../../Glossary/Service/Windows.md) machine. Let's first create a new empty file called ads.txt by typing type null greater than sign ads.txt. Press Enter. Enter type dir to see if the file has been created. Press Enter. Note that it's an empty file whose size is zero. Now let's add the second data stream by typing echo ADS test ads.txt:secret. Press Enter. The greater than sign redirects the output of the echo command into the ads.txt file. The output here is the string ADS test and the output redirection command puts it in the second data stream of the ads.txt file,
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=97)** whose name is secret. Now type dir adds.txt. Press Enter. Please note that the file size is still zero, although we added the new data stream secret. This is why end users won't notice the difference until they use the [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) command get item. Now let's switch to PowerShell. Type get-item space ads.txt space dash stream space asterisk. Press Enter. Now you see the secret data stream added to the default file data stream. To view the content of the new data stream, type get-content space ads.txt space dash stream space secret. Press Enter. And you see the secret text. Instead of adding a text as a new data stream, it's also possible to add an executable file, which is much more dangerous. Let's switch back to the command prompt window.
>
> **[3:13](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=193)** The command is type space C:Windows\System32\notepad.exe redirection
>
> **[3:30](https://www.linkedin.com/learning/operating-system-forensics-24652677/data-hiding-hands-on?u=76281980&t=210)** ads.txt:note. Please note that notepad.ext is an executable file. Press Enter. Surprisingly, this works. Now let's go back to our PowerShell window again. Type get-item space ads.txt space dash stream space asterisk. Press Enter. You can now see that the third data stream called note has been added. The danger here is that the executable could be a malicious application. It's very possible for criminals to run a program hidden in an alternate data stream to steal information or inflict damage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (3), [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **File Paths:** ads.txt (9), adds.txt (1)
> **Tools:** powershell (3), command prompt (2)
> **Env Vars:** ads (4)
> **Warnings:** note that (3)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** switch to (1)


### 4. Live Acquisition

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to live acquisition](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=0)** - [Instructor] Live acquisition is a [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) technique that takes a snapshot of the main memory of a running computer system. Primary memory and random access memory or RAM are other names for main memory. The importance of live acquisition is increasing for multiple reasons. First, volatile information is only kept in the main memory. This includes information on active network connections, encryption keys, and passwords. In particular, unencrypted data and passwords are invaluable in obtaining access to evidence that could make or break a criminal case. With strong encryption and password protected data, it's often impossible to acquire any data at all these days. Another important type of data is the network transaction details. These details allow documenting a crime in action by capturing messages exchanged between criminals. Imagine a malware program communicating with its writer during a live acquisition attempt. This is comparable to a surveillance camera capturing a crime in action. Here, the relevant information includes users who were signed on and the details of all the active processes at the moment of the memory capture. Some programs and their data reside only in the main memory.
>
> **[1:37](https://www.linkedin.com/learning/operating-system-forensics-24652677/introduction-24379529?u=76281980&t=97)** You lose them when you shut down your computer. Malware tend to use this volatile nature of main memory to minimize its footprint and to evade detection. There are also disadvantages associated with live acquisition. Because a software tool is needed to conduct live acquisition and occupies a space in the main memory, live acquisition inevitably compromises the integrity of the acquired evidence. Corrupt data in main memory can also cause a system crash. Despite these potential downfalls, live acquisition is becoming an indispensable tool for digital forensics professionals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (2)
> **CLI Commands:** make (1)
> **Env Vars:** ram (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Addressing](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=0)** - [Instructor] In the early days of computing, main memory was a premium space because it was much more expensive and limited. My first computer's main memory size was in kilobytes. We've come a long way since that time. Gigabyte main memory sizes are now common. This change presents its share of new opportunities for exploits and challenges, particularly in [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md). The main memory space must be divided into manageable blocks with assigned addresses, regardless of size. Depending on its implementation, the block size can vary. Let's assume that each block consists of one byte, for example. Every byte is composed of eight bits. Therefore, one memory block can house eight individual binary digits or two hexadecimal digits. One hexadecimal digit represents four binary numbers. Imagine that there is a number you want to store in the main memory. The number is 10001000 in binary, which translates into 88 in hexadecimal. This hex number 88 fits nicely in one block of memory. What if we have a bigger number like 1000 1000 0010 0010
>
> **[1:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/addressing?u=76281980&t=100)** in binary equivalent to 8822 hex? In this case, breaking this up into two separate memory blocks is necessary. Let's say you have two memory blocks available at two contiguous locations: 0x0007 and 0x0008. Here, the prefix 0x simply indicates that we're using a hex number for addresses. If we put the most significant bite of 8822, which is 88 in the first memory slot 0x0007, and 22, next in 0x0008, this sequential flavor of writing data to memory is called Big-Endian. Putting the least significant bit first in the memory slots, writing 22 first and 88 next is called Little-Endian. These differences are important to recognize because they affect how you interpret the data you collect from the main memory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [Memory structure](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=0)** - [Instructor] There are primarily three different types of computer memory: primary, secondary, and cache. Primary memory refers to the main memory called RAM, or random access memory. There is also read-only memory or ROM, which stores essential information necessary to boot a computer. The BIOS uses ROM. Secondary memory is required to store extra data that is not needed immediately for processing. Examples are solid state drives or SSDs, hard drives, and USB drives. The secondary memory devices also store data while computers are turned off. Cache memory is the smallest in capacity, but the fastest. To be fast, its size has to be small. Its sits between a central processing unit or CPU and main memory. Cache memory works as a buffer and holds data that is soon to be used by the CPU. This way, the CPU has almost immediate access to the data it needs and doesn't have to wait for the slower main memory unit to respond. The goal is to minimize the time it takes to load data from the main memory into the CPU. Whatever is in the cache memory is a subset of what the main memory contains. Therefore, dumping the contents of the main memory
>
> **[1:35](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-structure?u=76281980&t=95)** is sufficient for live acquisition. Making a memory dump is straightforward. Thanks to the tools that are readily and freely available such as FTK Imager, all you have to do is run the software and make a few clicks. The software automatically stores a memory dump file on the medium of your choice for future analysis. Not too bad, right?

> [!info]- Semantic Content
>
> **Env Vars:** cpu (4), rom (2), ram (1), bios (1), usb (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Virtual memory](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=0)** - [Instructor] Virtual memory is a way to expand main memory by leveraging secondary memory. For example, the OS can allocate space on a solid state drive and utilize it as virtual memory. It gives end users an illusion of a much larger memory space than what the main memory is actually able to provide physically. No matter how large the main memory is, it's always possible to eventually run out of space. Because of this possibility, it's necessary to have a backup plan, which in this case is virtual memory. All OSs implement virtual memory and create virtual memory addresses to map perceived memory locations to either physical addresses in main memory or secondary memory addresses. When the main memory starts to run out, an OS will swap the data which is unlikely to be used again soon out of the main memory and move it to a secondary storage device. This creates space for other processes requiring immediate memory access until they themselves are swapped out. The OS logic dictates the priority of using the main memory space. One disadvantage of using virtual memory is its impact on performance. Constant swapping slows down
>
> **[1:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=93)** the processing speed of a computer. Therefore, the less swapping occurs, the better. This is why it's ideal to have a large main memory space, which minimizes the use of virtual memory. In the context of virtual memory, the memory segments being swapped are called pages. The page sizes are dependent on the OS doing [Memory Management](../../Skills/Web%20Development/Memory%20Management.md). A page or swap file is used to store swapped out pages on a secondary memory device. Live acquisition needs to include this page or swap file for completeness. On [Windows](../../Glossary/Service/Windows.md) 11, you can see and configure the details of your virtual memory. First, open File Explorer. Next, select This PC and then right click on it. Choose Properties. Scroll down. Choose Advanced system settings. Under Performance, select Settings. Then, choose Advanced. Finally, we can see the virtual memory setting. As you can see, my current total paging file size is 512 megabytes. Remember to include the pager swap file in the second memory
>
> **[3:08](https://www.linkedin.com/learning/operating-system-forensics-24652677/virtual-memory?u=76281980&t=188)** when you perform live acquisition. This applies to [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) and Mac too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Memory Management](../../Skills/Web%20Development/Memory%20Management.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Memory dump analysis with Volatility](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=0)** - [Instructor] Volatility is an open source memory dump analysis program. Shown here is the Volatility Project website. The name Volatility stems from the volatile nature of main memory. Volatility is written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and available on both [Windows](../../Glossary/Service/Windows.md) and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). Let's install volatility on my Linux machine. Type sudo apt-get install volatility, press enter,
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=33)** type password, press enter, and type Y. As you can see, the volatility 2.6 installation is successful. Please note that this installation process may not work on your flavor of Linux. You may need an alternate way of installing Volatility 2.6. Type volatility -h, press enter. The output shows a number of plugins that come with the default volatility installation, which are what makes the tool so useful and powerful. In a real-life situation, investigators receive a memory dump file to analyze. They don't necessarily know its source, which is why the image info plugin is important. Type volatility -f ./Documents/windows.raw imageinfo.
>
> **[1:46](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=106)** Here, -f specifies the location of the target memory dump file to analyze. In my case, my memory dump file is located in my documents folder and the name of the file is windows.raw. The ./ indicates the current directory. The last parameter is the name of the plugin to be used, which is imageinfo. Press enter. Here, Volatility displays the details on the memory dump file, including the profile information. The first item in the suggested profile list is Win7SP1x64.
>
> **[2:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/memory-dump-analysis-with-volatility?u=76281980&t=153)** That is 64-bit Windows 7 with Service Pack one installed. The guess is correct because I acquired the memory dump from a machine running a 64-bit Windows 7 version with a service pack installation. Volatility is a great free tool to get familiar with because of its rich set of features that are useful in many everyday investigations. Let's learn more about its capabilities in the next lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (5), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1), sudo (1), apt (1)
> **Versions:** 2.6 (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Processes](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=0)** - [Instructor] One of the most useful Volatility commands allow you to check what processes were running when live acquisition was done. The plugin to use is pslist. Type volatility --profile=Win7SP1x64
>
> **[0:31](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=31)** pslist -f ./Documents/[Windows](../../Glossary/Service/Windows.md).raw.
>
> **[0:40](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=40)** The -- profile option lets Volatility use an appropriate profile for its analysis. We're using Win7SP1x64 here because we obtained this information from the image info plugin from the previous lesson. Press Enter. The output lists all the processes that were running when the memory dump was made. If there were malware running on the evidence computer, you'd find one or more suspicious processes here. Another way to list processes is in their parent child relationship. This is significant because malware programs often spawn child processes to do damage behind the scene. The plugin to be used here is pstree. Type volatility --profile=Win7SP1x64
>
> **[1:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=109)** pstree -f ./Documents/windows.raw.
>
> **[1:58](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=118)** Press Enter. When you see two dots or more ahead of a process name, the same process is a child of the process immediately above itself. PPid stands for parent process ID, which makes the relationship even clearer. The services that exe process has many child processes whose PPid is 448. After finding a suspicious process that spawned multiple child processes, it's time to check if it's truly malicious. For this, we can use the malfind plugin. Type volatility --profile=Win7SP1x64 malfind
>
> **[2:59](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=179)** - p448 -f the file location,
>
> **[3:07](https://www.linkedin.com/learning/operating-system-forensics-24652677/processes?u=76281980&t=187)** ./Documents/windows.raw. This command produces an output if the specified process ID is associated with a known malicious dynamic link libraries or DLLs. Press Enter. There is no output, which means the process 448 is not malware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3)
> **Definitions:** is a  (1), stands for (1)
> **Speakers:** - [instructor] (1), - p448 (1)
> **CLI Commands:** find (1)

#### [Network connections](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=0)** - [Instructor] Analyzing network connections is another ingredient necessary to complete a criminal case you build as an investigator. Volatility is capable of reporting active network connections at the time of live acquisition. The plugin for this is netscan. Type volatility --profile=Win7SP1x64 netscan -f,
>
> **[0:38](https://www.linkedin.com/learning/operating-system-forensics-24652677/network-connections?u=76281980&t=38)** the location of your memory dump file. Press Enter. The output shows all the active network connections when the memory dump file was created. They show the IP addresses and the port numbers being used. If we picked up a mailer process from our previous lesson, this is a place where we would find the same process opening connections to an outside computer so that criminals can connect to the victim computer and start messing around. We can also verify and further solidify their criminal activities by checking the command history of the same computer. The plugin for this is cmdscan. So far, we've only looked at a subset of Volatility features and there is so much more you can do with the program. They continue to develop new plugins through annual competitions they organize. The Volatility project appears to be very active, as you can see on their website. I encourage you to read more about their initiatives by following the links here.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=0)** (lively upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=5)** - [Instructor] The latest version of Volatility is 3.0. You can download it on this website. Your challenge is to install a [Windows](../../Glossary/Service/Windows.md) version on your computer and produce a process list as I showed you in my Volatility 2.6 Demo on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). If you don't already have [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) installed on your Windows PC, let's get it by visiting this [python.org](https://python.org) website. After installation, type "python -V"
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=49)** to check your Python version on your Windows Command Prompt. Press enter. We have Python 3.12.5.
>
> **[1:12](https://www.linkedin.com/learning/operating-system-forensics-24652677/challenge?u=76281980&t=72)** Ensure that your Python version exceeds the requirement specified on the Volatility 3.0 website. Now you're ready to install Volatility 3.0.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** python (6)
> **Versions:** 3.0 (3), 2.6 (1), python 3 (1), 12.5 (1)
> **Prerequisites:** install (2)
> **URLs:** [python.org](https://python.org) (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=0)** - [Instructor] Were you able to retrieve the process list? Here is a solution. On the Volatility 3.0 [GitHub](../../Skills/Software%20Development/GitHub.md) website, click on Code, and choose Download ZIP.
>
> **[0:33](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=33)** Unzip the ZIP file in your Downloads folder. I put my files in the sub folder called volatility3-develop.
>
> **[0:49](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=49)** On the [Windows](../../Glossary/Service/Windows.md) command prompt, ensure that you're in the correct directory. Type pip3 install -r requirements.txt.
>
> **[1:21](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=81)** To install Volatility 3.0 press Enter.
>
> **[1:34](https://www.linkedin.com/learning/operating-system-forensics-24652677/solution?u=76281980&t=94)** Also we need the memory dump file to analyze, which is windows.raw this course provides as an exercise file. I downloaded the file in my Downloads folder. Now we are ready to run our instance of volatility3. Type [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) vol.py -f
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
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** unzip (1), pip3 (1), python (1)
> **File Paths:** requirements.txt (1), vol.py (1)
> **Env Vars:** zip (2)
> **Versions:** 3.0 (2)
> **Tools:** github (1), command prompt (1)
> **Exercise Files:** zip file (1), exercise file (1)
> **Prerequisites:** install (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/operating-system-forensics-24652677/next-steps?u=76281980&t=0)** - Thanks for watching this course. It was fun to develop it. If you'd like to advance your knowledge of more core domains in [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md), I recommend you take my other courses such as [[[[Cybersecurity Foundations]]- [Computer Forensics](../../Skills/Cybersecurity/Computer%20Forensics.md)]], [Network Forensics](../../Skills/Cybersecurity/Network%20Forensics.md), and Web Forensics. The digital forensics field is constantly evolving and there are always new technologies to explore. This is why continuing education is critical, and I hope to see you again in my other digital forensics courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (3), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Computer Forensics](../../Skills/Cybersecurity/Computer%20Forensics.md) (1), [Network Forensics](../../Skills/Cybersecurity/Network%20Forensics.md) (1)
> **Analogies:** such as (1)
> **Speakers:** - thanks (1)


## Instructor

- [Jungwoo Ryoo](../../Instructors/Cybersecurity/Jungwoo%20Ryoo.md)

## Skills Covered

- Computer Forensics

## Path Context

### In [Explore a Career in Computer Forensics](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Computer%20Forensics.md)
← [Cybersecurity Foundations- Computer Forensics](Cybersecurity%20Foundations-%20Computer%20Forensics.md) | **3 of 9** | [Network Forensics](../../Skills/Cybersecurity/Network%20Forensics.md) →

## Appears In

- [Explore a Career in Computer Forensics](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Computer%20Forensics.md)

## Related Courses

_Courses sharing skills:_

- [Wireshark- Malware and Forensics](Wireshark-%20Malware%20and%20Forensics.md) — Computer Forensics

---

[↑ Back to top](#)