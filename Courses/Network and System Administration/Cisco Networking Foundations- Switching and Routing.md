---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cisco-networking-foundations-switching-and-routing
url: "https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing"
duration_minutes: 110
duration: 1h 50m
level: Beginner
updated: 11/26/2024
learners: 49380
skills:
  - Network Switches
  - Cisco Networking
  - Routing Protocols
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHcNdXQfxQLtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661796832117?e=2147483647&amp;v=beta&amp;t=jaeJ4QHP4Xi5wfipZOwwqY1T71qPRjJ2l3CBCTuKuh0"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Cisco Networks]]'
prev_courses:
  - '[[Cisco Networking Foundations- IP Addressing]]'
next_courses:
  - '[[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]]'
path_nav: '[{"path":"Getting Started with Cisco Networks","position":3,"total":4,"prev":"Cisco Networking Foundations- IP Addressing","next":"Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/network-switches
  - skill/cisco-networking
  - skill/routing-protocols
status: not-started
created: 2026-04-21
---

![Cisco Networking Foundations: Switching and Routing](https://media.licdn.com/dms/image/v2/C560DAQHcNdXQfxQLtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661796832117?e=2147483647&amp;v=beta&amp;t=jaeJ4QHP4Xi5wfipZOwwqY1T71qPRjJ2l3CBCTuKuh0)

# Cisco Networking Foundations: Switching and Routing

> The Cisco Networking Foundations series of courses provides the information network administrators and IT pros need to know to support and maintain Cisco networks. In this course, instructor Kevin Wallace focuses on switching and routing. Kevin goes over ethernet switching, including topics like ethernet frame format, VLAN theory and configuration, trunking theory and configuration, and more. He e

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing) | 1h 50m | Beginner | 49K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kevin Wallace]]

## Skills Covered

- Network Switches
- Cisco Networking
- Routing Protocols

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=0)** - [Instructor] When you examine modern network topologies, two of the most common devices you'll find in that topology are ethernet switches and routers.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=8)** That's our focus in this course.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=10)** First, we'll learn how an ethernet switch makes its frame forwarding decisions and I'll demonstrate the configuration of several switch features.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=18)** Then, we'll examine routing.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=20)** Learning how a router makes its packet forwarding decisions.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=23)** Also we'll discover how our router gets its routing table populated.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=27)** And since ethernet switches and routers are so common in modern corporate networks, it is critical that you understand the theory of how they operate and how to configure some of their more common features.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=39)** Hi, my name is Kevin Wallace.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=40)** I'm a double CCIE, or Cisco Certified Internet Expert.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=44)** And I've been teaching IT courses for over two decades.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/welcome?u=76281980&t=48)** So join me in my LinkedIn Learning course covering ethernet switching and routing.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2)
> **CLI Commands:** find (1)
> **Env Vars:** ccie (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### What you'll learn
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=0)** - [Instructor] In this course, we have two primary topics, switching and routing.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=5)** First, we'll consider ethernet switching.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=7)** Perhaps the most common network infrastructure device out there today is an ethernet switch.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=12)** For example, we'll use an ethernet switch to connect out to our network devices, such as PCs, printers, servers, wireless access points, and more.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=21)** And in our discussion of ethernet switches, we'll cover both the theory and configuration of several features found on a Cisco catalyst switch.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=30)** Next, we'll examine routing, and we'll learn how a router decides where to forward a packet based on that packet's destination IP address.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=38)** We'll see that a router's routing table can be statically configured, or we could use a dynamic writing protocol.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=44)** We'll even do a side-by-side comparison of several of those dynamic writing protocols, and I'll show you how to configure one of them to route both IP version 4 and IP version 6 networks.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=54)** And while it's great if you happen to have access to physical gear to practice on, that's not your only option.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=60)** In fact, in our next video, I want to show you a few different options for getting your hands dirty with Cisco gear.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/what-you-ll-learn?u=76281980&t=66)** I'll see you in that video in just a moment.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3)
> **Versions:** version 4 (1), version 6 (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** next video (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### How to get hands-on practice
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=0)** - [Instructor] While this course will primarily be covering theory, in some of the videos, I'll be demonstrating commands on Cisco gear, like routers and switches.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=9)** And while you can certainly look over my shoulder as I enter those commands and learn that way, many students benefit from entering those commands themselves.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=17)** So in this video, let's discuss three ways for you to get hands-on experience.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=22)** First, you could use real gear.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=24)** You could buy it used or refurbished from a variety of online sites or maybe, with your employer's permission, you might be able to use some extra gear from your workplace to set up a practice lab.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=35)** Another option is for you to use a free application from Cisco called Cisco Packet Tracer.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=40)** And after you download it, you'll be asked to log in, and you can use an existing Google account or create a free Cisco Networking Academy account.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=48)** And this free application is a network simulator, that's as opposed to an emulator.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=53)** Specifically, a simulator makes it feel like you're configuring actual Cisco gear, while an emulator is running the same operating system called Cisco Internetwork Operating System, or IOS, that you would find on physical equipment.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=67)** So with Cisco Packet Tracer, you might not have all the features that you would have with physical gear or an emulator, but it is a fantastic piece of software, and it's more than sufficient for your CCNA studies.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=79)** And a third option is to use Cisco Modeling Labs, or CML.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=84)** While Cisco Packet Tracer was a simulator, CML is an emulator running real Cisco IOS.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=91)** And at the time of this recording, you can purchase a year of access to the personal version of CML for around $200.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=98)** And if you'd really like to use CML because it's an emulator, but you don't want to pay the nearly $200 annual fee for it, there is another option.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=106)** What I'm referring to is Cisco's DevNet sandbox, which is an online portal that lets you work with a ton of different Cisco devices to get an incredible amount of hands-on experience for free.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=117)** Here's how it works.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=118)** You go to devnetsandbox.[cisco.com](https://cisco.com), and you log in with an existing account, like a Google or Facebook account, or you could create your own free Cisco account.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=128)** Then you can reserve a pod of gear at a certain date and time for a certain duration.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=133)** And at the time of this recording, one of those equipment pods gives you access to free Cisco Modeling Labs, and you can reserve it for a four-hour block of time.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=141)** And there are plenty of online resources that you can search for step-by-step instructions on accessing and working with Cisco Packet Tracer, Cisco Modeling Labs or Cisco's DevNet sandbox.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=151)** My recommendation is, since you're just getting started with Cisco networking, I'd go with Cisco Packet Tracer, because it's a lot more simple to get up and going as opposed to finding the right console cables for real gear or getting connected through a VPN and going to Cisco's DevNet sandbox, and it's free.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/how-to-get-hands-on-practice?u=76281980&t=168)** However, any of the options we've discussed in this video should give you a great hands-on learning experience.

> [!info]- Semantic Content
>
> **Env Vars:** cml (4), ios (2), ccna (1), vpn (1)
> **Definitions:** is a  (2), is an  (2)
> **Prerequisites:** set up (1), getting started (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 1. Ethernet Switching

#### MAC addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=0)** - [Instructor] In this video, we want to define a MAC address, a Media Access Control address.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=6)** And this is a 48 bit address that we say is burned into a network interface card.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=12)** And the reason we say it's burned into a network interface card is when the manufacturer creates that card, they assign as part of the hardware of that card, a unique MAC address.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=24)** Now let's compare a MAC address with some of the other addresses that we might have in a network.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=29)** A MAC address is 48 bits in length.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=32)** Compare that to an IP version four address which is 32 bits in length and an IP version six address which is 128 bits in length.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=40)** And a big distinction between these addresses other than their length is that the MAC address is going to be used by a layer two device, like an ethernet switch to make forwarding decisions while IP addresses are used by layer three devices like routers to make forwarding decisions.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=57)** And when the manufacturer of a network interface card assigns a MAC address to a network interface card, that MAC address is divided into two distinct parts.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=67)** The first 24 bits of those 48 bits are assigned to that vendor.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=72)** Sometimes you'll hear this called a vendor code or an OUI, an Organizationally Unique Identifier.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=79)** So let's say that we have a vendor X that's going to be making these network interface cards.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=83)** Well, that vendor's going to use the same first 24 bits on all of the network interface cards that they create.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=90)** Then the vendor can select the last 24 bits to be assigned to those different network interface cards.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=95)** But the first 24 bits, those are assigned to that vendor.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=99)** And when you see a MAC written, you might see it in a couple of different formats.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=103)** You might see it with a colon delimiter where we have a couple of hexadecimal digits and a colon and a couple of hexadecimal digits and a colon for a grand total of 12 hexadecimal digits.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=116)** Remember that a hexadecimal digit can be represented with four bits, meaning that if I have 12 hexadecimal digits, four bits each, that gives me the 48 bits that we have in a MAC address.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=128)** Ultimately, we might see a MAC address written with a dot delimiter where we have four hexadecimal digits and a dot and four hexadecimal digits and a dot and four more hexadecimal digits.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=139)** However, regardless of the delimiter being used, remember that the first half of that MAC address is unique to the vendor.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/mac-addresses?u=76281980&t=146)** It's an OUI, an Organizationally Unique Identifier, also known as a vendor code.

> [!info]- Semantic Content
>
> **Env Vars:** mac (11), oui (2)
> **Code Keywords:** interface (7), let (2), switch (1)
> **CLI Commands:** make (2)
> **UI Navigation:** switch to (1), select the (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### Ethernet switch frame forwarding
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=0)** - [Instructor] In this video we want to consider how an ethernet switch can use a MAC address to make a frame forwarding decision.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=7)** When we first power on a switch it does not know where any MAC addresses reside, it has an empty MAC address table like we see here, but as traffic starts to flow through that switch, it's going to become educated about which MAC address lives where and it's going to populate its MAC address table that it can then use to make intelligent frame forwarding decisions.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=28)** Let's go through a scenario.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=29)** Let's say that PC1 wants to communicate with the printer, when PC1 sends a frame into the switch destined for the printer's MAC address of the all C's MAC address, the switch has no idea where the all C's MAC address lives.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=45)** So in order to get that traffic to its intended destination the switch is going to do something called a flooding.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=51)** Flooding is when a switch sends a copy of a frame out all interfaces other than the interface on which that frame was received.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=60)** But before we flood that traffic out, the switch just learned something.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=65)** When that frame came in from PC1 and PC1 has the all A's MAC address, the switch realized that the all A's MAC address lives off of interface Gig 1 and it makes a note of that in its MAC address table.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=79)** Then as we said, to get to the intended destination of all C's, which we have not learned yet the switch then floods the traffic out all other interfaces, and it does make it to the printer.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=92)** Unfortunately, a copy also makes it to PC2 and the server, they look at those frames, they say, that's not for me and they discard those frames.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=99)** The printer, however, says, this is for me and it's going to respond to the PC.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=104)** When the printer responds to the PC, it sends a frame into the switch with a source MAC address of all C's which tells the switch that the all C's MAC address lives off of port three and the switch adds that to its MAC address table.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=119)** And this frame is destined for PC1, the all A's MAC address and good news, the switch has already learned where the all A's MAC address lives when PC1 sent that initial frame into the switch.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=131)** That means that the switch does not need to flood that traffic out, it knows exactly where the all A's MAC address lives.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=139)** It lives off of Gig 1 and it sends the frame just out of Gig 1.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=144)** Let's take a look at another scenario.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=145)** Let's say that PC1 wants to communicate with the server, and at this point the switch is not learned where PC2 lives.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=152)** It has not learned where the server lives, but it's about to learn those things.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=156)** PC2 sends a frame into the switch which tells the switch that the all B's MAC address of PC2, it lives off of Gig 2 and the switch makes a note of that.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=166)** The switch does not yet know where the all D's MAC address lives, so what does it do?
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=171)** That's right, it's going to flood that frame out all other interfaces, other than the interface on which that frame was received, it was received on Gig 2, meaning that the switch is going to flood that frame out all other interfaces, which does get to the server.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=185)** When the server responds with the all D's MAC address, the switch learns that the all D's MAC address lives off of interface Gig 4, it makes a note of that and it knows where the all B's MAC address lives, it's off Gig 2.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=198)** So we don't flood the traffic, we send the traffic directly to PC2.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-switch-frame-forwarding?u=76281980&t=203)** And at this point the switch has a fully populated MAC address table meaning that any device can talk to any other device without having its traffic flooded out to anyone else, that allows our switch to make intelligent layer 2 frame forwarding decisions based on MAC addresses.

