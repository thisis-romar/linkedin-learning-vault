---
type: course
slug: networking-foundations-ip-addressing-2020
url: "https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020"
duration_minutes: 92
duration: 1h 32m
level: Intermediate
updated: 3/15/2021
learners: 295998
skills:
  - IP Addressing
exercise_files: false
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - topic/cloud-computing
  - skill/ip-addressing
status: not-started
created: 2026-04-17
---

# Networking Foundations: IP Addressing

> The IP address is a fundamental building block for a functioning modern network. In this course, instructor Anthony Sequeira explains the basics of IP addressing, the components of an IP address, aggregation, and more. Anthony begins by describing what the IP address does and why it is critical in a successful network. He goes into the structure of IPv4 and IPv6 addresses. Anthony shows you how to

> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020) | 1h 32m | Intermediate | 296K learners

## Instructor

- [[Anthony Sequeira]]

## Skills Covered

- IP Addressing

## Table of Contents

### Introduction

#### Welcome to this course
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=0)** - [Anthony] If you're interested in working in the information technology field in any capacity.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=7)** Then learning the details of IPv4 and IPv6 addressing is a must.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=13)** The cloud dominated world of today has placed even more of an emphasis on TCPIP and networking systems than ever before.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=22)** In this course we're going to begin building a solid foundation of networking by breaking down how the IPv4 and IPv6 address are formed.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=34)** And what information they convey.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=36)** We're also going to ensure you can work with these addresses comfortably.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=41)** Regardless of your operating system.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=43)** And we'll cover the services that make these IP addresses so functional and valuable for us.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=49)** Such as the DHCP and DNS services.
>
> **[0:53](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=53)** Hi, I'm Anthony Sequeira.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=56)** I'm a Cisco certified CCIE.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=58)** And I've been working in information technology since 1996.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=63)** So, join me in this LinkedIn learning course as we get past the fear of the complexity of the IP addressing system.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=71)** Yes, there will be some math but I promise you'll love it.

> [!info]- Semantic Content
>
> **Env Vars:** tcpip (1), dhcp (1), dns (1), ccie (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [anthony] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a foundational course.
>
> **[0:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=2)** So we're going to be approaching this from a beginner's perspective.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=6)** However, there are a few things that might be helpful to know before we start learning about IP addressing.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=13)** First, it'd be helpful to understand basic networking concepts such as servers and clients.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=19)** Next, you should understand basic operating system concepts such as remote management and local administration.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=26)** And finally, you should understand some of the fundamentals behind internet technologies like HTTP and web browsing.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=35)** If you need to brush up on any of those topics, check out some of the courses here in the LinkedIn Learning Library.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=41)** If you're all set, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Analogies:** such as (2)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)


### 1. IP Addressing Basics

#### The IP address and its purpose
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=0)** - [Instructor] Your modern computing device uses many addresses to be able to properly communicate on the network to other devices and services.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=9)** But certainly one of the most important addresses is the internet protocol or IP address.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=17)** You have an IP address or many IP addresses on your modern computer and this IP address will also come with a subnet mask.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=28)** It'll also be associated with other very important IP addresses like the default gateway IP address and the DNS IP address.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=39)** As we'll see later in the course, the IP address in subnet mask on your system define a lot.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=46)** They define what network you're located on and they also define what is your particular host identification number.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=55)** A nice common analogy that works well is to compare this to your street address and your house number.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=62)** The street address is like the network and your house number is like the host identifier.
>
> **[1:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=69)** Or an IP address can easily be compared to a US telephone number.
>
> **[1:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=73)** In the United States system, there's one component that's called an area code and then there's the phone number.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=80)** The area code would convey the network in our example.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=84)** So the subnet mask tells us what portion of the IP address is our street address and the subnet mask also indicates what portion of the IP address identifies our house number to use of course, the house and the street name and house number analogy from earlier.
>
> **[1:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=104)** In order to make this as practical as possible, let's demonstrate how easy it is to find your IP address, your subnet mask and your default gateway address.
>
> **[1:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=115)** Don't stress out if you don't know what each of these components is.
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=119)** That's a big part of this course.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=121)** You will leave this course with a rich understanding of these various IP addresses and their functions.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=128)** Let's take the two most popular desktop operating systems in the world, Microsoft Windows and the Apple macOS.
>
> **[2:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=136)** And let's determine how to learn the relevant IP address information using both the graphical user interface and the command line interface on each of these two different operating systems.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=149)** And just to really drive the point home, we'll also look at this information on an iPhone.
>
> **[2:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=155)** So let's begin on the Mac.
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=157)** And if we go into system preferences, there is this network athlete right here.
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=163)** And if you struggle to find it by scanning with your eyes like I do, then you can go to the Search Remember.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=172)** Let's click here, and if we go into the graphical user interface here, it's really pretty cool you can see the different options that I would have for making network connections and you can see I'm currently connected via WiFi Now notice right here is this advanced button.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=191)** So if I click Advanced, it's going to show me the advanced properties for that connection.
>
> **[3:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=196)** In this case, it's WiFi.
>
> **[3:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=198)** These are different networks around me that I could potentially connect to.
>
> **[3:23](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=203)** This is the TCP IP settings that we're interested in.
>
> **[3:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=208)** And notice that we are using something called DHCP to get the IP address onto this system.
>
> **[3:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=217)** And the IPV4 address that I have currently received is 172.20.6.50.
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=227)** So when speaking to another network engineer I would simply go, "yeah, my IPV4 address is 172.20.6.50 and I would just use those dramatic pauses to indicate the decimal values that are in each of those octets later on.
>
> **[4:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=250)** Notice the sub-debt mass 255 255 240, and then zero, and then the router which is the default gateway of 172.20.0.1.
>
> **[4:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=264)** So all that information that we might need regarding the IPV4 addressing for this client is right here inside the graphical user interface, thanks to the network app in the advanced properties of in my case, the WiFi connection we can see our IPV4 address, the sub-net mask that goes without address and the default gateway.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=290)** Now I must admit when I need my IP address information quickly on the Mac, I would not go into system preferences and use the graphical user interface.
>
> **[5:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=301)** Instead I would bring up a terminal window and I would simply type ifconfig and we hit Enter and we can see the IP address information for all of the interfaces on our device all of the network interfaces.
>
> **[5:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=319)** So if I highlight this one right here we can see the en0 interface is the interface that is going to be associated with the wireless card on this laptop.
>
> **[5:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=333)** And look at this, the inet address is 172.20.6.50, We'll get that right there.
>
> **[5:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=342)** There's the address and the net mask is presented to us here in hexadecimal format.
>
> **[5:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=349)** You can see the broadcast for the network we're on is 172.20.15.255.
>
> **[5:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=356)** Also interesting here is that when you first look at the output, there's this loop back zero right here.
>
> **[6:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=365)** This is a internal virtual interface and it's for testing purposes.
>
> **[6:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=372)** So if we ever just want to like quickly go in and test that our own IP is functioning properly, we can ping our internal loop back address at 127.0.0.1.
>
> **[6:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=388)** I would love to see you see the official count of the number of ways we can find our IP address on a windows system and the graphical user interface.
>
> **[6:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=397)** There would be lots of ways that you could do this.
>
> **[6:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=400)** Here you can see we're going very old school and if you go to the network and sharing center, here we can see there's our connection.
>
> **[6:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=410)** And if I go to change adapter settings, we can see my WiFi adapter right here and if we go into the Properties of that WiFi adapter, there is the IP version for setting here.
>
> **[7:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=426)** And if we look at the properties of that, we can see that we're set to obtain our IP address automatically and get our DNS information automatically from a DHCP server.
>
> **[7:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=438)** And we'll be covering that a detail later on.
>
> **[7:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=441)** But the question here is, what is our IP address?
>
> **[7:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=445)** We're still not seeing that.
>
> **[7:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=446)** So if I just right click and go to Status, we're getting closer.
>
> **[7:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=452)** Here we can see the information about the WiFi connection, and if we go to the details here, there we have it.
>
> **[7:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=460)** We can see the IP address and subnet mask as well as the DHCP server address, and the DNS servers and the default gateway and all those important IP address information components.
>
> **[7:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=476)** for a long time, even folks that are non-technical like my father, he has looked at his smartphone and he's realized that his smartphone is really a computer in his pocket.
>
> **[8:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=489)** And sure enough, just like one of our Mac systems or our windows systems, our iPhone or Android phone or whatever kind of phone that we're using is going to have an IP address.
>
> **[8:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=502)** So here you can see me once I enter the settings, I'm going to go ahead and select the option for my WiFi connection.
>
> **[8:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=512)** And when I go into that WiFi connection, notice that there is an eye icon that's where you're getting more information.
>
> **[8:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=520)** If I select that eye icon, I'm going to go into the information about this WiFi connection and look at that underneath the IPV4 address section you can see that, we are configured on this iPhone to receive our IP address information from a DHCP server automatically, and that I've gotten the IP address of 192 168 040 with a 255 255 255 255 mask and a default gateway at 192 168 0 1.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (9), let (5), case, (2), this, (1), this. (1)
> **Env Vars:** ipv4 (5), dhcp (4), dns (3), tcp (1)
> **Versions:** 172.20.6 (3), 172.20.0 (1), 172.20.15 (1), 127.0.0 (1)
> **UI Navigation:** go to (5), select the (1)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** iphone (3), macos (1)
> **Tools:** command line (1), terminal (1)
> **Definitions:** is a  (1), is an  (1)

