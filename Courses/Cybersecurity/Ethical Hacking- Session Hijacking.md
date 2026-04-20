---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-session-hijacking
url: "https://www.linkedin.com/learning/ethical-hacking-session-hijacking"
duration_minutes: 77
duration: 1h 17m
level: Intermediate
updated: 5/15/2023
learners: 28628
skills:
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHTYIatFDHt5w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568158504841?e=2147483647&amp;v=beta&amp;t=PJLEA7eblGawp6qtmh0iC7vsEE2gab15mAL7YdzIZLU"
linkedin_topic: Cybersecurity
learning_paths:
  - Become an Ethical Hacker
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-04-19
---

![Ethical Hacking: Session Hijacking](https://media.licdn.com/dms/image/v2/C4E0DAQHTYIatFDHt5w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568158504841?e=2147483647&amp;v=beta&amp;t=PJLEA7eblGawp6qtmh0iC7vsEE2gab15mAL7YdzIZLU)

# Ethical Hacking: Session Hijacking

> One of the most sophisticated forms of cyberattacks is session hijacking. Hackers take over network, web, or service sessions—the valid interactions of unsuspecting users—in order to gain unauthorized access to data and systems and attack an organization from the inside. The root failure is weaknesses in common protocols. To prevent these attacks, IT security professionals need to know which proto

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking) | 1h 17m | Intermediate | 29K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Table of Contents

### Introduction

#### Understanding session hijacking
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980&t=0)** - [Malcolm] One of the more sophisticated forms of cyber attack involves taking over an existing session from an unsuspecting user.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980&t=8)** This enables an attacker to gain immediate access to anything in the user's current session.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980&t=13)** The attacker will also have the same privileges as the victim, a serious problem if the victim is a systems administrator.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980&t=20)** I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems against cyber attacks.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980&t=27)** In this course, I'll explain how an attacker can hijack your sessions by misusing a range of protocols including TCP, web, and DNS.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980&t=37)** I'll also describe how wireless session hijacking is used to take over physical devices, such as remotely piloted cars and drone aircraft.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-session-hijacking-2?u=76281980&t=46)** Let's get started with the LinkedIn Learning Session Hijacking course.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (1), dns (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [malcolm] (1)

#### What you should know before watching this course
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980&t=0)** - [Instructor] This is a practical course.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980&t=2)** And during this course, I'll be using a virtualized computing environment called VirtualBox.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980&t=9)** I'll also be using a number of tools, which are part of the Kali Linux framework, to test systems.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980&t=15)** If you're not familiar with Kali and virtualization, you should watch my Introduction to Kali Linux course, which will guide you through installing and using them.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980&t=25)** In addition, I'll be assuming that you understand basic computer and networking concepts, are familiar with Windows, and have a knowledge of basic Linux commands.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980&t=36)** This course requires a number of tools to be downloaded and installed, and you can pre-install these tools to avoid unnecessary waiting during the course.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/what-you-should-know-before-watching-this-course?u=76281980&t=45)** The detailed list of tools required to be installed to support this course is available as a PDF in the associated course material.

> [!info]- Semantic Content
>
> **Prerequisites:** install (1), required to (1)
> **Env Vars:** pdf (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third party testing tools.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=4)** Some are commercial products and some are open-source.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=8)** The download and installation instructions for all tools used in this course is available as a .pdf in the associated course material.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=17)** While we've done our best to ensure the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=30)** Some of the sites which store the testing tools are detected as dangerous, because the tools have similar signatures to malware and may raise antivirus alerts when you visit them.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=43)** The testing tools we demonstrate are extremely powerful.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=47)** They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise anti-virus alerts when you try to download them.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/disclaimer?u=76281980&t=57)** Again, we can't provide assurances that the software hasn't been compromised when you download it, and so, as for any of the software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (2)
> **Speakers:** - [instructor] (1)


### 1. Network Session Hijacking

#### Understanding TCP sequence numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=0)** - [Instructor] Session hijacking is often thought to be an arcane and highly technical attack on systems, and certainly does exploit the technical implementation of digital communications channels, but in reality, the tools available to the tester provide a straightforward means of looking for hijack vulnerabilities.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=19)** Nevertheless, it's useful to understand what's happening under the hood.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=23)** When we talk about session hijacking, we mean the ability of a tester or an attacker to take control of the communications between the user and a host service during their session.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=35)** This allows the attacker to gain access to the service without having to authenticate, because the legitimate user has already authenticated their access.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=44)** Session hijacking takes advantage of weaknesses in internet protocols, wireless LANs, and web services.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=53)** Communicating across the internet requires the use of the internet protocol.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=57)** This carries a number of sub-protocols, one of which is known as the transmission control protocol, or TCP.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=64)** IP carries the packets and TCP provides the control for enabling a session to be created, used, and closed.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=72)** Many of the services we all use daily are carried on TCP, such as web servers, web applications, e-mail, and file transfers.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=84)** To begin our journey into session hijacking, let's look at the anatomy of a TCP session using Wireshark to dissect the communication's packets.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=93)** If you're not familiar with Wireshark, you should check out my colleague, Lisa Bock's course, shown here.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=101)** When we click on the link to our web or e-mail server, the first thing that happens, is that we establish a TCP session.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=108)** Both sides of the session maintain a 32-bit sequence number, and this is used throughout the session.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=115)** I'll set Wireshark to capture packets, and I'll open IceWeasel to start a web browsing session.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=130)** Okay, I'll stop capturing, and we'll look at the packets.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=134)** There's a number of DNS packets to start with as IceWeasel establishes the IP address it needs to connect to.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=142)** In the packet 14, we can see the first TCP packet.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=146)** Let's right click and follow this TCP conversation.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=153)** We can clearly see the three-way handshake of a SYN packet, a SYN-ACK, and an ACK.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=160)** Let's look at the first one.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=162)** I'll click on the transmission control protocol line in the middle section to look at the structure of this packet.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=167)** In the middle of that, we can see the sequence number field, and I'll click on that.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=173)** It shows a relative sequence number of zero, but if we look at the field in the bottom pane, we can see, it is in fact, FE A6 74 6B.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=185)** In the next field, we can see an acknowledgement number of zero.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=189)** Note the Wireshark displays its sequence and acknowledgement numbers as relative values in the top and middle panes, but we can see the actual value in the bottom pane data packet.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=200)** Let's select the next packet in the top pane, the SYN-ACK.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=206)** Now we can see an acknowledgement number of FE A6 74 6C, which is the previous packet sequence number incremented by one, and Wireshark displays this as a relative number of one.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=220)** The sequence number in this packet is reset to a different value.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=224)** It's 00 00 2D DC, This is again shown as a relative sequence of zero.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=234)** Let's have a look at the ACK packet.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=237)** The acknowledgement number is, again, the previous sequence number incremented by one, and is 00 00 2D DD.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=248)** The sequence number is now FE A6 74 6C, which is a relative sequence number of one.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=258)** At this point, both ends of the session have their sequence numbers set to relative one.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=265)** The next packet is the HTTP request from the browser.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=269)** This has a relative acknowledgement number of one, and a relative sequence number of one.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=277)** Note that the length of the packet is 502.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=281)** The server responds with an ACK.
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=284)** If we look at the packet, we can see the relative acknowledgement number is 503, and the relative sequence number is one.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=291)** We can see the acknowledgement number is used to maintain a count of the number of bytes received so far in this session.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=298)** The server then sends an HTTP response.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=303)** With the relative acknowledgement number of 503 and the relative sequence number remaining at one.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=310)** Note the packet length is 307.
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=312)** The browser then sends an ACK with its relative acknowledgement number now updated to 308 and a relative sequence number of 503, which reflects the payload sent so far.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=324)** Wireshark provides a useful function to see what's happening in a TCP session.
>
> **[5:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=329)** I'll select Statistics and Flow graph.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=338)** I'll moved down the list to where we can see the HTTP exchange,
>
> **[5:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=348)** and then I'll click to display the packet sequence and acknowledgement numbers.
>
> **[5:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=355)** Each end of the session maintains counts of data received and sent, using the sequence and acknowledgement numbers.
>
> **[6:02](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=362)** In doing this, each end can ensure that it has received the same number of bytes of data, as is indicated as having been sent by the next packet to arrive.
>
> **[6:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-tcp-sequence-numbers?u=76281980&t=373)** Understanding this helps us understand how a TCP session can be hijacked.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (9), ack (6), syn (3), http (3), dns (1)
> **Code Keywords:** let (5), function (1), this, (1)
> **UI Navigation:** click on (3), select the (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Hijacking a Telnet session
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=0)** While much of the internet runs through web sessions, some of the earlier internet protocols which run directly on TCP and UDP are of significant interest to attackers.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=12)** It's useful therefore to understand how these protocols can be hijacked at a network level.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=18)** One of the tools we can use to do TCP session hijacking is Shijack, shown here at the Packet Storm Security site.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=25)** I've already downloaded and unzipped this tool so let's get started and look at how we might hijack a telnet session.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=33)** I'll run this attack from Kali so I've got a terminal open, ready to go.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=38)** The first thing I need to do is poison the local network.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=41)** I could do that on a command line using the ARP spoof tool, but I quite like the Ettercap graphical utility.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=49)** I'll start up Ettercap using the minus g switch to run it in graphical mode.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=56)** Ettercap starts up and we can see the main screen.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=59)** I'll select sniff and unified sniffing, and I'll accept etx0.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=68)** I'll now select hosts and scan for hosts.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=78)** Okay, we've got a list of hosts and my two telnet conversation lists are there.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=83)** I'll add 10.0.2.6 as target one, and I'll add 10.0.2.10 as target two.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=93)** I'll now select Mtm, ARP Poisoning, sniff remote connections, and we're poisoning my two targets.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=105)** My Metasploitable system on 10.0.2.6 has a telnet server running.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=110)** And I can connect to it from my Windows 7 system on 10.0.2.10 using the PuTTY client.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=116)** I've got this ready to go so let's set it up.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=122)** Okay, that's now connected and is asking for user ID and password to log in.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=127)** I'll enter them.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=131)** We've logged in to the Metasploitable system and I can run shell commands through telnet.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=137)** Okay, so note that we just have one subdirectory shown here.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=141)** I'll come back to this shortly.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=144)** Back in Ettercap I can see that I've captured the user ID and password used to log into Metasploitable.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=149)** That's a great start, I'm man-in-the-middle.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=152)** I've intercepted credentials and could now go to start my own telnet session on this host.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=157)** However, let's be more stealthy and just take over this session.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=162)** I'll need to know what port the PuTTY client is running on, and I can do this by running Wireshark and capturing some of the traffic.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=168)** I'll start up Wireshark.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=181)** Back in my PuTTY session I'll run the LS command once again to create some traffic on the telnet session.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=189)** Okay, back in Kali I've selected telnet a packet in Wireshark to find the source port, and we can see that's using port 50168.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=198)** I've opened another terminal window to hijack the session.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=201)** I've got the Shijack software ready to go in its /usr/share/shijack directory.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=214)** I've just sent some traffic through to speed things up.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=218)** And back in Kali we can see that Shijack detected the traffic and took over the session.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=223)** We saw earlier that the directory of Metasploit just had the one entry to the vulnerable subdirectory.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=229)** I'll now issue a command to add another directory.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=232)** Note that because Shijack sends only the linefeed character 0A after the command, I'll also send control V to add the character to it, 0B that telnet requires.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=247)** We don't let anything echo back, but the command has been actioned.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=251)** Okay, let's go look at our Metasploitable system.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=256)** Let's see what's here now.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=259)** Okay, we can see that the hijack directory has been created.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-a-telnet-session?u=76281980&t=263)** We've hijacked the telnet session and have full remote command execution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), switch (1)
> **Env Vars:** tcp (2), arp (2), udp (1)
> **Versions:** 10.0.2 (4)
> **Tools:** terminal (2), command line (1)
> **CLI Commands:** ls (1), find (1)
> **Warnings:** note that (2)
> **Ports:** port 50168 (1)
> **UI Navigation:** go to (1)

