---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: penetration-testing-essential-training-24352676
url: "https://www.linkedin.com/learning/penetration-testing-essential-training-24352676"
duration_minutes: 175
duration: 2h 55m
level: Intermediate
updated: 7/18/2024
learners: 10949
skills:
  - Penetration Testing
  - Kali Linux
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHOd90QzPFHDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719429105265?e=2147483647&amp;v=beta&amp;t=CEKCl25X6pQyYKTlQiYXsstNjrrLyyjXSIbknSmWdg4"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Application Security]]'
  - '[[Become a Penetration Tester]]'
prev_courses:
  - '[[Cybersecurity Foundations Application Security]]'
  - '[[Introduction to Pen Testing for Cybersecurity Professionals]]'
next_courses:
  - '[[Learning the OWASP Top 10]]'
  - '[[Kali Linux for Advanced Pen Testing and Ethical Hacking]]'
path_nav: '[{"path":"Explore a Career in Application Security","position":2,"total":7,"prev":"Cybersecurity Foundations Application Security","next":"Learning the OWASP Top 10"},{"path":"Become a Penetration Tester","position":3,"total":8,"prev":"Introduction to Pen Testing for Cybersecurity Professionals","next":"Kali Linux for Advanced Pen Testing and Ethical Hacking"}]'
path_count: 2
tags:
  - course
  - topic/security
  - skill/penetration-testing
  - skill/kali-linux
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Penetration%20Testing%20Essential%20Training.md)

![Penetration Testing Essential Training](https://media.licdn.com/dms/image/v2/D560DAQHOd90QzPFHDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719429105265?e=2147483647&amp;v=beta&amp;t=CEKCl25X6pQyYKTlQiYXsstNjrrLyyjXSIbknSmWdg4)

# Penetration Testing Essential Training

> Penetration testing is one of the best ways to see if your security will hold. It puts testers in the role of attackers, looking for vulnerabilities in your networks, computers, applications, email, and users. This course provides an introduction to the key knowledge and skills to start a program of professional penetration testing at your organization. Cybersecurity expert Malcolm Shore reviews a

> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676) | 2h 55m | Intermediate | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Establishing a solid foundation to progress into a career of penetration testing
  - What you should know
  - Disclaimer
- [**1. What Is Pen Testing?**](#1-what-is-pen-testing) (3 videos)
  - Pen testing overview
  - The cyber kill chain
  - The MITRE ATT&CK repository
- [**2. Pen Testing Tools**](#2-pen-testing-tools) (8 videos)
  - Scanning networks with Nmap
  - A netcat refresher
  - Capturing packets with tcpdump
  - Work with netstat, nbtstat, and arp
  - Scripting with PowerShell
  - Extending PowerShell with Nishang
  - What is Active Directory?
  - Analyze Active Directory with BloodHound
- [**3. Bash Scripting**](#3-bash-scripting) (3 videos)
  - Refreshing your Bash skills
  - Controlling the flow in a script
  - Using functions in bash
- [**4. Python Scripting**](#4-python-scripting) (7 videos)
  - Refresh your Python skills
  - Use the system functions
  - Use networking functions
  - Work with websites
  - Access SQLite databases
  - Using Scapy to work with packets
  - Leveraging OpenAI for testing
- [**5. Kali and Metasploit**](#5-kali-and-metasploit) (5 videos)
  - A Kali refresher
  - Fuzzing with Spike
  - Information gathering with Legion
  - Using Metasploit
  - Scan targets with GVM
- [**6. Web Testing**](#6-web-testing) (5 videos)
  - Approach web testing
  - Test websites with Burp Suite
  - Check web servers with Nikto
  - Fingerprint web servers
  - Web server penetration using sqlmap
- [**7. Understand Exploit Code**](#7-understand-exploit-code) (7 videos)
  - Exploit a target
  - Finding caves for code injection
  - Understand code injection
  - Understand command injection
  - Understand buffer overflows
  - Password spraying Active Directory
  - Find exploit code
- [**Conclusion**](#conclusion) (1 videos)
  - What's next

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Establishing a solid foundation to progress into a career of penetration testing
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=0)** - [Malcolm] The internet has developed rapidly over the last 20 years or so, from a novel way of sharing information to become a data utility, as important as the power and water utilities that we depend upon.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=13)** Cyberspace, as we now know it, supports much of our social, business, and government activities.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=19)** But with that has come a whole ecosystem of cyber threats, from script kiddies to organized crime and nation state actors.
>
> **[0:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=27)** It's critical that we know how to test our cyberspace presence to ensure we're safe from harm.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=33)** In this course, I'll be introducing you to the world of pen testing.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=38)** I'm Malcolm Shore, and I've spent a career helping governments and businesses protect their systems against cyber attack.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=44)** I'd like to invite you to take this LinkedIn learning course to learn about the essentials of pen testing.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/establishing-a-solid-foundation-to-progress-into-a-career-of-penetration-testing?u=76281980&t=50)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [malcolm] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course, and during this course, I'll be using Windows and Linux-based tools running on a VirtualBox test network to do testing.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980&t=9)** In particular, I'll be using the Kali testing framework and the Metasploitable system as a test target.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980&t=16)** I'll be using both commercial and public domain tools for testing, and I'll be showing you code in Assembler and C.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980&t=24)** You should also know the basics of Bash and Python scripting, and I'll provide a refresher on them.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980&t=30)** Pen testing is a challenging pursuit.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-you-should-know?u=76281980&t=33)** You should be competent in computer and network technologies, and you should have a working knowledge of ethical hacking.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Code Keywords:** public (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### Disclaimer
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=0)** - [Narrator] This course uses a range of third-party testing tools.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=4)** Some are commercial products and some are open source.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=8)** The download and installation instructions for all tools used in this course is available as a PDF in the associated course material.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=16)** While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide assurance that these sites might not have been compromised when you visit them.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=29)** Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware, and may raise antivirus alerts when you visit them.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=40)** The testing tools we demonstrate are extremely powerful.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=44)** They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/disclaimer?u=76281980&t=53)** Again, we can't provide assurance that the software hasn't been compromised when you download it, and so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Code Keywords:** raise (2)
> **Env Vars:** pdf (1)
> **Speakers:** - [narrator] (1)


### 1. What Is Pen Testing?

> [↑ Back to Table of Contents](#table-of-contents)

#### Pen testing overview
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=0)** - [Presenter] Over the last decade, testing computer systems for vulnerabilities has become a necessary part of any deployment.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=8)** Traditionally, the software development lifecycle included testing as the final stage prior to going live and used testing methods based on developing test cases to confirm the software was functionally correct, i.e. it produced the correct result.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=23)** While this was all very well for software through to the 1990s, the advent of the internet and online services provided a rich environment for hackers to find flaws in software.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=35)** Often, these flaws exploited and expected inputs such as maliciously crafted packets and used unexpected techniques such as command injection.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=45)** The typical hacker was a bored teenager with a computer and a modem and plenty of spare time.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=51)** These attacks demonstrated the limitations of testing by thinking like a developer and began the age of testing by thinking like an attacker.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=61)** In other words, don't just run a set of test cases.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=65)** Also use your imagination and try to think of different ways to penetrate your target.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=71)** Pen testing, as this approach to testing is now known, has become a recognized testing approach and a popular career choice.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=79)** The name hacker was originally used to describe someone who was very skilled at modifying computer software in order to make it perform exceptionally well.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=88)** Over the years, the term has been increasingly used to describe someone who has the same level of skills, but uses them for annoying or malicious purposes.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=99)** As the internet grew, hackers started posting their hacking software on bulletin boards and then on shared underground websites.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=107)** These were often scripts which automated the attacks using languages such as Pearl, or more recently, Python, would be hackers with few skills were enabled to download the tools and run them, and this community became known as script kiddies.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=123)** As businesses started using attack techniques in a controlled environment to check their own software, the term white hat was used to distinguish the authorized testers from the black hat or unauthorized hacker.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=138)** As the internet grew, a number of different types of black hat hackers emerged.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=143)** Hacking amongst bored teenagers has continued to flourish, but increasingly as script kiddies.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=149)** Some of the more skilled amongst them have become research hackers who find bugs and develop their own exploits.
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=156)** Often in order to sell them to other black hats on the dark net.
>
> **[2:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=161)** Of more concern, many countries now from state-sponsored hackers sometimes called cyber warriors, who hack for military or espionage purposes.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=171)** Similarly organized crime has seen the financial game possible with hacking, and now cyber criminals form one of the biggest groups of hackers targeting industry.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=182)** State-sponsored hackers and cyber criminals are very skilled and will often deploy zero day exploits, which can punch holes through even the best defended networks.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=191)** They operate stealthily.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=193)** They cause immense damage and financial loss and have created a toxic environment of mistrust and fear on the internet.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=202)** As to the white hats, the increase in black hat activity has seen a massive demand for penetration testing and a demand for a much higher skill level to match that of the black hats.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=213)** Some of the more skilled white hat testers have focused on research to find bugs and to claim bug bounties.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=221)** As with black hat hackers, the white hat community develops some post white hat testing tools on the internet.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=227)** Some of these are commercial tools released onto the internet often with a community addition, with a limited capability and require a license to be purchased in order to unlock their full potential.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=238)** Others are fully functional freeware or shareware tools.
>
> **[4:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=244)** In addition to individual tools, there are a number of testing frameworks available which bring a set of tools together.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=251)** The best known of these is Kali Linux, a full freeware Linux distribution, which includes over 600 tools, which is often the primary framework used by a pen tester.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=262)** The start point for a career in penetration testing is to become an ethical hacker.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=268)** The ethical hacker understands the internet environment and has a knowledge of the tools used to test systems.
>
> **[4:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=273)** An ethical hacker can run the standard tests and provide a first level of confidence that a system is secured against a casual attacker.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=282)** The pen tester has a much higher level of both knowledge and skills and is able to not only use the tools, but also find the more sophisticated weaknesses in systems.
>
> **[4:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=292)** A pen tester will be able to not only detect a security issue, but also demonstrate how it can be exploited.
>
> **[4:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=299)** This may be done by modifying an existing exploit or creating new exploit code.
>
> **[5:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=305)** A pen tester is able to provide confidence that a system can withstand a sustained attack from a skilled attacker.
>
> **[5:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=312)** An elite pen tester is someone who has the highest level of skills and often finds zero day exploits to support his or her pen testing.
>
> **[5:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=322)** Elite pen testers are also the community of hackers who create many of the public domain tools used by the white hat community.
>
> **[5:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=330)** Certified Ethical Hacker is the foundational certification for ethical hacking or pen testing.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=336)** Well, it used to be a paper-based certification.
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=339)** It now involves fully fledged hands-on training.
>
> **[5:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=342)** It's the basic certification required for someone to start out on a career in system testing.
>
> **[5:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=350)** Offensive security is the organization which provides the Kali framework.
>
> **[5:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=355)** And it offers a range of pen testing certifications, which are recognized globally.
>
> **[6:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=360)** The benchmark certification for a professional pen tester is the PEN 200 Offensive Security Certified Professional, or OSCP.
>
> **[6:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=370)** This is the certification most professional pen testers have, and it demonstrates not only knowledge of pen testing techniques and tools, but also a high level of skill in applying them to an unknown target environment.
>
> **[6:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=385)** While we're focused on pen testing in this course, this is just one of a number of ways in which cyber defenders can address the threats.
>
> **[6:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=394)** An important part of cyber defense is checking for and correcting known vulnerabilities.
>
> **[6:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=399)** This can be done for the perimeter with an online service such as Nessus and internally with network vulnerability assessment tools such as Rapid 7 and Expos.
>
> **[6:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=411)** Pen testers run tools and techniques against targets looking for areas of weakness that the developer hasn't found during testing and that the vulnerability scanner hasn't detected.
>
> **[7:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=421)** These may be oversights that should have been found or zero day vulnerabilities that aren't in the signature database.
>
> **[7:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=429)** The ultimate pen test is called a red team test, where a team of pen testers are given authority to mount an unannounced attack on the whole network with the objective of doing everything that an attacker would to find a way to penetrate the network and get to its internal systems.
>
> **[7:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=446)** Finally, there's a new approach and a new breed of professional called a cyber hunter whose job is to do deep monitoring of the network and server environment, looking for indicators that the network has been compromised.
>
> **[7:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=458)** The cyber hunter will use network intrusion detection systems and big data security analytic solutions to find indicators of compromise.
>
> **[7:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=467)** Cyber hunting is an emerging discipline and there are, at this stage, no specialist tools available.
>
> **[7:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/pen-testing-overview?u=76281980&t=474)** This function and the tools for it will be a significant area of development over the next decade.

> [!info]- Semantic Content
>
> **CLI Commands:** find (6), make (1), python (1)
> **Analogies:** such as (5)
> **Code Keywords:** require (1), public (1), finally, (1), function (1)
> **Definitions:** in other words (1), known as (1), is called (1), is an  (1)
> **Env Vars:** pen (1), oscp (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [presenter] (1)

#### The cyber kill chain
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=0)** - [Instructor] Cyber attack is now recognized as a serious threat to governments, businesses, and to individuals.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=6)** Nowadays, cyber attacks come mostly from organized criminals and state-sponsored agents using well-defined end-to-end business processes and attack techniques.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=18)** Let's look at the various stages that an attack will go through from inception to achieving its ultimate goal.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=24)** In 2009, a team from the Lockheed Martin Cyber Emergency Response Team produced a seminal paper on cyber attack called "Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains."
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=42)** This can be downloaded from their website, shown here.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=45)** The research paper introduced the concept of what is now commonly known as the cyber kill chain.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=52)** The cyber kill chain views an attack in seven stages, reconnaissance, weaponization, delivery, exploitation, installation, command and control, and action.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=66)** An attack doesn't always progress from one step to the next, though often overlap, but each stage represents a milestone in prosecuting the attack.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=75)** Reconnaissance is the term given to finding and finding out about a target.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=81)** Just as a burglar will case a joint before breaking in, so a cyber criminal has to find out about his or her target.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=89)** Individuals typically have one address on the internet, which has been allocated by their internet service provider, whereas a business may have a number of addresses in what is known as their internet domain.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=101)** A cyber attack against the business target will start with a known website address and then scan the internet space around that address for other systems used by the target.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=112)** The business will see this as a response check on every host in its domain.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=117)** This is known as an IP address scan.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=120)** Then when the attacker has a list of active hosts, he or she will scan each host in turn to find out what entry points are exposed.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=128)** This is known as a port scan.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=130)** This is done to identify potential vectors for attack and check the versions of software used in those vectors.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=138)** Attacks nowadays are not done manually.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=140)** An attacker will usually purchase time on a network of compromised computers in order to run automated scans.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=147)** These networks are known as botnets and may consist of hundreds of thousands, if not millions, of compromised computers.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=154)** This allows cyber attack to be run at scale.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=159)** Weaponization means taking a known vulnerability and customizing it to a specific target or group of targets and integrating it to enable it to run from an automated cyber attack platform.
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=173)** The weaponized malware may be designed to exploit a vulnerability in a specific version of an operating system or target a specific online banking website.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=183)** In the age of hacking as a business, cyber criminals will often purchase the weaponized malware from dedicated developers rather than develop their own version.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=193)** The most common way of delivering malware is to attach an infected document, PDF image, or other electronic item in a way that when the document is opened, the malware will self-install.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=205)** This file can then be sent to the victim via email, a process known as phishing.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=211)** Another way might be to find a vulnerable website, infect it with the malware, and send an email invitation to the target to visit the website.
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=220)** If the victim visits the website, then the malware is downloaded and infects their workstation.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=226)** A third way might be to use default user IDs and passwords built into software on the target system, or to use a stolen user ID and password to enter the target system and directly implant the malware.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=239)** It's also possible to find flaws in software that's exposed to the internet and to manually deliver the malware.
>
> **[4:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=246)** In practice, an attack will often require establishing a beachhead on an internet exposed host and then using that to penetrate deeper into the system to get to the real target, which may not be directly connected to the internet.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=260)** Finally, an infected flash drive can be used to deliver malware, and this can be very effective if the target system is not connected to the internet.
>
> **[4:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=269)** This requires that a user of the target system be persuaded or tricked into using the flash drive.
>
> **[4:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=277)** For email attachments and flash drive attacks, the infected item will exploit a vulnerability in the target's software post-delivery when the document is open or the flash drive inserted.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=289)** A compromised website may similarly download HTML code, which takes advantage of a browser vulnerability.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=295)** In the case of remote access, the exploitation phase is simply the unauthorized use of credentials.
>
> **[5:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=302)** There's also another class of exploitation, which is a user in the target organization executing malware without knowing it, a mail attachment, a malicious document, or a compromised website.
>
> **[5:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=315)** This is the simplest and unfortunately, the most successful exploitation vector.
>
> **[5:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=320)** After the exploitation phase, the malware or intruder may simply take action, skipping directly to the last phase of the cyber kill chain.
>
> **[5:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=328)** However, the more usual case is that the payload is installed either into the memory or onto the hard disk of the target system.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=336)** Additionally, some form of mechanism may be introduced to make sure the payload is restarted every time the system is rebooted.
>
> **[5:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=344)** One way of doing this in Windows is to add a registry entry to automatically run the payload when the system starts up.
>
> **[5:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=351)** The payload will often be or include a means of maintaining ongoing access into a command shell.
>
> **[5:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=358)** A system compromise is often automated.
>
> **[6:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=361)** Once a payload has been installed, the first action it takes will be to connect back to a command and control server to register as a compromised host.
>
> **[6:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=370)** The attacker will then want to send back a command for some action to be taken, listing the subdirectory and files, extracting specific named files, modifying or replacing software, and so on.
>
> **[6:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=383)** An important feature of the payload is that it can determine the address of the command and control server, which may change over time.
>
> **[6:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=390)** Exactly what form of action is carried out by a payload when it arrives at its target depends upon the motives of the attacker.
>
> **[6:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=399)** A hacktivist may want to deface a website.
>
> **[6:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=402)** A state-sponsored agent may want to steal sensitive information, and a cyber criminal may want to access a bank account in order to steal money.
>
> **[6:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-cyber-kill-chain?u=76281980&t=412)** The common theme, however, is that whatever the action is, it's unlikely to be in the best interests of the target.