> [!info]- Semantic Content
>
> **Env Vars:** mac (24), pc1 (7), pc2 (5)
> **Code Keywords:** switch (25), let (4), interface (4), else, (1)
> **CLI Commands:** make (4)
> **UI Navigation:** switch to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Ethernet frame format
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=0)** - [Instructor] We know that an Ethernet switch is going to be able to use a MAC address to make an intelligent frame forwarding decision.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=7)** But to better understand the operation of an Ethernet switch, let's take a look field by field at the format of an Ethernet frame.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=16)** And we're going to begin with eight bytes that aren't technically Layer 2 bytes.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=20)** These occur down at Layer 1, the physical layer.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=23)** It begins with a preamble of seven bytes.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=26)** This is going to send an announcement to say here comes a data frame.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=31)** Then there's another byte to say and the data frame begins now.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=35)** This SFD field one byte in length signals the end of the preamble and says here comes the Layer 2 data frame right now and that's followed by the destination MAC address, the MAC address that an Ethernet switch is going to use to make an intelligent forwarding decision.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=54)** And notice we say that it's six bytes in length.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=58)** Remember a byte has eight bits.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=60)** Six times eight, that's our 48-bit destination MAC address.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=63)** And we want to see where this frame came from.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=66)** That's the source MAC address, also six bytes in length, and the switch is going to be looking at those source MAC addresses as frames come into the switch to populate its MAC address table.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=77)** Next up is the length or type field.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=79)** And in some cases, this is going to contain the number of bytes in the encapsulated packet.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=84)** Other times it's going to contain an indication of the network protocol that's been encapsulated and that's normally going to be IPv4 or IPv6.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=95)** And IPv4 and IPv6, they're going to encapsulate data inside of a packet.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=100)** And normally, that packet has a maximum length of 1,500 bytes.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=106)** That's going to comprise our payload.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=108)** It has to be at least 46 bytes in length.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=110)** And if it's not, our equipment is going to add padding so that it's at least 46 bytes in length.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=115)** And then the Ethernet frame ends with an FCS, a Frame Check Sequence.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=120)** That's going to do a mathematical check to make sure that our data has not been corrupted in transit.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=125)** And this is the format of a typical Ethernet frame.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=127)** Remember, the preamble and the start field delimiter, they're technically happening at Layer 1.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=132)** So let me ask you this question, how much overhead is being added with an Ethernet header?
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=138)** This is an important number to know.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=140)** Take a look at the diagram. What do you think?
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=143)** Well, the answer is 18 bytes.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=146)** We have six bytes from the destination MAC address, six bytes from the source MAC address, two bytes from the length or type field, and four more bytes from the frame check sequence.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=157)** So oftentimes you hear that the maximum transmission unit of an Ethernet packet is 1,500 bytes like we see here, but the maximum transmission unit of an Ethernet frame is 1,518 bytes because a frame is a Layer 2 entity and it adds on this 18-byte Layer 2 header.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=179)** And interestingly, in some equipment, we may be able to have a bigger payload.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=184)** Instead of having a maximum of 1,500 bytes, we might have equipment that supports something called an Ethernet jumbo frame.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=191)** With a jumbo frame, the payload can be as big as 9,000 bytes and that value can vary vendor to vendor.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=198)** But typically, it's about 9,000 bytes max.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=202)** And if we think about it, this is going to give us more efficient transmission of data.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=207)** We're sending more data with less overhead.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=211)** Specifically with a traditional Ethernet frame, we had to send 18 bytes of Layer 2 header for every 1,500 bytes of data.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=220)** Well, now we're using those same 18 bytes of header to send as much as 9,000 bytes of data.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/ethernet-frame-format?u=76281980&t=227)** And that's a look at the format of an Ethernet frame, both a traditional Ethernet frame and the more efficient Ethernet jumbo frame.

> [!info]- Semantic Content
>
> **Env Vars:** mac (9), sfd (1), fcs (1)
> **Code Keywords:** switch (5), let (2), from. (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### VLAN theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=0)** - [Instructor] In this video, we want to define a term.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=3)** And that term is VLAN, or virtual LAN.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=6)** And you could think of a VLAN as being analogous to a broadcast domain.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=11)** That's an area of the network throughout which a broadcast is going to be propagated.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=15)** Or we could think of that as a subnet, which is also another way to say a broadcast domain.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=20)** But normally when we use the term VLAN, it's in reference to an ethernet switch.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=26)** Specifically, in an ethernet switch, by default, all ports belong to the same broadcast domain or the same VLAN, probably VLAN 1 by default.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=35)** Meaning that a broadcast sent in one port is going to be replicated at all other ports.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=41)** And that might be fine, but let's say that we had a wiring closet on the floor of a building, and on that floor, we had a couple of departments.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=48)** And we wanted to keep traffic from those two departments separate.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=51)** A broadcast seen in one department should not be seen in the other department and vice versa.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=56)** Let's say in this example, we've got PC 1 and Server 1, and PC 2 and Server 2.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=61)** And PC 1 and Server 1, they belong to the Sales department.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=66)** PC 2 and Server 2, they're part of the Engineering department.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=70)** And if we want to keep traffic isolated between Sales and Engineering, we could assign on the switchboards to which PC 1 and Server 1 are connected.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=78)** We could assign those to VLAN 10.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=81)** We'll call that the Sales VLAN, and they have their own subnet, 172.16.1.0/24.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=87)** And if PC 1 wants to communicate with Server 1, it can do that.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=91)** In PC 2 and Server 2, they're in the Engineering VLAN.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=94)** That's a separate broadcast domain with a separate subnet of 192.168.1.0/24.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=102)** And PC 2 can communicate directly with Server 2.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=105)** However, devices in the Sales VLAN cannot communicate with devices in the Engineering VLAN because they're in different subnets.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=113)** If this is truly a Layer 2 ethernet switch, then the only way we're going to be able to get traffic from one VLAN to another VLAN is to connect to an external router.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=123)** Now, sometimes, we have a multi-layer ethernet switch which can do routing, but if this is really a Layer 2 switch, we need to connect to an external router to get traffic from one VLAN to the other.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=134)** Let's say that PC 1 has a legitimate reason to talk to Server 2.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=138)** We're going to have to route to do that.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=140)** And here's the way it works.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=142)** A router is going to be connected using a special type of connection called a trunk.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=146)** A trunk has the unique ability to carry traffic for multiple VLANs.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=151)** So if PC 1 wanted to communicate with a Server 2, and these devices are on different subnets, we're going to have to route between those subnets.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=159)** PC 1 is going to send traffic to router R1 over that trunk, and that trunk poured on router R1, it's going to be logically divided up into different sub interfaces.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=169)** One sub interface is going to be in the Sales VLAN.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=172)** And one sub interface is going to be in the Engineering VLAN.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=175)** That's going to allow PC 1 to send traffic down to the router, and that router's going to route traffic back up over that same trunk link into the Engineering VLAN of which Server 2 is a member.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-theory?u=76281980&t=185)** And that's a look at how we can take the physical ports on a Layer 2 ethernet switch and logically divide them up into different subnets, or different broadcast domains, which we called VLANs.

> [!info]- Semantic Content
>
> **Env Vars:** vlan (16), lan (1)
> **Code Keywords:** switch (6), let (3), interface (2), default, (1), default. (1)
> **Versions:** 172.16.1 (1), 192.168.1 (1)
> **Definitions:** is a  (1)
> **Analogies:** analogous to (1)
> **Speakers:** - [instructor] (1)

#### VLAN configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=0)** - [Instructor] Now that we understand the theory of VLANs, in this video, we're going to set up a couple of VLANs.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=5)** We'll begin by creating VLAN 10.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=7)** It's going to be for the sales department so we'll give it a name of sales.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=11)** We'll create VLAN 20 and that's going to be for the engineering department.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=15)** And after we create these VLANs, we're going to notice that by default, they're empty.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=19)** In other words, they don't have any ports in them.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=21)** So we're going to populate these VLANs with ports on our switch.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=24)** And I'm going to be doing this demonstration on a physical switch.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=28)** It's a Cisco Catalyst 3750 series switch and it has a series of fast Ethernet ports.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=34)** We're going to take the first 12 of those ports and put them into VLAN 10.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=38)** The next 12 ports, they'll go into VLAN 20 and then we'll verify our VLAN configuration.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=44)** Now let's go out to a live interface and set this up.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=47)** Here on switch SW1, let's take a look at the VLANs we have by default.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=52)** We can do that with a show VLAN command.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=54)** And we see that currently all of our ports belong to the default VLAN of one.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=62)** And if I scroll on through the output, we see there's a lot of extra information here.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=66)** And honestly, we don't really need that information these days.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=69)** It has to do with transparent mode bridging which is a token ring concept.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=73)** And we see that we've got some token ring and FDDI reserve to VLANs.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=78)** We can largely ignore all of that.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=81)** So instead of seeing all this information, I prefer to say show VLAN brief, instead of just show VLAN.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=89)** This is going to give us a more concise view.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=91)** We still see these extra token ring and FDDI VLANs that we can ignore, but we don't have to see all of that extra output at the bottom of the screen.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=100)** So again, show VLAN brief.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=102)** I prefer that over show VLAN.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=104)** But we still see that all ports belong to our default VLAN of one.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=108)** Let's create a couple of new VLANs.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=110)** To do that, we'll go into global configuration mode and I'll say VLAN 10, and we'll give it a name of sales.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=118)** Let's create VLAN 20.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=121)** I'll give it a name of engineering.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=125)** Let's go back out to privilege mode and verify the creation of our VLANs.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=129)** I'll say end and show VLAN brief again.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=134)** And now we see that we do have a sales VLAN, number 10 and an engineering VLAN, number 20, but notice that they don't have any ports assigned to them.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=144)** Let's populate these two VLANs.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=146)** We'll go back into global configuration mode and I want to put the first 12 fast ethernet ports into VLAN 10.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=153)** And I could do that by going into interface configuration mode for fast ethernet 1/0/1 and say, you belong to VLAN 10 and then go into fast ethernet 1/0/2 and say you belong to VLAN 10, but that would take a while to go through all of the ports.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=169)** We can use a shortcut and it's called interface range configuration mode.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=174)** Specifically, I can specify a range of interfaces and any command I give applies to every interface in that range.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=181)** To do that, I'll say interface range fast ethernet 1/0/1-12.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=189)** Notice that I'm now in interface range configuration mode and any command I give applies to interfaces fast ethernet 1/0/1 all the way through fast Ethernet 1/0/12.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=202)** And I'm just going to give one command for these ports.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=204)** I want to say that they belong to VLAN 10.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=207)** To do that, we say switchport access VLAN 10.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=212)** And by the way, an access port is a port that belongs to one and only one VLAN.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=218)** That's opposed to something we'll talk about later called a trunk port.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=221)** But now we'll say that these 12 ports belong to VLAN 10.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=225)** Let's go into interface range configuration mode for fast Ethernet 1/0/13 through 1/0/24 and we'll say switchport access VLAN 20.
>
> **[4:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=241)** And we're done.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=242)** Let's end.
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=244)** And once again, I'll say show VLAN brief and great news.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=249)** We now have our VLANs populated.
>
> **[4:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=251)** The sales VLAN has our first 12 ports and the engineering VLAN has the next 12 fast Ethernet ports.
>
> **[4:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/vlan-configuration?u=76281980&t=260)** And that's a look at how we can go into a Cisco Catalyst Switch, create VLANs, populate those VLANs, and then verify the VLANs.

> [!info]- Semantic Content
>
> **Env Vars:** vlan (28), fddi (2), sw1 (1)
> **Code Keywords:** let (8), interface (7), switch (5), default, (1), default. (1)
> **Definitions:** is a  (2), in other words (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Trunking theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=0)** - [Instructor] In this video, we want to consider a special type of connection called a trunk connection.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=5)** We understand the concept of VLANs at this point and notice that these two switches have a couple of VLANs.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=11)** There's a sales VLAN and an engineering VLAN.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=15)** And let's say the sales PC needs to talk to the sales server connected to the bottom switch.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=20)** And the engineering PC needs to connect to the engineering server on the bottom switch.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=25)** And the question is how do we interconnect those switches such that we can communicate using more than one VLAN?
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=31)** One option would be to connect a sales VLAN port on the top switch to a sales VLAN port of the bottom switch and the same thing for the engineering VLAN but that's not going to scale very well.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=41)** Instead, we can create a special type of connection called an ethernet trunk.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=45)** And an ethernet trunk has the unique ability of carrying traffic for more than one VLAN.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=52)** That means that the sales traffic and the engineering traffic, that can all flow over this single connection.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=58)** And as the traffic goes, for example, from the sales PC down to the sales server, the ethernet trunk can tag the sales traffic to say you belong to the sales VLAN and the same thing for the engineering traffic.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=71)** And when we're setting this up on a Cisco catalyst to switch, you may have two different options for the trunk encapsulation type.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=78)** One is an older Cisco proprietary approach called ISL, inter-switch link.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=84)** I want you to know that it exists 'cause sometimes that is the default, but today we almost always want to use the industry standard of IEEE 802.1Q, often referred to as simply .1Q.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=100)** And with a .1Q trunk, the way an ethernet frame is identified as belonging to a particular VLAN is we add four bites to that layer two header.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=111)** And one of the fields inside of those four bites say that you belong to this specific VLAN.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=118)** There is one exception to that, however.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=120)** There's a special VLAN called the native VLAN.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=124)** That is the one and only one VLAN on an ethernet trunk that does not get tagged.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=129)** Let's say that the sales VLAN in this example was the native VLAN.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=133)** In that case, when sales traffic went over that ethernet trunk, it would not have those four bites added, which begs the question, how does the bottom switch know what VLAN that frame belongs to?
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=145)** And the answer is the switches need to agree on who the native VLAN is.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=149)** It's a VLAN one by default.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=151)** For security purposes, it's recommended that you use a different native VLAN but you should make sure your switches agree on who the native VLAN is.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=160)** That way, when a switch receives an untagged frame, it knows where to send it.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=164)** So again, a native VLAN, that's on a .1Q trunk, not on an ISL trunk, and it does not have any tag bites added.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-theory?u=76281980&t=171)** And that's a look at how we can send traffic for multiple VLANs over a single connection using an ethernet trunk.