#### Real-world hijacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=0)** - [Presenter] A popular example of session hijacking was the 2008 Yahoo Mail session hijacking attack, which was popular enough that a special hacking tool called YM_hijack was written so that testers could run the hijack as soon as they gained access as a man in the middle.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=18)** More recently in 2017, Danielle Sparkman ran a penetration test of the GitLab service.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=25)** He noted that his session token was carried in the URL and he was simply able to paste the session token into a packet and hijack the session.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=34)** This was particularly concerning as GitLab issues permanent session tokens that never expire.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=40)** Once they're found they provide ongoing access to the perpetual session.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=46)** In 2019, the Slack online service was found to be vulnerable to a session hijacking attack found fortunately by a security researcher on a bug bounty hunt.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=56)** The vulnerability was an HTTP requests smuggling vulnerability.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=60)** This form of attack tampers with the HTTP request sequence between a web server and the backend server and occurs when the two treat the packet boundaries differently.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=69)** The result is that cookies can then be stolen, which in Slack's case could have caused the compromise of their customer accounts and sessions.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/real-world-hijacks?u=76281980&t=77)** Slack fix the problem within 24 hours.

> [!info]- Semantic Content
>
> **Tools:** slack (3), gitlab (2)
> **Env Vars:** http (2), url (1)
> **Speakers:** - [presenter] (1)


### 2. Web Session Hijacking

#### Understanding web sessions
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=0)** - [Instructor] HTTP is a stateless protocol, so there's no retention of any information between webpages.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=7)** However there's often a need for managing information across a web session consisting of multiple interactions.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=14)** Consequently, web developers will code their systems to uniquely track a web user through the use of unique sessions IDs issued by the server.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=24)** Each browser request sent to the web server will then include session ID.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=29)** Session IDs will often be used as a way to uniquely identify an authenticated user, and potentially enable access to sensitive information.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=38)** A typical way for a web developer to store session IDs is to use the .php session array, and then the session ID can be passed in one of two ways, embedded in the URL or through the use of cookies.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=53)** We can also create our own variables and store them in the session array as required.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=60)** I've created a webpage for Apache which uses sessions.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=64)** So let's have a look at how we'd get a session ID and use the session array.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=73)** We can see the private sessions start script at the beginning of the file.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=78)** This creates a new session with a random session ID which we access and store in the $private_id variable.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=86)** We store the current script username in the $user variable and store that in the session array also.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=92)** The session array is stored server-side, so it can be accessed in subsequent calls.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=98)** To demonstrate this, I've also included HTML code below the .php session script.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=104)** This code recovers and displays the session ID and the user ID on the browser, and uses URL passing to display a second page when the Page2 link is pressed.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=116)** Let's have a quick look at the second page code.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=123)** Okay, we can see the .php code to recover the session and then display the second page with the recovered session information.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=130)** Exploiting this is trivial, just change the URL value.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=136)** I've got Chrome setup to go, and I'll request the Metasploitable IP with the PHP script file.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=147)** There we have the random session ID that was created and also we can see the username of our session.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=153)** I'll now click on Page2.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=156)** In the URL bar, we can see the call to Page2 with the ID set as the URL parameter.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=163)** And Page2 displays the same ID and the username we stored in the previous page.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=169)** Let's see how we'd do the same thing using cookies.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=175)** This version of the session management code now includes a line at the end of the PHP section for setting a cookie, called session_hijack_course.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=185)** The cookie value is the session ID and it has a 30 day time expiry.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=191)** The call to MyPageC2 doesn't include a URL parameter.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=201)** The second page code recovers the session ID from the cookie called session_hijack_course, and then recovers the session data.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=209)** As before, the HTML code then displays it.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=213)** Okay. Let's run that.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=221)** As before, we see the session data.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=224)** I'll go to the second page.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=227)** The URL just shows a call to the second page with no parameter.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=231)** However, once again, we can see we've recovered the session ID from the cookie and the username from the session data.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-web-sessions?u=76281980&t=238)** Sessions provide a useful way of storing any information that we want to hold and can be easily used when passing session IDs in URLs or cookies.