#### Expressing IP addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=0)** - [Instructor] So we know that the IP address is critical for being able to send and receive data on the network.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=7)** We know this address dictates our network assignment and also describes our host ID.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=14)** We represent both IPv4 and IPv6 addresses in a format that we humans are comfortable with.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=22)** For example, let's consider the dotted decimal notation of an IPv4 address.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=30)** The computer sees this 32 bit address in its binary form though.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=36)** We know that the computers love binary where we have a zero or a one bit setting.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=44)** Now there's eight bits in each section of the IP address.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=51)** So because each of these sections are going to consist of eight bits, these sections are named octets.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=59)** Sadly, when the designers of IPv4 were planning the address space, they never dreamed of the popularity that IP in the internet would bring.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=70)** So sure enough, we're essentially out of IPv4 address space that can be assigned to companies.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=78)** This really helped speed up the development of the next generation IP technology called IPv6.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=86)** In IPv6, the 128 bit IPv6 address is presented in hexadecimal as we can see here.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=97)** Now, there are two shortcuts you can use with IPv6 addresses in order to shorten them.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=103)** First, you can substitute consecutive fields that consist of only zeros with a colon colon.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=111)** Please note though, you can only do this once within the address.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=116)** Now you can also trim leading zeros from any field and you can do this as many times as you like.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=125)** So if we were to apply both of these techniques to our IPv6 address, we would get the shortened IPv6 address.
>
> **[2:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=135)** Notice we've trimmed all the leading zeros from fields and once within the address, we represented those two fields of all zeros with our colon colon trick.
>
> **[2:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=147)** Now let me show you just how easy it is to convert from decimal to binary and vice versa.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=154)** This is actually an important skill when you're learning to work with IP addresses and we'll see reasons why this is true later on in the course.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=164)** So what I do in order to be able to convert from binary to decimal or vice versa is I use a handy little conversion chart.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=175)** And in fact, I like to make this chart on my scratch paper before I start a certification exam so that I can use the chart to answer these types of questions.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=187)** So here's how this works.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=189)** On the first row of the chart, I write down two raised to the seven and then six and then five and then four and then three and two and one and zero.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=206)** So we have two raised to the zero all the way up to two raised to the seventh.
>
> **[3:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=212)** So that's the first row of my conversion chart and then underneath that row, I'm going to put the values.
>
> **[3:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=222)** Now, two raise to the zero power, it turns out anything raised to the zero power simply gets a value of one and then we have two raised to the first which is the value itself of two and then two raised to the second is four.
>
> **[3:58](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=238)** In fact, you can quickly fill out this row by just doubling the value as you move from right to left.
>
> **[4:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=246)** So one, two, four, eight, 16, 32, 64 and 128.
>
> **[4:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=255)** So there is the conversion chart in all of its glory and this makes it very, very simple to do these conversions.
>
> **[4:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=265)** Let's take an example of, oh let's say inside of one of our octets, we have the number 10 in decimal, what is that in binary?
>
> **[4:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=277)** Well, when you take a look at the bits inside of an octet and this table right here represents those eight bits inside of an octet, so when we look at that, we just say, "Okay, can I subtract the decimal value here of 128 from the number we are trying to convert?"
>
> **[5:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=301)** And the answer is no we can't and so that bit position gets a zero.
>
> **[5:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=306)** Can we subtract 64 and not have a negative number or a zero?
>
> **[5:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=311)** And the answer is no we can't, so that has a zero.
>
> **[5:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=315)** And then the next column would get a zero and then the next column would get a zero and then look at this, we have our first one bit position.
>
> **[5:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=324)** We can subtract eight from 10 and it gives us a remainder of two.
>
> **[5:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=332)** And so then we work on that remainder, can we subtract four from two?
>
> **[5:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=336)** The answer is no we cannot.
>
> **[5:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=338)** Can we subtract two from two?
>
> **[5:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=340)** The answer is, yes we can and in fact that gives us that zero we're looking for, so that would leave a zero in the last position.
>
> **[5:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=350)** So it turns out that 10 converted to binary is 00001010.
>
> **[5:59](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=359)** And as a matter of fact, let's face it, if we're presenting this to someone and we are not talking about the eight bits, well of course you could just trim off those leading zeros and you could tell them that the binary 1010 is of course equal to 10.
>
> **[6:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=378)** So that's how easy it is to make that conversion from the, in this case, decimal to the binary.
>
> **[6:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=387)** We now want to see an example where we're going to be doing the conversion in the other direction.
>
> **[6:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=396)** All right, so notice we are going to be able to take advantage of our same conversion chart, thank goodness, when we do this and it's really, really simple.
>
> **[6:45](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=405)** Let's say we have 10111101.
>
> **[6:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=410)** So we are presented with this octet in binary, what does it equal in decimal?
>
> **[6:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=417)** Well, all you got to do is look at these one bit positions and just add up those values.
>
> **[7:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=424)** So we would have 128 plus 32 plus 16 plus eight plus four, the zero is in that two position, so we don't add that and then we add one.
>
> **[7:23](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=443)** So that's it, so we just have a big addition challenge here.
>
> **[7:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=447)** So 189, I do believe this number works out to be in decimal.
>
> **[7:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=455)** That conversion chart, as you've seen is going to make it very easy for us to by hand convert from decimal into binary or binary into decimal.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), raise (1), this, (1), for, (1), case, (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### IP addressing structures and functions
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=0)** - [Instructor] Now let's review the required IP addressing components that we're going to find in a typical computer on the network.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=8)** And we know the most important and the one we focus on is the IP address itself.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=16)** Remember, this is identifying our network and our node ID.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=21)** And here we see a 192 168 0 110.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=27)** Example of an IP address.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=30)** Next, we have a subnet mask.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=32)** It's the job of the subnet mask to indicate what bits in the IP address identify the network and what bits identify the host portion of the address.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=43)** Here, you can see a subnet mask of 255.255.255.0.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=50)** And it sure does mean just what you think it might, the network is 192.168.0, and our host ID is 110.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=63)** So you notice what's happening here.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=65)** Everywhere we have the 255 in an octet, sure enough, that represents a portion of our network address.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=74)** And then where we have a zero is our host identifier.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=78)** So the mask of 255.255.255.0 indicates that we're on the 192 168 0 network.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=88)** Isn't it great how that works out.
>
> **[1:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=91)** And now we really understand how the subnet mask is critical.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=95)** And it's going to allow us to determine what is the network that we're on and what is our host identifier?
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=103)** Next is the default gateway IP address.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=106)** The default gateway is so important.
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=108)** It's the local router that your system will send traffic to when the destination IP address you're trying to reach is remote, and requires us to have a router route to that destination.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=121)** So if we're on the 192 168 0 network, let's say and we're trying to communicate with oh, I don't know how about the 10 1010 network.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=131)** While we're going to need a default gateway to route us to that remote network address, then we have our DNS server addresses.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=142)** Remember, DNS is what is going to be doing that name resolution for us.
>
> **[2:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=148)** When we try and get to a network resource using its name.
>
> **[2:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=152)** For example, www.[example.com](https://example.com), DNS will resolve that name to an IP address for us so that we can reach that destination by IP address.
>
> **[2:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=167)** So isn't this interesting, we're specifying the IP addresses of the DNS servers so that those servers can resolve names to IP addresses for us.
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=180)** Here, there's two DNS addresses associated with our computer.
>
> **[3:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=185)** And they're pretty famous, the 8.8.8.8 address, and the 8.8.4.4 addresses.
>
> **[3:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=193)** These are the Google DNS servers.
>
> **[3:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=196)** So these are these public DNS servers located all over the world.
>
> **[3:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=201)** And we might choose to use those for our DNS name resolution if we like.
>
> **[3:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=207)** So let's work with these important addresses that we've learned about in this section by using the ping command at the command line.
>
> **[3:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=217)** A good place for me to start out is with our IP config, forward slash all command.
>
> **[3:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=224)** And this is going to give me all of the details about the IP configuration here of this system.
>
> **[3:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=230)** And we can begin our testing our ping testing by testing the loopback functionality of our system.
>
> **[4:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=241)** So when we do a ping to 127.0.0.1.
>
> **[4:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=248)** This is that internal loopback IP address that we know is built into our system.
>
> **[4:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=255)** And you can see that I sent four ping packets, and you can see that we are receiving all four of those.
>
> **[4:23](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=263)** That's great, we didn't lose any packets, and the total round trip latency time is less than one millisecond.
>
> **[4:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=273)** Now, we would expect that we are pinging our own internal TCP IP functionality.
>
> **[4:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=279)** So of course, this would be very, very fast.
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=283)** So one of the next things that we might test with this packet internet groper or ping utility is can we get to our default gateway?
>
> **[4:54](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=294)** The default gateway is on our network and is that 192 168 01.
>
> **[5:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=300)** So let's try that ping 192.168.0.1.
>
> **[5:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=306)** And yes, we get a very great response time in our four ping packets sent from our default gateway.
>
> **[5:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=315)** What could we test next?
>
> **[5:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=317)** Well, if we look at our output for the IP config, you can see that I'm to be using a DNS server at 209.18.47.61 and sure enough,
>
> **[5:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=336)** we can reach that DNS server.
>
> **[5:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=339)** Notice the total round trip latency is getting worse.
>
> **[5:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=343)** And that's because we now for the first time have just pinged a resource that is not local that is located out on the internet.
>
> **[5:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=352)** But great response time to our DNS server out there on the internet that's great news.
>
> **[5:58](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=358)** Now, can we actually reach some internet destination by friendly name?
>
> **[6:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=365)** Well, let's test that connectivity.
>
> **[6:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=368)** So I will do a ping to none other than www.[linkedin.com](https://linkedin.com).
>
> **[6:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=376)** And look at this, we can reach that resource.
>
> **[6:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=380)** And we have a very low latency connectivity to that resource that is great.
>
> **[6:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=386)** And we can see the IP address that we ended up resolving.
>
> **[6:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=392)** And it wasn't we that did it, it was DNS.
>
> **[6:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=395)** So DNS resolved our www.[linkedin.com](https://linkedin.com) address to the IP 13 107 42 14.
>
> **[6:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=407)** So we've really tested DNS with this Ping.
>
> **[6:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=411)** We've tested our ability to reach some resource out on the internet.
>
> **[6:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=416)** And this really demonstrates how important it is that we know about these IP addresses and of course, how we know how to test reach ability to them.

> [!info]- Semantic Content
>
> **Env Vars:** dns (14), tcp (1)
> **Versions:** 255.255.255 (2), 192.168.0 (2), 8.8.8 (1), 8.8.4 (1), 127.0.0 (1)
> **Code Keywords:** let (5), public (1), this, (1)
> **URLs:** [linkedin.com](https://linkedin.com) (2), [example.com](https://example.com) (1)
> **CLI Commands:** find (1), node (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### IP addressing examples in modern networks
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=0)** - [Instructor] It's pretty amazing how much we've learned about IP addressing already.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=5)** It's also pretty amazing how important all of this is.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=8)** Isn't it for networking today?
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=11)** I thought it would help out, this point for us to just go ahead and take a look at a typical small office, home office network environment and put these IP addressing components in place so we can see them clearly.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=25)** Notice this is really typical.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=26)** We have the internet out there and we have a wireless router that is going to be the key for our small office, home office in order to achieve internet access.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=39)** Inside the small office, home office, we've got a laptop, a network based printer, we've got a computer and we've got a smart device otherwise known as a smart phone.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=51)** So if we drop in the addressing, we can see that all four of these client devices are sure enough in the 192.168.1 network and notice the mask is 255.255.255.0.
>
> **[1:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=73)** So that's how I know this is the 192.168.1 network.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=79)** Notice that each of these devices gets a unique post identifier portion.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=85)** We've got the laptop at the .2 address.
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=89)** We've got the printer at the .5 address.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=93)** The PC at the .3 address and the smartphone at the .4 address.
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=100)** Notice how each of these devices is going to use 192.168.1.1 as the default gateway.
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=109)** And in a moment, we'll see the IP address information on that wireless router, I sure hope it's going to be a 192.168.1.1 and then finally, we can see the DNS values that are in place for all of these systems.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=127)** There is the primary DNS at 8.8.8.8 and then a secondary or alternate DNS at 8.8.4.4.
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=137)** Well, if we drop in the addressing that is in place on the wireless router, we breathe a sigh of relief because yeah, sure enough it has two IP addresses.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=149)** One is for these inside devices to be able to reach and that is 192.168.1.1 and we're not surprised that's the default gateway assignment for all of those internal devices and then we can see there is 203.0.113.10 assigned to the outside interface on that router.
>
> **[2:54](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=174)** This is the connection to the public internet and that is a publicly routable IP address that we have on the outside network for that wireless router.
>
> **[3:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=186)** So I hope this really brings some of this together for you as we see these important IP address components as they would be in place in a typical small office, home office type environment.

