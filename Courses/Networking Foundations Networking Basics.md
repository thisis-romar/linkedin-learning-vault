---
type: course
slug: networking-foundations-networking-basics
url: "https://www.linkedin.com/learning/networking-foundations-networking-basics"
level: Beginner
updated: 12/20/2024
learners: 64545
skills:
  - Network Administration
exercise_files: false
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - topic/cloud-computing
  - topic/devops
  - skill/network-administration
status: not-started
created: 2026-04-17
---

# Networking Foundations Networking Basics

> When someone begins to study networking, they’re challenged with knowing where to start. This is due to the wide spectrum of technologies falling under the umbrella of networking. This course provides an overview of the foundational topics any networking professional should know, as well as an introduction to emerging technologies. Instructor Kevin Wallace delves into the purpose of networks, as w

> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics) | Beginner | 65K learners

## Instructor

- [[Kevin Wallace]]

## Skills Covered

- Network Administration

## Table of Contents

### Introduction

#### Welcome to the network
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=0)** - Think about how networks are part of your everyday life.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=4)** For example, during a typical day, do you look something up on the internet, watch Netflix, have your doorbell tell you that somebody's at the front door?
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=13)** Maybe you send an instant message or an email.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=16)** All those examples and many more are made possible through networking.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=20)** So if you're beginning a career in IT or even considering it, there's no question that you need a fundamental understanding of networking.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=28)** And in this course, you're going to be learning the building blocks of a network, understand the theory of how different components and protocols do their job, and even take a look at some emerging technologies that you're going to be hearing more and more about.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=42)** Hi, my name's Kevin Wallace, and I'm a double CCIE, or Cisco Certified Internetwork Expert.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=48)** And I've been teaching IT courses for over two decades.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/welcome-to-the-network-24998881?u=76281980&t=51)** So join me in my LinkedIn course covering networking basics.

> [!info]- Semantic Content
>
> **Non-Speech:** (upbeat music) (2)
> **Env Vars:** ccie (1)
> **Analogies:** for example (1)
> **Speakers:** - think (1)


### 1. A Network's Purpose in Life

#### A high-level look at a network
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=1)** - When we talk about a network, we're talking about a collection of interconnected devices.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=6)** For example, in your organization maybe you have a laptop, that communicates with your corporate email server, well that communication is being done over a network.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=15)** We might also have networks in our homes.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=18)** Just last year my wife and I, we built a new home and that gave me the opportunity to go a little overboard with the house wiring and technology.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=27)** We were able to get a gig fiber internet connection, and we put in wiring, that supports speeds of 10 gigabits per second.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=34)** For wireless connections, we installed seven wireless access points, nine security cameras that were all powered over the Ethernet network connections, and we purchased several IoT or internet of things, devices.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=49)** For example, our doorbell, oven, refrigerator, TVs Amazon Alexa, they're all networked together.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=56)** And we said that a network interconnects devices but what does that look like?
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=60)** Well, we have two primary ways to connect into a network.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=64)** First we have wired connections.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=66)** And a common example of a wired connection, is an Ethernet cable, which has an eight conductor connector on each end.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=74)** This was called an rj45 connector.
>
> **[1:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=77)** You might hear these cables called, CAT 5 or CAT 6 cables, that access to the network, might be over a wireless local area network, or wireless land.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=87)** You might hear that called wifi for short.
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=89)** And that covers a relatively limited geographical region.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=93)** Or we have cellular services, that support data transmission, and we have widespread coverage of cell signals.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=101)** And for example, consider a cell phone.
>
> **[1:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=104)** Now my cell phone can send and receive data, using cellular service, but if I'm in an environment, that has a wireless LAN, I can connect to that network, using this phone's wireless capabilities.
>
> **[1:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=118)** So some devices like the cell phone, they have more than one wireless option.
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=123)** And another way that we can categorize networks, is by their scope.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=127)** Meaning what area do they cover?
>
> **[2:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=130)** Let's consider some common examples.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=132)** A Personal Area Network or a PAN, is a very small network that interconnects two devices.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=138)** For example, if you have a gaming system, with a wireless controller, maybe using Bluetooth, well that connection between your controller and your gaming console, that constitutes a PAN.
>
> **[2:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=151)** A Local Area Network or a LAN, is usually local to a building, or maybe just an area within that building.
>
> **[2:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=159)** And this is what you would find in your home.
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=161)** And this would allow as an example, computers within a department, to share resources such as, that very expensive copier you bought.
>
> **[2:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=170)** Or allow all those computers to access, the same set of files, that might be stored on a computer acting as a file server.
>
> **[2:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=179)** A Campus Area Network or a CAN, that can interconnect nearby buildings.
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=184)** Each of which have a land within the building.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=188)** We oftentimes see this in university or business campuses.
>
> **[3:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=193)** Some businesses have multiple locations, spread across a large metropolitan area.
>
> **[3:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=198)** The great news is, some large cities like Chicago, they have a Metropolitan Area Network or a MAN evadable, which allows a business to connect all of their offices to a MAN, and then those different offices, they can communicate between one another, at a very high speed.
>
> **[3:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=218)** And finally, we have a Wide Area Network or a WAN, that interconnects networks over large geographical regions.
>
> **[3:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=226)** Maybe we have our corporate offices scattered around the country, maybe around the globe.
>
> **[3:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=231)** Well, they can communicate with each other, using these WAN connections.
>
> **[3:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=235)** Several years ago, WAN connections, they were fairly slow, they could be really expensive.
>
> **[4:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=241)** But today with so many locations around the world, having high speed access to the internet, a WAN connection is often made over the internet.
>
> **[4:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=250)** Of course, for security reasons, we can encrypt the data flowing over that internet connection, using a technology called, VPNs or Virtual Private Networks.
>
> **[4:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/a-high-level-look-at-a-network-25204203?u=76281980&t=261)** That allows us to virtually have a private network, which is a more secure network, even though our data is flowing over the public internet.

> [!info]- Semantic Content
>
> **Env Vars:** wan (4), cat (2), lan (2), pan (2), man (2)
> **Code Keywords:** private (2), let (1), finally, (1), public (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** cat (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - when (1)

#### Benefits of a network
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=1)** - We know the network is an interconnection of devices but what benefit does that give us?
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=6)** Let's take a look at a few.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=7)** First, a network gives us the ability to share resources.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=11)** For example, we might have multiple users within an office that need to share files or printers.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=18)** Another benefit of networking is communications.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=21)** Examples of communications include not just email but voice calls, using a technology called a VoIP or voice over IP.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=31)** We can even send video and instant messages over a network.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=35)** Next up is redundancy.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=37)** We might have critical data that soared on a computer that's acting as a file server.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=42)** What happens if that computer breaks or if it's destroyed by a flood or a fire, do we lose all that data?
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=48)** We certainly don't want that.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=49)** So what we can do is send a copy of that data over the network connection to a backup in another location.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=57)** And one of the biggest benefits of a network is internet access.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=62)** Think about how many times a day you access the internet to check the weather, sports scores, do an internet search or just scroll through your social media.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=72)** That's all made possible thanks to networks.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=75)** Networks can also be used to monitor connected devices.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=80)** For example, on a factory floor, if there's some sort of a jam in a piece of equipment, well that piece of equipment, it can send an alert over the network to tell somebody to take action or maybe in your home.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=93)** You might have a security camera that's going to send you an alert.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=98)** if motion is detected near your front door.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=101)** And there's one final benefit that a network gives us, think about device administration, a single point of administration for network administrators.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=110)** For example, we can manage multiple devices in different locations throughout our network from the convenience of our computer.
>
> **[1:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=118)** That eliminates the need for a network administrator to go visit each network device individually to make those configuration changes.
>
> **[2:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/benefits-of-a-network-25203453?u=76281980&t=126)** Now that certainly not a comprehensive listing but those are just some of the biggest benefits that we get by interconnecting our devices with a network.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - we (1)

#### How you're using networking every day
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=1)** - Think about your day and see if you can identify some of the different roles played by networks.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=6)** Here's some of the first things that come to my mind.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=9)** Instead of having a cable TV, I've got a Hulu subscription.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=13)** That lets me watch live TV, I can record with a cloud-based DVR, I can view tons of other content on Hulu, and that's possible because the different TVs in my home, they connect to my home network, using a wired or wireless connection, and my home network, that connects out to the internet.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=33)** But besides just watching TV, there's tons of other things that I can do online.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=38)** I'm a big YouTube watcher, and I occasionally, I scroll through Facebook, Instagram, I'll have audio or video calls with my family or clients, who might be around the world.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=50)** I can do that using Skype.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=51)** Additionally, one of the big buzzwords you're going to be hearing in the networking world is the internet of things, or IOT.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=59)** Now, IOT, it's all about connecting lots of devices to a network, beyond the standard types of network connections, like connecting a computer or printer.
>
> **[1:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=69)** For example, in my home, my doorbells, thermostats, TVs, my range and refrigerator, they're all networked.
>
> **[1:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=77)** And if somebody leaves the refrigerator door open for too long and I'm watching TV, I'll get a message pop up on the TV, telling me to go close to the door.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=86)** Now also, I can control lots of devices and services, such as lighting my home and my home security system with my voice using Amazon's Alexa.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/how-you-re-using-networking-every-day-25000812?u=76281980&t=97)** Now, my challenge to you is to be hyper observant over the next day or two, and identify as many ways as you can of how networks impact your day-to-day lifestyle.

> [!info]- Semantic Content
>
> **Env Vars:** iot (2), dvr (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - think (1)


### 2. Network Addresses

#### MAC addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=1)** - With so many different devices that populate our networks, how do we tell one device apart from another device?
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=7)** Well, the answer is addressing.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=9)** And we're going to consider both physical and logical addressing beginning in this video with physical addressing.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=17)** Now physical addresses, they're assigned to network devices when they're manufactured.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=23)** And because of that, we often call those addresses burned in addresses.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=28)** And the specific physical address that we want to consider is the media access control address, or the MAC address for short.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=37)** Consider a network interface card, or NIC.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=40)** When a company manufacturers the card, they assign it a unique MAC address, and no other device in the world should have that same MAC address.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=49)** The way manufacturers keep from overlapping one another in their assignment of these MAC addresses is each manufacturer has their own unique code.
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=60)** It's called a vendor code, and that makes up the first half of the MAC address.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=64)** In fact, let's consider the structure of a MAC address.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=68)** A MAC address is made up of 48 bits.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=72)** And those 48 bits, they're divided into two different groupings, 24 bits each.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=79)** The first 24 bits, those are unique to the specific manufacturer or vendor.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=85)** Those bits are called the OUI, or organizationally unique identifier.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=92)** The OUI is also commonly referred to as the vendor code.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=96)** And we're going to see a little bit later that there's a piece of networking gear called a switch that allows us to use those MAC addresses to make forwarding decisions for data as it flows through the network.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/mac-addresses-25201754?u=76281980&t=107)** But for now, I just want you to understand that a MAC address is a 48-bit physical address and the first 24 bits, they identify the manufacturer of that network device.