> [!info]- Semantic Content
>
> **Env Vars:** url (7), html (2), php (2), http (1)
> **CLI Commands:** php (5), apache (1)
> **Code Keywords:** let (4), private (1), this, (1)
> **Code Identifiers:** session_hijack_course (2), private_id (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Understanding WebSockets
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=0)** - [Voiceover] With the release of HTML5, more sophisticated state management capabilities are available to the web developer.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=8)** WebSockets provide the ability to set up a full duplex communications channel between the client and the server, this requires a handshake over HTTP or HTTPS to upgrade the protocol to WS or WSS and a WebSocket server to manage the protocol.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=27)** Firstly the client initiates a connection by sending an HTTP WebSocket handshake request, then the server responds with a status code of 101 switching protocols, in then switches to WebSockets and both the web browser and the web server communicate using the WebScocket API, according to RFC 6455, the WebSocket protocol.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=54)** Websocketd is an easy to use WebSocket server, written by Joe Walnes, which we can load into our Ubuntu system, we can get the zip file of this server from his GitHub page, unpack it, and it'll be ready for use.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=69)** Okay, we've downloaded the file, so now let's unzip it.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=78)** Let's take a look at what we've got.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=82)** Okay, so we can see the WebSocketd program, which is the WebSocket server, while this server provides the ability to maintain state, it doesn't actually do anything, hence we need to complement it with some processing capability.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=96)** The WebSocket server comes with a development console to ensure the protocol is working, and I've prepared a script as a back end program for the console.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=110)** This is a simple Bash script which counts to 10 and echos the count to its output channel, in this case the WebSocket.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=120)** Okay, let's start the server, I'll start it on port 80 88, any port that's not in use would be fine.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=135)** I'll now use Chrome from my Windows 7 system to connect to the WebSocket server, I do that by connecting through HTTP on the WebSocket port 80 88.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=145)** Chrome has built in support for WebSockets, so we don't need anything extra on the browser.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/understanding-websockets?u=76281980&t=151)** Okay, we can see the URL is now WS colon, the Bash script is communicating it's count, and we have a running WebSocket server.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), html5 (1), https (1), wss (1), api (1)
> **Code Keywords:** let (3)
> **Tools:** bash (2), github (1)
> **Ports:** port 80 (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** unzip (1)
> **Documentation:** rfc (1)
> **Exercise Files:** zip file (1)

#### Banking on Zero
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=0)** - [Instructor] When learning how to do web testing, it's useful to have a target website to use.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=6)** While Metasploitable does provide a website, this doesn't always have the functionality required.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=12)** A better solution to use for more real world testing is the HP450 online banking web server.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=21)** We can see the main screen with the login button at the top right.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=25)** ZeroBank has a number of deliberate security flaws, and we'll use this further in the web testing course.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=31)** However for this course, we're just interested in using a standard website.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=36)** To get in, we just use the username username, and the password password.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=48)** Now we're in, we can see we have an account available, and we can check activity, transfer funds, pay bills, look at our money map, and get statements, okay?
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/banking-on-zero?u=76281980&t=64)** I'll log out now, and we'll come back to this site as we start testing.

> [!info]- Semantic Content
>
> **Env Vars:** hp450 (1)
> **Speakers:** - [instructor] (1)

#### Hijacking sessions using man-in-the-browser
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=0)** - [Teacher] Man in the Browser, or MITB, is a form of attack which inserts code inside a user's browser possibly by having them visit a malicious website or clicking on a malicious email attachment.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=13)** The malware sits inside the browser sniffing or modifying transactions prior to their transmission.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=19)** But not interfering otherwise with the user's activity.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=22)** This makes Man in the Browser an extremely difficult attack to detect.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=27)** There are four common ways to create a Man in the Browser.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=30)** Using browser helper objects, which are dynamically loaded libraries in Internet Explorer.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=36)** Using extensions.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=38)** These are the equivalent to browser helper objects for Firefox.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=42)** Using API hooking.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=44)** A technique which uses the Windows operating system to route messages through the malware.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=49)** And using malicious JavaScript.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=52)** Man in the Browser malware seamlessly integrates into the web application look and feel and retains the original URL and SSL protections.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=61)** All intents and purposes, the injected page is the original web page and is difficult to detect eve by the most sophisticated security aware end users.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=72)** The malware can inject new HTML code into the webpages coming from the server, including new fields on login pages to capture sensitive information from the victims.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=82)** It can also capture the information directly from browser memory and may be invisible to any antivirus software.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=89)** Many cyber criminals have move from older Man in the Middle attacks to Man in the Browser.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=96)** We'll use the browser exploitation framework in Kali to demonstrate how this attack works.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=102)** Let's start the framework.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=108)** OK, the framework has strted and we can see the user interface panel is at 127.0.0.1:3000.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=116)** Let's open IceWeasel and navigate to the panel.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=124)** This is login page.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=125)** We'll use beef as the username and password.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=133)** Currently, the folders on the left are empty, so there are no browsers being hijacked by the BeEF malware.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=139)** However, if we hover over the link to the advanced demo page, under the Getting Started section, we can see that the URL 127.0.0.1:3000/demosbutcherindex.html.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=155)** Let's go to our Windows 7 system and visit that site.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=160)** I'll navigate to the BeEF malicious website on my Kali server.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=166)** We see the picture of the beef and we've been compromised just by visiting the site.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=172)** Back in Kali we can see that the Windows 7 system now appears on the lefthand side under online exploited browsers.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=179)** We've successfully carried out a Man in the Browser attack.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=183)** We can now click on the compromised system and the browser details are displayed in the main panel.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=191)** I'll click on the commands tab and we can see all the commands that can be used to exploit the victim.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=197)** There are a number of direct browser attacks.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=200)** We can see them by expanding the browser command and then expanding Hooked Domain.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=208)** The first entry is to get the current session cookie.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=211)** Let's click on that.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=213)** The instructions will appear in the righthand panel and we can press the execute button to execute it.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=221)** A results entry appears in the middle panel and when I click on it, I can see the cookie in the righthand panel.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=228)** Let's click on Get Page HTML.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=232)** And again, the instruction will appear in the righthand panel.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=236)** I'll click on the execute button and on the results line.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=241)** And when I click it, the HTML code is shown in the righthand panel.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=246)** Another useful command is the Replace HREFs [HTTPs], which will replace all HTTPs calls with HTTP resulting in a session downgrade attack.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=260)** OK, so this has been a brief introduction to Man in the Browser attacks.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-sessions-using-man-in-the-browser?u=76281980&t=263)** And the use of Kali's browser exploitation framework as a demonstration of how code can be inserted into a browser.

> [!info]- Semantic Content
>
> **Env Vars:** html (3), url (2), mitb (1), api (1), ssl (1)
> **UI Navigation:** click on (6), navigate to (2), go to (1)
> **Code Keywords:** let (5), interface (1)
> **Ports:** :3000 (2)
> **Versions:** 127.0.0 (2)
> **File Paths:** 3000/demosbutcherindex.html (1)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)

