---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cisco-networking-foundations-fundamentals-of-cisco-networking
url: "https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking"
level: Beginner
updated: 12/3/2024
learners: 295998
skills:
  - Cisco Networking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHM0BnPKta4zg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655413434652?e=2147483647&amp;v=beta&amp;t=9gqe9NS_5AbrQ0vwNEuDVbSXYFIK_mq-2ajUc-58uns"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Cisco Networks]]'
next_courses:
  - '[[Cisco Networking Foundations- IP Addressing]]'
path_nav: '[{"path":"Getting Started with Cisco Networks","position":1,"total":4,"prev":null,"next":"Cisco Networking Foundations- IP Addressing"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/cisco-networking
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Cisco%20Networking%20Foundations%20Fundamentals%20Of%20Cisco%20Networking.md)

![Cisco Networking Foundations Fundamentals Of Cisco Networking](https://media.licdn.com/dms/image/v2/C4E0DAQHM0BnPKta4zg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655413434652?e=2147483647&amp;v=beta&amp;t=9gqe9NS_5AbrQ0vwNEuDVbSXYFIK_mq-2ajUc-58uns)

# Cisco Networking Foundations Fundamentals Of Cisco Networking

> Do you need to learn how to support and maintain Cisco networks? In this course, Kevin Wallace shows you the basics you need to master, including concepts, components, cabling, and more. Kevin gives you an overview of a network, its benefits, and some day-to-day examples. He shows you the OSI model and the TCP/IP model, as well as some common network layer protocols, common transport layer protoco

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking) | Beginner | 296K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Learn the fundamentals of Cisco networking
  - What this course is about
  - How to get hands-on practice
- [**1. Network Basics**](#1-network-basics) (9 videos)
  - Overview of a network
  - Benefits of a network
  - Day-to-day network examples
  - OSI model
  - TCP/IP model
  - Common network layer protocols
  - Common transport layer protocols
  - TCP three-way handshake
  - Application layer protocols and port numbers
- [**2. Network Concepts and Components**](#2-network-concepts-and-components) (9 videos)
  - CSMA/CD vs. CSMA/CA
  - Hubs and switches
  - Routers
  - Collision and broadcast domains
  - Wireless access points (APs)
  - Firewalls
  - Intrusion detection and prevention systems
  - Examples of network topologies
  - Mesh topologies
- [**3. Network Cabling**](#3-network-cabling) (4 videos)
  - Copper cables
  - Fiber cables
  - Transceivers
  - Straight-through vs. crossover cables
- [**4. Cisco Router and Catalyst Switch Configuration**](#4-cisco-router-and-catalyst-switch-configuration) (6 videos)
  - Cisco routers and catalyst switch ports
  - Cisco Internetwork Operating System (IOS)
  - Basic Cisco IOS commands
  - Secure Cisco devices with passwords
  - Configure a router interface
  - Work with configuration files
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Learn the fundamentals of Cisco networking
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=0)** - [Kevin Wallace] We're all surrounded with network devices.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=3)** Some might have a cable that plugs into a wall jack, many are probably wireless but they're networked nonetheless.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=9)** Of course, there are a plethora of companies that make networking gear but Cisco Systems has a dominant market share when it comes to enterprise network devices.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=17)** Now in this course, you're going to begin learning the foundations of Cisco networking and that networking in general.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=23)** Specifically, this course, you'll learn some of the basic network components that you're likely to run into and I'll introduce you to a collection of popular networking protocols and wiring standards that empower our networks to do a bunch of really cool stuff.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=37)** Hi, I'm Kevin Wallace.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=39)** I'm a double CCIE, or Cisco Certified Internetwork Expert.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=43)** And I've been teaching IT courses for over two decades.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/learn-the-fundamentals-of-cisco-networking?u=76281980&t=46)** So join me in my LinkedIn course covering Cisco networking foundations.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** ccie (1)
> **Speakers:** - [kevin (1)

#### What this course is about
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=0)** - [Instructor] In this course, we have four major topics to tackle.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=3)** First is network basics, where you'll learn why networking is such a big deal, along with a couple of models that we'll be using to categorize just about any piece of network hardware or software that you can imagine.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=15)** Then, in our next chapter, you'll learn to describe lots of different networking devices, such as firewalls, switches, intrusion detection system sensors, and many more.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=25)** And even though our network devices can connect wirelessly, our next chapter will lay out the options for physically connecting our devices together with cables, both copper cables and fiber optic cables, which use light to send data.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=39)** And finally, since this is a Cisco centric course, we'll explore the ports, features, and operating systems on Cisco routers and switches.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=48)** And while it's great if you happen to have access to physical gear to practice on, that's not the only option.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=54)** In fact, in our next video, I'll show you a few different options for getting your hands dirty with Cisco gear.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/what-this-course-is-about?u=76281980&t=60)** I'll see you in that video in just a moment.

> [!info]- Semantic Content
>
> **Cross-References:** next chapter (2), next video (1)
> **Analogies:** imagine (1), such as (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How to get hands-on practice
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=0)** - [Instructor] While this course will primarily be covering theory, in some videos I'll be demonstrating commands on Cisco gear, like routers or switches.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=9)** And while you could certainly look over my shoulder as I enter those commands and learn that way, many students benefit from entering those commands themselves.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=17)** So in this video, let's discuss three ways for you to get hands on experience.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=23)** First, you could use real gear, you could buy used or refurbished from a variety of online sites or with your employer's permission, you might be able to use some extra gear from your workplace to set up a practice lab.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=36)** Another option is to use a free application from Cisco called Cisco Packet Tracer and after you download it, you'll be asked to log in and you could use an existing Google account or create a free Cisco Networking Academy account and this free application is a network simulator, that's as opposed to an emulator, specifically a simulator makes it feel like you're using actual Cisco gear, while an emulator is running the same operating system called Cisco Internet Work Operating System or iOS that you would find on physical equipment.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=69)** So, with Cisco Packet Tracer you might not have all of the features that you would with physical gear or an emulator, but it is a fantastic piece of software and it's more than sufficient for your CCNA studies.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=82)** And the third option is to use Cisco Modeling Labs or CML, while Cisco Packet Tracer was a simulator, CML is an emulator running real Cisco iOS and at the time of this recording, you can purchase a year of access to the personal version of CML for around $200 and if you'd really like to use CML because it's an emulator but you don't want to pay nearly $200 for it, there's another option.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=109)** What I'm referring to is Cisco's DevNet sandbox, that's an online portal that lets you work with a ton of different Cisco devices to get an incredible amount of hands on experience for free.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=121)** Here's how it works, you go to devnetsandbox.[cisco.com](https://cisco.com) and log in with an existing account, like a Google or Facebook account, or you could create a free Cisco account, then you can reserve a pod of gear at a certain date and time for a certain duration, and at the time of this recording one of those equipment pods gives you access for free to Cisco Modeling Labs and you can reserve access for four hour blocks of time.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=148)** And there are certainly plenty of online resources that you can search for step by step instructions on accessing and working with Cisco Packet Tracer, Cisco Modeling Labs, Cisco's DevNet sandbox, my recommendation is since you're just getting started with Cisco networking, I'd go with Cisco Packet Tracer because it's a lot simpler to get up and going as opposed to finding all of the right console cables for real gear or getting connected through a VPN using Cisco's DevNet sandbox.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/how-to-get-hands-on-practice?u=76281980&t=176)** However, any of the options that we've discussed in this video should give you a great hands on learning experience.

> [!info]- Semantic Content
>
> **Env Vars:** cml (4), ccna (1), vpn (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** ios (2)
> **Prerequisites:** set up (1), getting started (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **UI Navigation:** go to (1)


### 1. Network Basics

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of a network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=0)** - [Narrator] In this course I'm going to be using the term network a lot.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=4)** So let's begin with a simple definition.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=7)** When we use the term network we're talking about a collection of interconnected devices, and some of those connections might be over copper cabling, some might be using optical fiber cable, still other connections might not even be visible because they're communicating wirelessly.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=22)** Imagine you regularly go into your office to work, you sit down at your desk, you fire up your computer and you're checking your email.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=29)** When you do that, in the background, your computer is communicating with your company's email server over a network.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=35)** Also, it's now common to have networks in our homes.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=38)** As you might imagine, I have a very connected home.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=41)** My internet service provider provides a fiber internet connection, and I have ethernet running in my wall that delivers up to 10 gigabits per second of bandwidth.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=51)** I have wireless access points, security cameras, IOT or Internet of Things devices, including a doorbell, an oven, refrigerator, TVs, other devices.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=62)** And we have two primary ways to connect into a network, with wired connections and wireless connections.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=68)** As an example of a wired connection, consider an ethernet cable with an eight conductor connector at each end called an RJ-45 connector.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=77)** You might have heard these cables called Cat5 or Cat6 cables.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=81)** A second type of connection is a wireless connection.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=84)** That might be a wireless local area network, or a wireless LAN, or Wi-Fi for short, those typically cover a relatively limited geographical region.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=95)** Or we might have cellular services that support data transmission, and cell services often have very widespread coverage.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=104)** For example, think about a cell phone.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=106)** My cell phone can send and receive data using a cellular service, but if I'm in an environment that has a wireless LAN, I can connect to that network using my phone's wireless capabilities.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=119)** So some devices, like my cell phone, have more than one wireless option.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=123)** And instead of categorizing a network as either wired or wireless, we could alternately categorize the network by its scope, meaning what area the network covers.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=135)** A personal area network, or a PAN, is a very small network that interconnects just two devices.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=142)** For example, if you have a gaming system with a wireless controller, maybe using Bluetooth, the connection between your controller and your gaming console makes up a PAN.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=152)** A local area network, or a LAN, is usually local to a building or an area within a building, and this is what you might find in your home.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=162)** A LAN allows, as an example computers within a department, to share resources such as a very expensive copier.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=170)** Or a LAN might allow all of those computers to access the same set of files that are maybe stored on a computer acting as a file server.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=179)** A campus area network, or a CAN, interconnects nearby buildings.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=184)** And each of those buildings have one or more LANs inside the buildings, but the buildings themselves interconnect with a CAN.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=191)** And while we often do see a CAN used to interconnect the buildings on a college campus, please don't be thrown by the word campus in campus area network.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=201)** This concept of a campus could just as easily apply to a business campus.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=206)** And some businesses have multiple locations spread across a large metropolitan area.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=212)** The great news is, in some larger cities like Paris, or London, or Chicago, we might have the option of connecting to a metropolitan area network, or a MAN.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=223)** That's going to allow a business to connect all of its offices to that MAN, and then the offices, they can communicate between one another at very high speeds.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=233)** And finally, there's the concept of a wide area network, or a WAN, which interconnects networks over large geographical regions.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=242)** Offices scattered around a country, or maybe around the globe, they can interconnect with one another using WAN connections.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=250)** Now, several years ago, WAN connections were fairly slow, they could be very expensive, but today, with so many locations around the world having access to high speed internet connections, a WAN connection is often made through a secure connection over the internet.
>
> **[4:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/overview-of-a-network?u=76281980&t=265)** And those are some examples and characteristics of modern networks.

> [!info]- Semantic Content
>
> **Env Vars:** lan (5), wan (4), pan (2), man (2), iot (1)
> **Analogies:** imagine (2), for example (2), such as (1)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Benefits of a network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=0)** - [Instructor] We know that a network interconnects two or more devices, but what benefits does that offer us?
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=6)** Let's consider a few.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=7)** First, a network gives us the ability to share resources.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=11)** For example, several employees in an office might need to share a common set of files or nearby printers.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=17)** Another benefit of networking is communications.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=20)** Examples of communications include not just email, but also voice calls using a technology called voiceover IP or VYP.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=30)** We can even have video chats and send instant messages over a network.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=34)** Yet another benefit is redundancy.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=37)** If we have critical data stored on a computer acting as a file server, what if that computer breaks or what happens if it's destroyed by fire or flood?
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=47)** Do we lose all of our data?
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=48)** We certainly don't want that.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=50)** So what we can do is send a copy of our data over a network connection to another location where a backup of that original data lives.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=58)** One of the biggest benefits many networks give us is the ability to access the internet.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=64)** Think about how many times a day you access the internet.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=67)** Maybe you check the weather, sports scores, you do an internet search or you scroll through your social media.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=74)** Those are all made possible thanks to networks.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=77)** Networks can also be used to monitor connected devices.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=81)** For example, on a factory floor if there is some sort of a jam in a piece of equipment, that piece of equipment can send an alert over a network to someone that can take action, or maybe in your home, let's say you have a security camera.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=95)** It can send you an alert if motion is detected near your front door.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=99)** And just one final example of a network benefit, network administrators can often have a single point of administration.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=106)** For example, they can manage multiple devices in different locations from the convenience of their computer.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=111)** This eliminates the need for a network administrator to visit each network device to make a configuration change.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/benefits-of-a-network?u=76281980&t=117)** And this is certainly not a comprehensive listing, but those are some of the biggest benefits that we get by connecting our devices to a network.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Env Vars:** vyp (1)
> **Speakers:** - [instructor] (1)