> [!info]- Semantic Content
>
> **Env Vars:** vlan (21), isl (2), ieee (1)
> **Code Keywords:** switch (8), let (2), type. (1), default, (1), case, (1)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Trunking configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=0)** - [Instructor] In this video, we want to see how to configure an ethernet trunk.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=4)** Specifically, we're going to be using the .1Q trunk encapsulation type and we have two links in our topology and we'll set up trunking on both of those links.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=14)** And then after we're done, we'll verify the trunk creation.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=17)** Now let's go out to a live interface and set this up.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=20)** Well, let's begin our configuration on switch SW1.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=23)** I'll go into global configuration mode and I'll say interface range, using that shortcut gigabit 0/1-2.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=32)** And by the way the switches I'm using right now are not physical switches.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=35)** They are emulated switches.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=37)** I'm using CML, Cisco Modeling Labs.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=40)** And I'll go into interface range configuration mode for these two interfaces on switch SW1, connecting down to switches SW2 and SW3.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=49)** And I'll say I want to use the .1Q trunk encapsulation type with the command switchport trunk encapsulation dot1q.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=61)** And I'll say I want these to be trunk ports with the command switchport mode trunk.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=68)** And we're done on SW1.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=70)** Let's go over to SW2 and we'll say for interface gigabit 0/1, the only interface that switch SW2 is using, I want it also to use the .1Q trunk encapsulation type with the command switchport trunk encapsulation dot1q.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=92)** And we want it to be in trunk mode with the command switchport mode trunk.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=97)** We'll give a similar configuration on SW3 for interface Gig 0/1.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=105)** We also want it to use the .1Q trunk encapsulation.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=109)** So we say switchport trunk encapsulation dot1q.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=118)** And let's make it a trunk port with the command switchport mode trunk and we're done.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=125)** Let's go verify our configuration back on switch SW1 with the command show interfaces trunk.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=130)** And this is going to show us any trunking interfaces.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=132)** And great news.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=133)** We're trunking on ports Gig 0/1 and 0/2.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=137)** We see that we're using .1Q encapsulation for both ports and they have the default native of VLAN of one.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/trunking-configuration?u=76281980&t=144)** And that's a look at how we can go into a Cisco Catalyst Switch, specify the trunk encapsulation type, teleport to be a trunking port as opposed to an access port, and then verify our trunk configuration.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), let (5), switch (5), type, (1)
> **Env Vars:** sw1 (4), sw2 (3), sw3 (2), cml (1), vlan (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Introducing Spanning Tree Protocol (STP)
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=0)** - [Instructor] Let's imagine that we have a couple of routers, R1 and R2, and they're connected with redundant connections, meaning that if one connection goes down, the other connection can take over.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=9)** But maybe there's some sort of an issue with the way we have routing set up, and we find ourselves in a routing loop, where traffic is going from R1 to R2 and back to R1 and so on, just endlessly circulating.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=20)** Well, the great news with a router is a packet will not endlessly circulate because a router is going to assign a Time to Live value, or a TTL value, to a packet.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=30)** And every time it goes into another router, that value is going to be reduced by 1 until it eventually reaches 0.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=37)** If a TTL value reaches 0 for a packet, a router's going to discard that packet.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=42)** Let's say that, right now, as a packet comes out of R1, it has a TTL or a Time to Live value of a 2.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=48)** It goes into R2, which decrements it by 1, giving it a Time to Live value of a 1.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=53)** It goes back to R1, which decrements it by 1 again, resulting in a TTL value of a 0.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=60)** And R1 then drops that packet so we don't have this endless loop.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=64)** Unfortunately, we don't have the luxury of a TTL value with a switch.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=68)** With a switch, it is possible that a frame will endlessly circulate when we have a topological loop like we see here.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=77)** Imagine that we had a broadcast that a switch is sending out.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=80)** Remember that a switch is going to flood a broadcast out of all ports other than the port on which it was received?
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=87)** Well, if we have a broadcast that's endlessly circulating through a Layer 2 loop like this, we have a broadcast storm, and that's going to impact all the devices connected to these network segments.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=98)** PCs are going to grind to a halt.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=100)** You're not going to be able to move the mouse on the screen because they're so busy looking at all those broadcast frames.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=106)** And that's the challenge that we need to overcome.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=109)** We want redundancy.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=110)** We want to have physically a looped topology.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=114)** So if one connection goes down, another connection can take over, but logically, we don't want a loop.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=120)** We want to logically have a loop free topology.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=122)** And that's what we get with a protocol called Spanning Tree Protocol, or STP.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=127)** And think of a spanning tree as being analogous to a real tree.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=132)** Here's a tree in my backyard, and you'll notice that, as we come up from the root of the tree, the branches go off in different directions.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=140)** One branch never loops back onto another branch.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=142)** That's the logical topology that we want to construct.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=146)** We want to have a loop free topology in the form of a tree in our network.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=151)** Physically, we can have loops for redundancy's sake, but logically, we don't want loops, meaning that we're not going to be sending traffic over some of those links to prevent those loops.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/introducing-spanning-tree-protocol-stp?u=76281980&t=161)** That's what Spanning Tree Protocol is going to do for us.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), let (2), this, (1)
> **Env Vars:** ttl (5), stp (1)
> **Analogies:** imagine (2), analogous to (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### STP: The backstory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=0)** - [Instructor] Way back in the mid 1980s, Radia Perlman was working for DEC, Digital Equipment Corporation.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=6)** And working for DEC, she developed something called STP, the Spanning Tree Protocol, which allows us to have redundant connections while still logically giving us a loop-free topology.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=18)** And that's what we'll probably be using on our ethernet switches today.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=22)** But back in the mid 1980s when Radia Perlman invented this, there were no ethernet switches.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=27)** Instead we had ethernet bridges and we'll talk in just a moment about the distinction between a bridge and a switch.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=33)** But I want you to know that a few years after Radia Perlman developed this, the IEEE came out in 1990 with a standards based version of Radia Perlman's Spanning Tree Protocol, and that standard is IEEE 802.1D.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=47)** Now, let's consider the distinction between a bridge and a switch.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=52)** They both logically work about the same way.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=55)** They both make 40 decisions based on destination Mac addresses seen in frames.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=60)** However, a bridge makes those decisions in software, which is a lot slower than a switch which has dedicated hardware in the switch that can make these decisions at line rate without any noticeable delay at all.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=74)** And as a result of the slowness of a bridge doing all of this in software, we typically only had a couple of ports on a bridge, where we might have a 48 port switch as an example.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=86)** A bridge, back in the 1980s and early 1990s, that was typically used to interconnect a couple of collision domains so that one collision domain didn't get too big.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=95)** But now we can have a switch with dozens and dozens of ports.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=99)** And the reason I'm taking time to bring up a legacy device like a bridge is that since Spanning Tree Protocol was invented in the 1980s, when there were only bridges and not switches, the term bridge is still used in Spanning Tree Protocol.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-the-backstory?u=76281980&t=112)** So later in this chapter when we talk about something like a root bridge or a bridge ID, realize that that root bridge, as an example, is referring to a root switch, we just still use that original terminology of bridge.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (7), this, (2), let (1)
> **Env Vars:** dec (2), ieee (2), stp (1)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### STP Port States
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=0)** - [Instructor] At this point, we understand the STP, or spanning tree protocol, is going to give us a physically redundant topology.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=9)** So if one link goes down, another link can take over, but we know it's going to give us a loop-free logical topology where traffic is not going to circulate endlessly.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=17)** But in order for that to happen, we have to have one or more ports not forwarding frames.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=23)** And what we're going to do in this video is take a sample topology like the one we see here and identify the roles played by the different switches and the different ports.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=31)** Specifically, we have four questions that we want to ask as we're analyzing a spanning tree topology.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=37)** Number one, who is the root bridge?
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=39)** And we'll define that in a moment.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=40)** Who are the root ports?
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=41)** That's question number two.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=42)** Thirdly, who are the designated reports?
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=45)** And finally, whoever's left, those are going to be the blocking or the non-designated ports.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=49)** But let's begin by considering the root bridge.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=52)** This is going to be the switch in the topology that other switches are pointing back to in this loop-free logical topology, that looks sort of like a tree because it doesn't loop back on itself.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=62)** And we'll see later in this chapter, how we can go in and make a switch, the root bridge.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=67)** Depending on our traffic patterns, we might want to select a particular switch but here we're just going to analyze this existing topology.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=73)** And it's going to be the switch with the lowest to bridge ID.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=76)** The bridge ID is made up of two parts, a priority, and the MAC address of the switch.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=82)** The priority defaults to 32768.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=85)** And that's going to be the default for all the switches we see here, meaning that the tie breaker is going to be the MAC address.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=90)** Who has the lowest MAC address in this topology?
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=93)** It's SW 1 with the all 1s MAC address.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=96)** Question number two is, who are the root ports?
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=99)** And a root port is the one and only one port on a non-root bridge that's closest to the root bridge in terms of cost.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=107)** So this is going to be on a non-root bridge.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=110)** SW 2 and SW 3, they're each going to have one root port.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=114)** But what do we mean by cost?
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=116)** Well, cost is a function of speed.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=118)** And traditionally, we've used a table like this, called the short path cost method, where a gig port has a cost of four, and a 10 gig port would have a cost of two, and a hundred mega link has a cost of 19.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=129)** But as we start to get into faster and faster link speeds like 40 gig or even 400 gig, speeds that we might find in a data center, this traditional approach isn't going to work because we're not able to distinguish between those higher speeds.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=143)** So in the future, you're probably going to be using the long path cost method.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=147)** Here we take 20 terabits per second divided by the port speed, and that's your cost.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=152)** So a one gig link would have a cost of 20,000 but here we'll use what you'll find by the default on most switches.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=158)** And that's the short path cost method.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=160)** Let's focus first on SW 2.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=162)** How can it get to the root with the lowest cost?
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=164)** If it goes out of port Gig 0/1, that's going to be a cost of four because we're going out over a one gig link to get back to the root bridge.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=172)** What if I go out of Gig 0/2 over to SW 3?
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=176)** Well, that's a cost of four to get to SW 3.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=179)** And then I go from SW 3 up to the root bridge.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=181)** That's another cost of four.
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=182)** So it's four plus four.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=184)** That would be a total cost of eight.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=186)** What is my least cost on SW2?
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=188)** Yeah, it's going to be the Gig 0/1 port.
>
> **[3:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=191)** So Gig 0/1, that is my root port.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=195)** And by the same token with SW 3, it's a cost of eight if I go to SW 2 and then up to SW 1, as compared to a cost of just four if I go directly to SW 1.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=204)** So on SW 3, Gig 0/1, that is my root port.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=209)** And the third question we ask is, who are the designated ports?
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=212)** And every segment is going to have one and only one designated port.
>
> **[3:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=216)** And that's the port on the segment that's closest to the root in terms of cost.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=220)** Now, great news.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=221)** We have a shortcut here.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=222)** And that is we know the designated port for every segment going into the root bridge is going to be on the root bridge, because you don't get closer to the root bridge than being on the root bridge.
>
> **[3:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=232)** So for switch SW 1, Gig 0/1 and Gig 0/2, those are our designated ports for those two segments.
>
> **[3:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=239)** However, what about that segment between SW 2 and SW 3?
>
> **[4:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=243)** If I'm on the SW 2 side of that link and I'm sitting on switch SW 2, it's a cost of four to get to the root.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=250)** But the challenge is it's also a cost of four if I'm on SW 3.
>
> **[4:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=253)** Which end of this segment, going between SW 2 and SW 3, do I use?
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=258)** It's a tie.
>
> **[4:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=259)** Well, a tie breaker is going to be to look at each end of that segment.
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=263)** And whichever end is connected to a switch with the lowest bridge ID.
>
> **[4:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=267)** That's the winner.
>
> **[4:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=269)** And SW 2 has a lower bridge ID because it has a lower MAC address than SW 3.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=274)** So the designated port for that bottom segment, that's going to be on SW 2.
>
> **[4:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=279)** And finally we ask, who's left?
>
> **[4:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=281)** Assuming a port is not administratively shut down, it's going to be blocking if we haven't already identified it.
>
> **[4:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=287)** And in this case, the only port that's left is Gig 0/2 on SW 3.
>
> **[4:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=292)** That's going to be our blocking or non-designated port.
>
> **[4:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=296)** And that's the way we can analyze an existing spanning tree topology.
>
> **[4:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=299)** Determine who is the root bridge.
>
> **[5:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=301)** Who are the root ports?
>
> **[5:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=302)** Who are the designated ports?
>
> **[5:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=304)** And who are the blocking ports which are not going to be forwarding frames?
>
> **[5:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-port-states?u=76281980&t=307)** It's those blocking ports that allows us to have this logical loop-free topology.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (8), let (2), finally, (1), function (1), this, (1)
> **Env Vars:** mac (5), stp (1), sw2 (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### STP example
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=0)** - [Instructor] In this video, we want to get some practice identifying the port states of a spanning tree topology, and you might remember there are four questions we ask.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=8)** We ask, number one, who is the root bridge?
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=11)** Then we identify the root ports, the designated ports and then the blocking ports.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=16)** To begin with, let's ask who is the root bridge?
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=19)** And I encourage you to take a look at this topology and determine who is the root bridge based on the priorities and MAC addresses provided, and if you need to, feel free to pause the video while you figure out who the root bridge is but in this case, the root bridge is SW-1.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=35)** Notice that SW-1 and SW-2 have lower priorities than SW-3 and 4.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=39)** Their priorities are 16384.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=42)** So it's going to be either SW-1 or SW-2, but since the priorities are a tie between those two switches, we go with the lowest MAC address, and SW-1 begins with 000, as opposed to 001 on SW-2.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=57)** So SW-1 has the lowest bridge ID, and it is our root bridge.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=62)** Next we ask, who are the root ports?
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=63)** And a root port is a port on a non-root bridge that's closest to the root in terms of cost.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=69)** Let's begin on the switch SW-2 and consider each of its three ports.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=74)** The Te 1/0/1 port, that's a 10-gig Ethernet port that has a cost of two.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=82)** Gig ports have a cost of four.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=84)** So if I go directly out of Te 1/0/1, that's a cost of two.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=89)** If I go out of gig 1/0/7, it costs me four to go down to SW-3 over that gig link and another cost of four to go from SW-3 up to the root over another gig link.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=100)** Four plus four, that's a cost of eight.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=102)** What if I go out of gig 1/0/5?
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=105)** that goes down to SW-4.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=107)** It costs me four to get there over the gig link, and then it costs another four to go from SW-4 up to SW-1, our route.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=114)** Four plus four, that's eight.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=115)** So clearly on SW-2, the root port, the port with the least cost to get back to the root bridge is Te 1/0/1.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=125)** What about SW-4?
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=127)** Well, if it goes directly to SW-1 over that gig link, that's a cost of four.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=131)** It could go up to SW-2.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=133)** It's going to cost four to get there, though, and then it would cost an additional two to go from SW-2 to SW-1.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=140)** That's a total of six.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=141)** That means on switch SW-4, our root report is gig 1/0/1.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=148)** Next, consider SW-3.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=150)** If I went out over gig 1/0/2, that's a cost of four, to get up to SW-2, then an additional two to get from SW-2 back to SW-1.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=160)** That's a cost of six in total.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=162)** Now we have a bit of an issue.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=164)** We have a tie as we exit gig 1/0/10 and 1/0/11.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=170)** They each have a cost of four to get up to the root bridge.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=174)** So which one do we use?
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=176)** Well, normally in a situation like this, the tiebreaker is going to be to look at the far end of each link, and whichever far-end switch has the lowest bridge ID, that's the port we're going use.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=189)** However, in this case, the far-end switch is SW-1 for both ports.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=194)** We have another tie, and the next tiebreaker is often misunderstood.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=199)** Many people have heard that in the event of a tie, we're going to go with the lowest port ID, which is true, but many people miss-visualize this, which is why I crossed the links in this topology.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=210)** Many people look at this and say, "oh, I'm going to go with the lowest port ID."
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=214)** That's gig 1/0/10, on SW-3, but it's not the port ID on the local switch.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=220)** It's the lowest port ID on the far-end switch, and the lowest port ID on the far-end switch, into which we're connecting, is gig 1/0/3, and that connects to gig 1/0/11 on switch SW-3.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=235)** So that is going to be our root port.
>
> **[3:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=238)** Next up we ask, who are the designated ports?
>
> **[4:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=241)** And we know that every segment has one, and only one, designated port, and it's the port in that link closest to the root in terms of cost, and we get to take a big shortcut here because if we don't get closer to the root, than being on the root, meaning that all of the links connecting into the root are going to have their designated port on the root bridge.
>
> **[4:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=260)** Well, what about the link between SW-2 and SW-3?
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=263)** Well, I put myself on each end of the link and say, which end has the lowest cost?
>
> **[4:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=267)** If I'm on the switch-two end of that link, the cost is two.
>
> **[4:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=271)** I just go over that 10-gig link to get back to the root.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=274)** If I'm on SW-3, though, I've got to go over a gig link to get back to the root.
>
> **[4:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=280)** Which end is the lowest cost?
>
> **[4:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=282)** The end on SW-2.
>
> **[4:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=283)** That means for that segment, gig 1/0/7 on SW-2, that's the designated port and similarly, for the link between SW-2 and SW-4, if I'm on the SW-2 side, it's a cost of two to get to the root.
>
> **[4:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=298)** If I'm on the SW-4 side, it's a cost of four.
>
> **[5:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=302)** So gig 1/0/5 on SW-2, that's my designated port for that segment and at this point, we've addressed all of our links, and there are some ports that are not labeled, well, those are going to be our blocking ports.
>
> **[5:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=315)** So gig 1/0/10 on SW-3, gig 1/0/2 on SW-3 and gig 1/0/2 on SW-4, they're not root ports.
>
> **[5:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=325)** They're not designated ports.
>
> **[5:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-example?u=76281980&t=327)** Therefore, as long as they're administratively up, they are blocking or non-designated ports, and that's a review of how to take a look at a topology and identify spanning tree protocol port states.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (9), let (2), case, (2), this, (2)
> **Env Vars:** mac (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### STP convergence time
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=0)** - We know that Spanning Tree Protocol is going to allow us to physically have a redundant topology while giving us a logical loop-free topology, and it does that by blocking one or more ports in the topology.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=13)** In this example, switch SW-3 is blocking on port Gig 0/2, and that blocking port can transition to a forwarding state if the root port on SW-3 were to go down.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=25)** The question we want to answer in this video is how long does that take?
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=29)** Well, first, we need to understand that SW-3 is periodically receiving messages from SW-1.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=36)** They're called Bridge Protocol Data Units, BPDS to say, Hey, I'm still alive, but let's say that that link goes down between SW-1, our root, and SW-3.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=48)** Suddenly that link is broken.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=49)** Does switch SW three immediately say, I need to take this blocking port and make it a forwarding port?
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=55)** No, it wants to give time for switch SW-1 to send a BPDU into Gig 0/1.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=60)** It's going to wait for 20 seconds and during this time, Gig 0/2 is still in the blocking state.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=66)** After 20 seconds have elapsed, and we've heard no BPDU from our root bridge, then the switch says, it looks like something is up with Gig 0/1.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=76)** I need to start transitioning Gig 0/2 to the forwarding state, and it goes into another state.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=81)** It goes into the listening state, and it stays there for 15 seconds.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=85)** During the listening state, switch SW-3 is listening to BPDUs coming in all of its different ports.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=92)** It's taking a look at everyone's bridge ID.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=94)** It's comparing it to its own bridge ID.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=97)** Who knows? Maybe switch SW-3 is now the route because the route has gone down.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=102)** It's trying to learn its place in the network, and it does that for 15 seconds.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=106)** After 15 seconds, it then goes into the learning state, and when it's learning, it's populating its MAC address table.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=114)** A MAC address available off of Gig 0/1 before might now be available off of Gig 0/2, and it's going to remain in that learning state for 15 seconds, after which it will finally transition to the forwarding state, and Gig 0/2 will become the root port of SW-3, and it can send traffic to the root via SW-2 but grand total, that took 50 seconds, to transition from blocking to forwarding, and that's the default times that we have with traditional Spanning Tree Protocol, IEEE 802.1d.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-convergence-time?u=76281980&t=147)** Well, we're going to see later in this chapter that there's a variant of Spanning Tree Protocol called Rapid Spanning Tree Protocol, which can converge much more rapidly than 50 seconds.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (6), let (1)
> **Env Vars:** bpdu (2), mac (2), bpds (1), ieee (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Speakers:** - we (1)

#### STP variants
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=0)** - [Instructor] In this video, let's consider some different versions of spanning tree protocol.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=5)** Let's go back first to the original industry standard.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=8)** That was IEEE 802.1D that came out in 1990.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=12)** And with this version of spanning tree, we say that it is a CST, a common spanning tree, meaning that if I have several VLANs flowing on trunk connections between these switches, all those VLANs will be using the same spanning tree topology.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=27)** They all see the same switch as the root bridge.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=30)** That might not be optimal though.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=32)** Here, let's pretend we have four VLANs, VLANs one, two, three and four, and we only have one instance of spanning tree topology.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=40)** They all share this one instance where SW1 is the root.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=45)** That might be fine for, let's say VLANs one and three, but perhaps VLAN two would benefit from having SW2 as its root, just based on traffic flow.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=55)** And maybe VLAN four would benefit from having SW3 as its root based on traffic flow.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=60)** Well, we don't have that flexibility with the traditional common spanning tree, but Cisco gave us an enhancement called Per-VLAN spanning tree that does give us that flexibility.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=71)** Per-VLAN spanning tree or PVST for short, allows each VLAN to have its own instance of spanning tree protocol.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=79)** Here, we still have those four VLANs but now they're each running in their own instance.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=85)** Again, VLANs one and three, they benefit from having SW1 as their root, VLAN two benefits from having SW2 as its root, VLAN four benefits from having SW3 as its root, and with PVST, we can have that.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=99)** And in the literature, you might see PVST sometimes written as PVST+.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=103)** Let me make that distinction for you.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=105)** Technically, if you see PVST+, that means these switches are interconnected via Dot1Q trunks.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=113)** If you just see PVST, it means they're not connected via Dot1Q trunks, but typically, they are going to be connected using Dot1Q trunks.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=121)** Just be aware in some of the literature, you might still see that referred to as PVST.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=126)** But let's consider scalability with PVST.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=129)** What if I had a thousand VLANs?
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=131)** Do I really need to have a thousand instances of spanning tree protocol?
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=135)** I may not even have a thousand switches.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=138)** It seems a little bit inefficient.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=139)** And many, many years ago, when switches were not as powerful as they are today, that could be an issue, having too many instances of spanning tree protocol running.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=149)** And a fix for that was multiple spanning tree protocol or MSTP.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=153)** Here, every VLAN still gets an optimal tree, but we don't have to have a tree per VLAN.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=161)** And this is a standard.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=162)** It's IEEE 802.1S and here we define spanning tree protocol instances.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=168)** Here, I've got two instances and I'm saying VLANs one and two, they would benefit from having SW1 as their root.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=174)** So they're assigned to that instance that has SW1 as the root.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=179)** VLANs three and four, they would benefit from having SW2 as the root and they're assigned to the instance that has SW2 as the root bridge.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=188)** You see the benefit here is I don't have to have an instance of spanning tree running on my switch for every single VLAN because some VLANs benefit from having the same topology as other VLANs.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=199)** So this allows us to reduce the number of instances running on a switch while still giving every VLAN an optimal tree.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=207)** And like I was saying, this overcomes an issue we had many years ago when our switches did not have the processing power that they do today.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=214)** But today, personally, I'm not overly concerned with multiple instances of spanning tree bogging down my switch.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=221)** I'm perfectly fine with PVST.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=223)** However, I would prefer a faster version of PVST and that's Rapid PVST.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=229)** Rapid PVST is Cisco's enhancement to the IEEE 802.1W standard.
>
> **[3:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=236)** That's going to help us converge much quicker than 50 seconds that we discussed earlier.
>
> **[4:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=240)** In fact, depending on how the failure happens, the convergence time might be anywhere between a few milliseconds to about six seconds at a maximum.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=249)** So personally, if I'm using a modern day Cisco Catalyst switch, this is my go-to version of spanning tree protocol.
>
> **[4:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=257)** I'm not concerned about multiple instances running.
>
> **[4:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-variants?u=76281980&t=259)** I do love the fact that it gives me an optimal tree for every VLAN and I'm a big fan of the short convergence time.

