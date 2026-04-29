---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-cisco-firewall-technologies-19313765
url: "https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 10/29/2024
learners: 46310
skills:
  - Network Security
  - Cisco Firewall Security
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHKo9yS4P2Vnw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664215618381?e=2147483647&amp;v=beta&amp;t=IWJMwHVxsYt6tAmV5mICp7dp6BNT9rZ2SXROc7Mke4o"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Cisco Network Security- Safeguarding Network Integrity and Data]]'
prev_courses:
  - '[[Cisco Network Security- Secure Routing and Switching]]'
next_courses:
  - '[[Cisco Network Security- Intrusion Detection and Prevention]]'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":5,"total":7,"prev":"Cisco Network Security- Secure Routing and Switching","next":"Cisco Network Security- Intrusion Detection and Prevention"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-security
  - skill/cisco-firewall-security
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Cisco%20Firewall%20Technologies.md)

![Cisco Network Security: Cisco Firewall Technologies](https://media.licdn.com/dms/image/v2/C4E0DAQHKo9yS4P2Vnw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664215618381?e=2147483647&amp;v=beta&amp;t=IWJMwHVxsYt6tAmV5mICp7dp6BNT9rZ2SXROc7Mke4o)

# Cisco Network Security: Cisco Firewall Technologies

> Are you looking to learn the basics of configuring a firewall to secure your Cisco network? In this course, security ambassador Lisa Bock focuses on the most essential Cisco firewall technologies. Explore the core concepts of a firewall, what it is, and how it works in a variety of distinct security contexts, as Lisa shows you how to configure a basic firewall, choosing the option that’s best for 

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765) | 1h 45m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Review Firewall Technologies]]** (6 videos)
- **[[#3. 2. Compare Firewall Types]]** (4 videos)
- **[[#4. 3. Manage Access Control Lists]]** (4 videos)
- **[[#5. 4. Implement NAT on Cisco ASA]]** (4 videos)
- **[[#6. 5. Examine Zone-Based Firewalls]]** (4 videos)
- **[[#7. 6. Review Firewall Features on a Cisco ASA]]** (8 videos)
- **[[#8. Conclusion]]** (1 videos)

### 1. Introduction

#### Allowing only authorized connections
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=0)** - [Lisa] Every minute of every day, our systems are bombarded with attacks designed to gain unauthorized access to your network, to steal, modify, or hold systems hostage.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=13)** As a result, using firewalls are a critical component of any system.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=18)** They're designed to stop a malicious actor from moving through your network.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=24)** In this course, I'll review firewall services and compare the different types of firewalls.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=30)** I'll outline how to use access control lists.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=34)** I'll show you how to implement network address translation and configure zone-based firewalls.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=42)** I'll finish with a review of the firewall features on a Cisco adaptive security appliance.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=48)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=53)** Are you ready to lock down your organization?
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=56)** Then let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [lisa] (1)

#### Discovering resources
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=0)** - [Instructor] Cisco Network Security: Firewall Technologies is an intermediate-level course.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=6)** The course is designed for network administrators, engineers, managers, students, and anyone with an interest in learning more about Cisco Network Security.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=16)** Participants should have a solid knowledge of networking fundamentals, devices, cables, along with various topologies, and have completed CCNA training prior to starting this course.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=30)** I cover a lot of information, but I have provided some files for you.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=34)** You'll go to the exercise file on the welcome screen where you will see the following.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=39)** You'll see a file with links so that you can follow along.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=43)** I have included this file with the links to resources that I have referenced in the course.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=48)** You'll also find some Packet Tracer exercises and a challenge document.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=54)** During each segment, I will identify a challenge using the following icon along with the question from the video.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=61)** Use the document to write out responses to challenges that I cover throughout the course.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=67)** You'll find the Exercise File on the welcome screen.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=71)** I am super excited to bring you this series on Cisco Network Security so you can improve your skills needed to properly secure an organizations infrastructure.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=82)** So sharpen your pencil and let's start the learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** super (1), let (1)
> **Exercise Files:** exercise file (2)
> **Env Vars:** ccna (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Obtaining Packet Tracer
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=0)** - [Instructor] During the course, I'll demonstrate some of the concepts using Packet Tracer, which is available here at the Cisco Networking Academy.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=9)** You'll sign up, and then you can get your own copy of Packet Tracer, along with the samples that are included.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=15)** I did a search for Packet Tracer, which brought me here.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=18)** But first let me show you the courses that are free.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=22)** Courses include networking, programming, Internet-of-Things, infrastructure automation, and cyber security.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=29)** These are self-paced and I encourage you to take advantage of this.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=34)** But now once on this page, you see that we can download Packet Tracer when you enroll in one of the three self-paced Packet Tracer courses.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=43)** If you scroll down, you can see the three courses and you can select one or all of them.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=49)** Now, once you download and launch Packet Tracer for the first time, it will make you re-authenticate with Cisco Net Academy.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=56)** Now, once you authenticate, then you can begin using Packet Tracer.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=60)** If you explore the interface, you see some of the common menu choices, and then in the center, you can see the logical drawing canvas.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=69)** In the lower left-hand corner are the devices that you can use to build your network.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=75)** I'll show you one more thing.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=76)** Go to File, and then Open Samples.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=79)** And there are plenty of samples that you can choose from to learn a little bit more about skills you would like to improve on.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=86)** For example, we'll select Programming, and they'll provide a little bit of instructions and you can follow along, and again, encourage you to take a look at the samples.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=97)** So now that we've downloaded and install Packet Tracer, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), self (2), this. (1), interface (1)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Review Firewall Technologies

