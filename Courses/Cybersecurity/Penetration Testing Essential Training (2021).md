---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: penetration-testing-essential-training-2021
url: "https://www.linkedin.com/learning/penetration-testing-essential-training-2021"
level: Intermediate
updated: 8/5/2021
learners: 16402
skills:
  - Penetration Testing
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGfmTLus2CsDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628010147364?e=2147483647&amp;v=beta&amp;t=fVavcbqYjGR2Iq0TcKl28rEjPh0lYC1Tj6jCGAAQWbM"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Penetration Testing Professional Certificate by Cybrary]]'
next_courses:
  - '[[Offensive Penetration Testing]]'
path_nav: '[{"path":"Penetration Testing Professional Certificate by Cybrary","position":1,"total":2,"prev":null,"next":"Offensive Penetration Testing"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/penetration-testing
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Penetration%20Testing%20Essential%20Training%20(2021).md)

![Penetration Testing Essential Training](https://media.licdn.com/dms/image/v2/C560DAQGfmTLus2CsDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628010147364?e=2147483647&amp;v=beta&amp;t=fVavcbqYjGR2Iq0TcKl28rEjPh0lYC1Tj6jCGAAQWbM)

# Penetration Testing Essential Training

> You've secured your systems, trained your users, and fortified your network. Think you're ready to handle a cybersecurity threat? Penetration testing is one of the best ways to see if your security will hold. It puts testers in the role of attackers, looking for vulnerabilities in your networks, computers, applications, email, and users. This course provides an introduction to the key knowledge an

> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021) | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Build a foundation in penetration testing
  - What you need to know
  - Disclaimer
- [**1. What Is Pen Testing?**](#1-what-is-pen-testing) (3 videos)
  - Pen testing overview
  - The cyber kill chain
  - The MITRE ATT&CK repository
- [**2. Pen Testing Tools**](#2-pen-testing-tools) (6 videos)
  - Scan networks with Nmap
  - A Netcat refresher
  - Capture packets with tcpdump
  - Work with netstat, nbtstat, and arp
  - Script with PowerShell
  - Extend PowerShell with Nishang
- [**3. Bash Scripting**](#3-bash-scripting) (3 videos)
  - Refresh your Bash skills
  - Control the flow in a script
  - Use functions in Bash
- [**4. Python Scripting**](#4-python-scripting) (7 videos)
  - Refresh your Python skills
  - Use the system functions
  - Use networking functions
  - Work with websites
  - Drive Metasploit through Python
  - Access SQLite databases
  - Use Scapy to work with packets
- [**5. Kali and Metasploit**](#5-kali-and-metasploit) (7 videos)
  - A Kali refresher
  - Fuzzing with Spike
  - Information gathering with Legion
  - Using Metasploit
  - Exploit with Armitage
  - Scan targets with GVM
  - Managing GVM problems
- [**6. Web Testing**](#6-web-testing) (5 videos)
  - Approach web testing
  - Test websites with Burp Suite
  - Check web servers with Nikto
  - Fingerprint web servers
  - Web server penetration using sqlmap
- [**7. Understanding Exploit Code**](#7-understanding-exploit-code) (4 videos)
  - Exploit a target
  - Understand code injection
  - Understand buffer overflows
  - Find exploit code
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Build a foundation in penetration testing
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=0)** - [Instructor] Cyberspace, as it's now known, supports much of our social, business, and government activities.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=6)** But with that has come a whole ecosystem of cyber threats.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=9)** It's critical that we know how to penetration test our cyberspace presence to ensure we're safe from harm.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=16)** In this course, I'll be introducing you to the world of pen testing.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=20)** I'll start by explaining what pen testing is and how it differs from system testing and hacking.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=25)** And I'll look at some of the testing tools we have in the Carly testing toolbox.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=30)** I'll cover the basics of web testing, and we'll look at how Bash and Python scripts can be used.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=36)** I'm Malcolm Shore, and I've spent a career helping governments and businesses protect their systems against cyber attack.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=42)** I'd like to invite you to take this LinkedIn learning course to learn about the essentials of pen testing.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/build-a-foundation-in-penetration-testing?u=76281980&t=48)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980&t=0)** - [Narrator] This is a practical course and during this course, I'll be using Windows and Linux based tools, running on a VirtualBox test network to do testing.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980&t=9)** In particular, I'll be using the Kali testing framework and the Metasploitable system as a test target, I'll be using both commercial and public domain tools for testing.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980&t=20)** And I'll be showing you code in Assembler and C.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980&t=24)** You should also know the basics of Bash and Python scripting, and I'll provide a refresher on them.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980&t=30)** Pen testing is a challenging pursuit.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/what-you-need-to-know?u=76281980&t=34)** You should be competent in computer and network technologies, and you should have a working knowledge of ethical hacking.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Code Keywords:** public (1)
> **Tools:** bash (1)
> **Speakers:** - [narrator] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third-party testing tools.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=4)** Some are commercial products, and some are open source.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=8)** The download and installation instructions for all tools used in this course is available as a PDF in the associated course material.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=16)** While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=23)** And we can't provide assurance that these nice might not have been compromised when you visit them.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=29)** Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=40)** The testing tools we demonstrate are extremely powerful.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=44)** They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=53)** Again, we can't provide assurance that the software hasn't been compromised when you download it.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/disclaimer?u=76281980&t=58)** And so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (2)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Pen Testing?

> [↑ Back to Table of Contents](#table-of-contents)

#### Pen testing overview
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=0)** - [Instructor] Over the last decade, testing computer systems for vulnerabilities has because a necessary part of any deployment.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=8)** Traditionally the software development life cycle included testing as the final stage prior to going live and used testing methods based on developing test cases to confirm the software was functionally correct, i.e. it produced the correct result.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=23)** While this was all very well for software through to the 1990s, the advent of the internet and online services provided a rich environment for hackers to find flaws in software.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=35)** Often these flaws exploited an expected input, such as maliciously crafted packets, and used unexpected techniques, such as command injection.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=45)** The typical hacker was a bored teenager with a computer and a modem and plenty of spare time.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=52)** These attacks demonstrated the limitations of testing by thinking like a developer and began the age of testing by thinking like an attacker.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=61)** In other words, don't just run a set of test cases.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=65)** Also use your imagination and try to think of different ways to penetrate your target.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=71)** Pen testing, as this approach to testing is now known, has become a recognized testing approach and a popular career choice.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=79)** The name hacker was originally used to describe someone who was very skilled at modifying computer software in order to make it perform exceptionally well.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=88)** Over the years, the term has been increasingly used to describe someone who has the same level of skills but uses them for annoying or malicious purposes.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=99)** As the internet grew, hackers started posting their hacking software on bulletin boards, and then on shared underground websites.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=107)** These were often scripts which automated the attacks using languages such as Perl, or more recently Python.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=114)** Would-be hackers with few skills were then able to download the tools and run them, and this community became known as script kiddies.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=123)** As businesses started using attack techniques in a controlled environment to check their own software, the term white hat was used to distinguish the authorized testers from the black hat, or unauthorized hacker.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=138)** As the internet grew, a number of different types of black hat hackers emerged.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=143)** Hacking amongst bored teenagers has continued to flourish, but increasingly are script kiddies.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=149)** Some of the more skilled amongst them have become research hackers, who find bugs and develop their own exploits, often in order to sell them to other black hats on the dark net.
>
> **[2:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=161)** Of more concern, many countries now fund state-sponsored hackers, sometimes called cyber warriors, who hack for military or espionage purposes.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=171)** Similarly, organized crime has seen the financial gain possible with hacking, and now cyber criminals form one of the biggest groups of hackers targeting industry.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=182)** State-sponsored hackers and cyber criminals are very skilled and will often deploy zero day exploits, which can punch holes through even the best-defended networks.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=191)** They operate stealthily, they cause immense damage and financial loss, and have created a toxic environment of mistrust and fear on the internet.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=202)** As to the white hats, the increasing black hat activity has seen a massive demand for penetration testing and a demand for a much higher skill level to match that of the black hats.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=214)** Some of the more skilled white hat testers have focused on research to find bugs and to claim bug bounties.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=221)** As with black hat hackers, the white hat community developed some post white hat testing tools on the internet.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=227)** Some of these are commercial tools released onto the internet, often with a community addition with a limited capability and require a license to be purchased in order to unlock their full potential.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=238)** Others are fully functional freeware or shareware tools.
>
> **[4:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=244)** In addition to individual tools, there are a number of testing frameworks available, which bring a set of tools together.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=251)** The best known of these is Kali Linux, a full freeware Linux distribution which includes over 600 tools, which is often the primary framework used by a pen tester.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=262)** The start point for a career in penetration testing is to become an ethical hacker.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=268)** The ethical hacker understands the internet environment and has a knowledge of the tools used to test systems.
>
> **[4:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=274)** An ethical hacker can run the standard tests and provide a first level of confidence that a system is secured against a casual attacker.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=282)** The pen tester has a much higher level of both knowledge and skills, and is able to not only use the tools, but also find the more sophisticated weaknesses in systems.
>
> **[4:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=292)** A pen tester will be able to not only detect a security issue, but also demonstrate how it can be exploited.
>
> **[4:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=299)** This may be done by modifying an existing exploit or creating new exploit code.
>
> **[5:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=305)** A pen tester is able to provide confidence that a system can withstand a sustained attack from a skilled attacker.
>
> **[5:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=313)** An elite pen tester is someone who has the highest level of skills and often finds zero day exploits to support his or her pen testing.
>
> **[5:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=322)** Elite pen testers are also the community of hackers who create many of the public domain tools used by the white hat community.
>
> **[5:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=331)** Certified Ethical Hacker is the foundational certification for ethical hacking or pen testing.
>
> **[5:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=337)** While it used to be a paper-based certification, it now involves fully fledged hands-on training.
>
> **[5:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=343)** It's the basic certification required for someone to start out in a career in systems testing.
>
> **[5:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=352)** Offensive Security is the organization which provides the Kali framework, and it offers a range of pen testing certifications which are recognized globally.
>
> **[6:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=362)** The benchmark certification for a professional pen tester is the Pen-200 Offensive Security Certified Professional, or OSCP.
>
> **[6:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=371)** This is the certification most professional pen testers have, and it demonstrates not only knowledge of pen testing techniques and tools, but also a high level of skill in applying them to an unknown target environment.
>
> **[6:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=385)** For people wanting to focus on wireless, or add wireless testing to their skill set, there's the Pen-210 Offensive Security Wireless Professional Certification, OSWP.
>
> **[6:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=397)** This involves demonstrating the ability to use wireless tools and techniques effectively.
>
> **[6:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=404)** The Pen-300 Offensive Security Experienced Pen Tester, or OSEP, goes beyond the skills and knowledge set required for OSCP and demonstrates the very highest level of expertise.
>
> **[6:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=417)** This involves not just having the knowledge, experience, and training to do pen testing, but an ability to creatively find new ways to penetrate a network.
>
> **[7:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=428)** While we're focused on pen testing in this course, this is just one of a number of ways in which cyber defenders can address the threats.
>
> **[7:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=436)** An important of cyber defense is checking for and correcting known vulnerabilities.
>
> **[7:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=442)** This can be done for the perimeter with an online service such as Nessus, and internally, with network vulnerability assessment tools such as Rapid7's Nexpose.
>
> **[7:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=454)** Pen testers run tools and techniques against targets looking for areas of weakness that the developer hasn't found during testing, and that the vulnerability scanner hasn't detected.
>
> **[7:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=464)** These may be oversights that should have been found, or zero day vulnerabilities that aren't in the signature database.
>
> **[7:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=472)** The ultimate pen test is called a red team test, where a team of pen testers are given authority to mount an unannounced attack on the whole network, with the objective of doing everything that an attacker would to find a way to penetrate the network and get to its internal systems.
>
> **[8:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=488)** Finally, there's a new approach and a new breed of professional called a cyber hunter, whose job is to do deep monitoring of the network and server environment, looking for indicators that the network is being compromised.
>
> **[8:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=501)** The cyber hunter will use network intrusion detection systems and big data security analytic solutions to find indicators of compromise.
>
> **[8:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=510)** Cyber hunting is an emerging discipline, and there are, at this stage, no specialist tools available.
>
> **[8:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/pen-testing-overview?u=76281980&t=517)** This function and the tools for it will be a significant area of development over the next decade.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7), make (1), python (1)
> **Analogies:** such as (5)
> **Code Keywords:** require (1), public (1), finally, (1), function (1)
> **Env Vars:** oscp (2), oswp (1), osep (1)
> **Definitions:** in other words (1), known as (1), is called (1), is an  (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### The cyber kill chain
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=0)** - [Instructor] Cyber attack is now recognized as a serious threat to governments, businesses, and to individuals.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=6)** Nowadays, cyber attacks come mostly from organized criminals and state sponsored agents, using well-defined end to end business processes and attack techniques.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=18)** Let's look at the various stages that an attack will go through, from inception to achieving its ultimate goal.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=24)** In 2009, a team from the Lockheed Martin Cyber Emergency Response Team produced a seminal paper on cyber attack called Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=42)** This can be downloaded from their website shown here.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=45)** The research paper introduced the concept of what is now commonly known as the cyber kill chain.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=51)** The cyber kill chain views an attack in seven stages, reconnaissance, weaponization, delivery, exploitation, installation, command and control, and action.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=66)** An attack doesn't always progress from one step to the next.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=69)** They'll often overlap, but each stage represents a milestone in prosecuting the attack.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=76)** Reconnaissance is the term given to finding, and finding out about, a target.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=81)** Just as a burglar will case a joint before breaking in, so a cyber criminal has to find out about his or her target.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=90)** Individuals typically have one address on the internet, which has been allocated by their internet service provider.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=96)** Whereas a business may have a number of addresses in what is known as their internet domain.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=101)** A cyber attack against a business target will start with the known website address and then scan the internet space around that address for other systems used by the target.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=112)** The business will see this as a response check on every host in its domain.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=117)** This is known as an IP address scan.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=120)** Then, when the attacker has a list of active hosts, he or she will scan each host in turn to find out what entry points are exposed.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=128)** This is known as a port scan.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=130)** This is done to identify potential vectors for attack and check the versions of software used in those vectors.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=138)** Attacks nowadays are not done manually.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=140)** An attacker will usually purchase time on a network of compromised computers in order to run automated scans.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=147)** These networks are known as botnets and may consist of hundreds of thousands if not millions of compromised computers.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=154)** This allows cyber attack to be run at scale.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=159)** Weaponization means taking a known vulnerability and customizing it to a specific target or group of targets and integrating it to enable it to run from an automated cyber attack platform.
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=173)** The weaponized malware may be designed to exploit a vulnerability in a specific version of an operating system, or target a specific online banking website.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=183)** In the age of hacking as a business, cyber criminals will often purchase the weaponized malware from dedicated developers, rather than develop their own version.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=193)** The most common way of delivering malware is to attach an infected document, PDF image, or other electronic item in a way that when the document is opened, the malware will self-install.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=205)** This file can then be sent to the victim via email, a process known as phishing.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=211)** Another way might be to find a vulnerable website, infect it with the malware, and send an email invitation to the target to visit the website.
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=220)** If the victim visits the website, then the malware is downloaded and infects their workstation.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=226)** A third way might be to use default user IDs and passwords built into software on the target system, or to use a stolen user ID and password to enter the target system and directly implant the malware.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=239)** It's also possible to find flaws in software that's exposed to the internet, and to manually deliver the malware.
>
> **[4:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=246)** In practice, an attack will often require establishing a beachhead on an internet exposed host, and then using that to penetrate deeper into the system to get to the real target, which may not be directly connected to the internet.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=260)** Finally, an infected flash drive can be used to deliver malware, and this can be very effective if the target system is not connected to the internet.
>
> **[4:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=269)** This requires that a user of the target system be persuaded or tricked into using the flash drive.
>
> **[4:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=277)** For email attachments and flash drive attacks, the infected item will exploit a vulnerability in the target software, post delivery, when the document is opened or the flash drive inserted.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=289)** A compromised website may similarly download HTML code, which takes advantage of a browser vulnerability.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=295)** In the case of remote access, the exploitation phase is simply the unauthorized use of credentials.
>
> **[5:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=302)** There's also another class of exploitation, which is a user in the target organization executing malware without knowing it.
>
> **[5:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=309)** A mail attachment, a malicious document, or a compromised website.
>
> **[5:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=315)** This is the simplest and unfortunately the most successful exploitation vector.
>
> **[5:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=320)** After the exploitation phase, the malware or intruder may simply take action, skipping directly to the last phase of the cyber kill chain.
>
> **[5:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=328)** However, the more usual case is that a payload is installed either into the memory or onto the hard disk of the target system.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=336)** Additionally, some form of mechanism may be introduced to make sure the payload is restarted every time the system is rebooted.
>
> **[5:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=344)** One way of doing this in Windows is to add a registry entry to automatically run the payload when the system starts up.
>
> **[5:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=351)** The payload will often be or include a means of maintaining ongoing access into a command shell.
>
> **[5:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=358)** A system compromise is often automated.
>
> **[6:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=361)** Once a payload has been installed, the first action it takes will be to connect back to a command and control server to register as a compromised host.
>
> **[6:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=370)** The attacker will then want to send back a command for some action to be taken, listing the subdirectories and files, extracting specific named files, modifying or replacing software, and so on.
>
> **[6:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=383)** An important feature of the payload is that it can determine the address of the command and control server, which may change over time.
>
> **[6:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=391)** Exactly what form of action is carried out by a payload when it arrives at its target depends upon the motives of the attacker.
>
> **[6:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=399)** A hacktivist may want to deface a website.
>
> **[6:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=402)** A state sponsored agent may want to steal sensitive information.
>
> **[6:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=407)** And a cyber criminal may want to access a bank account in order to steal money.
>
> **[6:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-cyber-kill-chain?u=76281980&t=413)** The common theme, however, is that whatever the action is, it's unlikely to be in the best interests of the target.