#### Day-to-day network examples
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=0)** - [Instructor] Think about your day and see if you can identify the roles played by networks.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=5)** Here's some of the first things that come to my mind.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=7)** Instead of having a cable TV, I have a streaming subscription that lets me watch live TV, record with a cloud based DVR, and view tons of other online content.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=17)** That's possible because the different TVs in my home connect into my home network using wired or wireless connections.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=24)** And then my home network connects out to the internet.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=27)** But besides just watching TV, there are lots of other things I do online.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=31)** I also watch video content on other platforms.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=34)** I occasionally scroll through my social media sites.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=37)** And I'll have audio video calls with my family, friends, and clients who are around the world.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=43)** I can do that using virtual meeting tools.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=46)** Additionally, one of the big network buzzwords you're going to be hearing is internet of things, or IoT.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=52)** IoT is all about connecting lots of devices to a network beyond the standard types of network connections, like connecting a computer or printer.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=60)** For example, in my home, my doorbells, thermostats, TVs, my range, and even my refrigerator, they're all networked.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=70)** And if somebody leaves the refrigerator door open for too long and I'm watching TV, I'll get this message that pops up on my TV telling me to go close the refrigerator door.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=79)** Also, I can control lots of devices and services such as lighting and my security system just with my voice.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/day-to-day-network-examples?u=76281980&t=87)** Now, my challenge to you is to be hyper observant over the next day or two and identify as many ways as you can of how networks are impacting your day to day lifestyle.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), such as (1)
> **Env Vars:** dvr (1)
> **Speakers:** - [instructor] (1)

#### OSI model
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=0)** - [Instructor] It can sometimes be difficult to visualize how a new piece of equipment or protocol fits into an overall network.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=7)** Fortunately, we have a set of categories, each representing different types of network functions.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=13)** This set of categories is called the OSI model, where OSI stands for Open Systems Interconnection.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=19)** And once we learn what sorts of things happen at each layer of this model we can better categorize our hardware and software components, and better understand how they work together.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=30)** And since this OSI model is something that you'll reference often as a network engineer I've included a handout with several additional details that aren't quite relevant right now but will help you as you continue learning.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=41)** Now, let's look at these layers one at a time beginning with layer one, the physical layer.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=47)** It's here at the physical layer where we have things like our network cabling or radio waves being sent out from a wireless access point.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=55)** Layer two is the data link layer.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=58)** We'll be working with ethernet switches at this layer where those switches keep track of MAC addresses.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=64)** MAC stands for media access control, and a MAC address is assigned by a manufacturer to a piece of physical ethernet hardware such as a network interface card.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=76)** Moving up to layer three we have the network layer.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=79)** This layer is concerned with logical addressing such as IP addressing.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=83)** And a common network device that makes forwarding decisions based on IP address information is a router.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=90)** That means routers operate at layer three of the OSI model.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=94)** Layer four is the transport layer, which is concerned with logical connections.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=99)** These connections might be considered reliable where we confirm that transmitted information was received, or these connections could be unreliable where we send our information in hopes that it makes it to its destination.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=111)** Transmission Control Protocol, or TCP, and User Datagram Protocol, or UDP, they operate at layer four.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=119)** And TCP is considered to be a reliable transport protocol while UDP is an unreliable protocol.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=126)** And you might be wondering why in the world would we have a protocol like UDP that's unreliable?
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=132)** Well, stay tuned.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=133)** We'll get into that in a future video.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=135)** Up at layer five we have the session layer.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=138)** It's concerned with establishing, monitoring, and tearing down communication sessions between hosts.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=144)** You might hear the term APIs, as an example.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=147)** APIs, that stands for application programming interfaces.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=151)** APIs let software on one device communicate with software on another device, and API sessions are one example of something we might see at layer five.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=161)** Layer six is the presentation layer.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=165)** It's all about how we represent data.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=167)** For example, we might encrypt data for security reasons, so some of our encryption protocols live at layer six.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=174)** We might format a picture as a JPEG image.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=177)** That format is how that picture is represented, so we say that JPEG formatting lives at layer six.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=184)** And finally, layer seven is the application layer.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=188)** And it's the layer users typically interact with.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=191)** If we're surfing the web we're using a protocol like HTTP, which stands for hypertext transfer protocol, or HTTPS, which is short for secure HTTP.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=203)** If we know the name of a website that we're trying to reach with HTTP or HTTPS but we don't know its IP address we can ask a DNS server, and that DNS server will take the name that we provide and give us back the corresponding IP address.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=218)** The protocol that makes that possible is Domain Name System, or DNS.
>
> **[3:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=224)** DNS is yet another example of something that lives at layer seven.
>
> **[3:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=228)** Now, let's check out some memory aids to help us keep these layers straight.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=233)** We can remember these layers from the top-down with the acrostic all people seem to need data processing where the A in all reminds us of the A in application, the P in people reminds us of the P in presentation, and so on.
>
> **[4:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=248)** Alternately, we can use the acrostic please do not throw sausage pizza away to go from the bottom-up instead of top-down.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=256)** Now, interestingly, each of the first four layers refer to data by different names.
>
> **[4:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=262)** These names are generically called protocol data units, or PDUs.
>
> **[4:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=267)** Specifically, we call data bits at layer one, frames at layer two, packets at layer three, and segments at layer four.
>
> **[4:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=275)** And a way to remember those different PDU names from the bottom-up is to use the acrostic bacon frying produces salivation.
>
> **[4:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=284)** And the best advice I've ever heard about the OSI model is to remember it's a reference model not a reverence model.
>
> **[4:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=292)** It doesn't have to be revered as something that every network component must neatly fit into.
>
> **[4:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=297)** That's just not reality.
>
> **[4:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/osi-model?u=76281980&t=299)** However, this model can be a tool that we use to better explain and understand where different network components reside.

> [!info]- Semantic Content
>
> **Env Vars:** osi (5), dns (4), mac (3), udp (3), http (3)
> **Definitions:** stands for (4), is called (1), is a  (1), is an  (1), short for (1)
> **Code Keywords:** let (3), continue (1), interface (1), finally, (1), throw (1)
> **Analogies:** such as (2), picture (2), for example (1)
> **Speakers:** - [instructor] (1)

#### TCP/IP model
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=0)** - [Instructor] In addition to the OSI model, there's another reference model I want you to know about.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=5)** It's the TCP/IP model.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=7)** Interestingly, there are some variants of this TCP/IP model that give different names to the bottom layers.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=13)** Let's check out a few that you might see.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=15)** Here we see the seven-layer OSI model.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=17)** Let's compare this against the TCP/IP model, and commonly the TCP/IP model combines the OSI model's physical and data link layers into a single network access layer.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=30)** The network layer is renamed as the internet layer and the transport layer name stays the same.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=35)** The big difference between these two models though is combining layers five through seven into a single application layer, and one variant that you might see calls the network access layer the network interface layer, or you might see this layer called the link layer.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=53)** And what we've seen up to this point is a four-layer TCP/IP model.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=57)** However, some literature shows a five-layer TCP/IP model.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=61)** And in one variation of that five-layer model, the TCP/IP model keeps the original OSI model's physical and data link layers.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=69)** And finally, you might see a variation of the five-layer TCP/IP model or the bottom two layers are the physical and network interface layers.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-ip-model?u=76281980&t=78)** And each variation of the TCP/IP model is still a reference model and it can be a helpful tool to categorize devices as you learn more about networking.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (9), osi (4)
> **Code Keywords:** let (2), interface (2), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Common network layer protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=1)** - [Instructor] Next, I want to focus on layer 3 of the OSI model which, do you remember?
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=6)** is the network layer.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=7)** Specifically, we're going to get acquainted with two of the most common protocols at layer 3, and they are IP, which stands for internet protocol and ICMP, which stands for internet control message protocol.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=19)** With IP, we can assign addresses to our network devices and send data to our intended recipient by specifying that recipient's IP address.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=28)** It's a lot like sending a letter through the mail.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=31)** Imagine that you want to send a piece of mail from your home to your friend's home.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=35)** You'll put their address on the front of the envelope and you might write your return address in the upper left hand corner of the envelope, and the postal service picks up the mail from your location, and based on the address on the envelope, they forward the envelope to your friend's house.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=49)** And mailing a letter is a lot like sending data with IP packets.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=53)** Think of the IP packet like the envelope containing some type of data.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=57)** And that IP packet contains a destination IP address saying where you want to send the packet and it has your device's IP address so the recipient knows how to communicate back to you.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=70)** And there are two versions of IP in use today.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=73)** We have IP version 4 and IP version 6.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=78)** And we'll dive into the structure of these IP addresses in another video, but for now I want you to understand that IP is a layer 3 protocol.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=85)** An IP packet contains both a source and a destination IP address.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=91)** Now, what's contained inside of this layer 3 IP packet?
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=94)** Well, it could be a variety of layer 4 segments, like TCP or UDP segments, more on that in the next video.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=101)** But while we're still focused here on layer 3 I want to tell you about ICMP.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=106)** That's another layer 3 protocol that actually gets carried inside of an IP packet.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=111)** That's right.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=113)** We can have a layer 3 protocol wrapped up or encapsulated inside of another layer 3 protocol.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=119)** And like IP, ICMP resides at layer 3 of the OSI model, but it gets carried inside an IP packet.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=127)** So what does ICMP do?
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=128)** Well, it can send error messages if certain things go wrong in a transmission.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=132)** For example, my computer might be trying to send traffic out to the internet, and I need to send traffic to my local router, which will then forward traffic out to the internet.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=141)** If my router I'm trying to reach is nowhere to be found, my computer will receive an ICMP message saying that it cannot reach the router.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=150)** But probably the most common use you and I will have for ICMP is when we're diagnosing a network issue or confirming that things are functioning as they should.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=159)** You see, there's a utility called ping, which can check to see if one device on a network can communicate with another device on the network.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=167)** For example, from a command prompt on my computer or a Cisco router or a switch for that matter, I could say ping 10.1.1.2 to see if my device can reach an IP address of 10.1.1.2, and ICMP is used to make that happen.
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=182)** Specifically, my computer sends an ICMP Echo Request packet to the IP address that I specify in the ping command.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=190)** And if that IP address is indeed reachable, it will respond with an ICMP Echo Reply message, letting my device know that the ICMP Echo Request was successfully received.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-network-layer-protocols?u=76281980&t=201)** And that's a look at the most utilized layer 3 protocols, IP and ICMP.

> [!info]- Semantic Content
>
> **Env Vars:** icmp (11), osi (2), tcp (1), udp (1)
> **Versions:** 10.1.1 (2), version 4 (1), version 6 (1)
> **Definitions:** stands for (2), is a  (2)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (1)
> **Code Keywords:** switch (1)
> **Cross-References:** in the next (1)
> **Tools:** command prompt (1)

#### Common transport layer protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=0)** - [Instructor] Before we jump into layer four, let's catch our breath and make sure that we're visualizing how everything is coming together.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=7)** Do you recall the names for data?
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=9)** We used the acrostic "bacon frying produces salivation" as a memory aid to remember bits at layer one, frames at layer two, packets at layer three, and segments at layer four.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=21)** So here at layer four we're going to have segments containing data from upper layers.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=27)** That data could be the contents of an email or a web page that we're viewing as just a couple of examples.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=33)** That layer four segment is then going to be encapsulated in a layer three packet which is then going to be encapsulated in a layer two frame.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=43)** And finally, the frame is transmitted as a series of ones and zeros that we refer to as bits.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=50)** And there are two primary protocols at the transport layer.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=54)** They are TCP, which stands for transmission control protocol, and UDP, which stands for user datagram protocol.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=62)** The biggest distinction you need to know when it comes to TCP and UDP is that TCP is considered to be a reliable transport protocol, also known as a connection oriented protocol, while UDP is considered to be an unreliable transport layer protocol, also known as a connectionless protocol TCP adds several extra bites of data to its segments that's going to allow it to confirm that the intended recipient really did receive the data and those extra bytes, also known as overhead, consume extra bandwidth and can slow things down ever so slightly.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=99)** So if we have an application that needs minimal delay and it's not a big deal if we occasionally drop a segment, UDP might be the way to go.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=108)** Now if we don't want to risk losing any bytes at all, so just when we're loading a webpage or downloading a file, TCP is the way to go.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/common-transport-layer-protocols?u=76281980&t=115)** But if we're streaming something like let's say voice or video over the network, and we want minimal delay and it would not be all that noticeable if we dropped the occasional video frame every now and then, considering that we might be sending 30 frames a second, in that case, UDP might be the best option.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (5), udp (5)
> **Definitions:** known as (3), stands for (2)
> **Code Keywords:** let (2), finally, (1), case, (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### TCP three-way handshake
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=0)** - [Instructor] What makes TCP so reliable?
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=3)** Well, it begins with a three-way handshake between the sender and receiver.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=7)** The first step in the three-step process is where the sender sends a synchronization message, which we call a SYN message to the receiver, which is essentially saying, "Hey, I'd like to talk to you."
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=19)** And when the receiver gets that send message, if it's willing to communicate with the sender, it's going to send a couple of messages back to the sender.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=27)** First, it sends a SYN message of its own saying, "Awesome.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=31)** I'd like to talk to you too."
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=32)** And second, it sends an acknowledgement message, which we call an ACK back to the sender that acknowledges receipt of the send message that was received from the sender.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=43)** And after the sender receives that set of SYN-ACK messages, it needs to acknowledge the SYN sent by the receiver.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=51)** So it's going to send an ACK of its own saying, "Great, I'm willing for you to talk to me."
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=55)** Then when the sender starts sending segments to the recipient, it starts off cautiously.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=61)** It doesn't want to send too many segments before it receives some sort of confirmation letting us know that they're being received.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=68)** So the sender might start off by sending a single segment.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=71)** Let's say it's numbered segment one.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=73)** Then they wait for the receiver to acknowledge receipt, and request the next segment.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=79)** Hopefully, the receiver is going to send an ACK back to the sender saying, "Okay, I'm ready for segment two."
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=85)** Well, since the first segment made it without any issue, the sender gets a little braver, and it sends a couple of segments, which are numbered segments two and three in our example before it expects an acknowledgement back from the receiver.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=99)** And the number of segments the sender is sending before expecting an acknowledgement is called the window size.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=106)** In our example, the sender sent a single segment, which was a window size of one.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=111)** Then it sent two segments before expecting an acknowledgement.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=115)** You guessed it.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=115)** That's a window size of two.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=117)** And once the receiver responds to the sender with an ACK sating it's ready for segment four, the sender doubles the window size again, and it sends four segments, segments four, five, six and seven in our example before it expects an acknowledgement.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=133)** The exponential increasing of the window size makes the transmission more efficient because less time is going to be spent waiting to receive those ACKs back from the receiver.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=143)** Of course if a segment did get dropped, the sender would know that based on the ACK messages it's receiving from the receiver, and it would be more cautious, and reduce its window size, because it concludes it must have been sending to aggressively.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=158)** That's why TCP is considered reliable.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=161)** It sets up a session and receipt of the segments are acknowledged by the receiver.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=166)** That's as compared to UDP, which is basically a fire and forget approach where the sender sends a segment, and they sure hope it gets to the destination, but there's no guarantee it will.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=176)** Again, the trade off is TCP requires a little extra bandwidth, and it adds a little extra delay to gain reliability.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=184)** So the appropriate transport layer protocol varies based on the network service being provided.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=189)** In fact, in our next video, we'll learn some popular layer seven protocols, and we'll see if they use TCP, UDP, or if they can use either one.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/tcp-three-way-handshake?u=76281980&t=199)** I'll see you in that video in just a moment.