#### Intercepting sessions through man-in-the-middle
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=0)** - [Instructor] Electronic commerce involves two people or organizations doing business through messages sent over an internet connection.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=7)** The expectation is that nobody is listening to the traffic on that connection.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=11)** And often cryptography will be used to make sure that anyone who does listen won't be able to understand the messages.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=19)** A man in the middle attack, abbreviated to MITM, is a form of cyber-attack in which the attacker inserts himself or herself into the connection, routing traffic from each of the participants to the other and reading it as it passes through.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=36)** The attacker can also remove, change, and insert data into the traffic.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=41)** In the more sophisticated attacks, the attacker is able to defeat any encryption that might be used.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=46)** Man in the middle, then, is an eavesdropping attack carried about by establishing a relay or proxy into a communications session.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=54)** It may exploit in real time or after the fact the information obtained from the interception.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=60)** Often, neither of the legitimate participants will be aware their connection has been compromised until it's too late.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=68)** This example how an attacker defeats the cryptography used in a client server SSL encrypted connection.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=74)** The client has established a connection with the server.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=78)** The client starts by requesting an SSL session by sending an unencrypted client hello message, which specifies the options that it's able to use to set up the secure connection.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=90)** These include things like the version of SSL, and the acceptable crypto-algorithms.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=95)** The server responds with an unencrypted server hello message and confirms the specific options to be used for the encryption on the connection.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=104)** The server also sends its certificates, which includes its public key and a server hello done message to close the server's part of the setup.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=112)** The client then sends a client key exchange message encrypted with the server's public key, which includes a session key for the encryption.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=120)** The client also sends a change cipher message and then sends a finished message.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=125)** The server sends a change cipher and finished message in response.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=129)** The connection is now set up, and the client and server can communicate securely across an encrypted connection.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=136)** Now let's look at what happens when an attacker has inserted themselves in the middle.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=141)** To understand this, we'll need to look at the protocol in a bit more detail.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=146)** The client sends a client hello message, but the communications path has been subverted to send that message to the attacker.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=153)** The attacker takes the message and sends the same client hello to the server.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=158)** The server thinks this comes from the real client.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=161)** The server sends back a server hello to the attacker who copies that and sends it back to the client.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=168)** The server sends its certificate to the attacker and the attacker sends a server certificate to the client, but with his or her own public key.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=177)** This is the fake server certificate.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=180)** Now the client key exchange is carried out between the client and the attacker, while another client key exchange is carried out between the attacker and the server.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=189)** These two exchanges set up two different encrypted connections with the attacker in the middle.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=196)** The client and the attacker can now communicate securely, with the client thinking it's talking to the server.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=202)** The attacker and server can communicate securely, with the server thinking it's talking to the client.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=207)** The attacker decrypts and re-encrypts messages going both ways, and so sees everything that is being transmitted.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=216)** Establishing a man in the middle can be done in any number of ways.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=219)** The browser can be reconfigured to connect through a web proxy, which is a deliberate man in the middle, this is used to do testing of web connections, but can also be introduced maliciously.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=230)** We'll use a couple of tools to demonstrate this.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=233)** WebScarab and Zed Attack Proxy.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=236)** Subverting the local network address resolution protocol by running an ARP poisoning attack so that all, or selected network users connect via the man in the middle.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=246)** We show how this works using the Subterfuge tool.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/intercepting-sessions-through-man-in-the-middle?u=76281980&t=250)** Introducing a malicious Wi-Fi hotspot point and waiting for users to inadvertently connect to it.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (1), this, (1), this. (1)
> **Env Vars:** ssl (3), mitm (1), arp (1)
> **Prerequisites:** set up (3), setup (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Stripping SSL to downgrade the session
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=0)** - [Voiceover] One of the weaknesses of a man in the middle attack is that it requires the attacker to use a fake certificate with their public key.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=7)** Some sites may detect this, and warn that the certificate is invalid.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=12)** SSL stripping is an attack which is used in the key exchange protocol, and is used to downgrade security for the connection without interfering with the certificate exchange.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=22)** This is also known as an HTTP downgrade attack.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=26)** Let's look at what happens when an attacker downgrades the connection.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=31)** Again, this starts with a man in the middle.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=34)** The client enters the server URL to connect to, for example, their online banking system.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=40)** The communications path is being subverted to send that message to the attacker.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=45)** The attacker takes this message, and sends it on to the server.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=48)** The server thinks this comes from the real client.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=51)** The server responds to the attacker with an internet banking log-in page using HTTPS.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=57)** The attacker modifies that response, changing it to HTTP, and sends it back to the client.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=64)** The server carries out a standard SSL exchange with the attacker.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=67)** And a secure connection is set up as usual.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=71)** Meanwhile, no secure session is created for the client, as this is simply an HTTP connection.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=78)** The client and the attacker now communicate without security.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=81)** With the client thinking it's talking to the server, the attacker and the server can communicate securely, with the server thinking it's talking to the client.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=90)** The attacker can see messages going to and from the client, and sees everything that's being transmitted.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=96)** The elegance of this attack is that the certificate from the server has been validated, and so no invalid certificate warnings are seen.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/stripping-ssl-to-downgrade-the-session?u=76281980&t=103)** Of course, the client might notice that the session is using HTTP and not HTTPS, but unless this is highlighted by the browser, it's likely to go unnoticed.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), ssl (2), https (2), url (1)
> **Code Keywords:** public (1), this, (1), let (1)
> **Definitions:** is an  (1), known as (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [voiceover] (1)

#### Hijacking an HTTP session through cookies
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=0)** - [Instructor] In order to hijack an HTTP session, I'll intercept network traffic using my Windows attack system.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=8)** For this, I've got Wireshark installed and I've set my network interface to allow promiscuous mode.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=14)** You can do this in VirtualBox by selecting the virtual machine, select the Network Settings, Advanced, and then Allow VMs.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=23)** Right now, I'm in Windows as the attacker.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=26)** In order to demonstrate how a session can be hijacked using cookies, I'll have to install an extension called Tampermonkey to my Chrome browser and install the cookie injection script.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=37)** I'm at the Tampermonkey site and I'll select the stable version.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=43)** Chrome will ask if I want to add the extension.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=46)** And I do.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=50)** Hit Download, it automatically installs.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=53)** Now I've got Tampermonkey installed, I need to install a cookie injection script.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=58)** You'll find this in pre-configuration file attached to this course.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=63)** I've got it loaded as a text file in my Windows system called Cookie Inject.txt.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=70)** I'll copy this.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=76)** I'll open the Tampermonkey icon on the top, create a new script, and paste in that script.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=84)** And File, Save.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=87)** And we can see the cookie injection script is active.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=91)** I've started Wireshark in my Windows system and I'll set the filter to HTTP cookies and I'll activate it.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=105)** I'm in Karli as the victim and I'll bring up the Zero Online Bank in Firefox.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=113)** I'm at the homepage and I can now log in using the credentials we saw earlier.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=121)** I've got my account summary and I can now go ahead and do some banking.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=126)** Okay, I'm the bad guy again, and I'll stop Wireshark recording.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=130)** Let's check the first HTTP packet and check for the cookie.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=136)** We can see we have a JSESSION cookie.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=138)** I'll expand this and right-click on the expanded JSESSION and copy it as printable text.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=146)** I'll now go to the online banking site using Chrome and we get the front page.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=152)** Okay, I'll press alt+c and I'll paste in the cookie and I'll refresh the page.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=163)** We can see we've been logged in.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=165)** There's now a username in the top right part of the screen.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=169)** I can now click on Online Banking and look at my account summary.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=175)** There we go, we've got full access to the account even though we haven't entered any credentials.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=181)** We successfully hijacked an HTTP session through intercepting and reusing cookies.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=188)** The moral to this story is be careful what you do on a public wifi network.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-an-http-session-through-cookies-2?u=76281980&t=193)** Cafes, hotels, and other hotspots may well be one step away from a hijack.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), jsession (2)
> **UI Navigation:** select the (2), open the (1), right-click (1), go to (1), click on (1)
> **Code Keywords:** this, (1), interface (1), this. (1), let (1), public (1)
> **Prerequisites:** install (3)
> **File Paths:** inject.txt (1)
> **CLI Commands:** find (1)
> **Tools:** firefox (1)
> **Warnings:** be careful (1)