> [!info]- Semantic Content
>
> **Definitions:** known as (6), is a  (1)
> **CLI Commands:** find (4), make (1)
> **Code Keywords:** let (1), self (1), require (1), finally, (1)
> **Env Vars:** pdf (1), html (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### The MITRE ATT&CK repository
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=0)** - [Instructor] It's useful to know the kind of techniques that attackers can use in their malware when preparing our defenses.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=7)** MITRE provides a repository of tactics and techniques that have been found in malware accessible through their attack site, building on the Lockheed Martin cyber kill chain, the MITRE repository looks at the full attack from reconnaissance to impact and takes a deeper dive into what tactics and techniques are used to infiltrate the malware, and the malware when it executes on its targets.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=33)** Selecting matrices, we can see the list of techniques by the 12 stages of an attack.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=38)** Let's select external remote services.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=44)** And we can say an explanation of the form of initial access, examples of various actors in how they achieve this, and scrolling down, we can see the mitigations, ways to detect the technique and relevant references.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=64)** Selecting tactics enterprise.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=67)** We can see for the various tactics in the left-hand list, the kind of techniques by attackers.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=74)** If we select collection and then scroll down to T1123.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=87)** We can see that audio capture from the computer microphone is a technique used to eavesdrop on a target.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=94)** Groups provides a list of known cyber attack groups.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=97)** If we scroll down to platinum, we can see that this group targets governments and related organizations in South and Southeast Asia.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/the-mitre-att-ck-repository?u=76281980&t=109)** The MITRE attack site is a useful knowledge base for anyone looking at diagnosing malware and attributing it to an attack group.

> [!info]- Semantic Content
>
> **Env Vars:** mitre (3), t1123 (1)
> **Code Keywords:** let (1), this, (1)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 2. Pen Testing Tools

> [↑ Back to Table of Contents](#table-of-contents)

#### Scan networks with Nmap
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=0)** - [Instructor] Let's take a refresher on using Nmap for scanning networks to discover what hosts are present and what services are available on those hosts.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=9)** I'll be using the Nmap tool loaded into Kali.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=12)** Nmap's primary function is to scan a network and probe the hosts that it detects to determine the services running.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=20)** It can scan using a number of techniques, which together can help identify services which are open to the Internet, that are closed, and those that are open, but behind a security filter of some sort.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=32)** The first thing we'll do is to discover what hosts are on my test network.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=36)** The most straightforward way to do this is using the -SN option across the sub-net.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=45)** The -SN option touches each host in turn using the ICMP ping protocol to see whether it responds.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=53)** Nmap reports only the hosts that do respond, providing the IP and MAC address of the host.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=59)** Having identified which hosts are responding, we can probe the TCP and UDP ports to check what services are being presented.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=67)** Let's check the targets on 10.0.2.8, my Metasploitable server, for TCP ports using the -PS option.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=76)** I'll enter nmap -PS 10.0.2.8.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=84)** Nmap is checking the most common services to see if they're open on the host.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=88)** It does this by starting to open a connection to the service, and then closing it down before the connection is complete.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=94)** This is called a TCP SYN ping, and it works by sending an empty TCP packet with the SYN flag set and waiting for the host to respond with the standard SYN-ACK response.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=106)** While a normal connection would be completed by sending back an ACK, Nmap instead cancels the connection before it completes.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=114)** We can see we have quite a few ports open.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=117)** Let's now check for UDP ports.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=120)** We can do this using the -SU option.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=123)** This will check the most common thousand UDP ports.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=126)** We can add the -P0 option to skip the ping check of the host, as we know it's up.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=132)** This'll take a while, so we'll come back when it's finished.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=137)** We've finished the UDP scan now and we see a number of these ports open.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=142)** Let's use Nmap to drill down into an individual service to get more details about what's running.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=148)** By using the -SV option, Nmap will try to identify the version of software being used for service.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=155)** I can limit the testing to just one service with the -P option.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=160)** Let's test the second service shown on the TCP list, the Secure Shell service on port 22.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=169)** Nmap comes back within a few seconds and tells us that the service on port 22 is running the OpenSSH 4.7p1 software.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=178)** We can combine these and check multiple port ranges for both TCP and UDP.
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=184)** The command -sSUV specifies both TCP and UDP and service detection.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=193)** The -P value requests the UDP ports 53, 111, and 137, and TCP ports 21 to 25, 80, 139, and 8080.
>
> **[3:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=206)** The results show the response for all the requested ports as either open or close.
>
> **[3:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=212)** Let's check next what operating system is running on the target.
>
> **[3:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=215)** We do this using the -O switch.
>
> **[3:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=222)** The scan has now finished and Nmap has fingerprinted the computer operating system correctly as a Linux system, as well as listing the TCP ports that it's detected.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=233)** Nmap also has a comprehensive library of scripts.
>
> **[3:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=236)** We can see these in its scripts directory.
>
> **[4:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=243)** These provide many advanced capabilities.
>
> **[4:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=246)** Let's run one.
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=247)** We'll use the rexec brute force test to extract credentials via port 512.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=253)** We can do this by using the --script argument.
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=261)** Here we see a list of valid credentials for the Metasploitable server.
>
> **[4:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=267)** Nmap is an important tool in the pen-testers inventory.
>
> **[4:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-networks-with-nmap?u=76281980&t=270)** It's worth spending time to become very familiar with it.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (9), udp (7), syn (3), ack (2), icmp (1)
> **Code Keywords:** let (7), function (1), while, (1), switch (1)
> **Ports:** port 22 (2), port 512 (1)
> **Versions:** 10.0.2 (2)
> **Definitions:** is called (1), is an  (1)
> **Code Identifiers:** ssuv (1)
> **Speakers:** - [instructor] (1)

#### A Netcat refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=0)** - [Instructor] Netcat is often referred to as the Swiss Army Knife of networking, because it has so many features and so many uses.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=7)** Fundamentally, it operates as either a sender or a receiver of arbitrary data across the network.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=13)** Netcat is installed by default in Kali.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=16)** Let's check the IP address of my Kali system.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=19)** I've got a script set up, called myip, which does this for me.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=25)** Okay, 10.0.2.15.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=26)** Okay, 10.0.2.15.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=28)** Let's use Netcat to set up a chat line across the internet.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=31)** I'll set up a Netcat listener on Kali by specifying the -l option, and a port number with a -p option.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=38)** nc -lp nc -lp nc -lp and I'll use port 4545.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=45)** Netcat is now listening for data to come in on port 4545.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=50)** I'm now on my Windows system which also has the Netcat version nc64 installed.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=57)** I can connect to Kali by saying nc64 10.0.2.15 4545.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=61)** by saying nc64 10.0.2.15 4545.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=63)** by saying nc64 10.0.2.15 4545.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=64)** by saying nc64 10.0.2.15 4545.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=66)** This establishes a raw data connection.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=69)** I'll type Hello Universe I'll type Hello Universe I'll type Hello Universe and press enter.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=76)** Back in Kali, we can see the same text has appeared.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=79)** If I now enter: Hi, how is Mars?
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=82)** If I now enter: Hi, how is Mars?
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=84)** If I now enter: Hi, how is Mars?
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=86)** It appears immediately in the window system.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=90)** To terminate the connection, I can press Control + C.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=95)** The next thing I'll do with Netcat is to copy a file from one system to the other.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=100)** I've got a text file on my Kali system called myfile.txt.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=104)** Let's have a look at that.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=105)** cat myfile.txt.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=106)** cat myfile.txt.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=108)** cat myfile.txt.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=109)** Ah.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=110)** 'Twas on a lofty 'visors side.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=113)** I now want to set up Netcat to receive this file in Windows.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=117)** Firstly, I'll check my IP address with ipconfig.
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=127)** We can see the address is 10.0.2.14.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=131)** I'll now set up Netcat to listen and receive our Kali file.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=134)** nc64 -lp and I'll use 4545 again.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=137)** nc64 -lp and I'll use 4545 again.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=140)** This time, whenever I get texts coming in, I'll put it into incoming.txt.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=145)** I'll put it into incoming.txt.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=148)** So now when the data is received, it will be sent not to standard out, but instead into a new file called incoming.txt.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=155)** Okay, let's go do that.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=157)** To transfer the file, I type nc 10.0.2.14 4545, I type nc 10.0.2.14 4545, I type nc 10.0.2.14 4545, which is the port that we specified the listener on, and I'll pipe into that connection.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=168)** and I'll pipe into that connection.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=171)** myfile.txt myfile.txt myfile.txt and with three seconds of no transfer, it will terminate.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=180)** This command tells Netcat to take the data from myfile.txt instead of standard in.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=185)** Netcat makes the connection, takes the input and sends it through the network, and then terminates.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=191)** Okay, let's have a look at what we've got.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=193)** Type incoming.txt Type incoming.txt and we can see that we've got the same file that we sent.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=202)** Let's clear the screen.
>
> **[3:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=203)** Netcat can also be used as a client for services on another host.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=207)** For example, we can use Netcat to connect to a web server.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=211)** I'll type nc -v [google.com](https://google.com) on port 80.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=214)** I'll type nc -v [google.com](https://google.com) on port 80.
>
> **[3:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=217)** So we're looking at the website, [google.com](https://google.com).
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=220)** The -v switch tells Netcat to be verbose and provide me with status messages, and 8 is the standard port for accessing a website.
>
> **[3:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=228)** When the connection is made, I can type the HTTP command: GET index.html HTTP/1.1 GET index.html HTTP/1.1 GET index.html HTTP/1.1 and I press enter twice, and the web server will deliver its webpage code.
>
> **[4:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=245)** Similarly, I can connect to an FTP server.
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=248)** I'll type nc -v 10.0.2.8 21.
>
> **[4:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=250)** I'll type nc -v 10.0.2.8 21.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=253)** I'll type nc -v 10.0.2.8 21.
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=254)** I'll type nc -v 10.0.2.8 21.
>
> **[4:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=256)** This will connect to my Metasploit FTP service.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=259)** Okay, the FTP server is now waiting for me to log in.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=262)** I'll do that.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=264)** First, I'll type user anonymous First, I'll type user anonymous and then I'll type pass malcolm@[example.com](https://example.com), and then I'll type pass malcolm@[example.com](https://example.com), which is a random string for the password for anonymous.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=279)** The server accepts my anonymous login.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=282)** I'll type help and get a list of the FTP commands available on that server, and I can now type quit to leave.
>
> **[4:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-netcat-refresher?u=76281980&t=290)** Netcat is indeed a Swiss knife for networking, and it's a tool you should be very familiar with.

> [!info]- Semantic Content
>
> **Versions:** 10.0.2 (14), 1.1 (3)
> **File Paths:** myfile.txt (8), incoming.txt (5), index.html (3)
> **Code Keywords:** let (6), pass (2), switch (1)
> **Env Vars:** http (4), ftp (4)
> **URLs:** [google.com](https://google.com) (3), [example.com](https://example.com) (2)
> **Prerequisites:** set up (5)
> **Ports:** port 4545 (2), port 80 (2)
> **CLI Commands:** cat (3)

#### Capture packets with tcpdump
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=0)** - [Instructor] One of the more useful tools when testing Linux systems is TCPDUMP, which we can use to capture TCP packets that are transmitted on the local network.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=10)** While more advanced tools such as Wireshark are ideal for displaying and analyzing packets.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=15)** TCPDump is a raw capture tool, which comes into its own when doing remote captures.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=21)** You'll need to make sure when you're trying to capture packets from other hosts on the network that you've got promiscuous mode set, this is set in the virtual machine configuration, under network, advanced, let's set it.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=42)** TCPDump is a command line tool and is included in the Linux distribution.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=47)** It has some basic command line options, minus D, this is used to show the list of interfaces.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=55)** We can use minus I to specify the interface to listen on this common use is minus I and E to list on all interfaces, a minus I ET8 zero to listen just on ET8 zero, the ethernet port.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=69)** Minus C this is used to provide the count of packets to capture.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=75)** We can use minus N to suppressed host name resolution, a minus NN to suppress both host name and port name resolution.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=85)** Some of the other common switches are T, X, V and S.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=89)** T makes the timestamp human readable, X displays the packets in hexadecimal and ASCII, and V is used for verbose mode with minus VV and minus VVV more so, and S is used to specify the size of the packet data displayed.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=104)** The default size is 96 characters, but we can use minus S zero to display the full pack.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=113)** TCPDump also allows expressions to be used as filters.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=116)** There are three forms of expression, type expressions host, net and port.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=122)** Direction expressions source and destination, and protocol expressions, TCP, UDP, ICMP, and AH.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=131)** We can also use IP six as a protocol expression to see all IP six traffic, let's have a look at the traffic to and from our window server.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=144)** Let's see only the UDP packets on the network.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=151)** Let's look at traffic to and from a sub-net,
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=163)** let's look at traffic just to one, and then a range of destination ports on a exploitable server.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=183)** We can also write out the file we capture in ASCII form using pipes, or we can capture it as a P cap using the minus W switch, let's capture and record all IP six traffic on the network.
>
> **[3:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=199)** We can do more advanced expressions using and, or, and brackets.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=205)** Complex expressions may require quotes.
>
> **[3:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=209)** For example, let's look at traffic to the Metis floatable server on ports, 21, 22, 23 or 3389 from my window system.
>
> **[3:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=222)** We can also check and filter and flags in the header.
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=224)** We can do this using direct offset expressions, such as TCP offset 13 bit two, and we can do the same thing using the expressions, TTP flags and TCP syn.
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=248)** This allows for some useful diagnostics on the network limited only by our imagination.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=255)** We can find clear text HTTP, get requests.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=264)** Note this will find these requests regardless of the port, the services running on.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=268)** We can look for SSH services on any port by checking for the term SSH in the banner text,
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=283)** we can check for invalid combinations of flags, such as the RST and syn, both being set.
>
> **[4:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=292)** This has been just a refresher.
>
> **[4:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=293)** There's lots more for you to explore in TCPDump.
>
> **[4:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/capture-packets-with-tcpdump?u=76281980&t=296)** It's a powerful packet capture tool.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (4), et8 (2), ascii (2), udp (2), ssh (2)
> **Code Keywords:** let (7), interface (1), switch (1), require (1)
> **CLI Commands:** find (2), ssh (2), make (1)
> **Analogies:** such as (3), for example (1)
> **Tools:** command line (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Work with netstat, nbtstat, and arp
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=0)** - Netstat and ARP are two useful tools for viewing network connections.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=4)** And these can be used to identify anomalies and help focus testing on key areas of interest.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=10)** Let's look at Netstat first.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=12)** Netstat is a tool to list protocols, statistics, and current network connections.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=17)** By simply entering Netstat, we get the current TCP connections.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=23)** Okay, we can see our TCP connections.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=25)** The first column shows the protocol TCP.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=28)** The next column shows the local address and port number used.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=32)** The next column shows the foreign address and the final column, the connection state.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=38)** We can get information on the executable, which created the connections using the -b switch Here, we can see the executable that tones the first of the TCP connections.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=52)** Similarly, we can use the -o switch to see the process owning the port.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=58)** We can use the -a switch to list all services that are active, listing both TCP and UDP ports.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=67)** This shows the TCP ports that are established as well as both TCP and UDP ports that are open and listening.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=75)** *.* in the foreign address indicates that a connection hasn't yet been made as we'd expect for UDP.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=83)** Let's see how we get the protocol statistics.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=87)** Here, we can see the number of active and passive TCP ports and failed and reset connections.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=92)** We can also see a summary of UDP packets sent and received.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=98)** With the minus RN switches, we can see the interface tables with Mac addresses and the routing table in numeric IP form.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=108)** ARP is the address resolution protocol utility, which associates numeric IP addresses with Mac addresses to enable ethernet routing.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=117)** This is a table which may be modified by an attacker in order to carry out a man in the middle attack.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=122)** We can display all address entries using the -a switch, and we can add an address using the S switch, and then we can review the table.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-netstat-nbtstat-and-arp?u=76281980&t=142)** With Netstat and ARP, we can get a good view of the network posture without resorting to packet tracers.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (8), udp (4), arp (3)
> **Code Keywords:** switch (5), let (2), interface (1)
> **UI Navigation:** switch to (2)
> **Definitions:** is a  (2)
> **Speakers:** - netstat (1)

