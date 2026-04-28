---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: threat-modeling-spoofing-in-depth
url: "https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth"
duration_minutes: 56
duration: 56m
level: Intermediate
updated: 9/23/2024
learners: 67716
skills:
  - Threat Modeling
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEHc1Iuj6yeBQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628887768698?e=2147483647&amp;v=beta&amp;t=o1FmvN-vbRmN9HT4ojVUbcZk0ALDnxVXCocDarIUdzc"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Improve Your Threat Modeling Skills]]'
prev_courses:
  - '[[Learning Threat Modeling for Security Professionals]]'
next_courses:
  - '[[Threat Modeling- Tampering in Depth]]'
path_nav: '[{"path":"Improve Your Threat Modeling Skills","position":2,"total":6,"prev":"Learning Threat Modeling for Security Professionals","next":"Threat Modeling- Tampering in Depth"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/threat-modeling
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Threat%20Modeling-%20Spoofing%20In%20Depth.md)

![Threat Modeling: Spoofing In Depth](https://media.licdn.com/dms/image/v2/C4E0DAQEHc1Iuj6yeBQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628887768698?e=2147483647&amp;v=beta&amp;t=o1FmvN-vbRmN9HT4ojVUbcZk0ALDnxVXCocDarIUdzc)

# Threat Modeling: Spoofing In Depth

> Threat modeling is a framework for thinking about what goes wrong. Security pros and software developers should learn to threat model early in their careers, because it shapes every system they build and defend. Spoofing, pretending to be someone or something you're not, is one of the key threats to systems. This course teaches you many of the ways in which spoofing happens, including spoofing of 

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth) | 56m | Intermediate | 68K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Authentication Basics** (2 videos)
- **3. 2. Spoofing Authentication Factors** (6 videos)
- **4. 3. Spoofing Hosts** (5 videos)
- **5. 4. Spoofing People** (3 videos)
- **6. 5. Spoofing Files** (3 videos)
- **7. Conclusion** (1 videos)

### 1. Introduction

#### Mitigate spoofing threats
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=1)** - Fakery and manipulation are in the news every day.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=5)** There's phishing, troll bots, and clever attackers.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=9)** Your bank doesn't know who's trying to log in from a foreign country, you on vacation or a criminal organization.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=17)** Issues of spoofing and how to authenticate are problems we encounter all day, every day.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=24)** We need our systems to be better, safer, and we need to get there without breaking schedules or workflows.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=33)** In this course, we'll dive deep into questions of authentication and spoofing and how they impact almost any new system being built today.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=42)** I'm Adam Shostack.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=44)** Over my 20 years of threat modeling, I've published a book, shipped software, and created a game, all to help people threat model.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=53)** Join me in my course where I'll explore many of the ways attackers spoof people, files, and even systems, to help you deliver more secure products and services.

> [!info]- Semantic Content
>
> **Speakers:** - fakery (1)

#### Four-question framework
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=1)** - At the heart of threat modeling are four incredibly simple questions.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=5)** What are we working on?
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=6)** What can go wrong?
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=7)** What are we going to do about it?
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=9)** And did we do a good job?
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=12)** These questions act as guideposts as you're reflecting on your work.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=17)** If you're not sure why you're doing what you're doing, tie that work to one of the questions.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=24)** In this course, I'll be digging deep into details around what can go wrong, and what are we going to do about it through the lens of spoofing and authenticity.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=34)** Spoofing is a broad threat.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=36)** I can spoof computers, people, or files.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=39)** The mechanisms are quite different as I do, but all involve breaking authentication.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=45)** Looking at these four questions through a spoofing lens is part of the systematic, structured, and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - at (1)

