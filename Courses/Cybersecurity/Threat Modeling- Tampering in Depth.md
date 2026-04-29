---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: threat-modeling-tampering-in-depth
url: "https://www.linkedin.com/learning/threat-modeling-tampering-in-depth"
duration_minutes: 33
duration: 33m
level: Intermediate
updated: 8/26/2024
learners: 20020
skills:
  - Threat Modeling
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFicNJUyQ2pLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567794847034?e=2147483647&amp;v=beta&amp;t=Dkm2UbAUAM9b2uN28LHo79pSuKVjyYcilK-FGRQ3bI4"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Improve Your Threat Modeling Skills]]'
prev_courses:
  - '[[Threat Modeling- Spoofing In Depth]]'
next_courses:
  - '[[Threat Modeling- Repudiation in Depth]]'
path_nav: '[{"path":"Improve Your Threat Modeling Skills","position":3,"total":6,"prev":"Threat Modeling- Spoofing In Depth","next":"Threat Modeling- Repudiation in Depth"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/threat-modeling
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Threat%20Modeling-%20Tampering%20in%20Depth.md)

![Threat Modeling: Tampering in Depth](https://media.licdn.com/dms/image/v2/C4E0DAQFicNJUyQ2pLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567794847034?e=2147483647&amp;v=beta&amp;t=Dkm2UbAUAM9b2uN28LHo79pSuKVjyYcilK-FGRQ3bI4)

# Threat Modeling: Tampering in Depth

> Threat modeling allows security pros and software developers to proactively address the inevitable—hackers trying to compromise a system—early on in a project's life cycle. In this course, Adam Shostack covers tampering, the second stage in the STRIDE threat modeling framework. Tampering can compromise the integrity of a variety of systems and tools, from debuggers to Iocal storage. Throughout thi

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth) | 33m | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Mitigate tampering threats
  - Four-question framework
  - Tampering as part of STRIDE