#### Script with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=0)** - [Instructor] Windows PowerShell comes built into all current Windows systems, and it's to Windows what the bash shell is to Linux, a powerful command line tool for automating systems and network administration.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=12)** It's also a useful tool for the pen tester to be able to use when carrying out testing.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=18)** PowerShell combines the features of a scripting language with command line utilities and commandlets as well as the ability to interface to the Windows management instrumentation or WMI system.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=29)** Commandlets are a new concept with PowerShell.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=32)** They use a standard naming convention that follows a verb noun pattern such as 'get help,' 'gets event log,' 'get process,' and 'set service.'
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=42)** The get verb displays information about the noun and the set verb modifies or sets some, or all of that information.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=50)** Get and set are just two examples.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=52)** There are around a hundred verbs that can be used.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=56)** I'm in the PowerShell console, and I can list the available verbs by entering the command Get-Verb.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=66)** We can see in this list, get and set, and many other verbs.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=71)** We can see how many with a handy function call by entering Get-Verb.count and we see there's 98.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=81)** We look at some more of these verbs as we refresh our skills in PowerShell.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=85)** We can get help on the various forms of these verbs.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=89)** For example, we can enter 'help push.'
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=96)** We can see there's a commandlet Push-Location and an alias of pushd for that.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=102)** By entering 'help pushd' we get the full documentation on the commandlet.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=111)** We can see this is a stack operation commandlet, which pushes the location onto a stack, and that there's an associated set of commandlets such as Get-Location, Set-Location, and Pop-Location.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=124)** PowerShell supports the standard Windows shell commands, such as CD, dir, and ipconfig to name a few.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=135)** We can use the standard less than and greater than operators in PowerShell, as we would in Windows.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=146)** We can see the host name and the directory by typing the file.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=152)** We can also use the cat command to list the file as we would in Linux.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=157)** PowerShell commands can be scripted into a text file and we use the .ps1 extension to show that the file is a PowerShell script.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=167)** We can run any Windows program or PowerShell script by entering its name.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=171)** So let's create a text file using notepad.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=174)** For a normal executable, we'll prefix it with dot slash, but for Windows commands, we can omit that.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=182)** Okay, let's just put in a couple of PowerShell commands as an example, and we'll save it as test1.ps1.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=202)** Now we can run the script this time using the dot slash prefix, and we can see the get process command being executed.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=213)** We don't need to use notepad to write scripts.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=216)** PowerShell comes with an intelligent scripting system, ISE, which makes developing and testing complex scripts, much easier.
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=224)** I'm in the ISE and can create a script by clicking 'new' on the toolbar.
>
> **[3:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=230)** Okay, we've got to tab to write a script.
>
> **[3:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=232)** As I write it, I get assistance with the command format.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=238)** I can now save that as mytest1,
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=247)** and then run.
>
> **[4:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=250)** Back in the console, let's see how we can use variables in PowerShell, and we prefix them with the dollar sign.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=260)** We can also set up a list by just declaring it and we can check the number of list entries using the count function.
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=272)** We can also use the echo command to print information to the standard output.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=279)** And there's also a PowerShell commandlet called 'write-Host' that does the same.
>
> **[4:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=287)** We can also include variables in the string and the value of the variable is substituted.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=295)** We can use 'if then' commands in PowerShell using a bash-like syntax.
>
> **[5:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=304)** Note the ability to use multiline entry for this, with execution at the completion of the command.
>
> **[5:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=310)** We can also script loops using the 'do while,'
>
> **[5:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=333)** and we get the elements of the list displayed.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=336)** It's a bit obtuse, really, so there's another way to do this using the 'for each' clause.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=346)** Much simpler.
>
> **[5:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=349)** This has been just a refresher.
>
> **[5:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=351)** There's much more to learning PowerShell if you're new to it.
>
> **[5:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/script-with-powershell?u=76281980&t=355)** You can really get into the details by taking the PowerShell five course by Matt tester, and you can deep dive integrated scripting by taking the integrated scripting environment course with Mike Pfeiffer.

> [!info]- Semantic Content
>
> **Tools:** powershell (17), bash (2), command line (2)
> **Code Keywords:** let (3), function (2), interface (1), this, (1), while, (1)
> **Analogies:** such as (3), for example (1)
> **Env Vars:** ise (2), wmi (1)
> **CLI Commands:** cd (1), cat (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Extend PowerShell with Nishang
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=0)** - [Instructor] Let's take a look at Nishang, a set of powerful commandlets written by Nikhil Mittal.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=6)** Nishang is available in the Kali Linux release, but it can also be manually loaded into a Windows system.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=12)** The zip file can be downloaded from Nikhil's GitHub site shown here.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=16)** I've already downloaded and extracted the Nishang master contents into C:\nishang.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=23)** Note that if you want to work with Nishang you'll likely need to turn off real time protection.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=28)** A number of these scripts are picked up as a threat by antivirus software.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=33)** You'll also need to run the script as administrator.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=36)** So make sure you open the PowerShell using Run as Administrator option.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=41)** I've got PowerShell loaded and running as administrator.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=44)** So let's get going.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=46)** I'll prepare the environment to load the nishang module by allowing unsigned scripts to be run, and importing the nishang scripts for use.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=57)** PowerShell will ask for permission to load in signed scripts.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=61)** We need to override this, which we can do fairly easily with the Get-ChildItem command, which we can invoke using its alias gci.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=70)** We'll look at the Nishang module and recursively unblock all scripts within it.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=77)** Let's get a listing of all the Nishang modules using the Get-Command commandlet.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=84)** That's quite a lot of new capability we've added to PowerShell.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=88)** Okay, let's start running some Nishang commandlets.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=91)** I'll start with the basic information gathering command.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=98)** The script encountered a couple of problems while collecting information, but let's use notepad to look at what we did find.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=106)** And we can see we've got a substantial amount of information.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=110)** Processes, hosts, users, installed software, hosts file, drivers, interfaces, and so on.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=121)** We can check what the nishang command does using the Get-Help commandlet.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=129)** Here we've got the help on the Invoke-Mimikatz commandlet which we can use to extract user information from memory.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=136)** Another interesting command is Get-PassHashes, which extracts the password hashes for us.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=146)** Okay. We've got our list of hashes.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=148)** We can scan ports using Nishang.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=163)** And we can see the open ports.
>
> **[2:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=165)** This is useful for moving laterally in networks.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=169)** Another powerful feature of Nishang is creating documents with an embedded payload.
>
> **[2:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=175)** An example of this is the Out-word command, which I'll run on a system with the Microsoft Office installed.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=182)** This can create a default Word document or can embed the payload in whatever Word document is provided.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=190)** And we've created a weaponized Word document called Salary_Details.doc.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=195)** In this case, the payload is a command to invoke PowerShell, which we may wish to do as we move laterally through our target network as we test it.
>
> **[3:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=203)** Nishang comes with a number of other payload deployment tools, including Out-Excel, Out-Shortcut, Out-CHM and Out-JS.
>
> **[3:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=212)** We can do brute force testing with Nishang using the invoke brute force command.
>
> **[3:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=217)** This can be used to run a dictionary attack against various services.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=221)** I'll show an example of running this against an FTP service on a remote system.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=226)** I've got a user list and a password list set up.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=233)** I'll use the verbose option so that we can see how we're progressing and stop on success, to terminate when we find the correct credentials.
>
> **[4:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=244)** We can see the script running and it's got a bug as it's throwing an exception on a failed try.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=251)** However, it does find a match.
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=254)** Let's finish our refresher on Nishang with a look at the Invoke-Prasadhak, which connects to the Virus Total database and checks the executables of all running processes for malware.
>
> **[4:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=265)** This requires an API key from Virus Total, which you can obtain by registering a free account.
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=272)** Okay. We checked and we found one file that's flagged as malicious.
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=278)** I can enter the file hashing to Virus Total and find the report.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=282)** Here we have a single detection by the Baidu engine that matches the WisdomEyes Trojan.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=289)** I can investigate this further to determine if it's a real Trojan or a false positive.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=295)** This has been a brief introduction to how we can extend our PowerShell testing capability with Nishang.
>
> **[5:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/extend-powershell-with-nishang?u=76281980&t=301)** Nishang provides many commandlets and it's useful to spend time learning about each of them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), module (2), override (1), this, (1), case, (1)
> **Tools:** powershell (6), github (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** chm (1), ftp (1), api (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)


### 3. Bash Scripting

> [↑ Back to Table of Contents](#table-of-contents)

#### Refresh your Bash skills
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=0)** - One of the skills that can be quite useful when pen testing is Bash Scripting.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=5)** Bash is a program that comes built into Linux.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=7)** Bash scripts, also called Shell Scripts, are text documents with a .sh extension.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=13)** There's a number of courses on Bash Scripting in our library, and if you want an in-depth understanding of the language, then I'd recommend you look in particular at the course by Scott Simpson, called "Up and Running with Bash Scripting".
>
> **[0:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=27)** In the next few videos, I'll run through a quick refresher on the key points of Bash Scripting.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=32)** Let's have a look at the traditional "Hello World" script in Bash.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=38)** We start with the declaration that this is a Bash show, and then we'll set a string variable and print it.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=46)** We need to set the Shell file to enable execution, which we can do with a "chmod" command.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=55)** And then we can execute it.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=59)** And here we get our "Hello World".
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=61)** We can use the convention dollar 1, dollar 2, through to dollar N, to access the first, second and nth argument on the command line.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=71)** We'll put two arguments on the command line and then print them as one message.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=83)** And here we get the number of arguments printed and the message.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=87)** Bash allows us to set variables and carry out operations on them.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=94)** I'm setting number one to the value of the command line argument, and setting number two as a constant.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=100)** I'm checking whether the argument is greater than or equal to the constant, and displaying a message accordingly.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=106)** And then displaying the sum of the two numbers.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=109)** Variables in Bash are un-timed, So we have to use a double bracket syntax to achieve a new Mary CAD.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=124)** Bash displays the correct message, comparing the two values and then displays the sum.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=130)** We can read information into the Bash script with a "read" command.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=133)** If we use an echo statement, we'll read on the following line.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=137)** But if we use the minus P prompt, we'll read input on the same line as the prompt.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-bash-skills?u=76281980&t=143)** And I input my name on a new line, firstly, and then on the prompt line.

> [!info]- Semantic Content
>
> **Tools:** bash (12), command line (3)
> **Definitions:** is a  (2)
> **CLI Commands:** chmod (1)
> **Code Keywords:** let (1)
> **Env Vars:** cad (1)
> **Cross-References:** in the next (1)
> **Speakers:** - one (1)

#### Control the flow in a script
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=0)** - [Instructor] Bash offers a number of flow control statements.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=3)** One of the common ones we'll be using is the for statement.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=6)** Let's look at a script which reads data from an array.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=11)** Note that when we use the at character as an index, we get the number of elements in the array.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=16)** Note that the first array element has an index of zero when we use the expression $I to use the value of the loop variable as an array index.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=29)** We can now run the script to print out the list of names.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=34)** We can also script two other similar loop mechanisms in a Bash script; the why loop and the until loop.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=42)** Let's have a look at them.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=46)** Firstly, we set the start point at six and then loop, printing out the variable and decrementing it while it remains greater than zero.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=55)** Then we run an until loop, printing it out and incrementing it until it's greater than six.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=68)** Now we can run the script.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=71)** We see the while loop run down from six to one and then the until loop run back up to six.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=79)** We've already seen an if else loop, but let's look at this again to see how we can check whether a directory exists, and if so, list its contents.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=90)** We check the directory we provide by using the -D operator.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=97)** If it does exist, we use the LS command to list it out.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=107)** We can run that with a missing directory name, and we find the directory Barney doesn't exist,
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/control-the-flow-in-a-script?u=76281980&t=117)** but Sniper does.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **CLI Commands:** ls (1), find (1)
> **Tools:** bash (2)
> **Warnings:** note that (2)
> **Speakers:** - [instructor] (1)