> [!info]- Semantic Content
>
> **Versions:** 192.168.1 (5), 255.255.255 (1), 8.8.8 (1), 8.8.4 (1), 203.0.113 (1)
> **Code Keywords:** finally, (1), interface (1), public (1)
> **Env Vars:** dns (3)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Examining IP addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=0)** - [Narrator] Well, here's your chance to show your skills in the area of IP addressing.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=11)** So, here's your challenge.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=13)** You're going to go to the device you're using right now to access this course.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=18)** And you're going to complete the following information for me.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=21)** Your IP address.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=23)** Your subnet mask.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=25)** Your default gateway.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=27)** And your DNS server address or addresses.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=30)** You should shoot to complete this challenge within about five minutes.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=35)** Have fun.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=36)** And remember I'll be back in the next video in order to review a potential solution with you.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Examining IP addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=0)** - [Instructor] So, how did you do?
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=7)** I'm going to go ahead and demonstrate my solution on my Windows system here.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=12)** If you'd like to review the way to do this for another operating system be sure to review the earlier appropriate portion of the videos where we covered this.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=21)** But on a Windows system, I'm going to jump right into the command prompt because I don't think there's any quicker or easier way for me to get this information than to say ipconfig/all.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=36)** And here, we can see the settings for my wireless adapter, in this case, which is how I am reaching the public internet and notice that my IPv4 address is listed here and it's 192.168.0.10 My mask is listed here, and it's 255.255.255.0.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=67)** My default gateway is listed here at 192.168.0.1.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=74)** And then, finally, my DNS servers are listed, 209.18.47.61 and 209.18.47.62.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=85)** So I love ipconfig and then /all at the Windows command prompt as a very, very fast way to obtain the required information we need for our IP address configuration.

> [!info]- Semantic Content
>
> **Versions:** 192.168.0 (2), 209.18.47 (2), 255.255.255 (1)
> **Code Keywords:** this. (1), case, (1), public (1), finally, (1)
> **Tools:** command prompt (2)
> **Env Vars:** dns (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. IP Address Components

#### Classful addressing
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=0)** - [Instructor] When the designers of the TCP/IP suite of protocols began to disseminate the IP addresses, they did so using what is called a classful methodology.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=12)** Here's exactly how they did it.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=13)** They created a class A address range.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=18)** Notice the class A address range goes from 0.0.0.0 up to 127.255.255,255.255.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=28)** They did this by taking those 32 bits and setting the very first bit, the leftmost bit what we call the high order bit, they set that to zero.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=41)** So they preset that bit to zero and this accommodates 128 networks.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=48)** Now a class A address scheme is as you can see, there's few of these relatively, so you've got relatively few networks at 128 but notice each of those networks can accommodate 16 million approximately hosts.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=66)** My goodness, that's a lot of hosts in one of those class A networks.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=72)** The class B range is 128.0.0.0 up to one 191.255.255.255.
>
> **[1:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=82)** The high order bits, the first two bits were preset to 10.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=87)** This made for the ability to create 16,384 networks.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=93)** And each of those networks could roughly 65,000 hosts.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=98)** You see what they were doing here.
>
> **[1:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=99)** Class A IP address schemes were reserved for huge networks.
>
> **[1:45](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=105)** class B, their thought process was medium-sized networks.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=110)** And then the class C is 192.0.0.0 up to 223.255.255.255 and they did this by presetting those high order bits, to 110.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=125)** You can create over 2 million of these networks and each can only contain 256 hosts.
>
> **[2:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=133)** So isn't this interesting that you can now look at your IP address and you can place it into one of these classes.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=142)** For instance, I just checked my IP address 192.168.1.11 and you see that I can clearly tell that this is one of those class C addresses.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=154)** In fact, I'm kind of cheating, aren't I?
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=157)** If it begins with a 192 in the first octet, you know you're class C.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=162)** Now I know what you're wondering.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=164)** Are there any other address classes?
>
> **[2:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=166)** Well, the answer is yes.
>
> **[2:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=168)** There is a class D range and the class D range is really important.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=175)** It runs from 224.0.0.0 to 239.255.255.255.
>
> **[3:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=182)** Notice the high order bits are 1110 and the class D address space is reserved for multicast.
>
> **[3:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=190)** Multicasting is awesome.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=192)** It's a great alternative to broadcasting and with multicasting you are sending data to a group of receivers and as you might guess, those group of receivers are addressed in a particular multicast range.
>
> **[3:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=209)** There's one more address class they defined and that's the class E range.
>
> **[3:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=213)** Notice it's from 240 up to 255.255.255.254.
>
> **[3:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=219)** And the high order bits are set 1111 The class E range is not important.
>
> **[3:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=226)** Yep, we're going to pretty much ignore this range today.
>
> **[3:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=229)** It was set aside for experimental purposes and there's probably no better proof that they didn't think that they would ever run out of addresses by saving so many of the address space they're in reserve for experimental purposes.
>
> **[4:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=247)** Wow.
>
> **[4:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=248)** It looks really wasteful now, doesn't it?
>
> **[4:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=250)** Especially given that we are in an IP address shortage type dilemma.
>
> **[4:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=258)** So these classes are very, very important to understand and it's really critical that we see this how they originally disseminated the address space.