#### Using Subterfuge to hijack sessions through ARP poisoning
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=0)** - [Teacher] Subterfuge is a testing tool which provides a number of capabilities, including denial of service, Man in the Middle, and session hijacking, and is designed to be very easy to use.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=11)** The tool is available from GitHub as shown, and can be loaded into Kali through cloning.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=16)** Subterfuge runs an ARP poisoning attack on the local network to enable Man in the Middle and session hijacking.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=22)** The latest release of Subterfuge requires that MITM proxy also be installed.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=28)** It's installed on Kali, but if you're using another Linux distribution, then the instructions for installing this are in the preconfiguration file associated with this course.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=37)** Subterfuge was hugely popular when it first came out due to its ability to do SSL stripping and intercept user accounts and passwords easily.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=46)** While many sites now use more sophisticated security, and no longer fall prey to this attack, there are still a significant number that remain vulnerable.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=55)** Before we demonstrate the Subterfuge tool, let's look at how ARP poisoning works.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=60)** When connected to a local network, the system is assigned not only an IP Address for its internet activities, but also a MAC Address for use by ethernet.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=70)** This is the hardware address of the network card.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=73)** Because the local network operates using MAC Addressing, the address resolution protocol is used to map IP Addresses to MAC Addresses so that traffic can be routed around the local network to the correct system.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=86)** Machines on the network maintain an ARP look-up table to translate between IP Addresses and MAC Addresses.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=93)** When sending a packet to an IP Address, for example, 192.168.1.32, the system will first consult this table to see if it already knows the MAC Address.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=104)** If a value is cached, that value will be used.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=108)** But if it's not known, then the system will broadcast to the network using the ARP protocol and ask who has 192.168.1.32.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=117)** The system with the requested IP Address will reply with an ARP packet that says, "I am 192.168.1.32" together with its MAC Address.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=126)** This is then added to the ARP table.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=130)** Anytime a system receives an ARP identification packet, it updates its ARP table.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=136)** ARP poisoning then occurs when the attacker sends a malicious IM packet to one or more network users, associating the IP Address with its own MAC Address.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=147)** When received, these replace the real MAC Addresses.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=150)** By maintaining its original table, the attacker can send on all packets it receives, hence becoming a Man in the Middle.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=157)** The gateway is often an attack point, as it's used to route all the internet traffic.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=164)** We can see the ARP table on Linux systems by entering the command "arp -an".
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=172)** Okay, let's see how ARP poisoning works in practice.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=175)** I'll changes to my tools directory and download Subterfuge.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=185)** Okay, that's downloaded.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=186)** I'll go into the Subterfuge directory and set it up using its setup script.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=201)** Okay, we're set up, and we can run Subterfuge now.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=210)** Subterfuge runs some system checks, and then starts up the Subterfuge server.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=214)** It's now running, and has port 80 open on the local machine, ready for me to connect.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=221)** Okay, with Iceweasel open, and let's go 127.0.0.1.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=227)** And we're presented with a Subterfuge screen.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=230)** Let's have a look through the Subterfuge options.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=232)** There are two tabs on the top menu bar, Modules and Settings, and a Start button.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=240)** The Settings tab provides a few simple configuration items: Reset, Update, and General Settings.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=247)** The Reset pane allows any old captured data to be purged prior to starting a new session.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=252)** At the end of a session, data can also be exported for use outside of Subterfuge.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=257)** The Update pane enables the Subterfuge software to be updated.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=261)** Subterfuge, by default, automatically configures its host system, but you can elect to do this manually.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=267)** The General Settings allows manual configuration of the gateway, and selection of either SSL stripping or Man in the Middle proxy.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=275)** I'll leave these settings as default.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=277)** The next tab in the settings is MITM Vectors, which allows one or more individual targets to be selected rather than the whole subnet.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=286)** Configuration allows the speed of ARP poisoning to be controlled.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=291)** And Advanced provides a Notifications button, which shows the system status reports.
>
> **[4:59](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=299)** The Modules tab provides access to the main modules that Subterfuge can run.
>
> **[5:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=304)** Network View is used to monitor all activity on the network, and launch advanced attacks.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=309)** Credential Harvester is used to collect cookies and credentials, and will transparently downgrade SSL to do so.
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=316)** This is the default module, and the one we're interested in for session hijacking.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=321)** Module Builder is used to create custom attacks for integration within the Subterfuge framework.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=327)** Tunnel Block is used to block attempts to avoid Man in the Middle attacks, in particular blocking tunneling protocols.
>
> **[5:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=333)** Denial of Service is used to disconnect a client from the network, and the HTTP Code Injection module does just that, injects code directly into a browsing session.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=343)** Finally, the Session Hijacking module collects cookies to enable a session to be hijacked.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=349)** Okay, let's click on the Subterfuge symbol at the top-left to get back to the main harvesting screen.
>
> **[5:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=355)** I'll press Start to begin harvesting credentials and cookies.
>
> **[6:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=361)** I'll accept the auto-configuration.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=364)** The first thing Subterfuge does is to automatically run an ARP poisoning attack in order to collect traffic.
>
> **[6:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=371)** Note the Start button has been replaced with a Stop.
>
> **[6:15](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=375)** Subterfuge takes a few seconds to run the ARP poisoning, and it maintains ongoing poisoning until such time as we press Stop.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=384)** Subterfuge is able to extract credentials from sites through SSL stripping.
>
> **[6:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=389)** So let's go read a newspaper.
>
> **[6:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=393)** Okay, I'll try signing in using some invalid credentials.
>
> **[6:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=403)** Okay, let's see what Subterfuge made of that.
>
> **[6:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=408)** Back in Kali, we can see that Subterfuge has extracted the credentials.
>
> **[6:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=412)** Many sites have adopted more robust security measures that are not vulnerable to this kind of extraction.
>
> **[6:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-subterfuge-to-hijack-sessions-through-arp-poisoning?u=76281980&t=418)** But it's good practice not to log in using your credentials when browsing from a cafe or hotel internet site in case passive collection is possible.

> [!info]- Semantic Content
>
> **Env Vars:** arp (14), mac (8), ssl (4), mitm (2), http (1)
> **Code Keywords:** let (7), module (4), default, (1), default. (1), finally, (1)
> **Versions:** 192.168.1 (3), 127.0.0 (1)
> **Prerequisites:** setup (1), set up (1)
> **Ports:** port 80 (1)
> **Tools:** github (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Using Webscarab-NG as a web proxy
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=0)** - [Narrator] When testing internet sites for security vulnerabilities, it's useful to be able to act as a man in the middle.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=7)** Many web testing tools provide this functionality in the form of a web proxy.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=12)** WebScarab is the OWASP tool used for web proxying.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=16)** As shown here on the OWASP site, WebScarab is a Java tool, so using it requires having Java installed on your computer.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=26)** Web proxies are application-level devices and are often used in corporate environments to provide a point of monitoring and security enforcement.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=36)** WebScarab comes preloaded in the Web Application Analysis menu in Kali.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=42)** I'll click on it and shortly the WebScarab interface will appear.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=47)** I'll click on the Proxy tab and the Listeners tab, and we can see that WebScarab is listening on ports 8008.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=56)** I'll go back to the Summary page.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=59)** I'll start Firefox and change its configuration to route through the proxy.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=63)** I do this through Preferences, Advanced, Network, Settings, and Manual system proxy configuration, which I'll set to 127.0.0.1, and port 8008.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=83)** Okay.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=85)** Now we need to navigate to a website.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=88)** I'll connect to the Zero Banking test website provided by the folks at HP Fortify.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=94)** The main log-in screen for the website appears.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=99)** Back in WebScarab, we can see that the initial connection had been monitored and recorded.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=104)** If I right-click on the Get message, I can show the conversation.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=110)** If I click on the Raw tab, we can see the message as it was sent.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=117)** I'll log in to the website with the credentials username for the username, and password for the password.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=129)** Okay, I'm in the bank and ready to do some banking.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=133)** I'll explore a bit while I'm here and then I'll log out.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=141)** Let's see what WebScarab thought of that.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=144)** I'll select the Post message in the bottom panel, which references signin.html, and double-click.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=151)** A pane comes up showing the message.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=154)** The Raw tab in the top panel shows the message with the user ID and password clearly visible.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=164)** If I go to the most recent message and double-click, I can see the cookie in the message header.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=174)** Using a web proxy for testing isn't a malicious session hijack as the only session it's hijacking is your own.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=182)** But it's a good example of the man-in-the-middle technique to capture cookies and credentials, and it's an important step in a hijack.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-webscarab-ng-as-a-web-proxy-2?u=76281980&t=190)** There's a lot more to WebScarab but I'll leave that for you to explore.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), double-click (2), navigate to (1), right-click (1), select the (1)
> **Code Keywords:** interface (1), let (1)
> **Env Vars:** owasp (2)
> **File Paths:** signin.html (1)
> **Ports:** port 8008 (1)
> **Versions:** 127.0.0 (1)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)

