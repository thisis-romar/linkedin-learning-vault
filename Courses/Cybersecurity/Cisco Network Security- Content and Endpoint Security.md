---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: cisco-network-security-content-and-endpoint-security
url: "https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security"
duration_minutes: 81
duration: 1h 21m
level: Intermediate
updated: 11/6/2024
learners: 46310
skills:
  - Endpoint Security
  - Cisco Networking
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGr1JVqAreS-g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669233744?e=2147483647&amp;v=beta&amp;t=tHfCTkSGT5n2qopnyT_lvKcQhtLFpjGhMGdHdZFFRqQ"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)'
prev_courses:
  - '[Cisco Network Security- Intrusion Detection and Prevention](Cisco%20Network%20Security-%20Intrusion%20Detection%20and%20Prevention.md)'
path_nav: '[{"path":"Cisco Network Security- Safeguarding Network Integrity and Data","position":7,"total":7,"prev":"Cisco Network Security- Intrusion Detection and Prevention","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/endpoint-security
  - skill/cisco-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cisco%20Network%20Security-%20Content%20and%20Endpoint%20Security.md)

![Cisco Network Security: Content and Endpoint Security](https://media.licdn.com/dms/image/v2/C4E0DAQGr1JVqAreS-g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669233744?e=2147483647&amp;v=beta&amp;t=tHfCTkSGT5n2qopnyT_lvKcQhtLFpjGhMGdHdZFFRqQ)

# Cisco Network Security: Content and Endpoint Security

> As a network professional, it's imperative to have a solid understanding of endpoint threats and how to defend against them. In this course, bolster your understanding of how to combat threats as you study for the Cisco Certified Network Associate (CCNA) Security exam. Join security ambassador Lisa Bock as she prepares you for the Content and Endpoint Security section of the CCNA Security exam 210

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security) | 1h 21m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Mitigate endpoint threats and provide security](#mitigate-endpoint-threats-and-provide-security)
  - [What you need to know](#what-you-need-to-know)
- [**1. Mitigating Enpoint Threats**](#1-mitigating-enpoint-threats) (4 videos)
  - [Incorporating safeguards](#incorporating-safeguards)
  - [Secure the endpoints](#secure-the-endpoints)
  - [Standards and regulations](#standards-and-regulations)
  - [COBIT framework](#cobit-framework)
- [**2. Web Security**](#2-web-security) (5 videos)
  - [PCI DSS controls](#pci-dss-controls)
  - [Defend the website](#defend-the-website)
  - [Web proxies](#web-proxies)
  - [Web filtering](#web-filtering)
  - [TLS/SSL decryption](#tlsssl-decryption)
- [**3. Email Security**](#3-email-security) (6 videos)
  - [Email malware](#email-malware)
  - [Combatting SPAM](#combatting-spam)
  - [Data loss prevention](#data-loss-prevention)
  - [Email encryption](#email-encryption)
  - [Challenge: Examine suspect IP addresses](#challenge-examine-suspect-ip-addresses)
  - [Solution: Examine suspect IP addresses](#solution-examine-suspect-ip-addresses)
- [**4. Best Practice**](#4-best-practice) (5 videos)
  - [Malware protection](#malware-protection)
  - [Personal firewall: HIPS](#personal-firewall-hips)
  - [Hardware and software encryption](#hardware-and-software-encryption)
  - [Case study: Malware detection](#case-study-malware-detection)
  - [Case study: Malware confirmation](#case-study-malware-confirmation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Mitigate endpoint threats and provide security](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/mitigate-endpoint-threats-and-provide-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/mitigate-endpoint-threats-and-provide-security?u=76281980&t=1)** - [Lisa] Hello my name is Lisa Bock, and I'm a Security Ambassador. In this course, I'll cover how to mitigate endpoint threats and provide web and email security. I'll discuss web filtering, email encryption, blacklisting, and how to fight against spam in your organization. I'll review some standards and regulations along with best practices that include malware protection, personal firewalls and host [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) along with [Hardware](../../Topics/Hardware.md) and software encryption techniques. I'm super excited to bring you this series on CCNA Security and this section on Content and [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) so that you can improve your skills and configuration and maintenance of Cisco devices, to properly secure an organization's infrastructure. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (1)
> **Env Vars:** ccna (1)
> **Speakers:** - [lisa] (1)

#### [What you need to know](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/what-you-need-to-know-23653901?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/what-you-need-to-know-23653901?u=76281980&t=1)** - [Narrator] This course is an intermediate level course for network administrators, managers, students, and anyone with an interest in learning more about Cisco Security. Participants should have a solid knowledge of networking fundamentals, devices and cables, along with various topologies. This course and the entire learning path covers the components included in the security fundamentals section of the CCNA exam. I'll take you here to this site, where you can learn more about the CCNA exam. The exam will test your knowledge and skills related to networking, and is an excellent addition to a career in information technology. I'll scroll down where you can see the objectives, and then I'll expand the section on security fundamentals, so that you can see what I'll be covering throughout the learning path. I am super excited to bring you this series on CCNA security, so that you can improve your skills in securing an organization's infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** ccna (3)
> **Definitions:** is an  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)


### 1. Mitigating Enpoint Threats

[↑ Back to Table of Contents](#table-of-contents)

#### [Incorporating safeguards](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/incorporating-safeguards?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/incorporating-safeguards?u=76281980&t=1)** - [Narrator] Cyber attacks occur on a daily basis and have resulted in billions of compromised records affecting nearly every industry. In this segment, we'll review the dangers to our infrastructure and why we must incorporate safeguards to secure our systems and data. Network administrators place security as a top priority. An organization must incorporate administrative, physical, and technical controls to defend against attacks. In addition to enterprise security, it's essential to implement content and endpoint protection. Let's compare the two. Content security protects data as it's accessed, transferred, or shared across a network, by monitoring and securing files, folders, emails, and web traffic. [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) monitors and protects endpoints or devices, such as laptops, mobile devices, tablets, and workstations that are connected to a network. Now that we understand the concept of content and endpoint security, let's talk about the evolving threat landscape. Current cyber attacks are destructive and use increasingly sophisticated tactics that leverage the widespread adoption of new technologies. Malicious actors have ample resources
>
> **[1:38](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/incorporating-safeguards?u=76281980&t=98)** using advanced tools and techniques to gain access to a system. Many times, they become an advanced persistent threat and stay in the network undetected to gather high-value data, such as trade secrets, defense information, and personally identifiable information. So now let's talk about some of the most prevalent types of attacks we're seeing today. Malware is becoming more aggressive and is harder to combat as they're designed to allude detection. We're seeing everything from network-based ransomware worms, to devastating wiper malware. In addition, we see many times there's a multi-vendor environment, and that includes bring your own device, the [Internet of Things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md), and the many different operating systems in today's complex networks. Now, this adds to the risk because most of the time, we can't update all of them. It just simply isn't possible. What complicates the current threat environment is the influence of AI, which changes the landscape of cyber attacks in several ways. AI has significantly increased the sophistication, efficiency, and scale of cyber attacks. To combat the many threats
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/incorporating-safeguards?u=76281980&t=192)** and protect the data and endpoints, we must take a layered approach. Content security focuses on the data and uses email and web security, encryption, and content filtering. Endpoint security focuses on the devices by using anti-malware protection, patch management, and firewalls. The threat landscape continues to be a challenge. By using a layered approach, the network administrator can provide countermeasures to secure our systems and data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (3), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1)
> **Analogies:** such as (2)
> **Speakers:** - [narrator] (1)

#### [Secure the endpoints](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/secure-the-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/secure-the-endpoints?u=76281980&t=1)** - [Instructor] Today's networks are comprised of infrastructure devices and endpoints. Infrastructure devices interconnect endpoints. Data passes through these devices. And if we take a look at our campus area network, there are several infrastructure devices. Those include routers, switches, or wireless access points. Endpoints are one side of a conversation that is capable of accepting communication. On our network, you'll see several endpoints that include work stations, storage area networking devices, servers, IP phones, [IoT](../../Glossary/Concept/IoT.md) devices, and remote and mobile workers. Today's networks have become diverse and they've also changed. What used to be a clear definition between the inside network and the outside network is now blurred because of mobility. As a result, there are many ways for someone to gain access into your system. And that's called an attack vector. An attack vector is a way for a malicious actor to gain access into a system. And can include software, networks, and the user. Attack vectors on the endpoints can vary and will depend on the individual organization. Software represents the largest attack surface
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/secure-the-endpoints?u=76281980&t=96)** and includes applications, services, executables, and webpages. The network attack surface includes devices and interfaces, ports on outward-facing server, such as the mail and [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) in the DMZ. The human attack surface is the weakest link in an organization and can introduce malicious behavior into the network either accidentally or maliciously. Yes, there are many attack vectors, yet it's still necessary for the devices to connect to the network securely. [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) measures have grown in importance, as the endpoint can now help to defend the network. More advanced measures provide capabilities, such as access control and [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md), along with malware protection, encryption, blacklisting and whitelisting, blocking risky or malicious activities, either by end-users or intruders, or personal firewalls. Cisco has several security solutions to ensure endpoint security. And those include anti-malware protection, email security appliance, web security appliance, and network admission control. Networks have become diverse and the borders have blurred. Endpoint security has advanced and now endpoints can help defend against the many attack vectors on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (3), [IoT](../../Glossary/Concept/IoT.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1)
> **Analogies:** such as (2)
> **Env Vars:** dmz (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Standards and regulations](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/standards-and-regulations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/standards-and-regulations?u=76281980&t=1)** - [Instructor] An organization must incorporate safeguards into the security compliance plan to defend against attacks. Over the years standards, regulations, and guidelines such as [PCI DSS](../../Glossary/Standard/PCI%20DSS.md), HIPAA, SOX, and GDPR have reduced the amount of data exposure. The standards, regulations, and guidelines are important to understand, as they outline the way the organization should implement appropriate security measures to address and reduce overall risk. [Payment Card Industry Data Security Standard](../../Glossary/Standard/PCI%20DSS.md), or PCI DSS, is the set of widely accepted requirements to secure credit card transactions. PCI DSS is not a law or a government regulation, however if you do deal with any credit card transactions you must comply. Otherwise a company will face a hefty fine and may lose the ability to handle credit card transactions. The Health Insurance Portability and [Accountability](../../Skills/Data%20Science/Accountability.md) Act, or HIPAA, is also called the [Privacy](../../Skills/Data%20Science/Privacy.md) rule. This is legislation that governs [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) and security practices that safeguard all patient electronic Protected Health Information in US medical facilities. Along with this is they must report any breach activity.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/standards-and-regulations?u=76281980&t=97)** Anyone or any entity that is in violation of the policies and procedures will face penalties. Sarbanes-Oxley is a set of compliance requirements outlined for public companies. SOX specifies methods to create and sustain security controls and procedures and conduct a yearly audit to reduce corporate fraud and protect investors. US lawmakers created the 2002 Sarbanes-Oxley act or SOX in response to several corporate accounting scandals occurring between the years 2000 and 2002. Let's take a look. Here we see the 10 worst corporate accounting scandals of all time. I'm at this website and it would be worth it to take a look at it, 'cause you'll see some really good scandals. Here we see in 1998 Waste Management reported 1.7 billion dollars in fake earnings. Down here we see in 2002 WorldCom inflated assets by as much as 11 billion dollars. And the Tyco scandal. Tyco's CEO stole 150 million dollars and then also inflated company income by 500 million dollars. Although all scandals are significant,
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/standards-and-regulations?u=76281980&t=190)** in the early 2000s Enron, a large financially sound Texas-based company, committed several different crimes, along with fraudulent reporting that were extensive and ongoing. Shareholders eventually lost 74 billion dollars. Now the Enron scandal pushed the American public and Congress to recognize the need for new compliance standards for public accounting and auditing. And although SOX has many sections, sections 301 and 404 indirectly deal with information assurance and [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md). All companies must monitor and manage all data and financial transactions and provide an annual report on what internal controls are in place, along with the effectiveness of the controls. Financial reports must be accurate and complete, with no evidence of unauthorized transactions or [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md). And most recently is the General Data Protection Regulation. This is a comprehensive data privacy law that gives consumers control of their data. GDPR affects companies located in and outside the European Union. And companies can face up to 4% of total global turnover if they breach the rules. If you aren't already, you should be ready for GDPR.
>
> **[4:47](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/standards-and-regulations?u=76281980&t=287)** I'm at this website and I've scrolled down and here it's Cisco has outlines their readiness to deal with GDPR. And it talks about how it's getting ready with the Data Protection Program, again, with the emphasis on keeping the data secure. There are many standards and regulations that provide guidelines, so that companies do their due care and due diligence to ensure data privacy and security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PCI DSS](../../Glossary/Standard/PCI%20DSS.md) (3), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (3), [Payment card industry data security standard](../../Glossary/Standard/PCI%20DSS.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** sox (4), gdpr (4), pci (3), dss (3), hipaa (2)
> **Definitions:** is a  (2)
> **Versions:** 1.7 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [COBIT framework](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/cobit-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/cobit-framework?u=76281980&t=1)** - [Instructor] Because of the rapidly changing IT landscape, businesses and industry leaders constantly face the challenge of managing and governing their complex information technology infrastructure. It can be overwhelming, but you're not alone. The fact is IT and business roles are changing. More and more people in the business world will require IT skills and be involved in IT decisions and procedures. Both IT and business will need to work together to improve business processes. COBIT, or control objectives for IT, helps navigate the challenge of providing information assurance, security, and risk mitigation. COBIT is a set of IT principles and provides a best-practice framework designed to safeguard the [Privacy](../../Skills/Data%20Science/Privacy.md) and security of company-specific data, such as trade secrets and personnel information, to ensure value to its stakeholders. COBIT divides the framework into four domains that include plan and organize, acquire and implement, deliver and support, and monitor and evaluate. The COBIT 5 framework helps improve user satisfaction of IT services and creates value through the effective use of IT
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/cobit-framework?u=76281980&t=96)** and stay in compliance with applicable laws, regulations, and company policies. The five COBIT principles are as follows. Meeting stakeholder needs, covering the enterprise end to end, applying a single integrated framework, enabling a holistic approach, and separating governance from management. COBIT guidelines help security professionals effectively manage and protect their information, which has significantly increased over the past few decades. A company needs to provide the most effective benefits at the most acceptable level of risk at the most reasonable cost. COBIT helps to provide direction and innovation in emerging technologies and stresses the importance of managing a solid life cycle. Plan, design, build, use, monitor, update, or dissolve. COBIT is a framework that helps navigate the challenge of providing information assurance, security, and risk mitigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** cobit (8)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Web Security

[↑ Back to Table of Contents](#table-of-contents)

#### [PCI DSS controls](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/pci-dss-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/pci-dss-controls?u=76281980&t=1)** - [Instructor] In addition to in-house transactions by merchants, many companies have an outward-facing website. Merchants must design and build an ecommerce site with [PCI DSS](../../Glossary/Standard/PCI%20DSS.md) security in mind. [Payment card industry data security standard](../../Glossary/Standard/PCI%20DSS.md), or PCI DSS, is the set of widely accepted requirements to secure credit card transactions. Several major credit card companies developed PCI DSS in 2004. That included American Express, Discover, JCB International, MasterCard, and Visa. The credit card industry developed the standard to help organizations that deal with credit cards to have more control over cardholder data and reduce the risk of possible exposure and fraud. PCI DSS requirements covers management policy, [Network Security](../../Skills/Cybersecurity/Network%20Security.md), and best practices for handling transactions and cardholder data. PCI DSS has six major principles and requirements. Build and maintain a secure network, protect cardholder data, maintain a vulnerability management program, implement strong access control measures, regularly monitor and test networks, and maintain an information security policy.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/pci-dss-controls?u=76281980&t=97)** PCI DSS is not a law or a government regulation. However, if you do deal with any credit card transactions, you must comply, otherwise a company will face hefty fines and may lose the ability to handle credit card transactions. The first step is to identify what type of merchant the company is and how many transactions they do on a yearly basis. The merchant is then ranked from level one to four, and each level will determine how aggressive audits and scanning take place. I'm at this website where you can find out a little bit more information on PCI DSS compliance. Down below here, it talks about compliance solutions, and Cisco is a member of the PCI Board of Advisors and the DSS Special Interest Groups. They take this very seriously and know it can be rigorous, so they can help with some of the solutions. When developing an ecommerce site, use good practice. That includes don't keep sensitive data any longer than necessary, protect the network using firewalls and DMZ, use secure protocols for processing credit card information, control access to the system, and protect cardholder data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PCI DSS](../../Glossary/Standard/PCI%20DSS.md) (7), [Payment card industry data security standard](../../Glossary/Standard/PCI%20DSS.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Env Vars:** pci (8), dss (8), jcb (1), dmz (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Defend the website](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/defend-the-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/defend-the-website?u=76281980&t=1)** - [Instructor] Organizations put security measures in place to prevent unauthorized people from obtaining access to their resources on the network, such as the corporate database, which holds data on the organization, operations, and the strategic plan. The website may be involved in one of several attacks to get to the database. Attacks that include denial of service, [SQL](../../Skills/Data%20Science/SQL.md) injection, or cross-site scripting. In order to gain access to the data servers to steal confidential information. In the US and in other countries, a hacker can be liable under the terms of various laws. I'm at this website, the US Department of Justice, Computer Crime and Intellectual Property Section, and we see various indictments from computer crime. You can take a look at this and as you see, it goes back several years. You can select one and drill down, and find more information. For example, this one, a California man arrested for hacking websites. It will tell you the details of the case and the repercussions. However, justice cannot hold a criminal liable for a company failing to use methods to protect the data in the organization. Therefore, test all applications to assure no one can breach the [Databases](../../Skills/Software%20Development/Databases.md) in an organization, including web applications, those are
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/defend-the-website?u=76281980&t=94)** the internet-facing applications, the network applications, such as customer-relationship management, and end-user applications that run on end-user devices and remote systems. The security team should determine poor procedures and inadequate security, and do application testing that includes input validation of form information and common vulnerabilities, such as cross-site scripting, SQL injection, and buffer overflow attacks, along with others that your vulnerability scanner will most likely identify. I'm at this website and here, we can do a free website malware and security scanner. I used [example.com](https://example.com) and said scan the website. Now, this is a very simple website used for purposes like this and it shows a low [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) but down below, it might indicate that there are things that need to be fixed. Now, it's not always advanced hacking methods that get us to the database. There are other ways malicious actors get in. Weak and stolen credentials are the low-hanging fruit, and they account for over 70% of the network intrusions, where a hacker can obtain those user credentials by keylogging, malware, or [Phishing](../../Skills/Software%20Development/Phishing.md) attacks. A major breach leakage or complete loss of sensitive data has many implications.
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/defend-the-website?u=76281980&t=190)** Network and business applications unavailable. Significant financial losses. Sensitive information compromised. They might face regulation fines, legal liability, and alienated customers. GDPR fines can be significant. Loss of productivity by possibly having to manually reconstruct the database or possibly redesigning the intellectual property that was lost. Take steps to secure the website. The corporate website is the public face of the company and a breach can have serious implications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Analogies:** such as (3), for example (1)
> **Env Vars:** sql (2), gdpr (1)
> **CLI Commands:** find (1)
> **URLs:** [example.com](https://example.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Web proxies](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/web-proxies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/web-proxies?u=76281980&t=1)** - [Narrator] A Web proxy creates a connection between systems. Two connections are established, one between the packet source and the firewall and another between the firewall and the packet destination. The proxy intercepts incoming packets and examines the payload, and then relays the permitted packets to the destination. As a result, the client and server never communicate directly with one another. The proxy creates a single point to assess threat levels and can handle complex protocols by doing deep packet inspection to monitor incoming traffic for signs of attack, and will drop any suspicious data. The web proxy is application-aware. Meaning, instead of treating all HTTP requests equally, the firewall can truly understand what is happening and evaluate all the different types of HTTP requests and payloads. A proxy server can also be configured to provide web caching, and will save copies of all web pages that have been delivered to internal computers in a web cache. This saves user access time so that frequently requested pages can be retrieved faster. Web proxies can be implemented in two ways, local and cloud-based. Local is on premise, and cloud-based is in a proxy
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/web-proxies?u=76281980&t=97)** located on a server somewhere else. The cloud-based proxy has a cost factor in having to transmit data to a cloud server. However, there are benefits in intelligence services that can collect and analyze the aggregated data from billions of web requests, malware samples, and emerging attack methods. As far as configuration, you can couple a proxy with Cisco's Advance Malware Protection, or AMP, which protects endpoints and networks more effectively than traditional host-based malware protection. AMP protects before, during, and after an attack, and can enable [Malware Detection](../../Skills/Cybersecurity/Malware%20Detection.md), and blocking, continuous analysis, and alerting. AMP uses the [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) intelligence networks of Talos to gather [Real-Time](../../Skills/Database%20Management/Real-Time.md) threat intelligence from millions of endpoints and security devices. Those include firewalls, intrusion prevention, web and email servers, and analyzes billions of web requests every day. A proxy isolates the server and can be coupled with Cisco's Advanced Malware Protection to defend the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Malware Detection](../../Skills/Cybersecurity/Malware%20Detection.md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** amp (3), http (2)
> **Speakers:** - [narrator] (1)

#### [Web filtering](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/web-filtering-23653909?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/web-filtering-23653909?u=76281980&t=3)** - [Instructor] Malicious actors can use web content to cripple a system, deliver malware, or steal information. In this segment, we'll learn how web filtering helps to reduce the potential for endpoint attacks by managing the sites that users can visit. Malicious actors can embed harmful elements such as malicious codes or scripts within a website. The methods involve using drive-by downloads, [Phishing](../../Skills/Software%20Development/Phishing.md) links, malvertising or exploiting vulnerabilities in web applications. Just visiting a website can result in an attack. So now let's discuss how web filtering can block malicious websites before they reach the endpoint. Web filtering will allow or deny access to a specific URL, domain, or file path using whitelists and blocklists, URL categories, and/or URL reputation. First, let's discuss the concept of whitelists and blocklists. A whitelist is an access control method that denies all traffic except the traffic on the list. A whitelist restricts access only to trusted objects. An example would be MAC address filtering
>
> **[1:40](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/web-filtering-23653909?u=76281980&t=100)** on a wireless access point to allow only devices with a specific MAC address to join the network. Now, here we see an alert message for a web filtering event. In this case, it's on the whitelist. A blocklist, or blacklist, is an access control method that allows all traffic except traffic on the list, which can be a valuable resource to reduce risk by denying access to potential malicious traffic. Blocklisting can include traffic from specific websites, hosts, and usernames, TCP and UDP ports, ICMP types and codes, and specific file extensions. Here we see an alert message for a web filtering event. In this case, there's a BLOCKLIST_MATCH. Whitelisting is an effective method. However, creating a whitelist is more granular and cumbersome, especially if there are many entries that need to be added to the list. Blocklisting is easy to implement and commonly is used more often. Next, we'll discuss URL categories. Now this filters based on categories such as news,
>
> **[3:17](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/web-filtering-23653909?u=76281980&t=197)** job search, social media, education, and adult from publicly available lists. The administrator can filter and restrict by category and use time-based policies to add flexibility. For example, deny clients to go to YouTube from 8:00 to 5:00, but allow clients to go to YouTube after 5:00 PM. The last method we'll discuss is URL reputation. Now this works by evaluating the safety and legitimacy of a URL based on its past behavior, user feedback, and security research. URL reputation uses a scoring system. The higher the level, the more trustworthy. To implement this, the administrator will set a threshold. And if the URL is lower than the threshold, the site is blocked. Here you see the default list for Cisco. The higher the level, the more trustworthy the site. Web filtering is a powerful tool in preventing attacks as it allows or denies access to specific URLs, domains, or file paths, effectively blocking malicious websites before they reach the endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Env Vars:** url (8), mac (2), tcp (1), udp (1), icmp (1)
> **Definitions:** is an  (3), is a  (1)
> **Ports:** :00 (3)
> **Analogies:** such as (2), for example (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### [TLS/SSL decryption](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/tls-ssl-decryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/tls-ssl-decryption?u=76281980&t=1)** - [Instructor] When dealing with threat management, we are going to run into encrypted traffic. There's ways that we can choose to handle our traffic that is encrypted using transport layer security or secure socket layer. We can block the encrypted traffic or examine it. We can even do selective examination if it for example comes from a website with a bad reputation. In order to examine the traffic, the system must decrypt it before examining it and then it can monitor for threats, examine for reputation, [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md), access control and advanced malware protection. It then encrypts it and sends it off to the destination. Now of course it has to have the keys in order to do this so you really have to have control of your network. In this demo, I'm going to use [Wireshark](../../Skills/Cybersecurity/Wireshark.md) to show you what it looks like when traffic is encrypted and then after it's decrypted. One thing we are gonna talk about is the Cisco 2018 annual [Cybersecurity](../../Topics/Cybersecurity.md) report illustrates a couple of key points. One is that they're seeing a rise in encrypted web traffic. In 2017, 50% of global web traffic was encrypted. Now we know this is a two-edged sword. Encryption helps to protect our data from prying eyes and ensure confidentiality. But encryption also helps the malicious actor by concealing their command and control activity.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/tls-ssl-decryption?u=76281980&t=97)** When it's encrypted, we really don't know what's going on and they have more time to inflict damage. So let's take a look. We're going to need a capture and I'm at the [Wireshark.org](https://Wireshark.org) page and these are sample captures. What we're going to get is an SSL with decryption keys. I selected the first one snake oil so if you'd like to follow along, you'll need to download it and extract it. Once you extract it, there's three files. One is the PCAP, rsasnakeoil, then there's also the key which is the second file you see and then there's a read me. Now this is an old packet capture as you can see, but it tells us the preferences so you can add it for the RSA key list. And either Unix [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or [Windows](../../Glossary/Service/Windows.md) and we are gonna be using Windows so you can see what the settings are. I've opened up rsasnakeoil and let's take a look at this. As you can see, it's using secure socket layer and the data is encrypted. So I'll right click and say follow the stream, but we can't see anything, again because it's encrypted. So what we'll need to do is to put in the keys so that it can decrypt the data. Go to edit and preferences. We'll go to protocols and add our configuration. We're going to SSL and here you see the RSA keys list and we're gonna say I'll say edit
>
> **[3:12](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/tls-ssl-decryption?u=76281980&t=192)** and since there's none in there, we need to create a new entry and it's gonna be IP address 127.0.0.1 port 443 protocol HTTP and the key file, I need to go get the key file. All right, now that it's in there, I'm gonna say OK. Now once I say OK and exit out of preferences, you're going to notice a change. Now you see the data is decrypted. It looks a little bit different. But now let's see if we can see the data. I'll right click and I'll say follow SSL stream and now you can see the webpage. So as you can see, secure socket layer is a great way to protect data. If you have the key, we can decrypt it, monitor for threats, encrypt it and send it along on its way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** ssl (3), rsa (2), pcap (1), http (1)
> **Definitions:** is a  (2), is an  (2)
> **UI Navigation:** go to (2)
> **URLs:** [wireshark.org](https://wireshark.org) (1)
> **Ports:** port 443 (1)
> **Versions:** 127.0.0 (1)
> **Analogies:** for example (1)


### 3. Email Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Email malware](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/email-malware?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/email-malware?u=76281980&t=1)** - [Narrator] Email is by far the most commonly used communication tool for business and personal use. More than 100 billion corporate email messages are exchanged every day. Although highly effective, email can pose a [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). Some threats include malware that is introduced through an employee's email. Email can carry a wide variety of extensions. Devices in malware protection recognize these extensions as possible threats and are quarantined. I'm at this website where we can see a list of common, dangerous, and malicious file extensions. I'll scroll down. As you can see, there are quite a few of them. So, if for whatever reason you're not getting a file, it may have been quarantined because it has one of these extensions and is recognized as a possible threat. [Phishing](../../Skills/Software%20Development/Phishing.md) attacks encourage the recipient to click on a link and share confidential information. A phishing attack can lead to a ransomware attack or a phishing attack can get the user to click on a link and download malware. Scripts can be embedded within the email and can run when a user opens the email and complete some malicious act. Malware can conceal itself in applications or even a [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) doc,
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/email-malware?u=76281980&t=94)** which might contain a virus. For example, a macro is a series of repetitive events that are recorded, such as inserting stock text at the beginning of every document, and then run when launched. A virus can be embedded in a macro and triggered if you, say, type a Y or even a semicolon. Anti-malware will check and monitor what you're doing while you're working and will check the file or executable before you open up it and possibly damage your system. Many users are unaware of this process until they get a notification that the file they downloaded was quarantined for being a known threat. If you're concerned about a file and it is in your quarantine, you can upload it to VirusTotal. VirusTotal will scan the file with a variety of different anti-malware [products](../../Skills/Software%20Development/Microsoft%20Products.md) and tell you what each one will say about it. Protect against email malware. Use strong spam filters, use anti-malware protection, and also be cautious before clicking a link in an email.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (3), [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Combatting SPAM](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/combatting-spam?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/combatting-spam?u=76281980&t=1)** - [Instructor] Email spam is dangerous, as it can lead to a cyber attack. In this segment, we'll learn best practices to fight against spam. That includes using spam filtering, email authentication, and user education. Spam goes hand in hand with malware, [Phishing](../../Skills/Software%20Development/Phishing.md), and pharming, and they're all dangerous. Criminals continue to use email to deliver a payload, as email provides a convenient way to reach victims on a global scale. Just how much spam is out there? Well, I'm at this website, EmailToolTester, where we can get some [Statistics](../../Skills/Data%20Science/Statistics.md) on how much is legitimate email and how much is spam. And I'll scroll down where we can see the results in a chart from an article dated August 2024. The blue portion is legitimate email. The orange portion is spam, which is about half of the total email that is sent. Spam is dangerous. It clogs up your email servers, and it's a serious problem. So let's talk about some best practices to defend against spam.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/combatting-spam?u=76281980&t=97)** One method is to use a reliable email filtering system to automatically detect and block unwanted or malicious emails. Many email providers offer built-in filters, and additional third-party tools can enhance this protection by identifying suspicious content. You'll want to make sure you're receiving anti-spam rule updates and make sure your block lists are up to date. Now, once identified, you can indicate the desired action to be taken, such as drop or quarantine. For example, I'm here at this site where we can see an example of what action to take if an email goes into quarantine. And I've opened the image in a new tab. And here, you can see where you can select what action to take. Additionally, you should periodically examine any suspicious email headers to see how the message was assessed or graded. Now, depending on your anti-spam engine, results will vary. There are generally several references to spam filters, and methods that test for spam-like behavior. Now, in this case here, we see this line,
>
> **[3:10](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/combatting-spam?u=76281980&t=190)** an anti-spam message from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Exchange. BLC is bulk compliant level. Now, in this case, the value is zero, and that means it's okay. However, a higher BLC value indicates a bulk message is more likely to exhibit undesirable spam-like behavior and should be blocked. Another option is to use email authentication protocols. Now, the protocols protect your domain from being used in spam and phishing attacks. Protocols include Sender Policy Framework, DomainKeys Identified Mail, and Domain-based Message Authentication, Reporting & Conformance. And lastly, of course, we need user education. Educate employees so that they're aware of phishing and social engineering tactics commonly used in spam. Check that if the message is flagged as spam, the desired action, such as dropped or quarantine, is taken. Additionally, teach users to help identify suspicious email. For example, here we see where the client can manually mark a suspicious email.
>
> **[4:46](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/combatting-spam?u=76281980&t=286)** Malware, phishing, and spam go hand in hand. Use good practice and protection in the fight against spam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (4), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Analogies:** such as (2), for example (2)
> **CLI Commands:** make (2)
> **Env Vars:** blc (2)
> **UI Navigation:** scroll down (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [Data loss prevention](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/data-loss-prevention?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/data-loss-prevention?u=76281980&t=1)** - [Narrator] Data loss prevention is ensuring that there is no data exfiltration, which is data that leaves the organization without authorization. A network specialist must be aware of the many vectors of data exfiltration and ways to prevent data loss. Whether data is at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) or in motion over the network, there are many vectors or method whereby data can leave the organization. Vectors can include storage devices, email, missing or improper access controls, [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md), and malware. Email and email attachments can both contain sensitive information, like customer and personal data, along with business information such as intellectual property, trade secrets, credit card information or social security numbers. Someone could intercept an email and read the contents. Or someone could send an email by mistake to the wrong person. This could lead to data exfiltration. Or the victim might send information to a hacker as a result of a [Phishing](../../Skills/Software%20Development/Phishing.md) or social engineering attack. Data loss prevention must include a platform to do content monitoring of all email to detect and block the unauthorized flow of information. In this example, you see where someone is trying to send someone their credit card information. Now once they hit send,
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/data-loss-prevention?u=76281980&t=96)** it'll pass through the various message filters, antispam, antivirus, content filters and the data loss prevention engine, all while enforcing corporate compliance. This system will flag that credit card information, and it will be in violation of the policy. The next logical step is to trigger an email from compliance, and a way that they can contact you, and an explanation as to why the email was blocked. You also might include the manager in on this, so that remediation can take place. Good practices will help prevent data exfiltration. In addition to filtering and content monitoring of all email, you'll want to provide notifications of user policy violations. Provide data loss prevention training for everyone, and make sure everyone understands the security policies and standards. All will help to prevent data loss.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Cloud Storage](../../Skills/Cloud%20Computing/Cloud%20Storage.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)

#### [Email encryption](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/email-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/email-encryption?u=76281980&t=1)** - [Instructor] Cyberattacks continue to propagate the news. Reports surfaced on malware destroying files, attackers stealing terabytes of sensitive information, and personnel data and emails being compromised. All these activities lead to data loss in an organization. Stealing company information and trade secrets is a well-known challenge that businesses strive to protect against. And it goes undetected as many times companies do not notice any abnormal network activity. The most common type of business and personal communication is email, yet it's also the least secure, as email wasn't designed to be private. Plain email is transmitted via Simple Mail Transport Protocol in MIME format. MIME is Multipurpose Internet Mail Extensions. This was designed to overcome some of the limitations of plain email. However, if someone gets ahold of a plain text email, they can read the contents, and a sender's name can be spoofed. Even in [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) you can forge your name. We have alternatives for sending email in plain text. We can use Secure/MIME. Secure/MIME is a widely accepted technique. Secure/MIME provides authentication
>
> **[1:35](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/email-encryption?u=76281980&t=95)** and nonrepudiation using digital signatures, which helps reassure recipients that the message started with a specific sender, and not from someone pretending to be the sender. Secure/MIME provides [Privacy](../../Skills/Data%20Science/Privacy.md) by providing encryption for all email to ensure confidentiality. If you want to use Secure/MIME, you must obtain a certificate from your network administrator, which will be stored on your computer. Secure/MIME doesn't work with web-based platforms such as Hotmail or Yahoo. There are other options, such as Hushmail, S-Mail, or CounterMail. One other option is PGP, which is Pretty Good Privacy. This is a part of Symantec. Another great alternative is GNU Privacy Guard. As you can see on this webpage, it's completely free. GNU Privacy Guard can provide authentication by using digital signatures and confidentiality by encrypting messages. There are choices for securing your email. All secure email applications should be transparent to the end user, provide fast encryption of even large files, easily accessible for all message recipients, and affordable. Email encryption provides authentication by using digital signatures and confidentiality by encrypting messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (4), [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) (1)
> **Env Vars:** mime (8), gnu (2), pgp (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Examine suspect IP addresses](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/challenge-examine-suspect-ip-addresses-23657350?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/challenge-examine-suspect-ip-addresses-23657350?u=76281980&t=0)** - [Narrator] Email communication is a common tool for business and personal use. More than 100 billion corporate email messages are exchanged every day. Although highly effective, email can pose a [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). In this challenge, we'll discover resources that can identify suspicious IP addresses. First, let's set the stage. During the course of your day, you've received an intrusion prevention system alert. Three IP addresses have been blocked because of reputation. It turns out that a few suspicious emails have gotten through the firewall. You immediately delete the email to prevent it from causing any further damage. Your job is to investigate further by going to Talos Intelligence and see what you can find out about the IP addresses. Once there, locate the owner details, reputation details, and whether or not those IP addresses are on a block list. You'll also want to find out if any other IP addresses that were used to send emails have a poor reputation. Here are your three IP addresses, so pause the video and obtain the challenge document
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/challenge-examine-suspect-ip-addresses-23657350?u=76281980&t=96)** where you'll find it in the exercise folder. Complete the challenge where you'll investigate the three IP addresses using Cisco Talos, Project Honey Pot, and [spamhaus.org](https://spamhaus.org), and then return to see what my thoughts were. I'll start you out at Talos Intelligence, and I'll scroll down where you can see the Intelligence Center. This challenge should take you about 10 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1)
> **CLI Commands:** find (3)
> **URLs:** [spamhaus.org](https://spamhaus.org) (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Examine suspect IP addresses](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/solution-examine-suspect-ip-addresses-23653914?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/solution-examine-suspect-ip-addresses-23653914?u=76281980&t=0)** - [Instructor] Okay, now let's check our work. In this solution, we'll discover resources that can identify suspicious IP addresses. Now, we're going to investigate those three IP address. So I'm here first at Talos Intelligence to see what we can find out. I put in the first IP address and I let it run. And I'll scroll down, where on the left we can see location data along with owner details, and on the right we see reputation details. In this case, the sender IP reputation is poor. Now, I'll scroll down, and here we see the blocklists. In this case, it is listed on a blocklist. And then down below we see additional information. Now, this is a list of top IP addresses used to send emails in that IP address range, and all of them have a poor reputation. Now, I'll do the second IP address, and I'll let it run. And we'll scroll down, where we can see on the left location data is Japan with some owner details. And on the right we see reputation details. We see that the sender IP reputation is poor and the web reputation is untrusted.
>
> **[1:34](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/solution-examine-suspect-ip-addresses-23653914?u=76281980&t=94)** Now, we'll scroll down, and again, we see that this IP address is listed on a blocklist. And here again, we see a list of the top IP addresses used to send emails in that IP address range, and again, all of them have a poor reputation. And now I'll run the last IP address. I'll scroll down, and we see that the location data is Japan with some owner details. As far as reputation, on the right, we see that the sender IP reputation is poor and the web reputation is untrusted. In this case, it's listed under two blocklists. And then down below we really don't see that there are any IP addresses used to send emails in that IP address range. But that doesn't mean it's not malicious, it means there just aren't any IP addresses associated with that IP address. But now let's go over here to Project Honey Pot. Now, once you're here, you can read a little bit more about Project Honey Pot, but I wanted you to go to IP Data. And here we see a directory of malicious IPs. And you can take a look through those, and it really tells you a little bit about what the event was, but I wanted you to look up that specific IP address. Now, once we get that tab open,
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/solution-examine-suspect-ip-addresses-23653914?u=76281980&t=189)** I put in the IP address and I hit Search.
>
> **[3:19](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/solution-examine-suspect-ip-addresses-23653914?u=76281980&t=199)** And we'll take a look at the information. Now, here again, it shows the geographic location as Japan. But here in this paragraph the information says that the Project Honey Pot system has detected behavior from the IP address consistent with that of a mail server and dictionary attacker. So again, verifies that it is malicious. Now, we'll do one more. We'll go to Spamhaus Project, and here I'm going to look up this IP address.
>
> **[4:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/solution-examine-suspect-ip-addresses-23653914?u=76281980&t=241)** And in this case, it has two listings, so that means that it doesn't have a good reputation. It's listed under Spamhaus Blocklist and policy Blocklist. Now, keep in mind that these results can change over time. But the last question is, what can we learn from this information? Well, knowing this information will help us tune our security devices to prevent malicious email from getting into the organization. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (5), go to (2)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Best Practice

[↑ Back to Table of Contents](#table-of-contents)

#### [Malware protection](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/malware-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/malware-protection?u=76281980&t=0)** - [Narrator] While in the past, antivirus was sufficient protection, today's threats are more aggressive. Most consumers and businesses turn to antimalware protection, which defends against all [Forms](../../Skills/Web%20Development/Forms.md) of malware. That includes viruses, worms, trojans, spyware, [Phishing](../../Skills/Software%20Development/Phishing.md) sites, adware and rootkits. Antimalware protection is part of a layered security approach, as there are many ways for malware to attack your system, such as browsing the internet, browser add-ons, and even the operating system. Antimalware runs in the background. Depending on your program, the process may be called background or [Real-Time](../../Skills/Database%20Management/Real-Time.md) protection, or something similar. Antimalware monitors your system as you download software, open documents or extract files. Enabling an antimalware product to run in the background is essential, as malware is written to hide or conceal itself. Antimalware companies use a variety of tools to test malware. They run them in sandboxes, and release updates to protect users from newly identified malware. Updated definitions are downloaded daily or more often, and contain signatures for viruses and other malware that have been defined. Once identified, the file is quarantined,
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/malware-protection?u=76281980&t=96)** and you may be able to open the file and run it anyway if you're confident that it's safe. After finding malware, some programs may even delete the file. Heuristic-based detection is different than signature-based detection, as it works by how something behaves, and monitors for virus and malware-like behavior, and can detect new and previously unpublished attacks such as a zero-day attack. Antimalware is actively protecting the system by background scanning. Most antimalware programs set up scheduled full system scans, often once a week to ensure that the latest virus definitions are used to check for dormant viruses. Manual scanning is usually not necessary, as antimalware should pick up a virus signature if you download malware. However, a manual scan should be run after a new antimalware program is installed to ensure that there are no dormant viruses present. False positives flags a file as malware even though it's a safe file. Heuristics may increase the rate of false positives because the antimalware inappropriately felt the program was behaving like a virus. Despite this, false positives are rare. If your antimalware says a file is malicious, you should generally believe it.
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/malware-protection?u=76281980&t=189)** Different antimalware programs have different detection rates, using both virus definition and heuristics, which can result in more effective detection rates. Rates are going to vary over time. I'm at this website, and here we can see Real-World Protection Test April 2018. Now here it talks about some tests they ran on a variety of antimalware [products](../../Skills/Software%20Development/Microsoft%20Products.md). Down below here, it shows you the results, and you can run your cursor over, and here we see Symantec blocked 99.6%, Bitdefender blocked 100%, and Trend Micro blocked 100%. Down below, there's a little disclaimer that we want to point out that while some products may be able to reach 100%, it doesn't mean that they're always going to test at that rate. That means at this time, April 2018, they were able to block 100% of the malicious samples that were used. Best practices include use programs that automatically update and scan, and always follow safe computing practices. Antimalware protection runs in the background and monitors for many of today's threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), cursor (1)
> **Analogies:** such as (2)
> **Versions:** 99.6 (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Personal firewall: HIPS](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/personal-firewall-hips?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/personal-firewall-hips?u=76281980&t=1)** - [Narrator] Firewalls are used in industry today to allow or deny traffic and control access based on a set of rules. As traffic passes through the device, the firewall checks the data and provides a defense strategy to protect the networks and the data. Firewalls can either be [Hardware](../../Topics/Hardware.md)-based or software-based. Many times an organization will use a hardware firewall as part of a router that can protect an entire network. A personal firewall is generally software-based and is used on an endpoint. A software firewall is installed on the end point and can be customized according to the user's needs. A personal firewall can do many of the same things as a hardware-based firewall, such as restrict access to specified services and monitor all the traffic that comes into the host. Examples include ZoneAlarm, ESET, and Norton Personal Firewall. An endpoint can also include [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md). While closely related to a firewall, intrusion detection must first learn the system and then it can monitor the host for unusual or suspicious activity. Host intrusion detection systems include Symantec Endpoint Protection Intrusion Detection, McAfee Host Intrusion Prevention for Desktop, or Suricata.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/personal-firewall-hips?u=76281980&t=96)** One example is the [Windows](../../Glossary/Service/Windows.md) [Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) firewall. As you can see, you can modify the rules that are set in for inbound and outbound, also for monitoring. Another example is ESET [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md), which provides a comprehensive threat management system to work on end point security. Personal firewalls and host intrusion prevention systems can be deployed on an endpoint to defend the host, and then customized according to the user's needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (4), [Hardware](../../Topics/Hardware.md) (3), [Windows](../../Glossary/Service/Windows.md) (1), [Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) (1), [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (1)
> **Env Vars:** eset (2)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Hardware and software encryption](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/hardware-and-software-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/hardware-and-software-encryption?u=76281980&t=1)** - [Instructor] An endpoint, such as a laptop, desktop, or tablet, must be protected from data loss as they are also susceptible to data theft. Take steps to protect against data theft. Using strong access control is an important first step, but the next step is to encrypt the data with a strong encryption algorithm. That way, if the device is lost or stolen, or if someone is able to access the data, the only way they can get to the data is if they have the key. To protect the data, the network administrator can choose from either [Hardware](../../Topics/Hardware.md) or software encryption. Hardware encryption provides always on encryption. Authentication takes place on the hardware as the device as a dedicated processor that generates an encryption key, which the user's password will unlock. Authentication can take place by using a PIN or a biometric, such as a fingerprint. Hardware encryption is commonly used on mobile devices, such as a fingerprint scanner on an Apple iPhone. Although slightly more expensive, hardware encryption provides strong protection that is difficult to intercept or break. Software encryption is done on a host on files, folders, and drives. Software encryption typically relies on a password and is inexpensive to implement. Software encryption doesn't require any additional hardware.
>
> **[1:36](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/hardware-and-software-encryption?u=76281980&t=96)** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) [Windows](../../Glossary/Service/Windows.md) has the encrypting file system, which encrypts files and folders to ensure confidentiality by using symmetric encryption. A general user can encrypt his her own files and cherry pick through the ones they want to protect. The encrypting file system is easy and simple to use and secure. Protect data by either using hardware encryption, which provides always on encryption, and/or software encryption, which can be done on a host on files, folders, and drives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (7), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Analogies:** such as (3)
> **Code Identifiers:** iphone (1)
> **Env Vars:** pin (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Case study: Malware detection](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-detection?u=76281980&t=1)** - [Instructor] Now you've done everything you could to secure your network. You've encrypted your data while it's at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) or while in motion. You make sure that you have secure [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and switching. You're using firewalls and intrusion prevention and even placed content and [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) on your priority list. But now it's time to take a look at [Malware Detection](../../Skills/Cybersecurity/Malware%20Detection.md) and live-threat investigation. I'm at this website [malware-traffic-analysis.net](https://malware-traffic-analysis.net) and it's a great resource where you can get packet captures and examine them and learn a lot about malware analysis. I've got this packet capture and I've opened it in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). Now let's step through and we'll take a look at three simple things that indicate something is amiss. Now we'll use this as an exercise. So imagine that it's a busy day and your intrusion prevention and threat management system have thrown an alarm, and that event we've taken off and pulled it into Wireshark to take a look at what potentially it saw that knew that it was malicious. Well what I'm gonna do is just first take a look at this packet capture, and I'll scroll down. Now when you look at this, you're most likely thinking, it doesn't look unusual. Nothing will jump out at you, and that's normal. But now we're gonna take a look a little deeper. Over in the left-hand corner, I've opened
>
> **[1:33](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-detection?u=76281980&t=93)** up the Wireshark expert information. And we'll pull these up and a lot of these are simply chats of course, but one of them I see here is this connection reset. Wow, we see a lot of resets, connection reset. Okay, let's take a look at that. I'll go to one of the frames here, 184, it really doesn't matter. What I want to do is prepare a filter, and I'm going to filter just the reset packets, and I'll right-click and I'll say prepare as a filter. Now remember, when I say prepare as a filter, it doesn't run it, it simply puts it up for me to modify. So I set it up there, and I want the reset set at one. And I'll press Enter. All right, now we see a lot of resets here. Hm, wonder what's going on? All right, this is indicative of obviously somebody is trying to connect to a host and they don't want to talk to you, so that's what the reset is, is saying I'm not gonna communicate. I'm going to take the coloring rules off just to show you, kind of give you an indication of what's happening that can be distracting. But I do see a lot of port 53, all right. So we know that's associated with DNS. Hm, let's do this. I'll go in, I'll go to [Statistics](../../Skills/Data%20Science/Statistics.md), and let's go to Flow Graph. All right, now this flow graph is great in Wireshark next generation because it can tell us a lot
>
> **[3:09](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-detection?u=76281980&t=189)** of what's happening and who it's communicating with, but in the lower left-hand corner it says, show all packets is what we have now. Now I'll do show display packets. Okay, wow, there it is. Now let's take a look here what's happening. This up on the top, you see the IP addresses, and we'll just use the last three digits. So our host at 102 is, we're seeing that 53 trying to connect here from host 210, okay. And there's a reset 218, 177, there's more actually. And so a lot of activity trying to connect to that host. So we do see a lot of port 53s. That's DNS. Let's do a filter on DNS. So we suspect that there's malicious activity. The next step is examine the DNS traffic and then take a look at virus total, and then a lookup on a suspicious IP address.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (1), [Malware Detection](../../Skills/Cybersecurity/Malware%20Detection.md) (1)
> **UI Navigation:** go to (3), scroll down (1), right-click (1)
> **Env Vars:** dns (4)
> **Ports:** port 53 (2)
> **CLI Commands:** make (1)
> **URLs:** [malware-traffic-analysis.net](https://malware-traffic-analysis.net) (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Case study: Malware confirmation](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-confirmation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-confirmation?u=76281980&t=1)** - [Instructor] So we suspect that there's malicious activity. The next step is examine the DNS traffic and then take a look at virus total and then a lookup on a suspicious IP address. I'm gonna scroll down really slowly. I want you to take a look at, this is the individual frame right here on, in this lower section, this lower pane, and here's a list of the captured packets. I'm going to just scroll down each of those and see if you can notice anything that's unusual. Okay, what's unusual is DNS we know uses UDP and TCP, but DNS only uses TCP for a full zone transfer. A request and response has to be fast, and in general DNS will use UDP. So you can see in this case it's using TCP. Now, you see a lot of IP addresses there, and what I did do was I grabbed one of the IP addresses. I'm gonna take this off here. And you see amellet.bit. I'm just gonna close this out here. So what I have here, and I'm just gonna right click and I'll say follow the TCP stream. So here I see the host amellet.bit, and there's more information in here. And again, this packet capture has a lot more to the story. We're just looking at a couple of things. One of the things I see is that IP address 119.28.15.177.
>
> **[1:37](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-confirmation?u=76281980&t=97)** I'm gonna take a look at what that IP address and what it's doing, but first let's do this. I'm going to take that file and I uploaded it to VirusTotal. Now, understand that this is an old capture and this is an old exercise, so you see that the last analysis was back in 2017. VirusTotal will remember that capture, it creates a hash value, and it will bring back up the same result. So when this capture was placed in, and of course we're looking at the same results. It hasn't changed. We'll scroll down. Now, you see your antiviruses, and VirusTotal uses approximately 60 antiviruses it compares against to see if there's anything that stood out as a signature, and there isn't any, but you see Snort and emerging threats is showing five alerts. So let's go to the details here, and I'll scroll down here. And here's your HTTP request. So the Snort alerts is your [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md), and it's telling me there's sensitive data, miscellaneous activity, and a network Trojan was detected. And we see BLACKLIST suspicious.bit tcp dns query. All right, down below, the same thing. We see a network Trojan was detected. All right, and now we'll go to the final thing as we see the ThreatMiner is I put in that IP address. It gives you more information about that IP address, one being geolocation and where it's located.
>
> **[3:13](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/case-study-malware-confirmation?u=76281980&t=193)** And then I'll go down below. Okay, and here we see some of the activity, Trojan activity. So all in all, when your intrusion detection threat management system throws an alert, tells you that it notices something suspicious, the connection has dropped, it does protect your system. But take the next step. Take a look at what it saw so you can learn and you can then learn to identify threats on your network alongside of your threat detection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (2)
> **Env Vars:** dns (4), tcp (4), udp (2), http (1), blacklist (1)
> **UI Navigation:** scroll down (4), go to (2)
> **Definitions:** is an  (2)
> **Versions:** 119.28.15 (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cisco-network-security-content-and-endpoint-security/next-steps?u=76281980&t=1)** - [Lisa] Thank you for watching. In this course, I covered how to mitigate endpoint threats, and provide web and email security. I discussed web filtering, email encryption, blacklisting, and how to fight against spam in your organization. I reviewed some standards and regulations, along with best practices that include malware protection, personal firewalls, and host [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md), along with [Hardware](../../Topics/Hardware.md) and software encryption techniques. If you're interested in learning more, please check out the IT segment of the library, where we add new courses all the time. It's well worth your time to check out any course in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) Series. If you want to learn more about defending your network against the threat of ransomware, check out my course, Learning Ransomware Countermeasures. If you want to learn more about packet analysis, check out my courses on [Wireshark](../../Skills/Cybersecurity/Wireshark.md). For a complete list of all my courses, go to my author page. Keep learning, I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [Lisa Bock](../../Instructors/Cybersecurity/Lisa%20Bock.md)

## Skills Covered

- Endpoint Security
- Cisco Networking

## Path Context

### In [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)
← [Cisco Network Security- Intrusion Detection and Prevention](Cisco%20Network%20Security-%20Intrusion%20Detection%20and%20Prevention.md) | **7 of 7**

## Appears In

- [Cisco Network Security- Safeguarding Network Integrity and Data](../../Paths/Cybersecurity/Learning%20Paths/Cisco%20Network%20Security-%20Safeguarding%20Network%20Integrity%20and%20Data.md)

## Related Courses

_Courses sharing skills:_

- [Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Wireless%20Networks%2C%20Services%2C%20Security%2C%20and%20Virtualization.md) — Cisco Networking
- [Cisco Networking Foundations- Switching and Routing](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Switching%20and%20Routing.md) — Cisco Networking
- [Cisco Networking Foundations- IP Addressing](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20IP%20Addressing.md) — Cisco Networking
- [Cisco Networking Foundations Fundamentals Of Cisco Networking](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations%20Fundamentals%20Of%20Cisco%20Networking.md) — Cisco Networking
- [Cisco Network Security- Intrusion Detection and Prevention](Cisco%20Network%20Security-%20Intrusion%20Detection%20and%20Prevention.md) — Cisco Networking

---

[↑ Back to top](#)