> [!info]- Semantic Content
>
> **Env Vars:** mac (9), oui (2), nic (1)
> **Code Keywords:** interface (1), let (1), switch (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - with (1)

#### IP version 4 addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=1)** - Now that we understand that that a MAC address is a physical address, let's consider a very popular logical address.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=9)** It's an IP version four address, where IP stands for internet protocol.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=14)** And we're going to see later on that there's also an IP version six address, but for now, understand that an IP address is a logical address because it's an address that needs to be assigned to the device, as opposed to a MAC address, which is coded into the hardware by the manufacturer.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=34)** To better understand an IP version four address, consider a street address.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=39)** Let's say that your friend tells you they live at 13825th Street.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=46)** That's a bit confusing.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=47)** They didn't separate the house number from the street number.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=51)** So you don't know if they live at 138 25th Street, or maybe they live at 1382 Fifth Street.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=59)** The dividing line is critical to identify both the house number and the street number.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=66)** Similarly, we have to have a dividing line in our IP version four address that divides the network address from the host address.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=76)** Now, going back to our street address analogy, a network address, that would be much like a street address.
>
> **[1:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=83)** The host address would be much like the house address.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=88)** Now, we typically write out an IP version four address in dotted decimal notation, like we see here.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=95)** An IPv4 address is 32 bits in length, and we have four different groupings of eight bits.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=103)** They're all separated by dots, and each of these eight bit groupings, we call that an octet.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=110)** The dividing line that's needed to separate the network address from the host address is a sub-net mask.
>
> **[1:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=117)** And in this example, let's assume that we have a 16 bit subnet mask.
>
> **[2:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=122)** Now, that's going to tell us that the first 16 bits of our address, those represent the network, and the last 16 bits, those represent the host.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=132)** And since this is a non-mathematical course, we're not going to get into the calculation of subnet masks here, but if you'd like to get mathematical and go deeper, please check out another one of my LinkedIn courses called Learning Subnetting.
>
> **[2:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=146)** And one final thing I want you to realize about IPv4 addresses, is we have run out.
>
> **[2:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=153)** There are so many network devices in the world, it's not possible for each of them to have a unique IPv4 address, but there is a work around, using something called network address translation, or NAT.
>
> **[2:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817?u=76281980&t=167)** And we're going to consider that later on in the course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), stands for (1)
> **Code Keywords:** let (3)
> **Env Vars:** mac (2), nat (1)
> **Speakers:** - now (1)

#### IP version 6 addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=1)** - Now we've learned that an IPv4 address is made up of 32 bits.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=6)** That gives us two to the power of 32 possible addresses.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=11)** However, an IPv6 address is made up of 128 bits.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=18)** That gives us two to the power of 128 possible addresses.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=23)** So even though our IPv4 addresses are full, we have plenty of IPv6 addresses to go around to everybody on the planet.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=33)** Much like IPv4 has a network and a host portion of an address, IP version six has a prefix and host portion of an address.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=43)** And instead of talking about a subnet mask an IPv6 address has a prefix length.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=51)** That says, how many of those 128 bits represent the network.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=57)** And to make it easier to write a 128 bit address, these IPv6 addresses, they're typically written using hexadecimal notation or a single hexadecimal digit can represent one of 16 different values.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=74)** And a grouping of four of these hexadecimal digits, that's called a quartet and an IPv6 address has eight of those quartets.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=86)** And here we see an example of an IPv6 address and notice we have an A and a B in addition to regular hexadecimal numbers.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=98)** That's because when we're using hexadecimal notation, we're not just using the digits zero through nine, we're using the letters A through F.
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=108)** And also notice we have eight groupings of four hexadecimal digits.
>
> **[1:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=113)** In other words, eight quartets.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=116)** Finally, notice the slash 64 at the end of the address.
>
> **[2:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=120)** This tells us the prefix length is 64 bits long.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=125)** That leaves the remaining 64 bits for our host.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=128)** And that's a look at the format and the scalability of IPv6 addressing.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-6-addresses-24998882?u=76281980&t=134)** But if you'd like to go deeper into the different types of IPv6 addresses and how they're structured, I recommend checking out another of my LinkedIn courses called Learning IP Addressing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Definitions:** in other words (1)
> **Speakers:** - now (1)


### 3. Pieces and Parts of a Network

#### Network interface cards
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=1)** - If we have a PC that wants to communicate on our network, it needs to have some sort of circuitry that will allow us to send and receive data on either a wired or wireless network.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=12)** Now that circuitry is found in a network interface card or NIC for short.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=18)** Some PCs and laptops and other network devices they have NIC functionality built into the motherboard of the device.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=26)** So we don't necessarily have to have a separate NIC, however, in many cases we might need to add either an internal NIC or an external NIC.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=35)** Here, we see an internal NIC that could be inserted into an available slot in our PC, then we can plug in our ethernet cable to get connected to the wired network.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=47)** And even though this connects us to a wired network, we can also have NICs that connect us to the wireless network.
>
> **[0:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=54)** We might alternately have an external NIC, like we see here.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=58)** This is the actual external NIC I use for my laptop when I want to connect to a wired network.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=64)** The reason is my laptop has wireless NIC functionality built in, but it doesn't have an ethernet port to get me connected into a wired network.
>
> **[1:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=73)** That's where this external NIC comes in.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/network-interface-cards-25000814?u=76281980&t=76)** I plug this external NIC into one of the USB Type-C ports on my laptop, and then I'm ready to connect to a wired network.

> [!info]- Semantic Content
>
> **Env Vars:** nic (11), usb (1)
> **Code Keywords:** interface (1)
> **Speakers:** - if (1)

#### Switches
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=0)** - One of the most common network devices we have is an ethernet switch.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=5)** And we talked earlier about how network interface cards and we said, we could put this into a device like a PC and we would plug in an ethernet cable into the network interface card, but what happens to the other end of this cable?
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=19)** Well at almost all cases we're going to plug that into an ethernet switch port.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=24)** And we can think of an ethernet switch as the connective tissue that ties our network devices together.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=32)** And these switches are intelligent.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=34)** Now, what I mean by that is that they can intelligently forward network traffic.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=39)** By the way, when we talk about a switch forwarding network traffic, we're commonly going to call that traffic frames.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=46)** And what a switch does is learn what Mac addresses live off of which ports.
>
> **[0:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=53)** Then when a frame comes into the switch destined for a specific Mac address, if the switch already learned the Mac address it will only forward that frame out of the port connecting out to that destination Mac address.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=66)** To illustrate how this works, consider this topology, we have a couple of PCs, a printer, and a server all connected to a switch.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=75)** Initially the switch has not learned the Mac address of any of these devices.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=79)** So it's Mac address table is initially empty.
>
> **[1:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=83)** Now PC one wants to communicate with the printer and it sends a frame to the switch, the switch sees the frame come in and it sees that that frame came in on port gig one, from a device whose Mac address is the all A's Mac address.
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=100)** And the switch says, let me make a note of that.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=103)** And it adds that entry to its Mac address table.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=107)** Now this entry tells the switch that if it ever receives another frame destined for the all A's Mac address the switch can send that frame out of port gig one.
>
> **[1:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=117)** The switch also sees the frame it just received is destined for the printer with the Mac address of All C's.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=125)** But the switch doesn't know where the all C's Mac address lives.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=128)** So to make sure the frame gets to its destination, the switch sends a copy of that frame at all of its ports other than the port on which the frame was received.
>
> **[2:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=139)** Now, this process is called flooding.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=142)** Again, flooding happens when a switch doesn't know how to get to a frame's destination Mac address.
>
> **[2:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=150)** The switch makes a copy of that frame and sends those copies out all other switch ports, except the port that received the frame.
>
> **[2:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=159)** After this flooding happens PC 2, the printer, and the server they all receive a copy of that frame that was only intended for the printer.
>
> **[2:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=168)** PC 2 and the server, they look at that destination Mac address on those frames and they say, that's not for me, and they discard those frames.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=175)** However, the printer, it looks at that frame and realizes it was the intended recipient of the frame.
>
> **[3:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=182)** And it responds back to PC 1, which has a Mac address of all A's and when the switch receives that frame from the printer, it sees the frame come in, from a device with an all C's Mac address.
>
> **[3:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=195)** And it came in on port Gig 3.
>
> **[3:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=197)** The switch then adds that information to its Mac address table.
>
> **[3:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=202)** The switch also sees that the frame is destined for the all A's Mac address, the switch examines its Mac address table and it sees that the all A's Mac address lives off of port Gig 1, and all subsequent communication from PC 1 to the printer goes directly from PC 1 through the switch, to the printer without any flooding.
>
> **[3:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=223)** The reason is the switch has now learned where the all C's Mac address lives.
>
> **[3:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=229)** As another example, PC 2 wants to communicate with the server and it sends out a frame destined for the all D's Mac address.
>
> **[3:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=237)** And just like before the switch learns that the all B's Mac address lives off of port Gig 2, but it doesn't know where the all D's Mac address lives.
>
> **[4:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=247)** So it floods that frame out.
>
> **[4:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=249)** PC 1 and the printer receive copies of the frame, realize it's not for them and discard the frames, but when the server receives the frame, it sees that it's Mac address is the destination Mac address and it sends its reply back to the switch.
>
> **[4:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=265)** Of course, that causes the switch to learn that the all D's Mac address, lives off of port gig 4, the switch already learned where the all C's Mac address was connected, and only sends the reply from the server out of port Gig 2 to PC 2.
>
> **[4:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=281)** Now we have a fully populated Mac address table in our switch, and any additional frames that go into any of these Mac addresses, they're only going to be sent out of the appropriate switch ports.
>
> **[4:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/switches-25202614?u=76281980&t=293)** And that's a look at how an ethernet switch can populate its Mac address table, and make intelligent forwarding decisions based on destination Mac addresses.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (33), interface (2), let (1)
> **CLI Commands:** make (3)
> **Definitions:** is an  (1), is called (1)
> **UI Navigation:** switch to (1)
> **Analogies:** just like (1)
> **Speakers:** - one (1)

#### Routers
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=1)** - While a switch can keep track of MAC addresses to which it connects, but a fault all of those devices connected to a switch, they belong to the same IPv4 or IPv6 network.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=13)** The device used to interconnect those networks is a router.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=18)** And when we first configure a router and tell it what networks it's connected to, that router adds those directly connected networks to its IP routing table.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=28)** And in networks with more than one router, those routers can exchange routing information using a routing protocol such as OSPF.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=38)** But to make things easy to visualize, consider this topology with a single router.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=44)** In this example, the router is directly connected to three networks.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=49)** Interface Gig 2 is directly connected to the 10.1.1.0 network, and that network has 24 bits in it's subnet mask.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=58)** Interface Gig 3 is directly connected to the 192.168.1.0 network, and that network also has 24 bits in its subnet mask.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=70)** But what about that 0.0.0.0 network with no bits in its subnet mask connected that to interface Gig 1?
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=78)** Well, this route is called a default route and it's commonly used when a router connects out to the internet.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=87)** The logic is if a router only has one interface that connects it with the rest of the world, if the router doesn't know about a certain network, the only other place that network might be is out of that interface.
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=100)** But it takes a lot of router resources to store the complete internet routing table, which at the time of this recording is well over 800,000 routes.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=110)** So if a router doesn't have knowledge of a specific network then it will just send it out a single interface that connects it to the rest of the world.
>
> **[2:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=120)** That's what a default route does for us.
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=123)** By the way, when we talk about a route or forwarding traffic instead of calling that traffic frames, like we did with the switch, we call that traffic packets.
>
> **[2:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=133)** Let's say that PC1 wants to communicate with a web server out on the internet.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=138)** And let's pretend that web server has an IP address of 203.0.113.1.
>
> **[2:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=146)** PC1 sends a packet to the router, the router peruses its IP routing table, and the only entry that contains the 203.0.113.1 IP address is that default route of all zeros, because it contains all possible IP version 4 addresses.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=164)** Well, using that default route, the router then sends the packet out to the internet, connected to interface Gig 1.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=172)** And the web server sends the requested webpage back to PC1.
>
> **[2:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=177)** As another example, PC1 wants to communicate with a local server that has an IP address of 192.168.1.200.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=187)** PC1 sends the packet to the router, the router looks to see if it has a network entry that contains the 192.168.1.200 IP address, and it does.
>
> **[3:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=199)** There's an entry that says the 192.168.1.0 network is connected to interface Gig 3.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=206)** However, we said the default route of all zeros contains all possible IP version 4 addresses.
>
> **[3:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=215)** And the default route points out of Gig 1, does that mean we've got conflicting information?
>
> **[3:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=220)** Which interface do we use?
>
> **[3:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=222)** Well, if our router has more than one entry in its IP routing table that contains the destination IP address, the router selects the most specific route, which we also refer to as the route with the longest prefix, meaning the route with the most bits in its subnet mask.
>
> **[4:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=241)** The default route doesn't have any bits in it's subnet mask but the 192.168.1.0 route, it has 24 bits in its subnet mask, so that's the route we use.
>
> **[4:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=253)** And the packet is forwarded to the server out of interface Gig 3.
>
> **[4:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/routers-25000808?u=76281980&t=257)** So the big takeaway I want you to get from this is that while switches make forwarding decisions based on MAC addresses, routers make forwarding decisions based on IP addresses.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (10), switch (3), let (2)
> **Versions:** 192.168.1 (5), 203.0.113 (2), version 4 (2), 10.1.1 (1), 0.0.0 (1)
> **Env Vars:** pc1 (5), mac (2), ospf (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - while (1)

#### Wireless access points
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=1)** - This wireless router might be similar to what you have in your home.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=4)** Your internet service provider brings in an internet connection into your house, maybe over a cable TV connection, maybe over gig fiber, maybe DSL, or some other way, but that internet connection, it plugs into the back of this wireless router and the wireless devices in your home, they communicate, using radio waves, with this wireless router, and that's how they get out to the internet.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=27)** However, in larger environments, this single wireless router, it's not going to do the job.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=33)** It's coverage area is way too limited, and it can only accommodate so many connections.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=39)** In cases where we need more widespread coverage, we can install multiple wireless access points, or APs for short.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=47)** This is a wireless access point and it doesn't have a connection on the back labeled internet like our wireless routers do.
>
> **[0:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=54)** Instead, it has a connection where we can plug a cable that gets us back to an ethernet switch, and that ethernet switch then connects out to wired devices on our network, maybe to other wireless access points and to the router that gets us out to the internet.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=71)** Check out this example.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=72)** If we have multiple access points placed throughout our home or business, that lets a wireless client, like a laptop, physically move to another location without losing its network connection.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=85)** THe wireless client simply sees that there's a stronger signal coming from a different AP, and it starts communicating with that AP, from which it's receiving that stronger signal.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=96)** Now, this process is called roaming and we'll revisit this topic a bit later in the course where we have an entire chapter dedicated to wireless networks.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-access-points-25000815?u=76281980&t=106)** But for now, I want you to understand that we can provide wireless coverage in a home or business, by strategically placing these wireless access points.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2)
> **Definitions:** is a  (1), is called (1)
> **Env Vars:** dsl (1)
> **Cross-References:** later in (1)
> **Prerequisites:** install (1)
> **Speakers:** - this (1)

