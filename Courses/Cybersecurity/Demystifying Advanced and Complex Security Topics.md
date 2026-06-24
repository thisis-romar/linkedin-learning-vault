---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: demystifying-advanced-and-complex-security-topics
url: "https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics"
duration_minutes: 35
duration: 35m
level: Beginner
updated: 8/22/2024
learners: 43251
skills:
  - Cyber Security Risk
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFJnaepTrxv3Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723151141731?e=2147483647&amp;v=beta&amp;t=M7K2kfCsFSSQhW4aTOnpzYfxtVi14Y6onbfm9iKspbw"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Navigating the Cybersecurity Threat Landscape](../../Paths/Cybersecurity/Learning%20Paths/Navigating%20the%20Cybersecurity%20Threat%20Landscape.md)'
prev_courses:
  - '[The Cybersecurity Threat Landscape](The%20Cybersecurity%20Threat%20Landscape.md)'
next_courses:
  - '[Learning the OWASP Top 10](Learning%20the%20OWASP%20Top%2010.md)'
path_nav: '[{"path":"Navigating the Cybersecurity Threat Landscape","position":2,"total":8,"prev":"The Cybersecurity Threat Landscape","next":"Learning the OWASP Top 10"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/cyber-security-risk
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Demystifying%20Advanced%20and%20Complex%20Security%20Topics.md)