#### Defeating the Hijack
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=0)** - [Instructor] There's a number of things we can do to make session hijacking much more difficult for our adversaries.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=6)** Let's take a look at some of the key ones.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=9)** Firstly, a session hijack will usually mean the hijacker will run our session from their own device.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=17)** We can use continuous verification of the session source to defeat many forms of session hijack.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=24)** When we start our session as a legitimate user, the continuous verification system will capture some form of unique identifier from our device.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=34)** It then probes the session user at regular intervals during the session to verify that the same device is still connected.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=43)** If the device has changed, the now suspicious session is terminated and the hijack fails.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=50)** Web hijacks are a significant issue and a good first step in avoiding web session hijack is to secure the cookies.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=58)** When our web application creates a cookie, we can use the secure and the HttpOnly attributes as shown in this example.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=67)** Another cookie setting that we can use is the SameSite attribute.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=72)** This can be set to None, Lax, or Strict.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=76)** By setting SameSite equals Strict, we can prevent cookies from being included with cross-site requests.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=84)** This provides some protection against cross-site request forgery attacks as the browser only sends the cookie with requests from the cookie's originating site IE not cross-site.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=97)** Here's an example of using SameSite.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=102)** There are some additional hardening changes which will improve our resilience against web session hijacks.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=108)** These include making the session IDs 128 bits or longer to prevent brute force attacks.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=115)** Ensuring that session tokens are not included in URLs.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=121)** Using the content security policy header to avoid loading JavaScript from external sites, this prevents cross-site scripting attacks.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=131)** Renewing our session keys after initial authentication, and invalidating session tokens once a user logs out.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=140)** Regardless of the measures we employ to defeat hijack attacks, some may still get through.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=146)** In these cases, it's important to detect and respond to them quickly.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=150)** Ideally, we'll have an appropriate incident response plan ready to go.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=156)** We'll often find out about a session hijack when a user lodges a trouble ticket because their account has been locked out, the password changed, or the last access time appears wrong.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=168)** We can respond by terminating all sessions for that user in order to contain the threat.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=173)** We may be able to roll back whatever changes occurred within the victim's account and purge any malicious changes.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/defeating-the-hijack?u=76281980&t=181)** And we can recover the account by resetting its credentials.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 3. Additional Tools

#### Using Zed Attack Proxy (ZAP)
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=0)** - [Instructor] Zed Attack Proxy is another web proxy tool which comes as part of Kali.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=5)** Let's take a look at it.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=7)** I select Applications, Web Application Analysis, owasp zap.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=12)** Okay, we have the main ZAP page.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=14)** Let's check Tools, Options, and select Local Proxies, and we can see that ZAP is set up to proxy on port 8080.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=26)** I start up Firefox, and I'll set it up for proxying by selecting Preferences, Advanced, Network, Settings, Manual proxy, to 127.0.0.1, and Port 8080.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=49)** Okay, we're ready to go.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=52)** I'll connect through to the Zero Online Banking site, and I'll log in with a username of username, and a password of password.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=65)** Okay, I'll go back to ZAP to see what's happened.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=68)** I'll open the Sites in the left panel.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=73)** And we can see the banking site has been recorded, with the conversation in the bottom panel.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=80)** I've selected the POST request for sign in, and in the top right panel in the Request tab we can see the message header, and the plain text credentials and user token in the lower part.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=91)** I'll now get ZAP to hold all requests for me to inspect, and, if I want, to change.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=96)** To do this I'll press the green circle in the top menu, which is set to break on all requests and responses.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=103)** I'll now select the funds transfer, and ZAP will intercept the message.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=108)** There's now another tab called Break, and I can see a GET request in that.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=114)** I can let this go through by pressing the right-hand play button on the top bar.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=121)** And I'll press break again.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=124)** Back at the Online Bank, I can see the Transfer Money page, and I can see I have $1,000 in my account.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=131)** I'll transfer $10 to Brokerage,
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=141)** and I'll continue.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=143)** Back at WebScarab we can see the $10 transfer in the Break panel.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=148)** I can now edit the $10 to $100, and then press play again.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=159)** Back at the Bank, we can see the transfer has been changed to $100.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=164)** We've successfully made a man-in-the-middle change to the transfer amount.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-zed-attack-proxy-zap?u=76281980&t=169)** Any time a cyber criminal can gain access as a man-in-the-middle, they've a great opportunity to monitor for, and modify, transactions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), break, (1), continue (1), for, (1)
> **Env Vars:** zap (5), post (1)
> **Ports:** port 8080 (2)
> **API Endpoints:** post  (1), get  (1)
> **UI Navigation:** open the (1), select the (1)
> **Versions:** 127.0.0 (1)
> **Cross-References:** go back to (1)
> **Tools:** firefox (1)

#### Using Cain
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=0)** - [Voiceover] Cain and Abel is designed to be used to collect credentials and crack passwords.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=5)** And includes session hijacking a man-in-the-middle throughout poisoning.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=9)** It runs natively on Windows platforms.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=12)** It's been around for a while, and it is one of the more capable windows testing tools.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=17)** Cain is available for download from the oxid.it website shown here.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=23)** I've already downloaded and installed the software, so let's take a look at it.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=27)** The main screen has a menu at the top, a set of icons for common actions, and a set of tabs.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=33)** I won't review all of these right now, but I will use Cain to do a man-in-the-middle attack.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=38)** I'll do this throughout poisoning, which we described earlier in the course using subterfuge as a demonstration of it's use.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=46)** I'll select the sniffer tab and then click on the second icon from the left to activate the sniffer and start capturing traffic.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=56)** I'll also press the plus icon which brings up a scan dialogue box, and I'll ask Cain to scan the subnet.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=67)** Immediately we see the list of devices known to be on the network.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=71)** The device I'm interested in is 10.0.2.4, which is my Kali system, and 10.0.2.1 is my network gateway.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=80)** Okay, I'll switch now to the APR tab, which allows me to set up man-in-the-middle rules.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=89)** I'll configure Cain to intercept all traffic between 10.0.2.1 and 10.0.2.4, by clicking the main panel to activate the plus icon, and then click the plus icon add the rule.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=108)** I can now click on the yellow ARP icon to start the ARP poisoning, and establish myself as a man-in-the-middle.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=116)** The status changes from idle to poisoning, and we're active.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=122)** Okay, I'm in my Kali system.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=124)** So let's do some browsing use Iceweasel.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=132)** Okay, I'm back in my Windows system, so let's see what Cain makes of my browsing.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=139)** Okay, I'll click on APR-HTTPS and we can see the collected web conversations.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=145)** The ARP poisoning was successful, and my Windows 7 Cain system is a man-in-the-middle.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=152)** I'll click on passwords and then HTTP, and we can see the user ID and password that we used.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=163)** Cain uses self-signed certificates to negotiate SSL channels.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=167)** I'll click on APR-Cert on the left, and we can see the self-signed certificates that Cain has used.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/using-cain?u=76281980&t=174)** This is a significant threat when using public networks, however, it's not possible to prevent this kind of attack, but using HSTS to enforce security and no longer accept self-signed certificates.

> [!info]- Semantic Content
>
> **Env Vars:** apr (3), arp (3), https (1), http (1), ssl (1)
> **Code Keywords:** let (3), self (3), while, (1), switch (1), public (1)
> **UI Navigation:** click on (5), select the (1)
> **Versions:** 10.0.2 (4)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [voiceover] (1)


### 4. Service Hijacking