#### Spoofing as a part of STRIDE
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=1)** - Spoofing is about fakery.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=3)** All sorts of things can be faked, from apples, are they really organic, to Zydeco, if you hum a few bars.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=9)** In cybersecurity, the focus of fakery is spoofing.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=13)** Spoofing is really simple.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=15)** I can make an assertion, and everyone believes me.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=17)** "Little Red Riding Hood" would be a shorter story if Grandma had asked the wolf for some identification.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=24)** Spoofing is part of the pneumonic I use to help find threats, STRIDE.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=28)** STRIDE stands for Spoofing, Tampering, Repudiation.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=32)** Information disclosure, Denial of service, and Elevation of privilege.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=36)** Well, that's the historic version.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=39)** Today, we often talk about expansion of authority in place of elevation and privilege.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=45)** The short form is authority is clearer.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=49)** It's what a program can do.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=51)** And also, authority is measurable.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=55)** Identities that are faked or spoofed include both human and technical identities.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=61)** Those technical identities include just about anything referred to by a name, machines, processes, microservices, web services, even files.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=71)** I can fake a specific person, hello, I'm William Shakespeare, a random person, hello, my name's John Doe, or a person in a role, hello, I am a Nigerian Prince.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=83)** I can also fake systems.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=85)** A clever student of Roux Academy could set up [http://r0uxacademy.com](http://r0uxacademy.com) with a zero instead of an O in an attempt to phish logins from unsuspecting teachers.
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=97)** I can fake microservices, and it's extra fun 'cause they often spin up for a really short time.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=103)** If I want to sell things, like said chatboxes, I need to ensure that the decoder that receives encrypted video is authentic, not one in an emulator with keys that have been ripped out of a real device.
>
> **[1:57](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=117)** Processes can be spoofed too.
>
> **[1:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=119)** If I connect to localhost1234, how do I know it's not an attacker spawning a new listener and squatting on that port?
>
> **[2:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=127)** Attackers can spoof a file, say tempinstaller.shell, by creating it before the authentic and proper creator can.
>
> **[2:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=135)** Even authenticators can be spoofed.
>
> **[2:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=138)** For example, some systems use IP addresses for authentication.
>
> **[2:22](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=142)** If I use IP address ranges to control who can connect to a server, then I'm assuming that IP addresses are hard to fake.
>
> **[2:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=152)** Spoofing is really, really easy if there are no authenticators, and even the best authenticators can be spoofed.
>
> **[2:40](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=160)** There are no perfect systems, which makes spoofing a constant threat.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Env Vars:** stride (2)
> **URLs:** [http://r0uxacademy.com](http://r0uxacademy.com) (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - spoofing (1)


### 2. 1. Authentication Basics

#### Account creation
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=1)** - Some systems don't have any authentication, like a TV.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=4)** Why would a TV have a password?
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=7)** I might want my hotel room TV to have one, especially if there are kids around.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=12)** The need for authentication is situational.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=16)** Once you know you want authentication, you need to decide what it'll be.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=21)** A very common pattern on multi-user systems is the combination of an identifier, or username, and an authenticator like a password.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=31)** That doesn't exist on a TV.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=33)** Even a hotel TV has just one account, like a phone in 2015.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=39)** Accounts don't just spring into existence.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=42)** There's a process for making each one.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=44)** The intensity of that process ranges from show up and ask for one to get a job, undergo a thorough background check, sign a contract, and then an administrator creates the account.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=57)** That process is called account creation, account issuance, or even identity issuance.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=65)** I don't know what sort of weirdo issues an identity sounds very man in the gray flannel suit, if you ask me.
>
> **[1:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=73)** There's a common way to think about these systems.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=77)** A person is set up with a new account, there's an account identifier and some validation data which gets stored and is used for logging in.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=85)** Account creation is followed by credential setup, also called issuance or enrollment, and then the account is set up and ready to go.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=94)** Sometimes the account names for these are carefully controlled.
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=98)** There's only one John Smith at [rouxacademy.com](https://rouxacademy.com), but anyone can be John Smith on Facebook.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=104)** Every step in account creation is vulnerable to threats.
>
> **[1:49](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=109)** I can be mischievous on a loosely controlled site by picking a username.
>
> **[1:54](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=114)** For example, if I create a fake account for a celebrity on a new platform, I can post whatever I want, content that harms their reputation, advertisements for the wrong sponsor, let your imagination run wild.
>
> **[2:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=129)** I can also wreck havoc within tightly controlled systems.
>
> **[2:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=133)** If I know that your new employee password is always change me, then I can do some damage while a new hire figures out how to call the help desk.
>
> **[2:22](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=142)** I don't even have a phone.
>
> **[2:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=145)** Every authentication system has a way to get started, a cost and effort to authenticate, and fallbacks.
>
> **[2:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=152)** There's no ideal set of trade offs that work for all situations.
>
> **[2:37](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=157)** It's common to focus on spoofing as an attack on authentication, but ignoring account creation is risky.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2), setup (1)
> **Code Keywords:** let (1)
> **URLs:** [rouxacademy.com](https://rouxacademy.com) (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - some (1)

#### Authentication factors
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=1)** - In the good old days, people were authenticated because you knew them from birth and strangers were dangerous.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=8)** Not really pining for the good old days.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=10)** There were all sorts of problems, but authentication really was easier.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=16)** Today, we try to authenticate people and systems over the internet and that turns out to be tricky.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=24)** When a system determines if I'm the atom show stack that should be allowed to log in, there are lots of abstractions.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=32)** I log in with a username say atom show stack.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=35)** I present bits of evidence which the system uses to decide to let me in or not.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=42)** These factors include what I know like a password, what I have like a physical token.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=48)** In fact, there are at least five commonly used authentication factors.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=54)** Knowledge like the combination to a safe.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=57)** An object you have like the key to a safety deposit box or an ID card.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=63)** A biometric, physical characteristics measured or assessed in various ways.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=70)** The communication channel in use whether in person, via phone or internet.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=76)** Or who you know like your boss or friends from school.
>
> **[1:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=81)** These are often expressed as something you have, something you know or something you are.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=87)** Or as sardonic security people like to say, something you've lost, something you've forgotten and your younger better looking self.
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=97)** My versions are more specific than something because something is vague.
>
> **[1:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=102)** These five factors drive multi-factor authentication.
>
> **[1:47](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=107)** A system should rely on more than one type of factor to increase the reliability of an authentication decision.
>
> **[1:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=116)** For example, an attacker could get two ID cards from one attack, stealing a wallet.
>
> **[2:02](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=122)** The phrase more than one type of factor is a little clunky, but it's important to understand that more factors, more kinds of authentication are a better source of strength.
>
> **[2:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=136)** Each factor can also be judged in terms of strength.
>
> **[2:20](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=140)** The key to a luggage lock is rarely complex and a lock can be upgraded in various ways to resist lock picking, drilling and other attacks.
>
> **[2:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=149)** A bouncer at a bar compares your face to an ID less strictly than a border guard.
>
> **[2:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=156)** Phones are becoming a focal point for breaking authentication because everyone wants to use them for all the factors.
>
> **[2:44](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=164)** Phones receive text messages.
>
> **[2:46](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=166)** They measure the something you might be with a fingerprint or facial recognition.
>
> **[2:51](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=171)** Phones store cryptographic keys and secure storage which are conveniently unlocked with a passphrase or biometric.
>
> **[3:00](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=180)** However, the phone is really a single factor in the decision to authenticate.
>
> **[3:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=185)** Anyone who has my unlocked phone has all of those at once.
>
> **[3:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=191)** And using smartphones for authentication assumes everyone has a smart phone and the organization can deal with the need to re-enroll people whose phones are lost or destroyed.
>
> **[3:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=203)** There's always a tradeoff.
>
> **[3:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=205)** Authentication is annoying.
>
> **[3:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=207)** It slows things down.
>
> **[3:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=209)** More authentication factors are usually more annoying.
>
> **[3:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=213)** These factors are a model and being able to crisply model the factors we're using is a helpful step in analyzing authentication system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), self (1)
> **Tools:** atom (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - in (1)


### 3. 2. Spoofing Authentication Factors

#### Attacking what you know
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=1)** - Good secrets are shared with just a few friends.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=4)** The annoying thing about any secret is how hard it is to keep it a secret.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=10)** When you enroll in a new system that organization asks you to share some secrets with them for authentication.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=18)** And these secrets work best when they're not widely known.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=22)** As Ben Franklin said, three can keep a secret if two of them are dead.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=28)** My password is a secret that I share with a service.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=32)** In my case I really share each password with a single site and I use a password manager, one password to manage that for me.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=42)** I like that it has a mode where passwords aren't ever stored in the cloud.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=47)** For most people they have one or a few passwords and they share those secrets with the other 11 gazillion sites they use.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=57)** So it's a secret shared with a lot more than three people.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=61)** Similarly, your mother's maiden name is a secret that you, your family, and various genealogy websites all know.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=70)** The street you grew up on, that's part of your royal wedding guest name.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=75)** Take a careful look at the information this game is asking you to post.
>
> **[1:20](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=80)** Every single one is used as an authenticator.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=85)** Attackers will steal secrets any way they can.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=89)** They'll steal from servers by breaking in and stealing them from a database.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=93)** Or by trying thousands or millions of usernames and passwords in a brute force attack.
>
> **[1:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=99)** They'll take advantage of data leaks to get passwords from other systems.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=103)** They'll steal them from clients.
>
> **[1:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=105)** Attackers will try to trick people into revealing them through phishing.
>
> **[1:49](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=109)** They'll trick people into revealing backup authentication information.
>
> **[1:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=113)** Sometimes attackers don't even need to steal secrets, they're in the manual.
>
> **[1:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=119)** You can find lists of default passwords.
>
> **[2:02](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=122)** Or they're predictable.
>
> **[2:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=124)** One HR system I used insisted that the date of birth was a good password because people only login once a year and they forget.
>
> **[2:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=133)** Well, that's true, and usability is good.
>
> **[2:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=138)** But there are other ways to fix that like integration with the corporate directory system.
>
> **[2:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=143)** Lastly, what you know can be made stronger when you prove what you know.
>
> **[2:30](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=150)** For example with asymmetric cryptography I can sign a challenge the server provides and prove that I have the private key that's associated with a given account without ever revealing it.
>
> **[2:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=162)** What you know is both easy to use and easy to attack, which is why there are so many exciting ways to use cryptography for authentication, to strengthen the what you know factor.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Code Keywords:** private (1)
> **Analogies:** for example (1)
> **Speakers:** - good (1)

