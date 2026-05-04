---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: computer-science-principles-the-internet
url: "https://www.linkedin.com/learning/computer-science-principles-the-internet"
duration_minutes: 59
duration: 59m
level: Beginner
updated: 9/7/2016
learners: 70757
skills:
  - Computer Science
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQElGJzUhFVsOw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118502014?e=2147483647&amp;v=beta&amp;t=cto-tvVIGi0pVizzJ5NxPsCcXpubZPy_A8lWc3rD-no"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Cybersecurity Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Cybersecurity%20Fundamentals.md)'
  - '[Networking and Administration Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Networking%20and%20Administration%20Fundamentals.md)'
  - '[Software Development Fundamentals](../../Paths/Software%20Development/Learning%20Paths/Software%20Development%20Fundamentals.md)'
prev_courses:
  - '[Computer Science Principles Digital Information](Computer%20Science%20Principles%20Digital%20Information.md)'
  - '[Computer Science Principles Digital Information](Computer%20Science%20Principles%20Digital%20Information.md)'
  - '[Computer Science Principles Digital Information](Computer%20Science%20Principles%20Digital%20Information.md)'
next_courses:
  - '[IT Security Foundations- Core Concepts](../Cybersecurity/IT%20Security%20Foundations-%20Core%20Concepts.md)'
  - '[Networking Foundations Networking Basics](../Network%20and%20System%20Administration/Networking%20Foundations%20Networking%20Basics.md)'
  - '[Computer Science Principles- Programming](../Software%20Development/Computer%20Science%20Principles-%20Programming.md)'
path_nav: '[{"path":"Cybersecurity Fundamentals","position":2,"total":12,"prev":"Computer Science Principles Digital Information","next":"IT Security Foundations- Core Concepts"},{"path":"Networking and Administration Fundamentals","position":2,"total":10,"prev":"Computer Science Principles Digital Information","next":"Networking Foundations Networking Basics"},{"path":"Software Development Fundamentals","position":2,"total":10,"prev":"Computer Science Principles Digital Information","next":"Computer Science Principles- Programming"}]'
path_count: 3
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/network-and-system-administration
  - topic/software-development
  - skill/computer-science
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Computer%20Science%20Principles-%20The%20Internet.md)