#### Understanding firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=0)** - [Narrator] I'm here at this website, Kaspersky Cyber Threat real-time map, where we can see that cyber attacks occur in significant numbers every single minute of every single day.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=14)** If I go to statistics, I can see detections per second are staggering.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=20)** Because of the amount of cyber attacks that occur on a daily basis, in most organizations, a firewall is used as a first line of defense.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=31)** A firewall is a hardware or software based method to control incoming and outgoing traffic.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=38)** Firewalls filter traffic using access control lists that either allow or deny traffic on a network or host based on a set of rules.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=48)** A firewall gives the administrator greater control over the types of traffic originating from inside and outside the protected network.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=57)** Today, there are many different types of firewalls, from software based, such as the Windows firewall, to dedicated appliances that defend an enterprise network.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=69)** On an enterprise network, you'll see some of the following types of firewalls.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=74)** A packet filtering firewall is a simple stateless firewall that monitors layer three and sometimes layer four traffic.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=84)** A stateful firewall is more powerful as it allows or blocks traffic based on state, port and protocol.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=92)** Stateful firewalls monitor connections in an active state and maintains this information in a state table.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=101)** And an application gateway or proxy firewall will filter information at layers three, four, five, and seven.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=109)** This type of firewall is used if a company is using a web server so that clients send requests to the proxy firewall instead of directly interacting with the server, and next generation firewalls are used to proactively defend against complex threats by adding intrusion prevention and application awareness to defend against evolving security threats.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=135)** Firewalls monitor traffic based on the source, destination and the type of traffic.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=141)** There are three common firewall configuration options.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=145)** One is called public and private.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=148)** Now, this is a simple configuration where the public network or internet is untrusted and the private network is trusted.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=158)** Any traffic going out of the private network such as webpage or mail or DNS is allowed.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=165)** However, any access directly to the private network is blocked.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=171)** A perimeter network provides a barrier between a trusted network and an untrusted network such as the internet.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=179)** When we take a look at this, this firewall typically has one inside interface connected to the private network, one outside interface connected to the public network, and one to the perimeter network.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=193)** Now, how does the data flow?
>
> **[3:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=195)** Well, any traffic that's going between the perimeter network and the public network is selectively permitted, and any traffic that originates from the private network to go to either the perimeter network or the public network is inspected and permitted with little or no restriction.
>
> **[3:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=215)** However, any traffic from either the perimeter network or the public network that directly tries to access the private network is blocked.
>
> **[3:44](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=224)** And zone based policy firewalls use the concept of zones, which represents a group of one or more interfaces that have similar functions or features.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=236)** Zones are used to identify how you should apply a firewall rule or policy.
>
> **[4:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=242)** Now let's test your knowledge.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=244)** On an enterprise network, there can be several types of firewalls.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=249)** List and describe the four main types of firewalls and how they work to protect the network.
>
> **[4:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=255)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** private (7), public (6), interface (2), protected (1), this, (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** such as (3)
> **UI Navigation:** go to (2)
> **Env Vars:** dns (1)
> **Speakers:** - [narrator] (1)

#### Recognizing security contexts
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=0)** - [Instructor] Imagine a complex networked environment, and then within that environment, you have Accounting, Sales, and Marketing, each with their own needs.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=11)** The Accounting department uses specialized proprietary software and needs an open connection to the vendor.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=18)** Marketing does a lot of work with social media, so they'll need access to Facebook, Twitter, and LinkedIn.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=24)** But, concurrently, we don't want the Sales department to go to sites such as Facebook or YouTube.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=31)** How do we handle the three departments?
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=34)** Well, we could implement a firewall for each of these departments, but if we have a Cisco Adaptive Security Appliance, we can use security context.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=44)** Security context give us the ability to create multiple virtual firewalls within the physical ASA.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=52)** The ASA acts like a hypervisor.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=55)** Each context functions as an independent device with its own interfaces, administrators, and security policy.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=64)** In addition to creating virtual firewalls within the ASA, the administrator can create resource management classes.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=72)** The resource management classes can limit resources, such as concurrent connections and number of application inspections.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=81)** For example, for the Gold class, we can limit the connections to 10% and allow 5 site-to-site VPN tunnels.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=90)** To create a basic configuration for a security context on the ASA, you'll need to create a dedicated admin context.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=98)** And then once a user logs in, they'll have administrator rights to access the system and all other context.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=106)** So let's step through a configuration example.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=109)** First, we'll want to create a context name, and you'll probably want to add a description for this context.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=116)** Allocate a physical_interface for the context, and, optionally, assign the context to a resource class, and then you'll need to identify the URL where the system obtains the context configuration.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=130)** We can also show context and run this command to see the total active security context, and also identify where the configuration file resides.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=141)** And I'm here at this resource where you can find out a little bit more about configuration of Multiple Context Mode.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=148)** And I'm here for licensing on security context.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=152)** Now they're available on most ASA models, but you may need extra licensing, and some features aren't supported.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=159)** But, in general, security context give us the ability to create multiple virtual firewalls within a physical ASA.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=168)** So, now, let's test your knowledge.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=170)** Your company has four departments, each with specific needs, such as concurrent connections and number of application inspections.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=179)** How can the ASA manage multiple departments?
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=183)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** asa (7), vpn (1), url (1)
> **Analogies:** such as (3), imagine (1), for example (1)
> **Code Keywords:** class, (2), let (2)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** physical_interface (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Reviewing CBAC
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=0)** - [Instructor] The concept of a firewall is simple.
>
> **[0:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=3)** It will examine packets and either allow or deny traffic based on a set of rules.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=10)** For example, I've highlighted a few.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=13)** Allow traffic to FTP server.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=15)** Deny all inbound ICMP ECHO request traffic.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=21)** In contrast, content-based access control uses inspection rules that monitor the traffic for user requests.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=30)** For example, the client needs to telnet 172.30.1.50.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=37)** The content-based access control will create a temporary access list at the firewall interface.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=45)** The connection will remain open during the session, and then content-based access control will remove the firewall entry once the session is complete.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=56)** A key component of this is the inspection rules.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=60)** Now, each connection is considered a session.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=63)** Content-based access control uses inspection rules to inspect the traffic.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=69)** It then manages state information for TCP and UDP sessions.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=75)** The device uses the state information to automatically create a return path for the traffic.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=82)** Now, another key component is tracking the sequence numbers in all TCP packets.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=88)** And so that there isn't a spoofing attack, it will drop packets with sequence numbers that are not within bounds.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=96)** To configure content-based access control, you'll configure the access list and the inspection rules, then apply the lists and the inspection rules to the interfaces.
>
> **[1:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=108)** So to configure the access list, you'll go to Global Config Mode and create an access list for use by the firewall, and here's an example of the command.
>
> **[1:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=119)** For the inspection rules, you'll configure firewall inspection rules for TCP and UDP traffic and any specific application protocols.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=129)** And here we see the command.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=132)** Now once they're created, you'll then apply the access control list and inspection rules.
>
> **[2:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=138)** So go to the interface configuration mode for the inside network interface on your router.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=144)** So here we go to the interface and you would identify the type and the number, and then you would apply your IP access group, and then your inspection.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=155)** Okay, now let's test your knowledge.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=157)** Users in the marketing department need to be able to access multiple websites as part of their job function.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=165)** Describe how content-based access control can be a viable option instead of using a classic access control list.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=174)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (3), udp (2), ftp (1), icmp (1), echo (1)
> **Code Keywords:** interface (4), let (1), function (1)
> **Prerequisites:** configure (4)
> **UI Navigation:** go to (3)
> **Analogies:** for example (2)
> **Versions:** 172.30.1 (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Configuring CBAC
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=0)** - [Speaker] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=7)** In this challenge, we'll do a basic firewall configuration using content-based access control to allow Telnet traffic.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=16)** You'll configure and apply access lists and inspection rules to the interfaces.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=22)** You'll see how the ASA adds another layer of protection.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=26)** And once the ASA is configured, we can see that the Telnet traffic will be allowed.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=32)** We'll finish up by seeing how content-based access control inspection keeps track of the sessions.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=39)** You'll find the instructions on the challenges worksheet, but let's get you started.
>
> **[0:44](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=44)** To get this exercise, you'll go to File, and then Open Samples.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=52)** Then you'll go to Cybersecurity, ASA, and then select enable outside to inside.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=60)** Then you can rearrange the layout so that you can see the instructions.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=64)** My font size is larger so that you can see it, which you can modify as well.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=69)** I also saved it locally so that I could preserve the sample.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=73)** Now I might want to label a couple of things.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=75)** For example, I'm going to label the IP address of the internal router.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=81)** We'll select Ad Note, and add the IP address 192.168.1.2.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=92)** And here we see the ASA.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=94)** The adaptive security appliance is a stateful firewall and keeps a connection table for all the connections which flow through the device.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=103)** Then you'll follow the rest of the instructions.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=106)** So pause the video and complete the challenge.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=110)** This challenge should take you about 15 minutes.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=114)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** asa (4)
> **Code Keywords:** let (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Versions:** 192.168.1 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)

#### Solution: Configuring CBAC
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=0)** - [Instructor] Okay, let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=8)** All right, now, the first thing I want to do is, on the edge router, which is router one, we're going to configure and apply access list and inspection rules to the interfaces, so just double click here.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=22)** Enable, config T, access list 101 permit TCP any any equals Telnet, so that will allow Telnet traffic.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=38)** And we'll add an inspection rule, and now we'll configure the interface fast ethernet zero/zero.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=48)** IP access group 101 in, and then I'll tab up and just modify that so it's IP access group 101 out.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=58)** Then we'll add the inspection rule, IP inspect in-out-in in, and then I'll tab up and then just change that to out, and then we'll exit.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=79)** All right, now, let's follow the other instructions.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=83)** From the internal router, we'll Telnet to the external router, so over here, and we'll go to the command line.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=93)** Password is Cisco, Telnet 172.16.3.2, and we're in.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=103)** Now, we'll go to the external router, and we'll try to Telnet to the internal router.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=110)** Password is Cisco, Telnet 192.168.1.2.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=118)** Now, as you see, the connection has timed out.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=122)** Well, now we have to modify the ASA.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=126)** So we'll go into the ASA and the command line.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=130)** There is no password.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=135)** Config T, and we'll create an access list.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=140)** Access list 101 extended permit TCP any any equals Telnet, and now we'll apply that access group.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=150)** Access group 101 in interface outside.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=155)** Okay, and now we'll go back to the external router.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=160)** Now, as you see, we're successful, so we'll do one more thing and we'll check the inspection on the edge router.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=168)** So we'll go back in here, and once we issue show IP inspect statistics, we can see the information on what transpired during that session.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=183)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (2)
> **Env Vars:** tcp (2), asa (2)
> **Versions:** 172.16.3 (1), 192.168.1 (1)
> **Tools:** command line (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** configure (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Employing Cisco AutoSecure
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=0)** - [Instructor] In this demo, I'll show you how to use Cisco auto secure.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=5)** The auto secure command will guide you through a semi interactive session to secure the management and forwarding planes.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=13)** Cisco auto secure will disable unneeded services, provide logging for security, and secure access to the router.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=22)** Now you may have thought you hardened the router or configured it correctly.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=25)** For example, I'm just going to open this router that I just booted up.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=30)** And a lot of times you'll see this prompt, Would you like to enter the initial configuration dialogue?
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=36)** And maybe you said no, and then you did some configuration but it's not really secure.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=43)** So we want to do the auto secure feature and I'll just go into this router and type enable.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=51)** And now we're ready.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=52)** And what it's going to do is harden the security of the router.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=56)** We're going to enter the command auto secure and I'll move this over so we can see the command two words and press enter.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=65)** The first question is, are you going to be connected to the internet?
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=69)** And I'll say, no, and you can just type in.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=72)** And then here is this banner that we would want to put on.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=77)** Enter the security banner and put the banner between K, and K, where K is any character.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=84)** Now we need to be careful because we can't use that character in the text.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=89)** So first I'm going to select this right here.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=92)** Unauthorized access to this device is prohibited and I'll select copy, and I'll use an at symbol and then paste and another at symbol and then enter.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=105)** And now I have my banner.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=107)** Now I'll want to enable secret.
>
> **[1:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=109)** And for this exercise, we'll use simple passwords and I'll use Cisco.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=115)** And then we confirm and I'll type Cisco again.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=120)** And for this we'll use ciscokid and now configure local user database enter the name and I'll put admin and enter the password.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=135)** And this time I'll use ciscosec.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=140)** And again.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=142)** Now blocking period when login attack detected.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=146)** And we'll just put a question mark, cuz I'm really not sure.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=150)** Oh, okay.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=151)** Here we have a decimal number between 1 and 32,767.
>
> **[2:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=157)** I'll just choose a random number, 600.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=161)** and then I'll press enter and maximum login failures with a device.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=167)** And we'll just say three, because that's generally the rule of thumb, but you can change that, press enter.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=174)** Maximum time period for crossing the failed login attempts.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=178)** And we'll just say three.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=181)** Configure SSH server.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=183)** And as you see, it's defaulted to yes.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=185)** So we'll say yes and we'll press enter.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=189)** Enter the host name and we'll call it secure router or we'll abbreviate, SecRouter and we'll press enter.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=199)** enter the domain name and I'll say security.local And press enter.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=207)** Now configure the content based access control firewall feature.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=212)** And we'll say yes.
>
> **[3:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=214)** And we'll just see, put a Y, that means yes.
>
> **[3:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=217)** And now you see all the configuration.
>
> **[3:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=220)** It's pretty much filled in everything for me when I said yes, it gave all the parameters of at least providing a little bit more security to the router.
>
> **[3:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=230)** The last thing it will say is apply this configuration to running config and you'll see the default is yes.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=236)** And I will say yes, I would like that.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=239)** So now that's all you need to do.
>
> **[4:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=241)** And I'll just close this for now.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=244)** The router now is a little more secure than it was.
>
> **[4:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=247)** So as you can see, it's very easy to use the Cisco auto secure but keep in mind.
>
> **[4:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=253)** I put a little note here that auto secure configuration enhances the security of the router but it won't make it absolutely resistant to all security attacks.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (3)
> **CLI Commands:** ssh (1), make (1)
> **Warnings:** be careful (1), keep in mind (1)
> **Env Vars:** ssh (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Compare Firewall Types

#### Filtering packets
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=0)** - [Instructor] Stateless firewalls are simple packet filters that inspect packets as they pass through the firewall.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=7)** As we see in this graphic, a stateless firewall focuses on Layer 3 and Layer 4 of the OSI model.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=16)** The firewall will check the source and destination address, protocol, port, and other static values.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=23)** It's called a stateless packet filtering firewall because it doesn't monitor traffic patterns or data flows or keep track of the state of network connections.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=35)** The firewall will treat each packet in isolation and doesn't consider packets previously processed.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=42)** The firewall is designed with access control lists that either allow or deny packets, for example allow outbound SYN packets, destination port equals 80, or allow inbound SYN-ACK packets, source port equals 80, or deny inbound SYN packets, destination port 80.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=64)** And if identified, that packet will be blocked.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=68)** Now, stateless firewalls have some limitations in that they must use complex access control lists that can be difficult to implement and maintain.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=78)** They're unable to properly filter fragmented packets and packet filters don't do any payload inspection.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=86)** For example, it won't block a string value that is associated with a buffer overflow.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=92)** However, there are several benefits.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=94)** It pretty much uses a straightforward permit or deny rule set.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=99)** It doesn't degrade network performance, and it's easy to implement and is supported by most routers.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=106)** Stateless firewalls must be very restrictive to prevent most attacks.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=112)** However, they can enhance security and protect resources from malicious or untrusted packets.
>
> **[1:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=119)** Now let's test your knowledge.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=121)** One of your team members feels that using a stateless firewall is sufficient protection and asks you what you think.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=128)** Outline some of the considerations and limitations of using a stateless firewall.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=134)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** syn (3), osi (1), ack (1)
> **Code Keywords:** pass (1), static (1), let (1)
> **Analogies:** for example (2)
> **Ports:** port 80 (1)
> **Speakers:** - [instructor] (1)

