---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-vpn-17334607
url: "https://www.linkedin.com/learning/cisco-network-security-vpn-17334607"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 2/5/2025
learners: 14955
skills:
  - Cisco VPN
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQF31SgzrqPg8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670433939935?e=2147483647&amp;v=beta&amp;t=z3ERHTsJr7RrZPTKQ3Uxn3crKUJraOKL0Cz--0W4zFI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)'
prev_courses:
  - '[Cisco Network Security- Secure Access](Cisco%20Network%20Security-%20Secure%20Access.md)'
next_courses:
  - '[Cisco Network Security- Secure Routing and Switching](Cisco%20Network%20Security-%20Secure%20Routing%20and%20Switching.md)'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":3,"total":7,"prev":"Cisco Network Security- Secure Access","next":"Cisco Network Security- Secure Routing and Switching"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/cisco-vpn
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20VPN.md)

![Cisco Network Security: VPN](https://media.licdn.com/dms/image/v2/C4D0DAQF31SgzrqPg8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1670433939935?e=2147483647&amp;v=beta&amp;t=z3ERHTsJr7RrZPTKQ3Uxn3crKUJraOKL0Cz--0W4zFI)

# Cisco Network Security: VPN

> Suggested prerequisites Cisco Certified Network Administrator (CCNA) training and/or knowledge of networking fundamentals, devices, cables, and topologies Projects Practice core networking skills using self-grading examples from Packet Tracer. Configure a clientless SSL VPN that allows a remote user to securely access predefined corporate resources from any location using a browser. Configure basi

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607) | 1h 45m | Intermediate | 15K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Securing data in transit](#securing-data-in-transit)
  - [Discovering resources](#discovering-resources)
  - [Using Packet Tracer](#using-packet-tracer)
  - [Enrolling in Cisco Network Academy](#enrolling-in-cisco-network-academy)
- [**1. Understand VPN Concepts**](#1-understand-vpn-concepts) (7 videos)
  - [Describing a VPN](#describing-a-vpn)
  - [Evaluating types of VPNs](#evaluating-types-of-vpns)
  - [Recognizing VPN topologies](#recognizing-vpn-topologies)
  - [Comparing the main types of VPNs](#comparing-the-main-types-of-vpns)
  - [Dissecting VPN components](#dissecting-vpn-components)
  - [Discovering the Cisco ASA](#discovering-the-cisco-asa)
  - [Using the Cisco ASDM](#using-the-cisco-asdm)
- [**2. Discover IP Security (IPsec)**](#2-discover-ip-security-ipsec) (5 videos)
  - [Summarizing IPsec](#summarizing-ipsec)
  - [Reviewing IPsec components](#reviewing-ipsec-components)
  - [Using the IPsec AH](#using-the-ipsec-ah)
  - [Outlining the IPsec ESP](#outlining-the-ipsec-esp)
  - [Evaluating operating modes](#evaluating-operating-modes)
- [**3. Configure a VPN**](#3-configure-a-vpn) (4 videos)
  - [Connecting with an always-on VPN](#connecting-with-an-always-on-vpn)
  - [Comparing hairpin vs. split tunnel](#comparing-hairpin-vs-split-tunnel)
  - [Translating the network address](#translating-the-network-address)
  - [Traversing through a NAT device](#traversing-through-a-nat-device)
- [**4. Examine a Remote Access VPN**](#4-examine-a-remote-access-vpn) (4 videos)
  - [Challenge: Clientless SSL VPN](#challenge-clientless-ssl-vpn)
  - [Solution: Clientless SSL VPN](#solution-clientless-ssl-vpn)
  - [Employing an AnyConnect SSL VPN](#employing-an-anyconnect-ssl-vpn)
  - [Assessing endpoint posture](#assessing-endpoint-posture)
- [**5. Investigate a Site-to-Site VPN**](#5-investigate-a-site-to-site-vpn) (4 videos)
  - [Ensuring Perfect Forward Secrecy](#ensuring-perfect-forward-secrecy)
  - [Setting up an IPsec site-to-site VPN](#setting-up-an-ipsec-site-to-site-vpn)
  - [Challenge: Configure a site-to-site VPN](#challenge-configure-a-site-to-site-vpn)
  - [Solution: Configure a site-to-site VPN](#solution-configure-a-site-to-site-vpn)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing data in transit](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/securing-data-in-transit?u=76281980&t=0)** - [Lisa] In today's complex world corporate network boundaries are blurred. Virtual private networks provide a way for remote workers and sales staff to communicate with the internal network over and insecure public network. In this course, I'll cover VPN concepts and outline how they provide confidentiality, integrity and authentication. I'll review the various types of VPNs along with the different choices that include IP SEC, SSH and SSL VPNs. I'll cover the framework of IP SEC and the components and I'll discuss the various types of configuration options such as Hairpin, always on and that traversal and we'll learn how to configure a remote access and site to site VPN. Hello, my name is Lisa Bock and I'm a security ambassador. I am super excited to bring you this series on CCNA [Network Security](../../Skills/Cybersecurity/Network%20Security.md) and this section on VPN technology so that you can improve your skills and configuration and maintenance of Cisco devices. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Env Vars:** vpn (3), sec (2), ssh (1), ssl (1), ccna (1)
> **CLI Commands:** ssh (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [lisa] (1)

#### [Discovering resources](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-resources?u=76281980&t=0)** - [Narrator] This course is an intermediate level course for network administrators, engineers, managers, students and anyone with an interest in learning more about Cisco [Network Security](../../Skills/Cybersecurity/Network%20Security.md). Participants should have a solid knowledge of networking fundamentals, devices, cables, along with various topologies, and have completed CCNA training prior to starting this course. I cover a lot of information but I provided some files for you. Go to the exercise file on the welcome screen where you will see the following. Packet tracer files that we will use in the challenge exercises and a challenge and hyperlinks document. So you can follow along, I included the links to the resources that I reference throughout the course. And then during selected segments, I'll assess your knowledge by using the following icon with a question from the video. Use the document to write out your responses for that question. You'll also find a challenge question for each of the segments. So sharpen your pencil and let's start the learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** ccna (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Using Packet Tracer](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=1)** - [Instructor] During this course, I'll demonstrate some of the concepts using Packet Tracer, an application made available through [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) Academy. Packet Tracer lets us configure common networking equipment. In this segment, we'll take a brief look at Packet Tracer so you can navigate the interface more confidently. Each time you launch Packet Tracer, it will make you re-authenticate with Cisco Networking Academy. And then once done, you can use the app. I've opened up Packet Tracer so we can explore the interface. Yours might look a little different, but at the top we're going to see some common menu choices. And those include, File, Edit, Options, and I'll select Preferences. And here what I commonly do is change the font, and that's just to modify the size of the application and possibly the command line interface. But there's lots you can do to personalize your own interface. View, where you can [Zoom](../../Skills/Software%20Development/Zoom.md) in or zoom out, or go to specific views. Tools. Extensions, and there you see the Activity Wizard. Now this is where you can build your own activities, and this is commonly used by instructors, but of course you can do it yourself. The Window and, of course, Help. Now in the center,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=94)** this blank white space is the logical drawing canvas. Now of course there are pre-made Packet Tracer activities that instructors use for assessments with students, but you can easily build a simple network and practice configuration on your own. Now in the lower left-hand corner, this is where you can add certain devices. So if you just click on, for example, Network Devices, you can see a nice selection. And when you find one you like, you can just pull it up. Now you can also rename it, and we can put R1, and then we can select some other devices. Here are some end devices, and there's a nice selection here. Components. And connections. And there's a nice selection of connections, for example, Console, Copper Straight Through, Cross-Over, Fiber, and many others. Here's Miscellaneous, and Multiuser Connection. Now when you're done, and if you don't want that device, and I just click on it and it'll open it, but really I just want to delete it. So I'll just hit Delete. And it says, "Do you really want to delete R1?" And I say Delete. And then once done, I'll go back to the Select tool, and now we'll go over to the lower right-hand corner. Now on the right-hand side, we'll see the Realtime and [Simulation](../../Skills/Hardware/Simulation.md) bar. Now, I'll most likely be in Realtime,
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/obtaining-packet-tracer?u=76281980&t=190)** but you can go into Simulation if you want to. And in some courses we may do this. So I'll select Simulation. Now this is where we can see the status of a packet traveling from one device to another. It's like a packet analysis tool built into Packet Tracer. And I'll go back to Realtime. Well, now there's also some nice pre-made samples that I'll be using throughout the course. Let's take a look. I'll go to File, and Open Samples. It'll warn you that, "Any unsafe changes will be lost. Do you want to save your network?" And I'll say No. And then you'll see the saves. And there are different categories. I'll select [Cybersecurity](../../Topics/Cybersecurity.md), and then I'll go to AAA, and then I'll select Simple Authentication, and then I'll open it. Now, once it's open, you can move the instructions over. But what it will have you do is just one simple task so you get a feel for how something's supposed to work. Cisco Academy offers a tutorial. If you haven't already taken it, or it's been a while since you've used Packet Tracer, it's well worth your time. I know you'll enjoy working with Packet Tracer on my course and any of the CCNA courses in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation](../../Skills/Hardware/Simulation.md) (3), [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **UI Navigation:** go to (3), click on (2)
> **Analogies:** for example (2), it's like (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** aaa (1), ccna (1)
> **Cross-References:** go back to (2)
> **Tools:** command line (1)
> **Prerequisites:** configure (1)

#### [Enrolling in Cisco Network Academy](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=0)** - [Instructor] Cisco developed Packet Tracer in order for students to have an interactive way to practice for CCNA exams. In this segment, I'll show you how you can download your own copy of Packet Tracer from Cisco Network Academy. If it's been a while since you had CCNA, you'll want to check out the Cisco Network Academy at [netacad.com](https://netacad.com), where we can see information about the academy. Cisco Network Academy is a skills-building program for learning institutions and individuals. Cisco offers many courses that are instructor-led through academies that are scattered throughout the world, which is where you may have taken your CCNA. Cisco now offers a number of free courses that are self-paced on a variety of current world skills. Let's take a look. I'll select explore, and then I'll scroll down, where we can see many subject areas, such as [Cybersecurity](../../Topics/Cybersecurity.md), networking, programming, and information technology, but here's the one I want you to select, Cisco Packet Tracer, and here is where we'll see a few self-paced courses, and I'll select this one. Now, to get your own copy of Packet Tracer, you'll need to sign up, and then you'll need to enroll in one of the self-paced courses.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/enrolling-in-cisco-network-academy?u=76281980&t=94)** So you'll put in your information, and you'll get an email link that will allow you to go in, take the course, and you'll learn a lot about Packet Tracer and what it can do, and then once you're done, you can download your own copy of Packet Tracer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Env Vars:** ccna (3)
> **Prerequisites:** you'll need (2)
> **URLs:** [netacad.com](https://netacad.com) (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Understand VPN Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Describing a VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=0)** - [Instructor] Today, when you click on a hyperlink, you'll want to access a remote resource. In most cases, we must transport data over an insecure network such as the internet. In this segment, we'll learn how a [virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md) can secure communications and provide confidentiality, authentication, and integrity. We access resources in the cloud or remote [office](../../Skills/Web%20Development/Microsoft%20Office.md), on a mobile device or laptop, in an airport, or even another country. As a result, many businesses and consumers use virtual private network technology to transmit data. The history of VPN began in the late 1990s when a software engineer at [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) developed a secure way for a client to connect to a server. The engineer developed Point-to-Point Tunneling Protocol, which is the forerunner of today's VPNs. Microsoft included VPN capabilities in their operating systems for anyone to use. However, during that time, only businesses were using VPN technology. Eventually, home users started to embrace the idea of protecting their data, and [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) sites began to use SSL VPNs to secure credit card transactions. Concurrently, businesses expanded the use of VPN technology to protect communications
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/describing-a-vpn?u=76281980&t=94)** of the growing number of remote workers. After the initial setup, using a VPN is transparent to the client, as they access network resources in the same way they would as if they were sitting in the private network, but remotely using cryptographic tunneling protocols. VPN technology has improved and are adaptable for all types of internet users, from desktop to laptop, and mobile operating systems. A VPN uses technology such as IPsec and transport layer security to secure network traffic between sites. Today, there are many reasons to have a VPN. A VPN protects your communication, and can protect your identity while traversing the internet. VPNs provide confidentiality by encrypting the data, authentication to ensure only authorized entities are communicating, and integrity by detecting any message modification. Now let's test your knowledge. A virtual private network secures communications when traveling over an insecure network. Explain the benefits of using a VPN. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **Env Vars:** vpn (10), ssl (1)
> **Analogies:** such as (2)
> **UI Navigation:** click on (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating types of VPNs](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=0)** - [Instructor] A VPN is a secure channel or tunnel between two endpoints that encrypts and keeps data confidential as it crosses through an insecure network. VPNs can protect at different layers of the OSI model from the data link all the way to the application layer. There are choices in the way you create a VPN, such as IPsec, SSL/TLS, and browser-based VPNs for consumers. Let's start with IPsec. An internet protocol security or IPsec VPN, works by creating a secure channel, using the internet key exchange protocol or IKE to first authenticate the secure connection. Then IPsec uses symmetric encryption, such as AES, to secure the data between the endpoints. An IPsec VPN is a solid choice, however it can run into trouble with network address translation and firewall rules. Secure Shell offers VPN tunneling and built-in username and password authentication to establish a connection to a single computer. It uses port 22 to authenticate the process. PuTTY is something that you can use to create the connection for Secure Shell. I'm here at the PuTTY download page and you would be able to download the appropriate version for your system. Now here's the interface for your PuTTY configuration
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=95)** and it's pretty well straightforward. Here you put in the host name or IP address and it's defaulted at port 22. SSL/TLS-based VPNs have been around since the early 1990s and were first developed by Netscape and eventually adopted by nearly everyone to create tunnels between specific applications, primarily in web browsers. SSL/TLS VPNs provide encryption and reliability for the upper layers of the OSI model. We use an SSL/TLS VPN for transmitting sensitive information, such as [Banking](../../Skills/Software%20Development/Banking.md) or credit card information to a server using HTTPS.. Businesses will most likely use an SSL certificate to reassure clients. Unlike SSH, it doesn't require any authentication and typically uses port 443 to make a connection. Multi-protocol label switching includes various methods for creating VPNs, using [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), and it provides a flexible way to route traffic through an MPLS network. Now, there are other solutions as well. I'm here at this website, Open VPN, which is an open source solution that has many security and control features. Open VPN uses SSL/TLS so it's able
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-types-of-vpns?u=76281980&t=190)** to cross network address translation and firewalls with minimal problems. In some case, you might simply want or need a browser-based VPN, and you can go online to select a couple of them. I'm here at HTTPS everywhere, whereas you can see you can download it and install it and it will work with your browser. ZenMate is another option where you can browse anonymously when a secure connection is not available. Now let's test your knowledge discuss VPN choices available today. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (2), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** vpn (10), ssl (6), tls (5), osi (2), https (2)
> **Ports:** port 22 (2), port 443 (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (3)
> **CLI Commands:** ssh (1), make (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** install (1)

#### [Recognizing VPN topologies](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=1)** - [Instructor] A VPN topology defines the way we configure devices to support the VPN. An organization decides to implement a VPN according to business needs. In general, we group VPN topology in three main categories: remote access VPN, intranet VPN, extranet VPN. A classic concept of a VPN is a remote access VPN, which allows users to have the ability to securely access internal resources. When using a remote access VPN, users must be part of the corporate network and the network administrator invites mobile and small [office](../../Skills/Web%20Development/Microsoft%20Office.md)/home office employees to join by setting up a VPN so they can access the corporate network anytime, anywhere. And intranet is either a confined private network within the LAN, or it may be globally interconnected LANs that use WAN technologies to communicate. We limit access to the internet to people, processes, and devices that are part of the organization's directory. We use an intranet site to site VPN to link branch offices. An extranet is an internet or private network that only authorized outsiders can access. That could include subcontractors, temporary workers, or business-to-business communication.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=98)** The network administrator sets up a secure tunnel so they can securely access the corporate network anytime. Here we see in this graphic the main company is Samurai Blazers. With business-to-business communication, we see that Scorpion Paint, Silver Star Leather, and Fireball Engines access resources using an extranet. Physical topologies include hub and spoke, [Mesh](../../Skills/Software%20Development/Mesh.md), and hybrid configuration. A common configuration is the hub and spoke topology. The hub is the central office, as we see on the left, and the remote offices are the spokes. Many organizations use this hierarchy design, such as governments, retail, and banks. A hub and spoke configuration works well when sites have to communicate with the central office but not to each other. Hub and spoke topology might not work for everyone, sometimes because of prohibitive cost associated with international links, or an organization may require peer communication, where they must talk with one another. As a result, an organization may choose a mesh or partial-mesh topology. With a full-mesh, all links communicate with one another. With a partial-mesh, sites may only have communication
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/recognizing-vpn-topologies?u=76281980&t=192)** with certain other sites. Here we see a partial-mesh where Boston will be able to communicate with New York, and New York will be able to communicate with London, but New York is unable to communicate directly with Madrid. Large multinational companies may have a hybrid formation that combines hub and spoke with a partial-mesh topology. Here we see Boston and Paris using hub and spoke topology, and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the network is using a partial-mesh topology. A VPN topology defines the way we configure devices to support the VPN. Topologies include remote access, internet, and extranet VPN. And physical topologies include hub and spoke, mesh, and hybrid configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (9), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** vpn (15), lan (1), wan (1)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** configure (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Comparing the main types of VPNs](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=1)** - [Instructor] An external access VPN can be remote access or site-to-site. A remote access VPN connects clients on the outside to the corporate network. Clients include outside sales staff and teleworkers that need access to corporate resources. In order for a remote access VPN to work, such as a remote access full tunnel, the remote worker must install VPN client software on their device. A remote access VPN can also include clientless SSL VPN, which provides access without requiring client software on the remote device. When accessing the corporate boundary, the client initiates a connection, and the request passes through the internet. Once it reaches the corporate boundary, the VPN server receives the request and either accepts or rejects the request to connect. The VPN server will many times pass the request through a radius server. The radius server consults a list of policies, such as connection request policies. This includes checking authentication and authorization conditions along with any accounting policies. Health policies assess the health of a device prior to joining the network, includes the status of a client's [Windows](../../Glossary/Service/Windows.md) updates
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=94)** and possible malware. Network policies include the set of conditions, constraints, and settings that allow clients to join according to parameters, such as time of day, geolocation, and how long they can be on the network. A site-to-site VPN connects entire networks. For example, a hub and spoke topology, where the hub is the central [office](../../Skills/Web%20Development/Microsoft%20Office.md) and the remote offices are the spokes. When using a site-to-site VPN, the individual hosts do not have client software. The connection is transparent in that clients are unaware that they are connecting via a VPN. Clients send traffic via normal TCP/IP connections through a VPN gateway. When setting up a VPN, the network administrator has choices. A common secure tunneling protocol is IPsec encapsulating security payload as a full tunnel or site-to-site VPN. The encapsulating security payload protocol provides confidentiality, authentication, integrity, and anti-replay service for IP version four and IP version six. The network administrator may also use an SSL/TLS as a full tunnel or clientless VPN. With a clientless VPN,
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-the-main-types-of-vpns?u=76281980&t=188)** the client doesn't have to have any VPN client software. They simply connect through a web browser. The Cisco ASA offers choices in how to configure the VPN. We could use an IPsec site-to-site VPN, a full tunnel SSL VPN, clientless SSL VPN, or a full tunnel IPsec VPN. Whether an external access VPN is a remote access or site-to-site, the network administrator has choices as to how to configure the VPN, so that clients can securely connect and communicate with the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** vpn (24), ssl (4), tcp (1), tls (1), asa (1)
> **Analogies:** such as (3), for example (1)
> **Prerequisites:** configure (2), install (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Dissecting VPN components](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=0)** - [Instructor] The purpose of a VPN is to secure network communications and as a critical component of an organization's overall security plan. Today, the market has multiple VPN choices and the networking team must ensure the best possible solution for the organization. Now, there are a number of key components to ensure an effective VPN and those include the VPN platform, either [Hardware](../../Topics/Hardware.md) or software, and the cryptographic techniques that ensure confidentiality, integrity and authentication and key exchange so that both parties have the same shared key. One of the key components is the platform and you have a choice whether to select a hardware or software VPN. When looking at a hardware VPN, many consider a dedicated appliance more secure because the manufacturer design the device solely to manage multiple VPN connections. Hardware VPNs have better performance and offer load balancing. However, when using a hardware solution, upgrading and expanding VPN capabilities can be a problem and may require purchasing a newer model. Software VPN solutions are available that scale easier as many times they only require additional memory and processing. However, software VPNs rely on the host operating system that may have vulnerabilities
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=95)** which makes the overall system more prone to attacks. In addition, performance may suffer as the VPN must coexist with other applications. At the heart of a VPN are the cryptographic techniques that ensure confidentiality, integrity, and authentication. For data confidentiality, we use symmetric encryption [Algorithms](../../Skills/Software%20Development/Algorithms.md) that include AES and AES cipher block chaining mode. For [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md), we use hash algorithms that include SHA-224 and SHA-256. And for data authentication, we can either use a pre shared key or the asymmetric encryption algorithm RSA. And of course, when using a VPN, key exchange is essential as both parties must use the same shared key. Choices for key exchange include RSA, internet Key Exchange or IKE which is a method used in IPsec and in some cases we use a pre shared key. Whatever solution you decide on, make sure the platform is in line with the most secure cryptographic algorithms available. And I'm here at this website where we can learn more about next generation [Cryptography](../../Skills/Cybersecurity/Cryptography.md). And now if we drill down the document, we can see some recommendations for cryptographic algorithms. Of course, if it says avoid you should not use those
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/dissecting-vpn-components?u=76281980&t=188)** and some are labeled acceptable and what would be more in line with the latest cryptographic requirements. Now let's test your knowledge. Describe the VPN components required to secure data in transit. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (5), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (4), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1)
> **Env Vars:** vpn (13), aes (2), sha (2), rsa (2), ike (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Discovering the Cisco ASA](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=0)** - Throughout the CCNA [Network Security](../../Skills/Cybersecurity/Network%20Security.md) coursework we reference the different types of equipment network administrators can use to secure their organization. One of the devices is the Cisco Adaptive Security Appliance. The ASA is a firewall that offers several additional functions, and that includes malware defense, intrusion prevention, content inspection, and VPN capabilities for networks of all sizes. Although a single device, the ASA has a number of different form factors that you might work with. And that includes Blade, standalone or virtual appliance. The ASA software integrates well with other enterprise equipment such as Unified communication and cloud technology. As a student, you may work with Packet Tracer and this includes the ability to configure an ASA. Let's take a look. I'm in Packet Tracer, and over in the lower left hand corner we can see some of the devices and connections we can use when we configure a network. Here we see connections, components, and devices, and network devices. And here we see the ASA and there are two. I'll slide the 5505 out onto the canvas. (mouse clicking) And now we'll open it up and we'll boot it up. Now, keep in mind when working with the ASA in Packet Tracer
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/discovering-the-cisco-asa?u=76281980&t=96)** it will provide many configuration options, but it won't support all of the features of an actual ASA. And once you get in, there is no password, we can go right in and config t, and begin configuration. We can then go to the global settings and in here we can change the display name to ASA Corporate and we'll close that. And that's what you would see when you view it on your Canvas. Now I'll show you one more thing. When working with Packet Tracer there are a number of different samples you can work with. I'll go to File and Open Samples. And here you can see a list of several folders including Networking, (mouse clicking) [Cybersecurity](../../Topics/Cybersecurity.md), (mouse clicking) and programming among others. And I encourage you to take a look at those samples as they're a brief way to get familiar with a specific topic. And I'll close that. Now, let's test your knowledge. Describe some of the functions of the Cisco ASA that help secure a network. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Env Vars:** asa (9), ccna (1), vpn (1)
> **Non-Speech:** (mouse clicking) (3)
> **UI Navigation:** go to (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)

#### [Using the Cisco ASDM](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=0)** - [Instructor] When working through the Cisco [Network Security](../../Skills/Cybersecurity/Network%20Security.md) curriculum, many students use Packet Tracer, which is [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) to learn basic device configuration. The ASA on Packet Tracer is a simulated device and supports a limited number of features. One of the tools that you might use when working with a physical device on a production network is the Adaptive Security Device Manager. The device manager is a graphical user interface used to configure the ASA. So you're familiar with some of the basic features, we'll cover some of the menu choices and ways you can customize your interface based on preferences. Once you launch the Adaptive Security Device Manager, you'll see a graphical user interface similar to this graphic that will include things such as a menu bar, search field, toolbar, and status bar. The toolbar allows you to access different functions and features, such as monitor and configure the ASA and search for a specific feature. Additionally, the device manager has a number of different menu choices that include File, Tools, Window, and Help. Let's talk about a few of these. The File menu allows you to manage different configurations. The View menu lets you display parts of the user interface
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=92)** where you can customize the layout of the dashboard. The [Windows](../../Glossary/Service/Windows.md) menu allows you to move between the different windows in the Adaptive Security Device Manager. And the Tools menu allows you to work with a number of different tools, such as command-line interface, ping, traceroute, and also Packet Tracer, which is a function that allows you to trace a packet from a source address and interface to a destination. The Help menu provides links to online help. And the Wizards menu offers several choices, such as Unified Communications Wizard, Packet Capture Wizard, along with a VPN wizard to streamline your workflow. Before you can access the device manager, you must configure web server access on the ASA. But also keep in mind if you understand the steps that you need to take when configuring the ASA, you'll be able to use the device manager. There is a graphical user interface. However, the commands will run in the background. I've reviewed some of the main topics of interest. To learn more, you can view this document on the device manager, where you can find more detailed information. And I scroll down where we can see some of the ways that you can modify the user interface and also a full list of the wizards that are available. Now, let's test your knowledge.
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-cisco-asdm?u=76281980&t=186)** The Cisco Adaptive Security Device Manager is a graphical user interface used to configure the ASA. Outline some of the menu choices and ways you can customize your interface based on preferences. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Simulation Software](../../Skills/Hardware/Simulation%20Software.md) (1)
> **Env Vars:** asa (6), vpn (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (4), similar to (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** keep in mind (1)


### 2. Discover IP Security (IPsec)

[↑ Back to Table of Contents](#table-of-contents)

#### [Summarizing IPsec](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=0)** - [Instructor] IPsec is not a single protocol, but a framework for securing IP communications. We can add IPsec to IPv4 or IPv6 by using additional headers. IPsec can then both encrypt and authenticate each IP packet of a session between hosts on a LAN or across the internet. If we take a look at our diagram on security tools in the TCP/IP stack, we see that IPsec provides security at the network layer and can protect a much wider range of applications than SSL. IPsec has four main components: the security protocols, key management, security associations, and the [Algorithms](../../Skills/Software%20Development/Algorithms.md). We'll start with the security protocols. The security protocols include the authentication header. Now this provides support for [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) and authentication of IP packets. And the encapsulating security payload provides a combination encryption and authentication of IP packets. Another part of the IPsec framework is key management. We can either use manual, which is practical for small static environments, or automated using the Internet Key Exchange or IKE in an enterprise network. A security association is a relationship
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=95)** between two entities and describes the components for the entities including the security protocols, algorithms, and keys required for the services requested for either the encapsulating security payload protocol or the authentication header process. As we see in this illustration, each side will pass its security association information to the other host. Now, within the security association, you see a number of different algorithms. Algorithms are essential in providing the following: key exchange, integrity, encryption, and authentication. IPsec provides flexibility in how it's set up and what level of security is required. IPsec can protect one or more paths that include host to host, gateway to gateway, and outside host to the gateway. Services IPsec can provide include access control, integrity, authentication, preventing replay attacks, and confidentiality. Now let's bring it all together and take a look at this illustration of the IP framework. On the left-hand side, we see the encapsulating security payload protocol which includes encryption algorithms such as AES cipher-block chaining mode. On the right, we see the authentication header protocol,
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/summarizing-ipsec?u=76281980&t=192)** which includes authentication algorithms such as SHA-256. And because cryptographic techniques and algorithms rely on keys, encompassing all of these things is key management. Now, when setting up IPsec, the network administrator may need more advanced configuration, as in the case of using IPsec in network address translation environments or for providing support for IP multicast. Now, let's test your knowledge. IPsec is not a single protocol, but a framework for securing IPv4 and IPv6 communications. Summarize ways IPsec can both encrypt and authenticate each IP packet between hosts. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (7), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **Env Vars:** lan (1), tcp (1), ssl (1), ike (1), aes (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing IPsec components](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=0)** - [Instructor] IPsec is an internet exchange taskforce standard that outlines how we can configure a VPN to secure traffic across an insecure network. Because IPsec works at the network layer, it can then protect upper layer traffic. IPsec provides many services. It provides confidentiality using encryption, integrity using hash [Algorithms](../../Skills/Software%20Development/Algorithms.md), authentication using key exchange, and secure key exchange using Diffie-Hellman. The network administrator has flexibility in the way they can configure IPsec. During configuration, when preparing the site for IPsec, the device will list the most current options. And then once the network administrator has made the selection, IPsec will then create the security association. A security association is a relationship between two entities and describes the components for the entities, including the security protocols, algorithms and keys required for the services requested. And then both sides must share the same security association. So let's take a look at an example of what you might see when you're setting up your IPsec VPN. Within that first section, the ISAKMP policy, is where the network administrator can make selections for IPsec that include
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=93)** protocol, confidentiality, integrity, authentication and Diffie-Hellman. So in this policy we see the encryption algorithm is AES, authentication is pre-share, and Diffie-Hellman is group 2. Now, today, you wouldn't use group 2, it's been deprecated, but that goes to speak to what we should use is the most recent and current cryptographic techniques. So we'll take you to this document here where it talks about next-generation [Cryptography](../../Skills/Cybersecurity/Cryptography.md). Now if you scroll down, you'll see a chart that provides recommendations for cryptographic algorithms. And then within that, you'll see some that are marked acceptable and then some that say avoid because they're simply not secure. So now let's take a look at the IPsec framework and what you have as far as choices. So for the protocol, you can select the authentication header, the encapsulating security payload protocol or the encapsulating security payload and authentication header. For confidentiality, you would use protocols, such as AES or AES Cipher-Block Chaining mode. Integrity, you would use hash algorithms, such as SHA-256 or SHA-384. For authentication, you might use RSA or pre-shared key. And Diffie-Hellman, you would use the most appropriate group for your organization.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/reviewing-ipsec-components?u=76281980&t=189)** Now, key management is also another consideration and in most cases, the network administrator will opt for dynamic key exchange, and this allows the VPN servers on each end of the connection to negotiate new keys at specified intervals using internet key exchange. Now, internet key exchange, or IKE, is a protocol used to set up security associations in IPsec. This provides a standard method for dynamically authenticating IPsec peers, negotiating security services and generating shared keys. Internet key exchange, or IKE, has two distinct functions. ISAKMP, or Internet Security Association and Key Management Protocol, defines procedures for authenticating a communicating peer, and the creation and management of security association key generation techniques. Oakley is a key distribution process that supports perfect forward secrecy. Oakley allows the devices to exchange keys using the Diffie-Hellman key exchange algorithm. Now let's test your knowledge, discuss IPsec components that include encryption algorithm and methods to ensure integrity and authentication, along with ways to securely exchange the keys. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (4), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1)
> **Env Vars:** vpn (3), aes (3), isakmp (2), sha (2), ike (2)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** configure (2), set up (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Using the IPsec AH](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=0)** - [Educator] The IPsec Authentication Header provides connectionless support for [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) and authentication along with protection against a replay attack. The Authentication Header authenticates as much of the IP header as possible along with any upper-layer protocols. However, IPsec cannot authenticate any field values that change. The Authentication Header can be used alone or with the Encapsulating Security Payload protocol, and may be used in either transport or tunnel mode. Prior to exchanging data, IPsec creates a security association between the two communicating entities. This provides the attributes necessary for the Authentication Header process. Here is an illustration of the Authentication Header format. Let's talk about the three key fields. The Security Parameter Index is an essential part of IPsec as it distinguishes between the traffic streams that use different encryption rules and [Algorithms](../../Skills/Software%20Development/Algorithms.md). The security association defines the Security Parameter Index and therefore only has local significance between the two entities. The Sequence Number is a mandatory 32-bit field containing an incrementing counter value that supports anti-replay. The sender must always transmit this field,
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=93)** but the receiver doesn't have to act on it. Both sender and receiver will initialize the counter to zero. When IPsec establishes a new security association, this will trigger the counter to reinitialize at zero. The Sequence Number must never recycle. Some vendors support the extended 64-bit Sequence Number, which is an extension to the 32-bit Sequence Number. The Integrity Check Value is a variable field that contains the Integrity Check Value for the packet. The field must be a multiple of 32 bits in length and it may include some padding. The security association will specify the Integrity Check Value authentication algorithms, which include message authentication code using symmetric encryption, such as AES, or one-way hash function, such as SHA-256 or SHA-384. The Authentication Header is an appropriate protocol to use when confidentiality is not required, such as providing assurance that a neighbor advertisement comes from an authorized router. If encryption is required, the network administrator should use the Encapsulating Security Payload protocol. Now, let's test your knowledge. Outline how the Authentication Header ensures data integrity, authentication, and protection against a replay attack.
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/using-the-ipsec-ah?u=76281980&t=187)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2)
> **Definitions:** is an  (4), is a  (2)
> **Env Vars:** sha (2), aes (1)
> **Analogies:** such as (3)
> **Speakers:** - [educator] (1)

#### [Outlining the IPsec ESP](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=0)** - [Instructor] The Encapsulating Security Payload provides confidentiality, authentication, integrity, and anti-replay service for IPv4 and IPv6. We can provide security services between a pair of hosts, between a pair of security gateways, or between a security gateway and a host. During IPsec conversations, IPsec creates a security association that provides the necessary attributes for the Encapsulating Security Payload. The device adds the Security Parameter Index to the IP header, and that differentiates between the traffic streams using different encryption rules and [Algorithms](../../Skills/Software%20Development/Algorithms.md). You can use the encryption-only feature to provide for confidentiality with the Encapsulating Security Payload. However, using encryption without integrity may leave the communication stream vulnerable to attacks. Best practice is to use an integrity method when using the Encapsulating Security Payload protocol by using an integrity check value in the Encapsulating Security Payload header or providing authentication separately by adding an authentication header. Here we see a top-level format of an Encapsulating Security Payload packet. The Encapsulating Security Payload has most of the same fields as the authentication header,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=95)** but the fields are in three sections. The header contains two fields, the Security Parameters Index and a sequence number, and comes before the encrypted data. IPsec adds the security parameter index to the header as this distinguishes between traffic streams that use different encryption rules and algorithms. The sequence number is a mandatory 32-bit field value that contains an incrementing counter value. When possible, use the extended 64-bit sequence number, which is an extension to the current 32-bit sequence number. The payload data is a variable length field containing data from the original IP packet. The trailer goes after the encrypted data and may contain padding. Padding is optional as some encryption algorithms require the data to be padded to have a certain block size. Authenticated data contains an integrity check value when using the optional authentication feature. The Encapsulating Security Payload header can provide a mix of security services in IPv4 and IPv6. The network administrator may choose to apply the Encapsulating Security Payload alone or in combination with the authentication header in a nested fashion. I've opened up [Wireshark](../../Skills/Cybersecurity/Wireshark.md), where here we see both the authentication header
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/outlining-the-ipsec-esp?u=76281980&t=188)** and the Encapsulating Security Payload. As you can see here, is the frame header, the IP header, authentication header, and the Encapsulating Security Payload. We use both because the authentication header ensures authentication and integrity but not confidentiality. The Encapsulating Security Payload provides confidentiality, authentication, and integrity services. However, the field values that IPsec hashes are different. The authentication header hashes both the payload and header of a packet. The Encapsulating Security Payload uses a hash algorithm. However, it doesn't include the IP header of the packet in that, that IP header is a mutable field, meaning that it changes as it passes through a NAT device. We can use the Encapsulated Security Payload in either transport or tunnel mode. The set of services offered will depend on what options the network administrator selected and where on the network IPsec must travel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** nat (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating operating modes](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=0)** - [Narrator] An IPSec VPN can operate in two modes: Transport and Tunnel. In this segment, we'll compare each mode and outline use cases for each. First, let's talk about Transport Mode. In this mode, only the data portion of each packet is encrypted, leaving the header unencrypted. Transport Mode is more efficient and uses less overhead, making it ideal for scenarios where devices like firewalls or NAT devices need to access the source and destination addresses for [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) or network address translation. After passing through the firewall or NAT device, the packet typically transitions to Tunnel Mode before being sent out onto the internet. Tunnel Mode is used to create secure network connections by protecting the entire original IP packet, encrypting both the header and data portion. In this mode, a new header is added to the IP packet, and IPSec treats the original packet as the data portion. Tunnel Mode is commonly used between two gateways, where the gateway often acts as a proxy for the hosts behind the router. Next, let's learn why both modes are commonly used. Many times when using IPSec, a data communication stream will use
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=95)** both Transport and Tunnel Modes when traveling from point A to point B. Now, as we see in this illustration, starting in the private network, the IP packet might start out in Transport Mode, and then after passing through the firewall and network address translation device, IPSec can add a header, and then be in Tunnel Mode as the packet travels across an insecure WAN. Now coming back in and once safely in the private network, on the other side, the device can remove the Tunnel Mode header and deliver the packet. And finally, let's outline how when using IPSec, both Transport and Tunnel Mode, is accomplished by adding new headers to the IP packet. This illustration shows the transformations of an IP packet when using the Authentication Header. First we see the original IP packet. In Transport Mode, the Authentication Header follows the IP header. In Tunnel Mode, the Authentication Header comes after the original IP header, but IPSec adds a new IP header around the entire packet, treating the original IP packet as data. This illustration depicts the transformations of an IP packet
>
> **[3:08](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/evaluating-operating-modes?u=76281980&t=188)** when using the Encapsulating Security Payload. First we see the original IP packet. In Transport Mode, the Encapsulating Security Payload header is placed after the IP header, And then in Tunnel Mode, the Encapsulating Security Payload header follows the original IP header, but IPSec adds a new IP header around the entire packet, treating the original IP packet as data. Now, let's test your knowledge. Compare IPSec Transport versus Tunnel Mode, and outline use cases for each. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** nat (2), vpn (1), wan (1)
> **Speakers:** - [narrator] (1)


### 3. Configure a VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [Connecting with an always-on VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=1)** - [Narrator] In addition to the highly regulated industries, such as financial and healthcare, many other companies filter traffic and monitor client activity, such as web browsing and communication via email and instant messaging. When employees are inside of the trusted LAN, all traffic adheres to corporate policies, such as acceptable use, content monitoring, web security, and email filtering. However, when clients are outside of the trusted network, there is a risk of security threats and data exfiltration. With an always-on VPN, companies can force all traffic to travel through the corporate network, even when someone is off premise. With an always-on VPN, you have control of corporate owned devices and corporate compliant external devices, such as bring your own and mobile devices, and can enforce an always-on VPN. External users adhere to the same policies as internal users, as they must come through the corporate network, while accessing internal or external resources to ensure they are in line with corporate policies. When the network administrator enables always-on, the first thing that happens is location awareness. If the device is internal and on the trusted network, they do not need to connect to the VPN.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=97)** However, after an off-premise user logs in and the device detects that they're in an untrusted network, it automatically establishes a VPN session. The VPN session remains open until the session timer expires or the user logs off or shuts down the device. The network administrator can limit how long to maintain the VPN connection. The administrator can also set a maximum connection time or allow an unlimited connection time, which is the default. With an always-on VPN, clients cannot drop off the VPN. If they do drop off, always-on will reestablish and reactivate the session. In some cases, the network administrator can activate lockdown mode, which if they disconnect, this will prevent any traffic from leaving the device. During the course of an always-on VPN session, a device may enter sleep mode or simply stop responding. The ASA maintains a connection with external devices and periodically sends "keep alive" or "are you their messages" to monitor the device's responsiveness. The ASA can terminate the session if inactive for a specified time. If a VPN session goes idle, you can terminate the connection and force the client to re-authenticate their device and create a new VPN session.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/connecting-with-an-always-on-vpn?u=76281980&t=192)** The default wait period is 30 minutes. The advantages of always-on VPN include support for granular network access control, as the policy server will monitor the connection and provide access control. And always-on VPN will allow both IP version four and IP version six. And once a client logs on, a VPN session begins. There are some limitations of an always-on VPN. It doesn't support connecting through a proxy and there may be some performance issues. An always-on VPN ensures corporate compliance and monitors and protects the company from security threats.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (17), asa (2), lan (1)
> **Analogies:** such as (4)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Comparing hairpin vs. split tunnel](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=1)** - [Announcer] When you establish an always-on remote access VPN from home to the [office](../../Skills/Web%20Development/Microsoft%20Office.md), the network administrator has additional configuration options so that the client can access resources outside the corporate network and can select either a hairpin or split-tunnel VPN. A hairpin connection is when traffic enters a gateway and the device immediately reroutes the traffic to the internet or another company site, such as in a hub and spoke configuration. We call this configuration hairpin because the traffic pattern resembles a hairpin. When using a hairpin VPN, all traffic must go through an always-on VPN tunnel to the corporate office where it checks any applicable policies and then exits the corporate device to the internet or another company site. The traffic may exit out and go to another office, such as in a hub and spoke configuration. For example, traffic from branch office A will go to the security appliance at the corporate office and then go back out again to branch office B. We use split-tunneling if the corporate policy allows an always-on VPN to split traffic. With a split tunnel, when traffic leaves the device, some traffic will go to the corporate network and some of the traffic splits off
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=94)** and goes directly to an internet connection. When this happens, the VPN software on the remote access client splits the traffic. If traffic is going to the corporate network, it travels over the VPN tunnel as you can see in red and only protects traffic going into the LAN. Otherwise, traffic is going to flow to the untrusted internet. Some of the traffic can flow to sites such as YouTube or possibly even a captive portal. A captive portal occurs before going to a public access network, such as the portal at the hotel or coffee shop, where the user must provide additional information such as name and email address before going out onto the internet. As with any configuration, we have both pros and cons. An always-on VPN will tunnel and protect all traffic and inspect everything a user is doing and protect users from malware and other internet threats. Splitting the traffic and tunneling only the traffic that is destined for internal resources will preserve bandwidth on the internet connection and reduce the load on the VPN concentrator. With an always-on VPN, the network administrator has choices. They can select a hairpin connection. With a hairpin connection, the corporate device reroutes traffic to the internet, or another company site or they might select split tunnel,
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/comparing-hairpin-vs-split-tunnel?u=76281980&t=189)** where the client device splits traffic to either flow to the corporate network or to an internet connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (6)
> **Env Vars:** vpn (10), lan (1)
> **Analogies:** such as (5), for example (1)
> **UI Navigation:** go to (3)
> **Definitions:** we call this (1)
> **Speakers:** - [announcer] (1)

#### [Translating the network address](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=1)** - [Instructor] Any visible company on the internet requires a public IP address. Internally, organizations use private [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md). As a result, many organizations use Network Address Translation. Network Address Translation operates on a router and converts private IP addresses to a public IP address and vice versa. The receiving host will only see the public IP address providing an additional layer of security by concealing the entire internal network behind that address. The network administrator configures NAT to allow internal users to access the internet. Prior to exiting the internet, the traffic must pass through the router and be converted to a public IP address. When configuring traditional NAT ethernet interfaces on a router are NAT inside, and serial interfaces are NAT outside. And the administrator must configure a set of rules for translating the IP addresses in the packet headers. Here you can see a NAT router configuration and here we say which one is inside. This define what the IP addresses would be for the inside, and this defines what the IP addresses would be for the outside. Many cases, however, we use Port Address Translation. This is NAT overloading.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/translating-the-network-address?u=76281980&t=93)** PAT uses the original source port number of the internal host to form a unique registered IP address and port number combination, which will be greater than 1024. Remember, any port under 1024 is a well known port and can't be used. For example, we'll take a look at two hosts cell. The one host might have the IP address at 10.10.20.200 and the other host might have an IP address of 10.10.20.201. In order to send and receive traffic from the internet they need to use the public IP address of 145.44.68.88. Once getting to the NAPT router, port will search for an available source port. Once converted, internal host can access the public IP address and have a new IP address and port combination so then they can access the internet. Many organizations use NAT or PAT. This provides an additional layer of security and allows internal hosts to access internet resources. Understanding NAT and PAT is essential, as when setting up an IPsec VPN, the network administrator will need more advanced configuration, as in the case of using IPsec in an environment using NAT and PAT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Env Vars:** nat (9), pat (4), napt (1), vpn (1)
> **Versions:** 10.10.20 (2), 145.44.68 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Traversing through a NAT device](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=0)** - [Instructor] Organizations use IPSec to protect communications. Yet this can cause issues when using network address translation. In this segment, we'll discover how NAT traversal allows IPSec traffic to pass through a NAT or PAT device. Many organizations use network address translation, which translates a private IP address to a public address, and vice versa. Organizations also use VPN technology to protect communications of remote workers. Organizations will commonly use an IPSec VPN. However, IPSec can run into trouble with network address translation and firewall rules. As a result, the device may need more advanced configuration. NAT Traversal is a feature that allows IPSec traffic to pass through a NAT or PAT device and addresses several issues that can occur when using IPSec. So now let's talk about how the IPSec authentication header and the encapsulating security payload [react](../../Skills/Web%20Development/React.js.md) when using network address translation and port address translation. Let's cover the authentication header first. The authentication header provides connectionless support
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=95)** for [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) and authentication of packets. The authentication header authenticates the source and destination IP addresses and other fixed parts of the IP header using a cryptographic hash. At the receiving end, IPSec recalculates the hash based on the received packet and compares it with the original hash sent by the sender to verify integrity. When NAT or PAT changes these fields, the hash value computed by the sender will no longer match the newly created hash by the receiver, and the message integrity check will fail. So now let's talk about the encapsulating security payload. The encapsulating security payload protocol provides confidentiality, authentication, integrity, and anti replay. Now, in transport mode, the encapsulating security payload does not include the source and destination IP addresses in the integrity check. So it's less affected by NAT. However, PAT is different as it requires ports so that it can properly translate the IP address. Using the native encapsulating security payload without encapsulation can cause issues
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=190)** as it does not have a TCP or UDP port, and this makes it difficult for PAT to handle the translation. So next, let's talk about how this works in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). To follow along, you can grab this capture found on CloudShark, and I'll put the link in the document. And what I did was go to Export, Download File, and what I did was download the original file and then I opened it in Wireshark. And now we'll start with Frame 1. And down below you can see that it's the encapsulating security payload protocol. And let's drill down Frame 1. Here we see the frame header, Ethernet II, the transport layer header, the authentication header, and the encapsulating security payload. However, there is no transport layer header, and therefore there are no port addresses. So now let's talk about how we use NAT traversal to resolve problems with NAT and PAT. IPSec uses UDP encapsulation, typically using port 4500 to enable NAT traversal. And this is done by adding a UDP header, which provides port information needed by NAT and PAT for address translation.
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=286)** UDP encapsulation can be applied to both transport and tunnel mode. And remember, these modes determine how IPSec secures packets. In transport mode, this encrypts and/or authenticates only the payload of the IP packet, leaving the original IP header intact. In tunnel mode, this encapsulates the entire IP packet, including the header and payload within a new IP header, providing security for the entire packet. Now a couple of things happens before we see NAT traversal. First, both sides will determine if the other peer supports NAT traversal during the first two ISAKMP main mode messages using UDP port 500. Then NAT discovery will determine if NAT is taking place somewhere along the transmission path. The exchange then moves from UDP port 500 to UDP port 4500, so the PAT device can translate the encapsulating security payload packets. So now let's step through the process. We can go to CloudShark and we can download the capture and open it in Wireshark. And again, I'll go to Export, Download File, and then download the original file. Now once I've opened it in Wireshark,
>
> **[6:22](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/traversing-through-a-nat-device?u=76281980&t=382)** I'm going to filter on ISAKMP So in the display filter, we'll just start typing i-s, and here we can see isakmp. And we'll put that in and then we'll say go. And now we just see ISAKMP packets. So let's see what happens. Now first, we're going to go to number one, and now we're just going to see ISAKMP packets. So first let's start with the first packet. And here we see the UDP header and there is where we're seeing that it's using port 500. And then in the second frame, again, we see it's using port 500. Then, we go to Frame 5. And now this time we see that it will move to port 4500. And that frame will then begin the NAT traversal on port 4500 on both ends. So then, all the frames are going to be encapsulated as we see UDP encapsulation of IPSec packets. Now let's test your knowledge. Organizations use IPSec to protect communications, yet this can cause issues. Discuss how NAT traversal allows IPSec traffic to pass through a NAT or PAT device. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (4), [React](../../Skills/Web%20Development/React.js.md) (1), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **Env Vars:** nat (17), pat (9), udp (9), isakmp (4), vpn (2)
> **Ports:** port 4500 (4), port 500 (4)
> **UI Navigation:** go to (5)
> **Exercise Files:** download the (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Examine a Remote Access VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [Challenge: Clientless SSL VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=0)** - [Instructor] Let's do a challenge. Remote users that need to securely access corporate resources can use a VPN. In this challenge, we'll configure a clientless SSL VPN. Remote access VPNs include clientless SSL VPN using a web browser, SSL or IPsec VPN using Cisco AnyConnect Client, or IPsec VPN remote access. A clientless SSL VPN is a browser-based VPN that allows a remote user to securely access the corporate resources. They access the resources from any location using HTTP over an SSL connection. Once they authenticate, they'll see a portal page where they can access specific, predefined internal resources. The steps to configure a basic clientless SSL VPN include: generate a certificate for the ASA. Now the network administrator can create an X.509 certificate, or use the default certificate that the ASA generates on startup. Optionally, enable domain name server lookups. The WebVPN server acts as a proxy for client connections. This optional configuration will perform
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-clientless-ssl-vpn?u=76281980&t=95)** any DNS lookups for the client. You'll need to create users on the ASA and then create group policy for the VPN users. Create a connection profile and then test the connection. So now we'll go to Packet Tracer. The ASA in Packet Tracer is a simulated device that supports a limited number of features for VPN. However, it will support a basic site to site VPN. Let's take a look. Once in Packet Tracer, I've downloaded a sample and I've enlarged the font so it's easier for you to see. So once you open the file, I suggest you save it locally so you preserve the sample. So to get the sample, go to File, Open Samples, and then once there go to [Cybersecurity](../../Topics/Cybersecurity.md), ASA and select ASA Clientless VPN. And then complete the instructions. This challenge should take about 20 minutes, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Env Vars:** vpn (12), ssl (6), asa (6), http (1), dns (1)
> **UI Navigation:** go to (3), open the (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Clientless SSL VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=0)** - [Instructor] Okay, now let's check our work. The first thing we're going to see is that there are already two user accounts configured on the ASA, and we'll begin with instruction one. So we'll need to go into PC0 and then to the Desktop, and then the Web Browser. And then we'll put the IP address of the ASA. And we'll say Go. Well, we don't see anything. So I'll say Stop because the ASA is not responding with a webpage. Now I'm going to close that, and now we'll go to instruction two, enable web service on the ASA. And we'll go in and I'll just show you here are the instructions, but we'll step through this, go to the command line, enable, there is no password, and go into config t. Then, you'll issue the command webvpn and then you'll issue the command enable outside. Now I'll close that and now we'll go back to PC0, back to the Web Browser, and again, we'll put the IP address of the ASA. Now, we'll say go. And now, it's asking for a username and password. Now this one is class and class, and we'll say OK.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=96)** All right, so now you can see that we have a standard webpage that is presented by the ASA, but nothing else. So now we need to create some bookmarks. We're going to create a bookmark and we'll see what happens when we do that. Back into the ASA and now we're on instruction three. So now we can go into the Config tab and then on the Bookmark Manager and we're going to use the bookmark title bookmark1, and our URL is 192.168.1.2.
>
> **[2:20](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=140)** Then we'll say Add. Now in instruction four, it says assign the bookmark and group policy to a user on the ASA. So this time we go into the User Manager and we can see that there are already two users here. All right, so we're going to select cisco and we're purposely going to do this so that one will have a bookmark and the other won't, and you'll see the difference. So we select cisco and the bookmark. We're going to select bookmark1 and the profile name profile1, and the group policy, policy1. And now, I'll say Set. Now we'll scroll down, and now it wants us to compare. So we're going to go to both PCs and you'll see the difference. So first we'll go back to PC0 and the Web Browser and I'll enter the IP address of the ASA. Now remember, this is class, and this is class. And we'll say OK. So there's your standard ASA homepage but nothing else. Now we'll close this and we'll go to PC1. Go to Desktop, Web Browser, and again, the IP address of the ASA. Now this one's cisco and password is cisco. All right, so what do we see different
>
> **[3:55](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-clientless-ssl-vpn?u=76281980&t=235)** because it has a bookmark? Now I have this bookmark1, and I'll select that. And there you can see Cisco Packet Tracer and a couple of links. So now we see a simple example of configuring a clientless SSL VPN. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** asa (11), pc0 (3), url (1), pc1 (1), ssl (1)
> **UI Navigation:** go to (5), scroll down (1)
> **Cross-References:** go back to (2)
> **Versions:** 192.168.1 (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Employing an AnyConnect SSL VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=1)** - [Instructor] When setting up a VPN for remote users to connect to company resources, the network administrator can use Cisco AnyConnect, which supports both SSL and IPsec VPNs. AnyConnect provides a wide range of security services. That includes posture enforcement and web security features for a wide range of operating systems. Administrators can granularly control what network resources endpoints can connect to, whether they're company owned or bring your own device. Cisco AnyConnect identifies and monitors the devices that are accessing the corporate network for unusual or suspicious behavior and defends the network against malware along with safeguarding web browsing sessions. The AnyConnect Posture Module connects the Host Scan package, pre-login assessment, and can detect [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or keystroke loggers in the end device, and remediate devices across wired, wireless, and VPN environments. To configure AnyConnect, we first configure the ASA for AnyConnect. Some configuration options include: specify the AnyConnect image the users must download, enable AnyConnect access on the outside ASA interface, and create a local IP address pool to assign remote users. You'll configure the client for AnyConnect. Clients will need to obtain the AnyConnect client software
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/employing-an-anyconnect-ssl-vpn?u=76281980&t=95)** from the Cisco software download website that is specific to the operating systems users have on their computer. Then verify configuration and connection. Cisco AnyConnect supports both SSL and IPsec VPNs and provides a wide range of security services that include posture enforcement and web security features for a wide range of operating systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Env Vars:** vpn (2), ssl (2), asa (2)
> **Prerequisites:** configure (3)
> **Speakers:** - [instructor] (1)

#### [Assessing endpoint posture](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=1)** - [Educator] A Remote Access VPN connects clients on the outside of the corporate network so they can access corporate resources. Clients include outside sales staff and teleworkers that need access. When allowing access to the corporate network, we must keep in mind that a network device without appropriate protection, such as updated patches, antimalware protection, and an active firewall [compose](../../Glossary/Framework/Jetpack%20Compose.md) a significant risk to the corporate network. Therefore, when using a Remote Access VPN, it's important to assess the health of the client's device before they join the network so they will not pose a risk to the infrastructure. When a device attempts to log into a VPN server, the device determines the status according to the policy set by the administrator. After passing the requirements, the client is allowed to join the network. If the device is found to be non-compliant according to the policy created, it may have restricted access or even be blocked from joining the network. Endpoint Posture Assessment gathers information, such as the operating system, antimalware, and active firewall status that is installed on the host using Host Scan. Host Scan can also determine whether the device is corporate-owned, corporate-compliant mobile device, or a public computer. The network administrator can create pre-login policies
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=97)** on the ASA that evaluates external user attributes, such as the IP address, operating system, certificates, and other attributes. Some of the information can be obtained by the initial request where the ASA can detect the geolocation using the IP address and also the operating system by using the HTTP header. I'll go up here, I'm in [Wireshark](../../Skills/Cybersecurity/Wireshark.md), and I have a precaptured packet and I'll type HTTP. This is just to show you what you would see in a header. If I right-click and I say Follow the TCP Stream, here you can see information as to what the user agent is, what the operating system, and other information that it could use to evaluate the system. In addition to identifying the IP address, operating system certificates, and other attributes on the endpoint, the Host Scan can complete a more comprehensive search to detect keystroke loggers or [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) on the end device. Once the ASA gathers enough information to match the policy, it will either allow or deny the connection. A Dynamic Access Policy will use the posture assessment and apply a dynamically generated policy specific to a user's session. If they connect from a device that is not company-compliant, they'll only be granted access
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/assessing-endpoint-posture?u=76281980&t=191)** to a limited amount of company resources, if any. Endpoint Posture Assessment gathers information on the device to ensure they do not pose a risk to the corporate environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Compose](../../Glossary/Framework/Jetpack%20Compose.md) (1), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Env Vars:** vpn (3), asa (3), http (2), tcp (1)
> **Analogies:** such as (3)
> **UI Navigation:** right-click (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [educator] (1)


### 5. Investigate a Site-to-Site VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [Ensuring Perfect Forward Secrecy](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=1)** - [Instructor] When encrypting traffic using symmetric encryption, both sides must share the same secret key. During the initial handshake, the client creates the master secret, encrypts it with the server's public key to prevent exposure while in transit, and sends it to the server. Once the server receives the master secret, it decrypts it with its own private key, and then both client and server have their own key. From the master secret, both client and server generate session keys to exchange data. During the course of exchanging encrypted traffic, it's essential to protect the server's private key. If disclosed, an attacker can have access to the transmitted data, which poses a serious risk to [Data Security](../../Skills/Data%20Science/Data%20Security.md). Well, how can this happen? Cybercriminals work hard to get into systems and steal information and have created several malware variants that can steal both private keys and digital certificates from [Windows](../../Glossary/Service/Windows.md) certificate doors by exploiting the operating systems's functionality. Some variants include Trojan.Zbot, Downloader.Parshell, and Trojan.Spyeye. The solution is to use perfect forward secrecy. Perfect forward secrecy provides assurance that no one can compromise the session keys, even if someone obtains the server's private key.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=96)** Perfect forward secrecy generates a unique session key for every session a user initiates. It uses the Diffie-Hellman key exchange. If a hacker is able to obtain a single session key, this only affects the data exchanged in the current session protected by that specific key. To enable perfect forward secrecy, both the client and the server must use a cipher suite that employs the Diffie-Hellman key exchange. Let's review Diffie-Hellman. Whitfield Diffie and Martin Hellman were two of a few groups that developed public key technology in the 1970s as the need for securely exchanging a secret key became evident. We use Diffie-Hellman for key exchange, not for encryption, but the concept of Diffie-Hellman is it allows two users to share a secret key securely over a public network when using symmetric encryption. With perfect forward secrecy, both client and server generate a new set of Diffie-Hellman parameters for each session that are not stored or reused. The key exchange session lasts for a short time. And periodically, a new session begins, and both parties then create a new shared secret. Perfect forward secrecy ensures data protection by forcing the IPsec VPN tunnel
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/ensuring-perfect-forward-secrecy?u=76281980&t=189)** to generate and use a different key when first setting up a tunnel, along with any subsequent keys. Perfect forward secrecy provides assurance that no one can compromise the session keys, even if someone obtains the server's private key. Enable perfect forward secrecy when using an IPsec VPN to create a more secure VPN tunnel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** vpn (3)
> **Speakers:** - [instructor] (1)

#### [Setting up an IPsec site-to-site VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=1)** - [Instructor] We use an IPsec site-to-site VPN when a company has branch offices that need to communicate with one another. In order to configure a Cisco iOS command line interface based site-to-site IPsec VPN, there are five major steps. Make sure that all the access control lists on all devices in the pathway for the IPsec VPN such as routers, firewalls and other devices are compatible with IPsec. Create a logical drawing so that you can trace and check each device. Although this might take a little time to complete, it will save you time in preventing any conflicts with access control lists. Internet key exchange phase one. ISAKMP policy configuration using the crypto ISO policy command to set the parameters used when establishing the internet key exchange phase one tunnel. In addition, configure the pre-shared key. Within the ISAKMP configuration mode, configure the following: Encryption, Hash, Authentication [Algorithms](../../Skills/Software%20Development/Algorithms.md), Diffie-Hellman Group and Lifetime. The result in commands will look like this. We see the encryption is aes.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=95)** Hash is Sha256. Authentication pre-share, Diffie-Hellman Group Five. Internet Key Exchange Phase Two. We now configure the IPsec transform set which defines the parameters that the IPsec tunnel uses and includes the authentication method, authentication header, HMAC or encapsulating security payload HMAC transform. Encryption method, the encapsulating security payload encryption transform. And IPsec mode, either transport or tunnel. Create a crypto access control list which defines what traffic is sent through the IPsec tunnel. Create and apply a crypto map that groups all configured parameters together and defines the IPsec peer devices. Apply the crypto map to the outgoing interface of the VPN device. Once everything is set up, we'll want to verify the IPsec VPN. Start by running show crypto IPsec security association command. Here we see, once run, we have an encrypted anything. Then create interesting traffic. That traffic is defined by the access control list that is used to determine the traffic to encrypt. Verify the tunnel after sending interesting traffic
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/setting-up-an-ipsec-site-to-site-vpn?u=76281980&t=191)** to test to see that the tunnel is working. Again, run the show Crypto IPsec Security Association to ensure that you do see packets are being encrypted. An IPsec site-to-site VPN allows companies to communicate securely with one another. Configure an IPsec VPN using five major steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** vpn (7), isakmp (2), hmac (2), iso (1)
> **Prerequisites:** configure (5), set up (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Configure a site-to-site VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=0)** (snappy music)
>
> **[0:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=6)** - [Instructor] Let's do a challenge. In this challenge, we'll configure an IPsec site-to-site VPN. First, you'll need to open the Packet Tracer file found in the exercise folder. Configure and verify a site-to-site IPsec VPN. Then you'll follow the instructions found within Packet Tracer, and the challenge is complete when the percentage is 100%. But first, let's get you started. I've opened up the file and saved it locally so I preserve the original. On the left hand side we see the instructions, and we can do a couple of things with this. I can undock it so it floats, but I'll put it back, and I can right click to [Zoom](../../Skills/Software%20Development/Zoom.md) in and make the font larger or zoom out to make it smaller. I can also print to PDF if I want to print out the instructions. Now, as you proceed through this challenge, you'll see the completion rate change. If you need to, you can check the results and look at the assessment items, and see what you need to complete. Now let's take a look at the instructions. And here we have the addressing table and some of the parameters, but I want you to take note of one thing. We see that hash algorithm is MD5 or SHA-1. Understand we normally wouldn't use those [Algorithms](../../Skills/Software%20Development/Algorithms.md), as they have been deprecated and they're not secure. But for this exercise we'll use those as the parameters. And I'll scroll down.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=99)** And here we see that the routers have been preconfigured with the following, so you know what the passwords are. Now first we'll need to test connectivity by going into PC-A and pinging PC-C. All right, take a look at your canvas here, and we see the IP addresses. And now we'll go into PC-A to the desktop and the command prompt, where we'll type ping 192 dot 168 dot 3 dot 3. The devices are all configured with [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), and the ping did succeed. So we'll close that. Next we'll need to go into router one and make sure the security technology package is enabled. So we'll go into router one, and we'll go into the command line interface, and we'll scroll down, and we'll need the password, which is Cisco con PA 55. Now we'll enable. And that will be Cisco E N P A 55. Now we'll issue the command, show version. And we'll press enter. And here we see the security technology package is not enabled. So now we'll go into config T. Now we need to enable the package. Now I'm going to go over here, and here's the command. And I'm going to right click, and we'll copy it so I make sure I get all of it correct,
>
> **[3:14](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=194)** and paste. And now we'll press enter. And of course we want to accept that. And now we'll need to exit. And now I'll copy run start. Now we need to reload. And this will take a few seconds. Now we need to reenter the passwords. Cisco con PA 55, enable. Cisco E N P A 55. And now we'll issue the command, show version. Press enter. And here we see the security package is enabled, and it says evaluation, which means this is a temporary license, but we're good to go. Next, we'll need to identify interesting traffic on router one. Interesting traffic is the traffic that needs to be encrypted. So we'll need to configure an access control list to identify the traffic from the LAN on router one to the LAN on router three as interesting. So go back into config T, and the access control list is here, and we're going to select it and copy it. And now we'll paste that. And the access control list will trigger the IPsec VPN to encrypt the traffic between the router one
>
> **[4:50](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/challenge-configure-a-site-to-site-vpn?u=76281980&t=290)** and router three networks. And traffic from any other LANs will not be encrypted because it's uninteresting traffic. So I'll close that, and then you'll continue with the challenge. This challenge should take you about 30 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** vpn (3), lan (2), pdf (1), md5 (1), sha (1)
> **CLI Commands:** make (4)
> **Prerequisites:** configure (3), you'll need (1)
> **UI Navigation:** scroll down (2), open the (1)
> **Tools:** command prompt (1), command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Configure a site-to-site VPN](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=0)** - [Instructor] Okay, let's check our work. So to catch up, I configured router one and then I went over to router three and then I enabled the security technology package. And now we're going to go here into router three and continue with the commands. Now understand they're pretty much exactly the same as what we did on router one. So we'll start here and configure router three to support a site to site VPN with router one. So we'll open up router three and we'll need to enter the passwords ciscoconpa55 and then we'll enable ciscoenpa55. Now we'll go into config T, and first we'll need to create that access control list
>
> **[1:06](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=66)** and we'll paste that. And now that will identify the site to site VPN with router one. Now we'll want to configure the internet key exchange. Phase one isakamp properties on router three. And so here are our commands, and now we'll go into isakamp and we'll identify the encryption as aes 256. The authentication is the pre-share. We'll use Jesse Hellman Group five and understand on a production network we would use something higher, such as Jesse Hellman Group 14. Exit and issue this command here. And now it will know that it has to reach that tunnel will go from router one to router three. All right, now configure the internet key exchange phase two IPsec policy on router three. So we create the transform set VPN set to use the encapsulating security payload, aes and the encapsulating security payload, sha-hmac. So that identifies the transform set. And now we'll create the crypto map that binds all of phase two parameters together.
>
> **[2:39](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=159)** And in this case it's using sequence number 10 and identify it as an IPsec isakamp map. And we'll paste. And again, anytime you can you should put a description just so you keep yourself straight. And when we go back it'll say VPN connection to router one. And that just helps when you're troubleshooting to identify what you have done. And my peer is of course router one and set transform set VPN set. And then we'll match that access control list we just created one 110. And exit. Now we want to configure the crypto map on the outgoing interface, s/0/0/1. So we need to go into that interface. Now we'll then bind the crypto map with this command and now we can exit out of that. And we'll exit as well out of that. Now, understand that we've created all of this and now we want to make sure it works. So whenever you complete something like this in setting up an IPsec VPN and you could see all of the different steps that were necessary to make this happen, then you want to test. So verify the tunnel prior to interesting traffic. We'll go back to router one and enter the passwords.
>
> **[4:13](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=253)** ciscoconpa55 enable ciscoenpa55. All right, so now we want to show the crypto IPsec security association command. Now, once we do this you can see that nothing really has been done. Okay? So we see the packets that have been encrypted, or encapsulated, de-capsulated, nothing. They're all set to zero because nothing's been done. Now we want to create interesting traffic. So in order to do that we'll close this. and now we'll go back into PC-A. So we're going to ping pcc and that will be our interesting traffic. So we'll ping 192.168.3.3 Now remember, a [Windows](../../Glossary/Service/Windows.md) operating system will try four times to get through, and it did. So now we've created interesting traffic. All right, we'll go back to router one and we just use your arrow up and now issue that command. And now you can see that it identified some of the traffic and then encrypted it. So now we know it's working. But in contrast, let's create some uninteresting traffic and we'll take a look at the numbers. They should remain the same, right? Because it's not going to encrypt uninteresting traffic. So what we're going to do is ping PC-B
>
> **[5:49](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=349)** which is 2.3 from PC-A.
>
> **[5:58](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/solution-configure-a-site-to-site-vpn?u=76281980&t=358)** All right, now we'll go back into router one, arrow up and as we see, the numbers have not changed and that's because uninteresting traffic is not encrypted. We'll close that. Now we see our completion rate is 100%. So now you've configured an IPsec site to site VPN. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** vpn (7)
> **Prerequisites:** configure (4)
> **CLI Commands:** make (2)
> **Versions:** 192.168.3 (1), 2.3 (1)
> **Cross-References:** go back to (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-vpn-17334607/next-steps?u=76281980&t=0)** - [Instructor] Thank you for watching Cisco [Network Security](../../Skills/Cybersecurity/Network%20Security.md) VPN Technologies. In this course, I covered VPN concepts and outlined how VPNs ensure data confidentiality, integrity, and authentication. I reviewed the various types of VPNs including clientless SSL and IPsec site to site. I then covered the framework of IPsec and the components. I discussed the various types of VPN configuration such as hairpin, split tunnel, always-on, and NAT traversal. And then we took a deep dive on how to set up a remote access and site-to-site VPN. If you're interested in learning more, please check out the library. New courses are added every day. If you want to learn more about encryption, check out my course "Learn [Cryptography](../../Skills/Cybersecurity/Cryptography.md) and Network Security." Any course in the Cisco CyberOps Series will be well worth your time. And for a complete list of courses, check out my author page. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (2), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1)
> **Env Vars:** vpn (4), ssl (1), nat (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Lisa Bock](../../Instructors/Cybersecurity/Lisa%20Bock.md)

## Resources

- Exercise files available

## Skills Covered

- Cisco VPN

## Path Context

### In [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)
← [Cisco Network Security- Secure Access](Cisco%20Network%20Security-%20Secure%20Access.md) | **3 of 7** | [Cisco Network Security- Secure Routing and Switching](Cisco%20Network%20Security-%20Secure%20Routing%20and%20Switching.md) →

## Appears In

- [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)

---

[↑ Back to top](#)