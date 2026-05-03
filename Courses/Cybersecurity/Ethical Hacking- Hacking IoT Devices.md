---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-hacking-iot-devices-21053658
url: "https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658"
duration_minutes: 123
duration: 2h 3m
level: Intermediate
updated: 4/5/2024
learners: 48040
skills:
  - Ethical Hacking
  - Internet of Things (IoT)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGdBWyUOvcn7g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712000341577?e=2147483647&amp;v=beta&amp;t=CbBOtuTT9pVxu4gB4jdq1sf5OHBgAk-A_4YRFHiIP8Q"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Mobile Devices and Platforms]]'
next_courses:
  - '[[Ethical Hacking- Cryptography]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":16,"total":19,"prev":"Ethical Hacking- Mobile Devices and Platforms","next":"Ethical Hacking- Cryptography"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
  - skill/internet-of-things-iot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Hacking%20IoT%20Devices.md)

![Ethical Hacking: Hacking IoT Devices](https://media.licdn.com/dms/image/v2/D4D0DAQGdBWyUOvcn7g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712000341577?e=2147483647&amp;v=beta&amp;t=CbBOtuTT9pVxu4gB4jdq1sf5OHBgAk-A_4YRFHiIP8Q)

# Ethical Hacking: Hacking IoT Devices

> The number of IoT (Internet of Things) devices deployed is increasing exponentially, which presents significant security challenges. In this course, Lisa Bock covers topics related to the IoT and OT hacking domain from the CEH body of knowledge. Lisa dives into the myriad of security challenges that the IoT faces, highlighting the importance of conducting ethical hacking to unearth vulnerabilities

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658) | 2h 3m | Intermediate | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Hacking IoT and OT systems](#hacking-iot-and-ot-systems)
  - [Getting the most from this course](#getting-the-most-from-this-course)
  - [Hacking ethically](#hacking-ethically)
- [**1. Understanding the IoT**](#1-understanding-the-iot) (5 videos)
  - [Defining the IoT](#defining-the-iot)
  - [Gathering data](#gathering-data)
  - [Exchanging information](#exchanging-information)
  - [Challenge: Enemybot](#challenge-enemybot)
  - [Solution: Enemybot](#solution-enemybot)
- [**2. Recognizing IoT Security Issues**](#2-recognizing-iot-security-issues) (5 videos)
  - [Outlining IoT threats](#outlining-iot-threats)
  - [Identifying OWASP IoT Top 10](#identifying-owasp-iot-top-10)
  - [Reviewing IoT attacks](#reviewing-iot-attacks)
  - [Challenge: INDUSTROYER.V2](#challenge-industroyerv2)
  - [Solution: INDUSTROYER.V2](#solution-industroyerv2)
- [**3. Hacking the IoT**](#3-hacking-the-iot) (5 videos)
  - [Describing IoT hacking](#describing-iot-hacking)
  - [Gathering Intel on IoT devices](#gathering-intel-on-iot-devices)
  - [Evaluating IoT vulnerabilities](#evaluating-iot-vulnerabilities)
  - [Attacking IoT devices](#attacking-iot-devices)
  - [Gaining access to an IoT device](#gaining-access-to-an-iot-device)
- [**4. Controlling Systems with OT**](#4-controlling-systems-with-ot) (5 videos)
  - [Describing OT](#describing-ot)
  - [Listing ICS components](#listing-ics-components)
  - [OT technologies and protocols](#ot-technologies-and-protocols)
  - [Recognizing the challenges of OT](#recognizing-the-challenges-of-ot)
  - [Using MITRE ATT&CK for ICS](#using-mitre-attck-for-ics)
- [**5. Exploiting OT Systems**](#5-exploiting-ot-systems) (5 videos)
  - [Pentesting OT systems](#pentesting-ot-systems)
  - [Providing insights into OT attacks](#providing-insights-into-ot-attacks)
  - [Seeking OT systems](#seeking-ot-systems)
  - [Searching for OT vulnerabilities](#searching-for-ot-vulnerabilities)
  - [Targeting OT systems](#targeting-ot-systems)
- [**6. Defending against Attacks**](#6-defending-against-attacks) (5 videos)
  - [Countering IoT attacks](#countering-iot-attacks)
  - [Managing IoT devices](#managing-iot-devices)
  - [Developing a secure device](#developing-a-secure-device)
  - [Implementing Zero Trust](#implementing-zero-trust)
  - [Designing a secure framework](#designing-a-secure-framework)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Hacking IoT and OT systems](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/hacking-iot-and-ot-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/hacking-iot-and-ot-systems?u=76281980&t=0)** - [Lisa] The [[Internet of Things (IoT)|Internet of Things]] represents a world where billions of devices, such as automobiles, watches, and building automation are all sensing and reacting, talking to us and to each other. However, along with the benefits comes the challenge of defending against cyber threats that are capable of causing physical damage to industrial equipment and can lead to devastating results. In this course, you'll learn the many issues that plague the [[IoT]] and operational technology devices, along with ways malicious actors can launch attacks. Hello, my name is Lisa Bock, and I'm a security ambassador. If you're ready to learn how to secure and manage IoT and OT devices in your world, then let's start this journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (2), [[Internet of Things (IoT)|Internet of things]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [lisa] (1)

#### [Getting the most from this course](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/getting-the-most-from-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/getting-the-most-from-this-course?u=76281980&t=0)** - [Narrator] This course is a basic to intermediate course intended for anyone with an interest in learning more about [[Ethical Hacking]]. This course is part of the Ethical Hacking Series. I'll cover several topics, but I have provided a file for you so that you can follow along. Go to the exercise file link on the welcome screen where you will find a challenges and links document. In the document, I have included the links to the resources that I referenced throughout the course. Additionally, during each segment, I will identify a challenge using the following icon along with a question from the video. Use the document to write out responses to challenges that I cover throughout the course. I am super excited to bring you this course, so sharpen your pencil and let's start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Hacking ethically](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/hacking-ethically?u=76281980&t=0)** - [Narrator] The goal of the [[Ethical Hacking]] Series is to help system administrators understand how to better protect the assets they manage. I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework. The tests and procedures I explore should only be executed on your own system, or a system that you are charged with protecting. If ownership and responsibility lie with another party, be sure to get clear written instructions with explicit permission to conduct ethical hacking activities. Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3)
> **Speakers:** - [narrator] (1)


### 1. Understanding the IoT

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining the IoT](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/defining-the-iot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/defining-the-iot?u=76281980&t=0)** - [Instructor] The [[Internet of Things (IoT)|Internet of Things]] represents billions of devices, collecting and exchanging data. In this segment, we'll discover the components that make up the [[IoT]]. The Internet of Things has several elements that include devices, processes, data, infrastructure, and people. Let's talk about each of these starting with the devices. IoT devices include a range of everyday objects such as thermostats, wearable fitness trackers, home automation systems, and cameras. The devices collect and exchange data using nodes, sensors, and controllers. IoT operating systems are streamlined with minimal processing and memory, and are designed to perform a specific task such as monitoring temperature, or recording video. Processes manage the way people, infrastructure, things, and data all work together. The logic is similar to an OODA loop, which is a cycle of observe, orient, decide, and act. For example, when a car crosses the middle lane on a highway, the sensor will send an audible alert to get back into the correct lane. IoT devices gather data from humans to machine,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/defining-the-iot?u=76281980&t=96)** from machine to machine, or machine to humans through sensors. The data is then transmitted to a central gateway and then to the cloud, which can provide more advanced [[Data Processing]]. The IoT infrastructure is the underlying technology and systems that enables the operation of IoT devices and applications. The infrastructure includes [[Hardware]] components such as sensors, gateways, and servers, along with software components such as operating systems, platforms, and [[Cloud Services]]. People are what drives the Internet of Things and includes consumers, businesses, and governments, which use the devices in their homes, cars, cities, and buildings. Today, the world is only beginning to see the value and potential impact of the Internet of Things in our everyday lives. By 2026, industry experts predict a market size of more than a trillion dollars. This means a future where everyday things all interconnect with the goal of improving overall quality of life. Now, let's test your knowledge. The Internet of Things represents billions of devices collecting and exchanging data. Discuss the components that make up the IoT. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (7), [[Internet of Things (IoT)|Internet of things]] (5), [[Data Processing]] (1), [[Hardware]] (1), [[Cloud Services]] (1)
> **Analogies:** such as (4), similar to (1), for example (1)
> **CLI Commands:** make (2)
> **Env Vars:** ooda (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Gathering data](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-data?u=76281980&t=0)** - [Instructor] [[IoT]] devices collect and communicate information. In this segment, we'll discover the basic construct of an IoT device, and learn how controllers make decisions based on the information they gather. Much of the innovation on the [[Internet of Things (IoT)|Internet of Things]] relies on the millions of low-powered sensors that monitor processes, gather data, and communicate to other devices, and data repositories. If we look at a sensor node as shown in this graphic, we commonly see the following. We see sensors, power, processing capabilities and onboard storage. In addition, many sensor nodes have wireless communication interfaces, and location awareness using a global satellite system, and a positioning algorithm. While sensors can act independently, many times, they're part of a network of sensors to complete some task. Basic elements in a sensor network include the sensor nodes, which are wireless devices with low power requirements that collect and communicate information. Now, each sensor typically has the capability to collect, and route data through the network to the gateway sensor node that can either act as a controller, and make immediate decisions
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-data?u=76281980&t=93)** or send data to a more powerful computer for analysis. A sensor network can exist in a city, hospital or even farm. Every IOT installation can be customized to use a specific type of sensor. As today, there are several types of sensors that have a variety of uses. For example, there are temperature sensors that can detect temperature or heat. In manufacturing, sensors can monitor the temperature of a machine to make sure it stays within a specific range or at home, the sensors can make sure a curling iron doesn't get too hot. Proximity sensors detect motion. When going to an event, sensors can monitor the availability of parking spaces at the event, and send an alert to the car. And at the grocery store or department store, sensors can monitor their customers, and when they get close to an item, they can send coupons for the item directly to their smartphone every day. We're discovering more and more ways to improve efficiency and save time, money and resources. For example, farmers use 70% of the world's water, but because of damaged irrigation systems, and inefficient applications, nearly 60% of it is wasted.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-data?u=76281980&t=187)** We can conserve water by using pressure sensors that can monitor the flow of water through pipes, and then send an alert when the system malfunctions. In addition, sensors can monitor the moisture in the soil and only use water when necessary. Now, let's test your knowledge. Describe the basic construct of an IoT device, and discuss how controllers make decisions based on the information they gather. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (4), [[Internet of Things (IoT)|Internet of things]] (1)
> **CLI Commands:** make (5), node (2)
> **Analogies:** for example (2)
> **Env Vars:** iot (1)
> **Speakers:** - [instructor] (1)

#### [Exchanging information](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/exchanging-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/exchanging-information?u=76281980&t=0)** - [Instructor] The [[IoT]] has many protocols that are used to exchange data. In this segment, we'll explore protocols such as Bluetooth, ZigBee, and 6LoWPAN that are instrumental in moving data in the IoT. A Protocol Suite is a group of interrelated protocols that helps ensure interoperability between network devices. One of the most common networking protocol suites is the internet suite transmission control protocol, internet protocol, or TCP/IP. In general, over time there have not been many significant changes for most protocols. However, the internet protocol had to change, mainly due to a lack of address space. Although we typically think of the internet protocol and IP version six, in particular as essential components for the IoT, not every device needs an IP address. The fact is these tiny devices are not suited for communication that requires customized control and prioritization. IoT devices that ensure industrial control and home automation rely on a meshed topology that generally has a low MTU and lower transmission rate to communicate.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/exchanging-information?u=76281980&t=95)** The devices are small with an 8, 16, or 32 bit microprocessor and have a limited amount of flash memory. In addition, they do not always communicate as they might be in sleep mode when not actively communicating. TCP/IP is instrumental in moving data throughout the networks, but we also need other protocols to move data within the sensor networks. Developers early on felt that low powered IoT devices that have limited processing capabilities had to be able to communicate on the IoT. For objects on the IoT, several protocols exist. Let's talk about some examples, 802.15.4 is a foundational standard protocol for low power, short range wireless communication that serves as the basis for various IoT and wireless sensor network technologies, including ZigBee. Developers can use 802.15.4 with 6LoWPAN and standard internet protocols. 6LoWPAN is an abbreviation for IP version six and low powered wireless personal area network, and this allows for even the smallest devices with limited processing,
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/exchanging-information?u=76281980&t=189)** the ability to transmit information wirelessly using an internet protocol. ZigBee is owned and controlled by a consortium and is built on the IEEE 802.15.4 standard. Developers use ZigBee in personal or home area networks or in a wireless [[Mesh]] for long range networks. Bluetooth is a commonly used protocol to exchange data between devices that are in close range, such as a Bluetooth enabled headset and a phone. and near field communication, or NFC is a standard used when exchanging items in close proximity, usually within a few inches, for example, a cell phone and a reader. Now, let's test your knowledge, discuss protocols such as Bluetooth, ZigBee, and 6LoWPAN that are instrumental in moving data in the IoT. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (9), [[Mesh]] (1)
> **Env Vars:** tcp (2), mtu (1), ieee (1), nfc (1)
> **Definitions:** is a  (4), is an  (1)
> **Versions:** 802.15.4 (3)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Enemybot](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/challenge-enemybot?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/challenge-enemybot?u=76281980&t=6)** - [Narrator] Let's do a challenge. In this challenge, we'll investigate enemy bot a distributed denial of service botnet. Now first I'll take you to this website. Now you'll read this article, the link to this site and the questions are included in the challenge worksheet. Once you read it, there'll be a series of questions. Questions will include, what is EnemyBot and how does it infect devices? What types of commands does EnemyBot support? And what are the three common vulnerabilities targeted by EnemyBot? So pause the video, complete the challenge, and then come back and see what my thoughts were. This challenge should take you about 20 to 30 minutes. Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Solution: Enemybot](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-enemybot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-enemybot?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-enemybot?u=76281980&t=6)** - [Instructor] Okay, now let's check our work. You were to read the article and then answer the questions. So first, what is Enemybot and how does it infect devices? Enemybot is a Mirai-based botnet malware that infects devices through vulnerabilities in modems, routers, and [[IoT]] devices. What makes mapping and taking down Enemybot's command and control server challenging? Well, Enemybot's command and control server convolutes, or obscures information and string values, and it hides behind Tor nodes to help conceal its location. What types of commands does Enemybot support? Well, Enemybot supports various commands, though they're mostly related to DDoS attacks, such as a DNS attack, which will flood DNS servers with hard-coded queries, or an HTTP attack, which will flood the target with HTTP requests. Which commands indicate possible extortion campaigns targeting specific companies? Well, a few of the identified commands were ARK. Now, this is to perform an attack on the servers of the game "ARK: Survival Evolved" or OVH, which will flood OVH servers with custom UDP packets.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-enemybot?u=76281980&t=100)** Now, by launching a targeted DDoS attack, they could disrupt services and demand ransom payments in exchange for stopping the attacks. So what type of architecture does Enemybot target? Well, Enemybot will target a wide range of architectures. Now, this is critical for its spreading capabilities, but one of the types was ARM, which is used in IOT devices, such as smart home appliances, sensors, and wearables. Now, what are the three common vulnerabilities targeted by Enemybot? Well, the three common vulnerabilities are ones that deal specifically with routers and can be exploited by Enemybot to infect devices and expand its botnet. But here you see the commonality, and yes, all three of these are critical vulnerabilities. So how can users prevent Enemybot or other botnets from infecting their devices? Well, you should keep your software and firmware updated, change your default credentials, use strong passwords, enable [[Network Security]] features, and disable any unnecessary services. So the bottom line is before purchasing or installing IoT devices, research the manufacturer's security practices and ensure that they have a good track record
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-enemybot?u=76281980&t=194)** of providing updates and patches for their [[Microsoft Products|products]]. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (3), [[Network Security]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** dns (2), http (2), ark (2), ovh (2), udp (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 2. Recognizing IoT Security Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Outlining IoT threats](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/outlining-iot-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/outlining-iot-threats?u=76281980&t=0)** - [Instructor] Malicious actors are constantly launching attacks and attempting to exploit [[IoT]] vulnerabilities. In this segment, we'll discuss IoT threats and security issues that can allow malicious actors to gain access to a device. Today, the IoT industry is rapidly growing, and manufacturers continue to develop smart devices for businesses and consumers. Concurrently, criminal organizations and malicious actors are investing a significant amount of money, time, and resources in gathering information on IoT devices, along with the ways they can exploit them. As the IoT expands and more and more devices join, it will become easier to launch an attack. A couple of things that are required to launch a successful attack are threats and opportunities. Threats are potential negative or harmful events or conditions that can have adverse effects on an individual, organization, project, or system. Opportunities are favorable or advantageous circumstances or events that make it possible to accomplish something. The threat of a possible attack on IoT devices are real. With the right combination of threats, along with opportunity, malicious actors can exploit a vulnerability
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/outlining-iot-threats?u=76281980&t=96)** to launch an attack or disrupt the integrity of a system. When dealing with the IoT, an attack might not only impact data, but also impact physical security, such as devices used in medical facilities and critical infrastructure applications. So, let's talk about some of the IoT issues and vulnerabilities that can be exploited to gain unauthorized access to a device. One is similar design. Now, several types of systems are mass-produced and similar in their design, meaning one type of attack can be replicated across all similar devices. There's a lack of security updates. Many times, an IoT device is sold once and done, in that vendors do not support upgrading or patching the operating system. Many IoT devices have low power and minimal memory and don't have sufficient resources for traditional security methods. We must also be aware of the issues that can impact [[Privacy]]. IoT devices often collect and transmit sensitive data. Inadequate encryption, insecure [[Data Storage]], or data leaks can compromise the privacy of users and organizations. IoT devices with cameras or microphones can be exploited to invade individuals' privacy by unauthorized monitoring or recording.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/outlining-iot-threats?u=76281980&t=191)** The reality is that when the concept of the [[Internet of Things (IoT)|Internet of Things]] was first developed, enterprise security methods were not taken into consideration. The cost of making a smart device is a relatively small expense, and manufacturers are rushing IoT [[Microsoft Products|products]] to the market. If we don't start addressing security issues and test IoT devices for vulnerabilities, there is a huge potential for a cyber attack. Now let's test your knowledge. Discuss IoT threats and security issues that can allow malicious actors to gain access to a device. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (15), [[Privacy]] (3), [[Data Storage]] (1), [[Internet of Things (IoT)|Internet of things]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Identifying OWASP IoT Top 10](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/identifying-owasp-iot-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/identifying-owasp-iot-top-10?u=76281980&t=0)** - [Instructor] The Open [[Web Application Security]] Project, or [[OWASP]] provides continuous research on common vulnerabilities. In this segment, we'll learn how OWASP can help us understand the common [[IoT]] vulnerabilities across multiple attacks surfaces. First, let's start by outlining the concept of an attack surface. An attack surface represents any known or unknown weakness across an entry point such as software, [[Hardware]], network, and users. With the internet of everything, the attack surface will continue to grow, and all attack surfaces must be monitored. Let's step through an example. In this graphic, we see the extent of the possible attack surfaces of a single vehicle. A malicious actor might be able to launch an attack using a broad range of attack vectors, which can include the following, the anti-lock braking system, keyless entry, and telematics. Now that we understand what's at stake, let's visit the OWASP website where we can explore the many ways that the organization provides updates and continuous research on common vulnerabilities. In addition, OWASP provides a range of resources to help us learn about security and [[Privacy]] best practices.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/identifying-owasp-iot-top-10?u=76281980&t=99)** One of the resources is the IOT Top 10 list, which is a list of the most common IOT vulnerabilities. This list is updated periodically based on the latest research, and can help individuals and organizations prioritize their security efforts. So why is this awareness important? A vulnerable IOT device can lead to several devastating events. For example, we see that weak, guessable or hard-coded passwords are listed at number one. This is dangerous. As malicious actors can use weak or default passwords to achieve the following. They can gain unauthorized access to IOT devices. This can lead to a data breach that can result in severe consequences, including financial loss and or legal liabilities. They can use weak passwords to infect IOT devices with malware, which can then spread to other devices and systems on the network. They can then use compromised IOT devices to launch a botnet attack, which can bring down a website or an entire network. IOT vendors and users should recognize common vulnerabilities and take steps to minimize the threat of an attack. Best practices include, make sure IOT devices
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/identifying-owasp-iot-top-10?u=76281980&t=196)** and systems are updated with the latest security patches and firmware updates. Implement strong authentication and authorization methods including two-factor authentication when possible, use encryption to protect data in transit and at [[Representational State Transfer (REST)|rest]]. Properly configure the device and disable any unnecessary services and protocols, and employ physical security measures such as locking cabinets and secure mounting. Now, let's test your knowledge. Describe how OWASP can help us understand the common IOT vulnerabilities across multiple attack surfaces. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (10), [[OWASP]] (5), [[Web Application Security]] (1), [[Hardware]] (1), [[Privacy]] (1)
> **Env Vars:** iot (10), owasp (5)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing IoT attacks](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/reviewing-iot-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/reviewing-iot-attacks?u=76281980&t=0)** - [Instructor] Testing indicates that approximately 25% of [[IoT]] devices have vulnerabilities, which can lead to an attack. In this segment, we'll explore IOT security attacks, which can lead to more extensive incidents such as DDoS attacks, botnets, and supply chain breaches. IOT devices have vulnerabilities in multiple layers as outlined here. For example, we can see in the application layer there can be insecure software. In the network layer, we can see weak or hard-coded passwords. And in the physical layer, there can be a lack of a secure boot process. Now let's talk about some of the attacks that can occur on an IOT device. We can see physical attacks. Now, physical access can lead to tampering or theft of devices. Attackers can tamper with insecure firmware on an IOT device and insert malicious code. Malicious actors can also use a fault injection attack. Now, this is when a threat actor introduces faults such as electromagnetic interference or errors into a system, which can compromise the security or functionality of a device. We can also see signal jamming, which disrupts the wireless communication between IOT devices
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/reviewing-iot-attacks?u=76281980&t=93)** and prevents them from functioning properly. And attackers may gain unauthorized backdoor access to IOT devices by exploiting weak authentication methods or by using default credentials. On their own, these attacks might not seem consequential. However, once the integrity of a system is modified, this can then lead to more serious attacks. IOT threats are real as they can lead to botnet recruitment. Now, IOT devices are often targeted for inclusion in botnets, which can be used for various cyber criminal activities, such as spamming, [[Cryptocurrency]] mining, or further attacks. IOT botnets can then be harnessed for large scale distributed denial of service attacks. Attackers can then overwhelm networks or online services by controlling a multitude of compromised IOT devices. We could also see man-in-the-middle attacks, which works by intercepting communication between IOT devices and servers, which can allow the malicious actor to alter data or steal sensitive information. And there can also be a supply chain attack. Attackers can compromise IOT devices during manufacturing, shipping, or distribution by injecting malware into the target organization,
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/reviewing-iot-attacks?u=76281980&t=188)** which can then spread to other vendors allowing backdoor access to the entire supply chain. These large scale IO OT attacks can lead to significant and far reaching implications for businesses, organizations, and even individuals. Because of this, it's essential to mitigate threats at the device level. Now let's test your knowledge. Discuss how IOT attacks can have more serious implications such as DDoS, botnets, and supply chain breaches. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (14), [[Cryptocurrency]] (1)
> **Env Vars:** iot (14)
> **Analogies:** such as (4), for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: INDUSTROYER.V2](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/challenge-industroyer-v2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/challenge-industroyer-v2?u=76281980&t=0)** - [Instructor] Let's do a challenge. In this challenge, we'll review the methodology of Industroyer version 2, an operational technology malware variant. You can find the links and the questions on the challenge worksheet. Here are the questions. Provide a general overview of the attack and outline what malware variants were used and describe the most likely culprit. Then answer the following, what does the malware do and what is another name for Industroyer? Then you'll visit Joe Sandbox and list five techniques used in the attack. Now, keep in mind that Joe Sandbox is a public sandbox execution of a malware variant. So this will take a minute to load, and then you can study the results. And finally, list five good practice methods that will help prevent this type of attack. So pause the video and complete the challenge, and then return to see what my thoughts were on this challenge. This challenge should take you between 20 and 30 minutes. Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Versions:** version 2 (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: INDUSTROYER.V2](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-industroyer-v2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-industroyer-v2?u=76281980&t=0)** - [Narrator] Okay, now let's check our work. In this solution we'll review the methodology of INDUSTROYER.V2, an operational technology malware variant. First, you were to go to this page and also this page and read about the attack. Now INDUSTROYER is a sophisticated malware variant used in cyber attacks that target critical infrastructure and was responsible for a cyber attack on the Ukrainian power grid in December, 2016. Some key points about INDUSTROYER.V2 include the following. This variant is primarily designed to target and disrupt electrical power grids and other critical infrastructure components. The malware is modular, allowing attackers to customize and adapt it for specific targets and systems. This flexibility makes it a potent tool for cyber attacks on industrial control and [[SCADA]] systems. It's capable of causing physical damage to industrial equipment by sending commands that disrupt the operation of power substations and grid components. And the malware is designed to be persistent on infected systems, which makes it challenging to remove
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-industroyer-v2?u=76281980&t=94)** once it is infiltrated a network. Now I'll take you to this graphic so we can see what malware variants were used. And here we see that INDUSTROYER and Candy Wiper were used and the most likely culprit was Sandsworm. Next, you were to go to this page and answer two questions. The first question is what does the malware do? Well, INDUSTROYER is an advanced malware framework used to disrupt industrial control systems by targeting electrical operations. And another name for INDUSTROYER is also known as CRASHOVERRIDE and Win32/INDUSTROYER. Next I had you go to Joe Sandbox, which is a public sandbox execution of presumed INDUSTROYER 2 malware samples. And once you're here, you'll see a lot about that malware variant and what was discovered while in the sandbox. Then scroll down to see the Mitre attack matrix. And what's great about this is if you were to click on it, it will tell you a little bit more information on some of the possible ways that it got in and moved around. So I chose five techniques used in the attack that include the following. It used input capture that was most likely a key logger. It attempts to get security software discovery
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/solution-industroyer-v2?u=76281980&t=189)** such as firewall rules and antivirus. It obscured files or information and had the ability to hide in plain sight. It attempts system information discovery to read software policies and uses process injection to escalate privileges. And finally, you are to go to this page and then scroll down to the section Securing OT in a Connected World. And then list five good practice methods that will help prevent this type of an attack. First, you should restrict physical access. Next, you need to protect individual operational technology components from compromise. Secure your supply chains and provide business continuity planning. That includes managing [[Incident Response]] capabilities and ensuring operational redundancy. And finally, restrict network access with zero trust policies. Now some final thoughts on this malware variant. I found that the discovery of INDUSTROYER V2 has raised awareness about the vulnerabilities of critical infrastructure to cyber attacks. Efforts now are being made to enhance the security of industrial control and SCADA systems to mitigate the risk posed by such malware. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (2), [[Incident Response]] (1)
> **Env Vars:** industroyer (9), scada (2), crashoverride (1)
> **UI Navigation:** go to (4), scroll down (2), click on (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Hacking the IoT

[↑ Back to Table of Contents](#table-of-contents)

#### [Describing IoT hacking](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-iot-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-iot-hacking?u=76281980&t=0)** - [Instructor] [[IoT]] Device hacking involves exploiting vulnerabilities to alter the integrity of an IoT device. In this segment, we'll learn the steps the ethical hacker can use to gain access to control and or manipulate an IoT device. First, let's talk about why this exercise is important. IoT devices are plagued with multiple vulnerabilities. An [[Ethical Hacking]] exercise is an effective step that we can take to see what vulnerabilities malicious actors can exploit. The general scenario for IoT hacking will generally follow a process and will move through several phases that is similar to any ethical hacking exercise. So let's talk about each phase and what activities occur. Phase one is the reconnaissance phase. Now this is where we'll identify the target and then gather as much as we can about the target, including make and model, software version, and any known vulnerabilities. In addition, it's common to search for public information about the device, such as [[Technical Documentation]], user manuals, or firmware images available online. Phase two involves scanning using automated scanning tools or [[Manual Testing]], the team will search for open ports, services,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-iot-hacking?u=76281980&t=95)** and vulnerabilities on the target device. Common vulnerabilities include weak or default passwords, outdated firmware, unpatched software, and insecure network configurations. Phase three is gaining access. After scanning the network and identifying vulnerabilities, the next step is to launch exploits with the goal of gaining access to the system. For example, the team might try to log in using brute force or known default username and password combinations. If the exploit is successful, the team can then try to gain access to the device and possibly have control over the device's function and data. Phase four is maintaining access. Once in the system, the key is to maintain access and continually escalate the privileges to the administrator level. The key is to be careful in this phase as the longer the team maintains access, the better chance at being caught. Ideally, the team will try to install a back door so they can have access to the target at any time. Phase five is covering tracks. After achieving and maintaining access, it's time to exit the system. Before leaving, the final phase is to clean up any evidence by removing tools, clearing logs, resetting passwords,
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-iot-hacking?u=76281980&t=193)** and closing ports. Now let's test your knowledge outline the steps the ethical hacker can use to gain access to control and or manipulate an IoT device. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (6), [[Ethical Hacking]] (2), [[Technical Documentation]] (1), [[Manual Testing]] (1)
> **Best Practices:** the key is (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Gathering Intel on IoT devices](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-intel-on-iot-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-intel-on-iot-devices?u=76281980&t=1)** - [Instructor] To launch an attack on an [[IoT]] device, the team must first learn about the devices on the network. In this segment, we'll discover information gathering techniques and tools such as MultiPing and FCC ID search to assess and learn about local and remote IoT devices on the network. There are many information gathering applications available that help provide the necessary tools for an effective reconnaissance exercise. A few goals at this stage is to see what devices are on the network, and then once identified, take steps to learn more about the devices. The team can begin by conducting a ping sweep using tools such as MultiPing, [[Nmap]], and PRTG Network Monitor. A ping sweep will send probes to multiple hosts simultaneously to identify live hosts and then report on what devices are awake and listening. However, even though this might be part of the exercise, you should use caution when pinging IoT devices for a couple of reasons. Aggressive pinging can deplete resources. Repeatedly sending a large number of pings to an IoT device can result in depleting processing capability, memory, and battery power. It can also create excessive network congestion.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-intel-on-iot-devices?u=76281980&t=99)** In large scale IoT deployments such as industrial or smart city applications, continuous pinging of numerous devices can contribute to network congestion. This can then result in delays in data transmission and potentially hinder the [[Real-Time]] capabilities of IoT systems. Now once the team identifies the listening devices, the team will need to gather information on the various IoT devices to see if they can compromise the integrity of the device. Now this discovery is done for a number of different purposes. One is so that we can understand the device design. The team will want to review documentation to gain insights on the device's components, including microprocessors, communication interfaces, and potential attack services. We also want to study what communication protocols that are used by the device along with possible security considerations. Another reason is to determine the wireless technologies, for example, [[Wi-Fi|WiFi]], Bluetooth, or Zigbee that are used by the device to help assess potential wireless attack vectors. And we'll also want to check compliance. Now, once done, we can review the test reports to see if the device complies with regulatory standards. This information might reveal security features
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-intel-on-iot-devices?u=76281980&t=195)** or vulnerabilities. Now, one way we can gather information is by using what's called FCC ID search, and I'm here at this page [fcc.gov](https://fcc.gov). And here we can see FCC ID search form. Now in this you're going to input some information. There's the first three or five characters of the FCC ID and then the product code, which are the remaining characters of the FCC ID. So I entered that information and it brought me to this page here. And we can go in and take a look at the detailed summary. But I have another site I'd like you to take a look at. In this case, it's [fccid.io](https://fccid.io). And here we go to a searchable FCC ID database. Now in this case, we put the entire FCC ID code in the search, and then that will bring up this page here. And what I'm going to do is if you scroll down, it provides a lot more information and I'm going to show you the exhibits that are available. And here we have the user manual, internal photos, external photos, and I'll just click one of those so you can see what it can provide for us. So when you're doing your reconnaissance, this is the kind of material I'm looking for so I can really get a feel for
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gathering-intel-on-iot-devices?u=76281980&t=288)** what that device is made of. And with information like this, it will help my attack go maybe a little bit easier. Now let's test your knowledge. Discuss information gathering techniques and tools such as MultiPing and FCC ID search to access and learn about local and remote IoT devices on the network. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (8), [[Nmap]] (1), [[Real-Time]] (1), [[Wi-Fi|Wifi]] (1)
> **Env Vars:** fcc (8), prtg (1)
> **Analogies:** such as (4), for example (1)
> **URLs:** [fcc.gov](https://fcc.gov) (1), [fccid.io](https://fccid.io) (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating IoT vulnerabilities](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/evaluating-iot-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/evaluating-iot-vulnerabilities?u=76281980&t=0)** - [Instructor] A vulnerability is a flaw in a system that a malicious actor can exploit in order to gain unauthorized access to an asset. In this segment, we'll outline tools and techniques used to uncover [[IoT]] vulnerabilities and reduce the risk of an attack. Today, businesses and consumers are recognizing the value of integrating IoT [[Microsoft Products|products]] and systems into their infrastructure and homes, but are they secure? When dealing with the IoT, the potential for cyberattacks along with compromising [[Privacy]] is increasing due to gaping vulnerabilities found within many different types of devices. Researchers have scanned the internet and found hundreds of thousands of vulnerable IoT devices, which can pose serious security risks. Issues include lack of physical security. These small devices such as IP cameras can be located in several areas, many in plain sight, where they could be damaged or stolen. Hard-coded configurations can occur as well, such as the device having backdoor access or configured to phone home as soon as the device is activated. Many times we see outdated firmware and [[Hardware]]. Many IoT devices do not ever receive updates to the system.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/evaluating-iot-vulnerabilities?u=76281980&t=99)** And even if an update is available, the device may not have an option to automatically update. And there's poorly designed code which can lead to an attack, and that can include buffer overflows, [[SQL]] injection, SYN flood, and privilege escalation. For these reasons, it's essential to test IoT devices for vulnerabilities. The team will try default or weak credentials, check for open ports, and attempt to determine known vulnerabilities. Commonly, the team will use apps that can help you identify known vulnerabilities in the devices, the communication methods used, along with the interfaces on the device. Tools include Nessus, OpenVAS, [[Nmap]], IoT protocol analyzers, or specialized or proprietary tools. I'd like to show you a few examples. I'm here at this site where we can see an example of Nmap with IoTVAS API integration. Now, I'm going to scroll down here, and it talks about how this works. And in this section we see how to integrate IoTVAS with the Nmap network port scanner. And then here down below, we see actually a demonstration of how IoTVAS can help a user spot
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/evaluating-iot-vulnerabilities?u=76281980&t=192)** a remotely-exploitable vulnerable busybox package. And this goes through and it tells you the CVE and also some of the firmware information. And then I'll scroll down below here, 'cause this example shows how IoTVAS NSE scripts help Nmap to accurately detect the maker, model name, and firmware version of an enterprise printer. And it's very powerful stuff, 'cause this really clearly helps you identify what's on your network. Now we'll go to Foren6, and this is a 6LoWPAN network analysis tool that uses passive sniffing to recreate network data in both visual and textual representations. And I'll just scroll down here and this gives you an example of what you might see. And here I'll go to this page and it talks about Fing. Fing is a popular network scanning app that can help identify devices on your network and then provide information about communication protocols and interfaces, and it can be used with both [[Android]] and iOS. And I'm going to just scroll down here because it talks about the router vulnerability check. And this is something that you probably should do just to see if your router is vulnerable. Now we'll go to IoT Inspector.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/evaluating-iot-vulnerabilities?u=76281980&t=287)** Now, IoT Inspector is designed specifically for identifying and analyzing IoT devices on your network and the communication protocols they use, and this is available for Android. Now, for some screenshots, we'll go here, and I'll just show you here, kind of goes through and steps you through installing it and then running the IoT Inspector. And finally, the team should scan for open ports and ensure that only the necessary ports are open and that they are properly secured. Now, for example, I'll take you here to this site, which is an open port checker that you can use to check your external IP address and identify any open ports that are visible to the internet. This can help you identify potential security risks that could be exploited by malicious actors. And what I did was I put in there, that is the IP address of scanme.[nmap.org](https://nmap.org), and this is an open site you can scan. So for example, I'll just say check port 80 to see if it's available. And here we see that port 80 is closed, and you can check any of the other common ports if you like. The one thing to keep in mind is that sometimes vulnerabilities are not detected by automated scanners, so the team may have to conduct [[Manual Testing]]
>
> **[6:22](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/evaluating-iot-vulnerabilities?u=76281980&t=382)** to interact with the devices through their interfaces. Now let's test your knowledge. Outline tools and techniques used to uncover IoT vulnerabilities and reduce the risk of an attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (12), [[Nmap]] (5), [[Android]] (2), [[Microsoft Products|Products]] (1), [[Privacy]] (1)
> **UI Navigation:** scroll down (4), go to (3)
> **Env Vars:** sql (1), syn (1), api (1), cve (1), nse (1)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** such as (2), for example (2)
> **Ports:** port 80 (2)
> **Code Identifiers:** ios (1)
> **URLs:** [nmap.org](https://nmap.org) (1)

#### [Attacking IoT devices](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/attacking-iot-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/attacking-iot-devices?u=76281980&t=0)** - [Narrator] Once the team identifies the vulnerabilities of an [[IoT]] device, the next logical step is to attempt an attack. In this segment, we'll discuss attacks on IoT devices, such as side-channel, BlueBorne, and replay attacks. IoT devices are vulnerable to a variety of attacks for many reasons. That include insecure design and implementation and a rapidly evolving threat landscape. So let's talk about some examples of attacks that can cripple or take control of a device using one or more software and [[Hardware]] tools and frameworks. One type of attack is a side-channel attack, which targets physical vulnerabilities. It typically involves monitoring power consumption, electromagnetic emissions, or other physical characteristics to extract sensitive information such as encryption keys. To test for possible side-channel attacks on embedded devices, the team can use ChipWhisperer, an open source tool used for testing. And I'm here in this page, and we'll scroll down so you can see some examples. The BlueBorne attack allows an attacker to remotely take control of a device
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/attacking-iot-devices?u=76281980&t=95)** through Bluetooth connections without requiring any user interactions by exploiting a Bluetooth vulnerability in the target device. To test for this, the team can use HackRF One, a software defined radio device that intercepts or manipulates Bluetooth signals to gain unauthorized access or control over a device. And I'm at this website where you can see an example of HackRF One. A replay attack involves recording and then replaying a captured signal to a target device or system to mimic a legitimate command. For this, the team can also use the HackRF One, which will capture a wireless signal from a remote-controlled device, such as a key fob. The code is then replayed to gain unauthorized access or control over a target device or system. We might also try hacking Zigbee devices. Zigbee is a wireless communication protocol commonly used in IoT devices. Hacking with this framework involves assessing the security vulnerabilities of Zigbee-based IoT devices, potentially with the purpose of exploiting or improving their security.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/attacking-iot-devices?u=76281980&t=189)** To test for this, the team can use the Attify Zigbee framework, a toolkit used for testing and assessing the security of Zigbee wireless communication devices. Another possible attack on IoT devices is a jamming attack, which intentionally disrupts the wireless communication between devices and their network or central control system. A jamming attack works by emitting electromagnetic interference in the same frequency band that is used for communication. This interference can cause IoT devices to lose connectivity, become unresponsive, or malfunction. And I'm here at this site where you can see some examples of jammers. Now, one attack that uses multiple techniques is a RollJam attack, which is designed to intercept and jam the signals sent between a car key fob and the vehicle. Let's step through the process. When a car owner presses the button on their key fob to unlock or lock the car, it sends a radio signal with a rolling code, which is a unique and constantly changing security code. Now, while the RollJam device is jamming the signal, it also captures and stores the rolling code that the key fob transmitted
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/attacking-iot-devices?u=76281980&t=284)** during the attempted lock or unlock action. And then finally, the attacker then uses the stored rolling code to unlock the car at a later time. Since the code was never used when it was initially sent by the key fob, the car still recognizes it as a valid code and unlocks. Now let's test your knowledge. Discuss attacks on IoT devices, such as side-channel, BlueBorne, and replay attacks. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (8), [[Hardware]] (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (4)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### [Gaining access to an IoT device](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gaining-access-to-an-iot-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gaining-access-to-an-iot-device?u=76281980&t=0)** - [Tutor] To alter the behavior of an [[IoT]] device, the team will need a method to get in and interact with the device. In this segment, we'll outline ways to gain and maintain access to an IoT device. If a malicious actor gains access to an IoT device, they might be able to manipulate the device's functions or use it for malicious purposes. For example, they might be able to turn off a security camera, change thermostat settings, or even lock or unlock a smart door. Therefore, testing to see if you can gain access to a device will help you recognize and mitigate any vulnerabilities. So let's talk about a few ways that you can gain access to a device. NAND Glitching is a [[Hardware]] attack technique used to manipulate NAND flash memory chips by applying voltage glitches or timing attacks to disrupt the normal functioning. This can potentially cause the device to enter an unstable state where it can be read or written to in unintentional ways. We can also use software-defined radio attacks on IoT devices. Software-defined radio is a technology that allows for flexible and programmable radio communication. Attackers can use software-defined radio to intercept,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gaining-access-to-an-iot-device?u=76281980&t=94)** modify, or jam the wireless signals used by IoT devices potentionally leading to unauthorized control or disruption of IoT systems. One way to launch this attack is by using the real tech software-defined radio or RTL-SDR, which is a popular inexpensive SDR receiver dongle. And I'm here on this page where you can see some examples. Now, we might also want to maintain access by exploiting firmware. Now firmware is a type of software that is embedded into hardware devices to control the way they function. A malicious actor can exploit firmware vulnerabilities to maintain access to a device or system, which can involve modifying or replacing the firmware to create a backdoor for future access. And another way to gain remote access is by using Telnet to control or interact with the system. Attackers can exploit Telnet to gain unauthorized access to a system if there are weak security measures or if default passwords are not changed. For example, the Mirai botnet scans the internet looking for open Telnet servers running on either port 23 or port 2323. Now to see what devices are exposed, we can go to Shodan,
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/gaining-access-to-an-iot-device?u=76281980&t=188)** which is a search engine designed to locate an index IoT devices that are connected to the internet. And what I did was put in Telnet and ran the search. And if we scroll down here, we can see thousands of devices that are exposed. Now let's test your knowledge, outline ways to gain and maintain access to an IoT device. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (8), [[Hardware]] (2)
> **Env Vars:** nand (2), sdr (2), rtl (1)
> **Definitions:** is a  (5)
> **Ports:** port 23 (1), port 2323 (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** for example (2)
> **Speakers:** - [tutor] (1)


### 4. Controlling Systems with OT

[↑ Back to Table of Contents](#table-of-contents)

#### [Describing OT](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-ot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-ot?u=76281980&t=0)** - [Narrator] Operational technology and industrial control systems are used to drive efficiency and connectivity in industrial sectors. In this segment, we'll explore fundamental concepts, components, and principles of operational technology systems. First, let's talk about the concept of operational technology. Operational technology refers to the sensors, software and protocols that are used to monitor and control machinery, processes and infrastructure in industrial environments. operational technology systems are used in areas such as food manufacturing, power regulation, and water treatment plants. Now, within the realm of operational technology, there are subsets. The first subset is industrial control systems, which are used to control industrial and critical infrastructure assets. Another subset is [[SCADA]], or supervisory control and [[Data Acquisition]]. These systems are centralized systems that monitor and control processes and machinery that are used in industrial settings. Within the realm of operational technology systems, there are other industrial control systems and devices that include sensors, human-machine interfaces, programmable logic controls,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-ot?u=76281980&t=95)** and distributed control systems. A related concept is the industrial [[Internet of Things (IoT)|internet of things]], or Industry 4.0. The industrial internet of things is a compliment to an industrial control system as it merges the control functionality of the control systems with the data collecting ability of an [[IoT]] device. Now, why is this beneficial? Well, IOT devices collect a large volume of data that can be used in the following ways. We can use it to make logic decisions when controlling systems and we can use it to make business decisions when projecting future needs. Now, one of the more significant facts is that industrial control systems control critical infrastructure resources such as water, electrical grids, transportation, telecommunication, and health services. If critical infrastructure resources are damaged or destroyed, this can lead to a substantial adverse impact. Many industrial control systems were established years ago, and as a result, are considerably outdated. As more and more industrial control systems are becoming more connected, there is a greater opportunity for exploitation. So now more than ever,
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/describing-ot?u=76281980&t=187)** it's essential to test the security of operational technology systems by conducting an [[Ethical Hacking]] exercise and mitigate weaknesses before any damage is done to our economy, [[Public Health]], safety and security. Now, let's test your knowledge, discuss fundamental concepts, components, and principles of operational technology systems. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Internet of Things (IoT)|Internet of things]] (2), [[IoT]] (2), [[SCADA]] (1), [[Data Acquisition]] (1), [[Ethical Hacking]] (1)
> **Definitions:** is a  (2), refers to (1)
> **CLI Commands:** make (2)
> **Env Vars:** scada (1), iot (1)
> **Analogies:** such as (2)
> **Versions:** 4.0 (1)
> **Speakers:** - [narrator] (1)

#### [Listing ICS components](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/listing-ics-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/listing-ics-components?u=76281980&t=0)** - [Instructor] Industrial control systems are comprised of several elements that are used in automation and control processes. In this segment, we'll discuss some of the components. An [[Ethical Hacking]] exercise on an industrial control system is different than testing in an IT environment. So that you understand the complexity of what you might need to test, I'll briefly describe some of the elements that you might find during testing. First, let's talk about [[SCADA]] systems. SCADA or supervisory control and [[Data Acquisition]] is a centralized system that monitors and controls processes and machinery used in industrial settings. SCADA has multiple applications and runs behind the scenes in a variety of locations such as production systems, refineries, and supermarkets. Another component of industrial control systems are distributed control systems, which are used in settings such as manufacturing and power generation to monitor and control processes and equipment within a facility. In this graphic, we see how a network of controllers and computers work together to manage and automate tasks such as regulating temperature, pressure, flow, and other critical parameters. A [[Programmable Logic Controller (PLC)|programmable logic controller]] automates and controls machinery and processes
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/listing-ics-components?u=76281980&t=96)** in manufacturing and industrial applications. It does this by executing logic-based tasks and monitoring inputs from sensors and switches, and then making decisions based on the input. I'd like to show you an example of a [[PLC]] code segment. Now keep in mind that the programming instructions can vary based on the software being used. Now in this case, the device will shut down if it becomes too hot. Now within the code, we see the following elements. The start button is a manually operated start button. The temperature sensor represents a sensor or a probe. Temp greater than 100 degrees Fahrenheit is a comparison condition that will check to see if the temperature exceeds 100 degrees Fahrenheit. An alarm is a signal used to activate an alarm when the temperature exceeds the threshold. Now for the next two components, we'll use this graphic. Here we see a basic process control system along with a safety instrumented system. The two are similar in that they both have a sensor and an actuator, however, there is a key difference between two. A basic process control system focuses on the day-to-day operation and regulation of essential processes
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/listing-ics-components?u=76281980&t=189)** such as temperature, pressure, and flow within a facility. The system is responsible for maintaining process variables within desired ranges to ensure the efficient and safe operation of the plant. A safety instrumented system monitors the process to help prevent dangerous events by bringing a process to a safe condition without human intervention. Components include the following. There are sensors that measure pressure, flow, and temperature and can detect out of the limit process conditions. The logic solver performs logical functions and makes decisions based on input. And the final control elements provide on/off valves to shut down or limit the flow in the process. Now, let's test your knowledge. Discuss industrial control system components that include SCADA, distributed control systems, programmable logic controller, and basic process control systems. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (4), [[Programmable Logic Controller (PLC)|Programmable logic controller]] (2), [[Ethical Hacking]] (1), [[Data Acquisition]] (1), [[PLC]] (1)
> **Env Vars:** scada (4), plc (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (4)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [OT technologies and protocols](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/ot-technologies-and-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/ot-technologies-and-protocols?u=76281980&t=0)** - [Instructor] Operational technology encompasses a wide range of technologies and protocols that are used in industrial environments. In this segment, we'll outline key operational technology protocols and standards that include Modbus, [[PROFIBUS]], Highway Addressable Remote Transducer, and OLE for Process Control. When we think about operational technology protocols, one category of communication protocols used are the fieldbus protocols. These protocols and technologies play essential roles in industrial automation and process control, facilitating communication and data exchange between various devices and systems in industrial settings. Let's talk about a few of the fieldbus protocols. Modbus is a simple, open communication protocol that allows communication between different industrial devices, such as sensors, remote terminal units, and PLCs. Modbus is known for its ease of implementation and compatibility with a wide range of devices. Modbus includes three main protocol types, Modbus RTU for serial communication, Modbus ASCII for transmitting messages using ASCII characters, and Modbus TCP for ethernet-based communication.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/ot-technologies-and-protocols?u=76281980&t=97)** PROFIBUS, or Process Field Bus, is another communication protocol that is often used for [[Real-Time]] control and monitoring applications in various industries, including manufacturing, chemical processing, and water treatment. HART, or Highway Addressable Remote Transducer, is a hybrid communication protocol used in process industries for communication with field instruments, such as pressure transmitters, flow meters, and temperature sensors. HART allows for real-time measurement data to be transmitted along with device diagnostics and configuration information. OLE for Process Control, or [[OPC]], is not a communication protocol, but rather a set of industry standards and specifications. OPC provides interoperability among different devices and software applications in the process control and automation field. By using a client [[Server Configuration]], devices and systems using OPC can easily exchange data. Now let's test your knowledge. outline key operational technology protocols and standards that include Modbus, PROFIBUS, HART, and OPC. You can record your answer on the Challenge Worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OPC]] (4), [[PROFIBUS]] (3), [[Real-Time]] (2), [[Server Configuration]] (1)
> **Env Vars:** opc (4), profibus (3), hart (3), ole (2), ascii (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Recognizing the challenges of OT](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/recognizing-the-challenges-of-ot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/recognizing-the-challenges-of-ot?u=76281980&t=0)** - [Instructor] Reducing risk when using operational technology can be challenging as a malicious actor can gain access to a system in one of several ways. In this segment, we'll review the challenges of securing operational technology. That includes threats, attacks, and vulnerabilities. If a system is not properly secured, this can make a system vulnerable to threats and attacks. Those include denial of service attacks, viruses and malware, social engineering, and physical attacks. [[IoT]] and OT devices are notorious for their poor security and several major exploits have been seen in the wild. Let's review some of the vulnerable components that can occur in operational technology systems that can be exploited by a malicious actor to gain access to the infrastructure. Vulnerabilities can include outdated or flawed software, weak access controls, lack of security patches, and insecure network configurations that can lead to a system compromise. Another issue that can expose a system to an attack is management interface vulnerabilities. Now, when running an enterprise network, it's common to use an application such as an intelligent platform management interface.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/recognizing-the-challenges-of-ot?u=76281980&t=95)** As shown here in the graphic, this makes it easier for the administrator to monitor and control the servers via a central interface. However, if the management interface is not properly configured, it can expose the network and allow a malicious actor to have direct access to the network. In an operational technology environment, devices communicate with each other and perform specialized functions. For example, we see here in this graphic field devices such as a motor, switch, sensor, and valve in a [[DCS|distributed control system]] all communicating with each other. However, the problem is in some cases, the devices come with pre-configured default settings, such as a username and password. In addition, the manufacturer may have hard coded the credentials, which makes it difficult, if not impossible to remove. In some cases, the vulnerabilities exist as a result of human error along with improper or missing configurations. For example, leaving the username and password as the default or leaving the password blank can leave your system open to an attack. In addition to default passwords. There can also be flaws in the way the system handles errors.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/recognizing-the-challenges-of-ot?u=76281980&t=189)** Well. Now, how does this happen? When writing code or configuring a system, a programmer might include error messages that can help during the troubleshooting process. However, in some cases, error messages might provide too much detail. That can include user credentials, software versions, along with configuration settings. For example, the following message will provide the full path name. This information could lead to a directory traversal attack, which can allow access to commands, files, and directories that may or may not be connected to the root directory. While error messages are beneficial when getting to the root of the problem, the end user does not have to have that level of detail. A better approach would be to offer minimal information in the message. For example, by displaying the following, unable to connect, please contact support. Now let's test your knowledge. Review the challenges of securing operational technology. That includes threats, attacks, and vulnerabilities. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (1), [[DCS|Distributed control system]] (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Using MITRE ATT&CK for ICS](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/using-mitre-att-ck-for-ics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/using-mitre-att-ck-for-ics?u=76281980&t=0)** - [Instructor] [[Ethical Hacking]] in an industrial control system environment can be overwhelming. In this segment, we'll outline how to use MITRE ATT&CK for Industrial Control Systems during an ethical hacking exercise. First, let's talk about Mitre. Mitre is a US-based nonprofit organization that provides research, publications, and tools that are freely available for anyone who accesses the site. One of the tools that you can find is MITRE ATT&CK, or Adversarial Tactics, Techniques, and Common Knowledge. The framework provides methods to recognize an attacker's tactics, techniques, and procedures as part of defending against threats. So what are the tactics, techniques, and procedures? Well, tactics are the technical goals that an attacker must accomplish to execute an attack, that includes initial access, execution, persistence, and exfiltration. Techniques are the methods attackers use to accomplish their goals within each tactic. And procedures are sequences of techniques and tactics that attackers use to achieve their objectives, which can be specific to a particular threat actor or group. Let's get a feel for how this works.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/using-mitre-att-ck-for-ics?u=76281980&t=96)** I'll take you to the MITRE ATT&CK framework for Industrial Control Systems found here on this page. Now, once here, we see columns in the matrix that describe some task that your team might complete during the ethical hacking exercise. And we'll scroll down, and we can see that we can move over, and you can observe all those things within that matrix. Now, when using MITRE ATT&CK for Industrial Control Systems, you want to take a look at the matrix and then select the specific technique that is relevant to your objectives. These techniques represent the tactics and procedures that attackers might use in an industrial control system environment. I've highlighted some examples of the column headers that you can find while on the site. For example, initial access. Now, this lists attack vectors a threat actor can use to gain access to your network. This category defines many techniques, such as drive-by compromise or external remote services. The persistence category provides details on how to remain in a system. Within this category, there are many techniques that include hardcoded credentials or modify program. Now, if you select any of those links, it will provide more details.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/using-mitre-att-ck-for-ics?u=76281980&t=190)** I'll select hardcoded credentials and open in a new tab. Now, once there, I'll scroll down to see Stuxnet. And right here we see Stuxnet, which uses a hard-coded password. And here, if you click on the link, we can learn more about the techniques used in this attack. MITRE ATT&CK provides details on hundreds of techniques that help organizations improve their defense and detection capabilities by identifying and addressing potential security gaps in their systems. So if you aren't already familiar with MITRE ATT&CK, it's well worth your time to explore the site and learn how you can improve your defense and detection capabilities. Now let's test your knowledge. Review how to use MITRE ATT&CK for Industrial Control Systems during an ethical hacking exercise. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (4)
> **Env Vars:** mitre (7), att (7)
> **UI Navigation:** scroll down (2), select the (1), click on (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Exploiting OT Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Pentesting OT systems](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/pentesting-ot-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/pentesting-ot-systems?u=76281980&t=0)** - [Instructor] Pentesting and operational technology environment involves a systematic approach to determine vulnerabilities. In this segment, we'll review the importance of testing and outline the unique characteristics of operational technology environments the team will need to understand prior to testing. The general scenario for testing an operational technology network will generally follow a process that is similar to any [[Ethical Hacking]] exercise, such as planning, gathering information, and assessing vulnerabilities. However, there are several key differences due to the unique characteristics and requirements of operational technology environments. As shown in this graphic, we can compare the differences between IT and OT. More specifically, information technology systems manage the flow of information and operational technology systems, control physical processes and critical infrastructure such as manufacturing, power plants, and water treatment facilities. Pentesting operational technology systems requires a unique skillset and a deep understanding of industrial processes and protocols.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/pentesting-ot-systems?u=76281980&t=92)** I'm here at this article, lessons learned from the field and OT networks [[Penetration Testing]], and he shares some of his thoughts, and I'm going to scroll down here and I've highlighted this section. Unlike with IT networks, defining the scope of testing and rules of engagement is usually much more complicated. So let's talk about some of the differences you'll find when testing an operational technology system. Testing an operational technology environments require specialized knowledge of protocols and processes such as [[SCADA]] systems, PLCs, and other industrial equipment. The operational technology environment might still use legacy equipment and software, which may have known vulnerabilities. Some operational technology systems are air-gapped and are not connected to any external network. The team may need to physically access these systems. In some cases, the team will need to work closely with operational technology equipment vendors to understand vulnerabilities and potential mitigations. The team should understand the operational and safety requirements and take precautions to prevent damage to physical equipment,
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/pentesting-ot-systems?u=76281980&t=186)** which can have real world consequences. You should do an impact assessment. Consider the cascading effects of an attack on processes and equipment. Operational technology systems often operate 24/7, so the team must work within the restrictive time [[Windows]] and may need to coordinate testing with operational staff to minimize disruptions. OT and IT environments are often converging and vulnerabilities in one can affect the other. Pentesters should assess the interplay between IT and OT systems as there can be potential attack paths that can move between both domains. OT environments are subject to specific compliance requirements and guidelines. The team must ensure that their assessments align with these compliance requirements. The team should provide comprehensive documentation of their findings, including detailed information about vulnerabilities, potential impacts, and recommendations for remediation. Reports should be understandable for both technical and non-technical stakeholders. Now let's test your knowledge. Review the importance of testing an OT system and outline the unique characteristics
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/pentesting-ot-systems?u=76281980&t=282)** of OT environments the team will need to understand prior to testing. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Penetration Testing]] (1), [[SCADA]] (1), [[Windows]] (1)
> **Analogies:** such as (3), similar to (1)
> **CLI Commands:** find (1)
> **Env Vars:** scada (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Providing insights into OT attacks](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/providing-insights-into-ot-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/providing-insights-into-ot-attacks?u=76281980&t=0)** - [Instructor] Operational technology systems face several security threats, including specific attack vectors and techniques. In this segment, we'll investigate ways to gain access to a system by using the [[HMI|Human Machine Interface]], launching a side-channel attack, or infecting a device with malware, along with outlining the potential consequences. In recent years, a significant number of industrial companies experienced an attack that had serious consequences to their operational technology systems. The attack was either a direct attack or part of a supply chain attack. Malicious actors have a wide range of attacks they can launch all with a common theme. They target various aspects of industrial control systems and operational technology infrastructure. First, let's talk about how malicious actors use the Human Machine Interface, or [[HMI]], to modify the integrity of a system. As shown here in this simplified graphic of an industrial control system, we see the human machine interface, which is a dashboard using customized software that allows the operators to manage the system. The software runs on top of an operating system, such as [[Windows]] or [[Linux]], which can be vulnerable to an attack. Malicious actors use any combination of attacks to gain access to the HMI
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/providing-insights-into-ot-attacks?u=76281980&t=95)** which can lead to unauthorized changes in industrial processes or equipment, potentially causing damage or safety hazards. If an attacker is able to access the HMI, they could potentially control the entire network and manipulate any of the following. They can shut down safety controls or disable sensors and alarms, modify temperature and/or pressure, change the mix and concentration of chemicals, or rewrite the program or logic ladder that runs the machines. Any of these changes to the system could have serious consequences that include damage to the equipment or even loss of life. Another concern is malware, which can be used to infect the system. The malware can allow an attacker to gain access or control the HMI to steal sensitive information, interfere with operations or serve as a foothold for further attacks. In the past few years, there has been a significant rise in [[IoT]] and OT malware. Currently, there is malware protection available to prevent attacks, yet there are still challenges. Another method to gain access to a device is by launching a side-channel attack, which are used to gain insights into a system's internal operations and potentially extract sensitive information, such as encryption keys.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/providing-insights-into-ot-attacks?u=76281980&t=191)** In this attack, a malicious actor gains information about a computer system by targeting the physical characteristics of a system using various methods. In this graphic, we see the device under attack. We can use light or call an optical side-channel attack. We can use power, electromagnetic signals using software-defined radio, timing or sound. Now, let's test your knowledge. Discuss ways to gain access to a system along with outlining the potential consequences. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HMI]] (4), [[HMI|Human machine interface]] (3), [[Windows]] (1), [[Linux]] (1), [[IoT]] (1)
> **Env Vars:** hmi (4), iot (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Seeking OT systems](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/seeking-ot-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/seeking-ot-systems?u=76281980&t=0)** - [Instructor] Prior to testing an operational technology infrastructure, the team will first need to locate the devices. In this segment, we'll review various tools and techniques used to gather information on industrial control and [[SCADA]] systems. Because of the critical nature of operational technology systems, it's essential to have situational awareness, which is up to date information on the status and activities within an industrial control system and SCADA network. Let's talk about some of the activity used in operational technology discovery. One thing you'll want to do is create a network map and record detailed information about the infrastructure, such as logical topology, device types, vendor make, and model information. As we can see here, this gives us an idea of what the network involves, including the connections and the infrastructure. The team might also use vendor provided tools along with publicly available tools to identify operational technology assets. For example, you can use passive network mapping tools such as [[Wireshark]], NetworkMiner, or GRASSMARLIN. I'm here at this page NetworkMiner, where we can see the results of a scan. This list provides details on [[IoT]] objects identified on the network.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/seeking-ot-systems?u=76281980&t=95)** In addition to using the tools, you'll also want to physically walk around and verify the operational technology infrastructure map to see just where the devices are located. Now we know that default credentials should be changed immediately upon device setup and replaced with strong and unique passwords. As a result, another exercise is to locate any IoT devices that are using default credentials. We can do this using a tool called IoT Seeker. Now I'll open this graphic in a new tab. There we see a list of all the devices and which ones are still using the default password. Now, something else the team might look for is to see what's available online that might expose the default passwords of specific devices. So how does this happen? Well, companies periodically store or post sensitive information in data repositories or other sites so their customers can access them while working with their systems. Malicious actors seek out these repositories to gain valuable information on their target. For example, if we conduct a search, we can use the keywords SCADA default password list. Now during the search, you'll need to sift through the results and you may find a blog that references the list.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/seeking-ot-systems?u=76281980&t=190)** In some cases, the search will take you to the Wayback Machine, an internet archive where we can see a list that was posted in 2020. Now the list has since been removed, but with a little digging we can find this type of information. The team might also search with Shodan, which is a search engine designed to locate an index IoT devices that are connected to the internet. I'm here at [Shodan.io](https://Shodan.io). I created an account and logged in. Now, for example, if we enter the filter Server SQ-Webcam, and I've entered that here and pressed Enter, and there we can see the results such as where the cameras are located and what information is listed for the [[Web Servers]] that are in use. In addition, many users are lax when it comes to security and use the device with without changing the default settings. Now in this case, I'll search for default password. This will then bring up a list of all the devices that have been identified using the default password. Now, we're not going to go to any of these, but they are vulnerable. Now let's test your knowledge. Review various tools and techniques used to gather information on industrial control and SCADA systems.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/seeking-ot-systems?u=76281980&t=286)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (4), [[IoT]] (4), [[Wireshark]] (1), [[Web Servers]] (1)
> **Analogies:** such as (3), for example (3)
> **Env Vars:** scada (4), grassmarlin (1)
> **CLI Commands:** find (2), make (1)
> **Prerequisites:** setup (1), you'll need (1)
> **URLs:** [shodan.io](https://shodan.io) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Searching for OT vulnerabilities](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/searching-for-ot-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/searching-for-ot-vulnerabilities?u=76281980&t=0)** - [Instructor] Testing for vulnerabilities and hidden back doors in an operational technology system is essential to prevent attacks. In this segment, we'll cover specific tools, techniques, and procedures used when scanning an operational technology environment. Operational technology and industrial control systems are comprised of physical devices and control systems that are vital for critical processes, making them attractive targets for cyber attacks. Vulnerabilities can exist in various sources and can pose risk to the safety, efficiency and functionality of these systems. Vulnerabilities include, unpatched software, weak access controls, insecure interfaces, and human error. Scanning operational technology systems generally require specialized tools and techniques due to the unique nature of these environments. So let's talk about some of the tools and techniques used in these systems. One technique used to see if there are any misconfigurations is fuzzing the system. A fuzz test sends a running application, a variety of random and unusual input, and then monitors how the app responds. Here we can see an example of the type of input that might be used during a fuzz test.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/searching-for-ot-vulnerabilities?u=76281980&t=95)** Input can include random strings along with [[SQL]] injection and cross site scripting attacks. Another tool that is designed for operational technology environments is Nessus Industrial Security, which is tailored to these systems and can identify vulnerabilities in common industrial control system protocols. I'm here at this site where you can learn more. In addition, tenable also has a ton of resources to help your team improve their security knowledge. Another tool that you might use is Skybox Securities Vulnerability Control Product. Now, this offers extensive scanning, risk assessment, and remediation guidance. It's designed to help organizations proactively manage vulnerabilities across the entire infrastructure, including IT and OT environments to help reduce the risk of a cyber attack. In this graphic, we see the results of a scan on all discovered assets. Now, one more important concept is that when conducting vulnerability scanning and testing on operational technology protocols, it's essential to prioritize safety as disruption failures in critical infrastructure systems can have severe consequences. Now, let's test your knowledge.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/searching-for-ot-vulnerabilities?u=76281980&t=187)** Review specific tools, techniques, and procedures used during operational technology vulnerability scanning. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Targeting OT systems](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/targeting-ot-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/targeting-ot-systems?u=76281980&t=0)** - [Instructor] Malicious actors use a variety of different methods to compromise the security of an industrial control system. In this segment, we'll review various methods used to control or disrupt operations in a critical infrastructure environment. Industrial control systems are typically used in sectors such as manufacturing, energy, transportation, and utilities. Auditing these systems is crucial for ensuring their reliability, safety, and protection against [[Cybersecurity]] threats. During this process, the team will examine and evaluate the security, performance, and compliance of the technology and processes used in industrial and critical infrastructure settings. The initial phase of an attack typically involves a reconnaissance exercise to learn more about the target environment and what is the best approach to launch an attack. As illustrated here in this simplified graphic of an industrial control system, there are many attack vectors and ways to gain access to the system. So let's talk about some examples of techniques that can be used. Malicious actors might attempt to hack the [[Hardware]] in an industrial control system, as the widespread reliance on the technology in sectors such as energy and manufacturing makes them lucrative targets.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/targeting-ot-systems?u=76281980&t=93)** Some of the targets can include programmable logic controllers, remote terminal units, human machine interfaces, and field devices and sensors. DNP3 or distributed network protocol and Modbus are two of the most commonly used protocols in [[SCADA]] systems. These protocols serve as communication standards that enable the exchange of data between different devices and components within SCADA systems. Like many other protocols, both DNP3 and Modbus can potentially be exploited by malicious actors to gain unauthorized access to industrial control systems if they are not properly secured. For instance, a malicious actor can use [[Metasploit]] or any other hacking tool to gain access to read and overwrite data on a Modbus server. A [[Programmable Logic Controller (PLC)|programmable logic controller]] automates and controls machinery and processes and manufacturing and industrial applications. If exploited the attack can impact the functionality and alter controls or configurations. The complexity of the attack will depend on the security of the system and the desired effect. For example, if we look at this [[PLC]] code segment, we see that the system will send an alarm and shut down the system if the temperature of the machine
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/targeting-ot-systems?u=76281980&t=189)** is greater than 100 degrees Fahrenheit. However, if a malicious actor modifies the code so that the temperature of the machine must be greater than 1000 degrees Fahrenheit, this could cause grave damage to the machine and potentially anyone near the machine. As devices are added to industrial control system environments, we will most likely see new tactics and techniques emerge. Now let's test your knowledge. Review various methods used to control or disrupt industrial control system operations. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SCADA]] (2), [[Cybersecurity]] (1), [[Hardware]] (1), [[Metasploit]] (1), [[Programmable Logic Controller (PLC)|Programmable logic controller]] (1)
> **Env Vars:** dnp3 (2), scada (2), plc (1)
> **Analogies:** such as (2), for instance (1), for example (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 6. Defending against Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Countering IoT attacks](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/countering-iot-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/countering-iot-attacks?u=76281980&t=0)** - [Narrator] [[IoT]] devices have multiple attack surfaces that can make them a vulnerable target. In this segment, we'll outline the top IoT vulnerabilities as identified by [[OWASP]] and discuss corresponding mitigation strategies to prevent an attack today. There are many areas in the rapidly growing IoT that can have one or more vulnerabilities, which can lead to an attack on the infrastructure or supply chain. First, let's talk about the multiple attack surfaces that we might encounter when dealing with the IoT. An attack surface represents all the entry points that could be exploited by malicious actors to compromise the integrity of a system. IoT devices can include everything from health devices and home automation to sprinkler systems and doorbells. Most have external connectivity to the outside world along with many more things in between. For example, in this graphic we see the following elements that could potentially be compromised. There's the IoT devices such as automobiles, health monitors, or cameras. The method used to connect with cloud resources. The application programming interface, along with protocols and custom interfaces. The business logic along
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/countering-iot-attacks?u=76281980&t=92)** with [[Data Storage]], and the interface or application used to monitor or control the device. For anyone who might be implementing IoT devices within their environment, it's essential to have a comprehensive plan that helps prevent security incidents. So now let's talk about ways to prevent IoT attacks. OWASP has identified the top 10 IoT vulnerabilities, and I'm here at this page and you can take a look at the list. However, the next logical step to take is to mitigate the vulnerabilities. And I'll go to this page and I found a good article that we can use as a guide to help prevent an attack. And I'll scroll down. And you can see the list here. It describes each vulnerability along with suggestions on how to mitigate the potential for attack. Now because of the widespread adoption of IoT devices, when developing devices, manufacturers should keep in mind the potential IoT vulnerabilities and take a moment to consider the consequences. Best practices to prevent attacks would include the following. Designed for security, embed firewall features to add an additional layer of defense, provide encryption capabilities, and include tamper detection capabilities.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/countering-iot-attacks?u=76281980&t=189)** In addition, while many consumers rush to implement the [[Microsoft Products|products]] in their homes and offices, it's important to do some research before purchasing to see if there are any gaping vulnerabilities. In addition, you should learn ways that you can improve the security of your device. Now, let's test your knowledge. Outline the top IoT vulnerabilities as identified by OWASP and discuss corresponding mitigation strategies to prevent an attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (12), [[OWASP]] (3), [[Data Storage]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** owasp (3)
> **UI Navigation:** go to (1), scroll down (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Managing IoT devices](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/managing-iot-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/managing-iot-devices?u=76281980&t=0)** - [Instructor] Managing and securing [[IoT]] and OT devices is essential in an overall security plan. In this segment, we'll review the sections of the Purdue model and describe ways to manage devices and implement robust security measures. Over time, industrial networks have grown in size, scale, and complexity and have evolved significantly. The introduction of smart IP-based sensors, instruments, and networking devices has transformed a once isolated operational technology network into a high-speed network. The changes necessitated the convergence of OT networks with information technology networks enabling advanced communication, increased production, and optimized workflows through industrial IoT devices. Because of the critical nature of these systems along with its expanded use, it's essential to secure devices within an industrial control system to protect against a cyber attack. To better understand all of what's involved in an industrial control system, I'd like to talk about the Purdue model. The Purdue model provides a clear structure for organizing the different levels of an industrial control system ecosystem with each level having a specific function and responsibility. I'm here at this site
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/managing-iot-devices?u=76281980&t=95)** where we can take a look at the Purdue model and the different levels. Now we'll start up at the top. Now here we see levels four and five. Now this includes the corporate IT systems such as email, file servers, and networking infrastructure, and those support the entire organization. And in addition, you'll see enterprise-level systems that handle business functions such as inventory management, order processing, and financials. Now below that, you'll see what's called a perimeter network, also called a screen subnet. Now this acts as an intermediary between the trusted internal network and the untrusted external network. Now down below, this is where we see the production. Now, level three is the manufacturing operations and this deals with functions such as production control, quality management, and tracking production orders. Level two is where supervisory control resides. Here you'll find [[SCADA]] systems, [[Real-Time]] controls, and human machine interfaces. Level one is process control. Process control and monitoring is done by PLCs that control the process at a localized level. And level zero, well, that holds the field devices such as sensors, actuators, and other instruments that collect data and interact with the industrial processes.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/managing-iot-devices?u=76281980&t=190)** Now that we understand all of what's involved, let's talk about some of the things we can do to ensure the security, efficiency, and reliability of an IoT ecosystem. An important element is to implement strong authentication and authorization. You'll want to define and enforce access control policies that specify who can access and manage IoT devices. Maintain an up-to-date inventory of all IoT devices in your network including device types, firmware versions, and locations. Regularly update the firmware and software of IoT devices to patch known vulnerabilities and improve security. Segment the network to have clear boundaries. Prevent physical access to IoT devices. Implement real-time monitoring of IoT devices to detect anomalies or suspicious activities. Implement redundancy and failover methods to ensure continuous IoT device functionality in the event of [[Hardware]] or network failures. And develop a well-defined [[Incident Response]] plan specific to IoT security breaches. Now, let's test your knowledge. Review the sections of the Purdue model along with ways to manage devices and implement robust security measures.
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/managing-iot-devices?u=76281980&t=284)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (10), [[Real-Time]] (2), [[SCADA]] (1), [[Hardware]] (1), [[Incident Response]] (1)
> **Analogies:** such as (4)
> **CLI Commands:** find (1)
> **Env Vars:** scada (1)
> **Speakers:** - [instructor] (1)

#### [Developing a secure device](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/developing-a-secure-device?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/developing-a-secure-device?u=76281980&t=0)** - [Narrator] Manufacturers continue to develop devices to join the [[Internet of Things (IoT)|Internet of things]]. In this segment, we'll learn why it's essential for companies to design devices with security in mind. As we see in this graphic, commercial and consumer [[IoT]] implementations have started to be able to prevent malicious activity. In the commercial space, there are some options to detect and respond. However, there are rare options to detect and respond in consumer devices leading to a white space in IoT security for consumers. IoT devices have a number of different challenges that manufacturers must address before connecting objects like buildings, wearables, cars, and homes to the IoT. When developing devices, manufacturers should keep in mind the potential IoT vulnerabilities and take a moment and consider the consequences if the device is not thoroughly tested. Because depending on where the device is used, a breach can expose sensitive data. So when developing [[Microsoft Products|products]] for the IoT, it's always good practice to design with the CIA triad in mind. CIA stands for confidentiality, integrity, and availability and is a fundamental concept in [[Cybersecurity]]. So when in use,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/developing-a-secure-device?u=76281980&t=93)** the device should provide confidentiality in that the data should not be accessible to anyone without appropriate permissions. Integrity in that the code should be stable and not mutable to anyone without appropriate permissions. And availability in that the device should be available to anyone with appropriate permissions. The Federal Trade Commission is concerned that IoT devices are putting consumers at risk. This document contains information that includes best practice guidelines, such as use recognized security practices, authenticate and control access, and implement secure [[Data Management]]. Following these guidelines will help protect IoT devices from malicious actors. Now let's test your knowledge. Manufacturers continue to develop devices to join the internet of things. Outline why it's essential for companies to design devices with security in mind. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (8), [[Internet of Things (IoT)|Internet of things]] (2), [[Microsoft Products|Products]] (1), [[Cybersecurity]] (1), [[Data Management]] (1)
> **Env Vars:** cia (2)
> **Definitions:** stands for (1), is a  (1)
> **Best Practices:** good practice (1), best practice (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Implementing Zero Trust](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/implementing-zero-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/implementing-zero-trust?u=76281980&t=0)** - [Instructor] Zero trust is an approach to [[Cybersecurity]] that assumes no absolute trust for users, devices, or applications, regardless of location or level of access. In this segment, we'll learn how a zero-trust security framework helps reduce the risk of a malicious actor gaining access and moving through the network. For most of the early growth in the [[IoT]], we didn't incorporate any traditional security methods such as firewalls and [[Intrusion Detection]] systems. The belief was these tiny devices were not an attractive target to hackers, or they couldn't possibly be susceptible to an attack. We find the assumptions are incorrect and we need more security methods. I'm here at [barracuda.com](https://barracuda.com) and I'll scroll down where we see that a large percentage of organizations are at risk of an attack on industrial IoT devices. Now this is a significant number, and many IoT devices are vulnerable as they're small, have minimal processing, and are generally not able to defend themselves. So let's next take a look at this graphic. I'm here at [nist.gov](https://nist.gov) and I'll scroll down. On the right, we see a traditional approach
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/implementing-zero-trust?u=76281980&t=98)** to secure the organization. Within the network, there's a recognized level of trust, so the thought is we're inside the network, so everyone here is safe, or are they? As a result, many have moved away from the traditional approach and have adopted a zero-trust model. A zero-trust model spans across networks, applications, and all environments. Using this model helps secure access from anyone or anything that might be able to access the network. I'm here at First Data where we can see a visual of zero trust using the Cisco model, and I'll open the graphic in a new tab. When using a zero-trust approach, any place where an access control decision is required should be considered a perimeter. The zero-[[Rust (Programming Language)|rust]] concept is comprised of three pillars that include workforce, workloads, and workplace. Let's talk about each one. For zero trust for the workplace, this involves anyone who can access organizational resources using either their personal or corporate-managed devices. Zero trust restricts access so that only users with the appropriate permissions and secure devices
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/implementing-zero-trust?u=76281980&t=193)** can access corporate resources regardless of their location. With zero trust for workloads, this applies to applications that are running in the cloud and data centers or other virtualized environments that need to interact with one another. In this case, zero trust focuses on secure access when an application programming interface or API, microservice, or container is accessing a database within an application. And zero trust for the workplace focuses on secure access for all devices that connect to enterprise networks. Devices include the [[Internet of Things (IoT)|Internet of Things]], endpoints, physical and virtual servers and printers. Zero trust focuses on protecting resources. The approaches never trust, always verify to prevent unauthorized access of network resources. Now let's test your knowledge. Explain how a zero-trust security framework helps reduce the risk of a malicious actor gaining access and moving through the network. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (3), [[Cybersecurity]] (1), [[Intrusion Detection]] (1), [[NIST]] (1), [[Rust (Programming Language)|Rust]] (1)
> **UI Navigation:** scroll down (2), open the (1)
> **URLs:** [barracuda.com](https://barracuda.com) (1), [nist.gov](https://nist.gov) (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Designing a secure framework](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/designing-a-secure-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/designing-a-secure-framework?u=76281980&t=0)** - [Instructor] The number of [[IoT]] devices in our homes, offices and infrastructure continues to grow. In this segment, we'll discover the many resources, frameworks, and websites we can use to learn best practice methods to provide a more secure infrastructure. IoT and OT security are evolving fields, so staying updated with the latest developments is crucial. Today's networks and the [[Internet of Things (IoT)|internet of things]] pose unique challenges. The job of the security specialist is to stay ahead of common threats, by attending training, participating in security organizations, and checking security websites on a daily basis. I'd like to show you a sample of what's currently available. So that you have these references, I'll include all of the links in the challenge and links document found in the exercise folder. Let's start with the IoT Security Foundation, and I'll scroll down. This organization focuses on promoting security in IoT devices and infrastructure. Their website offers a wealth of information, including white papers, best practice guides, and security assessment tools. The Industrial Internet Consortium is a global organization dedicated to accelerating the growth of the industrial internet. And I'll drop this down so that you can see
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/designing-a-secure-framework?u=76281980&t=95)** that they provide resources and publications that can help you secure operational technology systems. The Industrial Internet Security Framework is developed to address the security challenges associated with the industrial internet of things and industrial control systems. Now, there's a lot of information on the framework here. If you'd like to get a copy of the framework, we'll go to this page and select this link. And I opened it in a new tab. And as you can see, it's a very comprehensive document. The Center for Internet Security offers a set of controls that provide guidance on securing IoT and OT environments and are widely recognized in the [[Cybersecurity]] community. And here's where you can download the controls. [CISA.gov](https://CISA.gov) has a two page summary of cybersecurity best practices for industrial control systems and you can find that here at this link. [ISA.org](https://ISA.org) has a set of standards for industrial automation and control systems. And I'll scroll down so you can get a sample of all the resources that are available.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/designing-a-secure-framework?u=76281980&t=182)** The Operational Technology Cybersecurity Coalition, along with the operational Technology Information Sharing and Analysis Center, also provide a wealth of information on best practice guidelines in securing and operational technology infrastructure. And finally, the North American Electric Reliability Corporation or NERC, is a global regulatory body that provides guidelines to help ensure the grid's reliability and security by effectively mitigating risks. Now let's test your knowledge. Outline the many resources we can use to learn best practice methods to design a more secure infrastructure. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (5), [[Cybersecurity]] (3), [[Internet of Things (IoT)|Internet of things]] (2)
> **Best Practices:** best practice (4)
> **Env Vars:** cisa (1), isa (1), nerc (1)
> **UI Navigation:** scroll down (2), go to (1)
> **URLs:** [cisa.gov](https://cisa.gov) (1), [isa.org](https://isa.org) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-iot-devices-21053658/next-steps?u=76281980&t=0)** - [Instructor] Thank you for watching [[Ethical Hacking]]: [[IoT]] and OT Hacking. In this course, I began by reviewing the concept and basic architecture of the IoT. I covered the many security issues that plague the IoT and stressed the importance of conducting an ethical hacking exercise on IoT and OT devices. I discussed ways to control operational technology and industrial control systems, along with ways malicious actors can launch attacks. In addition, I outlined ways to defend against attacks on these systems, and then summarized with resources to reference for best practice frameworks and guidance on securing IoT and OT systems. If you're interested in learning more, please check out the other courses in our library. New content is added all the time. If you're interested in learning more about packet analysis, check out my learning path, Improve your [[Wireshark]] Skills. If you're ready to continue your journey as an ethical hacker, be sure to watch the other courses in the series. You might also want to see what my colleague Malcolm Shore has for you on his homepage. Keep learning! I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IoT]] (5), [[Ethical Hacking]] (2), [[Wireshark]] (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking
- Internet of Things (IoT)

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Mobile Devices and Platforms]] | **16 of 19** | [[Ethical Hacking- Cryptography]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Cybersecurity Awareness- IoT Devices]] — Internet of Things (IoT)
- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- SQL Injection]] — Ethical Hacking

---

[↑ Back to top](#)