> [!info]- Semantic Content
>
> **Definitions:** known as (6), is a  (1)
> **CLI Commands:** find (4), make (1)
> **Code Keywords:** let (1), self (1), require (1), finally, (1)
> **Env Vars:** pdf (1), html (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### The MITRE ATT&CK repository
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=0)** - [Instructor] It's useful to know the kind of techniques that attackers can use in their malware when preparing our defenses.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=6)** Mitre provides a repository of tactics and techniques that have been found in malware accessible through their attack site.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=14)** Building on the Lockheed Martin cyber kill chain, the Mitre repository looks at the full attack from reconnaissance to impact, and takes a deeper dive into what tactics and techniques are used to infiltrate the malware, and the malware when it executes on its targets.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=33)** Selecting matrices, we can see the list of techniques by the 12 stages of an attack.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=38)** Let's select external remote services.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=44)** And we can see an explanation of the form of initial access.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=51)** Examples of various actors and how they achieve this.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=55)** And scrolling down, we can see the mitigations, ways to detect the technique, and relevant references.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=64)** Selecting tactics, enterprise, we can see for the various tactics in the left hand list, the kind of techniques by attackers.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=74)** If we select collection and then scroll down to T1123, we can see that audio capture from the computer microphone is a technique used to eavesdrop on a target.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=94)** Groups provides a list of known cyber attack groups.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=97)** If we scroll down to platinum, we can see that this group targets governments and related organizations in south and southeast Asia.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/the-mitre-att-ck-repository?u=76281980&t=109)** The Mitre attack site is a useful knowledge base for anyone looking at diagnosing malware and attributing it to an attack group.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **UI Navigation:** scroll down (2)
> **Definitions:** is a  (2)
> **Env Vars:** t1123 (1)
> **Speakers:** - [instructor] (1)


### 2. Pen Testing Tools

> [↑ Back to Table of Contents](#table-of-contents)

#### Scanning networks with Nmap
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=0)** - [Instructor] Let's take a refresher on using Nmap for scanning networks to discover what hosts are present and what services are available on those hosts.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=9)** I'll be using the Nmap tool, which comes preloaded in Kali.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=13)** Nmap can scan using a number of techniques which, together, can help identify hosts and services which are open to the internet, those that are closed and those that are open, but behind a security filter of some sort.
>
> **[0:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=27)** The first thing we'll do is to discover what hosts are running on our network.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=31)** The most straightforward way to do this is using the -sn option across the subnet, nmap -sn 10.0.2.0/24.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=44)** The -sn option touches each host in turn using the ICMP ping protocol to see whether it responds.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=52)** Nmap reports only the hosts that do respond, providing their IP addresses.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=56)** Here we find we have four hosts responding.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=60)** Having identified which hosts are responding, we can probe the TCP and UDP ports to check what services are being presented.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=69)** Let's check the target on 10.0.2.32, our Metasploitable server, and we'll check for TCP ports using the -PS option, nmap -PS 10.2.0.32.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=86)** Nmap is now checking the most common services to see if they're open on the host.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=90)** It does this by starting to open a connection to the service and then closing it down before the connection is complete.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=97)** This is called a TCP SYN ping, and it works by sending an empty TCP packet with the SYN flag set and waiting for the host to respond with a standard SYN-ACK response.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=110)** While a normal connection would be completed by sending back an ACK, Nmap instead cancels the connection before it completes.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=118)** Okay, we can see we have quite a few ports open.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=122)** A useful option to be familiar with is -P0, which will skip the ping check of the host.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=129)** This is particularly useful when we want to scan a live system, which doesn't respond to an ICMP ping.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=135)** We're running a Windows Server on address 10.0.2.38, but Nmap didn't find it.
>
> **[2:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=141)** Let's scan it using -P0, nmap -PS -P0 10.0.2.38.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=159)** Okay, we now find that the host is in fact up and we have some services available.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=164)** Let's now check for UDP ports.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=167)** We can do this using the -sU option, and this will check the most common 1,000 UDP ports.
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=173)** This requires root privileges, so we'll run with sudo, sudo nmap -sU 10.0.2.32,
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=187)** and we'll scan our Metasploitable server.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=191)** This will take a while, so we'll come back when it's finished.
>
> **[3:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=194)** We finished the UDP scan now, and we see a number of these ports open.
>
> **[3:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=200)** Let's use Nmap to drill down into an individual service to get more details about what it's running.
>
> **[3:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=206)** By using the -sV option, Nmap will try to identify the version of software being used for a service.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=214)** I can limit the testing to just one service with the -p option.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=218)** Let's test the second service shown on the TCP scan of Metasploitable, the Secure Shell service on port 22, nmap -p22 -sV 10.0.2.32.
>
> **[4:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=240)** Nmap comes back within a few seconds and tells us that the service on port 22 is running the OpenSSH version 4.7p1 software.
>
> **[4:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=250)** We can combine these and check multiple port ranges for both TCP and UDP, again, running with sudo, sudo nmap -sSUV -p,
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=268)** U for UDP, and we'll check ports 53, 111, and 137, T for TCP:, and we'll check ports 21 to 25, 80, 139, and 8080,
>
> **[4:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=292)** on 10.0.2.32 again.
>
> **[4:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=299)** Okay, let's check next what operating system is running on the target, and we can do this using the -O switch.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=308)** Again privileged, so sudo nmap -O 10.0.2.32.
>
> **[5:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=319)** The scanner's now finished, and Nmap has fingerprinted the computer operating system correctly as a Linux system, as well as listing the TCP ports that it's detected.
>
> **[5:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=330)** Nmap has a comprehensive library of scripts.
>
> **[5:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=334)** If we change directory to /usr/share/nmap/scripts,
>
> **[5:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=345)** and list them, these provide many advanced capabilities.
>
> **[5:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=353)** Let's run one.
>
> **[5:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=354)** We'll use the rexec brute force test to extract credentials via port 512.
>
> **[6:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=361)** We can do this by using the --script argument, nmap 10.0.2.32, and we're only focused on port 512, and we're going to use the script of the rexec service brute force attack.
>
> **[6:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=388)** And here we see a list of valid credentials for the Metasploitable server.
>
> **[6:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=393)** Nmap is an important tool in the pentester's inventory.
>
> **[6:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scanning-networks-with-nmap?u=76281980&t=397)** It's worth spending time to become very familiar with it.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (8), udp (6), syn (3), icmp (2), ack (2)
> **Versions:** 10.0.2 (9), 10.2.0 (1), version 4 (1)
> **Code Keywords:** let (8), while, (1), switch (1)
> **CLI Commands:** sudo (5), find (3)
> **Code Identifiers:** su (2), sv (2), ssuv (1)
> **Ports:** port 22 (2), port 512 (2)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### A netcat refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=0)** - [Instructor] Netcat is often referred to as the Swiss Army knife of networking 'cause it has so many features and so many uses.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=7)** Fundamentally, it operates as either a sender or a receiver of arbitrary data across the network.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=13)** Netcat is installed by default in Kali.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=16)** Let's check the IP address of my Kali system.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=19)** I've got a script set up called MyIP, which does this for me.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=25)** Okay, we're 10.0.2.15.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=28)** Let's use Netcat to set up a chat line across the internet.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=31)** I'll set up a Netcat listener on Kali by specifying the -l option and a port number with a -p option.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=39)** Nc -lp and I'll use port 4545.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=45)** Netcat is now listening for data to come in on port 4545.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=50)** I'm now on my window system, which also has the Netcat version NC 64 installed.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=57)** I can connect to Kali by saying nc64 10.0.2.15 4545.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=66)** This establishes a raw data connection.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=69)** I'll type hello universe and press enter.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=76)** Back in Kali, we can see the same text has appeared.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=79)** If I now enter Hi, how is Mars?
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=86)** it appears immediately in the windows system.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=90)** To terminate the connection I can press Ctrl C.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=95)** The next thing I'll do with Netcat is to copy a file from one system to the other.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=99)** I've got a text file on my Kali system called myfile.txt.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=104)** Let's have a look at that.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=107)** Cat myfile.txt.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=109)** Ah, 'twas on a lofty by her side.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=113)** I now want to set up Netcat to receive this file in Windows.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=117)** Firstly, I'll check my IP address with IP config.
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=127)** We can see the address is 10.0.2.14.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=130)** I'll now set up Netcat to listen and receive our Kali file.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=134)** nc64 -lp and I'll use 4545 again.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=140)** This time, whenever I get text coming in, I'll put it into incoming.txt.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=148)** So now when the data is received, it'll be sent not to standard out but instead into a new file called incoming.txt.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=155)** Okay, let's go do that.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=157)** To transfer the file, I type nc 10.0.2.14 4545, which is the port that we specified the listener on and I'll type into that connection, myfile.txt and with three seconds of no transfer it will terminate.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=180)** This command tells netcat to take the data from myfile.txt instead of standard in.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=185)** Netcat makes the connection, takes the input, and sends it through the network and then terminates.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=191)** Okay, let's have a look at what we've got.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=193)** Type incoming.txt and we can see that we've got the same file that we sent.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=201)** Okay, let's clear the screen.
>
> **[3:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=203)** Netcat can also be used as a client for services on another host.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=207)** For example, we can use netcat to connect to a web server.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=211)** I'll type nc -v [google.com](https://google.com) 80, so we're looking at [thewebsitegoogle.com](https://thewebsitegoogle.com).
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=220)** The - v switch tells Netcat to be verbose and provide me with status messages and 80 is the standard port for accessing a website.
>
> **[3:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=228)** When the connection is made, I can type the HTTP command, GET index.html HTTP/1.1 and I press enter twice
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=242)** and the web server will deliver its webpage code.
>
> **[4:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=245)** Similarly, I can connect to an FTP server.
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=248)** I'll type NC -v 10.0.2.8 21.
>
> **[4:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=256)** This will connect to my meta exploitable FTP service.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=259)** Okay, the FTP server is now waiting for me to log in.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=262)** I'll do that.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=264)** First I'll type user anonymous and then I'll type pass malcolm@[example.com](https://example.com), which is a random string for the password for anonymous.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=279)** The server accepts my anonymous login.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=282)** I'll type help and get a list of the FTP commands available on that server and I can now type quit to leave.
>
> **[4:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-netcat-refresher?u=76281980&t=290)** Netcat is indeed a Swiss knife for networking and it's a tool you should be very familiar with.

> [!info]- Semantic Content
>
> **File Paths:** myfile.txt (4), incoming.txt (3), index.html (1)
> **Code Keywords:** let (6), switch (1), pass (1)
> **Env Vars:** ftp (4), http (2)
> **Versions:** 10.0.2 (5), 1.1 (1)
> **Prerequisites:** set up (5)
> **URLs:** [google.com](https://google.com) (1), [thewebsitegoogle.com](https://thewebsitegoogle.com) (1), [example.com](https://example.com) (1)
> **Ports:** port 4545 (2)
> **CLI Commands:** cat (1)

#### Capturing packets with tcpdump
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=0)** - [Narrator] One of the more useful tools when testing our systems is TCPdump, which we can use to capture TCP packets that are transmitted on the local network.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=10)** We need to make sure when we're trying to capture packets that are traveling between other hosts on the network, that we've got promiscuous mode set.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=19)** This is set in the virtual machine configuration under Network, Advanced.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=24)** And as we can see here, we have it set to allow all.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=29)** TCPdump is a command line tool and is included in the Linux distribution.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=34)** It has some basic command line options.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=37)** We can check tcpdump -D to show the list of interfaces that we can select for capturing traffic.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=47)** We can use any to capture all traffic on all interfaces.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=51)** We can also use the minus C switch to limit the number of packets we capture to just 10.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=57)** We need root privileges to run tcpdump when we're capturing packets, so we'll type pseudo tcpdump -i any -c 10.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=79)** We can use the -n switch to suppress host name resolution and -nn suppresses both host name and port name resolution.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=91)** Let's run with -nn.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=95)** And this time we'll limit our interface capture to ethernet zero.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=104)** Okay, now our packet capture shows the IP address and the port number.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=110)** Some of the other common switches we can use are T, X, V and S.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=119)** Let's run with -s0 -tX.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=126)** Minus T makes the timestamp human readable.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=129)** Minus X displays the packet in hexadecimal and ASCII.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=136)** Minus V is used for verbose mode and minus VV and minus VVV, more so.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=144)** Minus S is used to specify the size of packet data displayed.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=149)** The default display size is 96 characters, but we can use minus S zero to display the full packet.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=163)** Tcpdump also allows expressions to be used as filters.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=167)** There are three forms of expression, type expressions for which we can use host net and port, direction expressions, source and DST for source and destination, and protocol expressions, TCP, UDP, ICMP, and the AH authentication protocol.
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=189)** We can also use IP6 as a protocol expression to see all IP6 traffic.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=195)** Let's have a look at the traffic to and from our window server.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=202)** We'll again use ethernet zero and capture 10 packets, and we'll specify host 10.0.2.38.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=221)** Let's now see only the UDP packets on the network, and we specify that just with the UDP protocol.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=233)** Let's look at traffic to and from a subnet.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=238)** pseudo tcpdump -eth0 - c 10 net
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=254)** 10.0.2.0/24.
>
> **[4:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=262)** Let's look at traffic just to one and then a range of destination ports on our meta exploitable server.
>
> **[4:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=271)** Tcpdump, ethernet zero, 10 packets, and we'll look at DST for the destination port, port 443.
>
> **[4:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=291)** And destination portrange 1-1023.
>
> **[5:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=306)** We can also write out the file that we capture in ASCII format using pipes, or we can capture it as a Pcap using the minus W switch.
>
> **[5:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=317)** Let's capture and record all IP6 traffic on the network.
>
> **[5:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=325)** So we'll capture IP6 and we'll record it in ip6.pcap
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=339)** We can do more advanced expressions using and/or and brackets.
>
> **[5:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=344)** Complex expressions may require quotes.
>
> **[5:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=347)** For example, let's look at traffic to the meta exploitable server on ports 80 or 4 4 3 from our window system, pseudo tcpdump -I eth0 -c 10, and we'll now say, source is 10.0.2.38, our windows system.
>
> **[6:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=373)** And DST port is 80
>
> **[6:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=382)** or 4 4 3, close brackets, quote.
>
> **[6:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=391)** And from our Windows system we'll navigate to http//10.0.2.32,
>
> **[6:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=403)** and we can go to one of our websites.
>
> **[6:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=408)** Okay, we can also check and filter on flags in the header.
>
> **[6:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=412)** We can do this using direct offset expressions such as TCP header offset 13 bit two.
>
> **[7:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=424)** To do that, we'll use the expression 'tcp[13]&2!=0'
>
> **[7:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=442)** and we won't wait for that traffic, but that would capture those.
>
> **[7:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=445)** We can do the same thing using the expressions TCP flags and TCP syn, 'tcp[Tcpflags]
>
> **[7:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=461)** and we're looking for a flag equals tcp-syn.
>
> **[7:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=474)** And here we've got some.
>
> **[7:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=475)** This allows for some useful diagnostics on the network limited only by our imagination.
>
> **[8:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=482)** We can look for an SSH service on any port by checking for the term SSH in the banner text.
>
> **[8:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=490)** To do that, we'll check TCP square bracket, open bracket, TCP 12 shifted two, go on four,
>
> **[8:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=504)** close bracket equals zero times five, three for S, five, three for S for eight for H 2D.
>
> **[8:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=521)** Okay, this will find these requests regardless of the port the service is running on.
>
> **[8:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=527)** from Kali, let's SSH into our meta exploitable server, and then we can see that we've captured the SSH header.
>
> **[9:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=540)** Another check we might want to do is to check for invalid combinations of flags, such as the rest and syn both being set.
>
> **[9:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=549)** To do that, we'd say look for TCP 13
>
> **[9:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=560)** has both four and two set.
>
> **[9:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=564)** This has been just a refresher.
>
> **[9:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=566)** There's a lot more for you to explore in tcpdump.
>
> **[9:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/capturing-packets-with-tcpdump?u=76281980&t=569)** It's a powerful packet capture tool.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (8), ip6 (4), ssh (4), dst (3), udp (3)
> **Code Keywords:** let (9), switch (3), interface (1), require (1)
> **CLI Commands:** ssh (4), make (1), find (1)
> **Versions:** 10.0.2 (4)
> **Analogies:** such as (2), for example (1)
> **Tools:** command line (2)
> **Code Identifiers:** tx (1)
> **Ports:** port 443 (1)

