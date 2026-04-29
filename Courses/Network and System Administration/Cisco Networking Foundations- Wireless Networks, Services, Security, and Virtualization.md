---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cisco-networking-foundations-wireless-networks-services-security-and-virtualization
url: "https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization"
duration_minutes: 148
duration: 2h 28m
level: Beginner
updated: 1/10/2025
learners: 49380
skills:
  - Cisco Networking
  - Network Administration
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF5opf-JIT4Dg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1665506796977?e=2147483647&amp;v=beta&amp;t=eMclgGaC59ST0BSw2WW0UtNe5LW7xVzBaMtKyZKNhYk"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Cisco Networks]]'
prev_courses:
  - '[[Cisco Networking Foundations- Switching and Routing]]'
path_nav: '[{"path":"Getting Started with Cisco Networks","position":4,"total":4,"prev":"Cisco Networking Foundations- Switching and Routing","next":null}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/cisco-networking
  - skill/network-administration
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Wireless%20Networks%2C%20Services%2C%20Security%2C%20and%20Virtualization.md)

![Cisco Networking Foundations: Wireless Networks, Services, Security, and Virtualization](https://media.licdn.com/dms/image/v2/C560DAQF5opf-JIT4Dg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1665506796977?e=2147483647&amp;v=beta&amp;t=eMclgGaC59ST0BSw2WW0UtNe5LW7xVzBaMtKyZKNhYk)

# Cisco Networking Foundations: Wireless Networks, Services, Security, and Virtualization

> Projects Practice using networking commands on simulated Cisco routers and switches with Cisco Packet Tracer, Cisco Modeling Labs, or Cisco’s DevNet Sandbox. Join Cisco Certified Internetwork expert Kevin Wallace to explore the fundamentals of Cisco network services, network security, wireless networks, and virtualization, including basic configuration, setup, and maintenance strategies for Cisco 

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization) | 2h 28m | Beginner | 49K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Welcome
  - What you can learn
  - How to get hands-on practice
- [**1. Network Services**](#1-network-services) (12 videos)
  - Domain name system (DNS)
  - Cisco Discovery Protocol (CDP) theory
  - CDP configuration
  - Link Layer Discovery Protocol (LLDP) theory
  - LLDP configuration
  - Network Time Protocol (NTP) theory
  - NTP configuration
  - Network Address Translation (NAT) theory
  - NAT configuration
  - Dynamic Host Configuration Protocol (DHCP) overview
  - DHCP options
  - DHCP configuration
- [**2. Network Security**](#2-network-security) (9 videos)
  - Common network security concerns
  - Access Control List (ACL) theory
  - Standard numbered ACL theory
  - Standard numbered ACL configuration
  - Extended numbered ACL theory
  - Extended numbered ACL configuration
  - Extended named ACL configuration
  - The need for switch port security
  - Port security configuration
- [**3. Wireless Networks**](#3-wireless-networks) (9 videos)
  - Introduction to wireless LANs (WLANs)
  - WLAN antennas
  - WLAN frequencies and channels
  - WLAN standards
  - WLAN transmission methods
  - WLAN optimization and features
  - WLAN security basics
  - WLAN security standards
  - Configuring a Cisco Wireless LAN Controller (WLC)
- [**4. Network Virtualization**](#4-network-virtualization) (5 videos)
  - Virtualized servers
  - Virtualized network devices
  - Introduction to software-defined networking (SDN)
  - Software-defined wide area networks (SD-WANs)
  - Software-Defined Access (SD-Access)
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=0)** - [Kevin] As networks have evolved over the years, there has been more and more emphasis on securing those networks, adding services, and more recently, communicating wirelessly and even virtualizing that network components.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=12)** We're going to consider all of those topics in this course.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=15)** First, you're going to learn how wireless networks allow us to send data using radio waves.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=20)** Then, we'll examine a collection of network services, including DNS, NTP, NAT, and DHCP is just a few examples.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=27)** Next, you'll be introduced to network security concepts, and you're going to see what sort of threats that we might need to defend against today.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=35)** And we'll also equip you with a couple of defenses, specifically access control lists or ACLs and the port security feature.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=42)** Finally, we'll examine virtualization technologies.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=45)** Hi, my name is Kevin Wallace.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=46)** I'm a double CCIE, or a Cisco Certified Inter Network Expert, and I've taught IT courses for over two decades.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/welcome?u=76281980&t=53)** So, join me in my LinkedIn learning course covering wireless networks, network services, network security, and their virtualization.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1), ntp (1), nat (1), dhcp (1), ccie (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [kevin] (1)

#### What you can learn
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=0)** - [Instructor] In this course, we have four primary topics: wireless networks, services, security and virtualization.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=7)** First, we'll consider wireless networking and that's becoming more and more important as we have an increasing number of devices connecting wirelessly.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=15)** As just a few examples, we have smartphones, TVs, refrigerators, laptops, smart light bulbs.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=21)** They can all connect to the network wirelessly and in our discussion, you'll learn about the frequencies used by wireless networks, how antennas work.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=29)** You'll learn about different wireless topologies and how to protect our wireless networks from a malicious user.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=35)** Next, we'll consider a collection of network services.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=37)** As a couple of examples, you'll learn how DNS or domain name system can take a relatively easy to remember name and convert that into a not so easy to remember IP address.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=48)** You'll learn how a device can dynamically obtain its IP address information using DHCP or Dynamic Host Configuration Protocol.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=57)** Next, we'll examine network security, beginning with a look at some of the major security threats to our networks today.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=63)** Then we'll focus on how to better protect our Cisco routers and switches using access control lists or ACLs and the port security feature.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=71)** And finally, in this course, you'll see how to virtualize network components such as network servers and routers and we'll discuss how software-defined in networking or SDN is dramatically shifting the landscape of what it means to be a network engineer.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=86)** And while it's great if you happen to have access to physical gear to practice on, that's not your only option.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=91)** In fact, in our next video, I'll show you a few different options for getting your hands dirty with a Cisco gear.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/what-you-can-learn?u=76281980&t=97)** I'll see you in that video in just a moment.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1), dhcp (1), sdn (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### How to get hands-on practice
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=0)** - [Narrator] While this course will primarily be covering theory, in some of the videos, I'll be demonstrating commands on Cisco gear like routers and switches.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=9)** And while you can certainly look over my shoulder as I enter those commands and learn that way, many students benefit from entering those commands themselves.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=17)** So in this video, let's discuss three ways for you to get hands-on experience.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=22)** First, you could use real gear.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=24)** You could buy it used or refurbished from a variety of online sites, or maybe with your employer's permission, you might be able to use some extra gear from your workplace to set up a practice lab.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=35)** Another option is for you to use a free application from Cisco called Cisco Packet Tracer.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=40)** And after you download it, you'll be asked to log in and you can use an existing Google account or create a free Cisco Networking Academy account.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=48)** And this free application is a network simulator.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=51)** That's as opposed to an emulator.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=53)** Specifically, a simulator makes it feel like you're configuring actual Cisco gear while an emulator is running the same operating system called Cisco Internetwork Operating System or iOS that you would find on physical equipment.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=67)** So with Cisco Packet Tracer, you might not have all the features that you would have with physical gear or an emulator, but it is a fantastic piece of software and it's more than sufficient for your CCNA studies.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=79)** And a third option is to use Cisco Modeling Labs or CML.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=84)** While Cisco Packet Tracer was a simulator, CML is an emulator running real Cisco iOS.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=90)** And at the time of this recording, you can purchase a year of access to the personal version of CML for around $200.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=98)** And if you'd really like to use CML because it's an emulator but you don't want to pay the nearly $200 annual fee for it, there is another option.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=106)** What I'm referring to is Cisco's DevNet Sandbox, which is an online portal that lets you work with a ton of different Cisco devices to get an incredible amount of hands-on experience for free.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=117)** Here's how it works.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=118)** You go to devnetsandbox.[cisco.com](https://cisco.com) and you'll log in with an existing account like a Google or Facebook account or you could create your own free Cisco account.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=128)** Then you can reserve a pod of gear at a certain date and time for a certain duration, and at the time of this recording, one of those equipment pods gives you access to free Cisco Modeling Labs and you can reserve it for a four-hour block of time.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=141)** And there are plenty of online resources that you can search for step-by-step instructions on accessing and working with Cisco Packet Tracer, Cisco Modeling Labs, or Cisco's DevNet Sandbox.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=151)** My recommendation is, since you're just getting started with Cisco networking, I'd go with Cisco Packet Tracer because it's a lot more simple to get up and going as opposed to finding the right console cables for real gear, or getting connected to a VPN and going to Cisco's DevNet Sandbox and it's free.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/how-to-get-hands-on-practice?u=76281980&t=168)** However, any of the options we've discussed in this video should give you a great hands-on learning experience.

> [!info]- Semantic Content
>
> **Env Vars:** cml (4), ccna (1), vpn (1)
> **Definitions:** is a  (2), is an  (2)
> **Code Identifiers:** ios (2)
> **Prerequisites:** set up (1), getting started (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **UI Navigation:** go to (1)


### 1. Network Services

> [↑ Back to Table of Contents](#table-of-contents)

#### Domain name system (DNS)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=0)** - [Instructor] In this video, we want to consider a service called DNS for Domain Name System.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=6)** The idea is this, it's usually going to be easier to remember the name of an internet destination as opposed to its IP address.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=14)** Here we have a PC and it wants to go to a web server on the internet with a name of [kineticoinc.com](https://kineticoinc.com).
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=21)** And we can see in the topology that that server has an IP address of 203.0.113.100, but the PC does not know that.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=30)** So the PC is going to send out a request to a DNS server and it's going to ask that DNS server, "Can you tell me the IP address "of this DNS name, [kineticoinc.com](https://kineticoinc.com)?"
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=42)** And here our DNS server has an IP address of 192.0.2.10, perhaps that PC learned that information via DHCP.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=51)** Maybe it was configured.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=53)** But it knows how to get to the DNS server's IP address.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=55)** And it uses port 53, that's the DNS port, and the server responds and says, "Why, yes, [kineticoinc.com](https://kineticoinc.com) has "an IP address of 203.0.113.100.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=67)** Now, the PC can go directly to that web server at [kineticoinc.com](https://kineticoinc.com) and the server responds back to the PC.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=74)** And this communication with the web server did not require the user at the PC to first know the IP address of the internet destination, only the name.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=84)** Of course, there are many, many destinations that we could go to on the internet, or even on our local network, is there one big database somewhere that contains the IP addresses for all internet destinations?
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=95)** No, that would just not be scalable.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=97)** So what DNS does is use a hierarchical structure beginning with the root domain, and the root domain name servers know how to get to TLDs top level domains like .com, .org, .net, and many, many others.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=111)** But in our example, we were going to [kineticoinc.com](https://kineticoinc.com).
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=114)** Well, that would fall under the .com top level domain and other .com domains might include [cisco.com](https://cisco.com), [amazon.com](https://amazon.com), as well as [kineticoinc.com](https://kineticoinc.com).
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=125)** And it's the second level domain name servers that we, as administrators, might be configuring for our organization.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=132)** If I were the DNS administrator for [kineticoinc.com](https://kineticoinc.com) I would log into the [kineticoinc.com](https://kineticoinc.com) DNS server and start adding DNS records about subdomains and hosts within [kineticoinc.com](https://kineticoinc.com).
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=145)** For example, maybe we have a couple of subdomains, products and resources.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=149)** And under products perhaps we have indoor products and outdoor products and those records would point to specific web servers.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=158)** And if we had a customer on the internet that wanted to browse our outdoor furniture, as an example, they might go to a domain name of outdoor.products.[kineticoinc.com](https://kineticoinc.com).
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/domain-name-system-dns?u=76281980&t=170)** And that's a look at how we can use DNS, the Domain Name System, to resolve the easier to remember domain names into not so easy to remember IP addresses.

> [!info]- Semantic Content
>
> **Env Vars:** dns (12), dhcp (1)
> **URLs:** [kineticoinc.com](https://kineticoinc.com) (10), [cisco.com](https://cisco.com) (1), [amazon.com](https://amazon.com) (1)
> **Versions:** 203.0.113 (2), 192.0.2 (1)
> **UI Navigation:** go to (3)
> **Code Keywords:** this, (1), require (1)
> **Ports:** port 53 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Cisco Discovery Protocol (CDP) theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=0)** - In this video let's consider Cisco Discovery Protocol or CDP.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=5)** Cisco Discovery Protocol is a layer two protocol that came out back in 1994, and it's going to allow us to be on one Cisco device, like a switch or a router and see other Cisco devices that are adjacent to us.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=17)** And when I say adjacent, I mean layer two adjacent.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=21)** In fact, we don't even have to have an IP address on that adjacent device to see it.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=25)** And we're going to get a variety of information about those adjacent Cisco devices.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=29)** And the collection of information that we receive via CDP is called TLVs type, length, values.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=35)** For example, if I'm on switch SW1 on screen and I give a command that says, Show me all of my CDP speaking neighbors it's going to tell me about the IP phone and it's going to tell me about router R1.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=47)** It will show me the device IDs of those devices.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=50)** It will show me an IP address if they have that IP address, but that's not required.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=55)** It's going to tell me the capabilities of that adjacent device.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=58)** For example, is it a router?
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=59)** Is it a switch?
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=60)** It's going to tell me what version of software is running on that device.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=63)** And CDP has been enhanced over the years adding additional information that's contained in those CDP advertisements.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=70)** In fact, in 1997, Version Two of CDP came out.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=74)** But the way CDP communicates is via a multi-cast Mac address.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=78)** This is one of the reasons we don't have to have an IP address assigned to our devices.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=83)** We're going to have CDP speaking devices that join this multicast group that you see on screen.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=87)** And CDP is great for troubleshooting to see what device is attached to us and what is the egress port on my device and what is the ingress port on that remote device.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=97)** And it can also be useful for discovering a fairly small topology.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=100)** In fact, let's talk about some different CDP use cases.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=103)** We could discover a topology using a network management system.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=107)** The if this software has permissions to log in to all the different devices it can do what's called walking the tree.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=115)** It can log into a device, see who its neighbors are, go to each of those devices and see who their neighbors are and so on and so on.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=122)** We could do that manually but that would be on a fairly small network.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=126)** As another example, if we had an IP phone user and they were calling emergency services and we needed to locate where they were, well CDP could give us information about the location of that IP phone.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=138)** And when an IP phone connects into a switch it might be given a separate VLAN, called a Voice VLAN to send voice traffic.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=145)** That Voice VLAN information can be sent to the IP phone using CDP.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=149)** And when we plug in a device such as an IP phone that needs power, there are different power levels that might be supplied.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=156)** Well, that power over ethernet negotiation saying how much power we need that could be done inside of CDP.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=162)** And I mentioned earlier that a network management system might use CDP to discover the network by walking the tree.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=169)** We could actually do network discovery with a CDP manually on a fairly small network.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=174)** What we could do is go to one device, assuming we have login permissions for all the different Cisco devices, and we could say Show me my CDP neighbors and maybe I have CDP neighbors of R1 and IP Phone 1.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=189)** Now if there were PCs attached to switch 1 they would not show up because they're not running CDP.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=195)** But I do see my layer two adjacent neighbors that are speaking CDP.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=201)** Then I can walk the tree and go over to Route R1 and say, Show me my neighbors.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=206)** And here I might have adjacent neighbors of switch SW2, SW3, and SW4.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=212)** Maybe we just have some end stations like PCs off of SW2, and SW3, nothing to see there.
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=219)** But I go over to SW4 and I say, Show me my neighbors.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=223)** And we can see some Cisco servers like a Cisco Unified Communications Manager Server.
>
> **[3:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=228)** And I might see yet another switch, switch SW5.
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=231)** And I go there and it has neighbors of IP Phone 2 and router R2.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=235)** And again, this would not scale very well.
>
> **[3:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=237)** I remember when I first went to work at Walt Disney World my first week on the job, I thought, Well I need to know the topology and I know CDPs.
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=244)** So I got a piece of paper and I started trying to map out the Disney World Network by going to one device and then its neighbors and looking at their neighbors in about 20 minutes.
>
> **[4:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=254)** I discovered this was way too big of a network to do that manually.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cisco-discovery-protocol-cdp-theory?u=76281980&t=258)** But on a small to medium size network, CDP might be a great way of walking the tree and diagramming our network interconnections.

> [!info]- Semantic Content
>
> **Env Vars:** cdp (20), vlan (3), sw2 (2), sw3 (2), sw4 (2)
> **Code Keywords:** switch (8), let (2), type, (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is called (1)
> **UI Navigation:** go to (1)
> **Speakers:** - in (1)

#### CDP configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=0)** - [Instructor] In this video, we want to take a look at how to configure Cisco Discovery Protocol or CDP.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=6)** Here are the goals we have.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=7)** We want to visit a Cisco Catalyst switch and a Cisco router which are directly connected to one another and verify their adjacencies.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=15)** They should be able to see information about one another.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=17)** We'll take a look at summary information for CDP and then we'll take a look at detailed information.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=22)** Also, we might want to enable or disable CDP on a specific interface.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=27)** Maybe we don't want to send our information to a business partner or to our ISP.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=32)** We'll see how to disable CDP on a specific interface or if we want to disable CDP globally, we'll see how to do that as well.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=40)** Now let's go out to the live interface and set up Cisco Discovery Protocol.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=45)** We're sitting on switch SW1 and we can see from the topology diagram that I have one adjacent neighbor and it is running at Cisco Discovery Protocol.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=54)** I can say show CDP neighbors to see who my adjacencies are and we see some of the type length of value information that we discussed in the previous video.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=64)** We see that the device ID of my adjacent neighbor is R1.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=68)** I'm exiting my local interface of gig 0/1 to get there and the ingress interface on the R1 device is coincidentally also gig 0/1 but this is R1's port ID.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=83)** This local interface, that's my port ID on switch SW1.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=88)** We see what the capabilities are of my neighbor.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=91)** It says R and B.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=93)** R is what we're primarily concerned with.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=96)** We want to know it's a router.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=98)** The B indicates the capability of doing something called source wrap bridging.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=102)** That's an older token ring thing that we don't need to be concerned with.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=105)** The main thing I want you to notice is that we're connected to a router.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=108)** If I want to see even more information, I could say show CDP neighbors detail.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=114)** And if my neighbor does happen to have an IP address, it's going to show me that.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=118)** It shows me that my neighbor of R1 has an IP address of 10.1.1.1.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=123)** Again, it's not required that an adjacent device have an IP address.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=127)** After all, CDP is a layer two protocol, but if our neighbor does have an IP address, we can see it with this detailed look.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=134)** We see information about the version of Cisco iOS running on my adjacent device.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=139)** We're running iOS 15.83 M2.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=143)** Now let's go to router R1 and make sure that we can see the neighboring switch.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=147)** On router R1, let's do a show CDP neighbors command, and we see that from the perspective of router R1, I've got a neighbor of SW1.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=157)** I'm exiting my interface of gig 0/1 to get there.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=161)** And I'm going into SW1's interface of gig 0/1.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=165)** That's the ingress interface on SW1.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=168)** SW1 has these capabilities, R, S and I.
>
> **[2:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=173)** The R means it's a router which means this switch is a multilayer switch.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=178)** It's capable of doing routing.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=179)** It's also a switch and it runs IGMP, the Internet Group Management Protocol which is used by multicast to determine out of which ports to forward multicast traffic.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=191)** Now, let's say that we wanted to disable CDP on a specific interface.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=196)** Maybe we did not want our business partner or our ISP to see what version of iOS we're running.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=202)** What we can do is go into a specific interface.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=205)** First, I'll go into global configuration mode with configured terminal.
>
> **[3:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=208)** Then I'll go into interface gigabit 0/1 and I can say no CDP enable and that's going to turn off CDP on that specific interface.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=218)** If I wanted to turn it back on, I could say CDP enable but perhaps I wanted to turn off CDP globally for all of my interfaces.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=226)** What I could do is getting back to global configuration mode is I could give the command no CDP run and that's going to turn it off globally for the entire router.
>
> **[3:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/cdp-configuration?u=76281980&t=237)** I go ahead and turn it back on because I want it to run in this router, and that's a look at a couple of ways of viewing CDP information, summary information and detailed information and we also saw how to disable CDP on a specific interface and how to disable it globally.