#### Use functions in Bash
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=0)** - [Instructor] Bash provides the ability to define and code functions.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=3)** Let's write a script which demonstrates the use of a function and we'll also include the use of the select in case statements.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=13)** It would define the function and we've used an extended if statement to check the city we're going to visit.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=19)** This function takes one parameter which is the city name.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=23)** Note in batch that they single operator equals is used to do string comparisons and assignments.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=28)** And the double operator equally equal is used for numeric comparisons.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=32)** We check the city and print advice on the language spoken.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=37)** The start of the main code prints a question, and then uses the select statement to print a menu and then ask for a series of responses.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=46)** These are within a do break construct which terminates when exit is selected.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=51)** The variable PS3 is a system variable uses the prompt for the select statement.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=57)** Break response, a case statement prints out the city in the country chosen and calls the speak function to display the language used.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=68)** Let's run this.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-functions-in-bash?u=76281980&t=72)** I'd select Melbourne and Hanoi and Paris, and our exit.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), this. (1)
> **Env Vars:** ps3 (1)
> **Tools:** bash (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Python Scripting

> [↑ Back to Table of Contents](#table-of-contents)

#### Refresh your Python skills
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=0)** - [Instructor] Python is an interpretive programming language and the interpreter can be found for both Windows and Linux at the main Python site shown here.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=9)** There are various versions of Python and scripts are not always compatible, so modifying Python scripts that you may pick up to do testing is sometimes necessary.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=20)** You'll need to install Python on Windows but it comes built into most Linux distributions.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=26)** We'll use Kali to refresh ourselves on Python.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=29)** One of the useful documents to have when programming in Python is the library reference, which provides details of all the built-in calls that you can make to do things in Python.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=40)** As a pen tester, you'll be using the networking calls extensively.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=45)** There are graphical interfaces for Python but for our purposes, we'll run at the command line.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=52)** Once you've got Python installed, you can check it's working by entering the command, python.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=59)** This will put you in the interactive interpreter.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=62)** You can enter commands here and get the response immediately and you can use ctrl + d to quit.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=70)** We can also use an editor and create a text file containing the Python script, then we can run it as a command line argument.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=78)** For example, let's create helloworld.py
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=87)** And we can run that.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=93)** Python provides us with string and numeric variables, which can be integer and floating point.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=99)** We can also use Boolean variables.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=102)** We can assign values to a variable, which takes on the type as used in the assignment.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=108)** So let's use the interpreter to see how this works.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=113)** I'll set the variable port to 8080 and I can use the function type to check what type port is.
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=125)** And we can see the port has been set as an integer.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=130)** I'll set exploited to true and I'll check it's type, which is Boolean.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=142)** I'll set username to the string, Malcolm and we can see the type of username is string.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=153)** And when I set value to 12.43 it's type is floating point.
>
> **[2:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=162)** We of course have the normal mathematical and string concatenation operators.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=167)** If I print 12 + 7, I get 19.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=171)** Let me set a couple of strings.
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=173)** String one is my name is, string two equals Malcolm and when I print str1 + str2, we get the concatenated string, my name is Malcolm.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=191)** There are more complex ways of managing data in Python.
>
> **[3:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=194)** The first is lists which we can create using square brackets.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=198)** Let's look at a list of IP addresses.
>
> **[3:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=203)** I've created a list called active host and I'll append a value to it.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=213)** I'll append another value... And then I can print one of the values by using print active host and use the subscript three.
>
> **[3:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=230)** And we get the value of the fourth entry.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=233)** If we print activehost zero, we get the value of the first entry.
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=242)** A similar construct to a list is a dictionary for which we use curly brackets.
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=247)** This is where we can associate a value with a label.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=251)** Let's create a list of hosts and host names.
>
> **[4:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=258)** I'll set the dictionary host name to a pair of values.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=262)** 173.23.1.1 and I'll call the host name
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=272)** [munless.com](https://munless.com).ch.
>
> **[4:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=275)** and I'll put a second entry in the dictionary.
>
> **[4:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=281)** 173.23.1.3 and I'll give that the name, mail.[munless.com](https://munless.com).ch Now if I print the length of host name and this shows that we have two entries in the dictionary, we can print the value of an individual entry in the dictionary by using the expression print hostname and give it the key 172.23.1.3 and it gives us the associated value.
>
> **[5:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=320)** We can look through a dictionary using the special term, key.
>
> **[5:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=327)** So we'll do a for loop for key and hostname, print key and it prints out the keys for us.
>
> **[5:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=338)** We can add more entries to the dictionary with the update method.
>
> **[5:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=348)** And if we just type hostname, we can see that the new entry has been added.
>
> **[5:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=356)** We can create multiple dictionaries which we can then reference using subscripts.
>
> **[6:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=361)** Let's remake hostname as a multiple dictionary.
>
> **[6:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=375)** I've created the first dictionary and by putting a comma and continuing with new curly brackets, it creates a second dictionary.
>
> **[6:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=395)** Now, we can reference an element in either dictionary with its subscript, starting again at zero.
>
> **[6:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=402)** This will select the first dictionary and I can look for the value with the key 172.23.1.3.
>
> **[6:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=414)** Let's move on to conditionals.
>
> **[6:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=417)** We can use if else statements to conditionally execute code.
>
> **[7:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=422)** I'll set num to five and I'll put a conditional, if num < 10 print single digit number.
>
> **[7:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=439)** Which it is.
>
> **[7:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=441)** We can also use the for statement to execute a block of code a number of times.
>
> **[7:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=448)** for X in the range 1,5 print repetition + string x and note that we only print four entries.
>
> **[7:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=464)** The repetition stops when the final value is reached, not after it.
>
> **[7:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=469)** Note also that the scope of the conditional or repetition statement extends to all indented lines following it.
>
> **[7:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=476)** Python is sensitive to where you start your line of code.
>
> **[8:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=480)** We've used the string function here to convert an integer into a string.
>
> **[8:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=484)** Python provides many such functions to make scripting easy.
>
> **[8:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=488)** Some more examples include the set of string manipulation functions, upper, lower, replace and find.
>
> **[8:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=495)** Let's see how we use the upper function.
>
> **[8:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=500)** I'll select an entry in our dictionary and they'll display it as an upper case.
>
> **[8:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/refresh-your-python-skills?u=76281980&t=506)** I won't go into the vast array of functions that Python offers but you can review them in the library reference documentation.

> [!info]- Semantic Content
>
> **CLI Commands:** python (17), make (2), find (1)
> **Code Keywords:** let (8), function (3), type, (1), extends (1), case. (1)
> **Versions:** 173.23.1 (2), 172.23.1 (2), 12.43 (1)
> **URLs:** [munless.com](https://munless.com) (2)
> **Tools:** command line (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** you'll need (1), install (1)
> **File Paths:** helloworld.py (1)

#### Use the system functions
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=0)** - [Instructor] Let's take a look at one of the functions that we may find useful.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=3)** The crypt function.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=5)** This takes the password and provides back its password hash.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=9)** On Linux systems, we also use what's known as a salt value.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=13)** This is consistent for the system, but may differ between systems and it's a two character value.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=19)** We'll use MS for this.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=24)** First of all, I have to import the crypt library and then I can call the crypt function with a password and the salt, and that returns the hash.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=40)** We can use this function in a small password cracker program to recover a password by checking it against the dictionary of expected passwords.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=49)** Let's also pass the hash as a parameter to the Python core.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=53)** We can do this by referring to the call argument value R V, which is in the SIS library.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=59)** I've got a dictionary called dict.txt, which I can read in.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=63)** The dictionary file just contains potential password.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=68)** I've written a small password cracker, which uses the crypt function.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=73)** We can see here that we're opening the file, dict.txt and then reading each line, which contains a password to check.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=80)** We then call encrypt with our salts to calculate the hash value, and then checking it against the command line hash value.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=88)** If they match, we print the password and exit the program.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=92)** Note, we have to use the strip function to remove the new line character that exists when we use read line.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=99)** Okay, let's run this with a hash value we found earlier when we call crypt.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-the-system-functions?u=76281980&t=105)** And we recover the password.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3), this. (1), pass (1), match, (1)
> **File Paths:** dict.txt (2)
> **CLI Commands:** find (1), python (1)
> **Env Vars:** sis (1)
> **Tools:** command line (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Use networking functions
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=0)** - [Instructor] Another module we do need to understand when we're doing pen testing is the Python networking library, the socket module.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=8)** To use the socket library, we need to import it and then set its configuration, and then create an instance that we can use to call its functions.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=17)** Let's use the connect and receive functions to get a banner from our Metasploitable FTP site.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=26)** We import the socket library so that we can use the socket networking features.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=31)** We set the default timeout to one.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=33)** That's more than enough for our test network.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=36)** Then we open a socket and connect to the Metasploitable server on 10.0.2.8 on port 21.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=44)** Note the use of double brackets.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=46)** We then receive up to 1,024 bytes back and print it.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=52)** Let's run that.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=57)** There we see the banner from the FTP server.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=61)** One of the standard diagnostic techniques once you've found an active host is to do port scanning.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=67)** There are many ways to scan for active ports.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=69)** The simplest is to limit our scan to TCP and try to establish a full connection to the port.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=75)** This can, of course, take a long time if we try all ports.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=79)** I'll just scan for those in the range 1 to 1023 on my Metasploitable server.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=87)** As before, we use the system and socket libraries, this time inside a try block and a for loop.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=93)** We check the response to see whether we did achieve a connection, and if so, print a message.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=99)** Let's run it.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-networking-functions?u=76281980&t=104)** Here we have a port scanner.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (2)
> **Env Vars:** ftp (2), tcp (1)
> **CLI Commands:** python (1)
> **Ports:** port 21 (1)
> **Versions:** 10.0.2 (1)
> **Speakers:** - [instructor] (1)

#### Work with websites
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=0)** - [Narrator] A significant part of any pen testers work will be website testing.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=5)** While automated testing tools are readily available, there are times when you might need to do manual testing using scripting tools, such as Python.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=14)** Let's have a look at how we can use Python to work with websites.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=17)** Websites need to have pages uploaded and one common way to do this is using FTP.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=24)** We can use the FTP server for testing if we have it's credentials.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=28)** So let's access the FTP server to check for our web pages.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=33)** We import the FTP library and then set the remote server address.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=38)** We then log in with a set of credentials and set the working directory to the website folder which is var/www.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=46)** We then issue a dir command to get the directory listing.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=50)** Okay, let's run it.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=55)** Okay, we've accessed the target server and listed the directory.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=60)** We can use the urllib to retrieve webpages.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=65)** I'll import the urllib library.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=69)** And I'll call the urlopen function and include the webpage I want to see and I'll print it.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=85)** The next thing an attacker might do is to modify a webpage to do something malicious.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=91)** Let's see how an attacker can inject code into a webpage to send a web user to a malicious website.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=98)** Okay, so the first thing we do is to open the website FTP server and login.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=104)** Then we switch to the directory in which the target web page exists.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=108)** We open a temporary file on our system and use the FTP command RETR to write the webpage into it.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=115)** Then we write an iframe with this embedded link to the malicious website.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=121)** For convenience, I've included my gotcha file in the same directory as the target page but it could be anywhere.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=128)** Then we reopened the temporary file and use the FTP command store to write that into the target overwriting its webpage.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=136)** We then display a message indicating we've completed our inject.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=140)** Let's see how this works.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=142)** I've modified the metasploitable starting page with an additional menu item for my accounts.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=148)** This links to my account's web page.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=155)** This is a fairly simple query page for a user with the link to display user information.
>
> **[2:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=161)** Let's take a look at our gotcha page which the inject we'll call.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=168)** Here, I'm printing a message in a visible iframe but we could be just as well using an invisible iframe and downloading malware.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=177)** Let's navigate to the web page.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=181)** We can see the new menu item at the bottom called user accounts.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=185)** I'll select that and I'm asked for an account number.
>
> **[3:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=194)** Okay, we can see the account details.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=198)** Now let's run our Python script.
>
> **[3:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=203)** And let's have a look at our temporary file.
>
> **[3:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=209)** We can see the account request webpage with the iframe included at the end.
>
> **[3:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=215)** Now let's go and look at our accounts webpage.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=218)** I'll navigate to the webpage and now when I'm asked for an account number, I've also got the iframe message.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/work-with-websites?u=76281980&t=226)** I've been compromised.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), var (1), function (1), switch (1)
> **Env Vars:** ftp (7), retr (1)
> **UI Navigation:** navigate to (2), open the (1), switch to (1)
> **CLI Commands:** python (3)
> **Warnings:** gotcha (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Drive Metasploit through Python
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=0)** - [Tutor] One of the more interesting protocols which is used in both Windows and Linux is SMB.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=6)** This is the Session Management Block protocol, used to provide shared access to files, printers, and so on.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=14)** It's also the access vector used for attacks such as Conficker, WannaCry, and Petya.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=20)** The primary port used for SMB is 445.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=24)** Accessing SMB means either finding an exploit to break into the expos port, or gaining access somehow to credentials.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=33)** To see how we might interact with SMB, we'll set up a listener so that we can run the Meterpreter.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=39)** We'll script this into a Python function using the "def" statement.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=43)** Our current Kali host is 10.no.2.11, and we'll use port 3000 for the listener.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=50)** We'll also set up an exploit to run the PS exec attack from Metasploit, and use a set of target credentials that we know.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=58)** To integrate with Metasploit, we write the commands we want to run into the Metasploit configuration file using Python, and then execute the Metasploit console.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=73)** Below the depth shell line, we have the shell function defined, which will set up and run the handler to prepare a listener.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=81)** It does this by writing out the standard Metasploit commands to the Metasploit configuration file.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=88)** Following the def exploit line, we have the exploit that we'll run to get the PS exec access through SMB to Windows.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=97)** The main part of the script calls the functions to create the resource file and then start Metasploit through the Python system core.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=106)** Okay, let's run it.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=115)** We can see we've started the TCP reverse handler, and we've executed the PowerShell exploit.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=122)** We're in Metasploit, and we can check what remote sessions exist.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=128)** Okay, we've got a Meterpreter on session one, so let's switch to that.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/drive-metasploit-through-python?u=76281980&t=138)** And we can now work remotely on the target.

> [!info]- Semantic Content
>
> **Env Vars:** smb (5), tcp (1)
> **Code Keywords:** function (2), let (2), switch (1)
> **CLI Commands:** python (3)
> **Prerequisites:** set up (3)
> **Ports:** port 3000 (1)
> **Versions:** 2.11 (1)
> **Tools:** powershell (1)
> **UI Navigation:** switch to (1)

#### Access SQLite databases
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=0)** - When doing pen testing, we'll often come across SQLite databases on everything from browsers to mobile devices.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=8)** It's useful to have a way to automate access in order to build testing tools and to do manual testing.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=15)** We can do this relatively easily in Python.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=18)** I've extracted a cookie database from a Chrome browser.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=22)** Let's take a look at it.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=23)** Here we open the SQLite3 library and connect to our cookies database.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=31)** We then execute a query using select against the metadata to find the tables in the database.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=37)** Let's run it.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=42)** We can see the list of tables in this database, including one called cookies, which holds the text of the cookies that have been stored.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=51)** Now let's look at the table cookies and see what columns it holds.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=56)** Again, we open the SQLite3 library and connect to our cookies database.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=62)** We then execute a query to select all fields and print the field descriptions.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=72)** Okay, this gives us a list of the field names.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=76)** Once we found an identified the structure of the tables, we can open a table and list data.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=85)** Again, we import the SQLite3 library and connect to the cookies database, and we select the two fields we're interested in.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=93)** We then print all of them with a cookie name first and the site following it with a little formatting.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=100)** Let's run it.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/access-sqlite-databases?u=76281980&t=106)** And we get a list of the cookies that have been stored through the browser.

> [!info]- Semantic Content
>
> **CLI Commands:** sqlite3 (3), python (1), find (1)
> **Code Keywords:** let (4)
> **UI Navigation:** open the (2), select the (1)
> **Speakers:** - when (1)

#### Use Scapy to work with packets
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=0)** - [Instructor] It's occasionally useful when testing to use raw packets to probe a target.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=5)** We can do this in Python by invoking the Scapy library.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=9)** Scapy is a Python tool, but it also comes as a library to use within your own Python scripts.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=15)** It enables you to create each of the layers of a packet and within these layers set all or any of the fields.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=22)** Let's try a simple demonstration of Scapy, creating a SYN flood.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=28)** Here we can say the flood routine, setting up a loop for the source port, and creating a SYN packet with its IP address and TCP address and sending it to the target.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=39)** Okay, we can run this script against our Metis (indistinct) server now.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=45)** This is sending a lot of packets out.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/use-scapy-to-work-with-packets?u=76281980&t=47)** Of course, this isn't a sophisticated flood, but it does show the power of Scapy.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Env Vars:** syn (2), tcp (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Kali and Metasploit

> [↑ Back to Table of Contents](#table-of-contents)

#### A Kali refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=0)** - If you haven't worked with Kali yet, you should take a look at my introduction to Kali course.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=5)** For the purposes of this course, let's start by taking a look at the basic configuration, updating and application menu.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=13)** We'll start by looking at how we can change our Kali settings.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=17)** I'll click on the computer icon at the top right, and settings.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=22)** We can manage our timeout settings here.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=24)** Let's look at system and we can see that I've sent Kali to never suspend.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=29)** Under display, the screen will go blank after 10 minutes and switch off after 15 minutes.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=36)** Under security, we're going to lock the screen when the system goes to sleep.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=41)** You can set Kali to manage its power and displays as you like.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=46)** Before I look at the tools, I'll run the update and upgrade commands to make sure Kali is up to date.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=52)** I'll open the terminal window and type sudo apt update and sudo apt upgrade.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=65)** And I'll put the Kali password in, which is Kali, and we'll let that run.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=69)** And that will do its update followed by its upgrade.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=74)** Okay, we're up to date now and we can close the terminal window.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=78)** Our Mac address is the hardware address associated with our network card.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=84)** However, we can override this in software.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=87)** Let's look at one of those system configuration tools included with Kali that we can use to change our Mac address.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=93)** I'll select applications, sniffing and spoofing, Mac changer.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=100)** Kali opens a terminal and shows us the help display.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=103)** I can run IF config to see my current settings.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=106)** IF config We can see the Mac address on the line starting with the word ether.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=115)** I'll now run Mac changer and change my Mac address.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=120)** Sudo mac changer
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=125)** - A eth0.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=129)** I'll put our password in.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=132)** Okay, we can see the Mac address shown is the current address and that I've been provided with a new one.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=137)** And if I run if config again, sure enough, the new one has been set.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=145)** When we're testing, we'll need to be able to identify what vulnerabilities are known for a specific system.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=152)** And we can do that in Kali with search ploits which we find under applications, exploitation tools, search ploits.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=164)** This tool connects to the exploit DB, exploitation database.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=168)** It's pretty simple to use.
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=170)** We just give it the term we want and it lists the known vulnerabilities containing that term.
>
> **[2:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=175)** Search sploits, smb and we get a list of all the vulnerabilities for the smb protocol.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=183)** We can limit the results with a second term.
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=186)** Search sploits, smb windows, and the results are limited to just Microsoft vulnerabilities.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=195)** There are many tools in the Kali menus.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/a-kali-refresher?u=76281980&t=198)** And as a pen tester, you'll want to be familiar with them.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (3), apt (2), make (1), find (1)
> **Code Keywords:** let (4), switch (1), override (1)
> **Tools:** terminal (3)
> **UI Navigation:** click on (1), open the (1)
> **Speakers:** - if (1), - a (1)