#### Work with netstat, nbtstat, and arp
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=0)** - [Instructor] Netstat and ARP are two useful tools for viewing network connections and these can be used to identify anomalies and help focus testing on key areas of interest.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=9)** Let's look at Netstat first.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=11)** Netstat is a tool to list protocol statistics in current network connections.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=17)** By simply entering netstat, we get the current TCP connections.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=22)** Okay, we can see our TCP connections.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=24)** The first column shows the protocol, TCP.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=28)** The next column shows the local address and port number used.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=31)** The next column shows the foreign address and the final column, the connection state.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=38)** We can get information on the executable, which created the connections using the -b switch.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=47)** Here we can see the executable, the tones, the first of the TCP connections.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=52)** Similarly, we can use the -o switch to see the process owning the port.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=57)** We can use the -a switch to list all services that are active listing both TCP and UDP ports.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=67)** This shows the TCP ports that are established as well as both TCP and UDP ports that are open and listening.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=75)** *.* in the foreign address indicates that a connection hasn't yet been made as we'd expect for UDP.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=82)** Let's see how we get the protocol statistics.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=86)** Here we can see the number of active and passive TCP ports and failed in reset connections.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=92)** We can also see a summary of UDP packets sent and received.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=98)** With the -rn switches we can see the interface tables with MAC addresses and the routing table in numeric IP form.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=107)** ARP is the address resolution protocol utility, which associates numeric IP addresses with Mac addresses to enable ethernet routing.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=117)** This is a table which may be modified by an attacker in order to carry out a man in the middle attack.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=122)** We can display all address entries using the -a switch.
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=127)** And we can add an address using the S switch and then we can review the table.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-netstat-nbtstat-and-arp?u=76281980&t=142)** With netstat and ARP we can get a good view of the network posture without resorting to packet tracers.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (8), udp (4), arp (3), mac (1)
> **Code Keywords:** switch (5), let (2), interface (1)
> **Definitions:** is a  (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Scripting with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=0)** - [Instructor] Windows PowerShell comes built into all current Windows systems and is to Windows what the Bash shell is to Linux, a powerful command line tool for automating systems and network administration.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=12)** It's also a useful tool for the pen tester to be able to use when carrying out testing.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=18)** PowerShell combines the features of a scripting language with command line utilities and cmdlets, as well as the ability to interface to the Windows Management Instrumentation, or WMI system.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=29)** Cmdlets are a new concept with PowerShell.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=33)** They use a standard naming convention that follows a verb-noun pattern, such as get help, get event log, get process, and set service.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=42)** The get verb displays information about the noun and the set verb modifies or sets some or all of that information.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=50)** Get and set are just two examples.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=52)** There are around a hundred verbs that can be used.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=56)** I'm in the PowerShell console, and I can list the available verbs by entering the command Get-verb.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=66)** We can see in this list get and set and many other verbs.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=71)** We can see how many with a handy function call by entering (Get-verb).count, and we see there's 98.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=81)** We look at some more of these verbs as we refresh our skills in PowerShell.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=85)** We can get help on the various forms of these verbs.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=89)** For example, we can enter help push.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=96)** We can see there's a Cmdlet Push-Location and an alias of pushd for that.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=102)** By entering help pushd, we get the full documentation on the Cmdlet.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=111)** We can see this is a stack operation Cmdlet, which pushes the location onto a stack and that there's an associated set of Cmdlets, such as Get-Location, Set-Location, and Pop-Location.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=124)** PowerShell supports the standard Windows shell commands, such as cd, dir, and ipconfig to name a few.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=135)** We can use the standard less than and greater than operators in PowerShell as we would in Windows.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=146)** We can see the host name and the directory by typing the file.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=152)** We can also use the cat command to list the file as we would in Linux.
>
> **[2:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=158)** PowerShell commands can be scripted into a TXT file.
>
> **[2:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=161)** And we use the .ps1 extension to show that the file is a PowerShell script.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=167)** We can run any Windows program or PowerShell script by entering its name.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=171)** So let's create a TXT file using Notepad.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=174)** For a normal executable, we'll prefix it with .\, but for Windows commands, we can omit that.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=182)** Okay, let's just put in a couple of PowerShell commands as an example.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=190)** And we'll save it as test1.ps1.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=202)** Now we can run the script this time using the .\ prefix, and we can see the get process command being executed.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=213)** We don't need to use Notepad to write scripts, PowerShell comes with an intelligent scripting system, ISE, which makes developing and testing complex scripts much easier.
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=224)** I'm in the ISE and can create a script by clicking New on the toolbar.
>
> **[3:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=230)** Okay, we've got a tab to write a script.
>
> **[3:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=232)** As I write it, I get assistance with the command format.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=238)** I can now save that as mytest1,
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=247)** and then Run.
>
> **[4:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=250)** Back in the console, let's see how we can use variables in PowerShell, and we prefix them with the dollar sign.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=260)** We can also set up a list by just declaring it.
>
> **[4:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=267)** And we can check the number of list entries using the count function.
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=272)** We can also use the echo command to print information to the standard output.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=279)** And there's also a PowerShell cmdlet called Write-Host that does the same.
>
> **[4:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=287)** We can also include variables in the string, and the value of the variable is substituted.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=295)** We can use if then commands in PowerShell using a Bash-like syntax.
>
> **[5:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=304)** Note the ability to use multi-line entry for this with execution at the completion of the command.
>
> **[5:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=310)** We can also script loops using the do while.
>
> **[5:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=333)** And we get the elements of the list displayed.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=336)** It's a bit obtuse really, so there's another way to do this using the ForEach clause.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=346)** Much simpler.
>
> **[5:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=349)** This has been just a refresher.
>
> **[5:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=351)** There's much more to learn in PowerShell if you are new to it.
>
> **[5:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scripting-with-powershell?u=76281980&t=355)** You can really get into the details by taking the PowerShell 5.0 course by Matt Hester.

> [!info]- Semantic Content
>
> **Tools:** powershell (17), bash (2), command line (2)
> **Code Keywords:** let (3), function (2), interface (1), while. (1)
> **Env Vars:** txt (2), ise (2), wmi (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** cd (1), cat (1)
> **Definitions:** is a  (2)
> **Versions:** 5.0 (1)
> **Prerequisites:** set up (1)

#### Extending PowerShell with Nishang
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=0)** - Let's take a look at nishang, a set of powerful commandlets written by Nikhil Mittal.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=6)** Nishang is available in the Kali Linux release, but it can also be manually loaded into a window system.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=12)** The zip file can be downloaded from Nikhil's GitHub site shown here.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=16)** I've already downloaded and extracted the nishang master contents into c:/nishang.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=23)** Note that if you want to work with nishang, you'll likely need to turn off realtime protection.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=28)** A number of these scripts are picked up as a threat by antivirus software.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=33)** You'll also need to run the script as administrator, so make sure you open the PowerShell using run as administrator option.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=41)** I've got PowerShell loaded and running as administrator, so let's get going.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=46)** I'll prepare the environment to load the nishang module by allowing unsigned scripts to be run and importing the nishang scripts for use.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=57)** PowerShell will ask for permission to load unsigned scripts.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=60)** We need to override this, which we can do fairly easily with the Get Child Item command, which we can invoke using its alias GCI.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=69)** We'll look at the nishang module and recursively unblock all scripts within it.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=77)** Let's get a listing of all the nishang modules using the Get Command commandlet.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=84)** That's quite a lot of new capability we've added to PowerShell.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=88)** Okay, let's start running some nishang commandlets.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=91)** I'll start with the basic information gathering command.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=98)** The script encountered a couple of problems while collecting information, but let's use Notepad to look at what we did find.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=106)** And we can see we've got a substantial amount of information, processors, hosts, users, installed software, hosts file, drivers, interfaces, and so on.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=121)** We can check what a nishang command does using the Get help commandlet.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=128)** Here we've got the help on the Invoke-Mimikatz commandlet, which we can use to extract user information from memory.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=137)** Another interesting command is get-Passhashes, which extracts the password hashes for us.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=145)** Okay, we've got our list of hashes.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=148)** We can scam ports using nishang.
>
> **[2:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=162)** And we can see the open ports.
>
> **[2:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=165)** This is useful for moving laterally in networks.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=169)** Another powerful feature of nishang is creating documents with an embedded payload.
>
> **[2:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=175)** An example of this is the out word command, which I'll run on a system with the Microsoft Office installed.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=182)** This can create a default Word document or can embed the payload in whatever Word document is provided.
>
> **[3:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=189)** And we've created a weaponized Word document called Salary_Details.doc.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=195)** In this case, the payload is a command to invoke PowerShell, which we may wish to do as we move laterally through our target network as we test it.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=204)** Nishang comes with a number of other payload deployment tools, including Out XL, Out Shortcut, Out CHM, and Out JS.
>
> **[3:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=212)** We can do brute force testing with nishang using the Invoke-BruteForce command.
>
> **[3:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=217)** This can be used to run a dictionary attack against various services.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=221)** I'll show an example of running this against an FTP service on a remote system.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=226)** I've got a user list and a password list set up.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=233)** I'll use the verbose option so that we can see how we're progressing, and stop on success to terminate when we find the correct credentials.
>
> **[4:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=244)** We can see the script running and it's got a bug as it's throwing an exception on a failed try.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=251)** However it does find a match.
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=254)** Let's finish our refresher on nishang with a look at the Invoke-Prasadhak.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=259)** Which connects to the virus total database and checks the executables of all running processes for malware.
>
> **[4:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=265)** This requires an API key from Virus Total, which you can obtain by registering a free account.
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=272)** Okay, we checked and we found one file that's flagged as malicious.
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=278)** I can enter the file hash into virus total and find the report.
>
> **[4:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=282)** Here we have a single detection by the Baido engine that matches the Wisdom Eyes Trojan.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=289)** I can investigate this further to determine if it's a real Trojan or a false positive.
>
> **[4:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=295)** This has been a brief introduction to how we can extend our PowerShell testing capability with nishang.
>
> **[5:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/extending-powershell-with-nishang?u=76281980&t=302)** Nishang provides many commandlets and it's useful to spend time learning about each of them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), module (2), override (1), this, (1), case, (1)
> **Tools:** powershell (6), github (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** gci (1), chm (1), ftp (1), api (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### What is Active Directory?
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=0)** - [Instructor] Microsoft provides an LDAP compliant identity provider called Active Directory as an optional feature in its server range.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=7)** So when we purchase a Windows server, we've also got a latent Active Directory waiting to be activated.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=14)** However, with Microsoft we get much more than just an LDAP directory.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=19)** The full name of the Microsoft Identity provider is Active Directory Domain Services, and it not only provides identities, but is usually deployed as a complete domain management system as well.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=32)** Understanding Active Directory is an important part of being an effective pen tester as it's pretty much part of any enterprise network, and it's often part of an adversary's attack chain.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=45)** I won't go into the details of how we set up and manage active directories, and we won't set one up for this course.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=51)** But you can check out the Active Directory courses from Ed Liberman if you want to delve further into this.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=57)** Let's take a brief look at Windows Server 2019 that I have running.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=62)** Server Manager provides the option for us to add roles and features.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=66)** Under server roles, we can see five active directory features that we can turn on.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=72)** We can see that Active Directory Domain Services is checked.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=76)** I've already set this server up as an Active Directory Domain Server.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=81)** So what do we get when we switch on Active Directory Domain Services?
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=85)** We get a directory where we can store identity related items, which we can refer to more properly as AD objects.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=93)** There are many objects such as users, computers, policies, and so on.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=97)** We get what's known as a schema that defines the AD objects and their attributes.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=103)** We get a catalog, which is arranged as a hierarchy of containers in which AD objects are put, allowing them to be browsed and searched.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=114)** We get group policy objects, or GPOs, which enable central management of the configuration of computers and user accounts.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=123)** There's also a replication service for distributing directory data on the network so that we can run multiple synchronized directories.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=131)** And last but not least, Active Directory provides a central security system to authenticate identities and control access by users and services to systems in the Active Directory domain.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=145)** We can think of an enterprise as a single domain holding a set of users and a set of computers.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=151)** However, it's often not that simple in the real world.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=155)** When we look at the Active Directory hierarchy, we see it starts with what's known as a realm, which is the full scope of everything in the enterprise.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=164)** Within that, Active Directory allows a number of independent groups of domains, each having their own security boundary.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=172)** These are known as forests.
>
> **[2:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=174)** There may be just one active directory forest in an organization, or there could be multiple.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=180)** For example, to support independently operating businesses within a conglomerate.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=185)** Then within the forest, we have one or more Active Directory domains, and these are used to separate groups of AD objects in whatever way makes sense to the business.
>
> **[3:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=196)** And then we can also create subdomains of an Active Directory domain, sub subdomains, and so on.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=202)** How this is done, of course, is decided by the organization's unique structure and operating model.
>
> **[3:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=209)** The structure of an Active Directory tree isn't just internal to Active Directory.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=214)** It reflects how the enterprise is visible in the real world.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=218)** Let's get a glimpse of what this looks like.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=221)** We can run a tool that comes with Kali Linux called DMitry, which retrieves public information on an organization.
>
> **[3:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=229)** I'll run this against [yahoo.com](https://yahoo.com).
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=233)** Dmitry [yahoo.com](https://yahoo.com).
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=239)** We can see here that DMitry has gathered subdomain information for [yahoo.com](https://yahoo.com).
>
> **[4:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=245)** So [yahoo.com](https://yahoo.com) is the main domain, and ca.[yahoo.com](https://yahoo.com), uk.[yahoo.com](https://yahoo.com), and so on are all sub domains.
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=254)** And they of course may have their own internal sub domains themselves.
>
> **[4:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=258)** There's also a sub hierarchy within Active Directory, which is relevant to domain controllers, and this is to do more with the network topology and group policies than the business model as such.
>
> **[4:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=270)** This hierarchy starts with the domain and breaks down into sites.
>
> **[4:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=275)** And within sites, we can have users and devices.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=279)** This is important when we start planning replication of directory information and need to understand how domain controllers talk to each other.
>
> **[4:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=287)** It also affects the application of policy settings.
>
> **[4:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=290)** With domains taking precedence over sites and sites over local machines, there's another active directory concept which comes into play here also, and that's trust relationships between domain controllers.
>
> **[5:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=304)** These need to be in place to enable exchange of information between domains for replication, but also to support access for users to query directory information from a domain outside of their own.
>
> **[5:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=318)** We'll leave the concepts of Active Directory here, and you can visit my course on [[Advanced Pen Testing Techniques for Active Directory]] to learn more.
>
> **[5:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-is-active-directory?u=76281980&t=327)** However, before we leave Active Directory, let's check out a tool in the next video that we can use to find ways to exploit an Active Directory system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), switch (1), public (1)
> **URLs:** [yahoo.com](https://yahoo.com) (6)
> **Definitions:** known as (3), is an  (1)
> **Env Vars:** ldap (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)

#### Analyze Active Directory with BloodHound
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=0)** - [Instructor] Once we've got a member account which we can use to work with active directory, we need to start working towards escalating our access to domain administrator.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=9)** One of the useful tools for doing this is BloodHound.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=12)** BloodHound analyzes the active directory contents and works out the paths that are available to escalate a user account based on the privileges of of those user accounts.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=22)** Let's see what it makes of our active directory.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=25)** BloodHound works offline in our Kali system.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=28)** So before we start working with BloodHound, we need to extract data from our active directory server.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=34)** We've already loaded the BloodHound Python collector, so let's run that.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=38)** To use the blood hand Python system, we need to have a domain user account that we've obtained in some way.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=44)** We'll be using the account for John Doe with a username jdoe76 and a password of JDPass2021.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=52)** To collect the data, all we need to do is .local/bin/bloodhound-python.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=66)** Give it the username jdoe76 and the password JDPass2021 for our domain user and the name server 192.168.1.199.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=83)** The domain, [cybex.com](https://cybex.com) and we're going to collect all.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=93)** The collector very quickly, detects the domain and collects the data from it.
>
> **[1:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=97)** It creates a set of four JSON files.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=103)** Let's start BloodHound now and go and look at the data.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=106)** We have to start the Neo4j server first, so let's open a new terminal for that and we'll enter sudo neo4j console.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=123)** We need to change our initial Neo4j credentials and we do that by browsing to 127.0.0.1:7474
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=147)** and we'll enter our initial Neo4j credentials
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=156)** and connect and we'll put our new password in
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=164)** and we'll say BloodHound and repeat that.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=171)** Okay, now we can run BloodHound and log in
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=182)** using the credentials neo4j BloodHound, neo4j BloodHound.
>
> **[3:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=197)** The first thing we'll do is to select upload data from the icons on the right
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=207)** and select our four JSON files.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=216)** Okay, now these are uploaded.
>
> **[3:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=220)** We can open up the panel on the left and we can see the database has been populated.
>
> **[3:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=228)** We have three tabs, database, node info and analysis, and above that a set of three icons.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=235)** The left hand icon is for path finding.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=239)** Let's use that and look for a path from the start node, NSTOVE07 to DOMAIN ADMINS@[CYBEX.COM](https://CYBEX.COM)
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=261)** and we find there's no data returned from that query.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=268)** We can look at a path from AKATT42 to domain admins
>
> **[4:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=278)** and we find there is a path with AKATT42 being a member of domain admins.
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=283)** We can do this for each user account, but that takes time.
>
> **[4:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=287)** BloodHound can do a lot of the work for us.
>
> **[4:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=291)** Let's select analysis.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=294)** We can now select one of the built-in analytics.
>
> **[4:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=297)** An immediate analysis of interest is to list all domain admins.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=308)** We have an account called administrator, the normal Windows admin account.
>
> **[5:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=313)** However, we can also see that AADMA31 and AKATT42 are also domain administrators, so their accounts we'll be wanting to exploit if we can.
>
> **[5:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=329)** Let's run the analytic list all Kerberoastable accounts.
>
> **[5:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=339)** Here we find the Kerberos ticket account, but also another service account called Sendai.
>
> **[5:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=344)** This is a good pointer to another possible step towards achieving escalated privileges.
>
> **[5:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=350)** Another useful analytic to run is find AS-REP Roastable Users.
>
> **[6:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=360)** Here we see NSTOVE97 doesn't require pre authentication, so this account can be exploited as we work through our escalation to domain admin.
>
> **[6:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=370)** Now we've seen how we can identify possible paths forward.
>
> **[6:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=373)** We well placed to start looking at privilege escalations.
>
> **[6:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=377)** BloodHound is a powerful tool and it works well in large active directory scenarios.
>
> **[6:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/analyze-active-directory-with-bloodhound?u=76281980&t=382)** We've only scratched the surface here, but you should spend time getting familiar with this tool as you progress as an active directory pen tester.