> [!info]- Semantic Content
>
> **Env Vars:** ack (6), tcp (4), syn (4), udp (2)
> **Code Keywords:** let (1)
> **Cross-References:** next video (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Application layer protocols and port numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=0)** - [Instructor] To wrap up this chapter, let's discuss some of the more common protocols living up at layer seven of the OSI model, the application layer.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=8)** These protocols provide network services, and when we discuss these protocols, we want to identify them as either a TCP or a UDP protocol.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=18)** Remember TCP and UDP live at the transport layer, and TCP gives us reliable communication while UDP is considered unreliable.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=28)** Meaning that it does not make any effort to confirm a transmission was successfully received.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=33)** We also want to identify the port number used by each of these protocols.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=38)** When we send a segment destined for a specific port, the receiving device knows what service we're trying to access.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=44)** For example, let's say that we have a server running both a web service and an email service.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=49)** When we communicate with that server using TCP Port 80 as an example, we're saying we want to access that server's web service.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=57)** The first layer seven protocol is one you may already be familiar with.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=61)** It's HTTP or Hypertext Transfer Protocol.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=65)** This is the protocol that we use to communicate with a traditional web server, and it uses TCP Port 80.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=72)** Next step is HTTPS or Secure HTTP.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=76)** When we have a secure connection with a web server, we usually want to use HTTPS to protect our data from eaves droppers, and it uses TCP Port 443.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=88)** And when we're pointing our browser to a web server, we probably are not going to be entering the IP address of the web server into the browser.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=95)** I certainly don't make a habit of memorizing IP addresses.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=98)** Instead, we probably want to use a name.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=102)** For example, we might enter a name like this but to send packets to this site, our browser needs to know the IP address of the web server.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=111)** And to get that information, we can ask a DNS server where DNS stands for Domain Name System.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=118)** And we communicate with that server using the DNS protocol, which can use either TCP or UDP Port 53.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=126)** And one of the protocols I'll dig into more later is Network Time Protocol or NTP for short.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=132)** We'll see that our network devices can use NTP to learn time from time sources on the network.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=137)** And this might be one of the easiest port numbers to remember.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=140)** It reminds me of the old Jackson Five song that goes, "ABC, easy as 123."
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=146)** Well, that's the port number used by NTP.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=149)** So when I think of NTP, I hear that tune in my head with the lyric "NTP, easy as 123."
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=156)** And specifically, it's UDP Port 123 that NTP uses.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=162)** Another protocol that we'll investigate later is DHCP, which stands for, Dynamic Host Configuration Protocol.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=169)** This is a super useful protocol because it gives us a way to automatically assign IP address information to our network devices without having to visit each device and do a manual configuration, and I'd like you to know that DHCP uses UDP Port 67.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/application-layer-protocols-and-port-numbers?u=76281980&t=186)** And there are other layer seven protocols but these five are the ones that you must understand to be a successful network engineer.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (7), udp (6), ntp (6), dns (3), http (2)
> **Ports:** port 80 (2), port 443 (1), port 53 (1), port 123 (1), port 67 (1)
> **Code Keywords:** let (2), for, (1), super (1)
> **Definitions:** stands for (2), is a  (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 2. Network Concepts and Components

> [↑ Back to Table of Contents](#table-of-contents)

#### CSMA/CD vs. CSMA/CA
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=0)** - [Instructor] Consider this topology.
>
> **[0:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=2)** Now, it's unlikely that you would see a topology like this today, but back in the late eighties, when I first started working with networks, this is exactly what we had.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=10)** It's called a bus topology.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=11)** Specifically, we had an ethernet bus and we used the long coaxial cable, not really the same thing, but somewhat similar to what you might have with your cable TV connection.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=21)** And this coaxial cable, it weaved its way from one room to the next.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=26)** And in order to connect the device into the network, we would tap into that cable.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=30)** Now, here we have three devices.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=32)** We have PCs one and two and a server and let's say PC one wants to send data to the server.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=39)** In a bus topology, only one frame of data can be on the wire at any time.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=44)** So first, PC one listens to the wire to see if there's any traffic currently on the wire.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=50)** And if the coast is clear, PC one transmits its frame up to the server.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=55)** Similarly, if PC two wants to communicate with a server, it listens to the wire.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=60)** And if all is quiet, PC two sends its data.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=64)** And if PC two hears traffic that PC one is currently sending to the server, PC two would set a random amount of time that it would wait and then it would try again.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=74)** Now problems start to happen when both PCs listen to the same period of silence on the wire.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=80)** They both simultaneously conclude that it's safe to transmit.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=84)** And when they do, their frames collide.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=88)** That's going to corrupt both frames.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=89)** This is called a collision, and in a bus topology like this, the network interface cards in the PCs, they see a spike of voltage resulting from that collision.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=100)** And they both realize that a collision just occurred and they're going to have to retransmit their frame.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=105)** And to try and prevent the same thing from happening again, each PC sets their own random back off timer, which will very likely be different values for each PC.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=115)** Then when each PC's timer expires, the PC retransmits their data.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=121)** And the protocol behind this technology is called CSMA/CD, which stands for carrier sense multiple access with collision detection.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=130)** Carrier sense means that a device can listen to the wire and sense if there's any traffic.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=136)** Multiple access means that multiple devices can access the same wire, assuming they take turns transmitting.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=143)** And finally, collision detection means that if a collision does occur, as we saw in this example, that collision will be detected and any corrupted frames have to be retransmitted.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=154)** But moving forward in time a bit, in the early to mid 1990s, these coaxial cable based bus topologies, they started to be replaced with hub based star topologies.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=165)** The topology was called a star because devices radiated out from a central connection point called a hub, much like light radiates out from a star.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=175)** An ethernet hub, like we see here, it works the same logically as the bus.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=181)** In other words, it still uses CSMA/CD, collisions can still occur, and only one frame is allowed on the network at any one time.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=189)** But now when I say the network, we're including all cables connecting into that hub.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=195)** The addition of the hub changes how clients were notified about collisions.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=199)** Instead of detecting a voltage spike on the wire, the hub proactively notified connected devices that a collision just occurred by sending out a jamming signal.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=210)** Now, let's say that PC one wants to send data to the server.
>
> **[3:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=213)** Since there's no traffic on the network, PC one's frame makes it to the server unscathed.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=218)** However, if both PC one and PC two simultaneously listen to the network to determine if anyone is currently transmitting, then they hear the same period of silence.
>
> **[3:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=228)** And they, once again, simultaneously conclude that it's safe to transmit.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=233)** And because they both transmit at the same time, a collision occurs.
>
> **[3:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=237)** And just like with a bus topology, each PC sets a random back off timer that will have to expire before that PC can try retransmitting again.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=247)** Now today's hubs, they've largely been replaced with switches, which helps alleviate our concerns about collisions.
>
> **[4:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=253)** But we still have a very real issue with collisions in wireless networks.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=258)** Most wireless networks use a variant of CSMA/CD, called CSMA/CA, which stands for carrier sense multiple access with collision avoidance.
>
> **[4:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=271)** In other words, we're still trying to avoid collisions, but since a wireless client isn't physically connected to the network via a cable, it's not going to be able to detect collisions.
>
> **[4:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=281)** And as a result, it's possible that some data might be corrupted.
>
> **[4:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=284)** Now CSMA/CA, it relies on upper layer protocols for any error detection and correction.
>
> **[4:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=291)** Now let's say client one wants to send traffic out to our corporate network via that switch on screen.
>
> **[4:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=295)** To do that, they'll wirelessly transmit their traffic, which is received by an antenna connected to a wireless access point, or AP for short.
>
> **[5:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=304)** That AP does have a physical connection out to the corporate network, so that traffic that was wirelessly received is then sent over a physical connection to a network switch.
>
> **[5:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=314)** And just like CSMA/CD, client one listens to make sure that nobody else is trying to communicate with the AP.
>
> **[5:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=321)** And if the coast is clear, client one sends its traffic to the wireless AP, which then sends it out to the corporate network.
>
> **[5:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=328)** And the signal strength of those radio waves is more than sufficient to be received and understood by the wireless AP.
>
> **[5:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=335)** However, let's say that client two is physically located further away from the AP than client one.
>
> **[5:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=342)** If the AP is positioned to receive transmissions from either client, but those clients are too far away from one another to see each other's transmission, that's referred to as a hidden node problem.
>
> **[5:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=353)** So in this case, client one's transmission, even though it was received by the AP, it weakened by the time it got to client two, which could cause client two to erroneously conclude that it was safe to transmit.
>
> **[6:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/csma-cd-vs-csma-ca?u=76281980&t=365)** And that's a look at collision detection and collision avoidance technologies, both of which are important to understand as you begin to learn about devices that break up collision domains.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), switch (2), this, (1), interface (1), finally, (1)
> **Definitions:** means that (3), is called (2), stands for (2), in other words (2)
> **CLI Commands:** cd (4), make (1), node (1)
> **Env Vars:** csma (6)
> **Analogies:** just like (2), similar to (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### Hubs and switches
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=0)** - [Instructor] PC1 wants to communicate with the printer.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=3)** However, the ethernet hub has no idea where any devices reside.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=8)** The hub is acting as what some call a bit spitter.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=11)** It simply takes bits in on one interface and then repeats those bits at all other interfaces in a desperate attempt to get the bits to their intended recipients.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=21)** Well, good news, the printer, which was the intended recipient, it did receive the transmission, and now it's going to reply back to the PC.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=29)** Again, the hub has no idea how to reach the PC specifically.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=32)** So it, again, floods copies of the frames at all other interfaces.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=36)** This is just not a scalable solution and we probably don't want any of these hubs in our networks today.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=42)** So what do we use instead of a hub?
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=44)** Well, today we want to use an ethernet switch.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=47)** It still allows us to connect our devices to a centralized wiring closet in a star topology, just like a hub but a switch is going to learn which devices live off of which of its interfaces, and it will make intelligent forwarding decisions.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=61)** We don't need to worry about collisions with a switch, because in the very unlikely event that a collision is seen off of one of our switch ports that's not going to impact traffic off of any of our other switch ports.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=72)** And switches track, what MAC addresses are connected to which ports.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=76)** Then when a frame comes into the switch destined for a specific MAC address, if the switch already learned that MAC address it will only forward that frame out of the port connecting to that destination MAC address.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=89)** Consider this network, with a couple of PCs, a printer, and a server all connected to a switch.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=95)** Initially the switch hasn't learned the MAC address of any of these devices.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=99)** So initially it's MAC address table is empty.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=102)** Now PC1, wants to communicate with the printer and it sends a frame into the switch.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=107)** The switch sees the frame come in and it notices that the frame came in on port gig1 and that frame had a source MAC address of all A's , and the switch is going to make a note of that inn its MAC address table.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=120)** Then if the switch receives another frame later on destined for the all A's MAC address the switch can send that frame just out of gig1.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=128)** The switch also sees that the frame it just received is destined for the printer with a MAC address of all C's.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=134)** But the switch doesn't yet know where the all C's MAC address lives.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=137)** So to make sure that the frame does get to its destination the switch is going to send a copy of the frame out of all of its ports other than the port on which the frame was received.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=147)** This process is called flooding.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=150)** And after this flooding happens, PC2, the printer and the server, they each receive a copy of the frame that was only intended for the printer, PC2 and the server, they look at that destination MAC address on those frames and they say, "Hey, this isn't for me," and they discard those frames.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=166)** However, the printer looks at that frame and it realizes it was the intended recipient of the frame, and it responds back to PC1, which has a MAC address of all A's.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=176)** When the switch receives the frame from the printer, it sees the frame came in from a device with an all C's MAC address, and the frame came in on port gig3.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=185)** The switch then adds that information to its MAC address table.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=189)** The switch also sees that the frame is destined for the A's MAC address and the switch examines the MAC address table, and it sees that, oh, the all A's MAC address, that lives off of port gig1, and it sends the frame up to PC1.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=202)** Then all future communication between PC1 and the printer, it goes directly between PC1 and the printer because the switch has now learned the MAC addresses of those devices.
>
> **[3:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=213)** And after a few more actions we have a fully populated MAC address table in our switch.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=218)** And additional frames going to any of these MAC addresses, they're only going to be sent out of the appropriate switch ports.
>
> **[3:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/hubs-and-switches?u=76281980&t=224)** And that's a look at how an ethernet switch can populate its MAC address table and make intelligent forwarding decisions based on destination MAC addresses.