> [!info]- Semantic Content
>
> **Env Vars:** cdp (17), sw1 (6), isp (2), igmp (1)
> **Code Keywords:** interface (14), switch (7), let (4)
> **Code Identifiers:** ios (3)
> **Versions:** 10.1.1 (1), 15.83 (1)
> **Cross-References:** we discussed (1), previous video (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)

#### Link Layer Discovery Protocol (LLDP) theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=0)** - [Instructor] Earlier we discussed Cisco Discovery Protocol or CDP.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=4)** And CDP allowed us to see information about Layer 2 adjacent neighbors that were also speaking CDP.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=10)** But a challenge with CDP is it's a Cisco protocol.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=14)** Cisco did license it to some other third parties but, in general, it's not vendor interoperable.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=19)** That's where LLDP or Link Layer Discovery Protocol comes in.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=24)** This is a standard published back in 2005.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=27)** It's IEEE802.1AB, and we could think of this as doing basically the same job as CDP, but in a mixed vendor environment.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=35)** And similar to CDP, it's going to provide information about adjacent LLDP speaking devices.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=42)** But something to keep in mind is, even though LLDP and CDP perform similar functions, they don't always show the exact same information.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=50)** For example, LLDP can provide information about a port speed and it can be used for duplex discovery.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=56)** Cisco Discovery Protocol, on the other hand, it can be used for duplex discovery, but it doesn't report LAN speed.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=62)** That's not something that should cause us any issues, I just want you to understand they're not providing exactly the same information set.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=69)** And you might remember that CDP communicated using a very specific multicast MAC address.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=74)** Well, there could be multiple multicast MAC addresses used by LLDP, but they all have the same organizationally unique identifier, the same vendor code of 01-80-C2.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=85)** And if we happen to be in an environment that's using IP phones as an example we might instead use LLDP-MED, where MED that stands for Media Endpoint Discovery.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=96)** That's going to add some extensions to LLDP to provide extra information to support things like Cisco IP phones, such as its voice VLAN information.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=105)** And that's a look at a vendor neutral protocol for discovering and learning information about Layer 2 adjacencies.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/link-layer-discovery-protocol-lldp-theory?u=76281980&t=112)** And we said that it was LLDP, the Link Layer Discovery Protocol.

> [!info]- Semantic Content
>
> **Env Vars:** cdp (8), lldp (8), mac (2), med (2), ieee802 (1)
> **Analogies:** similar to (1), for example (1), such as (1)
> **Definitions:** is a  (1), stands for (1)
> **Cross-References:** we discussed (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### LLDP configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=0)** - In this video let's see how a setup Link Layer Discovery Protocol or LLDP we're going to go to a couple of devices, we've got a Cisco Catalyst switch and a Cisco router and we want to use LLDP to verify our layer two adjacencies.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=14)** We should be able to see one another.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=16)** We can take a look at summary and then detail information and interpret that information about our neighbors.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=21)** If we want to disable LLDP on an interface, we'll see how to do that as well as how to enable or disable LLDP globally.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=29)** Now let's go out to our live topology and set up LLDP.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=33)** You might notice this topology is identical to our CDP topology and here we're sitting on switch SW1 and we're wanting to see if we have any LLDP neighbors.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=43)** So I can say show LLDP neighbors and it says that LLDP is not even enabled on the switch.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=51)** It was enabled by default for CDP but it's not for LLDP.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=55)** So how do we turn it on globally for a device?
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=58)** Let's go into global configuration mode and I'll say LLDP run, that's going to globally turn it on for this switch.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=65)** I could then go into an interface if I wanted to and disable that interface from participating in LLDP.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=71)** For example, let's go into interface gigabit zero slash zero since we're not using that interface in mys topology and instead of disabling LLDP for the entire interface I could say disabled the transmission of LLDP information or disable the reception or I could say both.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=88)** Here's what I mean.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=89)** I could say no LLDP.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=91)** Let's give some context sensitive help.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=93)** And I could say I don't want to transmit my information to my neighbor, so I'll say no LLDP transmit but maybe I still want to receive it so I could just leave it like that.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=104)** If I didn't even want to receive information from my neighbor, I could say no LLDP receive.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=109)** Also, we could go in and turn off a specific type length values.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=113)** Maybe I don't want to send specific pieces of information to my neighbor.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=116)** I could do that for the generic TLVs of LLDP or I could look at the TLVs of LLDP MED which adds some extensions to LLDP.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=125)** For example, I could say no LLDP, TLV select.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=131)** And I could say that I did not want to send LLDP power management information as part of the IEEE802.3 power over ethernet standard.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=140)** Let's say I did not want to send that information, I didn't want to negotiate with an attached device.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=145)** I could turn off that specific TLV, but now that I've got LLDP enabled on the switch I should be able to see my neighbor.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=152)** Let's do a show LLDP Neighbors command again.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=156)** And this time we see router R1.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=158)** That's the device ID.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=159)** Similar information as we received with the CDP.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=162)** My local interface, the interface I'm leaving to get out to R1 is gig zero slash one.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=168)** The port ID of R1 that I'm going into coincidentally is also gig zero slash one and it tells me the capability is a router.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=177)** It doesn't have the older source wrap bridging information that CDP had, which is fine.
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=182)** We're not concerned with that anyway so we know we're attached to a device that does routing.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=187)** If I want to see more information, I could say show LLDP neighbors detail, and just like CDP, I could get more information such as IP address information and the version of the operating system being run on my neighbor.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=201)** Let's go to router R1, make sure we can see the switch.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=204)** Let's do a show LLDP Neighbor's command.
>
> **[3:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=208)** And we can.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/lldp-configuration?u=76281980&t=209)** And because we do have a multilayer switch it shows that we have the capability of a router and that's a look at how to configure LLDP A vendor interoperable protocol that can allow us to see layer two adjacent neighbors that happen to be running at Link Layer Discovery Protocol.

> [!info]- Semantic Content
>
> **Env Vars:** lldp (26), cdp (5), tlv (2), sw1 (1), med (1)
> **Code Keywords:** let (9), interface (8), switch (7)
> **Analogies:** for example (2), just like (1)
> **Prerequisites:** setup (1), set up (1), configure (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Network Time Protocol (NTP) theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=0)** - [Instructor] One of my favorite sayings about time is that a person with one watch always knows what time it is.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=6)** A person with two watches is never quite sure.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=9)** Well, in the network we want to have one watch, one authoritative time source, so all network devices agree on the time, and we can do that using a protocol called NTP, the Network Time Protocol.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=21)** That's going to allow all of our network devices running NTP to synchronize their clocks.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=26)** Why is that valuable?
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=27)** Well, as one example, if I'm trying to interpret log files as I'm doing troubleshooting, I can see that a certain event happened at this time on this router, and then about one second later on this server this other event happened, maybe they're related, maybe we can do some event correlation.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=42)** And I also want you to know that NTP uses UDP Port 123 and in an earlier course I gave you a memory aid for that you might recall.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=51)** It reminds me of the old Jackson 5 song ABC, Easy as 123.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=55)** Well, I think NTP easy as 123.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=58)** That's an easy way to remember that.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=60)** But a challenge we might have is we have different devices in our network that might be providing time.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=66)** Who do we believe?
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=67)** Who is the most authoritative in terms of time?
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=70)** Well, that's measured with something called the stratum number.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=74)** That's the believability of a time source.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=76)** The lower the stratum value, the more believable the source.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=80)** The most believable stratum value is a stratum of zero that might be given to atomic clocks.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=86)** For example, in the United States, there's an atomic clock run by the Department of Defense located at the Naval Observatory in Washington DC and also the National Institute of Standards and Technology, the NIST, they have a couple of atomic clocks in Boulder, Colorado.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=101)** And the way an atomic clock works is it uses an element called Cesium 133, and that Cesium 133 element is going to oscillate a little over 9 billion times a second.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=112)** And even though it's great that we have these very authoritative atomic clocks, we're probably not going to be pointing our network devices to those clocks.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=120)** We're going to be pointing our network devices to other clocks.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=123)** There are plenty of NTP publicly available sources on the internet.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=127)** You could do a quick search and find several.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=129)** And you might have a router at your location like R1 in this example, receiving time from that clock on the internet.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=135)** We'll say that the clock on the internet is the stratum 1 clock, meaning that it received time from a stratum zero clock.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=143)** In other words, one of those atomic clocks.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=145)** But if we receive time from a server with a stratum value of a 1 that gets incremented when we learn it.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=152)** Now we have a stratum value of 2.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=154)** And if we had another device in our network that could serve up time and it learned it's time from R1, you guessed it, it would have a stratum value of a three.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=162)** But here we've got one router at our location, R1, and it has a stratum value of 2.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=168)** It's going to provide time to different devices within our network, such as a server, a PC, and maybe other network devices.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-time-protocol-ntp-theory?u=76281980&t=175)** That's a way that we can have all of our network devices agree on the current time.

> [!info]- Semantic Content
>
> **Env Vars:** ntp (5), udp (1), abc (1), nist (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Ports:** port 123 (1)
> **Speakers:** - [instructor] (1)

#### NTP configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=0)** - Now that we've discussed the theory of Network Time Protocol or NTP, in this video, we want to set it up.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=6)** Specifically, we're going to configure a router that we're going to pretend is an internet based router and it's going to act as a time source for our network.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=14)** It's going to provide time with a stratum value of a 2.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=17)** Then we'll configure a router that we're pretending is inside of our enterprise network and it's going to receive time from that internet based time source.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=25)** And we're going to verify that time was learned successfully via NTP.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=29)** Now, let's go out to the live interface and set this up.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=32)** In the topology you see on screen, we're on the router identified as the internet router and we want to configure this as a time source.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=39)** Now keep in mind, in the real world, you might not do this configuration because you're learning time from some other device that's already on the internet.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=47)** You typically don't want to rely on your router's internal clock to provide time for your network.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=52)** But I wanted to show you if we need to, maybe in a lab environment, here's how to set up a time source.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=56)** First, let's set the time on this internet router.
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=59)** We'll say clock set and we'll give some context sensitive help and we give the current time.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=65)** And I'm going to pretend this is in a time zone of UTC 0, so there's no time offset.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=71)** And let's pretend that it's 12 o'clock UTC.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=74)** So I'll say 12:00:00.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=80)** Now I can enter the date and let's say that it is September the first, 2022.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=87)** I'll put in 1 September, 2022 and we'll press Enter.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=95)** Now I've set the clock on this router and we're now going to tell this router to be a time source.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=99)** So let's go into global configuration mode and we'll say what our time zone is.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=103)** I'll say clock time zone UTC offset of zero and we'll say that we are an NTP master and we have a stratum value of a 2 and we're done with our configuration on our internet router.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=119)** Now let's go to route R1 and tell it to learn time from this internet based time source.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=125)** On router R1, we'll go into global configuration mode and I'll say my NTP server is at an IP address of 1.1.1.1 which is a loop back address I have configured on the internet router.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=138)** By the way let's make sure I can reach that.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=140)** Let me exit out and say Ping 1.1.1.1.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=144)** Yes, I am successfully getting to that IP address.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=148)** Now I'll say what my time zone is.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=150)** And at the time of this recording, I'm in eastern daylight time, which is when we spring forward from Eastern Standard Time.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=158)** So I'll say my time zone is called EST, Eastern Standard Time and that's UTC minus five.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=167)** But we do observe daylight savings time.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=170)** So I'll say clock summer hyphen time EDT for eastern daylight time.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=177)** And that is something that is recurring.
>
> **[3:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=180)** Even though recent legislation might make it where that does not recur next year, at this time, it's recurring.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=186)** And I'll press Enter and we'll say end.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=188)** And we're done with our configuration on router R1.
>
> **[3:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=192)** Now let's see if we have synchronized our clock.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=194)** Let's do a show clock.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=196)** Is it really September the first, a little after 12 o'clock?
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=199)** Let's see.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=200)** No, it's not.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=201)** It looks like we've not learned time from our time source.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=204)** Let's check the status of NTP.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=206)** We'll do a show NTP status command.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=210)** And look at that.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=211)** It says, we have no reference clock.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=214)** We have a stratum value of a 16, which is considered unreachable.
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=219)** Did I not specify my NTP source?
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=222)** I think I did.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=223)** Let's do a show NTP config that confirms that I did type in 1.1.1.1.
>
> **[3:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=230)** Why have we not learned time?
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=231)** Well, I wanted to illustrate this because this is actually expected behavior.
>
> **[3:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=236)** Cisco's running NTP version 4 and it can take about 15 minutes to converge.
>
> **[4:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=241)** So what I'm going to do right now is pause the video then we'll come back and see if router R1 has learned time from our internet router.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=249)** All right. It's been over 15 minutes and our router console is timed to out.
>
> **[4:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=252)** Let's press return.
>
> **[4:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=253)** Go back into privilege mode and let's see if we've now learned time.
>
> **[4:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=257)** Let's do a show NTP status.
>
> **[4:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=261)** This looks much better.
>
> **[4:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=262)** It says our clock is synchronized.
>
> **[4:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=264)** Our stratum is 3.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=266)** That's because we learn from a router who stratum was 2 and we see the IP address of our NTP clock.
>
> **[4:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=272)** It's one 1.1.1.1.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=274)** And let's see what time we think it is.
>
> **[4:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=275)** Let's do a show clock.
>
> **[4:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=277)** And it thinks that it is September the first, 2022.
>
> **[4:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=281)** And our time since we're observing daylight savings time is EDT and we're four hours behind UTC.
>
> **[4:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=286)** So while our internet router thinks it's about 12:46, our router is four hours behind that at 8:46.
>
> **[4:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/ntp-configuration?u=76281980&t=292)** And that's a look at how to configure an NTP time source, specify a stratum value, and also how to learn time from an NTP source and how to verify NTP operation.

> [!info]- Semantic Content
>
> **Env Vars:** ntp (14), utc (5), edt (2), est (1)
> **Code Keywords:** let (18), interface (1), return. (1)
> **Versions:** 1.1.1 (4), version 4 (1)
> **Prerequisites:** configure (4), set up (1)
> **Ports:** :00 (2), :46 (2)
> **Definitions:** is an  (1), is a  (1), is called (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)

#### Network Address Translation (NAT) theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=0)** - [Instructor] In this video let's discuss NAT, Network address translation.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=4)** NAT is a service that allows us to take an IP address inside of our network and convert it into a different IP address for use on the outside of our network.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=13)** One benefit that gives us is security.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=15)** If somebody's trying to get back to us they don't really know what our IP address is.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=19)** They see the IP address that our IP address has been translated into.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=23)** But I would say an even bigger benefit of NAT is a variation of NAT called PAT, Port Address Translation.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=30)** You see, the bad news with IP version 4 addresses is we are out.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=34)** There are no more blocks of IP version 4 addresses to be given out to organizations.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=38)** So typically, if we're in a small office or a home office, when we get that office connected to the internet we're going to have one and only one IP address from our service provider.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=47)** And we have perhaps dozens of devices inside of that office and they all have to share a single IP address.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=54)** Well, that's made possible with this variant of NAT called PAT.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=57)** But first, let's consider the operation of NAT.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=60)** Here we have router R1 that sits at the boundary of our organization on the left, and the internet on the right.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=66)** And we'll draw a dividing line and define an inside portion of the network, which is our office, and the outside which goes out to the internet.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=74)** And let's say that in this case we do have the luxury of a pool of publicly routable IP addresses, in the range of 192.0.2.101 all the way through 192.0.2.199.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=87)** And now PC1 wants to go out to the web server.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=90)** Notice that PC1 has an IP address of 10.1.1.1.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=95)** You might remember from your IP version 4 studies, that is not a publicly routable IP address.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=101)** That is an RFC 1918 address.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=103)** It's a private IP address in other words.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=105)** It cannot go out to the internet.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=107)** So what happens?
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=108)** Well, the NAT speaking router translates, in this case 10.1.1.1, into one of the addresses that can be routed on the internet from that pool.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=117)** It shows 192.0.2.101.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=120)** Notice the destination of the web server 203.0.113.100.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=125)** That does not change, but our IP address does change.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=128)** It gets mapped from a private IP address to this publicly routable IP address.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=133)** PC2 also wants to go to the web server and it's going to be translated into a different IP address from that pool.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=139)** In this case, 192.0.2.102.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=142)** And the question is, when the traffic comes back from the web server to go to PC1 and/or PC2, how does that router know where to forward the traffic?
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=151)** Well, when it did that translation initially, it built a NAT translation table with these columns.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=157)** We have inside local addresses, inside global addresses, and outside global addresses.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=162)** Now, let's break this down.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=164)** There are two pieces to these address names.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=166)** The first word is going to be either inside or outside.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=169)** And the next word is going to be local or global.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=171)** First, consider the first word, inside or outside.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=174)** This says, what is the device this IP address represents?
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=178)** Does it represent a device on the inside of our network or on the outside of our network?
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=182)** So notice in that first row, 10.1.1.1, that's an inside address.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=187)** It refers to PC1 on the inside of our network.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=190)** And if the second word is local that means it's only routable locally.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=193)** It cannot be routed on the public internet.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=195)** Global means it can be routed on the public internet.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=198)** So when R1 translates 10.1.1.1 into 192.0.2.101, that becomes our inside global address.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=206)** And a lot of students have trouble with this definition of inside global because they imagine this as being an address on the outside.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=214)** It is.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=214)** But inside means what device are we referring to?
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=219)** And we're referring to PC1.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=220)** It's on the inside of our network.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=222)** So an inside global address refers to a device, PC1 in our example, on the inside of our network.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=227)** But the address 192.0.2.101 in this example, it's globally routable.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=233)** And we're going to the web server, that's a device on the outside of our network, and it's a globally routable address of 203.0.113.100, so that is an outside global address.
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=244)** And that's a look at how network address translation works if we do have the luxury of a publicly routable pool of addresses.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=250)** However, that's not usually the case.
>
> **[4:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=253)** Usually we have one address, as we do in this case.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=256)** Here, the internet service provider has given us a single routable IP address of 192.0.2.100, and we're going to have multiple devices on the inside of our network that all need to share that single address.
>
> **[4:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=269)** And when PC1 goes out to that web server, in addition to being translated into that shared IP address, notice that PAT is keeping track of some extra information.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=278)** It's keeping track of port number information.
>
> **[4:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=281)** We're going to an HTTPS server, which is port 443, but recall from our discussion of TCP in an earlier course, that when PC1 initiates that connection, it has to pick a port number called a dynamic port number, or sometimes we call it an ephemeral port number.
>
> **[4:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=296)** Here PC1 has selected the port of 49,525.
>
> **[5:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=300)** When PC2 goes out to that very same web server it gets translated into the very same inside global address of 192.0.2.100.
>
> **[5:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=310)** However, it shows a different ephemeral port number of 52142.
>
> **[5:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=315)** That way, when the return traffic comes back from the web server, even though all the traffic is coming back to a single IP address, the router's going to have a table that knows that if that destination address has a port number of 49,525, that's part of that session that PC1 set up.
>
> **[5:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=332)** So the router knows how to forward that on to PC1.
>
> **[5:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=335)** So we have a bit of extra information in our port address translation table as opposed to our network address translation table.
>
> **[5:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/network-address-translation-nat-theory?u=76281980&t=342)** With PAT, not only do we keep track of addresses, we also keep track of port numbers, and that allows everybody on the inside of the network to share a single publicly routable address.