#### Monitoring the state
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=0)** - [Instructor] Stateless firewalls are faster and perform better under heavier traffic loads.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=6)** However, stateful filtering is better than packet inspection as each packet is based on the context of an active state or connection.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=16)** Similar to stateless packet filtering, stateful inspection occurs at layer three and four of the OSI model and it will check source and destination address, protocol, port, and other static values.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=31)** But in addition, it will also check values such as sequence numbers and other indications of a current state.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=39)** Once a new connection is initiated, the firewall will check the access control list and either allow or deny that packet.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=47)** If there is an existing connection, then the firewall will check the state table.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=52)** This session is monitored in the state table, which keeps track of all the current connections.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=58)** Now, here we see a three-way handshake to begin a session, beginning with a SYN, SYN-ACK, and ACK.
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=66)** Now, stateful inspection will monitor the state of the connection as it begins and as it transpires.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=73)** But it also monitors the close of the connection with the passage of the FIN and FIN ACK packets.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=81)** Now, each session is monitored in a state table that keeps track of all current connections.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=86)** Now, here in this graphic, you can see an example of what a state table might look like.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=92)** But let's take it to our own system and see what it would look like in the command line interface of our own system.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=100)** I'll issue the command netstat and let it run.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=105)** Now, here we see all of our active connections and either on the local address or the foreign address, we see endpoints.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=112)** And those are known as sockets, which consist of a unique IP address and port number.
>
> **[1:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=119)** Stateful firewalls have several benefits.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=122)** However, there are a few challenges.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=125)** Challenges with stateless protocols, such as UDP and ICMP.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=130)** And stateful filtering occurs at layers three and four of the OSI model.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=135)** And as a result, the application layer isn't protected.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=140)** And purely stateful inspection doesn't ensure authentication methods.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=145)** Now let's test your knowledge.
>
> **[2:27](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=147)** Describe how a stateful firewall works.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=151)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** ack (3), osi (2), syn (2), fin (2), udp (1)
> **Code Keywords:** let (3), static (1), interface (1), protected (1)
> **Analogies:** such as (2), similar to (1)
> **Definitions:** is an  (1), known as (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Examining the application layer
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=0)** - [Instructor] Stateful firewalls work at Layers 3 and 4 of the OSI model.
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=6)** However, the application layer isn't protected.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=10)** An application layer firewall is an extension to stateful packet inspection as it acts as a proxy to monitor and filter requests not only at Layers 3 and 4, but Layers 5 and 7 of the OSI model.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=26)** The application layer firewall is application-aware and examines the entire packet, not just the network address and port number.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=36)** Being application-aware means that instead of treating all HTTP requests equally, the firewall is able to truly understand what is happening and evaluate all the different types of HTTP requests and the payload such as video, text, and HTML, or image.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=58)** A proxy firewall has its own IP address.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=62)** Two connections are established, one between the packet source and the firewall and another between the firewall and the packet destination.
>
> **[1:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=71)** The proxy intercepts incoming packets, examines the payload, and then relays the permitted packets to the destination.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=81)** As a result, the client and server never communicate directly with one another.
>
> **[1:27](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=87)** The proxy can handle complex protocols by doing deep packet inspection to monitor incoming traffic for signs of an attack.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=96)** It creates a single point to assess threat levels represented by application protocols and put attack detection and validity checking in place and will drop any suspicious data.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=110)** Application layer firewalls can handle data requests and responses and control the execution of applications and block malicious code.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=120)** As a result, they have more overhead than simply inspecting packets at the network layer.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=126)** And as a result, they are slower than stateful inspection.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=131)** Because they establish an additional connection for each outgoing and incoming packet, the firewall can become a bottleneck and cause a degradation of performance or become a single point of failure.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=145)** Even still, an application layer firewall is a better approach, as it's an extension of stateful packet inspection and acts as a proxy, capable of deep packet inspection and preventing direct contact with other systems.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=161)** Now let's test your knowledge.
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=163)** Describe ways an application layer firewall can provide more robust protection.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=169)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** osi (2), http (2), html (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Code Keywords:** protected (1), let (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Comparing modes of deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=0)** - [Instructor] On an Adaptive Security Appliance, there are two methods of firewall deployment.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=5)** Routed, which acts as a router between interfaces.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=9)** And transparent, which acts as a layer two device to provide secure bridging.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=15)** How you deploy the ASA will depend on the network requirements.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=19)** Here on the left, we see routed mode.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=22)** And here on the right, we see bridged mode.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=25)** The two look similar, yet have distinct differences.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=29)** In routed mode, the ASA acts as the default gateway for the subnet and a router between connected networks.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=37)** It provides a layer three boundary between zones and interfaces.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=42)** And supports either static or dynamic routing using RIP, Open Shortest Path First, EIGRP, and BGP.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=51)** Forwarding is done with the destination IP address.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=55)** And the time-to-live value in the IP header is decremented as it passes through the device.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=62)** Routed mode is the default mode for an ASA.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=65)** And it's the most commonly used.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=68)** Each interface is a separate network.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=72)** Traffic is allowed or denied according to the rules.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=76)** And the firewall is a routed hop and acts as the default gateway for the hosts.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=82)** Routed mode is the default mode.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=84)** However, there are times when transparent mode simply makes more sense.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=89)** In transparent mode, the ASA operates as a layer two device to provide secure bridging for layers two through seven.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=98)** Because they are not used as a layer three gateway and not seen as a router hop to connected devices, transparent firewalls are known as a bump in the wire.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=110)** And they act as a stealth firewall.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=113)** Unlike routed mode, which requires an IP address for each interface, a transparent firewall has an IP address assigned to the entire device.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=124)** And forwarding is done with a destination Mac address.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=129)** In transparent mode, we can pass certain types of traffic that might be blocked by a routed firewall.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=136)** Transparent mode has the same inside and outside subnetworks.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=141)** The firewall is no longer the gateway, but one key benefit is that you can insert a transparent firewall onto the network without making any IP address changes on the other devices.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=155)** Now, let's test your knowledge.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=158)** There are two ways to deploy a firewall on the ASA.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=162)** Outline the difference between routed and transparent mode.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=167)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** asa (5), rip (1), eigrp (1), bgp (1)
> **Code Keywords:** interface (2), static (1), pass (1), let (1)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Manage Access Control Lists

