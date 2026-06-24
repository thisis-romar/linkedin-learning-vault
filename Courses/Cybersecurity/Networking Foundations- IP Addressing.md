---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEBmjDcG5jG-Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615489458811?e=2147483647&amp;v=beta&amp;t=J3OLKeP8vzk1rYNNRew4BuCE0hM7K5iCyumpZZVjM04"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Network Administration- Build Core Skills for Network Management and Security](../../Paths/Cybersecurity/Learning%20Paths/Network%20Administration-%20Build%20Core%20Skills%20for%20Network%20Management%20and%20Security.md)'
  - '[Networking and Administration Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Networking%20and%20Administration%20Fundamentals.md)'
prev_courses:
  - '[Networking Foundations Networking Basics](../Network%20and%20System%20Administration/Networking%20Foundations%20Networking%20Basics.md)'
  - '[Networking Foundations Networking Basics](../Network%20and%20System%20Administration/Networking%20Foundations%20Networking%20Basics.md)'
next_courses:
  - '[Networking Foundations- Local Area Networks (LANs)](Networking%20Foundations-%20Local%20Area%20Networks%20(LANs).md)'
  - '[Server Administration Essential Training](../Cloud%20Computing/Server%20Administration%20Essential%20Training.md)'
path_nav: '[{"path":"Network Administration- Build Core Skills for Network Management and Security","position":2,"total":6,"prev":"Networking Foundations Networking Basics","next":"Networking Foundations- Local Area Networks (LANs)"},{"path":"Networking and Administration Fundamentals","position":4,"total":10,"prev":"Networking Foundations Networking Basics","next":"Server Administration Essential Training"}]'
path_count: 2
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - topic/cloud-computing
  - skill/ip-addressing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Networking%20Foundations-%20IP%20Addressing.md)