> [!info]- Semantic Content
>
> **Versions:** 0.0.0 (1), 127.255.255 (1), 255.255 (1), 128.0.0 (1), 191.255.255 (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** tcp (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Subnet masks
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=0)** - [Instructor] As we've already seen, the subnet mask is an important component assigned with an IP address.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=7)** This is the tool that permits the identification of the network ID portion of the IP address versus the host ID portion.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=15)** Notice in IPv4 environments you can opt to use a shorthand representation of the subnet mask.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=22)** You just state the forward slash and the number of bits in the subnet mask.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=27)** This is called, prefix notation.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=30)** In IPv6 networks, the prefix notation is all that is used.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=35)** Remember, we'll be examining IPv6 addresses in detail later on.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=41)** Let's examine the default subnet masks that were designed for the Classful IP Addressing System.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=48)** Notice we have for the Class A, a subnet mask of 255.0.0.0.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=57)** This is a /8 mask.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=59)** For the Class B, it's 255.255.0.0 or /16.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=66)** And finally for the Class C, it's 255.255.255.0 or /24.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=75)** How does a computer use the subnet mask?
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=78)** Well, it's actually pretty simple.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=80)** When you go to communicate with a remote IP address, your computer takes your subnet mask and IP address and determines your network ID.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=90)** It then takes your subnet mask and uses it against the remote IP address that you're intending to communicate with.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=97)** If it is discovered that the remote system is on a different network, it knows to send the packets to the default gateway on the network.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=107)** We often extend the subnet mask so that we can create additional subnetworks.
>
> **[1:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=115)** When you increase the length of the mask, you must do so from left to right, and one bit at a time.
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=123)** So for instance, 255.0.0.0 /8 would become 255.128.0.0 or /9.
>
> **[2:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=136)** Extending the mask one more bit, we would have 255.192.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=141)** One more bit or /11 would be 255.224, /12 255.240.
>
> **[2:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=151)** And you can see from there that second octet moves from 248 and then 252 and then 254 and then 255.
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=161)** So our subnet masks are always going to be in these values as we are increasing the length of the mask.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=171)** And it's one bit at a time from left to right.

> [!info]- Semantic Content
>
> **Versions:** 255.0.0 (2), 255.255.0 (1), 255.255.255 (1), 255.128.0 (1), 255.192 (1)
> **Definitions:** is an  (1), is called (1)
> **Code Keywords:** let (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Subnet addressing
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=0)** - Subnetting naturally occurred out of the inflexibility of the class full address system.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=6)** You see, not all networks are going to fit nicely into the small, medium and large groupings that the address classes were invented for.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=14)** Let's say we're wanting to use the 10.0.0.0/8 class A address for our network.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=22)** We want to break our network up into smaller networks with about 50 windows, 10 computers in each network.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=29)** The 10/8 address and mask allows us to address millions of hosts, but they'd all need to be in the same network.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=37)** Thankfully we can sub-net the network.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=40)** It is simple.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=41)** We're going to take the 8-bit mask, which is 255.0.0.0, and we're going to steal bits from the host identification portion of the address.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=52)** For example, we had the 10.0.0.0 with the /8 mask, but if we change that to a /10 mask, we would have 255.192.0.0 for the mask, and we're stealing two bits to create additional networks.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=70)** How many additional networks can we create?
>
> **[1:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=73)** Well, there's a formula for that.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=75)** The formula is the number of networks we can create with our subnet bits.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=80)** So it's 2 raised to the "N" power, and "N" is the number of subnet bits that we stole.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=87)** So we stole two bits so we can define four networks.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=93)** And the four networks are: the 10.0.0.0, the 10.64, the 10.128, and the 10.192 networks.
>
> **[1:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=104)** Those are going to work great.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=106)** Now, why are they those exact values of 10, 0, and then 10.64 and then 10.128 and then 10.192?
>
> **[1:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=115)** Well, as you might guess, it has to do with the underlying binary math.
>
> **[2:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=120)** For now, we're just thrilled that we have the four networks that we need.
>
> **[2:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=124)** Now, how about the number of host systems, like computers, each network can accommodate?
>
> **[2:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=130)** Well, there's a formula for that too. And here it is: 2 raised to the "H" minus 2, where "H" is the number of remaining host bits.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=141)** So, in our example here, we're using 10 bits for network identification, that leaves 22 bits for addressing hosts.
>
> **[2:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=150)** Getting out the scientific calculator, we learn that 2 raised to the 22 minus 2 is 4,194,302 hosts per network. Wow.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=164)** This means that we could steal many more bits in order to create many more networks and still have plenty of hosts per network if we needed to.
>
> **[2:53](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=173)** I guess it's no surprise that we see 10.0.0.0, 255.255.255.0, in so many business networks today.
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=184)** This permits the organization to create plenty of networks that each can accommodate 254 hosts.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=191)** Remember, we arrived at the number 254 by taking 2, raising it to the 8 power, that's how many bits we have for the host addressing, and then subtracting our 2 to get 254.

> [!info]- Semantic Content
>
> **Versions:** 10.0.0 (4), 10.64 (2), 10.128 (2), 10.192 (2), 255.0.0 (1)
> **Code Keywords:** for. (1), let (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - subnetting (1)

#### VLSM
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=0)** - [Instructor] In the last section, we learned how we can steal bits from the host portion of the IP address in order to identify new sub networks.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=9)** We also saw how there is a balance between the number of networks that we can create and the number of hosts that each network can support.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=17)** Variable length sub-net masking or VLSM leverages this principle to the fullest.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=24)** With this approach, you take one of your unused subnets and you further subnet it in order to create more networks and of course, with fewer hosts on each of those networks.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=36)** But that's exactly what you're looking for.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=37)** Going back to our previous example, let's say we've used three of our four networks but not the fourth.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=44)** So you can see the 10.192 network is unused.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=49)** Let's use that one to create even more networks.
>
> **[0:53](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=53)** So I will do 10.192.0.0 with a mask of 255.224.0.0.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=64)** This allows me to create eight new networks and each of these new networks can support about 2 million hosts.
>
> **[1:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=73)** Do you notice what happens very easily with IP addressing, address waste It is often the case that we can accommodate and have reserved far more host IP addresses than we need.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=86)** This is where VLSM can get very powerful, allowing you to design the IP addressing so that it nicely accommodates just the amount of addresses you need in various areas of the network without all the waste.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for. (1)
> **Versions:** 10.192 (1), 10.192.0 (1), 255.224.0 (1)
> **Env Vars:** vlsm (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Broadcast addressing
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=0)** - [Instructor] What about the case where your system needs to send data to every node on the network?
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=6)** We call this a broadcast.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=8)** Thinking of almost everything, the engineers of IP ensured that an address was reserved for the broadcast of traffic to all nodes.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=17)** If we set all bits to one in the IP address, we have 255.255.255.255.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=27)** Of course, what if we want to send a broadcast to a specific network?
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=31)** Well, sure enough all we need to do is set all the host bits to one in the IP address in this case.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=39)** So for example, using a sub-network from the previous lesson, we would use the IP address 10.192.255.255.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=51)** In fact, remember the minus two in the formula for the number of available host addresses in a network?
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=57)** Well, that minus two accounts for the broadcast address where all host bits are set to one, and it also accounts for all zeros in those hosts bits.
>
> **[1:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=69)** When we have all zeros for the host bits, this address identifies the network itself.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=76)** So in our example here, we would have 10.192.0.0 and that represents our sub-network.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=86)** So the minus two was to eliminate the reserved cases where all bits are a one in the host section for a broadcast and all bits are zero to identify the network itself.