#### Understanding ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=0)** - [Instructor] An access control list is a method used by routers and switches to block unwanted traffic and prevent network attacks.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=9)** An access control list has one or more access control entries that are applied to a protocol, source and destination IP address, or network range that either allows or denies the packet as it's traveling through the device.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=25)** In addition to defending the network, access control lists can be used for other purposes, such as bandwidth control, classify traffic for quality of service, or establish an IPsec tunnel.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=39)** To configure an access control list, you first define the access control list, specify the filter statements, and then apply the access control list to a specific interface.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=51)** There are several types of access control lists.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=54)** However, on a Cisco IOS, the two main types are standard and extended.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=60)** First we'll talk about standard access control list.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=63)** Now a standard access control list is a simple filter that is used when you want to permit or deny traffic from a specific IP address or a specific source network.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=75)** To create a standard access control list, you first identify the access control list by applying a number between one to 99 or between 1300 and 1999.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=89)** Then you enter the condition statements permit or deny, so the device knows how to treat the packets that match the conditions.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=97)** And here we see the syntax and here we see an example.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=101)** Then you'll need to apply the access control list to an interface using this syntax.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=107)** And here is an example.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=110)** A standard access control list filters only on source IP addresses, so its uses very limited.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=117)** Now because of the limitations of a standard access control list, most prefer using an extended access control list, which has advanced filtering.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=128)** In addition to filtering on source and destination IP address, you can configure the access control list to filter on protocol, port numbers, as well as additional parameters.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=140)** To configure an extended access control list, you first begin by applying a number between 100 and 199 or between 2000 and 2699.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=152)** Then enter the condition statements permit or deny to indicate how the device treats the packets that match the conditions.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=161)** Now here is the syntax and here is an example.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=165)** And then you'll apply the access control list on a specific interface using this syntax.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=171)** And here is an example.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=173)** Then once done, to check the definitions of all configured access lists, you would use the command show access list.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=183)** A standard access control list is very limited, as it only filters based on source IP addresses.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=190)** Therefore, in most cases, you will use an extended access control list.
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=196)** Okay, now let's test your knowledge.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=199)** Compare the difference between a standard and extended access control list.
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=205)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Definitions:** is an  (3), is a  (2)
> **Code Keywords:** interface (3), let (1)
> **Prerequisites:** configure (3), you'll need (1)
> **Env Vars:** ios (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Working with IPv6 ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=0)** - [Instructor] Networks are slowly migrating to IPv6.
>
> **[0:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=4)** In this segment, we'll review some of the differences between an IPv4 and an IPv6 access control list.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=12)** We'll also review methods to create and implement an IPv6 access control list.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=19)** Now, the functionality of an access control list in IPv6 is similar to using an access control list in IPv4.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=28)** For example, they allow filtering based on source and destination addresses that are traveling inbound and outbound to a specific interface.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=38)** In addition, similar to the extended access control lists in IPv4, an IPv6 access control list supports filtering based on IPv6 option headers, along with upper-layer protocol information to provide more granular control.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=58)** Now, unlike a number in IPv4, an IPv6 access control list must be configured with a name.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=67)** Now to configure an IPv6 access control list, use the IPv6 access-list command to enter into IPv6 access control list configuration mode.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=82)** Next, you'll use the appropriate syntax to configure each access list entry to specifically permit or deny traffic.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=91)** And then finally, you will apply that IPv6 access control list to an interface using the IPv6 traffic-filter command.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=101)** Now, here's an example of the syntax.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=104)** Of course, you first create that using the IPv6 access list, and then you use a name.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=111)** And in the second section here is where we see the syntax variables.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=116)** And there are more because it seems to have wrapped everything in that syntax for IPv6.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=123)** We see a lot of syntax examples.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=126)** Let's talk about a couple of those.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=128)** Deny or permit, well, that simply is defining whether to deny or permit the packet.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=134)** Protocol.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=135)** Now this is the name or number of an internet protocol.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=140)** Any will match all addresses.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=143)** And host, this is the source or destination host address to deny or permit.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=149)** Now, let's just take a look at what it would look like in the command line interface.
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=154)** So let's go to router three.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=160)** And I'll enable and config t.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=165)** Now, I'll enter into the access list mode.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=170)** IPv6 access-list SAMPLE.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=174)** And remember, we have to use the name.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=176)** Now we're in the mode, and I'll just use a question mark to see what options we have.
>
> **[3:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=181)** And now, we see the options, but let's just do one more.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=184)** I'll go deny, and then use a question mark.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=188)** And there, we can see the options for deny.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=192)** Now because the concept of an IPv6 access control list might be new to you, I found a resource that might help your understanding.
>
> **[3:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=200)** Here at Cisco, "Access Control Lists", and here specifically, "IPv6 Access Control Lists".
>
> **[3:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=210)** Now, let's test your knowledge.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=212)** To reduce the potential for attacks against IPv6 infrastructure and protocols, the team lead has tasked you to create an IPv6 access control list on the internal routers.
>
> **[3:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=226)** List three main steps to configure and apply an IPv6 access control list.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=233)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (3), finally, (1)
> **Analogies:** similar to (2), for example (1)
> **Prerequisites:** configure (3)
> **Env Vars:** sample (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Configuring IPv6 ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=5)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=7)** In this challenge you are going to configure IPv6 access control lists.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=13)** Now you'll go to the exercise file and open the Packet Tracer file.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=18)** You'll then follow the instructions.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=20)** Let's get you started.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=23)** Once you open the file you'll want to save it locally in a different name as to preserve the file.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=29)** Then you'll go through and follow the instructions as listed here.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=32)** And I'll just scroll down.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=37)** And periodically you can check the results to see how well you're doing.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=41)** This tells you the assessment items.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=46)** If you want to print this, you can right click and say, Print to PDF where you can save it locally and then print the file.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=54)** So pause the video, grab the file, and let's get started.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=59)** This challenge should take you about 30 minutes.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=62)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **UI Navigation:** go to (1), open the (1), scroll down (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (quirky music) (1)

#### Solution: Configuring IPv6 ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=0)** - [Instructor] Okay, let's check our work.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=7)** So I've opened the instructions and I'll dock them so we can more easily follow along.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=13)** And I'll scroll up and we see that we need to create an access control list because one of the computers is causing a denial of service attack against Server3.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=25)** So here we're going to create an access control list that will block HTTP and HTTPS.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=31)** So we're going to go to Router1, to the command line, Enable and config T.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=43)** Now we'll create the access list.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=49)** Now I want to copy the command so I get it correct and we'll paste it.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=58)** And again, the second command.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=67)** And then it says allow all other IPv6 traffic to pass.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=73)** So that will be permit IPv6 any any.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=80)** And then we'll exit.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=84)** So apply the access control list on the interface closest to the source of the traffic to be blocked.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=91)** So if you place your cursor over the router, you can see the interfaces and it will be Gigabit 0/1.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=101)** So we need to go into that interface interface gigabitEthernet 0/1 and IPv6 traffic-filter BLOCK_HTTP in.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=118)** And we'll exit.
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=122)** Now we're going to verify the implementation by going to PC1 and PC2.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=127)** Now I'm going to copy this right here so I get it correct and we'll go to PC1 and the desktop into the web browser.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=142)** And we see the website.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=145)** Now we'll go to PC2 into the desktop and the browser and the website is blocked.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=161)** Now I'm going to copy this again because we're going to ping this IP address.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=167)** So we'll close the browser and go into the command prompt.
>
> **[2:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=172)** Type ping.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=178)** And the ping is successful, so I'll close that.
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=183)** Now I'll scroll down and we're going to configure, apply and verify a second IPv6 access control list.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=193)** So now we'll go to Router3,
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=201)** Enable, config T.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=207)** So we'll create an access control list named BLOCK_ICMP on Router3.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=216)** IPv6 access-list BLOCK_ICMP.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=222)** And we want to block all ICMP traffic from any host to any destination.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=229)** So that's deny ICMP any any.
>
> **[3:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=235)** And then allow all other IPv6 traffic to pass.
>
> **[4:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=242)** Permit IPv6 any any.
>
> **[4:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=246)** And then we'll exit.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=249)** And then again we'll need to apply it to the correct interface.
>
> **[4:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=253)** So you want to just place your cursor here and we see it's GigabitEthernet0/0.
>
> **[4:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=261)** Okay, now go back in and we'll issue the command interface gigabitEthernet 0/0.
>
> **[4:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=273)** And now we'll apply IPv6 traffic-filter BLOCK_ICMP out.
>
> **[4:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=282)** And now we'll exit and I'll close that.
>
> **[4:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=288)** And now we're going to ping from PC1 and PC2 and we're going to just check to make sure that they have failed.
>
> **[4:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=296)** So we'll go to PC2 and to the command prompt
>
> **[5:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=304)** and it did fail.
>
> **[5:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=307)** And now we'll go to PC1, command prompt, and it failed as well.
>
> **[5:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=317)** All right, now close this and I'll copy this website.
>
> **[5:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=325)** We'll go to PC1 and we'll go to the web browser and the website did display.
>
> **[5:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=335)** All right, so I'll close that and now we can see that we have a 100% completion.
>
> **[5:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=341)** So you successfully configured IPv6 access control list.
>
> **[5:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=346)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** pc1 (5), pc2 (4), block_icmp (3), icmp (2), http (1)
> **UI Navigation:** go to (8), scroll up (1), scroll down (1)
> **Code Keywords:** interface (5), pass (2), let (1)
> **Tools:** command prompt (3), command line (1)
> **Code Identifiers:** gigabitethernet (2)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Implement NAT on Cisco ASA