> [!info]- Semantic Content
>
> **Env Vars:** akatt42 (3), json (2), nstove07 (1), domain (1), admins (1)
> **CLI Commands:** find (4), python (3), node (2), sudo (1)
> **Code Keywords:** let (7), require (1)
> **Definitions:** is a  (3)
> **URLs:** [cybex.com](https://cybex.com) (2)
> **Versions:** 192.168.1 (1), 127.0.0 (1)
> **Ports:** :7474 (1)
> **Tools:** terminal (1)


### 3. Bash Scripting

> [↑ Back to Table of Contents](#table-of-contents)

#### Refreshing your Bash skills
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=0)** - [Instructor] One of the skills that can be quite useful when pen testing is Bash scripting.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=4)** Bash is a program that comes built into Linux, and Bash scripts, also called Shell scripts, are text documents with a ".sh" extension.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=13)** There's a number of courses on Bash scripting in our library, and if you want an in-depth understanding of the language, then I'd recommend you look in particular at the course by Scott Simpson.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=24)** In the next few videos, I'll run through a quick refresher on the key points of Bash scripting.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=30)** Let's have a look at the traditional Hello World script in Bash.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=36)** I've got that prepared under the file "hello.sh".
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=41)** We start with the declaration that this is a Bash shell, and then we set a string variable and print it.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=49)** We can now set the Shell file to enable execution with "chmod +x hello.sh".
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=58)** And then we can execute it.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=63)** And we have our message displayed.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=65)** We can use the convention dollar one, dollar two, et cetera to access the first second and so on argument on the command line.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=74)** Let's have a look at the script "argue.sh".
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=80)** We'll put two arguments on the command line and then print them as one message.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=86)** Again we'll "chmod +x argue.sh".
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=94)** And "argue.sh", we'll put "hello" as the first argument and "world" as the second argument.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=107)** And we have two arguments and the message is "Hello World".
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=112)** Bash allows us to set variables and carry out operations on them.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=118)** Let's have a look at the script "variables.sh".
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=123)** I'm setting "num1" to the value of the command line argument and setting "num2" as a constant.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=130)** I'm checking whether the argument is greater than or equal to the constant and displaying a message accordingly.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=136)** And I'm then displaying the sum of the two numbers.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=139)** Variables in Bash are un-typed, so we have to use a double bracket syntax to achieve a numeric add.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=146)** And we'll make sure the file is executable, "variables.sh", and we'll execute "variables.sh" and we'll give it the value 19.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=166)** Bash displays the correct message comparing the two values, and then displays the sum.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=172)** We can read information into the Bash script with the "read" command.
>
> **[2:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=176)** So let's have a look at a script called "reader.sh".
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=183)** In this case we'll use an echo statement and then we'll read a name.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=188)** And then we'll do the read and the message on the same line.
>
> **[3:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=196)** "Chmod +x reader.sh".
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=202)** And then we'll execute "reader.sh".
>
> **[3:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=208)** And we'll enter our name, enter my name.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=213)** And the second message, we'll enter the name again.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refreshing-your-bash-skills?u=76281980&t=218)** As we can see when reading with a prompt, our entry is on the same line.

> [!info]- Semantic Content
>
> **Tools:** bash (11), command line (3)
> **File Paths:** argue.sh (3), variables.sh (3), reader.sh (3), hello.sh (2)
> **CLI Commands:** chmod (3), make (1)
> **Code Keywords:** let (4)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Controlling the flow in a script
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=0)** - [Instructor] Bash offers a number of flow control statements.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=3)** One of the common ones we'll be using is the for loop.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=6)** Let's look at a script which reads data from an array.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=12)** nano fortest.sh.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=17)** Note that when we use the up caret as an index, we get the number of elements in the array and we use that to control the for loop.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=26)** The first array element has an index of 0 and we use the expression ${i} to use the value of the loop variable as an array index.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=38)** I've already set this as executable, so we can now run the script to print out the list of names.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=45)** fortest.sh.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=47)** And we get our list of names.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=49)** We can also script to other similar loop mechanisms in a Bash script, the while loop, and the until loop.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=57)** Let's have a look at them.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=60)** nano wutest.sh.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=65)** Firstly, we set the loop index at 6 and then use the while command to loop printing out the variable and decrementing it while our loop index remains greater than zero.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=76)** Then we set our loop index to 1 and run an until loop printing the index and incrementing it until it's greater than six.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=85)** Okay.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=87)** Let's run our while and until loop.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=93)** And we can see we run down from six to one, and then run up from one to six.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=100)** We've already seen an if else command, but let's look at this again to see how we can check whether a directory exists, and if so, list its contents.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=111)** nano iftest.sh.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=118)** We check the directory we provide as an argument by using the -d operator and then we print out a message to say whether it exists or not.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=128)** And if it exists, to list it.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=131)** Okay, let's run that with a missing directory name.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=135)** iftest.sh barney.
>
> **[2:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=141)** And barney doesn't exist.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=144)** And let's run that again, now.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=147)** iftest.sh /usr/share/Thunar.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/controlling-the-flow-in-a-script?u=76281980&t=153)** And Thunar in the user share directory does exist and we can see its contents.

> [!info]- Semantic Content
>
> **File Paths:** iftest.sh (3), fortest.sh (2), wutest.sh (1)
> **Code Keywords:** let (6)
> **Tools:** bash (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Using functions in bash
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=0)** - [Instructor] Bash provides the ability to define and call functions.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=4)** Let's write a script which demonstrates the use of a function, and we'll also include the use of selecting case statements, nano fntest.sh.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=20)** In the first section of this script, we've defined the function, and we've used an extended if statement to check the city we're going to visit.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=29)** This function takes one parameter, which is the city name.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=33)** Note in Bash that the single operator = is used to do string comparisons and assignments.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=39)** And the double operator == is used for numeric comparisons.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=45)** In this function, we check the city and print advice on the language spoken.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=56)** At the start of the main code, we set the system prompt symbol, PS3 to ">" and then we use the select statement to print a menu and loop asking for a selection.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=69)** Note we're using another looping construct here, the do break loop.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=73)** The menu is formed by the select statement.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=76)** For each response, the case statement determines what is to be done, in this case, to print out the country.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=84)** And then we call the speak function to display the language used.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=88)** Okay, let's run that.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=91)** Run fntest.sh.
>
> **[1:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=94)** And we get our menu.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=96)** So let's go to Melbourne.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=98)** We're going to Australia.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=100)** And we kind of use English.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=104)** If we go to Paris, we're going to France, and the language used is French.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=110)** Let's select Hanoi.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=113)** Language is Vietnamese with a little French and English.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=116)** And Asmara is in Eritrea, but we can try English.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-functions-in-bash?u=76281980&t=122)** Just speak louder.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (4), case, (1)
> **File Paths:** fntest.sh (2)
> **Tools:** bash (2)
> **UI Navigation:** go to (2)
> **Env Vars:** ps3 (1)
> **Speakers:** - [instructor] (1)


### 4. Python Scripting

> [↑ Back to Table of Contents](#table-of-contents)

#### Refresh your Python skills
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=0)** - [Instructor] Python is an interpretive programming language, and the interpreter can be found for both Windows and Linux at the main Python site shown here.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=9)** There are various versions of Python and scripts are not always compatible, so modifying Python scripts that you may pick up to do testing is sometimes necessary.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=19)** You'll need to install Python on Windows, but it comes built into most Linux distributions.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=24)** We'll use Kali to refresh ourselves on Python.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=28)** One of the useful documents to have when programming in Python is the library reference, which provides details of all the built-in calls that you can make to do things in Python.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=37)** As a pen tester, you'll be using the network calls extensively.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=42)** There are graphical interfaces for Python, but for our purposes we'll run at the command line.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=47)** Once you've got Python installed, you can check it's working by entering the command python.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=56)** This will put you into the interactive interpreter.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=59)** You can enter commands here and get the response immediately, or you can use Control + D to quit.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=66)** Usually we'll use an editor and create a text file containing the Python script and then we can run it as a command line argument.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=74)** Let's have a look at a file we've got called hello.py.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=82)** All this does is print the string Hello World, and we can run that by saying python hello.py.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=95)** Python provides us with string and numeric variables, which can be integer and floating point.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=101)** We can also use boolean variables.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=104)** We can assign values to a variable, which takes on the type as used in the assignment.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=109)** Let's use the interpreter to see how this works.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=116)** Port equals 8080, and if we enter type(port), we find it's of class integer.
>
> **[2:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=128)** Exploited equals true, when we type that, we find that's of class boolean.
>
> **[2:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=141)** If we put user equals Malcolm, type(user) is a string.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=151)** Let's now put a value of 12.43
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=159)** and check that, the type of that, and we find it's a floating point.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=166)** We of course have the normal mathematical and string concatenation operators, so we can say x equals 12 plus 7 and then print(x) and we get 19.
>
> **[3:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=182)** We can say string one equals my name is,
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=192)** string two equals Malcolm, and then we can print string one plus string two,
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=207)** and we print the concatenation.
>
> **[3:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=210)** There are more complex ways of managing data in Python.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=213)** The first is lists, which we can create using square brackets.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=218)** Let's take a look at a list of IP addresses.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=221)** Activehost equals square bracket, square bracket, which will create the empty list, and we can activehost.append 10.0.2.8,
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=248)** and we can append another one .12, .14, .21.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=264)** Let's now print(activehost), and we'll use square brackets to select the entry we want.
>
> **[4:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=275)** In this case, entry three, which is 21.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=279)** This shows the fourth entry because of course if we use the subscript zero, we'll get the first entry.
>
> **[4:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=288)** A similar construct to a list is a dictionary for which we use curly brackets.
>
> **[4:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=293)** This is where we can associate a value with a label.
>
> **[4:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=296)** Let's create a list of hosts and host names, and we'll create hostname equals open and close curly brackets, and we have an empty dictionary.
>
> **[5:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=309)** We'll then set hostname equals 173.23.1.1,
>
> **[5:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=322)** and that's going to be called [munless.com](https://munless.com).ch, and our next address will be 173.23.1.3,
>
> **[5:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=338)** and we'll call that mail.[munless.com](https://munless.com).ch.
>
> **[5:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=350)** Okay, if we now print the length of hostname,
>
> **[6:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=360)** we find we have two entries in the dictionary.
>
> **[6:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=364)** And if we print the hostname square bracket "173.23.1.1,
>
> **[6:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=379)** the dictionary returns us the name associated with that key IP address.
>
> **[6:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=385)** We can loop through a dictionary.
>
> **[6:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=387)** Let's say for key in hostname,
>
> **[6:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=396)** and we'll print key.
>
> **[6:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=401)** And we get our keys out.
>
> **[6:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=404)** And similarly, we can say for key in hostname, print the hostname associated with the key.
>
> **[7:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=422)** We can add more entries to the dictionary with the update method, hostname.update, and we'll add a new entry, 173.23.1.5,
>
> **[7:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=443)** and we'll call that ftp.[munless.com](https://munless.com).ch.
>
> **[7:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=452)** Let's move on to conditionals.
>
> **[7:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=454)** We can use if, else statements to conditionally execute code.
>
> **[7:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=459)** So we'll set a value numb equal to 5, and we'll say if numb is less than 10, then we'll print single digit value and the conditional executes, it is less than 10, and we get the message.
>
> **[8:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=488)** We can use the for statement to execute a block of code a number of times, for x in range 1, 5
>
> **[8:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=505)** print repetition plus string x.
>
> **[8:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=520)** Note that the repetition stops when the final value is reached, not after it.
>
> **[8:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=526)** Note that the scope of the conditional or repetition statement extends to all indented lines following it.
>
> **[8:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=532)** Python is sensitive to where you start your line of code.
>
> **[8:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=536)** We've used the string function here to convert an integer into a string.
>
> **[9:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=540)** Python provides many such functions to make scripting easy.
>
> **[9:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=543)** Some more examples, including the set of string manipulation functions, upper, lower, replace, and find.
>
> **[9:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=550)** So for example, we could say print(circus.upper()),
>
> **[9:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=565)** and we'll get the string circus printed in uppercase.
>
> **[9:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/refresh-your-python-skills?u=76281980&t=568)** I won't go into the vast array of functions that Python offers, but you can review them in the library reference documentation.

> [!info]- Semantic Content
>
> **CLI Commands:** python (18), find (5), make (2)
> **Code Keywords:** let (8), type( (2), case, (1), if, (1), extends (1)
> **Versions:** 173.23.1 (4), 12.43 (1), 10.0.2 (1)
> **URLs:** [munless.com](https://munless.com) (3)
> **File Paths:** hello.py (2)
> **Tools:** command line (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)

#### Use the system functions
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=0)** - [Instructor] There are many system and third party functions that we can use to extend the capability of Python.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=5)** One that we'll use frequently is the operating system functions library.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=10)** Let's try it out.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=12)** We'll start at Python and we'll import the library, which is called "OS".
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=18)** We'll then run the "uname" function from the library.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=24)** We returned a set of strings associated with our operating system, name, version, and so on.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=31)** Another useful library is Subprocess, through which we can run system commands within the context of our script.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=38)** Let's take a look at a script which executes the "uname" command as a subprocess.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=44)** Nano, and the script is called "sprog.py".
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=52)** We import the Subprocess library and then use it firstly to run "uname" with the "-V" switch, and this displays the results.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=61)** Secondly, we run it again with the "-ORS" switches, but capture the result.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=66)** And we then extract the raw standard out component, decode it, and print it.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=73)** Let's run that.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=77)** This returns the output from the "uname" commands.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-the-system-functions?u=76281980&t=80)** There are countless system and third party functions, which can remove a lot of complexity from our scripting.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), switch (1)
> **CLI Commands:** python (2)
> **Definitions:** is called (2)
> **File Paths:** sprog.py (1)
> **Env Vars:** ors (1)
> **Speakers:** - [instructor] (1)

#### Use networking functions
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=0)** - [Instructor] Another module we'll want to be familiar with when we're doing pen testing is the Python Networking library, the socket module.
>
> **[0:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=7)** To use the socket library, we need to import it, set its configuration, and then create an instance that we can use to call its functions.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=16)** Let's write a Python script to use the connect and receive functions, to get a banner from our meta exploitable FTP site.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=23)** and we'll call that banftp.py.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=31)** We import the socket library so that we can use the socket networking features.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=36)** We set the default time out to one, that's more than enough for our test network.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=40)** Then we open a socket and connect to the meta exploitable server on IP address, 10.2.32 and port 21.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=50)** And note the use of double brackets.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=52)** We then receive up to 1,024 bytes back and print it, decoding it to normal readable text.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=60)** Okay, let's run that.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=63)** And we'll run Python banftp.py, and we get back our banner.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=70)** Once we've found an active host during our reconnaissance, we'll want to scan it for open ports.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=76)** While there are many tools for port scanning, let's write our own in Python.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=80)** We'll limit our scan to TCP and try to establish a full connection to the port.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=86)** And for the purposes of this demonstration, we'll just scan for those ports in the range one to 1023 on our meta exploitable server, nano portscan.py.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=100)** We'll import the CIS module in order to access the IP address with scanning, which will be a command line argument.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=107)** We'll import the socket library as before and this time we'll run a full loop inside a try accept block for each port.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=114)** We'll check the response to see whether we did achieve a connection and if so, print a message.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=121)** Okay, let's run that.
>
> **[2:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=125)** Python portscan.py 10.0.2.32.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/use-networking-functions?u=76281980&t=132)** And we have ourselves a very fast port scanner.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (3)
> **CLI Commands:** python (5)
> **File Paths:** banftp.py (2), portscan.py (2)
> **Env Vars:** ftp (1), tcp (1), cis (1)
> **Versions:** 10.2.32 (1), 10.0.2 (1)
> **Ports:** port 21 (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Work with websites
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=0)** - [Instructor] A significant part of any pen tester's work will be website testing.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=5)** While automated testing tools are readily available, there are times when we might need to do manual testing using scripting tools such as Python.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=13)** Let's have a look at how we can use Python to work with websites.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=17)** We can use the URL Lib Library to retrieve webpages.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=21)** Let's see how we do that with a small script called use URL.py.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=28)** Nano useurl.py.
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=34)** Here we import the URL Lib library and then send a request to open the index page on Metasploitable.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=40)** And then we print the decoded page.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=43)** Let's try it Python useurl.py, and here we get the HTML from that index page.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=55)** Websites need to have pages uploaded, and one common way to do this is using FTP.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=61)** We can use the FTP server for testing if we have its credentials.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=65)** So let's use the FTP server to check for webpages, and we'll do that with a script called use FTP.py.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=76)** We import the FTP library and then set the remote server address.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=81)** We then log in with a set of credentials and set the working directory to the website folder, which is /var/www.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=91)** We then issue a dir command to get the directory listing.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=95)** Let's run it.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=98)** Python useftp.py.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=104)** Okay, we've accessed the target server and listed the directory.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=107)** Notes, we can see that the DAV webpage has write permission set for anyone.
>
> **[1:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=113)** As an attacker, we're on the lookout for a writeable web folder or webpage that we can compromise.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=118)** Let's use Python to upload a malicious PHP file that will allow us to run commands.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=124)** We'll prepare two files for this.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=126)** The first is the PHP file we'll upload.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=132)** And we'll call that Shelly.php.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=136)** And this is a single line PHP file, which executes a shell command from the URL.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=144)** We'll call our Python file webinject.py nano webinject.py.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=154)** We open the website FTP server and log in as we did previously, and we then switch to the vulnerable DAV web folder.
>
> **[2:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=163)** We then open our malicious PHP file, and using FTP store, we write it into the vulnerable folder.
>
> **[2:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=171)** We then display a message indicating we've completed our injection.
>
> **[2:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=175)** Let's run this.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=179)** Python webinject.py.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=185)** Okay, well that worked.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=188)** We can now use Curl to run our remote command execution shell.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=192)** For example, let's list the home folders, noting we'll use the hexadecimal representation %20 as space.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=201)** Curl HTTP 10.02.32, and we need to go to the DAV folder and Shelly.php and put in the command LS %20/home%20 minus L.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/work-with-web-sites?u=76281980&t=226)** We've successfully injected a malicious file into the Metasploitable website, and we can now issue commands and get the results back.

> [!info]- Semantic Content
>
> **Env Vars:** ftp (7), url (4), php (4), dav (3), html (1)
> **CLI Commands:** python (7), php (6), curl (2), ls (1)
> **Code Keywords:** let (8), this. (2), var (1), switch (1)
> **File Paths:** webinject.py (3), useurl.py (2), shelly.php (2), url.py (1), ftp.py (1)
> **UI Navigation:** open the (2), switch to (1), go to (1)
> **Analogies:** such as (1), for example (1)
> **Versions:** 10.02.32 (1)
> **Definitions:** is a  (1)