#### Fuzzing with Spike
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=0)** - [Instructor] Vulnserver is an excellent testing environment for understanding how malware works.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=6)** We're not going to test its full functionality, but we will use it to look at a fuzzing tool called Spike that's included in Carli.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=14)** I've loaded the vulnerable server shown here onto my Windows system.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=18)** This server listens on port 9999.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=21)** The first thing I'll do is to connect to the server using Netcat.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=25)** NC 10.0.2.14 9999.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=30)** Okay we get the banner, and I can enter help to see what commands it takes.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=35)** Help.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=37)** We get a list of commands and we can use these to start fuzzing.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=40)** And note in the middle there is the TRUN command.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=44)** We'll use that for our fuzzing tests.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=46)** To use Spike, I need to set up an action file.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=49)** I'll call this command .spk and I'll use Nano to build it.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=52)** Nano_command.spk.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=55)** And we'll start by asking Spike to read the banner for us.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=63)** And we'll then send out a string.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=68)** S_string TRUN. Space.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=73)** And we'll follow that s_string_variable with a command variable.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=84)** Okay. I'm instructing Spike to send the string TRUN and variable command to the server.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=91)** To see this in action, we use Wire Shark to capture the packets.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=100)** And we can call the Spike Cen-TCP module by entering generic_send_TCP to 10.0.2.14 on port 9999
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=112)** using the action file command.spk 0 0.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=118)** And the servers responding with the welcome message for a few packets, and then stops responding.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=124)** We've crashed the server.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=126)** Let's check the packet stream in Wire Shark.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=135)** Okay. At the top we can see the syn syn-ack ack three way handshake between our Carli system on 10.0.2.15 and the vulnerable server on 10.0.2.14.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=148)** We then see the 105 byte welcome message.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=152)** And two messages later, we see the TRUN command, and we can see this again.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=159)** Another 105 byte package, welcome to the vulnerable server and our TRUN command. And again.
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=170)** But eventually, we stop getting the welcome message, and the system has crashed.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=177)** We know that this string of packets crashed the server and we can now analyze the activity to see which packet we sent just before crashing it.
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=184)** We'll leave the vulnerable server in Spike here but we've barely scratched the surface of these tools.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fuzzing-with-spike?u=76281980&t=190)** Take some time after the course to look into them further.

> [!info]- Semantic Content
>
> **Env Vars:** trun (5), tcp (1)
> **Versions:** 10.0.2 (4)
> **Code Keywords:** module (1), let (1)
> **Ports:** port 9999 (2)
> **Code Identifiers:** s_string_variable (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Information gathering with Legion
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=0)** - [Instructor] Let's take a look at how we can use Kali to extract information about the services on a target system, while at the same time, looking for credentials to use.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=9)** To do this, we can use a useful reconnaissance tool called Legion.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=13)** We find this in Applications, Vulnerability Analysis.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=19)** And we'll put the password kali in and the startup's a bit messy, but we can right click on the top bar and maximize the Legion window.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=31)** Let's look on the panel to add hosts and add 10.0.2.8 for our metasploitable server.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=40)** And we'll do a hard assessment.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=43)** And we can submit.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=45)** Legion now starts analyzing our metasploitable server.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=49)** We can see its progress in the bottom panel.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=51)** And as the analysis proceeds, we can see the results in the main right panel.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=56)** If we scroll down to port 3306, we can see that the server is running MySQL 5.0.51a.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=65)** We can open the MySQL tab at the top right.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=68)** And we can see that Legion has used Hydra to check and found valid credentials to access the SQL server.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=75)** Similarly, if we click on the tougher FTP on port 21, we find that Hydra has identified valid credentials to access that service also.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=85)** We can also look at the Services tab in the left pane.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=89)** We start with access denied on port 6000, but as we moved down the services, we can see bind shell on port 1524, which is open and is described as the metasploitable root shell.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=102)** Let's take a quick look at the Brute tab at the top left before we leave Legion, This allows us to brute force test the services with options to select a dictionary to use for usernames and passwords.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=114)** We'll go 10.0.2.8 to our metasploitable server on port 22, and we'll browse for usernames and we'll pick up unix_users.txt.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=132)** And we'll browse for passwords and pick up unix_passwords.txt.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=144)** And then we can run.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/information-gathering-with-legion?u=76281980&t=146)** Okay. We'll leave Legion there for now.

> [!info]- Semantic Content
>
> **Ports:** port 3306 (1), port 21 (1), port 6000 (1), port 1524 (1), port 22 (1)
> **CLI Commands:** find (2), mysql (2)
> **Code Keywords:** let (3), this, (1)
> **UI Navigation:** click on (2), scroll down (1), open the (1)
> **Versions:** 10.0.2 (2), 5.0 (1)
> **File Paths:** unix_users.txt (1), unix_passwords.txt (1)
> **Code Identifiers:** unix_users (1), unix_passwords (1)
> **Env Vars:** sql (1), ftp (1)

#### Using Metasploit
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=0)** - [Instructor] When pen testing, it's useful to provide evidence that vulnerabilities are in fact exploitable.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=5)** To do this, we can use Metasploit, which we can find in the applications exploitation tools menu.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=14)** The first time Metasploit starts up, it will create and prepare its databases, otherwise it will skip this initialization step.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=21)** After completing its startup, the msf6 prompt appears.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=25)** Metasploit is now ready for use.
>
> **[0:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=27)** Metasploit includes a database of testing modules, assembly and encoding capabilities, to manipulate, exploit, and payload code.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=35)** And the Meterpreter, a payload which provides a powerful remote shell.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=39)** We can see that it includes over 2000 exploits, has over a thousand auxiliary modules, 363 post exploitation tools and 592 payloads in its database.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=52)** Exploit modules are run against a target system to check whether it's vulnerable, auxiliary commands are generally to gather more information on the targets.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=60)** Payloads are sent into a target system to demonstrate that the exploit was successful by executing on the targets.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=67)** The first Metaploit command I'll enter is, help.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=70)** This shows all the commands that we can issue in Metasploit.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=75)** This list starts with the core commands, followed by the module commands, the job commands, and so on.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=85)** I won't go through all of these commands, but you should familiarize yourself with them.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=90)** I can issue the command, show exploits and that lists all of the exploits in the Metasploit database.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=98)** The exploit name appears at the left of this list and at the right is the disclosure date, the effectiveness of the exploit, and the description of what the exploit achieves.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=108)** There's far too many exploits for this to be useful, but I can be more selective and use the search command.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=114)** Let's look for a Windows 8 exploit.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=117)** I'll enter search Win8.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=122)** Here, we can see a couple of exploits listed for Windows 8.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=126)** The 2012 Internet Key Exchange exploit and the 2017 Eternal Blue exploit.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=132)** If I search for Windows 7, we get 35 exploits and payloads listed.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=139)** Let's now use Metasploit to check whether a system is vulnerable.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=143)** I'm going to try an exploit on my Metasploitable system and I'll start by looking at its IRC service.
>
> **[2:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=150)** Let's see what Metasploit has for us, search irc.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=155)** Okay, I can see there's a range of exploits for DOS, Windows, Unix and so on.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=160)** I'll select the Unix exploit called exploit/unix/irc/unreal/_ircd_3281_backdoor.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=169)** To do this, I enter the command, use, with the exploit name, use exploit/unix/irc/unreal_ircd3281_backdoor.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=192)** Okay, we're now loaded.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=193)** I can check the targets this exploit works against by entering the command, show targets.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=201)** In this case, the exploit can determine what kind of target it has so we can select automatic.
>
> **[3:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=206)** Let's set that target type, set target zero.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=211)** Let's now have a look at what payloads I can use with this exploit, show payloads.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=218)** I see that I have a number of command shells I can use and the generic command execution.
>
> **[3:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=223)** I'll use the info command to get more information on the reverse shell, info cmd/unix/reverse.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=235)** Okay, so, this doesn't need administrative privileges and it creates a shell on port 4444.
>
> **[4:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=241)** That sounds good.
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=242)** So, let's go select it, set payload cmd/unix/reverse.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=251)** I'll now see what options I need to set to use this combination of exploit and payload, show options.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=260)** Okay, I have to set the remote and local host addresses.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=264)** The remote address, set RHOSTS is 10.0.2.8.
>
> **[4:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=271)** The local host, this Kali system, set LHOST is 10.0.2.18.
>
> **[4:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=280)** Okay, let's run the exploit.
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=283)** And we do that by saying, exploit.
>
> **[4:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=286)** Okay, we can see Metasploit is establishing the sockets and the Telnet connection.
>
> **[4:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=290)** And finally confirming that a command shell has been established on the remote system.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=294)** The first thing we'll do is check that this is the remote system.
>
> **[4:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=298)** Ifconfig eth0.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=303)** Ifconfig displays the ip address, 10.0.2.8, the remote system.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=308)** Now, let's check who we are on the remote system, whoamI?
>
> **[5:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=312)** Okay, we're on the remote system as, root.
>
> **[5:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=315)** We can list processes on the remote system, with the PS command.
>
> **[5:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=320)** And we can list files with the LS command.
>
> **[5:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=324)** Okay, I'll press control C and terminate the remote shell.
>
> **[5:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=327)** And I'll abort this session.
>
> **[5:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/using-metasploit?u=76281980&t=329)** And that concludes the short refresher on Metasploit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), module (1), case, (1), type, (1)
> **Env Vars:** irc (1), dos (1), rhosts (1), lhost (1)
> **Versions:** 10.0.2 (3)
> **CLI Commands:** find (1), ls (1)
> **Code Identifiers:** whoami (1)
> **Ports:** port 4444 (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** initialization (1)

#### Exploit with Armitage
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=0)** - [Instructor] Armitage is a great visual tool for carrying out both scanning and attacks on targets, and was originally included with Kali.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=7)** It's no longer in the standard install, so we'll have to load it.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=12)** Sudo apt install armitage.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=17)** Okay, we'll now need to start the PostgreSQL server and initialize our databases.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=21)** Sudo systemctl start postgresql.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=31)** Sudo, and we'll msfdb init, initialize the Metasploit framework database.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=38)** That's already started.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=39)** Before we start Armitage, we have to fix a bug with a SaltStack exploit.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=43)** We'll just disable it.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=45)** We can do this with the commands, cd /usr/share/metasploit-framework /modules/exploits/linux/misc.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=61)** Now, we have to use sudo to change the name with the move command of saltstack_salt_unauth_rce.rb,
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=75)** which is the Metasploit attack module, and we'll rename it so that it doesn't come up in Armitage.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=86)** Salt_unauth_rce.rb.bkp.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=94)** Okay, now we can start Armitage.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=97)** Armitage.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=99)** And we'll connect to the Metasploit framework, and we'll start the RPC server.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=107)** The Armitage screen has a menu at the top and three panels.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=110)** The four key modules are shown in the top-left panel.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=113)** The network targets that Armitage knows about on the top-right, and a Metasploit terminal window at the bottom.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=119)** We'll run Armitage through its graphical interface, but we can see the equivalent Metasploit commands in the console.
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=125)** Let's have a look at the Metasploit database that Armitage has loaded.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=129)** There are four top level items, auxiliary, exploit, payload, and post.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=134)** The auxiliary group provides hundreds of tools, which can be quite useful during information gathering and initial testing, scanners, brute force logins, and so on.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=144)** In the top level menu, we can see clients, fuzzers, scanners, and so on.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=149)** If we look at scanner and select mysql and msql_login, we get the Metasploit framework attack panel.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=163)** We can say this allows us to specify a password file and a user file and do a brute force attack on MySQL.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=174)** The exploit group contains the various exploits that Metasploit knows.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=179)** We can see they're grouped into operating systems.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=182)** And if we select windows, we have the various services.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=188)** If we select smb, and we can go down to ms17_010_eternalblue.
>
> **[3:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=199)** This is the exploit behind the WannaCry ransomware campaign.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=205)** The payload group provides modules to perform the various functions required once the exploit has penetrated the target.
>
> **[3:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=212)** This is often to gain a shell for interactive access.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=216)** I'll select payload, windows, and we can see the meterpreter shells that we can use on a Windows box.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=226)** Finally, the post modules are used to carry out additional actions once we've exploited and dropped our payload.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=233)** This can be for such things as privileged escalation, key logging, establishing persistence, and so on.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=238)** For example, if we look at post, windows, escalate.
>
> **[4:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=245)** Here, we can see the various ways to escalate privileges once we have a user shell.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=251)** Okay, to begin our refresher on using Armitage, let's scan the local network by running Nmap from the host's menu.
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=261)** We'll select an Nmap Scan, Ping Scan, and we'll enter our subnet, 10.0.2.0/24, and we'll let that run.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=279)** Okay, we can see Armitage quickly found a number of systems.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=282)** I'll select the first, right-click, and select Scan, and Armitage scans the host looking for open ports.
>
> **[4:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=291)** In this case, it didn't find any.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=294)** We'll select the second, Scan, and run that again, and we can see there's a series of ports that are open on that host.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=303)** If I now select the host and select Services, I can see the various services with the ports.
>
> **[5:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=311)** And there's not a great deal of details there yet.
>
> **[5:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=314)** We can get Armitage to scan to try and identify the operating system by running Hosts, Nmap Scan, Quick Scan OS Detect.
>
> **[5:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=324)** And again, we can run it for the whole subnet.
>
> **[5:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=331)** And we'll come back when this finishes.
>
> **[5:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=333)** Okay, Armitage has found two Linux systems, one Windows system, and a couple of embedded processes.
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=339)** We may happen to know which operating systems a specific host is running.
>
> **[5:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=343)** In this case, I know 10.0.2.11 is Linux, so I can right-click, Host, Operating System, and set it to a Linux host.
>
> **[5:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=354)** There is another slight problem with Armitage to do with exploit ranks.
>
> **[5:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=357)** Finding attacks only works with the rank set to poor, so I'll select Armitage, Set Exploit Rank, and make sure we set to Poor.
>
> **[6:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=370)** I can then select Attack, Find Attacks, and Armitage will run through its database and associate the relevant attacks with each of the targets.
>
> **[6:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=384)** Okay, the attack analysis is now complete.
>
> **[6:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=386)** Let's have a look at 10.0.2.8, and we can see we have an attack context menu.
>
> **[6:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=391)** And if I go down to select samba, usermap_script, Armitage will pop up the Metasploit attack panel with everything ready to go, and I can press Launch and launch the attack.
>
> **[6:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=406)** A new tab opens in the bottom panel, and we can see the attack taking place.
>
> **[6:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=410)** The attack progresses in the lower panel, and we see a meterpreter session starting.
>
> **[6:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=415)** The host icon has turned red and is enveloped with lightning bolts.
>
> **[6:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=419)** It's now compromised.
>
> **[7:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=420)** I can right-click again and press Shell 1, Interact, and we have our shell.
>
> **[7:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=427)** And if I ask who am I, we find that we're root.
>
> **[7:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=431)** Here we are in the Linux system with root privileges.
>
> **[7:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=435)** Armitage has another feature known as the Hail Mary option.
>
> **[7:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=438)** Running this capability floods the target with all of the relevant known exploits.
>
> **[7:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=443)** It's a powerful means of testing a system, but it's not at all subtle.
>
> **[7:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=447)** Nevertheless, let's select the Attack menu, Hail Mary.
>
> **[7:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=453)** And once started, this will launch a flood of exploits at all the hosts.
>
> **[7:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=457)** So let's do that.
>
> **[7:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=459)** This takes a little while, so we'll come back when it's completed.
>
> **[7:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=463)** The Hail Mary attack flood has now finished.
>
> **[7:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=466)** The results can be a bit variable when we launch the exploits together, but we can see we have seven sessions open.
>
> **[7:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=473)** If I right-click on 10.0.2.8, we have seven shells.
>
> **[7:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=478)** And let's have a look at interacting with Shell 7.
>
> **[8:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=483)** And we'll again ask, who am I?
>
> **[8:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=487)** And in this case, we're a daemon agent.
>
> **[8:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=490)** If we look at the other systems, 10.0.2.9 has got an Attack, FTP.
>
> **[8:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=496)** We can manually run an attack on the modcopy_exec, and launch that.
>
> **[8:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=505)** And we can see the exploit has failed.
>
> **[8:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=510)** And again.
>
> **[8:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=515)** And again, that aborted.
>
> **[8:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-with-armitage?u=76281980&t=517)** So Armitage provides a simple means of selecting candidate attacks, but we still have to validate that they work in practice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (3), module (1), interface (1), finally, (1)
> **CLI Commands:** sudo (4), find (3), mysql (2), apt (1), systemctl (1)
> **UI Navigation:** select the (4), right-click (4)
> **Versions:** 10.0.2 (5)
> **Code Identifiers:** saltstack_salt_unauth_rce (1), msql_login (1), usermap_script (1), modcopy_exec (1)
> **Prerequisites:** install (2), before we start (1)
> **File Paths:** saltstack_salt_unauth_rce.rb (1), salt_unauth_rce.rb (1)
> **Env Vars:** rpc (1), ftp (1)