#### Understanding NAT
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=0)** - While some organizations have made the switch to using IPv6, most LANs continue to use an IPv4 address.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=10)** IPv4 was standardized in 1981 and is a 32 bit address represented in dotted decimal.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=19)** Scientists knew early on that we would run out of address space.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=24)** Efforts to conserve address space began soon after the internet became public in 1992.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=31)** In 1996, RFC 1918 outlines a method called private IP addressing that became a standard way to provide IP addressing for inside a LAN.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=46)** The following are private IP addresses.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=49)** We see here the Class A Private IP Range, Class B Private IP Range, and Class C Private IP Range, and you should become familiar with these ranges if you aren't already.
>
> **[1:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=62)** Private IP addresses are unregistered and cannot exist outside of the LAN.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=69)** Now what do we mean by unregistered?
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=73)** Any device on the internet will use a public address and no two hosts can have the same address.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=80)** I'm here at the American Registry for Internet Numbers or ARIN.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=85)** ARIN registers IP addresses.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=88)** For example, if I wanted to know the IP address for [discordapp.com](https://discordapp.com), I can go here to the Google admin toolbox where it will present me with the information.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=100)** We know that private IP addresses are only used on a local area network.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=106)** In order to get to the internet, a host on the inside of a LAN must go through a router and be translated into a public IP address.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=116)** Network address translation operates on a router and converts a private IP address to a public IP address and vice versa.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=125)** Let's see how this works.
>
> **[2:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=128)** I'm back on the ARIN site and here we can see my public IP address, which was provided by my internet service provider.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=136)** However, that's not my private IP address.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=140)** Let's see what my private IP address is by going into the command prompt and using IP config.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=148)** Now, once I run IP config, we can see here is my private IP address.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=155)** When communicating on the network, any external host will only see the public IP address.
>
> **[2:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=162)** Now, this actually provides an additional layer of security by concealing the entire internal network behind that address.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=170)** So now let's test your knowledge.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=173)** List the range of private IP addresses for Class A, class B, and class C.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=179)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** private (12), public (6), let (3), switch (1), continue (1)
> **Env Vars:** lan (3), arin (3), rfc (1)
> **URLs:** [discordapp.com](https://discordapp.com) (1)
> **Documentation:** rfc (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - while (1)

#### Comparing types of NAT
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=1)** - [Narrator] Network Address translation operates on a router and converts a private IP address to a public IP address and vice versa.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=11)** NAT is used on most networks as it offers the ability for every host in an organization to have a public IP address, along with providing an additional layer of security by concealing a host's actual IP address.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=26)** NAT was designed as a short-term solution to the problem of the depletion of IP version four addresses.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=34)** In this segment, we'll compare the various types of network address translation used on a network, including static and dynamic NAT, PAT and Policy NAT.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=46)** Static NAT defines a one-to-one mapping from an internal address to a specific public address.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=53)** Translation is limited to one-to-one or between blocks of addresses of the same size.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=60)** For each private address, a public address must be allocated.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=65)** No address pools are necessary.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=69)** Unlike Static NAT that provides a permanent mapping between an internal address and a specific public address, dynamic NAT maps a private IP address to a public IP address using a pool of addresses and assigns them on a first come, first serve basis.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=88)** When there are fewer addresses available than the actual number of host to be translated, Dynamic NAT is an option to provide address translation.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=97)** However, dynamic NAT is a little bit more complex than static NAT.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=102)** PAT is NAT overloading, and it's also called Network Address and Port Translation or NAT.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=110)** Port Address Translation uses an IP address and port number combination.
>
> **[1:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=117)** For example, two internal hosts that need to send and receive traffic from the internet using a single public IP address, PAT will search for an available source port, and in some cases it's the original source port number of the internal host and will form a unique registered IP address and port number combination.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=139)** Many businesses and home networks use PAT.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=143)** In addition to static and dynamic NAT and PAT, you may also need to implement Policy NAT on a Cisco ASA firewall.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=152)** Policy NAT overcomes the limitations of network address translation, which only considers the source address and uses additional criteria such as source and destination addresses, along with port numbers in an extended access control list.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=171)** The policy rules will enhance NAT by allowing or denying specific packets.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=177)** Now, let's test your knowledge.
>
> **[2:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=179)** What's the difference between NAT and PAT?
>
> **[3:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=183)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** nat (17), pat (6), asa (1)
> **Code Keywords:** public (7), static (5), private (3), let (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Configuring static NAT
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=5)** - Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=7)** In this challenge you'll configure Static Nat.
>
> **[0:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=10)** So you'll open the Packet Tracer file found in the exercise folder and then follow the instructions.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=17)** You'll want to make sure your completion is 100%.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=21)** Here, we can check our results.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=25)** So pause the video and complete the challenge.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=28)** This challenge should take you about 30 minutes.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=31)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), static (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - let (1)
> **Non-Speech:** (quirky music) (1)

#### Solution: Configuring static NAT
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=5)** - [Instructor] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=8)** First I'll go here and I'll dock the instructions so we can more easily follow along.
>
> **[0:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=14)** And I did save it so that I could preserve the original, I saved it locally.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=19)** And if you wanted to, you could select Print to PDF and then you can print out the copy.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=25)** All right, so first we want to test access without NAT by attempting to connect to server one, we need to go into PC one and use the web browser to browse the server at the IP address.
>
> **[0:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=39)** So we'll go into PC one, into the browser, and we'll put the IP address, and we'll select Go.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=51)** Well, nothing happens so apparently there is a request timeout.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=55)** Now I'll close that and go into the command prompt.
>
> **[0:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=58)** And now we'll see if we can ping the router's external interface.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=63)** So we'll ping 209.165.128.130.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=72)** As you can see, we were able to ping the interface.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=76)** Now I'll close that, and now we'll go into router one.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=85)** And then I'll issue the command show running config.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=91)** And here we are going to take a complete look at it.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=97)** And there are no references that refer to NAT.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=101)** We also want to verify that the routing table doesn't contain entries referring to the IP addresses for either the PC or the laptop.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=110)** So that will be show IP route.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=118)** Okay as you can see, there are no IP addresses for either of those two devices.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=124)** The last command is what we'll do to verify that NAT isn't being used by the router by issuing the command show IP NAT translations, there are no entries.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=139)** So now we want to configure static NAT statements.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=144)** And we need to take a look at the topology here and we can see the IP addresses, and we can see the inside and outside IP addresses for server one.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=155)** So first we've got to go into global configuration, and once in global configuration I'll issue the command IP NAT inside source static, and then put the IP address.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=175)** And now we'll have to go into the gigabit ethernet zero zero interface.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=184)** IP net inside and we'll exit, and we'll go into the other interface, serial 000.
>
> **[3:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=195)** And issue the command IP net outside, and I'll exit.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=203)** Now we have completed this exercise, but we'll go a little bit further.
>
> **[3:27](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=207)** We'll go back to PC one and back into the web browser and just check to see if we can connect to server one.
>
> **[3:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=219)** And we are able to access the server.
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=222)** And now we'll go back into router one, and we'll just exit here and then show some commands.
>
> **[3:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=233)** Show running config, and we'll scroll down and here we can see information about NAT.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=244)** Now we'll also do show IP NAT translations.
>
> **[4:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=250)** Okay, now we can see those, and the last thing we'll do is show IP NAT statistics.
>
> **[4:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=258)** And here we can see where they're applied.
>
> **[4:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=260)** So as we have completed this challenge, we configured and verified static NAT, so that outside devices can access the server using the IP address of the server.
>
> **[4:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=272)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** nat (10), pdf (1)
> **Code Keywords:** interface (4), static (3), let (1)
> **Versions:** 209.165.128 (1)
> **Cross-References:** go back to (1)
> **Tools:** command prompt (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)


### 6. 5. Examine Zone-Based Firewalls