![Computer Science Principles: The Internet](https://media.licdn.com/dms/image/v2/C4E0DAQElGJzUhFVsOw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567118502014?e=2147483647&amp;v=beta&amp;t=cto-tvVIGi0pVizzJ5NxPsCcXpubZPy_A8lWc3rD-no)

# Computer Science Principles: The Internet

> Computers can do a lot. But it's the Internet that makes them come alive, allowing users to communicate and share data all across the world, over millions of miles, in fractions of a second. The Internet forms the connection underlying all computing, governing how software and hardware—regardless of vendor—work together. Here Doug (Rich) Winnie explains the history of the Internet and the technolo

> [LinkedIn Learning](https://www.linkedin.com/learning/computer-science-principles-the-internet) | 59m | Beginner | 71K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
- [**1. Internet Basics**](#1-internet-basics) (2 videos)
  - [How the Internet was born](#how-the-internet-was-born)
  - [Who manages the Internet?](#who-manages-the-internet)
- [**2. Addressing and Routing Information**](#2-addressing-and-routing-information) (7 videos)
  - [Sending and receiving information](#sending-and-receiving-information)
  - [The Internet Protocol and IP address](#the-internet-protocol-and-ip-address)
  - [Scaling up the Internet from IPv4 to IPv6](#scaling-up-the-internet-from-ipv4-to-ipv6)
  - [The Domain Name Server and DNS](#the-domain-name-server-and-dns)
  - [Routers and directing requests](#routers-and-directing-requests)
  - [Packets and fault tolerance](#packets-and-fault-tolerance)
  - [Reliability and TCP](#reliability-and-tcp)
- [**3. Web Servers**](#3-web-servers) (5 videos)
  - [Identifying a server with URLs](#identifying-a-server-with-urls)
  - [HTTP and requests](#http-and-requests)
  - [Hypertext and HTML](#hypertext-and-html)
  - [Remembering requests with cookies](#remembering-requests-with-cookies)
  - [Securing requests with SSL and TLS](#securing-requests-with-ssl-and-tls)
- [**4. Encryption**](#4-encryption) (3 videos)
  - [Caesar's cypher and keys](#caesars-cypher-and-keys)
  - [Improving security with longer keys](#improving-security-with-longer-keys)
  - [Symmetric and asymmetric keys](#symmetric-and-asymmetric-keys)
- [**Conclusion**](#conclusion) (1 videos)
  - [Goodbye](#goodbye)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/computer-science-principles-the-internet/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/welcome?u=76281980&t=0)** - Humans have used various [Forms](../../Skills/Web%20Development/Forms.md) of communication throughout history. Communication is the basis of how we record history, entertain each other, share our deepest thoughts, preserve memories, explore science, and explore our world. Communication extends from lingual communication through speech to written communication through the alphabet and the written [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) to digital communication using binary values to abstract object and concepts from the real world. Digital information breaks everything down into binary bits, tiny values of either on or off, or ones and zeros. Information can be broken down into these binary bits and shared everywhere. But in order for that to work, a system needs to be created that governs how all the computers, servers, [Hardware](../../Topics/Hardware.md), and software work together. For decades, computers have been able to communicate with each other over networks, but for a long time, and still today, some of those networks are proprietary, meaning that they can only communicate with others that are on the same network type. A way needed to be created to allow any computer to communicate with each other. But still gives companies the ability to create software and hardware that work with the network. That is what gave birth to the internet. What is unique about the internet is that it isn't a strict set of rules. It's a design philosophy. That is what's allowed it to grow and scale
>
> **[1:33](https://www.linkedin.com/learning/computer-science-principles-the-internet/welcome?u=76281980&t=93)** to what it is today, and allow it to evolve and expand in the future. Although the internet is a bunch of hardware and software, the design of the internet is very organic, regardless of what you're communicating and how.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - humans (1)

#### [What you should know](https://www.linkedin.com/learning/computer-science-principles-the-internet/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/what-you-should-know?u=76281980&t=0)** - This course is a basic explanation of how the internet works. You don't have to have any existing programming or computer knowledge other than recognizing common activities that you do online. That includes using a web browser and connecting to a network. While it isn't required, I recommend that you watch the Computer Science Principles: Digital Information course. This course explains how everything we work with in the real world is broken down into binary bits. These bits are the messages that are transmitted over the internet, using the technologies and protocols that we will explore. This course doesn't require any special [Hardware](../../Topics/Hardware.md) or software to complete. If you want to try out any of the concept in this course, all you need is a computer connected to the internet and a web browser. For educators, this course covers four of the seven Big Ideas of the Computer Science Principles curriculum, including abstraction, data and information, digital devices, and global impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** is a  (2)
> **Speakers:** - this (1)


### 1. Internet Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [How the Internet was born](https://www.linkedin.com/learning/computer-science-principles-the-internet/how-the-internet-was-born?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/how-the-internet-was-born?u=76281980&t=0)** - The internet can be traced back to the 1960s, when transmission of digital information started out in its infancy. What we call the internet, first started as a project for the United States government. A network called the ARPANET, or Advanced Research Projects Agency Network was established in 1969, as a communication network for the Department of Defense. In order for the network to work, it needed to have a way for information to be sent reliably, from one point of the network to another. These blocks of information that are sent are called packets, and they need to be transmitted multiple times, simultaneously. To do this, a set of rules needed to be created. In the 1970s, Vint Cerf and Robert Kahn created two sets of rules to do exactly that, the Transmission Control Protocol and the Internet Protocol, or TCP/IP. In 1982, TCP/IP was introduced as the standard networking protocols on the ARPANET, which remained under the control of the government through most of the 1980s. In 1990, Tim Berners-Lee created an application called World Wide Web, later renamed Nexus, at the European Organization for Nuclear Research, or CERN. Using a NeXT computer, Berners-Lee created the first web browser that allowed a user to navigate through pages of information using links to connect phrases to additional pages. With this browser,
>
> **[1:36](https://www.linkedin.com/learning/computer-science-principles-the-internet/how-the-internet-was-born?u=76281980&t=96)** Berners-Lee also created the Hypertext Transfer Protocol, or HTTP, and the Hypertext Markup Language, [HTML](../../Skills/Web%20Development/HTML.md). He also created the very first web server, called httpd. In 1991, the High-Performance Computing Act was created and introduced, by, then Senator Al Gore, and led to the funding of many new technologies, including Mosaic. Mosaic was the first commercially successful web browser that capitalized on the commercialization of the internet and was created at the National Center for Supercomputing Applications, by Marc Andreessen and Eric Bina. To continue the development of the web as an open standard, Berners-Lee created the World Wide Web Consortium, or W3C. This organization owns the rules and standards for various languages, like HTML, CSS, SVG, and more. The W3C, though, is a slow organization. It takes many years for a standard to be reviewed, recommended, and approved for use. So, some people got impatient. Over time, groups splintered off to create their own specifications. One of the those organizations is called WHATWG, standing for Web Hypertext Application Technology Working Group. It continues to develop HTML as a living standard, meaning that it will never be finished. And W3C is taking components of it,
>
> **[3:09](https://www.linkedin.com/learning/computer-science-principles-the-internet/how-the-internet-was-born?u=76281980&t=189)** and it's building a draft of the new HTML 5.1 standard. As the technology started to gain momentum with consumers and corporations, an organization needed to be created to ensure coordination and maintenance of internet procedures. In 1998, the Internet Corporation for Assigned Names and Numbers, or ICANN, was created. This non-profit organization organizes the various terms and phrases used to connect web addresses, like .com, .net, .ca, .uk, and others, with the numeric protocols on the web. Andreessen would then later create Netscape Communications and continue to popularize the web browser and expand the technology. Over the course of the last 20 years, Netscape technology evolved into the web browsers that we use every day, on our own computers, tablets, and phones. Today, companies like [Google](../../Glossary/Service/Google.md), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), Apple, Opera, Mozilla, and others, expand and redefine how browsers work and how applications function on the internet. But even with all the changes that have been made, fundamentally, the internet is based on the designs that were created almost 50 years ago and will continue to scale and evolve into the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Google](../../Glossary/Service/Google.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** html (4), w3c (3), arpanet (2), tcp (2), cern (1)
> **Documentation:** w3c (3)
> **Definitions:** is a  (1), is called (1)
> **Versions:** 5.1 (1)
> **Best Practices:** recommended (1)
> **Speakers:** - the (1)

#### [Who manages the Internet?](https://www.linkedin.com/learning/computer-science-principles-the-internet/who-manages-the-internet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/who-manages-the-internet?u=76281980&t=0)** - So with all this technology that is constantly changing and evolving, who actually controls the Internet? The simple answer is no one. There isn't a CEO or president of the Internet. In fact, no one person, company, or government runs the Internet. Instead a combination of government agencies, international groups, and companies in the private sector collaborate together to keep the fundamental technologies of the Internet working. These groups form the rules that define how all of the different systems work. The Internet is formed of multiple networks that all conform to the standard protocols of the Internet known as TCPIP. Some of these networks are owned by private companies, like your internet service provider, universities, cell phone companies and others. But all these different networks need to have a way to tell one from the other. It's like having a bunch of airports. Each airport is run by a different group of people. You need to have a way to know that if you're going from airport A to airport C that the pilot knows where they're going, and that airport you are going to knows to expect your arrival. In the case of airports an agency known as the International Air Transport Association or IATA developed a system of three-letter codes that every airport throughout the world has adopted. So if you're at SFO and your bags and ticket have JFK on it, it knows that you are headed to New York City,
>
> **[1:36](https://www.linkedin.com/learning/computer-science-principles-the-internet/who-manages-the-internet?u=76281980&t=96)** and every airport is aware of each other. The same happens on the Internet, but instead of airports, there are networks. Another agency called ICANN, which stands for Internet Corporation for Assigned Names and Numbers, does the same thing. It manages the names or identifiers that are part of the Internet, like URLs, or Uniform Resource Locators. These are the phrases you know for websites. Portions of a website name called a domain are managed by ICANN. For example, a government website in the US typically end with .gov. Commercial sites end in .com. International sites have their own designation. For example, take the website for [Google](../../Glossary/Service/Google.md). In the US, it is [google.com](https://google.com), but in Canada it is google.ca. Amazon in the UK is [amazon.co](https://amazon.co).uk. That doesn't mean the Internet is free of conflict and politics. It just happens differently than what we think of in the government. Take something like [HTML](../../Skills/Web%20Development/HTML.md). HTML is the language that web pages and web browsers use to communicate and structure information. There are a few international agencies called standards bodies, like the W3C and WHATWG, that are groups of people that work to develop a universally adopted set of rules called standards that software and [Hardware](../../Topics/Hardware.md) companies can rely on
>
> **[3:09](https://www.linkedin.com/learning/computer-science-principles-the-internet/who-manages-the-internet?u=76281980&t=189)** to build [products](../../Skills/Software%20Development/Microsoft%20Products.md) that will work with the technology. Many of these standards bodies have individuals from private companies, and they work to add new features to languages and rules of the Internet. If one company really wants to add in a new feature to their browser but it isn't part of the standard rules, they might add the feature in and tell their users and fans that this awesome new feature is available to them. If they like it, they might demand that other browsers adopt it and then push for it to become a standard. But on the other side, some companies might want to push their solution over another. So you have a situation where the makers of browsers have a lot of power in determining what goes into the rules, known as a specification or spec. So while there's no leader of the Internet, through international agencies and standards bodies, the world generally works together to ensure that the Internet works. This is all through the base technology and protocols that define how the Internet works, and these organizations evolve and adapt over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Hardware](../../Topics/Hardware.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** icann (2), html (2), ceo (1), tcpip (1), iata (1)
> **Definitions:** known as (3), stands for (1)
> **Documentation:** w3c (1), specification (1), spec (1)
> **Analogies:** for example (2), it's like (1)
> **URLs:** [google.com](https://google.com) (1), [amazon.co](https://amazon.co) (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - so (1)


### 2. Addressing and Routing Information

[↑ Back to Table of Contents](#table-of-contents)

#### [Sending and receiving information](https://www.linkedin.com/learning/computer-science-principles-the-internet/sending-and-receiving-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/sending-and-receiving-information?u=76281980&t=0)** - Everything that we create on a computer is translated into digital information using bits. This could mean a collection of thousands, millions, or billions of bits, or more, need to have a way to be transmitted over the internet. But, in order to do that, there needs to be a way to take the information and break it down, so we have a reliable way to send it over the network. Every message, file, or stream of information is broken down into small chunks, called packets. When packets are sent on the internet, they usually will travel the network together. But, take a situation like a road trip. If you and your friends are in four separate cars, and you're going down the highway, at a certain point there might be an accident cutting off the route of two people. They might have to take a different route to get to the destination. To help with this, each packet contains some important information inside of it called the header. First, the packet says where it came from. This is like the return address on an envelope. If the place it is trying to go to doesn't exist, or there's a problem, there's a way for the network to send a message back to the sender to let them know that the message didn't go through. It also is helpful to know that if a message was successfully sent, that there is an acknowledgement of that sent back to the sender. Next, the packet needs to know where it's going to. This is the address you have on an envelope.
>
> **[1:36](https://www.linkedin.com/learning/computer-science-principles-the-internet/sending-and-receiving-information?u=76281980&t=96)** This way, if a packet gets lost or has to go in a different way, the network can point it in the right direction for it to get to the right destination. The packet also needs to say how long it is. It stores that by defining the number of bytes that are in the packet. This way, we know the packet is complete. All the packets in the message are the same size, so if one isn't the same size as the others, we know we have lost some data, and we can find a way to get it back. Finally, we need to know how many packets there are in the overall message, and in which place each individual packet lives within the set. Using packets, and the header information inside of them, we can take a message of any size and break it down into chunks that can be transmitted over the internet.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - everything (1)

#### [The Internet Protocol and IP address](https://www.linkedin.com/learning/computer-science-principles-the-internet/the-internet-protocol-and-ip-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/the-internet-protocol-and-ip-address?u=76281980&t=0)** - When you send a letter or package, you need to provide an address. The address needs to be understood by everyone that comes into contact with it, to make sure that it's going to the right place, and that it's being delivered to the right person. When we address a letter, we use a country, state, city, street, and house number. With these, we are able to get the letter closer and closer, to the right person among millions of people. Everyone has a unique name and address. Well, unless you live with an identical twin with the same name. The same exists with addresses on the Internet. Instead of a street address, addresses on the Internet use numbers. The use of numbers as addresses is one of the core concepts of the Internet, and it is called the Internet Protocol, or IP. Each device on the Internet has an address called an IP address. With IPv4, a current standard, this is a sequence of four, three-digit numbers separated by a period. Each number can be a number from zero to 255, allowing for over four billion possible addresses on the Internet. Using these numbers, networks, sub-networks, servers, and individual devices, can be reached from any other device on the network. Each packet that is sent, has the sender and the receiver addresses in the header. These are stored as IP addresses.
>
> **[1:37](https://www.linkedin.com/learning/computer-science-principles-the-internet/the-internet-protocol-and-ip-address?u=76281980&t=97)** This way, the network has a way to see where it needs to send each packet, and if there's a problem, where to send the error, or the issue back to the sender. With IP addresses, there are public addresses, and private ones. There's an organization called the Internet Assigned Numbers Authority, or IANA, that determines what numbers and subsets are assigned to different groups. Within these groups there is the public addresses your device has on the Internet, and a private one you have on your home network. Here's an example. I might have a tablet that is on my home network. My router has a connection to my Internet provider, and I have a public address. On my home network, my router gives each device, including my tablet, a private address. So the job of the router, is to route, the packets from the public Internet, to my private device and vice versa. Using the Internet Protocol and IP addresses, every device can connect to a network of millions of other devices, and packets of information can be sent to any of them.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** iana (1)
> **Speakers:** - when (1)

#### [Scaling up the Internet from IPv4 to IPv6](https://www.linkedin.com/learning/computer-science-principles-the-internet/scaling-up-the-internet-from-ipv4-to-ipv6?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/scaling-up-the-internet-from-ipv4-to-ipv6?u=76281980&t=0)** - When IPV4 was created, it supported over four billion devices that could connect to the internet. However, as more and more devices were created, the number of available addresses started to run out. So another way needed to be created. Luckily, the internet protocol's designed to scale and expand to meet new demands. So in 1995, a new version of the internet protocol was created, it's called IPV6. Now you might ask yourself, what happened to IPV5? Well, part of how specifications are developed is that new ones could be created and designed, but when they get to a certain point they're given a name. In 1979, an experimental protocol called the internet stream protocol was assigned the number five, but it was never finalized. In 1995, the Internet Engineering Task Force, or IETF, needed to create a new way to provide addresses on the internet, now to expand beyond the four billion limit of IPV4. The result was to increase the number of bits used to store an address. IPV4 uses 32 bits. IPV6 uses 128. With 128 bits, we can store a bunch of addresses. That is 340 undecillion unique addresses, or 340 trillion trillion trillion addresses. That's more addresses than there are atoms
>
> **[1:34](https://www.linkedin.com/learning/computer-science-principles-the-internet/scaling-up-the-internet-from-ipv4-to-ipv6?u=76281980&t=94)** on the surface of the planet. If you took a smartphone and put that in your hand, and had it represent the number of IPV4 addresses, the size of IPV6 addresses would be the size of our solar system. Now during the transition from IPV4 to IPV6, devices will migrate over time as the entire world of network [Hardware](../../Topics/Hardware.md) and computer software is updated. New operating systems support something called dual stack, where both IPV4 and IPV6 are supported at the same time. Allowing your devices to work regardless if the network hardware is updated or not. So what does an IPV6 address look like? Since IPV6 uses 128 bits, we can represent that as binary numbers. These 128 bits are organized into eight 16 bit sections. Each 16 bit block is converted to hexadecimal. And it's separated with a colon. This is a full IPV6 address. But there are some additional ways to compress it. Leading zeros can be removed. But we need to make sure that each section has at least one digit. Some addresses have a lot of zeros. And they usually are special types of IP addresses for private or different types of network objects. For example, you can have an address like this. This address can be written in shorthand this way.
>
> **[3:10](https://www.linkedin.com/learning/computer-science-principles-the-internet/scaling-up-the-internet-from-ipv4-to-ipv6?u=76281980&t=190)** To rebuild the original number, the network knows that there must be eight sections. And it knows the first and the last, and fills in the blanks with zeros. Using IPV6, the world has more than enough addresses. So as more and more devices connect to the internet, they will all have a protocol to allow them all to communicate with each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2)
> **Env Vars:** ipv6 (9), ipv4 (6), ipv5 (1), ietf (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - when (1)

#### [The Domain Name Server and DNS](https://www.linkedin.com/learning/computer-science-principles-the-internet/the-domain-name-server-and-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/the-domain-name-server-and-dns?u=76281980&t=0)** - IP addresses are a key part of the Internet, that's why it's called the Internet Protocol. But for humans, they aren't very intuitive, so there needed to be a way for humans to be able to take phrases that we understand, and have them mapped to IP addresses for devices, and websites around the world. The solution is a domain name. The domain name is a sequence of phrases that map to a giant Internet-wide database of IP addresses. So for a website like www.[dougwinnie.com](https://dougwinnie.com) this is the domain name for the website. When you enter that domain name into your browser, you send that request to something called a DNS, or Domain Name Server, this server holds a cache of tons of domain names, and their matching IP addresses. But there isn't just one DNS, there are lots of them throughout the Internet. As new domains are created, and as old ones change, those changes are recorded by a DNS, and they spread throughout the Internet. If you send a request to a DNS for www.[dougwinnie.com](https://dougwinnie.com) and it doesn't know what it is, it'll ask another DNS if it knows, and continue to ask until one does. It'll then save the information to use later, and then send the corresponding IP address back to you, and then send the request to access the server using that IP address. The process of translating a domain name to an IP address
>
> **[1:37](https://www.linkedin.com/learning/computer-science-principles-the-internet/the-domain-name-server-and-dns?u=76281980&t=97)** is called DNS name resolution. You can completely skip this process if you want to. For instance, if you wanted to reach [google.com](https://google.com) you could simply enter in the IP address directly, but remembering [google.com](https://google.com) is a whole lot easier than remembering the IP address. The domain name is broken down into a few parts, the last part of the domain name is called the top-level domain, these are managed by the IANA, or Internet Assigned Numbers Authority, so for my website, www.[dougwinnie.com](https://dougwinnie.com) the .com is the top-level domain. Some websites, for example, www.[bbc.co](https://bbc.co).uk use two-letter country codes, and an additional code in this case, the .co before it. Next is the host name, or dougwinnie this is the name of the collection of servers under the dougwinnie name. A domain can have multiple servers under it, for instance, it can have a web server, an e-mail server, file transfer server, or multiple other [Web Servers](../../Skills/Web%20Development/Web%20Servers.md). To help organize these, a site has a subdomain, so again, in the website name, www.[dougwinnie.com](https://dougwinnie.com) the www is the subdomain representing the web server, which has a unique IP address associated with it.
>
> **[3:13](https://www.linkedin.com/learning/computer-science-principles-the-internet/the-domain-name-server-and-dns?u=76281980&t=193)** This is different than my e-mail server, which would be smtp.[dougwinnie.com](https://dougwinnie.com) or other servers that are under my domain. With the use of top-level domains, domain names, and subdomains, we have a way for humans to remember servers throughout the Internet, but it is the Domain Name Servers, or DNS, that perform name resolution to translate those domains into IP addresses that allow billions of devices to communicate with each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **URLs:** [dougwinnie.com](https://dougwinnie.com) (5), [google.com](https://google.com) (2), [bbc.co](https://bbc.co) (1)
> **Env Vars:** dns (7), iana (1)
> **Definitions:** is a  (3), is called (2)
> **Analogies:** for instance (2), for example (1)
> **Speakers:** - ip (1)

#### [Routers and directing requests](https://www.linkedin.com/learning/computer-science-principles-the-internet/routers-and-directing-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/routers-and-directing-requests?u=76281980&t=0)** - Routers are the signposts that packets use to travel across the Internet and over private networks within an organization. Using the header information in data packets, routers read the information in the header to direct packets to go to the right location. In your home, you might have a router that is connected to your home Internet Service Provider. When your computer sends out a request for information or is sending packets of information to another computer, the first place the request goes is the router. The router looks at the information in the header and sees where it needs to send the information. In a home network, that could be one of two places. It could be something that is sent out to the Internet to connect to another computer or it could be to another computer or device on your own home network. When you have a home network, all of your devices including your computers, tablets, phones, game consoles, and even smart devices like light bulbs, wireless speaker systems, and more, are all connected to your router. This is so you can communicate between these devices without needing to go all the way to the Internet and then back to the device, making it much faster. It also is private, meaning that none of the information that is sent leaves your home network. When information does go out to the Internet, it is sent out of your router to your Internet Service Provider and then gets to its destination. But it can all seem like a black box. If you look inside, you'll find that the Internet is
>
> **[1:32](https://www.linkedin.com/learning/computer-science-principles-the-internet/routers-and-directing-requests?u=76281980&t=92)** an incredibly complex system of servers and routers, where a packet navigates through tons of these various systems to get to the destination. A router also has a component called the configuration table. This is a set of commands that defines how the router works. For instance, let's say that you're working in [Banking](../../Skills/Software%20Development/Banking.md) and you need to have a backup connection to the Internet if your main connection goes down. You might have a large connection that manages most of your traffic and then a smaller connection as a backup if the larger one goes down. If the router finds that the main connection is down, it then routes the packets through the secondary connection to make sure that it can get to the Internet. Through private and public networks and routers, packets can be sent to computers and devices on your own networks and then traverse the landscape of the public Internet to find its destination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - routers (1)

#### [Packets and fault tolerance](https://www.linkedin.com/learning/computer-science-principles-the-internet/packets-and-fault-tolerance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/packets-and-fault-tolerance?u=76281980&t=0)** - Messages are broken down into small pieces of data called a packet. A packet consists of about a kilobyte of information, but if you're sending a long email, an audio file, or an image, that would require that the data is broken down into dozens or even hundreds of packets, or more. When these packets are sent out from the server, there are lots of conditions that can happen as they all navigate the roads of the internet. The chains of the packets will rarely stay together as a group, and will break apart, and take different paths along the internet. For instance, if we have a message that needs to be broken down into five packets, they start at the same location. But, as they are transmitted, they have to navigate the internet along with trillions of other packets of information, which can create traffic and bottlenecks at certain points. For instance, two packets might have been managed by a node on a network, but that node might have been overwhelmed by another request, making it unavailable to manage the third packet. Since all the packets are individual units, they can follow different paths, so the third packet takes a different path. Along the way, all the packets might be on a different path, but they all ultimately get to the same destination. But, due to traffic and other conditions, they have to take different routes. The key is the header, which each node examines and determines the next location for the packet to go, inching it closer to its destination. In all, this takes just a dozen or so
>
> **[1:33](https://www.linkedin.com/learning/computer-science-principles-the-internet/packets-and-fault-tolerance?u=76281980&t=93)** milliseconds to complete. Something you can do to see how this works is to ping the server. This is a common command in [Windows](../../Glossary/Service/Windows.md), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), and Mac OS that sends test packets to a server, and then requests the server to send the information back. Using a ping, you can test to see how long it takes to reach, or ping, the server, and if any of the packets are lost along the way. So, you could ping [Google.com](https://Google.com), and it will send a handful of packets to [Google.com](https://Google.com), resolving the domain to the IP address. It then sends a series of packets, in this case four, each of which are 32 bytes in size. When the packet is returned, you are told how long it took for the round trip. At the end, you get a report that says how many packets were sent, how many were received back, and how many were lost in the internet for some reason. Being able to navigate through various conditions on the internet is called fault tolerance. Because of how the network is configured, if there was a massive network disruption from a natural disaster, or some other event, the network is able to compensate for it and re-route packets in different ways to get the information to the destination. Depending on the magnitude of the outage, however, that could mean that the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the network, or certain areas, might be overwhelmed due to the additional traffic it needs to manage. As a system is able to recover, and come back online,
>
> **[3:06](https://www.linkedin.com/learning/computer-science-principles-the-internet/packets-and-fault-tolerance?u=76281980&t=186)** the network can then resume normal operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** node (3)
> **URLs:** [google.com](https://google.com) (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for instance (2)
> **Best Practices:** the key is (1)
> **Speakers:** - messages (1)

#### [Reliability and TCP](https://www.linkedin.com/learning/computer-science-principles-the-internet/reliability-and-tcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/reliability-and-tcp?u=76281980&t=0)** - When hundreds or even thousands of packets are transmitted from one location to another, they can take different paths based on changing network conditions and other factors. When they get to the destination, they are unorganized and sometimes not complete. So the message needs to be audited and reviewed in order to put it together in the right way. The Transmission Control Protocol or TCP does exactly that. TCP uses a process where it looks at all the packets in a message and checks them. Using the header information in each packet it knows how many there are, how large they should be, and in which order the packets should be in. Using this checklist, it is able to rearrange the packets. If it finds that a packet doesn't match the expected size or other characteristic, it is discarded and using the header information again, sends a request back to the sender for a specific packet to be resent. After assembling the packets received, if TCP finds that packets are missing, it goes back to the sender and asks for the missing items to be resent. After TCP has verified that all the packets are accounted for, are in the right order, and are free of any issues, it certifies the data and the packets are merged together to recreate the original file that was on the sender's device. For most transmissions on the internet, the TCP method is used, which is why the IP and TCP protocols are referred to as a single item or TCP/IP. TCP places reliability in a higher priority
>
> **[1:34](https://www.linkedin.com/learning/computer-science-principles-the-internet/reliability-and-tcp?u=76281980&t=94)** than speed or latency. For instances where reliability isn't as important, but speed is, there is another protocol called UDP or User Datagram Protocol. This protocol doesn't do the excessive reliability checks that TCP performs, but because of this it can send information at a faster rate. TCP is the foundation of how a majority of data is transmitted over networks. Using these protocols, every device has a unique address and data can be broken down into packets to send to any of these addresses. When received, the packets of information can be verified and reconstituted back into the original form.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (10), udp (1)
> **Speakers:** - when (1)


### 3. Web Servers

[↑ Back to Table of Contents](#table-of-contents)

#### [Identifying a server with URLs](https://www.linkedin.com/learning/computer-science-principles-the-internet/identifying-a-server-with-urls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/identifying-a-server-with-urls?u=76281980&t=0)** - [Instructor] When you enter a URL into a web browser, the URL has three main parts to it. A top-level domain, the domain name, and the subdomain. A DNS server is able to resolve the words used to identify the host into the IP address for that specific server. For a company, you will typically have a single domain name, like [dougwinnie.com](https://dougwinnie.com), but you may have multiple subdomains. Subdomains can do a few things: One thing they can do is link to specific [Web Servers](../../Skills/Web%20Development/Web%20Servers.md). For instance, www.[dougwinnie.com](https://dougwinnie.com) is pointing to a specific web server. That subdomain, www, defines a very specific IP address for that server. I can have multiple subdomains, like dev, prod, or beta. All of which are pointing to different IP addresses. Subdomains can also be very misleading. That's because the information that is stored about them in a DNS may redirect to completely different servers. In a DNS there are records, called A records and CNAME records. They store rules for how domains are translated to IP addresses. Let's say in our DNS we have a record for dev.[example.com](https://example.com) This is a web server name that we want to resolve to 123.45.67.89 For that URL to translate to the IP address, we need to have that record be in the DNS server to begin propagating that throughout the internet.
>
> **[1:36](https://www.linkedin.com/learning/computer-science-principles-the-internet/identifying-a-server-with-urls?u=76281980&t=96)** We can do that by adding a record to our DNS. Typically, if you are working with a company to host your website, you can update the records for your sites. On the DNS is a record called an A record, or address record. This is the IP address that we want to map to the full URL. So when the DNS is asked for the IP address for dev.[example.com](https://example.com), the server looks for the matching address record, and returns the IP address. But let's say we have a second URL for test.[example.com](https://example.com). This might be a URL that doesn't have a unique server associated with it, but we want to use to redirect to another URL. In that case, we want to create a CNAME record, or canonical name record. On the same DNS, a CNAME record can be added. This lists the name that is requested, and then what URL name that should be redirected to. So in this example, test.[example.com](https://example.com) is redirected to dev.[example.com](https://example.com) and then is then resolved to the address 123.45.67.89 The records that are in the DNS help browsers, networks be able to identify a server using the URL. With the use of the A and CNAME records in a DNS, IP mappings can be created to resolve URLs to their specific server IP addresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Env Vars:** dns (11), url (9), cname (4)
> **URLs:** [example.com](https://example.com) (5), [dougwinnie.com](https://dougwinnie.com) (2)
> **Versions:** 123.45.67 (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [HTTP and requests](https://www.linkedin.com/learning/computer-science-principles-the-internet/http-and-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/http-and-requests?u=76281980&t=0)** - When you are working with a web browser, you are sending a web server a request for information. And then you get a response back from the server, with the information the browser needs to display information on the screen. This communication back and forth, between the browser and the server is called Hypertext Transfer Protocol, or HTTP. HTTP requests and communication take place on top of TCP/IP protocol. You can think of HTTP as a specific language that communicates on the same network as other languages. When you speak with someone you need to make sure that they are listening. With a person, the person you're talking to needs to be listening for a message from someone. The same exists with the web. A web server needs to have something that is listening for requests. Those requests are in the format of an HTTP request. When someone enters in a URL like www.[dougminnie.com](https://dougminnie.com) to their web browser, they are sending an HTTP request that is attempting to get information from the server. First, the browser finds the IP address of the server, by asking the DNS what the IP address is of the URL. Then the browser sends the HTTP request using packets to the requested IP address. Those requests go to the web server at the IP address and requests the information. On the web server side it needs to be listening
>
> **[1:33](https://www.linkedin.com/learning/computer-science-principles-the-internet/http-and-requests?u=76281980&t=93)** to possible requests that are coming from the internet. If it didn't it would be deaf to any requests that are made to the server. A special type of program is required to listen and respond to requests. It is called a daemon. Now, this isn't some sort of scary horned monster. A daemon is a program that runs on a server and works in the background, and doesn't require any interaction from the user at all. It just, well, runs. The daemon for most [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) is called the HTTPD program, or HTTP daemon. This program does one thing, listens for HTTP requests that are routed to the server. There are many types of requests that can be used with HTTP. But the two most common are GET and POST. The GET request asks the server to return back information in the form of a header, or information that describes a configuration and the body, which is the content of the file that we're requesting. So when you send a get request you're asking the server for a webpage. The server daemon hears your request for a specific page, like index.[HTML](../../Skills/Web%20Development/HTML.md) on www.[dougwinnie.com](https://dougwinnie.com) host. When the server finds the resource it then sends information back using two sections. The header contains information about the data that is being sent back. It defines the type of server, the current date,
>
> **[3:07](https://www.linkedin.com/learning/computer-science-principles-the-internet/http-and-requests?u=76281980&t=187)** language, and the response code. The response code indicates if the get request was successful, or not. A 200 response code means that the get request was successful. There are others like 404 which means it can't find the information requested, and then sends that information back to you. After the header, is the response body, and this is the content of the document you asked for. Which for most cases is HTML, or Hypertext Markup Language. The other most common HTTP request is a POST request. This works in the opposite direction where instead of getting information from a server, you are sending information for it to use. This could be for information for a web form that you fill in and click a submit button to send to the server. It works the same way, sending the HTTP request, in this case a POST request and the server hears it, accepts the data in the request and sends a response back as a header and body.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **Env Vars:** http (11), post (3), url (2), tcp (1), dns (1)
> **Definitions:** is called (3), is a  (2), means that (1)
> **API Endpoints:** get  (2), post  (2)
> **CLI Commands:** make (1), find (1)
> **URLs:** [dougminnie.com](https://dougminnie.com) (1), [dougwinnie.com](https://dougwinnie.com) (1)
> **File Paths:** index.html (1)
> **UI Navigation:** go to (1)

#### [Hypertext and HTML](https://www.linkedin.com/learning/computer-science-principles-the-internet/hypertext-and-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/hypertext-and-html?u=76281980&t=0)** - When you read a book, you go through information from beginning to end. As books got more complicated they added things like a table of contents. So you could scan a list of chapters and know where in the book you needed to go. With more complicated books there's an index where more common words or phrases that people will want to know are listed in the back with page numbers where you can go find out about that specific phrase or topic. But in the digital world these concepts are a little limited. When you are reading about a topic you might be at [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) or phrase you want to know more about. It would be great if you could just avoid having to go to a table of contents, or an index, and just click it to jump right to that information. That is how hypertext works. If I have a document that talks about fruit I'll read about what makes a fruit a fruit, and how fruits grow and seed and sprout. On that page I can have additional information about specific fruit like an apple, a pear, or a banana. But instead of having that information on this specific page I can create unique pages for each of these fruit. The first page is called the index page, and on the server it is called index.[HTML](../../Skills/Web%20Development/HTML.md). For other pages I'll give them all a unique name, like apple.html, pear.html, and banana.html. Now on the index page if I talk about an apple I can take the text that is related to the apple page
>
> **[1:36](https://www.linkedin.com/learning/computer-science-principles-the-internet/hypertext-and-html?u=76281980&t=96)** and add a link. That link will connect that word or phrase to the apple.html page. When I click or tap it, it will open that linked page in the browser. With each of the pages unique from each other, they can all link together as well. For instance an apple is similar to a pear, so they might mention that and link to each other. At the end you have a network of pages that are all linked together, that people can navigate or browse to get more information. HTML works by taking a section of text and wrapping certain sections of it with tags. Tags are unique combinations of letters and characters that denote the beginning and end of certain sections. For instance if I have my apple.html page, at the top I want the word apple to be the main header of the document. I could take this text and add an opening tag before it with H1, and a closing tag after it with H1. These tags form a pair with the opening and closing pointed brackets surrounding the tag name, in this case H1. The closing tag has a slash in it to indicate that it is a closing tag. With these tags I can then add structure to my document.
>
> **[3:11](https://www.linkedin.com/learning/computer-science-principles-the-internet/hypertext-and-html?u=76281980&t=191)** I can create additional headers with multiple levels like H2, H3, and so on. I can add images to a document that place a picture that is somewhere on the server where the tag then says where it's located. I can also add links. Links use the A tag, and within a tag there is an attribute which defines additional information for the tag to work. In this case an A tag is a link. It's a link to where? That destination is saved in the HREF property that is located inside of the opening tag. In the HREF property you add the location and file name of the HTML page you want to link to that phrase, and wrap that phrase with an opening and closing A tag. The basics of HTML haven't changed that much, but as computers and servers have become more and more powerful browsers can do more graphics, animation, and other special effects. So HTML has evolved along with it. Over the years HTML has evolved by adding new capabilities, and we are currently at HTML version five, or HTML5. More changes and additions are being made to HTML today to support mobile devices, [Databases](../../Skills/Software%20Development/Databases.md), and to tie in with more features of your [Hardware](../../Topics/Hardware.md). But at the most basic level HTML's the language that lets us all link information together to give us a network of data on a server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (14), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** html (8), href (2), html5 (1)
> **File Paths:** apple.html (3), index.html (1), pear.html (1), banana.html (1)
> **Definitions:** is called (2), is a  (2), is an  (1)
> **Analogies:** for instance (2), similar to (1), picture (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - when (1)

#### [Remembering requests with cookies](https://www.linkedin.com/learning/computer-science-principles-the-internet/remembering-requests-with-cookies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/remembering-requests-with-cookies?u=76281980&t=0)** - Each time you open the browser and open a web page, it is a unique request, as if you've never visited the website before. Many sites require that you log on to an account, or there might be some configuration settings or reminders that you have turned on or off with various websites. When you make a new request after you shut down the web browser, all those things the browser remembers are forgotten. The time that you're on a site is called a session. As you do things during that session, there are things you can do to configure the site. But when the browser is shut down, the session is over and the information is lost. Browser cookies aren't filled with chocolate chips, but they do remember the bits about your browser sessions to make it easier to work with various websites. For instance, if you're on a site and you decide to log in, the browser asks for your user name and password. When that is entered, the site tells the browser that it can save the user name as a cookie. Why is it called a cookie? Well, think of a fortune cookie. There's a message that is written and saved in the inside of the cookie. Then, if you close the browser and re-open it, that cookie with the embedded message is sent with the HTTP request, and when you try to log in again, it'll remember your user name and automatically fill that in for you. Another common use of cookies is to maintain consistency with a site within a session. For instance, if I go to a website to buy something,
>
> **[1:36](https://www.linkedin.com/learning/computer-science-principles-the-internet/remembering-requests-with-cookies?u=76281980&t=96)** I'll add to the shopping cart of the online store. If I browse to another page, the browser and the site need to know that I'm the owner of the cart. So, a random identifier is created and is saved as a cookie. That way, when I go to another page of the site, the server will be able to match my identification code in the cookie with the corresponding shopping cart. Cookies can also be used to track browsing habits. For instance, if I go to a website for the first time, the site can tell my browser to create a unique code for me and save it as a cookie. Then, the next time I go to that website, it knows that I am a return visitor, instead of a new visitor, so they might show me something different than it did when I went there for the first time. Cookies are mostly used to make web browsing a more personal experience, with the websites you visit able to remember you and your preferences. Cookies, though, are just like any other file on your computer, and you can delete them from your browser at any time. While there are some, less-than-honorable uses of cookies to maliciously track people, the wide majority of cookies in use are there to help personalize the web for you.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), open the (1)
> **Analogies:** for instance (3), just like (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is called (1)
> **Env Vars:** http (1)
> **Prerequisites:** configure (1)
> **Speakers:** - each (1)

#### [Securing requests with SSL and TLS](https://www.linkedin.com/learning/computer-science-principles-the-internet/securing-requests-with-ssl-and-tls?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/computer-science-principles-the-internet/securing-requests-with-ssl-and-tls?u=76281980&t=1)** - Whenever you send information over the Internet, by default, it is publicly visible. The Internet and the servers within it can see the information you are sending and receiving from various systems. For most instances, this isn't an issue. A status update that you post on a social network or a video you watch from a streaming media service don't have sensitive information inside of them, but when you start to do things like shop on the Internet, do your taxes or bank online, these all have private information like social security numbers, bank account information, credit card details, and personal information that you don't want to share. If I have a credit card number like this one, it is broken down into binary just like any other piece of data and is part of a packet of information that is sent over the Internet. But a malicious server or individual can capture that information and then potentially get that information and use it. If binary is the primary way we communicate on the Internet, we need a way for both ends to be able to scramble and unscramble the original message in such a way that they can send it and if someone accesses it along the way, can't do anything with the scrambled message. The prominent way this is done is with SSL and TLS or Secure Sockets Layer and Transport Layer Security. SSL is an early version of security that was created by Netscape and is now part of the overall system security of TLS today. When you are working with a web browser and are using TLS,
>
> **[1:37](https://www.linkedin.com/learning/computer-science-principles-the-internet/securing-requests-with-ssl-and-tls?u=76281980&t=97)** you will see a lock icon in the browser window or you will see https instead of simply http. TLS performs a few basic things. It creates and verifies a connection from the client to the server and then creates and verifies the connection from the server to the client. This is called handshaking. When you shake hands, both hands need to reach out and grasp the other, so the greeting is verified by both sides. When that happens, TLS then encrypts the data that is being sent in both directions. When it encrypts the message, it is still able to preserve the header of the packets that will be used to transport the data. Since this all still needs to work on the TCP/IP protocol. Authentication is done using a security certificate. A certificate is granted by a known security entity that verifies that the companies, servers, and networks are who they say they are. In that certificate, it defines the domain name that is allowed to use the certificate, a public key that is used to encrypt the message, the company that owns it, and when the certificate was issued and when it expires. Using this information, you're able to trust the certificate and send private information confidently between your computer and a server on the Internet.

> [!info]- Semantic Content
>
> **Env Vars:** tls (5), ssl (2), tcp (1)
> **Definitions:** is an  (1), is called (1)
> **Analogies:** just like (1)
> **Speakers:** - whenever (1)


### 4. Encryption

[↑ Back to Table of Contents](#table-of-contents)

#### [Caesar's cypher and keys](https://www.linkedin.com/learning/computer-science-principles-the-internet/caesar-s-cypher-and-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/caesar-s-cypher-and-keys?u=76281980&t=0)** - Messages that are transmitted over the internet using protocols like TCPIP, are visible to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the network. So any message could be intercepted and read as you request and send information. Servers that handle sensitive information or [products](../../Skills/Software%20Development/Microsoft%20Products.md) that want to offer greater encryption, such as messaging apps, online shopping services, and [Banking](../../Skills/Software%20Development/Banking.md) applications, need to offer a way to encrypt. But making messages secret isn't a new thing. It has been required for millennia. In fact, one of the earliest [Forms](../../Skills/Web%20Development/Forms.md) of encryption is called Caesar's Cipher. It was created by Julius Caesar during the time of the Roman Empire. It works on the principle of the alphabet. Take my name, Doug. It has four letters, D, O, U and G. If you take the alphabet and put it on a flip dial, you have a collection of 26 letters. For each letter in a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), you'll add a dial. Through flipping the dial, you can spell a message. This is similar to how you send messages over the internet. But instead of simply working with letters, you work with text encoding formats like ASKII, UTF, and Unicode. For the basic example, if we send information without any modification, it would be easy to see what the message is. But, if I tell you ahead of time that I'm going to send a message using a plus one cipher, you will know that the message will have each letter be one place further in the alphabet
>
> **[1:34](https://www.linkedin.com/learning/computer-science-principles-the-internet/caesar-s-cypher-and-keys?u=76281980&t=94)** than the real message. So instead of D-O-U-G, you'll get E-P-V-H. Which doesn't look like anything until you apply the cipher and go back one letter for each character. Using the Caesar Cipher, you can say that you want to add or remove as many letters as you want. If we scale that to the digital alphabet we have today, ysing ASCII, UTF and Unicode, we have thousands of possible letters, which give us more options for cipher keys. The concept of a Caesar Cipher can also be applied to the binary information as well, shifting the binary digits to conceal a message after it's been encoded into binary numbers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** utf (2), tcpip (1), askii (1), ascii (1)
> **Analogies:** such as (1), similar to (1)
> **Definitions:** is called (1)
> **Speakers:** - messages (1)

#### [Improving security with longer keys](https://www.linkedin.com/learning/computer-science-principles-the-internet/improving-security-with-longer-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/improving-security-with-longer-keys?u=76281980&t=0)** - A simple Caesar cipher tells you how many characters the entire message will be shifted. We can store this as a single character. This is an example of a single-bit level of encryption. We have a single value we're using to scramble the information. The issue, though, is that a single bit isn't very sophisticated to scramble a message. If we have a message with a single bit of encryption, I could simply flip through a single set of possibilities and eventually find the answer. To make this more complex, we need to add additional bits. So we could double this key from one bit to two. We could say that the first letter is shifted by two, and the second is shifted by five. We would then take that and apply that repeatedly for all the letters in the message. Now, it is more complicated to try and figure out what the key is to decipher the message. Now we'd have to try more combinations in order to figure out the message. The more bits we add to the key, the more complex it becomes to solve. So as we add three or more to the message, it now becomes harder and harder to crack. But for a computer, this would be simple. A computer can crank through millions of combinations in a split second. So to manage against encryption against computers, we need to think much bigger. For a long time, keys for the internet were based on 128 bits. Using this, each message as was encoded
>
> **[1:34](https://www.linkedin.com/learning/computer-science-principles-the-internet/improving-security-with-longer-keys?u=76281980&t=94)** and transported over TCP/IP, via thousands or millions of packets, was considered secure. With 128-bit keys, there are two to the 128 power or around 339 decillion numbers of combinations possible in the key. But even then, incredibly powerful computers were still able to crack security certificates that had 128-bit keys. So today, there are three standard bit sizes used for keys. 128, 196, and 256. The AES, or Advanced Encryption Standard, is a standard for how electronic data is encrypted in the United States and is recognized throughout the world. AES is based on a cipher called the Rijndael. In this cipher, information is organized in a four-by-four matrix of bytes, and each matrix has a unique key that either substitutes values, shifts rows, or mixes columns to scramble the message. Each one offers a greater level of security than the other, but as computers get more and more advanced, faster and smarter, new ways to secure information will need to be created to make sure that your information is safe.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Env Vars:** aes (2), tcp (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** the key is (1)
> **Speakers:** - a (1)

#### [Symmetric and asymmetric keys](https://www.linkedin.com/learning/computer-science-principles-the-internet/symmetric-and-asymmetric-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/symmetric-and-asymmetric-keys?u=76281980&t=0)** - Simple keys like the Caesar Cipher require that both sides of the message agree on what the key is and will be applied to the message before it's sent. This is called Symmetric Security. This works fine in situations where you have exchanged that information in private, but in the case of the internet, it wouldn't work. If I want to establish a security key with a server, If I want to let that server know what the key is, I would need to send it to the server over an unsecure connection. So anyone could read what the security key is. And then potentially use it to intercept messages and crack them later on. The trick to make this work is to have two keys. One that the sender uses to encrypt and send information, but is not able to be used to decrypt it. The other is a key that is only on the receiver's end, and can be used to decrypt all the information that it receives. This is called asymmetric security. So as a sender encrypts and sends information, even if someone is able to find a key, it can't be used to decrypt it, since the key works in only one way. But the receiver with the second key can be used to decrypt all the messages. [Cryptography](../../Skills/Cybersecurity/Cryptography.md) and advanced mathematics make it possible to have a single master key that can be used to decrypt multiple messages, while having other multiple keys that can be used to encrypt content. These are called Public Keys, and Private Keys. Public keys can be exchanged and shared,
>
> **[1:35](https://www.linkedin.com/learning/computer-science-principles-the-internet/symmetric-and-asymmetric-keys?u=76281980&t=95)** but they work only in one way. The private key is the only way a message can be decrypted. But it is never shared, since it can be used to crack any coded message sent to the server. When you are working with the internet and use secure servers, using AES security keys and certificates, these are based on asymmetric security, where there are public keys that are used to encode information, and a private key, used to decode and decipher encrypted messages sent to the server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is called (2), is a  (1)
> **Best Practices:** the key is (2)
> **Env Vars:** aes (1)
> **Speakers:** - simple (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Goodbye](https://www.linkedin.com/learning/computer-science-principles-the-internet/goodbye?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/computer-science-principles-the-internet/goodbye?u=76281980&t=0)** - The internet was created to grow and evolve over time. The framework and protocol that built the internet, TCP and IP, have evolved and grown to support billions of devices and enable them to connect with each other. Through the use of packets, information can be sent through a fault-tolerant network, and then be verified for reliability of information to ensure that information is sent quickly and accurately. Through the internet protocol, every device on the internet has a unique code, or IP address that is used to route packets of information. Using IP before, and now IPV6, there are enough addresses to assign to an almost infinite number of devices as the internet grows and expands. But to make that easier for use to remember and work with, we use words and phrases, called domains, that are translated to these IP addresses using DNS, or Domain Name Servers. When we access a server over the web using a browser, we are sending information using HTTP. The web server has a program, a DAEMON, that is constantly listening for HTTP requests, and provides information back to the sender. Content on websites are stored on pages in the [HTML](../../Skills/Web%20Development/HTML.md) language that uses tags to give constant structure and meaning that is read and laid out by a web browser for the user to view and click to connect to other pages of information. To secure private information
>
> **[1:33](https://www.linkedin.com/learning/computer-science-principles-the-internet/goodbye?u=76281980&t=93)** that is transmitted over the internet, SSL and TLS are used to create secure connections to servers. And they use certificates and encryption keys to scramble information that is sent from system to system. While the foundational technologies are similar today to when the internet was first made public, the way to access the web and use it has dramatically changed. As we learn and discover new ways to share and exchange information, the technology at the base of the internet has the ability to evolve and adapt to whatever we throw at it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** http (2), tcp (1), ipv6 (1), dns (1), daemon (1)
> **CLI Commands:** make (1)
> **Speakers:** - the (1)


## Instructor

- [Rich Winnie](../../Instructors/Cloud%20Computing/Rich%20Winnie.md)

## Skills Covered

- Computer Science

## Path Context

### In [Cybersecurity Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Cybersecurity%20Fundamentals.md)
← [Computer Science Principles Digital Information](Computer%20Science%20Principles%20Digital%20Information.md) | **2 of 12** | [IT Security Foundations- Core Concepts](../Cybersecurity/IT%20Security%20Foundations-%20Core%20Concepts.md) →

### In [Networking and Administration Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Networking%20and%20Administration%20Fundamentals.md)
← [Computer Science Principles Digital Information](Computer%20Science%20Principles%20Digital%20Information.md) | **2 of 10** | [Networking Foundations Networking Basics](../Network%20and%20System%20Administration/Networking%20Foundations%20Networking%20Basics.md) →

### In [Software Development Fundamentals](../../Paths/Software%20Development/Learning%20Paths/Software%20Development%20Fundamentals.md)
← [Computer Science Principles Digital Information](Computer%20Science%20Principles%20Digital%20Information.md) | **2 of 10** | [Computer Science Principles- Programming](../Software%20Development/Computer%20Science%20Principles-%20Programming.md) →

## Appears In

- [Cybersecurity Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Cybersecurity%20Fundamentals.md)
- [Networking and Administration Fundamentals](../../Paths/Cloud%20Computing/Learning%20Paths/Networking%20and%20Administration%20Fundamentals.md)
- [Software Development Fundamentals](../../Paths/Software%20Development/Learning%20Paths/Software%20Development%20Fundamentals.md)

## Related Courses

_Courses sharing skills:_

- [Computer Science Principles- Programming](../Software%20Development/Computer%20Science%20Principles-%20Programming.md) — Computer Science
- [Computer Science Principles Digital Information](Computer%20Science%20Principles%20Digital%20Information.md) — Computer Science

---

[↑ Back to top](#)