#### Attacking what you have
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=1)** - Attacks on what you have are fairly simple and often easy, especially compared to attacks on other factors.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=7)** An announcement that Adam Shostack needs to return to the airport security checkpoint happens because I've left my wallet or ID full of things I used to have.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=18)** We've all seen cartoons where a prisoner tries to get the sheriff's dog to trade the key to the cell for a tasty bone.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=25)** What you have can be a nifty little dongle, a keyring worth of them, or a badge.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=32)** I can steal that dongle.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=33)** I can take pictures of your badge and print my own.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=36)** I can buy a uniform on the internet.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=39)** I can go after a specific authentication key or anyone that will get me in.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=45)** Sometimes the attacker targets a person, sometimes they target any person.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=50)** Not only can I steal it, you can lose what you have, you can drop it in the, um, ocean, leave it behind when you travel, run down the battery, or get it confused with someone else's.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=62)** The object you have goes wrong two ways, people lose things and things get stolen.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=68)** Both make it a poor choice as your only means of authentication.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - attacks (1)

#### Attacking what you are
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=1)** - Biometric systems measure or assess physical facts about a person.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=5)** It's tempting to think that that makes them the most secure type of factor.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=11)** Biometrics involve presenting an identifier and authentication information.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=16)** That information might be a photograph evaluated by a guard.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=20)** Traditional biometrics like appearance or signatures are evaluated by a person.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=25)** It's notoriously hard to match a person to a small picture of them.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=31)** Often that picture was taken years earlier, and forgers have been faking signatures for far longer.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=39)** More technological biometric systems usually have a sensor that measures something like seven points on a fingerprint or the pattern of veins in a hand.
>
> **[0:49](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=49)** It can also measure something more complex, like the way a person walks or types.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=56)** That measurement is tuned against a set of false positive or false accept rates and false negative rates, also called insult rates.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=65)** Usually the two are tied and improving one makes the other worse.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=70)** Sometimes sensors are carefully managed by the people who rely on them.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=75)** For example, the sensors at an international border.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=79)** Other times, they're on the laptop or the phone of the person who's trying to authenticate.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=84)** Whose side are they on?
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=86)** You want to believe your people are on your side, but until they've logged in, you can't think that way.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=93)** The sensor on a laptop might not even be a sensor.
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=97)** It could be some code I wrote that sends a picture of a toupee and pretends that it's a fingerprint.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=103)** More seriously, with a sensor under the attacker's control, there's nothing to stop someone from creating an overlay fingerprint from a gummy bear.
>
> **[1:52](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=112)** Yes, that really works, and sensors that catch it are more expensive.
>
> **[1:58](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=118)** With all the shiny surfaces of modern life, do you really want to leave security to a factor you leave in every bathroom stall?
>
> **[2:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=126)** Also, many of the biometrics that are available don't work for everyone.
>
> **[2:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=131)** I could assume that everyone has fingerprints, but it turns out that some people don't have fingers or hands.
>
> **[2:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=137)** Fingerprints wear down over our lifetime.
>
> **[2:20](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=140)** That's less of a problem for the police because most criminals are young and there's evidence besides fingerprints.
>
> **[2:26](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=146)** There's also a perception issue with using fingerprints.
>
> **[2:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=149)** Being fingerprinted is often associated with criminal investigations.
>
> **[2:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=154)** Lastly, most of us only have 10 fingerprints.
>
> **[2:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=159)** If we want to have a secret per website, we have to duplicate after 10, and changing your fingerprints after a breach is... Let's just say beyond most people.
>
> **[2:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=170)** Biometrics, what you are, can be a useful factor, but let's not be fooled by the shiny technology or the hype.

> [!info]- Semantic Content
>
> **Analogies:** picture (3), for example (1)
> **Code Keywords:** let (2)
> **Speakers:** - biometric (1)

#### Attacking where you are
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=1)** - The channel someone is using to communicate authentication information makes it easier or harder to engage in fakery.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=8)** If someone is physically in front of me, I'm in control of my senses and probably the sensors I use to get information.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=17)** It's difficult to use voice cloning, deep fakes, or other technology to impersonate.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=23)** A criminal will have a harder time looking up secrets without me knowing.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=27)** That said, I've been at my bank and looked up passwords and other things in front of a trained bank employee without trouble.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=35)** Criminals are at higher risk of capture or arrest if their impersonation goes poorly.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=43)** Where you are is also how devices like the Apple Watch unlocks a computer, with nanosecond timings to check proximity and resist relay attacks.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=54)** It's useful to know that light moves about a foot per nanosecond, and os if your authentication calculation takes 20 nanoseconds to run and you accept an answer for 40 nanoseconds, then you have to be within 10 feet, right?
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=69)** Wrong-o.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=71)** The attacker has 40 nanoseconds.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=74)** They could use 19 of those to transmit and two nanoseconds for a very fast calculation.
>
> **[1:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=81)** Attackers will spend their budget how they want, not how you hope.
>
> **[1:26](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=86)** Returning to the physical realm, we often think of where you are as implying trust.
>
> **[1:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=92)** Inside the network.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=94)** Inside the building.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=96)** And as more of our world becomes wireless or voice-driven, those literal walls figuratively break down.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=103)** Shouting "Alexa, unlock the door" through an open window is an attack that's worked in the real world.
>
> **[1:51](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=111)** Wireless networks don't stop at your walls.
>
> **[1:55](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=115)** A similar problem shows up in mobile apps.
>
> **[1:58](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=118)** Some systems use where you are or the channel that you're using as part of the authentication decision.
>
> **[2:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=126)** The bank knows Adam usually logs in from a computer in Kansas or banks via the voice response unit.
>
> **[2:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=133)** If you're not in Kansas anymore, then maybe that's a warning sign.
>
> **[2:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=137)** If you've gone from Kansas to Australia in 30 seconds, maybe that's not really you.
>
> **[2:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=145)** Systems like this can get confused by VPNs or mobile networks, which will often haul traffic to a new interconnect without apparent rhyme or reason.
>
> **[2:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=155)** Your real customers may be cut off if you include the wrong factors in your authentication systems.
>
> **[2:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=163)** Where you are is important in very different ways to both the person choosing to authenticate and the system performing the authentication.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - the (1)