#### Scan targets with GVM
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=0)** - [Instructor] Identifying vulnerabilities is a key part of a Pen Tester's role.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=4)** And one way to do this is with the Green Bone Vulnerability manager, or GVM.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=9)** GVM doesn't come as part of the bundled Kali release, so we need to install it.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=14)** And we do that with "sudo APT install gvm".
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=21)** And we'll wait for this to finish.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=25)** We can now run the initial setup script for GVM.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=29)** This will take a while, as it has to download the databases that GVM uses.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=33)** "sudo gvm-setup".
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=40)** Okay, that's finished.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=41)** And we now have our scanning database set up.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=44)** We can also see an impressively long admin password.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=48)** We can simplify this for our course by running the greenhouse management tool.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=52)** This requires that we run as the user _gvm.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=56)** So we can do that using "sudo runuser
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=61)** - u _gvm
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=64)** - - gvmd
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=68)** - -user =admin
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=72)** - -new-password=admin".
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=80)** I've got Kali in, and that's changed the password.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=83)** Okay, we're ready to go.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=85)** We can start GVM by entering the command "sudo gvm-start".
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=93)** Make sure that this finishes correctly, and if not, then run the command again.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=97)** You'll want to see the countdown and a proper exit.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=101)** Okay, we can now connect through its web interface on port 9392.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=107)** I'll start up Firefox, and we'll go to 127.0.0.19392, and we'll go to that on HTTPS.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=124)** Go advanced, and and accept the risk and continue, And we're presented with the Green Bone Security Assistant login page.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=132)** I'll enter admin, admin, and login.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=140)** Okay, we've correctly installed GVM, and we're in, and ready to do a scan.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=146)** Let's run a scan.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=147)** I'll select the Scan tab, and then use the wizard by clicking on the wand at the top left, Task Wizard.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=157)** And I'll run against the target 10.0.2.8, which is my meta-spoiltable server, and start the scan.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=166)** Okay, we can see that we have our scan now requested and queued, and it's now running.
>
> **[2:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=176)** It'll take a while to run, so we'll come when it's finished.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=180)** Okay, that's finished running all the tests now, and I can select the link in the Reports column to look at the scan results.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=191)** This opens a new web page showing the scan time for one host.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=195)** If I open the Results tab, I get the list of issues identified, starting with the highest severity rating.
>
> **[3:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=203)** At the top, we can see there's multiple Ruby remote code executions on port 8787.
>
> **[3:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=209)** That's a 99% confidence level.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=211)** This id followed by port 80 command execution on the TWiki website; And below that there's a possible backdoor ingress lock on port 1524.
>
> **[3:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=222)** If we click on CVEs, we can see the relevant common vulnerability alert, which has been published for 19 of the issues that have been identified.
>
> **[3:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=231)** Going back to the list of issues, if I click on possible backdoor, ingress lock, we get details of the issue.
>
> **[4:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=241)** We can see the accessing the port receives a response, showing it's a root user shell.
>
> **[4:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=249)** Further down, we can see the recommended solution is to do a full system clean.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=262)** I won't go through the report in detail, but it's worth spending a bit of time checking out the results to become familiar with what GVM can do.
>
> **[4:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/scan-targets-with-gvm?u=76281980&t=270)** Running a GVM scan provides a pretty good idea of the vulnerabilities that exist in our target systems, and points to where we might want to investigate further to find exploitable weaknesses.

> [!info]- Semantic Content
>
> **Env Vars:** gvm (8), apt (1), https (1)
> **CLI Commands:** sudo (4), apt (1), make (1), ruby (1), find (1)
> **UI Navigation:** go to (2), select the (2), click on (2), open the (1)
> **Prerequisites:** install (2), setup (2), set up (1)
> **Code Keywords:** while, (1), interface (1), continue (1), let (1)
> **Ports:** port 9392 (1), port 8787 (1), port 80 (1), port 1524 (1)
> **Versions:** 127.0.0 (1), 10.0.2 (1)
> **Speakers:** - [instructor] (1), - u (1)

#### Managing GVM problems
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=0)** - [Instructor] GVM can sometimes be a bit of a problem child.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=4)** A useful start point for problem solving is to make sure our redis service is up and running.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=9)** We do this with, systemctl start redis-server@openvas.service, which is the original name of GVM.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=25)** And that's fine, and then we can check our setup by saying sudo runuser -u, And we need to run this as root -- gvm-check-setup, and this procedure to check our complete GVM open bar setup and our installation looks okay.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=46)** Let's have a look at some other useful actions you can take with GVM to synchronize the database.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=52)** We can run sudo runuser -u _gvm -- greenbone-nvt-sync.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=63)** And we're actually fully synchronized at the moment.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=66)** So that's fine.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=68)** We can also check the scanners running sudo runuser -u _gvm -- gvmd -- get-scanners
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=85)** and that shows us the scan is running and we can check the users as well with sudo runuser -u _gvm --gvmd --get-users
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=101)** And we can put --verbose as well.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=105)** And that shows us that the admin user is running.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=107)** There are occasional problems with GVM and in particular it can be difficult, to get it running properly after a reinstallation.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/managing-gvm-problems?u=76281980&t=114)** However, it's a good tool and it's worth persisting with solving any problems you may encounter.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (4), make (1), systemctl (1)
> **Env Vars:** gvm (5)
> **Prerequisites:** setup (3)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 6. Web Testing

> [↑ Back to Table of Contents](#table-of-contents)

#### Approach web testing
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=0)** - [Narrator] Most applications are now delivered as web applications or as mobile apps supported by a web based service.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=8)** Consequently, web testing is a key skill for a pen tester.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=12)** The cost of not testing web apps can be readily seen in the many examples of data breaches resulting from an insecure website.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=20)** TalkTalk is one of many, and it made headlines.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=24)** The culprit was a 17 year old boy who used hacking tools and looted email addresses, names and phone numbers as well as 21,000 unique bank account numbers and sort codes.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=37)** TalkTalk subsequently tested their websites, but this would have been much more effective before the hack.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=43)** There are two main approaches to testing websites.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=47)** The first is to crawl each page in the website looking for vulnerabilities.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=52)** This can provide a good map of where to look for weaknesses.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=56)** The second approach, and sometimes the second stage after crawling is to intercept the website traffic by using a proxy service between the web client and the server.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=66)** In addition, manually checking webpages for comments can be useful, as these have been known to include credentials and commented notes about bugs that require fixing.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=77)** Identifying client side code is also useful, as this can indicate ways in which the client can subvert security.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=85)** Another important check is the technologies used for the web server and the protocols used for traffic.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=92)** These can be used to identify known vulnerabilities that may not have been patched and cryptographic weaknesses that can be attacked.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=100)** Websites should use Secure Transport Services to ensure that there's no risk of man in the middle, but many still use HTTPS and even HTTP.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=111)** In addition, WebSockets is a new technology which has been deployed to provide simpler communication for web apps.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=118)** Understanding the strengths and weaknesses of the web architecture is useful.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=123)** Another area to look at is user authentication especially, where the website includes e-commerce functionality.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=130)** The rules around credit card payments are very strict and most sites have moved to payment gateways.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=136)** However, the interface between the e-commerce web page and the gateway is a key area to review.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=143)** Another area is the validation of credentials, any particular, the risk of injection attacks where a backend authentication server is used.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=153)** If the webpage builds a query string to extract user data, it's a key focus for attackers to exploit.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=160)** Password reset pages are also an area of focus, as the interactions are often less well-tested than the main access code.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=169)** Of course, websites, which have default credentials left in the system or have hard coded credentials stored are prime targets for attack.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=179)** Session management is another area of weakness, and it's useful to test whether an attacker can hijack the session or access a session with an intercepted session cookie.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=190)** Session tokens may also be predictable, which enables an attacker to prepare for an attack when the predicted cookie becomes active.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=198)** There's a lot of ways to attack a web application and a lot to look at when doing web testing.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/approach-web-testing?u=76281980&t=204)** We'll introduce a few tools and techniques that you should be familiar with, before you start to look at deeper testing.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** require (1), interface (1)
> **Env Vars:** https (1), http (1)
> **Speakers:** - [narrator] (1)

#### Test websites with Burp Suite
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=0)** - [Instructor] The Burp Suite community edition comes as one of the tools prebuilt into Kali.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=5)** I'll select applications, web application analysis and Burp Suite from the top of the list.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=11)** I won't update it.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=12)** I'll select the temporary project and I'll start there.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=16)** The free edition only allows temporary projects and the license is required if we want to store projects on disk, which is usually required when doing a full customer website test.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=26)** However, the temporary project will be fine for our course.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=28)** Burp Suite creates a new project and opens the main screen.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=32)** The Burp Suite menu is at the top left and offers six main items of burp, project intruder, repeater, window and help.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=41)** Below main items, we have burp activity tabs, and we're presented with the dashboard.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=48)** The target tab has three of its own tabs called site map, scope and issue definitions.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=53)** The site map shows the construction of the website and the scope is used to set targets for testing.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=60)** I'll add httpzero.[webappsecurity.com](https://webappsecurity.com).
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=71)** The issue definitions tab shows the various website issues that Burp Suite can detect, together with their severity.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=78)** I'll select the proxy tab next.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=80)** We can see that intercept is on, and this will intercept anything that comes through Burp Suite and allow us to inspect it and possibly change it.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=87)** I'll turn this off for the moment and we'll let traffic flow through.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=91)** I'll go to the options tab, and we can see that we're listening on port 80, 80.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=98)** I'll start Firefox and we'll set it up for proxy operation.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=103)** I'll go to the preferences.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=108)** I'll go down to the bottom and select network settings, and we'll set manual proxy configuration for proxy one to seven, naught, naught, one on port 80, 80.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=120)** I can now go to the zero bank site.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=124)** Httpzero.[webappsecurity.com](https://webappsecurity.com).
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=133)** Okay, we're at the bank.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=135)** I'll sign in now using our test credentials of username and password.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=140)** And it is in fact, username and password.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=153)** And I'm happy to go ahead with this and accept the risk and continue.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=160)** Back in Burp Suite, when we select target site map, we can see the traffic to and from the bank which has been captured.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=169)** If I click on the arrow to the left of the site URL in the site map panel, I can see the structure of the site.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=177)** I can expand the lower level structures until I get to individual pages.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=185)** In the right-hand panel, I can click on the bank account summary message, and the request and response packets are shown in the bottom panel.
>
> **[3:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=196)** By default, these are shown in raw form.
>
> **[3:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=199)** I can also have Burp Suite show me the page as rendered.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=204)** I'll leave any further exploration of Burp Suite for now.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/test-websites-with-burp-suite?u=76281980&t=207)** We'll see more of this tool as we use it to test our websites throughout this course.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), select the (2), click on (2)
> **Code Keywords:** let (1), continue (1), default, (1)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (2)
> **Ports:** port 80 (2)
> **Env Vars:** url (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### Check web servers with Nikto
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=0)** - [Instructor] Nikto is a fairly simple tool for web scanning.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=3)** It appears in the application menu under vulnerability analysis.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=8)** Let's take a look at it.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=10)** Nikto is used to identify which vulnerabilities exist in the underlying web server.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=15)** Selecting Nikto presents a terminal window and shows its various options.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=19)** I'll run Nikto against my meta exploitable host by typing Nikto minus H 10.naught.2.8.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=31)** The first thing we see is that the web server is an Apache 2.2.8 system running on Ubuntu.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=38)** This is followed by three notes relating to missing hardening features and advice that the Apache server is out of date.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=47)** Further down we see that Nikto has identified a number of known vulnerabilities from the open source vulnerability database OSVDB.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/check-web-servers-with-nikto?u=76281980&t=56)** The final summary shows 27 items, which need attention.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2)
> **Versions:** 2.8 (1), 2.2.8 (1)
> **Definitions:** is a  (1), is an  (1)
> **Code Keywords:** let (1)
> **Env Vars:** osvdb (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Fingerprint web servers
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=0)** - [Instructor] Fingerprinting is an important first step in testing a web application, as the environment in which it operates is as important as the application itself, in terms of potential application risk.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=12)** While some servers provide banners, others have their banners removed or modified.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=17)** Being able to determine the type of server from its characteristics is important, when reading the banner proves futile.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=25)** There are a number of tools available for fingerprinting a web server, one of them is HTTPRecon.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=32)** HTTPRecon can be downloaded from the Computex website as a zip file containing the windows binaries.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=39)** I've downloaded it into my window system, into the HTTPRecon folder.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=46)** There are three OCX files that come with HTTPRecon.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=50)** These may be missing in windows.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=52)** They need to be in the SysWOW64 folder and registered.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=56)** We have to be running an administrative command shell for this.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=60)** I'll now run the privilege registration process for all three.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=68)** Okay, that was successful.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=78)** As was that.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=86)** And then, I can now start the HTTPRecon tool.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=91)** Once the messages have all been collected, it populates the set of tabs at the top of the main panel with the response messages.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=99)** Okay, the analysis is finished and we have three tabs at the bottom.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=103)** The first is the match list, which provides a ranking of possible web server options with a confidence level.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=110)** The result is an Apache 2.0.59 web server with 100% confidence.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=116)** Although the banner does indicate 2.2.8.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=119)** The next is the fingerprint details, which provides a summary fingerprint.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=126)** The final tab is the report preview.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=129)** Which provides an extensive report on the fingerprinting.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=134)** The top menu items also provide for analysis and re-analysis and reporting.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=140)** The fingerprinting menu also has options for opening the site in a browser and for connecting to the Computex online fingerprint database.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=148)** NetSquare provides a useful tool for fingerprinting web servers called HTTP print.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=154)** This can be downloaded from the site shown.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=157)** It comes down as a zip archive and the executable program is in the Win32 sub-directory.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=164)** I'll run the gooey version of HTT print.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=169)** I need to uncheck the options for ICMP and SSL auto detect.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=178)** Let's put in the address, zero.[webappsecurity.com](https://webappsecurity.com)
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=188)** and point to the test banking website.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=191)** I'll change the output file to be zero.HTML.
>
> **[3:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=199)** I'll now press the play button at the bottom to check the fingerprint.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=205)** This is now run and extracted the banner showing an Apache Coyote 1.1 server.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=213)** And has deduced the server to be Apache 1.3, with a 61% level of confidence.
>
> **[3:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=219)** let's run it again against Metasploitable.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=226)** When I run this against the Metasploitable server, it comes back quickly with the banner reported as Apache 2.2.8, which is correct.
>
> **[3:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=234)** And the banner deduced as a 2.0.x, with a 57% level of confidence.
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=242)** Another tool we can use for fingerprinting is Uniscan, which comes with Kali.
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=247)** To do this, we simply pointed to the web server using the minus U switch.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=255)** I'll test the Hacme Casino website.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=259)** It's detected the web application is running on a WEBrick Ruby server.
>
> **[4:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=265)** Again, we can run against the test banking site.
>
> **[4:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=273)** And again, we see it's been detected as an Apache Coyote 1.1 server.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/fingerprint-web-servers?u=76281980&t=279)** Fingerprinting is an inexact art, but on occasions it can be useful.

> [!info]- Semantic Content
>
> **Versions:** 2.2.8 (2), 1.1 (2), 2.0.59 (1), 1.3 (1), 2.0 (1)
> **CLI Commands:** apache (5), ruby (1)
> **Env Vars:** ocx (1), http (1), htt (1), icmp (1), ssl (1)
> **Code Keywords:** let (2), this. (1), this, (1), switch (1)
> **Definitions:** is an  (3)
> **File Paths:** zero.html (1)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1)
> **Exercise Files:** zip file (1)