> [!info]- Semantic Content
>
> **Env Vars:** mac (23), pc1 (6), pc2 (2)
> **Code Keywords:** switch (25), interface (1)
> **CLI Commands:** make (4)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Routers
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=0)** - [Instructor] Next up, let's consider a router.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=3)** While a switch can keep track of the MAC addresses to which it connects, by default, all of the devices connected to a switch belong to the same IP version four or IP version six network.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=14)** The device used to interconnect networks is called a router.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=18)** And when we first configure a router and tell it what networks it's connected to, the router adds those directly-connected network entries into its IP routing table, and in networks with more than one router, those routers can exchange route information using a routing protocol such as OSPF.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=36)** But to make things easier to visualize, let's consider this topology that has just a single router.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=42)** In this example, the router is directly connected to three networks.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=46)** Interface gig two is directly connected to the 10.1.1.0 network, and that network has 24 bits in its subnet mask.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=57)** And if you've not worked with subnet masks before, no worries.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=60)** We'll get into an IP addressing discussion in a later course in the series.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=64)** For now, just think of these networks as being like different streets and just like a street can have several houses, each with their own house number, sharing the same street, a network address can have several devices sharing the same network address.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=78)** Now, back to our topology.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=79)** Notice that interface gig three is directly connected to the 192.168.1.0 network and that network also has a 24 bit subnet mask.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=91)** But what about that 0.0.0.0 network with no bits in its subnet mask connected to interface gig one?
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=100)** Well, this route is called a default route and it's commonly used when a router connects out to the internet.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=106)** The logic is if a router only has one interface that connects it with the rest of the world, if the router doesn't know about a specific network, the only other place that network could possibly be is out of that default interface.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=120)** Also, it takes a lot of router resources to store the complete internet routing table, which at the time of this recording contains over 900,000 routes.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=130)** So if a router doesn't have specific knowledge of a network, then it will just send packets out of its single interface that connects it to the rest of the world.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=139)** That's what a default route does for us.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=141)** By the way, when we talk about a router forwarding traffic, instead of calling that traffic frames like we did with a switch, remember that a router is a Layer 3 device, so we call that traffic packets.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=154)** Now, let's say that PC1 wants to communicate with a web server that lives out on the internet, and let's pretend that the web server has an IP address of 203.0.113.1.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=165)** PC1 sends a packet to the router, the router then peruses its IP routing table, and the only entry that contains 203.0.113.1 is the default route of all zeros, because that default route contains all possible IP version four addresses.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=184)** And using that default route, the router then sends the packet out to the internet connected to interface gig one, and the web server sends the requested webpage back to PC1.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=195)** As another example, PC1 now wants to communicate with the local server that has an IP address of 192.168.1.200.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=203)** PC1 sends a packet to the router, the router, once again, looks to see if it has a network entry that contains the 192.168.1.200 IP address and it does.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=215)** There's an entry that says that the 192.168.1.0 network is connected to interface gig three.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=223)** However, we said that a default route of all zeros contains all possible IP version four addresses, and that default route points out of interface gig one.
>
> **[3:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=234)** Does that mean we have conflicting information?
>
> **[3:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=236)** Which interface are we supposed to use?
>
> **[3:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=239)** Well, here's the way it works.
>
> **[4:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=240)** If the router has more than one entry in its IP routing table that contains the destination IP address, the router selects the most specific route, which we also refer to as the route with the longest prefix, meaning the route with the most bits in its subnet mask, and the default route doesn't have any bits in its subnet mask, but the 192.168.1.0 route, it has 24 bits in its subnet mask.
>
> **[4:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=267)** So that's the route we use.
>
> **[4:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=268)** And the packet is forwarded to the server out of interface gig three.
>
> **[4:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=273)** And that's a basic look at how routers make packet forwarding decisions based on destination IP addresses.
>
> **[4:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=279)** And the key to determining what type of device we're using is understanding what type of data they're processing.
>
> **[4:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=286)** Remember the memory aid?
>
> **[4:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=287)** Bacon frying produces a salivation?
>
> **[4:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=289)** Let's sum that up.
>
> **[4:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=291)** A hub deals with bits, so it's considered to be a Layer 1 device.
>
> **[4:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=296)** A switch deals with frames and Layer 2 addresses called MAC addresses, so it's considered to be a Layer 2 device.
>
> **[5:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=303)** And a router deals with packets and Layer 3 addresses called IP addresses.
>
> **[5:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=307)** So a router is considered to be a Layer 3 device.
>
> **[5:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=311)** And another distinguishing characteristic between these network devices deals with how they handle collisions and broadcasts.
>
> **[5:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/routers?u=76281980&t=318)** Let's jump into that discussion in our next video.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (11), let (6), switch (4), default, (1)
> **Versions:** 192.168.1 (5), 203.0.113 (2), 10.1.1 (1), 0.0.0 (1)
> **Env Vars:** pc1 (5), mac (2), ospf (1)
> **Definitions:** is called (2), is a  (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), just like (1)
> **Cross-References:** next video (1)
> **Prerequisites:** configure (1)