> [!info]- Semantic Content
>
> **Env Vars:** pc1 (11), nat (8), pat (4), pc2 (3), rfc (1)
> **Versions:** 192.0.2 (8), 10.1.1 (4), version 4 (3), 203.0.113 (2)
> **Code Keywords:** let (4), private (2), public (2), case. (2), case, (1)
> **Definitions:** is a  (2), is an  (2), refers to (2), in other words (1)
> **UI Navigation:** go to (2)
> **Ports:** port 443 (1)
> **Documentation:** rfc (1)
> **Analogies:** imagine (1)

#### NAT configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=0)** - [Instructor] In this video, we want to set up the top of NAT that you're most likely to run into, and that is PAT, Port Address translation.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=7)** Specifically, we're going to configure port address translation on a router, and there are going to be a couple of PCs available off of that router, and they're each going to connect to an IP address that we're pretending is on the internet.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=17)** And after they make their connections, we're going to go into the router that we configured for PAT, and we're going to verify that the router translated each of the inside local addresses of the PCs into a single inside global address for use on the internet, but it still kept those two different traffic flows separate by paying attention to port numbers.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=36)** Now, let's go to the live interface and set this up.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=39)** In this topology we've got a couple of PCs, PC1 and PC2 that we're considering to be on the inside of the network.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=45)** So, we need to go into router R1 and say everything off of Gig 0/1 is considered the inside, and everything considered off of Gig 0/2 going out to the internet, that's considered the outside.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=57)** To do that, let's go into global configuration mode, and then into interface configuration mode for gigabit 0/1, and we say ip nat inside.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=66)** And don't be overly concerned about the error message that you see popping up on screen.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=70)** It says that what we just did is making us a CPU hog, this is actually a side effect of us running this, not on actual hardware, but we're using Cisco CML, the Cisco Modeling Labs, and this is just a side effect of that.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=83)** It's not going to break anything in our demo, but we've now defined Gig 0/1 is the inside, let's define Gig 0/2 as the outside now, we'll go into interface gigabit 0/2, and I'll say ip nat outside, and now we're ready to configure PAT.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=99)** First, we want to create something called an ACL, an Access Control List, that's going to be matching any IP address on the inside of our network.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=107)** And later in this course when we talk about security we'll get into the configuration of ACLs, but let's take a look at a basic one now.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=114)** I'm going to say access-list, and I'll give it a number of 1, and I'm going to say permit.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=120)** Now in this context, the word permit is not saying "allow this traffic," as opposed to drop this traffic, though in this context it's saying, "we want to match traffic," and I want to permit anybody or match anybody in the network of 192.168.1.0, with a wildcard mask of 0.0.0.255, and again, we'll talk lots more about the syntax of the access control list, as well as the structure of a wildcard mask, when we get into that security section later in the course.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=150)** But for now, I've created an access list number 1, that is going to match any IP address on the inside of my network.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=157)** Now let's give the command to perform PAT.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=159)** I'll say ip nat, and I'll say, "what are my inside addresses?"
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=163)** Well, my inside addresses are any addresses that match access list 1.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=168)** So I'll say source is list 1, and I want to translate those inside local addresses into a single inside global address.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=177)** And that address is going to be whatever the address is, that's currently assigned to my outside interface, Gig 0/2.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=184)** So, I'll say interface gig 0/2.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=187)** I'm not even specifying an IP address, I'm saying, whatever IP address that Gig 0/2 has, that's what we're going to translate everybody into.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=194)** But I have to give one extra keyword, this is what transforms this from a NAT configuration, to a PAT configuration, I say, overload, overload allows multiple inside local addresses to share this single inside global address.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=211)** If I did not say overload, the first session that we sent through the router, that would consume the inside global address, and subsequent sessions would not be allowed, because there would be no address left.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=221)** But by saying overload, I'm saying let's share this single inside global address, and we're done with our configuration, it's that simple.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=229)** Let's exit out of this and test it out.
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=231)** Let's go to each PC and let's connect to a secure HTTP server on the internet.
>
> **[3:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=238)** These PCs are running Linux, and I'm going to say, telnet to 1.1.1.1 on port 443, that's the HTTPS port.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=249)** And you see I'm connected, nothing shows up on the screen., I'm not in a browser, so I'll just do a Control + C and then E to exit out of that.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=256)** And let's go do the same thing on PC2.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=258)** I'll say, I want to telnet to 1.1.1.1 on port 443.
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=263)** Let's exit out of that, and let's go back to R1, and see what our NAT translation table looks like.
>
> **[4:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=269)** To view it, we'll say, show ip nat translations, and we have two different mappings for those two different sessions we just set up.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=278)** First, notice our inside local addresses.
>
> **[4:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=280)** These are PCs 1 and 2.
>
> **[4:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=283)** Here's PC1.
>
> **[4:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=284)** And notice we don't just have PC1's IP address, we also have the ephemeral port number that it's selected, when it went out to the web server.
>
> **[4:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=292)** Here's PC2's inside local address, and it's ephemeral port number.
>
> **[4:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=298)** And here's the big point I want you to notice, for the inside global address, it's the same address.
>
> **[5:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=303)** We use that single address that was assigned to interface Gig 0/2 on R1, as the inside global address that we would map both of our inside local addresses to.
>
> **[5:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=313)** So both PCs got mapped to an inside global address of 192.0.2.100.
>
> **[5:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/nat-configuration?u=76281980&t=320)** However, PAT kept track of these ephemeral port numbers, and when return traffic came back from the web server, the router looked not just at the destination IP address, which was 192.0.2.100 in both cases, it said, let's look at the destination port number, and then it knew to forward packets either to PC1 or to PC2.

> [!info]- Semantic Content
>
> **Env Vars:** pat (6), pc1 (4), pc2 (4), nat (3), cpu (1)
> **Code Keywords:** let (13), interface (6), this, (1)
> **Versions:** 1.1.1 (2), 192.0.2 (2), 192.168.1 (1), 0.0.0 (1)
> **Prerequisites:** set up (2), configure (2)
> **Cross-References:** later in (2), go back to (1)
> **Ports:** port 443 (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)

#### Dynamic Host Configuration Protocol (DHCP) overview
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=0)** - When a network device boots up such as a laptop booting up, it's going to need IP address information to communicate on the network.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=7)** One way it could get that IP address information is for us to go in and configure it ourselves.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=13)** We could say, here is your IP address, here's your subnet mask, here's your default gateway, here's the IP address of your DNS server and there are lots of other options we could specify.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=23)** However, manual configuration just does not scale.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=27)** What we can do instead is use a protocol called DHCP, the Dynamic Host Configuration Protocol.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=34)** In this example, PC1 is trying to get IP address information.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=37)** It just booted up, and it's going to go through a four step process to get an IP address.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=42)** And as a memory aid, think of the old Nickelodeon show, "Dora the Explorer".
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=47)** Do you remember Dora and backpack and map?
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=49)** Well, I think of Dora whenever I think of DHCP because the initials D-O-R-A remind me of the four step DHCP process.
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=59)** The D in Dora reminds me of the Discover broadcast.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=64)** The PC sends out a broadcast asking are there any DHCP servers out there?
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=69)** And in this case, PC1 is on the same subnet as the DHCP server, which means it's on the same broadcast domain.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=76)** So the discover broadcast does get to the server.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=80)** You might have noticed however, when the broadcast reached R1, it was dropped because a broadcast cannot cross a router boundary.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=88)** That's going to be an issue for PC2 here in a moment.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=90)** But for now, PC1 did successfully reach the DHCP server and the server responds and says, yes, I'm a DHCP server, here's my IP address.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=99)** I would be happy to provide you with IP address information.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=102)** That response is the offer message.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=104)** It's offering it services, and that's the O in Dora.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=107)** So, D is discover, O is offer, the R in Dora is request.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=113)** The PC is requesting IP address information.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=116)** And the server responds with that IP addresss information inside and acknowledgement message.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=121)** So, D-O-R-A Dora, Discover, Offer, Request, Acknowledgement.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=125)** And now PC1 has an IP address of 192.168.1.100.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=131)** Now let's say PC2 also wants to get an IP address and it also wants to talk to the DHCP server.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=137)** Here's the challenge.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=138)** When PC2 sends out that discover broadcast, since a broadcast cannot cross a router, that discover message gets dropped at router R1.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=147)** Does that mean that we have to have a DHCP server on every subnet?
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=151)** No, that would not be scalable.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=153)** So what we can do instead is configure R1 to act as a DHCP relay agent.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=158)** It's going to recognize DHCP broadcasts coming in and we can configure this DHCP relay agent to afford that information over to the DHCP server.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=168)** So now, with the DHCP relay agent configured on R1, PC2 can send out a discover broadcast and it is going to successfully reach the DHCP server which is going to respond with the O in Dora with an offer saying, yes, here's my IP address, 192.168.1.2.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=187)** I will be happy to provide you with your IP address information.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=191)** PC2 says, 'yes, please do so' inside of a request message.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=195)** And the server responds to PC2 saying, here is your IP address information and an acknowledgement message.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=201)** Now, PC2 has an IP address of its own.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=204)** It's on a different subnet than PC1.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=206)** It's 172.16.1.100.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=209)** And the different subnets for which a DHCP server can hand out IP addresses, those subnets are sometimes called pools or scopes, meaning that we could have a single DHCP server servicing the IP addressing needs of an entire organization.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=225)** And that's an overview of the Dynamic Host Configuration Protocol or DHCP which allows a network device to boot up, dynamically go out and obtain IP address information.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dynamic-host-configuration-protocol-dhcp-overview?u=76281980&t=235)** And that IP address information might be things such as an IP address, a subnet mask, a default gateway, the IP address of a DNS server, and lots more.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (18), pc2 (7), pc1 (5), dns (2)
> **Versions:** 192.168.1 (2), 172.16.1 (1)
> **Prerequisites:** configure (3)
> **Code Keywords:** case, (1), let (1)
> **Analogies:** such as (2)
> **Speakers:** - when (1)

#### DHCP options
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=0)** - [Instructor] In our previous video, we took a look at the four step process of DHCP handing out IP address information to a DHCP client.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=8)** Now in this video we want to take a look at some of the DHCP options, and talk more about how DHCP information is handed out.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=16)** One thing I would want you to know is it doesn't have to happen entirely randomly, we may set up a MAC reservation, for example, maybe there's an office printer, and everybody points to the IP address of that printer, but that printer gets its IP address via DHCP.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=32)** What if that printer was turned off, maybe over a weekend, Monday morning somebody turns it back on and it gets a new IP address.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=38)** Suddenly all the PCs in the office are trying to print and it's not working because the printer has a different IP address.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=44)** We can prevent that type of thing from happening by setting up a MAC reservation.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=48)** We could say this MAC address of the printer in our example is always going to map to 192.168.1.1.25.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=55)** And as we just saw in our prior example, we could have different pools, or different scopes of addresses.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=61)** What this means is we could have IP address information for more than one subnet.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=66)** Remember PCs one and two, they were in different subnets, that meant they were pooling from a different pool of IP addresses, or different scopes of IP addresses.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=75)** And there might be some IP addresses in the subnet that we do not want to hand out.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=79)** We could exclude specific IP addresses.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=82)** Maybe we have servers that have statically configured IP addresses, we don't want to hand those out.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=87)** Maybe a router interface has the static IP address, we don't want to give that out to a PC.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=91)** Maybe the printer, like we were talking about earlier, maybe we did statically configure that IP address, we don't want to give that out.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=98)** So we can specify ranges, or individual IP addresses that are are excluded from being handed out to these DHCP clients.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=106)** And what kind of information are we going to be giving out as part of this DHCP acknowledgement message?
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=112)** Well, besides just IP address information, some other scope options include, and these are just a few examples, but we could tell that DHCP client here is your default gateway, here's the IP of your DNS server, we can even set the TTL value for its packets, the time to live value.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=128)** In other words, when a packet gets sent out, it's sent out with a certain TTL value, and every router that it tries to cross, that TTL value is going to be decremented by one, and if it ever reaches zero, it's going to be dropped.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=141)** And another example that I use quite a bit because I do a lot in the collaboration world, is I specify option 150.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=147)** This tells an IP phone when it boots up and gets its IP address information from a DHCP server, option 150 says, here is the IP address of a TFTP server, a trivial file transfer protocol server, from which that IP phone can download its configuration file.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=164)** And when a device gets IP address information, it's not a permanent assignment, it's leasing that IP address information.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=171)** Much like someone might lease an apartment, there's a certain duration of that lease.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=176)** And many people visualize that PC is waiting to the very last minute until the lease runs up, and then it says, hey can I have that same IP address again.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=184)** But a DHCP client tries to be more proactive than that.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=187)** At 1/2 of the lease time, it's going to try to renew the lease.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=191)** If the DHCP server is not reachable for whatever reason, it's going to wait a little bit longer, and then at 7/8 of the lease time, it's going to try to renew the lease again, in an attempt to get the lease renewed before it ever expires.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=203)** So before the lease completely runs out of time and we try to renew, we're going to proactively try to renew a couple of times before that.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-options?u=76281980&t=211)** And finally, in this DHCP discussion, I do want you to be aware that there is a DHCP Version 6 server that can serve up IP address information for IP Version 6 clients.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (13), mac (3), ttl (3), dns (1), tftp (1)
> **Code Keywords:** interface (1), static (1), include, (1), finally, (1)
> **Versions:** version 6 (2), 192.168.1 (1), 1.25 (1)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** previous video (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)