#### Web server penetration using sqlmap
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=0)** - [Instructor] Let's take a look at how we approach the initial penetration of a web server using SQLmap.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=6)** To do this, I'll use a target in the LinkedIn Learning pen testing lab.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=10)** If you want to know more about this lab, check out my advanced Kali course.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=16)** The target we'll use is the Europa server, which is on address 10.10.10.22.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=21)** Our VPN into the lab.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=23)** And we'll do a deep end map scan with the minus A switch.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=28)** Nmap -PS -F -A, 10.10.10.22.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=40)** We can see we've got three ports open.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=42)** SSH on port 22 and both HTTP and HTTPS web services on ports 80 and 443 respectively.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=51)** And we're running an Apache 2.4.18 website.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=56)** We can see the SSL certificate uses the subject name, europacorp.htb, with alternate names of www.europacorp.htb,
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=68)** and admin-portal.europacorp.htb.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=72)** This indicates we may be looking at a name server.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=76)** Let's go visit the websites.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=81)** If we go to 10.10.10.22, we can see we've got the default Apache2 webpage.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=92)** When we go to HTTPS, we have a potential security problem, but we'll accept that and continue.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=102)** And again, we're at the Apache2 Ubuntu default webpage.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=112)** Let's add admin-portal.europacorp.htb to our host file and see what we get when we go to the name server.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=121)** Sudo nano/etc/hosts.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=128)** And we'll add 10.10.10.22.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=132)** And that will be admin-portal.europacorp.htb.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=143)** And we'll save that.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=148)** Now, if we refresh our site, now, if we go to the name server, [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb),
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=172)** we now see a login page.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=177)** We can use SQLmap to for any vulnerable parameters in the websites.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=182)** And if it finds exploitable injections, we'll dump the database.
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=187)** To do this, we run SQLmap -U [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb).
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=204)** And we'll tell it to look for forms.
>
> **[3:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=210)** And we'll tell it to crawl to a depth of two.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=214)** And if it does find an exploitable parameter, we'll dumb the database.
>
> **[3:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=225)** We'll need to answer a few questions, but we'll take the suggested defaults, but we'll use 10 threads.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=239)** SQLmap has found the login page.
>
> **[4:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=241)** And it's identified the database as MySQL.
>
> **[4:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=245)** And it thinks that email might be injectable.
>
> **[4:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=249)** And is also vulnerable to a cross-scripting attack.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=253)** And we'll let it test for injections.
>
> **[4:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=257)** We've let SQLmap try fuzzy tests.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=260)** And it's identified there are five columns in the query and that it's union injectable.
>
> **[4:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=265)** This is good news for us.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=268)** SQLmap now offers to exploit the target for us using an SQL injection.
>
> **[4:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=275)** And it dumps out the database, including password hashes.
>
> **[4:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=281)** And it will even offer to try cracking the password hashes for us.
>
> **[4:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=286)** And it succeeds.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=289)** SQLmap has finished.
>
> **[4:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=291)** And we can see that it's identified a number of injection points.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=294)** It's executed the injection attack, and successfully dumbed out the database, and then crack the password hashes that it found.
>
> **[5:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=302)** SQLmap has done its job and more.
>
> **[5:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=305)** And we've managed to exploit the target and extract administrative credentials.
>
> **[5:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=310)** There are many different ways to use SQLmap.
>
> **[5:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/web-server-penetration-using-sqlmap?u=76281980&t=312)** And it's worth spending some time getting used to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), switch (1), continue (1)
> **Env Vars:** https (2), vpn (1), ssh (1), http (1), ssl (1)
> **CLI Commands:** ssh (1), apache (1), sudo (1), find (1), mysql (1)
> **Versions:** 10.10.10 (4), 2.4.18 (1)
> **UI Navigation:** go to (4)
> **URLs:** [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb) (2)
> **Ports:** port 22 (1)
> **Speakers:** - [instructor] (1)


### 7. Understanding Exploit Code

> [↑ Back to Table of Contents](#table-of-contents)

#### Exploit a target
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=0)** - [Instructor] We earlier covered the cyber kill chain and discussed the seven stages of a cyber attack.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=6)** Let's take a look in more detail at the delivery and exploitation phases.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=11)** These are the phases in which a pen tester spends most of their time.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=15)** At the delivery phase, the objective is to find a way to deliver a payload to a target.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=20)** There are four common ways to do that.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=23)** The first is to send someone the payload as an attachment to an email and have them execute it.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=29)** This could be a malicious executable file or more usually a document with malicious code installed in it.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=36)** Regardless, the delivery mechanism is the same.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=39)** Another way of delivering a malware payload to a target is to have the target come and get it by sending them an email containing a hyperlink to a malicious website.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=49)** This may be a website which, when the user visits it, can automatically drop the malware into their system.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=55)** It may be a site which contains trojanized software containing malicious code hidden inside the legitimate code.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=63)** Another way to deliver a payload is to connect to an exposed port and send the malware through the port or gain access to the port and copy the malware directly in.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=73)** Quite often, this will be achieved by sending a packet, which contains an initial exploitation warhead followed by the payload, which can be carried through in the packet.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=84)** Finally, the malware can be stored on removable media, such as a USB flash drive in such a way that when it's inserted into the target computer, it automatically runs.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=96)** Once the malware has been delivered, there may be an exploitation phase in which a vulnerability on the target system is exploited to enable the malicious payload to gain access to the system.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=108)** In the case of a malicious attachment, the exploitation is a human one.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=112)** Getting someone to run the malware without knowing that it's malicious, or even that any code is running.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=119)** It may be an executable attachment, or it may be a document which, when opened, exploits a vulnerability in the application software, or just simply runs an embedded malicious macro.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=131)** We continue to see this technique used with Word documents, PDF files, flash movies and spreadsheets, in particular.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=139)** The one thing these techniques have in common is that the user is unaware that code is executing.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=145)** The next approach is when the delivery was that of a phishing email containing a hyperlink to a malicious site.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=152)** The malicious site will be looking to take advantage of a vulnerability in the browser, which it can exploit to run what is known as a dropper.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=160)** The purpose of this is to drop the payload onto the target computer.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=166)** The unauthorized use of credentials is a technique used when a password file has been extracted and cracked, revealing a large number of account user ID password credentials.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=177)** It may also be the result of having intercepted traffic and found credentials in the clear, for instance, in a telnet session.
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=184)** The fourth exploitation technique is used when there's vulnerability in a service exposed to the attacker.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=190)** In this case, the attacker can exploit the vulnerability with an initial malware module, which opens the door into the system.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=198)** This is often a technically challenging approach but potentially a lucrative one because it may leave no evidence of attack, not even a login record.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=207)** Let's have a look at some examples of attacks and analyze their delivery and exploitation techniques.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=213)** The first attack we'll look at is the high profile ransomware, WannaCry, or WannaCrypt, as it's sometimes known.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=221)** The WannaCry campaign delivery mechanism was emails containing an infected zip file which when opened, drops the malware into the computer and executes it.
>
> **[3:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=232)** WannaCry is a highly virulent piece of malware, not only having a vicious payload but also being able to automatically reach out and exploit other systems in the local network, or even across the internet.
>
> **[4:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=244)** So as soon as a few WannaCry targets were hit, they became attack launching pads for propagation to the next layers of targets.
>
> **[4:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=253)** One of the reasons WannaCry was able to do this was through its use of a piece of malware developed by the US National Security Agency called EternalBlue, which used an exploitation technique not known in the public domain, a zero day.
>
> **[4:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=269)** This was a flaw in the session management block or SMB software used on Windows systems to manage file sharing and printing.
>
> **[4:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=277)** Analysis has concluded that the initial infection was through an exposed SMB port.
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=283)** By allowing its technique to become exposed, the NSA allowed the world's cyber criminals to develop a military-grade attack.
>
> **[4:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=290)** This malware demonstrated delivery through an exposed service and exploitation through the EternalBlue SMB vulnerability.
>
> **[4:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=299)** The next example we'll look at is the Stuxnet attack on the Iranian uranium enrichment facility.
>
> **[5:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=307)** This was notable in that the target was on an isolated network, not connected to the internet.
>
> **[5:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=313)** Stuxnet was a very sophisticated attack, reportedly developed and launched by Israel and the United States and it was executed in two phases.
>
> **[5:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=323)** The first phase was a network scan to determine exactly what software was running on the isolated network and to map out the topology of the network itself.
>
> **[5:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=332)** This then enabled a second attack to be launched, which targeted the centrifuges use to enrich the uranium.
>
> **[5:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=340)** The original reporting indicated that the attack was able to get onto the isolated network by use of a USB drive and that the USB drive may have been taken in by an agent working in the facility.
>
> **[5:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=352)** Later analysis indicated the attack was a remote breach of a supplier computer and insertion of the malware onto the supply computer from where it jumped onto a USB stick.
>
> **[6:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=365)** Stuxnet propagated itself around the network using a Microsoft print spooler flaw and three other zero day vulnerabilities to ensure the maximum opportunity to spread.
>
> **[6:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=376)** Once it found the Siemens equipment which controlled the centrifuges, it injected malicious code into its memory.
>
> **[6:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=383)** This attack demonstrates multiple delivery and exploitation vectors, including a Microsoft printer spooler, zero day.
>
> **[6:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=391)** Another high profile case was that of Saudi Aramco, which was the largest attack seen this decade with over 30,000 workstations being taken down.
>
> **[6:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=401)** The delivery mechanism was traced back to a single employee clicking on a malicious website.
>
> **[6:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=407)** The website was able to exploit the browser and drop a backdoor payload onto his computer.
>
> **[6:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=412)** This then allowed the attackers to gain a foothold on the Saudi Aramco now at work and begin their attack.
>
> **[6:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=419)** The first sign of trouble was when files began to disappear and systems crashed.
>
> **[7:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=424)** The Saudi Aramco network was disconnected from the internet and then when the virus continued to spread, the workstations were disconnected from the local networks.
>
> **[7:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=434)** Subsequent analysis found that the attack was due to the Shamoon virus.
>
> **[7:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=439)** The delivery mechanism was a malicious website and the exploit was a browser vulnerability.
>
> **[7:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=446)** The final example we'll look at is the Sony PlayStation hack.
>
> **[7:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=450)** This was an external penetration into the PlayStation Network servers, which resulted in the global Sony PlayStation Network being taken down.
>
> **[7:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=459)** The result of this intrusion was the exposure of 77 million credit cards, one of the biggest recorded data breaches.
>
> **[7:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=466)** This was again due to a flaw in the SMB software, this time on Red Hat Linux Apache servers and that was able to be exploited.
>
> **[7:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/exploit-a-target?u=76281980&t=476)** The delivery mechanism was an exposed vulnerable service, which exploited an SMB flaw.

> [!info]- Semantic Content
>
> **Env Vars:** smb (5), usb (4), pdf (1), nsa (1)
> **Code Keywords:** let (2), finally, (1), continue (1), case, (1), module (1)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (1), apache (1)
> **Analogies:** such as (1), for instance (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### Understand code injection
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=0)** - [Instructor] The aim of many cyber attacks is to run malware on a target system.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=5)** One way of doing this is to provide the malware in the form of a Trojan program.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=10)** This is a piece of software which looks legitimate, but it has malicious code embedded in it, which executes when the software is run.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=17)** The simplest form of Trojan is a legitimate software product, which has been modified by inserting a piece of malicious code.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=25)** This is possible, because an executable program has a well-defined structure of multiple segments, and an attacker can modify these to suit their own purposes.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=35)** Let's look at a Windows executable file.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=38)** This is in what's known as a portable executable or PE format.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=43)** The PE file has a collection of fields at a known location that define what the rest of the file looks like.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=50)** An important part of the structure is the PE header, which contains information such as the locations and sizes of the code and data areas, what operating system the file is intended for and the initial stack size.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=64)** It also contains a table of all the sections which make up the remainder of the executable file.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=70)** These are the code sections or data sections.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=74)** The PE header isn't at the very beginning of the file.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=77)** The first few hundred bytes of a PE file are the MS-DOS stub, a small piece of code that validates that the program can run, printing out an error message if it can't.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=89)** The PE header is found by looking up at starting offset which is stored in the MS-DOS stub header.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=96)** Let's have a quick look at the hexdump of an executable.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=99)** I'm using the HxD hex editor for this.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=102)** But you can use any hexadecimal editor to view the raw executable file.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=107)** The file starts with the two signature characters MZ, and we can see the message, "This program must be run under Win32," which is displayed if the program is run in another environment.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=119)** We can also see the two characters PE at hexadecimal 0, 100, which if we look along to the left of the same line, we can see are the hexadecimal digits 50, 45 followed by two zero bytes.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=135)** The next two bytes are 40, 01.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=138)** And then we have two bytes which represent a double word value for the number of sections.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=143)** We can see the bytes are 0B, 00, which in binary is 0, 0, 0, B, meaning there's 11 sections.
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=156)** Fortunately, we don't have to do all the work ourselves.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=159)** The team at Winitor has developed a free portable executable viewing tool called PeStudio.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=164)** And this does all the hard work of analyzing the PE file.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=168)** Okay, I've got the pactera executable open in PeStudio.
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=173)** I'll select dos-header to display the header of the MS-DOS stub.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=179)** An important value in the header is the file header offset which is set to hexadecimal 100.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=185)** This is the value which points to the location of the PE header.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=190)** Following this, if we click the file-header, we see the PE header starting at the signature field, which as expected, has a value of PE00.
>
> **[3:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=203)** Following this, we can see that the file has an optional-header, which when we click it, shows the configuration settings for the executable.
>
> **[3:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=215)** There's a couple of items we want to remember from here.
>
> **[3:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=217)** The section alignment, which has shown as hexadecimal 1000, and further down the image base, which is shown as hexadecimal 400,000.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=227)** If we click on directories, we see the 15 possible sections of which this file has seven.
>
> **[3:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=234)** We can click on sections to see the seven sections plus two additional text sections.
>
> **[4:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=240)** We can see the raw address.
>
> **[4:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=241)** this is the file offset, and the virtual address, this is where the section will be loaded in memory.
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=248)** We can see the runtime function imports and the functions exported.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=255)** Another interesting part of the executable is its manifest.
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=261)** If we click on this, we see an XML configuration file displayed.
>
> **[4:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=267)** Okay.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=268)** So we can see the overall structure of the PE file.
>
> **[4:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=271)** Let's now think about how we add code into it.
>
> **[4:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=275)** There are two ways we can inject malicious code into a PE executable: by adding a complete new section and inserting the code into that, or by injecting the code into a code cave, an area in the executable, which is not used.
>
> **[4:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=292)** We can use a tool called Cminer to show what code caves are available in an executable.
>
> **[4:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=298)** We can download and run this in Kali.
>
> **[5:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=301)** We can download Cminer from the GitHub site using wget.
>
> **[5:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=306)** I've set up a directory in user share for this as /user/share/cminer.
>
> **[5:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=316)** We've got the executable now, and we can set it for execution using chmod.
>
> **[5:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=325)** I've already imported an executable called winjan into Kali.
>
> **[5:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=329)** So let's use Cminer to look for all code caves of a hundred or more bytes.
>
> **[5:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=337)** We've got three of them with cave 3 being the largest at 3456 bytes.
>
> **[5:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=344)** Let's have a look at some standard Windows system executables which we might want to inject code into.
>
> **[5:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=349)** The first we'll look at is notepad.
>
> **[5:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=351)** I won't specify a minimum size, so we'll look for all caves.
>
> **[5:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=359)** And we see that we have six caves ranging from 463 to 729 bytes.
>
> **[6:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=366)** These are all in data sections.
>
> **[6:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=368)** The .text section doesn't have a cave.
>
> **[6:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=372)** Another executable we'll look at is PuTTY, the client commonly used for connecting to remote SSH services.
>
> **[6:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=381)** Again, we have six caves, much bigger than we saw in notepad.
>
> **[6:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=386)** However, again, these caves are all in data sections.
>
> **[6:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=389)** We'll come back to this issue shortly.
>
> **[6:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=392)** There's another issue to think about.
>
> **[6:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=394)** System defenses will often use a form of sandboxing to check whether the malware is detected when an executable starts.
>
> **[6:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=402)** If we execute injected code as soon as the program initializes, it's likely to be detected by anti-malware code.
>
> **[6:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=409)** Consequently, Trojans will often trigger their injected code not at program startup, but at some identifiable users interaction.
>
> **[6:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=419)** Anyway, for the moment, we'll have to pick one.
>
> **[7:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=421)** Let's pick cave 5 which has a start address of 47a478.
>
> **[7:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=429)** I'll use PuTTY to demonstrate how code injection works.
>
> **[7:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=432)** I've got it loaded on my VirtualBox Windows 10 system.
>
> **[7:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=436)** First of all, I'll connect to my Metasploitable server on 10.0.2.8 with PuTTY.
>
> **[7:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=444)** We get a prompt which says, "login as."
>
> **[7:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=447)** We'll use this as the point to use in our strategy for a delayed jump to the injected code.
>
> **[7:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=453)** Okay, we don't need to log in, so let's close this.
>
> **[7:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=457)** We now need to use a debugger to step through the executable code.
>
> **[7:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=461)** My preference is the X32-debug tool which I've got loaded.
>
> **[7:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=466)** We'll use it to inject code into the cave in the PuTTY executable and then run the modified code so that we can see the injection working.
>
> **[7:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=475)** I'll load the executable.
>
> **[7:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=478)** And I'll select the Memory Map tab.
>
> **[8:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=481)** I'll select the text segment and Follow in Disassembler.
>
> **[8:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=485)** This shows me the code section.
>
> **[8:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=488)** I need to find the point in the code of which the login as prompt is displayed.
>
> **[8:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=494)** I can do this by right-clicking, Search for, Current Module, String References, and enter login as.
>
> **[8:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=505)** Okay, we can see two references.
>
> **[8:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=508)** I'll try the reference at 41CB6C.
>
> **[8:33](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=513)** Let's go there.
>
> **[8:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=515)** Let's take a note of the current instruction, push 467C7C.
>
> **[8:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=521)** And then we'll change this to a jmp.
>
> **[8:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=523)** I can double-click the current instruction and enter new instruction, jmp, 0 times 47A495.
>
> **[8:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=534)** That's a point just inside the cave.
>
> **[8:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=538)** I'll also take a note of the address of the next instruction, 41CB73.
>
> **[9:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=545)** We'll come back to this after executing the injected code.
>
> **[9:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=550)** The cave is in the idata section, so we'll need to load that into the disassembly area, using the memory map.
>
> **[9:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=562)** Okay, we can scroll down to our cave and see the section of null bytes which we'll use to inject the code.
>
> **[9:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=570)** For the purposes of the demonstration, I'll just add a couple of NOP instructions.
>
> **[9:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=575)** That's a single byte 90 hexadecimal.
>
> **[9:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=578)** And then I'll return back to where we jumped from.
>
> **[9:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=581)** To do this, I'll double-click on the disassembled instruction at the address we jumped to, 47A495.
>
> **[9:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=590)** And I'll enter two NOP instructions for the injected code and then insert the instruction we overwrote and jump back.
>
> **[10:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=607)** I'll set a break point on the first NOP so that we can see the execution when it arrives here.
>
> **[10:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=613)** Let's press the play icon and set it going.
>
> **[10:17](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=617)** We have to again select play.
>
> **[10:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=621)** And when we check the task bar, we can see we have the PuTTY interface.
>
> **[10:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=626)** I'll enter the address for Metasploitable, 10.0.2.8 and connect.
>
> **[10:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=635)** And we see we've jumped into the injected code.
>
> **[10:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=639)** We can continue by pressing the play button again.
>
> **[10:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=642)** And we're now at the login prompt.
>
> **[10:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=645)** So we've proved the injected code.
>
> **[10:47](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=647)** X32-debug does provide an option to save the changes into a patch file and also to rewrite a patch version of the file.
>
> **[10:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=655)** But this may encounter problems saving into data sections.
>
> **[10:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=659)** If it does, you can take a note of the binary changes and apply them using a hex editor.
>
> **[11:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=665)** I've taken a note of the changes we made.
>
> **[11:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=668)** And I'll manually insert them into PuTTY using hex editor.
>
> **[11:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=672)** I can search for the hex string 68 7C 7C 46.
>
> **[11:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=678)** And we know it was the second one that we want to change.
>
> **[11:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=682)** Okay, I have that at 1BD6E.
>
> **[11:26](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=686)** Let's override that with the string E9 22 D9 05.
>
> **[11:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=698)** I also need to go and add the injection by matching the last few bytes of the idata section prior to our injection.
>
> **[11:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=705)** Now I've identified the injection should be at location 79695.
>
> **[11:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=712)** Let's add the injection.
>
> **[12:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=726)** I've edited the executable, and I can save this into a new file called mutty.
>
> **[12:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=739)** In addition to applying the changes when creating an executable for testing purposes, we need to make sure the section we've modified with injected code is set as executable, and we need to recreate the checksum.
>
> **[12:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=751)** We can do this by using the PE editor in the LordPE tool.
>
> **[12:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=756)** I've got this tool loaded on my system, so let's get into it.
>
> **[12:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=761)** To run the PE editor, we first start LordPE and then select PE editor and select the mutty executable.
>
> **[12:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=771)** And the PE contents appear.
>
> **[12:54](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=774)** Let's first look at the sections.
>
> **[12:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=778)** Okay, we'll have the four sections, and I'll highlight the idata section that we changed.
>
> **[13:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=784)** When I press right-click, we see a context menu.
>
> **[13:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=789)** I can select edit section header, and the section header pops up.
>
> **[13:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=794)** Now I can press the dotted button by the flags and click Executable as code and then OK.
>
> **[13:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=807)** Okay, I can leave the sections now.
>
> **[13:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=810)** At the main PE screen, I'll press the question mark by the checksum.
>
> **[13:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=814)** And the PE editor will create the new checksum.
>
> **[13:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=818)** That's it.
>
> **[13:38](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=818)** We can now save the changed executable.
>
> **[13:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=822)** When we execute the program, it will run with no warnings and execute the injected code we've inserted as soon as we get to the point of logging into a site.
>
> **[13:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=831)** Using modified executable, mimics the activities of an attacker, so it's a legitimate course of action for a deep penetration tester.
>
> **[14:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-code-injection?u=76281980&t=840)** And with the right injection code, it can be a lucrative means of harvesting credentials and demonstrating vulnerabilities.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this, (4), this. (2), function (1), for, (1)
> **Env Vars:** dos (3), nop (3), x32 (2), pe00 (1), xml (1)
> **UI Navigation:** click on (3), select the (3), double-click (2), scroll down (1), right-click (1)
> **CLI Commands:** make (2), wget (1), chmod (1), ssh (1), find (1)
> **Definitions:** is a  (2), known as (1)
> **Versions:** 10.0.2 (2)
> **Tools:** github (1)
> **Analogies:** such as (1)