#### Attacking who you know
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=1)** - Who you know is used by many organizations for fallback authentication.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=5)** When I lose my password and need to get back into my account, an administrator might give my boss the replacement password.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=13)** When I set off the alarm in someone else's home and the alarm company calls the landline, as it turns out, you can phone a friend and get the home owner to authenticate with you.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=25)** Who you know is common when you visit a company.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=28)** Someone you know authenticates you at the front desk and you get an old school visitor badge.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=34)** Who you know is used on Facebook as a way of checking if you know the people in their understanding of your social network.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=42)** This has an entertaining failure mode with real estate agents who meet a lot of people, even show up in photos with them, when they're often not that close.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=52)** It also fails when the people you know have conference badges on or little party icebreakers that say, hello my name is.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=60)** Who you know is used as an alternative to primary authentication.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=65)** Kids get enrolled in schools on their parents' IDs or even their birth certificate.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=70)** Which, if you stop and think about it is a fascinating authenticator.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=76)** Who you know has always been important in life.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=79)** And when used as an authenticator, it needs to be paired with something stronger.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - who (1)

#### Attacking phone authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=1)** - Using text messages to improve authentication is one of those things that makes me mad.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=7)** There are good reasons to get rid of SMS authentication, a technology that's only ever adopted by a few percent of customers or users.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=17)** Text messages are easily attacked, and the many ways that they can be attacked makes for a great exercise.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=25)** Consider all the ways that a one time token, or OTT, can be disclosed.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=32)** And while this is a course on spoofing, sometimes information disclosure is an important step toward spoofing as is tampering, or even intermediate levels of spoofing.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=45)** As an aside, many of these attacks have a nasty side effect, which is they make the real owner of the phone unreachable for some period of time.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=56)** I have a friend who's daughter has medical issues.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=59)** It's critical for the school to be able to contact her parents.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=63)** My friend is aghast at the idea of her phone being collateral damage because of how she authenticates at work.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=71)** If a service you're using presents text messages as improved authentication ask for something better.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=78)** If a service your organization delivers has text message authentication work toward something better.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=85)** The National Institutes of Standards in Technology said years ago that SMS systems should be deprecated.
>
> **[1:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=92)** It's time to get the message.

