---
type: course
cssclasses:
  - lle-course
slug: understanding-zero-trust
url: "https://www.linkedin.com/learning/understanding-zero-trust"
duration_minutes: 59
duration: 59m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHtcfqlt6bcmQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622565712579?e=2147483647&amp;v=beta&amp;t=250TjdNY4ufiC8Lc-DV5pqxOlo6nr6aUhs_HjqZ9Wk4"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Digital Transformation for Tech Leaders]]'
prev_courses:
  - '[[Building and Managing a Cybersecurity Program]]'
next_courses:
  - '[[Blockchain Basics]]'
path_nav: '[{"path":"Digital Transformation for Tech Leaders","position":10,"total":15,"prev":"Building and Managing a Cybersecurity Program","next":"Blockchain Basics"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Understanding%20Zero%20Trust.md)

![Understanding Zero Trust](https://media.licdn.com/dms/image/v2/C4E0DAQHtcfqlt6bcmQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1622565712579?e=2147483647&amp;v=beta&amp;t=250TjdNY4ufiC8Lc-DV5pqxOlo6nr6aUhs_HjqZ9Wk4)

# Understanding Zero Trust

> The traditional model of a firewalled enterprise separating trusted insiders from untrusted outsiders worked effectively for years, but it’s no longer a viable option in today’s world. Workers working remotely, insider threats, and attackers taking advantage of trust between internal systems—these demand a new approach to extending protection to all users and their devices, regardless of their loc

> [LinkedIn Learning](https://www.linkedin.com/learning/understanding-zero-trust) | 59m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Using Zero Trust to protect against cyberattack](#using-zero-trust-to-protect-against-cyberattack)
  - [What you should know](#what-you-should-know)
- [**1. Background**](#1-background) (3 videos)
  - [A brief history of technology trust](#a-brief-history-of-technology-trust)
  - [Concepts of software trust](#concepts-of-software-trust)
  - [A case study in failed trust](#a-case-study-in-failed-trust)
- [**2. Zero Trust**](#2-zero-trust) (8 videos)
  - [What is Zero Trust?](#what-is-zero-trust)
  - [The principles of Zero Trust](#the-principles-of-zero-trust)
  - [ACT-IAC and the six pillars of zero trust](#act-iac-and-the-six-pillars-of-zero-trust)
  - [Zero trust across the digital estate](#zero-trust-across-the-digital-estate)
  - [Policy-based admission control](#policy-based-admission-control)
  - [Zero Trust and the business context](#zero-trust-and-the-business-context)
  - [Zero Trust data](#zero-trust-data)
  - [An extended approach to Zero Trust](#an-extended-approach-to-zero-trust)
- [**3. Implementing Zero Trust**](#3-implementing-zero-trust) (3 videos)
  - [Building a Zero Trust foundation](#building-a-zero-trust-foundation)
  - [Designing a policy engine](#designing-a-policy-engine)
  - [Examples of zero trust](#examples-of-zero-trust)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Zero Trust to protect against cyberattack](https://www.linkedin.com/learning/understanding-zero-trust/using-zero-trust-to-protect-against-cyberattack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/using-zero-trust-to-protect-against-cyberattack?u=76281980&t=0)** - [Malcolm] The traditional model of a firewalled enterprise, separating the untrusted outsiders from the trusted insiders, is no longer viable. Our employees often work remotely, we see examples of insider threats, and we see attackers penetrating the perimeter and moving with ease inside our networks, taking advantage of the trust between internal systems. In this [[LinkedIn]] Learning course, you'll learn how to better protect your networks and systems by adopting what's become known as a zero trust approach to access control. I'm Malcolm Shore and I've spent a career helping governments and businesses take advantage of emerging security concepts to provide better protection for their networks and systems. Now, let's get started understanding zero trust.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Speakers:** - [malcolm] (1)

#### [What you should know](https://www.linkedin.com/learning/understanding-zero-trust/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/what-you-should-know?u=76281980&t=0)** - This is an introductory course on Zero Trust and doesn't require any specific pre-knowledge other than a basic understanding of the modern IT environment. The course is focused on the trust relationships we use to make access control decisions, so it would be useful to have some knowledge of how we use identities or manage access to systems. It would also be useful to have at least a basic understanding of computer networks and in particular the way in which we segregate areas of particular sensitivity with network access devices. However, if you're not familiar with these concepts, then don't worry because we'll be covering everything you need as we go.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - this (1)


### 1. Background

[↑ Back to Table of Contents](#table-of-contents)

#### [A brief history of technology trust](https://www.linkedin.com/learning/understanding-zero-trust/a-brief-history-of-technology-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/a-brief-history-of-technology-trust?u=76281980&t=0)** - [Instructor] The potential for security breaches was recognized early in the days of mainframes. In the 1980s, the defense set to develop the trusted computer security evaluation criteria as a means of categorizing how much confidence the security mechanisms in a computer system could provide. While this transitioned into a more commercial approach, known as common criteria, the rapid development of technology combined with the extended timeframes required for evaluation meant that [[Microsoft Products|products]] were often out-of-date by the time they'd been evaluated, and so few organizations have taken any interest in using evaluated products. It's now unclear whether evaluation as a strategy will have any future in providing confidence in technology. Outside of the defense sector, the focus for security was on implementing controls in the software to detect attempts to misuse legitimate application functions, such as making unauthorized payments, changing account numbers and so on. The effectiveness of the controls was checked through formal audits based on the auditor's IT general controls. It wasn't until the 1990s that we began to see system vulnerabilities being exploited as a real threat to everyday use of computers. At first, it was just vandalistic pranksters releasing viruses such as Slammer and Code Red, which destroyed computer software, but with the emergence of online systems involving credit cards and bank account credentials,
>
> **[1:34](https://www.linkedin.com/learning/understanding-zero-trust/a-brief-history-of-technology-trust?u=76281980&t=94)** organized crime moved in to prey on unsuspecting users with [[Banking]] malware such as Zeus and the evolution into ransomware such as CryptoLocker and Ryuk. The use by nation state actors of malware known as advanced persistent threats, or APTs, was highlighted in 2013 with the Snowden exposures. APTs used sophisticated software exploits to get into a network and then move from system to system across the network typically searching for sensitive information. APTs will do their best to exploit the trust that exists between components in the network. One technique used by APTs is intercepting and reusing session information, created when a user has logged in. Another technique is privileged escalation where the malware exploits software flaws in order to gain trusted administrator status, and so have access to all information on the system. System audits are of limited benefits in avoiding security breaches, and the product evaluation approach to ensuring systems are secure has failed. Currently, the best practice for ensuring system security is to carry out [[Penetration Testing]]. This approach doesn't guarantee that the system is secure, but it has been effective in making access more difficult for attackers, and in many cases, persuading them to move to easier targets. The aerospace sector has led the way to applying safety techniques to [[Software Development]], and in particular, using the fault mode
>
> **[3:07](https://www.linkedin.com/learning/understanding-zero-trust/a-brief-history-of-technology-trust?u=76281980&t=187)** and effects analysis approach to identify and remove software defects. Other approaches, such as correctness by construction, an approach championed by practice in the UK, have demonstrated the ability to achieve substantial improvements in software quality. A new approach to achieving trust in technology is emerging from the UK, published as British Standard 10754-1: Information Technology, Systems Trustworthiness. This is a lifecycle approach using a trustworthiness framework covering safety, reliability, resilience and security. It requires that currently known threats relevant to the system are understood in terms of tactics, techniques and practices, or TTPs, and that a systematic approach is taken to design and implementation, including the use of trusted languages for development and [[Secure Coding]] rules. Most simple software mistakes are now well known, and while vulnerabilities are still being found, modern exploits have to be much more sophisticated. Once inside the target's network, these more capable intruders can often continue to take advantage of internal network trust, and of course, the insider threat continues to be a real issue. Be it an insider innocently clicking on a malicious link or a disgruntled employee taking advantage of their legitimate access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Banking]] (1), [[Penetration Testing]] (1), [[Software Development]] (1), [[Secure Coding]] (1)
> **Analogies:** such as (5)
> **Definitions:** known as (2), is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Concepts of software trust](https://www.linkedin.com/learning/understanding-zero-trust/concepts-of-software-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/concepts-of-software-trust?u=76281980&t=0)** - [Instructor] Software trust is directly related to the number of defects in the software that could potentially be exploited. In this context, a defect is a software floor which is not detected by testing prior to release of the software. And the number of defects per thousand lines of source code is a typical quality metric for [[Software Development]]. In their software construction course, MIT indicate a typical rate of defects for industry as a whole is between one and 10 defects per thousand lines of code. At the other extreme, safety critical systems are rated as between one and 10 defects per hundred thousand lines of code. However, as we've seen in the case of Boeing even software that safety critical may have severe defects. An early approach to developing trusted software was to create models of the functional processing using formal methods specifications such as Z and Malpas. These specifications are mathematically provable and so provide a trusted foundation from which code can be generated. Unfortunately, formal methods proved to be difficult for the average programmer and not scalable beyond few hundred lines of code. There's little use of formal methods in industry. A number of more realistic approaches have been proposed for minimizing defects, many being based on best practice approaches to software quality. These include the Taguchi method, a collection of design principles aimed at improving product and process quality. And is focused on getting the design rights
>
> **[1:33](https://www.linkedin.com/learning/understanding-zero-trust/concepts-of-software-trust?u=76281980&t=93)** rather than testing to correct errors. A key element of the Taguchi methodology is the concept of quality loss function, a way of measuring not just the number, but also the effect of defects. The Taguchi approach inspired the development of the design for trustworthy software methodology. Noting that software development is pure design as the manufacturing component cost is purely and simply of a bit by bit copy of the software. One of the factors that must be taken into account in designing for trustworthiness, is the complexity of the software. The more complex the software, the more likely that it will contain defects. There are a number of well-known approaches to measuring complexity, the best known being analysis of function points. In this measurement software characteristics such as the number of external inputs or transaction types, the number of reports, the number of internal and external file interfaces, and the number of query types are used to calculate the complexity value. Another concept incorporated in the design for trustworthy software is the Poka-Yoke approach of inspection and proactive measures to detect problems before they become defects. Poka-Yoke is also known as zero defect quality control. The final concept of the trustworthy design approach that we'll cover, is quality function deployment. This is two aims, to ensure that the product is delivering exactly what is required and improving the development process itself.
>
> **[3:08](https://www.linkedin.com/learning/understanding-zero-trust/concepts-of-software-trust?u=76281980&t=188)** Software QFD is in use by many organizations today and is characterized by its use of a construct known as the house of quality diagram. QFD is now managed by the QFD Institute. Early problems with the original QFD approach, particularly in [[Agile Development|agile]] environments have led to development of what's known as blitz QFD. And the institute has been active in developing international standards including ISO 16355, general principles and perspectives of quality function deployment. While design process methods help identify problems before they become defects, the most effective approach to creating low defect software is by using high integrity languages such as Ada/spark, Haskell, and [[Rust (Programming Language)|Rust]]. High integrity languages typically incorporate assertions which enable automated proving tools to verify the integrity of the code and remove many of the traditional vectors for exploits. Ada has been used extensively in the military, aerospace, and nuclear industries for many years and is DOD is preferred language. Despite evidence that semi-formal designed together with the use of the Ada/Spark language is an effective way of achieving very low defect rates, the wider industry has not embraced Ada, due you impart to the constraints it applies to make code more secure, such as strong data typing. And impart to its reputation for being a difficult language in which to code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Agile Development|Agile]] (1), [[Rust (Programming Language)|Rust]] (1)
> **Env Vars:** qfd (5), mit (1), iso (1), dod (1)
> **Definitions:** known as (3), is a  (2), is an  (1)
> **Analogies:** such as (4)
> **CLI Commands:** make (1)
> **Exercise Files:** source code (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [A case study in failed trust](https://www.linkedin.com/learning/understanding-zero-trust/a-case-study-in-failed-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/a-case-study-in-failed-trust?u=76281980&t=0)** - [Instructor] In 2010, a domain administrator account belonging to Akamai was compromised in an attack which became known as operation Aurora. The domain administrator had access to all systems so the account was then used to move laterally across the company's network. As the network, like many others, assumed any activity inside the enterprise network was legitimate and trusted and a user on the network had access to any system hosted on it. The attack triggered the company to develop an application access model which took a much different approach to traditional enterprise access. Akamai began its remediation by examining an increasing robustness in the management of system administrator accounts. It migrated away from the use of passwords to point in time certificate based authentication. It then separated application access from network access to the point where there's no internal network at all in the conventional sense. Now, users at Akamai are all entrusted and access applications and services via a web interface. Both the users and the devices used for access need to be fully authenticated and authorized. Where in the past there was broad network level permissions, now there is a narrowly tailored approach where every application access request is verified and vetted and no applications are visible from the internet. The model implemented by Akamai is designed to contain the damage that attackers can cause if they gain access to a user account at Akamai.
>
> **[1:34](https://www.linkedin.com/learning/understanding-zero-trust/a-case-study-in-failed-trust?u=76281980&t=94)** Now, an attacker with access to an Akamai's user account would only have access to the specific tools and services available to that particular user.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Zero Trust

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Zero Trust?](https://www.linkedin.com/learning/understanding-zero-trust/what-is-zero-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/what-is-zero-trust?u=76281980&t=0)** - [Instructor] The terms zero trust is the new ABC of security, assume nothing, believe no one, and check everything. It means that the security mechanisms that we use to protect our systems shouldn't make trust assumptions but rather should assume that any access request could be malicious. The context for zero trust is the [[Decision-Making]] process which mediates access from a source or subject which could be a person, a system, a serverless application or function, or an [[Artificial Intelligence (AI)|artificial intelligence]]. To a resource or objects which could be data, a system, an application, or function, or another artificial intelligence. There are many definitions of zero trust, here we see that [[NIST]] defined zero trust as an evolving set of [[Cybersecurity]] paradigms that move defenses from static, network-based perimeters to focus on users, assets, and resources. [[Microsoft]] has a slightly longer explanation rather than definition of zero trust. And we'll come back to this when we look at the various models of zero trust. However we can see that the key sentence here is that every access request is fully authenticated, authorized and encrypted before granting access. CrowdStrike consider zero trust to be a security concept that requires all users even those inside the organization's enterprise network to be authenticated authorized, with a continuously validated security configuration and posture before being granted or keeping access to applications and data. The concept of zero trust first emerged
>
> **[1:35](https://www.linkedin.com/learning/understanding-zero-trust/what-is-zero-trust?u=76281980&t=95)** from Forrester in 2011 in a report by [[John the Ripper|John]] Kindervag. The Forester concept of zero trust is based on two principles, first, threats are present at all times no matter where our system is located, we must therefore be prepared to defend against them at all times. Second, just because a network is an internal network doesn't make it trusted. Our adversaries have shown that they're very capable of penetrating into our networks, and moving through them. So zero trust then is a paradigm which recognizes that a business secrets are no longer secure behind the corporate perimeter as they cannot be protected effectively by just having perimeter firewalls. While there's no commonly accepted definition for zero trust, there are four security mechanisms that are recognized as necessary for a zero trust solution. Just-in-time access is a mechanism used to provide the means to positively authenticate and ends to request at the time the request is made rather than assuming the request is authentic because of a token or certificate that was issued in the past. Just enough access is a mechanism which ensures that only those privileges needed to carry out the request are provided, and only for the duration of the request. This is the approach used by the more advanced privileged access managers where a new set of credentials are issued just for the duration of a specific tickets. This is a powerful defense against account-based privilege escalation zero trust brings with it a notion of data centric security as such tokenization or encryption mechanisms are needed
>
> **[3:12](https://www.linkedin.com/learning/understanding-zero-trust/what-is-zero-trust?u=76281980&t=192)** to desensitize data and so reduce the data attack surface. This means that much of the risks particularly around data breach is avoided. And the final mechanism is [[Real-Time]] access policy, making dynamic policy adjustments using a rich source of environment information. This enables access decisions to adapt to a more dynamic environment in which subjects rights and privileges and object sensitivities may change quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Decision-Making]] (1), [[NIST]] (1), [[Cybersecurity]] (1), [[Microsoft]] (1)
> **Definitions:** is a  (4), means that (2), is an  (1)
> **CLI Commands:** make (2)
> **Env Vars:** abc (1), nist (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### [The principles of Zero Trust](https://www.linkedin.com/learning/understanding-zero-trust/the-principles-of-zero-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/the-principles-of-zero-trust?u=76281980&t=0)** - [[NIST]] provides seven tenants of zero trust in its special publication 800-207. And these are the set of principles or beliefs that a generally held to be true with respect to zero trust. All data sources and computing services are considered resources. This means that all devices which connect either directly from inside the organization or remotely such as personal laptop, or mobile phones are in scope. In addition, applications which make machine to machine requests are also in scope. All communication is secured regardless of network location. In simple terms, this means that we don't differentiate the internal networks from internet access. And all are required to protect the data being carried. Access to individual enterprise resources is granted on a per session basis. This is a key principle which means any prior access does not imply that access will be automatically granted. Every access request has to be authenticated and authorized. NIST knows that this could mean sometime recently, rather than every time. But that authentication and authorization to one resource will never automatically grant access to a different resource. Access to resources is determined by dynamic policy. This means that the system will monitor the cyber health of users, applications, systems and devices. As well as other behavioral and environmental conditions. Access policies can also vary based on adjustments to the sensitivity of the resource or data being accessed. Least privileged principles are applied
>
> **[1:36](https://www.linkedin.com/learning/understanding-zero-trust/the-principles-of-zero-trust?u=76281980&t=96)** to restrict both visibility and accessibility. The integrity and security posture of all assets is monitored. The security posture or cyber health of all devices and systems should be monitored using a continuous diagnostics and mitigation system with patches and fixes being applied as needed. The risk of allowing access from devices that have known vulnerabilities and those not managed by the enterprise will be taken into account when making the access decision. Resource authentication and authorization is dynamic and strictly enforced. Not only does this mean identities are authenticated and they're authoritarians validated before access, but also the policies which determine whether access is allowed are continuously updated based on environmental conditions. And as much information as possible is collected about the assets and infrastructure, maintaining a rich source of information to enable situational awareness will allow policies to be updated in order to provide a context for access requests and improve access decisions. The NSA Central Security Service has issued its own guidance on zero trust. With a focus on its ability to prevent cyber attack. This is a different perspective focusing on a mindset which is to assume that we've been breached and taking steps in advance to limit damage. The agency suggests principles. Never trust, always verify, assume breach and verify explicitly. The key focus here is to assume a breach
>
> **[3:09](https://www.linkedin.com/learning/understanding-zero-trust/the-principles-of-zero-trust?u=76281980&t=189)** and protect against further damage. The agency also suggest four design concepts. Define mission outcomes, architect from the inside out. In other words, protect the most important assets first. Determine access needs and define access policies and inspect and log all traffic before acting. In other words, use the environmental data to inform the access decision. This diagram from NSA's guidance shows the blocking effect of a zero trust design. Making it much more difficult for an adversary. The UK National [[Cybersecurity]] Center has released a set of 10 principles of zero trust. These cover the need to know and continuously monitor the environment and its cybersecurity health. Having strong identities, assuming no trust and using policies to authorize and authenticate. And using solutions which are zero trust capable. The open group is currently developing a set of guidance documents on zero trust. And these will be issued in due course in the form of a landscape, manifesto and reference architecture. The first of the open group publications is the zero trust core principles. There are 10 core principles grouped into four themes. The first theme, is organizational value and risk alignment. With the first three principles of aligning zero trust with a modern mobile and remote working style and aligning with business goals and risks. The second theme is guardrails and governance which has the bulk of the principles.
>
> **[4:41](https://www.linkedin.com/learning/understanding-zero-trust/the-principles-of-zero-trust?u=76281980&t=281)** This theme is about guiding the adoption of zero trust within an environment of rapidly evolving compliance and regulatory needs, lagging industry controls and compliance standards. Increasing complexity and the need to automate [[Data Collection]], traceability and processes. The third theme is technology and focuses on the area of access control and privileges. And the last theme, is delivering simple and pervasive security. Cloud is a major technology and so any zero trust architecture needs to be able to work in the cloud. We'll come back to cloud later in the course, but for now let's take a quick look at the AWS guiding principles for zero trust. The first guiding principle is that network controls and perimeters remain important to the overall security architecture. The choice isn't between being identity centric and network centric, but using both effectively and in combination. The second is that zero trust may mean different things in different contexts. The use case of using a browser and a mobile app to connect to an internet facing business system and the use case of eating carefully micro segmented architectures in a cloud backend deployment are quite different from a zero trust perspective. The third principle is that zero trust must be applied with the organizational context and the value to the organization in mind. Zero trust is like any of the control and it needs to be proportional. It shouldn't inhibit the business to the point where the cost of using zero trust is more than the value
>
> **[6:15](https://www.linkedin.com/learning/understanding-zero-trust/the-principles-of-zero-trust?u=76281980&t=375)** of what it's protecting. [[Microsoft]] also based their approach on three zero trust principles. Verify explicitly using a range of available data to make the access decisions. Use least privileged to provide just enough access and do it just in time. Assume you'll have a breach, so segment the network in advance to contain any damage and use encryption to protect data. For [[Google]], BeyondCorp is zero trust. There are three BeyondCorp zero trust principles. Firstly, access to services must not be determined by the network from which you connect. The result of this is that all access should be assumed to be from untrusted networks. Access to services is granted based on contextual factors from the user in their device. This implies a level of monitoring to establish context and the access decision takes into account both the user and the device from which they're requesting access. And the third principle is that access to services must be authenticated, authorized and encrypted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2), [[Cybersecurity]] (2), [[Data Collection]] (1), [[Microsoft]] (1), [[Google]] (1)
> **Definitions:** means that (3), is a  (3), in other words (2)
> **Env Vars:** nist (2), nsa (2), aws (1)
> **CLI Commands:** make (2), aws (1)
> **Cross-References:** later in (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - nist (1)

#### [ACT-IAC and the six pillars of zero trust](https://www.linkedin.com/learning/understanding-zero-trust/act-iac-and-the-six-pillars-of-zero-trust-22383783?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/act-iac-and-the-six-pillars-of-zero-trust-22383783?u=76281980&t=0)** - [Instructor] In May, 2018, the Industry Advisory Committee of the American Council for Technology was asked to produce a report on the potential adoption of Zero Trust by federal agencies. The report concluded that Zero Trust is a mature strategy, that an effective Zero Trust deployment can significantly improve an agency's [[Cybersecurity]] posture, and that it would have a positive cybersecurity return on investment. However, it also noted that there would be many challenges in implementing such a strategy and these would need careful consideration prior to its adoption in a mission critical, multi organizational scenario. The report took into account the various tenets and principles of Zero Trust that have been published and developed a conceptual model of Zero Trust which takes the form of six pillars. The first pillar describes the requirement for ongoing authentication of trusted users by continuously monitoring and validating their trustworthiness for having access rights and privileges. The cybersecurity posture on trustworthiness of devices is the second pillar. This may involve examination of the device software version, configuration, and patch levels. Network perimeters in Zero Trust should move in from the network edge in order to isolate critical data and services, and so networks is the third pillar. Multiple perimeters should be implemented through micro-segmentation to strengthen the inner network. The application layer is another pillar with compute containers and [[Virtual Machines]]
>
> **[1:35](https://www.linkedin.com/learning/understanding-zero-trust/act-iac-and-the-six-pillars-of-zero-trust-22383783?u=76281980&t=95)** offering the ability to encapsulate applications and facilitate more granular and accurate access decisions. Multifactor authentication provides more robust access control to applications. The fifth pillar is automation. Security automation, sometimes called orchestration, connects the use of security tools through a tested workflow and assists in managing many different security systems. Good security orchestration will reduce manual effort, improve [[Incident Response]] times, and reduce costs. Finally, analytics enable the development of situational awareness so that security systems can observe and [[React.js|react]] in real time to events around and on the network. In addition to providing a conceptual model, the report notes the need for a Zero Trust deployment to be supported by a trust engine, which can calculate a trust score for a user, device or application. It also identifies micro-segmentation as necessary for using fine-grained access policies. The report identifies the need for a Zero Trust approach to adopt a control plane/data plane model, similar to the approach taken by [[Telecommunications]] providers for managing networks. In this case, the control plane is used to receive and process requests for access and to configure the data plane to allow or deny the requests. The report identifies six benefits of adopting Zero Trust. A more secure network,
>
> **[3:06](https://www.linkedin.com/learning/understanding-zero-trust/act-iac-and-the-six-pillars-of-zero-trust-22383783?u=76281980&t=186)** by taking the never trust, always check approach. A focus on safer data by highlighting the importance of protecting data in transit and at [[Representational State Transfer (REST)|rest]]. Improved protection against existing and evolving threats through taking a deny by default approach. Reduce the impact of a breach with micro-segmentation, containing the damage should an incident occur. And improve compliance and visibility through segmenting specific data and having more focus on data inventories. The report concludes by presenting insights into how Zero Trust can be implemented and some challenges for federal agencies in adopting it, particularly for mission critical systems. It notes Zero Trust is an evolutionary framework which builds on existing security concepts and doesn't introduce a radically new approach to cybersecurity. The US government's Cyber Infrastructure Security Agency in 2021 released a draft of its model of Zero Trust which is the same as that of the ACTIAC, but omits the pillars of automation and analytics. Together with the model, CISA has published a draft maturity assessment approach. The CISA publication entitled Zero Trust Maturity Model provides guidance on what might be implemented at each of the three stages of maturity. The guidance is provided as six processes per pillar as shown in this example of the device pillar.
>
> **[4:41](https://www.linkedin.com/learning/understanding-zero-trust/act-iac-and-the-six-pillars-of-zero-trust-22383783?u=76281980&t=281)** Here we see the missing areas of automation and analytics, together with compliance, data access, asset management, and governance. In traditional maturity model terms the three CISA ratings are ad hoc, repeatable, and continuously improved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Virtual Machines]] (1), [[Incident Response]] (1), [[React.js|React]] (1), [[Telecommunications]] (1)
> **Env Vars:** cisa (3), actiac (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Zero trust across the digital estate](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-across-the-digital-estate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-across-the-digital-estate?u=76281980&t=0)** - [Instructor] [[Microsoft]] was an early adopter of some of the strategies which characterize Zero Trust. In particular, promoting microsegmentation in the [[Microsoft Azure|Azure]] cloud environment through the use of security groups. Microsoft has distilled the [[NIST]] Zero Trust tenets down to three principles: verify explicitly and do so using all available data points including the user identity, the device health, location, and so on; limit access, both using just-in-time access checks and just-enough-access privileges; assume your network has been breached and segment to minimize the damage. In their book on the "Zero Trust Journey Across the Digital Estate," Abbas Kudrati and Binil Pillai explore Zero Trust with a focus on the Microsoft model. One of their primary messages is that "identity is the new security control plane." In other words, identity is at the center of everything in a Zero Trust environment. Let's take a look at the Microsoft model of Zero Trust. Identities and endpoints request access from the Zero Trust policy engine which explicitly verifies using telemetry from many sources relating to user profile, location, device compliance, data sensitivity, application sensitivity, threat protection telemetry, and much more. Policy is then enforced at the time of access and continuously evaluated throughout the session.
>
> **[1:36](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-across-the-digital-estate?u=76281980&t=96)** Policy optimization provides the Zero Trust policy engine with services to monitor governance, compliance, and security posture assessment. While the threat protection module takes sensor telemetry and analytics enriched by threat intelligence feeds and provides high-quality risk assessment to the Zero Trust policy engine, the request then navigates the network segments to reach the data, application, or infrastructure it requires. Microsoft have adopted a Zero Trust maturity assessment approach based on this model. So let's have a look at the associated tool from Deakin University in Australia that we can use to support this. This is available in your exercise files. The maturity assessment tool has eight dimensions covering the elements of Zero Trust: Identity, endpoints and devices, application and workload, data, network, infrastructure, visibility and analytics, and automation and orchestration. Each dimension has a number of critical success factors. A risk score is calculated for each of the critical success factors and used to determine the overall effectiveness. Let's examine the first of the dimensions as presented in the tool. The first dimension is identity. This includes 10 individual factors which need to be taken into account
>
> **[3:09](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-across-the-digital-estate?u=76281980&t=189)** when determining the level of identity risk. For example, critical success factor ID8 addresses how often administrative privileges are reviewed. We can assign a rating of between one, limited or no deployment, through to five, for full deployment. We give each critical success factor a maturity weight which reflects its level of relevance to Zero Trust maturity. The average maturity represents the maturity level which is expected, against which we'll compare our maturity rating to identify the gap. We then use this as an input to the risk assessment. Together, with the impact and likelihood of a risk against this critical success factor. To the right of the sheet, we find the ratings and weightings for each of the critical success factors. Let's change one of the ratings and watch the associated gap value change.
>
> **[4:15](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-across-the-digital-estate?u=76281980&t=255)** Okay, we'll change this back now.
>
> **[4:25](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-across-the-digital-estate?u=76281980&t=265)** We also find on this sheet the preset values for risk assessment of each of the critical success factors. The maturity and risk elements in this part of the spreadsheet then drive the calculations in the Risk Scenario Assessment sheet. This sheet shows the assessment based on a number of risk scenarios in which the risk relevance varies. We'll look at just the first one. ID8 is assessed as having a risk score of 2.4, which has been calculated as the total risk divided by the rated maturity. The effectiveness is calculated from the rating and factored by a risk relevance weighting. This results in an effectiveness of 4; the maximum effectiveness, in this case. By taking all critical success factors, the overall maturity assessment of the identity dimension appears as 56%. The gap between the effectiveness and the maximum effectiveness which is possible can be used to prioritize enhancement to the Zero Trust approach. We can see that ID6 has an assessed effectiveness of 1.2, but a potential effectiveness of 6 and would therefore be a candidate for priority improvement. Let's briefly look at the second dimension, which is Endpoint/Devices. This has eight critical success factors covering device enrollment, access verification, and [[Endpoint Security]]. It also includes the requirements for a SIEM to be in place to monitor for endpoint attacks.
>
> **[5:59](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-across-the-digital-estate?u=76281980&t=359)** The critical success factors EN4 and EN5 essentially cover the Zero Trust requirement for endpoint trust assessment. We won't go through every sheet, but do take the time to do that after you finish this course. In order to become familiar with each of the dimensions in the tool. The tool provides a useful insight into the industry perspective on what makes Zero Trust an effective approach in today's business environment. Carrying out assessments based on these critical success factors allows us to snapshot the current state of Zero Trust maturity for an organization and identify specific areas of enhancement to help work in a risk-informed way towards a fully Zero Trust target architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (5), [[Microsoft Azure|Azure]] (1), [[NIST]] (1), [[Endpoint Security]] (1)
> **Env Vars:** id8 (2), nist (1), id6 (1), siem (1), en4 (1)
> **CLI Commands:** find (2)
> **Versions:** 2.4 (1), 1.2 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Policy-based admission control](https://www.linkedin.com/learning/understanding-zero-trust/policy-based-admission-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/policy-based-admission-control?u=76281980&t=0)** - [Instructor] Before delving further into Zero Trust, let's take a step back in time to January 2000 and take a look at RFC 2753, a framework for policy based admission control. Understanding the standard, provides a solid foundation for understanding Zero Trust. RFC 2753 recognizes that network managers must be able to monitor and control the use of network resources and services, based on policies derived from criteria such as the identity of users and applications, traffic bandwidth requirements, ingress points, security considerations, time of day and so on. It proposes a framework for policy based decisions on access control, what it calls admission control. Its primary focus isn't security, but network quality of service. The standard also introduces the concept of priority admission, where a higher priority requests will be actioned first, and may result in a lower priority request being canceled. The two main architectural elements for policy control are the policy enforcement points, and the policy decision points. The policy enforcement point is a component sitting within a policy aware network node. And the policy decision point, is a network management policy server. The PDP is typically deployed based on an ELDAP system for storage and retrieval of policy information. When the PEP receives a notification that a message requires a policy decision, it sends a request to the PDP. This request may contain attributes such as the amount
>
> **[1:34](https://www.linkedin.com/learning/understanding-zero-trust/policy-based-admission-control?u=76281980&t=94)** of bandwidth required, or details of the event that triggered the request. The PDP reviews the request and might optionally contact other external services. For example, to obtain the request to configuration, user authentication, accounting and billing and so on. This typically uses ELDAP or SNMP. The PDP then returns its decision to the PEP which enforces it by accepting or denying the request. RFC notes that the deployment may include a local policy decision component in the network node, which if available, the PEP will call on first to reach a tentative local decision. This tentative decision and the original policy request would then go to the PDP for final decision. The standard addresses the security required when implementing policy based admission control, building a communications tunnel between policy clients and policy servers, which is secured by the use of an IPsec channel with both the authentication header, and encapsulating security payloads. Using this standard, we can provide confidentiality, data origin authentication, integrity, and replay protection.

> [!info]- Semantic Content
>
> **Env Vars:** pdp (5), rfc (3), pep (3), eldap (2), snmp (1)
> **Documentation:** rfc (3)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** node (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Zero Trust and the business context](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-and-the-business-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-and-the-business-context?u=76281980&t=0)** - [Instructor] Let's take a look at the context in which Zero Trust might deployed. Some systems are deployed as wholly private systems with all access being mediated. And these are ideal for applying Zero Trust principles. The majority of organizations will have a static website which is internet-facing located in a DMZ and designed for anonymous access, even though the access may be from a threat source. This is generally out of scope for Zero Trust. However, some websites may reach back into backend systems to retrieve or post data, a not unusual situation for [[E-Commerce]] sites. This presents a threat, as internet-facing websites are commonly used as footholds to gain access further into corporate networks. Furthermore, some websites act as proxies for internal applications. Clearly, Zero Trust plays a part here, but we need to think carefully about where. A great way to think about the business context is to use the Sherwood Applied Business Security Architecture, SABSA. SABSA includes an approach to developing entity and trust relationship models, which can be traced back to business outcomes and forward to security solutions. This makes it an ideal tool to consider where Zero Trust can be used in a business context. We won't go into the detail of SABSA here but if you want to learn more, check out my course on Using SABSA to Architect Secure Cloud. Let's think about a typical website which offers anonymous browsing of [[Microsoft Products|products]], customer login,
>
> **[1:36](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-and-the-business-context?u=76281980&t=96)** and online ordering of goods. The vendor wants to encourage access to the website at any time without the need to register or login. It must be available and accessible. The customer wants to be assured that the products are accurately described, correctly priced and that the stock levels are correct. The information on the website isn't sensitive, but the vendor needs to make sure it's not changed without authority. And of course that the website isn't maliciously used to send spam or malware. The business also wants to maximize sales. When the customer decides to order, they want to sure they can do so without too much fuss, but at the same time to know that their credentials are kept confidential. When they place their order using their credit card, they'll want to know their card details are not disclosed. The vendor needs to know that the credit card is authentic and the payment has been authorized. Finally, the customer needs to know the delivery will be accurate and timely. So, we can break down the simple purchase transaction into a set of attributes which need to be met. These represent real business security in the SABSA framework. There are three that we need to consider from a Zero Trust perspective: Integrity assured, which requires that we have Zero Trust in any access to the server. Authentic, which we will verify using Zero Trust mechanisms. And authorized, which we will again want to verify using Zero Trust mechanisms. Let's see what this might look like in a cloud deployment. We'll typically see a load balancer
>
> **[3:08](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-and-the-business-context?u=76281980&t=188)** as the first point of contact. We don't need to authenticate, as we're expecting anonymous access. The load balancer will then connect to the web server. In AWS, for example, it will do this using a security group which ensures that no other point in the DMZ can access the web server. This is an example of micro-segmentation and it's pretty common in cloud deployments. The web server will then connect to the backend application. Again, via a security group. Again, the application server has been micro-segmented to protect against lateral access because the only source from which access can occur is the web server. The application then connects to the database. And again, a security group provides micro-segmentation. A cloud service such as AWS provides a great foundation for Zero Trust. Onto this foundation, we can then add a policy decision and enforcement point subsystem to complete our Zero Trust deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[E-Commerce]] (1)
> **Env Vars:** sabsa (5), dmz (2), aws (2)
> **CLI Commands:** aws (2), make (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Zero Trust data](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-data?u=76281980&t=0)** - [Instructor] An advanced concept in zero trust is the ability for data to protect itself. This idea originated in the early work done by the Jericho project in which the ninth of 12 commandments states, "Access to data should be controlled "by security attributes of the data itself." The Jericho commandment suggests that to achieve this attributes can be held within the data itself as it is in a digital rights system for documents or it can be in a separate access management system. Inherent protection of data could be implemented by encryption, although some data may have public non-confidential attributes and need no confidentiality protection. Furthermore, access and access rights to data may change over time. Some zero trust vendors take a network centric security approach using micro-segmentation to provide fine-grained access based on network path. However, this doesn't stop an authorized user who can gain access to a trusted network node accessing data from that node. Some zero trust vendors take an identity centric approach in which access rights are held in the user identity. This is the traditional approach to access control. However, it does nothing to protect data once it's been accessed. The data may be available for extraction and then outside the controlled environment becomes unprotected. Data-centric security can be achieved by adopting attribute based access control whereby access rights are granted to users
>
> **[1:35](https://www.linkedin.com/learning/understanding-zero-trust/zero-trust-data?u=76281980&t=95)** through the use of policies and these can be dynamic. The policies can use any type of attributes, for example, user attributes, resource attributes, and environment attributes, and can combine them using logic statements. The attribute based access controls can then be applied to control access to data at the table, column, field, cell and sub cell levels using logical controls with filtering conditions and masking based on request attributes such as user, session, or device security posture. This can be applied to traditional [[Relational Databases]] as well as [[Big Data]] solutions. A data centric access mechanism is one of the components of data access governance which is one of the five pillars of [[Data Governance]]. Data access governance involves discovering and classifying sensitive data, carrying out risk assessments, implementing access policies for security and [[Privacy]], setting up access controls, analyzing inbound and outbound network traffic, and monitoring access to critical assets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[Big Data]] (1), [[Data Governance]] (1), [[Privacy]] (1)
> **CLI Commands:** node (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [An extended approach to Zero Trust](https://www.linkedin.com/learning/understanding-zero-trust/an-extended-approach-to-zero-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/an-extended-approach-to-zero-trust?u=76281980&t=0)** - [Instructor] We can recast the seven [[NIST]] tenets into an extended set of principles using the more familiar subject-object terminology, while still maintaining the core messaging on zero trust. In addition, we should incorporate a new principle of trustworthiness because it doesn't matter that we avoid reliance on trust relationships if we deploy untrusted software that allows easy exploitation anyway. The first principle is that all users shall be considered subjects for which access is to be mediated. This includes staff working in the enterprise, staff working remotely, special category staff, such as contractors and partners. All will be managed in the same way. Autonomous endpoints will be considered subjects for which access will be mediated. In other words, a machine, application sensor, or [[Artificial Intelligence (AI)|artificial intelligence]] agent will all be treated in the same way as human users requesting access. All endpoint devices from which access requests come shall be subject to health checks. This will include software version and patch levels as well as the type of device, its location, and so on. All data stores and computing services to which access is requested our objects and will have a micro-segmented perimeter around the resource and be accessed via a policy enforcement point. All data on the communications from endpoint device to the object should be or be made nonsensitive. The data may be secured with encryption or otherwise desensitized. We need to recognize that some endpoint devices such as [[IoT]] sensors may be used to transmit sensitive data,
>
> **[1:35](https://www.linkedin.com/learning/understanding-zero-trust/an-extended-approach-to-zero-trust?u=76281980&t=95)** but won't have the capability to desensitize it. And this should be taken into account when making the access decision. Access to individual enterprise resources is granted on a per resource per session basis. There'll be no trust assumptions that carry over from one session to the next, nor across objects in a session. This achieves just-in-time access. Privileges to carry out the requested action are granted on a per resource per session basis. Only the minimum privileges should be provided to meet the just enough access approach. The policies governing the access and privileges decision are dynamic and may change based on the observable state of the environment. These are called adaptive access policies. The environment in this context means the cyber health and behavior of subjects and objects as well as data received from monitoring network traffic. As much information as possible is collected, including the current state of network infrastructure, threat intelligence, and traffic patterns. This is then analyzed to gain situational awareness and better support the adaptive access policies. The security mechanisms used to achieve zero trust will be trustworthy. It's not good enough for them to have industry standard levels of defects. They have to be high integrity in order to enable the zero trust architecture to achieve good security. While developing software in accordance with [[Secure Coding]] rules is a good start, application of a formal standard such as British Standard 10754-1 would be desirable. Zero trust is more than just a set of tenants or principles.
>
> **[3:12](https://www.linkedin.com/learning/understanding-zero-trust/an-extended-approach-to-zero-trust?u=76281980&t=192)** Most of the technology needed to deploy a zero trust environment has been around for some years, such as cloud-based micro-segmentation and privileged access managers providing single use administrative credentials. Anomaly detection systems and [[Big Data]] security analytics exist already in product form. Clouds already have scripted security policies which are used to make authorization decisions. The concepts of policy decision and enforcement points has been understood for a long time. First being introduced in RFC 2753, a framework for policy-based admission control in January, 2000. What zero trust has done is to establish an approach which brings policy-based access together into a model of just-in-time access and just enough access, which works seamlessly with feedback to enable security monitoring to continuously adjust the adaptive access policies. We can see in this model the elements that make up the adaptive policy aspects of the model. The monitoring model continuously checks the state of the environment, adjusting policies as it goes and feeding them to the policy enforcement point. When a request comes in from the subject and endpoint, the policy will be enforced. If the decision is to allow access, temporary credentials will be delivered to the subject and the object enabling the connection to be made via the perimeter device as normal. As we see more advanced orchestration of deployments, adapting artificial intelligence techniques
>
> **[4:46](https://www.linkedin.com/learning/understanding-zero-trust/an-extended-approach-to-zero-trust?u=76281980&t=286)** to reason about the state of the environment at scale, we're going to have AI driven dynamic policies becoming the norm. With this will come many more challenges as we strive to not only protect our data and services, but also maintain control of our technology. Already with cloud-based policy access, we're seeing the limits of how much we can manage manually, with unprotected buckets and access key exposure incidents increasing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[NIST]] (1), [[IoT]] (1), [[Secure Coding]] (1), [[Big Data]] (1)
> **Analogies:** such as (4)
> **CLI Commands:** make (2)
> **Env Vars:** nist (1), rfc (1)
> **Definitions:** in other words (1), is a  (1)
> **Documentation:** rfc (1)
> **Speakers:** - [instructor] (1)


### 3. Implementing Zero Trust

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a Zero Trust foundation](https://www.linkedin.com/learning/understanding-zero-trust/building-a-zero-trust-foundation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/building-a-zero-trust-foundation?u=76281980&t=0)** - [Instructor] Let's look at how we might build a zero trust foundation. Here we have a diagram showing the Amazon best practice design for a web hosting architecture on AWS. It features access via a load balancer with [[Web Servers]] providing the user interface supported by a backend application, which gets data from a managed relational database service. Let's look at our 10 principles, which we need to deliver to fully meet zero trust. The solution will allow anonymous or untrustworthy access to the web server and can apply the AWS IAM solution to validate subject access for authenticated activity, such as [[E-Commerce]] purchases. The solution can use the AWS API Gateway to enable autonomous subject access. AWS doesn't as a matter of course, validate the device used for access. The web service provides the user interface, The application server holds the service we want to use and the backend relational database holds the data objects we want to access for that service these are micro segmented using [[AWS Security]] groups. Communications can be secured using HTTPS from the client to the web server and from the web server to the application. The application can use SSL or TLS to connect with the relational database. Temporary credentials can be provided for per session access via the STS service, this requires a trusted AWS account to
>
> **[1:35](https://www.linkedin.com/learning/understanding-zero-trust/building-a-zero-trust-foundation?u=76281980&t=95)** request the credentials. The assume roles capability can be used to enable per session permissions to be applied to the temporary credentials. In addition, AWS supports the use of third-party privileged access managers. AWS does provide logging and analytics through its cloud trail and inspector services but not specifically as a means of supporting dynamic policies. AWS does have services which can be used to support the creation of dynamic policies. The process starts with an incoming HTTP header, which includes a [[JSON]] web token holding the requesting identity. The JWT manager verifies the token and extracts the subject from the header. This is then injected into the policy template and the authorized permissions are also injected. This then creates a policy instance which can be applied. However, with no standard yet recognized for determining dynamic permissions. The policy engine will need to be developed as a custom microservice likely using AWS Lambda. AWS like most of the content pre-systems does have security problems from time to time. So it's not yet what we would consider to be a fully trustworthy solution. So AWS does provide a fairly good platform as a foundation for zero trust, but we'll still need to think about the data that we want to collect in order
>
> **[3:08](https://www.linkedin.com/learning/understanding-zero-trust/building-a-zero-trust-foundation?u=76281980&t=188)** to create effective just in time policies. And then we'll need to develop a Lambda microservice to populate an appropriate set of policy templates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1), [[E-Commerce]] (1), [[AWS Security]] (1), [[JSON]] (1)
> **Env Vars:** aws (12), iam (1), api (1), https (1), ssl (1)
> **CLI Commands:** aws (12)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Designing a policy engine](https://www.linkedin.com/learning/understanding-zero-trust/designing-a-policy-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/designing-a-policy-engine?u=76281980&t=0)** - [Instructor] The policy domain which contains the policy decision point and policy enforcement point is sometimes referred to by vendors as a policy engine. This is the heart of a zero trust solution where the trust of all subjects in the deployment is evaluated and where device configuration rules are created. The policy engine takes feeds from a monitoring subsystem and analyzes them to adjust the trust of devices and users using a trust algorithm. While RFC 2753 provides a framework for policy based admission control, it doesn't specify the trust algorithm. While in time, standardized trust [[Algorithms]] may emerge for now zero trust vendors are developing their own. In addition to the trust algorithm, which brings together the data into usable metrics, we would expect the policy engine to include the following components, a directory of subjects including autonomous entities with attributes which could impact their trust scores. This could be for example, a robustness assessment of their first and second factor credentials, their roles or groups, a history of successful and failed login attempts, access location and working hours and so on. An inventory of assets with attributes which could impact their trust score. This could be software version and the number of unpacked CVEs. The AWS inspector scans and maintains a security profile of each [[Amazon EC2|EC2]] instance and this can be used to adjust the trust score in an AWS deployment. An expression of the environment state
>
> **[1:34](https://www.linkedin.com/learning/understanding-zero-trust/designing-a-policy-engine?u=76281980&t=94)** and particularly the current threat level. We may wish to adjust our policies to limit access when we detect we're under attack and we may wish to give priority to critical access needs. We'll want to design a trust algorithm that computes a trust score based on singular criteria values and weightings set by the enterprise along with a contextual view of a subjects history and other data. Each element considered in the score may be acceptable based on a threshold or may need to satisfy a binary rule of whether it exists or not. Using a combination of current and historical elements provides the best and most comprehensive approach to eliminating risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** aws (2), rfc (1), ec2 (1)
> **CLI Commands:** aws (2)
> **Documentation:** rfc (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Examples of zero trust](https://www.linkedin.com/learning/understanding-zero-trust/examples-of-zero-trust-22383784?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/examples-of-zero-trust-22383784?u=76281980&t=0)** - [Instructor] When talking zero trust, the topic of BeyondCorp is never far away. In 2010, [[Google]] was subjected to a nation state attack known as Operational Aurora, which resulted in some of its Gmail accounts being compromised. The attack was the result of a zeroday flaw in Internet Explorer combined with the ability to move laterally within Google's networks. In response, Google started the BeyondCorp initiative to look at how security can be improved by assuming users are on an untrusted network and not depending upon the corporate perimeter to provide protection. BeyondCorp removes the perimeter as a trust boundary and requires that both users and their devices are identified together with the group to which the user belongs. The way this works is as follows. All access from local or remote users is via the access proxy. For a local connection, the device provides its 802.1x device certificate. The access proxy redirects the request to a single sign-on server. The user provides his or her password and second factor authentication credentials, is authenticated by the single sign-on system and is issued a session token. The access proxy then passes the request to an access control engine, which checks that the user is authorized to access the system. The authorization process checks that the group to which the user belongs is authorized to access the system and the user has the privileges required
>
> **[1:32](https://www.linkedin.com/learning/understanding-zero-trust/examples-of-zero-trust-22383784?u=76281980&t=92)** to access the system. The user's device is confirmed to be a managed device with good hygiene and is appropriate for accessing the system. If these checks pass, the access request is approved and proceeds. If any of the checks fail, the request is denied. Another company that's been focusing on zero trust issues for some time is HashiCorp. It provides three open source [[Microsoft Products|products]], which together enable a zero trust implementation, Vault, Consul and Boundary. The vault is a secure store for secrets such as credentials and keys, and is used to achieve just in time authentication and authorization. Its Consul product, which launched in 2014, is a service [[Mesh]] solution designed to address the problem of malicious lateral movement across flat networks and specifically addresses machine-to-machine access. It does this through a combination of service discovery to connect services dynamically, a centralized service configuration, providing configuration on demand to distributed nodes and service segmentation to secure services based on identity. Consul works by maintaining a service access graph, which indicates for the TLS protocol which services can talk to each other services. For example, web server to database server. In order to minimize trust dependency, Consul issues short life certificates, and constantly renews them. The Boundary product is a centralized rules system for user to machine just in time access,
>
> **[3:08](https://www.linkedin.com/learning/understanding-zero-trust/examples-of-zero-trust-22383784?u=76281980&t=188)** managing user authentication and authorization to services by authorizing based on identity and role and automatically injecting its vault just in time secrets to support service access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Microsoft Products|Products]] (1), [[Mesh]] (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** tls (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/understanding-zero-trust/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/understanding-zero-trust/what-s-next?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this [[LinkedIn]] Learning Course. I hope you enjoyed learning about zero trust. In this course, you've learned about the tenets and models for zero trust, the idea of just-in-time access, and the need for just enough access. You're now familiar with [[Google]]'s BeyondCorp Trust Initiative, and you've looked at what HashiCorp provides as an open source zero trust solution. That's a great start into the world of zero trust. If you want to follow up on the concept of micro-segmentation, check out Bill Ferguson's "The Advantages of Microsegmentation of Security" course. I'd also like to invite you to go to my author page, where you can find my courses on cloud, [[Cybersecurity]], [[Ethical Hacking]], and programming. Thanks again for joining me on this course. And I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Google]] (1), [[Cybersecurity]] (1), [[Ethical Hacking]] (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Path Context

### In [[Digital Transformation for Tech Leaders]]
← [[Building and Managing a Cybersecurity Program]] | **10 of 15** | [[Blockchain Basics]] →

## Appears In

- [[Digital Transformation for Tech Leaders]]

---

[↑ Back to top](#)