#### Access SQLite databases
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=0)** - [Instructor] When doing pen testing, we'll often come across SQ light databases on everything from browsers to mobile devices.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=8)** It's useful to have a way to automate access in order to build testing tools and to do manual testing.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=14)** We can do this relatively easily with Python.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=17)** Let's take a look at where we'll find the database Chrome users to store cookies.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=22)** We're here in a rather deep folder of our homepage called app data local Google Chrome user data default network.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=30)** Let's see what it contains.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=33)** We can see the file called cookies, that's what we want.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=38)** I've copied this to kali, so let's take a look at it using a Python script called Squeal one.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=45)** Nano Squeal1.py.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=51)** Here we open the SQ Light three library and connect to our cookies database.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=56)** We then execute a query using select against the master SQL light configuration to get the names of tables in the database.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=64)** So let's run that.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=67)** Python squeal1.py.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=72)** We can see the list of tables in this database, meta and cookies.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=77)** And the cookies holds the text of the cookies that have been stored.
>
> **[1:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=81)** So let's look at the cookies table and see what columns it holds.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=85)** And we'll do that with a script called Squeal two.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=89)** As before we import the SQ light three library and connect to our cookies database.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=95)** We then execute a query to select all fields and print the field descriptions.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=100)** So let's run that.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=104)** Python Squeal2.py.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=109)** Okay, we now know the tables in the cookies database and the column names in the cookies' table.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=115)** Let's now list selected data from that table.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=118)** And to do that, we'll use another Python script called Squeal three.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=124)** Nano squeal3.py.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=129)** Once again, we import the SQ light three library and connect to the cookies database.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=135)** We then select the two fields we're interested in from the cookies table and print them with the site name first and the cookie following it with a little bit of formatting.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=147)** Let's run that.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=151)** Python Squeal3.py.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/access-sqlite-databases?u=76281980&t=155)** And we get a list of the cookies that have been stored through the browser.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **CLI Commands:** python (6), find (1)
> **File Paths:** squeal1.py (2), squeal3.py (2), squeal2.py (1)
> **UI Navigation:** open the (1), select the (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Using Scapy to work with packets
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=0)** - [Instructor] It's occasionally useful when testing to use raw packets to probe a target.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=4)** We can do this in Python by invoking the Scapy library.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=8)** Scapy is a Python tool, but it also comes as a library to use within our own Python scripts.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=15)** It enables us to create each of the layers of a packet and within those layers to set all or any of the fields.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=22)** Let's try a simple demonstration of Scapy to create a SYN flood, and we'll prepare a script called spack.pi, "nano spack.pi".
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=35)** Okay.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=36)** Here we can see the flood routine, setting a loop across all target ports and create a TCP SYN packet with its source and destination IP addresses, and source and destination ports, and sending it to all ports on the target.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=52)** Okay, let's run this script against our metasploitable server.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=57)** "Sudo python spack.pi".
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=63)** Okay.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=63)** This is sending out a lot of packets.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-scapy-to-work-with-packets?u=76281980&t=66)** Of course, this isn't a sophisticated flood, but it does demonstrate the ease of using Scapy.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), sudo (1)
> **Env Vars:** syn (2), tcp (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Leveraging OpenAI for testing
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=0)** - [Instructor] Increasingly, we're hearing about the capabilities of AI to assist us in everything we do.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=6)** While some of what is reported is hype, we can certainly use AI to assist with our penetration testing, either using the public portals or by querying it programmatically.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=18)** Let's check how we do this in Python.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=21)** In order to follow along with this, you'll need to register an account with OpenAI and obtain an API key.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=29)** There's no charge for this.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=31)** To use OpenAI, we'll need to install the OpenAI Python Library.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=36)** We can do that with PIP.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=39)** Sudo pip3 install openai.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=48)** We'll now need to write a short Python script to call the library.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=52)** We'll call it nano myai.py.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=59)** We import the OpenAI library and the OS library, and we start up OpenAI by sending in our OpenAI key that we were provisioned.
>
> **[1:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=69)** We then print out some general information and ask the user what they want the AI to do.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=74)** We then set up a query for OpenAI, selecting the GPT-3.5 Turbo AI engine, and specifying our role as a university lecturer.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=85)** We then make the request and display the response that we receive.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=89)** Let's use this script to ask OpenAI a few questions.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=95)** We'll start myai up by running the Python script, and let's ask our first question.
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=104)** Write me a port scanner in Python.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=114)** Okay, we've now got the Python script for running a port scan.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=119)** Let's see if OpenAI knows its way around PowerShell.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=123)** Write a Powershell script that will enumerate
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=136)** all SMB services on a Windows server.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=147)** Okay. It seems that OpenAI knows about PowerShell too.
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=151)** Let's finish with a request for information about a threat actor.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=157)** Query the MITRE ATTACK site and find out
>
> **[2:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=173)** everything about about APT28.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=181)** Okay, we've now got information about the threat actor, APT 28, also known as Fancy Bear, Sofacy, and so on.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=190)** This is just scratching the surface of what we can do with OpenAI.
>
> **[3:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/leveraging-openai-for-testing?u=76281980&t=194)** Take some time to try a few questions yourself and remember that the more specific you are, the more accurate the response will be.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), pip (1), sudo (1), pip3 (1), make (1)
> **Code Keywords:** let (5), public (1), this, (1), this. (1)
> **Env Vars:** api (1), pip (1), gpt (1), smb (1), mitre (1)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **Tools:** powershell (3)
> **File Paths:** myai.py (1)
> **Versions:** 3.5 (1)
> **Definitions:** known as (1)


### 5. Kali and Metasploit

> [↑ Back to Table of Contents](#table-of-contents)

#### A Kali refresher
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=0)** - [Instructor] If you haven't worked with Kali yet, you should take a look at my introduction to Kali course.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=5)** For the purposes of this course, let's start by taking a look at the basic configuration updating and application menu.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=13)** We'll start by looking at how we can change our Kali settings.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=16)** I'll click on the computer icon at the top right and settings.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=22)** We can manage our timeout settings here.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=24)** Let's look at system and we can see that I've set Kali to never suspend.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=29)** Under display.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=31)** The screen will go blank after 10 minutes and switch off after 15 minutes.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=36)** Under security.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=38)** We're going to lock the screen when the system goes to sleep.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=41)** You can set Kali to manage its power and displays as you like.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=46)** Before I look at the tools, I'll run the update and upgrade commands to make sure Kali is up to date.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=52)** I'll open the terminal window and type sudo apt update && sudo apt upgrade.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=64)** And I'll put the Kali password in, which is kali, and we'll let that run and that will do its update followed by its upgrade.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=74)** Okay, we're up to date now and we can close the terminal window.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=78)** Our Mac address is the hardware address associated with our network card.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=84)** However, we can override this in software.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=87)** Let's look at one of the system configuration tools included with Kali that we can use to change our Mac address.
>
> **[1:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=93)** I'll select applications, sniffing & spoofing, macchanger.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=100)** Kali opens a terminal and shows us the help display.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=103)** I can run ifconfig to see my current settings, ifconfig.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=111)** we can see the Mac address on the line starting with the word "ether."
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=115)** I'll now run macchanger and change my Mac address, sudo macchanger -A eth0.
>
> **[2:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=129)** I'll put our password in.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=131)** Okay, we can see the Mac address shown as the current address and that I've been provided with a new one.
>
> **[2:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=137)** And if I run ifconfig again, sure enough, the new one has been set.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=145)** When we're testing, we'll need to be able to identify what vulnerabilities are known for a specific system, and we can do that in Kali with searchsploits, which we find under applications, exploitation tools, searchsploits.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=164)** This tool connects to the exploit DB exploitation database.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=168)** It's pretty simple to use.
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=170)** We just give it the term we want and it lists the known vulnerabilities containing that term, searchsploit smb.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=178)** And we get a list of all the vulnerabilities for the smb protocol.
>
> **[3:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=183)** We can limit the results with a second term, searchsploit smb windows, and the results are limited to just Microsoft vulnerabilities.
>
> **[3:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/a-kali-refresher?u=76281980&t=195)** There are many tools in the Kali menus and as a pen tester, you'll want to be familiar with them.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (3), apt (2), make (1), find (1)
> **Code Keywords:** let (4), switch (1), override (1)
> **Tools:** terminal (3)
> **UI Navigation:** click on (1), open the (1)
> **Speakers:** - [instructor] (1)

#### Fuzzing with Spike
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=0)** - [Instructor] Vulnserver is an excellent testing environment for understanding how malware works.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=6)** We're not going to test its full functionality, but we will use it to look at a fuzzing tool called Spike that's included in Kali.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=14)** I've loaded the vulnerable server shown here onto my Windows system.
>
> **[0:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=18)** This server listens on port 9999.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=21)** The first thing I'll do is to connect to the server using Netcat, nc 10.0.2.14 9999.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=30)** Okay, we get the banner, and I can enter HELP to see what commands it takes.
>
> **[0:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=35)** HELP.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=37)** We get a list of commands and we can use these to start fuzzing.
>
> **[0:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=40)** And note in the middle there is the TRUN command.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=44)** We'll use that for our fuzzing tests.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=46)** To use Spike, I need to set up an action file.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=49)** I'll call this command.spk, and I'll use Nano to build it, nano command.spk, and we'll start by asking Spike to read the banner for us, and we'll then send out a string, s_string("TRUN space"); and we'll follow that s_string_variable
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=82)** with a COMMAND variable.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=84)** Okay, I'm instructing Spike to send the string TRUN and variable command to the server.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=91)** To see this in action, we'll use Wireshark to capture the packets.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=100)** And we can call the Spike send tcp module by entering generic_send_tcp to 10.0.2.14 on port 9999, using the action file command.spk 0 0.
>
> **[1:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=118)** And the server's responding with the welcome message for a few packets and then stops responding.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=124)** We've crashed the server.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=126)** Let's check the packet stream in Wireshark.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=135)** Okay, at the top we can see the SYN SYN ACK ACK three-way handshake between our Kali system on 10.0.2.15 and the vulnerable server on 10.0.2.14.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=148)** We then see the 105 byte welcome message, and two messages later, we see the TRUN command, and we can see this again.
>
> **[2:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=159)** Another 105 byte package, welcome to the vulnerable server, and our TRUN command.
>
> **[2:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=167)** And again.
>
> **[2:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=170)** But eventually, we stop getting the welcome message and the system has crashed.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=177)** We know that this stream of packets crashed the server, and we can now analyze the activity to see which packet we sent just before crashing it.
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=184)** We'll leave the vulnerable server and Spike here, but we've barely scratched the surface of these tools.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fuzzing-with-spike?u=76281980&t=190)** Take some time after the course to look into them further.

> [!info]- Semantic Content
>
> **Env Vars:** trun (5), help (2), syn (2), ack (2), command (1)
> **Versions:** 10.0.2 (4)
> **Code Identifiers:** s_string (1), s_string_variable (1), generic_send_tcp (1)
> **Code Keywords:** module (1), let (1)
> **Ports:** port 9999 (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Information gathering with Legion
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=0)** - [Instructor] Let's take a look at how we can use Kali to extract information about the services on a target system while at the same time looking for credentials to use.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=9)** To do this, we can use a useful reconnaissance tool called Legion.
>
> **[0:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=13)** We find this in Applications, Vulnerability Analysis.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=19)** And we'll put the password kali in.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=23)** And the startup's a bit messy, but we can right click on the top bar and maximize the Legion window.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=31)** Let's click on the panel to add hosts and add 10.0.2.8 for our Metasploitable server, and we'll do a hard assessment.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=43)** And we can submit.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=45)** Legion now starts analyzing our Metasploitable server.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=49)** We can see its progress in the bottom panel, and as the analysis proceeds, we can see the results in the main right panel.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=56)** If we scroll down to Port 3306, we can see that the server is running MySQL 5.0.51a.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=65)** We can open the MySQL tab at the top right and we can see that Legion has used Hydra to check and found valid credentials to access the SQL server.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=75)** Similarly, if we click on the tab for FTP on Port 21, we find that Hydra has identified valid credentials to access that service also.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=85)** We can also look at the Services tab in the left pane.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=89)** We start with access denied on Port 6,000, but as we move down the services, we can see bindshell on Port 1524, which is open and is described as the Metasploitable root shell.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=102)** Let's take a quick look at the Brute tab at the top left before we leave Legion.
>
> **[1:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=107)** This allows us to brute force test the services with options to select a dictionary to use for usernames and passwords.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=114)** We'll go 10.0.2.8 to our Metasploitable server on Port 22.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=123)** And we'll browse for usernames, and we'll pick up unix_users.txt.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=132)** And we'll browse for passwords and pick up unix_passwords.txt.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=143)** And then we can run.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/information-gathering-with-legion?u=76281980&t=146)** Okay, we'll leave Legion there for now.

> [!info]- Semantic Content
>
> **Ports:** port 3306 (1), port 21 (1), port 6 (1), port 1524 (1), port 22 (1)
> **UI Navigation:** click on (3), scroll down (1), open the (1)
> **CLI Commands:** find (2), mysql (2)
> **Code Keywords:** let (3), this, (1)
> **Versions:** 10.0.2 (2), 5.0 (1)
> **File Paths:** unix_users.txt (1), unix_passwords.txt (1)
> **Code Identifiers:** unix_users (1), unix_passwords (1)
> **Env Vars:** sql (1), ftp (1)

#### Using Metasploit
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=0)** - [Instructor] When pen testing, it's useful to provide evidence that vulnerabilities are in fact exploitable.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=5)** To do this, we can use Metasploit, which we can find in the applications, exploitation tools menu.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=14)** The first time Metasploit starts up, it will create and prepare its databases, otherwise, it will skip this initialization step.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=21)** After completing its startup, the MSF 6 prompt appears.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=25)** Metasploit is now ready for use.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=28)** Metasploit includes a database of testing modules, assembly and encoding capabilities to manipulate, exploit and payload code, and the interpreter, a payload which provides a powerful remote shell.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=38)** We can see that it includes over 2000 exploits, has over 1000 auxiliary modules, 363 post exploitation tools and 592 payloads in its database.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=52)** Exploit modules are run against a target system to check whether it's vulnerable.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=56)** Auxiliary commands are generally to gather more information on the targets.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=60)** Payloads are sent into a target system to demonstrate that the exploit was successful by executing on the targets.
>
> **[1:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=67)** The first Metasploit command I'll enter is help.
>
> **[1:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=70)** This shows all the commands that we can issue in Metasploit.
>
> **[1:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=75)** This list starts with the core commands followed by the module commands, the job commands and so on.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=85)** I won't go through all of these commands, but you should familiarize yourself with them.
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=90)** I can issue the commands, show exploits and that lists all of the exploits in the Metasploit database.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=98)** The exploit name appears at the left of this list, and at the right is the disclosure date, the effectiveness of the exploit, and the description of what the exploit achieves.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=108)** There's far too many exploits for this to be useful, but I can be more selective and use the search command.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=114)** Let's look for a Windows 8 exploit.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=117)** I'll enter search win8.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=122)** Here we can see a couple of exploits listed for Windows 8, the 2012 internet key exchange exploit, and the 2017 Eternal blue exploit.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=132)** If I search for Windows 7, we get 35 exploits and payloads listed.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=139)** Let's now use Metasploit to check whether a system is vulnerable.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=143)** I'm going to try and exploit on my Metasploitable system and I'll start by looking at its IRC service.
>
> **[2:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=150)** Let's see what Metasploit has for us. Search irc.
>
> **[2:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=155)** Okay, I can see there's a range of exploits for dos, Windows, Unix, and so on.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=160)** I'll select the Unix exploit called exploit/unix/irc/unreal_ircd_3281_backdoor.
>
> **[2:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=168)** To do this, I enter the command use with the exploit name.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=172)** Use exploit/unix/irc/unreal_ircd_3281_backdoor.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=192)** Okay, we're now loaded.
>
> **[3:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=193)** I can check the targets this exploit works against by entering the command show targets.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=201)** In this case, the exploit can determine what kind of target it has, so we can select automatic.
>
> **[3:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=206)** Let's set that target type, set target 0.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=211)** Let's now have a look at what payloads I can use with this exploit, show payloads.
>
> **[3:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=218)** I see that I have a number of command shells I can use and a generic command execution.
>
> **[3:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=223)** I'll use the info command to get more information on the reverse shell.
>
> **[3:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=227)** Info cmd/unix/reverse.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=235)** Okay, so this doesn't need administrative privileges and it creates a shell on port 4444.
>
> **[4:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=241)** That sounds good. So let's go select it.
>
> **[4:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=244)** Set payload cmd/unix/reverse.
>
> **[4:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=251)** I'll now see what options I need to set to use this combination of exploit and payload.
>
> **[4:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=257)** Show options.
>
> **[4:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=260)** Okay, I have to set the remote and local host addresses.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=264)** The remote address set, RHOSTS is 10.0.2.8.
>
> **[4:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=271)** The local host, this Carly system set LHOST is 10.0.2.18.
>
> **[4:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=280)** Okay, let's run the exploit and we do that by saying exploit.
>
> **[4:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=286)** Okay, we can see Metasploit is establishing the sockets and the Telnet connection, and finally confirming that a command shell has been established on the remote system.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=294)** The first thing we'll do is check that this is the remote system.
>
> **[4:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=298)** Ifconfig eth0.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=303)** Ifconfig displays the IP address, 10.0.2.8, the remote system.
>
> **[5:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=308)** Now let's check who we are on the remote system. Who am I?
>
> **[5:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=312)** Okay, we're on the remote system as route.
>
> **[5:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=315)** We can list processes on the remote system with the PS command, and we can list files with the LS command.
>
> **[5:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=324)** Okay, I'll press Ctrl C and terminate the remote shell.
>
> **[5:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/using-metasploit?u=76281980&t=328)** I abort the session and that concludes the short refresher on Metasploit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), module (1), case, (1), type, (1)
> **Env Vars:** msf (1), irc (1), rhosts (1), lhost (1)
> **Versions:** 10.0.2 (3)
> **CLI Commands:** find (1), ls (1)
> **Ports:** port 4444 (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### Scan targets with GVM
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=0)** - [Instructor] It's useful to understand what vulnerabilities are present on our pen testing targets.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=5)** To find these, we can use the Greenbone Vulnerability Manager, GVM.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=10)** GVM installs and runs well on Kali, but we do need to give Kali additional RAM when running this tool.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=17)** I'm running with four gigabytes, instead of the normal two gigabytes I use for Kali.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=23)** Let's install this in Kali, sudo apt install gvm.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=31)** And we can now move straight into the GVM setup phase, which will load its databases, sudo gvm-setup.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=45)** Here we see our admin password, which we'll need, and it will be repeated at the end of setup.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=51)** Loading the database information will take a while, so let's come back when it's complete.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=56)** Okay, we're finished now.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=57)** Let's copy our password, which we'll need to log in.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=62)** Okay, we can now run gvm-start,
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=74)** and we started, and we can log in, and run to admin, and paste the password and sign in.
>
> **[1:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=88)** We'll now check out administration feed status, and we can see that our feeds update is in progress.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=99)** We'll need to wait for these to complete before we can move on.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=103)** This takes in the order of hours to complete, so we'll come back and run a scan once the feeds have been fully processed.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=110)** GVM is now installed, and all the databases have been synchronized, so we can run a scan.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=116)** We'll select Scans from the top ribbon, and then use the Wizard by clicking the wand.
>
> **[2:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=127)** My meta exploitable system is running on 10.0.2.32, so let's scan that.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=139)** The scan starts with a status of requested.
>
> **[2:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=144)** After a short while, it moves into status queued, and it's getting ready to start, and it then starts running.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=153)** Okay, that took a while, but it's finished running all the tests now.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=157)** Let's select the link in the reports column to look at the scan results.
>
> **[2:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=161)** This opens a new webpage, and if we open the Results tab, we get a list of the issues identified, starting with the highest severity rating.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=172)** Early in the list, we can see there's an issue of multiple ruby remote code executions on port 8787, at a 99% confidence level.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=181)** There's a command execution on the TWiki website through port 80.
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=186)** There's a possible backdoor Ingreslock on Port 1524, and in fact, there's many more issues.
>
> **[3:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=194)** If we click on CVEs, we can see the relevant common vulnerability alert, which has been published for 35 of the issues that have been identified.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=204)** Going back to the Results tab, let's look at the details of the possible backdoor Ingreslock.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=214)** If we click on that, it expands, and we can see more details of the testing and the results, and we can see under detection result that the service answers to an ID with the response UID equals zero, which is the route user.
>
> **[3:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=230)** So accessing the port shows that it's running a route user shell.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=235)** Further down, the recommended solution is to do a full system clean.
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=242)** We won't go through the report in detail, but it's worth spending a bit of time checking out the results to become familiar with what GVM can do.
>
> **[4:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/scan-targets-with-gvm?u=76281980&t=249)** Running a GVM scan provides a pretty good idea of the vulnerabilities that exist in our target systems, and points to where we might want to investigate further to find exploitable weaknesses.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), while, (3)
> **Env Vars:** gvm (6), ram (1), uid (1)
> **CLI Commands:** find (2), sudo (2), apt (1), ruby (1)
> **Prerequisites:** setup (3), install (2)
> **UI Navigation:** click on (2), select the (1), open the (1)
> **Ports:** port 8787 (1), port 80 (1), port 1524 (1)
> **Versions:** 10.0.2 (1)
> **Best Practices:** recommended (1)