> [!info]- Semantic Content
>
> **Env Vars:** vlan (12), pvst (12), sw1 (4), sw2 (4), ieee (3)
> **Code Keywords:** let (6), switch (5), for, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### STP configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=0)** - [Instructor] Now that we understand the theory of Spanning Tree Protocol, in this video, we want to set it up.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=5)** Specifically, we're going to see a topology and we'll determine who the root bridge is and what are the port states.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=12)** Then we're going to go in and make a specific switch in the topology, the root bridge.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=16)** And we'll verify that change took effect.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=19)** And to speed things up just a bit, we'll configure Rapid PVST on our switches so we get fast convergence while still giving every VLAN an optimal spanning tree.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=29)** Now, let's go out to the live interface and set this up.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=31)** All right, take a look at the topology on screen and you might want to pause the video and determine who do you think the root bridge is?
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=39)** Well, everybody has the default priority of 32768, so we look to see who has the lowest MAC address.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=45)** And in this case, it's SW 1 that's going to give SW 1 the lowest bridge ID.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=50)** And one SW 1, if I say show spanning-tree, it tells me very clearly that this bridge is the root.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=58)** And we see that we've got a priority of 32768 and here is our MAC address and that's the same MAC address that we have for the root because we are the root.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=67)** Now, something that might be not obvious here is this priority statement that says 32769.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=76)** I thought it was 32768.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=77)** What's going on here?
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=79)** Well, the way Cisco implements this is they do something called an extended system ID where this priority number is the actual priority of 32768 plus the VLAN number.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=91)** Here we're dealing with VLAN one, so this 32769, it's simply 32768 plus the VLAN number.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=100)** And the reason they do that is to minimize the use of MAC addresses by making sure that every VLAN has a unique bridge ID.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=106)** But we're on the root right now, so it's no surprise that both of our ports, gig 0/1 and 0/2, they're designated ports because a designated port is a port on a segment that's closest to the root and we don't get closer to the root than being on the root.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=120)** Let's go over to SW 2 and see what's going on there.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=123)** We'll do a show spanning-tree.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=126)** Here we see our root port is gig 0/1 and we're forwarding but notice that we're in a blocking state on the other two ports.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=135)** These two ports are connecting us over to SW 3.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=138)** Remember that every link has one and only one designated port but it's not us on SW 2.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=145)** When we're trying to determine who that designated port is, we say which end of a segment is closest to the root in terms of cost but in this case, SW 2 and SW 3, they're equally close to the root.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=156)** So the tiebreaker is which one of those switches has the lowest bridge ID?
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=160)** And in this case, if you look at the topology, you'll see that switch SW 3 has a lower MAC address.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=166)** That gives it the lowest bridge ID and the ports on the SW3 side of these two links, they're going to be designated.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=172)** In fact, let's verify that.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=174)** Let's go over to SW 3 and do a show spanning-tree.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=178)** And we'll see that for gig 0/2 and 0/3, we are designated ports on SW 3 and we're forwarding.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=187)** These are all gig ports.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=188)** So they each have a cost of four.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=190)** But let's say for traffic flow reasons for VLAN one, it would be best if SW 3 were the root instead of SW 1.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=199)** Here's how we can administratively configure the root bridge in a topology.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=203)** Let's go into global configuration mode, and on SW 3, I'm going to say spanning-tree for VLAN 1, I want this to be the primary root.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=212)** So I say root primary.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=215)** We'll press Enter.
>
> **[3:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=216)** And let's see what happened.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=218)** Let's do a show spanning-tree command again.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=222)** And now it says that we are the root.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=225)** And the reason we're the root is when I said spanning-tree VLAN one root primary, it took this priority from 32768 down to 24576.
>
> **[3:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=237)** In other words, we reduced 32768 by 25%.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=242)** And that makes us the root bridge.
>
> **[4:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=243)** And finally, let's see how to convert these switches to running Rapid PVST+ so we can enjoy much faster conversion times.
>
> **[4:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=251)** To do that, we can go into global configuration mode and I'll say spanning-tree mode.
>
> **[4:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=258)** We've got three options: the multiple spanning tree mode, PVST or what we want, rapid-pvst.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=266)** We'll enter that.
>
> **[4:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=267)** We'll confirm the change with a show spanning-tree command again and it says that we're enabled for Rapid Spanning Tree Protocol and we want to make sure that all of the switches agree on that.
>
> **[4:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=280)** So I'll go over to SW 2 and say spanning-tree mode rapid-pvst.
>
> **[4:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=288)** And we'll finish it up on SW 1 by saying spanning-tree mode rapid-pvst.
>
> **[4:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/stp-configuration?u=76281980&t=297)** And that's a look at how we can verify the root bridge and port states in the topology, influence who the root bridge is and then change the Spanning Tree Protocol mode to Rapid PVST.