- [**1. Tampering with a Process**](#1-tampering-with-a-process) (3 videos)
  - Debuggers and input
  - Libraries
  - Mobile
- [**2. Tampering with Storage**](#2-tampering-with-storage) (3 videos)
  - Tampering with local storage
  - Permissions
  - Effects of tampering
- [**3. Tampering with Things**](#3-tampering-with-things) (2 videos)
  - Whose screw? Physical tampering matters
  - Debug interfaces are exposed
- [**4. Tampering with Time Itself**](#4-tampering-with-time-itself) (1 videos)
  - Time is increasingly important
- [**5. Tampering with Cloud**](#5-tampering-with-cloud) (2 videos)
  - Controls and authentication
  - Becoming Jane Admin
- [**6. Tampering with Data Flows**](#6-tampering-with-data-flows) (3 videos)
  - Channels and messages
  - Replay and reflection
  - Headers: Injection and order
- [**7. Integrity Defenses**](#7-integrity-defenses) (3 videos)
  - Prevention and detection goals
  - Crypto
  - Something more privileged
- [**Conclusion**](#conclusion) (1 videos)
  - Secure by design: Bring integrity to your systems

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Mitigate tampering threats
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=0)** - [Adam] Tampering, meddling with, stacking the deck, monkeying around, loading the dice, manipulating things, rigging a game.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=11)** All of these attacks in the real world have equivalence in the world of cyber.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=18)** This course is part of a series on threat modeling and the STRIDE threats.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=23)** I'm Adam Shostack.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=25)** I've written the most popular book on threat modeling, helped create the CVE, and I'm on the Black Hat Review Board.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=33)** And in this course, you'll learn about threat modeling, a structured and systematic approach to finding security threats early in a project while there's time to address them.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=45)** And we'll go in-depth into tampering and how to address it.

> [!info]- Semantic Content
>
> **Env Vars:** stride (1), cve (1)
> **Speakers:** - [adam] (1)

#### Four-question framework
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=1)** - [Instructor] At the heart of threat modeling are four incredibly simple questions.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=6)** What are we working on, what can go wrong, what are we going to do about it, and did we do a good job?
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=12)** These questions act as guideposts as you're threat modeling and analyzing your work.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=18)** If you're not sure why you're doing what you're doing, tie that work to one of these questions.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=24)** In this course, I'll be digging deep into details about what can go wrong and what are we going to do about it, through the lens of tampering and integrity.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=34)** Tampering is a broad threat.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=37)** I can tamper with files, network communication, running code, or even time.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=44)** The mechanisms are quite different as I do, but all involve breaking integrity.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=50)** Looking at these four questions through a tampering lens is part of the systematic, structured, and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Tampering as part of STRIDE
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=1)** - [Instructor] This course is part of a series on threat modeling and the STRIDE threats.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=5)** STRIDE is a mnemonic that stands for Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=18)** Well, that's the historic version.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=20)** Today, we often talk about expansion of authority in place of elevation of privilege.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=27)** The short form is... authority is clearer.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=31)** It's what a program can do, and also authority is measurable.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=36)** We'll cover how tampering impacts the integrity of communications, storage, processes, and even time, at least as computers experience it.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=47)** You'll also learn about how to ensure the integrity of your systems.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=52)** Let's make that concrete and look at storage.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=55)** When you save a file, you expect to get the same file back the next time you open it, unless it's on Google Docs or Office 365 and you've shared it with a bunch of collaborators, in which case you expect that they're going to tamper with those files.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=69)** But they're not really tampering, are they?
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=72)** You've given them permission, you've authorized those changes.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=75)** And so you might want some tracking of who's made what changes, and you might want to view or modify those permissions.
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=82)** Tampering refers to modifications that are not authorized.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=87)** When you're working with files, and whether it's files, it's a database, it's shared memory, the integrity of storage is fundamentally a matter of authorizations or permissions and violations of those authorizations.
>
> **[1:40](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=100)** Those are enforced by an operating system.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=103)** One of the fundamental jobs of an operating system is to protect processes from one another.
>
> **[1:48](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=108)** This isolation is to ensure that everyone's processes run the way they intend.
>
> **[1:55](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=115)** We'll cover how to tamper with things you're supposed to leave untouched, and how to best protect the things you want to keep intact.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), stands for (1), refers to (1)
> **Env Vars:** stride (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 1. Tampering with a Process

> [↑ Back to Table of Contents](#table-of-contents)

#### Debuggers and input
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=1)** - [Instructor] There are lots of ways to modify a process.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=3)** Your job in security is to ensure there's a match between what you intend to authorize and what the system understands you've authorized.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=12)** One way to modify a process is with a debugger.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=14)** It's one process under your control changing another process under your control.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=20)** Sometimes a process has certain privileges that might be the ability to run the software at all under licensing, or maybe the process has a set UIT bit and the invoker will try to modify how those privileges get used.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=33)** Oftentimes the attack will come in the form of tampering with the environment.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=38)** Changing the libraries or changing a process' view of the file system.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=43)** Another way to tamper with a process is to send it random input.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=48)** Code will often really surprise you when it gets random input, but is that really tampering?
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=53)** After all, the code is doing what it's told.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=57)** One important part of the way to think about random input is that the code may be out of control.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=63)** Another part of how to think about random input is that the code wasn't really very precise in the first place.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=69)** When we're feeding random input to a program, we call it fuzzing.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=73)** And fuzzing is one important way to ensure the code does what you intend and only what you intend.

> [!info]- Semantic Content
>
> **Env Vars:** uit (1)
> **Speakers:** - [instructor] (1)

#### Libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=1)** - [Instructor] Code usually depends on libraries, and we rarely think about those libraries as attack vectors.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=7)** How are libraries loaded?
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=9)** Usually they're loaded from disks.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=12)** Ah, trustworthy, reliable, local disks.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=15)** But storage gets modified, libraries on local disks are loaded by package managers.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=22)** They can be loaded from the web.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=24)** Each is subject to tampering.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=26)** Do you see the pattern?
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=28)** When we talk about loading libraries from disk, the code has a load path, which is an ordered list of the directories that will be checked for libraries.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=37)** The load path will often include the current working directory.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=41)** If that happens to be Downloads, anyone who downloads a file there with the right extensions and permissions can have it load as a library.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=49)** This is still a fun attack on Windows.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=51)** Well, if you're attacking, it's fun.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=54)** There's also tampering with libraries loaded with a package manager like npm or apt.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=59)** An attacker, like a systems administrator, can modify or tamper with those, breaking code accidentally or intentionally.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=68)** Another attacker can break into the npm repo, get access to a package by social engineering, by becoming a contributor, or by buying a package.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=78)** Each of these allows them to make changes to the package you expect.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=83)** The web has a simple src tag that allows you to include libraries from other servers.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=89)** Using HTTP, if you like to live dangerously.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=93)** Even if you're using HTPS, the remote servers, the disk that serve them, and the programmers with commit rights, can all modify your code.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=103)** You can sometimes lump the impact of that with iframe or other in-web defenses.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (2), apt (1), make (1)
> **Env Vars:** http (1), htps (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Mobile
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=1)** - [Instructor] Processes get very different protections on mobile phone operating systems.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=6)** There processes are protected from one another.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=9)** The design is that processes cannot tamper with each other.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=14)** Android apps run as different UIDs.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=17)** The birds can't peck at the zombies and the zombies can't eat the plants under the birds.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=23)** More importantly, they can't change your high score, give you extra coins, or change the rest end point where your credit card gets sent and neither can anything else.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=36)** Apple apps are sand boxed so that libraries can only be loaded if they come from either the same creator or the operating system.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=45)** The operating system libraries are read only, what's more the application themselves are signed and both operating systems validate a signature before running a process.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=56)** These designs were created in the 2000s and show many patterns that system designers should pay attention to.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=64)** Sometimes developers want to adapt these protections from mobile to other places that don't have them.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=71)** They'll think digital signatures can protect against tampering by root, or administrator, or the hyper-visor and frankly that's just hard.
>
> **[1:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=80)** If you're going to do it first a good exercise is to threat model all the ways that some lower level component can muck with the higher one.
>
> **[1:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=90)** It's a major engineering effort all by itself.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=93)** Now, if you think you're going to try a good exercise is to threat model all the ways that some lower level component can muck with the higher level one.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=104)** Bringing this into a system is a major engineering effort all by itself.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1), else. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Tampering with Storage

> [↑ Back to Table of Contents](#table-of-contents)

#### Tampering with local storage
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=1)** - [Narrator] We've talked about libraries and libraries are an important case.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=5)** But don't limit your thinking to libraries.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=8)** Executables can be tampered with.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=10)** Lambda functions can be tampered with.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=13)** Containers can be tampered with.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=15)** Kubernetes can't be tampered with because Kubernetes is magic.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=19)** Actually, it's not that magical.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=22)** It can be tampered with.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=24)** Someone who gets privileged access can tamper with files.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=27)** Those can be data, they can be configuration files.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=31)** Modifying configuration files can be as impactful as modifying the code.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=37)** It's easier too.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=39)** File tampering is easiest to visualize on the local system but all files are subject to tampering.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), lambda (1)
> **Speakers:** - [narrator] (1)

#### Permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=1)** - [Instructor] Sometimes you don't have a permission system.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=4)** If I have a USB stick in one computer, I can move it to a new system and change the files on it, and so whoever has physical possession can tamper with the files.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=14)** Now, if we want to think about permissions, we should also think a little bit about spoofing.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=20)** If I give Andrew permission to edit the script to this course, I have to make sure I'm giving that permission to the right Andrew.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=28)** Failures might feel like a spoofing problem, but they can allow tampering.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=33)** You might have set a file to be world writable accidentally because, let's face it, managing permissions is hard.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=41)** You might have setup the file so there's an access token like a link and anyone with the link can edit the file.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=48)** Actually, if the link looks like that, there's other problems.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=53)** I might give an app access to my documents to help me look for readability concerns or places where I'm not focused on the right targets for today's two minutes hate.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=64)** Attackers can tamper with files, file systems, even databases.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=69)** Even when we call those file systems S3 Buckets or Dropbox, they're still subject to tampering.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=76)** We hear more about those Cloud file systems being world readable, but that may because reading the files is less harmful.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=84)** We don't often hear if the people who discover those open Cloud files can also write to them, but when the BBC bothered to look, they quickly found over 50 warning notes left by friendly hackers saying things like please fix this before a bad guy finds it.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=103)** Tampering applies to S3 and Dropbox and more.
>
> **[1:46](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=106)** It applies to Cloud databases like SQL Azure.
>
> **[1:49](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=109)** It includes the machine stores, container stores and configuration databases that power them.
>
> **[1:55](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=115)** In the Cloud, there's complexity everywhere.
>
> **[1:59](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=119)** Complexity comes from several places including different policy languages, even within a single provider and different approaches to hierarchy.
>
> **[2:07](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=127)** Does a change in a higher level of a trait override permissions set explicitly on objects lower down?
>
> **[2:13](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=133)** Does it even recurs?
>
> **[2:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=135)** If I can bypass the Colonel, if I can by pass integrity checks, if I can convince another program to write to the data store, then I can tamper with your storage.
>
> **[2:26](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=146)** Each of these bypasses the protection system in some way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), override (1), pass (1)
> **Env Vars:** usb (1), bbc (1), sql (1)
> **CLI Commands:** make (1)
> **Warnings:** warning (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Effects of tampering
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980&t=1)** - [Narrator] There's one last effect of storage tampering, and that's a denial of service attack.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980&t=6)** I'm tampering with your files or the file system, and as I do so, as a side effect, take up the remaining space.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980&t=14)** When storage is file, you have to choose what data you throw away, either the data that's already stored or the new data being generated.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980&t=24)** Sometimes it's even worse stopping the system if you can't write data anymore.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980&t=29)** Similarly, if I can pull out a USB key, you might not be able to write data that you mean to write.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980&t=36)** And that would be wrong.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (1)
> **Env Vars:** usb (1)
> **Speakers:** - [narrator] (1)


### 3. Tampering with Things

> [↑ Back to Table of Contents](#table-of-contents)

#### Whose screw? Physical tampering matters
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=1)** - [Instructor] When we deal with computers that look like old fashioned computers, we usually accept the risk that someone can tamper with it.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=9)** We either treat it as out of scope if we make operating systems, or we address it with cages and locks if we're in a data center.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=18)** And when the computer is in someone's pocket, on their door or outside, we realize that we need different approaches.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=25)** For example, an iPhone won't boot if you tamper with its security critical parts, including the home button with its fingerprint reader.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=35)** Other computers, like security cameras, have various levels of tamper resistance balanced carefully with cost to manufacture or ship and so the tamper resistance is often limited to an oddly shaped screwhead.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=51)** Other computers or things of the Internet of things are in our houses.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=56)** There we assume that our walls somehow block the wireless signals to prevent tampering and other network attacks.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=64)** And we ignore the risk that a guest, a housekeeper or an Airbnb customer will tamper with the device more aggressively.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Debug interfaces are exposed
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=1)** - [Instructor] We have to consider what happens when someone tampers with hardware.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=5)** Is physical access game over?
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=7)** Or are there additional layers of protection?
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=11)** A castle has a moat, then a wall, then another wall.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=14)** Each has a fancy name, which you need to know if you play a lot of D&D.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=19)** Computers can also have defenses beyond a fancy screw.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=23)** JTAG is an interface for testing circuit boards.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=27)** It's really useful, both at the factory, and if you're trying to learn about a piece of hardware.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=33)** You have to ask, is the JTAG interface accessible after the device leaves the factory?
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=40)** I originally wrote after it reaches the customer, but protection has to kick in earlier.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=46)** It's both tricky and important to think very clearly about your goals.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=52)** For example, what happens when someone replaces the SD card or other storage?
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=58)** Now, that's not to say you have to defend against these attacks.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=62)** Maybe you want hobbyists to build on your awesome work.
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=66)** Cool.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=67)** But if you've decided that's not okay, you have to engineer to make sure it doesn't happen.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=74)** Debug interfaces can be an awful problem for things.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=77)** But software often has debug interfaces that are designed to allow modification.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=83)** Engineering requires you make intentional trade-offs.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** interface (2)
> **Env Vars:** jtag (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Tampering with Time Itself

> [↑ Back to Table of Contents](#table-of-contents)

#### Time is increasingly important
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=1)** It's time we talk about time.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=3)** Now as we all now time is an illusion, lunch time doubly so and the time on your computer triply so.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=11)** There are reasons to tamper with time on a device.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=15)** Phones, laptops, other devices are often physically moved.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=19)** Occasionally, a place like Samoa will decide it's on the wrong side of the international date line and skip Friday.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=27)** Time is not as simple as we expect.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=29)** The system will adjust time on you, politicians will adjust time under you, and attackers can adjust time on your system.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=38)** Once they do so they can insert a packet and make it cryptographically signed so its validated and trusted on the other side.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=46)** You can adjust software licensing with time driven attacks.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=50)** You can unlock the magic sword in your favorite game by moving the date forward while the phone is in airplane mode.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=56)** Each of these is a reason to tamper with time.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=60)** There's also systems who's only goal is to modify time.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=64)** Like the network time protocol.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=65)** Officially it's modifying time on your behalf.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=69)** Because keeping clock in sync with each other is tricky.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=73)** Especially when devices are low power or when their clocks are virtual machines that might be suspended.
>
> **[1:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=80)** Another tool to keep clock in sync is GPS.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=83)** Which includes highly accurate time.
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=86)** So we can just tap into that and be set right?
>
> **[1:28](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=88)** Well GPS signals are set by radio, and those radio signals can be faked.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=94)** The result being tampering with your clock.