#### DHCP configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=0)** - [Instructor] In this video, we want to configure DHCP, the dynamic host configuration protocol on a Cisco router.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=6)** In fact, we want to do three different DHCP configurations.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=10)** Number one, we want to configure a Cisco router to act as a DHCP client, and that's a very real-world application.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=17)** If you have a router getting IP address information from your internet service provider, it is oftentimes via DHCP.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=25)** We'll also set up a Cisco router to act as a DHCP server, it can be the device that hands out the IP addresses.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=32)** And then we'll configure a router to act as a DHCP relay agent.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=36)** And then, after we have everything set up, we'll verify DHCP operation.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=40)** Now let's go out to the live interface and set this up.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=42)** Let's begin by configuring a router that's labeled as our PC as a DHCP client.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=49)** Just like a PC could get IP-address information via DHCP, so can a Cisco router.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=54)** To set this up, let's go into global configuration mode, and then into interface configuration mode for gigabit 0/1.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=61)** That's the interface on this router that's pointing over to router RR1.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=65)** And to set its IP address via DHCP, we'll say ip address, and instead of giving an IP address I'll just say dhcp, and we're done.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=75)** Now, let's see if we've obtained an IP address via DHCP.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=79)** I can do a show ip interface brief command to see what IP addresses, if any, are assigned to our interfaces.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=86)** Right now it shows that we only have two interfaces.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=88)** And Gigabit 0/1, I just configured it to get IP address information from DHCP, but nothing's assigned yet.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=96)** Well, no wonder, we've not yet set up a DHCP server.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=99)** So let's go over to the router acting as the DHCP server and set it up.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=103)** First, let's go into global configuration mode.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=105)** And you might remember from our DHCP theory video, we talked about the option of excluding certain IP addresses.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=112)** Let's say in this example, I only want to hand out IP addresses in the range of 192.168.1.100 all the way through 192.168.1.199.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=124)** Here's how I can do that.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=125)** I'll say ip dhcp, excluded-address, and I'm going to give a range of addresses that're excluded.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=132)** And our clients are going to be in the 192.168.1.0/24 network, so I'm going to specify a range of excluded addresses, beginning at 192.168.1, all the way through 192.168.199.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=148)** And after the 99, then we can start handing out IP addresses at .100.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=153)** But I don't want to go above 192.168.1.199, so I'll want to set up another range of excluded IP addresses.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=160)** I'll say ip dhcp excluded-address.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=165)** This time I'll say 192.168.1.200 all the way through 192.168.1.254.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=174)** Notice I've excluded all usable IP addresses in this subnet except the range of 192.168.1.100 all the way through 192.168.1.199.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=185)** Now that I've specified my excluded addresses, let's set up a scope or a pool.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=190)** To do that, I'll say ip dhcp pool, and I'll give it a name.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=196)** And since I'm going to be handing out IP addresses to PCs, we're pretending, I'll say the name of the pool is PC.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=202)** Now I'll want to specify, for this pool, what subnet will I use to hand out IP addresses?
>
> **[3:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=208)** And that's specified with a network command.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=210)** I'll say network 192.168.1.0.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=214)** And we've got a 24-bit subnet mask.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=218)** We need to specify the default router, and we can do that with the default-router command.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=223)** And we'll say the default router is 192.168.1.1.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=227)** And let's pretend we have a DNS server as well.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=229)** We'll say dns-server 172.16.1.2.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=235)** And there're many other options that we could optionally specify, but this's a basic set of IP address information.
>
> **[4:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=241)** So let's exit from our server.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=242)** I'll do a copy run star to save our configuration.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=247)** Now let's go back to the PC and see if it has learned an IP address now that we have a server set up.
>
> **[4:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=252)** Going back to the PC, let's once again do a show ip interface brief.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=256)** Still no IP address.
>
> **[4:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=257)** By looking at the topology, can you determine why there's no IP address assigned to this router acting as a PC?
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=263)** Yeah, it's because that Discover broadcast going to the server never makes it past RR1.
>
> **[4:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=269)** Our broadcast is dropped when it hits a router boundary.
>
> **[4:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=271)** That means I need to go into router RR1 and configure it to act as a DHCP-relay agent.
>
> **[4:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=277)** And here's how we do that.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=278)** Let's go into global configuration mode, and I'll go into interface gigabit 0/1, the interface that's going to be receiving the Discover broadcast from the PC.
>
> **[4:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=287)** And I'll specify one command, ip helper-address.
>
> **[4:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=292)** In fact, this is sometimes called an IP helper configuration instead of calling it a DHCP relay agent configuration.
>
> **[5:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=300)** And I'm going to specify that our helper address is 172.16.1.2.
>
> **[5:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=305)** That's the IP address of the DHCP server.
>
> **[5:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=308)** So when this interface receives the Discover broadcast, it's going to relay that Discover message over to 172.16.1.2.
>
> **[5:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=316)** And I think we're done now, so let's go back to the PC, and see if it has now obtained an IP address via DHCP.
>
> **[5:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=322)** And this is good news, we see a syslog message onscreen that says, "Interface Gig 0/1 has been assigned an IP address via DHCP of 192.168.1.100.
>
> **[5:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=336)** And that was an IP address in that allowed range of addresses that we specified.
>
> **[5:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/dhcp-configuration?u=76281980&t=340)** We can further confirm that by once again issuing the command, show ip interface brief, and we see that interface Gig 0/1 configured to learn IP address information via DHCP, it has now learned the IP address of 192.168.1.100.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), interface (11)
> **Env Vars:** dhcp (21), rr1 (3), dns (1)
> **Versions:** 192.168.1 (13), 172.16.1 (3), 192.168.199 (1)
> **Prerequisites:** set up (5), configure (4)
> **Cross-References:** go back to (2), we talked about (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Network Security

> [↑ Back to Table of Contents](#table-of-contents)

#### Common network security concerns
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=0)** - One of the most important things we can do as a network administrator is to properly secure our network and that's our focus in this chapter.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=7)** Let's begin in this video with a look at some of the more common security threats we might run into.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=13)** One that we hear a lot about is called a D-o-S or a DoS attack that stands for denial of service.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=18)** And with a DoS attack an attacker is flooding the victim's system with an overwhelming amount of traffic such that the victim system cannot do its regular job because it's so busy dealing with all that traffic it's being flooded with.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=33)** An example of a DoS attack is an attacker spoofing their IP address.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=38)** They're pretending to have the IP address of the victim.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=40)** The victim in this case is a server with an IP address of 192.0.2.123 and the attacker is claiming to have that IP address and it is sending a ping to a subnet, and it's sending it to the directed broadcast of that subnet, meaning that all devices that are up and active on that subnet will respond to this ping.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=62)** And this attacker might do a continuous ping where all of the devices on this subnet are bombarding the victim system with these ping responses.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=71)** An even more insidious type of DoS attack is a DDoS attack or a Distributed Denial of Service Attack.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=79)** Here over time, an attacker is going to infect computers around the internet with malware and this is going to create what is called a botnet.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=87)** And the attacker has a server called a Command and Control Server that can go out and simultaneously talk to all members of that botnet and have them simultaneously start attacking the victim, start flooding the victim with an overwhelming amount of traffic.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=102)** And because there can be many many bots around the internet this DDoS attack is typically more destructive than a DoS attack.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=109)** Another very common attack type is social engineering.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=113)** This is where an attacker convinces a user to perhaps divulge information they should not divulge or give them access to a location they should not have access to.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=123)** For example, an attacker might call a receptionist in a business and say, Yeah, this is Bob down in IT and we're having some issues with your computer.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=131)** Can you go ahead and log in and tell me as you type each letter of your password and read those off to me so I can watch those come through?
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=138)** We want to make sure you don't have any issues later today.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=140)** And a percentage of the time they'll be able to convince someone to divulge that type of information.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=146)** You may have also received a suspicious looking email saying you need to go to this link to reset your password with a social media network, perhaps.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=154)** But the email really did not come from that social media network.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=157)** That's an example of a phishing attack.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=160)** Spear phishing makes a phishing attack look a little bit more legitimate because the contents of the email have specific information about you.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=168)** Maybe it comes from your specific bank and you're being told to reset your banking password.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=172)** You think, Well, that's my bank.
>
> **[2:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=173)** It must be legitimate.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=174)** So spear phishing is a more specific type of phishing.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=177)** If those phishing type of attacks come via a text message or SMS, it's called smishing.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=184)** I periodically receive a text message saying something like Your package is out for delivery.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=189)** Here's the link to track it.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=190)** Well, I make sure I don't tap on those.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=193)** And besides using email or text messaging this type of attack could be done over the phone where you have a human talking with you.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=200)** You might have somebody claiming to be from a fictitious entity and they're saying they're monitoring your computer and you've got some issues and they need you to log on and give them access remotely so they can fix it.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=210)** And when that happens, suddenly they have control of your computer and they might lock you out until you pay them money, as an example.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=218)** And that's called vishing.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=220)** And this is certainly not a comprehensive listing of network security issues, but these are some of the more common ones that you might face.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=227)** Now, in our next few videos we want to take a look at a defense strategy that we can deploy on our Cisco routers.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/common-network-security-concerns?u=76281980&t=233)** It's called an ACL, an access control list.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (2), stands for (1), is an  (1)
> **CLI Commands:** make (2)
> **Env Vars:** sms (1), acl (1)
> **Code Keywords:** let (1)
> **Versions:** 192.0.2 (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### Access Control List (ACL) theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=0)** - [Instructor] When it comes to defending ourselves against network security threats, Cisco recommends a layered approach.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=6)** They sometimes call it a security in depth where we have overlapping layers of protection mechanisms.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=12)** And a very common protection mechanism that we might use as one layer in our overall security solution is an ACL, an access control list.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=21)** And an ACL can be used to permit traffic or deny traffic.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=25)** Maybe we have a packet coming in from a specific subnet trying to get to a specific host.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=31)** We might say that's allowed.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=32)** Somebody tries to come in from a different subnet, that could be denied.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=36)** And this rule that might say, this host or this subnet can go to this destination using this port, that rule can be applied either coming into the router so we go into an interface and apply it inbound on that interface.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=49)** Or we could apply it as it exits a router.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=51)** We could apply it outbound on an interface.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=54)** And a common point of confusion here is that an ACL is not just used to permit or deny traffic.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=60)** We could also use an ACL to match traffic.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=63)** Let's say that we're configuring network address translation as an example and we want to match traffic inside of a network.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=70)** In other words, we're trying to match our inside local addresses.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=73)** What we could do is create an access list and say permit this subnet.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=77)** We're not saying we want to allow that subnet.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=79)** We're saying we want to match that subnet.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=81)** So we've got more than one purpose for an ACL.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=84)** And if we think about what ACL stands for, it's an access control list.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=88)** It's a list of rules.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=90)** And each of those rules is called an ace, an A-C-E, an access control entry.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=96)** And a list is going to be processed top down.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=99)** The router will check the first access control entry in a list.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=102)** And if it's a match, then it's going to stop looking at any remaining entries.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=106)** For example, let's say that any subnet, nobody should be able to access a particular host with one exception and that's the IP address of the administrator's computer.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=117)** If I create one rule that says, deny this subnet and then I create another rule that says, oh, but permit the administrator's computer, we'll never see that rule for the administrator's computer when they try to go to that server because they're a member of the subnet that's being denied and that was the first rule so that administrator just got denied before they had an opportunity to be permitted.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=138)** And that suggests that we should put more specific access control entries near the top of a list and the more general ACEs down lower in the list.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=147)** But let's say that a router is analyzing a packet and it doesn't match any of the a ACEs that we've created.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=153)** What does it do in that case?
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=155)** Well, if a packet is being evaluated by an ACL and it doesn't match any ACEs that we create, there's an explicit ACE at the bottom that says deny anything, meaning that if we don't explicitly match something, it's going to be implicitly denied.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=170)** And as we configure these acls, as we're going to do over the next few videos, we could set these up as either numbered lists or named lists.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=179)** - Personally, I'm a fan of the named lists.
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=182)** I think that's a great way for us to give an intuitive name.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=185)** So when I'm looking through the configuration on a router, that intuitive name will hopefully give me an idea as to what this list is doing rather than just seeing an ACL that maybe is numbered 56 and I have to guess what it's doing.
>
> **[3:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=197)** But in the upcoming videos, I'm going to show you how to configure each one.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=200)** And another couple of categories of ACLs are standard and extended ACLs.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=205)** A standard ACL is going to be able to match a source IP address, but we cannot specify a destination.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=212)** Additionally, we cannot specify a protocol.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=214)** With a standard ACL, I could say, I want to block this particular host or permit this particular host, but I don't say what I'm blocking it from or permitting it to.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=223)** So a standard ACL should be applied as close to the destination as possible so we don't drop a packet too early.
>
> **[3:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=230)** Extended is a lot more flexible, however.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=233)** With extended, I can say this source is permitted or denied to this destination.
>
> **[3:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=239)** Additionally, instead of saying it's permitted or denied for all IP traffic, I could be specific.
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=244)** I could say it's permitted for TCB port 443 but maybe it's denied for TCP port 80 as an example.
>
> **[4:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=252)** So we can get down to the port level with an extended list.
>
> **[4:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=255)** But sometimes a standard list is really all we need.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=258)** For example, I mentioned that network address translation a moment ago.
>
> **[4:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=261)** When I'm configuring that, I'll typically use a standard ACL to match a group of IP addresses.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=266)** I don't need an extended list.
>
> **[4:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/access-control-list-acl-theory?u=76281980&t=268)** In fact, in our next video, let's take a look at the configuration of a standard ACL.

> [!info]- Semantic Content
>
> **Env Vars:** acl (13), ace (1), tcb (1), tcp (1)
> **Code Keywords:** let (4), interface (3), for, (1), match, (1)
> **Definitions:** is an  (1), in other words (1), stands for (1), is called (1), is a  (1)
> **Ports:** port 443 (1), port 80 (1)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1), - personally (1)
> **Cross-References:** next video (1)

#### Standard numbered ACL theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=0)** - [Instructor] Let's take a closer look now at a standard numbered access control list.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=5)** First, recall that a standard ACL is only going to be matching source IP address information.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=11)** There's no mention of the destination, there's no mention of specific port numbers.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=16)** It's going to be all traffic within a protocol suite, and the only protocol suite we're focusing on is IP, meaning that a standard ACL is going to permit or deny all IP traffic coming from a source.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=27)** And to indicate that this numbered ACL is a standard ACL as opposed to, for example, an extended ACL, that number needs to be in a specific range.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=37)** We typically use a number in the range of 1 through 99, but if we happen to run out of those, which is not likely, but if we do run out of those, we could use numbers in the range of 1300 through 1999.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=48)** And even though we're going to be focused in our next video on configuring a standard numbered ACL, just realize that a standard ACL could be a named ACL.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=58)** And since a standard ACL is only going to be matching source IP address information, let's place that ACL as close to the destination as possible in larger networks where we have multiple routers, because if we put it on the first top router, as an example, and we want to deny a specific source to get to a specific destination, if we put that deny instruction in our ACL on the first top router, it's going to block our host from getting anywhere beyond that router.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=86)** So let's put that standard ACL as close to the destination as possible.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=90)** And in our next videos, we're doing the configuration.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=93)** We're going to be using something called a wildcard mask, sort of the opposite of a subnet mask.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=97)** You might recall that a subnet mask has a series of contiguous binary ones followed by a contiguous series of binary zeros, and all the ones represent network bits.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=107)** The zeros represent host bits.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=109)** But a wildcard mask is sort of the inverse of that.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=112)** To calculate the wildcard mask, all we have to do is take each octet of your subnet mask and subtract from 255.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=120)** For example, let's say we had a 24-bit subnet mask.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=123)** What is the wild card mask?
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=125)** Well, in that first octet, I'm going to subtract 255 from 255, giving me a zero.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=131)** Same thing for the second octet, same thing for the third octet.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=134)** And in the fourth octet, I'm subtracting zero from 255, that's going to give me a wildcard mask of 0.0.0.255.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=144)** Now let's have you calculate a wildcard mask.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=147)** Let's say that we have a /30 subnet mask.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=150)** In other words, the subnet mask is 255.255.255.252.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=155)** My question for you is, what is the wildcard mask that we might use in an ACL configuration?
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=161)** And feel free to pause the video if you need time to calculate this.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=164)** All right, how did you do?
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=166)** If you subtracted on an octet by octet basis, you should have calculated a wildcard mask of 0.0.0.3.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=175)** And that's a look at the characteristics of a standard numbered ACL, and how a wildcard mask is calculated.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-theory?u=76281980&t=181)** Now join me in our next video as we configure a standard numbered ACL.

> [!info]- Semantic Content
>
> **Env Vars:** acl (15)
> **Code Keywords:** let (6), this. (1)
> **Versions:** 0.0.0 (2), 255.255.255 (1)
> **Cross-References:** next video (2)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for example (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Standard numbered ACL configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=0)** - [Instructor] In this video, we want to configure a standard numbered access control list using the topology you see on screen.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=7)** Here are the goals we have.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=8)** First, we want all IP traffic from PC1 to reach the server at an IP address of 203.0.113.1.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=17)** However, we would like to deny all IP traffic attempting to go from PC2 to the server, and we want to do this using a standard numbered ACL.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=27)** Now let's go out to the live interface and set this up.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=30)** Right now we're sitting on a router acting as a PC1.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=33)** And let's confirm before we do any ACL configuration, that we can reach the server at an IP address of 203.0.113.1, success.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=43)** Now let's make sure that we can currently reach the server from PC2.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=47)** Let's do a ping to 203.0.113.1, success.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=53)** Now it's going to router R1 and set up an ACL such that PC1 will still be able to reach the server, but PC2 will not.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=61)** And we're going to do this with a standard numbered ACL.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=64)** Let's go into global configuration mode with a configured terminal command.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=68)** And I'll say access hyphen list.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=71)** And we'll give some context sensitive help.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=73)** And this is going to remind us of the number ranges that we can use for a standard ACL.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=78)** Typically we'll use a number in the range of 1 through 99, but if we run out, there is an expanded range for standard ACLs, 1300 through 1999.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=88)** And in this example, I'll start with the first number.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=90)** I'll start with a 1, and I'll say access list numbered 1.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=94)** And I want to permit traffic.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=96)** And when I say I want to permit traffic I need to specify the source.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=100)** If I want to specify a single IP address, I could say host and give that single IP address.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=107)** If I wanted to specify a subnet, I could say something like 10.1.0 and then give a wildcard mask of 0.0.0.255.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=116)** Here I want to permit the host of 10.1.1.2.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=121)** I'll press enter and that's going to permit PC1.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=124)** Do I need to give a command to deny PC2?
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=127)** I could, but remember, there is an implicit deny everything at the bottom of my ACL.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=133)** So that's really the only ace I need to have.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=136)** Now I've got an important decision to make.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=138)** I need to decide where do I apply the ACL?
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=141)** Do I want to apply it to gig 0/1, or gig 0/2?
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=145)** Well, I'm going to do it to gig 0/1 and it's going to be inbound coming in from the PCs.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=151)** So while we'll go into interface gigabit 0/1 and I'll say IP access hyphen group.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=157)** Notice we're not saying IP access list.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=159)** It's access group.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=161)** I'll give the number of one, and I want to apply it in the inbound direction.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=165)** Now I'm done with my configuration.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=167)** If I want to view my access control list, I can say show, access hyphen list.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=172)** And even though it doesn't show up here, remember there is an implicit deny any statement at the bottom of each of our ACLs.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=179)** So even though I didn't explicitly say deny PC2, it's going to be implicitly denied.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=184)** And let's confirm that's the case.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=186)** Let's go back to PC1.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=187)** Let's reissue our ping command and it is still successful, which is what we wanted.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=193)** However, when we go to PC2, it should not be successful.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=196)** It should fail, and it is indeed failing.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=199)** So what we've done is created a standard numbered ACL and applied it inbound going into gig 0/1 on R1.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=207)** And the response we received of u.u.u.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=211)** Well, the dot means a ping reply was not received before a timeout occurred.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=215)** And the U says that the router actually sent us a message saying this destination is unreachable.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=221)** Of course, we know it was set by router R1 and the IP address that we were pinging was unreachable, because it was being blocked with our ACL.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/standard-numbered-acl-configuration?u=76281980&t=229)** And that's a look at the configuration of a standard numbered ACL.