> [!info]- Semantic Content
>
> **Env Vars:** vlan (8), mac (5), pvst (4), sw3 (1)
> **Code Keywords:** let (9), case, (3), switch (2), interface (1), implements (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), in other words (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### EtherChannel theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=0)** - [Instructor] In this video, we want to consider a feature that Cisco calls EtherChannel, or you might hear it more generically referred to as link aggregation.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=8)** The idea is this.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=9)** We want to have multiple links interconnecting our switches, and Spanning Tree will take a look at that and block traffic overall, but one of those links.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=17)** But what we can do with an EtherChannel is logically bundle together multiple links into what looks like a single connection.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=24)** That's going to allow us to simultaneously send traffic over all links in this EtherChannel bundle.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=31)** And as a result, we're going to get increased bandwidth.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=33)** We're going to be able to load balance across those links.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=36)** We're going to be able to have redundancy.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=38)** So if a link were to fail, we can still send traffic over any remaining links.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=42)** Now, here, I just have two links in this bundle, and the bundle is represented with that oval superimposed over those links, but we can have two links in a bundle, four links, or a maximum of eight links.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=55)** And those links, when we're configuring them, can be set up dynamically using a protocol such as PAgP, which is Cisco proprietary, that support aggregation protocol, or LACP.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=67)** That's an industry standard, the Link Aggregation Control Protocol.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=71)** Now, let's take a look, first of all, at how Cisco's PAgP works.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=75)** The idea is we may be able to go to just one switch and set up an EtherChannel by negotiating the formation of an EtherChannel with the other switch.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=84)** First of all, let's consider the EtherChannel port mode of On.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=87)** On technically is not using PAgP, or LACP, for that matter.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=91)** It's not sending PAgP frames.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=93)** It's not going to respond to PAgP frames.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=95)** It's just on.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=96)** And if you want to set up an EtherChannel, and one side has its EtherChannel port mode set to On, the other side had better be set to On as well.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=104)** That's the only way it's going to work with On.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=106)** So you cannot have one side set to Auto and one side set to On, or one side set to Desirable and the other side set to On.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=113)** That's not going to work.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=114)** Also, you cannot have both sides set to Auto.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=117)** Auto says I'm willing to become an EtherChannel, but I first have to receive a PAgP frame.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=122)** I'm not going to suggest that we form an EtherChannel.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=125)** And with both sides set to Auto, even though both sides are willing, nobody initiates the formation of a channel, and one is never formed.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=133)** However, if one side is set to Auto, and the other side is set to Desirable, that will form an EtherChannel because the EtherChannel port state of Desirable will send out a PAgP frame asking the other side, hey, do you want to form an EtherChannel?
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=148)** And if the other side is Auto, it will respond to that PAgP frame and say yes, let's do it.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=152)** Let's form an EtherChannel.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=154)** And the EtherChannel will be brought up, and it will also come up if we have both sides set to Desirable.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=160)** They'll each see one another's PAgP frames, and they will mutually agree to bring up an EtherChannel.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=166)** Now, this is PAgP, and the port states work exactly the same way with LACP, except instead of Auto and Desirable states, we have passive and active states with LACP.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=177)** Passive takes the place of Auto, and Active takes the place of Desirable.
>
> **[3:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=180)** And if you're working on non-Cisco gear, this is probably the protocol you're going to be using.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=185)** And finally, I want to dispel a misconception that many people have with EtherChannel.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=189)** Many people would take a look at a topology like this and assume that the first packet is going to go over the first link, and the second packet would go over the second link, and so on.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=199)** That's not necessarily true because EtherChannel is going to use a load-balancing algorithm.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=205)** It's going to use math to determine which link a particular frame goes over.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=209)** And on many Cisco catalyst switches, the default load-balancing algorithm I've seen used is using the destination Mac address.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=218)** Remember that a Mac address has 48 bits.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=222)** Well, how many bits do we need to represent four different values, one value for each link?
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=227)** It just takes two bits to do that, doesn't it?
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=229)** Two raised to the power of two is four.
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=231)** So let's put those different bit combinations on those links.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=235)** The top link gets 00.
>
> **[3:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=236)** The next link gets 01, then 10, and the bottom link gets 11.
>
> **[4:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=241)** And those are going to represent the last two binary bits in the Mac addresses of the destination.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=247)** And let's say we're going to be sending traffic into this server farm.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=250)** We have servers 1, 2, and 3.
>
> **[4:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=252)** And as we're looking at their Mac addresses, the last hexadecimal digit in the Mac address for server 1 is a 1.
>
> **[4:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=259)** The last hex digit in server 2's Mac address is a 5.
>
> **[4:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=262)** And the last hex digit in server 3's Mac address is a D.
>
> **[4:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=265)** They all seem different.
>
> **[4:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=267)** However, if we look at those hex digits in binary, we see that the two rightmost binary bits are identical.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=274)** They're 01, which corresponds to the second link in this EtherChannel.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=278)** That means if the PC is sending traffic to either server 1 or server 2 or server 3, it's always going to be using the same link to do that.
>
> **[4:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=287)** It's always going to be using that link indicated with a 01.
>
> **[4:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=290)** So we're not always getting perfect load balancing, as we might assume.
>
> **[4:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=294)** The good news is we don't have to stay with this default load-balancing algorithm.
>
> **[4:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=299)** We get to change.
>
> **[5:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=300)** We get to select from these options.
>
> **[5:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=302)** We could base our link selection on destination IP or Mac address, source IP or Mac address.
>
> **[5:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=308)** Personally, I prefer to randomize things a bit by considering both source and destination addresses, either IP or Mac addresses.
>
> **[5:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=317)** So I would choose one of the bottom two, and that's going to add a bit of randomness.
>
> **[5:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=320)** So if I had multiple PCs, they would potentially use different links to get over to those servers.
>
> **[5:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-theory?u=76281980&t=326)** And that's a look at how link aggregation works, a feature that Cisco calls EtherChannel.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), switch (2), this. (1), finally, (1)
> **Env Vars:** lacp (4)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### EtherChannel configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=0)** - [Instructor] In this video, let's discuss the configuration of an EtherChannel and we're going to do this using the same topology that we used earlier for a spanning tree protocol.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=9)** And we want to create a two port EtherChannel between a couple of switches in that topology.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=14)** And we're going to use the PAgP, the port aggregation protocol approach, to negotiating this EtherChannel.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=21)** And once we have the channel set up, we want to set up a Dot1Q trunk over the channel.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=25)** After all, a trunk could really benefit from an EtherChannel thanks to the increased throughput of an EtherChannel and a trunk carrying traffic for multiple VLANs.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=34)** So it's really common to configure an EtherChannel to act as a trunk.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=38)** And once we're done, we'll verify the EtherChannel.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=40)** Now let's go out to the live interface and set this up.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=43)** We're going to be setting up our EtherChannel between switches SW2 and SW3.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=47)** And we're going to go into interface range configuration mode for the two ports in this EtherChannel.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=53)** Let's go into global configuration mode and I'll say interface range gig 0/2-3.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=60)** This is the time saver allowing me to configure both ports at the same time.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=64)** And to create an EtherChannel, I'm going to say channel-group and I'm going to give it an identifier because we could have more than one EtherChannel on a switch.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=74)** I'll give it an identifier of a 1.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=76)** And for the mode, I'm going to use PAgP and I'm going to say desirable.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=81)** I'm going to send PAgP frames to the far end.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=85)** And if the ports at the far end have their EtherChannel port modes set to either auto or desirable, this should bring up an EtherChannel.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=92)** And once we press enter, this creates a virtual port representing our EtherChannel, it's Port-channel 1.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=100)** Let's go into that interface that just got created we'll say interface port-channel 1.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=108)** And let's configure a trunk on this interface which is a logical interface made up of those two physical interfaces.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=115)** I'm going to say, switchport trunk encapsulation dot1q because we don't want to use ISL.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=124)** And then I'm going to say via trunk with a command switchport mode trunk and while we're here, let me show you how to set the load balancing algorithm.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=134)** We're going to do that in global configuration mode.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=136)** We'll say port-channel load-balance and we've got these options.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=142)** I'm going to say, I want to use a combination of the source and destination mac addresses.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=150)** And we'll enter that and let's go give a complimentary configuration on the far side.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=154)** We'll go over to switch SW3 and just to make sure everything is set up here, I'll go into interface range configuration mode for a gigabit 0/2-3.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=164)** And I'll say channel-group 1 mode I'll set this side to auto.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=170)** So it will respond to PAgP frames being sent by SW2.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=175)** This creates our Port-channel 1 interface.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=178)** We'll exit.
>
> **[3:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=180)** We'll go into that interface of Port-channel 1 and we'll set up a trunk on this port with the command switchboard trunk encapsulation dot1q followed by switchport mode trunk.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=196)** And I'll set this to the same load balancing algorithm.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=200)** In global configuration mode, I'll say port-channel load-balance source destination mac.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=212)** Let's see if it worked.
>
> **[3:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=213)** Let's do a show ip interface brief command and we see that we have this virtual interface called Port-channel 1.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=222)** Great news.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=223)** It is up at layer one.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=225)** It is up at layer two.
>
> **[3:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=227)** Let's do a show etherchannel summary command and we see information about this EtherChannel.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=235)** We see it has an identifier of a 1, we're using PAgP.
>
> **[3:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=239)** These are the two ports that are members of that channel.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=242)** Do we have a trunk?
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=244)** Let's do a show interfaces trunk command and it'll tell us if we have any trunks.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=250)** And yes, indeed.
>
> **[4:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=251)** We have a dot1q trunk running on Port-channel 1.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/etherchannel-configuration?u=76281980&t=256)** And that's a look at how we can logically group together, physical interfaces into one logical interface called an EtherChannel, set up a trunk over that EtherChannel, and adjust the load balancing algorithm.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (13), let (11), switch (2)
> **Prerequisites:** set up (5), configure (3)
> **Env Vars:** sw2 (2), sw3 (2), isl (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. IP Routing

#### Packet flow in a routed network
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=0)** - [Instructor] We know that an ethernet switch is going to make a forwarding decision based on a layer two Mac address.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=6)** Well in this video, we're going to see how a router makes its forwarding decision using a layer three IP address.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=12)** Specifically in this example, the PC wants to get to the server and after the PC first boots up, it's given its IP address, its subnet mask, it's default gateway and the source IP address for this communication to the server is going to be the PC's IP address, 192.168.1.2.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=30)** The destination IP address is the server, 192.168.2.2.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=36)** But in order for that PC to get off of its local subnet, it needs to send traffic to router R1.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=43)** And to send a frame into R1, we know its IP address 192.168.1.1, but to send a frame to R1, we need to know its Mac address.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=52)** And right now the PC does not know the Mac address of interface Gig 1 on R1.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=57)** So what it does is send out an ARP broadcast message.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=61)** ARP stands for address resolution protocol and it's asking, hey, can somebody tell me the Mac address for this IP address of 192.168.1.1?
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=71)** And router R1 says, yes, that's me.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=73)** I have the all ones Mac address.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=76)** The PC gets that.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=77)** And it makes a note of that in its ARP cache.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=80)** So the next time it wants to go to 192.168.1.1, it doesn't have to send out an ARP broadcast.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=87)** It's going to memorize the Mac address of that IP address.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=91)** So now the PC, it's ready to send out its packet going to the server.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=95)** The important thing to realize here is the source and destination IP addresses do not change.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=100)** However, the Mac address is do change.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=103)** In the first leg of the journey, the source Mac address is the PC's Mac address of all A's and the destination Mac address is interface Gig 1 on R1.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=114)** You see both of those Mac addresses are on the same network segment.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=119)** The source IP, that's the PC's IP address, the destination IP, that's the server's IP address, and again, those do not change throughout this communication flow, but now R1 looks at that destination IP address of 192.168.2.2 and it's going to take a look at its routing table to see if it knows how to get there.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=138)** Great news.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=139)** Router R1 does have an entry in its routing table for the 192.168.2.0/24 network.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=146)** And it says, if you want to get to that network, you need to go to a next hop address of 10.1.1.2 and that's R2.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=154)** This is how R1 can intelligently forward that traffic.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=157)** It looks at the destination IP address, checks its routing table for the most specific entry that will get it to that IP address.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=166)** And in this case, it's going to forward it to the next hop of R2.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=170)** Notice the Mac addresses have changed as we go from R1 to R2.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=174)** Now the source Mac address is the all twos Mac address.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=178)** That's the outgoing interface on R1.
>
> **[3:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=180)** The destination Mac address of all threes, that's the incoming interface on R2.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=186)** You see every network segment, our Mac addresses are updated for the source and destination max on that segment.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=193)** But now R2 is in possession of the packet.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=196)** It takes a look at that destination IP address and it asks, can I get to 192.168.2.2?
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=203)** Well, in this case, R2 says, yes, I'm directly connected.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=207)** I just need to send this out of interface Gig 1 and it does.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=211)** And that gets the packet up to the server.
>
> **[3:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=213)** And in that last leg of the journey, as we're exiting R2 on Gig 1, that Gig 1 Mac address is our source Mac address for this segment.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=222)** And the destination Mac address is finally the all B's Mac address of the server.
>
> **[3:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=226)** But notice at no point did the source or destination IP addresses change.
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/packet-flow-in-a-routed-network?u=76281980&t=231)** It was just the Mac addresses that were updated for every network segment that we crossed.

