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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Threat%20Modeling-%20Spoofing%20In%20Depth.md)

![Threat Modeling: Spoofing In Depth](https://media.licdn.com/dms/image/v2/C4E0DAQEHc1Iuj6yeBQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628887768698?e=2147483647&amp;v=beta&amp;t=o1FmvN-vbRmN9HT4ojVUbcZk0ALDnxVXCocDarIUdzc)

# Threat Modeling: Spoofing In Depth

> Threat modeling is a framework for thinking about what goes wrong. Security pros and software developers should learn to threat model early in their careers, because it shapes every system they build and defend. Spoofing, pretending to be someone or something you're not, is one of the key threats to systems. This course teaches you many of the ways in which spoofing happens, including spoofing of 

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth) | 56m | Intermediate | 68K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Mitigate spoofing threats](#mitigate-spoofing-threats)
  - [Four-question framework](#four-question-framework)
  - [Spoofing as a part of STRIDE](#spoofing-as-a-part-of-stride)
- [**1. Authentication Basics**](#1-authentication-basics) (2 videos)
  - [Account creation](#account-creation)
  - [Authentication factors](#authentication-factors)
- [**2. Spoofing Authentication Factors**](#2-spoofing-authentication-factors) (6 videos)
  - [Attacking what you know](#attacking-what-you-know)
  - [Attacking what you have](#attacking-what-you-have)
  - [Attacking what you are](#attacking-what-you-are)
  - [Attacking where you are](#attacking-where-you-are)
  - [Attacking who you know](#attacking-who-you-know)
  - [Attacking phone authentication](#attacking-phone-authentication)
- [**3. Spoofing Hosts**](#3-spoofing-hosts) (5 videos)
  - [Spoofing a host](#spoofing-a-host)
  - [Advanced host spoofing](#advanced-host-spoofing)
  - [Spoofing the OSI model](#spoofing-the-osi-model)
  - [What you know in host spoofing](#what-you-know-in-host-spoofing)
  - [Spoofing TLS](#spoofing-tls)
- [**4. Spoofing People**](#4-spoofing-people) (3 videos)
  - [Spoofing a specific person in email](#spoofing-a-specific-person-in-email)
  - [Spoofing a person on a website](#spoofing-a-person-on-a-website)
  - [Spoofing a person in video and audio](#spoofing-a-person-in-video-and-audio)
- [**5. Spoofing Files**](#5-spoofing-files) (3 videos)
  - [The nature of "open" and paths](#the-nature-of-open-and-paths)
  - [Libraries (LD_PATH, %Downloads%)](#libraries-ld_path-downloads)
  - [Defenses with extra fail](#defenses-with-extra-fail)
- [**Conclusion**](#conclusion) (1 videos)
  - [Secure by Design: Bring authenticity to your systems](#secure-by-design-bring-authenticity-to-your-systems)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Mitigate spoofing threats](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/mitigate-spoofing-threats?u=76281980&t=1)** - Fakery and manipulation are in the news every day. There's [[Phishing]], troll bots, and clever attackers. Your bank doesn't know who's trying to log in from a foreign country, you on vacation or a criminal organization. Issues of spoofing and how to authenticate are problems we encounter all day, every day. We need our systems to be better, safer, and we need to get there without breaking schedules or workflows. In this course, we'll dive deep into questions of authentication and spoofing and how they impact almost any new system being built today. I'm Adam Shostack. Over my 20 years of [[Threat Modeling]], I've published a book, shipped software, and created a game, all to help people threat model. Join me in my course where I'll explore many of the ways attackers spoof people, files, and even systems, to help you deliver more secure [[Microsoft Products|products]] and services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (1), [[Threat Modeling]] (1), [[Microsoft Products|Products]] (1)
> **Speakers:** - fakery (1)

#### [Four-question framework](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/four-question-framework?u=76281980&t=1)** - At the heart of [[Threat Modeling]] are four incredibly simple questions. What are we working on? What can go wrong? What are we going to do about it? And did we do a good job? These questions act as guideposts as you're reflecting on your work. If you're not sure why you're doing what you're doing, tie that work to one of the questions. In this course, I'll be digging deep into details around what can go wrong, and what are we going to do about it through the lens of spoofing and authenticity. Spoofing is a broad threat. I can spoof computers, people, or files. The mechanisms are quite different as I do, but all involve breaking authentication. Looking at these four questions through a spoofing lens is part of the systematic, structured, and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - at (1)

#### [Spoofing as a part of STRIDE](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=1)** - Spoofing is about fakery. All sorts of things can be faked, from apples, are they really organic, to Zydeco, if you hum a few bars. In [[Cybersecurity]], the focus of fakery is spoofing. Spoofing is really simple. I can make an assertion, and everyone believes me. "Little Red Riding Hood" would be a shorter story if Grandma had asked the wolf for some identification. Spoofing is part of the pneumonic I use to help find threats, STRIDE. STRIDE stands for Spoofing, Tampering, Repudiation. Information disclosure, Denial of service, and Elevation of privilege. Well, that's the historic version. Today, we often talk about expansion of authority in place of elevation and privilege. The short form is authority is clearer. It's what a program can do. And also, authority is measurable. Identities that are faked or spoofed include both human and technical identities. Those technical identities include just about anything referred to by a name, machines, processes, [[Microservices]], web services, even files. I can fake a specific person, hello, I'm William Shakespeare, a random person, hello, my name's [[John the Ripper|John]] Doe, or a person in a role, hello, I am a Nigerian Prince. I can also fake systems. A clever student of Roux Academy could set up [http://r0uxacademy.com](http://r0uxacademy.com) with a zero instead of an O
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-as-a-part-of-stride?u=76281980&t=93)** in an attempt to phish logins from unsuspecting teachers. I can fake microservices, and it's extra fun 'cause they often spin up for a really short time. If I want to sell things, like said chatboxes, I need to ensure that the decoder that receives encrypted video is authentic, not one in an emulator with keys that have been ripped out of a real device. Processes can be spoofed too. If I connect to localhost1234, how do I know it's not an attacker spawning a new listener and squatting on that port? Attackers can spoof a file, say tempinstaller.shell, by creating it before the authentic and proper creator can. Even authenticators can be spoofed. For example, some systems use IP addresses for authentication. If I use IP address ranges to control who can connect to a server, then I'm assuming that IP addresses are hard to fake. Spoofing is really, really easy if there are no authenticators, and even the best authenticators can be spoofed. There are no perfect systems, which makes spoofing a constant threat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (2), [[Cybersecurity]] (1), [[John the Ripper|John]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** stride (2)
> **URLs:** [http://r0uxacademy.com](http://r0uxacademy.com) (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - spoofing (1)


### 1. Authentication Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Account creation](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=1)** - Some systems don't have any authentication, like a TV. Why would a TV have a password? I might want my hotel room TV to have one, especially if there are kids around. The need for authentication is situational. Once you know you want authentication, you need to decide what it'll be. A very common pattern on multi-user systems is the combination of an identifier, or username, and an authenticator like a password. That doesn't exist on a TV. Even a hotel TV has just one account, like a phone in 2015. Accounts don't just spring into existence. There's a process for making each one. The intensity of that process ranges from show up and ask for one to get a job, undergo a thorough background check, sign a contract, and then an administrator creates the account. That process is called account creation, account issuance, or even identity issuance. I don't know what sort of weirdo issues an identity sounds very man in the gray flannel suit, if you ask me. There's a common way to think about these systems. A person is set up with a new account, there's an account identifier and some validation data which gets stored and is used for logging in. Account creation is followed by credential setup, also called issuance or enrollment, and then the account is set up and ready to go. Sometimes the account names for these
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/account-creation?u=76281980&t=96)** are carefully controlled. There's only one [[John the Ripper|John]] Smith at [rouxacademy.com](https://rouxacademy.com), but anyone can be John Smith on [[Facebook]]. Every step in account creation is vulnerable to threats. I can be mischievous on a loosely controlled site by picking a username. For example, if I create a fake account for a celebrity on a new platform, I can post whatever I want, content that harms their reputation, advertisements for the wrong sponsor, let your imagination run wild. I can also wreck havoc within tightly controlled systems. If I know that your new employee password is always change me, then I can do some damage while a new hire figures out how to call the help desk. I don't even have a phone. Every authentication system has a way to get started, a cost and effort to authenticate, and fallbacks. There's no ideal set of trade offs that work for all situations. It's common to focus on spoofing as an attack on authentication, but ignoring account creation is risky.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (2), [[Facebook]] (1)
> **Prerequisites:** set up (2), setup (1)
> **URLs:** [rouxacademy.com](https://rouxacademy.com) (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - some (1)

#### [Authentication factors](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=1)** - In the good old days, people were authenticated because you knew them from birth and strangers were dangerous. Not really pining for the good old days. There were all sorts of problems, but authentication really was easier. Today, we try to authenticate people and systems over the internet and that turns out to be tricky. When a system determines if I'm the atom show stack that should be allowed to log in, there are lots of abstractions. I log in with a username say atom show stack. I present bits of evidence which the system uses to decide to let me in or not. These factors include what I know like a password, what I have like a physical token. In fact, there are at least five commonly used authentication factors. Knowledge like the combination to a safe. An object you have like the key to a safety deposit box or an ID card. A biometric, physical characteristics measured or assessed in various ways. The communication channel in use whether in person, via phone or internet. Or who you know like your boss or friends from school. These are often expressed as something you have, something you know or something you are. Or as sardonic security people like to say, something you've lost, something you've forgotten
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=94)** and your younger better looking self. My versions are more specific than something because something is vague. These five factors drive [[Multi-factor Authentication]]. A system should rely on more than one type of factor to increase the reliability of an authentication decision. For example, an attacker could get two ID cards from one attack, stealing a wallet. The phrase more than one type of factor is a little clunky, but it's important to understand that more factors, more kinds of authentication are a better source of strength. Each factor can also be judged in terms of strength. The key to a luggage lock is rarely complex and a lock can be upgraded in various ways to resist lock picking, drilling and other attacks. A bouncer at a bar compares your face to an ID less strictly than a border guard. Phones are becoming a focal point for breaking authentication because everyone wants to use them for all the factors. Phones receive text messages. They measure the something you might be with a fingerprint or facial recognition. Phones store cryptographic keys and secure storage which are conveniently unlocked with a passphrase or biometric. However, the phone is really a single factor in the decision to authenticate. Anyone who has my unlocked phone has all of those at once.
>
> **[3:11](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/authentication-factors?u=76281980&t=191)** And using smartphones for authentication assumes everyone has a smart phone and the organization can deal with the need to re-enroll people whose phones are lost or destroyed. There's always a tradeoff. Authentication is annoying. It slows things down. More authentication factors are usually more annoying. These factors are a model and being able to crisply model the factors we're using is a helpful step in analyzing authentication system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multi-factor Authentication]] (1)
> **Tools:** atom (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - in (1)


### 2. Spoofing Authentication Factors

[↑ Back to Table of Contents](#table-of-contents)

#### [Attacking what you know](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=1)** - Good secrets are shared with just a few friends. The annoying thing about any secret is how hard it is to keep it a secret. When you enroll in a new system that organization asks you to share some secrets with them for authentication. And these secrets work best when they're not widely known. As Ben Franklin said, three can keep a secret if two of them are dead. My password is a secret that I share with a service. In my case I really share each password with a single site and I use a password manager, one password to manage that for me. I like that it has a mode where passwords aren't ever stored in the cloud. For most people they have one or a few passwords and they share those secrets with the other 11 gazillion sites they use. So it's a secret shared with a lot more than three people. Similarly, your mother's maiden name is a secret that you, your family, and various genealogy websites all know. The street you grew up on, that's part of your royal wedding guest name. Take a careful look at the information this game is asking you to post. Every single one is used as an authenticator. Attackers will steal secrets any way they can. They'll steal from servers by breaking in and stealing them from a database.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-know?u=76281980&t=93)** Or by trying thousands or millions of usernames and passwords in a brute force attack. They'll take advantage of data leaks to get passwords from other systems. They'll steal them from clients. Attackers will try to trick people into revealing them through [[Phishing]]. They'll trick people into revealing backup authentication information. Sometimes attackers don't even need to steal secrets, they're in the manual. You can find lists of default passwords. Or they're predictable. One HR system I used insisted that the date of birth was a good password because people only login once a year and they forget. Well, that's true, and usability is good. But there are other ways to fix that like integration with the corporate directory system. Lastly, what you know can be made stronger when you prove what you know. For example with asymmetric [[Cryptography]] I can sign a challenge the server provides and prove that I have the private key that's associated with a given account without ever revealing it. What you know is both easy to use and easy to attack, which is why there are so many exciting ways to use cryptography for authentication, to strengthen the what you know factor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (2), [[Phishing]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - good (1)

#### [Attacking what you have](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-have?u=76281980&t=1)** - Attacks on what you have are fairly simple and often easy, especially compared to attacks on other factors. An announcement that Adam Shostack needs to return to the airport security checkpoint happens because I've left my wallet or ID full of things I used to have. We've all seen cartoons where a prisoner tries to get the sheriff's dog to trade the key to the cell for a tasty bone. What you have can be a nifty little dongle, a keyring worth of them, or a badge. I can steal that dongle. I can take pictures of your badge and print my own. I can buy a uniform on the internet. I can go after a specific authentication key or anyone that will get me in. Sometimes the attacker targets a person, sometimes they target any person. Not only can I steal it, you can lose what you have, you can drop it in the, um, ocean, leave it behind when you travel, run down the battery, or get it confused with someone else's. The object you have goes wrong two ways, people lose things and things get stolen. Both make it a poor choice as your only means of authentication.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - attacks (1)

#### [Attacking what you are](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=1)** - Biometric systems measure or assess physical facts about a person. It's tempting to think that that makes them the most secure type of factor. Biometrics involve presenting an identifier and authentication information. That information might be a photograph evaluated by a guard. Traditional biometrics like appearance or signatures are evaluated by a person. It's notoriously hard to match a person to a small picture of them. Often that picture was taken years earlier, and forgers have been faking signatures for far longer. More technological biometric systems usually have a sensor that measures something like seven points on a fingerprint or the pattern of veins in a hand. It can also measure something more complex, like the way a person walks or types. That measurement is tuned against a set of false positive or false accept rates and false negative rates, also called insult rates. Usually the two are tied and improving one makes the other worse. Sometimes sensors are carefully managed by the people who rely on them. For example, the sensors at an international border. Other times, they're on the laptop or the phone of the person who's trying to authenticate. Whose side are they on? You want to believe your people are on your side, but until they've logged in, you can't think that way.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-what-you-are?u=76281980&t=93)** The sensor on a laptop might not even be a sensor. It could be some code I wrote that sends a picture of a toupee and pretends that it's a fingerprint. More seriously, with a sensor under the attacker's control, there's nothing to stop someone from creating an overlay fingerprint from a gummy bear. Yes, that really works, and sensors that catch it are more expensive. With all the shiny surfaces of modern life, do you really want to leave security to a factor you leave in every bathroom stall? Also, many of the biometrics that are available don't work for everyone. I could assume that everyone has fingerprints, but it turns out that some people don't have fingers or hands. Fingerprints wear down over our lifetime. That's less of a problem for the police because most criminals are young and there's evidence besides fingerprints. There's also a perception issue with using fingerprints. Being fingerprinted is often associated with criminal investigations. Lastly, most of us only have 10 fingerprints. If we want to have a secret per website, we have to duplicate after 10, and changing your fingerprints after a breach is... Let's just say beyond most people. Biometrics, what you are, can be a useful factor, but let's not be fooled by the shiny technology or the hype.

> [!info]- Semantic Content
>
> **Analogies:** picture (3), for example (1)
> **Speakers:** - biometric (1)

#### [Attacking where you are](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=1)** - The channel someone is using to communicate authentication information makes it easier or harder to engage in fakery. If someone is physically in front of me, I'm in control of my senses and probably the sensors I use to get information. It's difficult to use voice cloning, deep fakes, or other technology to impersonate. A criminal will have a harder time looking up secrets without me knowing. That said, I've been at my bank and looked up passwords and other things in front of a trained bank employee without trouble. Criminals are at higher risk of capture or arrest if their impersonation goes poorly. Where you are is also how devices like the Apple Watch unlocks a computer, with nanosecond timings to check proximity and resist relay attacks. It's useful to know that light moves about a foot per nanosecond, and os if your authentication calculation takes 20 nanoseconds to run and you accept an answer for 40 nanoseconds, then you have to be within 10 feet, right? Wrong-o. The attacker has 40 nanoseconds. They could use 19 of those to transmit and two nanoseconds for a very fast calculation. Attackers will spend their budget how they want, not how you hope. Returning to the physical realm, we often think of where you are as implying trust. Inside the network.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-where-you-are?u=76281980&t=94)** Inside the building. And as more of our world becomes wireless or voice-driven, those literal walls figuratively break down. Shouting "Alexa, unlock the door" through an open window is an attack that's worked in the real world. Wireless networks don't stop at your walls. A similar problem shows up in mobile apps. Some systems use where you are or the channel that you're using as part of the authentication decision. The bank knows Adam usually logs in from a computer in Kansas or banks via the voice response unit. If you're not in Kansas anymore, then maybe that's a warning sign. If you've gone from Kansas to Australia in 30 seconds, maybe that's not really you. Systems like this can get confused by VPNs or mobile networks, which will often haul traffic to a new interconnect without apparent rhyme or reason. Your real customers may be cut off if you include the wrong factors in your [[Authentication Systems]]. Where you are is important in very different ways to both the person choosing to authenticate and the system performing the authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Authentication Systems]] (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - the (1)

#### [Attacking who you know](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-who-you-know?u=76281980&t=1)** - Who you know is used by many organizations for fallback authentication. When I lose my password and need to get back into my account, an administrator might give my boss the replacement password. When I set off the alarm in someone else's home and the alarm company calls the landline, as it turns out, you can phone a friend and get the home owner to authenticate with you. Who you know is common when you visit a company. Someone you know authenticates you at the front desk and you get an old school visitor badge. Who you know is used on [[Facebook]] as a way of checking if you know the people in their understanding of your social network. This has an entertaining failure mode with real estate agents who meet a lot of people, even show up in photos with them, when they're often not that close. It also fails when the people you know have conference badges on or little party icebreakers that say, hello my name is. Who you know is used as an alternative to primary authentication. Kids get enrolled in schools on their parents' IDs or even their birth certificate. Which, if you stop and think about it is a fascinating authenticator. Who you know has always been important in life. And when used as an authenticator, it needs to be paired with something stronger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - who (1)

#### [Attacking phone authentication](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/attacking-phone-authentication?u=76281980&t=1)** - Using text messages to improve authentication is one of those things that makes me mad. There are good reasons to get rid of SMS authentication, a technology that's only ever adopted by a few percent of customers or users. Text messages are easily attacked, and the many ways that they can be attacked makes for a great exercise. Consider all the ways that a one time token, or OTT, can be disclosed. And while this is a course on spoofing, sometimes information disclosure is an important step toward spoofing as is tampering, or even intermediate levels of spoofing. As an aside, many of these attacks have a nasty side effect, which is they make the real owner of the phone unreachable for some period of time. I have a friend who's daughter has medical issues. It's critical for the school to be able to contact her parents. My friend is aghast at the idea of her phone being collateral damage because of how she authenticates at work. If a service you're using presents text messages as improved authentication ask for something better. If a service your organization delivers has text message authentication work toward something better. The National Institutes of Standards in Technology said years ago that SMS systems should be deprecated. It's time to get the message.

> [!info]- Semantic Content
>
> **Env Vars:** sms (2), ott (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - using (1)


### 3. Spoofing Hosts

[↑ Back to Table of Contents](#table-of-contents)

#### [Spoofing a host](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=1)** - When I try to spoof a host on the internet, it could be a host that's right there next to mine, or it might be one on the other side of the planet. There are really three models of where a spoofer can sit. In order of how intuitive those are, those models are inline, local network, and blind. Inline spoofing, which you may be using today, includes NAT, network address translation, and other less intentional types of man in the middle attacks. Now, some people might argue that NAT isn't spoofing, but it is. Really, sometimes people break security for good reasons. A NAT system works like this. My computer at 10.2.3.4 sends IP packets out. But the 10 network isn't routable over the internet. So the router has two interfaces. An internal interface in 10, and an external one which my ISP has given the address 18.4.5.6. The router may impose some additional policies about inbound or outbound packets. And those can make other [[Forms]] of spoofing harder. Every single system in this network has more than one address. My computer gets a different address with each network it connects to and can be addressed to the 18456. The router obviously has two addresses. Lastly, captive.[apple.com](https://apple.com) refers to lots of physical hosts, but the IP addresses for those hosts are often spoofed to point at the hotel or coffee shop portal.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-host?u=76281980&t=95)** There's an important reason that I'm pointing to captive.[apple.com](https://apple.com), and that's the lack of SSL. Because it may just be the most spoofed system in the world. Iphones, iPads, Macs, all try to connect to it when attaching to a new network. If it had SSL, those connections would fail. Accepted uses of spoofing, like web portals for logging onto a network, leave the door open for malicious parties. Preventing spoofing takes work, so spoofing systems is easy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Env Vars:** nat (3), ssl (2), isp (1)
> **URLs:** [apple.com](https://apple.com) (2)
> **Versions:** 10.2.3 (1), 18.4.5 (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ipads (1)
> **Definitions:** refers to (1)
> **Speakers:** - when (1)

#### [Advanced host spoofing](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=1)** - When I'm not in line, in complete control of the packet flow, there's more that can go wrong. That's certainly the case with the local network and blind models for spoofing. The second place from which to spoof is a host on the local network. Some security tools do this with simple command line options. For example, this [[Nmap]] command tells nmap to spoof packets as if they're coming from IP 10.2.3.5 while scanning 10.2.3.6. I'll call the three machines Spoofer, Target, and Spoofee so I don't have to keep repeating the numbers. Now there may be a real machine with Spoofee's IP address, and if so, it won't know what to do with the packets that it's getting from Spoofee. If that's the case, I need to send packets back before Target's or suppress Target's packets, and I can do that in various ways, including crashing Target or flooding it with packets. Obviously, it's easier to spoof well when I know more about what's goin' on. That knowledge can come from using promiscuous mode on a network interface and a tool like tcpdump or [[Wireshark]]. Those let me view all the packets on the network including their TCP sequence numbers, which I can use to craft packets of my own. It's intuitive to think that I have to be on the path to see what's happening, but it turns out that because networking is difficult,
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/advanced-host-spoofing?u=76281980&t=94)** many elements of network protocols are predictable. If I can make these predictions, I can spoof packets blindly, and blind spoofing is the third way to spoof a host. Many routers apply anti-spoofing rules, and that does make blind spoofing trickier. And although IPv6 has tools for integrating Crypto to make spoofing harder, it's difficult to deploy. While the goal was for IPv6 to have mandatory [[Cryptography]], that plan was abandoned. Spoofing is feasible even when you're not playing monkey in the middle with the packets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (2), [[Wireshark]] (1), [[Cryptography]] (1)
> **CLI Commands:** make (3)
> **Versions:** 10.2.3 (2)
> **Env Vars:** tcp (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - when (1)

#### [Spoofing the OSI model](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=1)** - Attackers can spoof at any layer of the OSI model, the seven-layer system used for networking. Looking beyond IP addresses, attackers can also spoof a MAC address or DNS packets. Why spoof at another layer? A hacker could spoof a MAC address to use expensive airplay and [[Wi-Fi|WiFi]] on someone else's bill. Here's how to commit that crime. Of course, don't do this without proper authorization. First, monitor the WiFi using tcpdump-e. This will show you sets of Ethernet addresses and some are allowed to route packets to the ground. I pick one of those addresses and set my MAC address to theirs. Now I'm spoofing and I'm spoofing well. But there's a problem. The real 10.2.3.5 is getting responses to my packets and has no idea what to do with them. So the target sends a TCP reset. How rude, I'm just trying to piggyback free Internet access from 38,000 feet, and here some paying customer has the temerity to send resets? Obviously, I needed the victim to stop. I can wait for them to use the in-seat entertainment, crash their system, or I can step in as a monkey in the middle. To be a convincing monkey, I need to convince the victim that my system is a great router and to convince the router that my system is the router for the victim. You may notice a pattern here. Those diagrams look exactly like the ones for spoofing a host. I can go up and down the stack,
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=93)** spoofing to my heart's content. When I say up and down the stack, remember that packets contain other packets. An Ethernet frame contains an IP packet. Those IP packets contain parts of TCP streams and those TCP streams contain other data. It's all spoofable. (evil laughing) At work, maybe I want to protect my systems by ensuring that only my company's computers can connect. I'll add a bit of code called TCP Wrappers to the server that does a DNS lookup for the newly connected IP. An attacker can still fake up some DNS packets, or they can control a server. TCP Wrappers does a lookup on the connecting IP and gets back rockets.[rouxAcademy.com](https://rouxAcademy.com). That matches my regex for [rouxAcademy.com](https://rouxAcademy.com), and so I'm good, right? Not at all. Anyone who runs a DNS server can set the reverse DNS to anything they want to. DNS has what are called forward lookups, which translate a name to an IP, and reverse, which take an IP and give you a host name. I could do a forward lookup for rockets.[rouxAcademy.com](https://rouxAcademy.com) and lo and behold, no such DNS record exists. What should I do? Probably drop the connection. There are many attack variants, and the defense ends with something called a double reverse lookup, where I confirm that the IP to name and name to IP lookups match.
>
> **[3:06](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-the-osi-model?u=76281980&t=186)** Sometimes, they won't match, even when the host is not spoofed. For example, hosts in a cloud provider. Whatever level of the stack you're at, it's important to rely on explicit security, either at that layer or somewhere higher-up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (2)
> **Env Vars:** dns (7), tcp (5), mac (3), osi (1)
> **Code Identifiers:** rouxacademy (3)
> **URLs:** [rouxacademy.com](https://rouxacademy.com) (3)
> **Versions:** 10.2.3 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - attackers (1)

#### [What you know in host spoofing](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=1)** - One of the things many network protocols have in common is that they're authenticated by a simple form of what you know. Sequence numbers and other parts of the protocol are used to both assemble and authenticate packets. If I'm on the path, spoofing is obviously easy. It's natural to think that I have to be on the path to see what's happening, but it turns out that, because networking is complicated, many elements of network protocols are predictable. DNS clients used the source port number and a DNS query ID to authenticate a DNS response. Each of those is a measly 16 bits, and it's visible to anyone who can see network traffic. That small size makes DNS vulnerable to brute force attacks. Historically, you didn't need a brute force attack because everything was predictable. TCP sequence numbers were predictable because they didn't use strong randomness. Now, modern systems from major vendors are much better about using high-quality pseudo-randomness for these values, but that's still not great. Everything I need to know is in the clear, either on the wire or broadcast into the air, and the values are small. So even if I don't know them, a program blasting out thousands of guesses is going to get some hits. It's easy to get into the trap
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/what-you-know-in-host-spoofing?u=76281980&t=94)** of thinking that local machines are trustworthy or these lower levels of a stack are secure, but that's a much weaker assumption than my attacker can't break well-implemented [[Cryptography]]. Now, protocols like TCP and DNS are out of your control, but you can bring this thinking to what you build on top of them. As a thought experiment, compare using what you know to establishing a shared cryptographic key and using that key to generate an HMAP to authenticate the packets that are in the data stream. Designing crypto systems is hard, and so the short answer almost always starts with run it over TLS or SSH. Now, this is a spoofing class, but it's important to realize that attacks chain and combine in fun ways. If I use my ability to spoof TCP to insert a packet or two, I could have a little fun. This trickery might desynchronize things, but one little packet can do a lot of mischief. Imagine inserting something into a Telenet session. For example, I can insert a show command. You don't need a big, complex attack to do a lot of damage. That's why SSH encrypts and authenticates the entire connection, not just the authentication phase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (1)
> **Env Vars:** dns (5), tcp (3), ssh (2), hmap (1), tls (1)
> **CLI Commands:** ssh (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - one (1)

#### [Spoofing TLS](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=1)** - There's a lot of low-level spoofing that's possible. In many cases, the easy and obvious fix is add TLS and then all our problems are solved. TLS, it's like magic pixie dust that will secure your internet to make sure your stock picks all go to 11. Is that what I want? What if I buy at 50 and it goes to 11? Magic can be so fickle. So if I run a server, [rouxacademy.com](https://rouxacademy.com), I can get a certificate to authenticate that server. The TLS connection won't work unless the host someone is trying to reach is the name on that certificate. Most certificates rely on asymmetric [[Cryptography]] where keys have mathematically related parts. Some of those systems can be used to produce a digital signature where the private part of the key is used to create a signature that can be verified with the public part. A certificate is a cryptographic key that's signed by some other key. That's all. There's a special set of root keys or root certificates that are trusted in the sense that they can change the security behavior of software that depends on them. The entities that control these special keys are called certificate authorities or CAs. What makes a CA an authority? My operating system, browser, or other software developer decided to accept them as certificate authorities. Security controls change their behavior
>
> **[1:37](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=97)** when shown a certificate. The browser won't display security warnings at a website whose certificate is signed by a CA. If any CA wants to sign a certificate that [rouxacademy.com](https://rouxacademy.com) is really [rouxacademy.com](https://rouxacademy.com), great. They are technically free to do so, along with over a hundred other organizations, each of each is a certificate authority on my laptop today. Why so many? There's a trade-off being made here. Browsers trust certificate authorities. Otherwise, people would have no way to know if they're really at [rouxacademy.com](https://rouxacademy.com). So how do you attack a certificate authority? Well, you can break into one. Someone did that to a Dutch company called DigiNotar. Or you can convince it to misbehave by issuing certificates it shouldn't. And you can get certificates for things that might trick a human into thinking they're safe or talking to someone other than who they really are, like [r0uxacademy.com](https://r0uxacademy.com) with a zero or [rouxacademy.com](https://rouxacademy.com).[evil.com](https://evil.com). That last is not where we want to be, but people do lazy matching, and so they'll see [rouxacademy.com](https://rouxacademy.com) and think they're okay. If I'm doing regex validation, there's a crucial difference between [example.com](https://example.com) and [example.com](https://example.com)$. Now, maybe you're expecting me to say that certificate authorities ensure authenticity, but no. We need a way to bind human intent to computer execution.
>
> **[3:15](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-tls?u=76281980&t=195)** What we have is a way to tie DNS names displayed in a URL bar to the system pointed to you by gethostbyname, and that's not at all the same thing. All of these means of spoofing consider a key question. What authentication factors are in use? How can we bypass them? Some of the attacks are technical. Some depend on the person. All are spoofing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (1)
> **URLs:** [rouxacademy.com](https://rouxacademy.com) (6), [example.com](https://example.com) (2), [r0uxacademy.com](https://r0uxacademy.com) (1), [evil.com](https://evil.com) (1)
> **Env Vars:** tls (3), dns (1), url (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** it's like (1)
> **Best Practices:** the key is (1)


### 4. Spoofing People

[↑ Back to Table of Contents](#table-of-contents)

#### [Spoofing a specific person in email](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=1)** - I've already talked in general about spoofing a person. Email is a common example. If I want to claim that my name is Little Red Riding Hood, I can go into my email client and just do this. Now, when I send email, it displays as Little Red Riding Hood and no one's the wiser, unless of course, their email program cleverly displays email addresses. That's not the best way of changing my identity. Anyone can see that my email is still BigBadWolf@[badguys.com](https://badguys.com). So really, I should go and set up an entirely new email address and hey, LittleRedRidingHood@[badguys.com](https://badguys.com) is already taken, that's weird. So I can just take LittleRed@[badguys.com](https://badguys.com) and now all good. Now, my email matches my name and that's helpful, but someone might look at the domain name. I can get a domain that looks like the one someone expects. Maybe [RidingHoods.com](https://RidingHoods.com)? Each of these could be a real email address of one of the domains. The spoofing is happening at a human level, but I can also send email and have it look like it's coming from another domain. It can be as simple as telenetting to port 25 and following the protocol. Of course, there are security checks and which security check is run is dependent on the mail server. Many will check the DNS for the host you're coming from. Remember how to spoof that? Because all the easy ways to do this were mechanized by spammers,
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-specific-person-in-email?u=76281980&t=93)** the defenses against that sort of spoofing are now decent, but not great. Business Email Compromise is a variant of spoofing a person. The attacker pretends to be an executive needing help paying a supplier and fakes or compromises an email account. Sometimes, they'll do both. Send an email from a compromised account with a Reply To header. Even if you carefully inspect the first message, it comes from your boss's account. As people, we transfer knowledge of that authenticity to the remainder of the conversation. The threat of misdirection is the reason some email programs will highlight display names from other domains in red. In this case, the follow up emails from a spoofed boss, would be red, but would I notice? Will I get used to seeing lots of emails shown in red and ignore that? What needs to be shown is the unfamiliar email addresses, especially when associated with familiar sender names. Again, there's dependencies between the human and technical means of authentication and you need to keep those in mind as you consider spoofing.

> [!info]- Semantic Content
>
> **URLs:** [badguys.com](https://badguys.com) (3), [ridinghoods.com](https://ridinghoods.com) (1)
> **Definitions:** is a  (2)
> **Ports:** port 25 (1)
> **Env Vars:** dns (1)
> **Prerequisites:** set up (1)
> **Speakers:** - i (1)

#### [Spoofing a person on a website](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=1)** - If you want to be Little Red Riding Hood on Twitter, you're way too late. There are dozens of accounts with variations on that name. Some websites have limits on overlap between display names. Now [[Facebook]] has some controls over names, but frankly, they don't work very consistently, and when they are consistent, they don't deal with the fact that there are a lot of [[John the Ripper|John]] Smiths in the world. They're better at catching obvious fakery, which is okay until you realize that there probably are parents who really name their kids after fruits or seasons or. I hope you see where this is going. We expect that the presentation of a person on a website relates to the actual person. We sort of expect the name displayed to match someone's government name, but if I say Louise Ciccone, you have no idea that I'm talking about Madonna. The ways in which we judge authenticity on a website are entirely under control of the website. Photos are easily copied, names are editable. I might pretend to be some specific real person. This made for lots of trouble with parody accounts on Twitter before various groups perfected the art and destroyed Twitter in the process. I might also just create a random name, Billy Smith or Billy Red. I might present a well-developed persona to fool some specific person. This is sometimes called catfishing, and the term gained attention with a famous case involving a pro football player.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-on-a-website?u=76281980&t=94)** It can happen anywhere on the web or off. I might want to fool all the people all the time. I might create an army of fake accounts all talking to each other to help them look real, and also talking to the world. This technique isn't specific to the web, and it's been rediscovered under a lot of names, including pseudospoofing, sock puppetry, and astroturfing. It's all spoofing of identities on the web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (1), [[John the Ripper|John]] (1)
> **Speakers:** - if (1)

#### [Spoofing a person in video and audio](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=1)** - The many ways to spoof a person in email feel intuitive to people who've been on the internet for a while. Faking people on websites can be fun, but we tend to believe our eyes and ears or their technological proxies, audio and video recording. There's an emerging field of technology called voice cloning. Companies are already using voice cloning to provide a consistent experience for customers who call their support lines. Imagine being able to bring grandparents to life in a teddy bear or to not have to worry about the availability of a voiceover actor. There are lots of companies making voice cloning and today good voice analysis and reproduction can require an hour or more of source material. It's not just audio. Deep fake technology can be used to produce video of someone saying things they've never said. Voice cloning and deep fakes are worrisome enough by themselves, and I need to warn you, there's a lot of disturbing content if you search on deep fakes. But more, I want you to think about what it means for the future of spoofing and authentication. Imagine a version of business email compromise where it's not an email or a voice mail, but your boss calling on the phone, having a conversation about moving ahead with a payment. Now combine that with AI that can have simple phone conversations.
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/spoofing-a-person-in-video-and-audio?u=76281980&t=94)** In 2018, [[Google]] demonstrated a system called Duplex which does exactly that. They haven't integrated video or voice cloning yet, but technology's only going to get better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Analogies:** imagine (2)
> **Speakers:** - the (1)


### 5. Spoofing Files

[↑ Back to Table of Contents](#table-of-contents)

#### [The nature of "open" and paths](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=1)** - Opening a file, it seems so simple, and often is. I call fd open file.txt, and get back a file descriptor to whatever file.txt happens to be in the current working directory. I hope it's the file I intended, but have little guarantee, and since I'm focused on the identity of the file I'm looking for, I think of these as a type of spoofing attack. I can add checks, I can authenticate the identity of a file. Part of the authenticity of a file is where it's stored. The truth about the Kennedy assassination is a different file when it's at the National Archives versus some conspiracy theory website. And so the question of paths starts to matter a lot. Some paths are in your code, some are supplied by a person using your code. We can be attacked via the path or by the file to which the pathname refers. Paths come from user input, for example, a file selection box, or other code like a web browser. Paths in code or the .h files, are usually more trust worthy than those from a local user or remote code, all of which must be treated with care. Files are stored on local disks or on remote storage, and either can be changed by other people's code. They're also served up by remote servers, and can come either directly or via cache. The typical example of a malicious path comes from the days when hashed passwords
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=94)** were stored in that file. It helps an attacker gets interactive access to that system or others. Path attacks tend to involve canonicalization issues, but that's a sideshow to bypass badly written controls. The essence of a path attack is either, give the person who supplied that path access to a file they otherwise can't access, or give your code data that it doesn't expect. While giving code data that it doesn't expect can exploit issues in a path, it can be more direct. For example, if you ask for [ruacademy.com/grades.txt](https://ruacademy.com/grades.txt), Ru may give you that update via UNC, NFS, some other distributive file system. That's subject to spoofing in all the ways remote machines are spoofable, and also [ruacademy.com](https://ruacademy.com) may just lie to you. Local files can also be spoofed. If code relied on temp/runme.sh, and I know that, I can create that file before the program does. I may also be able to remove the correct version and replace it with one of my own, depending on permissions of the temp directory. A more modern version of this is the Downloads folder, on which your browser relies. Almost any [[Windows]] program is linked to a library file called ieframe.dll. If I serve up a file with that name, and a user downloads it, the trap is set for anyone whose downloaded code
>
> **[3:09](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/the-nature-of-open-and-paths?u=76281980&t=189)** is not careful as it loads libraries. Opening files is easy, opening the file you want expect, and hey, even deserve, is much harder.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **File Paths:** file.txt (2), ruacademy.com/grades.txt (1), temp/runme.sh (1)
> **URLs:** [ruacademy.com](https://ruacademy.com) (2)
> **Env Vars:** unc (1), nfs (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - opening (1)

#### [Libraries (LD_PATH, %Downloads%)](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=1)** - Libraries are special. They're files full of code that my code relies on, so it would be crazy to be lazy or hazy about the file I'm opening, right? Absolutely. And there are a few categories of failure which include trusting directories with weak permissions, environment variables which alter load behavior, and tools which are designed to manage the libraries in use. Directories with weak permissions include temp and the downloads directory. Running code from downloads is common behavior, and so drive-by download attacks include dropping DLLs which common installers will use. Weak permissions can also be an issue with references to the current or working directory with references like ./library.so. Do you know what directory that will reference? This can be more of an issue for privileged or set UID code where an attacker might want to manipulate what library gets loaded to take advantage of privilege. Environment variables like LD library path were also used for this purpose. Lastly, there are [[Package Management]] utilities like [[npm]]. npm's mission in life is to muck with, I mean, update the libraries that you're using. But you don't need to be using npm to get special libraries. For example, in July of 2018, a package called [[ESLint]]-scope that gets 2 million downloads a week
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/libraries-ld-path-downloads?u=76281980&t=95)** was backdoored by attackers. Much of the web involves getting code from other sites, and while this may seem like more of a tampering attack than spoofing, it's a great way to get a target to load the wrong library. In that vein, in November 2018, a [[Web Analytics]] company was breached. They provide a library a website can use to gather [[Statistics]] about their visitors. The attackers added a few lines of code to the main stats counter [[JavaScript]] used on over 2 million sites. This particular attack intended to steal [[Cryptocurrency]] at an exchange site. The way it did that was to check the URL of the page that was loading the library, and if that URL included the string myaccount/withdraw/BTC, then the malware loaded. So the 1,999,000 sites that don't have URLs that include myaccount/withdraw/BTC were all safe. They were safe by accident, or really, by the grace of an attacker. Libraries are vulnerable to spoofing at web scale. It should've been a wake-up call.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Package Management]] (1), [[ESLint]] (1), [[Web Analytics]] (1), [[Statistics]] (1)
> **Env Vars:** url (2), btc (2), uid (1)
> **CLI Commands:** npm (3)
> **Analogies:** for example (1)
> **Speakers:** - libraries (1)

#### [Defenses with extra fail](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=1)** - There are a few defenses against spoofing that are simple, elegant and wrong. In defending against spoof files, these include hidden directories and files with random names. Take a moment. Pause the video. Think about why those don't work. There's more than one answer, but the core answer is that a hidden directory is obscurity. Once I know it's there, the defense doesn't work anymore. Compare that to create a directory, set its permissions, then create a file with the right permissions. While it sounds better, it's still technically risky. As I drafted this content, I realized there's a raised condition while I'm setting the permissions. I'm exposing that to show you that precision is important and even experts can make mistakes while being conversational or informal. So really, I'd set my permission's umask, then create the directory. I can know that there's a directory that's Mode 700 and files in it are writeable only by group [[Threat Modeling]] and it does me, the attacker, no good. The operating system will control access and that's what the developer wants. Similarly, making a file with a name temp, atom, XYZ where XYZ is random only requires that an attacker create 1,000 files before your code does, easy to do with a script. Knowledge-based authentication
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/defenses-with-extra-fail?u=76281980&t=93)** with only a few answers is a particular pet peeve especially when the site forces a complex password. What did your great grandfather do for a living? Statistically speaking, he was a farmer. What's your favorite pizza topping? Only slightly harder, pepperoni, and your answer might change over time. Similarly, enhancing authentication via text message, so full of fail, I don't even know where to start. SIM porting attacks where someone spoofs me and gets the phone company to move my phone number changing my effective telco, malware that steals it off a phone, unprotected [[Cloud Storage]] at text message companies, these are among the answers you should see while looking at the phone threat model. There are many controls out there which have been through extensive cycles of being attacked and improved. This evolutionary pressure has produced some very effective defenses over the years. You should always try to use those. Studying the history of their evolution is a useful way to learn about attacks. And only if the defenses are really infeasible for you should you implement new sorts of controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (1), [[Cloud Storage]] (1)
> **Env Vars:** xyz (2), sim (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** atom (1)
> **Best Practices:** you should always (1)
> **Speakers:** - there (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure by Design: Bring authenticity to your systems](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-spoofing-in-depth/next-steps?u=76281980&t=1)** - Spoofing threats are everywhere. There are no perfect systems, which makes spoofing a constant threat. If you're interested in learning more, the best way to learn is to dive in and spoof. Do this to systems in a lab or where it's otherwise authorized, but go get some tools, give these approaches a try. Make some of it real so you can speak to spoofing as you analyze new systems. This course is a great introduction to understanding spoofing threats, so you can apply it to [[Threat Modeling]] work. For a more comprehensive view, check out my book Threat Modeling: Designing for Security. A systematic, structured, and comprehensive approach to threat modeling will lead your teams to more secure robust outcomes in more predictable time frames. The next time you find yourself looking at something you're working on, be sure to consider what can go wrong and what you're going to do about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3)
> **CLI Commands:** make (1), find (1)
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