> [!info]- Semantic Content
>
> **Env Vars:** acl (10), pc2 (6), pc1 (5)
> **Code Keywords:** let (8), interface (2), case. (1)
> **Versions:** 203.0.113 (3), 10.1.0 (1), 0.0.0 (1), 10.1.1 (1)
> **Definitions:** is an  (3)
> **CLI Commands:** make (2)
> **Prerequisites:** configure (1), set up (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### Extended numbered ACL theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=0)** - [Instructor] Now, that we've discussed the theory and configuration of standard numbered ACLs, in this video, let's consider extended numbered ACLs and whether we're talking about numbered or named, an extended ACL can match both source IP address information and destination IP address information.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=18)** And recall that destination IP address information, that was something that we could not specify with a standard ACL.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=24)** Something else we could not specify with the standard ACL was a specific protocol to permit or deny, but with an extended ACL, we can permit or deny specific protocols within the IP protocol suite.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=36)** For example, we might want to deny Telnet.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=38)** We could deny TCP Port 23.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=41)** We might want to deny TCP Port 80, which is HTTP, both HTTP and Telnet not being very secure protocols, but we might permit HTTPS, the secure version of HTTP which is TCP Port 443.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=56)** And when we're creating an extended ACL, if it's numbered, it needs to be in a specific range.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=60)** Just like we had number ranges for standard numbered ACLs, we've got other number ranges for extended numbered ACLs.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=68)** And typically, we're going to be using a number in the range of 100 through 199, but if you run out, there is an extra range you can use.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=76)** That's 2,000 through 2,699.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=79)** And in our next video, we're going to be configuring an extended numbered ACL, but then in the video after that, we'll be demonstrating an extended named ACL.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=88)** And something else that's different between an extended ACL and a standard ACL, you might recall that a standard ACL, we wanted to place it as close to the destination as possible so we didn't drop traffic too early, but with an extended ACL, we want to place that ACL as close to the source as possible.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=105)** And the logic behind that is since we're able to specify destination IP address information, we're not going to be dropping traffic too soon as we might with a standard ACL and also, if we're going to drop traffic anyway, let's drop it early so it doesn't have to consume bandwidth on the network.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=121)** And that's a look at the theory of extended ACLs.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-theory?u=76281980&t=124)** So join me in our next video as we take a look at the configuration of an extended numbered ACL.

> [!info]- Semantic Content
>
> **Env Vars:** acl (14), tcp (3), http (3), https (1)
> **Ports:** port 23 (1), port 80 (1), port 443 (1)
> **Code Keywords:** let (2)
> **Cross-References:** next video (2)
> **Analogies:** for example (1), just like (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Extended numbered ACL configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=0)** - [Instructor] In this video, we want to configure an extended numbered ACL, and here are the goals we have.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=5)** We do not want PC1 to be able to reach the server at 203.0.113.1 using Telnet.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=13)** PC2, however, should be allowed to contact the server using Telnet, and all other ports should be allowed from either PC to the server.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=21)** Now let's go out to the live interface and set this up using an extended numbered ACL.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=27)** To meet our goals in this demonstration, we want to permit the 10.1.1.0/24 network to reach 203.0.113.1 using all ports, except, we do not want PC1 to be able to reach that server using Telnet.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=42)** The question is, which ACL rule, remember, we call that an ACE, an access control entry, what do we want to give first?
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=49)** If we first said we want to permit the entire subnet to reach the server with the entire IP protocol suite and then we said we wanted to deny PC1 from reaching the server using Telnet, that would not work.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=61)** The reason is, ACLs are processed top down, and as soon as a match is made, the evaluation is done.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=68)** So in this example, if we gave the instruction to permit the entire subnet using the entire IP protocol suite first, PC1's Telnet traffic would be a match for that rule and the Telnet traffic would be allowed without ever considering that second access control entry that says deny Telnet traffic from PC1 to the server.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=87)** In our example, let's first say that we want to deny Telnet traffic coming from PC1, then we'll allow everything else.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=94)** Now, let's go over to router R1 and set this up.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=97)** We'll go into global configuration mode, and I'll say access-list, and we can use context sensitive help if we need to be reminded about the range of numbers that we can use.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=108)** We typically are going to use the number in the range of 100 through 199, but if we happen to run out, there is an expanded range we can use.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=116)** I'm just going to start with the number 100, and I'll say deny.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=121)** Let's give some more context sensitive help.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=123)** And you see I can deny different protocols, including TCP protocols.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=128)** What I'm going to do is say deny tcp, and then later in this command, I'm going to specify TCP port 23, which is the Telnet port.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=136)** And when I'm denying TCP, I could do that for an entire subnet.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=139)** I could give a subnet address and then give a wildcard mask.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=144)** Here, I'm only wanting to deny traffic from PC1, specifically Telnet traffic, and since I'm only denying a specific host, I'll say host and give the IP address of PC1.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=154)** That's 10.1.1.2.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=156)** And with an extended ACL, remember, we can specify destination IP address information, and the destination is the server.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=164)** It's a single IP address, so again, I'm going to use the host keyword, and I say my destination is 203.0.113.1, and now I can say EQ for equals and I can specify a TCP port number, or there are several keywords that we could use to indicate which TCP protocol we want to drop.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=184)** You see, I could explicitly say Telnet, but I'm just going to say 23.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=189)** Either one would be acceptable.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=190)** We'll enter that, and now let's permit all other traffic.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=194)** Using the same access list number of 100, I'll say access-list 100, and now I want to permit the entire IP protocol suite from our subnet to any destination, and our subnet is 10.1.0.0.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=209)** We've got a 24-bit subnet mask, and we need to specify the wildcard mask for that, and recall from our previous discussion, the wildcard mask would be 0.0.0.255.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=221)** That's my source.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=222)** What's the destination?
>
> **[3:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=224)** Any destination is fine, so I'll say any.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=226)** And by the way, I could have used that any keyword for the source because it was for any traffic coming in to gig 0/1, but I wanted us to take a look at how we could specify an entire subnet with a reminder that we use a wildcard mask, not a subnet mask.
>
> **[4:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=241)** Now let's apply that ACL for traffic coming into gig 0/1.
>
> **[4:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=245)** Let's go into interface gigabit 0/1, and I'll say ip access-group.
>
> **[4:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=251)** For access list 100, we want to apply that in the inbound direction.
>
> **[4:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=255)** Now, I could have applied that to interface gig 0/2, but in that, case we would need to apply it in the outbound direction.
>
> **[4:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=262)** Let's end our configuration, take a look at our access list.
>
> **[4:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=264)** I'll do a show access-list, and we see our two ACEs.
>
> **[4:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=270)** Again, there is a deny any any that's implicit at the end of this.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=274)** It doesn't show up, but it's there.
>
> **[4:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=276)** Now let's go over to our PCs and see if we've met our goals.
>
> **[4:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=279)** First, on PC1, let's see if we can contact the server using HTTPS, that's port 443.
>
> **[4:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=286)** To do that from a router, I could say Telnet 203.0.113.1, but I'm not going to use the Telnet port of 23, I'm going to say use 443.
>
> **[4:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=296)** And it's open, we have a connection.
>
> **[4:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=298)** I'm going to break out of that with a control shift six and then I'll press X.
>
> **[5:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=302)** I'll say I want to disconnect that session, and I'll confirm that disconnection.
>
> **[5:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=306)** Can I reach that server using port 80, which is just regular HTTP?
>
> **[5:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=312)** We should be able to, it's open as well.
>
> **[5:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=314)** Let me exit out of that.
>
> **[5:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=315)** Once again, disconnect.
>
> **[5:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=318)** Can I ping the server at 203.0.113.1?
>
> **[5:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=322)** Yes I can!
>
> **[5:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=324)** So it seems I'm able to reach that server using a variety of protocols.
>
> **[5:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=327)** However, we should not be able to reach that server using the default Telnet port of 23.
>
> **[5:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=332)** So if I say Telnet to 203.0.113.1 and press enter, it says destination is unreachable.
>
> **[5:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=341)** So we've succeeded in meeting that specific goal.
>
> **[5:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=344)** Now let's go over to PC2, make sure it can reach the server.
>
> **[5:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=347)** Can it ping 203.0.113.1?
>
> **[5:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=351)** Yes it can.
>
> **[5:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=352)** Can it Telnet to 203.0.113.1 on port 443, that's HTTPS?
>
> **[5:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=359)** Yes, it can.
>
> **[6:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=360)** Let me exit out of that.
>
> **[6:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=363)** What about port 80, the regular HTTP port?
>
> **[6:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=367)** Yes it can.
>
> **[6:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=369)** And here's the big test.
>
> **[6:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=371)** Can it reach the server using Telnet?
>
> **[6:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=374)** PC1 was not allowed to do that.
>
> **[6:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=377)** Is PC2 allowed to do that?
>
> **[6:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=379)** It should be allowed, and it is, and we're presented with a password prompt.
>
> **[6:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=383)** So we have successfully met our criteria for this demonstration, and that's a look at how to configure an extended numbered ACL.
>
> **[6:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=389)** In our next video, we'll take a look at how to configure an extended named ACL.
>
> **[6:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-numbered-acl-configuration?u=76281980&t=393)** I'll see you back for that video in just a moment.

> [!info]- Semantic Content
>
> **Env Vars:** pc1 (10), acl (7), tcp (5), pc2 (3), https (2)
> **Code Keywords:** let (13), interface (3), except, (1), else. (1), this. (1)
> **Versions:** 203.0.113 (8), 10.1.1 (2), 10.1.0 (1), 0.0.0 (1)
> **Ports:** port 443 (2), port 80 (2), port 23 (1)
> **Prerequisites:** configure (3)
> **Cross-References:** later in (1), next video (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)

#### Extended named ACL configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=0)** - [Instructor] In this video, let's take a look at how to configure another extended access list.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=4)** But instead of using a numbered approach, we want to use a named approach.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=8)** And a big advantage of using a named ACL is that we can use intuitive naming instead of just saying that we have an access list numbered 150.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=17)** We could have a descriptive name so we know it's perhaps to prevent certain ports from getting to a particular server.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=23)** And these named ACLs, they're not limited to extended ACLs.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=28)** We could have a standard named ACL as well.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=31)** And something else we'll demonstrate in this video is how we can go in and edit an existing ACL.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=37)** Keeping in mind that the order of the rules, the access control entries is critical.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=42)** Maybe I want to insert a new access control entry between a couple of existing access control entries.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=47)** We'll see you how to do that in this video.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=49)** Now let's take a look at the specific goals we have for this lab.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=52)** We want to prevent PC one from reaching the server using Telnet or HTTP.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=58)** Those are not secure protocols.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=60)** However, we do want to allow PC one to reach the server using any other port.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=64)** And PC two should be able to reach the server using any port.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=68)** Including Telnet and HTTP.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=70)** Now, let's go out to the live interface and set this up.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=73)** Let's begin our configuration on R1 by going into global configuration mode.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=78)** And instead of saying access list and giving a number, when we're setting up a named access list, we say IP access hyphen list.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=86)** And we can give some context to sensitive help.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=88)** And this is confirming for us that we could use this named approach with either a standard or an extended ACL.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=94)** And based on the goals of the lab where we're trying to prevent PC one from using specific protocols or services on the server, I'm going to name this ACL, BLOCK PC1 SERVICES.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=106)** I want to say it's an extended ACL.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=109)** And I'll say the name is BLOCK_PC1_SERVICES.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=117)** Now you'll notice that I am in extended named access list configuration mode.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=122)** and I can start to enter my ACEs.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=124)** I'll begin by saying, deny tcp, and this is going to be for port 23 for Telnet, I want to deny a TCP port for host 10.1.1.2, that's PC one.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=137)** Going to a destination host of 203.0.113.1, that's the server, and I can say eq 23.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=146)** To say my TCP port equals 23.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=149)** And to meet the goals of the lab, I could enter a very similar command with a different port number, port 80 for HTTP.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=155)** But before I do that, I want to show you how we can edit an existing ACL.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=159)** So, let's imagine that currently we do not have that requirement of blocking HTTP traffic from PC one to the server and everything else is going to be allowed.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=168)** Remembering that implicit deny any any at the bottom, I'm going to say permit ip any any.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=176)** So, any source to any destination using any IP protocol, that's going to be allowed.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=181)** But that doesn't get evaluated until we first evaluated that ACE that says, deny Telnet traffic from PC one to the server.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=190)** We've created our ACL. Let's see how we apply it.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=193)** Let's go into interface gig 0/1 and we'll say ip access-group.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=200)** And I'll give the name which was BLOCK_PC1_SERVICES.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=207)** And I want to apply this in the inbound direction going into gig 0/1.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=211)** And perhaps now I want to look at my ACL.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=214)** I can say, show access-list.
>
> **[3:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=217)** And it shows me the two ACEs that I entered.
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=219)** It does not show me the deny any any that's implicit at the bottom.
>
> **[3:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=224)** But let's say at this point I realized I also need to go in and block HTTP traffic from PC one to the host.
>
> **[3:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=232)** If I just added an additional ACE at this point and it was after these two ACEs, that would not work because that second ACE would be permitting everything before we had an opportunity to block HTTP traffic.
>
> **[4:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=245)** But notice these numbers, 10 and 20.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=247)** These are sequence numbers.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=249)** They're specifying the order of the ACEs.
>
> **[4:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=252)** And what I want to do is inject an ACE between sequence numbers 10 and 20.
>
> **[4:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=257)** So, it gets evaluated before we say permit ip any any.
>
> **[4:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=260)** Here's how we can do that.
>
> **[4:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=261)** Let's go back into global configuration mode.
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=263)** And I'll go back into extended named ACL configuration mode for BLOCK PC1 SERVICES.
>
> **[4:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=269)** I'll say ip access-list.
>
> **[4:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=272)** It's an extended ACL and it's named BLOCK_ PC1_SERVICES.
>
> **[4:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=280)** And I want to show you something in context sensitive help.
>
> **[4:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=282)** Notice that we can specify a sequence number, well I want to inject the new ACE between sequence numbers 10 and 20.
>
> **[4:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=290)** So I'm going to give a sequence number of let's say 15.
>
> **[4:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=293)** And this ACE says, I want to deny tcp traffic from the host of 10.1.1.2, PC one, going to a host of 203.0.113.1 using port 80, which is our HTTP port.
>
> **[5:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=309)** And this ACL is already applied to the interface.
>
> **[5:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=311)** I don't need to do that again, but if I look at my access list now by saying, show access-list, we see that we have inserted before the permit ip any any, we've inserted our other ACE blocking HTTP traffic.
>
> **[5:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=327)** Now let's confirm that PC one cannot reach the server using either Telnet or HTTP.
>
> **[5:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=332)** First, can I ping it from PC one?
>
> **[5:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=334)** Ping 203.0.113.1. Yes I can.
>
> **[5:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=339)** Can I Telnet to it? I should not be able to 203.0.113.1.
>
> **[5:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=344)** And it says, the destination is unreachable and that meets one of our goals, can I Telnet to 203.0.113.1 on port 80, HTTP?
>
> **[5:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=354)** No, destination unreachable.
>
> **[5:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=355)** However, what if I Telnet to port 443 HTTPS, that should be allowed, and it is.
>
> **[6:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=362)** It says we're open and I'll escape out of that.
>
> **[6:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=366)** Disconnect that session.
>
> **[6:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=367)** And our goals also stated that PC two should be able to contact the server using any port.
>
> **[6:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=373)** So let's attempt Telnet just as a test.
>
> **[6:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=375)** I'll say Telnet to 203.0.113.1 and it is successful while PC one was not.
>
> **[6:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/extended-named-acl-configuration?u=76281980&t=383)** And that confirms that we have successfully met each goal for this extended named ACL.

> [!info]- Semantic Content
>
> **Env Vars:** acl (13), http (10), ace (7), block (2), pc1 (2)
> **Code Keywords:** let (12), interface (3)
> **Versions:** 203.0.113 (6), 10.1.1 (2)
> **Ports:** port 80 (3), port 23 (1), port 443 (1)
> **Analogies:** imagine (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### The need for switch port security
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=0)** - [Instructor] In our past few videos, we've been seeing how ACLs could help secure a Cisco router.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=6)** Now let's shift our focus to a Cisco Catalyst switch and a very common security feature called Port Security.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=12)** Port Security is going to be able to limit the number of Mac addresses that can be learned off of a switch port.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=17)** Why would that be important?
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=19)** Well, recall how a switch works.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=21)** A switch is going to examine frames coming into its various ports, and it's going to check out the source Mac addresses on those frames and construct a Mac address table.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=30)** And that means the switch knows that a certain Mac address resides off of a specific port.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=35)** And if we had an attacker attached to the switch, like we see here, and they're running some sort of sniffing program on their laptop, and they're trying to sniff traffic going to PC1, they would not be able to see any of that traffic, because when the switch had a frame destined for PC1, it knows PC1 lives off of Gig 1, and it's not going to send a copy to the attacker, it's only going to send it to PC1.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=57)** However, what if that attacker we're able to fill the switch MAC table to capacity where it could not learn any additional Mac addresses?
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=66)** In a case like that, when a new device attaches that switch is going to act much like an ethernet hub that floods traffic out all ports other than the port on which it was received.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=76)** So let's say that the Mac address table is full, because the attacker has flooded the switch with a lot of Mac addresses and it has consumed the capacity of this switch Mac address table.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=87)** Now PC1 is added, and when somebody sends traffic to PC1, the switch was not able to learn PC1's Mac address, because its Mac address table was full.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=97)** What does the switch do?
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=98)** Well in an attempt to get the frame to its intended destination, the switch is going to flood that frame out of all ports other than the port on which it was received.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=107)** So in this case, when we're trying to reach PC1, yeah a copy of that frame is going to go to the attacker as well.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=114)** And the type of attack that the attacker launched in that example is called a Mac flooding attack, where the attacker sends a series of Mac addresses to the switch until the switch Mac address table fills up.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=125)** And different switch models have different capacities in their Mac address table.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=129)** But the idea is this, the attacker is going to send a frame with one Mac address, it's going to send another frame and another frame with another Mac address, and so on and so on.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=138)** It might do that thousands of times.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=140)** And at a certain point that attacker can fill up that switch MAC address table.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=145)** A utility they might use to do that is called macof, which stands for Mac Overflow.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=150)** Here you see a video of me running macof in a lab environment on a Cisco Catalyst switch.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=155)** And in about three seconds it filled up the switch mac address table.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=159)** You see initially the switch had a capacity to store 8,170 Mac addresses, but after about three seconds I had sent in more than 8,170 frames each claiming to be from a different Mac address.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=172)** And you can see that the total Mac address space available now is zero.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=177)** Meaning that when a new device attaches to the switch, any frames going to that newly attached device are going to be flooded everywhere, except the port on which that frame was received.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=187)** But it's going to be flooded to all other ports, including the port to which our attacker might be listening and capturing those frames.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=194)** How do we protect ourselves from that?
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=196)** Well, the good news is Cisco Catalyst switches support a feature called Port Security.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/the-need-for-switch-port-security?u=76281980&t=201)** Now join me in our next video and we'll set up Port Security.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (22), let (2), case, (1), this, (1)
> **Env Vars:** pc1 (8), mac (2)
> **Definitions:** is called (2), stands for (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Port security configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=0)** - [Instructor] In this video, we want to configure port security on a Cisco Catalyst switch to prevent an interface on a switch from being flooded with thousands and thousands of MAC addresses, which could fill that MAC address table to capacity.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=13)** Specifically, here's what we want to do in this demonstration.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=16)** We want to go into a Cisco Catalyst switch, and for interface to fast ethernet 1/0/2, we want to limit the number of MAC addresses that can be learned off of that interface to four.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=27)** And if the port security feature detects a violation, somebody attempts to connect a fifth MAC address to that port, what are we going to do in response to that?
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=35)** We're going to see three different options in this video, and we want to set our violation mode to protect.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=40)** And finally, we'll verify our port security configuration.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=44)** We're sitting on our Cisco Catalyst switch now, and we want to configure port security.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=48)** And again, port security can be used to limit the number of MAC addresses that we learn off of a port.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=53)** In fact, we could even say that specific MAC addresses are allowed, other MAC addresses are disallowed.
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=59)** And we want to set this up on fast ethernet 1/0/2.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=63)** So let's go into global configuration mode, and then into interface configuration mode 4, fast ethernet 1/0/2, and there's a prerequisite to configure port security on an interface.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=75)** This interface must be an access port, as opposed to something like a trunk port.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=79)** So, I'm going to hard code this to be an access port, which belongs to one, and only one VLAN.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=83)** I'll say switchport mode access, and now let's enable port security on this port, I'll say switchport port-security and we can press Enter.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=96)** And that command enables port security on the interface, but now we can specify the maximum number of MAC addresses that are learnable, and allowed off of this single port.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=106)** And in our example, we want to limit the number of learnable MAC addresses to four.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=110)** To do that, I can say switchport port-security maximum, and give a maximum number of MAC addresses, and I'll say four.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=119)** And now that we've said we're going to learn a maximum of four MAC addresses off of this port, we now need to decide, are those four MAC addresses going to be the first four MAC addresses that this port happens to see?
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=130)** Or do we want to specify the four MAC addresses that we want to allow?
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=134)** We do have the option of saying switchport port-security, mac-address, and we could specify a 48 bit MAC address in hexadecimal notation.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=144)** And since we want to allow four MAC addresses, we could enter this command four times.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=149)** But as you can imagine, this is not going to be a very scalable solution, there would be a lot of administrative overhead to manage individual MAC addresses in a large enterprise.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=157)** What we could do instead is use a feature called sticky learning.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=162)** Sticky learning says that we will dynamically learn the first four MAC addresses in our case, that appear on this port, and we're going to remember those MAC addresses, and only those four MAC addresses are going to be allowed on this port.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=174)** To enable this I'll say, switchport port-security, mac-address sticky.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=181)** And now this port is configured to dynamically learn the first four MAC addresses that it sees on this port, and store them in its security table.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=188)** But it's important to understand that these MAC addresses are entered into the switch's running configuration, meaning if I were to reboot the switch right now, before copying the running configuration to the startup configuration, those MAC addresses would be forgotten.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=202)** So, after the switch does learn those MAC addresses, we might want to do a copy run start to save our running config to our startup config.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=210)** And now we have another decision to make, what if there is a port security violation?
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=214)** How do we respond to that?
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=215)** Well, we have three options, we can say switchport port-security violation, and let's give some context sensitive help.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=225)** We've got these three options, protect, restrict, and shut down.
>
> **[3:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=230)** Let's talk about each one beginning with protect.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=233)** If we're set to protect, then the frames from that fifth MAC address, they would be dropped, but we would continue to allow frames from those four allowed MAC addresses.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=242)** If we're set to restrict instead of protect, it's very similar behavior, we're still going to drop frames from that fifth MAC address while still allowing traffic from the four allowed MAC addresses, but something extra that the restrict option does, that protect does not, is the restrict option is going to increment the switch's security violation counter, and I'll show you in a few moments how we can view that counter.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=266)** And finally, somewhat of a harsh response to a switchport security violation is shutdown.
>
> **[4:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=272)** The logic here is, if a security violation has occurred, malicious things might be going on, and to be safe, we're going to shut the port down entirely, not only do frames from that fifth MAC address get dropped, frames from our four allowed MAC addresses get dropped as well, and the port is going to go into something called an err disabled state, but one of our goals for this demonstration was to set the violation mode to protect.
>
> **[4:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=295)** So, we'll say switchport port-security violation protect, we'll press Enter, and we're done with our configuration.
>
> **[5:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=302)** Let's exit out of this, and we can see information about our switchport security configuration with the command show port-security.
>
> **[5:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=311)** And you see that we have one port that is configured for port security, fast ethernet 1/0/2, and the maximum number of MAC addresses that are learnable off of that port, that's four.
>
> **[5:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=321)** We haven't currently learned any addresses off of that port, and we have not had any security violations.
>
> **[5:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=327)** This is that security violation counter I was telling you about a moment ago.
>
> **[5:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=330)** And we can see that our security action is protect.
>
> **[5:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/port-security-configuration?u=76281980&t=334)** And that's a way that we can help defend ourselves against a MAC flooding attack using our port security.