> [!info]- Semantic Content
>
> **Versions:** 192.168.1 (4), 192.168.2 (4), 10.1.1 (1)
> **Code Keywords:** interface (5), case, (2), switch (1)
> **Env Vars:** arp (4)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### Static and default routes
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=0)** - [Instructor] We know that a router is going to make a packet forwarding decision based on a destination IP address.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=6)** And the question we want to begin to address in this video is how does the router build its routing table that tells it have to forward traffic to that destination IP address?
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=17)** One way that we'll discuss later is to have a dynamic routing protocol, but in smaller networks, we might not need a routing protocol.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=24)** We could just go in and administratively add routes to the router's routing table.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=29)** In this example, we might go into router R1 and say if you want to get to the 198.51.100.0/24 network, you need to go to a next top IP address of 10.0.0.2, which is R2.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=42)** And if you want to get to the 203.0.113.0/24 network, you need to go to a next top IP address of 10.0.0.6, that's R3.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=51)** And I mentioned that we could do static routing instead of running a dynamic routing protocol, but we could actually run these side by side.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=58)** And the great news is the static routes that we administratively configure, by default, they're going to be more believable than a route learned via some routing protocol.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=69)** And again, that static route is going to say to get to this network, go to this next hop IP address.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=74)** And there are times when we might want to use a default route.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=78)** A default route says if you don't have a specific route entry to get to a network, go this way.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=84)** In fact, the default route is written as all zeros, which encompasses all possible IP addresses.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=91)** And if there's not a more specific route entry in a routing table, we're going to take that default route as, as some people say, a gateway of last resort.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=100)** We don't have a more specific way of getting to a destination, so let's use the default route.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=105)** And there are times when we want to use default routes.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=108)** Consider the topology on screen.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=109)** We've got a branch office that only has one way out to the rest of the world and that's to go to a next hop of the HQ router back at the headquarters.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=117)** So if the PC over at the branch office, if it wants to reach any network within the headquarters or if it wants to get to any network out on the internet, it's only got one way to go.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=127)** The only possible way to get to those external networks is to go to a next hop address of 10.0.0.1, the HQ router.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=135)** So instead of us going in to BR1 and setting up a bunch of static route entries to get to all the individual networks within HQ, we could just have a default route to say if you don't have a more specific route entry, come to me, come to HQ.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=149)** And in a situation like that, we're going to be statically configuring that default route.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=153)** But in a large enterprise, we might have a router sitting at the boundary of the internet and the enterprise network.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/static-and-default-routes?u=76281980&t=159)** Well, that router could advertise via a dynamic routing protocol a default route to let all the other routers in the enterprise know to come towards it to get out to the internet.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), let (2), default, (1)
> **Versions:** 10.0.0 (3), 198.51.100 (1), 203.0.113 (1)
> **UI Navigation:** go to (5)
> **CLI Commands:** make (1)
> **Env Vars:** br1 (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Configuring static and default routes
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=0)** - [Instructor] Now that we understand the theory of static and default routing.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=4)** In this video, we want to set them up.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=6)** We'll begin by configuring a couple of static routes that will allow a PC to reach a couple of remote networks.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=11)** We'll verify that static routing configuration in the router, and then we'll do a default route configuration, where we might have just one path to get out to the rest of the world.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=20)** Now let's go out to the live interface and first configure static routing.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=25)** We're sitting on router R1 in this topology you see on screen, and if we check our routing table right now with a show ip route command, you'll see that the only routes we know about are those that we're connected with.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=38)** That's what the C indicates.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=39)** It means we're directly connected.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=41)** Now, the L, that's an actual IP address of a local interface.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=45)** Notice the /32 subnet mask.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=47)** If you ever see a /32 subnet mask, that means we're talking about a single IP address.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=52)** That tells us that 10.0.0.1 is the IP address assigned to interface Gigabit 0/2 in this case, but we have not been educated about any non-directly-attached networks.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=65)** So let's see how to add a couple of static routes to router R1.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=69)** We'll go into global configuration mode, and I'll say ip route, and we enter the network address that we want the router to put in its routing table.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=77)** It's 198.51.100.0, and the subnet mask is 255.255.255.0,
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=87)** and now we say what is the next top IP address to get to this network?
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=92)** Well, in this case, we want to go to 10.0.0.2 to get to that network.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=97)** That's the IP address of the incoming interface on router R2.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=101)** Let's do one more.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=102)** Let's say ip route 203.0.113.0.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=106)** Again, we have a 24-bit subnet mask, 255.255.255.0.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=112)** This time, R3 is going to be the next top, with an IP address of 10.0.0.6, and let's enter that, and we'll end that configuration.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=123)** That's how easy it is to add a couple of static routes.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=126)** Now let's confirm that those routes are indeed in our routing table.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=129)** Let's do a show ip route once again, and this time we should see a couple of extra routes, and we see they're indicated with an S, an S indicating a static route, and the final question is, can we reach IP addresses in those subnets?
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=144)** Let's try.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=144)** Can I ping for example, 198.51.100.1?
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=150)** Yes, I can.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=151)** Can I ping 203.0.113.1?
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=157)** Yes I can.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=158)** So what we have been able to do here is to go into router R1 and tell it how to reach a couple of remote networks, not by running a dynamic writing protocol, but by pointing to a next top IP address.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=170)** Now let's take a look at another topology where we will configure a static default route.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=175)** You'll see that we have a new topology on screen now.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=178)** Let's go over to router BR1, and let's see what routes it knows about.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=181)** We do a show ip route, and we do not know about any networks that are not directly attached.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=190)** Now, if you look at that topology, you'll notice that if I want to get to any network outside of BR1.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=196)** For example, I wanted to get to a network within the HQ site or network out on the internet.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=202)** I've only got one possible way to get there, and that's to go to HQ.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=205)** That's an opportunity where I could use a default route, and I'm going to statically configure it.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=211)** So let's go into global configuration mode, and I'm going to say ip route and to specify a default route, both the network address and the subnet mask, they're all zeros.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=221)** So I'll say I want to route to 0.0.0.0 0.0.0.0, and the next top IP address is going to be the HQ router.
>
> **[3:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=230)** That's the only way I can get to any other network that's not local to me, and that incoming interface has an IP address of 10.0.0.1.
>
> **[3:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=238)** Let's take a look at what that route looks like.
>
> **[4:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=240)** Let's do another show ip route, and as we saw earlier, a static route is indicated with an S, but we also have an asterisk.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=250)** What that means is this is our candidate default route.
>
> **[4:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=254)** If I'm trying to reach a network, and I don't have any more specific entry in my routing table to get to that network, then I'm going to go to what is called my gateway of last resort, my default gateway, which in this case is 10.0.0.1 and to verify this works, let's see if I can ping the IP address on the internet side of the HQ router.
>
> **[4:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=274)** Let's try to ping 203.0.113.1.
>
> **[4:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-static-and-default-routes?u=76281980&t=279)** Let's press Enter, and that was successful, and that's a look at how we can go in and start to populate a router's routing table with static routes and how we can add a default route, which we can use to get to any network that is not otherwise specified in the IP routing table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), static (10), interface (5), case, (2), try. (1)
> **Versions:** 10.0.0 (5), 203.0.113 (3), 198.51.100 (2), 255.255.255 (2), 0.0.0 (2)
> **UI Navigation:** go to (3)
> **Prerequisites:** configure (3)
> **Env Vars:** br1 (2)
> **Analogies:** for example (2)
> **Cross-References:** as we saw (1)
> **Definitions:** is called (1)