#### Collision and broadcast domains
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=0)** - [Instructor] Earlier we discussed the concept of a collision where we have two frames on a portion of a network that only allows one frame at a time.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=9)** Well, based on that discussion, let's define the term collision domain.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=14)** As you see onscreen, a collision domain is a segment of our network that only supports one frame at any one time.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=21)** Let's check out a few examples.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=23)** When we discussed a hub, we said that it logically operated like the legacy bus topology that only allowed one frame at a time to be on a coaxial cable.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=32)** That means that all ports on a hub, each of which connect out to different network devices, they all belong to the same collision domain.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=41)** Even though those devices plug into different ports on a hub, logically, they're connected to one wire and therefore, we can support only one frame at a time on all of these links combined.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=53)** However, with an ethernet switch, each port belongs to its own collision domain.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=58)** The reason is the switch is intelligent enough to learn which MAC addresses reside off of which ports, eliminating the need to flood frames out all ports.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=68)** As an example, in the unlikely event of a collision of the port connecting out to PC2 in this topology, the remaining devices, they could continue to function, oblivious to the collision that occurred off of that one switch port.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=81)** So in this topology, how many collision domains do we have?
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=85)** Well, the devices are connecting into four ports on our switch.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=89)** And since each port represents a separate collision domain, we could conclude that this topology has four collision domains.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=97)** Next, let's define another type of domain, a broadcast domain.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=102)** While a collision domain represented an area of a network throughout which a collision would impact all connected devices, a broadcast domain is an area of a network throughout which a broadcast is sent.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=116)** What exactly is a broadcast though?
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=118)** Well, it could be a Layer 2 frame where all the bits in the destination MAC address are all set to 1s, resulting in a MAC address of all fs in hexadecimal notation, or it could be a Layer 3 packet where all the host bits are set to 1s.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=132)** And we'll get into all the binary math behind that in an upcoming video in this series.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=137)** But for now, just understand that a broadcast goes to every device in a network address space.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=143)** And remember earlier on in this course when I compared an IP address to the address of a house on a street?
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=150)** The street was analogous to the network portion of an IP address, and the house number was analogous to the host portion of that IP address?
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=158)** By the way, during this series, I'll sometimes refer to a network as a subnet or a VLAN, which stands for a virtual local area network.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=168)** So whether I say network address space, subnet, or VLAN, I'm talking about the same thing.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=174)** Now, let's reinforce all this with a few examples.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=176)** In order to send traffic from one network address space to another, we need to route.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=181)** That's not something that a hub can do, meaning that all ports on a hub, they all reside in a single broadcast domain.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=189)** And later in this series, we're going to discuss how we can logically group different ports on an ethernet switch into different VLANs.
>
> **[3:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=197)** For example, ports 1 through 12 might belong to a VLAN named Engineering, while ports 13 through 24 belong to a different VLAN named Sales.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=206)** And each of those VLANs will be a separate network address space, and to get traffic from one VLAN to another, we would have to route that traffic.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=214)** But by default, all ports on a switch, they all belong to the same VLAN, in other words, the same network address space.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=221)** That means that a broadcast that comes into one switch port gets flooded out to all other switch port.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=227)** But by default, all ports on a switch belong to the same VLAN, in other words, the same network address space.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=233)** That means that a broadcast that comes into one switch port gets flooded out all other switch ports.
>
> **[4:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=240)** So again, by default, all ports on a switch belong to a single broadcast domain.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=247)** And since a router has the unique ability to forward traffic between network address spaces, we say that each port on a router resides in its own broadcast domain.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=258)** That means when a broadcast comes into a router port, the router will not forward that broadcast out any other router ports.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=266)** Now in this example, our router has three ports or interfaces in use.
>
> **[4:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=270)** That means in this topology, we have three broadcast domains.
>
> **[4:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=275)** And finally, in this video, let's get some practice.
>
> **[4:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=277)** Specifically, I'd like you to pause the video and determine the number of collision domains in this topology and also the number of broadcast domains.
>
> **[4:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=287)** Then resume the video and we'll go through the solution together.
>
> **[4:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=291)** All right, how did you do?
>
> **[4:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=293)** Well, let's go through this solution together and find out.
>
> **[4:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=296)** First, let's count the number of collision domains that we have.
>
> **[4:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=299)** We know that each switch port is in its own collision domain.
>
> **[5:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=303)** That means off of Switch 1, we have three collision domains.
>
> **[5:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=307)** But what about that link between routers R 1 and R 2?
>
> **[5:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=310)** Well, just like a collision seen off one switch port doesn't impact devices off other switch ports, the same holds true for routers.
>
> **[5:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=317)** A collision seen off one router port, it doesn't impact devices off other router ports.
>
> **[5:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=322)** That means the link between R 1 and R 2 represents our fourth collision domain.
>
> **[5:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=327)** And just like Switch 1, Switch 2 has three ports in use, that gives us three additional collision domains.
>
> **[5:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=334)** But what about broadcast domains?
>
> **[5:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=336)** Remember that broadcasts are only stopped by routers?
>
> **[5:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=340)** And if we look at router R 1, we see that it has three ports.
>
> **[5:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=344)** However, the link going from R 1 to Switch 1 is on the same VLAN as the link going from R 2 to Switch 1.
>
> **[5:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=351)** That means the leftmost ports on R 1 and R 2, they're in the same broadcast domain, our first broadcast domain in this topology.
>
> **[5:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=359)** We also have a link directly between R 1 and R 2.
>
> **[6:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=362)** In this case, the broadcast sent by one router will be received by the other router and then dropped, so that link is its own broadcast domain.
>
> **[6:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=371)** And finally, notice the rightmost ports on R 1 and R 2, they both connect to Switch 2?
>
> **[6:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=377)** Meaning that they share a broadcast domain.
>
> **[6:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=379)** That's our third broadcast domain.
>
> **[6:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=382)** So what's our tally?
>
> **[6:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/collision-and-broadcast-domains?u=76281980&t=383)** We have a grand total of seven collision domains and three broadcast domains.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (21), let (7), default, (3), finally, (2), continue (1)
> **Env Vars:** vlan (8), mac (3), pc2 (1)
> **Definitions:** means that (3), is a  (2), in other words (2), is an  (1), stands for (1)
> **Cross-References:** we discussed (2), later in (1)
> **Analogies:** just like (2), for example (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Wireless access points (APs)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=0)** - [Instructor] Our homes, workplaces, airports, coffee shops, and just about any other place you can imagine is likely to have some sort of wireless networking capability.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=9)** And sometimes we hear wireless networking referred to as wifi.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=13)** Well, technically wifi is the name of an alliance that certifies wireless networking devices, but you're still likely to hear terms such as wireless LAN, wireless network or wifi used synonymously.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=26)** And typically when a wireless device wishes to communicate on a network, it sends radio signals to a wireless access point, and you'll often see access point abbreviated as AP.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=38)** The AP then uses a wired connection to send the data received wirelessly to a switch, which connects out to the rest of the wired network and perhaps to the internet.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=48)** And that access point contains one or more antennas that it uses to communicate with wireless devices.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=54)** And if that AP has multiple antennas, it can communicate with multiple wireless clients simultaneously.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=60)** And also as seen in this typology, an AP usually connects via a wired connection back to an ethernet switch.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=66)** However, some APs operate in what is called mesh mode where instead of being hard wired back to an ethernet switch the AP receives signals and then retransmits those signals, and that approach allows us to have wireless coverage in locations that are not in close proximity to a switch.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=87)** And our wireless access points can be managed in a couple of different ways.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=91)** Specifically, we can have autonomous AP management or lightweight AP management.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=96)** First let's consider autonomous access points.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=99)** Here each access point is managed individually and they don't have any direct knowledge of one another and they're not centrally administered.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=108)** And while that might be fine for a very small installation, it's not going to scale very well.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=113)** As a second option, we could have lightweight APs where a wireless land controller lets us administer all the APs from a single administrative interface.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=122)** And if we go with a lightweight option, there are a couple of protocols that you might run into that are used to communicate between the wireless LAN controller and the APs.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=131)** The first protocol is LWAPP, which stands for lightweight access point protocol.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=137)** However, that's an older protocol that's becoming less popular in favor of CAPWAP, and that stands for control and provisioning of wireless access points.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/wireless-access-points-aps?u=76281980&t=146)** And when deciding on what option to go with you should consider the cost of purchasing the wireless LAN controller against the convenience of having a single point of administration, but a benefit of having multiple access points is they allow us to roam around untethered to a network cable while maintaining a network connectivity.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), let (1), interface (1)
> **Env Vars:** lan (3), lwapp (1), capwap (1)
> **Definitions:** stands for (2), is called (1)
> **Analogies:** imagine (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=0)** - [Instructor] The purpose of a network firewall is in general to protect our inside network such as the network of our company from an outside threat, such as an attacker out on the internet.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=11)** And the term firewall comes from a structural element that you might see in a building.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=16)** If there is a fire in one area of a building, the firewall is there to prevent the fire from spreading into another area of the building.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=23)** That's basically what the network firewall is doing.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=26)** It's trying to protect devices in a network from devices in another network that might present some sort of danger.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=32)** Specifically, there might be an attacker out on the internet sending malicious traffic into our network.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=38)** Well, we want our network firewall to recognize that traffic as being malicious and drop it.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=44)** Additionally, we might want to block future connections and data coming from that attacker.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=49)** And there are three different types of firewalls that I want you to know about.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=52)** The first type, and I even hesitate to call this a firewall because it's so rudimentary, but it's called a packet filter.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=58)** And a packet filter is basically a set of rules.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=62)** For example, a rule might say that a specific source IP address could go to a specific destination IP address using a specific protocol.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=71)** But consider this scenario.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=73)** We might say, we want users on the inside of our network to go out to the internet because we trust our users, but we don't want devices on the internet to send data into our network because we don't trust users out on the internet.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=86)** That might sound like a good rule, but let's look a little bit deeper.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=89)** Maybe PC1, as an example, wants to go out to the internet, and a firewall rule says that inside users are allowed to go out to the internet, and it allows that user's traffic to reach the web server.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=102)** The web server then sends the contents of the webpage back towards the user.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=106)** Unfortunately, we had a rule saying that internet users could not communicate with inside users.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=112)** Do you see the issue?
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=114)** With the packet filter configuration, our corporate firewall doesn't realize that traffic attempting to come into the corporate network from that internet based web server was actually return traffic from a session initiated inside of our corporate network.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=129)** So this is not going to be a great solution, at least for internet access.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=133)** Now, a packet filter firewall could still be useful, for example, to limit which users could connect to specific corporate resources, but it's generally not a good fit for our internet firewall.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=144)** Next, consider a stateful firewall, which overcomes the issue that we had with the packet filter.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=151)** With a stateful firewall, the firewall is doing what is called packet inspection.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=156)** It still wants to trust the inside network and not trust the outside network.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=160)** But if that traffic originated on the inside of the network, like from PC1 going out to the internet based web server, the firewall is going to make a note of that outgoing traffic.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=170)** For example, the stateful firewall might inspect that traffic and make a note saying that PC1's IP address attempted to contact an internet based web server with a specific destination IP address.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=183)** And PC1 was using a specific protocol such as HTTPS to securely load a webpage.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=189)** Then when the return traffic from the web server tries to enter the corporate network, the stateful firewall is going to recognize that this is return traffic from a session that originated inside of the corporate network.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=203)** So it's going to allow that traffic to come in.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=205)** We might hear a modern day firewall called a next generation firewall, or NGFW for short, or a layer 7 or application layer firewall.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=215)** With a next generation firewall, we can do what is referred to as deep packet inspection and identify with a tremendous amount of granularity traffic that we might not want to leave our company's network.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=226)** For example, consider employee information.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=229)** We might decide that under no circumstance will we send employee information out to the internet.
>
> **[3:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=234)** This firewall might also be able to go check an internet based database of current security threats, and based on that threat database, this next generation firewall will be able to better recognize malicious traffic attempting to come in from the internet.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=249)** Other features found in next generation firewalls might include things such as content filtering to prevent certain categories of websites from being accessed.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/firewalls?u=76281980&t=258)** And some of these next generation firewalls can even inspect encrypted traffic to a very high degree of certainty recognizing threats inside encrypted packets.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (4)
> **Env Vars:** pc1 (4), https (1), ngfw (1)
> **CLI Commands:** make (2)
> **Code Keywords:** type, (1), let (1)
> **Definitions:** is a  (1), is called (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Intrusion detection and prevention systems
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=0)** - [Instructor] There are so many types of attacks that someone could launch against our network from the internet.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=5)** So to better secure our network, it would be super useful if we could have a database of well-known attacks and that would allow us to compare traffic coming into our network against that database and recognize the signatures of well-known attacks.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=18)** Then we could take action to stop the attack.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=21)** Well, in this video we'll consider a couple of network appliances that can do exactly that.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=25)** And those two appliances are an IDS sensor, where IDS stands for intrusion detection system, and an IPS sensor, where IPS stands for intrusion prevention system.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=38)** First let's consider an IDS sensor.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=41)** The IDS sensor is going to be connected to a switch and that switch will create copies of the packets that we want to analyze.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=48)** And those copies will be sent to the IDS sensor.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=51)** However, with an IPS sensor, the sensor isn't just receiving a copy of the packets.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=57)** It actually sits in line with the traffic flow and compares the original packets against that signature database we discussed.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=64)** But here in this topology we have an ethernet switch that has been configured to mirror or to make a copy of packets flowing through the switch and then send those copies out to the attached IDS sensor.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=76)** The IDS sensor then analyzes those received copies and compares them against a database of well-known attacks, which by the way, we need to keep updated.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=85)** But let's say that somebody on the internet is launching a malicious attack against the client.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=89)** And in this case, let's say that the attack was not recognized by our basic firewall.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=95)** So the attack makes it through the firewall, then the switch makes a copy, sending the original packet to its destination and sending the copy out to the attached IDS sensor.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=106)** The IDS sensor analyzes those packets and concludes, "Hey, I think we're under attack."
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=111)** And it can send a message to the firewall saying, "Hey, I want you to stop any packets coming in "from this specific IP address out on the internet, "because we have reason to believe "they're sending us malicious traffic."
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=122)** So dynamically, the firewall can create a rule saying the next time that IP address tries to come back into the network, that traffic is going to be blocked.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=131)** And while this is a great solution where we're protecting ourselves from many attacks, the client in our example, the intended victim, it does get hit with one or maybe a few malicious packets, and in some cases that can cause damage.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=145)** As a result, some would argue that even better than an IDS sensor is an IPS sensor because an IPS sensor doesn't just receive a copy of the traffic.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=154)** It sits in line with the traffic coming in from the internet.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=158)** That allows it to analyze each incoming packet and say, "Yes, it's allowed" or "No, it's not allowed" before the packet ever makes it onto the corporate network.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=166)** Now, in this example, let's say that somebody on the internet, again, is trying to attack our client.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=171)** The IPS sensor analyzes that incoming packet, notices that it matches an entry in its signature database of well-known attacks, and it's going to discard that packet before it ever gets into the network.
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=182)** Now let's wrap up this video with a clear distinction between these two types of sensors.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/intrusion-detection-and-prevention-systems?u=76281980&t=186)** An IDS sensor can inspect and react to a copy of received traffic, while an IPS sensor can inspect and react to traffic in line before it ever gets an opportunity to reach its intended victim.

> [!info]- Semantic Content
>
> **Env Vars:** ids (11), ips (7)
> **Code Keywords:** let (5), switch (5), super (1), case, (1)
> **Definitions:** stands for (1), is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### Examples of network topologies
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=0)** - [Instructor] Networks can physically interconnect in a variety of ways.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=3)** And that's our focus in this video.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=5)** We're going to consider the characteristics for a few network topologies, including a star topology, a ring topology, and finally a bus topology.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=14)** But let's begin with the most common topology that you're likely to see out there today: a star topology.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=20)** This topology is called a star topology because the connected devices radiate out from a central point, just like light radiates out from an actual star.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=30)** And one of the advantages we have with this kind of topology is that if one link were to fail the remaining links, they would continue to function.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=39)** Another advantage of a star topology is simplified wiring.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=42)** For example, we might have a wiring closet on the floor of a building.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=46)** And from that single location we can have network cables radiate out to each office.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=51)** That's a lot simpler than the bus topology that we caught a glimpse of earlier where one cable had to weave its way through all of the different locations wanting to connect to the network.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=61)** But a slight downside is the central device of the star, typically an ethernet switch.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=66)** It might be a single point of failure, meaning that if the switch were to go down, all of the connected devices, they would lose network connectivity.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=74)** That's why for mission-critical devices like servers in a data center, we might want to have more than one switch into which we connect.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=81)** That's going to add a layer of redundancy.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=83)** However, the star topology is by far the most prevalent topology that you'll see in today's networks.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=89)** And in this discussion, we've been thinking about this topology as being part of a LAN, the local area network, but think about the service provider that provides internet connectivity to your home.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=101)** They probably have lots of customers, each starring out from that service provider's equipment.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=106)** So this star topology, it could be seen in other environments, too.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=110)** You might also come across a ring topology.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=113)** Ring topologies are very common in metropolitan area networks, or MANs for short.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=118)** These MANs use fiber optic cabling to interconnect a bunch of sites around a large city.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=125)** However, if you're a MAN service provider and you have lots of customers sharing the same fiber ring, the question is how do you keep one customer's traffic isolated from another customer's traffic?
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=136)** The answer is you give each customer their own color and by color, I'm talking about wavelengths of light.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=143)** Just like the color red has a longer wavelength than the color blue, by giving different MAN customers different wavelengths of light, which we call Lambdas, you keep their traffic separate.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=154)** Also, to add redundancy, many of these MANs have dual rings, so if one ring fails, the other ring can continue forwarding traffic.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=162)** And finally recall that a bus topology allows multiple devices to connect to a single network segment with the limitation that only one device can communicate at any one time.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=172)** Honestly, you're not likely to see a bus topology today, but of the topologies discussed in this video, star topologies are super common.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/examples-of-network-topologies?u=76281980&t=181)** And if you see a ring topology, it's likely to be in some sort of metropolitan area network.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3), continue (2), let (1), function (1), super (1)
> **Env Vars:** man (2), lan (1)
> **Analogies:** just like (2), for example (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Mesh topologies
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=0)** - [Instructor] Next, let's consider the concept of a mesh topology.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=4)** We might see this in a large company's network where that company has multiple sites.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=8)** In this example, we're imagining we have a company with five sites, offices A, B, C, D, and E.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=15)** These offices are currently connected with a full mesh topology.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=19)** With a full mesh, each site connects directly to every other site, and that's great because we have an optimal path to get from any one site to any other site.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=28)** For example, if office B wants to communicate with office C, it doesn't have to send its traffic through office A.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=34)** Instead, it can communicate over that link going directly to office C.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=39)** A big challenge with a full mesh topology, however, is scalability.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=43)** The more locations we have, the more difficult it is to pay for and maintain all of those required links.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=49)** We can use this formula to calculate the number of required links for a full mesh of connections, where N represents the number of sites.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=57)** In this example, we have five sites.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=60)** Now let's plug a value of N equals five into that formula.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=64)** Five times the quantity of five minus one, in other words, five times four is 20.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=70)** Then we divide by two giving us a result of 10.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=72)** That means it would take 10 links to fully mesh five sites.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=77)** But what if we had 10 sites?
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=79)** If you do the math, that comes out to 45 links.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=83)** That is just not scalable.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=85)** So what is a network designer to do?
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=88)** Well, some of these sites might not be used very much so we can eliminate some of those lesser used links.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=95)** Now we have a partial mesh topology instead of a full mesh topology.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=99)** True, some of the sites might need to take a suboptimal path to get to another site, but if we do a good job of selecting which links to eliminate, only a small percentage of our traffic will have to use those suboptimal links.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=112)** And full mesh and partial mesh topologies, they have some major differences.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=116)** First, remember that a full mesh always gives us an optimal path because we can go from any site to any other site by going directly to that site.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=125)** That's not always the case with a partial mesh topology.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=128)** Some of our traffic might have to go through an additional site or sites to reach its eventual destination.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=134)** However, having every site connect to every other site is just not scalable.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=139)** Strategically selecting which links to have that allows us to have much larger networks.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/mesh-topologies?u=76281980&t=145)** And since a full mesh topology has more links than a partial mesh topology, the full mesh topology is going to be more expensive.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Network Cabling