> [!info]- Semantic Content
>
> **Versions:** 255.255.255 (1), 10.192.255 (1), 10.192.0 (1)
> **CLI Commands:** node (1)
> **Code Keywords:** case. (1)
> **Definitions:** we call this (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### IPv6 addresses
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=0)** - [Instructor] Remember the IPv6 address is 128 bits in length.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=5)** And it's represented with hexadecimal.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=8)** By default, the mask is 64 bits and we use prefix notation in order to represent it.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=15)** Here's an example of an IPv6 address and mask.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=19)** Notice this address, even with the use of hexadecimal for the presentation of the address, it's still a bit cumbersome.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=27)** As a result, there were two modifications that are permitted with an IPv6 address for representation.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=34)** The first is the most powerful since we'll often end up with several consecutive fields of zeros inside an IPv6 address.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=44)** Notice we have that right in the middle of our address and mask example.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=49)** So once within an address, and only once you can represent this entire section of zeros with a double colon, this really is a valuable feature because we often have IPv6 addresses that are padded with many sections of zeros.
>
> **[1:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=69)** So now our optimized address presentation looks like this.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=75)** And you know, there's really is as we can see a great optimization of how we represent the address but remember now the rules here are very strict.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=84)** All of the bits in the section must be zeros.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=88)** And if you're going to do this, of course representing multiple sections they must be right next to each other.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=95)** And then as we said, finally you can only do this once in the address.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=101)** The second shortcut trick for the representation of an IPv6 address, is that we can trim off any leading zeros from each and every field, in the IPv6 address.
>
> **[1:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=115)** So trimming off all those leading zeros, we now have the following IPv6 address.
>
> **[2:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=122)** Notice, we have used both of the shortcuts in how we can present the address and it is a little bit easier to deal with.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=131)** Now when it comes to moving the world to IPv6, I think it's important that we have a gradual and slow transition.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=141)** In fact, that's exactly how it's being done.
>
> **[2:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=144)** Think about it.
>
> **[2:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=145)** We can't shut down the internet for the weekend as we make this transition, fortunately modern computer nodes support what is termed Dual-Stack Configurations.
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=157)** This means that the device can run IPV4 simultaneously with IPv6.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=164)** As a matter of fact, I bet every device you have, that you've ever accessed this course with at this point is Dual-Stack and is running IPv6, right alongside IPv4.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (1), this. (1), this, (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Env Vars:** ipv4 (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Subnet masks
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=0)** - [Narrator] Are you ready to demonstrate your mastery of IPv4 subnet masks?
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=10)** Well, here's your chance.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=12)** Remember the very next video is me walking you through the solution to the challenge.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=17)** So have no fear if you need to check your work.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=19)** This challenge should take you around 10 minutes to complete.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=24)** So, here's our challenge.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=25)** What's the default subnet mask for the Class B address space?
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=30)** What is the dotted decimal notation representation of the subnet mask in this example?
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=37)** What is the default subnet mask used in IPv6 addressing?
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=42)** And finally, what two parts of the IP address does the subnet mask delineate?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Cross-References:** next video (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Subnet masks
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=0)** - [Instructor] Well how did you do with this challenge regarding subnet masks?
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=10)** Let's take a look at the solutions.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=11)** What is the default subnet mask for the Class B address space?
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=16)** Well we remember in the Class B it's 16 bits, so that's 255.255.0.0.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=26)** What's the dotted decimal notation representation of the subnet mask in this example?
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=33)** And notice we have 172.16.1.0 and the prefix mask is slash 20 so we know that that is eight bits plus eight bits plus four bits, 'cause eight plus eight plus four is going to equal 20.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=55)** So if we do the four bits we have the 128 bit is on the 64 bit is on the 32 bit is on and the 16 bit is on and this gives us our value there in the third octet of 240.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=70)** So slash 20 is 255.255.240.0.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=76)** What is the default subnet mask used in IPv6 addressing?
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=81)** Well we know that's a slash 64 by default.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=85)** And finally what two parts of the IP address does the subnet mask delineate?
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=90)** And of course the subnet mask is critical for distinguishing between the network ID and the host ID.

> [!info]- Semantic Content
>
> **Versions:** 255.255.0 (1), 172.16.1 (1), 255.255.240 (1)
> **Code Keywords:** let (1), default. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. CIDR and Aggregation

#### IP address prefixes
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=0)** - [Narrator] In the early nineties three main problems with IP addressing were identified.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=6)** First, the IP address space for the public was beginning to become very short supply.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=13)** Especially that Class B address space.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=17)** Second, the 32 bit address making up an IP address really started to look inadequate.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=25)** And third, the size of the routing table for the internet, was growing so big as it was really starting to cause major problems.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=35)** A group of really smart engineers were assigned to solve these issues.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=40)** And they came up with something called Classless Inner-Domain Routing, or CIDR.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=47)** And we love to pronounce that simply CIDR.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=51)** CIDR was brought to the forefront to deal with the IP address issue, the shortage.
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=60)** And the size of the internet routing table.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=63)** As far as 32 bits go being inadequate for an IP address, IPv6 was proposed as a fix for that second problem.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=74)** So CIDR marked the end of the classful system of IP addressing.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=80)** And also gave rise to the concept of prefix notation.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=85)** Now, instead of examining IP addresses and their masks for class, there would be a classless system.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=93)** And a simple mask length that would be giving the network bits.
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=100)** For example, if we have 192.168.12.34/27
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=109)** we see that we are using a 27 bit mask for this IP address.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=116)** You got to love that simple prefix notation instead of having to write out that big long subnet mask in the dotted decimal notation.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=127)** Using this system, and the destruction of the class concept for IP addresses, an ISP could provide just the right number of addresses needed by an organization.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=141)** Remember, prior to CIDR the ISP was very limited by the class system.
>
> **[2:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=148)** They might have needed to over-allocate to an organization by giving them a Class B address, or they might need to give them a bunch of Class Cs in order to meet them their needs.
>
> **[2:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=160)** With the Classless Inter-Domain Routing approach, It was far easier for ISPs to allocate public IP addresses as needed.

> [!info]- Semantic Content
>
> **Env Vars:** cidr (5), isp (2)
> **Code Keywords:** public (2), class, (1)
> **Versions:** 192.168.12 (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### IP address aggregation
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=0)** - [Instructor] While the design of classless inner domain routing and IPV6 certainly helped to prevent major issues with IP addressing, a big one really did still remain.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=12)** And this was the size of the internet routing table.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=16)** With individual entries for each and every sub network in the internet, the routing table was growing immensely.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=24)** This was a constant concern when it came to the performance and also the resources that needed to be installed in these internet routers.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=34)** We can combat this problem using route aggregation.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=39)** Route aggregation is also sometimes called route summarization.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=44)** Using this approach, we use a subnet mask that is shorter in order to summarize a large group of systems.
>
> **[0:54](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=54)** It's interesting because we're used to extending the subnet mask or extending the prefix length when we sub-net but here we're doing the opposite.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=64)** We're taking the subnet mask and making it shorter.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=68)** This approach is wonderful and can even be employed inside of our enterprises in order to make our routing tables smaller and more efficient.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=78)** So let's take an example of how this would work.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=81)** Let's say our router has the following networks in its routing table.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=86)** There's one 172.16.1 and then there's dot two all the way up to dot six.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=93)** All of these subnets are /24.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=97)** We can summarize or aggregate that address prefix grouping, so we want to summarize all six of those prefixes and we do this by creating a prefix entry in the router that masks off all the bits that are in common as a way to summarize the entries with a single prefix.
>
> **[1:58](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=118)** In this example, we know that all of the bits are identical in the 172.16 part of each address.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=127)** So we just focus in on the third octet.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=131)** If we convert each of those third octets to binary for each free fix, we get the binary values shown here.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=142)** Notice that for our original six prefixes in the third octet, the binary is identical in the first five bits.
>
> **[2:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=153)** So notice it's 00000 in those first five bits for all of the entries.
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=163)** So a proper summary would be 172.16.1.0
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=172)** with a /21 mask.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=175)** So where does the network address and prefix length come from?
>
> **[3:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=181)** Well the network address is just the first network prefix that we're summarizing.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=187)** So in our case, the network address is 172.16.1.0.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=192)** The prefix length of 21 is from the first eight bits, the second eight bits and then the five bits that we found in common in that third octet.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=206)** So eight plus eight plus five gives us our 21.
>
> **[3:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=211)** You might've noticed that we could have been much more lazy than this.
>
> **[3:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=215)** For example, we could have used 172.16.0.0/16
>
> **[3:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=223)** but notice how this summary could be much too broad for our proper usage.
>
> **[3:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=230)** In fact, this summary is saying that we have knowledge of every prefix that begins with 172.16 and we know from our original routing table that that is just not true.
>
> **[4:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=243)** So when we are performing route aggregation, it is almost always best to be as precise with the summarization as possible.

> [!info]- Semantic Content
>
> **Versions:** 172.16.1 (3), 172.16 (2), 172.16.0 (1)
> **Code Keywords:** let (2), case, (1), this. (1)
> **CLI Commands:** make (1)
> **Env Vars:** ipv6 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: IP address aggregation
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980&t=0)** - [Instructor] In this challenge, you're going to get to show your knowledge in the area of address aggregation with IP.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980&t=13)** I want you to provide the most precise summary IP address that you can for the following prefixes.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980&t=22)** Now, this challenge should only take you about 10 minutes to complete.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980&t=27)** The very next video contains my solution to this problem.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980&t=31)** This will allow you to check your work and to also see how I would go about solving this particular challenge.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: IP address aggregation
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=0)** - [Narrator] Here is my solution to our IP address aggregation challenge.
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=10)** Remember we were to provide the most precise summary IP address for the prefixes shown.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=16)** Here I can clearly see that the variation in the bits is going to pick up in the third octet.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=24)** So I quickly calculate the binary for each of those octets.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=28)** Here you can see those calculations.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=31)** When I look at this, I can see that the first four binary values for each of these prefixes is identical in that third octet.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=40)** This means I can mask those off in the summary.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=44)** So our appropriate summary is 10 dot 10 dot 67 dot zero slash 20.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=52)** That is the first network we are summarizing, the 10 dot 10 dot 67 dot zero network, and the new shortened prefix of 20.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=62)** Remember we arrive at 20 because we have eight bits in the first octet, eight bits in the second octet, all in common, and then the four common bits in the third octet, eight plus eight plus four is 20.
>
> **[1:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=77)** Great work for everyone that solved this challenge, and for those of you that tried and might not have gotten it correctly, great work to you as well.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Special Use Addresses