#### Routing protocol selection
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=0)** - [Instructor] Even though we could go into a router and add a bunch of static routes, that's not going to scale well for the enterprise.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=7)** For medium to large-size networks, we need a dynamic writing protocol typically.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=12)** A dynamic writing protocol allows routers within the network to share information about known networks, and we have several to pick from.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=20)** We see some of those listed here on screen.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=22)** And the question that a network designer might ask, is which writing protocol should we use?
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=27)** Well, one consideration is scalability.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=30)** How big can this thing get?
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=30)** RIP is an example, the writing information protocol is not very scalable.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=36)** Specifically, if a network is available more than 15 routers away from us, it's not reachable with RIP.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=44)** RIP considers anything more than 15 routers away to be infinitely far away.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=49)** So that's not going to scale.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=50)** OSPF is very scalable.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=52)** I used to work down at Walt Disney World in Florida where we had about 600 routers, and we ran EIGRP.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=58)** It was very scalable.
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=59)** IS-IS I also very scalable.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=62)** We tend to see that in service provider or data center networks.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=66)** Maybe the most scalable protocol of all is BGP.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=68)** The Board of Gateway Protocol.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=70)** That's the protocol that runs the internet.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=72)** It ties together the various internet service providers, and different companies.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=76)** In fact, it's typically used between autonomous systems.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=79)** We don't use BGP that often within our network, and we'll keep our focus on routing within our network for now.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=86)** Another consideration might be vendor interoperability.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=89)** If we have routers that are all Cisco like we did down at Walt Disney World, we might consider EIGRP because for a long time, EIGRP was a Cisco proprietary protocol.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=100)** Back around 2010, Cisco started to open that up a little bit to other vendors, but it didn't really catch on that much.
>
> **[1:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=107)** Other vendors still don't have widespread adoption of EIGRP.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=111)** So if you had some Cisco routers and maybe some Juniper routers, you might want to use something like OSPF instead of EIGRP.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=118)** And sometimes it comes down to your IT staff.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=121)** Are they more familiar with one writing protocol than another?
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=124)** There are a lot of features in these protocols.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=127)** So if your it staff is super knowledgeable about IS-IS, that might be the deciding factor to cause your company to go to IS-IS instead of OSPF.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=136)** And another one is convergence time.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=138)** If a failure occurs in the network, the great thing about a dynamic writing protocol is if there's another way to get to a destination network, we can route around that failed network segment, and that process of routing around a failed segment is called convergence.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=155)** How quickly do these converge?
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=156)** Well, it varies.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=158)** RIP for example is fairly slow.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=159)** It could take up to three minutes to converge.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=162)** OSPF, EIGRP, IS-IS, they're very fast, maybe just a few milliseconds to just a few seconds.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=168)** BGP is going to vary in its convergence time, but on the internet, because the internet is so big, it might take a few minutes to converge, but that's typically okay over the internet.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=179)** But within an organization, RIP is usually going to be too long of a convergence time to be considered.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=185)** And we're not forced to run just a single writing protocol.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=188)** We could have multiple writing protocols running in the same network, which begs the question, "What if we have conflicting write information?"
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=195)** What if one protocol says, "Come to me to get to this network."
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=198)** And another writing protocol says, "No.
>
> **[3:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=200)** I'll get you to this network."
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=202)** Who do we believe?
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=203)** Well, the believability of route information is determined by something called the Administrative Distance.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=209)** The lower the Administrative Distance of route information, the more believable it is.
>
> **[3:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=215)** And we don't get more believable than being directly connected to a router.
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=219)** If a router has an interface and it's connected to a specific network that is super believable, so it's Administrative Distance is the minimum value of zero, which is the most believable.
>
> **[3:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=230)** If we go to the trouble to administratively configure a static route, that's going to be believable and it's going to have an Administrative Distance of a one by default.
>
> **[3:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=239)** Next step is BGP, the Border Gateway Protocol.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=242)** It seems to beat out all of the other dynamic writing protocols.
>
> **[4:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=245)** But remember, we typically are not running BGP within our company.
>
> **[4:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=250)** We're running it between our company, and our internet service providers.
>
> **[4:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=254)** EIGRP, that's the Enhanced Interior Gateway Writing Protocol, that has an AD or Administrative Distance of a 90.
>
> **[4:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=262)** That's more believable than OSPF, Open Short of Path First.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=266)** That's a little bit more believable than intermediate system to intermediate system, IS-IS and that's more believable than the Routing Information Protocol or RIP for short, that has an AD of 120.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-selection?u=76281980&t=278)** And this is not meant to be a comprehensive listing, but I did want you to get familiar with some of the common options for dynamic writing protocols, and why we might choose one over another.

> [!info]- Semantic Content
>
> **Env Vars:** eigrp (7), rip (6), ospf (5), bgp (5)
> **Code Keywords:** static (2), super (2), from. (1), interface (1), default. (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1), is called (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Routing protocol categories
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=0)** - [Instructor] In our previous video, we talked about BGP, the Border Gateway Protocol, as a protocol that would communicate between our company and our different ISPs, our Internet Service Providers.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=12)** Well, in an example like that, our company would have a number called an Autonomous System value, an AS value.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=20)** Each of our ISPs would have their own values as well.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=24)** And we define an autonomous system as being a network under a single administrative control.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=29)** And we'll talk in a moment about how BGP is going to primarily route between autonomous systems.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=35)** Another term we need to understand is an IGP, and Interior Gateway Protocol.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=41)** This is a protocol that is going to run within an autonomous system, such as RIP or OSPF or IS-IS or EIGRP.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=50)** And what runs between autonomous systems?
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=52)** We gave BGP as an example.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=54)** That's an EGP, an Exterior Gateway Protocol.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=57)** So that's going to take us between one autonomous system and another autonomous system.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=61)** In a case like this, Company A is autonomous system 65000, 1 ISP is 65100.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=69)** Another ISP is 65200.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=71)** But within Company A within that autonomous system, we're going to be running some sort of an IGP, an Interior Gateway Protocol.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=79)** And again, examples of those might be the Routing Information Protocol, or RIP, IS-IS, that's intermediate system to intermediate system, OSPF, that's Open Shortest Path First, and EIGRP, the Enhanced Interior Gateway Routing Protocol.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=94)** And running between autonomous systems, we can have an EGP.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=98)** And currently, the only exterior gateway protocol we have is BGP, the Border Gateway Protocol.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=104)** And these different protocols fall into different categories: distance vector, link state, or path vector.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=110)** First, consider RIP.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=112)** RIP is a distance vector routing protocol.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=115)** And if you think back to your high school math or science class, do you remember what a vector is?
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=119)** It gave us two pieces of information.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=121)** It gave us magnitude and direction.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=124)** In other words, how big is it and in which direction is it?
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=127)** Well, that's what RIP does.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=129)** RIP is going to give us a vector that points to a network.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=133)** The magnitude of that route is going to be how many router hops it is away.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=137)** That's the metric used by RIP.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=140)** If it can get to a network in a fewer number of hops one way versus another way, it's going to go with the route that has the fewest number of hops.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=147)** And it's going to tell us in which direction to go to get to that network by specifying a next hop IP address.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=154)** OSPF, however, and also IS-IS, they fall under the category of link state.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=159)** With link state, it's like having a map of the entire network.
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=163)** And this works just like your car's navigation system does.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=167)** Your car's navigation system, or maybe an app on your smartphone, has a map of the world.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=172)** And if you're trying to get from your current location to another location and you want to drive there, your car's navigation or that mapping application on your smartphone, it's going to assign a cost to different roadways.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=184)** Higher speed roadways would have a lower cost.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=186)** Back roads, gravel roads, they would have a higher cost.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=189)** And it's going to perform a mathematical calculation using something called the Dijkstra algorithm to determine what's the lowest cost and that's the path that it's going to choose.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=199)** And both OSPF and IS-IS, they run that very same Dijkstra algorithm on their map of the network stored in a link state database.
>
> **[3:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=208)** But the thing I want you to know about a link state routing protocol for now is it has a map of the network.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=214)** Now, EIGRP is also a distance vector routing protocol.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=218)** It does not have a map of the network, so it is not link state.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=222)** Many people would refer to this as an advanced distance vector routing protocol, and I would agree with that, because it does have very fast convergence compared to RIP.
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=231)** But in a category of its own is BGP, the Border Gateway Protocol.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=235)** It's a path vector routing protocol.
>
> **[3:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=238)** Vector implies that it tells us the next hop IP address to go to to get to our destination network, but the path is something unique to BGP.
>
> **[4:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=248)** It actually gives us a listing of every autonomous system that we have to cross through in order to get to that destination network.
>
> **[4:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=255)** And that's an overview of interior gateway protocols that run within an autonomous system and our exterior gateway protocol of BGP that runs between autonomous systems and what category each routing protocol falls into.
>
> **[4:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/routing-protocol-categories?u=76281980&t=269)** Is it distance vector, link state, or path vector?

> [!info]- Semantic Content
>
> **Env Vars:** rip (8), bgp (7), ospf (4), eigrp (3), igp (2)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **Analogies:** such as (1), it's like (1), just like (1)
> **Code Keywords:** this, (1), class, (1)
> **Cross-References:** previous video (1), we talked about (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### RIP theory
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=0)** - [Instructor] The routing protocol that we're going to be considering in this course is RIP.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=4)** The Routing Information Protocol.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=6)** And we're going to consider in this introductory course because it's one of the simpler routing protocols out there.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=10)** It is older.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=11)** You probably will not find it in large enterprise networks, but you might see it in some smaller networks out there because it is so easy to configure, and there are three different versions we want to consider.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=21)** RIP version one, which we should definitely not be using today.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=25)** RIP version two and RIPng or RIP next generation.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=29)** Let's consider each one of these.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=31)** Beginning with RIP version one.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=33)** With version one, when a RIP speaking router sends out a network advertisement, it does it with a broadcast, which goes everywhere throughout a broadcast domain.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=42)** That means that PCs and printers on all devices connected to a subnet are going to hear these broadcasts about routing updates.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=49)** That's not very efficient.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=50)** Also version one does not support variable length subnet masking.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=55)** And that means we cannot advertise a network for example, with a slash 22 subnet mask, we have to send advertisements at a class full boundary, and that's not very efficient.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=66)** Also RIP version one, it supports IP version four only.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=70)** Things got a lot better with rip version two.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=73)** Instead of sending out a broadcast to everybody on a subnet, RIP version two is going to send its route advertisements to a multicast address of 224.0.0.9 which is going to go only to RIP-speaking routers.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=87)** Version two does support variable length subnet masking.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=90)** So we can advertise a subnet mask of any length, and version two adds authentication to prevent somebody from maybe maliciously adding a router to the network, and corrupting a routing table, but like version one, RIP version two only supports IP version four.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=106)** We can run version two however concurrently with RIPng if we want to add support for IP version six, because RIPng or RIP next generation, it does support IP version six, and it's going to send its route advertisements to an IPv6 multicast address of FF02::9.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=126)** So if you wanted to support both IP versions four and six, you might want to run RIP version two and RIPng on the same router, and the way RIP judges the best path to reach a network is based on hop count.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=139)** It asks how many routers do I have to hop over or transit in order to get to a destination network?
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=145)** That's the metric of RIP, hop count.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=147)** In this example, if we're going from the network on the left to the network on the right, then we're hopping over or we're transiting two different routers.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=155)** That's a hop count of two.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=156)** And rip is limited in scalability because it's maximum hop count is 15.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=161)** If we have a hop count of 16 to reach a network, that's considered to be infinitely far away.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=166)** And another characteristic of RIP I would want you to know about is how it sends out its updates.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=171)** It sends both full updates and triggered updates.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=174)** A full update is its complete routing table that it's going to send out every 30 seconds.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=179)** That's a little bit chatty compared to some other routing protocols, and that doesn't scale very well with larger routing tables.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=186)** But if something has happened to the topology of the network and route information is suddenly changed, RIP is not going to wait for that 32nd interval to send out the update.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/rip-theory?u=76281980&t=194)** If something happens, it will send out a triggered update to let other RIP-speaking routers know that some network change has occurred.