#### Understanding zone-based firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=0)** - [Instructor] A classic firewall configuration can be complex and overwhelming.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=5)** The process relies too heavily on access control lists.
>
> **[0:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=9)** A zone-based firewall enhances content-based access control and is more appropriate for multiple interfaces that have varying security requirements.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=19)** With a zone-based firewall, we segment each part of the network by using zones, which is a defined area within the network that requires different access control policies.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=30)** Router interfaces are assigned to zones and an inspection policy is applied to traffic moving between the zones.
>
> **[0:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=38)** A zone-based firewall will define the security borders of a network where traffic from less trusted zones is inspected and subject to policy restrictions that either drop the packets or allow the traffic to pass.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=52)** The default is to block all traffic unless explicitly allowed.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=57)** Let's talk about how this works.
>
> **[1:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=60)** In this graphic, we see a logical drawing of a network and some common zones: the outside network or internet, the inside or LAN, and we see the perimeter network where you might house essential services, such as mail and web servers that must have a public interface.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=79)** A zone-based firewall can take three possible actions: inspect, pass, and drop.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=85)** Inspect traffic is equivalent to a standard firewall IP inspect command.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=90)** It automatically allows for return traffic and certain ICMP messages.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=95)** Pass is the same as allow in a standard firewall.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=99)** Pass only allows traffic to pass in one direction.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=103)** Because the zone-based firewall doesn't track the state of connections, there must be a policy to allow traffic to pass in the opposite direction.
>
> **[1:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=112)** Drop is the same as deny in a standard firewall.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=115)** A log option is available to log rejected packets.
>
> **[1:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=119)** There are several benefits to using zone-based firewalls.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=123)** In addition to simplified administration, zone-based firewalls are not dependent on access control lists, and they use policies that can affect any traffic that flows through the network.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=134)** Now let's test your knowledge.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=137)** A coworker is becoming frustrated with keeping up the access control lists on one of the internal routers.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=144)** Explain how a zone-based firewall works and why it might be a better option.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=149)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), let (2), public (1), interface (1)
> **Env Vars:** lan (1), icmp (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Managing traffic between zones
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=0)** - [Instructor] Zone-based firewalls have simplified administration and use zones, policies, and traffic classes to monitor and manage traffic that flows between the zones.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=12)** When using a zone-based firewall solution, we create zones, which are defined areas within a network that require different security policies.
>
> **[0:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=23)** Here, we see this common example of an inside zone, an outside zone, and a perimeter zone.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=31)** Each router interface represents a security zone.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=36)** To manage the traffic flow from one zone to another, we create a source destination zone pair, such as the inside zone paired with the perimeter network.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=47)** We then define a security policy that determines what traffic is permitted from one zone to another.
>
> **[0:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=54)** Traffic classes use a class map to describe the type of traffic that requires a policy.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=61)** A zone-based firewall can take three possible actions: inspect, pass, and drop.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=68)** In a zone-based firewall, the default is to block traffic unless explicitly allowed.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=75)** The two exceptions are if the traffic: is from the same zone or is to or from the self-zone.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=84)** Now let's talk about the self-zone.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=86)** The self-zone is traffic traveling to the control plane of the router that carries routing and other protocols, such as secure shell and simple network management protocol.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=99)** All interfaces on a router are automatically made part of the self-zone.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=105)** There are several steps for configuring a zone-based firewall with the command line interface.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=111)** First, we'll need to create zones with various security levels using the zone security command.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=118)** In order for traffic to flow between all interfaces on a router, each interface must be a member of a zone.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=126)** We then define traffic classes using class-map type inspect command.
>
> **[2:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=132)** The class maps describe the traffic that requires a policy map that checks the traffic as it crosses a zone pair.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=141)** We then establish policies between zones.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=144)** For each pair of source destination zones, for example from the inside network to the internet, using policy-map type inspect command which applies the action to the class maps traffic.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=160)** We apply the policies to pairs of source destination zones using the zone-pair security command.
>
> **[2:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=168)** And then we assign router interfaces to zones using zone-member security interface command.
>
> **[2:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=175)** Okay, now let's test your knowledge.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=178)** Describe how a zone-based firewall uses the concept of zones, policies, and traffic classes to monitor and manage traffic that flows between the zones.
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=191)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), self (4), let (2), require (1), pass (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Configuring a ZBF
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=0)** (synth intro music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=5)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=7)** In this challenge we'll configure a basic zone based firewall.
>
> **[0:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=11)** I have supplied a Packet Tracer file for you to follow along.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=16)** We won't be using the grading feature.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=18)** I just want you to get a feel for what steps are required.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=22)** When setting up the firewall.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=24)** You can obtain the file in the exercise folder and then follow the instructions found on the challenge worksheet.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=31)** So once you get into Packet Tracer you'll want to save it locally.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=35)** So you preserve the original.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=37)** Now, first, we're going to see if we have any firewall functionality because we're going to test internal and external hosts.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=45)** So we'll begin with PC-A and this is the outside zone and we're going to ping PC-C and we'll show you here, that IP address.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=56)** Now we'll go to the command prompt and we are able to get through.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=67)** Now, we'll go over to PC-C and we're going to go to the web browser and we're going to access the server.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=76)** First, we need to put in the IP address as the URL and here we see the welcome page and now we can close the browser and the PC.
>
> **[1:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=89)** So now I'll start to configure a basic zone based firewall on the edge router, R3, that allows internal hosts to access external resources and blocks external hosts from accessing internal resources.
>
> **[1:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=105)** Now, once you complete the configuration, we'll test the firewall functionality from the internal and external hosts.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=114)** So we'll go into router three and we'll need a password which is Cisco con PA 55.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=123)** Enable.
>
> **[2:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=125)** And the password is Cisco E-N-P-A 55, and then config T.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=134)** Now what we need to do is create the firewall zones on router three.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=139)** Now for all configuration, we'll need to provide the exact names and capitalization as specified.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=146)** They have to match.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=148)** So first we'll create an internal zone using the zone security command.
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=154)** Zone security IN-ZONE and we'll exit.
>
> **[2:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=160)** And then we'll create an external zone by using the command zone security OUT-ZONE and we'll exit.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=169)** Next we'll need to identify traffic using a class map.
>
> **[2:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=173)** First, create an access control list that defines internal traffic.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=178)** We'll use the access list command to create an extended access control list to permit all IP protocols from the network 192.168.3.0/24 to any destination
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=196)** Access-list 101 permit IP 192.168.3.0
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=205)** 0.0.0.255 any Now create a class map referencing the internal traffic access control list.
>
> **[3:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=216)** So we'll use the class map type inspect command with the match-all option to create a class map named IN-NET-CLASS-MAP.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=229)** Class map type inspect match-all IN-NET-CLASS-MAP.
>
> **[3:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=236)** Then we'll use the match access group command to match access control list 101 and then exit.
>
> **[4:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=248)** Now we'll specify the firewall policies.
>
> **[4:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=251)** So we'll create a policy map to determine what to do with the match traffic.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=257)** So we'll use the policy map type inspect command and create a policy map IN-2-OUT-PMAP policy-map type inspect IN-2-OUT-PMAP.
>
> **[4:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=272)** Then specify a class type of inspect and reference class map IN-NET-CLASS-MAP, class type inspect IN-NET-CLASS-MAP.
>
> **[4:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=285)** Now specify the action of inspect for this policy map.
>
> **[4:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=289)** Now we know that there are other options that include pass and drop, but we're going to use inspect.
>
> **[4:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=297)** And here we see no specific protocols are configured in class IN-NET-CLASS-MAP for inspection.
>
> **[5:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=305)** All protocols will be inspected.
>
> **[5:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=308)** Now issue the exit command twice to leave and return to config mode.
>
> **[5:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=313)** Now for your challenge you'll complete the steps and then test the firewall.
>
> **[5:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=319)** The instructions are in the challenge worksheet.
>
> **[5:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=322)** So pause the video and complete the challenge.
>
> **[5:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=325)** This challenge should take you about 30 minutes.
>
> **[5:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=328)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** net (5), class (5), map (5), zone (2), pmap (2)
> **Code Keywords:** let (1), match. (1), pass (1)
> **Versions:** 192.168.3 (2), 0.0.0 (1)
> **Prerequisites:** configure (2)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (synth intro music) (1)

#### Solution: Configuring a ZBF
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=0)** - [Voiceover] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=8)** We'll continue with configuring a zone-based firewall.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=12)** So now we'll apply the firewall policies.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=15)** First, create a pair of zones.
>
> **[0:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=17)** We'll use the zone-pair security command and create a zone-pair named IN-2-OUT ZPAIR.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=25)** And then specify the source and destination zones that were created earlier.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=32)** Zone-pair security IN-2-OUT ZPAIR, source IN-ZONE, destination OUT-ZONE.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=40)** Now specify the policy map for handling the traffic between the two zones.
>
> **[0:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=46)** So we'll attach a policy map and its associated actions to the zone-pair using the service policy type inspect command, and reference the policy map previously created IN-2-OUT-PMAP.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=64)** Service policy type inspect IN-2-OUT-PMAP, and exit.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=72)** Now it's time to assign interfaces to the appropriate security zones.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=77)** Now remember, each interface has to be assigned to a security zone.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=82)** So first we'll go into FA 01.
>
> **[1:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=88)** Zone-member security IN-ZONE, and exit.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=94)** Now go into the serial interface.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=101)** Zone-member security OUT-ZONE, and exit, and exit again.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=111)** So we'll run a command, show policy-map type inspect zone-pair sessions, to see the details.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=121)** All right, here we see the details.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=123)** So now we'll test firewall functionality from in-zone to out-zone and verify that the internal hosts can still access external resources after we've configured the zone-based firewall.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=139)** We'll go to PC-C, which is the inside zone and we'll ping PC-A.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=152)** And once the network is converged, we are able to get through, everything is successful.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=158)** And we'll close this and we'll go back to PC-A and we'll see if I can ping PC-C.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=165)** We'll go to the command prompt, and again, we'll issue that same command.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=174)** And we're not able to get through but that's what we wanted.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=178)** The PC-A was not able to get back into the inside zone.
>
> **[3:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=184)** So as we have seen, the zone-based firewall has many commands.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=188)** We create the zone, we define traffic classes, establish policies, apply the policies and then assign the router interfaces.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=199)** So I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** zone (4), zpair (2), pmap (2)
> **Code Keywords:** interface (2), let (1), continue (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Tools:** command prompt (1)
> **Speakers:** - [voiceover] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. 6. Review Firewall Features on a Cisco ASA

#### Managing access on an ASA
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=0)** - [Narrator] The Adaptive Security Appliance, has several different ways to access and manage the system.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=7)** When configuring devices, a Cisco iOS is separated into different Command Modes.
>
> **[0:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=13)** Each mode has a set of commands available, in general, you access the device as follows.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=20)** When starting a session, you'll begin in user EXEC mode.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=24)** Which only has a limited number of commands, that do not change the configuration of the router.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=31)** Then you issue the command, enable, this takes you into Privileged EXEC mode.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=37)** Once in this mode, you can then run any EXEC command.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=41)** Then you issue the command, configure terminal, which takes you into global configuration mode.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=48)** In global config mode, you can enter commands, to configure general system characteristics.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=55)** Now we know how to access the system.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=57)** But in most cases you don't want, unauthorized individuals to access your device.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=63)** So in addition to using a password protected login, you should also post a notification banner, that displays a warning message, when trying to gain access to the system.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=75)** I'm here at this site where it talks about, configuring login banners, on the Cisco Security Appliance.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=82)** Now why you do this?
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=83)** Well, there's several reasons.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=85)** Some are specific to your organization, or some are required by specific local laws.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=92)** But here's another article that talks about, what is a banner, and reasons that we would want to implement, that banner on your device.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=101)** For example, they can be used to warn would be intruders, that they are not welcome on your network, and also useful to quickly identify the terminal.
>
> **[1:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=111)** So a Notification Banner is like a no trespassing sign, and it should be used on all systems.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=118)** So in a Cisco iOS, you can configure a banner, to display in one of several ways.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=124)** So when accessing a Cisco device, anyone who connects via a command line interface, will see the message-of-the-day-banner.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=133)** Once a user logs in, they will see the login banner, and when a user accesses privileged EXEC mode, they will see the exec banner.
>
> **[2:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=143)** So creating a banner is pretty simple.
>
> **[2:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=146)** Here is the syntax.
>
> **[2:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=148)** And what you see in the curly brackets is the choice, whether it's exec, login, or message-of-the-day.
>
> **[2:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=155)** And here we see an example of a banner.
>
> **[2:38](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=158)** It says, "Enter the TEXT message. End the character with a #."
>
> **[2:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=163)** Now that special character can be anything.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=166)** It can be it at symbol.
>
> **[2:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=167)** It can be a question mark.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=169)** It doesn't matter.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=170)** But the key is that, that special character, cannot be used within the text message.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=177)** Okay, let's test your knowledge.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=180)** A Cisco iOS is separated into different command modes, each with a set of available commands.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=187)** Describe the order that you access a Cisco device, and what can be done in each mode.
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=194)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** exec (4), text (1)
> **Code Keywords:** protected (1), interface (1), let (1)
> **Code Identifiers:** ios (3)
> **Tools:** terminal (2), command line (1)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)