> [!info]- Semantic Content
>
> **Env Vars:** sms (2), ott (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - using (1)


### 4. 3. Spoofing Hosts

#### Spoofing a host
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=1)** - When I try to spoof a host on the internet, it could be a host that's right there next to mine, or it might be one on the other side of the planet.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=8)** There are really three models of where a spoofer can sit.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=12)** In order of how intuitive those are, those models are inline, local network, and blind.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=18)** Inline spoofing, which you may be using today, includes NAT, network address translation, and other less intentional types of man in the middle attacks.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=28)** Now, some people might argue that NAT isn't spoofing, but it is.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=33)** Really, sometimes people break security for good reasons.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=38)** A NAT system works like this.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=41)** My computer at 10.2.3.4 sends IP packets out.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=46)** But the 10 network isn't routable over the internet.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=48)** So the router has two interfaces.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=51)** An internal interface in 10, and an external one which my ISP has given the address 18.4.5.6.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=59)** The router may impose some additional policies about inbound or outbound packets.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=64)** And those can make other forms of spoofing harder.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=67)** Every single system in this network has more than one address.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=71)** My computer gets a different address with each network it connects to and can be addressed to the 18456.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=79)** The router obviously has two addresses.
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=82)** Lastly, captive.[apple.com](https://apple.com) refers to lots of physical hosts, but the IP addresses for those hosts are often spoofed to point at the hotel or coffee shop portal.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=95)** There's an important reason that I'm pointing to captive.[apple.com](https://apple.com), and that's the lack of SSL.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=101)** Because it may just be the most spoofed system in the world.
>
> **[1:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=105)** Iphones, iPads, Macs, all try to connect to it when attaching to a new network.
>
> **[1:51](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=111)** If it had SSL, those connections would fail.
>
> **[1:55](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=115)** Accepted uses of spoofing, like web portals for logging onto a network, leave the door open for malicious parties.
>
> **[2:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=124)** Preventing spoofing takes work, so spoofing systems is easy.

> [!info]- Semantic Content
>
> **Env Vars:** nat (3), ssl (2), isp (1)
> **Code Keywords:** this. (1), interface (1)
> **URLs:** [apple.com](https://apple.com) (2)
> **Versions:** 10.2.3 (1), 18.4.5 (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ipads (1)
> **Definitions:** refers to (1)
> **Speakers:** - when (1)

#### Advanced host spoofing
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=1)** - When I'm not in line, in complete control of the packet flow, there's more that can go wrong.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=6)** That's certainly the case with the local network and blind models for spoofing.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=11)** The second place from which to spoof is a host on the local network.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=16)** Some security tools do this with simple command line options.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=20)** For example, this nmap command tells nmap to spoof packets as if they're coming from IP 10.2.3.5 while scanning 10.2.3.6.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=32)** I'll call the three machines Spoofer, Target, and Spoofee so I don't have to keep repeating the numbers.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=39)** Now there may be a real machine with Spoofee's IP address, and if so, it won't know what to do with the packets that it's getting from Spoofee.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=50)** If that's the case, I need to send packets back before Target's or suppress Target's packets, and I can do that in various ways, including crashing Target or flooding it with packets.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=64)** Obviously, it's easier to spoof well when I know more about what's goin' on.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=69)** That knowledge can come from using promiscuous mode on a network interface and a tool like tcpdump or Wireshark.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=77)** Those let me view all the packets on the network including their TCP sequence numbers, which I can use to craft packets of my own.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=87)** It's intuitive to think that I have to be on the path to see what's happening, but it turns out that because networking is difficult, many elements of network protocols are predictable.
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=98)** If I can make these predictions, I can spoof packets blindly, and blind spoofing is the third way to spoof a host.
>
> **[1:47](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=107)** Many routers apply anti-spoofing rules, and that does make blind spoofing trickier.
>
> **[1:52](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=112)** And although IPv6 has tools for integrating Crypto to make spoofing harder, it's difficult to deploy.
>
> **[1:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=119)** While the goal was for IPv6 to have mandatory cryptography, that plan was abandoned.
>
> **[2:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=126)** Spoofing is feasible even when you're not playing monkey in the middle with the packets.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** case, (1), interface (1), let (1)
> **Versions:** 10.2.3 (2)
> **Env Vars:** tcp (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - when (1)

#### Spoofing the OSI model
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=1)** - Attackers can spoof at any layer of the OSI model, the seven-layer system used for networking.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=7)** Looking beyond IP addresses, attackers can also spoof a MAC address or DNS packets.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=13)** Why spoof at another layer?
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=16)** A hacker could spoof a MAC address to use expensive airplay and WiFi on someone else's bill.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=21)** Here's how to commit that crime.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=23)** Of course, don't do this without proper authorization.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=27)** First, monitor the WiFi using tcpdump-e.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=32)** This will show you sets of Ethernet addresses and some are allowed to route packets to the ground.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=38)** I pick one of those addresses and set my MAC address to theirs.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=43)** Now I'm spoofing and I'm spoofing well.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=45)** But there's a problem.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=47)** The real 10.2.3.5 is getting responses to my packets and has no idea what to do with them.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=53)** So the target sends a TCP reset.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=56)** How rude, I'm just trying to piggyback free Internet access from 38,000 feet, and here some paying customer has the temerity to send resets?
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=65)** Obviously, I needed the victim to stop.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=68)** I can wait for them to use the in-seat entertainment, crash their system, or I can step in as a monkey in the middle.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=75)** To be a convincing monkey, I need to convince the victim that my system is a great router and to convince the router that my system is the router for the victim.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=85)** You may notice a pattern here.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=87)** Those diagrams look exactly like the ones for spoofing a host.
>
> **[1:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=91)** I can go up and down the stack, spoofing to my heart's content.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=95)** When I say up and down the stack, remember that packets contain other packets.
>
> **[1:40](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=100)** An Ethernet frame contains an IP packet.
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=103)** Those IP packets contain parts of TCP streams and those TCP streams contain other data.
>
> **[1:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=110)** It's all spoofable.
>
> **[1:51](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=111)** (evil laughing) At work, maybe I want to protect my systems by ensuring that only my company's computers can connect.
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=121)** I'll add a bit of code called TCP Wrappers to the server that does a DNS lookup for the newly connected IP.
>
> **[2:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=129)** An attacker can still fake up some DNS packets, or they can control a server.
>
> **[2:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=135)** TCP Wrappers does a lookup on the connecting IP and gets back rockets.[rouxAcademy.com](https://rouxAcademy.com).
>
> **[2:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=143)** That matches my regex for [rouxAcademy.com](https://rouxAcademy.com), and so I'm good, right?
>
> **[2:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=148)** Not at all.
>
> **[2:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=149)** Anyone who runs a DNS server can set the reverse DNS to anything they want to.
>
> **[2:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=155)** DNS has what are called forward lookups, which translate a name to an IP, and reverse, which take an IP and give you a host name.
>
> **[2:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=165)** I could do a forward lookup for rockets.[rouxAcademy.com](https://rouxAcademy.com) and lo and behold, no such DNS record exists.
>
> **[2:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=173)** What should I do?
>
> **[2:54](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=174)** Probably drop the connection.
>
> **[2:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=176)** There are many attack variants, and the defense ends with something called a double reverse lookup, where I confirm that the IP to name and name to IP lookups match.
>
> **[3:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=186)** Sometimes, they won't match, even when the host is not spoofed.
>
> **[3:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=190)** For example, hosts in a cloud provider.
>
> **[3:14](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=194)** Whatever level of the stack you're at, it's important to rely on explicit security, either at that layer or somewhere higher-up.

> [!info]- Semantic Content
>
> **Env Vars:** dns (7), tcp (5), mac (3), osi (1)
> **Code Identifiers:** rouxacademy (3)
> **URLs:** [rouxacademy.com](https://rouxacademy.com) (3)
> **Code Keywords:** match. (1), match, (1)
> **Versions:** 10.2.3 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - attackers (1)

#### What you know in host spoofing
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=1)** - One of the things many network protocols have in common is that they're authenticated by a simple form of what you know.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=8)** Sequence numbers and other parts of the protocol are used to both assemble and authenticate packets.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=15)** If I'm on the path, spoofing is obviously easy.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=20)** It's natural to think that I have to be on the path to see what's happening, but it turns out that, because networking is complicated, many elements of network protocols are predictable.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=32)** DNS clients used the source port number and a DNS query ID to authenticate a DNS response.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=41)** Each of those is a measly 16 bits, and it's visible to anyone who can see network traffic.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=48)** That small size makes DNS vulnerable to brute force attacks.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=53)** Historically, you didn't need a brute force attack because everything was predictable.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=58)** TCP sequence numbers were predictable because they didn't use strong randomness.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=63)** Now, modern systems from major vendors are much better about using high-quality pseudo-randomness for these values, but that's still not great.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=74)** Everything I need to know is in the clear, either on the wire or broadcast into the air, and the values are small.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=83)** So even if I don't know them, a program blasting out thousands of guesses is going to get some hits.
>
> **[1:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=91)** It's easy to get into the trap of thinking that local machines are trustworthy or these lower levels of a stack are secure, but that's a much weaker assumption than my attacker can't break well-implemented cryptography.
>
> **[1:47](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=107)** Now, protocols like TCP and DNS are out of your control, but you can bring this thinking to what you build on top of them.
>
> **[1:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=116)** As a thought experiment, compare using what you know to establishing a shared cryptographic key and using that key to generate an HMAP to authenticate the packets that are in the data stream.
>
> **[2:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=129)** Designing crypto systems is hard, and so the short answer almost always starts with run it over TLS or SSH.
>
> **[2:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=138)** Now, this is a spoofing class, but it's important to realize that attacks chain and combine in fun ways.
>
> **[2:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=147)** If I use my ability to spoof TCP to insert a packet or two, I could have a little fun.
>
> **[2:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=153)** This trickery might desynchronize things, but one little packet can do a lot of mischief.
>
> **[2:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=158)** Imagine inserting something into a Telenet session.
>
> **[2:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=162)** For example, I can insert a show command.
>
> **[2:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=165)** You don't need a big, complex attack to do a lot of damage.
>
> **[2:49](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=169)** That's why SSH encrypts and authenticates the entire connection, not just the authentication phase.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5), tcp (3), ssh (2), hmap (1), tls (1)
> **CLI Commands:** ssh (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Code Keywords:** class, (1)
> **Speakers:** - one (1)

#### Spoofing TLS
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=1)** - There's a lot of low-level spoofing that's possible.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=3)** In many cases, the easy and obvious fix is add TLS and then all our problems are solved.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=10)** TLS, it's like magic pixie dust that will secure your internet to make sure your stock picks all go to 11.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=17)** Is that what I want?
>
> **[0:19](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=19)** What if I buy at 50 and it goes to 11?
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=21)** Magic can be so fickle.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=23)** So if I run a server, [rouxacademy.com](https://rouxacademy.com), I can get a certificate to authenticate that server.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=31)** The TLS connection won't work unless the host someone is trying to reach is the name on that certificate.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=39)** Most certificates rely on asymmetric cryptography where keys have mathematically related parts.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=47)** Some of those systems can be used to produce a digital signature where the private part of the key is used to create a signature that can be verified with the public part.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=59)** A certificate is a cryptographic key that's signed by some other key.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=64)** That's all.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=65)** There's a special set of root keys or root certificates that are trusted in the sense that they can change the security behavior of software that depends on them.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=76)** The entities that control these special keys are called certificate authorities or CAs.
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=82)** What makes a CA an authority?
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=84)** My operating system, browser, or other software developer decided to accept them as certificate authorities.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=93)** Security controls change their behavior when shown a certificate.
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=98)** The browser won't display security warnings at a website whose certificate is signed by a CA.
>
> **[1:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=105)** If any CA wants to sign a certificate that [rouxacademy.com](https://rouxacademy.com) is really [rouxacademy.com](https://rouxacademy.com), great.
>
> **[1:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=113)** They are technically free to do so, along with over a hundred other organizations, each of each is a certificate authority on my laptop today.
>
> **[2:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=123)** Why so many?
>
> **[2:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=124)** There's a trade-off being made here.
>
> **[2:07](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=127)** Browsers trust certificate authorities.
>
> **[2:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=129)** Otherwise, people would have no way to know if they're really at [rouxacademy.com](https://rouxacademy.com).
>
> **[2:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=136)** So how do you attack a certificate authority?
>
> **[2:19](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=139)** Well, you can break into one.
>
> **[2:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=141)** Someone did that to a Dutch company called DigiNotar.
>
> **[2:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=145)** Or you can convince it to misbehave by issuing certificates it shouldn't.
>
> **[2:30](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=150)** And you can get certificates for things that might trick a human into thinking they're safe or talking to someone other than who they really are, like [r0uxacademy.com](https://r0uxacademy.com) with a zero or [rouxacademy.com](https://rouxacademy.com).[evil.com](https://evil.com).
>
> **[2:45](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=165)** That last is not where we want to be, but people do lazy matching, and so they'll see [rouxacademy.com](https://rouxacademy.com) and think they're okay.
>
> **[2:55](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=175)** If I'm doing regex validation, there's a crucial difference between [example.com](https://example.com) and [example.com](https://example.com)$.
>
> **[3:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=183)** Now, maybe you're expecting me to say that certificate authorities ensure authenticity, but no.
>
> **[3:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=190)** We need a way to bind human intent to computer execution.
>
> **[3:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=195)** What we have is a way to tie DNS names displayed in a URL bar to the system pointed to you by gethostbyname, and that's not at all the same thing.
>
> **[3:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=207)** All of these means of spoofing consider a key question.
>
> **[3:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=211)** What authentication factors are in use?
>
> **[3:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=214)** How can we bypass them?
>
> **[3:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=216)** Some of the attacks are technical.
>
> **[3:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=218)** Some depend on the person.
>
> **[3:40](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=220)** All are spoofing.

> [!info]- Semantic Content
>
> **URLs:** [rouxacademy.com](https://rouxacademy.com) (6), [example.com](https://example.com) (2), [r0uxacademy.com](https://r0uxacademy.com) (1), [evil.com](https://evil.com) (1)
> **Env Vars:** tls (3), dns (1), url (1)
> **Definitions:** is a  (3)
> **Code Keywords:** private (1), public (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** it's like (1)
> **Best Practices:** the key is (1)


### 5. 4. Spoofing People

#### Spoofing a specific person in email
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=1)** - I've already talked in general about spoofing a person.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=4)** Email is a common example.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=6)** If I want to claim that my name is Little Red Riding Hood, I can go into my email client and just do this.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=14)** Now, when I send email, it displays as Little Red Riding Hood and no one's the wiser, unless of course, their email program cleverly displays email addresses.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=24)** That's not the best way of changing my identity.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=28)** Anyone can see that my email is still BigBadWolf@[badguys.com](https://badguys.com).
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=33)** So really, I should go and set up an entirely new email address and hey, LittleRedRidingHood@[badguys.com](https://badguys.com) is already taken, that's weird.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=42)** So I can just take LittleRed@[badguys.com](https://badguys.com) and now all good.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=46)** Now, my email matches my name and that's helpful, but someone might look at the domain name.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=53)** I can get a domain that looks like the one someone expects.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=56)** Maybe [RidingHoods.com](https://RidingHoods.com)?
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=59)** Each of these could be a real email address of one of the domains.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=63)** The spoofing is happening at a human level, but I can also send email and have it look like it's coming from another domain.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=71)** It can be as simple as telenetting to port 25 and following the protocol.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=77)** Of course, there are security checks and which security check is run is dependent on the mail server.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=84)** Many will check the DNS for the host you're coming from.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=87)** Remember how to spoof that?
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=89)** Because all the easy ways to do this were mechanized by spammers, the defenses against that sort of spoofing are now decent, but not great.
>
> **[1:39](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=99)** Business Email Compromise is a variant of spoofing a person.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=104)** The attacker pretends to be an executive needing help paying a supplier and fakes or compromises an email account.
>
> **[1:52](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=112)** Sometimes, they'll do both.
>
> **[1:54](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=114)** Send an email from a compromised account with a Reply To header.
>
> **[1:59](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=119)** Even if you carefully inspect the first message, it comes from your boss's account.
>
> **[2:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=124)** As people, we transfer knowledge of that authenticity to the remainder of the conversation.
>
> **[2:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=131)** The threat of misdirection is the reason some email programs will highlight display names from other domains in red.
>
> **[2:19](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=139)** In this case, the follow up emails from a spoofed boss, would be red, but would I notice?
>
> **[2:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=145)** Will I get used to seeing lots of emails shown in red and ignore that?
>
> **[2:30](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=150)** What needs to be shown is the unfamiliar email addresses, especially when associated with familiar sender names.
>
> **[2:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=158)** Again, there's dependencies between the human and technical means of authentication and you need to keep those in mind as you consider spoofing.