> [!info]- Semantic Content
>
> **Env Vars:** gps (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)


### 5. Tampering with Cloud

> [↑ Back to Table of Contents](#table-of-contents)

#### Controls and authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=1)** - [Narrator] When an attacker breaks into a cloud service they'll often tamper with the controls.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=5)** With a personal account maybe they'll tamper with the password but either way they'll add their email or phone number to back up authentication options.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=15)** They'll write email rules that cause your email to forward to them.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=19)** That way you don't see they're telling people you're trapped in a hotel in London and the manager has your passport.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=25)** Google will put a red warning at the top of your email when new forwarding rules are added.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=31)** It can't be dismissed for a week.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=34)** Attackers will tamper with permissions or add new accounts with different types of authorization.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=39)** Sometimes they'll change your files.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=41)** For example encrypting them for ransom.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=44)** Logging can be an important part of detecting and responding to tampering.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=48)** Logs should be a pend only and how much data they contain is a trade off.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=53)** Should the system record diffs per change or simply the changes occurred?
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=58)** Lastly, it's important to remember that logs exist to be used.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=62)** Especially if the person using them is not technical.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=65)** We need to design tools to help them achieve their goals.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [narrator] (1)

#### Becoming Jane Admin
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=0)** - [Instructor] When an attacker breaks into a cloud service, they'll often tamper with the controls.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=6)** At a corporate level, attackers will sometimes make themselves an admin and sometimes not, because making yourself an admin can trigger alarms.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=16)** You might ask, is this tampering?
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=18)** It's authorized.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=20)** They're using the service as designed just like someone modifying a file in Office 365 is authorized, only not quite.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=28)** There's a disconnect between the technical authorization and the human level authorization.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=34)** An important function of threat modeling is to make sure those align.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=39)** When an attacker tampers with the authentication controls, the attacks seem to blend into spoofing.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=44)** This can be really confusing.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=46)** We want to be able to store ideas in cubbyholes.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=50)** This is spoofing, that's tampering.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=52)** Unfortunately, the universe doesn't always work that way.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=56)** This is a reptile, it lays eggs.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=58)** That's a mammal, it has live babies.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=61)** That's a duck billed platypus.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=63)** An egg laying mammal?
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=66)** And so rather than trying to put a label on the attack of tampering with the authentication controls, deal with the problem.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=76)** If you're the cloud provider, pay attention and tell the account's owner and users.
>
> **[1:21](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=81)** Possibly just kick out the attacker.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=84)** Notify people that things are being changed.
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=86)** Have a roll back button.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=89)** And more generally, use stride as mnemonic, not as a way of classifying things.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** function (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 6. Tampering with Data Flows

> [↑ Back to Table of Contents](#table-of-contents)

#### Channels and messages
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=1)** - [Instructor] Data flows are made up of messages and channels.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=4)** Messages flow along channels and either the messages themselves or the channel, can be tampered with.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=11)** Let me explain.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=12)** We'll use email as an example.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=15)** A message, like an email, flows through an SMTP channel.
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=19)** I can secure the message using a cryptographic tool like PGP or S/MIME and I can secure the channel using something like StartTLS.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=27)** Each protects integrity.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=30)** The first protects the integrity of the message.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=33)** The second protects the integrity of the channel.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=35)** Both are useful.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=37)** By the way, both also provide confidentiality for the data as it flows over a network and PGP or S/MIME can provide confidentiality to the message while it's stored on disk.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=51)** The two layers are complimentary because not every message has to be signed.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=56)** Back to message and channel integrity, they do slightly different things.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=60)** I can have a message where there's no integrity protection and I probably do.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=65)** It's the case with most email today.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=68)** When you type an email in the mail client on your phone, the message gets sent from that client to the mail server and there's no PGP or S/MIME on your phone.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=76)** The channel might not even have security.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=79)** An attacker sitting between your mail client and the mail server could tamper with the message.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=85)** They can do that by spoofing the mail server or by spoofing the PKI.
>
> **[1:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=90)** But, the server probably has TLS to protect channel integrity and confidentiality against those attacks.
>
> **[1:39](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=99)** Later, the message is doubly protected.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=103)** The second layer is a cryptographic signature called DKIM, Domain Keys Identified Mail, which provides integrity after a message leaves the server.
>
> **[1:53](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=113)** The server signs the message so it can't be tampered with between different mail servers.
>
> **[1:58](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=118)** The full picture looks something like this.
>
> **[2:02](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=122)** When you're designing a system, it's good to have integrity protection, both up and down the stack, and on the relationship between the layers of the stack.
>
> **[2:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=131)** For example, there's no connection between the DKIM signature and TLS integrity on the channel.
>
> **[2:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=139)** There's no connection from a PGP signature to a DKIM signature but there is in the other direction.
>
> **[2:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=145)** DKIM validates the outer layer of the email.
>
> **[2:29](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=149)** These inter-layer connections are challenging to build and operate but we'll see more of them in the future.