#### Hijacking SSH sessions
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=0)** - Secure Shell, or SSH, is a common protocol used by system administrators to remotely manage enterprise servers, and is preferred over telnet, as it establishes a secure connection.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=13)** One of the most popular Windows tools used for SSH is PuTTY, available from the website shown here, and when connected, provides a terminal session on a target system.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=24)** In 2008, Insomnia, a penetration testing company in New Zealand, created a tool to hijack PuTTY sessions, and in doing so, demonstrated a powerful way for testers to target system administrators in order to demonstrate unauthorised access to complete enterprise networks.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=43)** The tool, PuTTY Hijack, can be used when access has been gained to a Windows system when PuTTY is running.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=50)** The tool identifies the PuTTY processes and injects a DLL, which then copies all commands and responses to the attacker's terminal.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=60)** PuTTY Hijack works only on PuTTY version 0.6.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=64)** However, it inspired another tool called PuTTY Rider, which works on all PuTTY releases.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=69)** PuTTY Rider can be downloaded from the site shown here.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=73)** PuTTY Rider works by injecting its DLL into PuTTY, and establishing a pipe back to itself.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=80)** It hooks into the PuTTY code and sends back all commands and responses through the pipe.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=88)** Okay, I'm on my Windows 7 system and I've got both PuTTY and PuTTY Rider copied into my tools directory.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=95)** I'll start a session to my Metasploitable system.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=101)** I'll enter the MSF admin user ID and password, and I've got a Command Shell on Metasploitable.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=109)** Okay, I'll now start PuTTY Rider with the minus L switch to list all active PuTTY sessions.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=117)** I can see the PuTTY process and its PID of 752, together with the local and remote addresses and ports, and showing it's not been injected.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=127)** Let's run the inject.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=132)** Right, we can see the injection process has been successful.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=135)** Let's go to the SSH session and issue a couple of commands.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=143)** Okay, lets now shut down PuTTY Rider and see what we've collected.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=153)** Right, here we have a PuTTY Rider log file.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=156)** Let's type it out.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=160)** Okay, that a hijack, where we see the session after the event, and it's pretty cool.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=166)** However, we can use PuTTY Rider in an attractive way to monitor the session in real time.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=172)** I'll close the current PuTTY session.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=177)** I'll open a new command window and set it up as netcat listener on port 8080.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=183)** If you're not familiar with netcat, or don't have it loaded already, take a look at my Practical Cybersecurity course.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=198)** In a separate command window I'll set up PuTTY Rider to wait for the next time PuTTY is used.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=208)** We're ready now for our target to start using SSH.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=212)** I'll open PuTTY and connect again to Metasploitable.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=223)** As we were doing that, we could see the commands and responses being displayed by netcat.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/hijacking-ssh-sessions?u=76281980&t=228)** We've now got a real-time hijack

> [!info]- Semantic Content
>
> **Env Vars:** ssh (4), dll (2), msf (1), pid (1)
> **CLI Commands:** ssh (4)
> **Code Keywords:** let (3), switch (1)
> **Tools:** terminal (2), insomnia (1)
> **Ports:** port 8080 (1)
> **Versions:** version 0 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### DNS hijacking
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=0)** - [Instructor] The Domain Name Service or DNS, is used to translate a website name to an IP address.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=6)** In 2013, the Syrian Electronic Army successfully hacked into an Australian based domain registrar called Melbourne IT.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=14)** In the first step to achieving a DNS hijacking.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=18)** Melbourne IT managed the domain registry services for the websites of many global organizations.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=24)** In this attack the targets of the Syrian group was the New York times website.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=29)** By hacking into Melbourne IT, the Syrian Electronic Army was able to gain reseller credentials, and using them to send emails to Melbourne IT customers requesting that they change their passwords.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=42)** This then enabled them to hijack the DNS, and alter the New York times DNS information, to redirect viewers to a Syrian political website.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=51)** Let's see how we carry out a DNS hijack.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=55)** There's a file on both windows and Linux which provides a hard coded translation, and it's used prior to checking in a DNS server.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=63)** This is the hosts file.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=65)** And an adversary who gains access to your system can use it to hijack your network connections.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=70)** Here we have the Central Bank of Samoa websites, which we access via the URL, www.[cbs.gov](https://cbs.gov).ws.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=82)** I'll open the windows hosts file at windows system 32 drivers, et cetera, hosts.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=90)** We can see that it has some explanation but no active entries.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=93)** I'll add an entry which creates a local DNS resolution for the bank, not to its correct IP address, but to our Metasploitable server.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=104)** I'll save that, and I'll flush the buffers with IP config slash flush DNS, and that's the same as if we'd rebooted the computer.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=119)** Let's go look at the website now, www.[cbs.gov](https://cbs.gov).ws,
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=128)** and we can see the Metasploitable web interface displayed.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=131)** Access to our banking sites from our computer has been hijacked.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=136)** Of course, a real hijack of the bank website would reroute the connection to a site with a malicious, but exact visible copy of the main website and then loop it back to the bank.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=145)** This would allow all traffic to be intercepted including visa card details, and bank account credentials.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/dns-hijacking-2?u=76281980&t=151)** This is just one attack of many which an attacker can carry out once they gain access to your workstation, ensuring workstations are secured is the best defense.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), url (1)
> **Code Keywords:** let (2), interface (1)
> **URLs:** [cbs.gov](https://cbs.gov) (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Cloud hijacking
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=0)** - [Instructor] Cloud computing has become an important part of the technology landscape and, predictably, is being targeted by cyber criminals.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=8)** One form of attack is cloud account hijacking where stolen credentials are used to access cloud services.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=16)** Another is cloud service traffic hijacking, identified by the Cloud Security Alliance as far back as 2013 as one of the top three security risks for cloud computing.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=29)** Cloud hijacking can be achieved by brute-force guessing of passwords or just unauthorized reuse if an unrelated service for which credentials have been compromised uses the same password as the user's cloud service.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=43)** Hacking into the service provider also provides an easy route for an attacker to gain access to the passwords if they've been stored with breakable hash or encryption protection or even for an unscrupulous service provide employee to steal them.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=58)** And of course, if your computer is compromised, then your credentials can be directly stolen.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=65)** Cloud account hijacking can be devastating.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=68)** On the 18th of June, 2014, a company called Code Spaces announced it was going out of business.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=76)** Just 24 hours earlier, Code Spaces had fallen victim to an infiltration in which most of its machines with its customer data had been deleted, together with their backups.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=88)** The company had fallen victim to a ransomware extortion, but had recovered, changing its passwords and restoring from backup, assuming that the attackers couldn't do any further damage.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=100)** However, the criminals had already installed a backdoor to regain access to the Amazon EC2 control panel, which managed this cloud service, and so carried out their threats.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=112)** Theft of pay-for-use API keys is also a form of cloud hijacking.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=118)** Some online services, such as Microsoft's text-to-speak service shown here, are accessed using an API key.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=126)** If you install your key in a client-side app, then the traffic can be intercepted and the API key extracted.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=135)** Any billing related to unauthorized use of that API key will then go to the legitimate user.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/cloud-hijacking?u=76281980&t=142)** The solution to this is to ensure that you only use API keys server-side.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), ec2 (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. Hijacking in the Physical World

#### Going physical: Hijacking cars and drones
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=0)** - [Voiceover] Session hijacking isn't just confined to the realms of web applications.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=5)** It can be used in the real world to take control of vehicles, such as cars and drones.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=10)** There's been a lot of media coverage of some of these attacks, and we'll finish this course with a brief look at how this kind of attack works.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=20)** Modern cars have multiple networks and dozens of sensors and electronic computer units, ECUs.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=26)** Replacing early point to point wiring with addressable network devices.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=31)** The CAN BUS network is commonly used for vehicle controls and the MOS network for entertainment systems.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=38)** Many vehicles are now also including an ethernet network with IP addressable components.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=44)** This is an example of a vehicle wiring diagram.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=47)** While access to these networks and computers is normally through a physical connector inside the car, typically what is known as an OBD2 port, it's also possible to connect using Bluetooth, Wi-Fi, and increasingly, remote access via the internet from PC and mobile phone apps.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=68)** In some countries, internet access is mandatory to enable crash alerts to be received in real-time by central monitoring systems and for police to activate slow-down mode to help in pursuits.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=80)** Some vehicles also continuously send engine data back to the car workshop, to enable real-time diagnosis of car performance issues.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=90)** Car hacking has been an issue in the public domain for some time, and in 2013, DARPA described work carried out at the University of Washington, in which a car was externally controlled through a mobile phone.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=105)** In July, 2015 computer security testers demonstrated how they could remotely intercept the telematic systems and take control of a vehicle driving on the highway.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=116)** This was the culmination of some years of work by Charlie Miller and Chris Valasek and exploited a flaw in the Uconnect access connectivity system.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=127)** Their attack involved manipulating vehicle systems, such as the air conditioning and the windscreen wipers, and also disabling the accelerator and the brakes.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=136)** All done from 10 miles away.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=140)** Cars are not the only physical devices which can be hijacked.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=144)** Sammy Kamkar in December 2013, released details of how he could take control of a Parrot Drone in what became known as a Skyjack.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=154)** To do this, he used a Raspberry Pi micro-computer strapped to a drone, and used that to fly around looking for other drones.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=162)** His Pearl application detects all wireless networks and clients in the vicinity, deactivates any clients connected to other Parrot Drones, and then connects and takes control of the drone itself.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=175)** It then sends commands through its Wi-Fi channel.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=178)** Let's have a look at how a Parrot Drone is controlled.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=182)** The Parrot is controlled using Wi-Fi.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=184)** It provides a Wi-Fi access point with the name ARDrone2 dot X-X-X-X, to which users can connect using their laptops or mobile phones, and has four channels that can be used.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=198)** UDP port 5554, which sends telemetry data from the drone.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=203)** TCP port 5555, which sends streaming video from the drone.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=210)** UDP port 5556, which accepts AT-style telecommunications commands.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=217)** And UDP port 5559, for transferring critical data.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=223)** An Apple application is available for the Parrot Drone, which turns an IPad or IPhone into a control panel for flying, with full control through tilt and touch screen controls.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=236)** In the Kamkar attack, the Parrot Drone is operating normally, with the client connected, when the attacker sends a series of deauthentication packets to the client, to force it to drop the connection, and then establishes his or her own connection.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=252)** It's possible, however, for the original client to reconnect.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=257)** Okay, let's have a look at what the communications to a Parrot Drone look like.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=262)** I'm using the Acrylic Wi-Fi Professional tool for Windows, which can be downloaded from the Acrylic Wi-Fi site shown here.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=269)** I've also connected an Alpha long-range USB adapter, which I'll use for the monitoring.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=277)** Okay, here we have the Acrylic main screen.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=280)** By default, it starts in scanning mode, showing me all the wireless networks in my local area.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=286)** I'll stop that, and go to the options on the top right and select the top entry.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=294)** I can see my Atheros AR9271 adapter, that's the Alpha external adapter.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=300)** I'll select that and also change from normal into monitor mode.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=308)** This will allow the wireless card to hop between the channels and frequencies to monitor the traffic.
>
> **[5:15](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=315)** Back at the main screen, I'll now select the third icon from the left, which is the Wi-Fi packets viewer.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=321)** I'll turn on packet viewing, using the slider button at the top right.
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=325)** And then I can press play to start monitoring.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=332)** We'll start to see all the packets, management, control and data, that are in the air.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=338)** Okay, I'll stop capturing now, and let's go and look at what we've found.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=343)** First of all, let's go to the front screen and look at the wireless networks.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=349)** We can see the AR Drone Network has been detected, that it isn't using WEP or WPA.
>
> **[5:56](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=356)** If we click on the plus sign we can see that a Client has connected.
>
> **[6:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=363)** Back at the packet capture, let's look at a few of the AR Drone packets.
>
> **[6:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=369)** Okay, I've found a Parrot Drone data packet.
>
> **[6:12](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=372)** If I expand the packet structure on the bottom left, and click on the data and content, I can see the raw packet on the right shows the data starting with 080045.
>
> **[6:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=390)** 0800 is the link level control code for IPV4 and 45 is the start of the IPV4 header.
>
> **[6:38](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=398)** With an offset of nine bytes, I see 06, which is the code for TCP.
>
> **[6:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=406)** And it's an offset from that of a further 12 bytes is 15BE, which is hexidecimal for 5555, which is the port number.
>
> **[6:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=417)** This is a frame of streaming video.
>
> **[7:02](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=422)** Further down, I can see another data packet starting with 080045.
>
> **[7:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=429)** But if we look at the raw packets, I can see it's a clear text AT command.
>
> **[7:14](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=434)** I can also see that at offset nine we have hexidecimal 11 and further on, the port number of 15B4, which is the command channel 5556.
>
> **[7:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/going-physical-hijacking-cars-and-drones?u=76281980&t=448)** The AT Star PCMD mag is the command for incremental control and the AT Star ref is the command for takeoff and landing.