#### IPv4 to IPv6 translators
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=0)** - [Instructor] There are some nifty tricks for performing translation of IPv4 addresses when these systems need to communicate into an IPv6 only network.
>
> **[0:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=12)** Now I know, I know.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=13)** There's not a lot of IPv6 only networks out there, but there's certainly going to be more and more of those as time goes on.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=22)** One trick is the use of the well-known IPv6 prefix of 64:ff9b,
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=33)** and notice this is a /96 mask.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=37)** The translation scheme makes use of a specialized address format called an IPv4 embedded IPv6 address.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=47)** This type of address contains an IPv4 address inside of the IPv6 address.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=55)** It can be encoded using one of six different formats based on the length of the IPv6 prefix, which is required to be either 32, 40, 48, 56, 64, or 96.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=71)** An example would be 64:ff9b::198.51.100.16.
>
> **[1:23](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=83)** Notice it is so great how the IPv6 address can carry embedded right inside of it the appropriate IPv4 address.

> [!info]- Semantic Content
>
> **Ports:** :198 (1)
> **Versions:** 198.51.100 (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Multicast addressing
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=0)** - [Instructor] Multicasting is a great, great invention.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=4)** Remember, when one device on the network is sending information to another device on the network and it is addressed, the data, specifically for the IP address of that recipient, and only that recipient, this is called unicast transmissions.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=20)** But this would be a nightmare, let's say we had some video stream that we wanted to disseminate to a whole bunch of users on the network.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=30)** If we had to create multiple copies of that video stream and then send each copy directly to a specific machine, this could really burden the network.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=42)** So with multicast addressing, the multicast address range is used on these different systems and then one copy of, let's say, that video stream can be disseminated out and that one copy can be delivered as it makes its way through the network just to those systems that want to receive it.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=66)** Multicasting is often analogous, or often compared to, the broadcast of a television station.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=74)** For those systems that want to tune in to that broadcast, they're able to do so.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=80)** Multicast addressing is supported by IPv4 and IPv6.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=87)** This IPv4 or IPv6 address is used to identify a group of systems.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=94)** A classic example of this might be all of the network interfaces of a bunch of your host systems.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=101)** This portion of the network that a single group covers is known as the group's scope.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=107)** Common scopes for multicast include the node local, this would be the same computer, the link local, which would refer to the same subnet, the site local, which would be applicable to some site, and then global, meaning the entire internet.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=125)** There is an administrative scope that we can use for just about anything in between.
>
> **[2:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=130)** For IPv4, the Class D space has been reserved for supporting multicast.
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=137)** Remember, this space is from 224.0.0.0 to 239.255.255.255.
>
> **[2:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=145)** With 28 bits free, this provides for the possibility of two raise to the 28 host groups.
>
> **[2:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=153)** This comes out to 268,435,456.
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=161)** Notice each host group is an IP address under the multicast scheme.
>
> **[2:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=167)** For IPv6, the prefix ff00::/8 has been reserved for multicast addresses.
>
> **[2:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=176)** And 112 bits are available for holding the group number.
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=180)** How many groups does this provide for?
>
> **[3:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=182)** Well, I don't even know how to pronounce that number, it is so incredibly massive.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=188)** It's two raised to the 112th power.
>
> **[3:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=193)** Yeah, that's a lot of multicast groups that IPv6 can accommodate.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1), is called (1), known as (1)
> **Code Keywords:** let (2), raise (1)
> **Versions:** 224.0.0 (1), 239.255.255 (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### Anycast addressing
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=0)** - [Instructor] An anycast address is a unicast IPv4 or IPv6 address that identifies a different host depending on the location of the client system attempting to reach the anycast address.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=14)** This is a very unique configuration.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=17)** Just think about this.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=18)** You have multiple different machines all having the same IPv4 or IPv6 address.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=25)** This is normally not permitted, but it's exactly what happens with anycast addressing.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=32)** You accomplish this by configuring internet routers to advertise the same unicast routes from multiple locations in the internet.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=40)** An anycast address refers not to a single host remember, but the closest single host that is responding to the anycast address.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=49)** Anycast addressing is used most frequently for finding a computer that provides a common service.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=56)** For example, you might use an anycast approach to provide DNS service using DNS servers scattered all over the globe.

> [!info]- Semantic Content
>
> **Env Vars:** dns (2)
> **Definitions:** is a  (2)
> **Code Keywords:** this. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Some IP Services