### 6. Web Testing

> [↑ Back to Table of Contents](#table-of-contents)

#### Approach web testing
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=0)** - [Instructor] Most applications are now delivered as web applications or as mobile apps supported by a web-based service.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=8)** Consequently, web testing is a key skill for a pen tester.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=12)** The cost of not testing web apps can be readily seen in the many examples of data breaches resulting from an insecure website.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=20)** TalkTalk is one of many, and it made headlines.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=24)** The culprit was a 17-year-old boy who used hacking tools and looted email addresses, names, and phone numbers, as well as 21,000 unique bank account numbers and sort codes.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=37)** TalkTalk subsequently tested their websites, but this would've been much more effective before the hack.
>
> **[0:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=43)** There are two main approaches to testing websites.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=47)** The first is to crawl each page in the website looking for vulnerabilities.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=52)** This can provide a good map of where to look for weaknesses.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=56)** The second approach and sometimes the second stage after crawling, is to intercept the website traffic by using a proxy service between the web client and the server.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=66)** In addition, manually checking web pages for comments can be useful, as these have been known to include credentials and commented notes about bugs that require fixing.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=77)** Identifying client side code is also useful as this can indicate ways in which the client can subvert security.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=85)** Another important check is the technologies used for the web server and the protocols used for traffic.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=92)** These can be used to identify known vulnerabilities that may not have been patched and cryptographic weaknesses that can be attacked.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=100)** Websites should use secure transport services to ensure that there's no risk of manning the middle, but many still use H-T-T-P-S and even HTTP.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=111)** In addition, web sockets is a new technology which has been deployed to provide simpler communication for web apps.
>
> **[1:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=117)** Understanding the strengths and weaknesses of the web architecture is useful.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=123)** Another area to look at is user authentication, especially where the website includes e-commerce functionality.
>
> **[2:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=130)** The rules around credit card payments are very strict, and most sites have moved to payment gateways.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=136)** However, the interface between the e-commerce webpage and the gateway is a key area to review.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=143)** Another area is the validation of credentials, and in particular, the risk of injection attacks where a backend authentication server is used.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=153)** If the webpage builds a query string to extract user data, it's a key focus for attackers to exploit.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=160)** Password reset pages are also an area of focus as the interactions are often less well tested than the main access code.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=169)** Of course, websites which have default credentials left in the system or have hard coded credentials stored are prime targets for attack.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=179)** Session management is another area of weakness, and it's useful to test whether an attacker can hijack a session or access a session with an intercepted session cookie.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=190)** Session tokens may also be predictable, which enables an attacker to prepare for an attack when the predicted cookie becomes active.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=198)** There's a lot of ways to attack a web application and a lot to look at when doing web testing.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/approach-web-testing?u=76281980&t=204)** We'll introduce a few tools and techniques that you should be familiar with before you start to look at deeper testing.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** require (1), interface (1)
> **Env Vars:** http (1)
> **Speakers:** - [instructor] (1)

#### Test websites with Burp Suite
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=0)** - [Instructor] The Burp Suite Community Edition comes as one of the tools pre-built into Kali.
>
> **[0:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=5)** I'll select applications, web application analysis, and Burp Suite from the top of the list.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=11)** I won't update it.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=12)** I'll select the temporary project and I'll start Burp.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=16)** The free edition only allows temporary projects and a licenses required if we want to store projects on disc, which is usually required when doing a full customer website test.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=25)** However, the temporary project will be fine for our course.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=28)** Burp Suite creates a new project and opens the main screen.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=32)** The Burp Suite menu is at the top left and offers six main items of Burp, Project, Intruder.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=39)** Repeater, Window, and Help.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=41)** Below these main items, we have Burp activity tabs and we're presented with the dashboard.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=48)** The Target tab has three of its own tabs called Site Map, Scope and Issue Definitions.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=53)** The site map shows the construction of the website and the scope is used to set targets for testing.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=60)** I'll add "[http://zero.webappsecurity.com](http://zero.webappsecurity.com)"
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=71)** The issue definitions tab shows the various website issues that Burp Suite can detect, together with their severity.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=78)** I'll select the Proxy tab next.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=80)** We can see that intercept is on, and this will intercept anything that comes through Burp Suite and allow us to inspect it and possibly change it.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=87)** I'll turn this off for the moment and we'll let traffic flow through.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=91)** I'll go to the options tab and we can see that we are listening on ports 8080.
>
> **[1:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=98)** I'll start Firefox, and we'll set it up for proxy operation.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=103)** I'll go to the preferences.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=108)** I'll go down to the bottom and select "network settings" and we'll set manual proxy configuration for proxy 127.0.0.1, on port 8080.
>
> **[2:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=120)** I can now go to the Zero Bank site.
>
> **[2:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=124)** "[Http://zero.webappsecurity.com](https://Http://zero.webappsecurity.com)".
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=133)** Okay, we're at the bank.
>
> **[2:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=135)** I'll sign in now, using our test credentials of username and password.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=140)** And it is in fact username and password.
>
> **[2:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=153)** And I'm happy to go ahead with this and accept the risk and continue.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=160)** Back in Burp Suite, when we select Target, Sitemap, we can see the traffic to and from the bank which has been captured.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=169)** If I click on the arrow to the left of the site URL in the site map panel, I can see the structure of the site.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=177)** It can expand the lower level structures until I get to individual pages.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=185)** In the right hand panel, I can click on the bank account summary message.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=192)** And the request and response packets are shown in the bottom panel.
>
> **[3:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=196)** By default, these are shown in raw form.
>
> **[3:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=199)** I can also have Burp Suite show me the page as rendered.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=204)** I'll leave any further exploration of Burp Suite for now.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/test-websites-with-burpsuite?u=76281980&t=207)** We'll see more of this tool as we use it to test our websites throughout this course.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), select the (2), click on (2)
> **Code Keywords:** let (1), continue (1), default, (1)
> **URLs:** [http://zero.webappsecurity.com](http://zero.webappsecurity.com) (2)
> **Ports:** port 8080 (1)
> **Env Vars:** url (1)
> **Versions:** 127.0.0 (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### Check web servers with Nikto
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=0)** - [Instructor] Nikto is a fairly simple tool for web scanning.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=3)** It appears in the application menu under vulnerability analysis.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=8)** Let's take a look at it.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=10)** Nikto is used to identify which vulnerabilities exist in the underlying web server.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=15)** Selecting Nikto presents a terminal window and shows its various options.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=19)** I'll run Nikto against my metasploitable host by typing Nikto-H 10.0.2.8.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=31)** The first thing we see is that the web server is an Apache 2.2.8 system running on Ubuntu.
>
> **[0:38](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=38)** This is followed by three notes relating to missing hardening features and advice that the Apache server is out of date.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=46)** Further down we see that Nikto has identified a number of known vulnerabilities from the open source vulnerability database, OS VDB.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/check-web-servers-with-nikto?u=76281980&t=56)** The final summary shows 27 items which need attention.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2)
> **Versions:** 10.0.2 (1), 2.2.8 (1)
> **Definitions:** is a  (1), is an  (1)
> **Code Keywords:** let (1)
> **Env Vars:** vdb (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Fingerprint web servers
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=0)** - [Instructor] Fingerprinting is an important first step in testing a web application, as the environment in which it operates is as important as the application itself, in terms of potential application risk.
>
> **[0:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=12)** While some servers provide banners, others have their banners removed or modified.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=17)** Being able to determine the type of server from its characteristics is important when reading the banner proves futile.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=24)** There are a number of tools available for fingerprinting a web server.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=28)** One of them is httprecon.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=32)** httprecon can be downloaded from the Computec website as a zip file containing the Window's binaries.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=39)** I've downloaded it into my Windows system, into the httprecon folder.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=46)** There are three OCX files that come with httprecon.
>
> **[0:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=50)** These may be missing in Windows.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=52)** They need to be in the SysWOW64 folder and registered.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=56)** We have to be running an administrative command shell for this.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=60)** I'll now run the privilege registration process for all three.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=68)** Okay, that was successful.
>
> **[1:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=78)** As was that.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=85)** And that.
>
> **[1:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=87)** I can now start the httprecon tool.
>
> **[1:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=91)** Once the messages have all been collected, it populates the set of tabs at the top of the main panel with the response messages.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=99)** Okay, the analysis has finished, and we have three tabs at the bottom.
>
> **[1:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=103)** The first is the match list, which provides a ranking of possible web server options with a confidence level.
>
> **[1:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=110)** The result is an Apache 2.0.59 web server with 100% confidence, although the banner does indicate 2.2.8.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=119)** The next is the fingerprint details, which provides a summary fingerprint.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=126)** The final tab is the report preview, which provides an extensive report on the fingerprinting.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=133)** The top menu items also provide for analysis and re-analysis and reporting.
>
> **[2:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=140)** The fingerprinting menu also has options for opening the site in a browser, and for connecting to the Computec online fingerprint database.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=148)** Net Square provides a useful tool for fingerprinting web servers called httprint.
>
> **[2:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=154)** This can be downloaded from the site shown.
>
> **[2:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=157)** It comes down as a zip archive, and the executable program is in the Win32 subdirectory.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=164)** I'll run the gooey version of httprint.
>
> **[2:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=169)** I need to uncheck the options for ICMP and SSL auto detect.
>
> **[2:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=178)** Let's put in the address zero.[webappsecurity.com](https://webappsecurity.com)
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=188)** and point to the test banking website.
>
> **[3:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=191)** I'll change the output file to be zero.html.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=198)** I'll now press the play button at the bottom to check the fingerprint.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=205)** This has now run and extracted the banner showing an Apache Coyote 1.1 server, and has deduced the server to be Apache 1.3 with a 61% level of confidence.
>
> **[3:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=219)** Let's run it again against Metasploitable.
>
> **[3:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=226)** When I run this against the Metasploitable server, it comes back quickly with the banner reported as Apache 2.2.8, which is correct, and the banner deduced as a 2.0.X, with a 57% level of confidence.
>
> **[4:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=242)** Another tool we can use for fingerprinting is Uniscan, which comes with Kali.
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=247)** To do this, we simply point it to the web server using the minus U switch.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=255)** I'll test the Hacme Casino website.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=259)** It's detected the web application is running on a WEBrick Ruby server.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=264)** Again, we can run against the test banking site.
>
> **[4:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=273)** And again, we see it's been detected as an Apache Coyote 1.1 server.
>
> **[4:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/fingerprint-webservers?u=76281980&t=279)** Fingerprinting is an inexact art, but on occasions it can be useful.

> [!info]- Semantic Content
>
> **Versions:** 2.2.8 (2), 1.1 (2), 2.0.59 (1), 1.3 (1), 2.0 (1)
> **CLI Commands:** apache (5), ruby (1)
> **Code Keywords:** let (2), this. (1), this, (1), switch (1)
> **Env Vars:** ocx (1), icmp (1), ssl (1)
> **Definitions:** is an  (3)
> **File Paths:** zero.html (1)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1)
> **Exercise Files:** zip file (1)