> [↑ Back to Table of Contents](#table-of-contents)

#### Copper cables
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=0)** - [Instructor] The wire that we use in a wired network is typically some sort of twisted pair cabling.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=6)** The reason we call it twisted pair cabling is because we have different pairs of wires that are twisted together inside of the cable.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=13)** Specifically, we have eight wires total, which get grouped into four pairs of wire.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=19)** Then each pair is twisted.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=21)** The reason for the twisting is to combat one of the biggest enemies of data transmission, and that is electromagnetic interference, or EMI for short.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=30)** We have so many different electromagnetic waves in our environment that if we didn't twist the wires the wires could become antennas, so they could start picking up interference.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=39)** Also, these wires could generate their own interference, possibly impacting other devices.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=44)** But by twisting the wires together each wire in a pair is shielding the other wire from this interference.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=50)** However, when we start transmitting at a really high data rate, or when we're in an environment with a lot of electromagnetic interference like a factory floor with huge motors kicking on and off, twisting alone might not be enough protection.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=64)** So, some twisted pair cabling has additional shielding.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=67)** That might be in the form of foil wrapped around each pair of wires, as we see here, or we might have all eight wires in some sort of metal braiding.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=77)** And by adding the additional EMI protection that shielding gives us we can often support higher data rates.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=83)** And the terms you're going to hear to describe these two different types of twisted pair cabling are unshielded twisted pair, or UTP, and shielded twisted pair, or STP.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=94)** One other variant of twisted pair cable I want you to know about is plenum-rated cable.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=99)** Have you ever seen buildings or maybe a data center that has a raised floor or a drop ceiling, and the HVAC system uses that space above the drop ceiling or below the raised floor for airflow.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=110)** Those areas are called plenum space, and it often seems really convenient to run our network cabling in those plenum areas.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=117)** There's plenty of room, it's out of sight, but there's a major issue.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=121)** If there were a fire in that area and those network cables started to get really hot the outer insulation on many network cables will release toxic fumes.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=131)** So, if you do run network cable in those plenum areas you need to use plenum-rated cable, which is not going to release those toxic fumes.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=139)** And the connectors that go on the ends of these ethernet cables are RJ-45 connectors.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=144)** Many cables come with the RJ-45 connectors pre-installed, but if we're running wire around a building we often need to put on our own RJ-45 connectors on these cables.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=154)** An RJ-45 connector has eight conductors, or we might say eight pins.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=159)** And we insert the eight wires of the ethernet cable into the RJ-45 connector.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=164)** Then we take a crimper tool and squeeze.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=167)** That causes the sharp part on each of those eight pins to penetrate the insulation on each of these wires that make contact with the actual wire.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=175)** We use a color code to tell us which color wire goes to which pin in the RJ-45 connector, and there are two common color code standards used.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=184)** Those are T568A and T568B.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=188)** And here's a look at those two different standards side by side.
>
> **[3:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=192)** Really, the only difference between these standards is that the orange and green pairs are swapped.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=198)** And different types of twisted pair cabling are assigned different categories, or we say Cat for short.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=204)** Most categories have a distance limitation of 100 meters.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=207)** Also notice that supported speeds vary.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=209)** Category 5e cabling supports 1000BASE-T, which runs at one gigabit per second.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=214)** If we need to support 10 gigabits per second we might want to consider Category 6, 6a, or 7 cabling.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=220)** We could even have higher speeds such as 25 gigabits per second or 40 gigabits per second with Category 8 cabling.
>
> **[3:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/copper-cables?u=76281980&t=228)** And as we gain speed with this Cat8 cabling we lose distance, which is actually fine because these cables they're typically used to interconnect equipment within a data center.

> [!info]- Semantic Content
>
> **Env Vars:** emi (2), utp (1), stp (1), hvac (1), t568a (1)
> **CLI Commands:** make (1), cat (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Fiber cables
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=0)** - [Instructor] For longer distance connections or the promise of absolutely zero electromagnetic interference, network engineers often turn to fiber-optic cabling instead of copper cabling.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=9)** Since fiber-optics use light to represent data, there's no concern about electromagnetic interference, and since copper cabling is not a superconductor, the longer the copper cable runs, the more impedance that our signal encounters and that's going to degrade the signal.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=25)** The question is what keeps light in the fiber without being dispersed?
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=29)** Well, we can find the answer in a glass of water and a straw.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=32)** Notice that the straw seems to bend as it goes into the water.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=36)** The reason is light travels slightly slower through water as compared to air, specifically water and air each have a different index of refraction.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=45)** This principle also applies to our fiber-optic cabling.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=49)** When we're working with fiber-optic cabling, we need to understand the two primary types.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=54)** We have single-mode fiber or SMF, and multimode fiber or MMF.
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=59)** When we say mode, we're talking about a specific path that laser light travels when it's injected into the fiber-optic cable.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=68)** When a fiber-optic cable strand is manufactured, it doesn't contain just one type of glass, rather there's one type of glass in the middle called the core, and one type of glass surrounding the core called the cladding, and these two different types of glass have very different indices of refraction.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=84)** Let's say we inject laser light into the core of this multimode fiber, notice when the light hits the boundary between the core and the cladding, the index of refraction between these two types of glass is so great, the laser light bends back into the core, and so it continues all the way down the fiber-optic cable.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=103)** However, I mentioned, this was a multimode fiber, meaning that the diameter of the core is large enough to support other paths or modes of light.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=112)** In this case, the laser light doesn't even come into contact with the cladding.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=115)** However, in this case, the laser light comes in at a fairly steep angle and it does a great deal of bouncing back and forth on its way down the fiber-optic cable.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=124)** So comparing that single-mode fiber with multimode fiber, single mode fiber can carry data further because it's less likely to corrupt the data over long distances, which can happen with all the bouncing back and forth of bits in a multimode fiber strand.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=138)** With single-mode fiber, as the name suggests, we have a core with such a small diameter, there's only one path that our laser light could travel down the strand.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=148)** And if the laser light came in at any other angle.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=151)** it would be dispersed into the cladding.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=153)** Since there's no possibility that one beam of light will pass up another beam of light, we don't need to be concerned with the multimode delayed distortion that we could have with multimode fiber.
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=163)** And unlike our twisted pair cabling, which almost always uses an RJ45 connector, we might see a variety of connectors being used in our fiber-optic network cables.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=171)** As just a few examples, consider the connectors on screen.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=174)** First, we have an SC connector, and depending on the literature you read, SC could stand for subscriber connector, square connector, or standard connector.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=183)** Next, we see an ST connector, where St stands for straight tip.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=188)** And finally on screen, we have an LC connector.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=190)** Again, different literature gives different names to the abbreviation of the connector.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=194)** You might read that LC stands for lucent connector, little connector, or local connector.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=199)** And this is certainly not a comprehensive listing, but these are a few of the more common fiber-optic connector types that you're likely to encounter.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=205)** And finally, consider a few ethernet standards for fiber-optic cabling.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=209)** Again, this is not a comprehensive listing, but I'd like you to notice that in general, single-mode fiber or SMF cables, they can carry data further than multimode fiber or MMF cables.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/fiber-cables?u=76281980&t=220)** And that's a look at how we can use light, instead of electrons to carry data through a network.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (1), pass (1), finally, (1)
> **Env Vars:** smf (2), mmf (2), rj45 (1)
> **Definitions:** stands for (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Transceivers
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=0)** - [Instructor] While the vast majority of our ethernet switches primarily have RJ 45 ports, sometimes we might have other connectivity requirements for our switches, not just in media type, but also in speed.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=11)** Say we had a 48 port ethernet switch where each of those ports is a one gigabit per second port.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=18)** We might want to connect another switch using a 10 gigabit per second fiber link.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=23)** At other times we might want to use a 10 gigabit per second copper link or perhaps a 40 gigabit per second fiber link.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=30)** The point is there are many combinations needed for different installations.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=34)** Does that mean that we have to find an ethernet switch with the perfect set of ports for our needs?
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=39)** Well, the good news is no, we don't.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=40)** Instead we can purchase an ethernet switch that accepts transceivers.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=45)** A transceiver is a modular port running at a certain speed and accepting a certain media type and you can purchase and install a transceiver to match your media and speed requirements.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=56)** For example, let's say that we needed an additional one gigabit per second port that accepted an RJ 45 connector.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=63)** What we could do is purchase a transceiver like we see on screen that meets those requirements, and then insert the transceiver into our switch.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=70)** Suddenly this switch has an additional one gigabit per second port that accepts an RJ 45 connector.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=77)** And that's the big advantage of transceivers.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=79)** They add flexibility to our switch connections and they're available in a variety of media types and speeds.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=86)** Let's consider a few different categories of transceivers.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=89)** You might see a transceiver labeled as an SFP, which stands for small form-factor pluggable.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=95)** SFP transceiver typically have a maximum data rate of one gigabit per second.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=100)** While SFP+ transceivers usually have a maximum data rate of 10 gigabits per second.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=106)** A quad SFP as the name suggests gives you four times the speed of an SFP, which would be four gigabits per second, and similarly, a quad SFP+ quadruples the 10 gigabit per second speed of an SFP+ to 40 gigabits per second.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=122)** And more recently the quad small form-factor pluggable double density or QSFP-DD transceiver has been introduced and that has a speed of 400 gigabits per second.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=134)** Also consider a traditional fiber optic transceiver like we see here.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=138)** It connects to two fiber optic strands.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=140)** One strand is used to transmit data, while the other strand is used to receive data.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=145)** However, a newer type of transceiver called a bidirectional or a BiDi transceiver is able to transmit and receive data using a single fiber optic strand.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=155)** How is that possible?
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=156)** Well, it keeps transmitted and received data separate by using different frequencies, literally different colors of light.
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=163)** One color is used for transmission and one color for reception.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=168)** So using BiDi transceivers can help reduce fiber cost.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/transceivers?u=76281980&t=171)** Of course, your ethernet switch needs to be compatible with the type of transceiver you're inserting, but by using a compatible transceiver, you can enjoy a wide range of connectivity options.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (8), let (2), type, (1)
> **Env Vars:** sfp (7), qsfp (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Straight-through vs. crossover cables
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=0)** - [Instructor] In total, we have eight wires in an ethernet cable where each wire connects to one of eight pins in an RJ 45 connector.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=7)** And when these devices communicate over an ethernet cable the eight wires in that cable do different things a cable where the wires are connected in the same color order to the RJ 45 connectors at each one of the cable, that's called a straight through cable.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=21)** For example, here we have a PC connecting into an ethernet switch using a straight through cable.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=26)** However notice the specific ethernet standards we're talking about here.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=30)** 10 base T that only runs at 10 megabits per second, and 100 based TX which only runs at 100 megabits per second.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=38)** Well, the PC is referred to as a medium dependent interface or an MDI device.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=42)** The ethernet switch is a medium dependent interface crossover or MDI X device.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=50)** The crossover element in an MDI X device indicates the transmit and receive wires are transposed.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=58)** If the PC is using pins one and two to transmit pins, one and two on the switchboard are receiving those transmissions from the PC.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=66)** And in the case of these two somewhat legacy ethernet standards we're only using four wires of the eight wires in that ethernet cable.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=74)** Specifically, the PC is transmitting using pins one and two and it's receiving using pins three and six at the far side of the cable.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=82)** It's the exact opposite.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=83)** The switch is receiving on pins one and two and transmitting on pins three and six but this brings up all possible paradox.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=90)** When connecting two ethernet switches using M D I exports specifically, we have transmit pins on one side of the cable, connecting to transmit pins on the other side of the cable, and that should not work.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=102)** So does that mean we cannot interconnect to ethernet switches with a straight through cable?
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=107)** Not at all.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=108)** We can use a straight through cable to interconnect most of our modern ethernet switches because they support a feature called auto M D I X, which automatically negotiates, which pins are going to be used for transmitting and receiving on each switch port.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=123)** What if we're interconnecting a couple of MDI devices though, like a couple of PCs in that case we might need to use a cable called a crossover cable that has reversed the pin outs for the RJ 45 connectors at each end of the cable causing the transmit pins on one side of the cable to connect to the received pins on the other side of the cable and vice versa here, pins one and two on one side of the cable map to pins three and six on the other side of the cable that lets the transmit pins on PC one, talk directly to the receive pins on PC two while the receive pins on PC one connect directly to the transmit pins on PC two.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=158)** And with these older ethernet standards noticed that we're only using four of the eight wires in the cable.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=164)** And back in the 1990s, this shortcoming had a silver lining called a pair splitting in hopes of saving some time and money.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=172)** What I would do is run one cable into an office that had two computers and I'd take four wires from the cable and connect them to an ethernet Jack on pins one, two, three, and six, the remaining four wires.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=185)** You guessed it.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=185)** I would connect those to another ethernet Jack using pins one, two, three and six.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=190)** Then in the wiring closet at the other end of the cable I would take those eight wires.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=194)** And again, split them out into two connectors plugging into two different ethernet switch ports.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=200)** And I thought that was a great way to save money when wiring offices that had a couple of connections.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=204)** However, that presented a major problem when ethernet speeds increased and I needed to connect devices at one gigabit per second rates in 1000 based T networks were using all eight wires in that ethernet cable.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=218)** So all of those PCs that I had connected using only four wires cause a neighboring PC was using the other four wires.
>
> **[3:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=224)** You had to go back and rewire all of those connections.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=226)** So what I thought was a bright idea to save some cost turned out, costing more in both time and money.
>
> **[3:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=232)** The big takeaway though from this diagram is I want you to understand that if we're running at speeds of one gigabit per second or higher, we're going to be using all eight wires.
>
> **[3:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=239)** And this diagram is of a straight through cable, but what if we needed a crossover cable that used all eight wires just for your reference, it would look like this.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=250)** And that's a look at straight through cables where the pin out on one side of the cable matches the pin out on the other side of the cable.
>
> **[4:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/straight-through-vs-crossover-cables?u=76281980&t=257)** And it crossover cables where the transmit pins on one side of the cable map to the receive pins on the other side of the cable and vice versa.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (5), interface (2), this. (1)
> **Env Vars:** mdi (4)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Cisco Router and Catalyst Switch Configuration

