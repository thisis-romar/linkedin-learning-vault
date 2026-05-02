---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: computer-science-principles-digital-information
url: "https://www.linkedin.com/learning/computer-science-principles-digital-information"
level: Beginner
updated: 7/14/2016
learners: 70757
skills:
  - Computer Science
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE1lLV5zX5Kdg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117531373?e=2147483647&amp;v=beta&amp;t=WPdX17wliMw9xycoBKUQwQBcxYd_GkQITCT2VGB21L8"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Cybersecurity Fundamentals]]'
  - '[[Networking and Administration Fundamentals]]'
  - '[[Software Development Fundamentals]]'
next_courses:
  - '[[Computer Science Principles- The Internet]]'
  - '[[Computer Science Principles- The Internet]]'
  - '[[Computer Science Principles- The Internet]]'
path_nav: '[{"path":"Cybersecurity Fundamentals","position":1,"total":12,"prev":null,"next":"Computer Science Principles- The Internet"},{"path":"Networking and Administration Fundamentals","position":1,"total":10,"prev":null,"next":"Computer Science Principles- The Internet"},{"path":"Software Development Fundamentals","position":1,"total":10,"prev":null,"next":"Computer Science Principles- The Internet"}]'
path_count: 3
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/network-and-system-administration
  - topic/software-development
  - skill/computer-science
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Computer%20Science%20Principles%20Digital%20Information.md)