> [!info]- Semantic Content
>
> **Env Vars:** udp (3), tcp (2), ipv4 (2), bus (1), mos (1)
> **Code Keywords:** let (5), public (1), this, (1), default, (1)
> **UI Navigation:** go to (2), select the (2), click on (2)
> **Ports:** port 5554 (1), port 5555 (1), port 5556 (1), port 5559 (1)
> **Definitions:** known as (2), is an  (1), is a  (1)
> **Analogies:** such as (2)
> **Speakers:** - [voiceover] (1)

#### Getting more physical with drones
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=0)** - [Narrator] Two security researchers in Australia, Jeff Thomas and Xi Chen, have enhanced the original Kamkar attack on the control channel, and have provided demonstrations of two additional attacks, one on the video stream, and one on the telemetry link.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=16)** These were demonstrated at the CivSec conference in Melbourne in June 2016.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=23)** In their enhanced drone hijack attack, Jeff Thomas and Xi Chen are able to connect through the Parrot's Telnet channel, using the drone's IP address, which is always 192.168.1.1 on port 23, and establish a second user on the drone.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=41)** They then add an iptables rule, to stop all but their IP address being accepted, thereby disconnecting the original user permanently.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=50)** The drone is then controlled by their laptop, using application code written using the Robot Operating System.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=57)** In their second attack, they hijack the video stream by using Aircrack-ng to monitor packets, and capture those on port 5555 into a .pcap file.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=68)** The raw data for the whole conversation is then extracted using Wireshark and saved into a .dat file, and then reconstructed into an .avi file, using the ffmpeg tool.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=81)** This can then be replayed using a media player.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=85)** The third attack is on the telemetry link of an aerial photography drone.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=90)** These types of drones typically use three channels: the 2.4 gigahertz radio control link, an XBee protocol telemetry data link, a first-person view 5.8 gigahertz streaming video link.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=106)** This attack is more sophistocated than the Parrot attack, as it needs hardware to be built to manage hijacking the ZigBee radio link.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=114)** The telemetry attack works by disconnecting the drone from the drone owner's ground station, and then using an attack ground station to control the drone.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=123)** Firstly, the attacker's ZigBee radio is used to detect all stations on the ZigBee network.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=129)** When the drone is detected, its MAC address is set to the MAC address of the attacker, and paired with the attacker.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=136)** This is done using standard ZigBee API commands, and causes the original pilot to cede control of the aircraft.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/getting-more-physical-with-drones?u=76281980&t=145)** The attacker's ZigBee system is changed back to normal mode, and the standard drone software can then be used by the attacker to carry out mission planning and execution.

> [!info]- Semantic Content
>
> **Env Vars:** mac (2), api (1)
> **Versions:** 192.168.1 (1), 2.4 (1), 5.8 (1)
> **Ports:** port 23 (1), port 5555 (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this course.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=4)** I hope you enjoyed learning about session hijacking.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=7)** There's always something new in cybersecurity and if you're interested in learning more, then check out the full cybersecurity ethical hacking segments of the library, where the new security testing courses are added regularly.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=21)** You'll find courses on using Kali Linux, information gathering, denial of service, and much more.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=28)** I'd also like to invite you to go to my author page where you can find some additional courses on cybersecurity.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=35)** If you want to get hands-on with some of the common tools, then do take a look at Cybersecurity for IT Professionals and the Introduction to Kali Linux.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=45)** If you're wanting to learn about security for the cloud, then Cybersecurity for Cloud Computing is for you.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=51)** You might also want to see what my colleague in the cybersecurity ethical hacking series, Lisa Bock, has for you on her homepage.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-session-hijacking/next-steps?u=76281980&t=61)** Thanks again for joining me on this course and I hope to see you again soon.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Denial of Service]] | **11 of 19** | [[Ethical Hacking- Evading IDS, Firewalls, and Honeypots]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- SQL Injection]] — Ethical Hacking
- [[Ethical Hacking- Cloud Computing]] — Ethical Hacking

---

[↑ Back to top](#)