#### Copper cabling
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=1)** - The wire that we use in a wired network is typically some sort of twisted pair cabling like we see here.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=8)** The reason it's called twisted pair cabling is because we have different pairs of wires that are literally twisted together.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=15)** The reason for the twisting is to combat one of the biggest enemies in data transmission and that is electromagnetic interference.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=23)** We have so many electromagnetic waves in our environment that if we didn't twist the wires, the wires could become antennas.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=32)** They could start picking up interference and they could also generate their own interference maybe impacting other devices.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=39)** But by twisting the pairs together like this, each wire in a pair is shielding the other wire from this interference.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=48)** However, when we start transmitting at really high data rates or when we're in an environment with a lot of electromagnetic interference like a factory floor, they've got these big motors kicking on a off, twisting alone, that might not be enough protection.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=63)** So some twisted pair cabling has some additional shielding that might be in the form of foil wrapped around each pair or maybe having all eight wires inside some sort of a metal braiding.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=76)** And the terms you'll hear to describe those two different types of twisted pair cabling are unshielded twisted pair like we have here, called UTP, and shielded twisted pair, or STP.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=90)** One other variant of twisted pair cable I want you to know about is plenum-rated cable.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=95)** Have you ever seen buildings or maybe data centers that have a raised floor or a drop ceiling and the HVAC system uses that space above the drop ceiling and below the raised floor for airflow?
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=109)** Well, those areas are called plenum space.
>
> **[1:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=113)** And it often seems really convenient to just run our network cabling in those plenum areas.
>
> **[1:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=118)** There's plenty of room, it's out of sight, but there's a major issue.
>
> **[2:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=122)** If there were a fire in that area and those network cables started getting really hot, the outer insulation on many network cables, they'll release toxic fumes.
>
> **[2:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=133)** We certainly don't want toxic fumes released in the same area our HVAC system is using for airflow.
>
> **[2:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=140)** So if you run network cable in those plenum areas you need to use plenum-rated cable which will not release those toxic fumes.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=149)** The connectors that go on the end of these ethernet cables are RJ-45 connectors.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=154)** Now, many cables come with the RJ-45 connectors preinstalled but if we're running wire around a building, we often need to put on our own RJ-45 connectors or maybe we connect these cables to an RJ-45 wall jack.
>
> **[2:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=168)** Let's take a look at how we do that.
>
> **[2:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=170)** An RJ-45 connector has eight conductors or we say eight pins, and we insert these eight wires into this connector.
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=180)** Then we take a crimper tool, then we squeeze really hard, and I'll trim off any excess that we might have, and now, we have an RJ-45 connector that's ready to connect into a switch or a router, or a wall outlet.
>
> **[3:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=199)** Now, you might be wondering which wires do we connect to which pins.
>
> **[3:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=203)** We use a color code that tells us which wire goes to which pin and that code is called the T568A or T568B standard.
>
> **[3:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=214)** Here's a look at the very common T568B standard.
>
> **[3:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=218)** Really, the only difference between these standards is that the orange and green pairs are swapped.
>
> **[3:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=224)** So it doesn't matter which standard you use just be sure to be consistent with whatever you choose.
>
> **[3:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=230)** Now different types of twisted pair cabling are assigned to different categories like we see, here.
>
> **[3:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=236)** Notice that most categories have a distance limitation of 100 meters.
>
> **[4:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=241)** Also notice that the supported speeds vary.
>
> **[4:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=245)** For example, if we used category 5E cabling we could support 1,000 Base-T.
>
> **[4:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=252)** That's going to give us one gigabit per second of bandwidth.
>
> **[4:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=255)** However, if we need to support 10 gigabits per second, we would need to look at category 6 or 6A, or category 7.
>
> **[4:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/copper-cabling-25204205?u=76281980&t=263)** And that's a look at how copper cabling can be used for data transmission in our network.

> [!info]- Semantic Content
>
> **Env Vars:** hvac (2), t568b (2), utp (1), stp (1), t568a (1)
> **Code Keywords:** this, (1), let (1), switch (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### Fiber-optic cabling
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=1)** - We saw that twisted pair copper cabling, it could be used to carry data at very high rates.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=6)** However, it had a maximum distance limitation, typically of 100 meters, and that might be a little too limiting.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=13)** For longer distance connections and the promise of absolutely zero electromagnetic interference, we might instead turn to fiber optics instead of copper cabling.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=24)** Now specifically, since fiber optics use light to represent data, there is no concern about electromagnetic interference.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=32)** And since copper cabling, it's not a superconductor, the longer that copper cable runs, the more impedance builds up and it starts to degrade the signal.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=42)** But the question is what keeps light, laser light, inside of this fiber with that just being dispersed?
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=49)** Well, we can find the answer in a glass of water.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=52)** Notice that we have a straw going into this glass of water, and as the straw enters the water, it appears to bend a little bit.
>
> **[1:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=61)** The reason is light travels slightly slower through water as compared to air.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=67)** Specifically, water and air, they have a different index of refraction.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=72)** This principle also applies to fiber optic cabling.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=75)** And when we're working with fiber optic cabling, we need to understand the two primary types.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=81)** We have single mode fiber, or SMF, and multi-mode fiber, or MMF.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=87)** And when I say mode, we're talking about a specific path that laser light travels as it's injected into that fiber optic cable.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=96)** And when a fiber optic strand is manufactured, it doesn't contain just one type of glass, rather, there's one type of glass in the middle, called the core, and surrounding that, we have another type of glass, called the cladding.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=110)** And the reason I say it's a different type of glass, they have a different index of refraction.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=116)** Let's take a look at a couple of examples.
>
> **[1:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=118)** Here we have multi-mode fiber and notice that its diameter, its core, is a lot larger than single mode fiber.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=127)** We said that a mode was a path that laser light traveled.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=131)** With multi-mode, the diameter is so large that light from the laser can come in at different angles.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=138)** So let's say that one mode went in at this angle.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=142)** When it hit the edge of the core and the cladding, the index of refraction was so great that it didn't just bend the light, like the straw in the water, it actually bent back on itself.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=154)** It went back and forth and it came out like that.
>
> **[2:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=158)** Maybe we have a mode that goes in at an even steeper angle.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=162)** It goes, bounce, bounce, bounce, bounce, bounce, bounce, and finally it gets out.
>
> **[2:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=167)** Or yet another mode, maybe it goes sort of straight down the middle.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=172)** Now, imagine that the mode that did all the bouncing, let's imagined that was a binary zero and these others were binary ones.
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=180)** Can you see that, even though the zero goes in first, since it's doing all that bouncing, it's actually possible for one of the ones to pass it up.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=189)** That's something called a multi-mode delay distortion.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=192)** And we get away from that with single mode fiber, because with single mode fiber, the diameter of the core is so small that there is only room for one mode, one path, that the laser light can travel, so it's going to go down the middle.
>
> **[3:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=208)** No danger of one bit passing up another bit.
>
> **[3:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/fiber-optic-cabling-25201755?u=76281980&t=211)** Those are the two different types of fiber optic cabling that I want you to know about.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (1)
> **Env Vars:** smf (1), mmf (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - we (1)


### 4. The OSI Model

#### Learning the seven layers
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=1)** - Networks have many pieces and parts and we've already seen that we have devices that make forwarding decisions based on Mac addresses, devices that make forwarding decisions based on IP addresses, and we're going to see in an upcoming video that we have a lot of protocols that run over the network.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=19)** So it can sometimes be difficult for network professionals to visualize how a new piece of equipment or protocol fits into the overall network.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=29)** Fortunately, we have a set of categories, each representing a different network function.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=35)** And this set of categories is called the OSI Model where OSI stands for Open Systems Interconnection.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=42)** And once we learn what sorts of things happen in each layer of this model, that's going to let us better categorize our hardware and software components and better visualize how they work together.
>
> **[0:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=54)** So let's take a look at these layers one at a time beginning with layer one, the physical layer.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=59)** It's here at the physical layer where we have things like network cabling or radio waves being sent from wireless access points.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=68)** And the name we give data down here at the physical layer is bits.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=72)** At layer two, we have the data link layer.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=76)** This layer is concerned with physical addressing.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=80)** Remember our discussion about ethernet switches and how they make decisions based on Mac address information?
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=87)** Well a Mac address, that's a physical address, burned into the network device.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=92)** And since switches make their decisions based on those Mac addresses, we say that our ethernet switches operate here at layer two, the data link layer.
>
> **[1:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=102)** And the name we give data at layer two is frames.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=106)** Moving up to layer three, we have the network layer.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=110)** This layer is concerned with logical addressing such as IP addressing.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=116)** Do you remember the device in our discussion earlier that made forwarding decisions based on IP address information?
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=123)** Yeah, it was a router.
>
> **[2:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=124)** So we say that routers operate here at layer three of the OSI Model.
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=129)** And the name we give data at this layer is packets.
>
> **[2:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=133)** At layer four, the transport layer, which is concerned with logical connections.
>
> **[2:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=139)** Now these connections, they might be considered reliable where we confirm that transmitted information was received, or these connections could be considered unreliable, where we send our data and hope that it reaches its destination.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=154)** And two of the main protocols that operate here at layer four are transmission control protocol, or TCP for short, and user datagram protocol, or UDP for short.
>
> **[2:45](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=165)** Now TCP, that's considered to be one of those reliable transport protocols while UDP is considered to be unreliable.
>
> **[2:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=174)** And here at layer four, we call data segments.
>
> **[2:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=178)** Now the remaining layers, five through seven, they don't have any special name for data, but layer five is the session layer and it's concerned with establishing, monitoring, and then tearing down communication sessions between our hosts.
>
> **[3:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=194)** And you might hear the term APIs, and that stands for Application Programming Interfaces, and APIs let one's piece of software on one device talk to another piece of software on another device.
>
> **[3:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=208)** And those API sessions, they give us one example of something we might find here at layer five.
>
> **[3:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=214)** Layer six is the presentation layer and it's all about how we represent data.
>
> **[3:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=221)** We might encrypt data for security reasons, so some of our encryption protocols, they live here at layer six.
>
> **[3:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=229)** We might format a picture as a JPEG image.
>
> **[3:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=232)** Well, that's a format of how that picture is represented, so we say JPEG formatting lives at layer six.
>
> **[4:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=240)** And finally, layer seven is the application layer.
>
> **[4:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=244)** and it's the layer users typically interact with.
>
> **[4:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=247)** If we're surfing the web, we're using a protocol like HTTP, which stands for hypertext transfer protocol; or HTTPS, which is short for secure HTTP.
>
> **[4:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=260)** If we know the name of a website, but not its IP address, what we can do is ask a DNS server and that DNS server will take the name that we provide and it's going to give us back the IP address corresponding to that name, and the protocol that makes that possible is domain name system or DNS.
>
> **[4:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=280)** DNS is an example of something that lives here at layer seven.
>
> **[4:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=284)** Now let's check out some memory aids to help keep all of these layers straight in our mind.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=290)** We can memorize these layers from the bottom up using the acrostic Please Do Not Throw Sausage Pizza Away where the P in please reminds us of the P in physical, the D in don't reminds us of the D in data link, and so on.
>
> **[5:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=305)** Alternately, we can go from the top down.
>
> **[5:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=308)** We can memorize All People Seem To Need Data Processing.
>
> **[5:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=314)** And the names that we gave our data at the bottom four layers, those names are called protocol data units or PDUs.
>
> **[5:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=322)** And a way to remember those different protocol data unit names from the bottom up is to remember the acrostic Bacon Frying Produces Salivation, which is standing for bits, frames, packets, and segments.
>
> **[5:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=336)** And the best advice I've ever heard about the OSI Model is to remember it's a reference model, it's not a reverence model.
>
> **[5:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=344)** It doesn't have to be revered as something that every network component must neatly fit into.
>
> **[5:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=351)** That's just not reality.
>
> **[5:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853?u=76281980&t=352)** However, this model can be a tool we can use to better explain and understand where different network components reside.