#### Web server penetration using sqlmap
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=0)** - [Instructor] Let's take a look at how we approach the initial penetration of a web server using SQLmap.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=6)** To do this, I'll use a target in the LinkedIn learning pen testing lab.
>
> **[0:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=10)** If you want to know more about this lab, check out my Advanced Kali course.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=16)** The target we'll use is the Europa server, which is on address 10.10.10.22.
>
> **[0:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=21)** I've VPNed into the lab and we'll do a deep nmap scan with a minus A switch.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=28)** Nmap -PS -F -A 10.10.10.22.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=39)** Okay, we can see we've got three ports open, SSH on port 22 and both HTTP and HTTPS web services on ports 80 and 443 respectively.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=51)** And we're running an Apache 2.4.18 website.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=56)** We can see the SSL certificate uses the subject name europacorp.htb with alternate names of www.europacorp.htb and admin-portal.europacorp.htb.
>
> **[1:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=72)** This indicates we may be looking at a name server.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=76)** Let's go visit the websites.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=80)** If we go to 10.10.10.22, we can see we've got the default Apache 2 webpage.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=92)** When we go to HTTPS, we have a potential security problem but we'll accept that and continue.
>
> **[1:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=102)** And again, we're at the Apache 2 Ubuntu default webpage.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=111)** Let's add admin-portal.europacorp.htb to our host file and see what we get when we go to the name server, sudo nano/etc/hosts and we'll add 10.10.10.22.
>
> **[2:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=132)** And that will be admin-portal.europacorp.htb
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=143)** and we'll save that.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=148)** Now if we refresh our site, now if we go to the name server, [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb),
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=172)** we now see a login page.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=177)** We can use SQLmap to check for any vulnerable parameters in the website and if it finds exploitable injections, we'll dump the database.
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=187)** To do this, we run SQLmap -u [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb)
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=204)** and we'll tell it to look for forms and we'll tell it to crawl to a depth of 2.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=214)** And if it does find an exploitable parameter, we'll dump the database.
>
> **[3:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=224)** Okay, we'll need to answer a few questions but we'll take the suggested defaults but we'll use 10 threads.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=239)** SQLmap has found the login page and it's identified the database as my SQL and it thinks that email might be injectable and is also vulnerable to a cross scripting attack and we'll let it test for injections.
>
> **[4:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=256)** We've let SQLmap try fuzzy tests and it's identified, there are five columns in the query and that it's union injectable.
>
> **[4:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=265)** This is good news for us.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=268)** SQLmap now offers to exploit the target for us using an SQL injection and it dumps out the database including password hashes and it will even offer to try cracking the password hashes for us and it succeeds.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=289)** Okay, SQLmap has finished and we can see that it's identified a number of injection points.
>
> **[4:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=294)** It's executed the injection attack and successfully dumped out the database and then cracked the password hashes that it found.
>
> **[5:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=302)** SQLmap has done its job and more and we've managed to exploit the target and extract administrative credentials.
>
> **[5:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/web-server-penetration-using-sqlmap?u=76281980&t=310)** There are many different ways to use SQLmap and it's worth spending some time getting used to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), switch (1), continue (1)
> **Env Vars:** https (2), sql (2), ssh (1), http (1), ssl (1)
> **CLI Commands:** apache (3), ssh (1), sudo (1), find (1)
> **Versions:** 10.10.10 (4), 2.4.18 (1)
> **UI Navigation:** go to (3)
> **URLs:** [https://admin-portal.europacorp.htb](https://admin-portal.europacorp.htb) (2)
> **Ports:** port 22 (1)
> **Speakers:** - [instructor] (1)


### 7. Understand Exploit Code

> [↑ Back to Table of Contents](#table-of-contents)

#### Exploit a target
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=0)** - [Instructor] We earlier covered the cyber kill chain and discussed the seven stages of a cyber attack.
>
> **[0:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=6)** Let's take a look in more detail at the delivery and exploitation phases.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=11)** These are the phases in which a pen tester spends most of their time.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=15)** At the delivery phase, the objective is to find a way to deliver a payload to a target.
>
> **[0:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=20)** There are four common ways to do that.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=23)** The first is to send someone the payload as an attachment to an email and have them execute it.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=29)** This could be a malicious executable file, or more usually a document with malicious code installed in it.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=36)** Regardless, the delivery mechanism is the same.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=39)** Another way of delivering a malware payload to a target is to have the target come and get it by sending them an email containing a hyperlink to a malicious website.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=49)** This may be a website which when the user visits it can automatically drop the malware into their system.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=55)** It may be a site which contains trojanized software containing malicious code hidden inside the legitimate code.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=63)** Another way to deliver a payload is to connect to an exposed port and send the malware through the port, or gain access through the port and copy the malware directly in.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=73)** Quite often, this will be achieved by sending a packet which contains an initial exploitation warhead, followed by the payload, which can be carried through in the packet.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=84)** Finally, the malware can be stored on removable media, such as a USB flash drive, in such a way that when it's inserted into the target computer, it automatically runs.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=96)** Once the malware has been delivered, there may be an exploitation phase in which a vulnerability on the target system is exploited to enable the malicious payload to gain access to the system.
>
> **[1:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=108)** In the case of a malicious attachment, the exploitation is a human one, getting someone to run the malware without knowing that it's malicious, or even that any code is running.
>
> **[1:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=119)** It may be an executable attachment, or it may be a document which when opened exploits a vulnerability in the application software, or just simply runs an embedded malicious macro.
>
> **[2:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=131)** We continue to see this technique used with Word documents, PDF files, Flash movies, and spreadsheets in particular.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=139)** The one thing these techniques have in common is that the user is unaware that code is executing.
>
> **[2:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=145)** The next approach is when the delivery was that of a phishing email containing a hyperlink to a malicious site.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=152)** The malicious site will be looking to take advantage of a vulnerability in the browser, which it can exploit to run what is known as a dropper.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=160)** The purpose of this is to drop the payload onto the target computer.
>
> **[2:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=166)** The unauthorized use of credentials is a technique used when a password file has been extracted and cracked, revealing a large number of account user ID password credentials.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=177)** It may also be the result of having intercepted traffic and found credentials in the clear, for instance, in a Telnet session.
>
> **[3:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=184)** The fourth exploitation technique is used when there's a vulnerability in a service exposed to the attacker.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=190)** In this case, the attacker can exploit the vulnerability with an initial malware module, which opens the door into the system.
>
> **[3:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=198)** This is often a technically challenging approach, but potentially a lucrative one, because it may leave no evidence of attack, not even a login record.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=207)** Let's have a look at some examples of attacks and analyze their delivery and exploitation techniques.
>
> **[3:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=213)** The first attack we'll look at is the high profile ransomware WannaCry, or WannaCrypt as it's sometimes known.
>
> **[3:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=221)** The WannaCry campaign delivery mechanism was emails containing an infected ZIP file, which when opened drops the malware into the computer and executes it.
>
> **[3:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=232)** Here, we see the current tracking of WannaCry.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=235)** Half a million, or so currently infected systems tracked.
>
> **[3:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=239)** If we scroll down a bit, we can see there's not much new infection, but lots of existing systems which continue to run as infected hosts.
>
> **[4:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=248)** This indicates a small number of systems are unpatched and still being infected, but most of the campaign has dried up.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=255)** WannaCry is a highly virulent piece of malware, not only having a vicious payload, but also being able to automatically reach out and exploit other systems in the local network, or even across the internet.
>
> **[4:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=268)** So as soon as a few WannaCry targets were hit, they became attack launching pads for propagation to the next layers of targets.
>
> **[4:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=277)** One of the reasons WannaCry was able to do this was through its use of a piece of malware developed by the US National Security Agency called EternalBlue, which used an exploitation technique not known in the public domain, a zero-day.
>
> **[4:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=292)** This was a flaw in the Session Management Block, or SMB software used on Windows systems to manage file sharing and printing.
>
> **[5:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=301)** Analysis has concluded that the initial infection was through an exposed SMB port.
>
> **[5:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=306)** By allowing its technique to become exposed, the NSA allowed the world's cyber criminals to develop a military grade attack.
>
> **[5:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=314)** This malware demonstrated delivery through an exposed service and exploitation through the EternalBlue SMB vulnerability.
>
> **[5:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=323)** The next example we'll look at is the Stuxnet attack on the Iranian uranium enrichment facility.
>
> **[5:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=331)** This was notable in that the target was on an isolated network, not connected to the internet.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=336)** Stuxnet was a very sophisticated attack, reportedly developed and launched by Israel and the United States, and it was executed in two phases.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=346)** The first phase was a network scan to determine exactly what software was running on the isolated network and to map out the topology of the network itself.
>
> **[5:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=356)** This then enabled a second attack to be launched, which targeted the centrifuges used to enrich the uranium.
>
> **[6:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=363)** The original reporting indicated that the attack was able to get onto the isolated network by use of a USB drive and that the USB drive may have been taken in by an agent working in the facility.
>
> **[6:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=376)** Later analysis indicated the attack was a remote breach of a supplier computer and insertion of the malware onto the supplier computer from where it jumped onto a USB stick.
>
> **[6:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=388)** Stuxnet propagated itself around the network using a Microsoft Print Spooler flaw and three other zero-day vulnerabilities to ensure the maximum opportunity to spread.
>
> **[6:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=400)** Once it found the Siemens equipment, which controlled the centrifuges, its injected malicious code into its memory.
>
> **[6:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=406)** This attack demonstrates multiple delivery and exploitation vectors, including a Microsoft Print Spooler zero-day.
>
> **[6:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=415)** Another high-profile case was that of Saudi Aramco, which was the largest attack seen this decade with over 30,000 workstations being taken down.
>
> **[7:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=425)** The delivery mechanism was traced back to a single employee clicking on a malicious website.
>
> **[7:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=430)** The website was able to exploit the browser and drop a backdoor payload onto his computer.
>
> **[7:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=436)** This then allowed the attackers to gain a foothold on the Saudi Aramco network and begin their attack.
>
> **[7:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=443)** The first sign of trouble was when files began to disappear and systems crash.
>
> **[7:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=448)** The Saudi Aramco network was disconnected from the internet, and then when the virus continued to spread, the workstations were disconnected from the local networks.
>
> **[7:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=457)** Subsequent analysis found that the attack was due to the Shamoon virus.
>
> **[7:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=463)** The delivery mechanism was a malicious website, and the exploit was a browser vulnerability.
>
> **[7:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=470)** The final example we'll look at is the Sony PlayStation hack.
>
> **[7:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=473)** This was an external penetration into the PlayStation Network servers, which resulted in the global Sony PlayStation Network being taken down.
>
> **[8:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=482)** The result of this intrusion was the exposure of 77 million credit cards, one of the biggest recorded data breaches.
>
> **[8:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=490)** This was, again, due to a flaw in the SMB software, this time on Red Hat Linux Apache servers, and that was able to be exploited.
>
> **[8:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/exploit-a-target?u=76281980&t=499)** The delivery mechanism was an exposed vulnerable service, which exploited an SMB flaw.

> [!info]- Semantic Content
>
> **Env Vars:** smb (5), usb (4), pdf (1), zip (1), nsa (1)
> **Code Keywords:** let (2), continue (2), finally, (1), case, (1), module (1)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (1), apache (1)
> **Analogies:** such as (1), for instance (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### Finding caves for code injection
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=0)** - [Instructor] The aim of many cyber attacks is to run malware on a target system.
>
> **[0:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=4)** One way of doing this is to provide the malware in the form of a Trojan program.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=9)** This is a piece of software which looks legitimate but isn't, or is a legitimate software product, which has been modified by inserting a piece of malicious code.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=19)** This is possible because an executable program has a well-defined structure of multiple segments, and an attacker can modify these to suit their own purposes.
>
> **[0:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=30)** Windows programs are not simply instructions, they have a complex structure known as the portable, executable, or PE format, one or more parts of which are executable code.
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=44)** Let's examine the structure of a Windows executable file.
>
> **[0:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=48)** The PE file has a collection of fields at a known location that define what the rest of the file looks like.
>
> **[0:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=56)** An important part of the structure is the PE Header, which contains information such as the locations and sizes of the code and data areas, what operating system the file is intended for, and the initial stack size.
>
> **[1:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=71)** It also contains a table of all the sections which make up the remainder of the executable file.
>
> **[1:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=76)** These are either code sections or data sections.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=80)** The PE Header isn't at the very beginning of the file, the first few hundred bytes of a PE file or the MS-DOS stub, a small piece of code that validates the program can run printing out an error message if it can't.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=95)** The PE Header is found by looking up its starting offset, which is stored in the MS-DOS stub header.
>
> **[1:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=101)** Let's have a quick look at the hex dump of an executable.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=105)** I'm using the HXD Hex editor for this, but you can use any hex decimal editor to view the raw executable.
>
> **[1:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=112)** The file starts with the two signature characters, MZ, and we can see the message, "This program must be run under WIN 32," which is displayed if the program is run in another environment.
>
> **[2:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=123)** We can also see the two characters PE at HEXA decimal 0 times 100 which if we look along to the left of the same line, we can see how the hex decimal digits 5045, followed by two 0 bytes.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=139)** The next two bytes are 4C 01, and then we have two bytes which represent a double word value for the number of sections.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=148)** We can see the bytes are 0 B 0 0, which in binary is 0 0 0 B, meaning there's 11 sections.
>
> **[2:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=156)** Fortunately, we don't have to do all the work ourselves.
>
> **[2:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=160)** The team at Winitor has developed a free portable executable viewing tool called PE Studio, and this does all the hard work of analyzing the PE file.
>
> **[2:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=172)** I've got the packeteer executable open in PE studio.
>
> **[2:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=175)** I've selected the DOS header to display the header of the MS-DOS stub.
>
> **[3:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=180)** An important value in the header is the file header offset, which is set to 0 times 100.
>
> **[3:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=186)** This is the value which points to the location of the PE Header.
>
> **[3:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=190)** Following this, if we click the file header, we see the PE Header starting at the signature field, which has as expected a value of PE00.
>
> **[3:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=202)** Following this, we can see the file has an optional header, which when we click it shows the configuration settings for the executable.
>
> **[3:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=211)** There's a couple of items we want to remember from here, the section alignment, which is shown as 1000 and further down the image base, which is shown as 400,000.
>
> **[3:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=225)** If we click on directories, we see the 15 possible sections in a PE file, of which this file has seven.
>
> **[3:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=233)** We can click on sections to see the seven sections plus two text sections.
>
> **[3:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=238)** We can see the raw address.
>
> **[4:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=240)** This is the file offset and the virtual address.
>
> **[4:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=243)** This is where the section will be loaded in memory.
>
> **[4:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=246)** We can see the runtime function, imports and exports.
>
> **[4:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=255)** Another interesting part of the EXE is its manifest.
>
> **[4:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=259)** When we click on this, we see an XML configuration file displayed.
>
> **[4:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=264)** Okay, so we now know the overall structure of the PE file.
>
> **[4:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=269)** Let's now think about how we add code into it.
>
> **[4:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=272)** There are two ways we can inject malicious code into a PE executable: by adding a complete new section and inserting the code into that, or by injecting the code into a code cave, an area in the executable, which is not used.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=289)** We can use a tool called Cminer to show what code caves are available in an executable.
>
> **[4:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=296)** We can download Cminer from the GitHub site using wget.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=303)** Okay, we've got the executable.
>
> **[5:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=305)** We can now set it for execution by using chmod.
>
> **[5:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=311)** Chmod +x Cminer Let's have a look at some standard windows executables, which you might want to inject code into.
>
> **[5:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=321)** The first we'll look at is Notepad, and we'll look for all caves by saying Cminer notepad.exe which I've copied onto my kali system.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=336)** And we see that we have six caves ranging in size from 3, 4, 5 to 511 bytes.
>
> **[5:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=343)** These are all data sections.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=346)** The text section doesn't have a cave.
>
> **[5:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=348)** Another executable we'll look at is putty.
>
> **[5:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=352)** the client commonly used for connecting to remote SSH services.
>
> **[5:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=356)** And again, I've copied that into my kali system, so we can run Cminer against putty.
>
> **[6:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=365)** Again, we have six caves and a number are much bigger than we saw in Notepad.
>
> **[6:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=370)** All these caves are in the data sections, and we'll come back to this issue shortly.
>
> **[6:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=376)** However, there's another issue to think about.
>
> **[6:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=378)** System defenses will often use a form of sandboxing to check whether malware is detected when an executable starts.
>
> **[6:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=385)** If we execute injected code as soon as the program initializes, it's likely to be detected by anti-malware code.
>
> **[6:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/finding-caves-for-code-injection?u=76281980&t=393)** Consequently, Trojans will often trigger their injected code, not at program startup, but at some identifiable user interaction.

> [!info]- Semantic Content
>
> **Env Vars:** dos (4), hxd (1), win (1), hexa (1), pe00 (1)
> **Code Keywords:** let (4), this, (4), for, (1), function (1)
> **CLI Commands:** chmod (2), make (1), wget (1), ssh (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), known as (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Understand code injection
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=0)** - [Instructor] I'll use PuTTY to demonstrate how code injection works.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=3)** I've got it loaded on my VirtualBox Windows 10 system.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=8)** First of all, I'll connect to my Metasploitable server on 10.2.0.8 with PuTTY.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=15)** We get a prompt which says "Login as:" We'll use this as the point to use in our strategy for a delayed jump to the injected code.
>
> **[0:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=24)** Okay, we don't need to log in, so let's close this.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=28)** We now need to use a debugger to step through the executable code.
>
> **[0:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=33)** My preference is the x32dbg tool, which I've got loaded.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=37)** We'll use it to inject code into the cave in the PuTTY executable, and then run the modified code so that we can see the injection working.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=46)** I'll load the executable and I'll select the Memory Map tab.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=52)** I'll select the text segment and Follow in Disassembler.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=57)** This shows me the code section.
>
> **[0:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=59)** I need to find the point in the code at which the login as prompt is displayed.
>
> **[1:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=65)** I can do this by right-clicking, Search for, Current Module, String references.
>
> **[1:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=73)** And enter login as.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=77)** Okay, we can see two references.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=79)** I'll try the reference at 41CB6E.
>
> **[1:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=84)** Let's go there.
>
> **[1:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=86)** Let's take a note of the current instruction.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=89)** Push 467C7C.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=92)** And then we'll change this to a jump.
>
> **[1:35](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=95)** I can double-click the current instruction and enter a new instruction.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=99)** Jump 0x47A495.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=105)** That's a point just inside the cave.
>
> **[1:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=109)** I'll also take a note of the address of the next instruction, 41CB73.
>
> **[1:56](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=116)** We'll come back to this after executing the injector code.
>
> **[2:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=121)** The cave is in the rdata section, so we'll need to load that into the disassembly area using the Memory Map.
>
> **[2:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=133)** Okay, we can scroll down to our cave, and see the section of null bytes, which we'll use to inject the code.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=142)** For the purposes of demonstration, I'll just add a couple of no-op instructions.
>
> **[2:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=146)** That's a single bite, 90 hexadecimal.
>
> **[2:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=149)** And then I'll return back to where we jumped from.
>
> **[2:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=152)** To do this, I'll double-click on the disassembled instruction at the address we jumped to, 47A495.
>
> **[2:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=162)** And I'll enter two no-op instructions for the injected code and then insert the instruction we overwrote and jump back.
>
> **[2:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=179)** I'll set a breakpoint on the first no-op so that we can see the execution when it arrives here.
>
> **[3:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=185)** Let's press the play icon and set it going.
>
> **[3:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=188)** We have to, again, select play.
>
> **[3:12](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=192)** And when we check the taskbar, we can see we have the PuTTY interface.
>
> **[3:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=197)** I'll enter the address for Metasploitable, 10.0.2.8.
>
> **[3:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=205)** And connect.
>
> **[3:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=207)** And we see we've jumped into the injected code.
>
> **[3:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=210)** We can continue by pressing the play button again.
>
> **[3:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=214)** And we now have the login prompt.
>
> **[3:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=216)** So we've proved the injected code.
>
> **[3:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=219)** x32dbg does provide an option to save the changes into a patch file and also to rewrite a patch version of the file, but this may encounter problems saving into data sections.
>
> **[3:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=230)** If it does, you can take a note of the binary changes and apply them using a hex editor.
>
> **[3:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=237)** I've taken a note of the changes we made, and I'll manually insert them into PuTTY using hex edit.
>
> **[4:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=243)** I can search for the hex string, 687C7C46, and we know it was the second one that we want to change.
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=254)** Okay, I have that at 1BD6E.
>
> **[4:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=257)** Let's override that with the string E922D905.
>
> **[4:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=269)** I also need to go and add the injection by matching the last few bytes of the rdata section prior to our injection.
>
> **[4:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=277)** I've identified the injection should be at location 79695.
>
> **[4:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=284)** Let's add the injection.
>
> **[4:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=298)** I've edited the executable, and I can save this into a new file called mutty.
>
> **[5:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=311)** In addition to applying the changes when creating an executable for testing purposes, we need to make sure the section we've modified with injected code is set as executable and we need to recreate the checksum.
>
> **[5:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=322)** We can do this by using the PE editor in the LordPE tool.
>
> **[5:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=327)** I've got this tool loaded on my system, so let's get into it.
>
> **[5:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=332)** To run the PE editor, we first start LordPE, and then select PE Editor, and select the mutty executable.
>
> **[5:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=342)** And the PE contents appear.
>
> **[5:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=345)** Let's firstly look at the sections.
>
> **[5:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=349)** Okay, we have the four sections, and I'll highlight the rdata section that we changed.
>
> **[5:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=355)** When I press right-click, we see a context menu.
>
> **[6:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=360)** I can select edit section header, and the section header pops up.
>
> **[6:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=365)** Now I can press the dotted button by the flags and click Executable as code, and then OK.
>
> **[6:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=378)** Okay, I can leave the sections now.
>
> **[6:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=381)** At the main PE screen, I'll press the question mark by the checksum, and the PE editor will create the new checksum.
>
> **[6:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=389)** That's it.
>
> **[6:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=390)** We can now save the changed executable.
>
> **[6:33](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=393)** When we execute the program, it will run with no warnings and execute the injected code we've inserted as soon as we get to the point of logging into a site.
>
> **[6:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=403)** Using modified executables mimics the activities of an attacker, so it's a legitimate course of action for a deep penetration tester.
>
> **[6:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-code-injection?u=76281980&t=411)** And with the right injection code, it can be a lucrative means of harvesting credentials and demonstrating vulnerabilities.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (1), for, (1), module (1), from. (1)
> **UI Navigation:** select the (3), double-click (2), scroll down (1), right-click (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 10.2.0 (1), 10.0.2 (1)
> **Env Vars:** e922d905 (1)
> **Speakers:** - [instructor] (1)

#### Understand command injection
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=0)** - [Instructor] CV-24576 published in April 2024, identified that the Rust Standard Library prior to version 1.77.2 didn't properly escape arguments when invoking batch files on Windows.
>
> **[0:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=16)** An attacker who is able to control the arguments which are passed to the spawn process that runs the batch file could execute arbitrary shell commands.
>
> **[0:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=25)** It turns out that any language which calls the function to run a batch file is susceptible, including Python.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=31)** This issue, as with other injection attacks, depends upon sending additional data into a target at the end of the expected input.
>
> **[0:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=39)** The input string is crafted to escape the legitimate processing and cause the target to process the additional data.
>
> **[0:47](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=47)** In the case of command injection, the goal is to run additional commands.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=52)** Let's write a simple Python program to read input and send it to a batch file, which will display it.
>
> **[1:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=60)** In the Python script, we read an input message.
>
> **[1:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=63)** We then send bad.bat as the name of the batch file and our input as an argument, and run the batch file as a sub-process.
>
> **[1:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=74)** We then print the response from the batch file.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=77)** For the purposes of this demonstration, we'll create a simple batch file, which just displays the input sent to it.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=85)** Now all we need to do is run our program and send it a command injection string, python badbat.py and the message we'll send to display is "Hello World."
>
> **[1:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=104)** But we'll escape that and add calc.
>
> **[1:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=111)** We get our message returned as we'd expect.
>
> **[1:54](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-command-injection?u=76281980&t=114)** And we also get the Windows calculator popping up as we've managed to inject a command to execute it.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4)
> **Code Keywords:** function (1), let (1)
> **Versions:** version 1 (1), 77.2 (1)
> **File Paths:** badbat.py (1)
> **Speakers:** - [instructor] (1)