![Networking Foundations: IP Addressing](https://media.licdn.com/dms/image/v2/C4E0DAQEBmjDcG5jG-Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615489458811?e=2147483647&amp;v=beta&amp;t=J3OLKeP8vzk1rYNNRew4BuCE0hM7K5iCyumpZZVjM04)

# Networking Foundations: IP Addressing

> The IP address is a fundamental building block for a functioning modern network. In this course, instructor Anthony Sequeira explains the basics of IP addressing, the components of an IP address, aggregation, and more. Anthony begins by describing what the IP address does and why it is critical in a successful network. He goes into the structure of IPv4 and IPv6 addresses. Anthony shows you how to

> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020) | 1h 32m | Intermediate | 296K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Welcome to this course](#welcome-to-this-course)
  - [What you should know](#what-you-should-know)
- [**1. IP Addressing Basics**](#1-ip-addressing-basics) (6 videos)
  - [The IP address and its purpose](#the-ip-address-and-its-purpose)
  - [Expressing IP addresses](#expressing-ip-addresses)
  - [IP addressing structures and functions](#ip-addressing-structures-and-functions)
  - [IP addressing examples in modern networks](#ip-addressing-examples-in-modern-networks)
  - [Challenge: Examining IP addresses](#challenge-examining-ip-addresses)
  - [Solution: Examining IP addresses](#solution-examining-ip-addresses)
- [**2. IP Address Components**](#2-ip-address-components) (8 videos)
  - [Classful addressing](#classful-addressing)
  - [Subnet masks](#subnet-masks)
  - [Subnet addressing](#subnet-addressing)
  - [VLSM](#vlsm)
  - [Broadcast addressing](#broadcast-addressing)
  - [IPv6 addresses](#ipv6-addresses)
  - [Challenge: Subnet masks](#challenge-subnet-masks)
  - [Solution: Subnet masks](#solution-subnet-masks)
- [**3. CIDR and Aggregation**](#3-cidr-and-aggregation) (4 videos)
  - [IP address prefixes](#ip-address-prefixes)
  - [IP address aggregation](#ip-address-aggregation)
  - [Challenge: IP address aggregation](#challenge-ip-address-aggregation)
  - [Solution: IP address aggregation](#solution-ip-address-aggregation)
- [**4. Special Use Addresses**](#4-special-use-addresses) (3 videos)
  - [IPv4 to IPv6 translators](#ipv4-to-ipv6-translators)
  - [Multicast addressing](#multicast-addressing)
  - [Anycast addressing](#anycast-addressing)
- [**5. Some IP Services**](#5-some-ip-services) (8 videos)
  - [Introducing DHCP](#introducing-dhcp)
  - [Configuring DHCP](#configuring-dhcp)
  - [Introducing DNS](#introducing-dns)
  - [Configuring DNS](#configuring-dns)
  - [RFC 1918 addressing](#rfc-1918-addressing)
  - [Introducing NAT](#introducing-nat)
  - [Challenge: IP services](#challenge-ip-services)
  - [Solution: IP services](#solution-ip-services)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to this course](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/welcome-to-this-course?u=76281980&t=0)** - [Anthony] If you're interested in working in the information technology field in any capacity. Then learning the details of IPv4 and IPv6 addressing is a must. The cloud dominated world of today has placed even more of an emphasis on TCPIP and networking systems than ever before. In this course we're going to begin building a solid foundation of networking by breaking down how the IPv4 and IPv6 address are formed. And what information they convey. We're also going to ensure you can work with these addresses comfortably. Regardless of your operating system. And we'll cover the services that make these IP addresses so functional and valuable for us. Such as the [DHCP](../../Glossary/Standard/DHCP.md) and DNS services. Hi, I'm Anthony Sequeira. I'm a Cisco certified CCIE. And I've been working in information technology since 1996. So, join me in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course as we get past the fear of the complexity of the [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) system. Yes, there will be some math but I promise you'll love it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Env Vars:** tcpip (1), dhcp (1), dns (1), ccie (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [anthony] (1)

#### [What you should know](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a foundational course. So we're going to be approaching this from a beginner's perspective. However, there are a few things that might be helpful to know before we start learning about [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md). First, it'd be helpful to understand basic networking concepts such as servers and clients. Next, you should understand basic operating system concepts such as remote management and local administration. And finally, you should understand some of the fundamentals behind internet technologies like HTTP and web browsing. If you need to brush up on any of those topics, check out some of the courses here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. If you're all set, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Analogies:** such as (2)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)


### 1. IP Addressing Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [The IP address and its purpose](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=0)** - [Instructor] Your modern computing device uses many addresses to be able to properly communicate on the network to other devices and services. But certainly one of the most important addresses is the internet protocol or IP address. You have an IP address or many IP addresses on your modern computer and this IP address will also come with a subnet mask. It'll also be associated with other very important IP addresses like the default gateway IP address and the DNS IP address. As we'll see later in the course, the IP address in subnet mask on your system define a lot. They define what network you're located on and they also define what is your particular host identification number. A nice common analogy that works well is to compare this to your street address and your house number. The street address is like the network and your house number is like the host identifier. Or an IP address can easily be compared to a US telephone number. In the United States system, there's one component that's called an area code and then there's the phone number. The area code would convey the network in our example. So the subnet mask tells us what portion of the IP address is our street address and the subnet mask also indicates
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=94)** what portion of the IP address identifies our house number to use of course, the house and the street name and house number analogy from earlier. In order to make this as practical as possible, let's demonstrate how easy it is to find your IP address, your subnet mask and your default gateway address. Don't stress out if you don't know what each of these components is. That's a big part of this course. You will leave this course with a rich understanding of these various IP addresses and their functions. Let's take the two most popular desktop operating systems in the world, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) [Windows](../../Glossary/Service/Windows.md) and the Apple macOS. And let's determine how to learn the relevant IP address information using both the graphical user interface and the command line interface on each of these two different operating systems. And just to really drive the point home, we'll also look at this information on an iPhone. So let's begin on the Mac. And if we go into system preferences, there is this network athlete right here. And if you struggle to find it by scanning with your eyes like I do, then you can go to the Search Remember. Let's click here, and if we go into the graphical user interface here, it's really pretty cool you can see the different options that I would have for making network connections and you can see I'm currently connected via [WiFi](../../Glossary/Standard/Wi-Fi.md) Now notice right here is this advanced button.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=191)** So if I click Advanced, it's going to show me the advanced properties for that connection. In this case, it's WiFi. These are different networks around me that I could potentially connect to. This is the TCP IP settings that we're interested in. And notice that we are using something called [DHCP](../../Glossary/Standard/DHCP.md) to get the IP address onto this system. And the IPV4 address that I have currently received is 172.20.6.50. So when speaking to another network engineer I would simply go, "yeah, my IPV4 address is 172.20.6.50 and I would just use those dramatic pauses to indicate the decimal values that are in each of those octets later on. Notice the sub-debt mass 255 255 240, and then zero, and then the router which is the default gateway of 172.20.0.1. So all that information that we might need regarding the IPV4 addressing for this client is right here inside the graphical user interface, thanks to the network app in the advanced properties of in my case, the WiFi connection we can see our IPV4 address,
>
> **[4:45](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=285)** the sub-net mask that goes without address and the default gateway. Now I must admit when I need my IP address information quickly on the Mac, I would not go into system preferences and use the graphical user interface. Instead I would bring up a terminal window and I would simply type ifconfig and we hit Enter and we can see the IP address information for all of the interfaces on our device all of the network interfaces. So if I highlight this one right here we can see the en0 interface is the interface that is going to be associated with the wireless card on this laptop. And look at this, the inet address is 172.20.6.50, We'll get that right there. There's the address and the net mask is presented to us here in hexadecimal format. You can see the broadcast for the network we're on is 172.20.15.255. Also interesting here is that when you first look at the output, there's this loop back zero right here. This is a internal virtual interface and it's for testing purposes. So if we ever just want to like quickly go in and test that our own IP is functioning properly,
>
> **[6:21](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=381)** we can ping our internal loop back address at 127.0.0.1. I would love to see you see the official count of the number of ways we can find our IP address on a windows system and the graphical user interface. There would be lots of ways that you could do this. Here you can see we're going very old school and if you go to the network and sharing center, here we can see there's our connection. And if I go to change adapter settings, we can see my WiFi adapter right here and if we go into the Properties of that WiFi adapter, there is the IP version for setting here. And if we look at the properties of that, we can see that we're set to obtain our IP address automatically and get our DNS information automatically from a DHCP server. And we'll be covering that a detail later on. But the question here is, what is our IP address? We're still not seeing that. So if I just right click and go to Status, we're getting closer. Here we can see the information about the WiFi connection, and if we go to the details here, there we have it. We can see the IP address and subnet mask as well as the DHCP server address, and the DNS servers and the default gateway and all those important IP address information components. for a long time,
>
> **[7:57](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/the-ip-address-and-its-purpose?u=76281980&t=477)** even folks that are non-technical like my father, he has looked at his smartphone and he's realized that his smartphone is really a computer in his pocket. And sure enough, just like one of our Mac systems or our windows systems, our iPhone or [Android](../../Glossary/Sdk/Android.md) phone or whatever kind of phone that we're using is going to have an IP address. So here you can see me once I enter the settings, I'm going to go ahead and select the option for my WiFi connection. And when I go into that WiFi connection, notice that there is an eye icon that's where you're getting more information. If I select that eye icon, I'm going to go into the information about this WiFi connection and look at that underneath the IPV4 address section you can see that, we are configured on this iPhone to receive our IP address information from a DHCP server automatically, and that I've gotten the IP address of 192 168 040 with a 255 255 255 255 mask and a default gateway at 192 168 0 1.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (9), [DHCP](../../Glossary/Standard/DHCP.md) (4), [Windows](../../Glossary/Service/Windows.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Android](../../Glossary/Sdk/Android.md) (1)
> **Env Vars:** ipv4 (5), dhcp (4), dns (3), tcp (1)
> **Versions:** 172.20.6 (3), 172.20.0 (1), 172.20.15 (1), 127.0.0 (1)
> **UI Navigation:** go to (5), select the (1)
> **CLI Commands:** find (3), make (1)
> **Code Identifiers:** iphone (3), macos (1)
> **Tools:** command line (1), terminal (1)
> **Definitions:** is a  (1), is an  (1)

#### [Expressing IP addresses](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=0)** - [Instructor] So we know that the IP address is critical for being able to send and receive data on the network. We know this address dictates our network assignment and also describes our host ID. We represent both IPv4 and IPv6 addresses in a format that we humans are comfortable with. For example, let's consider the dotted decimal notation of an IPv4 address. The computer sees this 32 bit address in its binary form though. We know that the computers love binary where we have a zero or a one bit setting. Now there's eight bits in each section of the IP address. So because each of these sections are going to consist of eight bits, these sections are named octets. Sadly, when the designers of IPv4 were planning the address space, they never dreamed of the popularity that IP in the internet would bring. So sure enough, we're essentially out of IPv4 address space that can be assigned to companies. This really helped speed up the development of the next generation IP technology called IPv6. In IPv6, the 128 bit IPv6 address is presented in hexadecimal as we can see here.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=97)** Now, there are two shortcuts you can use with IPv6 addresses in order to shorten them. First, you can substitute consecutive fields that consist of only zeros with a colon colon. Please note though, you can only do this once within the address. Now you can also trim leading zeros from any field and you can do this as many times as you like. So if we were to apply both of these techniques to our IPv6 address, we would get the shortened IPv6 address. Notice we've trimmed all the leading zeros from fields and once within the address, we represented those two fields of all zeros with our colon colon trick. Now let me show you just how easy it is to convert from decimal to binary and vice versa. This is actually an important skill when you're learning to work with IP addresses and we'll see reasons why this is true later on in the course. So what I do in order to be able to convert from binary to decimal or vice versa is I use a handy little conversion chart. And in fact, I like to make this chart on my scratch paper before I start a certification exam so that I can use the chart to answer these types of questions. So here's how this works.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=189)** On the first row of the chart, I write down two raised to the seven and then six and then five and then four and then three and two and one and zero. So we have two raised to the zero all the way up to two raised to the seventh. So that's the first row of my conversion chart and then underneath that row, I'm going to put the values. Now, two raise to the zero power, it turns out anything raised to the zero power simply gets a value of one and then we have two raised to the first which is the value itself of two and then two raised to the second is four. In fact, you can quickly fill out this row by just doubling the value as you move from right to left. So one, two, four, eight, 16, 32, 64 and 128. So there is the conversion chart in all of its glory and this makes it very, very simple to do these conversions. Let's take an example of, oh let's say inside of one of our octets, we have the number 10 in decimal, what is that in binary? Well, when you take a look at the bits inside of an octet and this table right here represents those eight bits
>
> **[4:47](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=287)** inside of an octet, so when we look at that, we just say, "Okay, can I subtract the decimal value here of 128 from the number we are trying to convert?" And the answer is no we can't and so that bit position gets a zero. Can we subtract 64 and not have a negative number or a zero? And the answer is no we can't, so that has a zero. And then the next column would get a zero and then the next column would get a zero and then look at this, we have our first one bit position. We can subtract eight from 10 and it gives us a remainder of two. And so then we work on that remainder, can we subtract four from two? The answer is no we cannot. Can we subtract two from two? The answer is, yes we can and in fact that gives us that zero we're looking for, so that would leave a zero in the last position. So it turns out that 10 converted to binary is 00001010. And as a matter of fact, let's face it, if we're presenting this to someone and we are not talking about the eight bits, well of course you could just trim off those leading zeros and you could tell them that the binary 1010 is of course equal to 10. So that's how easy it is to make that conversion
>
> **[6:22](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/expressing-ip-addresses?u=76281980&t=382)** from the, in this case, decimal to the binary. We now want to see an example where we're going to be doing the conversion in the other direction. All right, so notice we are going to be able to take advantage of our same conversion chart, thank goodness, when we do this and it's really, really simple. Let's say we have 10111101. So we are presented with this octet in binary, what does it equal in decimal? Well, all you got to do is look at these one bit positions and just add up those values. So we would have 128 plus 32 plus 16 plus eight plus four, the zero is in that two position, so we don't add that and then we add one. So that's it, so we just have a big addition challenge here. So 189, I do believe this number works out to be in decimal. That conversion chart, as you've seen is going to make it very easy for us to by hand convert from decimal into binary or binary into decimal.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [IP addressing structures and functions](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=0)** - [Instructor] Now let's review the required [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) components that we're going to find in a typical computer on the network. And we know the most important and the one we focus on is the IP address itself. Remember, this is identifying our network and our node ID. And here we see a 192 168 0 110. Example of an IP address. Next, we have a subnet mask. It's the job of the subnet mask to indicate what bits in the IP address identify the network and what bits identify the host portion of the address. Here, you can see a subnet mask of 255.255.255.0. And it sure does mean just what you think it might, the network is 192.168.0, and our host ID is 110.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=63)** So you notice what's happening here. Everywhere we have the 255 in an octet, sure enough, that represents a portion of our network address. And then where we have a zero is our host identifier. So the mask of 255.255.255.0 indicates that we're on the 192 168 0 network. Isn't it great how that works out. And now we really understand how the subnet mask is critical. And it's going to allow us to determine what is the network that we're on and what is our host identifier? Next is the default gateway IP address. The default gateway is so important. It's the local router that your system will send traffic to when the destination IP address you're trying to reach is remote, and requires us to have a router route to that destination. So if we're on the 192 168 0 network, let's say and we're trying to communicate with oh, I don't know how about the 10 1010 network. While we're going to need a default gateway to route us to that remote network address, then we have our DNS server addresses. Remember, DNS is what is going to be doing that name resolution for us. When we try and get to a network resource using its name. For example, www.[example.com](https://example.com), DNS will resolve that name to an IP address for us
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=162)** so that we can reach that destination by IP address. So isn't this interesting, we're specifying the IP addresses of the DNS servers so that those servers can resolve names to IP addresses for us. Here, there's two DNS addresses associated with our computer. And they're pretty famous, the 8.8.8.8 address, and the 8.8.4.4 addresses. These are the [Google](../../Glossary/Service/Google.md) DNS servers. So these are these public DNS servers located all over the world. And we might choose to use those for our DNS name resolution if we like. So let's work with these important addresses that we've learned about in this section by using the ping command at the command line. A good place for me to start out is with our IP config, forward slash all command. And this is going to give me all of the details about the IP configuration here of this system. And we can begin our testing our ping testing by testing the loopback functionality of our system. So when we do a ping to 127.0.0.1. This is that internal loopback IP address that we know is built into our system.
>
> **[4:15](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=255)** And you can see that I sent four ping packets, and you can see that we are receiving all four of those. That's great, we didn't lose any packets, and the total round trip latency time is less than one millisecond. Now, we would expect that we are pinging our own internal TCP IP functionality. So of course, this would be very, very fast. So one of the next things that we might test with this packet internet groper or ping utility is can we get to our default gateway? The default gateway is on our network and is that 192 168 01. So let's try that ping 192.168.0.1. And yes, we get a very great response time in our four ping packets sent from our default gateway. What could we test next? Well, if we look at our output for the IP config, you can see that I'm to be using a DNS server at 209.18.47.61 and sure enough,
>
> **[5:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=336)** we can reach that DNS server. Notice the total round trip latency is getting worse. And that's because we now for the first time have just pinged a resource that is not local that is located out on the internet. But great response time to our DNS server out there on the internet that's great news. Now, can we actually reach some internet destination by friendly name? Well, let's test that connectivity. So I will do a ping to none other than www.[linkedin.com](https://linkedin.com).
>
> **[6:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-structures-and-functions?u=76281980&t=376)** And look at this, we can reach that resource. And we have a very low latency connectivity to that resource that is great. And we can see the IP address that we ended up resolving. And it wasn't we that did it, it was DNS. So DNS resolved our www.[linkedin.com](https://linkedin.com) address to the IP 13 107 42 14. So we've really tested DNS with this Ping. We've tested our ability to reach some resource out on the internet. And this really demonstrates how important it is that we know about these IP addresses and of course, how we know how to test reach ability to them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** dns (14), tcp (1)
> **Versions:** 255.255.255 (2), 192.168.0 (2), 8.8.8 (1), 8.8.4 (1), 127.0.0 (1)
> **URLs:** [linkedin.com](https://linkedin.com) (2), [example.com](https://example.com) (1)
> **CLI Commands:** find (1), node (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [IP addressing examples in modern networks](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=0)** - [Instructor] It's pretty amazing how much we've learned about [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) already. It's also pretty amazing how important all of this is. Isn't it for networking today? I thought it would help out, this point for us to just go ahead and take a look at a typical small [office](../../Skills/Web%20Development/Microsoft%20Office.md), home office network environment and put these IP addressing components in place so we can see them clearly. Notice this is really typical. We have the internet out there and we have a wireless router that is going to be the key for our small office, home office in order to achieve internet access. Inside the small office, home office, we've got a laptop, a network based printer, we've got a computer and we've got a smart device otherwise known as a smart phone. So if we drop in the addressing, we can see that all four of these client devices are sure enough in the 192.168.1 network and notice the mask is 255.255.255.0. So that's how I know this is the 192.168.1 network. Notice that each of these devices gets a unique post identifier portion. We've got the laptop at the .2 address. We've got the printer at the .5 address. The PC at the .3 address
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=96)** and the smartphone at the .4 address. Notice how each of these devices is going to use 192.168.1.1 as the default gateway. And in a moment, we'll see the IP address information on that wireless router, I sure hope it's going to be a 192.168.1.1 and then finally, we can see the DNS values that are in place for all of these systems. There is the primary DNS at 8.8.8.8 and then a secondary or alternate DNS at 8.8.4.4. Well, if we drop in the addressing that is in place on the wireless router, we breathe a sigh of relief because yeah, sure enough it has two IP addresses. One is for these inside devices to be able to reach and that is 192.168.1.1 and we're not surprised that's the default gateway assignment for all of those internal devices and then we can see there is 203.0.113.10 assigned to the outside interface on that router. This is the connection to the public internet and that is a publicly routable IP address that we have on the outside network for that wireless router. So I hope this really brings some of this together for you
>
> **[3:10](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-addressing-examples-in-modern-networks?u=76281980&t=190)** as we see these important IP address components as they would be in place in a typical small office, home office type environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (8), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (2)
> **Versions:** 192.168.1 (5), 255.255.255 (1), 8.8.8 (1), 8.8.4 (1), 203.0.113 (1)
> **Env Vars:** dns (3)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Examining IP addresses](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-examining-ip-addresses?u=76281980&t=0)** - [Narrator] Well, here's your chance to show your skills in the area of [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md). So, here's your challenge. You're going to go to the device you're using right now to access this course. And you're going to complete the following information for me. Your IP address. Your subnet mask. Your default gateway. And your DNS server address or addresses. You should shoot to complete this challenge within about five minutes. Have fun. And remember I'll be back in the next video in order to review a potential solution with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Env Vars:** dns (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Examining IP addresses](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=0)** - [Instructor] So, how did you do? I'm going to go ahead and demonstrate my solution on my [Windows](../../Glossary/Service/Windows.md) system here. If you'd like to review the way to do this for another operating system be sure to review the earlier appropriate portion of the videos where we covered this. But on a Windows system, I'm going to jump right into the command prompt because I don't think there's any quicker or easier way for me to get this information than to say ipconfig/all. And here, we can see the settings for my wireless adapter, in this case, which is how I am reaching the public internet and notice that my IPv4 address is listed here and it's 192.168.0.10 My mask is listed here, and it's 255.255.255.0. My default gateway is listed here at 192.168.0.1. And then, finally, my DNS servers are listed, 209.18.47.61 and 209.18.47.62. So I love ipconfig and then /all at the Windows command prompt as a very, very fast way
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-examining-ip-addresses?u=76281980&t=95)** to obtain the required information we need for our IP address configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3)
> **Versions:** 192.168.0 (2), 209.18.47 (2), 255.255.255 (1)
> **Tools:** command prompt (2)
> **Env Vars:** dns (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. IP Address Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Classful addressing](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=0)** - [Instructor] When the designers of the TCP/IP suite of protocols began to disseminate the IP addresses, they did so using what is called a classful methodology. Here's exactly how they did it. They created a class A address range. Notice the class A address range goes from 0.0.0.0 up to 127.255.255,255.255. They did this by taking those 32 bits and setting the very first bit, the leftmost bit what we call the high order bit, they set that to zero. So they preset that bit to zero and this accommodates 128 networks. Now a class A address scheme is as you can see, there's few of these relatively, so you've got relatively few networks at 128 but notice each of those networks can accommodate 16 million approximately hosts. My goodness, that's a lot of hosts in one of those class A networks. The class B range is 128.0.0.0 up to one 191.255.255.255. The high order bits, the first two bits were preset to 10. This made for the ability to create 16,384 networks. And each of those networks could roughly 65,000 hosts.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=98)** You see what they were doing here. Class A IP address schemes were reserved for huge networks. class B, their thought process was medium-sized networks. And then the class C is 192.0.0.0 up to 223.255.255.255 and they did this by presetting those high order bits, to 110. You can create over 2 million of these networks and each can only contain 256 hosts. So isn't this interesting that you can now look at your IP address and you can place it into one of these classes. For instance, I just checked my IP address 192.168.1.11 and you see that I can clearly tell that this is one of those class C addresses. In fact, I'm kind of cheating, aren't I? If it begins with a 192 in the first octet, you know you're class C. Now I know what you're wondering. Are there any other address classes? Well, the answer is yes. There is a class D range and the class D range is really important. It runs from 224.0.0.0 to 239.255.255.255. Notice the high order bits are 1110 and the class D address space is reserved for multicast. Multicasting is awesome.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/classful-addressing?u=76281980&t=192)** It's a great alternative to broadcasting and with multicasting you are sending data to a group of receivers and as you might guess, those group of receivers are addressed in a particular multicast range. There's one more address class they defined and that's the class E range. Notice it's from 240 up to 255.255.255.254. And the high order bits are set 1111 The class E range is not important. Yep, we're going to pretty much ignore this range today. It was set aside for experimental purposes and there's probably no better proof that they didn't think that they would ever run out of addresses by saving so many of the address space they're in reserve for experimental purposes. Wow. It looks really wasteful now, doesn't it? Especially given that we are in an IP address shortage type dilemma. So these classes are very, very important to understand and it's really critical that we see this how they originally disseminated the address space.

> [!info]- Semantic Content
>
> **Versions:** 0.0.0 (1), 127.255.255 (1), 255.255 (1), 128.0.0 (1), 191.255.255 (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** tcp (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Subnet masks](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=0)** - [Instructor] As we've already seen, the subnet mask is an important component assigned with an IP address. This is the tool that permits the identification of the network ID portion of the IP address versus the host ID portion. Notice in IPv4 environments you can opt to use a shorthand representation of the subnet mask. You just state the forward slash and the number of bits in the subnet mask. This is called, prefix notation. In IPv6 networks, the prefix notation is all that is used. Remember, we'll be examining IPv6 addresses in detail later on. Let's examine the default subnet masks that were designed for the Classful [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) System. Notice we have for the Class A, a subnet mask of 255.0.0.0. This is a /8 mask. For the Class B, it's 255.255.0.0 or /16. And finally for the Class C, it's 255.255.255.0 or /24. How does a computer use the subnet mask? Well, it's actually pretty simple. When you go to communicate with a remote IP address, your computer takes your subnet mask and IP address and determines your network ID. It then takes your subnet mask
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-masks?u=76281980&t=92)** and uses it against the remote IP address that you're intending to communicate with. If it is discovered that the remote system is on a different network, it knows to send the packets to the default gateway on the network. We often extend the subnet mask so that we can create additional subnetworks. When you increase the length of the mask, you must do so from left to right, and one bit at a time. So for instance, 255.0.0.0 /8 would become 255.128.0.0 or /9. Extending the mask one more bit, we would have 255.192. One more bit or /11 would be 255.224, /12 255.240. And you can see from there that second octet moves from 248 and then 252 and then 254 and then 255. So our subnet masks are always going to be in these values as we are increasing the length of the mask. And it's one bit at a time from left to right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Versions:** 255.0.0 (2), 255.255.0 (1), 255.255.255 (1), 255.128.0 (1), 255.192 (1)
> **Definitions:** is an  (1), is called (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Subnet addressing](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=0)** - Subnetting naturally occurred out of the inflexibility of the class full address system. You see, not all networks are going to fit nicely into the small, medium and large groupings that the address classes were invented for. Let's say we're wanting to use the 10.0.0.0/8 class A address for our network. We want to break our network up into smaller networks with about 50 [Windows](../../Glossary/Service/Windows.md), 10 computers in each network. The 10/8 address and mask allows us to address millions of hosts, but they'd all need to be in the same network. Thankfully we can sub-net the network. It is simple. We're going to take the 8-bit mask, which is 255.0.0.0, and we're going to steal bits from the host identification portion of the address. For example, we had the 10.0.0.0 with the /8 mask, but if we change that to a /10 mask, we would have 255.192.0.0 for the mask, and we're stealing two bits to create additional networks. How many additional networks can we create? Well, there's a formula for that. The formula is the number of networks we can create with our subnet bits. So it's 2 raised to the "N" power, and "N" is the number of subnet bits that we stole. So we stole two bits so we can define four networks. And the four networks are:
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=95)** the 10.0.0.0, the 10.64, the 10.128, and the 10.192 networks. Those are going to work great. Now, why are they those exact values of 10, 0, and then 10.64 and then 10.128 and then 10.192? Well, as you might guess, it has to do with the underlying binary math. For now, we're just thrilled that we have the four networks that we need. Now, how about the number of host systems, like computers, each network can accommodate? Well, there's a formula for that too. And here it is: 2 raised to the "H" minus 2, where "H" is the number of remaining host bits. So, in our example here, we're using 10 bits for network identification, that leaves 22 bits for addressing hosts. Getting out the scientific calculator, we learn that 2 raised to the 22 minus 2 is 4,194,302 hosts per network. Wow. This means that we could steal many more bits in order to create many more networks and still have plenty of hosts per network if we needed to. I guess it's no surprise that we see 10.0.0.0, 255.255.255.0, in so many business networks today. This permits the organization to create plenty of networks that each can accommodate 254 hosts.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/subnet-addressing?u=76281980&t=191)** Remember, we arrived at the number 254 by taking 2, raising it to the 8 power, that's how many bits we have for the host addressing, and then subtracting our 2 to get 254.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **Versions:** 10.0.0 (4), 10.64 (2), 10.128 (2), 10.192 (2), 255.0.0 (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - subnetting (1)

#### [VLSM](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=0)** - [Instructor] In the last section, we learned how we can steal bits from the host portion of the IP address in order to identify new sub networks. We also saw how there is a balance between the number of networks that we can create and the number of hosts that each network can support. Variable length sub-net masking or VLSM leverages this principle to the fullest. With this approach, you take one of your unused subnets and you further subnet it in order to create more networks and of course, with fewer hosts on each of those networks. But that's exactly what you're looking for. Going back to our previous example, let's say we've used three of our four networks but not the fourth. So you can see the 10.192 network is unused. Let's use that one to create even more networks. So I will do 10.192.0.0 with a mask of 255.224.0.0. This allows me to create eight new networks and each of these new networks can support about 2 million hosts. Do you notice what happens very easily with [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md), address waste It is often the case that we can accommodate and have reserved far more host IP addresses than we need. This is where VLSM can get very powerful, allowing you to design the IP addressing so that it nicely accommodates
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/vlsm?u=76281980&t=94)** just the amount of addresses you need in various areas of the network without all the waste.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (2)
> **Versions:** 10.192 (1), 10.192.0 (1), 255.224.0 (1)
> **Env Vars:** vlsm (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Broadcast addressing](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=0)** - [Instructor] What about the case where your system needs to send data to every node on the network? We call this a broadcast. Thinking of almost everything, the engineers of IP ensured that an address was reserved for the broadcast of traffic to all nodes. If we set all bits to one in the IP address, we have 255.255.255.255. Of course, what if we want to send a broadcast to a specific network? Well, sure enough all we need to do is set all the host bits to one in the IP address in this case. So for example, using a sub-network from the previous lesson, we would use the IP address 10.192.255.255. In fact, remember the minus two in the formula for the number of available host addresses in a network? Well, that minus two accounts for the broadcast address where all host bits are set to one, and it also accounts for all zeros in those hosts bits. When we have all zeros for the host bits, this address identifies the network itself. So in our example here, we would have 10.192.0.0 and that represents our sub-network. So the minus two was to eliminate the reserved cases where all bits are a one in the host section for a broadcast
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/broadcast-addressing?u=76281980&t=96)** and all bits are zero to identify the network itself.

> [!info]- Semantic Content
>
> **Versions:** 255.255.255 (1), 10.192.255 (1), 10.192.0 (1)
> **CLI Commands:** node (1)
> **Definitions:** we call this (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 addresses](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=0)** - [Instructor] Remember the IPv6 address is 128 bits in length. And it's represented with hexadecimal. By default, the mask is 64 bits and we use prefix notation in order to represent it. Here's an example of an IPv6 address and mask. Notice this address, even with the use of hexadecimal for the presentation of the address, it's still a bit cumbersome. As a result, there were two modifications that are permitted with an IPv6 address for representation. The first is the most powerful since we'll often end up with several consecutive fields of zeros inside an IPv6 address. Notice we have that right in the middle of our address and mask example. So once within an address, and only once you can represent this entire section of zeros with a double colon, this really is a valuable feature because we often have IPv6 addresses that are padded with many sections of zeros. So now our optimized address presentation looks like this. And you know, there's really is as we can see a great optimization of how we represent the address but remember now the rules here are very strict. All of the bits in the section must be zeros. And if you're going to do this, of course representing multiple sections
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv6-addresses?u=76281980&t=93)** they must be right next to each other. And then as we said, finally you can only do this once in the address. The second shortcut trick for the representation of an IPv6 address, is that we can trim off any leading zeros from each and every field, in the IPv6 address. So trimming off all those leading zeros, we now have the following IPv6 address. Notice, we have used both of the shortcuts in how we can present the address and it is a little bit easier to deal with. Now when it comes to moving the world to IPv6, I think it's important that we have a gradual and slow transition. In fact, that's exactly how it's being done. Think about it. We can't shut down the internet for the weekend as we make this transition, fortunately modern computer nodes support what is termed Dual-Stack Configurations. This means that the device can run IPV4 simultaneously with IPv6. As a matter of fact, I bet every device you have, that you've ever accessed this course with at this point is Dual-Stack and is running IPv6, right alongside IPv4.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Env Vars:** ipv4 (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Subnet masks](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-subnet-masks?u=76281980&t=0)** - [Narrator] Are you ready to demonstrate your mastery of IPv4 subnet masks? Well, here's your chance. Remember the very next video is me walking you through the solution to the challenge. So have no fear if you need to check your work. This challenge should take you around 10 minutes to complete. So, here's our challenge. What's the default subnet mask for the Class B address space? What is the dotted decimal notation representation of the subnet mask in this example? What is the default subnet mask used in IPv6 addressing? And finally, what two parts of the IP address does the subnet mask delineate?

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Subnet masks](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=0)** - [Instructor] Well how did you do with this challenge regarding subnet masks? Let's take a look at the solutions. What is the default subnet mask for the Class B address space? Well we remember in the Class B it's 16 bits, so that's 255.255.0.0. What's the dotted decimal notation representation of the subnet mask in this example? And notice we have 172.16.1.0 and the prefix mask is slash 20 so we know that that is eight bits plus eight bits plus four bits, 'cause eight plus eight plus four is going to equal 20. So if we do the four bits we have the 128 bit is on the 64 bit is on the 32 bit is on and the 16 bit is on and this gives us our value there in the third octet of 240. So slash 20 is 255.255.240.0. What is the default subnet mask used in IPv6 addressing? Well we know that's a slash 64 by default. And finally what two parts of the IP address does the subnet mask delineate? And of course the subnet mask is critical for distinguishing
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-subnet-masks?u=76281980&t=95)** between the network ID and the host ID.

> [!info]- Semantic Content
>
> **Versions:** 255.255.0 (1), 172.16.1 (1), 255.255.240 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. CIDR and Aggregation

[↑ Back to Table of Contents](#table-of-contents)

#### [IP address prefixes](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=0)** - [Narrator] In the early nineties three main problems with [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) were identified. First, the IP address space for the public was beginning to become very short supply. Especially that Class B address space. Second, the 32 bit address making up an IP address really started to look inadequate. And third, the size of the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table for the internet, was growing so big as it was really starting to cause major problems. A group of really smart engineers were assigned to solve these issues. And they came up with something called Classless Inner-Domain Routing, or CIDR. And we love to pronounce that simply CIDR. CIDR was brought to the forefront to deal with the IP address issue, the shortage. And the size of the internet routing table. As far as 32 bits go being inadequate for an IP address, IPv6 was proposed as a fix for that second problem. So CIDR marked the end of the classful system of IP addressing. And also gave rise to the concept of prefix notation. Now, instead of examining IP addresses and their masks for class, there would be a classless system.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=93)** And a simple mask length that would be giving the network bits. For example, if we have 192.168.12.34/27
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-prefixes?u=76281980&t=109)** we see that we are using a 27 bit mask for this IP address. You got to love that simple prefix notation instead of having to write out that big long subnet mask in the dotted decimal notation. Using this system, and the destruction of the class concept for IP addresses, an ISP could provide just the right number of addresses needed by an organization. Remember, prior to CIDR the ISP was very limited by the class system. They might have needed to over-allocate to an organization by giving them a Class B address, or they might need to give them a bunch of Class Cs in order to meet them their needs. With the Classless Inter-Domain Routing approach, It was far easier for ISPs to allocate public IP addresses as needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (4), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (2)
> **Env Vars:** cidr (5), isp (2)
> **Versions:** 192.168.12 (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [IP address aggregation](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=0)** - [Instructor] While the design of classless inner domain [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and IPV6 certainly helped to prevent major issues with [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md), a big one really did still remain. And this was the size of the internet routing table. With individual entries for each and every sub network in the internet, the routing table was growing immensely. This was a constant concern when it came to the performance and also the resources that needed to be installed in these internet routers. We can combat this problem using route aggregation. Route aggregation is also sometimes called route summarization. Using this approach, we use a subnet mask that is shorter in order to summarize a large group of systems. It's interesting because we're used to extending the subnet mask or extending the prefix length when we sub-net but here we're doing the opposite. We're taking the subnet mask and making it shorter. This approach is wonderful and can even be employed inside of our enterprises in order to make our routing tables smaller and more efficient. So let's take an example of how this would work. Let's say our router has the following networks in its routing table. There's one 172.16.1 and then there's dot two all the way up to dot six. All of these subnets are /24.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=97)** We can summarize or aggregate that address prefix grouping, so we want to summarize all six of those prefixes and we do this by creating a prefix entry in the router that masks off all the bits that are in common as a way to summarize the entries with a single prefix. In this example, we know that all of the bits are identical in the 172.16 part of each address. So we just focus in on the third octet. If we convert each of those third octets to binary for each free fix, we get the binary values shown here. Notice that for our original six prefixes in the third octet, the binary is identical in the first five bits. So notice it's 00000 in those first five bits for all of the entries. So a proper summary would be 172.16.1.0
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=172)** with a /21 mask. So where does the network address and prefix length come from? Well the network address is just the first network prefix that we're summarizing. So in our case, the network address is 172.16.1.0. The prefix length of 21 is from the first eight bits, the second eight bits and then the five bits that we found in common in that third octet. So eight plus eight plus five gives us our 21. You might've noticed that we could have been much more lazy than this. For example, we could have used 172.16.0.0/16
>
> **[3:43](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ip-address-aggregation?u=76281980&t=223)** but notice how this summary could be much too broad for our proper usage. In fact, this summary is saying that we have knowledge of every prefix that begins with 172.16 and we know from our original routing table that that is just not true. So when we are performing route aggregation, it is almost always best to be as precise with the summarization as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (6), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Versions:** 172.16.1 (3), 172.16 (2), 172.16.0 (1)
> **CLI Commands:** make (1)
> **Env Vars:** ipv6 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: IP address aggregation](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-address-aggregation?u=76281980&t=0)** - [Instructor] In this challenge, you're going to get to show your knowledge in the area of address aggregation with IP. I want you to provide the most precise summary IP address that you can for the following prefixes. Now, this challenge should only take you about 10 minutes to complete. The very next video contains my solution to this problem. This will allow you to check your work and to also see how I would go about solving this particular challenge.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: IP address aggregation](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-address-aggregation?u=76281980&t=0)** - [Narrator] Here is my solution to our IP address aggregation challenge. Remember we were to provide the most precise summary IP address for the prefixes shown. Here I can clearly see that the variation in the bits is going to pick up in the third octet. So I quickly calculate the binary for each of those octets. Here you can see those calculations. When I look at this, I can see that the first four binary values for each of these prefixes is identical in that third octet. This means I can mask those off in the summary. So our appropriate summary is 10 dot 10 dot 67 dot zero slash 20. That is the first network we are summarizing, the 10 dot 10 dot 67 dot zero network, and the new shortened prefix of 20. Remember we arrive at 20 because we have eight bits in the first octet, eight bits in the second octet, all in common, and then the four common bits in the third octet, eight plus eight plus four is 20. Great work for everyone that solved this challenge, and for those of you that tried and might not have gotten it correctly, great work to you as well.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Special Use Addresses

[↑ Back to Table of Contents](#table-of-contents)

#### [IPv4 to IPv6 translators](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=0)** - [Instructor] There are some nifty tricks for performing translation of IPv4 addresses when these systems need to communicate into an IPv6 only network. Now I know, I know. There's not a lot of IPv6 only networks out there, but there's certainly going to be more and more of those as time goes on. One trick is the use of the well-known IPv6 prefix of 64:ff9b,
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/ipv4-to-ipv6-translators?u=76281980&t=33)** and notice this is a /96 mask. The translation scheme makes use of a specialized address format called an IPv4 embedded IPv6 address. This type of address contains an IPv4 address inside of the IPv6 address. It can be encoded using one of six different formats based on the length of the IPv6 prefix, which is required to be either 32, 40, 48, 56, 64, or 96.
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

#### [Multicast addressing](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=0)** - [Instructor] Multicasting is a great, great invention. Remember, when one device on the network is sending information to another device on the network and it is addressed, the data, specifically for the IP address of that recipient, and only that recipient, this is called unicast transmissions. But this would be a nightmare, let's say we had some video stream that we wanted to disseminate to a whole bunch of users on the network. If we had to create multiple copies of that video stream and then send each copy directly to a specific machine, this could really burden the network. So with multicast addressing, the multicast address range is used on these different systems and then one copy of, let's say, that video stream can be disseminated out and that one copy can be delivered as it makes its way through the network just to those systems that want to receive it. Multicasting is often analogous, or often compared to, the broadcast of a television station. For those systems that want to tune in to that broadcast, they're able to do so. Multicast addressing is supported by IPv4 and IPv6. This IPv4 or IPv6 address is used to identify a group of systems.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=94)** A classic example of this might be all of the network interfaces of a bunch of your host systems. This portion of the network that a single group covers is known as the group's scope. Common scopes for multicast include the node local, this would be the same computer, the link local, which would refer to the same subnet, the site local, which would be applicable to some site, and then global, meaning the entire internet. There is an administrative scope that we can use for just about anything in between. For IPv4, the Class D space has been reserved for supporting multicast. Remember, this space is from 224.0.0.0 to 239.255.255.255. With 28 bits free, this provides for the possibility of two raise to the 28 host groups. This comes out to 268,435,456. Notice each host group is an IP address under the multicast scheme. For IPv6, the prefix ff00::/8 has been reserved for multicast addresses. And 112 bits are available for holding the group number. How many groups does this provide for? Well, I don't even know how to pronounce that number, it is so incredibly massive.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/multicast-addressing?u=76281980&t=188)** It's two raised to the 112th power. Yeah, that's a lot of multicast groups that IPv6 can accommodate.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1), is called (1), known as (1)
> **Versions:** 224.0.0 (1), 239.255.255 (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [Anycast addressing](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/anycast-addressing?u=76281980&t=0)** - [Instructor] An anycast address is a unicast IPv4 or IPv6 address that identifies a different host depending on the location of the client system attempting to reach the anycast address. This is a very unique configuration. Just think about this. You have multiple different machines all having the same IPv4 or IPv6 address. This is normally not permitted, but it's exactly what happens with anycast addressing. You accomplish this by configuring internet routers to advertise the same unicast routes from multiple locations in the internet. An anycast address refers not to a single host remember, but the closest single host that is responding to the anycast address. Anycast addressing is used most frequently for finding a computer that provides a common service. For example, you might use an anycast approach to provide DNS service using DNS servers scattered all over the globe.

> [!info]- Semantic Content
>
> **Env Vars:** dns (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Some IP Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing DHCP](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=0)** - [Instructor] The [Dynamic Host Configuration Protocol](../../Glossary/Standard/DHCP.md) or [DHCP](../../Glossary/Standard/DHCP.md) has been a popular method of IP address assignment for a very long time. DHCP uses the client server concept. An end user device is a classic example of a client while a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) is a classic example of a server. The basic operation of this service is simple. A client joins the network and lacks the IP address information it needs as there's been no manual configuration of an IP address and the client is set to use DHCP. The client broadcasts for a DHCP server. The DHCP server responds and provides required information like the IP address, the subnet mask, the default gateway, and the DNS server addresses. When we look more closely at the DHCP process, it is actually a four-step process that is famously referred to as the DORA process. In step one, the client broadcasts a DHCP discover message. In step two, the server responds with a DHCP offer message. In step three, the client responds with a DHCP request. And then in step four, the server responds with a DHCP ack. Do you notice how these four messages of discover, offer, request, and ack spell out Dora? The address information that the DHCP server delivers is provided using a lease.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dhcp?u=76281980&t=95)** This lease has a duration. The client can attempt to renew the lease but if required the server can allow leases to expire and this makes the address information available for another client. Address information is built in what are called DHCP pools. The DHCP server pulls address information as needed from the pool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (13), [Dynamic host configuration protocol](../../Glossary/Standard/DHCP.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Env Vars:** dhcp (13), dns (1), dora (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Configuring DHCP](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=0)** - Well, when it comes to [DHCP](../../Glossary/Standard/DHCP.md) settings and configuration I'm sure you're wondering what that's going to exactly look like. Well, here we are in a [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) Client settings app. And when we come in here and we look at the different options that we have notice one of those is for network and internet. Now, you might think that's where you could see your IP address and you would be absolutely correct if we come under properties, and we scroll down, it gives you all the wonderful details about the IP address. Look at that, that's on this system. Now, one of the things that you may need to do, however is check how the IP assignment is going to be done. And notice that's here under IP settings. It says we're automatic DHCP. If you choose edit, notice you have this go to manual or go to DHCP option. So if I were to go to manual, notice it'll allow you to provide the IPv4 and IPv6 address information, but notice the default setting. And I'm in that default setting we are going to get our IP address information on this [Windows](../../Glossary/Service/Windows.md) machine automatically. Thanks to DHCP. Now, as we saw from the client perspective things are very easy and things obviously get more complex and a little trickier when you're setting up a DHCP server but it's not that bad at all here on a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md). As an example, we love this server manager tool
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=98)** that will allow us to go in and manage that device. And, but if you go to your local server one of the things that you would be doing typically on the Windows server is you would be going in and you would be taking its DHCP learned address information and you would be changing that so that the address is static because you don't want your DHCP server getting its own IP address via DHCP. That would be odd. So we go in and we go to properties on the ethernet adapter on the server and you can go to the TCP IP version four properties and you can say, look, don't use the DHCP, use like 172.31. 58.194. And then of course you would enter in your subnet mask. And I believe in this subnet that would be 255.255.240.0. And your default gateway, you would be entering in as well 172.31.58.1. And then notice how we can enter the DNS server addresses. So maybe we're using the globally reachable, [Google](../../Glossary/Service/Google.md) DNS. So we complete this information. We say, okay, we close. And this network adapter will now have a static IP. And once that network adapter has that static IP
>
> **[3:16](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=196)** we can go and configure our DHCP server. Now, it's pretty funny. If you look really closely you'll notice I didn't actually change the IPv4 address. And that's because if I actually do that I'm going to lose my connection to this server. So just trust me, we would do that in actual practice. And then what we're going to do is we're going to go up to the manage option and we're going to choose add roles and features because this is nice in the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) server operating system. We can go in and say that we want to add certain features only when we need them. And DHCP server services is one of those. So I select it. It says, okay, we have to add these features as well. It warns me about a DHCP assigned address on our [network interface card](../../Glossary/Concept/NIC.md). That's pretty funny. We know that's the case and we don't have a problem with that. We will say that we want to add the optional features that it needs and we can just click right through and click install. And this process won't take long. And when it's done, we're going to have all of the software that would be needed in order to build DHCP server services. Well, that worked out great things have completed here with the installation and notice they even give you a nice handy link in order to complete the post-install configuration of DHCP. You got to love this. So it says it's going to create some security groups and do some delegation.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=290)** I say, yep, go ahead and do that. And it completes that for us. And now we can close and we can close this window as well. And now notice there is a DHCP server listed here. The configuration of this would be simple. You can go up to tools, choose DHCP, and this is going to bring up this nice DHCP interface. And we can see our server there. We can see the check marks that everything is happy and healthy. And remember, one of the things that we said we would use is a pool of addresses. And you create that pool of addresses in a DHCP scope here in Windows so I could say just sample scope and we don't have to give a description. And then you can set up the starting IP address and the ending IP address pool. So this is pretty neat. This is our actual pool of addresses. So let me just fake some information here. We could say like, all right, we're going to do 10.10.0.0. And we're going to give out all the way to 10.10.0.254. And notice you're going to be setting the subnet mask. And they let you set that in a nice fashion here where we can use the prefix length. So I'm going to say 24 bits and it will automatically fill out our subnet mask. And oops, look at that, I love it. It sanity checked us and said, yeah, you can't start
>
> **[6:25](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dhcp?u=76281980&t=385)** with the network address itself of zero with that octet. So that's great that it's going to sanity check this. Now, let's say there is a 10.10.0.1. router out there. So what I can do is I can go in and say, okay, look for that exact starting and ending address. Let's go ahead and add an exclusion. So now it won't give out the 10, 10, zero, one address from our pool of addresses, you got to love that. And then we set our lease duration and then it says, do you want to do any special DHCP options, a very common options that are given out with the address information. We'll just say, no, we'll configure those later and finish. And look at that. We have just created a DHCP scope that has a pool inside it, of addresses to give out. Now, if you look very closely though you see that there's a little red arrow on the scope so that doesn't look very happy at all. Notice that you do have to go in and activate the scope. So we right click, we choose activate. And now it's going through and activating that scope and making it available for clients that need IP address information on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (20), [Windows](../../Glossary/Service/Windows.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** dhcp (20), dns (2), tcp (1)
> **Versions:** 10.10.0 (3), 172.31 (1), 58.194 (1), 255.255.240 (1), 172.31.58 (1)
> **UI Navigation:** go to (6), scroll down (1)
> **Prerequisites:** configure (2), install (2), set up (1)
> **Definitions:** is a  (3)
> **Cross-References:** as we saw (1)
> **Speakers:** - well (1)

#### [Introducing DNS](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=0)** - [Instructor] While I bet you feel very comfortable and right at home with these IP addresses at this point, there is something that we cannot deny. It would be a nightmare to try and memorize even a handful of these addresses for key services we need to access. I'm sure you agree with me that it's easier to go to our web browser and go to the address bar and type [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) than it is to know to type 13.107.42.14. Of course it is DNS that makes this name resolution and that's how we refer to it possible. This stands for the domain name service or domain naming system depending on who you talk to and DNS has that very specific job. When it is presented with one of these friendly names like LinkedIn, it serves up a response with the IP address of the device we need to contact. As you might guess this is a really big job. And fortunately there's DNS servers located all over the globe and most are pre-configured to cooperate with each other. For example, a DNS server that does not have a matching name entry can turn right around and forward the request to other DNS servers that might be able to help. How does the server itself function you might ask? Well, it really is kind of a database server, name resolutions are stored as records
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-dns?u=76281980&t=95)** and these records are defined in what is known as a DNS zone. Fortunately, there are many different types of DNS records to accommodate our various name resolution needs. For example, we have A records that resolve host names to IPV4 addresses and we have quad A records for resolving a host name to an IPV6 address. We cannot leave out our email servers, they get a special record type for name resolution that is the MX record type. In fact, let's move on to the next video where I can show you DNS in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2)
> **Env Vars:** dns (8), ipv4 (1), ipv6 (1)
> **Definitions:** stands for (1), is a  (1), known as (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **Versions:** 13.107.42 (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Configuring DNS](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=0)** - What about the configuration of DNS? Well, it's a lot like [DHCP](../../Glossary/Standard/DHCP.md). It's going to be a bit more challenging on the server side of the equation but both the client and the server configurations are not bad at all. So notice here in a [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) client, there's many, many different ways we could access the DNS configuration for this device. We know one of them is in the settings and going into the properties of our network connection. And here you can see the DNS servers that are going to be utilized by this client. Now if we wanted to edit this information of course we could go into the edit as we discussed, we could go to a manual configuration and we could put in the preferred and alternate DNS values but that is not often done because of the fact that we are gaining that information from that wonderful DHCP that we love so much. Now I know that we can go in and we could configure DNS ourselves on something like a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) box or a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) but don't forget there's powerful options now for these types of services thanks to Cloud. Here you can see I'm logged in to Amazon AWS and they have a wonderful DNS service that is called route 53. You might be wondering like I was, why the name route 53?
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=95)** Well, the TCP and UDP ports used by DNS are ports 53. Clever, clever but notice how simple they would make it to configure your DNS server. We can register a domain right through them so we can get our own name like [AnthonySequeira.net](https://AnthonySequeira.net) and we could even transfer a domain, we can create a hosted zone that's going to have all those records that we need. So lots that can be configured and as you might guess, they make it very, very easy. For instance, if we choose create hosted zone and say get started, we're going to give the domain name description, whether it's a public hosted zone or it's going to be totally private. And then there's a nice graphical user interface for adding in the records that you're going to have in that zone. Let's take a look at one that's completed just so you can get a sense for that. So I'll actually go over here to the route 53 dashboard. I've got two hosted zones in here and here's a fun one that I never did anything with but it's the [id10ttech.com](https://id10ttech.com) domain and you can see inside that domain how we have the DNS records. There is a name server records specifying the name servers, there's what's called a Start of Authority Record or SOA record. And this is indicating who's in charge. And if I wanted to create a record for just simple [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md),
>
> **[3:13](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/configuring-dns?u=76281980&t=193)** I would start that and define a simple record in here maybe it's www dot, or you don't have to put in the dot, it's already there, www.[id10ttech.com](https://id10ttech.com) and then we could link right to something in AWS or we could just say, all right, look, we're going to create a basic a record here pointing to the server. So you would input the appropriate IP address, let's just make one up and then you could set again the exact type of record. We often use C name records for the worldwide web prefix there and then we could set the time to live value and then define our simple record. So DNS server configurations are made much simpler today especially if we're leveraging something like the power of Cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (2), [Windows 10](../../Skills/Network%20and%20System%20Administration/Windows%2010.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** dns (10), dhcp (2), aws (2), tcp (1), udp (1)
> **CLI Commands:** make (3), aws (2)
> **URLs:** [id10ttech.com](https://id10ttech.com) (2), [anthonysequeira.net](https://anthonysequeira.net) (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** configure (2)
> **Cross-References:** we discussed (1)
> **UI Navigation:** go to (1)

#### [RFC 1918 addressing](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=0)** - [Instructor] Two technology additions to IPV 4 that made a huge difference in stemming the IPV4 address shortage that the world was quickly facing was the RFC1918 private IP address space and network address translation, or NAT. NAT lets us translate these private addresses into public Internet routable IPV4 source addresses. In order to define IP addresses that can be used privately inside the enterprises, as we said, the standards makers took various classes of addresses, and they actually reclaimed them from the Internet. And then they use these to define the private use address space. Here are the RFC1918 private address spaces that were defined. Notice there's the entire 10 range. This is the 10/8 prefix. There's 172.16 to 172.31. And then that goes all the way up to 255.255. So that's known as the 172.16/12 prefix. And then finally there's 192.168.0.0 all the way up to 192.168.255.255. This we call the 192.168/16 prefix. Notice the idea here was simple and followed the logic of the original address classes. For small offices in home networks,
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/rfc-1918-addressing?u=76281980&t=93)** there could be the Class C private address space. For medium-sized networks, they define the Class B, and for large enterprise networks, the 10.x address space, the Class A could be used. If you're watching this course while connected to the Internet, chances are you have an RFC1918 address on your local machine. This address is translated by a NAT device so that your device can communicate on the public Internet.

> [!info]- Semantic Content
>
> **Env Vars:** rfc1918 (3), nat (3), ipv4 (2), ipv (1)
> **Versions:** 172.16 (2), 172.31 (1), 255.255 (1), 192.168.0 (1), 192.168.255 (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Introducing NAT](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=0)** - [Instructor] Network address translation certainly has an interesting history. By the way, you'll often see it as N-A-T, but we don't pronounce it that way we call it NAT. While it was originally looked upon as a temporary bandage for the address shortage that IPV4 was facing in the world, it quickly gain ground as a technology that could be very useful in its own right. First, let us talk about the original idea and use case. If we have all the private networks in the world adopt the RFC 1918 private IP address space, then this would free up massive numbers of public IP addresses for use on the public internet. And sure enough, this solution worked and worked well. By the way, it's called RFC 1918 private [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) because there's a request for comments document and it's numbered 1918 that specified this idea. You can do a [Google](../../Glossary/Service/Google.md) search on RFC 1918 and you can read the original document. It's very readable and it's somewhat enjoyable if you're a tech nerd like me. Systems in the private enterprise would be numbered with RFC 1918 addresses, note that the specific RFC 1918 ranges are a very little interest in this case. And these systems would still be able to communicate on the public internet by having their private source IP addresses translated into addresses that are valid
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=96)** for communication on the internet. As mentioned earlier, NAT has proven more useful than it was originally designed to be. For example, your enterprise might find that critical to permit the merger and eventual renumbering of your network when it merges with another network that your company might have recently acquired. Now as you might guess, ordinarily this is where I would walk you through the configuration of network address translations but the great news is in the small [office](../../Skills/Web%20Development/Microsoft%20Office.md) home office with that router that we have, providing internet access and also providing wireless access, there's nothing to configure. The network address translation intelligence is built right into the device and it is doing it for us automatically. Now of course, there are scenarios where perhaps you'll be configuring a really big, really important router at a service provider or maybe even one in your enterprise network and there you would need to manually do a NAT configuration but that's a bit above the scope of this presentation. But if you're so brave as to be interested in that, you can certainly find great training on that here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning library where there are plenty of advanced networking courses on Cisco equipment and Juniper equipment. And you'll find plenty of examples
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/introducing-nat?u=76281980&t=189)** of these advanced NAT configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1), [Google](../../Glossary/Service/Google.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** rfc (5), nat (4), ipv4 (1)
> **Documentation:** rfc (5)
> **CLI Commands:** find (3)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: IP services](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/challenge-ip-services?u=76281980&t=0)** - [Narrator] Here's another fun challenge for you to ensure that you are really doing great learning this material. This challenge should take you under five minutes to complete. Notice you're going to match the [DHCP](../../Glossary/Standard/DHCP.md) terms on the left with the correct definitions on the right. So, you'll be finding a place for request, discover, lease, pool, and offer. Good luck. Next, you're going to match these DNS terms with the correct definition. Notice we have zone, MX, AAAA, and CNAME. Finally, you need to list the RFC 1918 private IP address ranges. I hope you had fun in those exercises. And please join me in the next video so I can discuss the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** dhcp (1), dns (1), aaaa (1), cname (1), rfc (1)
> **Cross-References:** in the next (1)
> **Documentation:** rfc (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: IP services](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=0)** - [Instructor] So, how did you do on this challenge? In this first one, we had to match the [DHCP](../../Glossary/Standard/DHCP.md) terms with the correct definitions. So what I do in something like this is I'll pick what I think would be the easiest one to recognize, like a lease. And of course that's the amount of time a client can possess the IP address information, just like a car lease. The next easiest one I think I would be able to get is discover. And this is, of course, sent by the client to locate a DHCP server. The next one, I think, that would be pretty easy is pool. And so this is, of course, used to configure DHCP in the network. And then I would move to offer, which is sent by the DHCP server. And that leaves request, sent by the client in response to an offer. Match the DNS terms with the correct definition. Well, pretty easy here. We just have to review those common DNS records that we might have, like MX is a mail server record, the AAAA is an IPv6 host record, a CNAME is an alias record, and finally, all of these records are stored in what's called a DNS zone. Remember the RFC 1918 private IP address ranges. So important to be able to quickly recognize a private use only address.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/solution-ip-services?u=76281980&t=94)** The class A range was the 10.x, we like to call it, because it's just 10. and then followed by anything is the appropriate Class A. And then the Class B ranges were 172.16 to 172.31 And then 255.255, of course, and then finally the Class C range was 192.168.0.0 Up to 192.168.255.255. Like I said, very, very important to be able to pick those out when you're looking at IP traffic with IP addresses attached because you want to be able to really tell what has that private use only source addressing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (4)
> **Env Vars:** dhcp (4), dns (3), aaaa (1), cname (1), rfc (1)
> **Versions:** 172.16 (1), 172.31 (1), 255.255 (1), 192.168.0 (1), 192.168.255 (1)
> **Definitions:** is an  (2), is a  (1)
> **Documentation:** rfc (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-ip-addressing-2020/next-steps?u=76281980&t=0)** - [Anthony] We've reached the end of the course. By now you've learned the details of the IPv4 and IPv6 addresses and their meaning. You've learned more advanced [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) concepts, such as VLSM and CIDR. You've learned of the various critical IP address components, like subnet masks and default gateways and DNS server addresses, and the important related services, like DNS, [DHCP](../../Glossary/Standard/DHCP.md), and NAT. But there's so much more to learn. Here are some additional steps to keep going. Perhaps you want to keep practicing. You should consider creating or improving your network documentation around the details of IP addressing in your own space, whether that's at home or at work. Finally, you should consider moving to more advanced networking courses here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (2), [DHCP](../../Glossary/Standard/DHCP.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** dns (2), vlsm (1), cidr (1), dhcp (1), nat (1)
> **Analogies:** such as (1)
> **Speakers:** - [anthony] (1)


## Instructor

- [Anthony Sequeira](../../Instructors/Cybersecurity/Anthony%20Sequeira.md)

## Skills Covered

- IP Addressing

## Path Context

### In [Network Administration- Build Core Skills for Network Management and Security](../../Paths/Cybersecurity/Learning%20Paths/Network%20Administration-%20Build%20Core%20Skills%20for%20Network%20Management%20and%20Security.md)
← [Networking Foundations Networking Basics](../Network%20and%20System%20Administration/Networking%20Foundations%20Networking%20Basics.md) | **2 of 6** | [Networking Foundations- Local Area Networks (LANs)](Networking%20Foundations-%20Local%20Area%20Networks%20(LANs).md) →

### In [Networking and Administration Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Networking%20and%20Administration%20Fundamentals.md)
← [Networking Foundations Networking Basics](../Network%20and%20System%20Administration/Networking%20Foundations%20Networking%20Basics.md) | **4 of 10** | [Server Administration Essential Training](../Cloud%20Computing/Server%20Administration%20Essential%20Training.md) →

## Appears In

- [Network Administration- Build Core Skills for Network Management and Security](../../Paths/Cybersecurity/Learning%20Paths/Network%20Administration-%20Build%20Core%20Skills%20for%20Network%20Management%20and%20Security.md)
- [Networking and Administration Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Networking%20and%20Administration%20Fundamentals.md)

## Related Courses

_Courses sharing skills:_

- [Cisco Networking Foundations- IP Addressing](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20IP%20Addressing.md) — IP Addressing

---

[↑ Back to top](#)