> [!info]- Semantic Content
>
> **Env Vars:** osi (4), dns (4), tcp (2), udp (2), jpeg (2)
> **Code Keywords:** let (4), function (1), finally, (1), throw (1)
> **Definitions:** stands for (3), is called (1), short for (1), is an  (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** picture (2), such as (1)
> **Speakers:** - networks (1)

#### Comparison to the TCP/IP model
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=1)** - In addition to the OSI model that we just discussed, there's another reference model that I really want you to understand.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=7)** It's the TCP/IP model.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=9)** Now this model, it combines layers five through seven of the OSI model, it combines those into a single layer that we're going to call the application layer.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=18)** Now interestingly, there are some variants to that TCP/IP model, they give different names to the bottom layers.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=25)** Let me show you a few different examples.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=27)** Now here, we see the seven layer OSI model.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=30)** Now let's compare that with the TCP/IP model.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=33)** Now commonly, the TCP/IP model combines the OSI model's physical and data link layers into a single network access layer, and the network layer, it gets renamed as the internet layer, but the transport layer, it keeps its name, it stays the same.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=52)** But the big difference between these two models is combining layers five through seven into that single application layer.
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=60)** Now, another variant that you might see, it calls the network access layer, the network interface layer, or you might see this layer called the link layer.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=71)** Now, what we've seen up to this point is a four layer TCP/IP model, but some literature out there, it's going to show you a five layer model.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=80)** In one variation of that five layer model, the TCP/IP model, it keeps the original OSI physical and data link layers.
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=89)** Now finally, you might see a variation of the five-layer TCP/IP model where the bottom two layers, they're called the physical and network interface layers.
>
> **[1:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852?u=76281980&t=99)** Now, join me in our next video as we consider some of the common network protocols that get categorized at that application layer.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (7), osi (5)
> **Code Keywords:** let (2), interface (2), finally, (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Common protocols to know
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=1)** - Sitting at the top of our OSI or TCP/IP models, we've got the application layer.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=7)** Now, let's consider some common protocols that live at that application layer.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=11)** And when we discuss these protocols, we want to identify them as either a TCP or a UDP protocol.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=19)** Recall that TCP and UDP, they live at that transport layer.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=23)** While TCP gives us reliable communication, UDP gives us unreliable communication.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=29)** Now, what that means is unreliable communication doesn't make any effort to confirm that a transmission was successfully received.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=37)** We also want to identify the port number used by each of those protocols.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=42)** When we send a segment destined for a specific port, the receiving device, it knows what service we're trying to access.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=49)** For example, maybe there's a server running both a web service and an email service.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=55)** When we communicate with that server, using TCP port 80 as an example, we're saying that we want to access that server's web service.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=65)** Now, let's take a look at a few very common protocols that will be really good for you to memorize.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=71)** First is HTTP, or Hypertext Transfer Protocol.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=76)** This is the protocol that we use when we're communicating with traditional web servers.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=81)** It uses TCP port 80.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=84)** Next up is HTTP or Hypertext Transfer Protocol Secure.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=90)** When we have a secure connection with a web server, maybe because we're entering credit card information, we usually use HTTPS to protect our data from eavesdroppers.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=101)** And it's going to be using TCP port 443.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=106)** And when we're pointing our browser to that web server, we probably are not entering the IP address of that web server.
>
> **[1:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=114)** I certainly don't make a habit of memorizing IP addresses.
>
> **[1:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=117)** Instead, we'll probably use the name of that server, something like [LinkedIn.com](https://LinkedIn.com).
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=123)** But to send packets to [LinkedIn.com](https://LinkedIn.com), we need to know [LinkedIn.com](https://LinkedIn.com)'s IP address.
>
> **[2:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=130)** To get that information, we can ask a DNS server.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=134)** DNS stands for Domain Name System.
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=137)** And we communicate with that server using the DNS protocol, which can use either TCP or UDP port 53 and one of the protocols that we're going to be considering in more detail in the next chapter is Network Time Protocol, or NTP for short.
>
> **[2:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=156)** We're going to be seeing that our network devices, they can use NTP to learn time from time sources out on the network.
>
> **[2:45](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=165)** And this might be one of the easiest numbers to remember.
>
> **[2:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=168)** It reminds me of the old Jackson 5 song.
>
> **[2:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=170)** I won't sing it for you but it goes ABC, easy as 123.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=175)** Well, that's the port number used by NTP.
>
> **[2:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=179)** So when I think of NTP, I hear that tune in my head with the lyric NTP, easy as 123 and specifically, it's UDP port 123 that NTT is using.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=192)** And another protocol that we'll investigate in the next chapter is DHCP.
>
> **[3:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=197)** Now, that stands for Dynamic Host Configuration Protocol.
>
> **[3:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=201)** This is a super useful protocol because it gives us a way to automatically assign IP addresses to our network devices without having to visit each device and do a manual configuration and I'd like you to know that DHCP uses UDP port 67.
>
> **[3:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816?u=76281980&t=221)** Now, join me in our next chapter where we'll consider a collection of network services, beginning with DHCP.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (8), udp (6), ntp (5), dns (3), dhcp (3)
> **Ports:** port 80 (2), port 443 (1), port 53 (1), port 123 (1), port 67 (1)
> **Code Keywords:** let (2), super (1)
> **URLs:** [linkedin.com](https://linkedin.com) (3)
> **Cross-References:** in the next (2), next chapter (1)
> **Definitions:** stands for (2), is a  (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)


### 5. Network Services

#### DHCP overview
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=1)** - We know that each of our network devices need an IP address in order to communicate on the network.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=7)** But if we've got lots of devices, it can be a huge administrative burden to go to each device one at a time and configure all that IP address information.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=15)** Fortunately, there's a protocol that can help us out, it's called Dynamic Host Configuration Protocol, or DHCP for short.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=23)** And we can have a DHCP server that can hand out IP address information to all of our different network devices.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=32)** Let's take a look at how that works.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=34)** Now, when I think of DHCP, I'm reminded of a show that my daughters used to watch when they were very little, it was on Nickelodeon.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=41)** It was called "Dora the Explorer".
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=44)** I think more recently there's been a live action, "Dora the Explorer" movie.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=48)** And the reason Dora reminds me of DHCP is the letters, D-O-R-A.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=55)** That gives us the first letter of each message sent during a DHCP reservation.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=62)** Consider this typology we see on screen.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=65)** PC A just now booted up, it needs IP address information.
>
> **[1:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=69)** Specifically, PC A wants an IP version 4 address, but PC A doesn't know the IP address of the DHCP server that's going to give it that information.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=80)** So it sends out a discover broadcast.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=84)** And a broadcast, it goes everywhere within a subnet, but it does not cross a router.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=90)** Fortunately, in this case, we don't have a router separating PC A from the DHCP server.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=97)** So the D in Dora reminds us of the D in discover, which is the name of the broadcast that PC A sends out asking if there is a DHCP server somewhere out there on the network.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=111)** Now, when the DHCP server receives that discover broadcast, it responds to PC A with an offer message, now that's the O in the Dora memory aid.
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=123)** And the DHCP server's offer message tells PC A the IP address of the DHCP server, and PC A, it might receive more than one offer message coming in from multiple DHCP servers on the subnet.
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=137)** And it's going to select the offer message that it receives first.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=142)** Now, in this case, PC A, it only received one single offer message.
>
> **[2:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=147)** And it now learned the IP address of the DHCP server.
>
> **[2:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=151)** So PC A, it's going to send out a request message, that's the R in Dora, asking the DHCP server for IPv4 address information.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=162)** And finally, the DHCP server responds to that request message with an acknowledgement, that's the A in Dora.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=171)** The acknowledgement message, it provides PC A with its IP address, subnet mask, default gateway, maybe other parameters such as the address of a DNS server.
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=184)** But there's a bit of an issue if there's a router separating the network device from the DHCP server, as we see here.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=192)** When PC B sends out its discover broadcast, that broadcast is dropped by the router.
>
> **[3:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=199)** The fix is to configure the router as a DHCP relay agent, which has the very unique ability to forward specific types of broadcasts, including those discover broadcasts to the specified destination.
>
> **[3:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=214)** So here, router 1, it's configured to forward discover broadcasts to the DHCP server.
>
> **[3:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=222)** Now when PC B sends its discover broadcast, router 1 forwards that broadcast to the DHCP server.
>
> **[3:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=230)** And from that point on, the DORA process works as we've discussed.
>
> **[3:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=234)** Now, this discussion was about DHCP for IP version 4.
>
> **[3:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=239)** However, we do have DHCP for IP version 6, and those DHCP v6 servers, they can provide IPv6 information to our network devices.
>
> **[4:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=251)** And these DHCP v6 servers, they work in a couple of different ways.
>
> **[4:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=256)** We have stateful DHCP v6 servers, and stateless DHCP v6 servers.
>
> **[4:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=264)** First, let's take a look at the stateful servers.
>
> **[4:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=268)** Here, the DHCP v6 server provides all of the information that PC A needs.
>
> **[4:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=275)** Specifically, the DHCP v6 server provides prefix length information, it provides host information.
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=283)** Now the prefix length, that identifies the network portion of the IP version 6 address, and the host information is of course the host portion of that address.
>
> **[4:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=294)** And the server, it can also provide some optional information, maybe the address of our IP version 6 DNS server.
>
> **[5:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=302)** Next, let's take a look at the stateless DHCP v6 approach.
>
> **[5:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=307)** With the stateless approach, our PC is getting the prefix length information, in other words, the network information from its router.
>
> **[5:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=316)** Now that's possible with an IP version 6 feature called Neighbor Discovery Protocol, or NDP.
>
> **[5:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=324)** What happens here is we're asking the router interface, hey, what now work are we on?
>
> **[5:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=329)** And the PC can actually self-generate the host portion of its address.
>
> **[5:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=334)** It does that using a process called EUI-64, which can generate a 64-bit host identifier based on the host's 48-bit MAC address.
>
> **[5:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=347)** Then, if there's extra information that the PC might need, such as the IP version 6 address of a DNS server, it can get that information from the stateless DHCP v6 server.
>
> **[6:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/dhcp-overview-25000813?u=76281980&t=361)** And that's a look at how DHCP servers can hand out IP address information for both IP version 4 and IP version 6.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (30), dns (3), dora (1), ndp (1), eui (1)
> **Versions:** version 6 (6), version 4 (3)
> **Code Keywords:** let (3), case, (2), finally, (1), interface (1), self (1)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** such as (2)
> **Prerequisites:** configure (2)
> **Speakers:** - we (1)