> [!info]- Semantic Content
>
> **Env Vars:** rip (17), ff02 (1)
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Versions:** 224.0.0 (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Split-horizon and poison reverse
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=0)** - [Instructor] In this video, we want to consider a couple of features that RIP, has Split Horizon and Poison Reverse.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=6)** Now, Split Horizon is a rule that's used not just by RIP but also by EIGRP and that rule says that if a router receives an advertisement for a network in a specific interface, that router will not advertise that same network out of the interface on which it was learned and that can prevent a routing loop or what's called a count to infinity problem.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=27)** Consider this example, let's imagine that Split Horizon has been disabled and R3 is connected to the 10.1.1.0/24 network and we see in R3s routing table, it's zero hops away because it's directly connected and it has advertised to previously over to R2 that it's directly connected and R2 knows that the 10.1.1.0/24 network is available to it if it just hops through or transits one router.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=53)** So it has a hop count of one from the perspective of R2 but let's say something happens to that network, it goes down, when that happens, R3s routing table says we're no longer directly connected.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=64)** We're infinitely far away from this, but let's say that R2 then advertised just to R3, I can reach 10.1.1.0/24 in one hop and R3 says, oh that is great news because I could not reach it previously.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=77)** If you're one hop away and I go through you that means I'm two hops away.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=81)** Do you see the issue here?
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=82)** R2 is not one hop away from that network any longer because that network is down and R3 has a false sense of assurance that it can reach that network.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=91)** When R3 does advertise that network back to R2, saying it's two hops away, R2, since it learned the network from R3 in the beginning, it's going to update its hop count to say it's three hops away and following that same logic R2 advertises to R3 that it's three hops away, R3 says, I'm now four hops away and this goes on and on until we reach a hop count of 16.
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=113)** Remember when we get to a hop count of 16 in RIP, that network is considered to be infinitely far away.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=119)** It's unreachable.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=120)** This is a count to infinity problem, but by having Split Horizon enabled as it is by default, router R2 is not going to advertise back to R3 any networks that it has learned from R3, that's going to prevent this count to infinity problem.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=135)** Another way that RIP attempts to prevent a routing loop like this or a count to infinity problem is a feature called Poison Reverse.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=143)** This says when a network goes down, a router is going to advertise a poisoned route, a route with an infinite metric saying that this route is unreachable.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=152)** Going back to our previous topology, let's once again say that the 10.1.1.0/24 24 network off of R3 goes down, R3s hop count to that network goes from zero to infinity, but with Poison Reverse it's going to send an advertisement over to R2 saying that the hop count to 10.1.1.0/24 is 16 which is infinitely far away.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/split-horizon-and-poison-reverse?u=76281980&t=176)** That's going to make R2 look at that advertisement, that poisoned route advertisement specifically and say that network is infinitely far away and that's a look at two features RIP uses to prevent a routing loop or a count to infinity problem, and those were Split Horizon and Poison Reverse.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), this, (1), default, (1)
> **Env Vars:** rip (5), eigrp (1)
> **Versions:** 10.1.1 (5)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Configuring RIPv2
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=0)** - [Instructor] In this video, we want to configure RIP version two.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=3)** Specifically, we're going to have a three router topology, and we want to configure RIP version two on all routers to advertise all connected networks, and then we'll verify the reachability to those networks.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=14)** Now let's go out to the live interface and set this up.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=17)** If you take a look at the topology you see that we're dealing with three routers, and our goal is to configure RIP version two on all of these routers, such that they can reach all networks in the topology.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=27)** And we're going to begin on router R-1.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=29)** We'll go into global configuration mode.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=31)** And to start the RIP routing process, we say router rip.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=35)** Now unlike OSPF or EIGRP that you may have configured, there's no number after rip.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=41)** We're not specifying an autonomous system number or a process ID.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=45)** We just say router rip.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=46)** I want to run version two of RIP, so I'll say version two.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=50)** And I've got a couple of networks to advertise.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=53)** I want to advertise network 192 dot 168 dot one dot zero, and we'll advertise network 192 dot zero dot two dot zero.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=64)** We're done on R-1.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=65)** Let's move over to R-2.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=67)** On R-2, a very similar set of commands.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=70)** We'll say router rip.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=72)** Let's make sure we're running version two of RIP.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=75)** Couple of networks to advertise here as well.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=77)** 192 dot zero dot two dot zero, and network two zero three dot zero dot 113 dot zero.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=86)** One router to go.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=87)** Let's go to router R-3.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=90)** We'll go into global configuration mode and say router rip once again, version two.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=96)** We don't want the broadcast behavior of version one.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=99)** I've got a couple of networks to advertise here.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=100)** I'll say network 203 dot zero dot 113 dot zero, and network 172 dot 16 dot one dot zero.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=109)** And we're done.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=111)** We should now have full reachability throughout this network.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=114)** We can verify that by checking out the IP routing table.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=117)** We can view that with the command show IP route.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=122)** And we see that we have learned two networks via RIP.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=125)** The R indicates this is a rip learned network.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=129)** And I want you to notice for the 192 dot zero dot two dot zero network, that's the network between R-1 and R-2.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=135)** It says we're one hop away.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=138)** For the 192 dot 168 dot one dot zero network, we would have to transit or hop over R-2 and then R-1 to get there.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=146)** So it is two hops away.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=148)** What does the 120 mean?
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=150)** Do you remember the discussion we had about administrative distance, the believability of a routing source?
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=155)** Well, 120, that's the administrative distance of RIP.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=159)** And one final check.
>
> **[2:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=160)** Let's make sure that I can ping the gig zero slash one interface on R-1.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=165)** That will verify that we can cross this entire network.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=168)** Let's do a ping to 192 dot 168 dot one dot one.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=174)** Success.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripv2?u=76281980&t=175)** We have now configured and verified RIP version two.

> [!info]- Semantic Content
>
> **Env Vars:** rip (9), ospf (1), eigrp (1)
> **Code Keywords:** let (6), interface (2)
> **Prerequisites:** configure (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Configuring RIPng
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=0)** - [Instructor] In this video, we want to configure RIPng, or RIP next generation.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=4)** This is going to allow us to route IP version 6 networks.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=8)** We're going to use the same topology we used in our RIP version two demonstration and we want to configure RIPng on all routers and verify reachability to all networks when we're done.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=17)** Now let's go out to the live interface and set this up.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=19)** You'll notice our topology is identical to our RIP version two topology.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=24)** In fact, these routers still have our RIP version two configurations on them.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=27)** I can do a show ip route and we can still see networks learned via RIP.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=33)** But we see in this topology that we also have IP version 6 networks.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=36)** And we're going to use RIPng to route those networks.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=39)** And before we get into the configuration of RIPng itself, if we want to route IP version 6 networks on our router, we might have to go in and say ipv6 unicast-routing to say that this router is enabled to route IP version 6 traffic.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=55)** It might be disabled by default.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=57)** So I'll give that command first and then I'll create my RIPng routing process.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=61)** And to do that, instead of saying router rip, I say ipv6 router rip.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=66)** And one extra thing, I give a process name.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=69)** With RIP version two, we didn't give a process ID or an autonomous system number or anything.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=75)** We just said router rip.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=76)** Here we're able to have multiple instances of RIPng processes running, so I need to give it a name.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=83)** And this name is locally significant.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=84)** It does not have to match on an neighboring router.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=87)** And I'll call it CCNA.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=89)** And I go into RIP configuration mode.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=91)** However, if I use context-sensitive help, you'll see that a command is conspicuously missing here.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=97)** There's no network command, like we used in RIP version two.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=100)** So how do I advertise networks?
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=103)** Well, the network command was really advertising networks to which we had interfaces attached and those interfaces were up.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=109)** So for RIPng, we go directly into the interface and we say I want you to participate in RIPng and I want to advertise the network to which you're connected.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=118)** So let's go into our two interfaces.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=119)** I'll go into interface gig 0/1.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=122)** And to make this interface participate in the CCNA RIPng routing process, I say ipv6 rip, I give the process name of CCNA, and I say enable.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=133)** Let's do the same thing for interface gig 0/2.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=136)** I'll just up arrow to retrieve that previous command.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=139)** And we're done with our configuration on R1.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=142)** Let's give a similar configuration on R2 and then on R3.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=146)** On R2, in global configuration mode, I began as we did before by enabling IP version 6 routing.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=153)** I'll say ipv6 router rip.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=156)** I give a name of CCNA but that did not have to match.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=159)** I'm just doing it so it keeps it straight in my mind.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=162)** And once again, we'll go into our interfaces and say gig 0/1.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=166)** And to make this interface participate in the CCNA RIPng routing process, I'll say ipv6 rip CCNA enable.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=176)** Let's do that for our other interface, gig 0/2.
>
> **[3:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=180)** And we're done on our R2.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=181)** One router to go.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=183)** On R3, we go into global configuration mode and once again say ipv6 unicast type and routing.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=189)** And to prove that the RIPng process name is locally significant, I'm going to give a different process name on this router.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=196)** I'll say ipv6 router rip.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=199)** And instead of giving the process a name of CCNA, I'll give it CCIE.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=204)** And we go into our two interfaces.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=206)** Interface gig 0/1 and we say ipv6 rip for the process name of CCIE this time.
>
> **[3:33](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=213)** Enable.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=214)** Let's do the same thing for our other interface.
>
> **[3:37](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=217)** We'll make it participate in the routing process and we're done.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=220)** Now we can see if we have reachability throughout the network.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=223)** Instead of doing a show ip route, I can do a show ipv6 route.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=229)** And we see from the R code that we have successfully learned a couple of networks.
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=235)** Another command we can give to learn more about our configuration is show ipv6 protocols.
>
> **[4:02](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=242)** This is going to tell us the name of our routing process.
>
> **[4:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=245)** CCIE.
>
> **[4:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=246)** And it tells us the interfaces that are participating.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=249)** If I want even more information about this RIP routing process, I could say show ipv6 rip.
>
> **[4:15](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=255)** And it's going to give me counter information.
>
> **[4:17](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=257)** For example, it says I'm going to be sending my full update every 30 seconds.
>
> **[4:21](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=261)** Just like RIP versions one and two.
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=263)** And those routes expire after three minutes.
>
> **[4:26](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=266)** So we don't get quicker conversions with RIPng.
>
> **[4:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=268)** It's still fairly slow.
>
> **[4:30](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=270)** And we see that split horizon is currently on.
>
> **[4:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=272)** Poison reverse is currently off and this is another way where we can see what interfaces are participating in the RIPng routing process.
>
> **[4:40](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/configuring-ripng?u=76281980&t=280)** And that's a look at how to configure RIPng on top of an existing RIP version two configuration to add support for IP version 6 routing.

> [!info]- Semantic Content
>
> **Env Vars:** rip (11), ccna (7), ccie (3)
> **Code Keywords:** interface (9), let (6), default. (1), match. (1)
> **Versions:** version 6 (6)
> **CLI Commands:** make (3)
> **Prerequisites:** configure (3)
> **Analogies:** for example (1), just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=3)** This course covered a collection of routing and switching topics.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=6)** For example, we saw how to configure VLANs, trunks, spanning tree protocol, ether channel.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=11)** We did that for switches, and we learned how those switches made their frame-forwarding decisions.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=16)** Then we turned to our attention to routing, and after we examined how a router makes its packet-forwarding decisions based on IP addresses, we discussed how our router's routing table gets populated.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=28)** We could use static routes, maybe a dynamic writing protocol.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=32)** In fact, we configured one dynamic writing protocol on this course, it was RIP, which is short for Routing Information Protocol.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=39)** Now, if you're feeling good about what you've learned I encourage you to keep that momentum going and join me in another course.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=45)** Until then, I want to give you my sincere thanks for entrusting me with your time in this course.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=49)** That's not something I take lightly.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=51)** And also, since this course did cover so many technologies, if you need to go back and review some of them, that is perfectly okay.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=58)** In fact, that's one of the advantages of LinkedIn Learning.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=61)** You can go back and rewatch whatever you would like to review.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-switching-and-routing/next-steps?u=76281980&t=65)** Until we meet again in another LinkedIn Learning course, I wish you all the best in your studies.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1)
> **Env Vars:** rip (1)
> **Cross-References:** we discussed (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started with Cisco Networks]]
← [[Cisco Networking Foundations- IP Addressing]] | **3 of 4** | [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] →

## Appears In

- [[Getting Started with Cisco Networks]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Network Security- Secure Routing and Switching]] — Cisco Networking, Network Switches
- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Cisco Networking
- [[Cisco Networking Foundations- IP Addressing]] — Cisco Networking
- [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] — Cisco Networking
- [[Cisco Network Security- Content and Endpoint Security]] — Cisco Networking

---

[↑ Back to top](#)