> [!info]- Semantic Content
>
> **URLs:** [badguys.com](https://badguys.com) (3), [ridinghoods.com](https://ridinghoods.com) (1)
> **Code Keywords:** this. (1), from. (1), case, (1)
> **Definitions:** is a  (2)
> **Ports:** port 25 (1)
> **Env Vars:** dns (1)
> **Prerequisites:** set up (1)
> **Speakers:** - i (1)

#### Spoofing a person on a website
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=1)** - If you want to be Little Red Riding Hood on Twitter, you're way too late.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=4)** There are dozens of accounts with variations on that name.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=8)** Some websites have limits on overlap between display names.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=12)** Now Facebook has some controls over names, but frankly, they don't work very consistently, and when they are consistent, they don't deal with the fact that there are a lot of John Smiths in the world.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=23)** They're better at catching obvious fakery, which is okay until you realize that there probably are parents who really name their kids after fruits or seasons or.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=35)** I hope you see where this is going.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=37)** We expect that the presentation of a person on a website relates to the actual person.
>
> **[0:44](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=44)** We sort of expect the name displayed to match someone's government name, but if I say Louise Ciccone, you have no idea that I'm talking about Madonna.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=55)** The ways in which we judge authenticity on a website are entirely under control of the website.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=61)** Photos are easily copied, names are editable.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=65)** I might pretend to be some specific real person.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=69)** This made for lots of trouble with parody accounts on Twitter before various groups perfected the art and destroyed Twitter in the process.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=77)** I might also just create a random name, Billy Smith or Billy Red.
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=82)** I might present a well-developed persona to fool some specific person.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=87)** This is sometimes called catfishing, and the term gained attention with a famous case involving a pro football player.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=94)** It can happen anywhere on the web or off.
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=98)** I might want to fool all the people all the time.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=101)** I might create an army of fake accounts all talking to each other to help them look real, and also talking to the world.
>
> **[1:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=110)** This technique isn't specific to the web, and it's been rediscovered under a lot of names, including pseudospoofing, sock puppetry, and astroturfing.
>
> **[2:00](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=120)** It's all spoofing of identities on the web.

