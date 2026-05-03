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
created: 2026-05-03
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
  - [Mitigate tampering threats](#mitigate-tampering-threats)
  - [Four-question framework](#four-question-framework)
  - [Tampering as part of STRIDE](#tampering-as-part-of-stride)
- [**1. Tampering with a Process**](#1-tampering-with-a-process) (3 videos)
  - [Debuggers and input](#debuggers-and-input)
  - [Libraries](#libraries)
  - [Mobile](#mobile)
- [**2. Tampering with Storage**](#2-tampering-with-storage) (3 videos)
  - [Tampering with local storage](#tampering-with-local-storage)
  - [Permissions](#permissions)
  - [Effects of tampering](#effects-of-tampering)
- [**3. Tampering with Things**](#3-tampering-with-things) (2 videos)
  - [Whose screw? Physical tampering matters](#whose-screw-physical-tampering-matters)
  - [Debug interfaces are exposed](#debug-interfaces-are-exposed)
- [**4. Tampering with Time Itself**](#4-tampering-with-time-itself) (1 videos)
  - [Time is increasingly important](#time-is-increasingly-important)
- [**5. Tampering with Cloud**](#5-tampering-with-cloud) (2 videos)
  - [Controls and authentication](#controls-and-authentication)
  - [Becoming Jane Admin](#becoming-jane-admin)
- [**6. Tampering with Data Flows**](#6-tampering-with-data-flows) (3 videos)
  - [Channels and messages](#channels-and-messages)
  - [Replay and reflection](#replay-and-reflection)
  - [Headers: Injection and order](#headers-injection-and-order)
- [**7. Integrity Defenses**](#7-integrity-defenses) (3 videos)
  - [Prevention and detection goals](#prevention-and-detection-goals)
  - [Crypto](#crypto)
  - [Something more privileged](#something-more-privileged)
- [**Conclusion**](#conclusion) (1 videos)
  - [Secure by design: Bring integrity to your systems](#secure-by-design-bring-integrity-to-your-systems)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Mitigate tampering threats](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mitigate-tampering-threats?u=76281980&t=0)** - [Adam] Tampering, meddling with, stacking the deck, monkeying around, loading the dice, manipulating things, rigging a game. All of these attacks in the real world have equivalence in the world of cyber. This course is part of a series on [[Threat Modeling]] and the STRIDE threats. I'm Adam Shostack. I've written the most popular book on threat modeling, helped create the CVE, and I'm on the Black Hat Review Board. And in this course, you'll learn about threat modeling, a structured and systematic approach to finding security threats early in a project while there's time to address them. And we'll go in-depth into tampering and how to address it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3)
> **Env Vars:** stride (1), cve (1)
> **Speakers:** - [adam] (1)

#### [Four-question framework](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/four-question-framework?u=76281980&t=1)** - [Instructor] At the heart of [[Threat Modeling]] are four incredibly simple questions. What are we working on, what can go wrong, what are we going to do about it, and did we do a good job? These questions act as guideposts as you're threat modeling and analyzing your work. If you're not sure why you're doing what you're doing, tie that work to one of these questions. In this course, I'll be digging deep into details about what can go wrong and what are we going to do about it, through the lens of tampering and integrity. Tampering is a broad threat. I can tamper with files, network communication, running code, or even time. The mechanisms are quite different as I do, but all involve breaking integrity. Looking at these four questions through a tampering lens is part of the systematic, structured, and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Tampering as part of STRIDE](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=1)** - [Instructor] This course is part of a series on [[Threat Modeling]] and the STRIDE threats. STRIDE is a mnemonic that stands for Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege. Well, that's the historic version. Today, we often talk about expansion of authority in place of elevation of privilege. The short form is... authority is clearer. It's what a program can do, and also authority is measurable. We'll cover how tampering impacts the integrity of communications, storage, processes, and even time, at least as computers experience it. You'll also learn about how to ensure the integrity of your systems. Let's make that concrete and look at storage. When you save a file, you expect to get the same file back the next time you open it, unless it's on [[Google]] Docs or [[Microsoft Office|Office]] 365 and you've shared it with a bunch of collaborators, in which case you expect that they're going to tamper with those files. But they're not really tampering, are they? You've given them permission, you've authorized those changes. And so you might want some tracking of who's made what changes, and you might want to view or modify those permissions. Tampering refers to modifications that are not authorized. When you're working with files, and whether it's files, it's a database, it's shared memory, the integrity of storage is fundamentally
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-as-part-of-stride-24473594?u=76281980&t=94)** a matter of authorizations or permissions and violations of those authorizations. Those are enforced by an operating system. One of the fundamental jobs of an operating system is to protect processes from one another. This isolation is to ensure that everyone's processes run the way they intend. We'll cover how to tamper with things you're supposed to leave untouched, and how to best protect the things you want to keep intact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (1), [[Google]] (1), [[Microsoft Office|Office]] (1)
> **Definitions:** is a  (1), stands for (1), refers to (1)
> **Env Vars:** stride (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 1. Tampering with a Process

[↑ Back to Table of Contents](#table-of-contents)

#### [Debuggers and input](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debuggers-and-input?u=76281980&t=1)** - [Instructor] There are lots of ways to modify a process. Your job in security is to ensure there's a match between what you intend to authorize and what the system understands you've authorized. One way to modify a process is with a debugger. It's one process under your control changing another process under your control. Sometimes a process has certain privileges that might be the ability to run the software at all under licensing, or maybe the process has a set UIT bit and the invoker will try to modify how those privileges get used. Oftentimes the attack will come in the form of tampering with the environment. Changing the libraries or changing a process' view of the file system. Another way to tamper with a process is to send it random input. Code will often really surprise you when it gets random input, but is that really tampering? After all, the code is doing what it's told. One important part of the way to think about random input is that the code may be out of control. Another part of how to think about random input is that the code wasn't really very precise in the first place. When we're feeding random input to a program, we call it fuzzing. And fuzzing is one important way to ensure the code does what you intend and only what you intend.

> [!info]- Semantic Content
>
> **Env Vars:** uit (1)
> **Speakers:** - [instructor] (1)

#### [Libraries](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=1)** - [Instructor] Code usually depends on libraries, and we rarely think about those libraries as attack vectors. How are libraries loaded? Usually they're loaded from disks. Ah, trustworthy, reliable, local disks. But storage gets modified, libraries on local disks are loaded by package managers. They can be loaded from the web. Each is subject to tampering. Do you see the pattern? When we talk about loading libraries from disk, the code has a load path, which is an ordered list of the directories that will be checked for libraries. The load path will often include the current working directory. If that happens to be Downloads, anyone who downloads a file there with the right extensions and permissions can have it load as a library. This is still a fun attack on [[Windows]]. Well, if you're attacking, it's fun. There's also tampering with libraries loaded with a package manager like [[npm]] or apt. An attacker, like a systems administrator, can modify or tamper with those, breaking code accidentally or intentionally. Another attacker can break into the npm repo, get access to a package by social engineering, by becoming a contributor, or by buying a package. Each of these allows them to make changes to the package you expect. The web has a simple src tag that allows you to include libraries from other servers. Using HTTP, if you like to live dangerously. Even if you're using HTPS, the remote servers,
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/libraries?u=76281980&t=97)** the disk that serve them, and the programmers with commit rights, can all modify your code. You can sometimes lump the impact of that with iframe or other in-web defenses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[Windows]] (1)
> **CLI Commands:** npm (2), apt (1), make (1)
> **Env Vars:** http (1), htps (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Mobile](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=1)** - [Instructor] Processes get very different protections on mobile phone operating systems. There processes are protected from one another. The design is that processes cannot tamper with each other. [[Android]] apps run as different UIDs. The birds can't peck at the zombies and the zombies can't eat the plants under the birds. More importantly, they can't change your high score, give you extra coins, or change the [[Representational State Transfer (REST)|rest]] end point where your credit card gets sent and neither can anything else. Apple apps are sand boxed so that libraries can only be loaded if they come from either the same creator or the operating system. The operating system libraries are read only, what's more the application themselves are signed and both operating systems validate a signature before running a process. These designs were created in the 2000s and show many patterns that system designers should pay attention to. Sometimes developers want to adapt these protections from mobile to other places that don't have them. They'll think digital signatures can protect against tampering by root, or administrator, or the hyper-visor and frankly that's just hard. If you're going to do it first a good exercise is to threat model all the ways that some lower level component can muck with the higher one. It's a major engineering effort all by itself. Now, if you think you're going to try a good exercise
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/mobile?u=76281980&t=98)** is to threat model all the ways that some lower level component can muck with the higher level one. Bringing this into a system is a major engineering effort all by itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Tampering with Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Tampering with local storage](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/tampering-with-local-storage?u=76281980&t=1)** - [Narrator] We've talked about libraries and libraries are an important case. But don't limit your thinking to libraries. Executables can be tampered with. Lambda functions can be tampered with. Containers can be tampered with. [[Kubernetes]] can't be tampered with because Kubernetes is magic. Actually, it's not that magical. It can be tampered with. Someone who gets privileged access can tamper with files. Those can be data, they can be configuration files. Modifying configuration files can be as impactful as modifying the code. It's easier too. File tampering is easiest to visualize on the local system but all files are subject to tampering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2)
> **Speakers:** - [narrator] (1)

#### [Permissions](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=1)** - [Instructor] Sometimes you don't have a permission system. If I have a USB stick in one computer, I can move it to a new system and change the files on it, and so whoever has physical possession can tamper with the files. Now, if we want to think about permissions, we should also think a little bit about spoofing. If I give Andrew permission to edit the script to this course, I have to make sure I'm giving that permission to the right Andrew. Failures might feel like a spoofing problem, but they can allow tampering. You might have set a file to be world writable accidentally because, let's face it, managing permissions is hard. You might have setup the file so there's an access token like a link and anyone with the link can edit the file. Actually, if the link looks like that, there's other problems. I might give an app access to my documents to help me look for readability concerns or places where I'm not focused on the right targets for today's two minutes hate. Attackers can tamper with files, file systems, even [[Databases]]. Even when we call those file systems S3 Buckets or Dropbox, they're still subject to tampering. We hear more about those Cloud file systems being world readable, but that may because reading the files is less harmful. We don't often hear if the people who discover those open Cloud files can also write to them, but when the BBC bothered to look, they quickly found over 50 warning notes
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/permissions?u=76281980&t=95)** left by friendly hackers saying things like please fix this before a bad guy finds it. Tampering applies to S3 and Dropbox and more. It applies to Cloud databases like [[SQL]] [[Microsoft Azure|Azure]]. It includes the machine stores, container stores and configuration databases that power them. In the Cloud, there's complexity everywhere. Complexity comes from several places including different policy languages, even within a single provider and different approaches to hierarchy. Does a change in a higher level of a trait override permissions set explicitly on objects lower down? Does it even recurs? If I can bypass the Colonel, if I can by pass integrity checks, if I can convince another program to write to the data store, then I can tamper with your storage. Each of these bypasses the protection system in some way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[SQL]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** usb (1), bbc (1), sql (1)
> **CLI Commands:** make (1)
> **Warnings:** warning (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Effects of tampering](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/effects-of-tampering?u=76281980&t=1)** - [Narrator] There's one last effect of storage tampering, and that's a denial of service attack. I'm tampering with your files or the file system, and as I do so, as a side effect, take up the remaining space. When storage is file, you have to choose what data you throw away, either the data that's already stored or the new data being generated. Sometimes it's even worse stopping the system if you can't write data anymore. Similarly, if I can pull out a USB key, you might not be able to write data that you mean to write. And that would be wrong.

> [!info]- Semantic Content
>
> **Env Vars:** usb (1)
> **Speakers:** - [narrator] (1)


### 3. Tampering with Things

[↑ Back to Table of Contents](#table-of-contents)

#### [Whose screw? Physical tampering matters](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/whose-screw-physical-tampering-matters?u=76281980&t=1)** - [Instructor] When we deal with computers that look like old fashioned computers, we usually accept the risk that someone can tamper with it. We either treat it as out of scope if we make operating systems, or we address it with cages and locks if we're in a data center. And when the computer is in someone's pocket, on their door or outside, we realize that we need different approaches. For example, an iPhone won't boot if you tamper with its security critical parts, including the home button with its fingerprint reader. Other computers, like security cameras, have various levels of tamper resistance balanced carefully with cost to manufacture or ship and so the tamper resistance is often limited to an oddly shaped screwhead. Other computers or things of the [[IoT|Internet of things]] are in our houses. There we assume that our walls somehow block the wireless signals to prevent tampering and other network attacks. And we ignore the risk that a guest, a housekeeper or an Airbnb customer will tamper with the device more aggressively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT|Internet of things]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Debug interfaces are exposed](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/debug-interfaces-are-exposed?u=76281980&t=1)** - [Instructor] We have to consider what happens when someone tampers with [[Hardware]]. Is physical access game over? Or are there additional layers of protection? A castle has a moat, then a wall, then another wall. Each has a fancy name, which you need to know if you play a lot of D&D. Computers can also have defenses beyond a fancy screw. JTAG is an interface for testing circuit boards. It's really useful, both at the factory, and if you're trying to learn about a piece of hardware. You have to ask, is the JTAG interface accessible after the device leaves the factory? I originally wrote after it reaches the customer, but protection has to kick in earlier. It's both tricky and important to think very clearly about your goals. For example, what happens when someone replaces the SD card or other storage? Now, that's not to say you have to defend against these attacks. Maybe you want hobbyists to build on your awesome work. Cool. But if you've decided that's not okay, you have to engineer to make sure it doesn't happen. Debug interfaces can be an awful problem for things. But software often has debug interfaces that are designed to allow modification. Engineering requires you make intentional trade-offs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2)
> **CLI Commands:** make (2)
> **Env Vars:** jtag (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Tampering with Time Itself

[↑ Back to Table of Contents](#table-of-contents)

#### [Time is increasingly important](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=1)** It's time we talk about time. Now as we all now time is an illusion, lunch time doubly so and the time on your computer triply so. There are reasons to tamper with time on a device. Phones, laptops, other devices are often physically moved. Occasionally, a place like Samoa will decide it's on the wrong side of the international date line and skip Friday. Time is not as simple as we expect. The system will adjust time on you, politicians will adjust time under you, and attackers can adjust time on your system. Once they do so they can insert a packet and make it cryptographically signed so its validated and trusted on the other side. You can adjust software licensing with time driven attacks. You can unlock the magic sword in your favorite game by moving the date forward while the phone is in airplane mode. Each of these is a reason to tamper with time. There's also systems who's only goal is to modify time. Like the network time protocol. Officially it's modifying time on your behalf. Because keeping clock in sync with each other is tricky. Especially when devices are low power or when their clocks are [[Virtual Machines]] that might be suspended. Another tool to keep clock in sync is GPS. Which includes highly accurate time. So we can just tap into that and be set right? Well GPS signals are set by radio, and those radio signals can be faked.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/time-is-increasingly-important?u=76281980&t=94)** The result being tampering with your clock.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (1)
> **Env Vars:** gps (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)


### 5. Tampering with Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Controls and authentication](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/controls-and-authentication?u=76281980&t=1)** - [Narrator] When an attacker breaks into a cloud service they'll often tamper with the controls. With a personal account maybe they'll tamper with the password but either way they'll add their email or phone number to back up authentication options. They'll write email rules that cause your email to forward to them. That way you don't see they're telling people you're trapped in a hotel in London and the manager has your passport. [[Google]] will put a red warning at the top of your email when new forwarding rules are added. It can't be dismissed for a week. Attackers will tamper with permissions or add new accounts with different types of authorization. Sometimes they'll change your files. For example encrypting them for ransom. Logging can be an important part of detecting and responding to tampering. Logs should be a pend only and how much data they contain is a trade off. Should the system record diffs per change or simply the changes occurred? Lastly, it's important to remember that logs exist to be used. Especially if the person using them is not technical. We need to design tools to help them achieve their goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [narrator] (1)

#### [Becoming Jane Admin](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/becoming-jane-admin?u=76281980&t=0)** - [Instructor] When an attacker breaks into a cloud service, they'll often tamper with the controls. At a corporate level, attackers will sometimes make themselves an admin and sometimes not, because making yourself an admin can trigger alarms. You might ask, is this tampering? It's authorized. They're using the service as designed just like someone modifying a file in [[Microsoft Office|Office]] 365 is authorized, only not quite. There's a disconnect between the technical authorization and the human level authorization. An important function of [[Threat Modeling]] is to make sure those align. When an attacker tampers with the authentication controls, the attacks seem to blend into spoofing. This can be really confusing. We want to be able to store ideas in cubbyholes. This is spoofing, that's tampering. Unfortunately, the universe doesn't always work that way. This is a reptile, it lays eggs. That's a mammal, it has live babies. That's a duck billed platypus. An egg laying mammal? And so rather than trying to put a label on the attack of tampering with the authentication controls, deal with the problem. If you're the cloud provider, pay attention and tell the account's owner and users. Possibly just kick out the attacker. Notify people that things are being changed. Have a roll back button. And more generally, use stride as mnemonic, not as a way of classifying things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[Threat Modeling]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 6. Tampering with Data Flows

[↑ Back to Table of Contents](#table-of-contents)

#### [Channels and messages](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=1)** - [Instructor] Data flows are made up of messages and channels. Messages flow along channels and either the messages themselves or the channel, can be tampered with. Let me explain. We'll use email as an example. A message, like an email, flows through an SMTP channel. I can secure the message using a cryptographic tool like PGP or S/MIME and I can secure the channel using something like StartTLS. Each protects integrity. The first protects the integrity of the message. The second protects the integrity of the channel. Both are useful. By the way, both also provide confidentiality for the data as it flows over a network and PGP or S/MIME can provide confidentiality to the message while it's stored on disk. The two layers are complimentary because not every message has to be signed. Back to message and channel integrity, they do slightly different things. I can have a message where there's no integrity protection and I probably do. It's the case with most email today. When you type an email in the mail client on your phone, the message gets sent from that client to the mail server and there's no PGP or S/MIME on your phone. The channel might not even have security. An attacker sitting between your mail client and the mail server could tamper with the message. They can do that by spoofing the mail server or by spoofing the PKI. But, the server probably has TLS to protect channel integrity
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/channels-and-messages?u=76281980&t=95)** and confidentiality against those attacks. Later, the message is doubly protected. The second layer is a cryptographic signature called DKIM, Domain Keys Identified Mail, which provides integrity after a message leaves the server. The server signs the message so it can't be tampered with between different mail servers. The full picture looks something like this. When you're designing a system, it's good to have integrity protection, both up and down the stack, and on the relationship between the layers of the stack. For example, there's no connection between the DKIM signature and TLS integrity on the channel. There's no connection from a PGP signature to a DKIM signature but there is in the other direction. DKIM validates the outer layer of the email. These inter-layer connections are challenging to build and operate but we'll see more of them in the future.

> [!info]- Semantic Content
>
> **Env Vars:** pgp (4), dkim (4), mime (3), tls (2), smtp (1)
> **Analogies:** picture (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Replay and reflection](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/replay-and-reflection?u=76281980&t=1)** - [Instructor] I can also tamper with the data flow by replaying messages. And holy cow. They're signed, so they must be authentic. Do you think that's enough? I'll send a lot of signed messages to your bank, saying please pay Adam $1,000. Thank you. That's why checks have sequence numbers on them. And that's a good lesson for you in replay attacks. When they're tampering with the channel, but not the message. I can also reflect messages. That is, send them back to their sender. If your code simply checks for a signature like this, then that code will accept messages signed by you. And once again, I laugh all the way to the bank. Or, maybe the courthouse. Don't try this with checks or any system with checks and balances. I can cause collisions by sending a bunch of fake messages. If the sequence numbers get updated at the wrong place in the code, then the receiver may be confused about which sequence numbers might be okay. The valid message counter can only be updated after a message signature is validated.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Headers: Injection and order](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/headers-injection-and-order?u=76281980&t=1)** - [Instructor] Message headers present another interesting opportunity for tampering, often called header injection. Some message headers are outside of what's signed and protected because they're added by servers after the signature is generated. At the top, a mail server is pre-pending data about the path the message is taking. It shouldn't remove the old signature, but add details and then maybe sign again. You can inject completely new headers or you can duplicate headers that are already in the message. For example, what if I put some fake date headers on an email message? I'm moving it either to the future or the past. Will the extra header be shown as the actual date of the email? It's hard to predict how a given server will parse headers, it's hard to predict how a given client will parse the headers, but it's easy to predict that they won't always be the same. Some software will parse the headers looking for date and stop when it finds that header. Other software will parse each line of the headers and set the value of date each time it finds it, overriding the previously set value with each new header. What's the right thing to do? Reject messages which are malformed. Even though that violates the traditional robustness principle which is, be liberal in what you accept and conservative in what you send. It's a great principle and it says be liberal, not be gullible. So, header injection is an interesting way to muck with communication integrity.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 7. Integrity Defenses

[↑ Back to Table of Contents](#table-of-contents)

#### [Prevention and detection goals](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=1)** - [Instructor] In the digital world, bits are easy to modify, permissions will prevent someone from writing a file, but despite what I've been saying, [[Cryptography]] doesn't do that. What it does is a little subtler. Cryptographic hashes are designed so that changing a single bit of the file changes the output of the hash. I added the A that the Apollo voice activated mike probably didn't pick up and the hash is completely different. A digital signature is a mathematical operation that uses the hash of a file and a private key to produce output that can be checked by anyone with the mathematically related public key. Crypto ensures that only a person, A, not the, or software that controls the relevant keys can make changes to the file and then provide an appropriate signature or integrity code. Let's go back to the example with checks. Software needs to notice that the message and signature don't match and then decide what to do. What to do includes both what you do with the message and what you told the operator. You can either tell the operator or not. You can throw the message away or quarantine it. Throwing the message away makes it impossible for people to pick it up and treat it as real. Because people think that attacks are less common than software bugs, treating it as real feels okay and attackers love getting people to do this. Quarantining carries the risk that people
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/prevention-and-detection-goals?u=76281980&t=96)** will fish it out of the trash but makes debugging easier. Some systems may automatically tell the attacker about the result of an integrity failure. Cryptanalysts have a name for those systems. Fun. They usually leak information at least in how fast they respond and sometimes the error messages have confidential information. Actually, the name Cryptographers really use is oracles or timing oracles. You can also either tell the operator or not. If you tell the operator, you need to tell them what to do about it. Give them a path to safety. How to report it. Advice on what steps to take to get an authentic message and those steps need to be both followable and resistant to attack. So, Cryptography can either detect tampering or prevent the result from reaching a person. It's important to be precise about what you expect of controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Crypto](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=1)** - [Instructor] The strongest defenses for integrity rely on well-implemented [[Cryptography]], despite the limitations we've discussed. A cryptographic signature is hard to forge and the integrity of the signature spans systems. If cryptographic defenses aren't feasible, not performant or the files need to change at a frequency that makes managing keys or assigning hard, then you're going to rely on something more privileged to protect you but right now, let's look at crypto. Crypto defenses against tampering are primarily focused on digital signatures, a type of cryptography that uses assymetry keys, keys which are mathematically related. One is kept secret, the other is widely available. There are also message authentication codes and authenticated encryption modes. These use a shared key, that is a symmetric one where each party to the communication has a copy of the same key. Both message authentication codes and authenticated encryption give you great integrity over a network but they can't authoritatively say who created or signed a packet or a file. [[LinkedIn]] Learning has other courses that go deep into the [[Algorithms]], how they work and how to select an implementation that will work for you. Another strategy is to use software that provides file integrity monitoring. What that usually means is that it takes a cryptographic hash of a file
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/crypto?u=76281980&t=94)** and stores that hash somewhere safe. Now and then, it will take another hash of the file and tell you if the file's changed. Sometimes that change is caused by an expected update and commercial file monitoring software will include a subscription to a stream of updates like [[Windows]] now includes this file on this date with these hashes. Downsides include thrashing disk as each file is read into memory and run through the hash and so-called false positives. There are also a few attacks to be aware of with cryptographic defenses. First, they all fail when someone steals or replaces your key and so you need to protect it and especially not commit it to [[GitHub]]. Second, an attacker who can tamper with the software that verifies the messages can cause integrity failures to look like successes or successes to look like failures. Remember what we said about libraries? They get updated by many different tools. That's just another example of the sort of thing a file integrity tool needs to manage. So, crypto's great but it's not magic. You have to use it properly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (2), [[LinkedIn]] (1), [[Algorithms]] (1), [[Windows]] (1), [[GitHub]] (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Something more privileged](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/something-more-privileged-24470632?u=76281980&t=1)** - [Narrator] If [[Cryptography]] doesn't meet your needs, you'll rely on something more privileged than your code to provide integrity. That might be an operating system which has a permissions framework. It might be a router controlling what packets can go where. It might be your cloud provider with its permission system. It might be a cloud operating system that allows you to construct and run immutable systems. It might even be [[Hardware]] that provides support for write protection. If you need to create a new permission system, you want to involve experts because it's tricky to get right. It's tricky because of issues like canonical names in the face of symlinks, or how to create policies with a good mix of expressiveness and usability. Any component which imposes limitations on how you work, can impose limitations on how an attacker can work. Leverage that. This lesson is entitled Something More Privileged. You might be wondering how does that relate to the idea of expansion of authority? I've been using phrases like "something more privileged" for decades. It's both a useful concept and a hard habit to break. And more, it's okay to use both when you're being informal and talking about the general concepts, as long as you and the people around you aren't confused.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (1), [[Hardware]] (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure by design: Bring integrity to your systems](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-tampering-in-depth/secure-by-design-bring-integrity-to-your-systems?u=76281980&t=1)** - [Adam] I hope you're interested in learning more, and the best way to learn is to dive in and tamper. Do this to systems in a lab or where you have authorization. But go get some tools, give these approaches a try. Make it real so you can speak to tampering as you analyze new systems. This course is a great introduction to understanding tampering threats, so you can apply them to [[Threat Modeling]] and other security work. For a more comprehensive view, check out my books, "Threat Modeling: Designing for Security" and "Threats: What Every Engineer Should Learn from Star Wars." A systematic, structured, and comprehensive approach to threat modeling will lead your teams to more secure and robust outcomes in more predictable timeframes. The next time you find yourself looking at something you're working on, be sure to consider what can go wrong and what you're going to do about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3)
> **CLI Commands:** make (1), find (1)
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