> [↑ Back to Table of Contents](#table-of-contents)

#### Cisco routers and catalyst switch ports
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=0)** - [Instructor] In this chapter, I'm going to discuss how to connect to Cisco devices, such as routers and switches, in addition to doing some basic configuration.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=8)** To get started, you need to understand the most common options for connecting to Cisco routers and switches, both for administrative purposes such as configuring these devices and interconnecting network devices.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=19)** One type of connection uses a console port or CON port for short.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=24)** That's how we can connect to PC running a terminal emulation software into our routers and switches for administrative purposes.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=31)** Then we'll consider the use of an auxiliary port or an AUX port for short, that we're likely to find on a Cisco router but not on a Cisco Catalyst switch.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=39)** And finally, we'll discuss how Ethernet-based LAN ports are used to interconnect network devices.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=46)** Now, as network administrators, we need to connect into a Cisco router for administrative purposes and we're typically going to have a computer running sort of terminal emulation software connecting into the console port of the router using a console cable.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=60)** Many years ago, the port that we would use on our PC or laptop was a serial port and it used a DB9 connector.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=67)** However, most computers today no longer use serial ports.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=70)** So we're going to use a USB-to-serial adapter to make that connection.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=75)** And the console cable will connect into the router's CON port with an RJ45 connector.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=79)** However, this is not an Ethernet cable.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=81)** It just happens to be using an RJ45 connector.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=85)** And here's a look at the console cable that you might find packaged with your Cisco router, and if your PC or laptop lacks a DB9 serial port, you might use a cable like this where you connect the USB into the cable to your PC or laptop and the DB9 into the cable to the console cable.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=103)** Then, from your terminal emulator, you'll be able to start interacting with your routers command-line interface or CLI.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=110)** Newer Cisco routers might have a mini USB port that can be used for a console connection instead of having to use an adapter.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=117)** A second type of port you might find on a Cisco router is an auxiliary or an AUX port.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=122)** This port was traditionally used to connect an external modem, and that allowed an administrator to remotely dial in to perform administrative tasks.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=130)** However, today it's less common for administrators to have analog modems set up for this purpose.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=136)** The third and most common type of port is a LAN port.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=139)** A Cisco router often connects to an Ethernet switch into which our end devices such as PCs, printers, wireless access ports into which they can connect.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=148)** This interconnection between our switch and router is going to be done using LAN ports and an Ethernet cable.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=154)** Today, we commonly find LAN ports capable of running at data rates of one gigabit per second, but we'RE seeing an increasing number of 10 gigabit per second ports being installed, and while the supported speeds might vary on these LAN ports, it's important to note that the port speeds on each end of the cable, they have to match.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=171)** And Cisco Ethernet switches often branded as Cisco Catalyst switches typically have a CON port, and we can connect into that just as we did with a CON port on a router, but interestingly, the Cisco Catalyst switches, they usually don't have an AUX port and that's fine with us because we probably don't intend to remotely connect via a modem anyway.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=190)** And our end stations then connect into our LAN ports on the Cisco Catalyst switch.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=196)** The port in our end station, such as the PC, is part of that PC's network interface card or NIC.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=202)** So to sum up, for administrative purposes, we can connect into our Cisco routers and switches using terminal emulation software on our PC or laptop.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=211)** To do that, we'll connect a console cable into the CON port of a router or switch.
>
> **[3:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-routers-and-catalyst-switch-ports?u=76281980&t=216)** Additionally, we might have the option of connecting an external modem to a router's AUX port, and we can interconnect network devices using Ethernet-based LAN ports.

> [!info]- Semantic Content
>
> **Env Vars:** lan (7), con (5), aux (4), db9 (3), usb (3)
> **Code Keywords:** switch (5), interface (2), finally, (1), match. (1)
> **CLI Commands:** find (4), make (1)
> **Tools:** terminal (4)
> **Analogies:** such as (4)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Cisco Internetwork Operating System (IOS)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=0)** - [Instructor] When we're configuring a Cisco router or Cisco catalyst switch, the operating system we find ourselves in is called Cisco IOS, which stands for internet work operating system.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=10)** Let's consider a few flavors of Cisco IOS that you might encounter.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=14)** First is Cisco IOS itself.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=16)** This is the software that's powered most enterprise Cisco routers and switches for decades.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=21)** And when we get into the configuration we'll be using commands found in Cisco IOS.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=26)** However, Cisco IOS has evolved into Cisco IOS XE which is a more stable and scalable version.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=33)** For example, Cisco IOS used the same pool of resources such as memory and processing resources to do everything.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=41)** That meant that a runaway process, it could crash the whole system.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=44)** Now with Cisco IOS XE, the underlying operating system is Linux based with Cisco IOS running on top of Linux rather than being an entire operating system unto itself.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=56)** The good news though is the interface and commands all look the same.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=60)** So the configurations that we perform later in this course will work equally well on a Cisco IOS or Cisco IOS XE platform.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=69)** And there are a couple of other and quite different Cisco operating systems you might see.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=73)** One is called Cisco NX-OS, which is Cisco's Nexus operating system used in their Cisco Nexus data center switches.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=83)** Another type of Cisco IOS is Cisco IOS XR found on Cisco's very large service provider routers such as the Cisco XR 12000 series routers.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/cisco-internetwork-operating-system-ios?u=76281980&t=94)** But again, our focus is on Cisco IOS commands, which also applies to Cisco IOS XE.