> [!info]- Semantic Content
>
> **Env Vars:** pgp (4), dkim (4), mime (3), tls (2), smtp (1)
> **Code Keywords:** let (1), protected (1), this. (1)
> **Analogies:** picture (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Replay and reflection
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=1)** - [Instructor] I can also tamper with the data flow by replaying messages.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=5)** And holy cow.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=6)** They're signed, so they must be authentic.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=8)** Do you think that's enough?
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=10)** I'll send a lot of signed messages to your bank, saying please pay Adam $1,000.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=14)** Thank you.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=16)** That's why checks have sequence numbers on them.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=18)** And that's a good lesson for you in replay attacks.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=21)** When they're tampering with the channel, but not the message.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=25)** I can also reflect messages.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=27)** That is, send them back to their sender.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=30)** If your code simply checks for a signature like this, then that code will accept messages signed by you.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=38)** And once again, I laugh all the way to the bank.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=42)** Or, maybe the courthouse.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=44)** Don't try this with checks or any system with checks and balances.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=49)** I can cause collisions by sending a bunch of fake messages.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=53)** If the sequence numbers get updated at the wrong place in the code, then the receiver may be confused about which sequence numbers might be okay.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=62)** The valid message counter can only be updated after a message signature is validated.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)

#### Headers: Injection and order
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=1)** - [Instructor] Message headers present another interesting opportunity for tampering, often called header injection.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=8)** Some message headers are outside of what's signed and protected because they're added by servers after the signature is generated.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=16)** At the top, a mail server is pre-pending data about the path the message is taking.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=22)** It shouldn't remove the old signature, but add details and then maybe sign again.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=28)** You can inject completely new headers or you can duplicate headers that are already in the message.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=34)** For example, what if I put some fake date headers on an email message?
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=38)** I'm moving it either to the future or the past.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=41)** Will the extra header be shown as the actual date of the email?
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=45)** It's hard to predict how a given server will parse headers, it's hard to predict how a given client will parse the headers, but it's easy to predict that they won't always be the same.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=57)** Some software will parse the headers looking for date and stop when it finds that header.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=62)** Other software will parse each line of the headers and set the value of date each time it finds it, overriding the previously set value with each new header.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=72)** What's the right thing to do?
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=74)** Reject messages which are malformed.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=77)** Even though that violates the traditional robustness principle which is, be liberal in what you accept and conservative in what you send.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=85)** It's a great principle and it says be liberal, not be gullible.
>
> **[1:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=90)** So, header injection is an interesting way to muck with communication integrity.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 7. Integrity Defenses