![Computer Science Principles Digital Information](https://media.licdn.com/dms/image/v2/C4E0DAQE1lLV5zX5Kdg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117531373?e=2147483647&amp;v=beta&amp;t=WPdX17wliMw9xycoBKUQwQBcxYd_GkQITCT2VGB21L8)

# Computer Science Principles Digital Information

> Computers, at their most basic level, store information in bits—a series of on and off states represented by ones and zeroes. Using this binary language, the information in images, audio, video, text, and other files can be saved and shared. This principle is the basis of all computing, including programming. Here Doug (Rich) Winnie explains the basics of binary: how digital information is represe

> [LinkedIn Learning](https://www.linkedin.com/learning/computer-science-principles-digital-information) | Beginner | 71K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know beforehand](#what-you-should-know-beforehand)
  - [Contact](#contact)
- [**1. Innovation and Technology**](#1-innovation-and-technology) (2 videos)
  - [History of innovation](#history-of-innovation)
  - [Impact of coding and programming](#impact-of-coding-and-programming)
- [**2. Computer Communications**](#2-computer-communications) (4 videos)
  - [Yes and no answers with binary](#yes-and-no-answers-with-binary)
  - [Binary and bits](#binary-and-bits)
  - [Communicating with bits](#communicating-with-bits)
  - [Digital communication](#digital-communication)
- [**3. Number Systems**](#3-number-systems) (4 videos)
  - [Abstraction of numbers](#abstraction-of-numbers)
  - [Binary numbers](#binary-numbers)
  - [Bit size and values](#bit-size-and-values)
  - [Overflow](#overflow)
- [**4. Encoding and Sending Text**](#4-encoding-and-sending-text) (2 videos)
  - [ASCII and Unicode](#ascii-and-unicode)
  - [Encoding formatted text](#encoding-formatted-text)
- [**5. Working with Large Amounts of Data**](#5-working-with-large-amounts-of-data) (4 videos)
  - [File sizes and bytes](#file-sizes-and-bytes)
  - [Text compression](#text-compression)
  - [Encoding images](#encoding-images)
  - [Image compression and file formats](#image-compression-and-file-formats)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary](#summary)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=1)** - Computer science is more than just coding and programming.
>
> **[0:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=4)** It's about understanding how [[Hardware]] and software work together to create tools that the world uses every day.
>
> **[0:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=11)** Information in tons of different [[Forms]] from text, values, pictures, to logic need to be represented in a way that the hardware and software understand.
>
> **[0:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=22)** That requires abstracting what we see, hear, and understand and represent it in a digital way.
>
> **[0:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=27)** A way that a computer can accept, process, and return back to us.
>
> **[0:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=33)** My name is Doug Winnie and in this course, you'll learn about the lowest level of how a computer understands the world around us in binary.
>
> **[0:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=41)** Yes and no, ones and zeroes.
>
> **[0:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=45)** Binary is the basis for everything we do with computers.
>
> **[0:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=48)** It plays a huge part in how we program, transmit, and process information and data.
>
> **[0:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=55)** Using this baseline system, we're able to represent numerical values, characters, text, images, and video.
>
> **[1:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=63)** Through continued innovation, this will extend to virtual and augmented reality in forms that we can't even imagine.
>
> **[1:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=70)** To understand how to control and harness this technology, it is important to learn how it all works and comes together.
>
> **[1:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/welcome?u=76281980&t=77)** By starting with the principles of computer science, you can begin you journey to be a better coder and programmer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Forms]] (2)
> **Analogies:** imagine (1)
> **Speakers:** - computer (1)

#### [What you should know beforehand](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980&t=1)** - This course is designed for anyone who is curious about how computers, [[Hardware]], and software work.
>
> **[0:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980&t=6)** You don't have to have any programming experience in order to complete this course and you don't need any specific devices or computers.
>
> **[0:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980&t=13)** This course is designed around The College Board Computer Science Principles Advance Placement Curriculum.
>
> **[0:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980&t=19)** And is designed for anyone from high school to adult and wants to learn about computers or as a foundation for entering into computer science programs, careers, or just to learn programming and coding.
>
> **[0:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980&t=30)** For educators, this course covers four of the seven big ideas from the AP curriculum.
>
> **[0:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980&t=36)** Specifically the topics we'll cover big idea number 1, creativity, 2, abstraction, 3, creativity, 2, abstraction, 3, data and information, and 7, global impact.
>
> **[0:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/what-you-should-know-beforehand?u=76281980&t=48)** This course is part of a series of courses that will cover all areas of the AP curriculum and extend beyond into practical application of the concepts taught in this series.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Speakers:** - this (1)

#### [Contact](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=1)** - [Voiceover] There are multiple ways to contact me or keep up with my courses or other materials that I cover.
>
> **[0:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=6)** In addition to creating courses here, I also do a lot of writing and publishing in other places as well.
>
> **[0:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=11)** So, here's how to find me.
>
> **[0:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=13)** Years ago, I created a handle for myself called sfdesigner and it's kind of just stuck, even though I've added programming and coding to my design shops.
>
> **[0:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=21)** So, you'll see that pop up a lot if you try to find me online.
>
> **[0:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=25)** The first place you can go to is my webpage, [dougwinnie.com](https://dougwinnie.com).
>
> **[0:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=29)** On this site, I have a lot of information on the projects I'm working on and general updates and additional information on the courses, apps, and materials I create.
>
> **[0:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=36)** On [[LinkedIn]], you can follow me and read my posts and updates at [linkedin.com/in/sfdesigner](https://linkedin.com/in/sfdesigner).
>
> **[0:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=43)** On LinkedIn, I do a lot of articles and posts on working, teaching, and living in a technology industry.
>
> **[0:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=49)** Plus other anecdotes from my professional life that I hope can be valuable to you.
>
> **[0:53](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=53)** Next, you can find me on Twitter under @sfdesigner.
>
> **[0:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=57)** On Twitter, I share a lot about my professional and personal life.
>
> **[1:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=60)** But I generally use hashtags if there are areas that you are specifically looking for.
>
> **[1:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=65)** I love Instagram and I post all kinds of photos and also I have a number of Instagram series that might be valuable to you.
>
> **[1:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=72)** You can find me on Instagram under @sfdesignerdw.
>
> **[1:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=76)** Note the extra dw at the end.
>
> **[1:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=78)** Finally, there's Facebook.
>
> **[1:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=80)** While I have a personal Facebook account, I'd recommend that you go to my Facebook fan page, which is located at [facebook.com/sfdesignerdw](https://facebook.com/sfdesignerdw).
>
> **[1:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=89)** I'd love to hear from you, so check out the website and reach out whichever means works best for you.
>
> **[1:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=94)** But just a heads-up, while I love hearing from everyone, just remember that I can't answer any [[Technical Support]] questions about the course.
>
> **[1:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=102)** For those, be sure to follow the appropriate links on the site.
>
> **[1:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/contact?u=76281980&t=105)** Talk to you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Technical Support]] (1)
> **CLI Commands:** find (4)
> **URLs:** [dougwinnie.com](https://dougwinnie.com) (1), [linkedin.com](https://linkedin.com) (1), [facebook.com](https://facebook.com) (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [voiceover] (1)


### 1. Innovation and Technology

[↑ Back to Table of Contents](#table-of-contents)

#### [History of innovation](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=1)** - Innovation with technology we attribute to things like smartphones, virtual reality or the internet.
>
> **[0:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=6)** But in reality almost everything that has evolved for thousands of years is based on expansion of technology.
>
> **[0:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=13)** While we think of technology as processors or pixels today, in centuries past it was about steam, electricity, iron, language, and even fire.
>
> **[0:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=23)** Today innovation has hundreds of different paths that go out in almost all different directions, ranging from biology, chemistry, physics, communication, mathematics, geography, fashion and medicine.
>
> **[0:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=36)** There are times of great leaps of innovation like the classical age with the Greeks and the Romans.
>
> **[0:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=41)** And the renaissance in Italy and the industrial revolution in Britain and France.
>
> **[0:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=46)** But even in times of great struggle like the middle ages times of war and conflict innovation has a way to help societies break out of these periods of difficulty with the printing press, physics and computer science.
>
> **[1:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=60)** At each break through of innovation along the timeline it disrupts what was done before and creates a new field for us to explore and expand upon.
>
> **[1:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=69)** Sometimes it replaces a previous field of study.
>
> **[1:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=72)** Sometimes it creates a completely new parallel branch that grows and expands on its own.
>
> **[1:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=77)** But each point of innovation, new jobs and paths are created.
>
> **[1:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=82)** In this course we'll focus on the innovation of computer science which has transformed how we communicate, process information and conduct our daily lives.
>
> **[1:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=92)** The idea of a computer was first created by Charles Babbage in the analytical engine.
>
> **[1:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=97)** Many of the basic concepts of computer logic today existed in Babbage's work back in the early 19th century.
>
> **[1:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=104)** The analytical engine was programmed by Ada Lovelace who is considered the first computer programmer.
>
> **[1:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=110)** The birth of modern computer science is largely credited to Alan Turing who formalized the concepts of algorithm and computation using a general purpose computer called the Turing machine.
>
> **[2:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=122)** With the concepts of computers and computer science this new industry started to take off.
>
> **[2:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=128)** Throughout the 20th and 21st centuries the center of gravity of computers moved from the room the size of a house to a desktop, to your lap and now in your pocket or even on your wrist.
>
> **[2:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=140)** But all this innovation goes back to the basic principles of computer science.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=145)** Programming, the internet and [[Data Storage]] are all possible through the basic abstraction of information that we all recognize into the native language of modern computer can interpret and understand.
>
> **[2:39](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=159)** While we might be here today, when you look towards future innovation it will be based on the principles that have been built and have evolved in the past century.
>
> **[2:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=169)** Even as new innovations like speech, virtual reality and social networking grow and expand they will do so based on the groundwork that exists today.
>
> **[2:58](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=178)** The impact of the innovation of computers and computer science extends far beyond the computer.
>
> **[3:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=184)** In the areas of art and fashion computers are used to build 3D printed clothing and pieces of art using code that generates patterns and designs using [[Algorithms]] found in nature such as fractals.
>
> **[3:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=196)** In the area of medicine robotics and sensors are able to enter the body and detect medical conditions that would otherwise have gone unnoticed and could lead to misdiagnosis or future complications.
>
> **[3:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=207)** In transportation analyzing the data of how people commute and use vehicles and mass transit informs cities and urban planners on how to best configure train and bus routes, timing of traffic lights and the number of lanes needed to reduce congestion.
>
> **[3:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/history-of-innovation?u=76281980&t=222)** All of these are industries that through computer science and technology have their own breakthroughs in innovation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1), [[Algorithms]] (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - innovation (1)

#### [Impact of coding and programming](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=0)** - With all the innovation that exists with computers, there is one undisputed fact.
>
> **[0:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=5)** Computers are dumb.
>
> **[0:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=7)** They are!
>
> **[0:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=8)** If it wasn't for programmers that tell computers what to do, they would just sit there.
>
> **[0:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=13)** Coding and programming are what allow all the [[Hardware]] innovations that have been created come alive.
>
> **[0:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=19)** The way the programming works with hardware can happen at many levels.
>
> **[0:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=24)** So here are some examples.
>
> **[0:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=25)** To work with hardware you need to have a system that can communicate directly to the hardware components on your computer.
>
> **[0:31](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=31)** That can be the processors, memory or devices that are attached through ports on your computer.
>
> **[0:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=37)** The software that does this is called the operating system.
>
> **[0:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=41)** This is the overall system that interfaces the software that we work with every day to the hardware that is in the machine.
>
> **[0:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=48)** It used to be that the operating system was very simple.
>
> **[0:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=51)** It used to be a simple text terminal that you would enter commands to and execute basic programs.
>
> **[0:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=57)** Over the years the operating system has become more sophisticated and easier to use.
>
> **[1:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=61)** But the operating system has other components to it as well.
>
> **[1:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=65)** It defines how information is stored on the storage devices using various file formatting systems.
>
> **[1:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=70)** It also defines how programmers can access the hardware on the machine for use in their own applications.
>
> **[1:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=76)** This is done through what is called an API or application programming interface.
>
> **[1:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=82)** Let's say you have an awesome new computer.
>
> **[1:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=84)** You are excited to play the latest game on it and blast the alien into smithereens.
>
> **[1:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=89)** The operating system provides an API for how the game can interact with the hardware.
>
> **[1:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=94)** It defines what the game can and cannot do.
>
> **[1:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=98)** Without the API a game could do very bad things to your computer.
>
> **[1:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=103)** So the API protects your system and creates a clearly defined way that programmers can work with hardware and with other software.
>
> **[1:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=111)** The operating systems we work with every day are things like macOS, [[Linux]], [[Windows]], iOS and [[Android]].
>
> **[1:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=119)** Each of these are the base system that allows the apps we use interact with the hardware of the system and they give us a way to navigate and access information and resources on all of our devices.
>
> **[2:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=131)** The makers of the operating system also provide a set of tools that allow developers to build applications that work with the system.
>
> **[2:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=140)** These are called SDKs or [[Software Development]] kits.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=145)** These kits are tools that help programmers build applications that can be installed on top of the operating system.
>
> **[2:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=152)** The SDKs include three basic parts.
>
> **[2:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=155)** The first are a bunch of pre-built sets of code that do a lot of the heavy lifting for you.
>
> **[2:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=160)** It defines things like numbers, arithmetic, working with the file system, user interface controls like buttons and windows, and a way to navigate the app using a keyboard, mouse, touch, motion or other sensors.
>
> **[2:53](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=173)** The second piece is the programming language.
>
> **[2:56](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=176)** This is the language that the programmer uses to tell the computer what to do when the user wants to run the app.
>
> **[3:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=183)** The programming language communicates instructions to the computer just like we would do with each other using a language like English.
>
> **[3:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=190)** Some operating systems support multiple different types of languages.
>
> **[3:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=194)** But they all essentially do the same thing.
>
> **[3:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=196)** It's like someone that speaks English and someone that speaks Spanish both talking to a person that knows both.
>
> **[3:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=202)** They're all able to communicate with the operating system.
>
> **[3:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=205)** The third piece is the most critical.
>
> **[3:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=207)** It's called the interpreter or compiler.
>
> **[3:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=210)** The interpreter takes the instructions that are written and when needed, is able to instruct the operating system on what to do.
>
> **[3:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=218)** It interprets the language that you understand as a programmer to the language that's understood by the computer and it does it live as the program runs.
>
> **[3:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=227)** Its sibling is called a compiler.
>
> **[3:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=230)** Instead of interpreting everything live, it takes everything you program and converts it all to the native language that is understood by the operating system and the hardware.
>
> **[4:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=240)** With this, the code can run much more efficiently.
>
> **[4:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=243)** But the limitation is, if you want to change it you need to reprogram it and recompile it.
>
> **[4:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=248)** All three of these components have one thing in common.
>
> **[4:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=251)** In the end they need to be translated into the native language of the computer.
>
> **[4:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=255)** Whether you're writing a novel, playing a game or composing music, every single application, including the operating system itself, has to be translated into the language that the computer can understand.
>
> **[4:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/impact-of-coding-and-programming?u=76281980&t=268)** It is the basis for storage, communication and logic for all computers and networks throughout the world and even some things outside of our world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (10), [[Windows]] (2), [[Linux]] (1), [[Android]] (1), [[Software Development]] (1)
> **Env Vars:** api (4)
> **Definitions:** is called (3)
> **Code Identifiers:** macos (1), ios (1)
> **Analogies:** just like (1), it's like (1)
> **Tools:** terminal (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - with (1)


### 2. Computer Communications

[↑ Back to Table of Contents](#table-of-contents)

#### [Yes and no answers with binary](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=1)** - Are the lights on?
>
> **[0:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=2)** The answer is pretty simple.
>
> **[0:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=4)** It's either yes or no.
>
> **[0:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=8)** When you ask yourself that question, there are only two possible answers.
>
> **[0:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=12)** This is the basis of all computers.
>
> **[0:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=15)** Two or binary.
>
> **[0:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=17)** Binary is a system where there only are two possible states.
>
> **[0:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=21)** Yes or no, on or off.
>
> **[0:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=25)** Computers contain trillions of these binary switches and they all indicate states of on or off.
>
> **[0:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=32)** There are a couple ways we can represent a binary state.
>
> **[0:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=35)** One is with something called a Boolean value.
>
> **[0:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=38)** Booleans are values that contain two options, true or false.
>
> **[0:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=43)** So you can make a statement like, "I have more than three pencils."
>
> **[0:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=47)** And the answer would either be true or false.
>
> **[0:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=50)** The other way is using numbers.
>
> **[0:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=52)** Numbers represent a lot of different things in the computing world but these numbers will represent the most basic elements of our computer.
>
> **[1:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=60)** In binary, the number one represents on and zero represents off.
>
> **[1:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=65)** Binary information can be stored and communicated by using states of on or off.
>
> **[1:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=71)** Microchips have logic gates in them which use electricity to determine the on and off signals.
>
> **[1:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=76)** Storage devices can change and save binary states to be able to access them later.
>
> **[1:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=81)** And networks can communicate by sending signals with on and off states defined within them.
>
> **[1:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=87)** A signal binary state is called a bit.
>
> **[1:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=89)** It is the smallest amount of storage you can measure.
>
> **[1:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/yes-and-no-answers-with-binary?u=76281980&t=93)** Using this basic unit, we can build larger and more complicated representations of information and create a way for us to take things that we recognize everyday and represent them using these tiny values called bits.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - are (1)

#### [Binary and bits](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=1)** - We can represent the binary states of on and off as numbers.
>
> **[0:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=5)** The binary number system is based on only two digits, one and zero.
>
> **[0:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=10)** For a binary state of on, that's represented by a one.
>
> **[0:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=14)** For a state of off, that's represented by a zero.
>
> **[0:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=18)** But storing a single value doesn't make much sense on its own.
>
> **[0:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=22)** You'd want to store multiple values in a row.
>
> **[0:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=25)** To do that, you would create a string of them and since they're all numbers, you're just creating a larger number with multiple digits, or bits.
>
> **[0:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=34)** A grouping of eight binary digits is called a byte, spelled with a Y.
>
> **[0:39](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=39)** A byte is a common measure of data that we use every day.
>
> **[0:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=43)** A kilobyte is 1,024 bytes.
>
> **[0:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=46)** A megabyte is 1,024 kilobytes.
>
> **[0:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=49)** A gigabyte is 1,024 megabytes.
>
> **[0:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=52)** And a terabyte is 1,024 gigabytes.
>
> **[0:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=57)** On a computer, you might have a drive that can store a terabyte of data.
>
> **[1:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=61)** A terabyte can contain almost nine trillion bits.
>
> **[1:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=64)** That's over nine trillion individual states of on or off.
>
> **[1:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=68)** But what do we do with all these bits?
>
> **[1:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=71)** Each of these bits holds an on or off state that represents a tiny part of a larger piece of information.
>
> **[1:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=78)** Whether it is a single number, a piece of text called a string, a document, photo, song, movie, or a computer program.
>
> **[1:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=87)** All these things we work with every day are translated into bits that are stored, transmitted, and translated by computers and networks.
>
> **[1:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=95)** The process of taking information that we recognize today, like a string of text, and converting it to a binary number, is called encoding.
>
> **[1:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=103)** You are taking something that we represent in a way humans can understand it and are finding a way to convert it using a specific process into a string of binary digits that can be transmitted, processed, and stored by a computer or network.
>
> **[1:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=119)** Using that same process but in reverse, those individual binary digits can be converted back to the information that we work with every day.
>
> **[2:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=128)** This is called decoding.
>
> **[2:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=129)** It reconstitutes the files that are transmitted or accessed and presents them to us in a format that we can recognize.
>
> **[2:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=136)** But in order for the encoding and decoding process to work, the bits that contain these values need to be stored, accessed, or transmitted.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-and-bits?u=76281980&t=145)** The way this is done is by developing a protocol, or a set of rules, for how bits are transmitted and defines the basis for how digital communications work.

> [!info]- Semantic Content
>
> **Definitions:** is called (3), is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - we (1)

#### [Communicating with bits](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=1)** - We can transmit information and code it as bits in a number of ways.
>
> **[0:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=5)** Since bits represent states of on or off, which we represent as ones and zeros, we can communicate those to other people.
>
> **[0:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=13)** For instance let's take a single question, "Am I happy?"
>
> **[0:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=17)** The answer could be yes or no represented as a bit using one or zero.
>
> **[0:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=23)** We can send that value to someone else and they will then have that binary bit of data.
>
> **[0:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=28)** But that's all they'll have.
>
> **[0:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=30)** All they'll have is the one or the zero that we sent.
>
> **[0:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=34)** Those numbers don't really mean anything.
>
> **[0:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=37)** In addition to their actual value both sides need to know what the question or state the value represents.
>
> **[0:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=44)** That is part of the encoding process.
>
> **[0:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=47)** Both sides need to have a shared understanding of what the value means.
>
> **[0:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=52)** When they both understand the question being answered then they are able to successfully communicate using that bit.
>
> **[0:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=59)** But that's sending a single bit of information.
>
> **[1:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=62)** Take for example this communication.
>
> **[1:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=65)** If the sender and receiver need to communicate multiple questions using bits they need to have a shared understanding of what all the values mean.
>
> **[1:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=74)** They could be sending a sequence of four numbers, which could mean "Am I hungry?", "Am I thirsty?", "Am I bored?", and "Am I tired?".
>
> **[1:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=83)** The answers would be yes or no, or one and zero.
>
> **[1:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=87)** Now that both understand the sequence the message is encoded, meaning that the answers are converted into binary bits and then sent.
>
> **[1:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=95)** On the receiving end the bits are received and are translated back into the answers to the questions and multiple values have been communicated.
>
> **[1:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=105)** Now this is communicating the answer one time.
>
> **[1:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=108)** If we continually answered the question we would need to establish the size of the message that's being sent.
>
> **[1:54](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=114)** This is called the bit size.
>
> **[1:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=117)** With the encoding information we know that the bit size is four so we can repeat this message over and over, and the receiver will be able to understand and see if that state changes.
>
> **[2:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=129)** For instance if the sender gets tired that bit would change and the receiver would be able to know that.
>
> **[2:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=137)** Another thing that needs to be agreed upon is the speed that the bits get sent.
>
> **[2:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=141)** If the sender sends things too fast for the receiver to get them then the receiver will have no idea what was being sent since they are over whelmed.
>
> **[2:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=150)** You also don't wanna send information too slow because that means that you aren't able to send as much information over a specific period of time.
>
> **[2:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=160)** This is called the bitrate.
>
> **[2:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=162)** It defines the number of bits that are transmitted each second.
>
> **[2:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=167)** In our example above we can define a bitrate of one, meaning that a single bit is sent each second.
>
> **[2:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=175)** If both sides agree to it they can adjust that to a speed of two.
>
> **[2:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=179)** The important thing is that both sides need to agree on the rate of the message.
>
> **[3:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=184)** But you at some point want to communicate both ways.
>
> **[3:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=188)** This is when the bit size and bitrate both are necessary.
>
> **[3:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=192)** Here's how.
>
> **[3:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=193)** The sender will send their encoded four bit message to the receiver.
>
> **[3:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=197)** They send it at a one bit per second rate, or 1 bps.
>
> **[3:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=201)** They both understand that the encoded message is four bits long and answers four specific questions.
>
> **[3:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=208)** When the receiving end receives the message they can then send the same encoded message back the other way.
>
> **[3:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=215)** The message is sent one way then back the other.
>
> **[3:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=218)** And this process can repeat as many times as you want.
>
> **[3:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=221)** Using this method you are sending the same sized message back and forth.
>
> **[3:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=227)** But what if you wanted to continually send messages one way and then notify the receiver when you're finished?
>
> **[3:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=232)** Well you can do that too and you can do it all with bits.
>
> **[3:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=235)** Let's take this message.
>
> **[3:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=237)** The sender is continuing to answer all the questions from the original four bit message.
>
> **[4:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=242)** But they add another bit at the end that encodes the question "Am I finished?".
>
> **[4:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=248)** If the answer's no, or zero, then the sender can continue to send the message and the receiver knows to continue listening.
>
> **[4:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=256)** If the answer is yes, or one, then the receiver can start sending their messages.
>
> **[4:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/communicating-with-bits?u=76281980&t=262)** It all comes down to the encoding and the shared understanding of the bit size of the information.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), means that (1)
> **Analogies:** for instance (2), for example (1)
> **Speakers:** - we (1)

#### [Digital communication](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=1)** - Transmitting digital information in the form of states of on or off or ones and zeros can be done in a lot of different ways.
>
> **[0:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=9)** There are three that you'll encounter whenever you connect to the internet or to any type of network, radio, electrical, and optical.
>
> **[0:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=18)** Let's start with radio.
>
> **[0:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=20)** Most homes and offices use Wi-Fi to connect to networks and to the internet.
>
> **[0:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=26)** Wi-Fi networks are based on radio waves that transmit binary states based on alternating the radio waves that send information.
>
> **[0:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=34)** By encoding information into binary data, it is then translated into these varying radio waves and can be transmitted, received, and converted back to binary data, and decoded into its original format.
>
> **[0:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=48)** Wi-Fi and radio communications are great for short distances.
>
> **[0:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=52)** But as you know, if you take your laptop or device far away from a hotspot, your signal gets weaker and weaker until, at some point, it isn't strong enough to reliably send information.
>
> **[1:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=63)** Radio can also be noisy.
>
> **[1:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=65)** When you have one hotspot, transmissions don't encounter much interference, but if you have multiple hotspots, you can create a lot of radio noise that can create interference and break down the reliability of the network.
>
> **[1:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=78)** There are certain bands up and down the various radio frequencies that are reserved for different types of transmissions like satellite information, FM and AM radio, or for other types of communication.
>
> **[1:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=90)** Hotspots use unique channels to reduce interference and noise.
>
> **[1:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=95)** But there are still limitations.
>
> **[1:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=97)** Because of these, radio is generally used as a way to connect individual devices to a network.
>
> **[1:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=103)** But other formats like electricity can support larger and more complex communication.
>
> **[1:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=109)** With electricity, you can send electric pulses over wires that represent binary states.
>
> **[1:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=115)** If you've ever used an Ethernet cable, that's based on electric transmission of data.
>
> **[2:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=120)** Data that's encoded into binary states and transmitted is then sent using these electric pulses.
>
> **[2:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=127)** Electric and wire communications are the foundation of much of digital communication, especially within a home or [[Microsoft Office|office]].
>
> **[2:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=135)** For instance, while you might use Wi-Fi that uses radio waves to transmit data, the hotspots you connect to are wired in a complex network of transmission lines that use electricity.
>
> **[2:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=147)** Electricity is used for a large amount of communications.
>
> **[2:31](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=151)** But electricity does have some limitations with speed and reliability, especially along great distances.
>
> **[2:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=158)** That's where optical comes in.
>
> **[2:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=161)** Optical or light communications uses pulses of light sent along a cable of glass or plastic.
>
> **[2:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=168)** The speed of light, when sent through glass, can be about 200,000 kilometers per second or about 124,000 miles per second.
>
> **[2:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=177)** That's pretty fast.
>
> **[2:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=179)** But glass has other limitations, mostly cost.
>
> **[3:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=183)** Optical cables are much more expensive than cables based on electricity, so they are generally used for the long haul communications across continents and oceans.
>
> **[3:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=193)** But together, radio, electrical, and optical power digital communication across the globe and even outside of it.
>
> **[3:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=202)** Using special frequencies, we're able to send and receive digital information with satellites and probes that we send to other planets in our solar system.
>
> **[3:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=212)** But the further they go out, the longer it takes to get the information, which is why it can take months or even years to get all of the information recorded by an exploration probe visiting someplace in our solar system like Pluto, and sending that information back to Earth.
>
> **[3:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=228)** But let's stop for a second and think about something.
>
> **[3:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=231)** With something like light, how would you encode on and off?
>
> **[3:56](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=236)** Well, you do that like a light switch.
>
> **[3:58](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=238)** But what about when you have multiple zeros or offs in a row to send?
>
> **[4:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=243)** This is when bit rate becomes really important.
>
> **[4:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=247)** If I know that I have a bit rate to my communications like one bit per second, I know that for each second, if there is no light, that is a single zero.
>
> **[4:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=257)** If there's no light for two seconds, that would be two zeros.
>
> **[4:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=261)** Now, computers can send and receive information much faster than one bit per second, and we represent that by measuring the bandwidth of the transmission, which is the theoretical maximum that a communication system can support.
>
> **[4:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=275)** Bandwidth is represented as a specific bit rate.
>
> **[4:39](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=279)** For example, if you're using a computer with a USB 3 port, it has a bandwidth of five gigabits per second.
>
> **[4:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=285)** It's important to remember that it's gigabits, not gigabytes.
>
> **[4:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=290)** Older Wi-Fi networks like the 802.11b standard can transmit at 11 megabits per second.
>
> **[4:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=297)** New ones like the 802.11ac can transit at 1.3 gigabits per second or 1300 megabits per second.
>
> **[5:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=306)** The names 802.11b, g, n, and ac are names used to find the types of wireless network.
>
> **[5:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=315)** Wi-Fi networks can form to a standard, so devices of different types can communicate together.
>
> **[5:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=321)** But you need to have matching support on both ends.
>
> **[5:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=325)** An older laptop that can understand 802.11g networks won't understand anything from an 802.11ac network.
>
> **[5:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=333)** Luckily, most Wi-Fi networks can transmit across multiple standards, providing backwards compatibility for older devices.
>
> **[5:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=341)** The last thing to consider with digital communications is the time it takes to get a message from one place on the globe to another.
>
> **[5:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=348)** This is called latency.
>
> **[5:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=351)** Latency is usually measured in milliseconds or one thousandth of a second, which is really fast.
>
> **[5:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=357)** If you're communicating in two directions, latency can be an issue, since the longer it takes for one side to communicate to the other, that is doubled if the other side needs to send information back in response.
>
> **[6:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=369)** The lower the latency, the faster two-way communications can take place.
>
> **[6:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/digital-communication?u=76281980&t=374)** So, whether it's with light, electricity, or radio waves, all of the information we communicate and transmit is encoded as binary data and can reach anyone on the planet or maybe even another planet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for instance (1), for example (1)
> **CLI Commands:** find (1)
> **Env Vars:** usb (1)
> **Versions:** 1.3 (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - transmitting (1)


### 3. Number Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Abstraction of numbers](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=1)** - When we think about numbers, we think of, well, numbers, anything that has a digit that could be zero through nine.
>
> **[0:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=7)** So, for example, we have a number like seven, two, three.
>
> **[0:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=10)** This number seven, two, three represents a value or a count of something.
>
> **[0:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=15)** It could be $723, 723 yards of yarn, or 723 gallons of milk.
>
> **[0:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=23)** The number tells us how much of something there is.
>
> **[0:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=26)** What if I showed you these three numbers?
>
> **[0:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=30)** What if I told you that each of these numbers actually represented different amounts of something?
>
> **[0:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=35)** It's totally possible through the use of different number systems.
>
> **[0:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=40)** Let's throw away numbers as we know them for a moment and look at a pile of stuff.
>
> **[0:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=46)** In this case, I have five paper clips.
>
> **[0:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=49)** Now we can represent this with a five.
>
> **[0:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=51)** But if I said I have this many paper clips, does that mean the same thing?
>
> **[0:56](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=56)** Yes, it does, if you understand Roman numerals.
>
> **[1:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=60)** Roman numerals are another way to measure how much of something we have.
>
> **[1:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=65)** It follows a different set of rules, using symbols like I, V, X, L, C, and M.
>
> **[1:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=71)** Roman numerals are based on basic counting.
>
> **[1:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=75)** Starting at one, I add symbols, and then at a certain point I use the next largest symbol, and either add or subtract from that value, with the understanding that there can only be three consecutive symbols of the same type.
>
> **[1:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=87)** Confusing?
>
> **[1:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=88)** Yeah, kind of, but for centuries Roman numerals had been used either as the basic form for all representations of value back in the Roman days, to counting annual sporting events or movie sequels today.
>
> **[1:39](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=99)** But this shows that there can be more than one way to represent the same value.
>
> **[1:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=106)** We ordinarily represent numbers using the decimal number system.
>
> **[1:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=110)** Decimal uses a base 10 for the number system, which is why there are ten digits that we use for numbers, zero, one, two, three, four, five six, seven, eight, and nine.
>
> **[2:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=122)** The other key part of a number system is the fact that you can have multiple digits.
>
> **[2:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=126)** So for example, we can take number five, and we can represent that as a single digit.
>
> **[2:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=132)** But for the number 15, we need two digits.
>
> **[2:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=135)** The digit on the right represents ones.
>
> **[2:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=139)** The next digit to the left represents tens.
>
> **[2:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=142)** We can represent this like an old-style odometer, where all the possible digits can be shown in the column.
>
> **[2:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=148)** When you get to the highest digit, you need to add one more.
>
> **[2:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=152)** You push the value to the next column, and start over from zero.
>
> **[2:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=157)** There is some cool math that goes with these columns.
>
> **[2:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=160)** Remember when I said that the decimal number system is based on ten?
>
> **[2:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=164)** Well, you can represent that first column as taking the single digit and multiplying it by 10 to the power of zero, which is one.
>
> **[2:53](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=173)** As you move to the left, you can take the exponent and increase it by one for as long as you need to.
>
> **[3:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=181)** So the next colum is 10 to the power of one, which is ten.
>
> **[3:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=185)** Multiply by the digit in the column.
>
> **[3:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=188)** So if we take a more complicated example, like our earlier seven, two, three, you can calculate what each column represents, and when you add all these up, you come back to seven, two, three.
>
> **[3:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=200)** What if I took the number of possible digits, and cut off the last two?
>
> **[3:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=206)** In this case, it would only have eight digits, representing a new number system based on eight, or the octal number system.
>
> **[3:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=215)** I now need to change the calculatons for the column, and instead of using 10, I need to use eight.
>
> **[3:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=220)** So now if we use the same format to calculate each column, the octal number of seven, two, three actually is four, six, seven in decimal.
>
> **[3:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=229)** I can also add possible digits.
>
> **[3:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=232)** For example, I can create 16 possible digits.
>
> **[3:56](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=236)** After nine, I can use letters like A, B, C, D, E, and F to represent the additional digits.
>
> **[4:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=243)** This number system is based on 16 and is called the hexadecimal number system.
>
> **[4:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=248)** So seven, two, three in hexadecimal, when we update our formulas for the columns of the digits, actually represents what we would recognize as one, eight, two, seven in decimal.
>
> **[4:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=259)** You'll often see hexadecimal when you do coding, especially in a [[Web Design]].
>
> **[4:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=264)** Colors represented by a series of three or six hexadecimal numbers, with the first group representing red, the second group as green, and the last as blue.
>
> **[4:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=276)** On screen you're controlling the amount of red, green, and blue light in each pixel.
>
> **[4:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=282)** So these numbers represent these values, allowing you to increase or decrease each one, to give you millions of different color choices.
>
> **[4:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=291)** So if you think of the rules of the number systems, you have a few things that are the same.
>
> **[4:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=295)** You have the base number, which describes the maximum number of possible digits, and then you have multiple columns, that are incremented exponentially the further you go to the left to make larger values.
>
> **[5:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=307)** This also works the other way, to make smaller numbers, too.
>
> **[5:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/abstraction-of-numbers?u=76281980&t=311)** With those rules, you can apply them to any base number, including two, which is the basis of the binary number system, and serves as the foundational way computers store, communicate, and process information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Design]] (1)
> **CLI Commands:** make (2), yarn (1)
> **Analogies:** for example (3)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - when (1)

#### [Binary numbers](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=0)** - [Voiceover] Binary states are the basis of how computers store, process and share information using states of on or off.
>
> **[0:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=8)** Using the binary number system we can represent these states using a base two system with two digits, zero and one.
>
> **[0:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=17)** Using the rules of number systems we can create a system for what a binary digit looks like.
>
> **[0:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=23)** We have a maximum of two possible digits, zero and one.
>
> **[0:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=28)** We then, also, have multiple columns that exponentially increase in value from right to left based on two, the base number of the system.
>
> **[0:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=37)** If we count up from zero, we can see how binary begins to work.
>
> **[0:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=42)** First, I start with zero, then I add one, making it one.
>
> **[0:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=47)** If I add again, I've maxed out the possible number of digits in the first column, so I then carry that over to the next column and return back to zero in the first.
>
> **[0:58](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=58)** We continue to add one, adding digits to the number and eventually get one that is several digits consisting of multiple ones and zeros.
>
> **[1:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=68)** Using the formula, we can apply it to each column.
>
> **[1:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=71)** We can then take each column and multiply the digit by the base number raised to the power of the column.
>
> **[1:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=77)** Let's walk through that column by column.
>
> **[1:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=80)** We have the number one zero zero one one.
>
> **[1:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=84)** Starting from the right, we take the column which is two to the zero power, which is one and multiply it by the digit, which makes one.
>
> **[1:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=95)** The next column is two to the first power which is two.
>
> **[1:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=100)** Multiply it by one, which is two.
>
> **[1:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=104)** Next, we have two to the second power which is four, times zero is zero.
>
> **[1:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=111)** Next, is two to the third power, which is eight times zero is zero and last, we have two to the forth power which is sixteen, times one is sixteen.
>
> **[2:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=126)** Then, we add all of those together.
>
> **[2:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=129)** Sixteen plus zero, plus zero, plus two plus one totaling nineteen.
>
> **[2:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=140)** We can also do this in the other direction.
>
> **[2:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=142)** Let's take the number twenty-three.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=145)** We can use the formulas for the binary digit columns to covert the decimal number to binary.
>
> **[2:31](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=151)** We would first need to find the largest power of two that is less than twenty-three, which is sixteen.
>
> **[2:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=160)** You would then put a one in that column and subtract sixteen from twenty-three, leaving seven.
>
> **[2:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=168)** The largest power of two in seven is four so we will put a one in that column and subtract from seven leaving three.
>
> **[3:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=181)** The next largest power in three is two so we put a one in that column, and subtract from three leaving one, which is equal to the next largest power, which is one.
>
> **[3:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=194)** So using this algorithm, a computer can take a value that we would represent as a decimal number and can convert it into a format that can be natively stored and transmitted using ones and zeros.
>
> **[3:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/binary-numbers?u=76281980&t=207)** This conversion process is the basis for all encoding and decoding of digital information we work with every day.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [voiceover] (1)

#### [Bit size and values](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=1)** - With binary numbers, we can store values that we would ordinarily represent in decimal.
>
> **[0:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=5)** In a format that the computer can store, send or receive.
>
> **[0:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=9)** But as we think about values, the more digits that are in the number, the larger the value can be.
>
> **[0:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=15)** So, let's take this binary number, one, zero.
>
> **[0:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=19)** This is a two bit digit.
>
> **[0:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=21)** Meaning that it contains two digits.
>
> **[0:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=23)** Each one being a bit, a one or a zero.
>
> **[0:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=27)** This two bit number can store four different values and has a maximum value of three.
>
> **[0:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=34)** As we add additional digits, we increase the maximum value we can store in that binary number.
>
> **[0:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=42)** Have you heard the term eight bit?
>
> **[0:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=44)** Eight bit, 16 bit, 32 bit, 64 bit and higher, these are all representations of the number of digits that are available to store in a binary number.
>
> **[0:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=55)** If we look at a eight bit number, we have eight columns, or eight possible digits.
>
> **[1:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=61)** If we do the math for each column, we can store a maximum value of 255.
>
> **[1:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=67)** If we add zero, which is a value of nothing, we can store a total of 256 values, from zero to 255.
>
> **[1:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=75)** And what is two to the eighth power?
>
> **[1:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=78)** It's 256.
>
> **[1:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=80)** But 256 is not a very high number.
>
> **[1:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=83)** So if we need to store a larger number, we need more bits.
>
> **[1:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=87)** If we add more to make a 16 bit number, we can store up to a value of 65,535.
>
> **[1:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=95)** Where 65,536 values including zero.
>
> **[1:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=100)** Need more?
>
> **[1:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=101)** Let's double it to 32 bit.
>
> **[1:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=103)** Now we can store 4,294,967,296 values.
>
> **[1:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=112)** 64 bit can store over 18 quintillion values.
>
> **[1:56](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=116)** And the number gets larger and larger the more bits we add.
>
> **[2:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=121)** Using these bits, a computer program can store values in memory.
>
> **[2:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=125)** A programmer needs to balance the storage requirements of their applications to the amount that is available for the program.
>
> **[2:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=132)** To help manage that, developers have different sizes and types of containers called variables that they can use to store information.
>
> **[2:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=141)** Each variable type has a different bit size requirement.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=145)** Meaning that the variable has a limited size that the programmer can store values in to.
>
> **[2:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=150)** For example, a programmer might use a variable type that requires a single byte.
>
> **[2:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=156)** That byte contains eight bits.
>
> **[2:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=158)** So we can store values from zero to 255.
>
> **[2:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=162)** It can only contain those values.
>
> **[2:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=165)** And it can only contain whole numbers, meaning it can't carry a decimal.
>
> **[2:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=170)** But 255 is not much so there are larger and larger types that programmers can use to store values.
>
> **[2:58](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=178)** Each larger type reserves a different number of bits in the computer's memory.
>
> **[3:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=182)** A larger container that uses 32 bits can store a bigger number.
>
> **[3:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=186)** In this case a number as high as four billion.
>
> **[3:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=190)** But what about negative numbers?
>
> **[3:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=192)** When we write a negative number like negative five, we need to put a minus sign before the number.
>
> **[3:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=198)** This sign needs to be captured as data for the computer to understand.
>
> **[3:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=202)** So to store that sign, a bit is reserved for whether the number is positive or negative.
>
> **[3:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=209)** This creates a signed number.
>
> **[3:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=212)** But in a 32 bit value, since we lose one bit for the sign, we can only use 31 bits to store the number.
>
> **[3:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=220)** So the largest value, we can store a smaller.
>
> **[3:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=224)** As a result, with 31 bits, we can only store a value of just over two billion.
>
> **[3:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=231)** But with the bit used for the positive or negative sign, we had the same range as a number without a sign.
>
> **[3:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=237)** A programmer can easily store one or few of these values without worrying about numbers.
>
> **[4:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=244)** What about something like a spreadsheet?
>
> **[4:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=246)** Let's assume a single cell can store a value using 64 bits.
>
> **[4:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=250)** That's a number that can hold a lot of information and we can easily store positive, negative and even decimal numbers for us to do calculations with.
>
> **[4:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=259)** 64 bits is equal to 8 bytes.
>
> **[4:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=262)** So that seems harmless enough, but a spreadsheet can contain tons of data in it.
>
> **[4:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=267)** In fact, [[Microsoft Excel|Excel]] spreadsheets can contain over a million rows and more than sixteen thousand columns.
>
> **[4:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=273)** That's over 17 billion cells of data.
>
> **[4:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=277)** With each one requiring eight bytes, that's 137,438,953,472 bytes or 128 gigabytes of storage.
>
> **[4:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=290)** Yikes, luckily programmers and computers have ways to compress and reduce the amount of memory that files and programs like spreadsheets have to take.
>
> **[5:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=300)** But you can see how you can quickly consume a lot of memory.
>
> **[5:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=304)** So while it might seem like a computer can handle all the data you throw at it, it's not quite that simple.
>
> **[5:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/bit-size-and-values?u=76281980&t=311)** When a developer has to limit themselves to the available memory on a phone, which could be only one or two gigabytes, with a law that already used by the operating system, a lot of care needs to be taken in how to use the memory that is available and to avoid slowing down the system by taking our too much space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - with (1)

#### [Overflow](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=1)** - When the computer sets aside a specific amount of memory to store a value, it does so based on the number of bytes that are required.
>
> **[0:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=8)** As more and more values need to be stored, more reservations are made in memory.
>
> **[0:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=13)** So what happens when we run out of room to store value?
>
> **[0:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=17)** We have a situation called overflow.
>
> **[0:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=20)** Let's an 8-bit value.
>
> **[0:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=22)** In this number we have eight bits to store a value.
>
> **[0:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=25)** We keep flipping the bits to add more and more to the value that can be stored.
>
> **[0:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=30)** But then we hit a situation where we have to add a ninth bit to the value.
>
> **[0:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=35)** But since the amount of space reserved won't fit that, we get an overflow.
>
> **[0:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=40)** Some overflows happen and you get an error.
>
> **[0:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=43)** Like when you take a calculator and you try to get a number larger than the digits that can be displayed on the screen.
>
> **[0:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=49)** But sometimes there is no error and what you get is something weird.
>
> **[0:54](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=54)** What can happen is that the computer just throws away any digits beyond eight.
>
> **[0:58](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=58)** So if I get a number like 255 and I add one to it, instead of getting 256, I get zero.
>
> **[1:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=65)** Because the last bit is just, well, thrown away.
>
> **[1:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=70)** So it seems like simple math like 186 plus 92 can yield the impossible answer of 22, not 278.
>
> **[1:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=79)** Back in the 1990's, computers and programmers had a similar issue when for the entire century, years entered into computers using two digits.
>
> **[1:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=87)** So 1985 was entered as eight five.
>
> **[1:31](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=91)** 1999 as nine nine.
>
> **[1:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=94)** The 19 part was just assumed.
>
> **[1:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=97)** So what happened when 2000 hit?
>
> **[1:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=98)** Only the last two digits were stored, so it would be zero zero which a computer would translate as 1900.
>
> **[1:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=106)** This problem called the Y2K Bug or Year 2000 Bug, was fixed by having programs change to store years with the full four digits or more instead of just the last two.
>
> **[1:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=117)** So we should be just fine until we hit the year 9999.
>
> **[2:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=122)** But how are dates stored in the computer anyway?
>
> **[2:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=124)** You guessed it using binary.
>
> **[2:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=126)** In fact, a common way to store dates is to count the number of seconds since a specific date.
>
> **[2:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=133)** For many systems and programming languages, dates are stored as the number of seconds after mindnight, January 1st, 1970.
>
> **[2:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=141)** This is stored in a signed 32-bit binary number.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=145)** It is signed because computers needed to store dates before 1970.
>
> **[2:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=150)** So it used negative numbers to store it.
>
> **[2:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=153)** The first digit in a 32-bit number stores the sign of the number.
>
> **[2:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=157)** Zero for positive, one for negative.
>
> **[2:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=161)** So for years, 32-bit dates have worked out perfectly fine.
>
> **[2:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=165)** Each second another bit flips adding one to the number of seconds that have passed since, well, B.J. Thomas topped the music charts with Raindrops Keep Falling on My Head and Marcus Welby, M.D. was the most watched TV show in America.
>
> **[2:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=179)** But on January 19th, 2038 at 3:14 UTC, or coordinated universal time, the last bit will need to flip.
>
> **[3:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=189)** But since that is used to store the sign of the value, the day will all of a sudden become December 13th, 1901 8:45:52 p.m.
>
> **[3:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=199)** And that's quite a time machine.
>
> **[3:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=201)** The same thing happens with signed numbers.
>
> **[3:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=204)** If we take a 32-bit sign number like 23,390 and add say 30,000 to it, we get negative 20,622, yikes!
>
> **[3:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/overflow?u=76281980&t=216)** So while binary is the universal way computers store values, there are some limitations that need to be considered in how we store values of different sizes.

> [!info]- Semantic Content
>
> **Ports:** :14 (1), :45 (1), :52 (1)
> **Env Vars:** y2k (1), utc (1)
> **Speakers:** - when (1)


### 4. Encoding and Sending Text

[↑ Back to Table of Contents](#table-of-contents)

#### [ASCII and Unicode](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=1)** - Using binary, we can represent values of different types in a format that is native to a computer.
>
> **[0:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=6)** We can do the same with text.
>
> **[0:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=8)** You just have to be a little more creative about how we do it.
>
> **[0:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=12)** Maybe you've used a decoder ring.
>
> **[0:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=14)** Using a decoder ring, you can take a message that contains letters, and using it find the corresponding number or symbol that is used for that letter.
>
> **[0:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=23)** You can take a phrase like this one and for each unique letter, you have a symbol that represents it.
>
> **[0:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=29)** Using this, you can convert each letter to the new code, and this is called encoding.
>
> **[0:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=35)** You are taking the original text and are converting it to a unique code.
>
> **[0:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=40)** On the other side, if you get a message that uses these symbols, I can take each symbol and using that same decoder ring I can match the symbol to the letter and decode the message back into the original format.
>
> **[0:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=52)** Both the encoding and decoding process need to be identical and agreed upon at both ends.
>
> **[0:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=59)** If one end has a different decoder ring than the other, we can't communicate.
>
> **[1:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=63)** This agreed upon method is called a protocol and it is used at both ends of the communication.
>
> **[1:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=70)** Now, instead of symbols, we can use numbers to represent our protocol.
>
> **[1:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=74)** These numbers match uniquely to each character we want to communicate with but that's just the simple alphabet.
>
> **[1:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=81)** We can represent that as uppercase characters and lowercase characters.
>
> **[1:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=85)** Then, there's punctuation, common international characters Greek, special symbols, and block building symbols to draw boxed and lines on the screen plus there are some non-printed characters like a space, line return, backspace, and others.
>
> **[1:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=103)** You now have a set of unique characters each with a corresponding number but remember, computers need to store numbers in binary, so each of these numbers are converted to a binary, and in this case, we have 256 characters which are stored in a single byte, or with eight bits.
>
> **[2:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=120)** This single byte encoding system is called ASCII or American Standard Code for Information Interchange and was first developed in the early 1960s.
>
> **[2:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=130)** Over time, the system expanded to include more characters, but at a certain point there were too many symbols or glyphs in the world to represent, that ASCII wasn't gonna cut it anymore.
>
> **[2:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=142)** A new standard called Unicode uses multiple bytes to represent thousands and thousands of symbols from languages all around the world and even ancient symbols in languages from lost civilizations, and even some from science fiction.
>
> **[2:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=156)** The more common characters require fewer bits to store them which saves space and time when storing and sending them.
>
> **[2:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=162)** The less common characters require a little more.
>
> **[2:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=166)** The web is standardized on the UTF8 format or eight bit Unicode transformation format.
>
> **[2:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=172)** It is backwards compatible with ASCII and each character is represented using a prefix U and then is followed by a four digit hexadecimal number so the letter capital D is U zero zero four four.
>
> **[3:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=186)** Four hexadecimal numbers require two bytes to store them or sixteen bits, so using just two bytes over 65,000 symbols can be encoded and decoded.
>
> **[3:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=198)** This is called plain zero of Unicode.
>
> **[3:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=201)** For more characters, additional bits are added creating new planes.
>
> **[3:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=206)** Currently, there are three that are mainly used.
>
> **[3:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=209)** Plane zero, plane one, and plane two.
>
> **[3:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=212)** There are others that aren't used or can be customized going all the way up to plane sixteen.
>
> **[3:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=218)** All in all, the entire breadth of Unicode can store 1,114,112 symbols called code points and that's a lot of letters.
>
> **[3:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/ascii-and-unicode?u=76281980&t=229)** The Unicode is key in taking the way that you can I communicate every day using letters, symbols, and glyphs and representing them in a digital format using binary bits and as a standard protocol every computer can read and understand it.

> [!info]- Semantic Content
>
> **Env Vars:** ascii (3), utf8 (1)
> **Definitions:** is called (4)
> **CLI Commands:** find (1)
> **Speakers:** - using (1)

#### [Encoding formatted text](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=0)** - [Voiceover] While text contains the words we want to say, we use emphasis, color, size, and other [[Typography]] elements to add energy and additional meaning to the words.
>
> **[0:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=10)** This can use features like bold, italics, underlines, strikethroughs, various colors, and other ways to format text.
>
> **[0:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=19)** But when you are encoding text in binary, there's no clear way to say you want this text to be bold and this text to be underlined.
>
> **[0:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=27)** To do this, we need to let the computer know as it is encoding and decoding the data to start bolding letters starting at this point and to stop at this point.
>
> **[0:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=38)** We can do that by using a unique set of characters that the program can read and decode, understanding that the special characters mark the start and the end of a specific format type.
>
> **[0:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=50)** Thirty years ago, this was done by typing a specific letter when holding the control button.
>
> **[0:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=55)** On a Mac, it was done using the old open Apple or closed Apple buttons.
>
> **[1:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=60)** This would create a two-character combination like this.
>
> **[1:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=64)** This two-character sequence denoted the start and the end of bold.
>
> **[1:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=69)** Different combinations would be italic and underlined.
>
> **[1:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=74)** When you use these, you can format text quite easily and add more style to your text.
>
> **[1:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=80)** Today, we have languages like [[HTML]] that are used to send and store information.
>
> **[1:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=86)** Instead of two-character sequence, HTML uses tags, which are unique combinations of letters that people can use to mark up their text.
>
> **[1:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=95)** This is why HTML is called a markup language.
>
> **[1:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=98)** You are denoting specific areas and are telling the program that will read the document to treat certain elements differently than others.
>
> **[1:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=107)** So instead of a two-character sequence, you would have a tag that is surrounded by pointed brackets with a specific [[Microsoft Word|word]] or phrase within it to say what type it is.
>
> **[1:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=117)** Then you would define the end of the region using a closing tag, which adds a forward slash in the code.
>
> **[2:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=124)** Using these special combinations of characters, you can format or define multiple types of text, including emphasis, color, numbered lists, regions of document and tons more.
>
> **[2:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=135)** Markup languages like HTML give your document structure, so the application that reads it can understand what different parts of the documents are and how they are related to each other.
>
> **[2:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=146)** This gives your document more context and applications like web browsers can display it and work with it more intelligently.
>
> **[2:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=153)** But, it all comes down to ones and zeroes.
>
> **[2:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-formatted-text?u=76281980&t=157)** All the characters in the tags are represented as UTF-8 characters, which have corresponding numbers, which are translated to binary to be stored, transmitted, and processed by a computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Typography]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (4), utf (1)
> **Definitions:** is called (1)
> **Speakers:** - [voiceover] (1)


### 5. Working with Large Amounts of Data

[↑ Back to Table of Contents](#table-of-contents)

#### [File sizes and bytes](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=1)** - The more and more information you need to store, the more bits you need to store it.
>
> **[0:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=6)** Data has a unit of measure just like distance.
>
> **[0:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=9)** You measure distance using inches, feet, yards, and miles.
>
> **[0:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=14)** And in metric you use meters, centimeters, and kilometers.
>
> **[0:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=18)** The prefixes that are used in metric like kilo are also used to help measure the size of data.
>
> **[0:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=24)** Let's start with storage and size first.
>
> **[0:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=27)** We know that the smallest amount of storage is a single bit.
>
> **[0:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=30)** A single one or a zero off or on.
>
> **[0:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=34)** We group these in sets of eight bits, which is called a byte but what's smaller than a byte?
>
> **[0:39](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=39)** Well a nibble of course.
>
> **[0:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=41)** A nibble is half of a byte, or four bits.
>
> **[0:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=44)** The byte is the base form of measurement for data size.
>
> **[0:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=48)** The same as meters when we measure distance.
>
> **[0:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=51)** From this base size we can use prefixes to show magnitude of size.
>
> **[0:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=57)** Measurement and data size is done by multiples of 1,000.
>
> **[1:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=60)** But not in the 1,000 that you're used to.
>
> **[1:04](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=64)** Instead of 1,000, the number 1,024 is used.
>
> **[1:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=68)** Why?
>
> **[1:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=69)** Because 1,000 is decimal or uses a base ten number system.
>
> **[1:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=73)** Since we're talking about binary we need to use numbers that are more aligned with a base two number system.
>
> **[1:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=79)** So although kilo means 1,000 in distance, weight, wavelength, and other units of measure.
>
> **[1:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=85)** When we talk about data size it means 1,024.
>
> **[1:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=90)** You may hear of a term called kibibytes.
>
> **[1:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=93)** This is the technically accurate way to represent 1,024.
>
> **[1:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=97)** But for the most part, kilo is used to represent the same thing.
>
> **[1:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=103)** So one kilobyte is equal to 1,024 bytes.
>
> **[1:48](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=108)** That is the same as about two to three paragraphs of text.
>
> **[1:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=111)** When you abbreviate kilobyte, you use either capital K, capital B, or lowercase, capital B.
>
> **[2:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=120)** The capital B is important because we're talking about a byte not a bit.
>
> **[2:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=125)** A lowercase B is used to represent a bit.
>
> **[2:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=128)** In a bit you'll see how that can be very different.
>
> **[2:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=133)** The next size up is a megabyte.
>
> **[2:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=135)** A megabyte is 1,024 kilobytes.
>
> **[2:18](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=138)** You can store the contents of about four books with a couple hundred pages each in a single megabyte.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=145)** Next is a gigabyte, a gigabyte is 1,024 megabytes.
>
> **[2:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=150)** With a gigabyte I can now store over 4,000 books.
>
> **[2:35](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=155)** Then there's a terabyte, a terabyte is 1,024 gigabytes.
>
> **[2:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=160)** Over four and a half million books can be stored in a single terabyte.
>
> **[2:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=166)** Even larger is a petabyte, which is 1,024 terabytes.
>
> **[2:51](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=171)** That is 1,125,899,906,842,624 bytes!
>
> **[3:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=183)** That is a lot of bytes.
>
> **[3:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=185)** It is so many bytes that over 4.6 billion books can be stored all in a single petabyte.
>
> **[3:14](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=194)** You can get ever large with sizes such as exabyte, zetabyte, and yottabyte.
>
> **[3:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=199)** But don't expect your next computer to store that much on it As the need for more storage increased, new ways to store more information needed to be invented.
>
> **[3:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=210)** Over time, starting with punched cards through magnetic media, optical, solid state drives, and now [[Cloud Storage]].
>
> **[3:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=218)** The ability to store data gets larger and larger.
>
> **[3:42](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=222)** With that, we now need to have a way to transmit and send that information.
>
> **[3:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=227)** This is called the bandwidth.
>
> **[3:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=229)** A common Ethernet connection can send one gigabit per second, but notice how that's spelled.
>
> **[3:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=235)** It's bit, not byte.
>
> **[3:58](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=238)** So you aren't sending one gigabyte per second, you're sending one gigabit per second.
>
> **[4:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=243)** Or 128 megabytes per second.
>
> **[4:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=247)** The same prefixes for size are applied to bandwidth.
>
> **[4:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=251)** So you have kilobits per second, megabits per second and so on.
>
> **[4:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=255)** Each one is 1,024 times larger than the other.
>
> **[4:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/file-sizes-and-bytes?u=76281980&t=260)** But remember, that they're measured using bits not bytes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (1)
> **Definitions:** is a  (5), is called (2)
> **Analogies:** just like (1), such as (1)
> **Versions:** 4.6 (1)
> **Speakers:** - the (1)

#### [Text compression](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=0)** - With larger and larger amounts of content, we need to have ways to store it and transmit it.
>
> **[0:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=6)** The larger it gets the more storage it takes to manage it, and more bandwidth is needed to reduce the amount of time it takes to transmit it.
>
> **[0:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=15)** You can make the storage and transmission method larger, or you can make the data smaller.
>
> **[0:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=20)** Compression is exactly that.
>
> **[0:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=22)** It allows data to occupy a smaller amount of space, but at the same time, preserve the original data through compression protocols that encode and decode the compressed file.
>
> **[0:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=34)** When we write text we write the words that are part of the message.
>
> **[0:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=38)** These words convey the meaning of the sentence.
>
> **[0:41](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=41)** The computer though doesn't necessarily care about the meaning of a sentence, but instead focuses on the encoding of each character as a piece of data.
>
> **[0:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=50)** So if you look at this text, it has exactly 1,934 characters, including spaces.
>
> **[0:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=57)** We can look for common combinations of characters and swap them out with a unique character.
>
> **[1:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=62)** Since there are thousands of Unicode characters available, we can swap them with any of these.
>
> **[1:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=67)** In this case, I could look for common phrases or combinations of characters, Then replace them with other Unicode characters.
>
> **[1:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=76)** I can do this over multiple passes to further reduce the number of characters with more and more representations of common patterns.
>
> **[1:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=84)** What we have build is a dictionary of common words, and we have defined the replacements.
>
> **[1:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=90)** This is the algorithm of the compression and we can use this as the key for compressing and decompressing the text using these various phrases.
>
> **[1:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=100)** With very long documents, the storage requirements of the dictionary will be far lower than the storage requirements for the dozens, hundreds, or even thousands of times those character combinations can appear in a document.
>
> **[1:53](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=113)** So what might be a small savings with a small piece of text could be a huge savings for larger sets.
>
> **[2:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=120)** The key is to extract from the words and the meaning of the text, and look at the characters only and think about how each one of them is stored.
>
> **[2:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=129)** Using a computer program, you can search all the characters of the piece of text and find how many times unique combinations are repeated in a document, and then replace the ones with the largest number of instances.
>
> **[2:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/text-compression?u=76281980&t=141)** But you can keep going, you can perform multiple passes to analyze, compress, reanalyze, compress, and so on.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - with (1)

#### [Encoding images](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=0)** - Documents with words contain individual characters.
>
> **[0:03](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=3)** And each of those characters is encoded into a digital format, and is stored or transmitted using binary numbers.
>
> **[0:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=10)** The same happens with images.
>
> **[0:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=12)** But instead of characters, it is based on pixels.
>
> **[0:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=16)** When you have an image, it is broken up into individual pixels.
>
> **[0:20](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=20)** Each pixel defines the color that needs to be shown on the screen to render that pixel correctly.
>
> **[0:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=26)** Images that are based on pixels are called bitmaps.
>
> **[0:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=30)** Let's take this image for instance.
>
> **[0:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=32)** It is divided into multiple rows and columns of pixels.
>
> **[0:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=36)** Each pixel needs to store the value of three colors, red, green and blue, in that order.
>
> **[0:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=44)** On a screen, each pixel actually has three emitters, one for each color, red, green and blue.
>
> **[0:52](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=52)** When you store the values of each color, you are telling that unique pixel how bright to make each unique color inside.
>
> **[1:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=60)** This is called RGB, and it is how most screens work and display graphics.
>
> **[1:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=67)** Each of these pixels needs to store these three color values.
>
> **[1:11](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=71)** One simple way to do that is to store the value of each color, red, green and blue, as a two-digit hexadecimal number.
>
> **[1:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=79)** A two-digit hexadecimal number can be stored in a single byte, so for three colors, you would need three bytes per pixel.
>
> **[1:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=88)** Each pixel then stores the unique combinations of red, green and blue as a number, which is then encoded to binary.
>
> **[1:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=96)** So, for a picture that is HD resolution, which is 1920 by 1080, that is 2,073,600 pixels of data to store.
>
> **[1:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=105)** And using the example we talked about before, it would require 6,220,800 bytes, or about 5.9 megabytes to store that image.
>
> **[1:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=115)** Now think about 4K.
>
> **[1:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=117)** That is four times the size of HD.
>
> **[1:59](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=119)** So now we have 3,840 by 2,160, or around 8.2 million pixels.
>
> **[2:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=128)** Requiring 24 million bytes, or 23 megabytes to store that image.
>
> **[2:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=133)** With real image files there is some additional information that is stored in them, like the software that was used to make them, the owner of the file, and other information stored inside of it.
>
> **[2:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=143)** So actual images will be a little bit larger than this example.
>
> **[2:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=147)** Now that is a single image.
>
> **[2:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=150)** Think about video.
>
> **[2:31](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=151)** Let's say you have a movie that is showing 30 frames per second.
>
> **[2:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=154)** That means you are showing 30 individual images each second the video is playing.
>
> **[2:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=160)** An HD video that is a minute long would be 1,800 individual images that are shown in that minute.
>
> **[2:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=167)** Using our RGB example above, that would require 11 billion bytes, or 10.42 gigabytes.
>
> **[2:54](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=174)** For just one minute.
>
> **[2:56](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=176)** 4K video, you're looking at over 44 billion bytes, or 41 gigabytes and that doesn't even include the audio.
>
> **[3:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=185)** Now this is just a working example of how to encode images.
>
> **[3:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=188)** When you work with image files, there are many different ways that an image can be encoded.
>
> **[3:13](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=193)** There are formats like TIF that can store image data and can be encoded and decoded using that image format.
>
> **[3:21](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=201)** There is one other way to store image data.
>
> **[3:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=204)** And that is with vectors.
>
> **[3:26](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=206)** Instead of storing individual pixels vectors store pictures using points.
>
> **[3:32](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=212)** Let's take this as an example.
>
> **[3:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=214)** Here we have two images side by side.
>
> **[3:37](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=217)** On the left we store the image data using pixels, so each unique pixel has to have unique color data that needs to be stored.
>
> **[3:45](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=225)** On the right, the image is stored as a vector.
>
> **[3:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=229)** So instead of pixels, the points on the boxes are encoded based on a coordinate system.
>
> **[3:54](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=234)** The result is a much smaller file since it only contains point information for the boxes.
>
> **[4:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=241)** The other advantage is that if you make the image bigger, it can scale easily and redraw the lines proportionally based on how you've re-sized the image.
>
> **[4:09](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=249)** With a bitmap you don't have that information, so the image gets distorted or pixelated, as it is called sometimes.
>
> **[4:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=257)** There is a limitation though.
>
> **[4:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=259)** The more complex you make your vector, the more data it requires.
>
> **[4:23](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=263)** And you can't really represent photographs in vector form.
>
> **[4:27](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=267)** Web browsers and apps can work with both formats.
>
> **[4:30](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=270)** For example, a web browser can work with bitmap formats like JPEG, PNG of GIF.
>
> **[4:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=276)** It can also work with vector formats like SVG.
>
> **[4:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/encoding-images?u=76281980&t=280)** Both of these are ways that a browser can decode image files and render them for you to see.

> [!info]- Semantic Content
>
> **Env Vars:** rgb (2), tif (1), jpeg (1), png (1), gif (1)
> **Definitions:** is a  (4), is called (2)
> **CLI Commands:** make (4)
> **Versions:** 5.9 (1), 8.2 (1), 10.42 (1)
> **Analogies:** for instance (1), picture (1), for example (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - documents (1)

#### [Image compression and file formats](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=1)** - Images and photographs can take up a lot of space depending on the size and amount of color accuracy that needs to be captured in the image.
>
> **[0:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=8)** In theory, there are an infinite number of colors that you can create through variations of red, green, and blue light.
>
> **[0:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=16)** But at a certain point, people can't tell the subtle differences between colors.
>
> **[0:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=22)** It is like when you go to the home improvement store to buy paint.
>
> **[0:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=25)** You look at the thousands of color swatches that line the wall.
>
> **[0:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=29)** You might take two colors and put them side by side and say, "these are different"?
>
> **[0:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=34)** Take these colors for example.
>
> **[0:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=36)** These are actually two different colors.
>
> **[0:38](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=38)** The color on the left is slightly redder and greener than the color on the right.
>
> **[0:43](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=43)** But you probably couldn't tell the difference, right?
>
> **[0:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=46)** That's one trick that is used to reduce the size of photographs and images.
>
> **[0:50](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=50)** Reduce the number of color variations.
>
> **[0:54](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=54)** One popular way to do that is to look at the GIF format.
>
> **[0:57](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=57)** You can pronounce it gif or jif and there's actually quite a debate online as to which is right, but GIF is based on a total number of 256 colors.
>
> **[1:08](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=68)** The image can use either a standard 256 color palette or it can select 256 colors from the 24-bit RGB color space.
>
> **[1:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=77)** Here's how it works.
>
> **[1:19](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=79)** Here we have a photograph as it was originally processed.
>
> **[1:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=82)** There are lots of color variation in it and the image can be compressed using the GIF image format.
>
> **[1:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=89)** The first option is to use the standard GIF palette of colors, and define the closest color for each pixel in the original file and save it using that color.
>
> **[1:39](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=99)** The result is an image that has the detail of the original, but has far fewer variations in color.
>
> **[1:46](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=106)** The other way to encode using a GIF format is to find the 256 most used colors in the image and to build the palette using those.
>
> **[1:54](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=114)** Then convert each pixel to the closest color.
>
> **[1:58](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=118)** The result is much more accurate, but till has lower color variation.
>
> **[2:05](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=125)** With the colors converted, the file is then compressed using a lossless format called LZW.
>
> **[2:10](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=130)** Lossless compression means that it can reduce the file size further without degrading the visual quality of it.
>
> **[2:17](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=137)** So when it is decoded from the compression, it is exactly as it was coded.
>
> **[2:22](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=142)** Another format used for images in JPEG.
>
> **[2:25](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=145)** Unlike GIF though, JPEG has a variable amount of compression you can apply to it that lets you trade off size for details.
>
> **[2:34](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=154)** JPEG compression is lossy though, meaning that as it compresses to reduce the file size, it can not be uncompressed into the exact original format.
>
> **[2:44](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=164)** It'll be lossy or lose details when it is opened and displayed again.
>
> **[2:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=169)** Using the JPEG format you can define the amount of loss in detail when the image is compressed.
>
> **[2:55](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=175)** Ranging from little to no loss of detail or significant amounts.
>
> **[3:00](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=180)** Another format you'll encounter is ping.
>
> **[3:02](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=182)** PNG or portable network graphics.
>
> **[3:06](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=186)** This format is an improved version of the GIF format where pixels can contain 24-bit RGB color values or 32-bit values that also includes transparency, allowing images or content that appears behind it to show through the image.
>
> **[3:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=204)** All these formats we have are specific to representing images on screens.
>
> **[3:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=209)** There are other formats that are used for print, photography and more.
>
> **[3:33](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=213)** For instance in print, color is stored by the amount of various types of inks that are used in the printing process.
>
> **[3:40](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=220)** Unlike with light, pigment uses different colors to build the rainbow of colors that can be created.
>
> **[3:47](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=227)** With CMYK or cyan, magenta, yellow and black as the primary colors.
>
> **[3:54](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=234)** For photography, camera sensors capture light information that isn't processed into specific colors.
>
> **[4:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=241)** As a result these formats, sometimes called RAW formats, contain data not pixels and need to be processed using software to create the color for each pixel.
>
> **[4:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=252)** The RAW file stores the radiometric characteristics of the picture.
>
> **[4:16](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=256)** These can be things such as light intensity, color and dynamic ranges within the subject captured by the image sensor.
>
> **[4:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=264)** Image files can vary in type, context, and format.
>
> **[4:28](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=268)** Pixel based images can rely on compression formats that can alter the balance between size and color or size and detail.
>
> **[4:36](https://www.linkedin.com/learning/computer-science-principles-digital-information/image-compression-and-file-formats?u=76281980&t=276)** For screens though, it all comes down to how each format is encoded to let the pixel know how much light to display in red, green, and blue.

> [!info]- Semantic Content
>
> **Env Vars:** gif (7), jpeg (4), rgb (2), raw (2), lzw (1)
> **Analogies:** for example (1), for instance (1), picture (1), such as (1)
> **Definitions:** is an  (2), means that (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - images (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=1)** - The basis for everything we do with computers is taking what we work with in the physical world, like images, text, numbers, symbols, and more, and abstract it into a format that computers can process, store, and transmit.
>
> **[0:15](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=15)** Using binary bits, states of on or off, information can be encoded and decoded using standardized protocols.
>
> **[0:24](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=24)** This allows information to be saved and retrieved or sent and received.
>
> **[0:29](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=29)** But there are some limitations like working within bit sizes, preventing overflows, and conforming to encoding protocols like ASCII or Unicode.
>
> **[0:39](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=39)** But with binary, it is possible to take anything we can represent in the real world and abstract it into a native format for computers.
>
> **[0:49](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=49)** Understanding how this process works is key to understanding how information is transmitted over the internet, how to program and build applications that use computer resources, such as memory, storage and equipment, and save and work with data to perform calculations and analysis.
>
> **[1:07](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=67)** Yes or no, on or off, one or zero.
>
> **[1:12](https://www.linkedin.com/learning/computer-science-principles-digital-information/summary?u=76281980&t=72)** It really all comes down to that and you can build anything on top of that using computer science.

> [!info]- Semantic Content
>
> **Env Vars:** ascii (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)


## Skills Covered

- Computer Science

## Path Context

### In [[Cybersecurity Fundamentals]]
**1 of 12** | [[Computer Science Principles- The Internet]] →

### In [[Networking and Administration Fundamentals]]
**1 of 10** | [[Computer Science Principles- The Internet]] →

### In [[Software Development Fundamentals]]
**1 of 10** | [[Computer Science Principles- The Internet]] →

## Appears In

- [[Cybersecurity Fundamentals]]
- [[Networking and Administration Fundamentals]]
- [[Software Development Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[Computer Science Principles- Programming]] — Computer Science
- [[Computer Science Principles- The Internet]] — Computer Science

---

[↑ Back to top](#)