#### Understand buffer overflows
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=0)** - There are a number of ways to achieve remote code execution on a server.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=4)** And one of the ways is to trigger what's known as a buffer overflow.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=8)** We can do this by sending a malicious exploit packet to an open service that has a buffer overflow vulnerability.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=15)** This then results in the target executing code from our packet.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=19)** We can see how this works by running a vulnerable program through a debugger.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=23)** Let's do this with MASM so that we can see the instructor clearly.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=28)** I've written a small MASM program, which uses the Windows GUI, called Buffalo.ASM.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=34)** This simulates just a fragment of an application.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=37)** Take a look at the lines just below the .data declaration.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=41)** There's a data field called "packet".
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=44)** This is simulating a packet that we've received from an input request for the user's name.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=49)** I've put my name there.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=51)** Let's just ignore the commented out fields for the moment.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=55)** Further down, we can see the "hello" message, which expects to have a name inserted.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=60)** Let's look at the lines just below the .code declaration.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=64)** We can see what the program is doing in the first few lines.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=68)** It pushes the address of the hello message onto the stack.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=71)** Then pushes the address of the name packet onto the stack, and then calls the routine, SCO, to do a string copy.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=79)** Following that, it displays a message box.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=83)** Let's see what happens when we run it.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=85)** I'll select "project" "assemble and link".
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=90)** This assembles and links.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=92)** We can see the OBJ and .exe files here.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=96)** And we can then run it.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=101)** There we go.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=101)** A Windows message box with our welcome message.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=106)** Now, let's change the code to comment out my name and uncomment the packet, exploits and payload fields.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=115)** This now simulates a malicious packet with its three components being sent in as input.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=122)** Let's save this.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=126)** Assemble and link it.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=130)** And run it.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=134)** Now we get a malicious message.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=136)** We've been buffer overflowed.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=139)** To see what has happened, we need to run the program through a debugger.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=143)** Before we do that, let's take a look at what the SCO routine is doing.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=147)** Let's start at the line below the label "SCO Prop".
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=151)** After entering the routine, we save the stack pointer into the EBP register.
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=156)** Then load the first parameter, the address of the data packet, from the stack, into EBX for later use.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=164)** The routine then reserves 32 bytes of local storage for the name using the "Sub SP" command, and then copies the stack pointer into the two registers EDX and ECX.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=177)** One we'll use immediately, and one later.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=181)** The routine then enters a loop, which reads a character from the packet and stores it into local storage.
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=187)** It does this by moving a byte from the input pointed to by EBX, into the lower byte of EAX.
>
> **[3:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=194)** And then saving that byte into the 32 byte area reserved stack where EDX is pointing.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=201)** The address pointers are then both incremented.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=204)** This continues until the last character read from the input packet is zero.
>
> **[3:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=208)** That's the string delimiter.
>
> **[3:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=210)** The routine then goes to the next loop, where it inserts the string into the end of the welcome message, starting where it says "name here".
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=220)** The EDI register points to the location where the name is to be inserted.
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=224)** And now ECX is used to read the name from the 32 bytes stack area, byte by byte, and copy it to the welcome message.
>
> **[3:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=232)** Again, terminating at the zero bytes.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=235)** Finally, the routine releases the first two bytes of local storage and returns with a rotate, to release the two double words, eight bytes, addresses that were placed on the stack prior to entry.
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=247)** Okay, let's say this run step-by-step in the debugger.
>
> **[4:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=250)** The first thing we'll do is look at the memory map.
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=254)** We can see that the executable part of Buffalo, the .tech section, starts at 4 0 1 0 0 0.
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=261)** I'll double click that, and we'll see the code displayed.
>
> **[4:27](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=267)** We can see at the right, the "hello name here" message.
>
> **[4:30](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=270)** And the malicious packet filled with the ASCII character "A".
>
> **[4:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=274)** I'll set a break point at the first line and I'll press the play button to run through to our code.
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=283)** Okay, we've run the PE program initialization, and we're now at the start of our code.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=289)** Before we start running the code, I'll go back to the memory map.
>
> **[4:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=293)** I'll double click the .data section.
>
> **[4:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=297)** We can now see our data field shown in "dump one", at the bottom left of the screen.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=303)** Let's use F7 to step through and push the two addresses onto the stack and call the SCO sub-routine.
>
> **[5:10](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=310)** As we step through the first few instructions of the sub-routine, we can see the stack point of being stored into EBP and the address of the data packet being stored into EBX.
>
> **[5:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=322)** Next, 20 hexadecimal is subtracted from the stack pointer to reserve 32 bytes for the name to be copied in.
>
> **[5:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=329)** Then, the address of this 32 byte area is stored into the EDX and ECX registers.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=336)** Now we're at the address 4 0 1 0 3 6.
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=339)** And this is the start of the loop.
>
> **[5:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=341)** We can see the jump back to 4 0 1 0 3 6 a few lines down.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=346)** We'll go through the loop, copying the name into the stack.
>
> **[5:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=350)** Note at the bottom right panel that the stack pointer ESP is currently pointing to 1 9 F F 5 8.
>
> **[5:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=357)** And the return address to get back to the calling code, is 20 hexadecimal further on, at 1 9 F F 7 8.
>
> **[6:05](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=365)** Watch the contents of the stack at the bottom right as we step through the loop, copying the name, in this case, the malicious packet data, onto the stack.
>
> **[6:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=374)** We see the zero hexadecimal 30 and then A's hexadecimal 41 being copied into the stack.
>
> **[6:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=382)** This continues for all 32 bytes from the packet.
>
> **[6:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=388)** The EDX register is now pointing to address 1 9 F F 7 8, where the return address, 4 0 1 0 0 F, is stored on the stack.
>
> **[6:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=399)** However, as we keep stepping through, the routine overwrites the return address with more data from the packet, the four bytes we labeled exploit.
>
> **[6:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=408)** Which is the address of the start of the payload code stored in the packet.
>
> **[6:53](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=413)** The return address is now 4 0 3 0 2 4.
>
> **[6:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=416)** And we finished copying the packet onto the stack.
>
> **[6:59](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=419)** Okay, let's step through the next section of code where we write this from the local area, into the message.
>
> **[7:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=428)** That all copies over and down in the dump area at the bottom left, we now have a message which says, "Hello, zero A A A" and so on.
>
> **[7:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=436)** Let's watch carefully as the routine finishes and returns.
>
> **[7:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=440)** The routine releases the local reserved space by adding hexadecimal 20 to the stack pointer.
>
> **[7:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=445)** The stack pointer is now pointing at where the original return address was, which has been overwritten with the address that was in the exploit field.
>
> **[7:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=454)** When we F7 to return, the instruction pointer now points to the code in the packet payload, at 4 0 3 0 2 4.
>
> **[7:44](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=464)** The buffer overflow has been activated and we're now running payload code.
>
> **[7:48](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=468)** Let's step through the payload.
>
> **[7:50](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=470)** We push zero, the addresses of two fields in our packet.
>
> **[7:57](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=477)** And then zero again, the standard preparation for a message box request.
>
> **[8:01](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=481)** And then push onto the stack, the address of the message box call in our program.
>
> **[8:07](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=487)** When we return, we display the message box, which now displays the malicious message.
>
> **[8:13](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=493)** We've crafted a malicious packet, which takes advantage of the fact that the Buffalo program doesn't check how many characters are copied in, despite having only reserved 32 bytes.
>
> **[8:24](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=504)** Unfortunately, this isn't that uncommon in software.
>
> **[8:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=508)** The packet we've simulated is a three-stage packet of padding, malicious address and payload.
>
> **[8:34](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/understand-buffer-overflows?u=76281980&t=514)** We've achieved a buffer overflow and executed code from our packet.

> [!info]- Semantic Content
>
> **Env Vars:** sco (4), edx (4), ebx (3), ecx (3), masm (2)
> **Code Keywords:** let (13), return, (2), this. (1), finally, (1), case, (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** initialization (1), before we start (1)
> **Cross-References:** go back to (1)
> **Speakers:** - there (1)

#### Find exploit code
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=0)** - [Presenter] In the early days of cyber testing, testers had to first discover a vulnerability through vulnerability research and then write an exploit for it.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=9)** This typically required a high level of debugger and museum skills and took weeks of effort.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=14)** Nowadays, there are many researchers looking for and publishing the details of vulnerabilities and providing detailed analysis of malware that's been found.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=23)** These appear on many researchers github sites and also on vulnerability advisory science.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=29)** The malware archeology site provides links to reports from a number of malware research centers.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=35)** There are a number of cyber research companies that provide technical research reports.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=41)** Some provide them for public access while others provide them as a paid threat intelligence service.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=46)** For example, Malwarebytes Labs shown here is a source of free technical reports.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=52)** Even with a technical report, it takes a while to develop a working exploits.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=56)** A source of ready-made exploits for testing is the offensive security exploit database.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=63)** Here we have the full set of exploits on [exploitdb.com](https://exploitdb.com).
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=66)** Let's select the filters button and search for the type remote.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=76)** And we get a list of remote exploits that are in the database.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=80)** The screen shows the date, title, platform and author of the exploit module.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=85)** And there's three flags, D, A and V.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=89)** D provides download of the exploit code, A provides download of the vulnerable application and V indicates that the code has been verified.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=99)** At the bottom of the first page of remote exploits, we can see their emotions, desktop web access attack.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=105)** If we click on this, we can see that it's a Python exploit that's used with the Metasploit testing tool.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=115)** Legal Hackers is another website which provides details of vulnerabilities.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=120)** Although there has been few updates recently, the site does include proof of concept exploit code however.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=126)** For example, if we select the get LFS 2020 vulnerability and we scroll down, we can see the proof of concept command sequence.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=138)** Just a note of caution when downloading exploit code from individuals, firstly, there could be malicious code included in the exploit so just double check the source is legitimate.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=148)** Some of these exploits work as written.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/find-exploit-code?u=76281980&t=151)** But some authors will include deliberate mistakes in their exploits as a somewhat annoying way of making sure you can correct them mistakes before you get to use the code and some just make mistakes.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), let (1), module (1), this, (1)
> **UI Navigation:** select the (2), click on (1), scroll down (1)
> **CLI Commands:** python (1), make (1)
> **Analogies:** for example (2)
> **URLs:** [exploitdb.com](https://exploitdb.com) (1)
> **Env Vars:** lfs (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=0)** - [Malcom] I'd really like to thank you for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=3)** I hope you enjoyed your introduction to the tools and techniques you'll use as a pen tester.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=8)** Taking this course is just the start of your learning path, which leads to becoming a professional pen tester.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=14)** Having understood the concepts and learnt about how to use some of the basic testing tools, you can now start to gain experience by using them.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=22)** You can also follow the learning path with more advanced courses in the pen testing series to develop your skills with a deeper understanding of the techniques.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=31)** There's always something new in cybersecurity, and if you're interested in learning more, then check out the full security segment of the library, where new security courses are added regularly.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=42)** You'll find courses on using Kali Linux, information gathering, viruses and worms, social engineering, denial of service, wireless testing, and much more.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=51)** I'd like to invite you to go to my LinkedIn Learning author page, where you can find some additional courses on cybersecurity.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=58)** If you want to get hands-on with some of the common tools, then do take a look at Practical Cybersecurity and the Introduction to Kali Linux.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=66)** If you want to know how to test mobile devices, then check out the Mobile Devices course.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=72)** And if you'd like to learn about security for the AWS Cloud, then Pen Testing AWS with Python is for you.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-2021/next-steps?u=76281980&t=79)** Thanks again for joining me on this course and I hope to see you again soon for more courses on pen testing and cybersecurity.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), aws (2), python (1)
> **Env Vars:** aws (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcom] (1)


## Resources

- Exercise files available

## Skills Covered

- Penetration Testing

## Path Context

### In [[Penetration Testing Professional Certificate by Cybrary]]
**1 of 2** | [[Offensive Penetration Testing]] →

## Part of

- [[Penetration Testing Professional Certificate by Cybrary]]

## Appears In

- [[Penetration Testing Professional Certificate by Cybrary]]

## Related Courses

_Courses sharing skills:_

- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing
- [[Advanced Pen Testing Techniques for Active Directory]] — Penetration Testing
- [[Penetration Testing Web Apps with Kali and Burp Suite]] — Penetration Testing
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Penetration Testing

---

[↑ Back to top](#)