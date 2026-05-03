---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-secure-access
url: "https://www.linkedin.com/learning/cisco-network-security-secure-access"
duration_minutes: 91
duration: 1h 31m
level: Intermediate
updated: 11/8/2024
learners: 46310
skills:
  - Cisco Networking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHspeiNrJaWKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286327010?e=2147483647&amp;v=beta&amp;t=jNpymW0Evl5l1utTNxm84Pr6iTXtG1GOtnQpS-D39HU"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Cisco Network Security- Safeguarding Network Integrity and Data]]'
prev_courses:
  - '[[Cisco Network Security Core Security Concepts]]'
next_courses:
  - '[[Cisco Network Security- VPN]]'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":2,"total":7,"prev":"Cisco Network Security Core Security Concepts","next":"Cisco Network Security- VPN"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/cisco-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Secure%20Access.md)

![Cisco Network Security: Secure Access](https://media.licdn.com/dms/image/v2/D560DAQHspeiNrJaWKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729286327010?e=2147483647&amp;v=beta&amp;t=jNpymW0Evl5l1utTNxm84Pr6iTXtG1GOtnQpS-D39HU)

# Cisco Network Security: Secure Access

> Administering a network means controlling access to network resources: granting, limiting, preventing, and revoking permissions as necessary. This course covers the topic of secure access, including in-band and out-of-band management, secure device access, and protocols such as NTP, SCP, and SNMP. Security ambassador Lisa Bock introduces the three a's of triple-A security: authentication, authoriz

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-access) | 1h 31m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securely accessing resources](#securely-accessing-resources)
  - [What you should know](#what-you-should-know)
- [**1. Packet Tracer**](#1-packet-tracer) (2 videos)
  - [Cisco Networking Academy](#cisco-networking-academy)
  - [Packet Tracer interface](#packet-tracer-interface)
- [**2. Secure Management**](#2-secure-management) (7 videos)
  - [Secure Access Control System overview](#secure-access-control-system-overview)
  - [Compare in-band and out-of-band management](#compare-in-band-and-out-of-band-management)
  - [Secure network management](#secure-network-management)
  - [Simple Network Management Protocol (SNMP)](#simple-network-management-protocol-snmp)
  - [Configure SNMP](#configure-snmp)
  - [Configure and verify security for Network Time Protocol](#configure-and-verify-security-for-network-time-protocol)
  - [Secure Copy Protocol](#secure-copy-protocol)
- [**3. AAA Concepts**](#3-aaa-concepts) (4 videos)
  - [AAA security](#aaa-security)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Accounting](#accounting)
- [**4. RADIUS and TACACS+**](#4-radius-and-tacacs) (3 videos)
  - [RADIUS and TACACS+ authentication](#radius-and-tacacs-authentication)
  - [Using TACACS+](#using-tacacs)
  - [Enforcing security with AAA](#enforcing-security-with-aaa)
- [**5. BYOD**](#5-byod) (3 videos)
  - [Managing a BYOD infrastructure](#managing-a-byod-infrastructure)
  - [Mobile device management (MDM)](#mobile-device-management-mdm)
  - [Securely integrating IoT devices](#securely-integrating-iot-devices)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securely accessing resources](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-accessing-resources-23906978?u=76281980&t=0)** - [Lisa] By effectively managing access to network assets, organizations can block unauthorized users from infiltrating resources and safeguard critical data and systems from potential threats. Join me as I share my knowledge on protocols that serve specific purposes in managing and maintaining systems over a network. I'll cover AAA security and compare RADIUS and TACACS authentication. I'll finish with ways to deal with the [[Challenging Environment]] network administrators manage today when dealing with bring your own device and the [[Internet of Things (IoT)|Internet of Things]]. Hello, my name is Lisa Bock, and I'm a security ambassador. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Challenging Environment]] (1), [[Internet of Things (IoT)|Internet of things]] (1)
> **Env Vars:** aaa (1), radius (1), tacacs (1)
> **Speakers:** - [lisa] (1)

#### [What you should know](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/what-you-should-know-23666801?u=76281980&t=0)** - [Instructor] This course is an intermediate level course for network administrators, managers, students, and anyone with an interest in learning more about Cisco Security. Participants should have a solid knowledge of networking fundamentals, devices and cables, along with various topologies. This course and the entire learning path covers the components included in the security fundamentals section of the CCNA exam. I'll take you here to this site where you can learn more about the CCNA exam. The exam will test your knowledge and skills related to networking, and is an excellent addition to a career in information technology. I'll scroll down where you can see the objectives, and then I'll expand the section on Security Fundamentals so that you can see what I'll be covering throughout the learning path. I am super excited to bring you this series on CCNA security so that you can improve your skills in securing an organization's infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (3)
> **Definitions:** is an  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### 1. Packet Tracer

[↑ Back to Table of Contents](#table-of-contents)

#### [Cisco Networking Academy](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=0)** - [Instructor] Cisco developed Packet Tracer in order for students to have an interactive way to practice for CCNA exams. In this segment, I'll show you how you can download your own copy of Packet Tracer from Cisco Network Academy. If it's been a while since you had CCNA, you'll want to check out the Cisco Network Academy at [netacad.com](https://netacad.com) where we can see information about the academy. Cisco Network Academy is a skills building program for learning institutions and individuals. Cisco offers many courses that are instructor-led through academies that are scattered throughout the world, which is where you may have taken your CCNA. Cisco now offers a number of free courses that are self-paced on a variety of current world skills. Let's take a look. I'll select Explore, and then I'll scroll down where we can see many subject areas, such as [[Cybersecurity]], networking, programming, and information technology. But here's the one I want you to select, Cisco Packet Tracer. And here is where we'll see a few self-paced courses. And I'll select this one. Now to get your own copy of Packet Tracer, you'll need to sign up, and then you'll need to enroll in one
>
> **[1:31](https://www.linkedin.com/learning/cisco-network-security-secure-access/cisco-networking-academy-23666802?u=76281980&t=91)** of the self-paced courses. So you'll put in your information and you'll get an email link that will allow you to go in, take the course, and you'll learn a lot about Packet Tracer and what it can do. And then once you're done, you can download your own copy of Packet Tracer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (1)
> **Env Vars:** ccna (3)
> **Prerequisites:** you'll need (2)
> **URLs:** [netacad.com](https://netacad.com) (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Packet Tracer interface](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=1)** - [Instructor] During this course, I'll demonstrate some of the concepts using Packet Tracer, an application made available through [[Cisco Networking]] Academy. Packet Tracer lets us configure common networking equipment. In this segment, we'll take a brief look at Packet Tracer so you can navigate the interface more confidently. Each time you launch Packet Tracer, it will make you re-authenticate with Cisco Networking Academy. And then once done, you can use the app. I've opened up Packet Tracer so we can explore the interface. Yours might look a little different, but at the top we're going to see some common menu choices. And those include File, Edit, Options, and I'll select Preferences. And here what I commonly do is change the font, and that's just to modify the size of the application and possibly the command line interface. But there's lots you can do to personalize your own interface. View, where you can [[Zoom]] in or zoom out or go to specific Views, Tools, Extensions. And there you see the Activity Wizard. Now, this is where you can build your own activities. And this is commonly used by instructors, but of course you can do it yourself. The Window, and of course, Help. Now in the center, this blank white space
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=96)** is the logical drawing canvas. Now of course, there are pre-made Packet Tracer activities that instructors use for assessments with students, but you can easily build a simple network and practice configuration on your own. Now in the lower left-hand corner, this is where you can add certain devices. So if you just click on, for example, Network Devices, you can see a nice selection. And when you find one you like it, you can just pull it up. Now you can also rename it, and we can put R1. And then we can select some other devices. Here are some end devices, and there's a nice selection here, Components and Connections. And there's a nice selection of connections, for example, Console, Copper Straight-Through, Crossover, Fiber, and many others. Here's Miscellaneous and Multiuser Connection. Now, when you're done, and if you don't want that device, and I just click on it and it'll open it, but really I just want to delete it. So I'll just hit Delete. And it says, "Do you really want to delete R1?" And I say Delete. And then once done, I'll go back to the Select tool, and now we'll go over to the lower right-hand corner. Now on the right-hand side, we'll see the Realtime and [[Simulation]] bar. Now, I'll most likely be in Realtime,
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/packet-tracer-interface-23670159?u=76281980&t=190)** but you can go into Simulation if you want to. And in some courses we may do this. So I'll select Simulation. Now, this is where we can see the status of a packet traveling from one device to another. It's like a packet analysis tool built into Packet Tracer. And I'll go back to Realtime. Well, now there's also some nice pre-made samples that I'll be using throughout the course. Let's take a look. I'll go to File and Open Samples. It'll warn you that any unsafe changes will be lost. Do you want to save your network? And I'll say No. And then you'll see the saves. And there are different categories. I'll select [[Cybersecurity]], and then I'll go to AAA. And then I'll select Simple Authentication, and then I'll open it. And once it's open, you can move the instructions over. But what it will have you do is just one simple task so you get a feel for how something's supposed to work. Cisco Academy offers a tutorial. If you haven't already taken it or it's been a while since you've used Packet Tracer, it's well worth your time. I know you'll enjoy working with Packet Tracer on my course and any of the CCNA courses in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Cisco Networking]] (2), [[Zoom]] (2), [[Cybersecurity]] (1)
> **UI Navigation:** go to (3), click on (2)
> **Analogies:** for example (2), it's like (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** aaa (1), ccna (1)
> **Cross-References:** go back to (2)
> **Tools:** command line (1)
> **Prerequisites:** configure (1)


### 2. Secure Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure Access Control System overview](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=0)** - [Instructor] In the early days of computing security focused on protecting individual systems. As we see in this image, of the ENIAC, Electronic Numerical Integrator and Computer, which began calculating in 1945. And it was so big, it filled a room. At the time it was the only computer. However, in today's world there are a number of potential attackers that include nation states, competitors, hackers, and disgruntled employees that can gain access to our systems. If we go to African Cyber Risk Institute, we can see examples of how to secure the network. This image lists 10 steps for organizational cyber security. Let's take a look. [[Network Security]] means we protect our networks against external and internal attacks. On the upper right-hand corner, we see we should develop policies that include home and mobile networking, and train all employees on secure cyber practices while at home and on mobile devices. Secure configuration. This means patch and [[Configuration Management]] of all systems. We can't overlook the need for policies that provide access control and proper use and disposal of removable media. Manage user privileges.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=94)** Control access to all activities, and monitor all user activity which include people and processes such as file transfer protocol. At the bottom we see incident management. All companies should establish an [[Incident Response]] and disaster recovery program, so that you're prepared in case of an incident or disaster. Over in the left-hand corner lists user education and awareness. Which is critical in an infrastructure as people can be our weakest link. Establish monitoring strategy and produce supporting policies to monitor all your systems and analyze your logs for unusual activity that can indicate an attack. And malware protection against all business areas. Today's networks are very complex, networked, and interconnected, as we see from this graphic of a campus area network. Most organizations have multiple attack vectors that can lead to unauthorized access of your network. In general, there are a lot of moving parts to manage and secure an enterprise network that include technical, physical, and administrative controls. The network security specialist is responsible for some of the physical aspects, such as ensuring the server room doors are properly locked, along with the technical or logical controls
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=189)** such as access control lists and [[Intrusion Detection]], intrusion prevention signatures, and implementing password policies. When dealing with the various networking devices as they move data throughout the network, there are three planes. The management plane. Now this is where the connection between the workstation and the managed devices where the administrator monitors and configures services on the device, that would be possibly a router or a switch. Protocols in this plane include Telnet, File Transfer Protocol, Secure FTP, Simple Network Management Protocol, and Secure Shell. The control plane is responsible for [[Routing Protocols]] and routers that talk with one another. Protocols in this plane work independently of the network administrator. They work on their own and include routing protocols such as Open Shortest Path First, Intermediary System - Intermediary System, and Enhanced Interior Gateway [[Routing]] Protocol, along with other protocols such as IGMP, Protocol Independent Multicast, ICMP and ARP. The data plane processes and moves user traffic. The data plane influences and controls the flow of data by using access control lists and quality of service. In this graphic, we see all three planes.
>
> **[4:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-access-control-system-overview?u=76281980&t=283)** The management plane is independent, and that's because this is where the administrator gains access to the individual device. In the control and data plane, we see the interaction among the devices. In today's world, there are a number of potential attackers that can gain access to our systems. As a result, the network security specialist must be vigilant in enforcing secure access control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (3), [[Routing Protocols]] (2), [[Configuration Management]] (1), [[Incident Response]] (1), [[Intrusion Detection]] (1)
> **Env Vars:** eniac (1), ftp (1), igmp (1), icmp (1), arp (1)
> **Analogies:** such as (5)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Compare in-band and out-of-band management](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=0)** [Narrator]
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=1)** - On an enterprise network we'll have a variety of devices to manage that include routers, switches, adaptive security appliances, along with [[Intrusion Detection]] and intrusion prevention. It's essential to defend the network and the devices against the many possible threats that include unauthorized access, man in-the-middle attacks, denial service, botnets, and privilege escalation. If any of the infrastructure devices are compromised, the security of the entire network can be compromised. As a result, there are a number of best practices for securing the network infrastructure. One concept, is Network Foundation Protection, which includes tools, technologies, controls, and services to prevent unauthorized access and defend against key threats to the infrastructure. Devices often provide a range of ways to access them so that we can manage and secure the IOS. That includes Telnet, remote login, HTTP, and Secure Shell. Cisco IOS-based platforms have console and modem access right out of the box and are enabled by default. The network administrator should lock down and properly secure the device before placing the device in service. The first step in securing the device is to gain Administrative Access to the management plane. To manage your network device, the network administrator
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=99)** can use either In-Band or Out-of-Band access to manage the devices via the command line interface. On a router, there are different types of lines. Understand that not all lines are available. It will depend on the device. The CTY line is the console port. The AUX or auxiliary is the secondary console line. However, this isn't always available. TTY line is an asynchronous line used for modem and terminal connections. You must have an asynchronous serial card in order to use a TTY line. More commonly though, you'll see a VTY line. A VTY line is a virtual TTY line and that's what we use when accessing the router via Telnet or SSH from another device. Commonly on a device you'll see five VTY lines numbered zero to four. To see what you have available on your device, you can either use show ip interface brief or show line. That will tell you what lines or what interfaces are available. There are two ways of accessing a device. Either Out-of-Band Network Management uses a dedicated interface to access the device. Or In-Band Network Management requires an active network connection. With In-Band Network Management, you will access the device using the same media
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/compare-in-band-and-out-of-band-management?u=76281980&t=193)** and interfaces as the data flow. Here we see accessing a router using the Ethernet or IP Interface. For In-Band Management the Network Administrator can either use Telnet or a Simple Network Management Protocol tools like OpenView from Hewlett Packard. In-Band Management offers a flexible option to remotely manage a device. For Out-of Band Network Management, here we'll use a dedicated interface to access the device. We can access the device via a Console Port. If you use the Console Port, you must have physical access to the device and use a console or rollover cable. Which is generally a flat, light blue cable. We can access the device via an auxiliary port via a modem connection to the auxiliary port of the device. Most of the time we'll manage new devices using Out-of-Band Network Management. Primarily because the device really doesn't have any network connectivity. In addition, if the network is down, you're not going to be able to access the device using In-Band Management so you'll need to access using Out-of-Band Network Management. In addition, for some devices, the only option for managing the device, is Out-of-Band Network Management. When dealing with device configuration, most consider Out-of-Band Network Management the most secure method and is generally preferred over In-Band Management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1)
> **Env Vars:** tty (3), vty (3), ios (2), http (1), cty (1)
> **Tools:** command line (1), terminal (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** ssh (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - on (1)

#### [Secure network management](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=0)** - [Narrator] Organizational security is a holistic approach, which requires monitoring all attack vectors and staying abreast of current threats. The security analyst oversees the entire organization, which includes the network, administrative policies, applications, services, along with the human factor. The network administrator monitors the network domain, which in itself is very complex. For a proactive approach, a comprehensive view of the network is necessary. Gather and monitor access control lists, protocols, services, [[Routing]] tables, vulnerabilities, and patches. Assess what you might be missing, such as logins, banners, passwords, and access control list entries. Baseline each subnetwork on an annual basis to get a clear picture of what is happening, and use network maps with hard copy printouts for easy reference. With a macro view of the network in hand, the network administrator is better prepared to face the daily challenges and keep the network up and operational. At the heart of [[Network Administration]], is secure network management. Although we view the network as a whole, we must secure each and every individual device, either via console or virtual terminal access.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=98)** Let's look at some common security features and best practices. Most modern devices have a number of built-in security features. The network administrator should familiarize themselves on all available features, along with how to activate and monitor the features. One of the most basic configuration options is to use a complex password along with a secured enabled password. I'm in Packet Tracer and let's do a couple of password enabled. I'm going to use Cisco for my password, just to keep it simple, although of course on a production system, you're going to use something more complex. Now that's simply entering a password, Cisco, but keep in mind, protocol analyzers can sniff network traffic and read passwords that are in plain text. So we want to increase security by encrypting passwords, so I'll type the following in global config mode. Now let's use a password on the VTY lines. Finally, it's a good idea to set
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=191)** timeout values on your VTY lines so that idle sessions won't remain up indefinitely. Now let's check our work by showing run config. Alright, there we can see the encrypted password, and the password for our VTY lines. The network administrator should configure several standard services, such as Network Time Protocol, Simple Network Management Protocol, Secure Copy Protocol, and Secure Shell. Whatever protocols or services the network administrator selects, it's important to use the most secure version that the device supports. Simple Network Management Protocol gathers and reports information on the status of the network. Configure for remote management along with remote alerts such as traps or informs. In the early days of networking, the network administrator used Telnet, or Terminal Network, to access a command line interface on a device. Telnet is not secure as it sends data in plain text. To securely access and manage a device, we use Secure Shell, which uses encryption to protect data in transit. Time values skew throughout the course of the day. Even a few seconds will make a difference. So it's best to use a method to update the time value.
>
> **[4:48](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-network-management?u=76281980&t=288)** Configure network time protocols, so all devices have synchronized and accurate time values. Because time is so important, it's best to use Network Time Protocol authentication so devices do not get rogue time values. For many years, network administrators would use Trivial File Transfer Protocol, an unauthenticated, unsecured plain text file transfer method. The method of choice is Secure Copy Protocol, which uses Secure Shell for data transport, and it's just as easy to use. We can also configure advanced security methods, such as authentication, authorization, and accounting, using either RADIUS or TACACS+, but at the very least, start with basic security configurations, and use password protection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1), [[Network Administration]] (1)
> **Env Vars:** vty (3), radius (1), tacacs (1)
> **Analogies:** such as (4), picture (1)
> **Prerequisites:** configure (4)
> **Tools:** terminal (2), command line (1)
> **Non-Speech:** (typing) (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [Simple Network Management Protocol (SNMP)](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=0)** - [Instructor] In order to assure that all devices and servers and printers are operating correctly, network administrators can use a variety of tools and techniques. Many administers use Simple Network Management Protocol, which gathers and reports information on the status of the network devices. SNMP has the following main components. The SNMP manager, which is also known as the network management server, gathers information from the SNMP agents. And the managed devices, which include any device that requires monitoring, such as workstations, printers, routers, switches, or servers. The SNMP agent collects data from the device and then stores the information in a local management information database on the device and sends the status to the SNMP manager when queried by the manager. The management information base, or, as some call it, management information database, is where the agent's references are stored in a hierarchy format. In this graphic, we see the exchange of messages between the manager and a single device, and the agent, which references information in the management information base. The devices that need managed are programmed
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=93)** to be SNMP agents, which collect data from the device and then store the information in a local management information database. SNMP has the following commands. Get, the manager queries the agent to request the value of a specific OID, or object identifier. Response, an agent responds to a Get message with a Response message. GetNext allows a manager to request the next sequential object in the MIB. Set, which is sent by a manager to an agent to change a value, such as configuration information held by a variable on an agent. GetBulk, which is essentially multiple GetNext requests. The agent will send the manager as much data as possible. Trap, an agent sends traps to a manager, which are a notification that inform managers of events that are happening on the managed device. It could be bad, it could be just a startup or warming up. An Inform is sent by the manager to confirm that they've received a Trap. A Trap can be simply a notification that the device is moving online, or a more serious event, such as the printer is jammed, that there's no toner, or services requested. The following are from RFC 3805. And here, you can see that you might get a trap
>
> **[3:06](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=186)** that simply says Warm Up and then you can see Critical Active Alert, which it's notifying the manager that there's a jam, or there's no paper, no toner, or the cover's open. SNMP has been around since 1988 and has evolved over the years. Currently, there area three versions. Version one, which doesn't have any encryption and uses the community name. Version two, which is essentially just a slight improvement over version one, does not have any encryption and uses the community name. But version three uses encryption and also provides authentication by using an MD5 or SHA hash. SNMP version three is the one you will want to use, because it ensures confidentiality, authentication, and access control. Let's take a look at a Simple Network Management Protocol transaction in [[Wireshark]], a free open-source protocol analysis tool. I've opened up this capture and what we'll do is go to the display filter and type SNMP and Enter, so I only see the frames that have SNMP. Those two frames show get request, get response, and then we'll focus on frame 25. Down below here, we can see the encapsulation and the Simple Network Management Protocol, which we'll blow out.
>
> **[4:40](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=280)** Now, the one thing I want to show you is here it says Simple Network Management Protocol and this is version one. This is the original version and, as you can see, the most insecure version, where the second line says Community Public. Now, remember, that's like a password and it is in cleartext, where I can read it. In addition, that's the default password and the agent is sending it in cleartext. But down below here, this is where we see the object identifier, or OID. That large number here, we could reference, and see what it is that it's getting information on. We can Control+Shift+V and copy that value and then do a search. And I'm at this webpage here where it tells us a little bit about the status of some of the OIDs. And here are the first one, where you see the printer operational status, like up, down, or warning. So, because version one shares its information in plain text, we'll want to use SNMP version three. Some still use version one, but, really, the most secure option is version three. That was offered in 1998. Version three ensures confidentiality by encrypting data, authentication, that the request comes from a genuine source, and access control. Here, we can see version three that allows the following options. No authentication and no encryption, this is the least secure, and if you really don't want any,
>
> **[6:14](https://www.linkedin.com/learning/cisco-network-security-secure-access/simple-network-management-protocol-snmp?u=76281980&t=374)** you would select that. The second one is authentication required yet no encryption. This would prove who it came from, but there is no encryption. And the last one is the most secure, which is the one you should use, authentication required and encrypts messages. In addition, the network administrator can choose to send messages via Secure Shell or Transport Layer Security. So, Simple Network Management Protocol gathers and reports information on the status of the network. The most secure version and the one you should use is SNMP version three, which offers authentication and encryption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Env Vars:** snmp (13), oid (2), mib (1), rfc (1), md5 (1)
> **Analogies:** such as (3)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Configure SNMP](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=0)** - [Narrator] We use Simple Network Management Protocol to monitor and manage the network. Simple Network Management Protocol components include the manager, which is also known as the network management server, managed devices such as workstations, printers and routers, agents that collect data from the device and then stores information in a local Management Information Base, and the Management Information Base, which is also called the Management Information Database. This is where the agent's references are stored in a hierarchy format. We'll enable Simple Network Management Protocol on a router. And here we can see those two lines of code that allows us to put a community name for read only access and a community name for read write access. I'm in Packet Tracer. Here's where we can build our own network, however, when you download Packet Tracer there are some samples that we can use to do some basic configuration of Simple Network Management Protocol. We'll go to file and then open samples. We'll go to PC, MIB browser, and SNMP router. Once you open it, so you retain the samples, I'll save it locally. File, save as, and we'll just simply call it SNMP Router.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=98)** Now we'll just move this around here, and which you can manipulate. Again, this is a very simple configuration if you wanted to practice with adding a switch or other devices, that's entirely up to you. We just want to show you what it would be like to do some basic configurations. Now first of all, we're going to open up the SNMP Router. It's already configured, but we'll do it again just so we can step through the process. Now your interface might look a little different. I've increased the font so you can read this. Alright. Now I'm in configuration mode. Now what I want to do if you start typing SNMP server, community, and I want to make sure it's exactly written like you can see this test read only. For read community, test read only.
>
> **[2:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=165)** Space, R-O. We'll do the same thing, but this time it'll be read write.
>
> **[2:56](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=176)** And I will exit. And I'll close that. Now that I have the router configured for some basic SNTP agent functions, we'll open up the PC. When you open the PC, go to desktop, and go to the MIB browser. I'll want to enlarge this because once you see the hierarchy in the MIB tree, it gets pretty extended. If you want to reference the instructions, we'll just do this so we can at least set this up and then I'll extend it. We'll go to advanced. Now what we want to do first is put the address of the router 10 dot zero dot zero dot one port 161, now this won't echo back to you so type carefully. Test R-O, and test R-W. And then select version three and say okay. Now what I want you to do is expand the MIB tree on the left so we can actually go down to some of the system descriptions and then make some modifications. So take a look at the instructions now, I'll expand it again. Now here you can see the tree, and again, this is going to be quite extensive as we see the
>
> **[4:30](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=270)** object identifier.
>
> **[4:38](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-snmp?u=76281980&t=278)** And now you see your system. So go to the system description and what I want to do is get that system description and then we'll say go. And then you can see here at Cisco IOS Software, which is correct. Now go to the system contact and this time we'll go get it, but there isn't any. So what we'll do is we'll set the system contact and we'll make it whatever you want to. You can put your own name in it, we'll go to Octet String and I'll type Roxy, and I'll say okay. Now we'll set that. Now we know it's in there, but let's just double check. Let's go back to system up time and say get. It's been up four minutes and 42 seconds. Again, system description and here we see the IOS Software. Then let's go back to the contact and we can see it's Roxy. Which again, you can change if you like. Course more advanced configuration would include access control list and other variables, but this is a simple Simple Network Management Protocol and you can see some of the variables and the Management Information Base tree and what you can get and what you can set as long as you've configured this correctly.

> [!info]- Semantic Content
>
> **Env Vars:** mib (4), snmp (4), ios (2), sntp (1)
> **UI Navigation:** go to (8), open the (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** go back to (2)
> **Ports:** port 161 (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Configure and verify security for Network Time Protocol](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=0)** - [Instructor] The concept of accurate time on a network is very important. Syslog audits and logs events, which you can use to track problems and troubleshoot issues. In addition, some protocols such as Kerberos require synchronized time on the network. Periodically, I check my wall clock with a more official source here at [time.gov](https://time.gov). On a Cisco router, there are two types of clocks. A [[Hardware]] clock that's battery powered, and is referred to as the calendar in the IOS. A software clock, which is the primary source for time, and is referenced as the clock in the IOS. The software clock runs from the moment the system is up, and can be updated from a number of different sources, such as Network Time Protocol, Simple Network Time Protocol, VINES Time Service, and manual configuration using the hardware clock. Because the software clock can be dynamically udpated, it has the potential to be more accurate than the hardware clock. To update the software clock on an enterprise network, we can use Network Time Protocol, or NTP. It's a great protocol that's easy to configure. For NTP, you'll need a device that acts as the NTP server or master time keeper. The NTP server will need to obtain the time from a valid source.
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=93)** Once you have an NTP server on your network, all devices can get the time from the server. In order to configure NTP on the device, you'll need the IP address of the NTP server, along with the authentication key and key ID. As with any protocol, you'll want to run the latest version that your operating system supports. If you select NTP and then a question mark, you can see what's available. If offered, select version four. Verify that you can reach the NTP server by doing a ping. Errors do occur with NTP. Sometimes it's simply due to an incorrect IP address. And don't have too many hops from the network NTP server, or your time will not be accurate. If possible, you can configure the master server using atomic time, which is the most accurate time. A network administrator has resources such as the NTP pool project, where they can obtain synchronized time for their system. I'm at this web server, and here are just some of the resources that you can see as far as NTP server related resources. Some of them have disclaimers, and that you're not to hit their servers too often, or else it will be viewed as a denial of service attack. But let's take a look at configuring NTP. I've opened up Packet Tracer, and I've increased the font so you can see it a little bit easier. Now I'm going to open up one of the samples.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=190)** I'll open up PC and Simple Network Management Protocol Router. We're not going to do SNMP, we're actually just going to modify the layout. I'll save this locally, so I don't disrupt the sample.
>
> **[3:32](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=212)** I'll just title it NTP Master. I don't need these instructions, so we'll take those away. Then we'll just stretch these out so we have a little bit more landscape.
>
> **[3:54](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=234)** Now you'll want to rename this router right here, so we'll say that this is the NTP Client.
>
> **[4:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=257)** And here the server is going to act as our network time protocol master. You'll want to make sure that they have access to one another. And now what we'll do, is go to the services. You should be able to see services in here. And one of the services that we're going to need is Network Time Protocol. I'll select NTP, and the service is already on. But we're going to say enable, and we'll say key one. And the password we'll put NTPCiscoPass. Remember it's case sensitive so we'll be careful when we spell it, and check the time. Now we'll go to the NTP client. And let's enlarge this so you can see it. I'll go to Exit, and let me just close this up a little so we can bring it into the center so we can see the commands a little easier.
>
> **[5:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=335)** So we'll say Show clock. And here we see that it's March 1st, 1993. Well we know that that's not the case, but it's because it doesn't have any reference for time. So what we want to do is to get it to authenticate and let it be the client for the NTP master. We need to go back into ConfigT, and we'll type NTP and a question mark. Well now you can see what's available. Remember, Packet Tracer is a [[Simulation Software]] product, so it might not have all of the options available. But it does have enough at least to get us started. So what we need to do is NTP Authentication Key. You'll need to spell it out, only because it won't be able to tab because it's not sure if you want to do authenticate or authentication key. Once you have the dash and type key, then it will allow you to complete by tabbing. 1MD5 and then we'll put the password, NTPCiscoPass.
>
> **[6:55](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=415)** NTP Server, and we'll have the IP address of the server.
>
> **[7:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=427)** NTP Trusted Key 1. And NTP Authenticate.
>
> **[7:23](https://www.linkedin.com/learning/cisco-network-security-secure-access/configure-and-verify-security-for-network-time-protocol?u=76281980&t=443)** And Exit. We'll say show clock. And now you can see that it's updated the time because it got the time from the NTP Master. As you can see, network time protocol is a great protocol that's easy to configure. Once configured, all your devices can be updated and synchronized with the latest time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Simulation Software]] (1)
> **Env Vars:** ntp (25), ios (2), vines (1), snmp (1)
> **Prerequisites:** configure (4), you'll need (3)
> **UI Navigation:** go to (3)
> **Analogies:** such as (3)
> **Definitions:** is a  (2)
> **Warnings:** troubleshoot (1), be careful (1)
> **CLI Commands:** make (1)

#### [Secure Copy Protocol](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=0)** - [Instructor] When transferring files, we must be mindful of the fact that unauthorized individuals could read or modify file contents. There are a few ways to transfer files. If you need to list directories and/or modify, rename, move, or delete files, you'll need to use file transfer protocol. Native FTP is not secure. To transfer files securely use secure FTP, which uses Secure Shell to handle authentication and encryption. If you only need to transfer a file, you could use Trivial File Transfer Protocol. For many years, network administrators would use Trivial File Transfer Protocol, or TFTP, which is a light weight file transfer protocol that uses UDP. TFTP is an unauthenticated, unsecured plaintext file transfer method. A large configuration file could send a lot of small packets across the network. Let's take a look at a TFTP file transfer with CloudShark. I'm in CloudShark, which is a free protocol analysis tool that's online. You can follow along if you like, just follow the link. Here's it's just a simple TFTP capture. Now, this wasn't contiguous, it was just simply a series of small captures, and down below, you can see the plaintext entry.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/secure-copy-protocol?u=76281980&t=95)** But, I'll go to analysis tool and follow stream. And here you see the information about the device. The configuration, it's just a device name, that's coming across using TFTP. In addition, we see the length, which they're small packets. The method of choice is Secure Copy Protocol. Secure Copy Protocol uses Secure Shell for data transport and creates a tunnel between the client and the server. Secure Copy Protocol transfers file via the shell and relies on triple A, so you must configure authentication, authorization, and accounting. To configure Secure Copy Protocol on a router, we'll use the following commands. First, triple A must be configured. Here we see triple A new model and authentication, authorization, and then username and password, and then we'll want to configure Secure Shell. Authentication retries three. And one more thing, you'll need a valid host name, not router, and domain name and then you can generate your rsa keys, crypto key generate rsa. And then finally, enable Secure Copy, Secure Copy Protocol, server enable. To transfer files securely, use Secure Copy Protocol. Secure Copy Protocol uses Secure Shell for data transport, and creates a tunnel between the client and the server.

> [!info]- Semantic Content
>
> **Env Vars:** tftp (5), ftp (2), udp (1)
> **Prerequisites:** configure (3), you'll need (2)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. AAA Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [AAA security](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=0)** - [Instructor] [[Network Security]] threats can gain access to the network and violate the confidentiality of data, alter the integrity of the network, or disrupt the availability of resources. Access control is a framework comprised of methods and logical controls to ensure confidentiality, integrity, and availability. The goal is to allow a subject, which is the entity that requests access to a resource, to interact with objects, which is the resource on the network. We grant permissions in order to perform certain duties, complete operations, or access applications and files. To ensure compliance with the access controls and policies, we employ auditing, which detects and records and logs events such as a user attempting to create, access, or delete files and folders. All access control models should follow the least privilege rule, which states, Assign only the privileges needed to a program, process, or privileged user of a system for the shortest period necessary, and in as small a domain as possible to complete a task without hindrance. With a wide range of data available on the network, including the Internet, controls are put into place to allow or disallow access to objects, implement a layered approach according to the needs of an organization.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=95)** Considerations include what level of security is required and also the impact of the security measures. Access control can be enforced in one of three main categories: Administrative, by enforcing rules through policies, Logical, by enforcing rules through access controls, and Physical, by limiting physical access to the [[Hardware]]. Authentication, authorization, and accounting or Triple A security is a commonly accepted model to control access and defend the infrastructure, ensure [[Data Privacy]], and adhere to [[Regulatory Compliance]]. Authentication asks the question, "Who are you? "Provide proof." Authorization asks, "Now that I know who you are, "let's see what you're allowed to do while you're here." Accounting monitors what has been done. Core components of Triple A include the following: A client is the person, device, or process attempting to authenticate and gain access to the network. The policy enforcement point is the guard that checks with the policy decision point and grants access once authenticated. The policy enforcement point can be a firewall, gateway, or switch. The policy decision point or AAA server decides whether or not to grant access based on available permissions and security policies. A policy information point holds information
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/aaa-security?u=76281980&t=189)** on all clients that access the network. And monitoring and reporting systems gather information and [[Statistics]] and can alert the administrator of activity that's outside of the range of acceptable activity. Triple A Deployment can be local or decentralized or server-based or central. Server-based access can use either RADIUS or TACACS+ authentication. And Cisco has options to implement AAA that includes Secure Access Control System and Cisco's Identity Services Engine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1), [[Hardware]] (1), [[Data Privacy]] (1), [[Regulatory Compliance]] (1), [[Statistics]] (1)
> **Env Vars:** aaa (2), radius (1), tacacs (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Authentication](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=0)** - [Instructor] Authentication confirms the identity of a process, system, or person. Authenticate everyone and everything who accesses data in some manner. When authenticating into a system, I can use one of three things. What you know, such as a password, passphrase, PIN, or even a lock combination. What you have in your hand, such as a smart card, a token, or even a dongle. A smart card is a small device that contains a microchip and has [[Data Storage]] capabilities. It can store several [[Forms]] of identification, such as a fingerprint and a password, and it's available in several form factors, such as cards, key fobs, and USB [[Tokens]]. And what you are. Well, that will be in the form of a biometric, such as a fingerprint, iris recognition, or voice recognition. Biometrics authenticate by using an individual's unique attributes or behavior, and recognize an individual by matching the captured biometric with a stored biometric template in the system. Of the three, the password is simple and inexpensive, and even with all the technologies we use today, the password will most likely continue to be used in some form. When we log into a system, you present your user name stating who I am. The password verifies who you say you are.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=97)** Then you're allowed to gain access into the system. A password is simply a sequence of characters. Passwords are stored as a hash value. When you enter a password, a hash is generated, and then compared to the stored value. If it's a one to one match, you'll be authenticated. If the hash values do not match, the password you entered will be rejected. Rainbow tables are a database of many hashed passwords. Hackers try to crack passwords using rainbow tables. Salting the password with a random string can protect against a rainbow table attack. However, you still should create complex passwords. Let's check a weak password against a complex password when we hash them. I'm at this website, MD5 Hash Generator, and I'm going to put a quick password that I'm going to make up that's very simple, tiger. Now we'll generate this. Now I'll take the hash and we'll go into CrackStation, and I'll put my captcha.
>
> **[3:05](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=185)** And there you can see the result. It cracked it very quickly, it's tiger. Well, now I want to create another hash. Before you try to crack this, don't. Know we'll generate it, it's very complex, and it's a passphrase, which is a good thing to use instead of a password. So there's your hash, and I'll copy that. Now we'll go back in and paste this really long passphrase, and I'll put my captcha.
>
> **[3:43](https://www.linkedin.com/learning/cisco-network-security-secure-access/authentication?u=76281980&t=223)** And as we can see, it's not found. Most likely, we will continue to use passwords in some form for a long time, so as you can see, the best defense is to create complex passwords.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1), [[Forms]] (1), [[Tokens]] (1)
> **Analogies:** such as (5)
> **Env Vars:** pin (1), usb (1), md5 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Authorization](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=0)** - [Instructor] Once a user authenticates into the network, the next step is authorization. The concept of authorization is saying what the entity is allowed to do once they're on the network. If the user is not authorized to access a resource, such as drive or file, there may be a notification that makes them aware of that fact. It may be because they didn't enter the correct password, or they may be denied access because of policy. After authenticating, the object or device may have to check with a directory service, which allows information to be stored, classified and retrieved. To see what polices are in place, that will either allow or deny access. [[Microsoft]]'s directory is called [[Active Directory]], which is a database of objects that stores, organizes and enables access to other objects. Active Directory provides essential network services, such as DNS and Kerberos-based authentication. Once the system grants access to the network drives, the client may not have authorization to access any files or folders. That will depend on file and folder permissions, which can restrict or allow a user, to modify, list folder contents, read or write. If someone were to gain unauthorized access to a device, the first thing they should see is a notification banner,
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-access/authorization?u=76281980&t=97)** which is like a no trespassing sign. In Cisco IOS, a number of banner options are available, including banner message of the day, banner login, banner incoming and banner exec. An example would be the following, using strong language and let those that are not authorized, they're not welcome. Unauthorized access to this device is prohibited. You must have explicit authorized permission to access or configure this device. Unauthorized attempts and actions to access or use this system may results in civil and or criminal penalties. All activities performed on this device are logged and monitored. Authorization states what an entity is allowed to do, once they're on a network. [[Intrusion Detection]] and intrusion prevention should pick up unauthorized behavior and block potential malicious activity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2), [[Microsoft]] (1), [[Intrusion Detection]] (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** dns (1), ios (1)
> **Analogies:** such as (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Accounting](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=0)** - [Instructor] To gain access into a system, the user authenticates by providing a username and password. Authorization determines whether or not they're allowed on the network and what they can access. And Accounting logs the session. Accounting and Auditing detects and records or logs events such as a user attempting to create, access, or delete files and folders along with non-security related events, such as starting or stopping a service. Auditing is done for a variety of reasons as it is a means to monitor what users and processes on the system are doing. Auditing can also alert the administrator to unusual or suspicious activities that suggest further investigation. Most operating systems, network services, and devices offer logging capabilities. Keep in mind, logging occurs after an event. However, it's a critical component in a comprehensive security plan. Capturing data in the logs and then carefully reviewing the logs is essential for [[Intrusion Detection]] and forensics investigations. On any system there are multiple types of auditing and logging methods. Each organization should determine their own process of auditing and which logging capabilities should be activated as to what to log, how long to keep the logs, where to store the logs, and what security events are to be reported to the network administrator.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=94)** All operating systems should be set up to generate access control logs whenever a user is trying to access resources without proper privileges. In addition to configuring logging, test to ensure each managed device is generating logs. At any slice of time, a lot of events take place and can fill the log files. Generating log files can have a negative effect on system performance. In order to minimize resource overhead, the administrator can do the following: Limit data collected in logs and set thresholds, or clipping levels, for when to start collecting data. Remote users have various ways to gain access to the corporate network. Two protocols used to offer centralized authentication, authorization, and accounting for hosts to connect to a network and use network services are RADIUS, or Remote Authentication Dial-In User Service, and TACACS+, or Terminal Access-Controller Access Control System. Both RADIUS and TACACS+ servers respond to queries from VPN clients, wireless access points, routers, and switches. All remote access systems, along with firewalls, proxies, and all edge devices should be configured for logging to detect failed and successful intrusion attempts and to initiate alerts for when further investigation is needed. Logging can monitor an attacker's activities and help in post-event investigations
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-secure-access/accounting?u=76281980&t=189)** by providing evidence in case of legal proceedings. Store and secure log files in case a follow-up investigation is required after a suspected breach. When conducting an investigation, logs can provide supplementary data relative to specific events and can trace events back to originating users. Logging can be very powerful. Ensure procedures and tools are in place to process and analyze the log files and review alert notifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1)
> **Env Vars:** radius (2), tacacs (2), vpn (1)
> **Analogies:** such as (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. RADIUS and TACACS+

[↑ Back to Table of Contents](#table-of-contents)

#### [RADIUS and TACACS+ authentication](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=0)** - [Instructor] Access Control can either be decentralized or centralized. Decentralized access control gives control the access to the users who are closer to the resource. Decentralized access control however, has no method for consistent control. Centralized access control gives a single centralized entity the ability to oversee access to the corporate resources and provides a consistent and uniform method of controlling access. One of the methods we can use for access control, when having users from the outside come in is RADIUS. RADIUS is remote authentication dial-in user service. RADIUS provides authentication, authorization, and accounting. And is what is considered a client-server model whereby a network access server is a client of the RADIUS server. RADIUS supports a number of Flexible Authentication Options. Challenge-Handshake Authentication Protocol or CHAP is a challenge-response authentication method. Password Authentication Protocol or PAP is similar to a normal login procedure and Extensible Authentication Protocol or EAP is used in point-to-point and [[Wi-Fi]] networks. 802.1X is Port-based authentication
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=94)** that provides Network Access Control. Switches and wireless access points use 802.1X to authenticate clients that want to join a LAN. The protocol in 802.1X is EAPOL or Extensible Authentication Protocol encapsulation over LANs. When using 802.1X you'll need a RADIUS server for authentication. RADIUS insures secure communications. As any passwords that are sent between the client and RADIUS server are encrypted. Let's step through this process. We see that in using RADIUS we have a remote client that would like to gain access to the internal network. The remote client goes through the internet and first hits the Network Access Server, which is a Client of the RADIUS server. The RADIUS server checks the User Accounts with the username and password given by the user. It passes the information back to the access server and then acts on the response received. The user is either allowed or denied access to the corporate network. Similar to RADIUS is TACACS+, or Terminal Access Controller Access Control System. This provides access control for routers, network access servers, and other networked computing devices. TACACS+ is an authentication program
>
> **[3:07](https://www.linkedin.com/learning/cisco-network-security-secure-access/radius-and-tacacs-plus-authentication?u=76281980&t=187)** used on UNIX and [[Linux]] systems. It's an extension of the RADIUS protocol that integrates well with Cisco devices. It uses TCP, not UDP. And other benefits is that it separates authentication, authorization, and accounting. Both RADIUS and TACACS+ provide authentication, authorization, and accounting. As we can see, there are a couple of differences. For Triple A, RADIUS combines authentication, authorization, and accounting. And TACACS separates each of the authentication, authorization, and accounting functions. For the Transport Protocol, RADIUS uses UDP, and TACACS+ uses TCP. For Encryption, with RADIUS the password is encrypted, and with TACACS+ the entire payload is encrypted. RADIUS and TACACS+ provide authentication, authorization, and accounting. TACACS+ is an extension of the RADIUS protocol that integrates well with Cisco devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (1), [[Linux]] (1)
> **Env Vars:** radius (19), tacacs (8), tcp (2), udp (2), chap (1)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** similar to (2)
> **Tools:** terminal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Using TACACS+](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=0)** - [Instructor] I'm in Packet Tracer and here we'll see a short example of AAA security using TACACS+. We'll go up to File, and then Open Samples. Once you've downloaded Packet Tracer, you'll have these samples available to use. Go to Router, and AAA and the plain AAA TACACS Server. We'll slide this over, and so you'd retain this, I'll save this as the TACACS2 Server.
>
> **[0:41](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=41)** I'll save that locally so you retain your samples so if you want to go back in and modify or play with them again. Now we'll just pull this up here and just show you what was going on. We have a router, we have a switch, we have a server, and here we want to make sure that everything's talking to one another. And the router itself is configured to use AAA Accounting. Now one of the things is you'll see that it's configured to provide authentication. And what you're going to see is the notification in accounting that takes place when we do some modification we just log in, it will let us know that we logged in. So what you're going to do is open the TACACS server, and I'll just bring this here so we can see it, and we're going to go to Desktop and AAA Accounting, and here we see the TACACS+ Accounting. And there's nothing in it 'cause we haven't done anything yet. I'll close this up. Now again we know there's connectivity, and what we're going to go into is R1 or Router 1. I did make the font larger so you can see this a little bit easier. Here you can see the user name, user and password Sisco. It will ask for that so I'll type user, and Sisco.
>
> **[2:16](https://www.linkedin.com/learning/cisco-network-security-secure-access/using-tacacs-plus?u=76281980&t=136)** And put the password in again, and we'll go into config T. And you can do Make Modifications, whatever you'd like to do. I'm just going to exit back out. But now let's just go back, and I'll minimize this, let's go back in and look at the server, and see the accounting. So we go back in AAA Accounting, and you can see that the notification that the user name user did go into the router. So that's just a brief example of seeing TACACS+ Accounting. And on a production network of course, we'd see many, many more entries.

> [!info]- Semantic Content
>
> **Env Vars:** aaa (6), tacacs (5), tacacs2 (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), open the (1)
> **Speakers:** - [instructor] (1)

#### [Enforcing security with AAA](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=0)** - [Instructor] Dealing with AAA Security can be challenging. In this segment, we'll learn how the Cisco Identity Service Engine provides support for RADIUS and TACACS+ to seamlessly implement AAA security. Because of the complexity of securing the network using AAA security, many vendors help streamline the process by offering an all-in-one solution. Cisco's Identity Service Engine helps manage AAA security by providing centralized control over network access and enforcing security policies. I'm here at this site where you can learn more about ICE. ICE works with multiple types of users and devices that want to join the network, including LAN and [[IoT]] devices, along with wireless and VPN users. Once users and devices have gained access and authenticated into the network, ICE monitors and logs all activities. Cisco's ICE helps manage AAA security using RADIUS and TACACS+ protocols by acting as a central policy decision point for network access. The protocols work in the following manner. RADIUS is primarily used for network access control for [[Wi-Fi]] and VPN users by authenticating end users and devices. TACACS+ is often used for administrative access
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=96)** to network devices, such as routers, switches, or firewalls. So, now let's step through an example of how Cisco's ICE works with each protocol in the context of AAA. The first step is authentication, where the client requests access to the network, and will log in using either credentials, such as a username and password, certificates, or [[Multi-factor Authentication]]. The authentication process is usually where Cisco's ICE acts as the RADIUS server and communicates with the network device, such as a switch or a wireless access point. The process will verify the user's identity and credentials against a directory service, such as [[Active Directory]] or LDAP to ensure that only legitimate users and devices gain access. Once the client is authenticated, the RADIUS server then checks the user account to see their permissions. If the user has the proper rights and access to network resources, it then grants the user access to the network. Cisco ICE provides accounting by keeping logs of user and device activities across the network using RADIUS. It logs detailed information on events, such as login and logout times, bandwidth usage and specific action taken by users.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/enforcing-security-with-triple-a?u=76281980&t=193)** This allows organizations to monitor suspicious activity and provide audit trails for compliance purposes. Dealing with AAA security can be challenging. The Cisco Identity Service Engine is an appliance that provides support for RADIUS and TACACS+ to seamlessly provide AAA security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1), [[Wi-Fi]] (1), [[Multi-factor Authentication]] (1), [[Active Directory]] (1)
> **Env Vars:** aaa (8), radius (7), ice (7), tacacs (4), vpn (2)
> **Analogies:** such as (5)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. BYOD

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing a BYOD infrastructure](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=0)** - [Narrator] Bring your own device includes smartphones, laptops, tablets, and gaming devices. In this segment, we'll learn how to manage a bring-your-own-device environment using Cisco Meraki to keep data and networks secure. Despite the fact that client-owned devices can pose a risk to the corporate environment, many companies allow and even encourage their use. By far, the most common bring-your-own device is the smartphone, but there are many other devices employees want to bring in and tether to the network. Now, the concept of employee-owned devices that are not owned by the company is called shadow IT. Network administrators must address bring your own device. Companies today are accepting bring your own device into the workplace, which continues to grow at an accelerated rate. In fact, studies show that many employees have two or more mobile devices connected to the network at any given time. Managers expect employees to be always available, and users feel that mobile devices help productivity, which helps overall satisfaction in the workplace. In order to manage bring your own device, there are several options out there. I wanted to talk about the Cisco Meraki. So, this is going to provide device-based security policies. In addition, it's going to help built-in network
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=93)** access control and mobile device management. We managed these devices so that they do not pose a risk. Now, the Meraki even allows the network administrator to see all the devices on the network where they can lock down and even erase the devices, so I wanted to show you some of the options. Now, one of the things you can do is say, Get a Demo, and you can go to this dashboard, and then if you sign up, then you'll be able to get a simple overview of the Meraki. And once you open it, there is a video which you can go through, and it shows you what's available, but within it, you can see all of the options in making sure it has total visibility of the network, and this is very powerful. Now, over here, you can see some of the policies, Data Loss Prevention, Zero Trust Access, Endpoint Posture, and we'll select that, and it'll come up with a policy. Now, this is, again, just a demo, but you can see that once you get that, you can add your own policies. We'll go back to the data center for all networks, and then you can see Network-Wide, all the clients and the organizations, again, visibility across the entire network. Now, within the Meraki, within this application itself, you can see that you can enable device restrictions, and allow or disallow device functionality, and then automatically apply policies by device and type, and this basically locks out certain applications
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=191)** from your network that might pose a risk. You can protect the LAN resources by enabling firewall capabilities, protect against malware, and actually analyze your bring-your-own-device activities within automatic reporting, and again, this is sometimes for compliance reasons. If I select Manage Clients, again, this could give us an option to take a look at who is involved in the network, Secure Connect, and go to Security Activity. And then once you get in, you would be in the Cisco umbrella, and you'd sign in and have a better visualization of your own network. In addition to having visualization across the entire network, for successfully implementing a bring-your-own-device deployment, user education is also very important. Now, in addition to the job that the network administrator must do, we want to talk to our users. Essentially, we want to emphasize what will not be tolerated on our network. For example, your device must be safe and free of malware. Do not jailbreak or root the device. Do not install apps that can compromise the data or network. And you'll need to teach them to learn a little bit more about apps, and read the end-user license agreement, and then also do some research, and when in doubt, simply ask. Bring your own device is a part of today's corporate environment,
>
> **[4:45](https://www.linkedin.com/learning/cisco-network-security-secure-access/managing-a-byod-infrastructure?u=76281980&t=285)** so with a proactive approach, companies can keep the data and the network secure.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (1), you'll need (1)
> **Env Vars:** lan (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Mobile device management (MDM)](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=0)** - [Narrator] In today's networks, bring your own device is the new normal. Employees bring and use their mobile devices and network administrators face the challenge of keeping the network secure and easily apply network specific policies. Today's mobile devices are essentially a small, portable, always on computer. Businesses allow mobile devices as they have been proven to increase employee productivity. However, along with the benefits come challenges. Cisco's Meraki addresses the challenge of mobile device management. I'm at Cisco's Meraki mobile device management site where you can see how the network administrator can address many of the security issues they face when managing mobile devices. Meraki can provide device-based security policies, network access control, and mobile device management. I'll scroll down so you can take a look at some of the benefits. A unified multi-platform device management, security policy enforcement,
>
> **[1:17](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=77)** and ability to apply policies by device type. So you can see that the network administrator can have granular control over the devices on the network. However, along with [[Network Administration]], user education is very important. Because of an always on connection and the amount of time spent on mobile devices, users should take precaution to secure the device. Mobile devices are small and they can easily be lost or stolen, passwords can be compromised. A couple of things that you should keep in mind as far as mobile device best practices include: keep software updated, patches and updates reduce the threats from malware attacks, secure your phone to slow someone down from gaining access to your information you should use a passphrase or a password, use a biometric such as a fingerprint if available and set idle timeout to lock the phone when not in use. Beware of apps. Don't download every app you see because apps can expose sensitive data such as call history and contacts. Apps can perform suspicious action such as recording conversation. They can also disable anti-malware. Only obtain apps from trusted sources, such as Apple iTunes, [[Google]] Play, or Amazon App Store for [[Android]]. This helps prevent malware which
>
> **[2:50](https://www.linkedin.com/learning/cisco-network-security-secure-access/mobile-device-management-mdm?u=76281980&t=170)** is often distributed via apps. Also, once you download, you'll want to review any [[Privacy]] policies and understand what data the app wants to access, such as your location, social media information, before you download and install the app. With privacy, only give your cell phone number to someone you know. Don't give other people's numbers away without their permission. Disable the geotagging feature so they don't always know where you are at any given time. And don't respond to numbers that you don't know. You should know how to block calls. Either all incoming calls or individual names and numbers. Vishing is another name for voice over IP [[Phishing]]. It's just like regular phishing in that an attacker will call the party and request confidential information. Don't root or jailbreak your phone. This voids the manufacturer's warranty and it may be in violation of corporate policy. Use good web sense. Use a secure connection while shopping or [[Banking]]. Enroll in something such as Find my iPhone or equivalent service if it isn't supported at your workplace. And you should use caution when connecting. Avoid unsecured or unprotected networks. Bring your own device is the new normal. Employees bring and use their mobile devices. Along with applying device specific policies, user education and safe mobile device practices can help keep the network secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Phishing]] (2), [[Network Administration]] (1), [[Google]] (1), [[Android]] (1)
> **Analogies:** such as (6), just like (1)
> **Code Identifiers:** itunes (1), iphone (1)
> **Warnings:** keep in mind (1), caution (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Securely integrating IoT devices](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=0)** - [Instructor] The [[Internet of Things (IoT)|Internet of Things]] offers numerous opportunities for consumers, businesses, and governments. In this segment, we'll learn how to safely integrate [[IoT]] devices into the network using a zero trust approach. The Internet of Things is a collection of tens of billions of devices attached to the internet that collect and exchange data using nodes, sensors, and controllers. For most of the early growth in the IoT, we didn't incorporate any traditional security methods such as firewalls and [[Intrusion Detection]] systems. The belief was these tiny devices were not an attractive target to hackers, or they couldn't possibly be susceptible to an attack. However, many IoT devices are vulnerable as they're small, have minimal processing, and are generally not able to defend themselves. As a result, many have moved away from the traditional approach and have adopted a zero trust model. Zero trust is an approach to [[Cybersecurity]] that assumes no absolute trust for users, devices, or applications regardless of location or level of access. A zero trust framework helps reduce the risk of a malicious actor gaining access and moving through the network. A zero trust model spans across networks,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=95)** applications, and all environments. Using this model helps secure access from anyone or anything that might be able to access the network. I'm here at First Data, and I'll scroll down, where we can see a visual of zero trust using the Cisco model, and I've opened it in a new tab. Now, when using a zero trust approach any place where an access control decision is required should be considered a perimeter. The zero trust concept is comprised of three pillars that include workforce, workloads, and workplace. So let's talk about each one. Zero trust for the workplace involves anyone who can access organizational resources using either their personal or corporate-managed devices. Zero trust restricts access so that only users with the appropriate permissions and secure devices can access corporate resources regardless of their location. With zero trust for the workloads this applies to applications that are running in the cloud, or data centers, or other virtualized environments that need to interact with one another. In this case, zero trust focuses on secure access when an application programming interface, or API, microservice, or container is accessing a database
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-access/securely-integrating-iot-devices?u=76281980&t=193)** within an application. And zero trust for the workplace focuses on securing access for all devices that connect to the enterprise network. And those devices include the Internet of Things, endpoints, physical and virtual servers, and printers. The IoT offers numerous opportunities for consumers, businesses, and governments. To ensure safe integration within the network, use a zero trust framework that uses the approach never trust, always verify to prevent unauthorized access of network resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (4), [[Internet of Things (IoT)|Internet of things]] (3), [[Intrusion Detection]] (1), [[Cybersecurity]] (1)
> **Env Vars:** iot (1), api (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-access/next-steps-23667573?u=76281980&t=0)** - [Instructor] Thank you for watching. In this course, I covered the various elements involved in securely accessing resources. Including accessing devices through either in-band, or out-of-band access. As well as network management protocols, such as network time protocol, secure copy protocol, and simple network management protocol. Additionally, I reviewed AAA security, including authentication, authorization, and accounting. I compared RADIUS and TACACs authentication, along with the extended environment network administrators manage, when dealing with Bring Your Own Device, along with the integration of the [[Internet of Things (IoT)|Internet of Things]]. If you're interested in learning more, please check out the library, where we add new courses all the time. If you're interested in learning about packet analysis, please check out my courses on [[Wireshark]]. My course, "[[Introduction to Pen Testing for Cybersecurity Professionals]]", will be well worth your time. You might also want to see what my colleague, Malcolm Shore, has for you on his homepage. Keep learning. I hope to see you again, soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Internet of Things (IoT)|Internet of things]] (1), [[Wireshark]] (1), [[Cybersecurity]] (1)
> **Env Vars:** aaa (1), radius (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Cisco Networking

## Path Context

### In [[Cisco Network Security- Safeguarding Network Integrity and Data]]
← [[Cisco Network Security Core Security Concepts]] | **2 of 7** | [[Cisco Network Security- VPN]] →

## Appears In

- [[Cisco Network Security- Safeguarding Network Integrity and Data]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Cisco Networking
- [[Cisco Networking Foundations- Switching and Routing]] — Cisco Networking
- [[Cisco Networking Foundations- IP Addressing]] — Cisco Networking
- [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] — Cisco Networking
- [[Cisco Network Security- Content and Endpoint Security]] — Cisco Networking

---

[↑ Back to top](#)