#### Introducing DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=0)** - [Instructor] The Dynamic Host Configuration Protocol or DHCP has been a popular method of IP address assignment for a very long time.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=9)** DHCP uses the client server concept.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=13)** An end user device is a classic example of a client while a Linux or Windows server is a classic example of a server.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=21)** The basic operation of this service is simple.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=24)** A client joins the network and lacks the IP address information it needs as there's been no manual configuration of an IP address and the client is set to use DHCP.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=36)** The client broadcasts for a DHCP server.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=40)** The DHCP server responds and provides required information like the IP address, the subnet mask, the default gateway, and the DNS server addresses.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=51)** When we look more closely at the DHCP process, it is actually a four-step process that is famously referred to as the DORA process.
>
> **[1:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=61)** In step one, the client broadcasts a DHCP discover message.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=65)** In step two, the server responds with a DHCP offer message.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=70)** In step three, the client responds with a DHCP request.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=76)** And then in step four, the server responds with a DHCP ack.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=81)** Do you notice how these four messages of discover, offer, request, and ack spell out Dora?
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=88)** The address information that the DHCP server delivers is provided using a lease.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=95)** This lease has a duration.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=97)** The client can attempt to renew the lease but if required the server can allow leases to expire and this makes the address information available for another client.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=107)** Address information is built in what are called DHCP pools.
>
> **[1:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=112)** The DHCP server pulls address information as needed from the pool.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (13), dns (1), dora (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Configuring DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=0)** - Well, when it comes to DHCP settings and configuration I'm sure you're wondering what that's going to exactly look like.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=7)** Well, here we are in a Windows 10 Client settings app.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=11)** And when we come in here and we look at the different options that we have notice one of those is for network and internet.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=20)** Now, you might think that's where you could see your IP address and you would be absolutely correct if we come under properties, and we scroll down, it gives you all the wonderful details about the IP address.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=33)** Look at that, that's on this system.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=35)** Now, one of the things that you may need to do, however is check how the IP assignment is going to be done.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=44)** And notice that's here under IP settings.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=47)** It says we're automatic DHCP.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=50)** If you choose edit, notice you have this go to manual or go to DHCP option.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=56)** So if I were to go to manual, notice it'll allow you to provide the IPv4 and IPv6 address information, but notice the default setting.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=68)** And I'm in that default setting we are going to get our IP address information on this windows machine automatically.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=76)** Thanks to DHCP.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=79)** Now, as we saw from the client perspective things are very easy and things obviously get more complex and a little trickier when you're setting up a DHCP server but it's not that bad at all here on a Windows server.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=94)** As an example, we love this server manager tool that will allow us to go in and manage that device.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=101)** And, but if you go to your local server one of the things that you would be doing typically on the Windows server is you would be going in and you would be taking its DHCP learned address information and you would be changing that so that the address is static because you don't want your DHCP server getting its own IP address via DHCP.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=127)** That would be odd.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=128)** So we go in and we go to properties on the ethernet adapter on the server and you can go to the TCP IP version four properties and you can say, look, don't use the DHCP, use like 172.31.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=149)** 58.194.
>
> **[2:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=152)** And then of course you would enter in your subnet mask.
>
> **[2:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=156)** And I believe in this subnet that would be 255.255.240.0.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=162)** And your default gateway, you would be entering in as well 172.31.58.1.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=171)** And then notice how we can enter the DNS server addresses.
>
> **[2:56](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=176)** So maybe we're using the globally reachable, Google DNS.
>
> **[3:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=182)** So we complete this information.
>
> **[3:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=185)** We say, okay, we close.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=187)** And this network adapter will now have a static IP.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=192)** And once that network adapter has that static IP we can go and configure our DHCP server.
>
> **[3:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=200)** Now, it's pretty funny.
>
> **[3:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=201)** If you look really closely you'll notice I didn't actually change the IPv4 address.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=206)** And that's because if I actually do that I'm going to lose my connection to this server.
>
> **[3:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=211)** So just trust me, we would do that in actual practice.
>
> **[3:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=215)** And then what we're going to do is we're going to go up to the manage option and we're going to choose add roles and features because this is nice in the Microsoft server operating system.
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=227)** We can go in and say that we want to add certain features only when we need them.
>
> **[3:53](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=233)** And DHCP server services is one of those.
>
> **[3:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=237)** So I select it.
>
> **[3:58](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=238)** It says, okay, we have to add these features as well.
>
> **[4:01](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=241)** It warns me about a DHCP assigned address on our network interface card.
>
> **[4:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=248)** That's pretty funny.
>
> **[4:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=249)** We know that's the case and we don't have a problem with that.
>
> **[4:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=252)** We will say that we want to add the optional features that it needs and we can just click right through and click install.
>
> **[4:20](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=260)** And this process won't take long.
>
> **[4:23](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=263)** And when it's done, we're going to have all of the software that would be needed in order to build DHCP server services.
>
> **[4:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=271)** Well, that worked out great things have completed here with the installation and notice they even give you a nice handy link in order to complete the post-install configuration of DHCP.
>
> **[4:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=284)** You got to love this.
>
> **[4:45](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=285)** So it says it's going to create some security groups and do some delegation.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=290)** I say, yep, go ahead and do that.
>
> **[4:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=292)** And it completes that for us.
>
> **[4:54](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=294)** And now we can close and we can close this window as well.
>
> **[4:59](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=299)** And now notice there is a DHCP server listed here.
>
> **[5:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=304)** The configuration of this would be simple.
>
> **[5:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=306)** You can go up to tools, choose DHCP, and this is going to bring up this nice DHCP interface.
>
> **[5:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=314)** And we can see our server there.
>
> **[5:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=316)** We can see the check marks that everything is happy and healthy.
>
> **[5:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=319)** And remember, one of the things that we said we would use is a pool of addresses.
>
> **[5:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=325)** And you create that pool of addresses in a DHCP scope here in Windows so I could say just sample scope and we don't have to give a description.
>
> **[5:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=338)** And then you can set up the starting IP address and the ending IP address pool.
>
> **[5:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=343)** So this is pretty neat.
>
> **[5:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=344)** This is our actual pool of addresses.
>
> **[5:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=347)** So let me just fake some information here.
>
> **[5:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=349)** We could say like, all right, we're going to do 10.10.0.0.
>
> **[5:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=355)** And we're going to give out all the way to 10.10.0.254.
>
> **[6:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=363)** And notice you're going to be setting the subnet mask.
>
> **[6:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=366)** And they let you set that in a nice fashion here where we can use the prefix length.
>
> **[6:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=374)** So I'm going to say 24 bits and it will automatically fill out our subnet mask.
>
> **[6:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=379)** And oops, look at that, I love it.
>
> **[6:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=381)** It sanity checked us and said, yeah, you can't start with the network address itself of zero with that octet.
>
> **[6:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=388)** So that's great that it's going to sanity check this.
>
> **[6:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=391)** Now, let's say there is a 10.10.0.1.
>
> **[6:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=397)** router out there.
>
> **[6:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=398)** So what I can do is I can go in and say, okay, look for that exact starting and ending address.
>
> **[6:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=406)** Let's go ahead and add an exclusion.
>
> **[6:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=409)** So now it won't give out the 10, 10, zero, one address from our pool of addresses, you got to love that.
>
> **[6:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=417)** And then we set our lease duration and then it says, do you want to do any special DHCP options, a very common options that are given out with the address information.
>
> **[7:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=430)** We'll just say, no, we'll configure those later and finish.
>
> **[7:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=433)** And look at that.
>
> **[7:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=435)** We have just created a DHCP scope that has a pool inside it, of addresses to give out.
>
> **[7:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=442)** Now, if you look very closely though you see that there's a little red arrow on the scope so that doesn't look very happy at all.
>
> **[7:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=451)** Notice that you do have to go in and activate the scope.
>
> **[7:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=455)** So we right click, we choose activate.
>
> **[7:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=458)** And now it's going through and activating that scope and making it available for clients that need IP address information on the network.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (20), dns (2), tcp (1)
> **Code Keywords:** let (4), static (3), interface (2), this. (2)
> **Versions:** 10.10.0 (3), 172.31 (1), 58.194 (1), 255.255.240 (1), 172.31.58 (1)
> **UI Navigation:** go to (6), scroll down (1)
> **Prerequisites:** configure (2), install (2), set up (1)
> **Definitions:** is a  (3)
> **Cross-References:** as we saw (1)
> **Speakers:** - well (1)

#### Introducing DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=0)** - [Instructor] While I bet you feel very comfortable and right at home with these IP addresses at this point, there is something that we cannot deny.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=9)** It would be a nightmare to try and memorize even a handful of these addresses for key services we need to access.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=17)** I'm sure you agree with me that it's easier to go to our web browser and go to the address bar and type LinkedIn than it is to know to type 13.107.42.14.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=32)** Of course it is DNS that makes this name resolution and that's how we refer to it possible.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=40)** This stands for the domain name service or domain naming system depending on who you talk to and DNS has that very specific job.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=51)** When it is presented with one of these friendly names like LinkedIn, it serves up a response with the IP address of the device we need to contact.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=62)** As you might guess this is a really big job.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=65)** And fortunately there's DNS servers located all over the globe and most are pre-configured to cooperate with each other.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=74)** For example, a DNS server that does not have a matching name entry can turn right around and forward the request to other DNS servers that might be able to help.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=85)** How does the server itself function you might ask?
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=89)** Well, it really is kind of a database server, name resolutions are stored as records and these records are defined in what is known as a DNS zone.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=101)** Fortunately, there are many different types of DNS records to accommodate our various name resolution needs.
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=108)** For example, we have A records that resolve host names to IPV4 addresses and we have quad A records for resolving a host name to an IPV6 address.
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=123)** We cannot leave out our email servers, they get a special record type for name resolution that is the MX record type.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=131)** In fact, let's move on to the next video where I can show you DNS in action.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), ipv4 (1), ipv6 (1)
> **Code Keywords:** function (1), type. (1), let (1)
> **Definitions:** stands for (1), is a  (1), known as (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **Versions:** 13.107.42 (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Configuring DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=0)** - What about the configuration of DNS?
>
> **[0:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=3)** Well, it's a lot like DHCP.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=5)** It's going to be a bit more challenging on the server side of the equation but both the client and the server configurations are not bad at all.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=15)** So notice here in a Windows 10 client, there's many, many different ways we could access the DNS configuration for this device.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=26)** We know one of them is in the settings and going into the properties of our network connection.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=32)** And here you can see the DNS servers that are going to be utilized by this client.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=39)** Now if we wanted to edit this information of course we could go into the edit as we discussed, we could go to a manual configuration and we could put in the preferred and alternate DNS values but that is not often done because of the fact that we are gaining that information from that wonderful DHCP that we love so much.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=64)** Now I know that we can go in and we could configure DNS ourselves on something like a Linux box or a Windows server but don't forget there's powerful options now for these types of services thanks to Cloud.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=81)** Here you can see I'm logged in to Amazon AWS and they have a wonderful DNS service that is called route 53.
>
> **[1:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=91)** You might be wondering like I was, why the name route 53?
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=95)** Well, the TCP and UDP ports used by DNS are ports 53.
>
> **[1:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=102)** Clever, clever but notice how simple they would make it to configure your DNS server.
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=108)** We can register a domain right through them so we can get our own name like [AnthonySequeira.net](https://AnthonySequeira.net) and we could even transfer a domain, we can create a hosted zone that's going to have all those records that we need.
>
> **[2:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=122)** So lots that can be configured and as you might guess, they make it very, very easy.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=128)** For instance, if we choose create hosted zone and say get started, we're going to give the domain name description, whether it's a public hosted zone or it's going to be totally private.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=141)** And then there's a nice graphical user interface for adding in the records that you're going to have in that zone.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=149)** Let's take a look at one that's completed just so you can get a sense for that.
>
> **[2:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=153)** So I'll actually go over here to the route 53 dashboard.
>
> **[2:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=158)** I've got two hosted zones in here and here's a fun one that I never did anything with but it's the [id10ttech.com](https://id10ttech.com) domain and you can see inside that domain how we have the DNS records.
>
> **[2:54](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=174)** There is a name server records specifying the name servers, there's what's called a Start of Authority Record or SOA record.
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=184)** And this is indicating who's in charge.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=187)** And if I wanted to create a record for just simple routing, I would start that and define a simple record in here maybe it's www dot, or you don't have to put in the dot, it's already there, www.[id10ttech.com](https://id10ttech.com) and then we could link right to something in AWS or we could just say, all right, look, we're going to create a basic a record here pointing to the server.
>
> **[3:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=218)** So you would input the appropriate IP address, let's just make one up and then you could set again the exact type of record.
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=227)** We often use C name records for the worldwide web prefix there and then we could set the time to live value and then define our simple record.
>
> **[3:58](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=238)** So DNS server configurations are made much simpler today especially if we're leveraging something like the power of Cloud.