#### DNS overview
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=1)** - When we're trying to reach a server, maybe like a web server out on the internet or even something local to our network, we typically know the name of the server, but not its IP address.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=12)** The issue is our routers forward traffic based on IP address information, not names.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=19)** So we need to take those easy to remember names and translate them into the often harder to remember IP addresses, and that's the job of a DNS server where DNS stands for Domain Name System.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=33)** Consider this typology, where the PC it wants to reach the [linkedin.com](https://linkedin.com) web server.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=40)** Usually an end-user device, like this PC, it knows the IP address of a DNS server, that's one of the pieces of information that it learned from its DHCP server, and if the PC does indeed know the IP address of the DNS server, it can send out a request to that DNS server saying, "Hey, what's the IP address of [linkedin.com](https://linkedin.com)?"
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=64)** The DNS server receives that request and it might have that information stored locally, but if it doesn't, it can reach out to another DNS server on the internet that does have the information.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=76)** And the DNS server, it then responds back to the PC.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809?u=76281980&t=80)** Now in this case, we're pretending that [linkedin.com](https://linkedin.com) has an IP address of 203.0.113.100 and once the PC has that information, it can properly form a packet to send to its router, which will then continue forwarding the packet until it eventually reaches its destination.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), dhcp (1)
> **URLs:** [linkedin.com](https://linkedin.com) (3)
> **Code Keywords:** case, (1), continue (1)
> **Versions:** 203.0.113 (1)
> **Definitions:** stands for (1)
> **Speakers:** - when (1)

#### NAT overview
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=1)** - Earlier, when we were discussing IPv4 and the IPv6, we mentioned that we're out of IPv4 addresses.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=9)** This begs the question, how are we doing able to continue using IPv4 in our existing networks and even new networks?
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=17)** And a network service that makes that possible is called network addresses, translation, or NAT.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=23)** Here's how it works.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=25)** NAT allows us to have one set of IP addresses inside of our network and have those IP addresses translated into one or more IP addresses that can be routed on the public internet.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=39)** Specifically with IPv4, there are some specific ranges of IP addresses that are designated for private use.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=48)** That means we can use those addresses on the inside of our network, but we cannot use them on the public internet.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=55)** However, if we translate those private addresses into the publicly ratable addresses, not only does that let us use a huge number of IP addresses on the inside of our networks and have those IP addresses that translated into one or more publicly ratable IP addresses, it let's us use those same IP addresses in millions of homes and businesses around the world.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=81)** It doesn't matter if your business uses the same IP address as someone else's office, because those private IP addresses never make it to the public internet.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=92)** Let's take a look at an example.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=94)** In this instance, we're fortunate enough to have a pool of publicly ratable addresses that we can use in the range of 192.0.2.101 all the way through 192.0.2.199.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=111)** Now those addresses they can be used as we send traffic out to the internet.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=116)** And to understand the NAT's terminology, we need to identify which portion of this overall network refers to the inside of the network and which portion refers to the outside.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=127)** In this case, we'll say that everything off of interface gig one on router R1, that's the inside.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=134)** While everything off of gig two, that's going to be the outside.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=138)** Now let's imagine that client one wants to communicate with a web server on the internet that has an IP address of 203.0.113.100.
>
> **[2:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=150)** Notice that client one, it has a private IP address of 10.1.1.1.
>
> **[2:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=155)** That's not ratable on the public internet.
>
> **[2:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=158)** Fortunately router R1, it's configured for NAT.
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=163)** It's going to be taking a client ones private IP address of 10.1.1.1, and it's going to translate that into the publicly ratable IP address from that pool, which we'll say in this case is 192.0.2.101.
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=180)** Then when the return traffic comes back from the web server, when router R1 sees that incoming traffic destined for 192.0.2.101, it knows that needs to be forwarded to client one because router R1 maintains a translation table that has all of the NAT mappings.
>
> **[3:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=202)** Next let's say client two also wants to communicate with the web server.
>
> **[3:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=207)** Router R1 translates client two's private IP address of 10.1.1.2 into a publicly ratable IP address of 192.0.2.102, which is different than the IP address assigned from router R1's pool of publicly ratable IP addresses.
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=227)** Again, this information is stored in router R1's NAT translation table.
>
> **[3:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=233)** Notice this table has a column for inside local and inside global addresses.
>
> **[3:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=239)** Well, let's define those terms.
>
> **[4:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=241)** Since each of these begin with a word inside, they're referring to devices that live on the inside of our network, specifically client one and client two.
>
> **[4:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=251)** These address names then end in the words, local and global.
>
> **[4:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=257)** That identifies if the device's IP address can only be routed locally, or if it can be routed globally on the public internet.
>
> **[4:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=265)** Let's use a client one as an example.
>
> **[4:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=268)** It's inside a local address is 10.1.1.1.
>
> **[4:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=272)** Because that IP address refers to a device on the inside of our network.
>
> **[4:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=277)** Specifically client one.
>
> **[4:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=279)** And the IP address can only be routed locally because it's a private IP address.
>
> **[4:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=284)** However, client one's inside global address, that's 192.0.2.101.
>
> **[4:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=293)** The word inside indicates we're still referring to a device on the inside of our network, which is still client one.
>
> **[5:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=301)** However, the word global indicates this IP address can be routed globally.
>
> **[5:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=308)** By the same logic, we can say that the IP address of the web server is an outside the global address because it refers to device on the outside of our network.
>
> **[5:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=319)** And the IP address of 203.0.113.100, it's globally ratable.
>
> **[5:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=327)** This type of NAT is called dynamic NAT.
>
> **[5:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=330)** Because we're dynamically translating multiple inside local addresses into multiple inside global addresses.
>
> **[5:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=339)** However, many times we don't have that luxury of having a pool of publicly ratable IP addresses.
>
> **[5:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=346)** Instead, we might have only one IP address that our internet service provider gave us.
>
> **[5:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=353)** Fortunately, there's a type of NAT that can let multiple inside local addresses share a single inside global address.
>
> **[6:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=362)** It's called port address translation or PAT.
>
> **[6:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=366)** With Pat our challenge's.
>
> **[6:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=368)** How do we let multiple inside local addresses share a single inside global address?
>
> **[6:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=375)** Specifically, how does the router look at return traffic from the internet and know where to forward it on the inside network?
>
> **[6:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=382)** Well, when a client reaches out to the server on the internet, not only does it use the well-known port number of 80 to indicate it wants to use web services on that server, it also dynamically picks a source port number.
>
> **[6:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=398)** This port number is sometimes called a dynamic or a femoral or a private port number.
>
> **[6:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=404)** And this range can vary based on different vendors and operating systems.
>
> **[6:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=409)** Notice in this case, client one sends a packet to a web server with a source port of 41025.
>
> **[6:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=416)** While client two sends a packet to a web server with a source port of 41050.
>
> **[7:02](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=422)** If our router is configured for PAT, not only does it keep track of the mapping between the inside local and inside global addresses, it also keeps track of the source and destination port numbers being used by each session.
>
> **[7:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=438)** So in this case, even though both client one and client two, get translated into the same inside global address of 203.0.113.100, the router keeps the different sessions separate by also keeping a record of the port numbers being used by those clients.
>
> **[7:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=458)** And as an example, when the web server is sending a packet back into the network, it's destined for 192.0.113.100.
>
> **[7:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=468)** that's the inside global address being used by both client one and client two.
>
> **[7:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=473)** But in addition to that, let's say the packet coming in from that web server has a destination port number of 41050.
>
> **[8:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=483)** When router R1 sees that it's going to look at its NAT translation table and realize that packet, it needs to be forwarded to client two.
>
> **[8:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/nat-overview-24999850?u=76281980&t=493)** And that's a look at how network address translation can help extend the usefulness of IPv4 addresses by letting millions of networks around the world use the same set of private IPv4 addresses inside of their network and have those addresses translated into a much smaller number of publicly ratable IPv4 dresses.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), private (9), public (5), case, (3), continue (1)
> **Versions:** 192.0.2 (6), 10.1.1 (4), 203.0.113 (3), 192.0.113 (1)
> **Env Vars:** nat (10), pat (2)
> **Definitions:** refers to (4), is called (2), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** we mentioned (1)
> **Analogies:** imagine (1)
> **Speakers:** - earlier (1)

#### NTP overview
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=1)** - In a network, our devices, they should agree on what time it is.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=5)** One reason that's important is we can do a better job of troubleshooting if we know what time a certain issue occurred.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=12)** Another reason to have accurate time is the use of digital certificates, which expire at certain dates and times.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=20)** These digital certificates are used when you connect to a secure website, as an example, and you want to securely enter maybe your credit card information.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=31)** If we don't have accurate time, we might not think a specific digital certificate is valid.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=37)** For these reasons and more, we want our network devices to agree on what time it is.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=43)** That reminds me of the saying, "A man with one watch always knows what time it is.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=48)** A man with two watches is never quite sure."
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=51)** We want our network to have one watch or one time source.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=55)** We're going to be able to keep our network devices time in sync using network time protocol or NTP.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=63)** So who do we trust to give us that accurate time?
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=67)** Well, there are some internet-based time sources that have hyper-accurate time.
>
> **[1:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=73)** Specifically, there are some atomic clocks on the internet and those atomic clocks, they use the element of Caesium 133 to keep accurate time because a little over nine billion oscillations of the Caesium 133 element equals one second.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=92)** This time can be communicated using NTP, which uses UDP Port 123.
>
> **[1:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=99)** Now earlier on in the course, I gave you a memory aid for this, it was the old Jackson 5 song that goes "ABC, easy as one, two, three."
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=108)** And here we remember NTP, easy as one, two, three, because that's the UDP Port that NTP uses.
>
> **[1:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=117)** Now, of course, not everyone communicates directly with those atomic clocks.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=121)** Instead, there are other servers on the internet that learn time from an atomic clock and they make their time available to internet users.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=132)** Now, of course, a clock that learns time from an atomic clock, it's not quite as accurate as the atomic clock.
>
> **[2:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=139)** And if we have a server in our organization that learns time from one of those internet-based time sources, and we make that time available to all of the devices on our network, our server isn't quite as accurate as the internet-based time source.
>
> **[2:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=156)** Interestingly, there's a way to keep track of how authoritative a time source is using a value called a stratum number.
>
> **[2:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=166)** The lower the stratum number, the more believable the time source.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=171)** The most believable time source is one of those atomic clocks.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=175)** They have a stratum number of zero.
>
> **[2:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=178)** Then, when an internet-based time source learns its time from one of those atomic clocks, they have a stratum number of one.
>
> **[3:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=186)** And if we have a server on our network that learns time from a time source with a stratum number of one, our stratum number becomes two.
>
> **[3:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=196)** You see, we're incrementing the stratum number by one for every hop that we're away from one of those atomic clocks.
>
> **[3:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=203)** And by the way, if a stratum number ever reaches 16, that's considered to be an invalid time source.
>
> **[3:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=211)** That's where NTP says, you're too far away from an atomic clock.
>
> **[3:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=216)** And in the United States, the Naval Observatory is the official keeper of the time.
>
> **[3:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=222)** They have atomic clocks in Washington, D.C., and Colorado Springs, Colorado, and there are servers on the internet that can learn time from those stratum zero clocks.
>
> **[3:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/ntp-overview-25205052?u=76281980&t=233)** And that's a look at how NTP keeps the clocks on our network in sync.

> [!info]- Semantic Content
>
> **Env Vars:** ntp (6), udp (2), abc (1)
> **CLI Commands:** make (2)
> **File Paths:** d.c (1)
> **Code Keywords:** this, (1)
> **Ports:** port 123 (1)
> **Speakers:** - in (1)