> [!info]- Semantic Content
>
> **Env Vars:** mac (32), vlan (1)
> **Code Keywords:** switch (8), interface (7), let (5), finally, (2), case, (1)
> **Prerequisites:** configure (3), prerequisite (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 3. Wireless Networks

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to wireless LANs (WLANs)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=0)** - [Instructor] In this video, we want to consider a few different types of wireless local area networks.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=5)** First up is an ad hoc wireless LAN.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=7)** This is where we're not using any sort of a network infrastructure.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=10)** We have two devices that are communicating directly with one another.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=13)** Maybe I'm sending my spouse a photo from my smartphone to her smartphone, and I'm not doing that using a network infrastructure.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=20)** Using wireless technologies, I'm sending that photo directly from my phone to her phone.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=25)** That is an ad hoc wireless LAN where we only have two devices communicating directly between one another.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=32)** It's much more common, however, to see an infrastructure wireless LAN.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=36)** This is where we have one or more access points in our network and our wireless devices, such as our laptops, smartphones, Internet-of-Things devices, such as doorbells and smart refrigerators, where they communicate with a wireless access point where the access point takes the data from the radio signals and converts that to data it sends over an ethernet network.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=57)** Here, the wireless client is attempting to reach the server, it sends data via wireless over to the AP, the access point, which then takes that data and sends it over a wired ethernet network.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=66)** However, sometimes we might want to place an access point in a particular location, but maybe that location does not have ethernet connectivity.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=75)** For example, maybe it's out in a parking lot and it would be difficult to run ethernet through the paved parking lot over to a guard shack.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=83)** Or maybe the access point needs to be in a nearby building to a primary structure, but there's no ethernet run over to that other building.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=90)** What we can do is use a mesh wireless LAN With a mesh wireless LAN, our mesh access point doesn't have to be connected to ethernet.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=99)** What it's able to do is receive the radio signal in from the wireless client or another mesh access point and regenerate that signal onto the next access point or mesh access point.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=110)** Here, Wireless Client 1 wants to reach the server and the access point it's associated with is a mesh access point, it's not connected to ethernet, and it's going to relay that signal by regenerating it to another mesh access point that's not connected to ethernet.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=125)** It's going to relay the signal over to an access point that is connected to ethernet, and that's going to send the data out to the server.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=131)** And when we're in environments that need more than one access point to give us a good coverage area, we have to consider how those different access points are going to be managed.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=140)** We could have autonomous access points, and if we use autonomous APs, those are going to be managed individually.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=147)** Here we have three different autonomous access points, and to manage this wireless network, I would have to connect to AP1, configure it, then connect to AP2, and configure it and connect to AP3 and configure it separately.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=159)** And that might not be a big deal for just three or four access points, but once we get beyond about four access points, this is just not a scalable solution where we have to configure every access point individually.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=170)** What's the alternative?
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=171)** Well, in larger environments, we can use lightweight access points.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=175)** Lightweight access points are managed from a centralized wireless LAN controller.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=181)** And by having this single point of administration, this is going to make our wireless network much more scalable.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=186)** I can go to that one location, make a configuration change on the wireless network, and that change gets propagated out to all of my different APs.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=194)** And the protocol that's spoken between the wireless land controller and the APs, and a lightweight solution is typically CAPWAP, and that stands for Control and Provisioning of Wireless Access Points.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=205)** So using the CAPWAP protocol, we can go to one centralized location which is our interface for the wireless LAN controller, do all of our configuration there, and then let the changes be propagated out to the different access points.
>
> **[3:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-wireless-lans-wlans?u=76281980&t=216)** And that's a look at a few different design options for wireless networks.

> [!info]- Semantic Content
>
> **Env Vars:** lan (7), capwap (2), ap1 (1), ap2 (1), ap3 (1)
> **Definitions:** is an  (2), is a  (1), stands for (1)
> **Prerequisites:** configure (4)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (2)
> **Code Keywords:** interface (1), let (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### WLAN antennas
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=0)** - Wireless networks send data using radio waves or sometimes we might call those electromagnetic waves and we need antennas to send out those waves or to receive waves coming in from client devices.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=14)** And in this video we want to talk about different types of antennas.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=17)** There are two main categories I want you to know about, omnidirectional and directional.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=22)** First consider omnidirectional, here we want to get a wireless coverage area going out in all directions from the antenna.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=30)** However, since we're trying to receive radio signals from all directions and be able to transmit those signals out in all directions, that's going to give us lower gain which is going to limit how far our transmissions can go because our path is not focused.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=42)** But it does give us a broader coverage area.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=45)** We might put an omnidirectional antenna, for example in the middle of a large office to give coverage across that entire office space.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=52)** And at one type of antenna is called a dipole antenna.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=55)** As an example, let's consider how a dipole antenna radiates electromagnetic waves.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=60)** We're going to have an oscillator that's going to alternate charges on wires back and forth between positive and negative.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=67)** Let's say we have a couple of wires attached to this oscillator.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=71)** And on one wire we've charged it with positive charges, and with the other wire, we've charged it with negative charges.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=77)** Well, in a case like that, there's going to be current flow from the positive to the negative.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=82)** So on the wire on the left we have current going down and the wire on the right we've got the current coming back up.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=88)** And this current flow over a wire is going to generate a field around that wire.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=93)** However, these wires are parallel with one another.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=97)** They're canceling out one another's fields so this is not a good antenna.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=100)** We're not radiating anything out.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=102)** Now it's oscillator, it's going to switch polarities and suddenly the current flow goes in the other direction.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=107)** And that's what the oscillator does.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=109)** It keeps switching polarities between these two wires, but as they try to radiate their signals, they cancel each other out.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=116)** However, what if we took the top of those two wires and bent them down a little bit at 90 degree angles apart from one another?
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=123)** In a case like that if we charged one wire with positive charges and the other wire with negative charges as the current flow went from positive to negative, you'll notice across that top plane the wires are not interfering with one another.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=138)** We've got a series of positive charges and then a series of negative charges.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=141)** And as we keep alternating this back and forth that's going to generate a radio wave.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=146)** The length of this dipole antenna is one half of the wavelength.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=150)** And when we alternate the charges again and we have negative on the left and positive on the right we're going to get the other half of that wavelength.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=157)** But by doing this alternation back and forth this dipole antenna is going to start to radiate radio waves.
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=163)** And it can also receive those radio waves.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=166)** A directional antenna, on the other hand, that's going to focus its transmission and reception in a particular direction.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=172)** And because it's focusing its energy in a particular direction, we're going to have higher gain.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=177)** We'll be able to go further.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=178)** We probably would not want to use this in the middle of an office space because in that environment we don't want directed coverage We want widespread coverage.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=186)** But if I'm trying to send a wireless signal down a hallway or maybe between a couple of buildings that might be an opportunity to use a directional antenna.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=196)** In fact, let me give you a couple of examples of directional antennas.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=199)** First up, we have a Yagi antenna.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=201)** This is a directional antenna that we might use over shorter distances, maybe we have a couple of nearby buildings and on the roof of each building, we have a Yagi antenna and we could use that to communicate wirelessly between those two buildings.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=215)** If we're going over much larger distances, though not just nearby buildings, in that case we need our signal to carry further.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=222)** And a Yagi antenna might not be our solution.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=225)** Instead, we might turn to a Parabolic antenna.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=227)** This is typically going to give us more range for a transmission than a Yagi antenna.
>
> **[3:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-antennas?u=76281980&t=232)** And that's a look at antenna theory.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - wireless (1)

#### WLAN frequencies and channels
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=0)** - [Instructor] We know that wireless networks use radio waves to send and receive data.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=4)** And in this video we want to take a look at the specific bands or frequencies that are going to be used by those radio waves.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=11)** We have three main frequency bands that are used: the 2.4 gigahertz band, the 5 gigahertz band, and a newly added band introduced with Wi-Fi 6E is the 6 gigahertz band.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=23)** Let's consider each of these, beginning with the 2.4 gigahertz band.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=27)** We have 14 channels available, and the distance between each channel is 5 megahertz, with one exception.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=34)** There's a 12 megahertz channel separation between channels 13 and 14.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=39)** However, it's really unlikely that you'll ever use channel 14.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=43)** It's only allowed in Japan, but even then you'll still only use it with the very old wireless standard of IEEE 802.11b, so we will probably not be using that channel 14.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=55)** And some network administrators, in an attempt to prevent one access point from interfering with another access point, will select different channels.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=63)** They might say, well, I'll put one access point on channel 1 and I'll put another access point on channel 2 and so on.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=69)** Well, it doesn't really work that way.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=71)** When I say I'm using a particular channel on an access point, that channel specifies my center frequency.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=77)** We're actually consuming a 22 megahertz frequency range with 5 megahertz per channel, which means that we're going to be spanning frequencies for a little bit more than four channels.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=88)** That means, in order to prevent adjacent access points from overlapping in their frequencies, we have to have at least five channels of separation.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=96)** If I do put one access point on channel 1, I need to add five to that, so I'll then put my next access point on channel 6.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=104)** And if I need to add another adjacent access point, I'll add five channels to channel 6.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=109)** That's going to give me channel 11.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=111)** And those are typically the channels that we'll use in a 2.4 gigahertz network, channels 1, 6, and 11.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=117)** And again, it's unlikely that you would be using that channel 14, but if you are in Japan and if you are using 802.11, it is possible.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=126)** But assuming we're only going to be using channels 1, 6, and 11, that would be no problem.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=130)** If I only had three access points, I would put one access point on channel 1, one access point on channel 6, and one access point on channel 11.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=138)** But what if I had additional access points?
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=141)** How do I prevent one from interfering with another?
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=143)** Well, what we can do is use a honeycomb design.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=146)** For example, imagine this represents the coverage area for an access point using channel 1.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=152)** We're going to make sure that adjacent access points are only going to be using channels 6 and 11.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=157)** Maybe we put channel 6 up above and channel 11 down below.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=162)** And between channels 1 and 6, to be unique, we'll put channel 11 there.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=166)** And between channels 1 and 11, we'll put channel 6.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=169)** And we could extend this honeycomb pattern indefinitely and never have adjacent access points using the same channel.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=176)** And the good news with 5 gigahertz channels is we have many more non-overlapping channels.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=181)** So channel overlap, it's not as much of an issue with 5 gigahertz channels.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=185)** In fact, many access points, they'll simply listen to neighboring access points and automatically select what they consider to be an appropriate non-overlapping channel.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=194)** And I mentioned that a new frequency band was recently introduced.
>
> **[3:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=197)** It's the 6 gigahertz band.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=199)** This band was introduced as an extension to Wi-Fi 6.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=202)** And Wi-Fi 6, that's the IEEE 802.11ax standard.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=207)** Well, by adding on the 6 gigahertz band, Wi-Fi 6 becomes Wi-Fi 6E.
>
> **[3:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=213)** And this 6 gigahertz band is also used by Wi-Fi 7, which is the IEEE 802.11be standard.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=220)** And it's going to be used by the upcoming wi-Fi 8 standard, which is IEEE 802.11bn.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=226)** And the 6 gigahertz band opens up another range of frequencies that we see here.
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=231)** In fact, if we're using the 6 gigahertz band, we're adding 14 non-overlapping channels.
>
> **[3:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=236)** If those are 80 megahertz channels, or we have bonded together four 20 megahertz channels, and if we bonded eight of those 20 megahertz channels together, that would give us a bonded channel of 160 megahertz.
>
> **[4:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=248)** And we can have seven of those 160 megahertz channels that do not overlap in this 6 gig band.
>
> **[4:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-frequencies-and-channels-24998889?u=76281980&t=255)** And that's a look at our three different frequency bands that we're going to be using in wireless networks: the 2.4 gig band, the 5 gig band, and now, the 6 gig band.

> [!info]- Semantic Content
>
> **Versions:** 2.4 (4), 802.11 (1)
> **Env Vars:** ieee (4)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### WLAN standards
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=1)** - [Instructor] In this video, we want to consider some different wireless LAN standards.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=4)** And for completion sake, here's a listing of some of the more popular earlier standards up at the top of the table.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=10)** We won't spend much time talking about these, but notice it all began in 1997 with the IEEE 802.11 standard.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=17)** All of these standards are going to be IEEE standards.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=20)** And the original theoretical throughput or bandwidth was one or two megabits per second.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=24)** And you'll notice that most of the early standards used the 2.4 gigahertz band while the .11a standard, it used the five gigahertz band.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=33)** Under transmission method, you'll see a variety of acronyms.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=36)** These are describing how data is encoded wirelessly, and some of these early standards used Direct-Sequence Spread Spectrum, DSSS, or Frequency-Hopping Spread Spectrum, FHSS.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=50)** These standards had a lot of error-checking built in, and they weren't terribly efficient.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=54)** A lot of bandwidth was used just to make sure that the data was not corrupted.
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=59)** And also notice the OFDM transmission method.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=62)** That's Orthogonal Frequency-Division Multiplexing.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=65)** We still see that used in some of our modern wireless standards.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=68)** In fact, we have a video coming up later in this chapter that's going to describe the operation of modern transmission methods including OFDM.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=75)** And things really start to speed up in 2009 with IEEE 802.11n.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=81)** And there were some different variants of .11n.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=84)** The specs I'm giving you here on this table, they're from the IEEE specification, and .11n could use both the 2.4 and the 5 gigahertz frequency bands, and it gave us a theoretical maximum bandwidth of 600 megabits per second.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=97)** And you can see that over the years, that maximum theoretical bandwidth, it continued to grow.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=102)** For example, in 2014, the IEEE spec of .11ac came out.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=107)** It supported the five gigahertz band and the maximum theoretical bandwidth exceeded a gig going all the way up to 1.3 gigabits per second.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=115)** And it used OFDM as its transmission method.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=117)** And again, that's Orthogonal Frequency-Division Multiplexing.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=121)** Then in 2019, 802.11ax came out.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=125)** That's also known as Wi-Fi 6.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=127)** And like .11n, .11ax could support both the 2.4 and 5 gig bands.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=134)** And notice the speeds that we can achieve with Wi-Fi 6.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=137)** We're approaching 10 gigabits per second with a maximum theoretical bandwidth of 9.6 gigabits per second.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=143)** And instead of using OFDM, Wi-Fi 6 uses OFDMA.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=148)** That's Orthogonal Frequency-Division Multiple Access.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=151)** And we'll discuss in an upcoming video the distinction between OFDM and OFDMA.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=157)** Even more recently, there was an extension added to Wi-Fi 6.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=161)** It's called Wi-Fi 6E, and that adds an additional band of frequencies, the six gigahertz band.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=167)** That's going to give us even more available channels.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=170)** And continuing with IEEE 802.11be in 2024, we can use all three bands of frequencies, the 2.4, and 5, and 6 gig bands.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=179)** We can use all of those simultaneously for the same communication flow.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=183)** And that's made possible with a feature called Multi-Link Operation or MLO.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=188)** That's one reason that we have a maximum theoretical bandwidth of 46 gigabits per second.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=194)** And the next big Wi-Fi standard we're anticipating is IEEE 802.11bn.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=200)** That's going to be Wi-Fi 8.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=201)** It's scheduled to be released in 2028, and it has the goal of reaching 100 gigabits per second of maximum theoretical bandwidth.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=210)** And Wi-Fi 8 is going to be adding millimeter wave frequencies to our other three frequency bands.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=215)** These millimeter-wave frequencies, they're similar to what we see used in 5G cell phones.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-standards-25202624?u=76281980&t=221)** And I think this table is going to make a great reference for your study and for the real world.