> [!info]- Semantic Content
>
> **Env Vars:** dns (10), dhcp (2), aws (2), tcp (1), udp (1)
> **CLI Commands:** make (3), aws (2)
> **Code Keywords:** let (2), public (1), private (1), interface (1)
> **URLs:** [id10ttech.com](https://id10ttech.com) (2), [anthonysequeira.net](https://anthonysequeira.net) (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** configure (2)
> **Cross-References:** we discussed (1)
> **UI Navigation:** go to (1)

#### RFC 1918 addressing
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=0)** - [Instructor] Two technology additions to IPV 4 that made a huge difference in stemming the IPV4 address shortage that the world was quickly facing was the RFC1918 private IP address space and network address translation, or NAT.
>
> **[0:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=19)** NAT lets us translate these private addresses into public Internet routable IPV4 source addresses.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=29)** In order to define IP addresses that can be used privately inside the enterprises, as we said, the standards makers took various classes of addresses, and they actually reclaimed them from the Internet.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=43)** And then they use these to define the private use address space.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=47)** Here are the RFC1918 private address spaces that were defined.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=52)** Notice there's the entire 10 range.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=55)** This is the 10/8 prefix.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=57)** There's 172.16 to 172.31.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=62)** And then that goes all the way up to 255.255.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=65)** So that's known as the 172.16/12 prefix.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=71)** And then finally there's 192.168.0.0 all the way up to 192.168.255.255.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=79)** This we call the 192.168/16 prefix.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=85)** Notice the idea here was simple and followed the logic of the original address classes.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=90)** For small offices in home networks, there could be the Class C private address space.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=95)** For medium-sized networks, they define the Class B, and for large enterprise networks, the 10.x address space, the Class A could be used.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=106)** If you're watching this course while connected to the Internet, chances are you have an RFC1918 address on your local machine.
>
> **[1:54](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=114)** This address is translated by a NAT device so that your device can communicate on the public Internet.

> [!info]- Semantic Content
>
> **Env Vars:** rfc1918 (3), nat (3), ipv4 (2), ipv (1)
> **Code Keywords:** private (5), public (2)
> **Versions:** 172.16 (2), 172.31 (1), 255.255 (1), 192.168.0 (1), 192.168.255 (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Introducing NAT
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=0)** - [Instructor] Network address translation certainly has an interesting history.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=4)** By the way, you'll often see it as N-A-T, but we don't pronounce it that way we call it NAT.
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=10)** While it was originally looked upon as a temporary bandage for the address shortage that IPV4 was facing in the world, it quickly gain ground as a technology that could be very useful in its own right.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=24)** First, let us talk about the original idea and use case.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=28)** If we have all the private networks in the world adopt the RFC 1918 private IP address space, then this would free up massive numbers of public IP addresses for use on the public internet.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=42)** And sure enough, this solution worked and worked well.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=46)** By the way, it's called RFC 1918 private IP addressing because there's a request for comments document and it's numbered 1918 that specified this idea.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=59)** You can do a Google search on RFC 1918 and you can read the original document.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=66)** It's very readable and it's somewhat enjoyable if you're a tech nerd like me.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=72)** Systems in the private enterprise would be numbered with RFC 1918 addresses, note that the specific RFC 1918 ranges are a very little interest in this case.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=84)** And these systems would still be able to communicate on the public internet by having their private source IP addresses translated into addresses that are valid for communication on the internet.
>
> **[1:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=99)** As mentioned earlier, NAT has proven more useful than it was originally designed to be.
>
> **[1:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=104)** For example, your enterprise might find that critical to permit the merger and eventual renumbering of your network when it merges with another network that your company might have recently acquired.
>
> **[1:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=117)** Now as you might guess, ordinarily this is where I would walk you through the configuration of network address translations but the great news is in the small office home office with that router that we have, providing internet access and also providing wireless access, there's nothing to configure.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=138)** The network address translation intelligence is built right into the device and it is doing it for us automatically.
>
> **[2:28](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=148)** Now of course, there are scenarios where perhaps you'll be configuring a really big, really important router at a service provider or maybe even one in your enterprise network and there you would need to manually do a NAT configuration but that's a bit above the scope of this presentation.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=171)** But if you're so brave as to be interested in that, you can certainly find great training on that here in the LinkedIn learning library where there are plenty of advanced networking courses on Cisco equipment and Juniper equipment.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=187)** And you'll find plenty of examples of these advanced NAT configurations.

> [!info]- Semantic Content
>
> **Code Keywords:** private (5), public (3), case. (2), let (1)
> **Env Vars:** rfc (5), nat (4), ipv4 (1)
> **Documentation:** rfc (5)
> **CLI Commands:** find (3)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Challenge: IP services
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=0)** - [Narrator] Here's another fun challenge for you to ensure that you are really doing great learning this material.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=11)** This challenge should take you under five minutes to complete.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=15)** Notice you're going to match the DHCP terms on the left with the correct definitions on the right.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=23)** So, you'll be finding a place for request, discover, lease, pool, and offer.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=31)** Good luck.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=32)** Next, you're going to match these DNS terms with the correct definition.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=39)** Notice we have zone, MX, AAAA, and CNAME.
>
> **[0:45](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=45)** Finally, you need to list the RFC 1918 private IP address ranges.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=51)** I hope you had fun in those exercises.
>
> **[0:53](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=53)** And please join me in the next video so I can discuss the solution.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (1), dns (1), aaaa (1), cname (1), rfc (1)
> **Code Keywords:** finally, (1), private (1)
> **Cross-References:** in the next (1)
> **Documentation:** rfc (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: IP services
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=0)** - [Instructor] So, how did you do on this challenge?
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=8)** In this first one, we had to match the DHCP terms with the correct definitions.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=14)** So what I do in something like this is I'll pick what I think would be the easiest one to recognize, like a lease.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=22)** And of course that's the amount of time a client can possess the IP address information, just like a car lease.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=29)** The next easiest one I think I would be able to get is discover.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=33)** And this is, of course, sent by the client to locate a DHCP server.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=39)** The next one, I think, that would be pretty easy is pool.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=42)** And so this is, of course, used to configure DHCP in the network.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=48)** And then I would move to offer, which is sent by the DHCP server.
>
> **[0:53](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=53)** And that leaves request, sent by the client in response to an offer.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=59)** Match the DNS terms with the correct definition.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=62)** Well, pretty easy here.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=64)** We just have to review those common DNS records that we might have, like MX is a mail server record, the AAAA is an IPv6 host record, a CNAME is an alias record, and finally, all of these records are stored in what's called a DNS zone.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=84)** Remember the RFC 1918 private IP address ranges.
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=89)** So important to be able to quickly recognize a private use only address.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=94)** The class A range was the 10.x, we like to call it, because it's just 10. and then followed by anything is the appropriate Class A.
>
> **[1:44](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=104)** And then the Class B ranges were 172.16 to 172.31 And then 255.255, of course, and then finally the Class C range was 192.168.0.0 Up to 192.168.255.255.
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=123)** Like I said, very, very important to be able to pick those out when you're looking at IP traffic with IP addresses attached because you want to be able to really tell what has that private use only source addressing.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (4), dns (3), aaaa (1), cname (1), rfc (1)
> **Versions:** 172.16 (1), 172.31 (1), 255.255 (1), 192.168.0 (1), 192.168.255 (1)
> **Code Keywords:** private (3), finally, (1)
> **Definitions:** is an  (2), is a  (1)
> **Documentation:** rfc (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=0)** - [Anthony] We've reached the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=2)** By now you've learned the details of the IPv4 and IPv6 addresses and their meaning.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=9)** You've learned more advanced IP addressing concepts, such as VLSM and CIDR.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=15)** You've learned of the various critical IP address components, like subnet masks and default gateways and DNS server addresses, and the important related services, like DNS, DHCP, and NAT.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=30)** But there's so much more to learn.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=33)** Here are some additional steps to keep going.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=35)** Perhaps you want to keep practicing.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=37)** You should consider creating or improving your network documentation around the details of IP addressing in your own space, whether that's at home or at work.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=48)** Finally, you should consider moving to more advanced networking courses here in the LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Env Vars:** dns (2), vlsm (1), cidr (1), dhcp (1), nat (1)
> **Code Keywords:** finally, (1)
> **Analogies:** such as (1)
> **Speakers:** - [anthony] (1)


## Path Context

### In [[Network Administration- Build Core Skills for Network Management and Security]]
← [[Networking Foundations Networking Basics]] | **2 of 6** | [[Networking Foundations- Local Area Networks (LANs)]] →

### In [[Networking and Administration Fundamentals]]
← [[Networking Foundations Networking Basics]] | **4 of 10** | [[Server Administration Essential Training]] →

## Appears In

- [[Network Administration- Build Core Skills for Network Management and Security]]
- [[Networking and Administration Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- IP Addressing]] — IP Addressing