> [!info]- Semantic Content
>
> **Speakers:** - if (1)

#### Spoofing a person in video and audio
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=1)** - The many ways to spoof a person in email feel intuitive to people who've been on the internet for a while.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=8)** Faking people on websites can be fun, but we tend to believe our eyes and ears or their technological proxies, audio and video recording.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=18)** There's an emerging field of technology called voice cloning.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=24)** Companies are already using voice cloning to provide a consistent experience for customers who call their support lines.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=32)** Imagine being able to bring grandparents to life in a teddy bear or to not have to worry about the availability of a voiceover actor.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=41)** There are lots of companies making voice cloning and today good voice analysis and reproduction can require an hour or more of source material.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=52)** It's not just audio.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=54)** Deep fake technology can be used to produce video of someone saying things they've never said.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=62)** Voice cloning and deep fakes are worrisome enough by themselves, and I need to warn you, there's a lot of disturbing content if you search on deep fakes.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=71)** But more, I want you to think about what it means for the future of spoofing and authentication.
>
> **[1:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=77)** Imagine a version of business email compromise where it's not an email or a voice mail, but your boss calling on the phone, having a conversation about moving ahead with a payment.
>
> **[1:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=88)** Now combine that with AI that can have simple phone conversations.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=94)** In 2018, Google demonstrated a system called Duplex which does exactly that.
>
> **[1:40](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=100)** They haven't integrated video or voice cloning yet, but technology's only going to get better.

> [!info]- Semantic Content
>
> **Code Keywords:** while. (1), require (1)
> **Analogies:** imagine (2)
> **Speakers:** - the (1)


### 6. 5. Spoofing Files

#### The nature of "open" and paths
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=1)** - Opening a file, it seems so simple, and often is.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=4)** I call fd open file.txt, and get back a file descriptor to whatever file.txt happens to be in the current working directory.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=13)** I hope it's the file I intended, but have little guarantee, and since I'm focused on the identity of the file I'm looking for, I think of these as a type of spoofing attack.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=25)** I can add checks, I can authenticate the identity of a file.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=29)** Part of the authenticity of a file is where it's stored.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=33)** The truth about the Kennedy assassination is a different file when it's at the National Archives versus some conspiracy theory website.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=42)** And so the question of paths starts to matter a lot.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=46)** Some paths are in your code, some are supplied by a person using your code.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=51)** We can be attacked via the path or by the file to which the pathname refers.
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=57)** Paths come from user input, for example, a file selection box, or other code like a web browser.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=64)** Paths in code or the .h files, are usually more trust worthy than those from a local user or remote code, all of which must be treated with care.
>
> **[1:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=75)** Files are stored on local disks or on remote storage, and either can be changed by other people's code.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=83)** They're also served up by remote servers, and can come either directly or via cache.
>
> **[1:29](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=89)** The typical example of a malicious path comes from the days when hashed passwords were stored in that file.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=96)** It helps an attacker gets interactive access to that system or others.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=101)** Path attacks tend to involve canonicalization issues, but that's a sideshow to bypass badly written controls.
>
> **[1:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=110)** The essence of a path attack is either, give the person who supplied that path access to a file they otherwise can't access, or give your code data that it doesn't expect.
>
> **[2:04](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=124)** While giving code data that it doesn't expect can exploit issues in a path, it can be more direct.
>
> **[2:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=130)** For example, if you ask for [ruacademy.com/grades.txt](https://ruacademy.com/grades.txt), Ru may give you that update via UNC, NFS, some other distributive file system.
>
> **[2:22](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=142)** That's subject to spoofing in all the ways remote machines are spoofable, and also [ruacademy.com](https://ruacademy.com) may just lie to you.
>
> **[2:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=151)** Local files can also be spoofed.
>
> **[2:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=154)** If code relied on temp/runme.sh, and I know that, I can create that file before the program does.
>
> **[2:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=162)** I may also be able to remove the correct version and replace it with one of my own, depending on permissions of the temp directory.
>
> **[2:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=170)** A more modern version of this is the Downloads folder, on which your browser relies.
>
> **[2:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=176)** Almost any Windows program is linked to a library file called ieframe.dll.
>
> **[3:02](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=182)** If I serve up a file with that name, and a user downloads it, the trap is set for anyone whose downloaded code is not careful as it loads libraries.
>
> **[3:12](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=192)** Opening files is easy, opening the file you want expect, and hey, even deserve, is much harder.

> [!info]- Semantic Content
>
> **File Paths:** file.txt (2), ruacademy.com/grades.txt (1), temp/runme.sh (1)
> **URLs:** [ruacademy.com](https://ruacademy.com) (2)
> **Env Vars:** unc (1), nfs (1)
> **Analogies:** for example (2)
> **Code Keywords:** for, (1)
> **Definitions:** is a  (1)
> **Speakers:** - opening (1)

#### Libraries (LD_PATH, %Downloads%)
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=1)** - Libraries are special.
>
> **[0:02](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=2)** They're files full of code that my code relies on, so it would be crazy to be lazy or hazy about the file I'm opening, right?
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=11)** Absolutely.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=13)** And there are a few categories of failure which include trusting directories with weak permissions, environment variables which alter load behavior, and tools which are designed to manage the libraries in use.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=27)** Directories with weak permissions include temp and the downloads directory.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=33)** Running code from downloads is common behavior, and so drive-by download attacks include dropping DLLs which common installers will use.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=43)** Weak permissions can also be an issue with references to the current or working directory with references like ./library.so.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=53)** Do you know what directory that will reference?
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=56)** This can be more of an issue for privileged or set UID code where an attacker might want to manipulate what library gets loaded to take advantage of privilege.
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=66)** Environment variables like LD library path were also used for this purpose.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=72)** Lastly, there are package management utilities like npm.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=76)** npm's mission in life is to muck with, I mean, update the libraries that you're using.
>
> **[1:23](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=83)** But you don't need to be using npm to get special libraries.
>
> **[1:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=87)** For example, in July of 2018, a package called eslint-scope that gets 2 million downloads a week was backdoored by attackers.
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=98)** Much of the web involves getting code from other sites, and while this may seem like more of a tampering attack than spoofing, it's a great way to get a target to load the wrong library.
>
> **[1:50](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=110)** In that vein, in November 2018, a web analytics company was breached.
>
> **[1:56](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=116)** They provide a library a website can use to gather statistics about their visitors.
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=121)** The attackers added a few lines of code to the main stats counter JavaScript used on over 2 million sites.
>
> **[2:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=129)** This particular attack intended to steal cryptocurrency at an exchange site.
>
> **[2:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=136)** The way it did that was to check the URL of the page that was loading the library, and if that URL included the string myaccount/withdraw/BTC, then the malware loaded.
>
> **[2:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=147)** So the 1,999,000 sites that don't have URLs that include myaccount/withdraw/BTC were all safe.
>
> **[2:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=158)** They were safe by accident, or really, by the grace of an attacker.
>
> **[2:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=163)** Libraries are vulnerable to spoofing at web scale.
>
> **[2:47](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=167)** It should've been a wake-up call.

