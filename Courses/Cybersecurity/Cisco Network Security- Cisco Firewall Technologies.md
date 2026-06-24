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
  - '[Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)'
prev_courses:
  - '[Cisco Network Security- Secure Routing and Switching](Cisco%20Network%20Security-%20Secure%20Routing%20and%20Switching.md)'
next_courses:
  - '[Cisco Network Security- Intrusion Detection and Prevention](Cisco%20Network%20Security-%20Intrusion%20Detection%20and%20Prevention.md)'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":5,"total":7,"prev":"Cisco Network Security- Secure Routing and Switching","next":"Cisco Network Security- Intrusion Detection and Prevention"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-security
  - skill/cisco-firewall-security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Cisco%20Firewall%20Technologies.md)

![Cisco Network Security: Cisco Firewall Technologies](https://media.licdn.com/dms/image/v2/C4E0DAQHKo9yS4P2Vnw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664215618381?e=2147483647&amp;v=beta&amp;t=IWJMwHVxsYt6tAmV5mICp7dp6BNT9rZ2SXROc7Mke4o)

# Cisco Network Security: Cisco Firewall Technologies

> Are you looking to learn the basics of configuring a firewall to secure your Cisco network? In this course, security ambassador Lisa Bock focuses on the most essential Cisco firewall technologies. Explore the core concepts of a firewall, what it is, and how it works in a variety of distinct security contexts, as Lisa shows you how to configure a basic firewall, choosing the option that’s best for 

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765) | 1h 45m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Allowing only authorized connections](#allowing-only-authorized-connections)
  - [Discovering resources](#discovering-resources)
  - [Obtaining Packet Tracer](#obtaining-packet-tracer)
- [**1. Review Firewall Technologies**](#1-review-firewall-technologies) (6 videos)
  - [Understanding firewalls](#understanding-firewalls)
  - [Recognizing security contexts](#recognizing-security-contexts)
  - [Reviewing CBAC](#reviewing-cbac)
  - [Challenge: Configuring CBAC](#challenge-configuring-cbac)
  - [Solution: Configuring CBAC](#solution-configuring-cbac)
  - [Employing Cisco AutoSecure](#employing-cisco-autosecure)
- [**2. Compare Firewall Types**](#2-compare-firewall-types) (4 videos)
  - [Filtering packets](#filtering-packets)
  - [Monitoring the state](#monitoring-the-state)
  - [Examining the application layer](#examining-the-application-layer)
  - [Comparing modes of deployment](#comparing-modes-of-deployment)
- [**3. Manage Access Control Lists**](#3-manage-access-control-lists) (4 videos)
  - [Understanding ACLs](#understanding-acls)
  - [Working with IPv6 ACLs](#working-with-ipv6-acls)
  - [Challenge: Configuring IPv6 ACLs](#challenge-configuring-ipv6-acls)
  - [Solution: Configuring IPv6 ACLs](#solution-configuring-ipv6-acls)
- [**4. Implement NAT on Cisco ASA**](#4-implement-nat-on-cisco-asa) (4 videos)
  - [Understanding NAT](#understanding-nat)
  - [Comparing types of NAT](#comparing-types-of-nat)
  - [Challenge: Configuring static NAT](#challenge-configuring-static-nat)
  - [Solution: Configuring static NAT](#solution-configuring-static-nat)
- [**5. Examine Zone-Based Firewalls**](#5-examine-zone-based-firewalls) (4 videos)
  - [Understanding zone-based firewalls](#understanding-zone-based-firewalls)
  - [Managing traffic between zones](#managing-traffic-between-zones)
  - [Challenge: Configuring a ZBF](#challenge-configuring-a-zbf)
  - [Solution: Configuring a ZBF](#solution-configuring-a-zbf)
- [**6. Review Firewall Features on a Cisco ASA**](#6-review-firewall-features-on-a-cisco-asa) (8 videos)
  - [Managing access on an ASA](#managing-access-on-an-asa)
  - [Logging onto the ASA](#logging-onto-the-asa)
  - [Assigning security levels on the ASA](#assigning-security-levels-on-the-asa)
  - [Understanding Modular Policy Framework (MPF)](#understanding-modular-policy-framework-mpf)
  - [Implementing high availability](#implementing-high-availability)
  - [Grasping Hot Standby Router Protocol (HSRP)](#grasping-hot-standby-router-protocol-hsrp)
  - [Challenge: Hot Standby Router Protocol](#challenge-hot-standby-router-protocol)
  - [Solution: Hot Standby Router Protocol](#solution-hot-standby-router-protocol)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Allowing only authorized connections](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/allowing-only-authorized-connections?u=76281980&t=0)** - [Lisa] Every minute of every day, our systems are bombarded with attacks designed to gain unauthorized access to your network, to steal, modify, or hold systems hostage. As a result, using firewalls are a critical component of any system. They're designed to stop a malicious actor from moving through your network. In this course, I'll review firewall services and compare the different types of firewalls. I'll outline how to use access control lists. I'll show you how to implement network address translation and configure zone-based firewalls. I'll finish with a review of the firewall features on a Cisco adaptive security appliance. Hello, my name is Lisa Bock and I'm a security ambassador. Are you ready to lock down your organization? Then let's get started.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (1)
> **Speakers:** - [lisa] (1)

#### [Discovering resources](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/discovering-resources?u=76281980&t=0)** - [Instructor] Cisco [Network Security](../../Skills/Cybersecurity/Network%20Security.md): Firewall Technologies is an intermediate-level course. The course is designed for network administrators, engineers, managers, students, and anyone with an interest in learning more about Cisco Network Security. Participants should have a solid knowledge of networking fundamentals, devices, cables, along with various topologies, and have completed CCNA training prior to starting this course. I cover a lot of information, but I have provided some files for you. You'll go to the exercise file on the welcome screen where you will see the following. You'll see a file with links so that you can follow along. I have included this file with the links to resources that I have referenced in the course. You'll also find some Packet Tracer exercises and a challenge document. During each segment, I will identify a challenge using the following icon along with the question from the video. Use the document to write out responses to challenges that I cover throughout the course. You'll find the Exercise File on the welcome screen. I am super excited to bring you this series on Cisco Network Security so you can improve your skills needed to properly secure an organizations infrastructure. So sharpen your pencil and let's start the learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (3)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise file (2)
> **Env Vars:** ccna (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Obtaining Packet Tracer](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=0)** - [Instructor] During the course, I'll demonstrate some of the concepts using Packet Tracer, which is available here at the [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) Academy. You'll sign up, and then you can get your own copy of Packet Tracer, along with the samples that are included. I did a search for Packet Tracer, which brought me here. But first let me show you the courses that are free. Courses include networking, programming, Internet-of-Things, infrastructure automation, and cyber security. These are self-paced and I encourage you to take advantage of this. But now once on this page, you see that we can download Packet Tracer when you enroll in one of the three self-paced Packet Tracer courses. If you scroll down, you can see the three courses and you can select one or all of them. Now, once you download and launch Packet Tracer for the first time, it will make you re-authenticate with Cisco Net Academy. Now, once you authenticate, then you can begin using Packet Tracer. If you explore the interface, you see some of the common menu choices, and then in the center, you can see the logical drawing canvas. In the lower left-hand corner are the devices that you can use to build your network. I'll show you one more thing. Go to File, and then Open Samples. And there are plenty of samples that you can choose from to learn a little bit more about skills you would like to improve on. For example, we'll select Programming, and they'll provide a little bit of instructions and you can follow along, and again,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/obtaining-packet-tracer?u=76281980&t=94)** encourage you to take a look at the samples. So now that we've downloaded and install Packet Tracer, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) (1)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Review Firewall Technologies

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding firewalls](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=0)** - [Narrator] I'm here at this website, Kaspersky Cyber Threat [Real-Time](../../Skills/Database%20Management/Real-Time.md) map, where we can see that cyber attacks occur in significant numbers every single minute of every single day. If I go to [Statistics](../../Skills/Data%20Science/Statistics.md), I can see detections per second are staggering. Because of the amount of cyber attacks that occur on a daily basis, in most organizations, a firewall is used as a first line of defense. A firewall is a [Hardware](../../Topics/Hardware.md) or software based method to control incoming and outgoing traffic. Firewalls filter traffic using access control lists that either allow or deny traffic on a network or host based on a set of rules. A firewall gives the administrator greater control over the types of traffic originating from inside and outside the protected network. Today, there are many different types of firewalls, from software based, such as the [Windows](../../Glossary/Service/Windows.md) firewall, to dedicated appliances that defend an enterprise network. On an enterprise network, you'll see some of the following types of firewalls. A packet filtering firewall is a simple stateless firewall that monitors layer three and sometimes layer four traffic. A stateful firewall is more powerful as it allows or blocks traffic based on state, port and protocol. Stateful firewalls monitor connections in an active state
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=97)** and maintains this information in a state table. And an application gateway or proxy firewall will filter information at layers three, four, five, and seven. This type of firewall is used if a company is using a web server so that clients send requests to the proxy firewall instead of directly interacting with the server, and next generation firewalls are used to proactively defend against complex threats by adding intrusion prevention and application awareness to defend against evolving security threats. Firewalls monitor traffic based on the source, destination and the type of traffic. There are three common firewall configuration options. One is called public and private. Now, this is a simple configuration where the public network or internet is untrusted and the private network is trusted. Any traffic going out of the private network such as webpage or mail or DNS is allowed. However, any access directly to the private network is blocked. A perimeter network provides a barrier between a trusted network and an untrusted network such as the internet. When we take a look at this, this firewall typically has one inside interface connected to the private network, one outside interface connected to the public network, and one to the perimeter network.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-firewalls?u=76281980&t=193)** Now, how does the data flow? Well, any traffic that's going between the perimeter network and the public network is selectively permitted, and any traffic that originates from the private network to go to either the perimeter network or the public network is inspected and permitted with little or no restriction. However, any traffic from either the perimeter network or the public network that directly tries to access the private network is blocked. And zone based policy firewalls use the concept of zones, which represents a group of one or more interfaces that have similar functions or features. Zones are used to identify how you should apply a firewall rule or policy. Now let's test your knowledge. On an enterprise network, there can be several types of firewalls. List and describe the four main types of firewalls and how they work to protect the network. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** such as (3)
> **UI Navigation:** go to (2)
> **Env Vars:** dns (1)
> **Speakers:** - [narrator] (1)

#### [Recognizing security contexts](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=0)** - [Instructor] Imagine a complex networked environment, and then within that environment, you have Accounting, Sales, and Marketing, each with their own needs. The Accounting department uses specialized proprietary software and needs an open connection to the vendor. Marketing does a lot of work with social media, so they'll need access to [Facebook](../../Glossary/Service/Facebook.md), Twitter, and [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). But, concurrently, we don't want the Sales department to go to sites such as Facebook or YouTube. How do we handle the three departments? Well, we could implement a firewall for each of these departments, but if we have a Cisco Adaptive Security Appliance, we can use security context. Security context give us the ability to create multiple virtual firewalls within the physical ASA. The ASA acts like a hypervisor. Each context functions as an independent device with its own interfaces, administrators, and security policy. In addition to creating virtual firewalls within the ASA, the administrator can create resource management classes. The resource management classes can limit resources, such as concurrent connections and number of application inspections. For example, for the Gold class, we can limit the connections to 10% and allow 5 site-to-site VPN tunnels. To create a basic configuration for a security context on the ASA,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/recognizing-security-contexts?u=76281980&t=94)** you'll need to create a dedicated admin context. And then once a user logs in, they'll have administrator rights to access the system and all other context. So let's step through a configuration example. First, we'll want to create a context name, and you'll probably want to add a description for this context. Allocate a physical_interface for the context, and, optionally, assign the context to a resource class, and then you'll need to identify the URL where the system obtains the context configuration. We can also show context and run this command to see the total active security context, and also identify where the configuration file resides. And I'm here at this resource where you can find out a little bit more about configuration of Multiple Context Mode. And I'm here for licensing on security context. Now they're available on most ASA models, but you may need extra licensing, and some features aren't supported. But, in general, security context give us the ability to create multiple virtual firewalls within a physical ASA. So, now, let's test your knowledge. Your company has four departments, each with specific needs, such as concurrent connections and number of application inspections. How can the ASA manage multiple departments? You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** asa (7), vpn (1), url (1)
> **Analogies:** such as (3), imagine (1), for example (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** physical_interface (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing CBAC](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=0)** - [Instructor] The concept of a firewall is simple. It will examine packets and either allow or deny traffic based on a set of rules. For example, I've highlighted a few. Allow traffic to FTP server. Deny all inbound ICMP ECHO request traffic. In contrast, content-based access control uses inspection rules that monitor the traffic for user requests. For example, the client needs to telnet 172.30.1.50. The content-based access control will create a temporary access list at the firewall interface. The connection will remain open during the session, and then content-based access control will remove the firewall entry once the session is complete. A key component of this is the inspection rules. Now, each connection is considered a session. Content-based access control uses inspection rules to inspect the traffic. It then manages state information for TCP and UDP sessions. The device uses the state information to automatically create a return path for the traffic. Now, another key component is tracking the sequence numbers in all TCP packets. And so that there isn't a spoofing attack, it will drop packets with sequence numbers
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/reviewing-cbac?u=76281980&t=93)** that are not within bounds. To configure content-based access control, you'll configure the access list and the inspection rules, then apply the lists and the inspection rules to the interfaces. So to configure the access list, you'll go to Global Config Mode and create an access list for use by the firewall, and here's an example of the command. For the inspection rules, you'll configure firewall inspection rules for TCP and UDP traffic and any specific application protocols. And here we see the command. Now once they're created, you'll then apply the access control list and inspection rules. So go to the interface configuration mode for the inside network interface on your router. So here we go to the interface and you would identify the type and the number, and then you would apply your IP access group, and then your inspection. Okay, now let's test your knowledge. Users in the marketing department need to be able to access multiple websites as part of their job function. Describe how content-based access control can be a viable option instead of using a classic access control list. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (3), udp (2), ftp (1), icmp (1), echo (1)
> **Prerequisites:** configure (4)
> **UI Navigation:** go to (3)
> **Analogies:** for example (2)
> **Versions:** 172.30.1 (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Configuring CBAC](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=0)** - [Speaker] Let's do a challenge. In this challenge, we'll do a basic firewall configuration using content-based access control to allow Telnet traffic. You'll configure and apply access lists and inspection rules to the interfaces. You'll see how the ASA adds another layer of protection. And once the ASA is configured, we can see that the Telnet traffic will be allowed. We'll finish up by seeing how content-based access control inspection keeps track of the sessions. You'll find the instructions on the challenges worksheet, but let's get you started. To get this exercise, you'll go to File, and then Open Samples. Then you'll go to [Cybersecurity](../../Topics/Cybersecurity.md), ASA, and then select enable outside to inside. Then you can rearrange the layout so that you can see the instructions. My font size is larger so that you can see it, which you can modify as well. I also saved it locally so that I could preserve the sample. Now I might want to label a couple of things. For example, I'm going to label the IP address of the internal router. We'll select Ad Note, and add the IP address 192.168.1.2. And here we see the ASA.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-cbac?u=76281980&t=94)** The adaptive security appliance is a stateful firewall and keeps a connection table for all the connections which flow through the device. Then you'll follow the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the instructions. So pause the video and complete the challenge. This challenge should take you about 15 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** asa (4)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Versions:** 192.168.1 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)

#### [Solution: Configuring CBAC](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=0)** - [Instructor] Okay, let's check our work. All right, now, the first thing I want to do is, on the edge router, which is router one, we're going to configure and apply access list and inspection rules to the interfaces, so just double click here. Enable, config T, access list 101 permit TCP any any equals Telnet, so that will allow Telnet traffic. And we'll add an inspection rule, and now we'll configure the interface fast ethernet zero/zero. IP access group 101 in, and then I'll tab up and just modify that so it's IP access group 101 out. Then we'll add the inspection rule, IP inspect in-out-in in, and then I'll tab up and then just change that to out, and then we'll exit. All right, now, let's follow the other instructions. From the internal router, we'll Telnet to the external router, so over here, and we'll go to the command line. Password is Cisco, Telnet 172.16.3.2, and we're in.
>
> **[1:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=103)** Now, we'll go to the external router, and we'll try to Telnet to the internal router. Password is Cisco, Telnet 192.168.1.2.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-cbac?u=76281980&t=118)** Now, as you see, the connection has timed out. Well, now we have to modify the ASA. So we'll go into the ASA and the command line. There is no password. Config T, and we'll create an access list. Access list 101 extended permit TCP any any equals Telnet, and now we'll apply that access group. Access group 101 in interface outside. Okay, and now we'll go back to the external router. Now, as you see, we're successful, so we'll do one more thing and we'll check the inspection on the edge router. So we'll go back in here, and once we issue show IP inspect [Statistics](../../Skills/Data%20Science/Statistics.md), we can see the information on what transpired during that session. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** tcp (2), asa (2)
> **Versions:** 172.16.3 (1), 192.168.1 (1)
> **Tools:** command line (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** configure (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Employing Cisco AutoSecure](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=0)** - [Instructor] In this demo, I'll show you how to use Cisco auto secure. The auto secure command will guide you through a semi interactive session to secure the management and forwarding planes. Cisco auto secure will disable unneeded services, provide logging for security, and secure access to the router. Now you may have thought you hardened the router or configured it correctly. For example, I'm just going to open this router that I just booted up. And a lot of times you'll see this prompt, Would you like to enter the initial configuration dialogue? And maybe you said no, and then you did some configuration but it's not really secure. So we want to do the auto secure feature and I'll just go into this router and type enable. And now we're ready. And what it's going to do is harden the security of the router. We're going to enter the command auto secure and I'll move this over so we can see the command two words and press enter. The first question is, are you going to be connected to the internet? And I'll say, no, and you can just type in. And then here is this banner that we would want to put on. Enter the security banner and put the banner between K, and K, where K is any character. Now we need to be careful because we can't use that character in the text. So first I'm going to select this right here. Unauthorized access to this device is prohibited
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=95)** and I'll select copy, and I'll use an at symbol and then paste and another at symbol and then enter. And now I have my banner. Now I'll want to enable secret. And for this exercise, we'll use simple passwords and I'll use Cisco. And then we confirm and I'll type Cisco again. And for this we'll use ciscokid and now configure local user database enter the name and I'll put admin and enter the password. And this time I'll use ciscosec. And again. Now blocking period when login attack detected. And we'll just put a question mark, cuz I'm really not sure. Oh, okay. Here we have a decimal number between 1 and 32,767. I'll just choose a random number, 600. and then I'll press enter and maximum login failures with a device. And we'll just say three, because that's generally the rule of thumb, but you can change that, press enter. Maximum time period for crossing the failed login attempts. And we'll just say three. Configure SSH server. And as you see, it's defaulted to yes. So we'll say yes and we'll press enter.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/employing-cisco-autosecure?u=76281980&t=189)** Enter the host name and we'll call it secure router or we'll abbreviate, SecRouter and we'll press enter. enter the domain name and I'll say security.local And press enter. Now configure the content based access control firewall feature. And we'll say yes. And we'll just see, put a Y, that means yes. And now you see all the configuration. It's pretty much filled in everything for me when I said yes, it gave all the parameters of at least providing a little bit more security to the router. The last thing it will say is apply this configuration to running config and you'll see the default is yes. And I will say yes, I would like that. So now that's all you need to do. And I'll just close this for now. The router now is a little more secure than it was. So as you can see, it's very easy to use the Cisco auto secure but keep in mind. I put a little note here that auto secure configuration enhances the security of the router but it won't make it absolutely resistant to all security attacks.

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


### 2. Compare Firewall Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Filtering packets](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=0)** - [Instructor] Stateless firewalls are simple packet filters that inspect packets as they pass through the firewall. As we see in this graphic, a stateless firewall focuses on Layer 3 and Layer 4 of the OSI model. The firewall will check the source and destination address, protocol, port, and other static values. It's called a stateless packet filtering firewall because it doesn't monitor traffic patterns or data flows or keep track of the state of network connections. The firewall will treat each packet in isolation and doesn't consider packets previously processed. The firewall is designed with access control lists that either allow or deny packets, for example allow outbound SYN packets, destination port equals 80, or allow inbound SYN-ACK packets, source port equals 80, or deny inbound SYN packets, destination port 80. And if identified, that packet will be blocked. Now, stateless firewalls have some limitations in that they must use complex access control lists that can be difficult to implement and maintain. They're unable to properly filter fragmented packets and packet filters don't do any payload inspection. For example, it won't block a string value that is associated with a buffer overflow. However, there are several benefits.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/filtering-packets?u=76281980&t=94)** It pretty much uses a straightforward permit or deny rule set. It doesn't degrade network performance, and it's easy to implement and is supported by most routers. Stateless firewalls must be very restrictive to prevent most attacks. However, they can enhance security and protect resources from malicious or untrusted packets. Now let's test your knowledge. One of your team members feels that using a stateless firewall is sufficient protection and asks you what you think. Outline some of the considerations and limitations of using a stateless firewall. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** syn (3), osi (1), ack (1)
> **Analogies:** for example (2)
> **Ports:** port 80 (1)
> **Speakers:** - [instructor] (1)

#### [Monitoring the state](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=0)** - [Instructor] Stateless firewalls are faster and perform better under heavier traffic loads. However, stateful filtering is better than packet inspection as each packet is based on the context of an active state or connection. Similar to stateless packet filtering, stateful inspection occurs at layer three and four of the OSI model and it will check source and destination address, protocol, port, and other static values. But in addition, it will also check values such as sequence numbers and other indications of a current state. Once a new connection is initiated, the firewall will check the access control list and either allow or deny that packet. If there is an existing connection, then the firewall will check the state table. This session is monitored in the state table, which keeps track of all the current connections. Now, here we see a three-way handshake to begin a session, beginning with a SYN, SYN-ACK, and ACK. Now, stateful inspection will monitor the state of the connection as it begins and as it transpires. But it also monitors the close of the connection with the passage of the FIN and FIN ACK packets. Now, each session is monitored in a state table that keeps track of all current connections. Now, here in this graphic, you can see an example of what a state table might look like. But let's take it to our own system and see
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/monitoring-the-state?u=76281980&t=95)** what it would look like in the command line interface of our own system. I'll issue the command netstat and let it run. Now, here we see all of our active connections and either on the local address or the foreign address, we see endpoints. And those are known as sockets, which consist of a unique IP address and port number. Stateful firewalls have several benefits. However, there are a few challenges. Challenges with stateless protocols, such as UDP and ICMP. And stateful filtering occurs at layers three and four of the OSI model. And as a result, the application layer isn't protected. And purely stateful inspection doesn't ensure authentication methods. Now let's test your knowledge. Describe how a stateful firewall works. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** ack (3), osi (2), syn (2), fin (2), udp (1)
> **Analogies:** such as (2), similar to (1)
> **Definitions:** is an  (1), known as (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Examining the application layer](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=0)** - [Instructor] Stateful firewalls work at Layers 3 and 4 of the OSI model. However, the application layer isn't protected. An application layer firewall is an extension to stateful packet inspection as it acts as a proxy to monitor and filter requests not only at Layers 3 and 4, but Layers 5 and 7 of the OSI model. The application layer firewall is application-aware and examines the entire packet, not just the network address and port number. Being application-aware means that instead of treating all HTTP requests equally, the firewall is able to truly understand what is happening and evaluate all the different types of HTTP requests and the payload such as video, text, and [HTML](../../Skills/Web%20Development/HTML.md), or image. A proxy firewall has its own IP address. Two connections are established, one between the packet source and the firewall and another between the firewall and the packet destination. The proxy intercepts incoming packets, examines the payload, and then relays the permitted packets to the destination. As a result, the client and server never communicate directly with one another. The proxy can handle complex protocols by doing deep packet inspection to monitor incoming traffic for signs of an attack.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/examining-the-application-layer?u=76281980&t=96)** It creates a single point to assess threat levels represented by application protocols and put attack detection and validity checking in place and will drop any suspicious data. Application layer firewalls can handle data requests and responses and control the execution of applications and block malicious code. As a result, they have more overhead than simply inspecting packets at the network layer. And as a result, they are slower than stateful inspection. Because they establish an additional connection for each outgoing and incoming packet, the firewall can become a bottleneck and cause a degradation of performance or become a single point of failure. Even still, an application layer firewall is a better approach, as it's an extension of stateful packet inspection and acts as a proxy, capable of deep packet inspection and preventing direct contact with other systems. Now let's test your knowledge. Describe ways an application layer firewall can provide more robust protection. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** osi (2), http (2), html (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Comparing modes of deployment](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=0)** - [Instructor] On an Adaptive Security Appliance, there are two methods of firewall deployment. Routed, which acts as a router between interfaces. And transparent, which acts as a layer two device to provide secure bridging. How you deploy the ASA will depend on the network requirements. Here on the left, we see routed mode. And here on the right, we see bridged mode. The two look similar, yet have distinct differences. In routed mode, the ASA acts as the default gateway for the subnet and a router between connected networks. It provides a layer three boundary between zones and interfaces. And supports either static or dynamic [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) using RIP, Open Shortest Path First, EIGRP, and BGP. Forwarding is done with the destination IP address. And the time-to-live value in the IP header is decremented as it passes through the device. Routed mode is the default mode for an ASA. And it's the most commonly used. Each interface is a separate network. Traffic is allowed or denied according to the rules. And the firewall is a routed hop and acts as the default gateway for the hosts. Routed mode is the default mode. However, there are times when transparent mode simply makes more sense. In transparent mode, the ASA operates as a layer two device
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-modes-of-deployment?u=76281980&t=94)** to provide secure bridging for layers two through seven. Because they are not used as a layer three gateway and not seen as a router hop to connected devices, transparent firewalls are known as a bump in the wire. And they act as a stealth firewall. Unlike routed mode, which requires an IP address for each interface, a transparent firewall has an IP address assigned to the entire device. And forwarding is done with a destination Mac address. In transparent mode, we can pass certain types of traffic that might be blocked by a routed firewall. Transparent mode has the same inside and outside subnetworks. The firewall is no longer the gateway, but one key benefit is that you can insert a transparent firewall onto the network without making any IP address changes on the other devices. Now, let's test your knowledge. There are two ways to deploy a firewall on the ASA. Outline the difference between routed and transparent mode. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** asa (5), rip (1), eigrp (1), bgp (1)
> **Definitions:** is a  (2), known as (1)
> **Speakers:** - [instructor] (1)


### 3. Manage Access Control Lists

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding ACLs](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=0)** - [Instructor] An access control list is a method used by routers and switches to block unwanted traffic and prevent network attacks. An access control list has one or more access control entries that are applied to a protocol, source and destination IP address, or network range that either allows or denies the packet as it's traveling through the device. In addition to defending the network, access control lists can be used for other purposes, such as bandwidth control, classify traffic for quality of service, or establish an IPsec tunnel. To configure an access control list, you first define the access control list, specify the filter statements, and then apply the access control list to a specific interface. There are several types of access control lists. However, on a Cisco IOS, the two main types are standard and extended. First we'll talk about standard access control list. Now a standard access control list is a simple filter that is used when you want to permit or deny traffic from a specific IP address or a specific source network. To create a standard access control list, you first identify the access control list by applying a number between one to 99 or between 1300 and 1999. Then you enter the condition statements permit or deny, so the device knows how to treat the packets
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=95)** that match the conditions. And here we see the syntax and here we see an example. Then you'll need to apply the access control list to an interface using this syntax. And here is an example. A standard access control list filters only on source IP addresses, so its uses very limited. Now because of the limitations of a standard access control list, most prefer using an extended access control list, which has advanced filtering. In addition to filtering on source and destination IP address, you can configure the access control list to filter on protocol, port numbers, as well as additional parameters. To configure an extended access control list, you first begin by applying a number between 100 and 199 or between 2000 and 2699. Then enter the condition statements permit or deny to indicate how the device treats the packets that match the conditions. Now here is the syntax and here is an example. And then you'll apply the access control list on a specific interface using this syntax. And here is an example. Then once done, to check the definitions of all configured access lists, you would use the command show access list. A standard access control list is very limited, as it only filters based on source IP addresses.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-acls?u=76281980&t=190)** Therefore, in most cases, you will use an extended access control list. Okay, now let's test your knowledge. Compare the difference between a standard and extended access control list. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Definitions:** is an  (3), is a  (2)
> **Prerequisites:** configure (3), you'll need (1)
> **Env Vars:** ios (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Working with IPv6 ACLs](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=0)** - [Instructor] Networks are slowly migrating to IPv6. In this segment, we'll review some of the differences between an IPv4 and an IPv6 access control list. We'll also review methods to create and implement an IPv6 access control list. Now, the functionality of an access control list in IPv6 is similar to using an access control list in IPv4. For example, they allow filtering based on source and destination addresses that are traveling inbound and outbound to a specific interface. In addition, similar to the extended access control lists in IPv4, an IPv6 access control list supports filtering based on IPv6 option headers, along with upper-layer protocol information to provide more granular control. Now, unlike a number in IPv4, an IPv6 access control list must be configured with a name. Now to configure an IPv6 access control list, use the IPv6 access-list command to enter into IPv6 access control list configuration mode. Next, you'll use the appropriate syntax to configure each access list entry to specifically permit or deny traffic. And then finally, you will apply
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=93)** that IPv6 access control list to an interface using the IPv6 traffic-filter command. Now, here's an example of the syntax. Of course, you first create that using the IPv6 access list, and then you use a name. And in the second section here is where we see the syntax variables. And there are more because it seems to have wrapped everything in that syntax for IPv6. We see a lot of syntax examples. Let's talk about a couple of those. Deny or permit, well, that simply is defining whether to deny or permit the packet. Protocol. Now this is the name or number of an internet protocol. Any will match all addresses. And host, this is the source or destination host address to deny or permit. Now, let's just take a look at what it would look like in the command line interface. So let's go to router three. And I'll enable and config t. Now, I'll enter into the access list mode. IPv6 access-list SAMPLE. And remember, we have to use the name. Now we're in the mode, and I'll just use a question mark to see what options we have. And now, we see the options, but let's just do one more. I'll go deny, and then use a question mark.
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/working-with-ipv6-acls?u=76281980&t=188)** And there, we can see the options for deny. Now because the concept of an IPv6 access control list might be new to you, I found a resource that might help your understanding. Here at Cisco, "Access Control Lists", and here specifically, "IPv6 Access Control Lists". Now, let's test your knowledge. To reduce the potential for attacks against IPv6 infrastructure and protocols, the team lead has tasked you to create an IPv6 access control list on the internal routers. List three main steps to configure and apply an IPv6 access control list. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Analogies:** similar to (2), for example (1)
> **Prerequisites:** configure (3)
> **Env Vars:** sample (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Configuring IPv6 ACLs](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-ipv6-acls?u=76281980&t=5)** - [Instructor] Let's do a challenge. In this challenge you are going to configure IPv6 access control lists. Now you'll go to the exercise file and open the Packet Tracer file. You'll then follow the instructions. Let's get you started. Once you open the file you'll want to save it locally in a different name as to preserve the file. Then you'll go through and follow the instructions as listed here. And I'll just scroll down. And periodically you can check the results to see how well you're doing. This tells you the assessment items. If you want to print this, you can right click and say, Print to PDF where you can save it locally and then print the file. So pause the video, grab the file, and let's get started. This challenge should take you about 30 minutes. Good luck.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), open the (1), scroll down (1)
> **Env Vars:** pdf (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (quirky music) (1)

#### [Solution: Configuring IPv6 ACLs](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=0)** - [Instructor] Okay, let's check our work. So I've opened the instructions and I'll dock them so we can more easily follow along. And I'll scroll up and we see that we need to create an access control list because one of the computers is causing a denial of service attack against Server3. So here we're going to create an access control list that will block HTTP and HTTPS. So we're going to go to Router1, to the command line, Enable and config T.
>
> **[0:43](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=43)** Now we'll create the access list. Now I want to copy the command so I get it correct and we'll paste it. And again, the second command.
>
> **[1:07](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=67)** And then it says allow all other IPv6 traffic to pass. So that will be permit IPv6 any any. And then we'll exit. So apply the access control list on the interface closest to the source of the traffic to be blocked. So if you place your cursor over the router, you can see the interfaces and it will be Gigabit 0/1. So we need to go into that interface interface gigabitEthernet 0/1 and IPv6 traffic-filter BLOCK_HTTP in.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=118)** And we'll exit. Now we're going to verify the implementation by going to PC1 and PC2. Now I'm going to copy this right here so I get it correct and we'll go to PC1 and the desktop into the web browser. And we see the website. Now we'll go to PC2 into the desktop and the browser and the website is blocked. Now I'm going to copy this again because we're going to ping this IP address. So we'll close the browser and go into the command prompt. Type ping. And the ping is successful, so I'll close that. Now I'll scroll down and we're going to configure, apply and verify a second IPv6 access control list. So now we'll go to Router3,
>
> **[3:21](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=201)** Enable, config T. So we'll create an access control list named BLOCK_ICMP on Router3. IPv6 access-list BLOCK_ICMP. And we want to block all ICMP traffic from any host to any destination. So that's deny ICMP any any. And then allow all other IPv6 traffic to pass. Permit IPv6 any any. And then we'll exit. And then again we'll need to apply it to the correct interface. So you want to just place your cursor here and we see it's GigabitEthernet0/0. Okay, now go back in and we'll issue the command interface gigabitEthernet 0/0. And now we'll apply IPv6 traffic-filter BLOCK_ICMP out. And now we'll exit and I'll close that. And now we're going to ping from PC1 and PC2 and we're going to just check
>
> **[4:54](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=294)** to make sure that they have failed. So we'll go to PC2 and to the command prompt
>
> **[5:04](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-ipv6-acls?u=76281980&t=304)** and it did fail. And now we'll go to PC1, command prompt, and it failed as well. All right, now close this and I'll copy this website. We'll go to PC1 and we'll go to the web browser and the website did display. All right, so I'll close that and now we can see that we have a 100% completion. So you successfully configured IPv6 access control list. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (2)
> **Env Vars:** pc1 (5), pc2 (4), block_icmp (3), icmp (2), http (1)
> **UI Navigation:** go to (8), scroll up (1), scroll down (1)
> **Tools:** command prompt (3), command line (1)
> **Code Identifiers:** gigabitethernet (2)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 4. Implement NAT on Cisco ASA

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding NAT](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=0)** - While some organizations have made the switch to using IPv6, most LANs continue to use an IPv4 address. IPv4 was standardized in 1981 and is a 32 bit address represented in dotted decimal. Scientists knew early on that we would run out of address space. Efforts to conserve address space began soon after the internet became public in 1992. In 1996, RFC 1918 outlines a method called private [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) that became a standard way to provide IP addressing for inside a LAN. The following are private IP addresses. We see here the Class A Private IP Range, Class B Private IP Range, and Class C Private IP Range, and you should become familiar with these ranges if you aren't already. Private IP addresses are unregistered and cannot exist outside of the LAN. Now what do we mean by unregistered? Any device on the internet will use a public address and no two hosts can have the same address. I'm here at the American Registry for Internet Numbers or ARIN. ARIN registers IP addresses. For example, if I wanted to know the IP address for [discordapp.com](https://discordapp.com),
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-nat?u=76281980&t=94)** I can go here to the [Google](../../Glossary/Service/Google.md) admin toolbox where it will present me with the information. We know that private IP addresses are only used on a [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md). In order to get to the internet, a host on the inside of a LAN must go through a router and be translated into a public IP address. Network address translation operates on a router and converts a private IP address to a public IP address and vice versa. Let's see how this works. I'm back on the ARIN site and here we can see my public IP address, which was provided by my internet service provider. However, that's not my private IP address. Let's see what my private IP address is by going into the command prompt and using IP config. Now, once I run IP config, we can see here is my private IP address. When communicating on the network, any external host will only see the public IP address. Now, this actually provides an additional layer of security by concealing the entire internal network behind that address. So now let's test your knowledge. List the range of private IP addresses for Class A, class B, and class C. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **Env Vars:** lan (3), arin (3), rfc (1)
> **URLs:** [discordapp.com](https://discordapp.com) (1)
> **Documentation:** rfc (1)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - while (1)

#### [Comparing types of NAT](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=1)** - [Narrator] Network Address translation operates on a router and converts a private IP address to a public IP address and vice versa. NAT is used on most networks as it offers the ability for every host in an organization to have a public IP address, along with providing an additional layer of security by concealing a host's actual IP address. NAT was designed as a short-term solution to the problem of the depletion of IP version four addresses. In this segment, we'll compare the various types of network address translation used on a network, including static and dynamic NAT, PAT and Policy NAT. Static NAT defines a one-to-one mapping from an internal address to a specific public address. Translation is limited to one-to-one or between blocks of addresses of the same size. For each private address, a public address must be allocated. No address pools are necessary. Unlike Static NAT that provides a permanent mapping between an internal address and a specific public address, dynamic NAT maps a private IP address to a public IP address using a pool of addresses and assigns them on a first come, first serve basis. When there are fewer addresses available than the actual number of host to be translated, Dynamic NAT is an option
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/comparing-types-of-nat?u=76281980&t=96)** to provide address translation. However, dynamic NAT is a little bit more complex than static NAT. PAT is NAT overloading, and it's also called Network Address and Port Translation or NAT. Port Address Translation uses an IP address and port number combination. For example, two internal hosts that need to send and receive traffic from the internet using a single public IP address, PAT will search for an available source port, and in some cases it's the original source port number of the internal host and will form a unique registered IP address and port number combination. Many businesses and home networks use PAT. In addition to static and dynamic NAT and PAT, you may also need to implement Policy NAT on a Cisco ASA firewall. Policy NAT overcomes the limitations of network address translation, which only considers the source address and uses additional criteria such as source and destination addresses, along with port numbers in an extended access control list. The policy rules will enhance NAT by allowing or denying specific packets. Now, let's test your knowledge. What's the difference between NAT and PAT? You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** nat (17), pat (6), asa (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Configuring static NAT](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-static-nat?u=76281980&t=5)** - Let's do a challenge. In this challenge you'll configure Static Nat. So you'll open the Packet Tracer file found in the exercise folder and then follow the instructions. You'll want to make sure your completion is 100%. Here, we can check our results. So pause the video and complete the challenge. This challenge should take you about 30 minutes. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - let (1)
> **Non-Speech:** (quirky music) (1)

#### [Solution: Configuring static NAT](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=5)** - [Instructor] Okay, now let's check our work. First I'll go here and I'll dock the instructions so we can more easily follow along. And I did save it so that I could preserve the original, I saved it locally. And if you wanted to, you could select Print to PDF and then you can print out the copy. All right, so first we want to test access without NAT by attempting to connect to server one, we need to go into PC one and use the web browser to browse the server at the IP address. So we'll go into PC one, into the browser, and we'll put the IP address, and we'll select Go. Well, nothing happens so apparently there is a request timeout. Now I'll close that and go into the command prompt. And now we'll see if we can ping the router's external interface. So we'll ping 209.165.128.130.
>
> **[1:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=72)** As you can see, we were able to ping the interface. Now I'll close that, and now we'll go into router one.
>
> **[1:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=85)** And then I'll issue the command show running config. And here we are going to take a complete look at it. And there are no references that refer to NAT. We also want to verify that the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table doesn't contain entries referring to the IP addresses for either the PC or the laptop. So that will be show IP route.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=118)** Okay as you can see, there are no IP addresses for either of those two devices. The last command is what we'll do to verify that NAT isn't being used by the router by issuing the command show IP NAT translations, there are no entries. So now we want to configure static NAT statements. And we need to take a look at the topology here and we can see the IP addresses, and we can see the inside and outside IP addresses for server one. So first we've got to go into global configuration, and once in global configuration I'll issue the command IP NAT inside source static, and then put the IP address. And now we'll have to go into the gigabit ethernet zero zero interface. IP net inside and we'll exit, and we'll go into the other interface, serial 000. And issue the command IP net outside, and I'll exit.
>
> **[3:23](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-static-nat?u=76281980&t=203)** Now we have completed this exercise, but we'll go a little bit further. We'll go back to PC one and back into the web browser and just check to see if we can connect to server one. And we are able to access the server. And now we'll go back into router one, and we'll just exit here and then show some commands. Show running config, and we'll scroll down and here we can see information about NAT. Now we'll also do show IP NAT translations. Okay, now we can see those, and the last thing we'll do is show IP NAT [Statistics](../../Skills/Data%20Science/Statistics.md). And here we can see where they're applied. So as we have completed this challenge, we configured and verified static NAT, so that outside devices can access the server using the IP address of the server. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** nat (10), pdf (1)
> **Versions:** 209.165.128 (1)
> **Cross-References:** go back to (1)
> **Tools:** command prompt (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)


### 5. Examine Zone-Based Firewalls

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding zone-based firewalls](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=0)** - [Instructor] A classic firewall configuration can be complex and overwhelming. The process relies too heavily on access control lists. A zone-based firewall enhances content-based access control and is more appropriate for multiple interfaces that have varying security requirements. With a zone-based firewall, we segment each part of the network by using zones, which is a defined area within the network that requires different access control policies. Router interfaces are assigned to zones and an inspection policy is applied to traffic moving between the zones. A zone-based firewall will define the security borders of a network where traffic from less trusted zones is inspected and subject to policy restrictions that either drop the packets or allow the traffic to pass. The default is to block all traffic unless explicitly allowed. Let's talk about how this works. In this graphic, we see a logical drawing of a network and some common zones: the outside network or internet, the inside or LAN, and we see the perimeter network where you might house essential services, such as mail and [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) that must have a public interface. A zone-based firewall can take three possible actions: inspect, pass, and drop. Inspect traffic is equivalent to a standard firewall IP inspect command. It automatically allows for return traffic
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-zone-based-firewalls?u=76281980&t=93)** and certain ICMP messages. Pass is the same as allow in a standard firewall. Pass only allows traffic to pass in one direction. Because the zone-based firewall doesn't track the state of connections, there must be a policy to allow traffic to pass in the opposite direction. Drop is the same as deny in a standard firewall. A log option is available to log rejected packets. There are several benefits to using zone-based firewalls. In addition to simplified administration, zone-based firewalls are not dependent on access control lists, and they use policies that can affect any traffic that flows through the network. Now let's test your knowledge. A coworker is becoming frustrated with keeping up the access control lists on one of the internal routers. Explain how a zone-based firewall works and why it might be a better option. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Env Vars:** lan (1), icmp (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Managing traffic between zones](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=0)** - [Instructor] Zone-based firewalls have simplified administration and use zones, policies, and traffic classes to monitor and manage traffic that flows between the zones. When using a zone-based firewall solution, we create zones, which are defined areas within a network that require different security policies. Here, we see this common example of an inside zone, an outside zone, and a perimeter zone. Each router interface represents a security zone. To manage the traffic flow from one zone to another, we create a source destination zone pair, such as the inside zone paired with the perimeter network. We then define a security policy that determines what traffic is permitted from one zone to another. Traffic classes use a class map to describe the type of traffic that requires a policy. A zone-based firewall can take three possible actions: inspect, pass, and drop. In a zone-based firewall, the default is to block traffic unless explicitly allowed. The two exceptions are if the traffic: is from the same zone or is to or from the self-zone. Now let's talk about the self-zone. The self-zone is traffic traveling to the control plane of the router that carries [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and other protocols,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=94)** such as secure shell and simple network management protocol. All interfaces on a router are automatically made part of the self-zone. There are several steps for configuring a zone-based firewall with the command line interface. First, we'll need to create zones with various security levels using the zone security command. In order for traffic to flow between all interfaces on a router, each interface must be a member of a zone. We then define traffic classes using class-map type inspect command. The class maps describe the traffic that requires a policy map that checks the traffic as it crosses a zone pair. We then establish policies between zones. For each pair of source destination zones, for example from the inside network to the internet, using policy-map type inspect command which applies the action to the class maps traffic. We apply the policies to pairs of source destination zones using the zone-pair security command. And then we assign router interfaces to zones using zone-member security interface command. Okay, now let's test your knowledge. Describe how a zone-based firewall uses the concept of zones, policies, and traffic classes to monitor and manage traffic
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-traffic-between-zones?u=76281980&t=188)** that flows between the zones. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Configuring a ZBF](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=0)** (synth intro music)
>
> **[0:05](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=5)** - [Instructor] Let's do a challenge. In this challenge we'll configure a basic zone based firewall. I have supplied a Packet Tracer file for you to follow along. We won't be using the grading feature. I just want you to get a feel for what steps are required. When setting up the firewall. You can obtain the file in the exercise folder and then follow the instructions found on the challenge worksheet. So once you get into Packet Tracer you'll want to save it locally. So you preserve the original. Now, first, we're going to see if we have any firewall functionality because we're going to test internal and external hosts. So we'll begin with PC-A and this is the outside zone and we're going to ping PC-C and we'll show you here, that IP address. Now we'll go to the command prompt and we are able to get through. Now, we'll go over to PC-C and we're going to go to the web browser and we're going to access the server. First, we need to put in the IP address as the URL and here we see the welcome page and now we can close the browser and the PC. So now I'll start to configure a basic zone based firewall on the edge router, R3, that allows internal hosts to access external resources and blocks external hosts
>
> **[1:42](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=102)** from accessing internal resources. Now, once you complete the configuration, we'll test the firewall functionality from the internal and external hosts. So we'll go into router three and we'll need a password which is Cisco con PA 55. Enable. And the password is Cisco E-N-P-A 55, and then config T.
>
> **[2:14](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=134)** Now what we need to do is create the firewall zones on router three. Now for all configuration, we'll need to provide the exact names and capitalization as specified. They have to match. So first we'll create an internal zone using the zone security command. Zone security IN-ZONE and we'll exit. And then we'll create an external zone by using the command zone security OUT-ZONE and we'll exit. Next we'll need to identify traffic using a class map. First, create an access control list that defines internal traffic. We'll use the access list command to create an extended access control list to permit all IP protocols from the network 192.168.3.0/24 to any destination
>
> **[3:16](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=196)** Access-list 101 permit IP 192.168.3.0
>
> **[3:25](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=205)** 0.0.0.255 any Now create a class map referencing the internal traffic access control list. So we'll use the class map type inspect command with the match-all option to create a class map named IN-NET-CLASS-MAP. Class map type inspect match-all IN-NET-CLASS-MAP. Then we'll use the match access group command to match access control list 101 and then exit. Now we'll specify the firewall policies. So we'll create a policy map to determine what to do with the match traffic. So we'll use the policy map type inspect command and create a policy map IN-2-OUT-PMAP policy-map type inspect IN-2-OUT-PMAP. Then specify a class type of inspect and reference class map IN-NET-CLASS-MAP, class type inspect IN-NET-CLASS-MAP. Now specify the action of inspect for this policy map. Now we know that there are other options that include pass and drop, but we're going to use inspect. And here we see no specific protocols are configured
>
> **[5:01](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-configuring-a-zbf?u=76281980&t=301)** in class IN-NET-CLASS-MAP for inspection. All protocols will be inspected. Now issue the exit command twice to leave and return to config mode. Now for your challenge you'll complete the steps and then test the firewall. The instructions are in the challenge worksheet. So pause the video and complete the challenge. This challenge should take you about 30 minutes. Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** net (5), class (5), map (5), zone (2), pmap (2)
> **Versions:** 192.168.3 (2), 0.0.0 (1)
> **Prerequisites:** configure (2)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (synth intro music) (1)

#### [Solution: Configuring a ZBF](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=0)** - [Voiceover] Okay, now let's check our work. We'll continue with configuring a zone-based firewall. So now we'll apply the firewall policies. First, create a pair of zones. We'll use the zone-pair security command and create a zone-pair named IN-2-OUT ZPAIR. And then specify the source and destination zones that were created earlier. Zone-pair security IN-2-OUT ZPAIR, source IN-ZONE, destination OUT-ZONE. Now specify the policy map for handling the traffic between the two zones. So we'll attach a policy map and its associated actions to the zone-pair using the service policy type inspect command, and reference the policy map previously created IN-2-OUT-PMAP. Service policy type inspect IN-2-OUT-PMAP, and exit. Now it's time to assign interfaces to the appropriate security zones. Now remember, each interface has to be assigned to a security zone. So first we'll go into FA 01. Zone-member security IN-ZONE, and exit. Now go into the serial interface.
>
> **[1:41](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=101)** Zone-member security OUT-ZONE, and exit, and exit again. So we'll run a command, show policy-map type inspect zone-pair sessions, to see the details. All right, here we see the details. So now we'll test firewall functionality from in-zone to out-zone and verify that the internal hosts can still access external resources after we've configured the zone-based firewall. We'll go to PC-C, which is the inside zone and we'll ping PC-A.
>
> **[2:32](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-configuring-a-zbf?u=76281980&t=152)** And once the network is converged, we are able to get through, everything is successful. And we'll close this and we'll go back to PC-A and we'll see if I can ping PC-C. We'll go to the command prompt, and again, we'll issue that same command. And we're not able to get through but that's what we wanted. The PC-A was not able to get back into the inside zone. So as we have seen, the zone-based firewall has many commands. We create the zone, we define traffic classes, establish policies, apply the policies and then assign the router interfaces. So I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** zone (4), zpair (2), pmap (2)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Tools:** command prompt (1)
> **Speakers:** - [voiceover] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Review Firewall Features on a Cisco ASA

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing access on an ASA](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=0)** - [Narrator] The Adaptive Security Appliance, has several different ways to access and manage the system. When configuring devices, a Cisco iOS is separated into different Command Modes. Each mode has a set of commands available, in general, you access the device as follows. When starting a session, you'll begin in user EXEC mode. Which only has a limited number of commands, that do not change the configuration of the router. Then you issue the command, enable, this takes you into Privileged EXEC mode. Once in this mode, you can then run any EXEC command. Then you issue the command, configure terminal, which takes you into global configuration mode. In global config mode, you can enter commands, to configure general system characteristics. Now we know how to access the system. But in most cases you don't want, unauthorized individuals to access your device. So in addition to using a password protected login, you should also post a notification banner, that displays a warning message, when trying to gain access to the system. I'm here at this site where it talks about, configuring login banners, on the Cisco Security Appliance. Now why you do this? Well, there's several reasons. Some are specific to your organization, or some are required by specific local laws. But here's another article that talks about,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=95)** what is a banner, and reasons that we would want to implement, that banner on your device. For example, they can be used to warn would be intruders, that they are not welcome on your network, and also useful to quickly identify the terminal. So a Notification Banner is like a no trespassing sign, and it should be used on all systems. So in a Cisco iOS, you can configure a banner, to display in one of several ways. So when accessing a Cisco device, anyone who connects via a command line interface, will see the message-of-the-day-banner. Once a user logs in, they will see the login banner, and when a user accesses privileged EXEC mode, they will see the exec banner. So creating a banner is pretty simple. Here is the syntax. And what you see in the curly brackets is the choice, whether it's exec, login, or message-of-the-day. And here we see an example of a banner. It says, "Enter the TEXT message. End the character with a #." Now that special character can be anything. It can be it at symbol. It can be a question mark. It doesn't matter. But the key is that, that special character, cannot be used within the text message. Okay, let's test your knowledge. A Cisco iOS is separated into different command modes, each with a set of available commands. Describe the order that you access a Cisco device,
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/managing-access-on-an-asa?u=76281980&t=191)** and what can be done in each mode. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** exec (4), text (1)
> **Code Identifiers:** ios (3)
> **Tools:** terminal (2), command line (1)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)
> **Warnings:** warning (1)

#### [Logging onto the ASA](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=0)** - [Instructor] The ASA has several ways to access and manage the system. The network administrator can use telnet, SSH, along with HTTPS. To configure telnet access to the ASA, you'll first need to identify what IP address the ASA will accept when making a connection. The next step is where you can modify the time out. Now, the default is five minutes and here I've set it to time out after seven minutes. The ASA supports Secure Shell. And this is actually a better option than telnet as it uses encryption to secure the connection between the client and the server. To configure SSH, you'll need to complete the following commands. First you'll need to create a username and password and then enable authentication for users. And because it's encrypted, you'll need to generate a key pair. Now, you may get a warning that says you already have a key pair. Do you really want to replace them? And if you say yes, the generation process will begin. Once that's complete, you'll want to write the keys to persistent flash memory. After the configuration, you'll need to allow access from the inside network. And again, you could set a time out of something other than the default of five minutes. In addition to using the command line interface, you can also use the adaptive security device manager. The device manager provides a graphical user interface.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/logging-onto-the-asa?u=76281980&t=97)** And here we see the following [Dashboards](../../Skills/Data%20Science/Dashboards.md) that allow you easy access to the ASA. Now, to use the adaptive security device manager, you'll need to enable the server and allow connections to the ASA. So again, you'll create a username and password, enable authentication for users, and generate a key pair if necessary. If you do generate a key pair, you'll want to save them to persistent flash memory. And here we need to enable the HTTP server and allow a host to access the ASA from the inside network. Now let's test your knowledge. Your team lead has tasked you to access one of the branch [office](../../Skills/Web%20Development/Microsoft%20Office.md)'s ASA to update an access control list. What are your choices when accessing the ASA? You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** asa (9), ssh (2), https (1), http (1)
> **Prerequisites:** you'll need (5), configure (2)
> **CLI Commands:** ssh (2)
> **Tools:** command line (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Assigning security levels on the ASA](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=0)** - [Instructor] The adaptive security appliance defines security levels that determines how traffic flows through each of the interfaces. Some areas are more trustworthy than others. In this segment, we'll review the concept of security levels and some basic configuration guidelines. When configuring the ASA, each interface must have a security level from zero to 100. A higher security level is more trustworthy. Now let's talk about how this works. Traffic from a higher security level can freely pass through to a lower security level. But if there is any traffic going from a lower to a higher security level, the ASA will automatically block and inspect the traffic using an access control list. Then if allowed, the traffic will be allowed to pass through the interface. On a Cisco ASA, security level 100 is used by the inside interface by default. The lowest possible level is used by the outside interface by default. And no traffic can freely flow from an untrusted network to a trusted network without checking the access control list. So let's take a look at an example configuration. Now here, we see the outside interface, the perimeter interface, and the inside interface, and each with the appropriate security levels. We don't allow any traffic to freely flow
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/assigning-security-levels-on-the-asa?u=76281980&t=94)** from the outside to the perimeter or from the perimeter to the inside until the firewall inspects the traffic. However, we do allow traffic to freely flow from inside of the LAN to the perimeter and from the perimeter network to the outside. Now let's test your knowledge. The ASA security levels determine how traffic flows through the interfaces. The levels range from zero to 100, with 100 as the most trusted. Imagine a standard network using a perimeter network. Describe some general concepts when configuring security levels on the ASA. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** asa (5), lan (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Modular Policy Framework (MPF)](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=0)** - [Instructor] An access control list can filter layer three and layer four traffic. However, the Cisco Modular Policy Framework enhances the function of an access control list by providing policies to prioritize certain traffic flows, rate limit bandwidth for specific applications, and ensure quality of service. The Modular Policy Framework has three building blocks, class maps, policy maps, and service policies. Class maps define which traffic is of interest and are used to categorize traffic into classes. Extended access control lists are typically used to define traffic, then the access control list is referenced in the class map. Policy maps are used to define what action is to be taken for a class. Actions that can be specified are allow, block, and rate limit. Basically, it answers the question, what do I do with the traffic? And a service policy is used to specify where the policy map should be implemented. We create a service policy and then apply the policy map to a specific interface. For example, let's discuss two examples of how the Modular Policy Framework might be implemented. We create a class map to monitor voice over IP traffic. The policy map prioritizes that traffic, and we create a service policy and specify that we apply the policy map
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/understanding-modular-policy-framework-mpf?u=76281980&t=94)** to an inside interface. We create a class map to monitor internet traffic. The policy map inspects that traffic, and we create a service policy that specifies that we apply the policy map to an outside interface. The Modular Policy Framework can support many different features. Features include TCP and UDP connection limits and timeouts, deep packet inspection, and ensures quality of service by shaping and policing traffic. To learn more, you can visit this page here on using Modular Policy Framework by Cisco. Now let's test your knowledge. The Cisco Modular Policy Framework enhances the function of an access control list. Discuss the three building blocks and how they work. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (1), udp (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Implementing high availability](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=0)** - [Instructor] In networking, the rule of five nines means that you goal to have the network available 99.999% of the time, which equates to five minutes and 15 seconds of downtime a year. To achieve this goal, the network administrator must take steps to ensure high availability as the network must be able to quickly recover from disruptions and failure. High availability includes IOS resilient configuration. This allows the administrator to make a secure copy of the router configuration and image stored locally on the router in a set of files called the bootset. There are also protocols to ensure traffic will continue to flow in case of device failure. Those include first hop redundancy protocol, hot standby router protocol, virtual router redundancy protocol, and gateway load balancing protocol. In addition, the network administrator can take advantage of Cisco's high availability technology which provides quick recovery from disruptions that can occur in any part of the network. When implementing failover technology, two devices are connected to one another and they communicate failover information. When the ASA detects a device or interface failure, a failover occurs. Failover techniques include active-passive, active-active, and clustering.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=96)** Active-passive uses a pair of adaptive security appliances. One ASA is an active partner and forwards traffic, and the passive partner remains quiet and monitors the active partner for a failover to occur, and in case of failure will take over forwarding duties. Active-active uses a pair of ASAs and both ASAs forward traffic concurrently. Each ASA runs two context: one context is active and one is standby. Now, there are four virtual firewalls. In case of failure on one of the devices, the other ASA will take over the role of forwarding traffic. Keep in mind, this method is only available on units that can run multiple context mode and it is a little bit more complex to configure. And with clustering, all ASAs are active in a cluster and you can use more than two ASAs in a cluster to provide redundancy. One key element is for failover configurations to be successful, all devices must have the same [Hardware](../../Topics/Hardware.md) and software components. So in order to adhere to the rule of five nines, we use methods to ensure traffic will continue to flow in case of device failure. Methods include IOS resilient configuration, redundant protocols, and Cisco's high availability technology. Now let's test your knowledge.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/implementing-high-availability?u=76281980&t=192)** When using high availability technology, outline the three failover techniques. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** asa (4), ios (2)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Versions:** 99.999 (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Grasping Hot Standby Router Protocol (HSRP)](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=0)** - [Instructor] There are multiple methods to ensure high availability. One method is to use hot standby router protocol, a Cisco proprietary protocol that helps ensure high availability by providing redundancy and ensuring a fault-tolerant gateway. Now we'll talk about the various states that hot standby router protocol goes into, but let's talk about a couple of terms. One is a virtual IP. Now, this is the IP address assigned as a default gateway to all hosts on the network. There's also a virtual MAC address. Now, the MAC address is generated automatically by hot standby router protocol. And preempt, now in this state, the standby router automatically becomes the active router. So let's talk about the states. As we see, there are several states. Now, initial or init is the starting state and indicates that the hot standby router protocol is not running. You'll see the initial state when there is a configuration change or when the interface becomes active. During the learn stage, the router is still waiting to hear from the active router. The router doesn't know the virtual IP address yet, nor has seen a hello message from the active router. During the listen stage, the router knows the virtual IP address, but is neither the active router nor the standby router. It listens for hello messages from those routers. During the speak stage,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/grasping-hot-standby-router-protocol-hsrp?u=76281980&t=95)** the router has the virtual IP address and sends periodic hello messages, and is actively participating in the election of the active and/or standby router. During the standby state, the router is a candidate to become the next active router and sends periodic hello messages. Now, aside from state changes, there must be at least one router in standby state. In active state, the router is the master and is forwarding packets to the group's virtual MAC address and sends periodic hello messages. Now we enable hot standby router protocol by using the standby ip command. This activates the hot standby router protocol on the configured interface. You'll need to enter standby preempt on each interface so that if a router fails and comes back up, the preemption occurs and restores load balancing. If we set a priority value, this will help us choose the active router. The range is from one to 255 and the priority is 100. The highest number represents the highest priority. To verify the protocol, use the show standby command. Now let's test your knowledge. Hot standby router protocol is a Cisco proprietary protocol that helps ensure high availability. List and describe the six states of hot standby router protocol. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Env Vars:** mac (3)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Hot Standby Router Protocol](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/challenge-hot-standby-router-protocol?u=76281980&t=0)** - [Instructor] Let's do a challenge. In this challenge, we'll take a look at hot standby router protocol and watch the state changes as we take an interface down and bring it back up. You'll find the file in one of the samples using this path. For this challenge, you'll simply follow the instructions. You'll go to router one and router zero and show standby. Then on router zero, you'll shut down fa0/0. On router one and router zero, you'll show standby again and then from PC zero, ping 4.1.1.1. On router zero, issue a no Shutdown to bring the interface back up, and then on router one and router zero, you'll show standby. To get you started, let's get that file. Go to File, open Samples, Networking, Hot Standby Router Protocol, and Ping When Router Priority is Higher. Once you open it, you can rearrange the instructions to give yourself a little more landscape. So pause the video and complete the challenge. This challenge should take you about 10 minutes. Good luck.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Versions:** 4.1.1 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Hot Standby Router Protocol](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=0)** - [Instructor] Okay, now let's check our work. We see over in the right-hand side, the first thing it says is that PC0, the default gateway, is 1.1.1.7. So we'll need to change that.
>
> **[0:26](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=26)** And then we need to complete step two of both routers. So first, we'll go into Router0, and into FastEthernet0/0, and we'll issue the command standby 1 ip 1.1.1.7,
>
> **[0:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=47)** and then we'll do the same thing to Router1. We'll go into FastEthernet0/0, and issue the command standby 1 ip 1.1.1.7.
>
> **[1:08](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=68)** Now we'll go back to PC0, and into the Command Prompt, and we'll ping 4.1.1.1. And the request has timed out. Now, we'll go back to Router0 and Router1, and complete the instructions. We're already in FastEthernet0/0, and I'll type standby 1 priority 110. This will bump up the priority a bit, and then I'll type standby 1 preempt. We'll exit and exit, and then I'll issue the show standby command. And we see the state is active. Now I'll go into Router1. I'm already in FastEthernet0/0, and we'll type standby 1 preempt. Exit, exit, and we'll show standby.
>
> **[2:30](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=150)** And here we see the state is standby. Now, we'll do a ping again from PC0. And we have success. Now, watch what happens when I shut down the interface Fa0/0 on Router1. We'll just go here and issue a shutdown. Now we're going to see the state changes, because the interface is now down. And you see the red arrows, meaning that connection is down. So to provide the redundancy, Router1 is going to take over, and here we see that the standby state has changed to active. So let's go back to PC0 and try a ping again, and we're able to get through. So now, let's bring that interface back up.
>
> **[3:47](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/solution-hot-standby-router-protocol?u=76281980&t=227)** So now, we see the state change. We see speak to standby, and then standby to active. And the same thing happened on Router1. We went from standby to active, and then from speak to standby. So Router1 has resumed its position as the standby router. So as we can see, the hot standby router protocol is a protocol that ensures high availability by providing redundancy, and ensuring a fault tolerant gateway. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** pc0 (4)
> **Versions:** 1.1.1 (3), 4.1.1 (1)
> **Cross-References:** go back to (3)
> **Tools:** command prompt (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-cisco-firewall-technologies-19313765/next-steps-23667753?u=76281980&t=0)** - [Instructor] Thank you for watching Cisco [Network Security](../../Skills/Cybersecurity/Network%20Security.md) Firewall Technologies. In this course, we learned the core concepts of firewalls, including stateless, stateful, and application firewalls, and how they function in different security contexts. We reviewed practical skills in configuring basic firewalls, managing access control lists, and implementing network address translation on a Cisco ASA. Finally, we explored advanced features like zone-based firewalls, the Cisco Modular Policy Framework, high availability technology, and the Hot Standby Router Protocol. If you're interested in learning more, please check out the library where new courses are added all the time. If you're interested in learning about packet analysis, please check out my [Wireshark](../../Skills/Cybersecurity/Wireshark.md) courses. You might want to check out Securing the [IoT](../../Glossary/Concept/IoT.md) Security Risks, and any course in the Cisco CyberOps series will be well worth your time. For a complete list of courses, visit my author page. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [IoT](../../Glossary/Concept/IoT.md) (1)
> **Env Vars:** asa (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Lisa Bock](../../Instructors/Cybersecurity/Lisa%20Bock.md)

## Resources

- Exercise files available

## Skills Covered

- Network Security
- Cisco Firewall Security

## Path Context

### In [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)
← [Cisco Network Security- Secure Routing and Switching](Cisco%20Network%20Security-%20Secure%20Routing%20and%20Switching.md) | **5 of 7** | [Cisco Network Security- Intrusion Detection and Prevention](Cisco%20Network%20Security-%20Intrusion%20Detection%20and%20Prevention.md) →

## Appears In

- [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)

## Related Courses

_Courses sharing skills:_

- [Cisco Network Security- Secure Routing and Switching](Cisco%20Network%20Security-%20Secure%20Routing%20and%20Switching.md) — Network Security
- [Cisco Network Security Core Security Concepts](Cisco%20Network%20Security%20Core%20Security%20Concepts.md) — Network Security
- [Network Forensics](../../Skills/Cybersecurity/Network%20Forensics.md) — Network Security
- [Security Testing Essential Training (2022)](Security%20Testing%20Essential%20Training%20(2022).md) — Network Security

---

[↑ Back to top](#)