#### Logging onto the ASA
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=0)** - [Instructor] The ASA has several ways to access and manage the system.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=5)** The network administrator can use telnet, SSH, along with HTTPS.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=12)** To configure telnet access to the ASA, you'll first need to identify what IP address the ASA will accept when making a connection.
>
> **[0:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=22)** The next step is where you can modify the time out.
>
> **[0:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=25)** Now, the default is five minutes and here I've set it to time out after seven minutes.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=31)** The ASA supports Secure Shell.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=34)** And this is actually a better option than telnet as it uses encryption to secure the connection between the client and the server.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=43)** To configure SSH, you'll need to complete the following commands.
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=47)** First you'll need to create a username and password and then enable authentication for users.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=55)** And because it's encrypted, you'll need to generate a key pair.
>
> **[0:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=59)** Now, you may get a warning that says you already have a key pair.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=63)** Do you really want to replace them?
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=65)** And if you say yes, the generation process will begin.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=69)** Once that's complete, you'll want to write the keys to persistent flash memory.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=75)** After the configuration, you'll need to allow access from the inside network.
>
> **[1:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=80)** And again, you could set a time out of something other than the default of five minutes.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=86)** In addition to using the command line interface, you can also use the adaptive security device manager.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=93)** The device manager provides a graphical user interface.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=97)** And here we see the following dashboards that allow you easy access to the ASA.
>
> **[1:44](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=104)** Now, to use the adaptive security device manager, you'll need to enable the server and allow connections to the ASA.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=113)** So again, you'll create a username and password, enable authentication for users, and generate a key pair if necessary.
>
> **[2:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=123)** If you do generate a key pair, you'll want to save them to persistent flash memory.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=129)** And here we need to enable the HTTP server and allow a host to access the ASA from the inside network.
>
> **[2:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=139)** Now let's test your knowledge.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=141)** Your team lead has tasked you to access one of the branch office's ASA to update an access control list.
>
> **[2:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=149)** What are your choices when accessing the ASA?
>
> **[2:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=153)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** asa (9), ssh (2), https (1), http (1)
> **Prerequisites:** you'll need (5), configure (2)
> **Code Keywords:** interface (2), let (1)
> **CLI Commands:** ssh (2)
> **Tools:** command line (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Assigning security levels on the ASA
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=0)** - [Instructor] The adaptive security appliance defines security levels that determines how traffic flows through each of the interfaces.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=8)** Some areas are more trustworthy than others.
>
> **[0:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=12)** In this segment, we'll review the concept of security levels and some basic configuration guidelines.
>
> **[0:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=19)** When configuring the ASA, each interface must have a security level from zero to 100.
>
> **[0:27](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=27)** A higher security level is more trustworthy.
>
> **[0:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=31)** Now let's talk about how this works.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=33)** Traffic from a higher security level can freely pass through to a lower security level.
>
> **[0:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=40)** But if there is any traffic going from a lower to a higher security level, the ASA will automatically block and inspect the traffic using an access control list.
>
> **[0:52](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=52)** Then if allowed, the traffic will be allowed to pass through the interface.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=57)** On a Cisco ASA, security level 100 is used by the inside interface by default.
>
> **[1:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=64)** The lowest possible level is used by the outside interface by default.
>
> **[1:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=69)** And no traffic can freely flow from an untrusted network to a trusted network without checking the access control list.
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=77)** So let's take a look at an example configuration.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=82)** Now here, we see the outside interface, the perimeter interface, and the inside interface, and each with the appropriate security levels.
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=91)** We don't allow any traffic to freely flow from the outside to the perimeter or from the perimeter to the inside until the firewall inspects the traffic.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=102)** However, we do allow traffic to freely flow from inside of the LAN to the perimeter and from the perimeter network to the outside.
>
> **[1:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=113)** Now let's test your knowledge.
>
> **[1:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=115)** The ASA security levels determine how traffic flows through the interfaces.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=120)** The levels range from zero to 100, with 100 as the most trusted.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=126)** Imagine a standard network using a perimeter network.
>
> **[2:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=130)** Describe some general concepts when configuring security levels on the ASA.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=136)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (7), let (3), pass (2), default. (2)
> **Env Vars:** asa (5), lan (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Understanding Modular Policy Framework (MPF)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=0)** - [Instructor] An access control list can filter layer three and layer four traffic.
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=5)** However, the Cisco Modular Policy Framework enhances the function of an access control list by providing policies to prioritize certain traffic flows, rate limit bandwidth for specific applications, and ensure quality of service.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=21)** The Modular Policy Framework has three building blocks, class maps, policy maps, and service policies.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=29)** Class maps define which traffic is of interest and are used to categorize traffic into classes.
>
> **[0:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=36)** Extended access control lists are typically used to define traffic, then the access control list is referenced in the class map.
>
> **[0:45](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=45)** Policy maps are used to define what action is to be taken for a class.
>
> **[0:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=51)** Actions that can be specified are allow, block, and rate limit.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=56)** Basically, it answers the question, what do I do with the traffic?
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=61)** And a service policy is used to specify where the policy map should be implemented.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=67)** We create a service policy and then apply the policy map to a specific interface.
>
> **[1:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=73)** For example, let's discuss two examples of how the Modular Policy Framework might be implemented.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=81)** We create a class map to monitor voice over IP traffic.
>
> **[1:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=86)** The policy map prioritizes that traffic, and we create a service policy and specify that we apply the policy map to an inside interface.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=96)** We create a class map to monitor internet traffic.
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=100)** The policy map inspects that traffic, and we create a service policy that specifies that we apply the policy map to an outside interface.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=110)** The Modular Policy Framework can support many different features.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=114)** Features include TCP and UDP connection limits and timeouts, deep packet inspection, and ensures quality of service by shaping and policing traffic.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=126)** To learn more, you can visit this page here on using Modular Policy Framework by Cisco.
>
> **[2:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=133)** Now let's test your knowledge.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=135)** The Cisco Modular Policy Framework enhances the function of an access control list.
>
> **[2:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=141)** Discuss the three building blocks and how they work.
>
> **[2:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=145)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), function (2), let (2), class. (1)
> **Env Vars:** tcp (1), udp (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Implementing high availability
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=0)** - [Instructor] In networking, the rule of five nines means that you goal to have the network available 99.999% of the time, which equates to five minutes and 15 seconds of downtime a year.
>
> **[0:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=15)** To achieve this goal, the network administrator must take steps to ensure high availability as the network must be able to quickly recover from disruptions and failure.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=26)** High availability includes IOS resilient configuration.
>
> **[0:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=32)** This allows the administrator to make a secure copy of the router configuration and image stored locally on the router in a set of files called the bootset.
>
> **[0:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=42)** There are also protocols to ensure traffic will continue to flow in case of device failure.
>
> **[0:48](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=48)** Those include first hop redundancy protocol, hot standby router protocol, virtual router redundancy protocol, and gateway load balancing protocol.
>
> **[1:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=61)** In addition, the network administrator can take advantage of Cisco's high availability technology which provides quick recovery from disruptions that can occur in any part of the network.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=75)** When implementing failover technology, two devices are connected to one another and they communicate failover information.
>
> **[1:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=84)** When the ASA detects a device or interface failure, a failover occurs.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=90)** Failover techniques include active-passive, active-active, and clustering.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=96)** Active-passive uses a pair of adaptive security appliances.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=101)** One ASA is an active partner and forwards traffic, and the passive partner remains quiet and monitors the active partner for a failover to occur, and in case of failure will take over forwarding duties.
>
> **[1:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=116)** Active-active uses a pair of ASAs and both ASAs forward traffic concurrently.
>
> **[2:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=124)** Each ASA runs two context: one context is active and one is standby.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=131)** Now, there are four virtual firewalls.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=134)** In case of failure on one of the devices, the other ASA will take over the role of forwarding traffic.
>
> **[2:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=142)** Keep in mind, this method is only available on units that can run multiple context mode and it is a little bit more complex to configure.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=152)** And with clustering, all ASAs are active in a cluster and you can use more than two ASAs in a cluster to provide redundancy.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=161)** One key element is for failover configurations to be successful, all devices must have the same hardware and software components.
>
> **[2:51](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=171)** So in order to adhere to the rule of five nines, we use methods to ensure traffic will continue to flow in case of device failure.
>
> **[3:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=180)** Methods include IOS resilient configuration, redundant protocols, and Cisco's high availability technology.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=189)** Now let's test your knowledge.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=192)** When using high availability technology, outline the three failover techniques.
>
> **[3:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=198)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** asa (4), ios (2)
> **Code Keywords:** continue (2), interface (1), let (1)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Versions:** 99.999 (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Grasping Hot Standby Router Protocol (HSRP)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=0)** - [Instructor] There are multiple methods to ensure high availability.
>
> **[0:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=4)** One method is to use hot standby router protocol, a Cisco proprietary protocol that helps ensure high availability by providing redundancy and ensuring a fault-tolerant gateway.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=18)** Now we'll talk about the various states that hot standby router protocol goes into, but let's talk about a couple of terms.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=26)** One is a virtual IP.
>
> **[0:28](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=28)** Now, this is the IP address assigned as a default gateway to all hosts on the network.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=35)** There's also a virtual MAC address.
>
> **[0:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=37)** Now, the MAC address is generated automatically by hot standby router protocol.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=43)** And preempt, now in this state, the standby router automatically becomes the active router.
>
> **[0:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=50)** So let's talk about the states.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=53)** As we see, there are several states.
>
> **[0:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=55)** Now, initial or init is the starting state and indicates that the hot standby router protocol is not running.
>
> **[1:03](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=63)** You'll see the initial state when there is a configuration change or when the interface becomes active.
>
> **[1:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=70)** During the learn stage, the router is still waiting to hear from the active router.
>
> **[1:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=75)** The router doesn't know the virtual IP address yet, nor has seen a hello message from the active router.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=81)** During the listen stage, the router knows the virtual IP address, but is neither the active router nor the standby router.
>
> **[1:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=90)** It listens for hello messages from those routers.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=93)** During the speak stage, the router has the virtual IP address and sends periodic hello messages, and is actively participating in the election of the active and/or standby router.
>
> **[1:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=106)** During the standby state, the router is a candidate to become the next active router and sends periodic hello messages.
>
> **[1:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=114)** Now, aside from state changes, there must be at least one router in standby state.
>
> **[2:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=120)** In active state, the router is the master and is forwarding packets to the group's virtual MAC address and sends periodic hello messages.
>
> **[2:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=129)** Now we enable hot standby router protocol by using the standby ip command.
>
> **[2:15](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=135)** This activates the hot standby router protocol on the configured interface.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=140)** You'll need to enter standby preempt on each interface so that if a router fails and comes back up, the preemption occurs and restores load balancing.
>
> **[2:31](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=151)** If we set a priority value, this will help us choose the active router.
>
> **[2:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=156)** The range is from one to 255 and the priority is 100.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=161)** The highest number represents the highest priority.
>
> **[2:44](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=164)** To verify the protocol, use the show standby command.
>
> **[2:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=169)** Now let's test your knowledge.
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=170)** Hot standby router protocol is a Cisco proprietary protocol that helps ensure high availability.
>
> **[2:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=177)** List and describe the six states of hot standby router protocol.
>
> **[3:02](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=182)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3)
> **Definitions:** is a  (4)
> **Env Vars:** mac (3)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Hot Standby Router Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=0)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=7)** In this challenge, we'll take a look at hot standby router protocol and watch the state changes as we take an interface down and bring it back up.
>
> **[0:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=16)** You'll find the file in one of the samples using this path.
>
> **[0:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=21)** For this challenge, you'll simply follow the instructions.
>
> **[0:24](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=24)** You'll go to router one and router zero and show standby.
>
> **[0:29](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=29)** Then on router zero, you'll shut down fa0/0.
>
> **[0:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=33)** On router one and router zero, you'll show standby again and then from PC zero, ping 4.1.1.1.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=43)** On router zero, issue a no Shutdown to bring the interface back up, and then on router one and router zero, you'll show standby.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=53)** To get you started, let's get that file.
>
> **[0:56](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=56)** Go to File, open Samples, Networking, Hot Standby Router Protocol, and Ping When Router Priority is Higher.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=67)** Once you open it, you can rearrange the instructions to give yourself a little more landscape.
>
> **[1:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=74)** So pause the video and complete the challenge.
>
> **[1:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=78)** This challenge should take you about 10 minutes.
>
> **[1:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=81)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Versions:** 4.1.1 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Hot Standby Router Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=0)** - [Instructor] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=8)** We see over in the right-hand side, the first thing it says is that PC0, the default gateway, is 1.1.1.7.
>
> **[0:18](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=18)** So we'll need to change that.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=26)** And then we need to complete step two of both routers.
>
> **[0:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=30)** So first, we'll go into Router0, and into FastEthernet0/0, and we'll issue the command standby 1 ip 1.1.1.7,
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=47)** and then we'll do the same thing to Router1.
>
> **[0:53](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=53)** We'll go into FastEthernet0/0, and issue the command standby 1 ip 1.1.1.7.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=68)** Now we'll go back to PC0, and into the Command Prompt, and we'll ping 4.1.1.1.
>
> **[1:19](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=79)** And the request has timed out.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=82)** Now, we'll go back to Router0 and Router1, and complete the instructions.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=92)** We're already in FastEthernet0/0, and I'll type standby 1 priority 110.
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=102)** This will bump up the priority a bit, and then I'll type standby 1 preempt.
>
> **[1:50](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=110)** We'll exit and exit, and then I'll issue the show standby command.
>
> **[2:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=121)** And we see the state is active.
>
> **[2:06](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=126)** Now I'll go into Router1.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=131)** I'm already in FastEthernet0/0, and we'll type standby 1 preempt.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=140)** Exit, exit, and we'll show standby.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=150)** And here we see the state is standby.
>
> **[2:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=154)** Now, we'll do a ping again from PC0.
>
> **[2:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=161)** And we have success.
>
> **[2:46](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=166)** Now, watch what happens when I shut down the interface Fa0/0 on Router1.
>
> **[2:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=174)** We'll just go here and issue a shutdown.
>
> **[2:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=178)** Now we're going to see the state changes, because the interface is now down.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=185)** And you see the red arrows, meaning that connection is down.
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=191)** So to provide the redundancy, Router1 is going to take over, and here we see that the standby state has changed to active.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=203)** So let's go back to PC0 and try a ping again, and we're able to get through.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=212)** So now, let's bring that interface back up.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=227)** So now, we see the state change.
>
> **[3:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=229)** We see speak to standby, and then standby to active.
>
> **[3:55](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=235)** And the same thing happened on Router1.
>
> **[3:59](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=239)** We went from standby to active, and then from speak to standby.
>
> **[4:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=244)** So Router1 has resumed its position as the standby router.
>
> **[4:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=249)** So as we can see, the hot standby router protocol is a protocol that ensures high availability by providing redundancy, and ensuring a fault tolerant gateway.
>
> **[4:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=262)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3)
> **Env Vars:** pc0 (4)
> **Versions:** 1.1.1 (3), 4.1.1 (1)
> **Cross-References:** go back to (3)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=0)** - [Instructor] Thank you for watching Cisco Network Security Firewall Technologies.
>
> **[0:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=7)** In this course, we learned the core concepts of firewalls, including stateless, stateful, and application firewalls, and how they function in different security contexts.
>
> **[0:20](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=20)** We reviewed practical skills in configuring basic firewalls, managing access control lists, and implementing network address translation on a Cisco ASA.
>
> **[0:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=34)** Finally, we explored advanced features like zone-based firewalls, the Cisco Modular Policy Framework, high availability technology, and the Hot Standby Router Protocol.
>
> **[0:49](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=49)** If you're interested in learning more, please check out the library where new courses are added all the time.
>
> **[0:57](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=57)** If you're interested in learning about packet analysis, please check out my Wireshark courses.
>
> **[1:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=65)** You might want to check out Securing the IoT Security Risks, and any course in the Cisco CyberOps series will be well worth your time.
>
> **[1:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=76)** For a complete list of courses, visit my author page.
>
> **[1:22](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=82)** Keep learning.
>
> **[1:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=83)** I hope to see you again soon.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), finally, (1)
> **Env Vars:** asa (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Network Security
- Cisco Firewall Security

## Path Context

### In [[Cisco Network Security- Safeguarding Network Integrity and Data]]
← [[Cisco Network Security- Secure Routing and Switching]] | **5 of 7** | [[Cisco Network Security- Intrusion Detection and Prevention]] →

## Appears In

- [[Cisco Network Security- Safeguarding Network Integrity and Data]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Network Security- Secure Routing and Switching]] — Network Security
- [[Cisco Network Security Core Security Concepts]] — Network Security
- [[Network Forensics]] — Network Security
- [[Security Testing Essential Training (2022)]] — Network Security

---

[↑ Back to top](#)