> [↑ Back to Table of Contents](#table-of-contents)

#### Prevention and detection goals
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=1)** - [Instructor] In the digital world, bits are easy to modify, permissions will prevent someone from writing a file, but despite what I've been saying, Cryptography doesn't do that.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=11)** What it does is a little subtler.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=14)** Cryptographic hashes are designed so that changing a single bit of the file changes the output of the hash.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=21)** I added the A that the Apollo voice activated mike probably didn't pick up and the hash is completely different.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=29)** A digital signature is a mathematical operation that uses the hash of a file and a private key to produce output that can be checked by anyone with the mathematically related public key.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=42)** Crypto ensures that only a person, A, not the, or software that controls the relevant keys can make changes to the file and then provide an appropriate signature or integrity code.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=57)** Let's go back to the example with checks.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=59)** Software needs to notice that the message and signature don't match and then decide what to do.
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=66)** What to do includes both what you do with the message and what you told the operator.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=71)** You can either tell the operator or not.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=74)** You can throw the message away or quarantine it.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=77)** Throwing the message away makes it impossible for people to pick it up and treat it as real.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=83)** Because people think that attacks are less common than software bugs, treating it as real feels okay and attackers love getting people to do this.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=94)** Quarantining carries the risk that people will fish it out of the trash but makes debugging easier.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=101)** Some systems may automatically tell the attacker about the result of an integrity failure.
>
> **[1:46](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=106)** Cryptanalysts have a name for those systems.
>
> **[1:48](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=108)** Fun.
>
> **[1:50](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=110)** They usually leak information at least in how fast they respond and sometimes the error messages have confidential information.
>
> **[1:57](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=117)** Actually, the name Cryptographers really use is oracles or timing oracles.
>
> **[2:03](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=123)** You can also either tell the operator or not.
>
> **[2:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=126)** If you tell the operator, you need to tell them what to do about it.
>
> **[2:10](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=130)** Give them a path to safety.
>
> **[2:12](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=132)** How to report it.
>
> **[2:13](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=133)** Advice on what steps to take to get an authentic message and those steps need to be both followable and resistant to attack.
>
> **[2:22](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=142)** So, Cryptography can either detect tampering or prevent the result from reaching a person.
>
> **[2:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=150)** It's important to be precise about what you expect of controls.