#### Understand buffer overflows
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=0)** - [Person] There are a number of ways to achieve remote code execution on a server, and one of the ways is to trigger what's known as a buffer overflow.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=8)** We can do this by sending a malicious exploit packet to an open service that has a buffer overflow vulnerability.
>
> **[0:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=15)** This then results in the target executing code from our packet.
>
> **[0:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=19)** We can see how this works by running a vulnerable program through a debugger.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=23)** Let's do this with MASM so that we can see the instructions clearly.
>
> **[0:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=28)** I've written a small MASM program, which uses the Windows GUI, called "buffalo.asm."
>
> **[0:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=34)** This simulates just a fragment of an application.
>
> **[0:37](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=37)** Take a look at the lines just below the ".data" declaration.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=41)** There's a data field called "Packet."
>
> **[0:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=44)** This is simulating a packet that we've received from an input request for the user's name.
>
> **[0:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=49)** I've put my name there.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=51)** Let's just ignore the commented-out fields for the moment.
>
> **[0:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=55)** Further down, we can see the hello message, which expects to have a name inserted.
>
> **[1:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=61)** Let's look at the lines just below the ".code" declaration.
>
> **[1:04](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=64)** We can see what the program is doing in the first few lines.
>
> **[1:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=68)** It pushes the address of the hello message onto the stack, then pushes the address of the name packet onto the stack, and then, calls the routine "sco" to do a string copy.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=79)** Following that, it displays a message box.
>
> **[1:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=83)** Let's see what happens when we run it.
>
> **[1:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=85)** I'll select "Project," "Assemble & Link."
>
> **[1:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=90)** This assembles and links.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=92)** We can see the OBJ and EXE files here.
>
> **[1:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=96)** And we can then run it.
>
> **[1:40](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=100)** There we go, a Windows message box with our welcome message.
>
> **[1:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=106)** Now, let's change the code to comment out my name, and un-comment the packet, exploit, and payload fields.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=115)** This now simulates a malicious packet, with its three components being sent in as input.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=122)** Let's save this, assemble and link it, and run it.
>
> **[2:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=134)** Now, we get a malicious message.
>
> **[2:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=136)** We've been buffer overflowed.
>
> **[2:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=139)** To see what has happened, we need to run the program through a debugger.
>
> **[2:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=143)** Before we do that, let's take a look at what the "sco" routine is doing.
>
> **[2:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=147)** Let's start at the line below the label "sco proc."
>
> **[2:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=151)** After entering the routine, we save the stack pointer into the EBP register, then load the first parameter, the address of the data packet, from the stack into EBX for later use.
>
> **[2:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=164)** The routine then reserves 32 bytes of local storage for the name, using the "sub sp" command, and then copies the stack pointer into the two registers, EDX and ECX.
>
> **[2:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=177)** One we'll use immediately, and one later.
>
> **[3:01](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=181)** The routine then enters a loop, which reads a character from the packet and stores it into local storage.
>
> **[3:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=187)** It does this by moving a byte from the input pointed to by EBX into the lower byte of EAX, and then saving that byte into the 32-byte area reserved stack, where EDX is pointing.
>
> **[3:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=201)** The address pointers are then both incremented.
>
> **[3:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=204)** This continues until the last character read from the input package is zero, that's the string delimiter.
>
> **[3:30](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=210)** The routine then goes to the next loop, where it inserts the string into the end of the welcome message, starting where it says, "Name here."
>
> **[3:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=219)** The EDI register points to the location where the name is to be inserted, and now, ECX is used to read the name from the 32-byte stack area, byte by byte, and copy it to the welcome message, again terminating at the zero byte.
>
> **[3:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=235)** Finally, the routine releases the 32 bytes of local storage, and returns with a RET 8 to release the two double-words, eight-byte addresses that were placed on the stack prior to entry.
>
> **[4:07](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=247)** Okay, let's see this run step by step in the debugger.
>
> **[4:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=250)** The first thing we'll do is look at the memory map.
>
> **[4:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=254)** We can see that the executable part of "buffalo," the ".text" section, starts at 401000.
>
> **[4:21](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=261)** I'll double-click that, and we'll see the code displayed.
>
> **[4:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=266)** We can see at the right the "hello, name here" message, and the malicious packet filled with the ASCII character A.
>
> **[4:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=274)** I'll set a break point at the first line, and I'll press the play button to run through to our code.
>
> **[4:43](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=283)** Okay, we've run the PE program initialization, and we're now at the start of our code.
>
> **[4:49](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=289)** Before we start running the code, I'll go back to the memory map.
>
> **[4:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=293)** I'll double-click the ".data" section.
>
> **[4:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=297)** We can now see our data fields shown in dump one at the bottom left of the screen.
>
> **[5:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=303)** Let's use F7 to step through, and push the two addresses onto the stack, and call the "sco" subroutine.
>
> **[5:10](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=310)** As we step through the first few instructions of the subroutine, we can see the stack points are being stored into EBP, and the address of the data packet being stored into EBX.
>
> **[5:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=322)** Next, 20 hexadecimal is subtracted from the stack pointer to reserve 32 bytes for the name to be copied in.
>
> **[5:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=329)** Then the address of this 32-byte area is stored into the EDX and ECX registers.
>
> **[5:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=336)** Now we're at the address 401036, and this is the start of the loop.
>
> **[5:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=341)** We can see the jump back to 401036 a few lines down.
>
> **[5:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=346)** We'll go through the loop, copying the name into the stack.
>
> **[5:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=350)** Note at the bottom-right panel that the stack pointer ESP is currently pointing to 19FF58, and the return address to get back to the calling code is 20 hexadecimal further on at 19FF78.
>
> **[6:05](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=365)** Watch the contents of the stack at the bottom right as we step through the loop, copying the name, in this case, the malicious packet data, onto the stack.
>
> **[6:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=374)** We see the zero, hexadecimal 30, and then, As, hexadecimal 41, being copied into the stack.
>
> **[6:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=382)** This continues for all 32 bytes from the packet.
>
> **[6:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=388)** The EDX register is now pointing to address 19FF78, where the return address 40100F is stored on the stack.
>
> **[6:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=399)** However, as we keep stepping through, the routine overwrites the return address with more data from the packet, the four bytes we labeled "exploit," which is the address of the start of the payload code stored in the packet.
>
> **[6:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=413)** The return address is now 403024, and we finished copying the packet onto to the stack.
>
> **[6:59](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=419)** Okay, let's step through the next section of code where we write this from the local area into the message.
>
> **[7:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=428)** That all copies over, and down in the dump area at the bottom left, we now have a message which says, "Hello, 0AAA..."
>
> **[7:15](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=435)** And so on.
>
> **[7:16](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=436)** Let's watch carefully as the routine finishes and returns.
>
> **[7:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=440)** The routine releases the local reserved space by adding hexadecimal 20 to the stack pointer.
>
> **[7:25](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=445)** The stack pointer is now pointing at where the original return address was, which has been overwritten with the address that was in the exploit field.
>
> **[7:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=454)** When we F7 to return, the instruction pointer now points to the code in the packet payload at 403024.
>
> **[7:44](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=464)** The buffer overflow has been activated, and we're now running payload code.
>
> **[7:48](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=468)** Let's step through the payload.
>
> **[7:50](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=470)** We push zero, the addresses of two fields in our packet, and then, zero again, the standard preparation for a message box request, and then, push onto the stack the address of the message box call in our program.
>
> **[8:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=486)** When we return, we display the message box, which now displays the malicious message.
>
> **[8:13](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=493)** We've crafted a malicious packet, which takes advantage of the fact that the "buffalo" program doesn't check how many characters are copied in, despite having only reserved 32 bytes.
>
> **[8:24](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=504)** Unfortunately, this isn't that uncommon in software.
>
> **[8:27](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=507)** The packet we've simulated is a three-stage packet of padding, malicious address, and payload.
>
> **[8:34](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/understand-buffer-overflows?u=76281980&t=514)** We've achieved a buffer overflow, and executed code from our packet.

> [!info]- Semantic Content
>
> **Env Vars:** edx (4), ebx (3), ecx (3), masm (2), ebp (2)
> **Code Keywords:** let (13), return, (2), this, (1), finally, (1), case, (1)
> **UI Navigation:** double-click (2)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** initialization (1), before we start (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [person] (1)

#### Password spraying Active Directory
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=0)** - [Instructor] A common way to retrieve credentials from Active Directory is to spray all accessible accounts with a guessed or known password or a list of passwords.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=9)** There's a number of tools we can use to do this.
>
> **[0:11](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=11)** Let's have a look at the DomainPasswordSpray PowerShell script from dafthack.
>
> **[0:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=17)** I've downloaded the DomainPasswordSpray script from the GitHub site onto my domain workstation, and I'm logged in as the domain user, Sam Spade.
>
> **[0:26](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=26)** I can now import the script and run it in PowerShell.
>
> **[0:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=32)** Import Module DomainPasswordSpray.ps1.
>
> **[0:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=45)** We can run the password spray with just a single password that we've guessed or with a file of passwords.
>
> **[0:53](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=53)** For this demonstration, we'll just use a single password.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=58)** Invoke Domain PasswordSpray -Password, and we'll guess the password for the accounts might be kittykat.
>
> **[1:17](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=77)** We're getting a few warnings, but we can ignore them for the purposes of the demonstration.
>
> **[1:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=82)** And we run the spray and we find that user achtar is using kittykat as the account password.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/password-spraying-active-directory?u=76281980&t=89)** Given that we'd expect around 30% of an enterprise's passwords to be weak, a password spray with a good password file can be a very effective attack.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), let (1), module (1)
> **Tools:** powershell (2), github (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Find exploit code
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=0)** - [Narrator] In the early days of cyber testing, testers had to first discover a vulnerability through vulnerability research and then write an exploit for it.
>
> **[0:09](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=9)** This typically required a high level of debugger and MASM skills and took weeks of effort.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=14)** Nowadays, there are many researchers looking for and publishing the details of vulnerabilities and providing detailed analysis of malware that's been found.
>
> **[0:23](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=23)** These appear on many researchers' GitHub sites, and also on vulnerability advisory sites.
>
> **[0:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=29)** The Malware Archeology site provides links to reports from a number of malware research centers.
>
> **[0:36](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=36)** There are a number of cyber research companies that provide technical research reports.
>
> **[0:41](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=41)** Some provide them for public access while others provide them as a paid threat intelligence service.
>
> **[0:46](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=46)** For example, Malwarebytes Labs shown here is a source of free technical reports.
>
> **[0:52](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=52)** Even with a technical report, it takes a while to develop a working exploit.
>
> **[0:57](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=57)** A source of ready-made exploits for testing is the Offensive Security Exploit Database.
>
> **[1:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=62)** Here we have the full set of exploits on [exploit-db.com](https://exploit-db.com).
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=66)** Let's select the filters button and search for the type remote, and we get a list of remote exploits that are in the database.
>
> **[1:20](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=80)** The screen shows the date, title, platform, and author of the exploit module, and there's three flags, D, A, and V.
>
> **[1:29](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=89)** D provides download of the exploit code.
>
> **[1:32](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=92)** A provides download of the vulnerable application and V indicates that the code has been verified.
>
> **[1:39](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=99)** At the bottom of the first page of remote exploits, we can see the Remote Desktop Web Access attack.
>
> **[1:45](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=105)** If we click on this, we can see that it's a Python exploit that's used with the metasploit testing tool.
>
> **[1:55](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=115)** Legal Hackers is another website which provides details of vulnerabilities, although there's been few updates recently.
>
> **[2:02](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=122)** The site does include proof of concept exploit code, however.
>
> **[2:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=126)** For example, if we select the Git-LFS 2020 vulnerability, and we scroll down, we can see the proof of concept command sequence.
>
> **[2:18](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=138)** Just a note of caution when downloading exploit code from individuals.
>
> **[2:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=142)** Firstly, there could be malicious code included in the exploit, so just double-check the source is legitimate.
>
> **[2:28](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/find-exploit-code?u=76281980&t=148)** Some of these exploits work as written, but some authors will include deliberate mistakes in their exploits as a somewhat annoying way of making sure you can correct their mistakes before you get to use the code, and some just make mistakes.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), let (1), module (1), this, (1)
> **UI Navigation:** select the (2), click on (1), scroll down (1)
> **CLI Commands:** python (1), git (1), make (1)
> **Env Vars:** masm (1), lfs (1)
> **Analogies:** for example (2)
> **URLs:** [exploit-db.com](https://exploit-db.com) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### What's next
> [LinkedIn Learning](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=0)** - [Instructor] I'd really like to thank you for joining me for this course.
>
> **[0:03](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=3)** I hope you enjoyed your introduction to the tools and techniques you'll use as a pentester.
>
> **[0:08](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=8)** Taking this course is just the start of your learning path, which leads to becoming a professional pentester.
>
> **[0:14](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=14)** Having understood the concepts and learnt about how to use some of the basic testing tools, you can now start to gain experience by using them.
>
> **[0:22](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=22)** You can also follow the learning path with more advanced courses in the pentesting series to develop your skills with a deeper understanding of the techniques.
>
> **[0:31](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=31)** There's always something new in cybersecurity, and if you're interested in learning more, then check out the full security segment of the library where new security courses are added regularly.
>
> **[0:42](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=42)** You'll find courses on using Kali Linux, information gathering, viruses and worms, social engineering, denial of service, wireless testing, and much more.
>
> **[0:51](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=51)** I'd like to invite you to go to my LinkedIn Learning author page where you can find some additional courses on cybersecurity.
>
> **[0:58](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=58)** If you want to get hands-on with some of the common tools, then do take a look at Practical Cybersecurity and the Introduction to Kali Linux.
>
> **[1:06](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=66)** If you want to know how to test mobile devices, then check out the mobile devices course, and if you'd like to learn about security for the AWS Cloud, then pentesting AWS with Python is for you.
>
> **[1:19](https://www.linkedin.com/learning/penetration-testing-essential-training-24352676/what-s-next?u=76281980&t=79)** Thanks again for joining me on this course, and I hope to see you again soon for more courses on pentesting and cybersecurity.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), aws (2), python (1)
> **Env Vars:** aws (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Penetration Testing
- Kali Linux

## Path Context

### In [[Explore a Career in Application Security]]
← [[Cybersecurity Foundations Application Security]] | **2 of 7** | [[Learning the OWASP Top 10]] →

### In [[Become a Penetration Tester]]
← [[Introduction to Pen Testing for Cybersecurity Professionals]] | **3 of 8** | [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] →

## Appears In

- [[Explore a Career in Application Security]]
- [[Become a Penetration Tester]]

## Related Courses

_Courses sharing skills:_

- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Penetration Testing, Kali Linux
- [[Penetration Testing Essential Training]] — Penetration Testing
- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing
- [[Advanced Pen Testing Techniques for Active Directory]] — Penetration Testing

---

[↑ Back to top](#)