> [!info]- Semantic Content
>
> **Env Vars:** url (2), btc (2), uid (1)
> **CLI Commands:** npm (3)
> **Analogies:** for example (1)
> **Speakers:** - libraries (1)

#### Defenses with extra fail
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=1)** - There are a few defenses against spoofing that are simple, elegant and wrong.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=6)** In defending against spoof files, these include hidden directories and files with random names.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=12)** Take a moment.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=13)** Pause the video.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=14)** Think about why those don't work.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=17)** There's more than one answer, but the core answer is that a hidden directory is obscurity.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=24)** Once I know it's there, the defense doesn't work anymore.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=28)** Compare that to create a directory, set its permissions, then create a file with the right permissions.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=34)** While it sounds better, it's still technically risky.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=38)** As I drafted this content, I realized there's a raised condition while I'm setting the permissions.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=43)** I'm exposing that to show you that precision is important and even experts can make mistakes while being conversational or informal.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=54)** So really, I'd set my permission's umask, then create the directory.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=60)** I can know that there's a directory that's Mode 700 and files in it are writeable only by group threat modeling and it does me, the attacker, no good.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=70)** The operating system will control access and that's what the developer wants.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=76)** Similarly, making a file with a name temp, atom, XYZ where XYZ is random only requires that an attacker create 1,000 files before your code does, easy to do with a script.
>
> **[1:31](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=91)** Knowledge-based authentication with only a few answers is a particular pet peeve especially when the site forces a complex password.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=101)** What did your great grandfather do for a living?
>
> **[1:43](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=103)** Statistically speaking, he was a farmer.
>
> **[1:46](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=106)** What's your favorite pizza topping?
>
> **[1:48](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=108)** Only slightly harder, pepperoni, and your answer might change over time.
>
> **[1:53](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=113)** Similarly, enhancing authentication via text message, so full of fail, I don't even know where to start.
>
> **[2:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=121)** SIM porting attacks where someone spoofs me and gets the phone company to move my phone number changing my effective telco, malware that steals it off a phone, unprotected cloud storage at text message companies, these are among the answers you should see while looking at the phone threat model.
>
> **[2:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=141)** There are many controls out there which have been through extensive cycles of being attacked and improved.
>
> **[2:27](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=147)** This evolutionary pressure has produced some very effective defenses over the years.
>
> **[2:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=153)** You should always try to use those.
>
> **[2:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=156)** Studying the history of their evolution is a useful way to learn about attacks.
>
> **[2:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=162)** And only if the defenses are really infeasible for you should you implement new sorts of controls.

> [!info]- Semantic Content
>
> **Env Vars:** xyz (2), sim (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** atom (1)
> **Best Practices:** you should always (1)
> **Speakers:** - there (1)


### 7. Conclusion

#### Secure by Design: Bring authenticity to your systems
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=1)** - Spoofing threats are everywhere.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=3)** There are no perfect systems, which makes spoofing a constant threat.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=8)** If you're interested in learning more, the best way to learn is to dive in and spoof.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=13)** Do this to systems in a lab or where it's otherwise authorized, but go get some tools, give these approaches a try.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=21)** Make some of it real so you can speak to spoofing as you analyze new systems.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=28)** This course is a great introduction to understanding spoofing threats, so you can apply it to threat modeling work.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=36)** For a more comprehensive view, check out my book Threat Modeling: Designing for Security.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=42)** A systematic, structured, and comprehensive approach to threat modeling will lead your teams to more secure robust outcomes in more predictable time frames.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=55)** The next time you find yourself looking at something you're working on, be sure to consider what can go wrong and what you're going to do about it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** try. (1)
> **Definitions:** is a  (1)
> **Speakers:** - spoofing (1)


## Instructor

- [[Adam Shostack]]

## Skills Covered

- Threat Modeling

## Path Context

### In [[Improve Your Threat Modeling Skills]]
← [[Learning Threat Modeling for Security Professionals]] | **2 of 6** | [[Threat Modeling- Tampering in Depth]] →

## Appears In

- [[Improve Your Threat Modeling Skills]]

## Related Courses

_Courses sharing skills:_

- [[Threat Modeling for AI-ML Systems]] — Threat Modeling
- [[Threat Modeling- Denial of Service and Expansion of Authority]] — Threat Modeling
- [[Threat Modeling- Information Disclosure in Depth]] — Threat Modeling
- [[Threat Modeling- Repudiation in Depth]] — Threat Modeling
- [[Threat Modeling- Tampering in Depth]] — Threat Modeling

---

[↑ Back to top](#)