#### QoS overview
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=1)** - Sometimes in our network, there's just not enough bandwidth to go around, in times like those when we have congestion a network service called Quality of Service or QoS can help us out.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=13)** Let's take a look at a couple of times we might have network congestion.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=17)** Let's say that we have a router that gets us out to the internet, and we're connecting into that router at a speed of one gigabit per second.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=25)** However, that router's connection going out to the internet it's only running at 100 megabits per second.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=32)** That's a 10 to one speed mismatch, that could cause traffic to be congested as it's trying to leave that router going out to the internet.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=40)** Another instance that could cause congestion is having an aggregation point.
>
> **[0:45](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=45)** In the bottom typology that you see on screen, all of the links run at one gigabit per second, however, we have three servers, each of which are sending traffic into the switch at a rate of one gigabit per second.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=59)** So the switch is receiving a total of three gigabits per second, but as it sends that traffic out to the router, it can only do that at a one gigabit per second rate.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=70)** And because the switch is acting as that aggregation point, traffic going from the switch to the router is experiencing congestion.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=79)** It's times like these, that QoS can help us out.
>
> **[1:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=83)** And there's a huge point here.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=85)** QoS can be helpful when we have periodic times of congestion, but if our network is congested all of the time we need more bandwidth.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=95)** Now let's answer the question, what is Quality of Service?
>
> **[1:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=99)** Well, the best definition that I've ever heard is QoS is managed unfairness, that's really what it is.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=107)** We're treating some traffic better than other traffic, but we're doing it intentionally based on our business needs.
>
> **[1:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=115)** Also QoS is not a single feature, instead it's a collection of several features.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=121)** Well, let's consider a couple of the most common features that QoS offers us.
>
> **[2:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=126)** First up, is classification and marking.
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=129)** Think about boarding a plane with a boarding pass.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=132)** Now, personally, I don't have enough frequent flyer miles to qualify to board early, but some people do but imagine the day comes, I finally earn enough miles to get on the plane early, I approach the gate agent.
>
> **[2:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=145)** Do you think they would make me, every time I'm trying to get on the plane, would they make me prove that I'm a frequent flyer by saying, "Mr. Wallace, we'd like you to give us your boarding pass, "from the time you went to Orlando and San Diego and Austin "Los Vegas and Louisville."
>
> **[2:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=159)** No that wouldn't be efficient.
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=161)** Instead, there would be a marking on the boarding pass indicating that I'm a frequent flyer, entitling me, to get priority boarding.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=171)** It's the same thing with our network traffic.
>
> **[2:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=173)** We should classify traffic, early on in its travel, and then market with a priority marking, that lets the next router or the next switch, look at that marking and make a forwarding decision or dropping decision based on that marking.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=188)** Now of course, classification and marking by themselves, they do not alter the treatment of traffic.
>
> **[3:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=194)** We need other QoS features to take a look at that marking and take an action based on that marking.
>
> **[3:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=200)** One such feature is called queuing.
>
> **[3:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=203)** If a router or switch is receiving traffic faster that it can forward it out, the router or the switch, it allocates some memory called a buffer or a queue to store that traffic, in hopes that the bandwidth demand is going to die down.
>
> **[3:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=218)** Then the router or switch can take that traffic out of the queue, and send it on its way.
>
> **[3:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=224)** That approach however, doesn't prioritize traffic.
>
> **[3:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=228)** Let's say as a basic example, we want to prioritize our Voiceover IP or VoIP traffic.
>
> **[3:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=235)** What we can do is take the single output queue a router or switch has, and divide that one physical queue into two virtual sub cues.
>
> **[4:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=245)** Now imagine each of those sub cues as buckets, what we can do is send traffic classified and marked as VoIP traffic in one bucket and send all of the other traffic into the other bucket.
>
> **[4:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=260)** With this division of traffic there could be a flood of traffic, filling up and overflowing that best effort bucket while VoIP traffic, it's not being dropped because it's bucket is not full.
>
> **[4:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/qos-overview-24998880?u=76281980&t=272)** This queue separation is a basic example of queuing, and that's a look at the need for QoS, when it should be used along with an examination of a couple of QoS features.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (9), let (5), pass (3)
> **CLI Commands:** make (3)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** imagine (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - sometimes (1)


### 6. Wireless Networks

#### Types of wireless LANs
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=1)** - Let's consider some of the distinguishing characteristics of wireless LANs, beginning with the different ways that we can interconnect our wireless devices.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=9)** When we connect to a wireless network, we typically think of looking at the available wireless networks, connecting to one, maybe providing login credentials.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=19)** Only then can we communicate with other devices on the network.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=24)** However, there is an option to have an ad hoc wireless network.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=28)** With this type of network, we don't need any wireless infrastructure devices, such as wireless access points.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=36)** Instead, two wireless devices, they can communicate directly between themselves.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=42)** Now, while this type of network doesn't scale, it wouldn't be suitable as the primary type of wireless LAN for a business or even a home, it's very convenient for the occasional file transfer between devices.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=55)** A common example of an ad hoc wireless LAN is using the airdrop feature between a couple of Apple iPhones to transfer something like a photo or a video.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=67)** This transfer is made without the need for any sort of an infrastructure.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=72)** Instead, Bluetooth or Wi-Fi wireless communication could be used directly between those two devices.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=79)** The most common type of wireless LAN we have is an infrastructure wireless LAN.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=85)** Here, our wireless clients, like laptops or smartphones, they communicate directly with wireless access points.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=93)** Those access points then have hardwired connections to the rest of the network.
>
> **[1:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=99)** This type of network is also very scalable.
>
> **[1:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=102)** If we want to support additional wireless clients, we simply add additional access points, or if we want to extend the range of our wireless coverage throughout a building, we could strategically place wireless access points throughout that building, allowing us to roam throughout the building seamlessly without having to manually do any reconnection to another access point.
>
> **[2:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=126)** And beyond the scalability of infrastructure wireless LANs, these types of LANs could give us additional management and monitoring features that we wouldn't have with an ad hoc wireless network.
>
> **[2:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=139)** For example, we could see the number of wireless clients connected right now to the network, we could check bandwidth utilization, we could configure security, where, for example, somebody connecting to our network as a guest, they wouldn't have access to any of our corporate servers.
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=157)** And one final type of wireless LAN we'll consider is a mesh wireless LAN.
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=163)** Now we know that we can extend the coverage area of our wireless network by adding access points.
>
> **[2:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=169)** However, with our traditional infrastructure wireless LAN, those access points, they're hardwired into our network.
>
> **[2:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=178)** That creates a challenge for us if we need wireless coverage in an area that's not in close proximity to an ethernet switch, in which we need to connect that access point.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=188)** Fortunately, we have the option of using mesh access points.
>
> **[3:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=193)** These types of access points, they don't need to be connected to our wired infrastructure.
>
> **[3:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=198)** In fact, as long as the mesh access point has power, it can receive a signal from one access point and then retransmit that wireless signal.
>
> **[3:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=209)** That's going to give us a lot of flexibility when it comes to access point placement.
>
> **[3:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=213)** For example, let's say we want to extend our wireless network into our company's parking lot.
>
> **[3:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=219)** There's a security guard letting people in the parking lot, so we know it's okay for those people to be on our network.
>
> **[3:45](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=225)** However, we need to get coverage to the parking lot.
>
> **[3:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=228)** What we could do is place an access point on the guard shack, assuming that we have power to the shack, but no ethernet connection.
>
> **[3:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=236)** That would allow the access point on the guard shack to receive wireless communication from the main building, and then retransmit that wireless communication throughout the parking lot area.
>
> **[4:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=248)** And those are some of the different types of wireless LANs.
>
> **[4:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/types-of-wireless-lans-25205055?u=76281980&t=252)** Now, in our next video, let's examine exactly what radio frequencies we can use for wireless communication.

> [!info]- Semantic Content
>
> **Env Vars:** lan (7)
> **Code Keywords:** let (3), switch (1)
> **Analogies:** for example (3), such as (1)
> **Definitions:** is an  (2), is a  (1)
> **Code Identifiers:** iphones (1)
> **Cross-References:** next video (1)
> **Prerequisites:** configure (1)
> **Speakers:** - let (1)

#### 2.4 GHz vs. 5 GHz wireless networking
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=0)** - Wireless LANs typically use radio frequencies and one of two different bands.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=5)** There's the 2.4 gigahertz band and the five gigahertz band.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=9)** Now in this video let's consider some of the characteristics of each beginning with the 2.4 gigahertz band.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=16)** The 2.4 gigahertz band of frequencies gets divided into channels and we have five megahertz of bandwidth between each of those channels, but there's one exception.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=27)** There's actually 12 megahertz of bandwidth with between channels 13 and 14.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=33)** However, channel 14 is only allowed in Japan.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=36)** And then it's only used with the very, very old 802.11b wireless standard.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=42)** So you'll probably never encounter a network using channel 14.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=46)** Now big design consideration we have is preventing wireless access points from interfering with one another.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=52)** Now to do that, we need to assign nearby access points to different channels.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=58)** But there's a big point of confusion here.
>
> **[1:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=61)** If you tell one access point to use channel one, and another access point to use channel two thinking that by using different channels you're preventing interference that is not going to work.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=72)** Because when we tell an access point to use a specific channel that channel's frequency is the center frequency of being used by the access point.
>
> **[1:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=82)** But the access point is using 22 megahertz of bandwidth for a channel.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=86)** And even though the center frequency might be channel six the frequencies it's using actually span and leak into other channels.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=95)** So to really keep one access point from interfering with another, we need to have five channels of separation.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=103)** So if we start with channel one, that means we could have three non-overlapping channels.
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=109)** And those are channels one, six and 11.
>
> **[1:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=114)** And if we want to have lots of access points to cover a large area within a building, we can position our access points so that the coverage area of one access point is bounded by coverage areas of other access points which are using non-overlapping channels.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=131)** Consider this honeycomb design.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=134)** We have an access point using channel one in the middle and its coverage area is bounded by coverage areas only using channel six and 11.
>
> **[2:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=143)** And if we wanted to expand that even further, we could have a coverage areas using channel one on the outside of that honeycomb design you see on screen, where we never have adjacent cells using the same channel.
>
> **[2:36](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=156)** And we could continue this pattern indefinitely, allowing us to have a very large coverage area while avoiding channel interference.
>
> **[2:45](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=165)** In addition to the 2.4 gigahertz frequency band the other popular frequency band for wifi networks is the five gigahertz frequency band.
>
> **[2:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=173)** And the good news is the five gigahertz band, it's not nearly as congested as 2.4 gigahertz band.
>
> **[3:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=181)** Instead of having only three non-overlapping channels like we did with the 2.4 gigahertz band, here we have over 20.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=189)** Now here's a screenshot of a wifi analyzer that I ran on my home network and it's showing the five gigahertz channels being used by the access points in that network.
>
> **[3:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=199)** But something that's not obvious is the way the channels are numbered.
>
> **[3:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=203)** It looks like we're jumping from a channel 36 to 40 skipping over 37, 38, 39.
>
> **[3:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=210)** But interestingly, that's the way the usable channels are sequentially numbered.
>
> **[3:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=215)** We cannot set an access point to operate on channel 38 as an example.
>
> **[3:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=220)** So even though it might look like we're skipping numbers these really are consecutive channel numbers.
>
> **[3:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=226)** And normally I tell my access points to just select a channel dynamically, do it on your own, so I don't have to configure it.
>
> **[3:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=234)** It's going to listen to neighboring access points and it's going to try to avoid any overlapping frequencies.
>
> **[4:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=240)** And even though we say the five gigahertz band has non-overlapping channels, that's only if we have a 20 megahertz channel width, but here I'm doing something called at channel bonding where I'm bonding together Four of our 20 megahertz channels, giving us an 80 megahertz channel width, allowing more throughput per channel.
>
> **[4:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=263)** So in this case, I'm spanning a few channels because of that 80 megahertz channel width.
>
> **[4:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=269)** If we use a 40 megahertz channel width, we're spanning a couple of channels.
>
> **[4:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=274)** If we use an 80 megahertz channel width, we're spanning four channels, and if we use a 160 megahertz channel width, we're spanning eight channels.
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=283)** So if you're statically configuring your channels, remember that one channel is not going to bleed into another one like they did with the 2.4 gigahertz band, but you might need to spread the channels further apart if your channel width is greater than 20 megahertz.
>
> **[5:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=301)** So we should ask, which is better, 2.4 gigahertz or five gigahertz?
>
> **[5:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=306)** Well, the 2.4 gigahertz band, it typically has a longer range.
>
> **[5:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=311)** It does a better job of going through walls.
>
> **[5:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=313)** However, if those aren't limitations for you, the five gigahertz band, it's typically faster.
>
> **[5:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/2-4-ghz-vs-5-ghz-wireless-networking-25204204?u=76281980&t=319)** And that's a look at selecting channels in both the 2.4 gigahertz and the five gigahertz frequency bands.