> [!info]- Semantic Content
>
> **Env Vars:** ieee (7), ofdm (5), ofdma (2), lan (1), dsss (1)
> **Versions:** 2.4 (4), 802.11 (1), 1.3 (1), 9.6 (1)
> **CLI Commands:** make (2)
> **Cross-References:** coming up (1), later in (1)
> **Documentation:** specification (1), spec (1)
> **Analogies:** for example (1), similar to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### WLAN transmission methods
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=0)** - [Instructor] In this video let's discuss some of the transmission methods used in modern wireless LAN standards.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=6)** Specifically we want to consider OFDM and OFDMA.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=11)** To understand OFDM let's first consider FDM, frequency-division multiplexing.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=15)** What we're doing here is using a channel width of 20 megahertz instead of the 22 megahertz channel width we saw with the 2.4 gig band, we're only using a 20 megahertz channel width, and the interesting thing is we can carry a binary bit, a one or zero, using two megahertz, so what we can do is take this 20 megahertz channel width and divide it into 10 different subchannels, and each subchannel can carry a binary bit, one bit for 10 different conversations, and theoretically, these subchannels should not interfere with one another because they're not overlapping in their frequencies, but it's really, really close, they're right next to each other.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=53)** So to avoid any potential interference, instead of just using FDM, we instead prefer to use OFDM, orthogonal frequency-division multiplexing.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=63)** What do we mean by orthogonal?
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=65)** That's a term you might have heard in your high school math class.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=68)** Orthogonal means that we're at right angles to one another or we can say that two things that are orthogonal to one another are separated by 90 degrees.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=77)** And orthogonal frequency-division multiplexing is going to separate those adjacent subchannels by 90 degrees, and in this context, when I say 90 degrees, I'm not talking about the 90 degrees we would see in a right triangle, I'm talking about the 90 degrees that you might have learned about in your trigonometry class.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=95)** Do you remember sine waves and cosine waves?
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=98)** Well, onscreen we see a sine wave, and a cosine wave is simply a sine wave that's phase-shifted by 90 degrees.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=105)** We just scooted that sine wave back 90 degrees on the x-axis, and the advantage we get by sending these signals 90 degrees apart from one another is that we minimize interference.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=115)** At zero degrees the cosine wave is at its maximum amplitude, the sine wave is zero.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=121)** When the sine wave is at its maximum amplitude at 90 degrees, the cosine wave is zero, and the same thing occurs for 180 degrees, 270 degrees, and it all starts over.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=132)** So by phase-shifting our subchannels by 90 degrees, we're minimizing interference.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=137)** And I mentioned that we can send a single binary bit in a subchannel, let's see if we can increase that a bit.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=143)** We can using something called QAM, a quadrature amplitude modulation, this is the way that we can encode not just a single binary bit but multiple binary bits in a subchannel.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=154)** What we do is add two different wave forms together, one wave form is called the I signal, it's the in-phase signal, then we have another signal called the Q signal that we're comparing against the in-phase signal, and we can measure how much the Q signal is phase-shifted compared to the I signal, and what its amplitude is compared to the I signal, and when we're sending these two signals in the subchannel, they're added together, but there's a way that we can mathematically deconstruct that into their original wave forms, and we can say that Q signal, how much phase shift does it have from the I signal and what is its amplitude?
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=189)** And by using that information we can encode multiple binary bits.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=193)** As a metaphor, think of throwing darts at a dartboard, imagine we had these 16 different targets on a dart board, and if I threw my dart and hit one of those targets, it's going to represent not a single binary bit, it's going to represent four binary bits, 2 to the power of 4 is 16, that means we can represent any four-bit combination with 16 targets, and what we can do to hit one of those targets is by phase-shifting our Q signal from the I signal.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=218)** Let's imagine that we did a phase shift of 225 degrees for the Q signal as opposed to the I signal, and we reduced its amplitude.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=227)** So the amplitude of the Q signal was only a third of that of the I signal.
>
> **[3:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=232)** So the amplitude of the signal strength is about 33% of the maximum, and by doing that phase shift and the amplitude adjustment we have pinpointed one of these targets, and that target represents four binary bits, 0, 0, 0, 0.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=247)** So now in a subchannel, instead of sending a single binary one or zero, if we used 16 QAM, we could represent four binary bits in a subchannel, and I'm just showing you 16 possible targets on screen to make it easy to visualize, but our modern wireless LAN standards use many more targets than 16.
>
> **[4:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=265)** Even back in 2009 .11n used 64-QAM, there were 64 targets that we could pinpoint by doing that phase and amplitude adjustment, and by hitting one of those targets we could represent six bits in the subchannel.
>
> **[4:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=277)** .11ac gave us 256 targets, and if we hit one of those, that could represent eight bits, and now with WiFi 6 or .11ax there are 1,024 targets we could hit, and if we hit one of those, again, by adjusting the phase and the amplitude of the Q signal compared to the I signal, we can represent 10 bits in a single subchannel, that's one reason we get such incredible throughput with WiFi 6, and what we've talked about so far in this video is OFDM, orthogonal frequency-division multiplexing, and while all of those things are true for WiFi 6, WiFi 6 is technically not using OFDM, it's using OFDMA, specifically OFDMA means orthogonal frequency-division multiple access, and what multiple access is implying is that instead of a couple of wireless devices trying to access the airwaves at the same time
>
> **[5:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=328)** and possibly colliding, what WiFi 6 does is give each in station their slice in time when they're allowed to communicate, this is called their target wait time.
>
> **[5:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-transmission-methods?u=76281980&t=338)** It's almost like going up to a deli counter, as an example, and taking a number, and the person working behind the counter might say, "Now serving customer number 21," and if you're 21, you'll get served, and then customer 22 comes up, it's the same thing here, every device gets their slice in time so there's no contention or collisions, this is going to make transmission much more efficient and it's also going to give us some power savings, because a wireless network card knows that it's going to be its turn to transmit in so many milliseconds, but until that time happens, it can go into a lower power state, and that's a look at a couple of modern transmission methods: OFDM and OFDMA.

> [!info]- Semantic Content
>
> **Env Vars:** ofdm (6), ofdma (4), qam (3), lan (2), fdm (2)
> **Code Keywords:** let (4), class. (2)
> **Definitions:** is called (2), means that (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (2)
> **Versions:** 2.4 (1)
> **Speakers:** - [instructor] (1)

#### WLAN optimization and features
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=0)** - [Instructor] In this video, let's discuss some optimization features for wireless LANs, beginning with channel bonding.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=6)** As we discussed previously, we often work with a channel width of 20 megahertz and that can be divided into 10 sub channels, because we can represent binary data for a stream in a single sub channel.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=19)** But if I want to support more than 10 sub channels to support more than 10 different conversations going on in this wireless access point, what I could do is bond together a couple of 20 mhz channels into a single 40 mhz channel.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=32)** This is called channel bonding.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=34)** If I bond four of those 20 megahertz channels together, I get a single 80 megahertz channel.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=40)** And if I bond eight of those 20 megahertz channels together, that gives me a very large 160 megahertz channel.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=47)** And as a reference, let's build on the table we saw in a previous video discussing QAM, and see what supported channel widths we have for different wireless standards.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=56)** Notice that .11n can support 20 or 40 megahertz channels, but .11ac and .11ax they can go all the way up to 160 megahertz channels.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=65)** Another optimization feature allows us to focus our signal strength in a wireless access point towards a client, even though we might be using omnidirectional antennas that have relatively equal signal strength in all directions.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=78)** What we can do by using multiple antennas is focus our transmission toward a client.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=83)** It's called beamforming.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=84)** And as an example, consider this waveform.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=87)** If I had an identical waveform that I superimposed on top of this waveform and I added them together, that would increase the amplitude or the signal strength.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=96)** That's what we can do with multiple antennas in an access point.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=99)** We can increase the signal strength by using constructive interference pointing towards our client.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=105)** And I can reduce my signal strength in other directions by using destructive interference.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=110)** For example, if I had this waveform, and I had an identical wave form that was phase shifted 180 degrees that would add up to approximately 0.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=119)** In fact, that's the way noise canceling headsets and earbuds work.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=122)** They have microphones that listen to the ambient environment and they play that background noise into your ear, phase shift it 180 degrees to approximately cancel out to that background noise.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=133)** And by using constructive and destructive interference we're able to take an access point and direct our signal strength towards specific wireless clients.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=142)** And beamforming was a feature introduced to back in .11n.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=145)** And traditionally, if an access point had a single antenna, and it needed to communicate with multiple wireless clients, it would be using something called single user MIMO, or multiple input, multiple output.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=156)** The idea is we can only talk to one wireless client at a time.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=160)** If I just have support for one antenna, this is called one spatial stream that we're sending at a time.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=167)** But once we have multiple antennas in our access points we may be able to communicate to multiple clients simultaneously.
>
> **[2:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=173)** This is sometimes called MU-MIMO for multiple user, multiple input, multiple output.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=178)** Here I can can have four spatial streams where I can communicate downstream to all four of my wireless clients at once.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=186)** Let's take a look and see how many spatial streams are supported for our various wireless standards.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=190)** With .11n, we could support four spatial streams.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=193)** They were all downstream.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=195)** We could only receive from one client at a time.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=198)** .11ac allowed us to have eight downstreams spatial streams.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=202)** Again, we could only receive from one client at any one time.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=205)** But with .11ax, where we're doing OFDMA and every device has their own slice in time when they can communicate, there's no contention for bandwidth, we can have multiple downstream and multiple upstreams spatial streams.
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=219)** In fact, we can have 4 upstream and downstream spatial streams in the 2.4 gig band, 8 upstream and downstream spacial streams in the 5 gig band, and another 8 upstream and downstream spatial streams, if we use the six gig band that we get with Wi-Fi 6E.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=235)** And that's a look at a few wireless LAN optimization features.
>
> **[3:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-optimization-and-features?u=76281980&t=238)** Specifically, we discussed channel bonding, beamforming, and MU-MIMO.

> [!info]- Semantic Content
>
> **Env Vars:** mimo (3), qam (1), ofdma (1), lan (1)
> **Code Keywords:** let (3)
> **Cross-References:** we discussed (2), previous video (1)
> **Definitions:** is called (2)
> **Versions:** 2.4 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### WLAN security basics
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=0)** - [Instructor] When we're working with wireless networks, a major consideration is securing those wireless networks.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=6)** As a metaphor, can you imagine ever putting an ethernet jack on the outside of your building and letting somebody just drive up and plug into that ethernet jack and be part of your corporate network?
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=16)** No, that would not be secure at all, but that's essentially what we're doing if we have unsecured wireless networks possibly extending out into the parking lot, and while we could do things like moving the access points where our coverage area did not extend into any unsecured areas, maybe reducing the signal strength of those access points so that they didn't go too far, it's still possible that some malicious user might gain access to our wireless signals.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=42)** And if they were to intercept those wireless signals, we don't want them to be able to read them.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=45)** In fact, we have two major goals.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=47)** We want to authenticate our users before allowing them access to the wireless network, meaning that before somebody can get on the wireless network, they need to provide appropriate credentials.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=57)** And then once they're on the wireless network and they're exchanging data back and forth over the airwaves, we want to make sure that that data is encrypted, it's all scrambled up, so that if somebody were to intercept that data, they would not be able to interpret it because it's encrypted.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=71)** And there are a couple of approaches to doing encryption.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=74)** We could have something called a pre-shared key, or a PSK.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=78)** This is also known as Personal mode.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=80)** This is what you might be using in your home.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=82)** Maybe your internet service provider has provided you with a wireless router, and it has a password that you have to input on your different devices, like your smartphone, and those keys have to match.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=93)** In this example, we have a laptop acting as a wireless client.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=96)** It's going to have to be preconfigured with that shared key that matches the key configured on the access point or the wireless router.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=104)** And if they do have the same key, that key is going to be used in the encryption algorithm, and data sent between the client and the access point, it's going to be encrypted.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=113)** And while that might be fine for a home or maybe even a small business, it's not going to scale well.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=119)** Imagine, we had a large enterprise with hundreds or thousands of employees.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=124)** Can you imagine everybody's device being configured with the same pre-shared key?
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=129)** And if somebody left the company or that pre-shared key got compromised, having to go back and change that on the hundreds or thousands of devices, that is just not scalable.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=139)** So what we do instead in enterprise mode is have clients authenticate themselves against some sort of authentication server, often a RADIUS server.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=148)** And that RADIUS server is going to check their credentials sent by the wireless client, such as a username and password combination.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=155)** And if the RADIUS server authenticates the client, it's going to give the access point and the client a key to use during that session.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=162)** And here are the names we give to these different devices in enterprise mode.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=165)** The device trying to get on the network is called the supplicant.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=168)** It's asking for permission to get on the network.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=170)** The authenticator, that's the access point or the wireless router.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=174)** It's going to take the supplicant's request and send it to the authentication server, typically a RADIUS server.
>
> **[3:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=180)** Here the wireless client is sending a request to get onto the network to the authenticator, and it does that wirelessly, and the authenticator over a wired network relays that request to the RADIUS server.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=191)** And assuming the wireless client gave appropriate credentials, the RADIUS server is going to create a key, not for everybody in the enterprise to use, but for this particular wireless client to use and only for the duration of this single session.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=204)** It's called a session key.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=206)** And that session key is going to be sent down to the authenticator and it's also going to be sent to the supplicant.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=211)** So now, both the supplicant, the client, and the authenticator, the access point, they have a shared key.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=218)** It's not a shared key that can be used by anybody else in the organization.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=222)** It's only for this user and only for the duration of this session.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-basics?u=76281980&t=226)** That is dramatically going to improve the scalability of our security solution as compared to Personal mode.

> [!info]- Semantic Content
>
> **Env Vars:** radius (6), psk (1)
> **Analogies:** imagine (3), such as (1)
> **Definitions:** known as (1), is called (1)
> **CLI Commands:** make (1)
> **Code Keywords:** match. (1)
> **Speakers:** - [instructor] (1)

#### WLAN security standards
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=0)** - [Instructor] When we're configuring a wireless access point or a wireless router, we probably want to configure security, and we might be asked to select a security standard, and that's our focus in this video.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=10)** Identifying some of the different security standards for wireless networks.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=14)** The security standard available in the original IEE 802.11 standard was called WEP, Wired Equivalent Privacy.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=22)** The name implies that it's going to give us the same privacy as being on a wired network, and that was not true.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=28)** You see, WEP used an encryption algorithm called RC4, which stands for Ron's code four.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=34)** And it's not that RC4 in and of itself is bad, but the way WEP implemented it, it became very trivial to crack.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=41)** Specifically the way web attempts to encrypt data is by taking the original data string that we want to encrypt, and combining it with both a pre-shared key, and something called an IV, an Initialization Vector.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=54)** And the main issue was, WEP used a short Initialization Vector, only 24-bits in length, which meant that somebody could capture traffic from a network for just a few minutes, and be able to mathematically determine what the pre-shared key was.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=67)** So today we definitely do not want to select WEP.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=70)** What other encryption options do we have?
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=72)** Well, an improvement to WEP was TKIP, Temporal Key Integrity Protocol.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=76)** It still used RC4, but it used a longer Initialization Vector.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=82)** However, even better than TKIP is AES, which is the Advanced Encryption Standard.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=87)** An AES is better than TKIP, and it is way, way better than the way WEP did things.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=92)** And we might be selecting one or both of these encryption options as we're setting up our wireless access points.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=98)** One standard that might be supported on your Wireless Access Point is called WPA, Wi-Fi Protected Access.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=104)** It used TKIP, which gave us better encryption than the way WEP did things.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=109)** And because it was using RC4, it didn't require an upgrade in hardware.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=113)** You see, AES is a lot more process or intensive than TKIP.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=117)** So WPA was a way to keep existing hardware, but improved security as compared to WEP.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=123)** And the way it improved security is that it used a 48-bit Initialization Vector as opposed to 24-bits.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=131)** And while TKIP is better than WEP, it's still not considered to be a great encryption standard, meaning that not only do we not want to use WEP today, we probably don't want to use WPA either.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=141)** Instead, we might use WPA2.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=144)** In fact, back in 2006, in order for a wireless device to receive a wifi certification, it had to support WPA2.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=151)** And one of the requirements of WPA2 is that it had to have support for AES.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=156)** Now, I emphasize it had to have support.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=159)** It did not have to run AES because AES does require more processing power.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=165)** If we did have older clients, we could still specify that we would use TKIP with WPA2.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=172)** Or maybe we say we'll use either one.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=174)** Whatever the client supports, that's what we'll use.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=176)** But you can optionally turn TKIP off, and require everybody to use AES.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=181)** And for a decade, WPA2 was the flagship wireless security standard.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=186)** But then in 2016, there was a vulnerability called the crack of vulnerability that was discovered and that allowed a malicious user to get access to a network protected with WPA2.
>
> **[3:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=197)** That means that if you have the option today, you may select WPA3.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=202)** And with WPA3, if we're using enterprise mode as we discussed in a previous vide, we're going to be using 192-bit AES encryption.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=211)** That's as opposed to 128-bit AEs encryption used by WPA2 and also used by the personal mode with WPA3.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=220)** And if there's a malicious user trying to break into a wireless network, one thing that they might do is send de authentication frames.
>
> **[3:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=228)** That's a type of management frame to an access point, that can cause a client to disassociate, and then re-associate with the access point, and the attacker could capture that re-association.
>
> **[4:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=240)** They could do something like a brute force attack to try to determine what the pre-shared key was.
>
> **[4:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=245)** Well, the great news is with WPA3, we now have protected management frames that can protect us against a malicious user sending those de-authentication frames.
>
> **[4:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=255)** And if you've ever been in an airport or maybe a coffee shop that had an open wifi public network or maybe you're in a hotel, and they give everybody the same pre-shared key, you might have been concerned that somebody might be eavesdropping in on your traffic.
>
> **[4:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=268)** Well, WPA3 adds a way to prevent eavesdropping in those more public environments.
>
> **[4:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=273)** And if you have ever set up a wireless router in your home, you might have pressed the WPS button on the back of that router that stands for wifi protected setup, that allows you to add other devices easily.
>
> **[4:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=285)** Unfortunately, there was another vulnerability discovered with WPS, and WPA3 addresses that by giving us a new protocol to allow us to easily add wireless clients, and it's called DPP, Device Provisioning Protocol.
>
> **[4:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/wlan-security-standards?u=76281980&t=298)** And that's a look at some of the wireless security standards that you might see when setting up your wireless device.

