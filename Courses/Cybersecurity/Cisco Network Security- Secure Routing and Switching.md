---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-secure-routing-and-switching
url: "https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching"
duration_minutes: 86
duration: 1h 26m
level: Intermediate
updated: 11/26/2024
learners: 46310
skills:
  - Network Switches
  - Network Security
  - Cisco Networking
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGBxqvpH0YlUw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730136701247?e=2147483647&amp;v=beta&amp;t=I-N__XSEQogsz4aIILaEevrl58BnW2iso6JgqAfQfaE"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)'
prev_courses:
  - '[Cisco Network Security- VPN](Cisco%20Network%20Security-%20VPN.md)'
next_courses:
  - '[Cisco Network Security- Cisco Firewall Technologies](Cisco%20Network%20Security-%20Cisco%20Firewall%20Technologies.md)'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":4,"total":7,"prev":"Cisco Network Security- VPN","next":"Cisco Network Security- Cisco Firewall Technologies"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-switches
  - skill/network-security
  - skill/cisco-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Secure%20Routing%20and%20Switching.md)

![Cisco Network Security: Secure Routing and Switching](https://media.licdn.com/dms/image/v2/D560DAQGBxqvpH0YlUw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730136701247?e=2147483647&amp;v=beta&amp;t=I-N__XSEQogsz4aIILaEevrl58BnW2iso6JgqAfQfaE)

# Cisco Network Security: Secure Routing and Switching

> A malicious person that gains access to a switch or router can modify system integrity to steal information or disrupt communications. Qualified network administrators should know how to prevent attacks by securing networking devices. This course covers secure routing and switching, including mitigation procedures and VLAN switching. Lisa Bock, a security ambassador, explains the difference betwee

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching) | 1h 26m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you need to know](#what-you-need-to-know)
  - [Packet Tracer and exercise files](#packet-tracer-and-exercise-files)
- [**1. Secure Routing and Switching**](#1-secure-routing-and-switching) (3 videos)
  - [Secure routing and switching: Overview](#secure-routing-and-switching-overview)
  - [Control, data, and management planes](#control-data-and-management-planes)
  - [Router and switch security basics](#router-and-switch-security-basics)
- [**2. Securing Cisco Routers**](#2-securing-cisco-routers) (9 videos)
  - [Layer 3 attacks: Overview](#layer-3-attacks-overview)
  - [Secure the control plane](#secure-the-control-plane)
  - [Examine privilege levels](#examine-privilege-levels)
  - [Assign privilege levels](#assign-privilege-levels)
  - [Configure IOS role-based CLI access](#configure-ios-role-based-cli-access)
  - [Implement IOSR Resilient Configuration](#implement-iosr-resilient-configuration)
  - [Routing update authentication](#routing-update-authentication)
  - [Challenge: EIGRP authentication](#challenge-eigrp-authentication)
  - [Solution: EIGRP authentication](#solution-eigrp-authentication)
- [**3. Security on Cisco Switches**](#3-security-on-cisco-switches) (8 videos)
  - [Layer 2 attacks: Overview](#layer-2-attacks-overview)
  - [Spanning-Tree Protocol](#spanning-tree-protocol)
  - [STP attacks](#stp-attacks)
  - [ARP spoofing](#arp-spoofing)
  - [MAC spoofing](#mac-spoofing)
  - [macof attack](#macof-attack)
  - [CDP/LLDP reconnaissance](#cdplldp-reconnaissance)
  - [DHCP spoofing](#dhcp-spoofing)
- [**4. Mitigation Procedures**](#4-mitigation-procedures) (4 videos)
  - [Implement DHCP snooping](#implement-dhcp-snooping)
  - [Dynamic ARP inspection](#dynamic-arp-inspection)
  - [Implement port security](#implement-port-security)
  - [BPDU guard, root guard, and loop guard](#bpdu-guard-root-guard-and-loop-guard)
- [**5. VLAN Security**](#5-vlan-security) (3 videos)
  - [VLAN attacks](#vlan-attacks)
  - [Security implications of a PVLAN](#security-implications-of-a-pvlan)
  - [Security implications of a native VLAN](#security-implications-of-a-native-vlan)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/welcome?u=76281980&t=0)** - [Instructor] Hello, my name is Lisa Bock, and I'm a security ambassador. In this course, I'll begin with an overview of secure [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and switching, and I'll review the control, data, and management plane, along with router and switch security basics. I'll then turn my attention to Layer Two attacks, and cover how to secure Cisco switches. I'll cover some mitigation procedures, such as dynamic ARP inspection, and BPDU guard, and I'll wrap up with a discussion on VLAN security. I am super excited to bring you this series on CCNA security, and this section on secure routing and switching so that you can improve your skills in configuration and maintenance of Cisco devices. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2)
> **Env Vars:** arp (1), bpdu (1), vlan (1), ccna (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What you need to know](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/what-you-need-to-know-23697136?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/what-you-need-to-know-23697136?u=76281980&t=0)** - [Instructor] This course is an intermediate level course for network administrators, managers, students, and anyone with an interest in learning more about Cisco Security. Participants should have a solid knowledge of networking fundamentals, devices, and cables, along with various topologies. This course and the entire learning path covers the components included in the security fundamentals section of the CCNA exam. I'll take you here to this site where you can learn more about the CCNA exam. The exam will test your knowledge and skills related to networking and is an excellent addition to a career in information technology. I'll scroll down where you can see the objectives, and then I'll expand the section on Security Fundamentals so that you can see what I'll be covering throughout the learning path. I am super excited to bring you this series on CCNA security so that you can improve your skills in securing an organization's infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (3)
> **Definitions:** is an  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Packet Tracer and exercise files](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/packet-tracer-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/packet-tracer-and-exercise-files?u=76281980&t=0)** - [Instructor] During the course, I'll demonstrate some of the concepts using Packet Tracer, which is available at the [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) Academy, here at [netacad.com](https://netacad.com). Get familiar with this site, as there is a lot of additional training available. You'll want to sign in, create an account, and then you can search for Packet Tracer. You'll download the appropriate version for you operating system, and then once in, you'll be able to access the samples that come pre-loaded. Go to File, Open Samples, and as you can see, they're available to you. We will work through them with some of the exercises, or you can create your own network. Either way, Packet Tracer is a great resource. For more information, review my discussion of Packet Tracer in CCNA Security, Secure Access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cisco Networking](../../Skills/Network%20and%20System%20Administration/Cisco%20Networking.md) (1)
> **Definitions:** is a  (2)
> **URLs:** [netacad.com](https://netacad.com) (1)
> **Env Vars:** ccna (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 1. Secure Routing and Switching

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure routing and switching: Overview](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/secure-routing-and-switching-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/secure-routing-and-switching-overview?u=76281980&t=0)** - [Narrator] Network administrators take steps to secure the network. They use Endpoint protection, anti-malware, and security education, training, and awareness. Network administrators should also take steps to secure the two most common devices on a network: routers and switches. Let's compare the two. Routers connect networks. Each interface on a router represents a separate network. Routers use a [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table to make a decision. And routers generally only have two or four ports. Switches connect computers on a subnetwork. Switches use a switching or CAM table in order to make a decision to forward packets. Switches have port density, as a switch can have four, 12, 24, or 48 ports. Both routers and switches have vulnerabilities. If a malicious person with basic networking knowledge can gain access to a switch or router on the network, they can modify the system integrity in order to steal information or disrupt communications. A router good practice includes, securing the control plane, and configuring privilege levels, along with ensuring routing update authentication. With a switch, good practice includes, implement [DHCP](../../Glossary/Standard/DHCP.md) snooping and port security,
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/secure-routing-and-switching-overview?u=76281980&t=97)** along with activating BPDU guard, root guard, and loop guard. Malicious activity against a switch or router can modify system integrity and disrupt communications. As a result, network administrators should take steps to secure the routers and switches in an organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** cam (1), dhcp (1), bpdu (1)
> **CLI Commands:** make (2)
> **Best Practices:** good practice (2)
> **Speakers:** - [narrator] (1)

#### [Control, data, and management planes](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/control-data-and-management-planes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/control-data-and-management-planes?u=76281980&t=0)** - [Presenter] When dealing with the various networking devices that move data throughout the network there are three planes. The management plane, the control plane, and the data plane. The management plane is the connection between the workstation and the managed device, where the administrator monitors and configures services on the device such as a router or switch, Protocols in this plane include telnet, network time protocol, secure FTP, simple network management protocol, and secure shell. We work with the management plane either in-band or out-of-band. In-band management accesses the device over an active network connection using the same media and interface as the data flow. Out-of-band management accesses the device using a dedicated interface. Most consider out-of-band the most secure method and is generally preferred over in-band management. The control plane is responsible for [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) and routers that talk with one another. The control plane is where the device learns what action to take on the data. No data moves until the control plane makes a decision on the best path to deliver the data. Protocols in this plane work independently of the network administrator. Protocols include static routes along with routing protocols
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/control-data-and-management-planes?u=76281980&t=96)** such as Open Shortest Path First, IS-IS, and EIGRP, along with other protocols such as IGMP, ICMP, and ARP. The data plane is also called the forwarding plane. This is the actual movement of data based on what the device learned from the control plane. The services plane is a subset of the data plane that requires high-touch handling by the device to forward the packet. The data plane influences and controls the flow of data by using access control lists, quality of service, and encryption and decryption. When dealing with the various networking devices, there are three planes: the management, control, and the data plane. All have a role in moving data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) (2)
> **Env Vars:** ftp (1), eigrp (1), igmp (1), icmp (1), arp (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Router and switch security basics](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/router-and-switch-security-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/router-and-switch-security-basics?u=76281980&t=0)** - [Presenter] Although most devices have advanced configuration options there are several essential best practices the network administrator should implement. Physically secure the devices by housing them in a locked room with adequate cooling and moisture control. Synchronize time and date using a protocol such as network time protocol. Diagram the network so it's easier to troubleshoot and maintain the network. Back up configurations to a central location. Password protect all access points. You'll want to configure different passwords for the following and don't reuse passwords. Configure passwords to login mode to restrict initial access. To privileged mode to prevent unauthorized configuration changes. And console, auxiliary, and VTY interfaces. Enable event logging and if possible back up to a syslog server. Cisco IOS provides many options for logging. I'm in Packet Tracer. I opened up one of the routers command line interface and I simply type logging with a question mark. Here, you can see the various logging options. So they're available and you might want to become familiar with some of those logging options. Physically securing the devices, password protection,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/router-and-switch-security-basics?u=76281980&t=94)** and logging are all essential best practices to provide a first layer of defense to protect your network.

> [!info]- Semantic Content
>
> **Env Vars:** vty (1), ios (1)
> **Prerequisites:** configure (2)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [presenter] (1)


### 2. Securing Cisco Routers

[↑ Back to Table of Contents](#table-of-contents)

#### [Layer 3 attacks: Overview](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-3-attacks-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-3-attacks-overview?u=76281980&t=0)** - [Instructor] The network layer, or layer three handles addressing and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). Routers operate in layer three and some of the main functions of a router are path selection and packet forwarding. The protocols that are used in this layer include IP, Ipsec, and ICMP. Layer three, like any other layer in the OSI model, can suffer both active and passive attacks. Some layer three attacks are passive, such as sniffing or scanning. Which are done because of a need to discover information about a network. For example, we might see operating system fingerprinting using ICMP. There are several active attacks that could cripple a network. Routing table poisoning is a malicious change in the routing table of a router that can result in redirection of some or all network traffic and cause connectivity problems. IP spoofing is a technique a hacker uses to gain access to a system by modifying the packet header with a spoofed source IP address. Denial of service attacks, such as a ping flood, which can prevent the router from processing traffic and can affect the whole network. To prevent layer three attacks, the network administrator should implement security controls on multiple levels.
>
> **[1:32](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-3-attacks-overview?u=76281980&t=92)** Such as using a firewall to filter inbound and outbound traffic, along with strong access controls. In addition, routers are essential in any organization. Take steps to secure the control plane. Configure privilege levels and IOS role-based command line interface access, and provide routing update authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (4)
> **Env Vars:** icmp (2), osi (1), ios (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Secure the control plane](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/secure-the-control-plane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/secure-the-control-plane?u=76281980&t=0)** - [Instructor] The control plane is where the device learns what action to take on the data. No data moves until the control plane decides on the best path to deliver the data. To understand the need to secure the control plane, we need to visualize the path data takes as it traverses through the router. We have data going into the router via an ingress interface. The inbound traffic has data plane or user generated packets, but the traffic also consists of control and management plane traffic. Management plane traffic is traffic used when we're configuring the device. Control plane traffic is used to control the flow of the network. Services is a subset of the data plane, and in the data plane this is the user generated data. As traffic passes through the interface, the interface access control list will filter the traffic. In the center we see Cisco Express Forwarding, or the CEF table, which is an optimized layer three switching forwarding table used in Enterprise networks to improve overall performance. As we can see in red, the lower two lines show that most of the data will pass through the CEF table that is used to forward the data plane packets. Some of the traffic will go to the CPU,
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/secure-the-control-plane?u=76281980&t=95)** or go through what's called the punt path for processing, and eventually the processed data will pass through the egress interface. It's important to defend the CPU from receiving unnecessary traffic, and prevent overwhelming the route processor resources, as this will reduce the availability of these resources for mission critical tasks dedicated to network operation. To secure the control plane, we use control plane policing, which improves the traffic flow. Here in our illustration, where control plane policing will take place is as the data passes through the punt path. CoPP has the following features: Control plane policing protects the control plane against attacks. Control plane protection is an extension of CoPP that allows for more refined control, and control plane logging logs packets that were dropped or permitted by CoPP. In addition to CoPP, you can use Cisco Auto Secure, which is a one-step lockdown feature along with [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) protocol authentication, which defends against bogus updates from rogue devices. Control plane policing protects the control plane against attacks and defends the CPU so it's available to move, process, and route the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** cpu (3), cef (2)
> **Definitions:** is a  (2), is an  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Examine privilege levels](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/examine-privilege-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/examine-privilege-levels?u=76281980&t=0)** - (Instructor) When configuring devices, Cisco iOS is separated into different command modes. Each mode has a set of commands available. In general, the order you access the device is as follows. When starting a session, you'll begin in User EXEC mode, which only has a limited number of commands that do not change the configuration of the router. Then you'll type "enable", and the once in Privileged EXEC, you can then run any EXEC commands. You'll then hit "config t", and from Privileged EXEC, you go into Global config, where you can enter commands to configure general system characteristics. From Global config, you enter specific configuration modes, for example, an interface. In an IT department of an organization, each employee can have various job functions. However, not all job functions should have the same level of access to the managed devices. Cisco operating systems have two approaches of granting infrastructure access: privilege Levels, and role-based Command Line Interface. The Cisco iOS command line interface has two levels of access to commands. User EXEC mode, which is privilege level 1, is the lowest EXEC mode user privileges and allows only user-level commands available at the prompt.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/examine-privilege-levels?u=76281980&t=97)** Privilege EXEC mode is privilege level 15, which is the default. It includes all enable-level commands at the router prompt. The two levels provide a certain level of control. However, too often, a router is secured with only one privileged EXEC password. To better secure the network, the system administrator should assign privilege levels. There are 16 privilege levels in total that determine what could be done, once the user is logged into the router. The higher the privilege level, the more access to the router, and the higher privilege levels will automatically inherit the command access of the lower levels. Levels 0, 1 and 15 have predefined settings. Level 0 has limited commands, such as "exit" and "help", and no access. Level 1 includes all the commands in user mode and provides very limited read-only access to the router. Level 15 provides complete control over the router. The admin can customize and assign privilege levels and assign different commands to levels 2-14, according to the organization's structure and the different job functions that require access to the managed devices. For example, to allow privilege level 8 to be able to go into "config terminal",
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/examine-privilege-levels?u=76281980&t=192)** you will need to modify the existing level, "privilege exec level 8 configure terminal". In a Cisco iOS, assigning privilege levels is one way to ensure access control in your managed devices.

> [!info]- Semantic Content
>
> **Env Vars:** exec (8)
> **Tools:** command line (2), terminal (2)
> **Code Identifiers:** ios (3)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** configure (2)

#### [Assign privilege levels](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/assign-privilege-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/assign-privilege-levels?u=76281980&t=0)** - [Instructor] In a Cisco iOS, there are 16 privilege levels in total. Level zero, one, and 15 have predefined settings. The administrator can customize and assign privilege levels and assign different commands to levels two through 14 according to an organization's structure and the different job functions that require access to the managed devices. I'm here in Packet Tracer and let's take a look at the different levels. I'll just fire up a router. First let's see what you can do at level 15. We'll run show privilege and it confirms that we're at privilege level 15. Then I'll put a question mark to see what commands I can run. Of course there are a lot because privilege level 15 is the highest level which you can do anything to the router. We'll scroll up here and confirm that at level 15, you can go into configuration mode. Now we'll enable privilege level 11 and now I'll do a question mark to see what commands I can run. It's a pretty short list. As you can see at level 11, I cannot enter configuration mode. Now I'll go back and enable 15. Now I want to go in to config t.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/assign-privilege-levels?u=76281980&t=94)** Once I'm in there, I'm going to modify level 11 by using the command privilege exec level 11 configure terminal. Now we'll drop back down and now I'll say enable 11. Now I'll put a question mark. Now you can see level 11 is able to go into configuration mode.
>
> **[2:07](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/assign-privilege-levels?u=76281980&t=127)** I'm going to open a sample. I don't want to change that, but I just want to show you something how we can go back in and modify privilege levels and allow a junior administrator to do some tasks on a router. This is the sample simple network management protocol router and it is in the saves. What we'll do is go file and save as and I'll put it on my desktop so I don't disrupt any of the original saves. This instructions I don't need so I'm going to take them away and now we're going to go into the configuration of the simple network management protocol router. So in our organization, we have a junior administrator that needs to have access to the SNMP router. What we'll do is create a username and password for the admin and the support staff, the junior administrator, that must log in remotely to configure a device. So what we'll do is create a username for the admin and support staff. We're going to actually go into the router I want to manage and then to config t. Now we'll start with the admin. So we've created the admin with a privilege level of 15 and a password cisco. Of course this isn't the best password, but for this purpose we'll keep it simple. Now we'll create a user jradmin
>
> **[3:42](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/assign-privilege-levels?u=76281980&t=222)** and assign a privilege level of 11 and we'll give the jradmin a password ciscokid. Now we want to assign the command configure terminal to level 11, privilege exec level 11 configure terminal. Now what we want to do is attach the local user database to the vty lines. So we go into the vty lines and we'll say login local. And just to be sure we force it to go into local login, we'll say no aaa new-model. Now we're going to go into the router router one and then we'll connect to the simple network management protocol router. It asks for the username and we'll say jradmin and of course it asks for the password which is ciscokid. So I want to say show privilege, privilege level is 11, and now let's just see if I can get in to config t and I can. So we can see that a user that logs in under the username jradmin can only access privilege level 11. So we modified level 11 to include config t which allows that jradmin to configure the router.
>
> **[5:17](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/assign-privilege-levels?u=76281980&t=317)** Using privilege levels and passwords is one way to ensure access control in your managed devices.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (5)
> **Tools:** terminal (3)
> **Code Identifiers:** ios (1)
> **Env Vars:** snmp (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### [Configure IOS role-based CLI access](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/configure-ios-role-based-cli-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/configure-ios-role-based-cli-access?u=76281980&t=0)** - [Instructor] Assigning privilege levels provides flexibility in controlling access to the managed devices. However, there are some limitations and it can be complex. For example, if a support staff member needs access to several but not all the commands, the administrator must customize privilege levels and assign different commands to levels two through 14. In a small organization, this could be possible but in a large shop providing access for everyone, can be complex. To overcome the limitations of assigning privilege levels, the administrator should use role-based [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). That provides granular control by restricting what commands are available according to a specific role. It's like a group policy for your managed devices. Role-based CLI access is also called parser views. And this defines what CLI commands each user can access. And provides four views that control the available commands. CLI view, root view, superview, and lawful intercept view. Root view has access to all commands available in privilege level 15, but allows the ability to create CLI views and add or remove commands from existing views. CLI view is a specific set of commands that can be bundled together.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/configure-ios-role-based-cli-access?u=76281980&t=96)** You can share a single CLI view within multiple superviews. Superview is a large group of CLI views that you assign to users or groups. You must first assign the commands to the CLI view and then, create the superview. Lawful intercept view enables electronic surveillance. Before creating a view, the administrator must enable AAA using the AAA new model. And then, once you're in, to configure and alter views, an administrator must log in as the root view, using the enable view privilege EXEC command. I'm in Packet Tracer and I've opened a router. I selected this from one of the samples because it has AAA already active. The username is user and the password is cisco. Now, I want to get into root view. Parser view successfully set to view root. So now, we'll create a parser view, jradmin. Once in the view, we'll create a password. And then, we'll assign the commands. And now, we'll exit.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/configure-ios-role-based-cli-access?u=76281980&t=189)** So now, the view has been created. You can log into view mode once you're logged in using enable view jradmin, or you can also configure the users so that when they log into the router, they're logged directly into their view mode. Keep in mind, your software release might not support all the parser views and the features of the parser views. In most cases, the maximum allowed number of CLI views and superviews is 15. And each view must have an associated password. Role-based command line interface provides granular control by restricting what commands are available according to a specific role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (10)
> **Env Vars:** cli (10), aaa (3), exec (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), it's like (1)
> **Prerequisites:** configure (2)
> **Tools:** command line (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Implement IOSR Resilient Configuration](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-iosr-resilient-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-iosr-resilient-configuration?u=76281980&t=0)** - [Narrator] Another component of having a secure system is the ability to recover quickly in case of a system failure or other issues, such as accidentally formatting the flash file system or deleting the start up configuration. IOS Resilient Configuration allows the administrator to make a secure copy of the router configuration and image stored locally on the router and a set of files called the bootset. Now let's go to package racer and enable IOS Resilient Configuration. In package racer, I simply opened up one of the samples. Now first we're going to run show secure bootset to see the IOS image and configuration resilience, and see whether it's active or not. Now, as you see, image and configuration resilience is not active. So now we'll want to create a secure copy of the secured IOS image and configuration. So we'll enable each feature with one command to create a secure boot image and then we'll run secure boot config. Now we'll run show secure bootset again. And we see now, that it's active. Now IOS Resilient Configuration doesn't automatically update with the startup configuration.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-iosr-resilient-configuration?u=76281980&t=95)** If you need to update it, you first delete the existing resilient configuration and then run secure boot config command again. Okay, now you can see how easy that was to create the bootset and secure it. If you do need to replace the current running config with the archived config, you can run this command and restore the secure boot config. After you restore, you'll want to save the running configuration by issuing the command copy run start. IOS Resilient Configuration allows the administrator to make a secure copy of the router configuration and image and store it locally on the router so that you can recover quickly in case of a system failure.

> [!info]- Semantic Content
>
> **Env Vars:** ios (6)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Routing update authentication](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/routing-update-authentication-23700135?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/routing-update-authentication-23700135?u=76281980&t=0)** - [Instructor] Routers constantly communicate with their neighbors to provide updates. Without authentication, an attacker can spoof the router and send the wrong information. In this segment, we'll review the importance of [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) update authentication to defend against spoofing attacks. Routers communicate with their neighbors to provide updates on route availability, bandwidth, and other metrics that are necessary for a router to make a routing decision. For example, routers using EIGRP periodically send update messages, which include the metrics, so the receiving router can calculate the relative distance. Without authentication, an attacker can spoof the router and send the wrong information that can modify the routing tables and lead to eavesdropping, Denial of Service, or hijacking. Routing protocol authentication prevents bogus updates from man-in-the-middle attacks. So let's talk about how this works. Here we see RouterA that wants to send an update to RouterB. It sends update information and a password hash value to RouterB. RouterB checks, and if the password is okay, it will accept the update. Now, RouterC wants to send update information with a password hash.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/routing-update-authentication-23700135?u=76281980&t=95)** However, RouterB checks, and if the password is not correct, it will not accept the update information. Any of the following [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) can offer either a clear text or a hashed password, and you can use either MD5 or SHA-256. However, Cisco recommends using SHA-256 if possible as it provides stronger security and integrity of the routing update. Let's compare the two using an example. I'm here at [cloudshark.org](https://cloudshark.org). And here we see Open Shortest Path First authentication. And at first, you see several Hello packets. And what I'm going to do is open up frame one, and then we'll open up the header. And I'll scroll down. And here you see the authentication type is simple password, and the data is in clear text. So there you can see the password. And now we'll take a look at authentication using a hash value instead of plain text. And again, we see the Hello packets, and we'll drop down the header and scroll down. Now, instead of seeing a password in clear text, it's a hash value that no one will be able to understand. So routing protocol authentication ensures that a router receives update information from a trusted source.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/routing-update-authentication-23700135?u=76281980&t=190)** Use a hash instead of a plain text password to provide better security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (6), [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) (1)
> **Env Vars:** sha (2), eigrp (1), md5 (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** make (1)
> **URLs:** [cloudshark.org](https://cloudshark.org) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: EIGRP authentication](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/challenge-eigrp-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/challenge-eigrp-authentication?u=76281980&t=0)** (exciting music)
>
> **[0:03](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/challenge-eigrp-authentication?u=76281980&t=3)** - [Instructor] Let's do a challenge to test EIGRP authentication. You're going to go into Packet Tracer and open one of the samples. You'll find that under saves/Router/EIGRP, and the file name is BaseEIGRP authentication packet. You'll save it locally as to preserve the sample, and then follow the instructions. At the end you should see that router two should be present in the neighbor table. Let me get you started. Go into Packet Tracer, and then File, and Open Samples. Go into Router, EIGRP, and it's right here, baseEIGRP authentication packet. You can move the instructions over here, and then simply follow the instructions. This challenge should take you about five minutes. Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** eigrp (3)
> **CLI Commands:** find (1)
> **Code Identifiers:** baseeigrp (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (exciting music) (1)

#### [Solution: EIGRP authentication](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/solution-eigrp-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/solution-eigrp-authentication?u=76281980&t=0)** (upbeat jingle)
>
> **[0:03](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/solution-eigrp-authentication?u=76281980&t=3)** - Okay, let's do this challenge. I'm in Packet Tracer and what I've done was open up the Packet Tracer file. Now mine might look at little different because I moved the instructions over to the right hand side and I added a few comments so we can see what we're doing as we're doing it . Now begin on Router1 and it asks us to show ip egrp neighbors.
>
> **[0:35](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/solution-eigrp-authentication?u=76281980&t=35)** And as you see, 5.1.1.1 is in the table. Now were going to do EIGRP message authentication, so I'll need to go to the interface Fa0/0. So now we said to enable eigrp message authentication and the 100 used here is the autonomous system number of the network and md5 indicates the md5 hash is to be used for authentication. The next one we'll do is ip authentication key-chain eigrp 100 key1 and that specifies the key-chain that we use for authentication that's already been created. Now we'll exit and exit again and now what we want to do is show ip eigrp neighbors again and as you can see, 5.1.1.1 is no longer in the table. So now let's go over to Router0. The first thing you should see is an authentication failure, because we have to have it on both sides. I'll begin by doing a show ip eipgrp neighbors
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/solution-eigrp-authentication?u=76281980&t=122)** and we do not see 5.1.1.2 in the neighbor table. Now let's fix that. Let's go to interface Fa0/0 and we issue the same command, ip authentication mode eigrp 100 md5. Okay, now we see, we have a new neighbor, adjacency and I'll exit out of here. And now I'll run show ip eigrp neighbors and as you can see, 5.1.1.2 is in the neighbor table. Okay, good work.

> [!info]- Semantic Content
>
> **Versions:** 5.1.1 (4)
> **UI Navigation:** go to (2)
> **Env Vars:** eigrp (1)
> **Definitions:** is an  (1)
> **Speakers:** - okay (1)


### 3. Security on Cisco Switches

[↑ Back to Table of Contents](#table-of-contents)

#### [Layer 2 attacks: Overview](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-2-attacks-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-2-attacks-overview?u=76281980&t=0)** - [Instructor] We know that there are a number of different types of attacks. A security specialist should become familiar with the different tools that are available. Although this is not part of the CCNA security, I wanted to make you aware of [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md). Kali Linux is an advanced [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) tool, but it can also be used to launch an attack. I'm at the web page and here is where you can download and install Kali Linux. I downloaded and installed Kali Linux on a virtual machine, and I want to show you that are a number of different applications an attacker can launch as you can see from information gathering, vulnerability analysis, database assessment, password attacks, wireless attacks, and others. One tool that can be used to launch many different types of attacks is called Yersinia. I'll open up Yersinia and I'll show you the different types of attacks against layer two that's available in Yersinia. I'll go to the graphical user interface and it says it's an alpha version. Once I'm in, you can take a look at the different tabs and this is what I might select to launch an attack. I'll go to launch an attack. And here we can see Choose protocol attack. One here we can see Cisco discovery protocol, sending CDP packet, flooding the CDP table,
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-2-attacks-overview?u=76281980&t=98)** and setting up a virtual device. With [DHCP](../../Glossary/Standard/DHCP.md), here you can see that there are a number of different things that can be done. Sending RAW packet, sending DISCOVER packet, creating DHCP rogue server, and sending a RELEASE packet which would take someone's IP address away. Spanning tree protocol, here you can see that we can launch an attack by claiming root role, claiming other role, claiming root role with man in the middle, and other attacks. And there's also Vlan trunking protocol. So although that isn't part of the Cisco CCNA security course, again it's something that I wanted you to be aware of. There are a number of different tools and attacks that can be launched against your network, but there are a number of defense methods. Different technologies that we used to mitigate attacks, such as DHCP snooping, dynamic ARP inspection, port security, BPDU guard, root guard, and loop guard. Layer two is the data link layer. Switches operate in layer two and the data link layers primary role is proper frame formation. And the most commonly used frame on a [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) today is an ethernet two frame. We also see address resolution protocol which is a protocol that's underneath layer three.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-2-attacks-overview?u=76281980&t=193)** It has no IP header, but it does a resolution of the IP address to the MAC address, and that's why I placed it in between layer three and layer two. Layer two can be a very weak layer, and if attacked, any higher layers will most likely be affected, and that includes your users. Layer two or the data link can fall victim to many different types of attacks. Here are a few. With a spanning tree protocol attack, this sends multiple BPDU messages and creates a constant state of reelecting the root bridge. This then allows an attacker to be a man in the middle and see frames from multiple sources. There are a few spoofing attacks. ARP spoofing or ARP cache poisoning is a technique used in a man in the middle attack. With MAC spoofing, we change the MAC address on the [NIC](../../Glossary/Concept/NIC.md) card and allow an attacker to intercept traffic to launch a man in the middle attack. A Macof attack is launched against a switch and the attacker floods the CAM table so that the switch is unable to deliver the data. And there are a few protocol attacks as well. Cisco discovery protocol is in the clear and unauthenticated. And attacker can sniff the network and discover information about the devices. VLAN hopping attacks allows an attacker to gain access
>
> **[4:48](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/layer-2-attacks-overview?u=76281980&t=288)** to traffic on other VLANs not normally accessible. And DHCP attacks provide clients with bogus addresses and other information such as gateway and DNS server IP addresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (4), [DHCP](../../Glossary/Standard/DHCP.md) (4), [Penetration Testing](../../Skills/Cybersecurity/Penetration%20Testing.md) (1), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1), [NIC](../../Glossary/Concept/NIC.md) (1)
> **Env Vars:** dhcp (4), arp (3), mac (3), ccna (2), cdp (2)
> **Definitions:** is an  (2), is called (1), is a  (1)
> **UI Navigation:** go to (2)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Prerequisites:** install (1)

#### [Spanning-Tree Protocol](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/spanning-tree-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/spanning-tree-protocol?u=76281980&t=0)** - [Instructor] Spanning Tree Protocol is used on a [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) because in most cases switches have redundant links for fault tolerance. Spanning Tree Protocol maintains a loop-free network by pruning redundant links and monitors the state of the network and will change the pathways to fit the current link conditions in order to keep it operational. Switches use Bridge Protocol Data Units that are encapsulated in an ethernet frame. The BPDUs communicate information on the switch, such as the BridgeID, which is the Spanning Tree Priority number and the MAC address. To determine which switch is the root bridge, there is an election and the lowest BridgeID is elected as the root bridge of the network. The Root Bridge sits at the top of the spanning tree and all other switches branch out from the root. After election, each device determines the most efficient pathway to reach the root. The root sends BPDUs. If the root is unable to do the job, the next highest rank will become the root so that the spanning tree remains intact. Once we fire up the network, the switch ports involved in the Spanning Tree Protocol process will go through five port states that start in the blocking state and then changes to the listening and learning states.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/spanning-tree-protocol?u=76281980&t=96)** When the election takes place, all switch ports go into a blocking state. The port is only listening to and processing BPDUs on its interface. In the blocking state, it cannot send or receive data, only control traffic. After 20 seconds, the switch port changes from blocking to listening. During the listening state, the port receives BPDUs from the network and builds the spanning tree. After 15 seconds, the switch port moves from listening to learning. At that state, the port begins to process user frames and starts to update the MAC address table. It still cannot send or receive data. But then after 15 seconds, the switch port will move from learning to forwarding state. Forwarding state is the normal state where the port processes BPDUs, updates the MAC address table, and forwards user traffic. Disabled state does not participate in frame forwarding or the operation of the Spanning Tree Protocol. Spanning Tree Protocol maintains a loop-free network by pruning redundant links and monitors the state of the network and will change the pathways to fit current link conditions in order to keep the network up and operational.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **Env Vars:** mac (3)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [STP attacks](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/stp-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/stp-attacks?u=76281980&t=0)** - [Narrator] Spanning Tree Protocol prunes redundant links. It uses Bridge Protocol Data Units that hold information about corps, switches, corp priority and addresses. When up and operational, the Spanning Tree Protocol maintains a loop-free network. I'm in Packet Tracer and I've created a little activity. This is Spanning Tree and we'll watch as the network converges. When you take a look at the network, you're going to see that the interface lights are orange. They slowly become green, and what is happening at that moment is that the Spanning Tree is determining the topology and the state of the interfaces. And now you can see the network is slowly becoming converged. If you want to check the status of the Spanning Tree, we have a command. I'll go into switch zero and I've labeled the interfaces on switch zero so you can see what I'm going to refer to. I'm in switch zero and we'll use show spanning tree to check the status of the Spanning Tree. Once you say show spanning tree, we can see the interface, the role and the status. There are several different attacks that can stress the Spanning Tree Protocol, including a denial of service attack using BPDU flood,
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/stp-attacks?u=76281980&t=93)** take over the root bridge or possibly claim another role. Spanning Tree Protocol attacks can manipulate the network's spanning trees, disrupt the CAM table and give the attacker the ability to sniff all the traffic in the network. We know that there are attacks on the spanning tree and there are protection methods. Protection against Spanning Tree manipulation includes enable BPDU guard, use BPDU filter, use root guard, disable dynamic trunking and use Per VLAN Spanning Tree.

> [!info]- Semantic Content
>
> **Env Vars:** bpdu (3), cam (1), vlan (1)
> **Speakers:** - [narrator] (1)

#### [ARP spoofing](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/arp-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/arp-spoofing?u=76281980&t=0)** - Address Resolution Protocol is used to resolve an IP address to a physical address. ARF is unique on a network because it's not routable, and it doesn't contain an IP header. Every device holds an ARP cache. For example, if you went to the command-line interface on a [Windows](../../Glossary/Service/Windows.md) operating system, you can type arp-a to display the current ARP cache. If there's no entry in the ARP cache, an ARP broadcast is sent out to determine the MAC address of the destination device. It's fairly straightforward. The device says, "Who has this IP address? Tell me." And the device that has the IP address responds with its MAC address. I'm in [Wireshark](../../Skills/Cybersecurity/Wireshark.md), and in this packet capture, we see the tail end of a normal boot-up process. I'll filter the traffic for bootp, and this displays the [DHCP](../../Glossary/Standard/DHCP.md) traffic. In frame two, you see the DHCP acknowledgement, which gives the host their IP address. I'll clear that. And now let's just filter for ARP. Well, we see several ARP packets on there. Now, when we look at the first three: packets three, four, and five, these are called gratuitous ARPs. A gratuitous ARP is a special kind of ARP
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/arp-spoofing?u=76281980&t=96)** that is a test for duplicate IP addresses. Now, once a host boots up and receives an IP address from the DHCP server, as we just saw, a gratuitous ARP packet is sent out to determine if another host on the network has the same IP address as the sender. Now all hosts will send gratuitous packets, even if their IP addresses were assigned statically or dynamically. This clears out any stale caches that might exist on other hosts. Packet six and seven are a normal ARP request and ARP reply. ARP can have some problems, but they're rare, and mainly due to configuration errors that someone may have assigned an incorrect IP address, or there may be an incorrect subnet mask. However, there are attacks against ARP, one being an ARP spoof attack. ARP spoofing is used in a man-in-the-middle attack, and it's also known as an ARP cache poison. In an ARP spoofing attack, an attacker sends spoofed ARP messages, and this poisons the cache on the end device, and it will allow an intruder to impersonate another host to gain access to sensitive information. Here you see a small network. There the attacker is, and notice their IP address and their MAC address. What it does is send to other devices
>
> **[3:11](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/arp-spoofing?u=76281980&t=191)** that different IP addresses are at their own MAC address. So here we see .11 is at b4:ce, and also, .23 is at b4:ce. And that will poison the cache so that all traffic is guided towards the attacker. Now, you're wondering how this can happen. Well, ARP spoofing can take place because ARP is stateless, meaning it doesn't retain any prior information on packets that it had sent in the past. An ARP reply can be sent even if there has been no request and it will be accepted. Now, there are some tools that you can use to provide ARP security by alerting or stopping attacks. Snort has a preproccessor, Arpspoof, that detects ARP spoofing. Arpalert monitors conversations of MAC address to IP requests. Arpwatch keeps track of Ethernet and IP address pairings. And, Dynamic ARP inspection is used on a device, such as a Cisco router, that rejects invalid and malicious ARP packets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (3), [Windows](../../Glossary/Service/Windows.md) (1), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Env Vars:** arp (25), mac (5), dhcp (3), arf (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - address (1)

#### [MAC spoofing](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/mac-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/mac-spoofing?u=76281980&t=0)** - [Instructor] On a [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), a device is identified by its MAC address. MAC spoofing changes or spoofs the MAC address on a [network interface card](../../Glossary/Concept/NIC.md) to someone else's MAC address to allow an attacker to intercept traffic to launch a man-in-the-middle attack. Now here you see a small network with several devices. Up at the top, you see the IP address and MAC address of the attacker. What you see crossed off was the attacker's MAC address but the attacker has spoofed the MAC address to appear to be the same as HostA. When traffic is delivered, HostA and the attacker will receive the data. There are a number of different tools available to change your MAC address, and a number of different software [products](../../Skills/Software%20Development/Microsoft%20Products.md). I'm here at this website where you can see MAC Address Changer, but if you type in the search bar, you will come up with a number of different options to change your MAC address. A MAC address has several different naming conventions in order to identify that it is indeed the MAC address, all of which mean the same thing. I'm in a [Windows](../../Glossary/Service/Windows.md) virtual machine and I want to show you how you can change your MAC address. First, we're going to open a Command Prompt, and we'll pull this over here and I'll get this set up. And then I'm also going to increase the font.
>
> **[1:39](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/mac-spoofing?u=76281980&t=99)** And then I'll open a Notepad because I want to keep track of my MAC addresses.
>
> **[1:58](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/mac-spoofing?u=76281980&t=118)** Now I'll go to the Control Panel and now we're all set up. And the first thing I'll do is type ipconfig /all.
>
> **[2:17](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/mac-spoofing?u=76281980&t=137)** Now right here, it says Physical Address, and here's my physical address or MAC address. I'm going to mark it so I could put it in the Notepad and press Enter, and then we'll paste it down below. I'm going to take out the dashes and we'll modify this just a little bit. So at the end, we'll make this an A, another letter change, B, and we'll make that an eight, so we'll see that the last hexadecimal digits will be different. I'll go to Device Manager. What I'm looking for is the Network adapters. Here we see the network adapter, go to Properties, and then Advanced. In this case, it's called the Locally Administered Address and here you can see what the value is and of course, that's what showed up when we ran ipconfig /all. We'll change that value and we'll say OK. Now, I'll run ipconfig /all again and here you can see that the MAC address is changed. And that's how you can change a MAC address on a Windows machine. Now you see how easy it is to change the MAC address, so you should defend against MAC address spoofing by using different techniques, one being Source Guard,
>
> **[3:50](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/mac-spoofing?u=76281980&t=230)** and Dynamic APR Inspection, and they both work with [DHCP](../../Glossary/Standard/DHCP.md) spoofing. So, defend your network and protect against MAC address spoofing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1), [Network interface card](../../Glossary/Concept/NIC.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** mac (20), apr (1), dhcp (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### [macof attack](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/macof-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/macof-attack?u=76281980&t=0)** - [Instructor] The CAM or MAC address table on a switch maps the MAC address of a device to tne physical switch port. The CAM table helps data move efficiently on a LAN by sending data only to the proper destination and nowhere else. In the CAM or switching table, these pairings can be voluminous. In a macof attack, the table is flooded with bogus IP and MAC addresses and causes a switch to enter a fail-open mode. The switch really doesn't know where to send the data, so it acts like a hub, sending data everywhere. It's easy to launch a macof attack. I'm in [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md), and I'll show you how I can launch a macof attack by one simple step. I'll go into a terminal, and I'm simply going to type macof. And now you can see multiple bogus IP and MAC addresses that are going to flood the CAM table. Now the results of a macof attack will really depend on the switch. It may behave like a hub, it may do nothing because it has protection enabled, or it may even crash and reboot. For the macof attack to be successful, the attack must continue to bombard the switch with bogus entries, but once it's stopped, the timers will be reset, and the switch will resort to acting like a switch again. Best practice to prevent against this type of attack
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/macof-attack?u=76281980&t=97)** is to use port security, which works by limiting the MAC addresses and locks down the port.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Env Vars:** mac (5), cam (4), lan (1)
> **Tools:** terminal (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [CDP/LLDP reconnaissance](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/cdp-lldp-reconnaissance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/cdp-lldp-reconnaissance?u=76281980&t=0)** - [Instructor] On a network, devices need to find out information about one another. There are two protocols that provide a way for network devices to communicate information about themselves. One is Cisco Discovery Protocol, this is a Cisco proprietary protocol, and Link Layer Discovery Protocol, an IEEE standard that is vendor-neutral. Both protocols serve the same purpose. They enable no discovery for use with management tools such as Simple Network Management Protocol. Both protocols communicate with other devices and share information about the network device. Such as the software version, IP address, platform capabilities, and the native VLAN. Attackers can easily use [Wireshark](../../Skills/Cybersecurity/Wireshark.md) or other networking analyzer software to sniff information about devices that use the discovery protocols that are sent across the network in the form of broadcast messages. Because CDP is unauthenticated, an attacker could craft bogus CDP packets to spoof other Cisco devices, or flood the neighbor table and cause a denial of service. If the attacker can get access to the router via Telnet or SNMP, they can use the CDP information to discover the entire topology of your network at Layer 2 and 3, including all IOS levels,
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/cdp-lldp-reconnaissance?u=76281980&t=96)** router and switch model, types, and [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md). The IOS software discovered would allow the attacker to research and determine whether there were any software vulnerabilities specific to that version of code. Armed with this information, they could launch a very effective attack against your network. Using discovery protocols can be a vulnerability. Consider disabling CDP and LLDP, or be selective where it is used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Env Vars:** cdp (4), ios (2), ieee (1), vlan (1), snmp (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [DHCP spoofing](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/dhcp-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/dhcp-spoofing?u=76281980&t=0)** - [Presenter] [Dynamic Host Configuration Protocol](../../Glossary/Standard/DHCP.md) dynamically assigns IP addresses. The four step process is discover, offer, request, and acknowledgment. When a host joins the network it doesn't have an IP address. So it begins the [DHCP](../../Glossary/Standard/DHCP.md) process by broadcasting a discover packet to the network. Because DHCP doesn't have a native authentication process, the client can be a victim of DHCP spoofing. The client may get an offer from the real DHCP server, but in addition it may also get an offer from a rogue DHCP server and it may accept that offer. When a client requests an IP address from a DHCP server, the client has no reassurance that the server is legitimate. In addition, the server has no way of knowing that the client requesting the address is a legitimate client on the network. Rogue clients and servers on a network can cause serious problems as they may be used in a Man in the Middle attack. The attacker configures the rogue server with bogus DNS server and default gateway IP addresses to misdirect traffic to other rogue devices. Network administrators can reduce risk by configuring devices to monitor for trusted hosts. For DHCP attack prevention there are a few best practices.
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/dhcp-spoofing?u=76281980&t=98)** Authorizing DHCP servers in [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md), use VLAN access control lists, dynamic ARP inspection, and DHCP snooping. In a [Windows](../../Glossary/Service/Windows.md) environment active directory authorizes DHCP servers before they can start leasing addresses to clients. A regular access control list resides on a router's interface and is used only for routed packets. A VLAN access control list provides access control on a switch. Dynamic ARP inspection rejects invalid and malicious ARP packets. And DHCP snooping on a switch works with IP source guard and dynamic ARP inspection. DHCP snooping works on a concept of trusted ports and untrusted ports. Trusted ports are interfaces that connect to authorized DHCP servers and switch uplinks. Untrusted ports are user access ports. Prevent DHCP spoofing by configuring devices to monitor for trusted and authorized hosts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (14), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2), [Dynamic host configuration protocol](../../Glossary/Standard/DHCP.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** dhcp (14), arp (4), vlan (2), dns (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### 4. Mitigation Procedures

[↑ Back to Table of Contents](#table-of-contents)

#### [Implement DHCP snooping](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-dhcp-snooping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-dhcp-snooping?u=76281980&t=0)** - [Instructor] On a network, [DHCP](../../Glossary/Standard/DHCP.md) clients should only accept IP addresses from authorized DHCP servers. DHCP snooping prevents unauthorized, untrusted DHCP servers from offering IP addresses. Rogue DHCP servers are used in man in the middle attacks. But this can also occur if someone activates a rogue DHCP server by plugging in a consumer grade router. DHCP snooping on a switch works with IP source guard and dynamic ARP inspection. DHCP snooping works on a concept of trusted ports and untrusted ports. Trusted ports are interfaces that connect to authorized DHCP servers and switch uplinks. Untrusted ports are user access ports. DHCP snooping stores values in a database that contains client MAC addresses, assigned IP addresses, lease time, VLANs, and switchport. DHCP snooping drops unacceptable DHCP traffic, which this traffic can include untrusted DHCP server traffic, an invalid MAC address or even a DHCP release. And that would be someone trained to get a client to give up their IP address. You deploy DHCP snooping on an access layer switch where clients will most likely be making DHCP requests.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-dhcp-snooping?u=76281980&t=95)** Let's take a look at DHCP snooping in action. I'm here at Packet Tracer and I've opened up one of the sample Packet Tracer exercises, DHCP Snooping Attacker.pkt. First, I'll go into the DHCP Snooper and what we're going to go is issue a couple of commands. First, we'll go in and take a look at the binding. And in this case, we haven't done anything yet, so there won't be anything in the bindings database. And here, we took a look at the snooping database and again, nothing has happened. So now, we'll go into the DHCP Client. We're going to start the DHCP process. So I'll go into IP Configuration. Here, we see that IP Configuration is set at static. But now, we'll start the process by selecting DHCP. Now, it goes out and it issues a discover broadcast on the network, requesting an IP address. Now keep in mind, and I'll move this over here, that that DHCP offer can come either from the authentic DHCP server or the attackers. Now, with DHCP snooping taking place, it will prevent that client from receiving a bogus DHCP offer. We'll force it again to try to get one through. And one more time.
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-dhcp-snooping?u=76281980&t=192)** As you can see, all three times, it was successful. But now, let's take a look at our bindings and the database again. All right, you had our first binding and as you can see, it was for that PC. And the database, as you can see, we tried a number of different times and we were successful in giving that client an IP address from a valid DHCP server. DHCP snooping prevents unauthorized DHCP servers from offering IP addresses to DHCP clients by dropping unacceptable DHCP traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (31)
> **Env Vars:** dhcp (31), mac (2), arp (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Dynamic ARP inspection](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/dynamic-arp-inspection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/dynamic-arp-inspection?u=76281980&t=0)** - [Instructor] Address Resolution Protocol is used to resolve an IP address to a physical address. ARP can fall victim to spoofing, where the attacker sends spoofed ARP messages and poisons the cache. Traffic then goes to the spoofed machine instead of to the gateway. I wanted to show you what this type of attack look like in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). Now, what I'll do is filter by ARP and I only want to see the replies, so I'll apply a filter to see only the replies. Now, when looking at this, here's what we'll look at. You can see the IP address 192.168.47.1 is at the MAC address ending in b1 but we also see 47.2 is at the MAC address ending at b1 and also .200 is at the MAC address ending at b1, so this effectively poisons the cache. You'll want to protect against this type of attack. Dynamic ARP Inspection rejects invalid and malicious ARP packets. Dynamic ARP Inspection relies on [DHCP](../../Glossary/Standard/DHCP.md) snooping. Together, they prevent ARP cache poisoning. Prevent ARP cache poisoning by using Dynamic ARP Inspection and DHCP snooping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (2), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Env Vars:** arp (9), mac (3), dhcp (2)
> **Versions:** 192.168.47 (1), 47.2 (1)
> **Speakers:** - [instructor] (1)

#### [Implement port security](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-port-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-port-security?u=76281980&t=0)** - [Instructor] On a switch, there are two types of ports, access or trunk. An access port carries traffic of a single VLAN from a host to the switch. Trunk ports are for switch-to-switch communication that carry information for various VLANs using VLAN tagging. The default mode is switchport mode dynamic desirable. This mode can pose a [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) as it can fall victim to a VLAN hopping attack where a user spoofs a switch by making an end device act as a trunk port. The best practice is to make sure all user ports are in access mode and any ports not in use are disabled. To set a switch port to access mode, use the following configuration command switchport mode access. Also follow up with a command to prevent any attempts at the port to go into trunk mode and that would be switchport nonegotiate. I'd also follow up with a shutdown command and now you'll see that the administrative mode is static access. On a switch, the network administrator should also use switchport port security. This limits the number of MAC addresses connected to a single port on the switch and prevents a macof attack. On a Cisco switch, this is very easy to configure.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/implement-port-security?u=76281980&t=96)** A secure port cannot be a trunk port. So we secure MAC addresses in one of three ways. Secure static MAC address is what you will enter will be stored in the address table and in the running configuration. Dynamic secure MAC addresses are dynamically learned by the switch and are stored in the MAC address table. They're removed from the configuration when the switch restarts. Sticky secure MAC addresses are like dynamic secure MAC addresses. The MACs are learned dynamically, but they are saved in the running configuration. Here are the commands you issue for port security. Switchport port-security will enable port security on the interface. Switchport port-security mac-address allows you to statically enter a MAC address or use a sticky MAC. Switchport port-security violation will allow you to determine what happens if there is a violation, protect, restrict, or shutdown. Cisco recommends the shutdown option. Take steps to defend against layer two attacks by configuring the switch to defend itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1)
> **Env Vars:** mac (9), vlan (3)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [BPDU guard, root guard, and loop guard](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/bpdu-guard-root-guard-and-loop-guard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/bpdu-guard-root-guard-and-loop-guard?u=76281980&t=0)** - [Female Narrator] Spanning Tree Protocol prevents switching loops. As soon as two or more switches connect, Spanning Tree begins an election process to designate the root bridge. The root bridge then makes decisions on what ports to block and which ones to put in a forwarding mode. Spanning Tree can fall victim to attacks, such as an attacker sending multiple BPDU messages that create a constant state of reelecting the root bridge. An attacker can also launch a denial of service using a BPDU flood, take over the root bridge, or possibly claim another role. The Spanning Tree can also fail. BPDU Guard, Root Guard, and Loop Guard are features network administrators use to keep the active network topology predictable. We implement BPDU Guard on access ports to prevent receiving spoofed BPDUs. We enable PortFast and then configure BPDU Guard. Root Guard defends against an attack to take over the root bridge. Configure spanning-tree guard root or you could use rootguard. Mac spoofing is used in a man in the middle attack. Source Guard on a switch port filters traffic based on the [DHCP](../../Glossary/Standard/DHCP.md) snooping and helps prevent IP spoofing attacks. Source Guard filters trusted IP and Mac address bindings. To circumvent Source Guard, an attacker would have
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/bpdu-guard-root-guard-and-loop-guard?u=76281980&t=96)** to spoof both the IP and Mac address. We go into the interface and apply the command ip verify source port-security. Loop Guard is a Spanning Tree enhancement that protects your fiber connections from causing loops in the network due to a link failure. Here, we use spanning-tree loopguard default. Spanning Tree protocol prevents switching loops, yet can fall victim to attack and failure. Using BPDU Guard, Root Guard, and Loop Guard will help to keep the network operational.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** bpdu (6), dhcp (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [female (1)


### 5. VLAN Security

[↑ Back to Table of Contents](#table-of-contents)

#### [VLAN attacks](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/vlan-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/vlan-attacks?u=76281980&t=0)** - [Instructor] A VLAN, or virtual [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), removes the physical barrier and treats the host as if they were all part of the same subnet, while logically separating networks within networks. VLANs offer several advantages over traditional LANs. By creating smaller broadcast domains and using switches instead of routers improves overall efficiency. VLANs can be used to restrict access and create [Virtual Work](../../Skills/Software%20Development/Virtual%20Work.md) groups in isolation. We can implement wireless constraints by ensuring a user assigned to a specific VLAN will always connect to that VLAN regardless of their location. VLANs are widely used, but you should be aware, there are a few attacks against VLANs. VLAN hopping is where a user spoofs a switch by making an end device act as a trunk port. Now, this happens many times because the switch is set in auto-trunking or dynamic trunking mode, which is the default configuration. When the port senses that it is attached to a trunk line, it will change the mode to trunk. This will then allow the attacker to see all the traffic across all VLANs and can steal passwords or inject malware into the network. Double-tagging is another form of VLAN hopping that takes advantage of the 802.1q tag removal process. An attacker changes the original frame
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/vlan-attacks?u=76281980&t=97)** to add two VLAN tags. The attacker's VLAN and the victim's VLAN. A switch receives an attacker's frame and strips off the first tag. The second tag is forwarded out all the switches' trunks for the destination VLAN. Double-tagging is not used as much because the trunk must have the attacker's access VLAN as its native VLAN. Using VLAN Trunking Protocol, a malicious user will spoof VTP advertisements. The malicious user can advertise that there are no VLANs, or even create new VLANs. There are several best practices. To avoid VLAN hopping attacks, manually configure the link as trunk or access and disable Dynamic Trunking Protocol. Prevent double-tagging attacks by separating the trunk port's native VLAN from user's VLANs. If using VTP, use a domain and password to prevent attacks, and ensure only trusted devices are connected to trunk ports.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1), [Virtual Work](../../Skills/Software%20Development/Virtual%20Work.md) (1)
> **Env Vars:** vlan (14), vtp (2)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Security implications of a PVLAN](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-pvlan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-pvlan?u=76281980&t=0)** - [Instructor] Private VLAN or port isolation is a technique used in which the switch ports are configured to communicate only with a specific link. Private VLANS further segment and isolate a VLAN into smaller VLANS. Service providers use private VLANS to keep customers isolated from one another. Primary VLANS will forward frames to downstream or secondary VLANS. Here we see the primary VLAN, VLAN 200, and the secondary VLANS. Private VLANS can be configured as a community or isolated. With a community configuration, the switch ports associated with a common community VLAN can communicate with each other and with the primary VLAN and receive broadcast traffic, but cannot communicate with any other secondary VLAN. An isolated configuration will be where the switch ports associated with an isolated VLAN can reach the primary VLAN but not any other secondary VLANS. In addition, any isolated VLANS cannot reach each other. Private VLANS create port isolation. This port base security separates VLANS, adding an additional security boundary.

> [!info]- Semantic Content
>
> **Env Vars:** vlans (11), vlan (9)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Security implications of a native VLAN](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-native-vlan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-native-vlan?u=76281980&t=0)** - [Instructor] On a Cisco switch, the default configuration is to have a native VLAN out of the box. VLAN 1 is the only VLAN that exists, so this means that all ports are members of VLAN 1 by default. The native VLAN can be a [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). It isn't tagged by default. If an access port is set to the same VLAN as the attackers, VLAN hopping is much more easily accomplished from the default VLAN. You can't delete VLAN 1, but you can assign all ports into different VLANs to make sure VLAN 1 isn't being used. Let's take a look. I'm in Packet Tracer, and I've already configured Switch One, and moved over the ports to VLAN 101. We'll do the same thing on Switch Two. Now, what you can see is that there's a VLAN mismatch, and that's because I haven't finished configuring Switch Two. First, we'll say show VLAN brief. And there you see VLAN 1 and all the ports that are assigned to VLAN 1. I added native VLAN 99, and we will use that when I configure the trunks. Down below, you'll also see VLAN 101, and that's where I'm going to put the range one through 24. The next logical step is to make the gigabit ports a trunk line.
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-native-vlan?u=76281980&t=95)** We'll do the same interface range, and we'll do gigabit ethernet one and two.
>
> **[1:47](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-native-vlan?u=76281980&t=107)** We'll say no shutdown. Switch port mode trunk,
>
> **[2:02](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-native-vlan?u=76281980&t=122)** switch port trunk native VLAN 99.
>
> **[2:11](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-native-vlan?u=76281980&t=131)** And also, non-negotiate, so we don't want anybody to change the behavior of this trunk line.
>
> **[2:24](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/security-implications-of-a-native-vlan?u=76281980&t=144)** And we'll exit back out, and this time we'll say show interfaces trunk. Okay, let me open this up here and, as you can see, we now can see the trunking lines and we're using 802.1q.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1)
> **Env Vars:** vlan (18)
> **CLI Commands:** make (2)
> **Definitions:** means that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/next-steps?u=76281980&t=0)** - [Lisa] Thank you for watching. In this course I began with an overview of secure [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and switching. I reviewed the control, data and management plane, along with router and switch security basics. I covered layer three attacks and discussed how to secure Cisco routers. I discussed configuring privilege levels, role-based command line interface access, and routing update authentication. Then I reviewed layer two attacks such as a Macof attack, VLAN hopping, and [DHCP](../../Glossary/Standard/DHCP.md) spoofing, and then discussed how to secure Cisco switches. I covered mitigation procedures such as dynamic ARP inspection and BPDU guard, and then wrapped up with a discussion on VLAN security and looked at the security implications of a private VLAN and a native VLAN. If you're interested in learning more, please check out the IT segment of the library, where we add new courses all the time. If you want to learn how to protect yourself against ransomware, check out Learning Ransomware Countermeasures. It's well worth your time to check out any course in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) Series. If you'd like to learn more about Voice Over IP, check out my course, [Learning Voip And Unified Communications](Learning%20Voip%20And%20Unified%20Communications.md). You might also want to see what my colleague Malcolm Shore has for you on his homepage.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-secure-routing-and-switching/next-steps?u=76281980&t=97)** Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [DHCP](../../Glossary/Standard/DHCP.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **Env Vars:** vlan (4), dhcp (1), arp (1), bpdu (1)
> **Analogies:** such as (2)
> **Tools:** command line (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [Lisa Bock](../../Instructors/Cybersecurity/Lisa%20Bock.md)

## Skills Covered

- Network Switches
- Network Security
- Cisco Networking

## Path Context

### In [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)
← [Cisco Network Security- VPN](Cisco%20Network%20Security-%20VPN.md) | **4 of 7** | [Cisco Network Security- Cisco Firewall Technologies](Cisco%20Network%20Security-%20Cisco%20Firewall%20Technologies.md) →

## Appears In

- [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)

## Related Courses

_Courses sharing skills:_

- [Cisco Networking Foundations- Switching and Routing](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Switching%20and%20Routing.md) — Cisco Networking, Network Switches
- [Cisco Network Security Core Security Concepts](Cisco%20Network%20Security%20Core%20Security%20Concepts.md) — Network Security, Cisco Networking
- [Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Wireless%20Networks%2C%20Services%2C%20Security%2C%20and%20Virtualization.md) — Cisco Networking
- [Cisco Networking Foundations- IP Addressing](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20IP%20Addressing.md) — Cisco Networking
- [Cisco Networking Foundations Fundamentals Of Cisco Networking](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations%20Fundamentals%20Of%20Cisco%20Networking.md) — Cisco Networking

---

[↑ Back to top](#)