> [!info]- Semantic Content
>
> **Versions:** 2.4 (10)
> **Code Keywords:** let (1), continue (1), case, (1)
> **Prerequisites:** configure (1)
> **Speakers:** - wireless (1)

#### 6 GHz frequency band
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=0)** - [Instructor] For over two decades, Wi-Fi networks relied on the 2.4 gigahertz and five gigahertz frequency bands, as we discussed in our previous video.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=9)** Then in 2021, an extension was added to Wi-Fi 6, which is also known as IEEE 802.11ax, and this extension was called Wi-Fi 6E, and it added support for the six gigahertz frequency band, which gives our wireless networks an additional 1,200 megahertz frequency range to use.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=30)** In fact, if we were just using 20 megahertz channel widths, the six gigahertz band would support 59 non-overlapping channels.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=38)** However, we typically bond multiple 20 megahertz channels together, which allows us to have more simultaneous communication streams.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=46)** And with the six gigahertz band, if we used 160 megahertz channel widths, which we could get by bonding together eight 20 megahertz channels, we could have seven, non-overlapping 160 megahertz channels.
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=60)** Compare that to only two non-overlapping 160 megahertz channels that are supported by the five gigahertz band.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=67)** And while the six gigahertz band supports higher data rates than the 2.4 gigahertz or five gigahertz bands, the trade-off is its shorter range.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=76)** Also, being a higher frequency makes the six gigahertz band more susceptible to signal degradation by objects in an environment, such as office furniture.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/6-ghz-freqency-band?u=76281980&t=86)** And when the six gigahertz band was approved for use by Wi-Fi networks, the decision was made that Wi-Fi networks operating in the six gigahertz band must support the newer WPA3 security standard in order for this new spectrum to offer strong security.

> [!info]- Semantic Content
>
> **Env Vars:** ieee (1), wpa3 (1)
> **Versions:** 2.4 (2)
> **Cross-References:** we discussed (1), previous video (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Wireless network antenna types
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=1)** - We know that our wireless access points communicate with radio waves, and we talked about the different radio frequency bands that might be used.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=8)** But it's an antenna that actually does the job of transmitting and receiving those signals.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=14)** So in this video, we want to consider two types of Wi-Fi antennas that we might run into and discuss what might be a good use case for each type.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=23)** First, let's consider an omnidirectional antenna.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=27)** Most wireless access points in our homes and business environments, they're omnidirectional antennas.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=33)** That means they transmit radio waves in all directions perpendicular to the antenna.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=37)** Consider the access point on screen.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=40)** It has four omnidirectional antennas.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=42)** Specifically, these are called dipole antennas.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=46)** That means most of the signal strength will be going in a horizontal direction.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=51)** So if you put this in the middle of an office, you would want the antenna to stay vertical, like we see here.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=58)** If you laid them flat, then most of the signal would go up to the ceiling and down to the floor, with not nearly as much signal reaching devices within the office.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=68)** Also notice that we have multiple antennas.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=72)** This lets us simultaneously communicate with multiple clients using a technology called MU-MIMO, which stands for multiple user, multiple input, multiple output.
>
> **[1:23](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=83)** There are times, though, when we don't want our signal to go in every direction.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=88)** If we don't want our signal to go in all directions, we can focus our signal strength in a specific direction.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=94)** A common use for this is when we have a couple of buildings and we want to interconnect those buildings.
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=100)** What we can do is put a directional antenna, for example, a parabolic antenna like we see here, on the roof of each building, and point those antennas towards one another.
>
> **[1:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=112)** And that's going to let us focus our signal strength in the direction of the other antenna.
>
> **[1:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/wireless-network-antenna-types-25000811?u=76281980&t=117)** And that's a look at a couple of antenna types that we might have in a Wi-Fi network.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (1)
> **Env Vars:** mimo (1)
> **Cross-References:** we talked about (1)
> **Definitions:** stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - we (1)


### 7. Emerging Trends in Networking

#### Software-defined networking (SDN)
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=1)** - One of the industry buzzwords that we hear a lot these days is SDN, and that stands for software defined networking.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=8)** And in this video, we're going to examine what SDN does for us and some of the pieces and parts that make it work.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=15)** Consider how we traditionally manage network devices like routers and switches.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=20)** We connect to a device maybe using a Secure Shell connection and we enter some commands or maybe we use a graphical interface to do the configuration.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=29)** But however we do it, we traditionally configure one device at a time.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=34)** However, we might have a need to make a change on many devices all at once, perhaps to push out a new security or new quality of service policy.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=44)** Using our traditional one-at-a-time administrative approach, that could take a long time.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=50)** That's where SDN can help us out.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=52)** With SDN, we can use an application that expresses our intent for network behavior.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=59)** Then that application can communicate with an SDN controller.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=64)** That controller then sends appropriate commands out to our network devices all at once.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=71)** So not only do we not have to physically visit each device, we don't even have to know all of the correct commands to enter into the switch or router.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=81)** As long as we have some way to express our intent to the SDN controller, it's going to take care of sending the correct commands to those devices.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=90)** Now, let's take a closer look at how all of this works.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=93)** Here, we see a couple of routers and a switch just to keep the topology easy to visualize but then represent what could be hundreds or thousands of network devices in a large enterprise network.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=107)** Rather configuring these devices individually, we can add an SDN controller in the mix.
>
> **[1:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=113)** This SDN controller can then be in charge of communicating with all of our devices and here's a term for you to know.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=121)** Southbound interfaces.
>
> **[2:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=124)** Since we typically represent our network devices living below our SDN controller, in other words, south of the controller, we say that this communication happens with Southbound Interfaces.
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=137)** And here, the word interfaces refers to application programing interfaces or APIs for short.
>
> **[2:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=146)** An API is something that lets two pieces of software communicate with each other.
>
> **[2:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=152)** So a Southbound Interface, sometimes abbreviated as SBI, communicates between our SDN controller and network devices.
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=161)** What exactly are these SBIs?
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=164)** Well, some network devices were designed with SDN in mind and they support a protocol designed for SDN communication.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=172)** One such protocol that's really popular is called OpenFlow.
>
> **[2:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=176)** But what about our traditional network devices that are not devices aware?
>
> **[3:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=181)** Well, the good news is some SDN controllers, they can use Secure Shell as an example to open up communications with our traditional network devices.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=191)** So we we don't have to leave our older devices behind when we move to SDN.
>
> **[3:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=196)** Next, let's think about how we send instructions to an SDN controller.
>
> **[3:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=202)** We're going to have to have some sort of application that communicates with the SDN controller and since we normally represent an application as sitting above the SDN controller, we say that Northbound Interfaces, or NBIs, are used for that communication.
>
> **[3:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=218)** And these applications, they might be in the form of graphical interfaces that we interact with or we might be writing or customizing code for a program.
>
> **[3:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=228)** These programs are typically written using the Python programming language.
>
> **[3:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=233)** And the specific way the application communicates with the SDN controller is called Representational State Transfer or REST for short.
>
> **[4:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=243)** REST communicates with an SDN controller in much the same way that a web browser communicates with a web server, using HTTP instructions.
>
> **[4:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=253)** Now, HTTP stands for Hypertext Transfer Protocol and it uses a series of verbs, like POST or GET to send and retrieve information to and from a web server.
>
> **[4:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=266)** Similarly, REST uses these HTTP verbs to send and request information to and from an SDN controller.
>
> **[4:34](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=274)** And the final thing we'll consider with SDN is how we format data flowing between an application and an SDN controller.
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=283)** The two most commonly used formatting languages are XML, or Extensible Markup Language, and JSON or JavaScript Object Notation.
>
> **[4:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=292)** Now, obviously, there is a lot to learn when it comes to SDN.
>
> **[4:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/software-defined-networking-sdn-24999851?u=76281980&t=296)** But after watching this video, I hope you better understand the benefit of SDN, along with a basic understanding of some of the components that make SDN work.

> [!info]- Semantic Content
>
> **Env Vars:** sdn (25), rest (3), http (3), api (1), sbi (1)
> **Code Keywords:** interface (2), switch (2), let (2)
> **Definitions:** stands for (2), is called (2), in other words (1), is a  (1)
> **CLI Commands:** make (3), python (1)
> **API Endpoints:** post  (1), get  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - one (1)