![Demystifying Advanced and Complex Security Topics](https://media.licdn.com/dms/image/v2/D560DAQFJnaepTrxv3Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723151141731?e=2147483647&amp;v=beta&amp;t=M7K2kfCsFSSQhW4aTOnpzYfxtVi14Y6onbfm9iKspbw)

# Demystifying Advanced and Complex Security Topics

> Have you ever wanted to know more about the complex world of cybersecurity, but weren’t sure where or how to begin? This course is designed to help you unravel the intricacies of some of the most important and most challenging topics in today’s cybersecurity landscape, particularly if you already have a basic understanding of the field and are looking to learn more about advanced concepts and prac

> [LinkedIn Learning](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics) | 35m | Beginner | 43K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Advanced cyber concepts simplified](#advanced-cyber-concepts-simplified)
- [**1. Foundational Concepts**](#1-foundational-concepts) (2 videos)
  - [Threats, risks, and vulnerabilities](#threats-risks-and-vulnerabilities)
  - [Defense in depth](#defense-in-depth)
- [**2. Threats and Attacks**](#2-threats-and-attacks) (3 videos)
  - [Insider threat](#insider-threat)
  - [Ransomware](#ransomware)
  - [Denial of service attacks](#denial-of-service-attacks)
- [**3. Modern Security Approaches**](#3-modern-security-approaches) (5 videos)
  - [Passwordless authentication](#passwordless-authentication)
  - [Zero Trust model](#zero-trust-model)
  - [Threat modeling](#threat-modeling)
  - [Web application firewall vs. traditional firewall](#web-application-firewall-vs-traditional-firewall)
  - [Shifting left](#shifting-left)
- [**4. Cloud and Compliance**](#4-cloud-and-compliance) (2 videos)
  - [Compliance vs. security](#compliance-vs-security)
  - [Native vs. third-party security services](#native-vs-third-party-security-services)
- [**5. Topics of the Future**](#5-topics-of-the-future) (1 videos)
  - [Post-quantum cryptography](#post-quantum-cryptography)
- [**Conclusion**](#conclusion) (1 videos)
  - [Spread your new found expertise](#spread-your-new-found-expertise)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced cyber concepts simplified](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/advanced-cyber-concepts-simplified?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/advanced-cyber-concepts-simplified?u=76281980&t=0)** - Are you new to cyber security and eager to grasp advanced concepts? Or are you an established hyper professional tasked with communicating with the business? This course is designed to help you learn and communicate complex topics that typically come with years of experience. Through engaging stories, metaphors, and analogies, you'll find these topics easier to understand and retain. For current and emerging leaders, I'll provide you with the tools to effectively communicate these concepts to non-technical stakeholders, helping you build your influence within your organization. Hi, I'm Jerich Beason, a seasoned CISO, and I've designed this course with you in mind. Join me on this journey to enhance your cyber security knowledge and communication skills. Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** ciso (1)
> **Speakers:** - are (1)


### 1. Foundational Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Threats, risks, and vulnerabilities](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/threats-risks-and-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/threats-risks-and-vulnerabilities?u=76281980&t=0)** - First up, we're going to focus on the fundamentals. Three key terms you hear all the time, threats, risks, and vulnerabilities. These terms often get used interchangeably, but they hold distinct meanings that are key to everything that we do. Let's dive in and clear up the confusion. Threats. Think of these as potential causes of unwanted incidents, which could cause harm to our systems or data. Next, vulnerabilities. These are weaknesses in our system that can be exploited by threats to cause harm. And finally, risks. This is the potential for a loss or damage. When a threat exploits of vulnerability, essentially it's the likelihood of a threat taking advantage of a vulnerability and the impact it would have. So how do they differ? Think of it this way. A threat is what we're trying to protect against of vulnerability is a gap in our armor. And risk is assessing how likely and damaging a threat exploding that gap could be. Each plays a unique role in the [Cybersecurity](../../Topics/Cybersecurity.md) risk management ecosystem to better grasp the differences between threats, vulnerabilities, and risks. Let's consider something we all rely on daily are smartphones. These devices are treasure troves of personal and professional data, making them prime targets. Threats to your smartphone can come in various [Forms](../../Skills/Web%20Development/Forms.md) such as malware, spyware, or [Phishing](../../Skills/Software%20Development/Phishing.md) attempts. These are like the digital thieves lurking around looking for an opportunity to strike.
>
> **[1:34](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/threats-risks-and-vulnerabilities?u=76281980&t=94)** Vulnerabilities are akin to leaving your smartphone unlocked or neglecting software updates. These weaknesses can easily be exploited by threats, allowing them to infiltrate your device. Risk then is the potential for these threats to successfully exploit vulnerabilities in your smartphone, which we call likelihood leading to consequences like data theft, financial loss, or even identity fraud, which is what we call impact. Take the well-known ransomware attack in 2017 as an example. The threat was ransomware. The vulnerability was the unpatched software, and the risk was a significant potential disruption and data loss across organizations worldwide. This incident underscores the importance of understanding and addressing each element. Distinguishing between threats, vulnerabilities and risks is fundamental to having conversations about cybersecurity, whether you're an exec or just entering the field. By understanding and addressing each, we can better protect our organizations from potential cyber harm. Next up, we're going to talk about defense in depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - first (1)

#### [Defense in depth](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/defense-in-depth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/defense-in-depth?u=76281980&t=0)** - Defense in depth is a strategy that layers multiple controls across the network, endpoint, user, and data levels. If you're in the cloud, you can also include the cloud platform as well. This approach doesn't just aim to prevent attacks, but also to detect and respond to them effectively. Let's explore how these layers work together to create a formidable architecture, starting with the network level controls. These are the first line of defense. Think firewalls, [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) systems, and network segmentation. At the network level, think of this like the gate around your home. Next up, endpoint level controls. They protect the devices that connect to your network. This includes endpoint detection and response, or better known as EDR. It's like a guard dog, alarm system, and minefield, all built within the house meant to stop an intruder or alert you to their presence. At the user level, the controls focus on the individuals accessing the system with strong authentication methods like [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) and access control policies. It's all about ensuring that only the right people have the right access. User level controls determine who can enter your home and what rooms they can access. Through biometric access, strong passwords, and access management, you control entry similar to giving keys to family members while restricting certain areas. It's about ensuring the right level of access for the right people. Data level controls secure the core of your kingdom. Your data, encryption, backups,
>
> **[1:34](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/defense-in-depth?u=76281980&t=94)** and [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) are all paramount. Even if someone breaches your defenses, encryption acts as a safe, keeping your data secure and unreadable to unauthorized users. When considering defense in depth, the most comprehensive strategies encompass protective, detective and responsive-based controls. Protective measures aim to prevent attacks, detective controls alert you to ongoing or potential attacks, and the response controls like [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) teams and automated system alerts help you [react](../../Skills/Web%20Development/React.js.md) swiftly to mitigate damage. Together, these form a comprehensive defense strategy, ensuring resilience against attacks from all angles. Okay, so we've explored defense in depth through the lens of [Cybersecurity](../../Topics/Cybersecurity.md), but one thing I found fascinating is that this strategy is actually rooted in military history. It originated as a tactic designed to delay rather than prevent the advance of an attacker by employing multiple layers of defense, thus buying time and creating opportunities for counter attacks. Similarly, in cybersecurity, we layer our defenses to slow down attackers, gather intelligence on their methods, and respond effectively. It's about creating conditions that are favorable for defense, turning the tables on cyber adversaries, much like military strategists of old. So, from ancient battlefields to the digital frontiers of today, the principles of defense in depth remain as relevant as ever. It's about having multiple layers of security, each ready to protect, detect, and respond to threats,
>
> **[3:09](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/defense-in-depth?u=76281980&t=189)** ensuring no single point of failure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1), [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) (1), [Data Classification](../../Skills/Data%20Science/Data%20Classification.md) (1), [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** it's like (1), similar to (1)
> **Env Vars:** edr (1)
> **Speakers:** - defense (1)


### 2. Threats and Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Insider threat](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/insider-threat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/insider-threat?u=76281980&t=0)** - One of the most elusive dangers organizations face comes from within, the insider threat. These threats are not just about malicious intent, they can also arise from simple mistakes or negligence. Let's dive into what makes insider threats so challenging to manage, and how businesses can safeguard against them. Insider threats come from people within the organization. Employees, contractors, or partners, who have access to sensitive information and systems. They can manifest in three main ways, malicious insiders who intentionally harm the company, negligent insiders who inadvertently cause damage through carelessness, and accidental insiders who fall victim to [Phishing](../../Skills/Software%20Development/Phishing.md) or social engineering attacks. Imagine a sports team where one player decides to share the team's playbook with the competition, or a player leaves the playbook in a public place. Both scenarios put the team at a disadvantage, much like an insider threat can compromise an organization's security posture. The playbook is your company sensitive data, and the team's success depends on keeping it secure. The implications of insider threats are real and significant. For example, a major financial institution once faced a massive data breach, when an employee misused access privileges, leading to millions of customers' data being exposed. Incidents like these happen all too often. Preventing insider threats involves a mix of technical controls, such as access management, and user behavior analytics, as well as organizational measures like regular training,
>
> **[1:33](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/insider-threat?u=76281980&t=93)** and a culture of [Security Awareness](../../Skills/Cybersecurity/Security%20Awareness.md), which would include encouraging employees to report suspicious activities, and ensuring they understand the protocols for handling sensitive information. Now, these are too simple, but key ways to mitigating these risks. Insider threats pose a complex challenge, blending the lines between [Cybersecurity](../../Topics/Cybersecurity.md) and human factors. Remember, security is not just the responsibility of IT and Cyber, it's a team effort, and we are only as strong as the team members we work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (1), [Security Awareness](../../Skills/Cybersecurity/Security%20Awareness.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Analogies:** imagine (1), for example (1), such as (1)
> **Speakers:** - one (1)

#### [Ransomware](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/ransomware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/ransomware?u=76281980&t=0)** - One of the most feared type of security threats is ransomware. Ransomware is malicious software that encrypts files on a device or network, holding them hostage until a ransom is paid, usually in some form of [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md). Ransomware attackers are no longer satisfied with just locking down your files. Now, they often threaten to release sensitive data to the public, or even report you to regulators if the ransom isn't paid, doubling down on their extortion efforts. This not only complicates a decision to pay the ransom, but also puts personal and corporate reputations at risk. While it may seem daunting, understand that, at its core, ransomware, it's still just malware, and that will help you in crafting effective defenses. We'll cover everything from basic [Resiliency](../../Skills/Software%20Development/Resiliency.md) controls to ransomware-specific countermeasures. Ransomware operates by infiltrating systems in ways similar to other malware, through [Phishing](../../Skills/Software%20Development/Phishing.md) emails, exploiting vulnerabilities, or malicious downloads. This means standard malware protection techniques are also your first line of defense against ransomware. Let's break down some of the basics before diving into the specifics. Foundational [Cybersecurity](../../Topics/Cybersecurity.md) measures include regular software updates, robust [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) solutions, and educating employees about phishing. These practices are top priority for keeping most malware at bay, including ransomware. However, ransomware's unique threat of data encryption and theft demands additional specific strategies. For ransomware, employing immutable storage architectures ensures that backups remain untouched and unalterable
>
> **[1:37](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/ransomware?u=76281980&t=97)** even if ransomware strikes. Implementing application whitelisting, restricting administrative privileges, and segmenting networks can also drastically reduce the risk and impact of an attack by limiting its blast radius, which is another way of saying limiting how much it can spread. Moreover, leveraging end-to-end encryption protects data in transit and at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), making the data useless to attackers if they steal it. Having a well-tested [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) plan and engaging in threat hunting activities can help identify and mitigate threats before they cause damage. Additionally, leveraging threat intelligence services can provide an early warning about emerging ransomware campaigns. You may have noticed that I didn't have any analogies for this one. It's because it's pretty straightforward. While ransomware presents a formidable challenge, a defense in depth strategy incorporating both general malware defenses and malware-specific tactics offer the best protection. By understanding the threat and implementing a comprehensive strategy, you can safeguard your systems against ransomware's potentially devastating effects. Remember, resilience in cybersecurity isn't just about resisting attacks, it's about recovering quickly when they occur. Next up is another type of attack, denial of service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (2), [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Cryptocurrency](../../Skills/Data%20Science/Cryptocurrency.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1), [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) (1)
> **Analogies:** similar to (1)
> **Warnings:** warning (1)
> **Speakers:** - one (1)

#### [Denial of service attacks](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/denial-of-service-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/denial-of-service-attacks?u=76281980&t=0)** - Denial of service attacks are a real pain, and they can quickly frustrate any IT or cyber team. These attacks aim to disrupt normal traffic of targeted servers, services, or networks by overwhelming the target or its surrounding infrastructure with a flood of internet traffic. I'm going to break down the three main types of DoS attacks. Distributed denial of service, or DDoS, application layer attacks, and network layer attacks. DDoS involves multiple compromised computers attacking a single target, such as a website or an online service. These computers are commonly part of a botnet, which is a network of compromised computers. This botnet-based approach results in overwhelming the target's capacity to handle multiple requests, leading to a denial of service for the regular traffic. Next, application layer attacks. They target the top layer of the OSI model, which is where applications operate. These attacks focus on exhausting the resources of a specific application or service, making it slow or completely unresponsive. Unlike DDoS attacks that flood the network, application layer attacks are more subtle, aiming at specific functionalities within an application to disrupt service. Lastly, network layer attacks. They're aiming at the infrastructure layer, disrupting the connectivity between the user and the service. These attacks involve techniques such as IP spoofing and ICMP flooding, which targets the underlying network protocols
>
> **[1:34](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/denial-of-service-attacks?u=76281980&t=94)** and equipment, like routers and switches, which can prevent normal flow of data. This type of attack can cause widespread disruption, not just to a single application, but to the entire network. Think of denial service like a crowd blocking an entrance to a concert. You have tickets, but you can't get in. It's about overwhelming your service, application, or network to the point that it can't operate for legitimate users. Now that we've covered some of the threats and attacks, get ready to test your understanding in the upcoming quiz.

> [!info]- Semantic Content
>
> **Env Vars:** osi (1), icmp (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - denial (1)


### 3. Modern Security Approaches

[↑ Back to Table of Contents](#table-of-contents)

#### [Passwordless authentication](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/passwordless-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/passwordless-authentication?u=76281980&t=0)** - Now we're going to take a journey into the world of passwordless authentication, a security method that's changing how we protect our identities. Unlike traditional security which relies on what you know, like a password, passwordless authentication shifts the focus to what you have, like a mobile device, who you are, like your fingerprint or facial recognition, and where you are, as in your geolocation or IP address. Passwordless utilizes varying combinations of these factors, which is hard to steal, and provides a much stronger approach to authentication. Imagine you have a key ring full of keys for different doors, each key is like a different password. That can be cumbersome to carry around, easy to lose, and if someone else gets it, they can open one of your doors. Think of the doors like applications. Passwordless authentication is like replacing that bulky key ring with a single secure digital key, programmed in a way that only you can use. It can also be your biometric data. In both scenarios, it's something you always have with you, unique to you, and is much harder for someone else to replicate or steal. If you log into your phone with your face instead of a PIN, you're using a form of passwordless authentication. Let's go a bit deeper into one of the technologies enabling passwordless authentication, specifically what I referred to earlier as a digital key uniquely tailored to your personal use. This is known as a FIDO2 key. FIDO2 keys or [Tokens](../../Skills/Web%20Development/Tokens.md) are intended to enhance the security and convenience of the authentication process. They work by creating a unique cryptographic link between the user and the application,
>
> **[1:35](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/passwordless-authentication?u=76281980&t=95)** ensuring that only the holder of that specific token can gain access. Unlike traditional passwords that can be guessed, or stolen, or phished, FIDO2 keys leverage public key [Cryptography](../../Skills/Cybersecurity/Cryptography.md) to offer a much stronger form of security that's also user friendly. When you use a FIDO2 key, you're essentially carrying a digital handshake that uniquely identifies you to the application you're logging into without the need for typing in passwords or remembering complex sequences of characters. Passwordless authentication is the evolution of access control by steering away from the easily compromised, what you know, like passwords, to a more robust and intuitive approach leaning on what you have such as a FIDO token, who you are through biometrics, and even where you are using location-based verification. Because I, for example, will never be logging in from East Asia, and if I am, I welcome the extra scrutiny. This combination significantly enhances security, but also the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). It's rare that a game-changing preventative control enhances the experiences our users face, but this is one of them. We're moving towards a future where aspects of security are almost invisible to us, yet more effective than ever, which is a perfect segue to Zero Trust, which is next up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** fido2 (4), pin (1), fido (1)
> **Analogies:** imagine (1), such as (1), for example (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - now (1)

#### [Zero Trust model](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/zero-trust-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/zero-trust-model?u=76281980&t=0)** - Imagine a world where you need to verify your identity for every door you open, even within your own house. That's zero trust in a nutshell. Think of zero trust as the ultimate security checkpoint. It's like going through airport security every time you need to access something, whether it's data and application, or even access to your network. Just as airport security doesn't care if you're a frequent flyer, zero trust doesn't care how often you've accessed something before. Every attempt is scrutinized with the same level of rigorous verification. Now, as we peel back the layers of zero trust model, it's important to note it's not a technology. It's a holistic architecture that is comprised of many security best practices. Unlike legacy security models that operate on a trust but verify basis, zero trust operates on a never trust, always verify principle. I personally like to say, verify, then trust. But what really sets it apart is comprehensive applicability across the different layers that we discussed in the defense and debt video earlier. Network, application, data, and even the user. There are many best practices, but I have three favorite that I believe to be the most impactful in no particular order. Divide the network or cloud environment into smaller secured zones, limiting an attacker's ability to move laterally across the network and require authentication to traverse these zones. This is called segmentation or microsegmentation. The second best practice is to require more than one piece
>
> **[1:34](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/zero-trust-model?u=76281980&t=94)** of evidence to verify user's identity, making unauthorized access significantly more difficult, perhaps even passwordless if you have the capability. Now, lastly, it's one that's not highly touted. Use the data gleaned from the first two best practices for advanced analytics to gain insights into network traffic, helping to detect and respond to anomalies quickly. Now, zero trust is widely misunderstood outside of [Cybersecurity](../../Topics/Cybersecurity.md) circles. So I want to end with one more analogy. Think about living in an apartment complex. You can only access your apartment then to open the door. You need a key or a code. That's your first layer of security. Now, imagine that inside your apartment, every room, the kitchen, the living room, your bedroom, the pantry. If you have young kiddos like me, they also require a key to enter. Even if someone were to get past the front door, they couldn't access any other room without the right key. Now, this is similar to the zero trust model. Access requires verification at every step, ensuring that access is granted only were absolutely necessary. Just because you let them in the house, you wouldn't want anybody to be able to wander into your bedroom or pantry and eat all your snacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Analogies:** imagine (2), it's like (1), similar to (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** open the (1)
> **Definitions:** is called (1)
> **Best Practices:** best practice (1)
> **Speakers:** - imagine (1)

#### [Threat modeling](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/threat-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/threat-modeling?u=76281980&t=0)** - Shifting our focus to the indispensable practice of cyber-[Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md). It's like mapping the terrain and planning the defense in a digital battlefield. Imagine you're the coach of a football team gearing up for the championship game. You wouldn't just train your players in general techniques. You'd analyze your opponent's past games, understand their tactics, and prepare your team for what they're going to most likely face. You would also identify the weaknesses on your team that the other team would likely try to take advantage of. Cyber-threat modeling is similar. It's about understanding the specific threats to your team and your applications and devising a strategy to counter them effectively. The most popular threat modeling techniques are STRIDE and MITRE ATT&CK. We're going to break down STRIDE because it's more of a pure threat modeling framework, while MITRE has other applications as well. STRIDE is a threat modeling framework used to identify and categorize security threats by focusing on six key areas. Let's break down each one. First up, S for spoofing. This is when an attacker wear a digital disguise, pretending to be someone they're not, and gain unauthorized access. It's like a spy trying to sneak into a party by wearing a fake mustache and a tuxedo. (chuckles) Next, the T is for tampering. Imagine sending a sealed letter, but along the way, someone opens it and changes the message. In [Cybersecurity](../../Topics/Cybersecurity.md), tampering refers to unauthorized alterations made to data. R is for repudiation,
>
> **[1:37](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/threat-modeling?u=76281980&t=97)** which is like having someone deny they ever sent the letter even when they did, especially because they left no evidence behind. It involves denying an action in a system without a way to prove otherwise. I is for information disclosure, which happens when confidential data is exposed to someone that should not see it. Picture a locked cabinet suddenly becoming unlocked and its contents available for prying eyes. The D is for denial of service, which we covered earlier. It's about overwhelming a service to the point it can't operate for legitimate users. And lastly, E is for elevation of privilege. Imagine someone with a general admission ticket finding a way to sneak into the VIP section. This is the threat that involves someone gaining higher access levels than they're authorized for. That's STRIDE in a nutshell. By understanding and addressing these threats, we can harden our defenses with precision based on the threats our systems will face. Just like a well-prepared coach leads their team to victory, a well-implemented threat modeling strategy can proactively inform your cyber risk strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (6), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Env Vars:** stride (4), mitre (2), att (1), vip (1)
> **Analogies:** imagine (3), it's like (2), picture (1), just like (1)
> **Definitions:** is a  (1), refers to (1)
> **Cross-References:** we covered (1)
> **Speakers:** - shifting (1)

#### [Web application firewall vs. traditional firewall](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/web-application-firewall-vs-traditional-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/web-application-firewall-vs-traditional-firewall?u=76281980&t=0)** - Web application firewalls, better known as WAFs, have a specialized focus on HTTP and HTTPS traffic. This specifically allows them to defend against unique web-based threats in ways that traditional firewalls cannot. WAFs can be deployed in three [Forms](../../Skills/Web%20Development/Forms.md) to bolster your security. WAFs are designed to combat a variety of specific threats, such as [SQL](../../Skills/Data%20Science/SQL.md) injection, where attackers manipulate the backend database through web forms; or denial of service attacks, like we've covered a couple times already. Among other threats, they also protect against bots running AI or automated attacks. They are specifically designed to recognize these patterns. For more details on these type of attack patterns, please refer to the handouts. Now, these are all threats that take place on the application layer, where web applications interact with users and data, making WAFs the most used technology for maintaining the integrity and security of web-based services. Whether through physical devices, services provided by your favorite public cloud provider, or via [SaaS](../../Glossary/Concept/SaaS.md)-based content delivery network platforms, WAFs provide the flexibility and robust protection needed to secure the modern web. Imagining your mailman could not only deliver your letters, but also check them to ensure they're safe before handing them over. WAFs perform a similar function for your website. They inspect the content of HTTP and HTTPS traffic, much like reading the letters, filtering out anything malicious before it reaches your site. Now, contrast this with traditional firewalls,
>
> **[1:34](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/web-application-firewall-vs-traditional-firewall?u=76281980&t=94)** which act like more like a gate that checks for authorized entry without examining the contents closely. That's the value of WAFs. All of your favorite apps and websites are protected by WAFs. They are an integral part of any cyber architecture for your web applications. Now, next up, we're going to cover how we make sure those apps are securely developed by adopting a shift left operating model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1)
> **Env Vars:** http (2), https (2), sql (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - web (1)

#### [Shifting left](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/shifting-left?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/shifting-left?u=76281980&t=0)** - Have you ever heard the term shift left in the world of [Software Development](../../Topics/Software%20Development.md)? It means integrating security measures early in the software development lifecycle rather than at the end. This approach ensures that security is a priority from the start, leading to more secure and quality software [products](../../Skills/Software%20Development/Microsoft%20Products.md) and applications. Imagine you're building a new skyscraper before any construction begins. A city inspector reviews the blueprints checking for compliance with safety and environmental standards. This early inspection is analogous to shifting left in [Cybersecurity](../../Topics/Cybersecurity.md) where security checks are made during the design phase of software development, ensuring a solid foundation from the start. Bugs uncovered late in the development lifecycle can derail production schedules and push back release dates. However, by adopting a shift left approach, we can sidestep these hurdles as we approach the finish line. An illuminating report by Tech Giant, which I've made available in the handouts, also highlights the [stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) cost contrast as well. Fixing defects and vulnerabilities early in development costs an average of $80 compared to a staggering $7,600 for those found in production. This dramatic difference showcases the cost benefits of early detection and resolution of security issues. Underscoring the vulnerabilities lurking, undetected into the late stages or worse, post-deployment can significantly inflate development expenses. Shifting left is not a new concept. In fact, it was first coined in 2001 by Larry Smith, who lived by the maxim "test early and often." Remember, when it comes to risk detection,
>
> **[1:36](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/shifting-left?u=76281980&t=96)** earlier always means better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - have (1)


### 4. Cloud and Compliance

[↑ Back to Table of Contents](#table-of-contents)

#### [Compliance vs. security](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/compliance-vs-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/compliance-vs-security?u=76281980&t=0)** - Compliance and strategy follow the rules, but security? That's what truly protects you from threats. Imagine you're a ship captain navigating treacherous pirate infested waters. Security is like the strength and resilience of your ship, the sharpness of your crew skills, the functionality of your radar, and the defense systems that you rely on for your navigation tools. Pretty much everything that keeps you safe from the stormy seas and lurking pirates to make sure the mission is complete and everyone makes it back to their families at the end of the mission. Compliance, on the other hand, is making sure your ship meets all the maritime regulations, from the size of your lifeboats to the paperwork that needs to be in order. It's about adhering to the rules that ensure your fit to sell, but not necessarily prepared for every unexpected wave. Now, both are absolutely needed for a successful voyage, but the intent behind each is different. The saying compliance doesn't equal security. That's one commonly shared. It highlights that compliance assessments are snapshots, capturing the state of a program at a point in time, rather than providing ongoing coverage against all potential threats. Compliance standards rely on solid, yet occasionally outdated security practices. While adherence to these standards can close some holes in your security program, this approach is generally not tailored to an organization's specific risk profile and may leave some cyber threats unaddressed. Here's my favorite example when explaining this. As of 2024, compliance standards often prescribe baseline security measures
>
> **[1:35](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/compliance-vs-security?u=76281980&t=95)** like the use of antivirus software. Now antivirus is fundamental for detecting and removing malware, but the approach is now, it's outdated, because it operates based on known threats. It's like being prepared for yesterday's weather, today, useful but not foolproof. In contrast, [Cybersecurity](../../Topics/Cybersecurity.md) best practices advocate for endpoint detection and response or EDR. EDR doesn't just look for known threats. It monitors behavior, detects anomalies, and responds to threats in real time. Cybersecurity's based on threat intel. It's like having weather forecast that updates minute by minute, preparing you for what's coming. While compliance sets essential benchmarks for organizational security, it's merely the starting line in the race against cyber threats. The value of compliance and laying down foundational security practices cannot be understated. It ensures that a baseline level of protection is maintained and that key risks are addressed. However, the dynamic nature of cyber risks demands more. The pursuit of comprehensive security means going beyond compliance, adapting to emerging threats with agility and implementing proactive measures that anticipate rather than [react](../../Skills/Web%20Development/React.js.md). By doing so, organizations not only adhere to standards, but also increase their defenses against the ever-evolving landscape of cyber threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Analogies:** it's like (2), imagine (1)
> **Env Vars:** edr (2)
> **CLI Commands:** make (1)
> **Speakers:** - compliance (1)

#### [Native vs. third-party security services](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/native-vs-third-party-security-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/native-vs-third-party-security-services?u=76281980&t=0)** - When it comes to securing the public cloud, there are two approaches to tooling and security services. One being the native services from the cloud provider, and the second being a third party security service offered by security vendors. Join me as we examine how these services can work together to provide a comprehensive security for your cloud setup. Native services from the public cloud providers such as AWS, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), those are integrated directly into your cloud platform, designed to offer seamless security that compliments the specific architecture and services of the platform. The benefits include immediate access to security features, simplified management through a unified interface, and optimize performance for the cloud environment in question. Third party services bring external solutions into your cloud environment. They simplify security architectures for organizations using a multi-[Cloud Strategy](../../Skills/Cloud%20Computing/Cloud%20Strategy.md) as they can offer consistent security across different platforms. Moreover, many security vendors can extend their protection to on-premise environments in stronger cohesive security posture that covers both cloud and traditional data centers. Additional benefits include the ability to standardize security practices across diverse environments, specialized protection against advanced threats, and the flexibility to address specific organizational needs beyond what native options might offer. The vendor approach also offers you options as there are many different vendors out there. The art of [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) lies in leveraging the strengths of both the native and third party services. By utilizing native services for commoditized capabilities
>
> **[1:36](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/native-vs-third-party-security-services?u=76281980&t=96)** and complimenting them with third party solutions for advanced threats and specialized needs, organizations can achieve a flexible and comprehensive security posture. Now, this balanced approach, it ensures that all aspects of cloud security are addressed from core platform protection to advanced threat detection and response. Now, for a list of these services and all the pros and cons of each, check out the handout. When it comes to cloud security, there's no silver bullet. The choice between native and third party services depends on your organization's architecture, security requirements, and operational needs. By leveraging the strengths of each and considering how they can work together, especially in a multi-cloud and hybrid environment, you can develop a robust security posture that protects everything in your scope.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (3), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Cloud Strategy](../../Skills/Cloud%20Computing/Cloud%20Strategy.md) (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - when (1)


### 5. Topics of the Future

[↑ Back to Table of Contents](#table-of-contents)

#### [Post-quantum cryptography](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/post-quantum-cryptography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/post-quantum-cryptography?u=76281980&t=0)** - You may think you need a degree in math to understand post-quantum [Cryptography](../../Skills/Cybersecurity/Cryptography.md) or PQC, but that's not the case. PQC is the term used for cryptographic [Algorithms](../../Skills/Software%20Development/Algorithms.md) that are designed to be secure against attacks by quantum computers. The algorithms in use before the introduction of quantum computers, such as RSA and ECC, can take a lifetime to break. Now, I've seen projections like a million or a billion years to break, but quantum computers with Shor's algorithm cut that timeframe down to minutes or hours at most. Here's how it works. Imagine a game with thousands of keys and thousands of locks, where only one key fits one lock. Traditionally, finding the right key for a lock through a process of elimination could take an incredibly long time. That's what encryption is like today. Now envision being able to operate at a rate thousands of times faster. Thanks to [Quantum Computing](../../Skills/Cybersecurity/Quantum%20Computing.md), you may be able to find the lock-to-key combination a lot faster. Suddenly, data we've encrypted and considered safe, such as data breaches of encrypted data that never made it to the news, is now at risk. This includes personally identifiable information, which remains valuable for a person's entire lifetime. In response to these quantum threats, in 2020, the US National Institute of Standards and Technology, or [NIST](../../Skills/IT%20Help%20Desk/NIST.md), began evaluating new cryptographic methods that could resist quantum attacks.
>
> **[1:35](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/post-quantum-cryptography?u=76281980&t=95)** This initiative aimed to safeguard our digital communications against the unprecedented power of quantum computers. Let's consider HTTPS, the security protocol for the internet. Currently, cracking the encryption of HTTPS with pre-quantum technology could take a traditional computer many years, often outlasting the useful life of the information. However, a quantum computer could reduce this time to mere seconds. Post-quantum cryptographic algorithms aim to restore this balance by developing methods that would take a quantum computer as long as a traditional computer, securing our data for its entire intended lifespan. As we move towards a quantum future, it's essential to stay ahead of the curve by adopting post-quantum cryptographic methods. By preparing now, we can ensure that our data remains secure even in the face of these new technological advancements. The transition to post-quantum cryptography isn't just a precaution, it's a necessary step to future-proof our digital world against emerging quantum threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (2), [Quantum Computing](../../Skills/Cybersecurity/Quantum%20Computing.md) (1), [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (1)
> **Env Vars:** pqc (2), https (2), rsa (1), ecc (1), nist (1)
> **Analogies:** such as (2), imagine (1)
> **CLI Commands:** find (1)
> **Speakers:** - you (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Spread your new found expertise](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/spread-your-new-found-expertise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/demystifying-advanced-and-complex-security-topics/spread-your-new-found-expertise?u=76281980&t=0)** - As we wrap up, I want to take a moment to thank you for joining me on this journey to demystify [Cybersecurity](../../Topics/Cybersecurity.md). Communicating these topics effectively is more than just understanding them. It's about being able to convey them in a way that others can grasp and appreciate. This skill is invaluable, especially in building your influence in the cybersecurity field, and your organization. I encourage you to make full use of the handouts and additional resources provided. They're designed to reinforce your learning and help you dive deeper into these topics at your own pace. Now, don't forget to contribute your own analogies and insights in the comment section. Your unique perspectives can help others understand these concepts even better. Communication is the foundation of leadership, and leadership in the cyber industry, that's my passion. Find me and connect. Let's keep this conversation going. Now, remember, the ability to communicate complex cybersecurity topics effectively sets you apart, and will help you take your career to the next level. Thank you once again. I look forward to connecting with you soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (3)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - as (1)


## Instructor

- [Jerich Beason](../../Instructors/Cybersecurity/Jerich%20Beason.md)

## Resources

- Exercise files available

## Skills Covered

- Cyber Security Risk

## Path Context

### In [Navigating the Cybersecurity Threat Landscape](../../Paths/Cybersecurity/Learning%20Paths/Navigating%20the%20Cybersecurity%20Threat%20Landscape.md)
← [The Cybersecurity Threat Landscape](The%20Cybersecurity%20Threat%20Landscape.md) | **2 of 8** | [Learning the OWASP Top 10](Learning%20the%20OWASP%20Top%2010.md) →

## Appears In

- [Navigating the Cybersecurity Threat Landscape](../../Paths/Cybersecurity/Learning%20Paths/Navigating%20the%20Cybersecurity%20Threat%20Landscape.md)

---

[↑ Back to top](#)