> [!info]- Semantic Content
>
> **Env Vars:** ios (15)
> **Definitions:** is called (2), stands for (1), is a  (1)
> **Code Keywords:** switch (1), let (1), interface (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Basic Cisco IOS commands
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=0)** - [Instructor] We've already seen how to connect into the console port of a Cisco router or catalyst switch, and now that we're connected, let's take our first steps into Cisco iOS, and look at a few of the operational and configuration modes.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=12)** The Cisco router we're connected to right now, is a Cisco 2911 router, running Cisco iOS version 15.2.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=19)** It currently has no configuration, and notice that the prompt shows the default host name of router, followed by a greater than sign prompt.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=27)** That prompt tells us that we're in user mode.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=30)** Our privileges are fairly limited in this mode, specifically, we'll be able to view some things about our router, but we won't be able to do any configuration.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=38)** To see what commands we have available in a particular mode, we can type a question mark.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=43)** And at the bottom of the output, we see that there is more information available, and to scroll to the next page of this output we can press the space bar.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=50)** And we could continue pressing that space bar until we saw all of the options, or we could simply type a Q to quit.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=58)** Now I want to move from user mode into privilege mode, where we do have permission to do configuration.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=64)** To get into privilege mode I'll enter the enable command.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=69)** Notice that the greater than sign prompt has now been replaced with a pound sign.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=72)** This tells me that we're in privilege mode, and if we now type a question mark, followed by pressing space bar repeatedly, we'll see that we have many more commands than we had available in user mode.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=84)** I'll go ahead and press a Q to quit.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=87)** And to begin configuring our router, we first enter global configuration mode, by giving the command configure terminal, or we could just say conf space T for short.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=100)** Notice our prompt now says, router config pound sign.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=104)** The config in parentheses, that's our clue that we're now in global configuration mode.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=109)** In other words, changes made here will globally affect the router.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=113)** Let's give a question mark to see what commands are available.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=116)** I'll press space bar, and we can do several things here in global configuration mode, such as changing the name of our router.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=124)** Notice that we could give the host name command, let's do that.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=128)** I'll do a Q to quit.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=130)** And I'll say host name, R1.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=134)** And immediately our host name changes from router, in a lower case, to uppercase R1.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=142)** Of course the main purpose of a router is to route packets from one interface to another.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=146)** So much of our configuration is going to be done in interface configuration mode, for a specific interface.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=152)** If we want to configure interface gigabit ethernet 0/0 as an example, we could go into interface configuration mode for that interface, with the command interface, gigabit ethernet 0/0, or as a shortcut, I could say int gig 0/0.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=169)** Again, typing a question mark is going to show us what commands are available in the interface configuration mode.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=174)** And we know we're in interface configuration mode, because the prompt has changed from config in parentheses, to config-if in parentheses.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=183)** And there are many aspects that we can configure on an interface, but for now let's perform the basic task of making this interface operational.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=191)** You see, by a default on a Cisco router, and interface is administratively shut down, meaning that it's not going to carry any traffic.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=198)** To administratively enable this interface, we can enter the command, no shut down, or as a shortcut, we could just say no shut.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=209)** And after a few seconds, the interface is going to come up and be operational.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=212)** And we see that on screen now.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=215)** And when I'm finished with my configuration and I want to exit, I could say exit, and that would take me back out one configuration level.
>
> **[3:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=224)** So in this example, if I type exit, it would take me from my current interface configuration mode, back to global configuration mode.
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=231)** However, if I want to completely end my configuration session, I can simply type end, and regardless of my current configuration mode, it's going to exit me back out to privilege mode.
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=244)** And here in privilege mode, we can see lots of information.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=247)** For example, we can see what version of Cisco iOS that we're running with the show version command, or just SH space VER for short.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=256)** And we can see that we're running some sub version of Cisco iOS, 15.2.
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=263)** Let's scroll down a bit further.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=266)** And down at the bottom of the output, we see what feature set, or technology package, this router is licensed for.
>
> **[4:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=272)** We see we have a license for IP base, which is the basic technology package.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=278)** And I'm also licensed for UC, which stands for unified communications.
>
> **[4:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=282)** What that does is enable some voice and video services, but I'm not licensed for security, or data.
>
> **[4:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=290)** Now that doesn't mean I have no security features, or no data centered features, I just don't have the higher end security, or data center features.
>
> **[4:58](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/basic-cisco-ios-commands?u=76281980&t=298)** And that's a look at some of the basic commands and configuration modes in Cisco iOS.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (15), let (5), switch (1), continue (1), case, (1)
> **Code Identifiers:** ios (5)
> **Definitions:** is a  (1), in other words (1), stands for (1)
> **Prerequisites:** configure (3)
> **Versions:** version 15 (1), 15.2 (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** ver (1)
> **Tools:** terminal (1)

#### Secure Cisco devices with passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=0)** - As you get started with some basic Cisco IOS configuration commands, you're going to be doing a good bit of configuration on both Cisco routers and switches, but before you get your devices online it's important to consider how you're going to secure that router or switch to prevent somebody from coming along and maliciously or even accidentally messing up your router or switch configuration.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=22)** Then we can safely get a router or switch interface connecting out to the rest of the world.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=26)** And I'm back on the router that we used in our previous video, where we changed the host name of router to R one.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=33)** Let's go back into privileged mode and then into global configuration mode.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=36)** To go into privileged mode, we'll say enable and we'll say conf T, short for configure terminal.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=42)** And notice when I entered the enable command the router took me directly into privileged mode.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=48)** As a safeguard, let's set up a password that someone would have to enter before going into privileged mode.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=54)** To do that, we'll say enable secret and will give a password of a privileged mode password.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=61)** And notice I gave the command enable secret followed by the password that I want to use.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=65)** The secret parameter in the enable secret command, that causes the password that we're using to be unreadable in the configuration.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=73)** So if someone were looking over my shoulder as I was viewing the configuration on screen, they wouldn't be able to see what the password is.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=79)** Instead, they would see a big long string of seemingly random characters.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=84)** That's a hash of the password that I just entered.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=87)** And we've now added a layer of protection to prevent somebody from going directly into privileged mode.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=92)** But perhaps I don't want somebody to even go into user mode without appropriate credentials.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=96)** To prevent that from happening, I'm going to configure a username of Kevin and a password of Kevin's user password.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=103)** And here's the command we use to do that.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=105)** And this is going to create a user database locally on this router.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=109)** We'll say username, Kevin, secret, and I'll give a password of Kevin's user password.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=116)** Again, the secret parameter causes the password to show up as a hash in the router's configuration, as opposed to appearing in clear text.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=124)** Now that we have the user account configured locally on the router, let's require a login when someone connects to the console port.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=132)** To do that, we need to go into a new configuration mode.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=134)** It's called line configuration mode, for in this case the console port, which is abbreviated con zero.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=141)** Let's say line con zero.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=144)** Now we'll enter a command of login local.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=147)** This command says that to connect to this line, someone needs to log in using the local user database, which we just created.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=154)** Now let's test this out by exiting all the way, all the way out of user mode.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=157)** We'll say exit, exit, let's exit one more time.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=161)** And now we're being prompted to enter a username, which is Kevin.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=165)** We press enter.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=166)** We give a password of Kevin's user password, and we see that we've successfully connected back to user mode.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=172)** Now let's verify that we'll be challenged to enter another password to go into privileged mode.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=177)** Let's say enable.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=179)** And it says, hold on.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=181)** We have to enter another password to go into privileged mode.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=184)** This time it's privileged mode password.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=186)** And this confirms that we've added a couple of layers of password protection.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=190)** Specifically, we're requiring somebody to log in with their username and password credentials just to get into user mode.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/secure-cisco-devices-with-passwords?u=76281980&t=196)** Then they have to enter another password to go into privileged mode.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (3), interface (1), require (1)
> **Prerequisites:** configure (2), set up (1)
> **Env Vars:** ios (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)
> **Definitions:** short for (1)
> **Speakers:** - as (1)

#### Configure a router interface
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=0)** - [Instructor] In our previous video, we password protected our router.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=4)** Now we're back into privilege mode, and we want to configure an interface to connect out to the rest of the network.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=10)** Specifically, I have interface gigabit zero slash one connected to a switch, which connects to my ISP, my internet service provider.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=18)** And let's go into interface configuration mode for that interface.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=21)** We'll say comp T short for configured terminal.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=24)** Then we'll go into interface configuration mode by saying int, short for interface gig zero slash one.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=31)** And one thing we might want to configure is the speed.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=34)** We can say speed space and give a question mark.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=37)** That's going to give us context sensitive help.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=39)** It tells us what options are available at this point in our configuration.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=43)** In other words, what options are available after we say speed in interface configuration mode.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=49)** And here I have the option of setting the speed to 10 megabits per second, 100 megabits per second, or one gig, 1000 megabits per second.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=57)** Or we can say, I want to auto negotiate it.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=60)** I want to make sure that we're running at one gigabit per second.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=63)** So I'll say 1000 Meg, or we can also negotiate or hard code the duplex.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=70)** Half duplex is what we used to use back in the old days.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=73)** When we had ethernet hubs.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=75)** With half duplex an interface could either transmit or receive at any one time, but it could not do both at the same time.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=82)** Today, in almost all cases, we'll be running in full duplex mode.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=86)** Meaning that we can simultaneously transmit and receive.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=90)** And although this interface would probably negotiate full duplex, I don't want to take any chances, so I'm going to hard code it.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=96)** I'll say duplex full.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=98)** Next, we need to administratively bring this interface up.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=101)** We do that with the command, no shutdown.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=105)** And also we want this interface to communicate on an IP version Ford network.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=110)** Oh, by the way, did you see the interface come up right there?
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=112)** And to communicate on an IP version for network, we have to have an IP version for address.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=117)** And although I could hard code an IP address on this interface.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=120)** I want to show you how we can configure a Cisco router interface to dynamically obtain IP address information from a DHCP server, where DHCCP stands for dynamic host configuration protocol.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=132)** This is how we would typically configure a router interface to point back to an internet service provider where they're providing us with our IP address information via DHCP.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=142)** Here's what we do.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=143)** We say IP address, DHCP and we're finished with this basic configuration, and we're ready to go back into privilege mode.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=152)** So let's say, and, and to view the configuration we can, oh by the way, did you notice we just got an IP address assigned a DHCP server, just told our interface you've got the IP address of 172.16.106.29.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=167)** Now to view our configuration we can say show running hyphen config, or we could just say for short show, run, and we can hit a space bar to continue scrolling through the running configuration.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=183)** And here you see the configuration that we just gave for interface gigabit zero slash one.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=188)** I'll press Q to jump out of this running config display.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=191)** And it's important to distinguish between a router's running configuration, what we're looking at now and it's startup configuration.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=198)** Specifically when a router boots up, it loads the configuration from a type of memory called NVRAM.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=205)** That stands for non-volatile random access memory.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=207)** Non-volatile implies we don't lose what's stored in that memory just because we might reboot or power off a router.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=214)** But the commands we've entered so far in this demo they live in the router's running configuration which is most definitely volatile.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=221)** So if we're happy with our configuration changes that we've made we probably want to save what we've done.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=227)** In other words, what's currently in running configuration.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=229)** We want to save that to the non-volatile startup configuration.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=233)** To do that, we could say copy running hyphen config space startup hyphen config, or for short we just say, copy, run, star.
>
> **[4:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=243)** We'll press enter a couple of times.
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=244)** And now we've made a copy of our running configuration in non volatile RAM, our startup configuration.
>
> **[4:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=252)** Now let's take a look at what interfaces we have installed in this router and what IP addresses, if any, those interfaces have.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=258)** We can do that with the command show, IP interface, brief.
>
> **[4:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=265)** And we see, for example we have interface gigabit zero slash one that has an IP address of 172.16.106.29.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=274)** And it was learned via DHCP.
>
> **[4:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=277)** And as one final command in this demonstration let's confirm that we can connect out to the rest of our network.
>
> **[4:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=283)** We can do that using a utility called ping and this network, the router that gets me out to the internet has an IP address of 172.16.1.1.
>
> **[4:53](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=293)** Let's see if this router can reach that IP address.
>
> **[4:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=296)** We do that with the command ping 172.16.1.1.
>
> **[5:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=300)** We'll press enter, and the exclamation points indicate successful pings.
>
> **[5:04](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/configure-a-router-interface?u=76281980&t=304)** And we're five for five, indicating that we are 100% successful getting to our default gateway which gets us out to the internet.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (19), let (5), protected (1), switch (1), continue (1)
> **Env Vars:** dhcp (5), isp (1), dhccp (1), nvram (1), ram (1)
> **Definitions:** short for (2), in other words (2), stands for (2)
> **Versions:** 172.16.106 (2), 172.16.1 (2)
> **Prerequisites:** configure (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** terminal (1)

#### Work with configuration files
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=0)** - [Instructor] We've seen that when we make a configuration change to a Cisco router or to a Cisco Catalyst switch, that change takes effect immediately, and the configuration file resides in that router or switch's memory which we call the running configuration, because it's the configuration that's currently running on the device.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=17)** However, if that device were rebooted, our configuration changes would be lost unless we first copied them to our startup configuration.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=25)** The startup configuration lives in nonvolatile memory, which we call NVRAM for short.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=31)** And the good news about NVRAM is if the router loses power or we rebooted, the contents of NVRAM stick around.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=37)** Now, in this video, I want to help you better visualize these distinct storage locations for our configuration files, in addition to discussing how we might want to copy that configuration file to an external server.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=49)** For example, if something that catastrophic happened to our device, such as a fire, having our configuration in NVRAM isn't going to do as much good, but what if we'd had the foresight to make a backup copy to another external device?
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=61)** In that case, we could install a replacement router, then copy our backed-up configuration file from the external server to our new device.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=69)** And even though we could back up our configuration files to a variety of server types, such as a FTP or File Transfer Protocol server, or an SCP, a Secure Copy Protocol server, in this video, we're going to consider backing up to a TFTP server, where TFTP stands for Trivial File Transfer Protocol.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=88)** First, let's say we make a configuration change and we want to save that change from our running configuration to our startup configuration.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=96)** To do that, we would issue the command copy running hyphen config, startup, hyphen config.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=102)** Notice the syntax of the copy command.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=104)** We give the word copy followed by the source followed by the destination.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=108)** In this case, the source is the running configuration and the destination is the startup configuration.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=114)** By the way, we typically enter an abbreviated form of this command.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=117)** Instead of saying copy running hyphen config, startup hyphen config, we just enter copy run star.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=123)** Now let's consider how to back up a configuration file either our running config or startup config to an external TFTP server.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=130)** Again, we use the same syntax where we say copy followed by the source, followed by the destination.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=135)** The difference this time is that the destination is the TFTP server which is reachable via a specific IP address.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=144)** And we could copy our running configuration or startup configuration to the external server.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=149)** And if we wanted to restore our backed-up configuration file from the server, we could just transpose the source and destination, saying copy TFTP star, as an example.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=159)** Now, let's go out to a live interface and take a look at how this works.
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=163)** Let's begin by changing the hostname on this Cisco 2911 router, and notice that the hostname will be different in the running config as compared to the startup configuration.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=172)** First, let's go into global configuration with configure terminal, that I'll say hostname Router1.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=179)** And we see it takes effect immediately on the router.
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=182)** And let's take a look at our running configuration by saying show run.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=186)** And notice that the configuration change shows up in the running configuration.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=191)** It says our hostname is Router1.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=193)** However, what about the startup configuration?
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=195)** Let's do a show star.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=198)** Here, it says no, no, the hostname is R1, not Router1.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=203)** This is happening because we've not backed up our running config to our startup config.
>
> **[3:28](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=208)** To make our newly-configured hostname survive our router reboot, let's copy the configuration to the startup configuration.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=215)** To do that, I can say, copy run star, press Enter.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=220)** Now let's see what the configuration file looks like for our startup configuration.
>
> **[3:44](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=224)** Let's do another show star.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=226)** And this time, the hostname is Router1.
>
> **[3:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=230)** So we copied our config from the running config to the startup config.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=235)** Now let's say that we have an external TFTP server and we want to back up our configuration to that external server.
>
> **[4:01](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=241)** Specifically, in this example, our external TFTP server has an IP address of 172.16.107.71.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=249)** Using our syntax of copy followed by our source, followed by the destination, let's copy our running configuration from the router's RAM to the TFTP server.
>
> **[4:19](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=259)** We'll say copy, and the source is running configuration.
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=263)** The destination is our TFTP server.
>
> **[4:25](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=265)** It's going to prompt us for the IP address and it is 172.16.107.71, we'll press Enter.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=274)** Press Enter again.
>
> **[4:36](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=276)** We see those two exclamation points.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=278)** That means that we have successfully copied our running config to an external TFTP server.
>
> **[4:43](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=283)** Following, let's see how to restore saved configuration from the TFTP server and copy it into our startup configuration.
>
> **[4:50](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=290)** I'll say copy TFTP star.
>
> **[4:54](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=294)** What's the IP address of the TFTP server?
>
> **[4:56](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=296)** It's 172.16.107.71.
>
> **[5:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=300)** And the source file name is Router1, hyphen confg.
>
> **[5:06](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=306)** We'll press Enter and success.
>
> **[5:10](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=310)** By the way, I'm issuing these commands in an isolated lab environment.
>
> **[5:14](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=314)** For a production network, I highly recommend that you use a protocol that's more secure than TFTP.
>
> **[5:20](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=320)** For example, you might want to use SCP.
>
> **[5:22](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/work-with-configuration-files?u=76281980&t=322)** Regardless of the protocol that you use, backing up your configuration to a geographically distant server, that's a solid habit to develop.

> [!info]- Semantic Content
>
> **Env Vars:** tftp (14), nvram (4), scp (2), ftp (1), ram (1)
> **Code Keywords:** let (13), switch (2), case, (2), interface (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (2), such as (2)
> **Versions:** 172.16.107 (3)
> **Prerequisites:** install (1), configure (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=0)** - [Narrator] Congratulations on finishing this course!
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=3)** This has been a sampling of some of the fundamental concepts, devices, protocols, and configuration commands that you're going to be using throughout your Cisco career.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=12)** Now if you're feeling good about what you've learned, I encourage you to keep your momentum going and join me in another course.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=18)** Until I see you in that next training, allow me to say that it has been an honor ushering you into this career path that I am so deeply passionate about.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=26)** And also, if you need to review parts of this course before moving on to part two, that's completely okay.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=31)** In fact, that's one of the big advantages of LinkedIn Learning.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=35)** You can go back and re-watch whatever you'd like to review.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=38)** Take your time learning these foundational concepts.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=40)** Be patient with yourself.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=42)** You can do this and when you're ready, I'll be here waiting to walk you through IP addressing.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-fundamentals-of-cisco-networking/next-steps?u=76281980&t=46)** Take good care!

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


## Resources

- Exercise files available

## Skills Covered

- Cisco Networking

## Path Context

### In [[Getting Started with Cisco Networks]]
**1 of 4** | [[Cisco Networking Foundations- IP Addressing]] →

## Appears In

- [[Getting Started with Cisco Networks]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Cisco Networking
- [[Cisco Networking Foundations- Switching and Routing]] — Cisco Networking
- [[Cisco Networking Foundations- IP Addressing]] — Cisco Networking
- [[Cisco Network Security- Content and Endpoint Security]] — Cisco Networking
- [[Cisco Network Security- Intrusion Detection and Prevention]] — Cisco Networking

---

[↑ Back to top](#)