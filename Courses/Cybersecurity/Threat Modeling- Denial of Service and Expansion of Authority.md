---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: threat-modeling-denial-of-service-and-expansion-of-authority
url: "https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority"
duration_minutes: 48
duration: 48m
level: Advanced
updated: 9/4/2024
learners: 67716
skills:
  - Threat Modeling
  - Cybersecurity
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFIr3vQY5CyvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613586528983?e=2147483647&amp;v=beta&amp;t=DRkj9GWD9ye8CT3SO9V4w75-Ynl6wFCy6PYluwknOhA"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)'
prev_courses:
  - '[Threat Modeling- Information Disclosure in Depth](Threat%20Modeling-%20Information%20Disclosure%20in%20Depth.md)'
path_nav: '[{"path":"Improve Your Threat Modeling Skills","position":6,"total":6,"prev":"Threat Modeling- Information Disclosure in Depth","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/threat-modeling
  - skill/cybersecurity
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Threat%20Modeling-%20Denial%20of%20Service%20and%20Expansion%20of%20Authority.md)

![Threat Modeling: Denial of Service and Expansion of Authority](https://media.licdn.com/dms/image/v2/C4E0DAQFIr3vQY5CyvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613586528983?e=2147483647&amp;v=beta&amp;t=DRkj9GWD9ye8CT3SO9V4w75-Ynl6wFCy6PYluwknOhA)

# Threat Modeling: Denial of Service and Expansion of Authority

> In this installment of Adam Shostack’s Threat Modeling series covering the STRIDE threat modeling framework, Adam goes over the D and E parts of the framework: denial-of-service and elevation-of-privilege. For both threats, Adam digs deep into two main questions: “What can go wrong?” and “What are we going to do about it?” He details the many targets of denial-of-service attacks like storage, memo

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority) | 48m | Advanced | 68K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Let me interrupt you](#let-me-interrupt-you)
  - [STRIDE and the four question framework](#stride-and-the-four-question-framework)
- [**1. DoS Targets**](#1-dos-targets) (6 videos)
  - [DoS in context](#dos-in-context)
  - [Attackers fill networks](#attackers-fill-networks)
  - [How attackers redline your CPU](#how-attackers-redline-your-cpu)
  - [How attackers fill storage](#how-attackers-fill-storage)
  - [How attackers spend your budget](#how-attackers-spend-your-budget)
  - [How attackers drain your battery](#how-attackers-drain-your-battery)
- [**2. Properties of DoS Attacks**](#2-properties-of-dos-attacks) (3 videos)
  - [Persistence and transience of DoS](#persistence-and-transience-of-dos)
  - [Naïve to clever: Understanding DoS](#nave-to-clever-understanding-dos)
  - [Amplified or native: Two modes of DoS](#amplified-or-native-two-modes-of-dos)
- [**3. DoS in Various Technologies**](#3-dos-in-various-technologies) (2 videos)
  - [Mobile and IoT denial of service](#mobile-and-iot-denial-of-service)
  - [Cloud denial of service](#cloud-denial-of-service)
- [**4. DoS Defenses**](#4-dos-defenses) (2 videos)
  - [Designing for resilience](#designing-for-resilience)
  - [Quantity as a defense](#quantity-as-a-defense)
- [**5. EOP**](#5-eop) (4 videos)
  - [What is elevation of privilege?](#what-is-elevation-of-privilege)
  - [Privilege and authority](#privilege-and-authority)
  - [Input corrupts](#input-corrupts)
  - [Main forms of corrupt input](#main-forms-of-corrupt-input)
- [**6. EOP Defenses**](#6-eop-defenses) (9 videos)
  - [Ways to defend against EOP](#ways-to-defend-against-eop)
  - [Validation to defend against elevation](#validation-to-defend-against-elevation)
  - [Validate for purpose to prevent elevations](#validate-for-purpose-to-prevent-elevations)
  - [Validation not sanitization for defense](#validation-not-sanitization-for-defense)
  - [Attenuation in defense](#attenuation-in-defense)
  - [Memory safety as a defensive tool](#memory-safety-as-a-defensive-tool)
  - [Stack canaries to protect your code](#stack-canaries-to-protect-your-code)
  - [Sandboxes and isolation protect your environment](#sandboxes-and-isolation-protect-your-environment)
  - [Bolt-on or built-in defenses](#bolt-on-or-built-in-defenses)
- [**Conclusion**](#conclusion) (1 videos)
  - [Security by design](#security-by-design)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Let me interrupt you](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/let-me-interrupt-you?u=76281980&t=0)** - [Adam] You know when there are so many interruptions that you can't get anything done? Yeah, I know how you feel. When it's just you being demanding of your computer, we call that time for an upgrade. And when it's an attacker, we call it a denial of service. In this course, we'll cover both denial of service and elevation of privilege. Looking at denial of service attacks, we'll talk about how they fill memory or networks, how they use up resources like CPU, budget, or battery. Looking at elevation of privilege, we'll see how it includes not only [SQL](../../Skills/Data%20Science/SQL.md) injection and cross-site scripting, but also failure to require authorization, like a hidden admin control panel. And you'll learn how to defend your systems against these attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** cpu (1), sql (1)
> **Speakers:** - [adam] (1)

#### [STRIDE and the four question framework](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=0)** - [Instructor] This course is part of a series on [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and the STRIDE threats. At the heart of threat modeling are four incredibly simple questions. What are we working on, what can go wrong, what are we going to do about it, and did we do a good job? These questions act as guideposts as you're threat modeling and analyzing how you're threat modeling. If you're not sure why you're doing the work that you're doing, tie it to one of these questions. STRIDE is a mnemonic for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege. Well, that's the historic version. Today, we often talk about expansion of authority in place of elevation of privilege. The short form is authority is clearer. It's what a program can do, and also authority is measurable. In this course, we're focused on the threats of denial of service and elevation of privilege. Of course, we're putting all the of's in one course. More seriously, we're putting both in a single course to make the learning path a little shorter. For both threats, I'll be digging deep into the details of what can go wrong and what are we going to do about it. There are denial of service attacks against compute, storage, bandwidth, battery, and budget. There's elevation of privilege in every system
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stride-and-the-four-question-framework-24469296?u=76281980&t=95)** complex enough to have privileges or permissions or users, pretty much in any running code that handles untrusted input or talks to something which does, and you'll learn structured ways of ensuring that your systems are both highly available, resisting denial of service attacks, and resilient against elevation of privilege attacks. Looking at these four questions with lenses for denial of service and elevation of privilege is the final part of the systematic, structured and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (4)
> **Env Vars:** stride (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. DoS Targets

[↑ Back to Table of Contents](#table-of-contents)

#### [DoS in context](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/dos-in-context?u=76281980&t=0)** - [Presenter] Denial of service attacks impact the availability of some resource. There's a set of resources that are typically impacted. Traditionally, those were network bandwidth, CPU and storage. Today, batteries and cloud budgets are also frequently used up. We'll look into each, but don't be fooled into thinking that these are all the ways that availability fails. Electric grids fail because of storms, squirrels and backhoes. Machine learning systems sit idle because getting data from RAM to the CPU is a bottleneck. Computers are subject to destruction, ranging from coffee accidentally spilled on your laptop to outdoor cameras being spray painted. These failures are less subject to software controls, but that makes them no less real when you're considering the availability of your systems.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (2), ram (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Attackers fill networks](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attackers-fill-networks?u=76281980&t=0)** - [Instructor] The best known denial of service attacks are network flooding attacks where a lot of computers send a lot of packets to you. This fills up your network pipes. In June of 2020, Amazon reported being hit with an attack that sustained 2.3 terabits per second for several days. They also reported that the 99th percentile is only 43 gigabits per second. I've been a little informal, using packets and data interchangeably, but network operations folks don't. Attacks that send a lot of data can do so in large packets, which fill the pipes, or with more smaller packets, which can cause trouble for network equipment. Attackers can go from running scripts to uploading a lot of data. Your [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) support posts to don't they? To writing lower level code, to sending lots of data ignoring things like TCP congestion controls or otherwise sending as much data as will fit on their local network. The attacker's also likely to use tools that will amplify their attacks. If their attack is against a home network or a cellular network, that attack is a lot easier than an attack on the pipes going to a data center, but you don't care about that easy or hard. You care about your network and systems being available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Env Vars:** tcp (1)
> **Versions:** 2.3 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How attackers redline your CPU](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=0)** - [Instructor] Quick, what's three times five? What's three to the fifth power? And what's 343,243,432 to the 8924th? Some problems are easy, other problems are harder. The fork bomb is a way to denial of service a computer on which you can run code. It was more fun when computers were expensive and less shared and you could stop an entire departmental computer from running. If you think about it for a second, nope, there's already so many copies of that script already started that they can't start any more. Usually it'll hit a limit like the number of processes or the open file handles that connect to the script. The attacker can also chew up memory by allocating a bunch as the script starts. Attackers usually won't do anything to slow down the ramp up of their attacks. You don't need to be local to cause a denial of service. Sometimes you don't even need to try. In July of 2016 a regular expression, written by Stack Exchange to trim spaces from post titles crashed the site. It was triggered by a post with 20,000 spaces followed by some text. The parser checked 20,000 characters, found something other than a space and said, "Oops, that's not a match. Let me go back to character number two and check 19,999 characters." This is classic order n squared behavior.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-redline-your-cpu?u=76281980&t=96)** The victims wrote up a nice after incident report but don't say if they think the behavior was even malicious. Everywhere your code is dependent on outside data there's a denial of service risk. Think about sending email to a list of provided email addresses. Is it okay to share this document with 10 people? 10,000? What if it's for a political campaign? Maybe you want to send that much email. You can get the same effect from sequel queries with complex joins or other work behind the scenes. There's all sorts of potential denial of service problems and some don't even require an attacker.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How attackers fill storage](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-fill-storage?u=76281980&t=0)** - [Instructor] Storage includes not only hard drives and flashcards, but tapes and other exotic storage material. It's easy to fill up yourself. Just start recording high quality videos and wow. But there are ways to fill a disc you don't have direct access to. A very long time ago, our mail spool filled up with copies of a UNIX kernel. It turned out to be an angry spouse who later apologized for sending those as emails. She didn't realize we had a shared email infrastructure. Sites like [Instagram](../../Glossary/Service/Instagram.md) store billions of photos, most of which are viewed by less than a handful of people, but Instagram knows they're doing that. What about filling up a file system? Making lots of connections can fill logs, but logs are small and they rotate. Much more useful is to exploit parsers that cause things to grow. Usually, these are intentional decompressors and the classic is to craft a zip file that says, we have a billion copies of this string. The zip file is a few bites. The decompressed file, a few billion. That sort of expansion is rare outside of compression, and with modern disc sizes, filling a disc on a traditional computer is less of a problem than it was. But never underestimate the power of XML to expand a data structure. [IoT](../../Glossary/Concept/IoT.md) is another story and one we'll come to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Instagram](../../Glossary/Service/Instagram.md) (2), [IoT](../../Glossary/Concept/IoT.md) (1)
> **Env Vars:** unix (1), xml (1), iot (1)
> **Exercise Files:** zip file (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How attackers spend your budget](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-spend-your-budget?u=76281980&t=0)** - [Instructor] Systems that automatically scale to handle load are wonderful. The idea that resources are just available to you as you need them is great. And you pay for it. Wow, can you be made to pay for it. I remember talking to a friend about a design change. They'd turned off SSL for a game they ran and I was making the security case when he stopped me in my tracks by saying, "Yeah, but we got to decommission 30,000 servers." Well, okay. I thought for a second and said, "How do you decommission 30,000 servers?" He said, "We stopped paying Amazon for them." The ability to provision and deep provision servers at scale is amazing and wonderful. And sometimes it's also expensive. That leads to two types of denial of service attacks. For one, you've set and hit budget limits and you stopped getting extra scaling. For the other, you forgot to set budget limits and you're faced with a very large bill. The former is probably the way to go. It's easier to add budget than to unspend it.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (1)
> **Speakers:** - [instructor] (1)

#### [How attackers drain your battery](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/how-attackers-drain-your-battery?u=76281980&t=0)** - [Instructor] The last major resource subject to denial of server attacks is battery. For laptops or phones, depleting the battery usually isn't a big deal. You plug it in again. But for devices that may not be close to power, like security cameras, battery life can be a very big deal. Things that drain it are meaningful attacks. It used to be that batteries not included was on the side of every toy you got on your birthday. Batteries were something we inserted. Now, for size reasons, batteries are often gel packs that are tightly integrated and can't be replaced at all. Rechargeable batteries degrade with charge cycles, and so, attacks have a minor permanent effect. Lithium ion batteries also display memory affects if they're charged too often, and so, attackers might try to invoke those side effects. It's all rather draining.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 2. Properties of DoS Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Persistence and transience of DoS](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/persistence-and-transience-of-dos?u=76281980&t=0)** - [Instructor] Attacks have many properties including persistence or transience, clever or naive and native or amplified. Persistence means that the effects of the attack continue until you act. A battery is discharged until someone plugs it in. Transience means the effects go away when the attack does. No one is throwing a gajillions of packets down the wire anymore. Transience and persistence tend to be very tied to the resource. Attacks on CPU or networks tend to be transient. While attacks on storage, battery and budget tend to be persistent. Transience or persistence, and all of the other properties apply to each of the types of resources that can be depleted. A given attack can combine those properties in many ways. So you can have a clever attack on battery consumption, or you could just ask it for lots of work, but these are properties of the attack, not of the resource.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Naïve to clever: Understanding DoS](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=0)** - [Instructor] At the naive end of attacks, is sheer quantity. If you can send a gigabit a second, why bother with subtlety? When disk space was expensive, music files could be a denial of service. Today, we don't even think about storing videos. At the clever end of denial of service attacks are ways to make a small request, that you know generates lots of work. For example, call a fancy French restaurant and tell them you're lactose intolerant, when making a reservation. Many of their dishes use sauces that include butter or cream and rather than remake those sauces many restaurants will limit the diner's choices. A really fancy place might make something special and new for you, choosing to absorb that work. Of course, that's a real personable requests from everyone's perspective. No one wants the diner to suffer a bad reaction to the food. What transforms it into an attack is the motive, calling for several reservations on the same night with different restrictions, with no intent of ever showing up. Early versions of many internet [Cryptography](../../Skills/Cybersecurity/Cryptography.md) protocols suffered from these problems. The server had to do expensive cryptography without the client having done the same. Clever attacks may be designed, not against your infrastructure, but against your business logic and processes. They may start with measured probes
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/naive-to-clever-understanding-dos?u=76281980&t=95)** to see which queries take the longest to run. I'd like page seven of your eight nonstick pans, sorted by smallest to largest discount, with two stars or more and available for immediate treatment, please. And then sending lots of those or, lots of those with small variants to break cache. Well, anyone can engage in a naive attack. It's tempting to say that only sophisticated ones can engage in clever attacks. That leads you to think there will be more naive attacks. That would be wrong, attackers will do surprising things and there may well be shortcuts to do what you think requires cleverness or sophistication. Never underestimate how cleverly a fool will break a foolproof defense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (2)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Amplified or native: Two modes of DoS](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=0)** - [Instructor] Attacks can use the attackers resources or someone else's. Using someone else's resources starts with finding or finding out about a resource that will return more than its sent. Ideally, the amplifier will use UDP so the attacker doesn't need to succeed at a TCP handshake. Unix machines used to offer a charge in service that would send a stream of characters, for debugging if packets we're going through. So attackers would send a request to the broadcast address, say 10.0.0.255 port 19 and every machine on the network would reply with a stream of packets. Oh, the nineties. They were a simpler time and the TCP handshake was easier to fake too. Today these amplifications are harder to find, but variants with DNS and memcached are common. Memcached is service designed to cache and quickly return data. Usually returns far more data than the callers sends. A single 203 byte request can result in 100 megabyte response. Of course, with things like remote file inclusion attacks, you can get a server to make requests on your behalf, DOSing itself. Again, cleverness can really help the attacker. You can't assume that only rich or powerful attackers will find the amplifiers
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/amplified-or-native-two-modes-of-dos?u=76281980&t=94)** and you can't hope that you can outrun the bears. There's an old joke about two hikers who meet a bear in the woods. One of them sits down and starts taking off his boots. The first looks at him and says, aren't you running? The second hiker says, I don't need to outrun the bear. I just need to outrun you. Ha, ha, ha, but today's bears will set fire to the forest using instructions they found on the internet.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (2), udp (1), dns (1)
> **CLI Commands:** find (2), make (1)
> **Ports:** port 19 (1)
> **Versions:** 10.0.0 (1)
> **Speakers:** - [instructor] (1)


### 3. DoS in Various Technologies

[↑ Back to Table of Contents](#table-of-contents)

#### [Mobile and IoT denial of service](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/mobile-and-iot-denial-of-service?u=76281980&t=0)** - [Instructor] Anyone who's lost cell service unexpectedly in a denser urban building, in the mountains or anywhere in between will be very aware of the possibilities for accidental denial of service against cell networks. These problems crop up during disasters when everyone's trying to use the phone, hint, send text messages, also during massive conferences, celebrations like your team winning the pennant or St. Patty's day in Chicago. From the server's perspective, this can look like a denial of service attack against the end point. And from the end point, it can look like a denial of service attack against the infrastructure or server. Denial of service against phone networks can be incited by falsely claiming they cause the plague or by jamming systems. Of course, mobile devices have batteries and physical cases and we know that both fail. In that they're like [IoT](../../Glossary/Concept/IoT.md) devices, all are vulnerable to the dreaded cup of coffee. In each case you have to plan for conductivity failure and sometimes those failures won't heal themselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IoT](../../Glossary/Concept/IoT.md) (1)
> **Env Vars:** iot (1)
> **Speakers:** - [instructor] (1)

#### [Cloud denial of service](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/cloud-denial-of-service?u=76281980&t=0)** - [Instructor] Let's talk about denial of service attacks against cloud-based systems. And here I mean systems designed and built to be in the cloud, not a server you forklifted, which is vulnerable and exactly the same way in the cloud as it was in your data center. I mean systems that are designed to scale up and down as needed, because here you have a choice about your response to an attack. You can scale up paying for resources and hoping the attackers get bored before your CFO gets angry, or you can accept the denial of service and hope your customers come back. That's an interesting position and represents an important difference between denial of service and other threats. There's an entire set of controls that are operational. There's another important denial of service attack against cloud systems, and that's Christmas. This is a technical point, not a religious one. As more and more presents involve the internet, kids open their presents, the presents all connect to the internet and things get overloaded. The demand can be so high that you might not be able to buy instant cloud spot instances. This means your defense is don't just forklift into the cloud.

> [!info]- Semantic Content
>
> **Env Vars:** cfo (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. DoS Defenses

[↑ Back to Table of Contents](#table-of-contents)

#### [Designing for resilience](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/designing-for-resilience?u=76281980&t=0)** - [Instructor] Testing for load and testing resilience under a load is a crucial step. Make sure that each component is ready to accept either unexpected load or unexpected disappearance and reappearance of the nodes it talks to. Understand what the load is per count, per action and what variants is reasonable. How many photos, songs, videos, can one account upload? How many messages might they send? Are there ways they can amplify the use of your resources against you or someone else? Chaos monkeys which intentionally break your system seems scary at first but real systems break in strange ways. If yours can't handle some intentional breakage under your control, why do you think it will resist a real attack? Security is always a system property. Some people talk about the weak link but that's still focusing on each link, perhaps ignoring if the chain is properly used and availability even more than most other security properties is a system property. Each component being resilient on its own is helpful, and you must understand how they all play together to achieve resilience.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Quantity as a defense](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/quantity-as-a-defense?u=76281980&t=0)** - [Narrator] Quantity has a quality all its own and if you have enough capacity, you don't have to worry about cleverly allocating it. You can get to enough capacity by spending energy on making every transaction efficient and when you do, everything scales better. Of course, at some point every system has a limit or snag. The question is, will you be ready for it? Do you know where the different bottlenecks are? Does your system, as a system degrade gracefully as it starts to get full? Graceful degradation means sending capacity reached alerts and errors, not serving the most expensive requests.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


### 5. EOP

[↑ Back to Table of Contents](#table-of-contents)

#### [What is elevation of privilege?](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/what-is-elevation-of-privilege?u=76281980&t=0)** - [Instructor] Elevation of privilege attacks are all focused on one thing, gaining privileges. Going from anonymous internet user to able to run code, going from normal user to route from normal user to cloud admin. By running code, I include both running a few instructions included in an exploit and in interactive shell, but it's the ability to make a computer do your bidding. Most of these attacks work by finding a way to have a parser treat the attacker's data as code. [SQL](../../Skills/Data%20Science/SQL.md) injection, cross-site scripting, stack smashing, command injection, all work because parsing complex streams is hard. The attacks tend to target victims with privileges because, while taking candy from a baby is reputedly easy, babies don't tend to have very good candy. Code that takes untrusted input needs to do two things. It needs to treat it exceptionally carefully and it needs to attenuate its privileges following a careful plan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Privilege and authority](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/privilege-and-authority?u=76281980&t=0)** - [Narrator] The E in STRIDE can stand for either elevation of privilege or expansion of authority. And while these are closely related concepts, it's worth a shift to the expansion framing. Let me explain why. I'll start with definitions. Privilege is the ability to make changes to security configurations, while authority is the ability to perform actions on the system, and that definition of privilege gets squishy. Is adding an account a matter of permissions, or being root, a privileged account, or is it specific privileges like [Windows](../../Glossary/Service/Windows.md) SE Create Authority is more clear. It's the number of files or APIs a program can access multiplied by the number of ways it can access each. A program with less authority has less flexibility and can do less damage, and so attackers want to expand their authority, out of long habit, I still talk about accounts like Root and Administrator as highly privileged, and sometimes I'll talk about more or less privilege. Think about what you and the people around you get from Precision. For clarity, we should all make a small effort to use the modern framing of expansion of authority.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** stride (1)
> **Speakers:** - [narrator] (1)

#### [Input corrupts](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=0)** - [Instructor] Attacks require feeding input to the target. Being able to send something that the [defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) didn't plan for is a necessary step in convincing the defender to do the wrong thing. Sometimes defenders do the wrong thing of their own volition, like allowing sign channels, but setting that aside attacker input, like all input, is parsed. When it's parsed, the parser can be confused in a couple of ways. Problems with length, token separation, and encoding decoding. The parser can make an assumption about length. This was the mistake exploited by the classic C Stack smashing attack and it's integral to de-serialization attacks, which expect that the next instruction lands on a certain boundary. The parser can find a token separator and break input into different [Tokens](../../Skills/Web%20Development/Tokens.md) than you expect. This happens, for example, when the attacker includes a semi-colon in something parsed by the shell. A parser can insert one of these meta-characters as it decodes input. The list is not comprehensive, but these are some of the main problems which happen. There's a deep engineering discipline to taking advantage of these issues. We've a track on exploit development techniques at Black Hat each year. What you need to remember
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/input-corrupts?u=76281980&t=94)** is to carefully distrust input, and to carefully push that input through pipes designed to consistently get you something you can use safely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Main forms of corrupt input](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=0)** - [Instructor] Let's make this concrete with some specifics. We'll talk about command arguments, including file names, interpreter commands, and processor instructions. Let's say we have a command, open file name. Do we want to allow the thing that sent us input to open every file that we can access? Sometimes that's fine. For example, in an interactive shell. Other times, our code builds filings with input. We might expect that it's going to open a file in the current directory. And the classic attack is to include ../../etc/password in the file name. Depending on what's parsing the file name, you might send it something with a quote mark. In which case, now there's an extra token. Depending on exactly how the arguments to open are parsed. A broader form of this happens with interpreters. That interpreter might be Bash or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) glue code, might be on a server or a serverless implementation. It might be a web browser. In the glue code we get command execution. In the browser, cross-site scripting. The input might be an extra token. Or it could exploit the order of operations. That includes that the shell will process commands in back ticks, subshells, and parentheses and other commands whose output is used in the command before executing the main command. Similarly, environment variables are parsed early.
>
> **[1:40](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/main-forms-of-corrupt-input?u=76281980&t=100)** As a developer, your code should parse conservatively and defensively choosing which metacharacters to allow through before parsing data tune interpreter. The list of metacharacters is specific. Choose the next parser, but generally A to Z, capital and lower, zero through nine are treated as literals. There are of course, exceptions to everything. What's more, these features, these metacharacters are incredibly powerful and useful. Unfortunately, they're useful to both you, and an attacker. Less broadly useful is the C convention of ending a string with a null. And the developer hostile length aware string commands like strncat and strncpy. An attacker who sends you more characters than you expect, can overflow a buffer and write instructions onto the stack. These attacks are not atomic units easily separated, but rather are a spectrum of ways in which attacks corrupt your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), python (1)
> **Tools:** bash (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. EOP Defenses

[↑ Back to Table of Contents](#table-of-contents)

#### [Ways to defend against EOP](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/ways-to-defend-against-eop?u=76281980&t=0)** - [Instructor] What makes input trustworthy? When it's immutable strings compiled into the code, it's trustworthy, nothing else is. By definition immutable variables can be modified by someone. If those someones are outside your trust boundaries, they may gain privileges to get things done by modifying your input, modifying your configuration files, your environment variables, your DNS or anything else that they can. To defend against these attacks, we have a set of defenses including validation, paranoid parsing and attenuation by your code, type safety and memory design at the compiler and operating system level and sandboxes and other isolation techniques at the operating system or deployment level. Some of these defenses fall on the developer writing the code, others on the architects selecting languages and environments. Yet others are choices that can be made by operations to buttress those defenses and provide defense in depth.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1)
> **Speakers:** - [instructor] (1)

#### [Validation to defend against elevation](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-to-defend-against-elevation?u=76281980&t=0)** - [Instructor] Let's start with validation, making sure the data is what you expect. There's a level at which this is simply good reliability practice. If the data isn't well-formed, what are you going to do with it anyway? By the way, that's text with extra diacritic marks. A lot of them. There's an argument that [HTML](../../Skills/Web%20Development/HTML.md) became one of the most popular technologies in the world because browsers were generous in their parsing. And now HTML is a freaking mess and parsing HTML is a morass of workaround for technical debt taken on in 1994. You don't want or need that debt. You can check your input and the details depend on the code you're writing. There's also a point where validation goes beyond reliability, checking for good-natured bad data, to evilly-crafted data, data that's encoded three times because your parser looks at the first two, pointers to pointers to pointers, new lines where you expect carriage returns, semi-colons in the midst of comment characters, nulls in the middle of text strings. And as you validate that the data is what you expect, you need to be explicit about your expectations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Env Vars:** html (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Validate for purpose to prevent elevations](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=0)** - [Instructor] So which of these strings on screen do you need to detect and reject? Validation happens for a reason and for a purpose. You can do validation as data comes in. No one would ever send more than 640K. As you send it out, checking is in two flavors. One is a courtesy to the next parser. The other is a hail Mary because you don't feel you can rely on that other parser to be safe and are trying to avoid sending an attack along to it. That second flavor, the hail Mary, is really hard. You have to assume your attacker can take your system into a lab and hone their attack in secret until it gets through. It's much better to improve that second parser when it's your code and so you can. When parsing garbage, you want to be paranoid about it. Writing your parser in a type safe language, putting it in a sandbox, and other defensive measures are probably appropriate. Another useful pattern is transformation. If you accept markdown and parse it into [HTML](../../Skills/Web%20Development/HTML.md), then the output HTML can be better formed than if you attempt to sanitize or clean out user-submitted HTML. You can canonicalize the markdown until it's stable and then transform it. Each time you hit open bracket, a pound, an ampersand,
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validate-for-purpose-to-prevent-elevations?u=76281980&t=96)** you can encode it into a harmless bit of HTML. Or better, you can take A to Z, lower, upper, zero through nine, and encode everything else. Thinking about what else goes into that list and why is a useful exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **Env Vars:** html (4)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Validation not sanitization for defense](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/validation-not-sanitization-for-defense?u=76281980&t=0)** - [Instructor] What's the difference between validation and sanitization? Sanitization is a lovely goal when you want to preserve the thing you're sanitizing. But let's be frank, input from the internet can be garbage. You don't want to sanitize garbage. You want to throw it away and tell the center why you threw it away. This is somewhat less obviously true in the era of [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) but Kerckhoff's principle still applies. The security of a system cannot rely on anything not easily changed. And we were just talking about how hard it can be to change a parser. So don't rely on security through obscurity. If you're telling the sender why you threw it away and they keep coming back with improved variants of their attack, you might want to track how far they're getting and maybe even fix the parser to be smarter about where they're going. If you track your errors, you can be confident that you're improving relative to real attacks that you can see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Attenuation in defense](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=0)** - [Instructor] What is attenuation? Let's imagine we have a command processor and it accepts commands of the form one, two, three with app one to ls, two to cat and three to rm. Another processor simply accepts commands. The client sends ls, rm or cat directly. The first processor is attenuating its privilege. It's narrowing what it's willing to do for its correspondence. Obviously Sudo does this, it is the poster child for doing so intentionally. But more to the point many programs control what they'll do on behalf of a client. This is most obvious with servers. A web server running as UID dub-dub-dub can run almost anything in user bin with any arguments at once but it doesn't pass that capability onto its clients the way the second processor does. Wiki sites are famous for letting anyone edit them but they restrict that to what's in the Wiki docs directory. They don't let just any one edit slash config. Similarly, clients like web browsers restrict what they'll do with input from the mail or web server. Part of the reason that [Microsoft Office](../../Skills/Web%20Development/Microsoft%20Office.md) and then PDF renderers were so heavily attacked is that they didn't see themselves as needing to restrict themselves in what they could do
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/attenuation-in-defense?u=76281980&t=96)** and so it was only after years of attack that [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) started adding sandboxes. To be fair another part of that delay is the restrictions can be grating for the person whose computer is controlled by them. It's good to ask questions like, what can your code do and what do you think it passes on to its clients? Do you have tests that look for ways it can be confused into acting on a client's behalf? For code you acquire what do you think it should do and what might it do if an attacker confused it?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** ls (2), cat (2), rm (2), sudo (1)
> **Env Vars:** uid (1), pdf (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Memory safety as a defensive tool](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=0)** - [Instructor] Memory safety is a useful tool for defenders. Many attacks that elevate privileges do that by gaining control of the flow of execution. Attackers can do that by putting [JavaScript](../../Skills/Software%20Development/JavaScript.md) into your context, injecting [SQL](../../Skills/Data%20Science/SQL.md) commands wherever your code expects data, by breaking up shell commands, or by writing directly into the processor stack. These attacks take advantage of a problem called code data confusion, but preventing it is only a subset of what memory safety gives you. The C language is notorious for how easy it is to shoot yourself in the foot. There's all sorts of things that modern languages take care of, but in C, you as the developer have to manage them all. These include the physical size of variables and their arrangement in memory. There's a whole skill of exploit development, but what I want to make sure you understand is simply that if an attacker can unexpectedly control a single bit of memory, they can often use that as a wedge to take full control of the computer. But as I said, modern languages take care of a lot of this for you with a property called type safety. Type safety means that an integer is an integer, and the system won't randomly cast it to be something else to be helpful. It means that each variable has a size and that the code won't randomly write more data
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/memory-safety-as-a-defensive-tool?u=76281980&t=94)** than you expect. Type safety defenses are not perfect. There's been a series of attacks under the label deserialization, often specifically [Java](../../Skills/Software%20Development/Java.md) deserialization, which just goes to show that bad marketing for an attack class can skew its impact. Immutable data can be even better than type safety. Because it's immutable, it's only ever set once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Definitions:** means that (2), is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Stack canaries to protect your code](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=0)** - [Narrator] Beyond managing variables, compilers, linkers, and related tools, can provide meaningful defenses. There's two basic [Forms](../../Skills/Web%20Development/Forms.md), validation and randomization. In this context, validation means adding checks to make sure memory is laid out the way the system expects it to be, while randomization moves memory around to make it harder for an attacker to plan their attack. A good example of a validation defense is a stack canary. This is a secret value that gets written onto the end of the stack. Many attacks work by overwriting the stack and replacing the return pointer that tells the CPU what to do when it's done with the instructions for a given function. So we put a canary on the stack and if the canary dies, so does our program. A moment's thought should lead you to why that's the right thing. Another validation style defense is to mark some memory as non-executable. When an attacker jumps to non-executable memory and tries to run it, the CPU won't allow that, and the code dies. Randomization defenses work because attacks are usually more than a few bytes by the time they're useful. Attackers need to be able to put the larger stages of their attacks into predictable places so they can call that code. And so recent operating systems and compilation tool chains have an ever-expanding set
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/stack-canaries-to-protect-your-code?u=76281980&t=95)** of randomizations. These defenses are a bit like potato chips, just one isn't satisfying. You want to enable as many as possible and only investigate which ones you should use if the full defense suite causes problems, which can include performance issues or breaking weird stuff that programmers used to do like address trampolines. Don't worry about what an address trampoline was. Realize that if one is still in your code that code is likely to be causing lots of problems and it's time to give it a well-earned rewrite. Clean up the technical debt, so you can take advantage of modern defenses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** cpu (2)
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)

#### [Sandboxes and isolation protect your environment](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=0)** - [Instructor] The fundamental job of an operating system is to control what code can do. This requires restricting its access to the [Hardware](../../Topics/Hardware.md), and it often involves separation into accounts. The operating system isolates hardware and the different accounts from each other. Similarly, a firewall isolates network segments from each other. Both the operating system and a firewall are semipermeable. Each allows some things to go through based on a set of rules, a policy. If you don't need a policy, you just need wire cutters. When you have policies, it's important for them to express what you want, for it to be easy to express those policies, and for it to be easy for both people and code to analyze those properties and, wait for it, it's hard to get all those in one universal package. So, for example, old-fashioned units accounts isolate from one another and the operating system protect root and ring zero from normal accounts. And those normal accounts have access to a slew of set UID programs but they also have access to interpreters like bash and arc. They have access to network tools like ping and telnet. Not really sure why your web server needs to telnet anywhere. And so for many years people have been building sandboxes to implement different policies
>
> **[1:32](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/sandboxes-and-isolation-protect-your-environment?u=76281980&t=92)** and to contain code in various ways. Chroot, Jail, AppArmor and control groups are all ways to isolate code. In fact, Docker uses control groups to give a Docker machine a certain limited view of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the system. All of these tools implement an isolation policy to protect the system from what a piece of code might do should it be malicious either because it was written that way, or because it was taken over.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** docker (2)
> **Env Vars:** uid (1)
> **Tools:** bash (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Bolt-on or built-in defenses](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/bolt-on-or-built-in-defenses?u=76281980&t=0)** - [Instructor] It's hard to build a sandbox that usefully encapsulates code that's not designed to work in a sandbox. Fortunately, the engineers building [Android](../../Glossary/Sdk/Android.md) and iOS we're able to look at the plague of malware that impacted desktops and design a very different set of sandboxes. Because there were no Android or iOS apps, they had far more flexibility than the creators of say Docker. When greenfielding or rearchitecting in a move to the cloud, it's very valuable to take strong advantage of the various available sandboxes. For example, AWS Lambda uses a mix of cgroups, namespaces, seccomp-bpf, iptables and chroot to provide you with a fairly robust sandbox with a documented shared responsibility model. And because you're rearchitecting for Lambda, you can take advantage of all of those things. In fact, you have to. Not all hope is lost if you're using a more traditional operating system. More and more functionality is coming in libraries which are adding protection and filtering. There are always more and better ways to build in protection against elevation of privilege and to protect your system from threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (2)
> **CLI Commands:** docker (1), aws (1)
> **Code Identifiers:** ios (2)
> **Env Vars:** aws (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Security by design](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=0)** - [Host] Each course in this learning path is designed to stand on its own and to be a helpful and deep guide to threats and [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md). Some people talk about Stride as a taxonomy or categories, and it's easy to fall into that trap. You can use it to think about the problems you hear about even when they don't fit into a single cubbyhole, more valuably STRIDE as a model of what can go wrong. You can use it as a monic to help you answer the question, what can go wrong? That question is, at the heart of threat modeling, thinking about new systems we're building to make them more secure, you now have two powerful tools in your toolbox. The four question framework helps us structure the work we do in threat modeling by asking, what are we working on? What can go wrong? What are we going to do about it? And did we do a good job? And Stride helps us answer again that question of what can go wrong? These two tools may be all you need. Many people will use the four question framework and Stride to secure their systems. Others will want to go deeper. And for those, I want to share a few resources. First, there's a threat modeling manifesto. A group of us released this to share the values, patterns, and anti-patterns that we've observed over our careers.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-denial-of-service-and-expansion-of-authority/secruity-by-design?u=76281980&t=96)** For a more comprehensive view, check out my books. "Threat Modeling, Designing for Security" and "Threats: What every engineer should learn from Star Wars." And I deliver much more in depth, day long, two day, sometimes even longer, training courses for organizations where they really want to go beyond what's in these courses. With that, I believe that you are now set up for success. I encourage you to go forward and make things more secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (5)
> **CLI Commands:** make (2)
> **Env Vars:** stride (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [host] (1)


## Instructor

- [Adam Shostack](../../Instructors/Cybersecurity/Adam%20Shostack.md)

## Skills Covered

- Threat Modeling
- Cybersecurity

## Path Context

### In [Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)
← [Threat Modeling- Information Disclosure in Depth](Threat%20Modeling-%20Information%20Disclosure%20in%20Depth.md) | **6 of 6**

## Appears In

- [Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Threat Modeling- Repudiation in Depth](Threat%20Modeling-%20Repudiation%20in%20Depth.md) — Cybersecurity, Threat Modeling
- [Securing Containers and Kubernetes Ecosystem](../DevOps/Securing%20Containers%20and%20Kubernetes%20Ecosystem.md) — Cybersecurity
- [Threat Modeling for AI-ML Systems](../Artificial%20Intelligence%20(AI)/Threat%20Modeling%20for%20AI-ML%20Systems.md) — Threat Modeling
- [AI in Cybersecurity- The Future of Red Teaming and Blue Teaming](../Artificial%20Intelligence%20(AI)/AI%20in%20Cybersecurity-%20The%20Future%20of%20Red%20Teaming%20and%20Blue%20Teaming.md) — Cybersecurity
- [Building a Cybersecurity Awareness Program](Building%20a%20Cybersecurity%20Awareness%20Program.md) — Cybersecurity

---

[↑ Back to top](#)