> [!info]- Semantic Content
>
> **Env Vars:** wep (11), tkip (8), aes (8), wpa2 (7), wpa3 (6)
> **Code Keywords:** protected (4), require (3), public (2)
> **Prerequisites:** initialization (4), configure (1), set up (1), setup (1)
> **Definitions:** stands for (2), is called (1), is a  (1), means that (1)
> **Versions:** 802.11 (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### Configuring a Cisco Wireless LAN Controller (WLC)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=0)** - [Instructor] Now that we've talked about the theory of wireless LANs, in this video, I want to show you how we can configure, a basic wireless LAN, on a Cisco wireless LAN controller.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=9)** Specifically, we want to create a wireless network, with a name, or an SSID, that's a service set identifier of CCNA.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=16)** And for security, we want to configure that SSID to use a WPA2 and let's mandate AES encryption.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=24)** In other words, let's not permit TKIP, even though WPA2 can support TKIP.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=28)** And let's use a pre shared key because we're configuring personal mode.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=32)** Now, let's go out to the live interface and set this up.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=35)** We're now sitting at the summary screen of our Cisco Wireless LAN controller and we want to create a brand new wireless LAN.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=42)** Let's go under the wireless LANs in menu option, and let's say create new and go.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=48)** We don't need to be concerned with the profile name that can be used for advanced searching when we have lots and lots of wireless LANs, and I'll just call it CCNA, I'll make it match my SSID, my service set identifier, that's my wireless network name of CCNA.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=63)** Let's apply that.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=65)** And here's something that's often overlooked, I want to click the enabled checkbox, otherwise it's going to be configured, but not working.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=71)** I'll apply that.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=73)** And for security, let's go under the security tab.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=76)** And for our security options, I want to use WPA2.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=79)** So I'm going to select WPA plus WPA2, This allows me to configure either one.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=84)** And if I don't check the check box next to WPA policy that means we're just going to be using WPA2.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=92)** Notice it is checked.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=93)** And even though I might be able to support both AES and TKIP, I just want to support AES.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=98)** And I don't want to use 802.1 x, that's enterprise mode.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=103)** I want to use a pre shared key, that's personal mode.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=106)** So I'll click enable there.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=108)** And I'll enter a pre shared key, and we're done.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=114)** I can click on apply, say okay.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=117)** And if we go back to our wireless LANs Summary window, it tells me that I have a wireless LAN with an idea of CCNA.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=125)** It's enabled, it's running WPA2 with a pre shared key.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/configuring-a-cisco-wireless-lan-controller-wlc?u=76281980&t=129)** And that's going to meet all of our objectives for this demonstration.

> [!info]- Semantic Content
>
> **Env Vars:** wpa2 (6), lan (5), ccna (4), ssid (3), aes (3)
> **Code Keywords:** let (8), interface (1)
> **Prerequisites:** configure (3)
> **UI Navigation:** checkbox (1), click on (1)
> **CLI Commands:** make (1)
> **Versions:** 802.1 (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)


### 4. Network Virtualization

> [↑ Back to Table of Contents](#table-of-contents)

#### Virtualized servers
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=0)** - [Instructor] I used to work for a university where we had lots of standalone servers.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=4)** Maybe one was Microsoft Windows, maybe one was Linux.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=7)** Maybe we had something like Oracle Solaris and these servers were made available to different departments within the university.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=14)** Unfortunately, when I noticed the utilization of these servers, it was very, very low.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=19)** We paid for a lot of hardware and capacity that was just not being used.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=22)** It would've been great if back in those days we could do something that we could do today and that is virtualizing those servers.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=29)** We could get a single high capacity server maybe with multiple connections out to the network and we could run each of those traditional servers as a VM, as a virtual machine within that physical server.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=41)** Maybe one virtual machine would connect to the network via SW1.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=45)** Maybe another virtual machine would connect out to the network of via SW2.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=49)** We could have multiple network interface cards in other words, coming out of our physical server.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=54)** And the software that runs on that server that makes it possible to virtualize these machines is called a hypervisor.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=62)** And a hypervisor is software that's going to be able to create one of these virtual machines.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=67)** We can also use that hypervisor software to start, to stop and to monitor the virtual machines.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=72)** And we have two basic types.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=74)** There is a type one hypervisor, sometimes called a native or a bare metal hypervisor.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=79)** This is where we install the hypervisor directly on the physical server.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=84)** In other words, we're not installing this on top of Microsoft Windows or on top of Linux.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=90)** The hypervisor itself is the operating system that we're installing directly on the physical server.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=96)** As an example, a popular top one hypervisor is VMware's ESXi but sometimes we might want to run a different operating system on our local desktop machine or laptop.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=107)** For that, we could use a type two or a hosted hypervisor.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=110)** This is going to run on top of a traditional operating system.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=114)** For example, I have an Apple Mac computer but I need to run a Microsoft Windows sometimes.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=119)** So what I've done is install a type two hypervisor.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=123)** Specifically I'm using VMware Fusion, and inside of that VMware Fusion hypervisor environment, I've installed at Microsoft Windows.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-servers?u=76281980&t=132)** And I could also install Linux or a variety of other operating systems.

> [!info]- Semantic Content
>
> **Definitions:** in other words (2), is called (1), is a  (1)
> **Prerequisites:** install (3)
> **Env Vars:** sw1 (1), sw2 (1)
> **Code Keywords:** interface (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Virtualized network devices
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=0)** - [Instructor] A major trend in enterprise networks today is taking resources out of a local data center and putting them in the cloud.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=8)** And when somebody within the enterprise wants to connect to one of those resources, they're going to connect externally to the cloud provider's router.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=15)** But a challenge we might have is if we had those virtual servers in our own local data center, we will be able to install other network devices such as a firewall, maybe a load balancer to spread the load of incoming traffic across multiple servers that were identically configured.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=32)** And the great news is we can virtualize not just servers, we could also virtualize network devices.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=38)** For example, if we wanted to have a firewall to protect our servers that lived in the cloud, we could install a virtual firewall, that's a virtual machine that's acting as a firewall.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=48)** After all, the cloud provider is probably not going to let us walk through the front door with a firewall under our arm and let us into their data center to install that firewall.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=57)** But we don't have to do that.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=58)** We can install a virtual firewall, we could have a virtual router as well, and we could have a virtual load balancer.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=64)** So if I had, for example, three different virtual machines acting as web servers and I wanted to load balance across all of those servers which contained the same content, I could use a virtual load balancer.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=76)** And that's the big takeaway from this video.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=78)** We can virtualize not just servers, we can also virtualize network devices.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/virtualized-network-devices?u=76281980&t=83)** And if we want to, create our own virtual infrastructure within a cloud provider's cloud.

> [!info]- Semantic Content
>
> **Prerequisites:** install (4)
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (1)

#### Introduction to software-defined networking (SDN)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=0)** - [Instructor] One of the biggest trends in networking that is going to radically reshape how we do our jobs is software-defined networking, SDN.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=8)** Here, instead of us going to individual devices and configuring those devices, we can use an application to express our intent.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=14)** That's a term you hear Cisco often use, intent based networking.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=18)** This implies that I don't have to know all the commands, and all the switches, and routers and other devices out there, I can just express my intent through an application and my intent is going to be carried out, whether it's a security intent, a quality of service intent, or something else.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=33)** Consider these two routers and switch, instead of visiting each device and configuring them individually, what we can do is have an SDN controller, and the SDN controller can communicate our intent down to the devices.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=45)** And this communication is done with southbound APIs, and API stands for Application Programming interface.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=52)** It's a way that two applications can talk to one another, and we say there are southbound APIs, because we typically show a topology like this, where the controller resides above the devices to be configured.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=63)** So the devices are south of the controller, they're southbound APIs, or sometimes we simply call those southbound interfaces or SBIs.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=71)** And these SBIs can send a configuration instructions to the devices, the SBIs could also be used to retrieve information from those devices.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=79)** As just a couple of examples, an industry standard that we might run into is OpenFlow and Cisco has their own as well, it's called OpFlex.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=87)** And again, SBIs communicate our intent from the controller down to the devices, but how do we get our intent to the controller to start with?
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=95)** Well, we're going to express our intent through the use of an application, and since we typically place the application above the controller in a diagram like this, we say that applications use northbound APIs, or we could simply call them northbound interfaces or NBIs.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=111)** And that's going to carry communication back and forth between an application and the controller.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=115)** And the applications we use to express our intent are oftentimes written by us, using the Python programming language, Or maybe we get some code from somebody else that they've made publicly available and we modify it for our particular network, or maybe somebody is designed a front-end graphical interface, and we can express our intent through that graphical interface, and in the background, it's going to be sending instructions down to the SDN controller.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=138)** And these NBIs, they're not using something like OpFlex they're using something called REST, R-E-S-T, representational state transfer.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=146)** What this means is we're using HTTP verbs, much like our browser would communicate with a web server, we might send a GET verb or a PUT verb to that web server.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=157)** Well, those are the type of verbs that being used by REST, and when we send those instructions using HTTP verbs, the data needs to be in a specific format.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=166)** And there are two commonly used formats, one type is called XML, and that stands for Extensible Markup Language.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=172)** Another one that's really common is called JSON, and that stands for JavaScript Object Notation.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=177)** And so far, we've been talking fairly generically about this SDN controller, but since we are focusing on Cisco in this course, let's take a look at a couple of Cisco SDN controllers.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=187)** And essentially they have one SDN controller for a data center and one for the enterprise.
>
> **[3:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=192)** In the data center environment, they have something called the Cisco APIC, and that stands for Application Policy Infrastructure Controller, and it's going to talk to things like Cisco Nexus devices in the data center using SBIs.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=205)** But in an enterprise network we're more likely to use Cisco DNA Center, where DNA stands for Digital Network Architecture.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=212)** And a Cisco DNA Center, it does give us a nice graphical interface we can use, but it also has a large collection of APIs.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=220)** So we could write programs in Python, for example, and those programs that we write, they could be used to express our intent to Cisco DNA Center, which is then going to take our intent, and carry that out on the devices it manages.
>
> **[3:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/introduction-to-software-defined-networking-sdn?u=76281980&t=232)** And that's a look at software-defined networking, where we're moving away from individual device configuration, to expressing our intent to applications, and having our intent carried out by an SDN controller.

> [!info]- Semantic Content
>
> **Env Vars:** sdn (8), dna (4), rest (2), http (2), api (1)
> **Code Keywords:** interface (4), this, (2), else. (1), switch (1), let (1)
> **Definitions:** stands for (3), is called (2)
> **CLI Commands:** python (2)
> **API Endpoints:** get  (1), put  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Software-defined wide area networks (SD-WANs)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=0)** - [Instructor] Now that we understand a bit about SDN, Software-Defined Networks, in this video we want to talk about Software-Defined Wide Area Networks or SD-WANs.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=10)** First, consider traditional WAN connections.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=12)** If we had a couple of remote sites like BR1 and BR2, and then we had a headquarters and that's where the data center lived, traditionally, our remote sites had to go back to the headquarters, and they might do that over a variety of WAN technologies like NPLS or Metro Ethernet but they had to go back to the headquarters so they could access the data center and get access to the applications being used by the enterprise and to make sure our communication was secure.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=36)** And this did give us a secure, predictable performance.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=39)** One challenge with this traditional WAN topology though is that if BR1 or BR2 wants to go out to the internet using an application they had to do something called backhauling where their communication might first have to go to the data center to access an application or to get a security check and then the traffic would go back to the user maybe at BR1 and then it would go out to the internet.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=61)** That's not a very optimal path.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=63)** However, today we have more and more applications that do not live in the data center, they live out in the cloud and Software-Defined WAN technologies will allow us to communicate with those applications that are living in the cloud while giving us security, and quality of service, and optimal forwarding.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=80)** And we're eliminating that need for backhauling.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=83)** If I'm at BR1 and I need to use an application it's probably in the cloud, I don't have to go back to the data center at HQ first.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=90)** That eliminates that backhauling.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=92)** And while we could set up something like a VPN to give us security, and we could configure quality of service on each of our links, and we could make sure that our routing tables gave us optimal forwarding that manual configuration solution just does not scale.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=106)** The great news is with SD-WANs those functions like security and building a routing table and quality of service, instead of being performed in each of our devices, they're performed inside of the SD-WAN controller.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=119)** And the SD-WAN controller understands how all of our different sites are interconnected.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=123)** It knows what type of physical connections are in use.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=126)** Maybe it's cellular connections, maybe it's NPLS, maybe it's a cable modem.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=130)** And the SD-WAN controller can talk to the various routers in our topology to make sure that regardless of our physical interconnections, we're maintaining a consistent level of quality of service, security and performance.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=143)** And when we say Software-Defined WAN, we're talking about the virtual network connections that form our virtual wide area network, if we look at the physical interconnections between these four different office buildings, we might see that to get from the office in the upper left to the office in the lower right, I've got to go through R1, R2, not sure where I'm going to go next, maybe R7 then to R8, and then out to the other office.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=167)** And it would be a lot of work to enforce our policies by manually configuring all of those routers.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=172)** But with the SD-WAN controller, we can virtualize our WAN connections.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=176)** So now, even though in the background, we really are going through multiple routers, it looks like virtually and it also acts like there is a direct connection between the router at our office in the upper left and the router at our office in the lower right.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=190)** And this logical topology is called an overlay network and it is overlaying that physical network.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=196)** And if you would like to learn more about Cisco's SD-WAN solution at the time of this recording you can go to [cisco.com/go/sdwandemos](https://cisco.com/go/sdwandemos) and you'll be given instructions as to how to connect to the Cisco vManage environment.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=210)** That's what we see here on screen.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-wide-area-networks-sd-wans?u=76281980&t=212)** And this is our graphical interface to Cisco's SD-WAN solution so by going to this page, you can explore some of the Cisco SD-WAN technologies and actually get some hands on practice exploring Cisco vManage.

> [!info]- Semantic Content
>
> **Env Vars:** wan (13), br1 (4), br2 (2), npls (2), sdn (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **Code Identifiers:** vmanage (2)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** set up (1), configure (1)
> **Code Keywords:** interface (1)
> **URLs:** [cisco.com](https://cisco.com) (1)

#### Software-Defined Access (SD-Access)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=0)** - [Narrator] Another software defined technology I want you to know about is Software-Defined Access or SD-Access.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=6)** This is really the next generation in enforcing who can go where.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=11)** For example, instead of using a traditional access control list we can use something called a security group access control list and this is going to base policies on someone's identity rather than what IP address they happen to be using at the moment.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=26)** And we can take a physical network and virtualize it where it looks like it has separate virtual networks and those different virtual networks, they can have different policies.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=34)** As an example of what SD-Access allows us to do, consider this typology.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=39)** If we're using manually configured excess control lists and we want the user at PC1 to be able to reach the server at an IP address of 192.0.2.3, the access list might say something like this.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=51)** It might say, permit the subnet of 192.168.1.0/24 to access the serve at 192.0.2.2 on TCP port 443.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=63)** That's our secure http port.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=65)** And the user at PC1 currently has an IP address in that subnet.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=69)** Specifically, they have an IP address of 192.168.1.100.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=73)** So if they try to go to the server, that will be allowed.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=77)** But let's say they move their computer or maybe they move their laptop to a different area of the network and maybe they're connecting in to switch SW3.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=84)** If that access control list is still governing who can reach the server, in this instance their traffic is going to be blocked, even though the user should be allowed access to the server, the user currently has an IP address that is not allowed.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=98)** And what SD-Access allows us to do is to create policies based on someone's identity rather than their IP address.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=105)** Specifically, Cisco has an appliance called ISE, I S E.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=110)** That's the Cisco Identity Services Engine.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=112)** And one thing we can do with ISE is create a security group.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=115)** Let's say we have created a security group named IT and it has members of Kevin, Kelly, and Jody, and maybe the user at PC1 is Kevin.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=124)** Instead of using a traditional ACL, here we have a security group ACL and this ACL says we want to permit anybody in the IT security group to access this web server at 192.0.2.3 using TCP port 443.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=140)** That means when I authenticate using PC1, the identity services engine knows it's me and it knows I'm a member of the IT security group and I'm going to be allowed access to the server.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=152)** And even if I move locations, I take my PC or laptop and I go over and plug into switch SW3, when I authenticate with a network, ISE knows that it's still me, even though I'm connected to a different subnet and it's still going to allow me to access the server.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/software-defined-access-sd-access?u=76281980&t=167)** And this is just one example of the flexibility and power we get with Software-Defined Access.

> [!info]- Semantic Content
>
> **Env Vars:** pc1 (4), ise (3), acl (3), tcp (2), sw3 (2)
> **Code Keywords:** let (2), switch (2), this. (1)
> **Versions:** 192.0.2 (3), 192.168.1 (2)
> **Ports:** port 443 (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=0)** - [Narrator] Congratulations on finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=3)** And this course covered a collection of network services such as DNS, NTP, NAT, AND DHCP.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=9)** You were also introduced to network security, including some common threats out there today.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=14)** And we talked about a couple of solutions for better protecting your network, including ACLs and port security.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=20)** Then we turned to our attention to wireless networks and network virtualization.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=25)** Now, if you're feeling good about what you've learned, I encourage you to keep that momentum going and join me in another course.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=31)** Until then, I want to give you my sincere thanks for entrusting me with your time in this course.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=35)** I do not take that lightly.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=37)** And also since this course did cover so many technologies, if you do need to go back and review, that is perfectly okay.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=44)** In fact, that's one of the big advantages of LinkedIn Learning.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=47)** You can go back and rewatch whatever you would like to review.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-wireless-networks-services-security-and-virtualization/next-steps?u=76281980&t=50)** And until we meet again in another LinkedIn Learning course, I wish you all the best in your studies.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1), ntp (1), nat (1), dhcp (1)
> **Cross-References:** we talked about (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Kevin Wallace]]

## Skills Covered

- Cisco Networking
- Network Administration

## Path Context

### In [[Getting Started with Cisco Networks]]
← [[Cisco Networking Foundations- Switching and Routing]] | **4 of 4**

## Appears In

- [[Getting Started with Cisco Networks]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Switching and Routing]] — Cisco Networking
- [[Cisco Networking Foundations- IP Addressing]] — Cisco Networking
- [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] — Cisco Networking
- [[MPLS Segment Routing]] — Network Administration
- [[Cisco Network Security- Content and Endpoint Security]] — Cisco Networking

---

[↑ Back to top](#)