#### Virtualization
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=1)** - Back in the nineties, I used to be a network manager at a university where we had a server farm.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=6)** And that server farm was a room with racks and racks of huge servers, one server for each department or college within the university.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=15)** It was really expensive to buy all of those servers and to provide them with power and to keep them updated.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=21)** Fortunately, an alternative we have today is to have a single physical server and install multiple virtual servers on that physical server.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=31)** Here's an example, let's say that our business needs a Microsoft Windows Server, a Linux Server, and an Oracle Solaris Server.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=40)** We could have a physical server for each of those, or we could have a single physical server on which we install three virtual servers as virtual machines.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=52)** The way this works is we have a single physical server that's hosting our three virtual servers and that physical server is running a piece of software called a hypervisor.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=65)** A hypervisor is software that can create, start, stop and monitor multiple virtual machines.
>
> **[1:13](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=73)** And these virtual machines are logically separate from one another.
>
> **[1:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=77)** Each running their own operating system.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=80)** However, they are able to share resources of the underlying physical computer.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=85)** For example, we can allocate different amounts of memory and hard drive space to each virtual server.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=92)** And if we want, they can all share the same connection or connections out to the rest of the world.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=98)** And here are two types of hypervisors that I want you to know about.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=103)** A type one hypervisor is installed on the physical computer without any underlying operating system.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=110)** Instead, we can just boot up that physical server off of a DVD or a flash drive and install the hypervisor software, as an example.
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=119)** A type one hypervisor that I use is VMware's ESXi hypervisor.
>
> **[2:04](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=124)** Now type two hypervisor that is installed on top of an existing operating system.
>
> **[2:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=130)** For example, I typically use a Mac and from time to time, I need to do something in Microsoft Windows.
>
> **[2:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=136)** So what I've done is install a type two hypervisor on my Mac and then install Microsoft Windows on top of that.
>
> **[2:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=145)** That lets me run both my Mac OS and Microsoft Windows side-by-side on that same computer.
>
> **[2:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=153)** An example of a type two hypervisor that I personally use is VMware's Fusion hypervisor.
>
> **[2:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=160)** Into variants of virtual servers is something called a containers.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=164)** Let's say that we need three virtual servers.
>
> **[2:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=167)** Each of which are running Microsoft Windows as their operating system.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=172)** If we installed those virtual servers on one physical server, we end up having three separate installations of Microsoft Windows.
>
> **[3:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=181)** However containers, they can share an underlying operating system.
>
> **[3:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=186)** These containers could be running different applications and have no knowledge of one another, but they could still all be sharing the same underlying installation of Microsoft Windows.
>
> **[3:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=197)** Reducing the storage space required on that physical server and making each container smaller and more portable.
>
> **[3:24](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=204)** An example of a container platform is Docker.
>
> **[3:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=208)** And it's not just operating systems and applications that we can virtualize.
>
> **[3:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=213)** We can even virtualize network components like virtual routers and virtual switches.
>
> **[3:39](https://www.linkedin.com/learning/networking-foundations-networking-basics/virtualization-25201756?u=76281980&t=219)** And that's a look at virtualization and how it can reduce the physical resources we need on a network.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5)
> **Code Keywords:** let (2)
> **Analogies:** for example (2)
> **CLI Commands:** docker (1)
> **Env Vars:** dvd (1)
> **Speakers:** - back (1)

#### Cloud technologies
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=1)** - In our previous video, we saw how we could save computer resources by having multiple virtual machines run on a single physical machine.
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=10)** Now let's extend that discussion by asking, where do those physical servers reside?
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=15)** We might be able to allocate some space in our building complete with physical security, redundant power, potentially large HVAC systems, but even if we do have a suitable place to put all those physical servers, still it's our responsibility to continually maintain and update that hardware.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=35)** And also, we might need to purchase more hardware that we typically need just to handle a few peak usage times.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=42)** An alternative approach is to have those physical servers reside in a data center of a cloud provider.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=49)** A couple of cloud provider, examples include Amazon Web Services or AWS and Microsoft Azure.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=56)** Cloud providers like these own and manage the equipment.
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=60)** And we just have to pay for the computing power that we need.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=63)** And the term you'll hear a lot for that computing power is compute resources.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=68)** By having our compute resources hosted by a cloud provider, we don't have to purchase, house and maintain our own servers.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=76)** And if we need additional resources to handle a period of peak demand, we can just spin up more compute resources on an as-needed basis.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=85)** And these cloud providers offer us plenty of cloud-based services beyond just providing a remote place to store our data.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=93)** For example, software as a service or SaaS lets us access applications through a web browser.
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=100)** A SaaS application I use a lot is Google's G Suite, which gives me access to Gmail, Google Calendar, Google Sheets, lots of other applications.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=111)** Infrastructure as a service, or IaaS, is often the first thing that comes to my mind when I hear cloud computing.
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=119)** Specifically, IaaS let's us access compute and storage resources in the cloud.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=125)** Software developers often benefit from using platform as a service, or PaaS, to have virtual access to a wide variety of computing platforms that they're developing software for.
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=137)** That way, their company doesn't have to buy lots of hardware to develop for.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=141)** And these are just a few examples and features of cloud computing.
>
> **[2:26](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=146)** Another distinction we need to make is how a public cloud differs from a private cloud.
>
> **[2:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=152)** With a public cloud, the compute resources are owned and maintained by a cloud provider who shares their compute resources with multiple customers.
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=161)** However, we might want a dedicated set of compute resources just for our organization's use.
>
> **[2:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=168)** We can have that with a private cloud.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=171)** A private cloud might be hosted in our own local data center, although it could be hosted by a private cloud service provider.
>
> **[2:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=179)** But with the private cloud, the resources are maintained by and dedicated to just one organization.
>
> **[3:06](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=186)** And many organizations, they use both.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=189)** They have both public and private cloud computing and that type of deployment is called a hybrid cloud.
>
> **[3:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=196)** And finally, let's consider how we physically connect our office with a cloud provider.
>
> **[3:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=202)** The most common approach is to use the internet.
>
> **[3:25](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=205)** However, the internet it's not considered to be secure.
>
> **[3:28](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=208)** So what we can do is set up a virtual connection between our location and the cloud provider.
>
> **[3:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=215)** This virtual connection is called a virtual private network, or VPN, and we can encrypt data flowing over that VPN.
>
> **[3:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=223)** That way, if somebody were to intercept our data in transit, they wouldn't be able to read any of that data because it would be all scrambled up or encrypted.
>
> **[3:52](https://www.linkedin.com/learning/networking-foundations-networking-basics/cloud-technologies-25205053?u=76281980&t=232)** And that's how cloud technologies can give us access to the compute resources that we need without having to purchase all that hardware required for those resources.

> [!info]- Semantic Content
>
> **Code Keywords:** private (7), let (3), public (3), for. (2), finally, (1)
> **Env Vars:** vpn (2), hvac (1), aws (1)
> **CLI Commands:** aws (1), make (1)
> **Definitions:** is called (2)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### 5G and Wi-Fi 6
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=1)** - In this video, we're going to check out a couple of wireless standards that offer us bandwidth like we've never seen before in wireless technologies.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=9)** In fact, these technologies, they often run faster than our high speed wired LANs, which might be running at a gigabit per second.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=17)** These two technologies are 5G and Wi-Fi 6, where 5G is a cellular data service and Wi-Fi 6 is a wireless LAN standard.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=27)** First, let's consider 5G which stands for the fifth generation of cellular technology.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=33)** Cellular data speeds were able to take huge leaps with 5G because 5G uses an entirely different band of radio frequencies and they're much higher frequencies than frequencies used by 3G and 4G.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=48)** Specifically, the theoretical maximum throughput of a 5G connection is 20 gigabits per second.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=56)** Of course, that's the theoretical maximum, but what can you and I expect?
>
> **[1:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=61)** Well, Qualcomm says that a typical wireless user will get a 5G throughput on the order of 1.5 gigabits per second.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=70)** Still, that's way beyond what we've typically had on our wireless LANs.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=75)** Now, what makes that possible is that different band of frequencies that we mentioned earlier.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=80)** With 5G we use very high frequency, typically in the range from 30 through 300 gigahertz.
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=89)** Now, that means that wavelengths of one of these radio waves is very small on the order of millimeters and these higher frequencies, they allow us to squeeze more data into a transmission.
>
> **[1:42](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=102)** The challenge with that is those high frequencies, they get absorbed by walls and windows and lots of other material much more so than frequencies used by 4G.
>
> **[1:53](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=113)** For example, have you ever seen the submarine movie where a sub needs to send a transmission without coming up to the surface?
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=119)** What they could do is deploy a VLF or very low frequency antenna.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=125)** The reason is a really low frequency can go through the water if the sub isn't too deep without being absorbed by the water.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=132)** However, the sub would not be able to use a typical radio frequency because that would be absorbed by the water.
>
> **[2:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=140)** The issue of 5G's radio waves being so easily absorbed means that our existing cell tower infrastructure, it's going to work, it's not going to be able to use 5G and give us that coverage we want.
>
> **[2:32](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=152)** It wasn't a big issue to go from 3G to 4G because you could use the same towers, but with 5G, it's going to take more than just adding a 5G radio to an existing tower.
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=163)** Instead, we're going to have to have lots of base stations clustered tightly together.
>
> **[2:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=169)** For example, in a large city, there might be 5G base stations mounted on street lamps or traffic lights.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=175)** The good news is once they are installed, these 5G base stations can support lots of simultaneous connections while giving us that incredible throughput.
>
> **[3:05](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=185)** And 5G gets even better.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=188)** In addition to having great throughput, it has really low latency.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=192)** In other words, very little delay.
>
> **[3:14](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=194)** Theoretically, that delay can be as small as one millisecond.
>
> **[3:18](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=198)** Think about how valuable that could be for a self-driving car.
>
> **[3:22](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=202)** Someone pulls out in front of you and your car needs to make a split-second decision.
>
> **[3:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=207)** It's in times like that where milliseconds count.
>
> **[3:30](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=210)** Next, let's consider Wi-Fi 6, which of course is referring to the sixth generation of Wi-Fi standards.
>
> **[3:37](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=217)** These standards are set by the IEEE Standards body, specifically 802.11n, that was the Wi-Fi 4 standard.
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=227)** 802.11ac, that was Wi-Fi 5 and now 802.11ax is called Wi-Fi 6 and Wi-Fi 6 was standardized in 2019.
>
> **[4:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=240)** We talked earlier in this course about how two frequency bands that wireless networks use are the 2.4 and 5 gigahertz band.
>
> **[4:09](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=249)** Well, Wi-Fi 6, it still supports both of those bands and it gives us a theoretical throughput of 9.6 gigabits per second.
>
> **[4:19](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=259)** Compare that to its predecessor 802.11ac, which had a theoretical throughput of 3.5 gigabits per second and that was a huge improvement 802.11n that had a theoretical maximum throughput of only 150 megabits per second.
>
> **[4:35](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=275)** Let's take a look at a few of the features that make Wi-Fi 6 so fast.
>
> **[4:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=280)** One advantage of Wi-Fi 6 is that it allows us to represent more bits with a single wave form than previous Wi-Fi standards.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=290)** It does that using a technology called 1024-QAM, which lets us represent 10 bits with a single way form.
>
> **[5:00](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=300)** Compare that to Wi-Fi 5, which let us represent eight bits with a single way form and Wi-Fi 4, which only let us represent six bits with a single way form and also a typical Wi-Fi channel spans 20 megahertz or frequencies.
>
> **[5:16](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=316)** However, Wi-Fi 6 can logically bond together eight of those 20 megahertz channels to give us a 160 megahertz channel width that lets us have enough available frequencies to be communicating with lots of clients simultaneously.
>
> **[5:33](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=333)** That was something that was also possible with Wi-Fi 5, but Wi-Fi 4, it maxed out at 40 megahertz channel widths.
>
> **[5:41](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=341)** Wi-Fi 6 allows a wireless access point to have eight simultaneous upstream and downstream connections with its clients.
>
> **[5:49](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=349)** With Wi-Fi 5, we could only have one upstream conversation and four downstream conversations at any one time, while Wi-Fi 4, it didn't support multiple simultaneous conversations at all and the transmission method is also different with Wi-Fi 6 and it's called orthogonal frequency division multiple access or OFDMA.
>
> **[6:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=371)** That allows us to use a feature called target wake time, which allows a wireless access point to tell a client when it's allowed to transmit and receive.
>
> **[6:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=381)** That cuts down on the issue of having multiple clients contending for the same bandwidth at the same time.
>
> **[6:27](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=387)** That's going to give us less latency and also since a client knows when it's going to be allowed to transmit and receive, it can put its radio into a low power mode the rest of the time, that's going to give us some power savings.
>
> **[6:40](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=400)** It also supports basic service set or BSS coloring, which allows nearby access points to distinguish between wireless transmissions for different networks that are using the same frequency.
>
> **[6:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/5g-and-wi-fi-6-25205054?u=76281980&t=414)** So, keep an eye out for 5G and Wi-Fi 6 technologies each of which takes huge leaps in performance over their predecessor.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), means that (2), stands for (1), in other words (1), is called (1)
> **Code Keywords:** let (5), self (1)
> **Env Vars:** lan (1), vlf (1), ieee (1), qam (1), ofdma (1)
> **Versions:** 1.5 (1), 2.4 (1), 9.6 (1), 3.5 (1)
> **Cross-References:** we mentioned (1), coming up (1), earlier in (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Speakers:** - in (1)


### Conclusion

#### Keep networking
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=1)** - Now that you've completed the Networking Basics course, which essentially gave you a sampler platter of networking technologies, you might want to go deeper with me into one or more of the technologies we discussed.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=12)** If you're new to IP addressing, I recommend you check out my LinkedIn course, "Learning IP Addressing," which is a non-mathematical look at IP addressing.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=21)** Then, I recommend you follow that up with my LinkedIn course, "Learning Subnetting," and you'll remember, we discussed wireless networking a good bit in this course.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=31)** If you'd like to dive deeper into wireless networking, I recommend my LinkedIn course, "Wireless Networking Essentials," and if you've already been working with networks for awhile and you want to learn advanced networking theory and configuration for Cisco devices, please check out my LinkedIn course, "Cisco CCNP ENCORE," that's for exam number 350-401.
>
> **[0:54](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=54)** That's actually divided into two different courses.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=57)** There's a part one and a part two, and finally, if you'd like to keep in touch with me and see new content as it comes out, I invite you to visit my YouTube channel, and you can also listen to my podcast, and it's called "The Broadcast Storm."
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=71)** But for now, I want to give you a huge congratulations for completing the Networking Basics course and say thank you for entrusting me with your time.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-networking-basics/keep-networking-25201753?u=76281980&t=80)** I hope to see you in another of my LinkedIn training courses very soon.

> [!info]- Semantic Content
>
> **Env Vars:** ccnp (1), encore (1)
> **Cross-References:** we discussed (2)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)


## Path Context

### In [[Network Administration- Build Core Skills for Network Management and Security]]
**1 of 6** | [[Networking Foundations- IP Addressing]] →

### In [[Networking and Administration Fundamentals]]
← [[Computer Science Principles- The Internet]] | **3 of 10** | [[Networking Foundations- IP Addressing]] →

### In [[The Top Skills IT Professionals Have Right Now]]
**1 of 10** | [[Windows Server 2022 Essential Training]] →

### In [[Essential New Skills in IT Administration]]
**1 of 5** | [[Server Administration Essential Training]] →

## Appears In

- [[Network Administration- Build Core Skills for Network Management and Security]]
- [[Networking and Administration Fundamentals]]
- [[The Top Skills IT Professionals Have Right Now]]
- [[Essential New Skills in IT Administration]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Network Administration
- [[MPLS Segment Routing]] — Network Administration
- [[Server Administration Essential Training]] — Network Administration
- [[Protecting Your Network with Open-Source Software]] — Network Administration
- [[Networking Foundations- Wide Area Networks (WANs)]] — Network Administration