> [!info]- Semantic Content
>
> **Code Keywords:** private (1), public (1), let (1), throw (1), this. (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Crypto
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=1)** - [Instructor] The strongest defenses for integrity rely on well-implemented cryptography, despite the limitations we've discussed.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=9)** A cryptographic signature is hard to forge and the integrity of the signature spans systems.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=16)** If cryptographic defenses aren't feasible, not performant or the files need to change at a frequency that makes managing keys or assigning hard, then you're going to rely on something more privileged to protect you but right now, let's look at crypto.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=33)** Crypto defenses against tampering are primarily focused on digital signatures, a type of cryptography that uses assymetry keys, keys which are mathematically related.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=45)** One is kept secret, the other is widely available.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=49)** There are also message authentication codes and authenticated encryption modes.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=54)** These use a shared key, that is a symmetric one where each party to the communication has a copy of the same key.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=63)** Both message authentication codes and authenticated encryption give you great integrity over a network but they can't authoritatively say who created or signed a packet or a file.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=76)** LinkedIn Learning has other courses that go deep into the algorithms, how they work and how to select an implementation that will work for you.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=85)** Another strategy is to use software that provides file integrity monitoring.
>
> **[1:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=90)** What that usually means is that it takes a cryptographic hash of a file and stores that hash somewhere safe.
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=97)** Now and then, it will take another hash of the file and tell you if the file's changed.
>
> **[1:42](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=102)** Sometimes that change is caused by an expected update and commercial file monitoring software will include a subscription to a stream of updates like Windows now includes this file on this date with these hashes.
>
> **[1:56](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=116)** Downsides include thrashing disk as each file is read into memory and run through the hash and so-called false positives.
>
> **[2:05](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=125)** There are also a few attacks to be aware of with cryptographic defenses.
>
> **[2:10](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=130)** First, they all fail when someone steals or replaces your key and so you need to protect it and especially not commit it to GitHub.
>
> **[2:19](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=139)** Second, an attacker who can tamper with the software that verifies the messages can cause integrity failures to look like successes or successes to look like failures.
>
> **[2:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=150)** Remember what we said about libraries?
>
> **[2:32](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=152)** They get updated by many different tools.
>
> **[2:36](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=156)** That's just another example of the sort of thing a file integrity tool needs to manage.
>
> **[2:42](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=162)** So, crypto's great but it's not magic.
>
> **[2:46](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=166)** You have to use it properly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Something more privileged
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=1)** - [Narrator] If cryptography doesn't meet your needs, you'll rely on something more privileged than your code to provide integrity.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=9)** That might be an operating system which has a permissions framework.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=13)** It might be a router controlling what packets can go where.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=17)** It might be your cloud provider with its permission system.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=20)** It might be a cloud operating system that allows you to construct and run immutable systems.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=26)** It might even be hardware that provides support for write protection.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=31)** If you need to create a new permission system, you want to involve experts because it's tricky to get right.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=38)** It's tricky because of issues like canonical names in the face of symlinks, or how to create policies with a good mix of expressiveness and usability.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=48)** Any component which imposes limitations on how you work, can impose limitations on how an attacker can work.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=55)** Leverage that.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=58)** This lesson is entitled Something More Privileged.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=61)** You might be wondering how does that relate to the idea of expansion of authority?
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=66)** I've been using phrases like "something more privileged" for decades.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=71)** It's both a useful concept and a hard habit to break.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=75)** And more, it's okay to use both when you're being informal and talking about the general concepts, as long as you and the people around you aren't confused.

> [!info]- Semantic Content
>
> **Code Keywords:** break. (1)
> **Speakers:** - [narrator] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Secure by design: Bring integrity to your systems
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=1)** - [Adam] I hope you're interested in learning more, and the best way to learn is to dive in and tamper.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=7)** Do this to systems in a lab or where you have authorization.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=11)** But go get some tools, give these approaches a try.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=14)** Make it real so you can speak to tampering as you analyze new systems.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=20)** This course is a great introduction to understanding tampering threats, so you can apply them to threat modeling and other security work.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=30)** For a more comprehensive view, check out my books, "Threat Modeling: Designing for Security" and "Threats: What Every Engineer Should Learn from Star Wars."
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=41)** A systematic, structured, and comprehensive approach to threat modeling will lead your teams to more secure and robust outcomes in more predictable timeframes.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=53)** The next time you find yourself looking at something you're working on, be sure to consider what can go wrong and what you're going to do about it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** try. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [adam] (1)


## Instructor

- [[Adam Shostack]]

## Skills Covered

- Threat Modeling

## Path Context

### In [[Improve Your Threat Modeling Skills]]
← [[Threat Modeling- Spoofing In Depth]] | **3 of 6** | [[Threat Modeling- Repudiation in Depth]] →

## Appears In

- [[Improve Your Threat Modeling Skills]]

## Related Courses

_Courses sharing skills:_

- [[Threat Modeling for AI-ML Systems]] — Threat Modeling
- [[Threat Modeling- Denial of Service and Expansion of Authority]] — Threat Modeling
- [[Threat Modeling- Information Disclosure in Depth]] — Threat Modeling
- [[Threat Modeling- Repudiation in Depth]] — Threat Modeling
- [[Threat Modeling- Spoofing In Depth]] — Threat Modeling

---

[↑ Back to top](#)