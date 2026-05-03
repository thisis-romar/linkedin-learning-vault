---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: security-testing-essential-training-2022
url: "https://www.linkedin.com/learning/security-testing-essential-training-2022"
duration_minutes: 206
duration: 3h 26m
level: Beginner
updated: 10/25/2022
learners: 19065
skills:
  - Network Security
  - Security Testing
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFVdYfCaK5eZA/learning-public-crop_675_1200/B56ZfrBhrHHEAY-/0/1751994735576?e=2147483647&amp;v=beta&amp;t=YbndIB0M19OZeHHDC3v4jtVGhCVihjamVtyO48U2Sk8"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Application Security]]'
  - '[[Strategies for Managing Vulnerabilities and Mitigating Cyber Risks]]'
prev_courses:
  - '[[Learning the OWASP Top 10]]'
  - '[[Vulnerability Management in Cybersecurity- The Basics]]'
next_courses:
  - '[[Dynamic Application Security Testing]]'
  - '[[Vulnerability Management with Nessus]]'
path_nav: '[{"path":"Explore a Career in Application Security","position":4,"total":7,"prev":"Learning the OWASP Top 10","next":"Dynamic Application Security Testing"},{"path":"Strategies for Managing Vulnerabilities and Mitigating Cyber Risks","position":2,"total":6,"prev":"Vulnerability Management in Cybersecurity- The Basics","next":"Vulnerability Management with Nessus"}]'
path_count: 2
tags:
  - course
  - topic/security
  - skill/network-security
  - skill/security-testing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Security%20Testing%20Essential%20Training%20(2022).md)

![Security Testing Essential Training (2022)](https://media.licdn.com/dms/image/v2/D560DAQFVdYfCaK5eZA/learning-public-crop_675_1200/B56ZfrBhrHHEAY-/0/1751994735576?e=2147483647&amp;v=beta&amp;t=YbndIB0M19OZeHHDC3v4jtVGhCVihjamVtyO48U2Sk8)

# Security Testing Essential Training (2022)

> Is your organization secure? In order to answer this question confidently, you need to perform testing to prove that it is indeed secure. However, not all security testing is the same. A risk assessment is not a vulnerability assessment; a penetration test won't measure compliance. For a successful career, a security analyst needs to understand the many different types of security testing and know

> [LinkedIn Learning](https://www.linkedin.com/learning/security-testing-essential-training-2022) | 3h 26m | Beginner | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The importance of security testing](#the-importance-of-security-testing)
  - [What you should know](#what-you-should-know)
- [**1. Understanding Security Assessments**](#1-understanding-security-assessments) (10 videos)
  - [Language is important](#language-is-important)
  - [Risk assessments](#risk-assessments)
  - [Calculating risk score](#calculating-risk-score)
  - [Security controls assessments](#security-controls-assessments)
  - [NIST and ISO](#nist-and-iso)
  - [Compliance assessments](#compliance-assessments)
  - [Vulnerability assessments](#vulnerability-assessments)
  - [Penetration tests](#penetration-tests)
  - [Goals of a pen test](#goals-of-a-pen-test)
  - [The security assessment lifecycle](#the-security-assessment-lifecycle)
- [**2. Your Testing Environment**](#2-your-testing-environment) (11 videos)
  - [The security tester's toolkit](#the-security-testers-toolkit)
  - [Kali Linux](#kali-linux)
  - [Nmap](#nmap)
  - [Nessus](#nessus)
  - [Wireshark](#wireshark)
  - [Lynis](#lynis)
  - [CIS-CAT Lite](#cis-cat-lite)
  - [Aircrack-ng](#aircrack-ng)
  - [Hashcat](#hashcat)
  - [OWASP ZAP](#owasp-zap)
  - [OWASP ZAP demo](#owasp-zap-demo)
- [**3. Planning Your Assessment**](#3-planning-your-assessment) (6 videos)
  - [Understanding your scope](#understanding-your-scope)
  - [Improving over time](#improving-over-time)
  - [Selecting your methodology](#selecting-your-methodology)
  - [Selecting your tools](#selecting-your-tools)
  - [Basic assessment tools](#basic-assessment-tools)
  - [Advanced assessment tools](#advanced-assessment-tools)
- [**4. Review Techniques**](#4-review-techniques) (9 videos)
  - [Documentation review](#documentation-review)
  - [Log review](#log-review)
  - [Log management tools](#log-management-tools)
  - [Ruleset review](#ruleset-review)
  - [System configuration review](#system-configuration-review)
  - [CIS-CAT demo](#cis-cat-demo)
  - [Network sniffing](#network-sniffing)
  - [Wireshark demo](#wireshark-demo)
  - [File integrity checking](#file-integrity-checking)
- [**5. Identifying Your Targets**](#5-identifying-your-targets) (10 videos)
  - [Network discovery](#network-discovery)
  - [Open-source intelligence](#open-source-intelligence)
  - [Network port and service identification](#network-port-and-service-identification)
  - [Nmap demo](#nmap-demo)
  - [Vulnerability scanning](#vulnerability-scanning)
  - [Determining severity](#determining-severity)
  - [Nessus demo](#nessus-demo)
  - [Wireless scanning](#wireless-scanning)
  - [Wireless testing process](#wireless-testing-process)
  - [Aircrack-ng demo](#aircrack-ng-demo)
- [**6. Vulnerability Validation**](#6-vulnerability-validation) (7 videos)
  - [Password cracking](#password-cracking)
  - [Hashcat demo](#hashcat-demo)
  - [Penetration test planning](#penetration-test-planning)
  - [Penetration test tools](#penetration-test-tools)
  - [Penetration test techniques](#penetration-test-techniques)
  - [Social engineering](#social-engineering)
  - [SET demo](#set-demo)
- [**7. Additional Considerations**](#7-additional-considerations) (6 videos)
  - [Coordinating your assessments](#coordinating-your-assessments)
  - [Data analysis](#data-analysis)
  - [Providing context](#providing-context)
  - [Data handling](#data-handling)
  - [Drafting your report](#drafting-your-report)
  - [Delivering your report](#delivering-your-report)
- [**Conclusion**](#conclusion) (2 videos)
  - [Next steps](#next-steps)
  - [Additional resources](#additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of security testing](https://www.linkedin.com/learning/security-testing-essential-training-2022/the-importance-of-security-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/the-importance-of-security-testing?u=76281980&t=0)** - [Jerod] Hey there, I'm Jerod Brennan and welcome to Learning [[Security Testing]]. I put this course together to help you learn the skills and the tools that you'll need in order to test information security controls in a business environment. Now, I've been working in security long enough to have earned every gray hair in my beard, and I want to take what I've learned over the years and help you begin applying that same knowledge today. Security testing means different things to different people and one of the goals of this course is to help you learn how to select the right testing methodology and the right testing tools to meet your client's expectations. Context is incredibly important in this field, and understanding how to align what you're doing with what the client needs will not only help you be successful in performing that testing, but it will also help protect the people who rely on the systems and the services that you've been hired to secure. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [jerod] (1)

#### [What you should know](https://www.linkedin.com/learning/security-testing-essential-training-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is intended to be a broad introduction to [[Security Testing]]. Will we be going into [[Penetration Testing]] in depth, learning how to write [[Python (Programming Language)|Python]] exploit code from scratch? I'm afraid not. We will, however, be covering the different types of fundamental security tests that security analysts and penetration testers may be expected to perform as part of their day-to-day responsibilities. Once you have an understanding of the similarities and the differences between these types of tests, we're going to break out our toolkit, roll up our sleeves, and do some hands-on testing. If you want to get the most that you can out of this course, you'll want to follow along with the demos in your own lab environment. Personally, I prefer to do all my training and testing using a small collection of [[Virtual Machines]], maybe some [[Cloud Services]], and this course is no exception. If you don't have access to a laptop or a workstation, capable of running a hypervisor, [[Kali Linux]], and at least one other virtual machine, no worries. You'll still gain a lot from this course by watching it from beginning to end. I'll be using VirtualBox during this course for two reasons. One, it's free, so you don't have to worry about purchasing software if you want to do these demos at home on your own. And two, it allows you to run multiple virtual machines simultaneously.
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/what-you-should-know?u=76281980&t=95)** When the time comes that you're ready to try your hand at one or more of the demos, you can always jump right to that video and follow along. In addition to learning the tools, we're going to cover everything from scoping a test, to identifying your targets, to validating your findings. I've also provided a handout with this course, if you'd like to do more testing on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Security Testing]] (1), [[Penetration Testing]] (1), [[Python (Programming Language)|Python]] (1), [[Cloud Services]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Security Assessments

[↑ Back to Table of Contents](#table-of-contents)

#### [Language is important](https://www.linkedin.com/learning/security-testing-essential-training-2022/language-is-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/language-is-important?u=76281980&t=0)** - [Instructor] When it comes to security assessments and testing, language is extremely important. What one person might call a vulnerability scan, for example, someone else might call a penetration test. A misinterpretation like this will make seasoned security professionals cringe. Why? Well, for a couple of reasons. If you're paying someone to conduct a penetration test, and at the end of the engagement, they hand you the results of a Nessus scan, then you, my friend did not get what you paid for. More importantly though, people in management or leadership who don't have the hands-on experience to distinguish between a vulnerability scan report and a penetration test report, well, they're more likely to gain a false sense of security from the test results. And that false sense of security can lead to an interruption in production services, one that could have easily been avoided. What's worse, it could lead to a data breach that requires public disclosure, a breach that impacts the people who rely on the services or [[Microsoft Products|products]] that the organization provides and it can all be traced back to a lack of understanding when it comes to security language. In my experience, I found that there are five distinct types of assessments that an information security professional like you should be able to perform, a risk assessment, a security controls assessment,
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/language-is-important?u=76281980&t=95)** a compliance assessment, a [[Vulnerability Assessment]] and a penetration test. While all five assessment types center around information, security and risk management, the goals of each assessment and the techniques used to conduct each assessment are slightly different. Understanding which assessment is correct given the goals of the person requesting the assessment can make all the difference when it comes to achieving that person's security goals. Let's take a look at the what, why, and how of each type of assessment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Vulnerability Assessment]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Risk assessments](https://www.linkedin.com/learning/security-testing-essential-training-2022/risk-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/risk-assessments?u=76281980&t=0)** - [Instructor] The goal of a risk assessment is to determine where an organization may be most exposed or where something bad might happen that could hurt the organization's ability to deliver on its intended mission. The quality of all other security assessments will improve if you're using the results of a recent risk assessment as one of your key inputs. When you're conducting a risk assessment, your goal will be to identify threats and vulnerabilities that could potentially harm the organization. Knowing the difference between a threat and a vulnerability is essential. Fortunately, we can turn to [[NIST]], the National Institute of Standards and Technology, to help us better understand that difference. NIST considers a threat to be a circumstance or event that could damage the confidentiality, integrity or availability of information or information systems. That means if something or someone could expose an organization's secret information, stuff like intellectual property or customer personal information, or if that thing could make changes without the proper approvals, or if that person could take a web application offline, well then that's a threat. A vulnerability is a weakness that enables the threat to be successful. A missing security patch is a great example
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/risk-assessments?u=76281980&t=94)** of a vulnerability, so is a default admin password still in use on some internet facing web portal. When it comes to availability, the fact that a data center is located in an area prone to flooding or tornadoes is an example of a physical vulnerability. During your risk assessment, you'll identify the threats and vulnerabilities about which the organization should be concerned, and then you'll score the potential likelihood and the potential impact of each risk. Now what do I mean by that?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** nist (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Calculating risk score](https://www.linkedin.com/learning/security-testing-essential-training-2022/calculating-risk-score?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/calculating-risk-score?u=76281980&t=0)** - [Instructor] Likelihood is the [[Probability]] that a threat might actually succeed in exploiting a vulnerability. Let's look at malware as an example. What's the likelihood that your laptop will get infected with a virus? Well, it depends on a number of things, doesn't it? Do you run an antivirus program? Do you use your laptop to access the internet? Do you open email attachments from people you don't know? As you ask relevant questions about each threat and about how exposed you might be to different attack vectors, it should become apparent whether or not the risk you're considering is highly likely to do harm, highly unlikely, or somewhere in between. That's why [[NIST]] relies on a high, medium, low scale when scoring risks. You also need to consider the impact though to get an accurate risk score. If your laptop gets infected with malware, well, that'll make for a bad day for you. But what if the entire server network at your company gets infected with malware? The impact of an incident like that would be much more expensive since it impacts a lot more people. NIST follows the same low, medium, high scoring methodology for the impact as it does for a likelihood. All you have to do is combine the two scores, often through a simple math equation and voila,
>
> **[1:36](https://www.linkedin.com/learning/security-testing-essential-training-2022/calculating-risk-score?u=76281980&t=96)** you have a risk score. If you've never conducted a risk assessment my advice to you is that you don't get caught up in the details just yet. Again, the goal of a risk assessment is to prioritize risks so that you can take the necessary action to reduce those scores to an acceptable level based on the leadership team's risk appetite. When preparing for an upcoming risk assessment make sure to do your research. Verizon's Data Breach Investigations report has a lot of real world data on actual security incidents that resulted in data breaches and so does the [[Privacy]] Rights Clearinghouse chronology of data breaches. You can also turn to industry specific Information Sharing and Analysis Centers, or ISACs for threat and vulnerability information relevant to your specific industry. You can even turn to your internal [[IT Service Management]] system for historical help desk ticket information. As a matter of fact, I highly recommend that you do just that before embarking on your first risk assessment. At the end of the day you should have a report that contains a prioritized list of information security risks that your leadership team will want you to keep a close eye on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2), [[Probability]] (1), [[Privacy]] (1), [[IT Service Management]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** nist (2)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Security controls assessments](https://www.linkedin.com/learning/security-testing-essential-training-2022/security-controls-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/security-controls-assessments?u=76281980&t=0)** - [Instructor] The goal of a Security Controls Assessment is to identify the security controls that you already have in place, but how do you determine which controls are right for your organization? Personally, I'm a huge fan of Security Control Frameworks. These frameworks include categories and collections of specific security controls that are recommended by the governing bodies who wrote the frameworks in the first place. When conducting a Security Controls Assessment, you'll pick a framework and document whether or not each control is in place. If you want to take it one step further, you can also document a control score that speaks to the perceived effectiveness of each control. I say perceived effectiveness because Security Control Assessments are often conducted through interviews with technical staff and analysis of reports and config files from the in-scope systems and applications. The end result will be a prioritized list of control gaps, drawing a clear picture of where your security program doesn't meet the expectations outlined in those Security Control Frameworks. If you do a little online research around information security frameworks, you'll quickly learn that there are entirely too many of them. People who have worked with these frameworks over the years have realized that at the end of the day, all of the frameworks are essentially different ways
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/security-controls-assessments?u=76281980&t=93)** of saying the same thing. Instead of overwhelming you with a detailed examination of framework, after framework, after framework, I have just two popular frameworks that I want to make sure that you know.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [NIST and ISO](https://www.linkedin.com/learning/security-testing-essential-training-2022/nist-and-iso?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/nist-and-iso?u=76281980&t=0)** - [Instructor] The International Organization for Standardization, or ISO, develops and publishes international standards for everything ranging from quality management and [[Quality Assurance]] to [[Information Security Management]]. More to the point, the ISO 27000 family contains 45 separate standards and counting to help organizations select and implement information security controls. While ISO 27001 gets all the glory, it's really ISO 27002 that you should dig into. The latest version of this standard identifies 93 specific security controls grouped into 14 different domains and those domains are further divided into four themes: organizational, physical, people, and technological. As an example information security policies is one control domain and within that domain, ISO provides specific guidance around the policy documentation and the processes to support that documentation that are necessary for an effective information security program. You can review a summary of the ISO 27002 standard at [iso27001security.com](https://iso27001security.com), or you could head on over to [iso.org](https://iso.org) and purchase a full copy of that document. The US National Institute of Standards and Technology,
>
> **[1:37](https://www.linkedin.com/learning/security-testing-essential-training-2022/nist-and-iso?u=76281980&t=97)** [[NIST]], maintains hundreds of special publications on computer security, [[Cybersecurity]] and information technology. These documents contain extensive detail on the selection, implementation, and management of information security controls. The NIST Cybersecurity Framework is very well known in this space, but don't let the name fool you. The five control categories: identify, protect, detect, respond, and recover are intended to help an organization assess and understand risk. When it comes to assessing specific security controls, however, I think you'll find that NIST Special Publication 800-53 is a little more to your liking. Similar to ISO 27002, NIST Special Publication 800-53 contains over 1,000 controls distributed among 18 control families, including [[Privacy]], which overlaps with information security in certain areas. 800-53 also flags each control as either low impact, moderate impact, or high impact, which provides you with an additional layer of guidance around which controls are required depending on the baseline that you are pursuing. 800-53 was written to support the US Federal Information Security Management Act, or FISMA,
>
> **[3:13](https://www.linkedin.com/learning/security-testing-essential-training-2022/nist-and-iso?u=76281980&t=193)** which provides security guidelines for federal agencies. In my experience, as both a consultant and a practitioner, you can enjoy the best of both worlds by combining both ISO and NIST within your organization. What I've done in the past is I've used ISO to help me understand how to organize my security program. And then, I've turned to NIST for the technical details about how to make the most of my security controls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (6), [[Information Security Management]] (2), [[Cybersecurity]] (2), [[Quality Assurance]] (1), [[Privacy]] (1)
> **Env Vars:** iso (9), nist (6), fisma (1)
> **CLI Commands:** find (1), make (1)
> **URLs:** [iso27001security.com](https://iso27001security.com) (1), [iso.org](https://iso.org) (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Compliance assessments](https://www.linkedin.com/learning/security-testing-essential-training-2022/compliance-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/compliance-assessments?u=76281980&t=0)** - [Instructor] The goal of a compliance assessment is to determine whether or not your security program meets the specific requirements outlined by some external authority. One of the most well known set of compliance requirements is the [[PCI DSS|Payment Card Industry Data Security Standard]], commonly referred to as the [[PCI DSS]], or sometimes just PCI. If an organization stores, processes or transmits credit card data, then that organization is required to comply with this standard. When you look at the contents of the PCI DSS, your first instinct will likely be, hey, this looks like a security controls assessment. Trust your instincts, because you're right. The content of a standard like the PCI DSS is very similar to the content of more general security standards and frameworks. There are two key differences though, one is the scope. PCI is laser-focused on protecting credit card data, and the controls that the standards body is selected reflect that focus. If you try to build a security program on PCI alone, you're going to have gaping holes in your program, holes that a criminal could potentially exploit. The second difference is the motivation behind conducting an assessment, in short, you do other assessments because you want to understand
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/compliance-assessments?u=76281980&t=93)** how to better your environment, you do compliance assessments because you have to. Risk assessments and security control assessments are often conducted by more mature organizations based on their leadership's understanding that information security has business value. Compliance assessments are more of a necessary evil, a pay to play in certain industries, often conducted under the threat of punishment or penalty. Compliance assessments are similar to security control assessments, in that the evidence collected during a compliance assessment is a combination of staff interviews and output from the control technologies, and organizations who are found to be non-compliant with the PCI DSS are often charged a higher per-transaction fee by their banks. In extreme cases, those banks can revoke the organization's right to accept credit card payments at all. Talk about a strong motivator. In addition to the payment card industry, other industries that require compliance assessments are the [[Healthcare Industry]], HIPAA, the energy industry, NERC, and the financial industry, GLBA. The end result of a compliance assessment is proof that you're compliant, what we often refer to as an attestation, that and you get the auditors off your back until the next compliance assessment rolls around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PCI DSS]] (4), [[PCI DSS|Payment card industry data security standard]] (1), [[Healthcare Industry]] (1)
> **Env Vars:** pci (7), dss (4), hipaa (1), nerc (1), glba (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Vulnerability assessments](https://www.linkedin.com/learning/security-testing-essential-training-2022/vulnerability-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/vulnerability-assessments?u=76281980&t=0)** - [Instructor] The goal of a [[Vulnerability Assessment]] is to validate that technical vulnerabilities are being identified and remediated on a regular basis. There are a few items that you'll focus on with this type of assessment. First and foremost, you're going to look for exploitable technical vulnerabilities within in-scope systems and applications. What do I mean by exploitable? Think of it this way; if a criminal found that same vulnerability and could use it to force the system or application to behave in some unexpected way, how bad would that be for your organization? If a server's missing a security patch that a remote attacker could use to list the directories on that server, that's not such a big deal, right? You'd likely consider that a low risk vulnerability. But what if an attacker could exploit a [[SQL]] injection vulnerability and download every username and password from one of your applications? That's a much bigger deal. Hopefully, you'd consider that a high, maybe even a critical, vulnerability. On that note, understanding how to scope a vulnerability assessment is crucial. Don't limit yourself to only scanning servers. If it has an IP address, you should probably scan it. This includes servers, workstations, and mobile devices. The one exception here might be industrial control systems,
>
> **[1:38](https://www.linkedin.com/learning/security-testing-essential-training-2022/vulnerability-assessments?u=76281980&t=98)** but you should also be testing applications and [[Databases]], and they may require different scanning technologies all together. In an enterprise environment, you'll likely perform vulnerability assessments on a regular schedule using automated tools. If this is the case, make sure that your scanning technology is aligned with your scope. Also, make sure you're taking full advantage of the capabilities in your scanning technology. As a consultant, I would recommend the following on a regular basis: number one, perform authenticated scans of all host systems; number two, perform unauthenticated scans of internet-facing web applications; number three, perform authenticated scans of non-production instances of those same applications; and number four, perform security configuration scans of all the in-scope systems and apps. I'll show you how to configure and use some of these vulnerability scanning tools later in the course. [[NIST]] provides guidance around manual vulnerability assessment activities that you can use to compliment your automated scans. I'll cover a number of these techniques in a later video as well. The end result of a vulnerability assessment should be a prioritized list of potentially exploitable vulnerabilities. That list should be accompanied by recommendations on how to remediate those vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vulnerability Assessment]] (4), [[SQL]] (1), [[Databases]] (1), [[NIST]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1), nist (1)
> **Cross-References:** later in (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Penetration tests](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-tests?u=76281980&t=0)** - [Instructor] The penetration test just may be the pinnacle of all security assessments. When conducting the other assessments, you'll collect information with the ultimate goal of identifying weaknesses that an attacker might exploit to damage your organization. During a penetration test, you actively try to exploit those weaknesses. I'm an advocate of using the output from all the other assessments when scoping your penetration test. This depends on the customer's preference, though. White box [[Penetration Testing]] refers to an engagement where the customer provides the tester with a considerable amount of internal information. This might include reports from other engagements, internal vulnerability scans, network diagrams, and sometimes even firewall rule sets. The intent is to make the best use of the penetration tester's time, allowing the tester to focus on the controls most likely to be compromised. Black box penetration testing is the exact opposite. In a black box test, the pen tester is treated as an unauthorized outsider. The tester has no knowledge of the target's technology stack or their security controls, and they're tasked with attempting to break in from the perspective of an actual attacker with the same restrictions. While this approach might be more representative of real-world attacks,
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-tests?u=76281980&t=93)** it increases the likelihood that a tester might overlook a weakness that could have and should have been tested. In my experience, most penetration tests tend to be conducted as gray box tests. This approach provides the penetration tester with some internal knowledge, enough to know where to focus their testing efforts, while still preserving as much of the unauthorized outsider perspective as possible. The amount of information shared with a tester is often negotiated during the pre-engagement stage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (2)
> **CLI Commands:** make (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [Goals of a pen test](https://www.linkedin.com/learning/security-testing-essential-training-2022/goals-of-a-pen-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/goals-of-a-pen-test?u=76281980&t=0)** - [Instructor] Well-scoped penetration tests often have a very specific goal in mind. Most penetration tests have the stated goal of stealing something like domain admin credentials, but you can define other goals. Maybe you want to access the CFO's inbox. Maybe you want to download intellectual property. Maybe you want a database of customer information. Remember the CIA triad, confidentiality, integrity, and availability? Take time to understand the value that your client places on each one of these concepts, and use that conversation as a starting point to build your pen test goals. Also, keep the triad in mind while conducting your test to make sure you don't cause any actual damage. Penetration tests frequently focus on compromising the confidentiality of an organization's data and with good reason. If you, as the penetration tester, succeed in your goals and compromise sensitive data at the organization, you should be bound to keep those secrets secret, either through a nondisclosure agreement or through a code of [[Ethics]]. Exploiting integrity vulnerabilities could result in changes to production systems or data. At a minimum, someone is going to have to spend time cleaning up any unauthorized changes that you make during these tests. Worst case, those changes could have a downstream impact that causes a production incident,
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/goals-of-a-pen-test?u=76281980&t=95)** and you should definitely avoid exploiting any availability vulnerabilities. If you as a penetration tester take any production systems or applications offline during your test, then you've done just as much damage as an actual attacker would've done. Determine what matters to the organization that asked you to conduct the test, then define your scope based on that information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethics]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** cfo (1), cia (1)
> **Speakers:** - [instructor] (1)

#### [The security assessment lifecycle](https://www.linkedin.com/learning/security-testing-essential-training-2022/the-security-assessment-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/the-security-assessment-lifecycle?u=76281980&t=0)** - [Instructor] When you integrate all five of these assessments into your information security program, you gain a considerable amount of visibility into where you might be most exposed. At the end of the day, that's what security's all about, isn't it? Identifying these exposures and shoring up your defenses before someone or something else can exploit these weaknesses. I'm not sure whether you noticed or not, but these assessments feed one another. If you conduct them in the order that I presented them here, you should notice efficiencies and how much effort it takes to conduct each assessment and, more importantly, in the quality of the assessment deliverables. Start with a risk assessment. Gauge the risk appetite of your leadership and identify the likelihood and impact of the risks most relevant to your organization. Next, conduct a security controls assessment. Take stock of the controls you have in place. Begin evaluating whether or not the strength, cost, and complexity of each control is appropriate based on your risk assessment. Feed the output from your security controls assessment into one or more compliance assessments. Every compliance authority is essentially building their requirements based on the same standards and frameworks anyway. Once you've assessed your security controls against those same standards and frameworks, your compliance assessment should go much more smoothly.
>
> **[1:37](https://www.linkedin.com/learning/security-testing-essential-training-2022/the-security-assessment-lifecycle?u=76281980&t=97)** Use automated tools and manual techniques to perform a [[Vulnerability Assessment]], paying particular attention to both your host systems and to your web and mobile applications. Look for specific technical weaknesses that an attacker might be able to exploit. Finally, feed all of this assessment data to your penetration testers, whether they're part of the internal red team or an external trusted security provider. Let them try to find ways around your controls. When they're finished, feed their findings into your next risk assessment and return to the beginning of the cycle. I'm sure you've heard the phrase, "Security isn't a destination, it's a journey," and this is what we mean by that. When you understand how these assessments relate to one another, how to conduct them, and when each one is appropriate, you'll be able to identify the most likely threats to your organization, determine which security controls are in place, demonstrate compliance to external entities, know where you're most exposed. And test your resilience against those attacks. Spend time [[Fine Tuning]] your security assessment life cycle. And instead of focusing on data breach [[Incident Response]], you'll be able to focus on business as usual.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vulnerability Assessment]] (1), [[Fine Tuning]] (1), [[Incident Response]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 2. Your Testing Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [The security tester's toolkit](https://www.linkedin.com/learning/security-testing-essential-training-2022/the-security-tester-s-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/the-security-tester-s-toolkit?u=76281980&t=0)** - [Instructor] Mise en place. Ever heard that phrase? Roughly translated, it means everything in its place. When it comes to performing security assessments, I've found that it helps to approach each assessment with a sense of mise en place. Before you test a single system. Before you run a single scan, you should take time to put everything in its place. And by that I mean you should prepare your toolkit. We're going to discuss planning your assessment in just a bit, but first I want to spend a little time discussing the tools that you should know how to use. The tools you should have at your disposal when the time comes. But we're going to do more than just talk about these tools. I want to show you how to use them. I want to make sure that you've seen each tool in action and that you know where to find it. Which commands to use when running it, and how to interpret the output. Determining which specific tools to use during an actual assessment will be part of your pre-assessment or pre-engagement activities. The tools I'll be showing you are the ones that I found most useful as both a practitioner and an educator. But I have a hunch that you'll add a few tools of your own to your toolkit as you gain more experience in this space and as you mature as a assessor.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Kali Linux](https://www.linkedin.com/learning/security-testing-essential-training-2022/kali-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/kali-linux?u=76281980&t=0)** - [Instructor] Let's start with [[Kali Linux]], available for download at [Kali.org](https://Kali.org). Kali is one of, if not the best known, [[Penetration Testing]] [[Linux]] distributions, although it's use extends beyond just penetration testing. You can also use Kali to perform vulnerability assessments and in certain cases, security control assessments. Kali is a fully-functional Linux distribution, loaded with useful security tools and many of the downloads are intended to replace your existing operating system. For this course though, we're going to be using a Kali virtual machine, specifically the Kali Linux 64 bit virtual box distribution, available for download at [Kali.org/get-Kali](https://Kali.org/get-Kali).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (2), [[Penetration Testing]] (2), [[Linux]] (2)
> **URLs:** [kali.org](https://kali.org) (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Nmap](https://www.linkedin.com/learning/security-testing-essential-training-2022/nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/nmap?u=76281980&t=0)** - [Instructor] [[Nmap]], Short for [[Nmap|Network Mapper]], is a fantastic tool for identifying systems on your network. You can download Nmap from [nmap.org](https://nmap.org). If you're on a [[Windows]] machine, navigate to the Zenmap download for a GUI-based version of the tool. The reason I start with Kali is that the command line version of Nmap is one of the tools installed by default. No extra steps required. Just open your Kali VM, open a command prompt, type nmap, and you're ready to go. We're going to focus on some basic Nmap commands in this course, using the tool to perform host, port, and service identification for devices on our in-scope networks. Keep in mind, though, that you can do some vulnerability detection with Nmap as well using the Nmap Scripting Engine. Nmap is one of those tools that takes a moment to learn and a lifetime to master. Fortunately, there are a lot of resources you can tap into to help accelerate your learning. One of my favorites is the Nmap Cheat Sheet, available at HighOn.Coffee. It's full of useful, practical Nmap commands that you'll use time and again throughout your career. We'll go into a more detailed demo of Nmap later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (12), [[Nmap|Network mapper]] (1), [[Windows]] (1)
> **Tools:** command line (1), command prompt (1)
> **Definitions:** short for (1), is a  (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Env Vars:** gui (1)
> **Cross-References:** later in (1)
> **UI Navigation:** navigate to (1)
> **Warnings:** keep in mind (1)

#### [Nessus](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus?u=76281980&t=0)** - [Instructor] Nessus is a vulnerability scanner. Where [[Nmap]] identifies live hosts and the services running on those hosts, Nessus can identify technical vulnerabilities on those hosts, vulnerabilities that an attacker could potentially exploit. You can download Nessus Essentials, formerly Nessus Home, from the [tenable.com](https://tenable.com) website. Tenable offers multiple versions of Nessus, including their cloud-based service, [tenable.io](https://tenable.io). For this course, we're going to use the Essentials edition. Nessus Essentials allows you to scan up to 16 IP addresses on your home network, which should be more than enough for your personal lab. In order to use Nessus Essentials though, you'll need to register with the Tenable website. Once you provide your name and email address, they'll take you to the download page, while simultaneously sending an activation code to your email. Just select the correct version for your favorite operating system, download the installer, and follow the next next finish instructions within the installer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1)
> **URLs:** [tenable.com](https://tenable.com) (1), [tenable.io](https://tenable.io) (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Wireshark](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark?u=76281980&t=0)** - [Instructor] [[Wireshark]] is a tool that lets you capture and analyze network packets. You can download Wireshark from [wireshark.org](https://wireshark.org) and it's installed by default in [[Kali Linux]]. Once Wireshark is up and running, you'll see all of your system's available network adapters listed on the welcome screen. Wireshark immediately begins monitoring traffic, which is why you'll see at least two of the flat lines start to resemble hospital heartbeat monitors. One of the adapters, usually eth0 in Kali, represents the primary virtual network adapter. The other entry, any, tracks, well, any of the network adapters with active traffic. When using Wireshark, I recommend that you steer clear of the any adapter to avoid collecting traffic from multiple adapters. Find the one adapter that you want to focus on, then select that specific adapter from the list. When you highlight the adapter you want to use and click the Wireshark icon in the upper left hand corner, you'll start capturing network packets to your local testing system. You could filter this capture in real time, or you could capture everything and then filter the results offline. One of the key benefits of filtering is that you could proactively filter out any traffic to and from your testing machine. Depending on the nature of your specific test, though,
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark?u=76281980&t=94)** this might not be the best option. My recommendation, capture everything for now and filter offline. As you become more familiar with this tool and with how you're likely to use it in your own assessments, you can tweak the capture configuration to match your preferences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (7), [[Kali Linux]] (1)
> **CLI Commands:** find (1)
> **URLs:** [wireshark.org](https://wireshark.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Lynis](https://www.linkedin.com/learning/security-testing-essential-training-2022/lynis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/lynis?u=76281980&t=0)** - [Instructor] Lynis is an excellent tool for performing security configuration assessments on [[Linux]] systems. You can download Lynis from [cisofy.com](https://cisofy.com). Cisofy offers two versions of this tool. The open source version is at its core just over a thousand lines of shell code. You can use this version to check the configuration of a single server, local or remote as well as the configuration of a single Docker file. The paid enterprise version is better suited for assessing multiple systems at once. The on-screen output is color coded which makes it easier for you to quickly identify areas that you might want to improve. Once this scan completes, Lynis will assign the system a hardening index, which is essentially a how secure am I score, somewhere between zero and 100. The output of the scan will be saved in /var/log with a file named lynis-report.dat. After you familiarize yourself with the tool, you can edit the default.prf preferences file to customize the checks that you want the tool to perform. One quick note. You can use the Center for Internet Security benchmarks to interpret a Lynis report. I'll touch on that in more detail
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/lynis?u=76281980&t=93)** though later in this course. For the Lynis demo, we're going to be back in [[Kali Linux]]. Now again, Lynis is a great tool for learning and understanding configuration scanning. And you may be able to use it in a production environment. Although, larger enterprise organizations may have different tooling available. Still, this is a great tool to learn the process and you may find a way to use it in your own environment. Lynis is not installed by default in Kali Linux. So you'll want to download it. And when you do, you're going to have a tar.gz file in the download directory. Now, if you're not familiar with Linux, in order to unzip that file, you would type tar-xvf and then the file name. And it's going to extract everything in that file to a local directory. Here it's called Lynis. So if we change directory to Lynis and then do an ls to show the contents, we'll see that this is all of the utilities, all the tools we need to run Lynis on the local system. The one other change you'll need to make to run this on your Kali image is to change the ownership of all these utilities to the root account. That way the tool's going to have the authority to see everything it needs to see. And you would do this by doing sudo and then the change ownership command,
>
> **[3:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/lynis?u=76281980&t=188)** C-H-O-W-N dash capital R which is a recursive check, 0:0, which says I want to assign this to the root account and then ./*, which says everything in this directory. So again, I want to change ownership of everything in this directory to the root account. We hit Enter and we are good to go. Now to run the tool itself, let's go ahead and clear the screen. We would use sudo to say we want to run it with root permissions, ./lynis, and then audit system. Two separate words, audit and system. Now, what you're seeing here with the greater than sign ./report.txt, is me telling Lynis when you run this, instead of showing all the output on screen, I want you to write it to a file called report.txt in this directory. What I might actually do in a production environment is include the name of the system we're scanning and maybe the date that we ran the scan just to keep track of everything. But let's hit Enter and then wait a moment for that line of scan to complete. And there we go, the scan's complete. Now if we look for that report.txt file using the list command we'll find that it's there. So let's use the more command,
>
> **[4:43](https://www.linkedin.com/learning/security-testing-essential-training-2022/lynis?u=76281980&t=283)** ./report.txt, to view the contents of that file. Now, when Lynis runs, it's going to gather some basic information about the file. I'm using the space bar to scroll through this quickly. And it's going to begin identifying things that are in place, things that are missing, things that are enabled, disabled, things that are protected, things that are exposed. And it gives you an opportunity to go through line by line or to share with your Linux administrators. To say, is this okay? Is this something that's appropriate for our environment? And I want to scroll down to the recommendation section. So here where we see Lynis.3.08 results, we have two warnings and 42 suggestions. Now, as you're looking these up on the Cisofy website they've got detailed information about why this was flagged and what actions they recommend that you take. But the important takeaway for you as a security assessor is to understand whether or not these settings are appropriate for your environment. Just because a configuration utility like Lynis says you should take a look at that, doesn't mean you automatically need to change something. Rather, it means that you should make an informed risk-based decision about whether or not there's business justification for that configuration on your system and
>
> **[6:19](https://www.linkedin.com/learning/security-testing-essential-training-2022/lynis?u=76281980&t=379)** whether or not there are any upstream controls, like network controls or access controls, that Lynis may not have visibility into that mitigate the risk of that configuration. Again, great tool to use to understand your environment. If you've got a relatively small population of Linux systems then you may be able to gather some very useful information. But play around with Lynis, use it on a couple of different systems and see what you can find for yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (4), [[Kali Linux]] (2)
> **CLI Commands:** find (3), tar (2), make (2), sudo (2), docker (1)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **File Paths:** report.txt (4)
> **URLs:** [cisofy.com](https://cisofy.com) (1)
> **Versions:** 3.08 (1)
> **Cross-References:** later in (1)
> **UI Navigation:** scroll down (1)

#### [CIS-CAT Lite](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-lite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-lite?u=76281980&t=0)** - [Instructor] The first time I heard of the Center for Internet Security or CIS, was in reference to the security configuration benchmarks they publish. When it comes to determining how to secure a system, the CIS benchmarks may be the most comprehensive guides available. The CIS also publishes a scanner known as the CIS-CAT or Center for Internet Security Configuration Assessment Tool, where Tenable's Nessus scans for vulnerabilities based on known signatures. CIS-CAT scans for security configuration weaknesses based on known benchmarks. Just like Tenable, the CIS offers a free tool, the CIS-CAT Lite to registered users. Once you provide your contact info, they'll send you a link where you can download the free version of the scanner. The Lite version of the CIS-CAT scanner is only capable of scanning three technologies, [[Windows 10]], [[Ubuntu]], and [[Google]] Chrome. The pro version, however, supports all of the existing CIS benchmarks. Even better, it supports the CIS workbench component which allows you to customize the benchmarks to better align with internal technical standards. The CIS-CAT Lite is a [[Java]] app though, so you'll need to have Java installed in your system in order to use the tool.
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-lite?u=76281980&t=93)** Java tends to make security professionals nervous, since a number of exploits have been developed to target systems with insecure versions of Java. Java is installed by default on Kali, but know what you're getting into if you're going to choose to install Java in any other environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Windows 10]] (1), [[Ubuntu]] (1), [[Google]] (1)
> **Env Vars:** cis (11), cat (5)
> **CLI Commands:** cat (5), make (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** you'll need (1), install (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Aircrack-ng](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng?u=76281980&t=0)** - [Instructor] Aircrack-ng is actually a suite of tools designed to test the security of wireless networks. I've used the Aircrack-ng suite on virtually every penetration test I've performed where wireless was in scope. In order to use this tool, you'll want to connect another wireless network adapter to your machine. I've used Alpha Wireless network adapters for years, since Realtek chipset makes it easy for Kali to recognize the adapter without a lot of extra steps. This suite of tools can help you quickly identify the wireless encryption settings in use on the target network. If the network is open, that means the wireless network traffic is unencrypted. WEP, WPA, and WPA2 can all potentially be cracked using Aircrack-ng. The first step is to run Airmon-ng to start the virtual wireless network adapter. Similar to [[Wireshark]], this adapter will enable you to capture wireless traffic on your machine. This virtual adapter needs to be installed and running before any other steps will work. The next thing you'll do is run Airodump-ng to monitor for active access points and for clients connected to those access points. While the base command will show you all the nearby wireless devices, you can include specific parameters with Airodump-ng to focus on only the devices
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng?u=76281980&t=95)** you're interested in testing. You can pinpoint these devices based on their Mac addresses. Once you've pinpointed the client and access point that you want to test, you can use Aireplay-ng to force the client to deauthenticate from the wireless access point. The client will then attempt to reconnect immediately, at which point it's going to exchange a four-way wireless handshake to establish that connection. Capturing that handshake is an essential step in cracking the encryption key contained within. Depending on whether the key is WEP, WPA, or WPA2, the last steps vary slightly. Fortunately, the Aircrack-ng developers maintain current, detailed, step-by-step tutorials on their website, [aircrack-ng.org](https://aircrack-ng.org).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Env Vars:** wep (2), wpa (2), wpa2 (2)
> **URLs:** [aircrack-ng.org](https://aircrack-ng.org) (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Hashcat](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat?u=76281980&t=0)** - [Instructor] There are multiple password crackers in the pen testing space. [[John the Ripper]] may be one of the most well-known, along with [[Hydra|THC-Hydra]], L0phtCrack, and RainbowCrack. One of my favorite tools in this space, though, is [[Hashcat]]. You can read up on this tool at [hashcat.net](https://hashcat.net). Hashcat is one of if not the fastest password crackers. It's installed by default in [[Kali Linux]] and it supports over 350 hash types, including popular [[Algorithms]] like MD5 and NTLM. You can type hashcat -h at the command prompt in Kali Linux in order to access the help file. When you do this, you'll quickly get a sense of how powerful this tool can really be. When cracking passwords using Hashcat, the more you know about the password's source, the more likely you are to be successful. Scrolling through the help file will point you in the right direction, but I'm going to walk through a simple demo later in this course so that you can see Hashcat in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hashcat]] (6), [[Kali Linux]] (2), [[John the Ripper]] (1), [[Hydra|Thc-hydra]] (1), [[Algorithms]] (1)
> **Env Vars:** thc (1), md5 (1), ntlm (1)
> **URLs:** [hashcat.net](https://hashcat.net) (1)
> **Cross-References:** later in (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### [OWASP ZAP](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap?u=76281980&t=0)** - [Instructor] Web application scanning can be tricky, so be careful. Host vulnerability scanners often check against known signatures. Does this condition exist on the target system? Yes or no? That binary approach to vulnerability scanning enables vulnerability management vendors to build scanners that are unlikely to impact the systems they're scanning. Web app scanners, on the other hand, tend to be a little more open-ended. What happens when I do this? These scanners often interact with the target applications like a potential malicious end user, which increases the risk of accidentally breaking the target application. With this in mind, it's important that you, the security assessor, take additional precautions when configuring your scans. It's also important you test your scanning skills against non-production web applications first so you can see the potential impacts firsthand and adjust your production scans accordingly. That's where [[OWASP]] comes to the rescue. OWASP, short for the Open [[Web Application Security]] Project, is a not-for-profit organization dedicated to improving web application security. The organization sponsors and publishes multiple open-source projects to help accomplish this goal, and we're going to take a look at two of them in this course.
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap?u=76281980&t=93)** ZAP, or Zed Attack Proxy, is a web application security scanner that can test some basic web application security vulnerabilities. In addition to the automated scanning functionality, ZAP includes some [[Manual Testing]] tools that can come in handy during a penetration test. OWASP also maintains a number of intentionally vulnerable web applications for the purpose of training security assessors and penetration testers. We're going to use one of those apps, Juice Shop, to walk through a basic web app security scan using ZAP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Application Security]] (4), [[OWASP]] (3), [[Manual Testing]] (1)
> **Env Vars:** owasp (3), zap (3)
> **Definitions:** is a  (2), short for (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [OWASP ZAP demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap-demo?u=76281980&t=0)** - For the [[OWASP]] ZAP demo I'm going to show you within the Cali [[Linux]] virtual machine that you can run Zap locally from any operating system. Depending on which version of Cali you're using, ZAP may or may not be installed by default. In earlier versions, if you will go to the application menu and then go to O3 web application analysis. ZAP would be available in here. Unfortunately, they've removed it from Cali by default so you would need to install it from the [zaproxy.org](https://zaproxy.org) website. What I recommend doing is downloading the Linux package. That's going to be that G zipped file. And then on your local machine in the terminal if you type tar-xvf and then the name of that ZAP G zipped file, it will extract all of those files to a directory that you can then change directory into and access the tools you'll need to run ZAP itself. In order to launch ZAP, type ./zap.sh. and this shell script will load all of the dependencies and options necessary to get the ZAP UI up and running. Now, once the ZAP UI is ready, one of the questions you're going to be prompted with is,
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap-demo?u=76281980&t=94)** "Do you want to persist the ZAP session?" For the purpose of the demo, I'm going to say no. But if you're testing a website over multiple days or weeks I would definitely recommend persisting that session so that you don't lose data every time you launch the tool. Click start, and if this is the first time you've run ZAP you may see another popup window for all of the add-ons available. ZAP's going to try to update those add-ons and you can choose to enable and disable add-ons that extend the functionality of the tool. ZAP has two options by default, an automated scan or a manual explorer of the website. An automated scan is going to perform a spider look for known webpages and then start running the attacks. But the manual explorer will let you navigate to specific URLs that you might be interested in attacking. And what I want to do is use the OWASP Juice Shop web application that I mentioned in the earlier video. Juice Shop is a deliberately vulnerable web application hosted on heroku [app.com](https://app.com) that the OWASP team maintains to help folks like you better understand and evaluate your [[Web Application Security]] skills. So what we are going to do in ZAP is click on automated scan. We're going to add an s https
>
> **[3:06](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap-demo?u=76281980&t=186)** for the SSL TLS site, and then for the URL we'll type juice-shop.[herokuapp.com](https://herokuapp.com). And as soon as you click Attack, ZAP is going to start analyzing that website. Now what you'll see down here at the bottom is that a spider tab appears. Within web application security scanning, spidering is just identifying available URLs. Once it completes spidering the website it immediately starts scanning for vulnerabilities. Let's jump over to that spider tab while the scan's running. Now there are a number of green icons in the processed column and a number of red icons. They correspond to URLs that are either in scope or out of scope for the test. The green icon indicates that this is the URL that you wanted to attack. While the red icon indicates that the URL exists on some other domain. What you'll see is that the very first three things that ZAP is going to look for is the primary URL is a website there, a robots .txt file, are there any URLs or directories that we're to avoid? And a site map .xml file, a detailed listing of all the URLs that might be available for analysis. Based on the results of that spider, the active scan is going to try to access every page on the website so that it can analyze those pages
>
> **[4:44](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap-demo?u=76281980&t=284)** for vulnerabilities. Now, those vulnerabilities are going to show up on the alerts tab, and you can see that even while this scan is actively running, we're already able to identify and review vulnerability information. These cross domain mis-configuration vulnerabilities are of a medium severity, and if we pull up one of the vulnerable URLs and scroll down on the right hand side, you'll see information about that vulnerability to help you understand what the vulnerability means, as well as what OWASP recommends you do to remediate that vulnerability. In the reference field, you have references to external websites that talk about these vulnerabilities and in the alert tags field, you'll have references to the OWASP top 10. And this is a great training tool for your development team to show them not only what the scanner found but a URL that contains extensive detail on that type of vulnerability and what actions developers can take to prevent these vulnerabilities from ending up in their applications in the first place. Once the active scan is complete you'll be able to export that information to share it with the developers or system administrators. If the scan's taking a long time you can pause it, you can stop it. And then for all of the data that the scan captures
>
> **[6:19](https://www.linkedin.com/learning/security-testing-essential-training-2022/owasp-zap-demo?u=76281980&t=379)** in this upper left hand site's window, you can see a representation of the site map. You can see the HTTP request and responses including the body of those responses to know what is being sent to the application and what is being received from it. Again, this is a very lightweight web application scanning tool that's very focused on only the OWASP top 10. If you have more advanced needs, the [[Burp Suite]] is one of my favorite tools in this space but I don't demo Burp here because it does cost money to purchase a license to do this type of scan and I wanted you to be able to run a scan for free before you explore other technologies. So my recommendation for you is that you speak with development teams internally, identify web applications that you could scan and then use OWASP ZAP to introduce web application scanning to your teams while you yourself are building out your web application assessment skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (7), [[Linux]] (2), [[Web Application Security]] (2), [[Burp Suite]] (1)
> **Env Vars:** zap (16), owasp (7), url (5), ssl (1), tls (1)
> **UI Navigation:** go to (2), click on (1), scroll down (1)
> **Definitions:** is a  (4)
> **URLs:** [zaproxy.org](https://zaproxy.org) (1), [app.com](https://app.com) (1), [herokuapp.com](https://herokuapp.com) (1)
> **Prerequisites:** install (1), you'll need (1)
> **File Paths:** zap.sh (1)
> **CLI Commands:** tar (1)


### 3. Planning Your Assessment

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding your scope](https://www.linkedin.com/learning/security-testing-essential-training-2022/understanding-your-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/understanding-your-scope?u=76281980&t=0)** - [Instructor] Now that you know some of the tools that you're likely to use during your assessment and how to use them, you're ready to scope your assessment. Remember the first five assessment types we discussed at the beginning of this course? Knowing which type of assessment you intend to conduct will have a significant impact on your scoping process. Who requested the assessment? Think of that person as your customer, your client. It doesn't matter whether you're an internal employee at a large corporation or an independent consultant who works with multiple clients, the requester is your customer. And while I don't subscribe to the idea that the customer is always right, I do believe that a happy customer is more likely to come back and request repeat work. Start by asking your customer for a list of systems to include in the assessment. If the customer has a list of host names and IP addresses, great. If the customer has a range of IP addresses, you can work with that too. You just need to do a little extra work to determine which hosts are online and which ones aren't. You should also ask your customer whether or not they have the authority to ask you to conduct an assessment of these systems. If all the systems are in the customer's on-prem data center, chances are you're good to go. But what if they ask you to assess systems that belong to [[SaaS]] providers, like Salesforce or ServiceNow? What if they ask you to assess systems
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/understanding-your-scope?u=76281980&t=93)** residing in [[Microsoft Azure|Azure]] or AWS? They may think they have permission, but you could get in trouble with those third parties if your assessment activity causes a service disruption. Don't take unnecessary risks. Get it in writing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [Improving over time](https://www.linkedin.com/learning/security-testing-essential-training-2022/improving-over-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/improving-over-time?u=76281980&t=0)** - One common pitfall that security testers fall into is thinking tactically and not strategically. Each assessment you conduct has value as a standalone measure of an organization's security posture at any given point in time. But how much value can you realize by measuring improvements over time? If you want to truly achieve a high level of security maturity, then measuring your progress is critical. That's why it's so important that you select a [[Security Testing]] methodology that delivers consistent, measurable results. Let's imagine this scenario. Your leadership decides that it's time to make a concentrated effort on improving your information security program. As a result, they hire a consulting firm to help them make changes over a three year period. Part of that engagement includes a recurring annual security assessment of some sort. And that's exactly how it's written in the contract, by the way, just, security assessment. Year one, the company sends in Dave. Dave is a seasoned penetration tester. He's been pen testing for so long that they didn't even coin the term "pen testing" until years into his career. When Dave conducts his assessment, he thinks like a pen tester. He chooses tools designed to compromise specific systems looking for the quickest path to domain admin rights.
>
> **[1:37](https://www.linkedin.com/learning/security-testing-essential-training-2022/improving-over-time?u=76281980&t=97)** Year two, the company sends in Debra. Deborah started her career as a system administrator, eventually working for a vulnerability scanning software vendor before making the jump to consulting. When Debra conducts her assessment, she sticks with what she knows: Automated analysis using commercial grade vulnerability scanning technology. Year three, the company sends in Dylan. Dylan joined the consulting firm straight out of college. He did extremely well in his courses, but, he doesn't yet have any real world security experience. When Dylan conducts his assessment, he searches for the term "Security Assessment Checklist" on the internet, and he scours the search results until he finds one that he thinks he can complete within the timeframe allotted to the engagement. At the end of year three, your leadership team comes to you and asks you to review the reports generated by Dave, Debra, and Dylan, and write a report of your own. They want you to summarize the progress you've made over the past three years. Is your report going to be a simple, accurate representation of how your efforts have mapped to measurable improvements?
>
> **[2:59](https://www.linkedin.com/learning/security-testing-essential-training-2022/improving-over-time?u=76281980&t=179)** - Or is it going to be a patchwork quilt of random [[Statistics]] and educated guesses? [[NIST]] special publication 800-115, the technical guide to information security testing and assessments, recommends that your security assessment methodology be both documented and repeatable. Those two simple concepts will hope you'll avoid falling into the garbage, in garbage out trap from the scenario we just discussed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (2), [[Statistics]] (1), [[NIST]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - one (1), - or (1)
> **Env Vars:** nist (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Warnings:** pitfall (1)

#### [Selecting your methodology](https://www.linkedin.com/learning/security-testing-essential-training-2022/selecting-your-methodology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/selecting-your-methodology?u=76281980&t=0)** - [Instructor] Here are a few methodologies you may want to consider depending on the nature of your assessment. When conducting a risk assessment, a great place to start is [[NIST]] Special Publication 800-30 Rev 1, Guide for Conducting Risk Assessments. While this tends to be more qualitative in its approach, the Fair Institute's quantitative approach may be more to your organization's liking. For security controls assessments, NIST Special Publication 800-53 Rev 5, Security and [[Privacy]] Controls for Federal Information Systems and Organizations, contains an extensive set of security controls, along with considerable detail regarding each individual control. Likewise, ISO 27002, the 2022 version, Code of practice for information security controls, provides a comprehensive set of security controls that you may want to consider. And when it comes to compliance assessments, the specific data set often dictates which controls must be assessed by whom, and how often. Organizations that accept, process, store, and or transmit credit card data need to refer to the [[PCI DSS|payment card industry data security standard]]. Going one level deeper,
>
> **[1:32](https://www.linkedin.com/learning/security-testing-essential-training-2022/selecting-your-methodology?u=76281980&t=92)** the specific controls which must be assessed and the determination whether an organization can self-assess their controls or whether they must engage a certified third-party depends on factors like the number of credit card transactions processed each year. Organizations in the United States that handle electronically-protected healthcare information must perform a [[Security Risk]] assessment that aligns with the controls required by the Health Insurance Portability and [[Accountability]] Act of 1996, better known as HIPAA. The frequency of these assessments will vary based on a number of deciding factors. And the unified compliance framework has mapped over 800 authority documents into their database to help organizations like yours determine which controls should be tested in efforts to comply with relevant standards and regulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2), [[Privacy]] (1), [[Data Security]] (1), [[Security Risk]] (1), [[Accountability]] (1)
> **Env Vars:** nist (2), iso (1), hipaa (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Selecting your tools](https://www.linkedin.com/learning/security-testing-essential-training-2022/selecting-your-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/selecting-your-tools?u=76281980&t=0)** - [Instructor] When performing vulnerability assessments, the appropriate methodology and the tool selection often go hand in hand. Commercial grade host vulnerability scanners such as Nessus, Qualys Cloud Platform and Nexpose dominate the market. While open source solutions like OpenVAS are available for organizations more inclined to explore open source technologies. OpenVAS, by the way, grew from an early fork of Nessus before Nessus became a commercial solution. Commercial grade [[Web Application Security]] scanners such as Veracode, AppScan and Sentinel are popular in larger development shops. While tools like Acunetix, Checkmarx and Synopsis have a strong presence in the market as well. Tools like [[Burp Suite]] and [[OWASP]] ZAP, however, are favorites in the security community due largely in part to their balance between cost and functionality. When performing automated vulnerability scans you also need to determine whether your methodology needs to include authenticated scans, unauthenticated scans, or both. Unauthenticated scans represent a viewpoint of an unauthorized outsider. While authenticated scans represent the viewpoint of a trusted insider. Each type of scan will return a different set of results based on what access you've granted the scanner.
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/selecting-your-tools?u=76281980&t=95)** While authenticated scans return more detailed and accurate results, the risk of impacting production is greater with authenticated scanning. My recommendation, for the record, is that you perform unauthenticated scans on systems and applications that are directly accessible to the internet, and that you perform authenticated scans of internal production host and internal non-production instances of your web applications. When [[Penetration Testing]] is on the table, the methodology can vary significantly from one tester to another. This can be attributed to varying levels of skill and experience in this space. My favorite methodology is the Penetration Testing Execution Standard, or PTES. Although the Open Source [[Security Testing]] Methodology Manual is a robust resource that you might want to explore as well. When performing [[Manual Testing]] is part of any hands on assessment, you might also want to include relevant manual testing methodologies to keep your results consistent. The OWASP testing project offers a detailed guide on manually testing web applications for weaknesses, and the OWASP Mobile Security Testing Guide is an excellent resource for testing mobile applications. The Center for Internet Security Benchmarks are, perhaps, the most detailed security configuration
>
> **[3:10](https://www.linkedin.com/learning/security-testing-essential-training-2022/selecting-your-tools?u=76281980&t=190)** testing resources available for testing systems, [[Databases]], networks, and the like. In other words, you have no shortage of materials available when it comes to determining your security testing methodology. The important part is that you spend time understanding your customers needs and expectations so that you can choose the right methodologies. And that you use those same methodologies over the course of multiple assessments so that you can generate a consistent result set for analyzing your progress over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Security Testing]] (3), [[Penetration Testing]] (2), [[Manual Testing]] (2), [[Web Application Security]] (1)
> **Env Vars:** owasp (3), zap (1), ptes (1)
> **Definitions:** is a  (1), is an  (1), in other words (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Basic assessment tools](https://www.linkedin.com/learning/security-testing-essential-training-2022/basic-assessment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/basic-assessment-tools?u=76281980&t=0)** - [Instructor] Once you understand your scope and you've selected your methodology, selecting your tools becomes pretty straightforward. There are a few factors you'll want to consider first, however, budget, complexity, and collaboration. Risk assessments don't often require complex automated tools, given the nature of the risk assessment process itself. Many consulting organizations use custom-built spreadsheets or applications that include both questions and automated score calculations based on the risk assessment methodology they choose to follow. One tool worth investigating in this space is SimpleRisk. While they do have a hosted option available, SimpleRisk offers a pre-configured virtual machine that allows you to get up and running quickly with minimal configuration. You can learn more about SimpleRisk at [simplerisk.com](https://simplerisk.com). The security controls assessments I've done throughout my career have been via custom spreadsheet tools more often than not. That's because so much of the security controls assessment process involves question and answer discussions with the individuals responsible for implementing and maintaining those controls. For organizations aligned with [[NIST]], there's a good chance that they'll want or need to align with the security control set that resulted from the Federal [[Information Security Management]] Act
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/basic-assessment-tools?u=76281980&t=95)** or FISMA. When testing these organizations, you might be able to accelerate your efforts using the Open FISMA tool available at [openfisma.org](https://openfisma.org). For organizations aligned with ISO, a great resource to add to your toolbox is the ISO27k toolkit, available to download for free from [ISO27001security.com](https://ISO27001security.com). This toolkit contains a collection of documents, PDFs, Visios, spreadsheets, and PowerPoints designed to help assessors perform an assessment against both the ISO 27001 and ISO 27002 standards. If you're headed down the ISO path, you'll likely want to purchase the relevant standards as well from [iso.org](https://iso.org). Starting with the free ISO27k toolkit is a great walk then run approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (1), [[Information Security Management]] (1)
> **Env Vars:** iso (4), fisma (2), nist (1)
> **URLs:** [simplerisk.com](https://simplerisk.com) (1), [openfisma.org](https://openfisma.org) (1), [iso27001security.com](https://iso27001security.com) (1), [iso.org](https://iso.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Advanced assessment tools](https://www.linkedin.com/learning/security-testing-essential-training-2022/advanced-assessment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/advanced-assessment-tools?u=76281980&t=0)** - [Instructor] Compliance assessment tools are sometimes provided by the compliance authority. The payment card industry, for example, maintains a library of Self-Assessment Questionnaires online at [pcisecuritystandards.org](https://pcisecuritystandards.org). The [[Microsoft Office|Office]] of Civil Rights, OCR, and the Office of the National Coordinator for Health Information Technology, ONC, have a HIPAA [[Security Risk]] Assessment Tool available to download for free from this URL at [healthit.gov](https://healthit.gov). When it comes to vulnerability assessments and penetration tests, referring to the methodology guides is your best starting point. The [[Penetration Testing]] Execution Standard, the PTES, references a number of tools in the technical guideline available at [pentes-standard.org](https://pentes-standard.org). You could compliment the information in the PTES with the Open Source [[Security Testing]] Methodology Manual, or OSSTMM available at [isecom.org](https://isecom.org). When testing web applications I've included a pair of [[OWASP]] links here to an extensive list of [[Application Security]] testing tools. The number of tools available for performing very specific tests against unique web app technologies continues to grow and I've yet to find a more robust, comprehensive list
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/advanced-assessment-tools?u=76281980&t=94)** than the ones you find on the OWASP website. You can check out those resources at these URLs. And while the website, [sectools.org](https://sectools.org) is a bit dated, many of the tools on that site have withstood the test of time. If you want to round out your knowledge of security testing tools, browse through the SecTools list of the Top 125 [[Network Security]] Tools. You'll see a few tools there that we've already covered in this course, along with dozens of tools that could prove useful in one of your upcoming security assessments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Security Testing]] (2), [[OWASP]] (2), [[Security Risk]] (1), [[Penetration Testing]] (1)
> **Env Vars:** ptes (2), owasp (2), ocr (1), onc (1), hipaa (1)
> **URLs:** [pcisecuritystandards.org](https://pcisecuritystandards.org) (1), [healthit.gov](https://healthit.gov) (1), [pentes-standard.org](https://pentes-standard.org) (1), [isecom.org](https://isecom.org) (1), [sectools.org](https://sectools.org) (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Review Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Documentation review](https://www.linkedin.com/learning/security-testing-essential-training-2022/documentation-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/documentation-review?u=76281980&t=0)** - [Instructor] One of the best resources I've found for security documentation is ISACA. ISACA is the professional organization behind the certified Information Systems Auditor or CISA certification. ISACA defines four key types of interrelated security documents. Policies contain the high level principles that the organization has agreed to pursue. Standards contain the requirements to which all systems and applications must adhere. Guidelines contain instructions on how to accomplish specific configurations and procedures are more detailed and prescriptive than guidelines containing step-by-step instructions on how to execute a task. So how do these documents relate to one another? Let's say your organization implements a mobile security policy. This document would contain high level statements about how your organization will secure the use of mobile devices. Based on that policy and on industry leading practice, you would then develop standards outlining the settings that must be applied at the device and application level in order to adhere to that policy. You might also develop guidelines that discuss certain settings that aren't covered in the standards especially if those settings are applicable to a newly released version
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/documentation-review?u=76281980&t=94)** of a mobile operating system or a mobile application. And finally, you should develop multiple procedures that instruct all staff members on how to apply all of the required and recommended settings. In the CISA Study Guide, ISACA emphasizes the relationship among these documents, clarifying how they inform one another. More importantly, ISACA points out that if this documentation set is not helping you meet your security goals, you shouldn't focus your remediation efforts on a single document. You should start with the policy to make sure that it's appropriate and then follow that flow through all the related documents, maintaining the cohesiveness necessary for success. The first thing to look for, is their documentation set complete? The exact contents of an organization's security documentation set is often driven by that organization's compliance requirements combined with their selected security control frameworks. If you review those standards and regulations, you can put together a complete list of all the policies and standards the organization is required to have in place. For each document in that set, there are a few criteria you'll want to look for within each actual document. When was the last time the document was reviewed? Who reviewed and signed off on the document?
>
> **[3:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/documentation-review?u=76281980&t=188)** Has the scope been properly defined? Do the policy statements align with reasonable security practices? And do the technical details of each standard align with reasonable security practices? What do I mean by reasonable security practices? Let's use the CIS Benchmarks as an example. Implementing all of the controls define in the CIS Benchmarks could be both unnecessary and cost prohibitive for certain organizations. However, starting with the CIS Benchmarks and working your way back to something reasonable and appropriate for your organization, that's a much more likely path to success. Maybe the most important question you should ask when performing a documentation review is, are they actually doing this? Many organizations write robust security documentation and then put it in a binder on a shelf or a folder on a share drive and they never look at it again. This results in that false sense of security that we're trying to avoid. Once you're certain the documentation is reasonable and appropriate, you'll be able to assess the organization's environment against the statements within those documents. In addition to policies, standards, guidelines, and procedures, you should also consider examining the following supporting documentation. Architectural diagrams,
>
> **[4:43](https://www.linkedin.com/learning/security-testing-essential-training-2022/documentation-review?u=76281980&t=283)** organizations often have VISIOs or something similar that provides a graphical representation of the environment. System security plans, or SSPs. These are narratives that describe how controls will be implemented in order to protect a specific environment. Third-party contracts and agreements. Language outlining how third parties are expected to protect an organization's data can be very insightful. [[Security Incident Response]] plans. In the event of a security incident, does an organization have a documented tested plan that they intend to use to respond? And disaster recovery and business continuity plans, similar to security incident response plans, how does the organization intend to respond to an event that impacts their ability to operate or to deliver services to their customers?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Incident Response]] (2)
> **Env Vars:** isaca (5), cis (3), cisa (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Log review](https://www.linkedin.com/learning/security-testing-essential-training-2022/log-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/log-review?u=76281980&t=0)** - [Narrator] Why do we collect logs in the first place? If the person you're asking answers, "Because compliance says we have to," then they might be missing some key information. Remember, while compliance requirements support security, compliance alone isn't enough. Logs provide us with visibility about what's actually happening in our environment. Which systems are talking to one another? What are users actually doing when they log into an application? Logs help us quickly identify threats and potential compromises. Are we seeing login attempts from a potentially malicious IP address? Are we seeing patterns of reconnaissance activity that suggest that we may be actively targeted for an upcoming attack? Was someone added to the domain administrator group at three in the morning last night, a time when everyone in the company was supposed to be in bed? At a minimum, you should examine logging configurations for the following settings, failed authentication attempts, sensitive authentication attempts, particularly to systems or applications hosting sensitive data, privileged account activity, service startup and shut down activity, collection of source IP, destination IP, date, and time. In short, enough information to reasonably determine where and when the activity occurred.
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/log-review?u=76281980&t=95)** When performing a log review, you should start by reviewing the logging and monitoring policies and standards for two key pieces of information. One, which systems must have logging enabled? And two, what are the required log settings on each system?

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### [Log management tools](https://www.linkedin.com/learning/security-testing-essential-training-2022/log-management-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/log-management-tools?u=76281980&t=0)** - [Teacher] When asked about their log management practices organizations are likely to reply that they're collecting server and operating system logs. Great, that's an excellent place to start but what other logs should they be collecting? When you combine server logs with application logs, database logs, web server logs, network logs, and so on you can paint a much more detailed picture of what's actually happening across your organization's network. Are they logging endpoint activity? This can result in excessive storage requirements particularly for large enterprises with tens of thousands of endpoint systems. Are they storing logs in a centralized server? Have they synchronized time settings across their entire environment? Are they retaining logs for an appropriate amount of time? Many organizations rely on log management systems to help them collect and organize all of this information. In the security space, a log management system performs these basic functions while security information event management systems, or SIEMs, perform much more advanced tasks especially related to correlation and alerting. Some of the more popular commercial log management systems are Splunk, QRadar, LogRhythm and AlienVault, although there are a number of free
>
> **[1:32](https://www.linkedin.com/learning/security-testing-essential-training-2022/log-management-tools?u=76281980&t=92)** and open source tools as well. Syslog is a native logging mechanism installed on every [[Linux]] system and its open source counterpart Syslog-ng provides even more features and functionality. Graylog is a popular tool in the open source log management space, and a number of organizations rely on [[Elasticsearch]] or the ELK Stack, a combination of Elasticsearch, Logstash, and Kibana. Without some sort of technology to analyze and manage all of this log data, an organization is likely to fall short of accomplishing the requirements documented in their logging and monitoring policy. Another resource I recommend that you add to your toolkit is the Critical Log Review Checklist for Security Incidents, co-authored by Lenny Zeltser and Dr. Anton Chuvakin. This document, available for free at [zeltser.com/cheat-sheets](https://zeltser.com/cheat-sheets) provides pointed insights into the log data that you wish you'll had on hand when responding to a security incident. In my own consulting work, I have repeatedly found this resource to be incredibly valuable. I performed [[Incident Response]] for a small healthcare organization that had been compromised by an unauthorized outsider and when I requested log data so I could attempt reconstruct what actually happened, they told me that not only were the log settings inconsistent and incomplete, but some of the logs I need
>
> **[3:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/log-management-tools?u=76281980&t=188)** had rolled over and were no longer available. That organization didn't have a centralized log management server, let alone a security information event management system and that severely hampered my ability to perform forensics. You can't examine something that doesn't exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Elasticsearch]] (2), [[Linux]] (1), [[Incident Response]] (1)
> **Definitions:** is a  (2)
> **URLs:** [zeltser.com](https://zeltser.com) (1)
> **Env Vars:** elk (1)
> **Analogies:** picture (1)
> **Speakers:** - [teacher] (1)

#### [Ruleset review](https://www.linkedin.com/learning/security-testing-essential-training-2022/ruleset-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/ruleset-review?u=76281980&t=0)** - [Instructor] By rule set review, I mean the configuration of routers, firewalls, [[Intrusion Detection]] systems, and intrusion prevention systems. Specifically, I'm interested in the access control settings that determine how these devices respond in response to device access attempts across the network. Leading security practice is to set network devices to deny all traffic by default and then explicitly grant access once a business need for that network traffic has been identified. While this is an excellent security control, it obviously requires both time and effort on the administrator's part as well as an understanding of how the business operates. Early in my consulting days, I remember working with a client who was required by one of their partners to install a firewall. My client was not well versed in information security and while they knew they needed a firewall, they didn't quite understand how they worked. When we performed our very first firewall rule set review for them, we found a single rule permit ip any any. Now were they compliant with a partner's requirement to install a firewall? Kind of. Did that firewall provide any security value? Absolutely not. When performing your review, always check for whether or not the device being analyzed includes a denial setting, and that the denial setting is in the right place.
>
> **[1:37](https://www.linkedin.com/learning/security-testing-essential-training-2022/ruleset-review?u=76281980&t=97)** Putting it at the very top of the access control list is a good way to ensure that no network traffic gets through, not even the traffic that's required for the business to operate. What else should you look for during these reviews? Are the rules still necessary? Clutter leads to unnecessary complexity. Do the rules follow the principle of least privilege? If only one server on a particular subnet needs to access a sensitive system on another subnet, don't open up all ports for all hosts between the two subnets. Limit that traffic to the fewest number of required ports and IP addresses. Specific rules should be triggered first, then general rules. Unnecessary ports should be closed, especially when it comes to administrative services like SSH or RDP. Again, documented requirements. And no back doors or other bypasses. When reviewing rules for an IDS or an IPS, keep these two statements in mind. Disable or delete unnecessary signatures. This lightens the load on the centralized log management system, reducing both storage requirements and false positives. And fine-tune required signatures to ensure that the alerts generated when those rules are triggered are results that you can actually use. You can test firewall rules by using [[Nmap]] to scan
>
> **[3:11](https://www.linkedin.com/learning/security-testing-essential-training-2022/ruleset-review?u=76281980&t=191)** for open network ports between network segments. But manually reviewing rule sets can be a little cumbersome. For years, the go-to firewall rule set auditing tool was Nipper. Nipper was both effective at the task and available for free, which definitely helped it find a large user base. Nipper remains an incredibly useful tool for this purpose, although it's no longer available for free. If you'd like to explore Nipper functionality though, you can download a free trial of Nipper Studio from [titania.com](https://titania.com).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1), [[Nmap]] (1)
> **Env Vars:** ssh (1), rdp (1), ids (1), ips (1)
> **CLI Commands:** ssh (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **URLs:** [titania.com](https://titania.com) (1)
> **Speakers:** - [instructor] (1)

#### [System configuration review](https://www.linkedin.com/learning/security-testing-essential-training-2022/system-configuration-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/system-configuration-review?u=76281980&t=0)** - [Jerod] [[System Configuration]] reviews can be some of the most time consuming tasks during a security assessment. Imagine going into an environment with 10,000 endpoints and being told to check the security settings on each one to determine whether or not there are any weaknesses. That's an impossible task. Automating these reviews with scanning technology is essential, but how do you know what to look for? If your customer has documented their security standards, you have the answer right in front of you. Customer internal security standards should represent leading security practices, combined with modifications necessary to run their unique business. Which services need to be enabled on each host system? Which privileged accounts need to exist on each system for administrative purposes? What encryption settings, if any, are required to be applied to each system? You have a couple of ways you might go about performing these reviews. You could run a tool like Lynis or CIS-CAT against the target and then review the results for failures or warnings. Then you could refer to the customer's internal system hardening standards to see whether or not those standards include any language or rationale regarding why their settings might be misaligned with leading security practices. Personally, this is my preferred approach,
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/system-configuration-review?u=76281980&t=94)** since it narrows down your findings to potential misconfigurations that are generally accepted to represent a higher risk to the target system. The downside is that this approach doesn't represent a one-to-one mapping between a customer's documented standards and the systems to which those standards have been applied. As a result, you may spend a lot of time chasing down items that the customer has already deemed unnecessary or irrelevant. The inverse of that approach is to use an enterprise grade vulnerability scanner or configuration scanner to build a unique technical policy that includes only those settings defined in the customer's hardening standard, and then perform an authenticated scan of in-scope systems against that technical policy. If you have this scanning technology at your disposal, then this approach offers a much more efficient use of your time. For now though, let's use CIS-CAT to scan one of our lab systems and then we'll examine the output of those scans together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[System Configuration]] (1)
> **Env Vars:** cis (2), cat (2)
> **CLI Commands:** cat (2)
> **Analogies:** imagine (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [jerod] (1)

#### [CIS-CAT demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-demo?u=76281980&t=0)** - [Instructor] For this CIS-CAD demo, we're going to be using a [[Windows 10]] virtual machine, that you can download for free from developer dot [[Microsoft]] dot com. This is a timeboxed machine. It's only going to work for 90 days, but that's plenty of time to run your tests. We're going to use the MSEdge on Win10 image for VirtualBox. And once we import that image into VirtualBox, fire it up, you'll be prompted to log in as the IEUser account. Just to make it easy, the password for that account is capital P, A-S-S-W, zero, R-D, exclamation point. From this image, you're going to want to download the CIS-CAT tool and unzip it anywhere on the machine. I've got it here on the desktop. In the assessor folder. And you can see the contents of that folder contain everything the tool needs to run on multiple platforms. It contains the [[Java]] file image, it contains the shell script for [[Linux]] boxes. We're going to use the executable design... The gooey... For the [[Windows]] machine. But before you run the tool, you need to go into the config folder, and edit the sessions dot properties. You can right click and open that with Notepad, as I've done here. And you'll see a commented out file, that let's the CIS-CAD tool know which system you want to scan. Everything's going to be commented out, so it won't know whether or not you're looking at the local box or a remote system.
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-demo?u=76281980&t=93)** And all you have to do, is delete the pound signs in front of session dot default type, and dot temp. Once you do that, make sure to save your changes. And now, when you run the assessor tool, it's going to look at the local system. So let's go back to the assessor folder, and open up assesor dot gooey. When it asks you whether or not you want to allow the app to make changes to the device, we're going to say yes. This gives the tool the ability to see everything it needs to do a thoughrow examination of this image. And here we are. Let's maximize this. The two options we have to scan, basic or advanced, tell you whether or not you want to scan a single system or multiple systems. And again, with the free tool, we're just going to do a scan of the local system. And once you click basic, it's going to give you the options for the type of scan you want to run. Now here, we're on a Windows10 image. So the fifth item in the list is a Windows10 stand-alone. This is the benchmark that is pulling down from the Center for Internet Security. Once you select that operating system, you'll see all of the different types of scans you can run. From very simple... This would be a traditional end-user system. To more stringent security controls, where the system might be hosting sensitive data. Let's select the item at the top of the list.
>
> **[3:06](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-demo?u=76281980&t=186)** Level one, corporate enterprise environment, level general use. Once you've got that selected, click add. And it's going to populate the selected benchmark box, lower in the screen. Now we're ready to go to the bottom right, click next and let the tool know, once you're done, what kind of report do I want? Do I want it in web format? [[HTML]]? Do I want to see a speed file, do I want a text file? For the purpose of the demo, we'll just keep it HTML. And it's going to save it in the folder on your desktop where you unzipped the tool. Under the assessor folder, there's a reports subfolder. Everything else looks good. Click next. And start assessment. As the tool runs, the text you're going to see onscreen is the same text you would see if you were running it from the command line. And as each section of the test concludes, we'll see a green checkmark, letting us know that everything worked as expected. Scroll down a bit... And here we can see successful connection to the local host. And now we need to wait a moment for it to run through all of the test in that Win10 standalone benchmark. Okay, looks like we've got a completed report. If we go to the line in the target systems window and select our report, we can jump right to the HTML from here.
>
> **[4:41](https://www.linkedin.com/learning/security-testing-essential-training-2022/cis-cat-demo?u=76281980&t=281)** This is what the output of that report would look like, in HTML format. This is pretty sensitive. Even though it was only a couple of minutes, it's got hundreds of tests that it's run. What I like about the HTML report is that we can jump right to the section for each type of test that was performed. Jump to a test, for example, one dot one dot one failed, on this system. And we can see what the test was checking for, why it checks for that, what the impact would be if someone left that configuration as is, and recommendations for what to do to fix it. Now that was roughly two minutes for the scan to run on my VM. To perform all of these checks manually would take days. So you can see, from a [[Configuration Management]] testing standpoint, this really accelerates your testing activity. And as you configure and modify the scans to match your environment, you can be even more efficient in running these security configuration tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Windows 10]] (1), [[Microsoft]] (1), [[Java]] (1), [[Linux]] (1)
> **Env Vars:** html (5), cis (3), cad (2), cat (1)
> **CLI Commands:** make (3), cat (1), unzip (1)
> **UI Navigation:** go to (2), select the (1), scroll down (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)

#### [Network sniffing](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-sniffing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-sniffing?u=76281980&t=0)** - [Instructor] The most time consuming part of network sniffing is that the amount of data that you'll have to analyze is directly proportional to how long you leave the network sniffer running on the customer's network. If you only sniff an hours worth of network traffic, your results won't be an accurate representation of what to expect over the course of a business day. If you sniff traffic before users arrive in the [[Microsoft Office|office]] or after they leave, then you won't see endpoint traffic. If you sniff network traffic during lunch however, you're more likely to see things like online shopping and social media use, than you are normal business traffic. Your network sniffing results will also be impacted by the network segment on which your sniffer is running. If the customer's implemented network segmentation between office locations or between wired and wireless networks, or even between user subnets and server subnets, then it's unlikely you're going to see everything you want or hope to see from one location. Before performing network sniffing review the customer's network diagrams to determine where the sniffer should be placed. Discuss what a normal day looks like for users or systems on that particular subnet and make a note of the sniffer's start and stop times that will collect traffic in which you're most interested. What should you look for? Active devices and identifying information such as operating systems and applications
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-sniffing?u=76281980&t=95)** as well as services and protocols in use, particularly if those services or protocols are either insecure by nature or explicitly prohibited in the customer's written policies. You should also look for unencrypted data transmissions especially of sensitive data and unencrypted credential sets traveling across the network. So where should you sniff from? At the perimeter for starters. Watch for what's coming in and what's going out. You should also place a sniffer behind firewalls to determine if they're filtering appropriately as part of your rule set review output. You should place a sniffer behind [[Intrusion Detection]] systems and intrusion prevention systems to determine whether or not they're firing the appropriate rules. You should place sniffers in front of sensitive systems or applications to check for the principle of lease privilege being applied, and you should place sniffers on any network segment where encryption is required by policy to validate compliance with that policy. Let's turn to [[Wireshark]] to see what we can learn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Intrusion Detection]] (1), [[Wireshark]] (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Wireshark demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark-demo?u=76281980&t=0)** - [Narrator] For the [[Wireshark]] demo we're going to be working in the [[Kali Linux]] virtual machine. But before we run the Wireshark utility, I'd like you to open the terminal emulator and type in ifconfig. And here you'll see that we're getting information about the network adapters connected to my system. Now depending on your virtual machine, you may have more adapters, you may have a wireless adapter, but for this test, I've just got the ethernet, the basic network adapter up and running. Now let's minimize that and go to the application menu. I want you to go down to section nine, sniffing and spoofing, and you'll see the Wireshark icon here. If you click on that it's going to open up the Wireshark utility. Let's go ahead and maximize it. And you can see a couple of options here. As I mentioned in the earlier video, eth0 is the adapter we saw in ifconfig and any would be all of the adapters connected to your system. So depending on what you want to capture, you would select the item that is most interesting to you. For the purpose of the demo, we're just going to focus on eth0, and all you have to do to run the utility is come up here and click the blue fin to start capturing packets. Now it's not going to be very interesting unless I do something network connected, so let's try back in the terminal emulator to do a ping -c4,
>
> **[1:38](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark-demo?u=76281980&t=98)** that says we're only going to do it four times, of [linkedin.com](https://linkedin.com). And you can see that my Kali image sent a little bit of data over to [[LinkedIn]], LinkedIn said, "Yep, I'm here." And once the four pings were done, it stops. So let's go back into Wireshark, and we've got data. Now if you want to stop the packet capture, you click the red square. And you can jump around and analyze packets in [[Real-Time]]. But let's go ahead and stop, and we can look through the results briefly and talk about what we're seeing. So ICMP is the protocol that's used by the ping utility, and here you can see that Wireshark said that the Kali image at 10.0.2.15 pinged LinkedIn and then LinkedIn replied. Down here, what we're seeing are the details of those packets. Now here, not a lot of data that we can pull out of that, but let's look at these other items. Here's a DNS lookup. This is where I said I wanted to ping [linkedin.com](https://linkedin.com) but my Kali image didn't know what the IP address was. So when it made a call out to do that DNS lookup, it looks like [azuredns.com](https://azuredns.com) replied and said, "Hey, device, here's the IP address that you're looking for to execute that ping command." Which then enabled the ping traffic
>
> **[3:11](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark-demo?u=76281980&t=191)** to the request and reply to work successfully. Now, you're probably already starting to see that there's a lot that happened. We typed one line of text in the command line, and all of this traffic was generated for every low level network activity to say, "Hey I need information. Oh, here's what you're looking for." And what's really interesting about using the Wireshark utility is that if you're connected to an internal network and you're monitoring traffic, you'll see all of these requests for information about host names, you might see usernames and passwords. What you could do, depending on your lab environment and where you're set up, if you have permission or authority to monitor traffic on a broader network than just a contained Kali VM, you might bridge the network adapters so that you can see not just the virtual machine network traffic, but also network traffic related to all of the other devices that are talking on a live network. One other item I wanted to point out here when you've got the packet capture stopped. We'll go to the magnifying glass icon, and you can do different searches for things that might be interesting to you. Now, what I like to do here on the display filter, is go to string, and then I might look for things like equals, I might look for username,
>
> **[4:47](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireshark-demo?u=76281980&t=287)** I might look for password. And as you do these searches, you'll see references down here at the bottom, no packet contain that string in its info column. But let's say we wanted to quickly know is this company we're working with talking to any systems in [[Microsoft Azure|Azure]], in [[Google Cloud Platform (GCP)|Google Cloud]], in AWS, right? If we wanted to quickly identify infrastructures of service providers in play, we could do a quick search for those strings, and it's going to take us right to the packet that has that reference in it. So again, a very powerful tool, very simple to get up and running. And as you start using Wireshark more, what I'd recommend you focus on more of an advanced approach to the tool, is reading up on what display filters look like, and what it means to configure and use those filters, because again, we're able to get a little bit of useful information in this brief demo, but imagine what it would look like as you start to advance your skills in filtering out the traffic you're most interested in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (8), [[LinkedIn]] (6), [[Kali Linux]] (1), [[Real-Time]] (1), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** go to (3), open the (1), click on (1), select the (1)
> **Env Vars:** dns (2), icmp (1), aws (1)
> **URLs:** [linkedin.com](https://linkedin.com) (2), [azuredns.com](https://azuredns.com) (1)
> **Tools:** terminal (2), command line (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** aws (1)
> **Versions:** 10.0.2 (1)

#### [File integrity checking](https://www.linkedin.com/learning/security-testing-essential-training-2022/file-integrity-checking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/file-integrity-checking?u=76281980&t=0)** - [Instructor] File Integrity Checking is one of the simplest security assessment tasks to perform although it's also one of the most complicated tasks to prepare for. At its core, file integrity checking involves comparing two values, that's it. If they're the same, then everything's okay. If they're different, then the customer needs to determine why and provide an explanation. You could do this comparison manually. Although, comparing two values is a pretty basic function you could perform with a very small shell script. The tools we use to automate this task often, use the files hash value to perform this comparison. And what's a hash value? Well, hash value's like a digital fingerprint unique to each file, file Integrity checkers use a hashing function something like MD5 or SHA1 in order to generate a fairly long string of characters based on the file they're checking. Reliable hashing functions do this in a way that ensures no two hash values are identical, just like actual fingerprints when a file is in a trusted, known good state the file integrity checker will run against that file to determine the file's trusted hash value. Afterwards, anytime you run the same hashing function against that file you should receive the exact same hash value. If the current hash value of a file is different from the original trusted value, that's an indicator
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/file-integrity-checking?u=76281980&t=95)** that something happened to change that file. Now, that something could be a legitimate upgrade or a patch from a vendor, which means that you need to update the trusted hash value to represent the new trusted version of the file. Worst case scenario, that hash value changed because a file was modified by malware, which could put every other file on that system at risk. Generating these hash values and maintaining a trusted database is time consuming. But checking these values is the easy part. The hard part is getting people to agree on which files should be checked. The principle of file integrity monitoring hinges on the idea of guarded files, or files whose hash value should rarely, if ever change. On [[Windows]] endpoints the file explorer.exe is a classic example. If the hash value for that file changes, then you should definitely investigate why. The same holds true for [[Linux]] files such as /etc/passwd. If that file changes then it could mean an unauthorized account was added to the system. In an enterprise setting though, where you could have hundreds of thousands of files spread across multiple systems, which files should you monitor? Unfortunately, I don't know that there's a good answer to that question, not an easy answer anyway. If you have system and application administrators
>
> **[3:10](https://www.linkedin.com/learning/security-testing-essential-training-2022/file-integrity-checking?u=76281980&t=190)** who truly understand their environment then they should be able to provide you with a short list of files that they're certain should be in scope for file integrity checking. You might also benefit from turning to automated solutions to see which files those solutions monitor out-of-the-box. Tripwire is one of the most popular enterprise solutions for file integrity monitoring, and it has been for years. While OSSEC, the open source host [[Intrusion Detection]] security system is a very popular open source solution in the same space. Another trick I learned early in my consulting days is that certain vulnerability management solutions have the capability to perform basic file integrity monitoring tasks. If you want to check a very small set of files with known good hash values on a daily basis, for example, you could configure this check using [[Configuration Management]] tools within vulnerability management suites. This approach doesn't necessarily scale well, but it's an excellent starting point for organizations trying to figure out what they should be monitoring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1), [[Configuration Management]] (1)
> **Env Vars:** md5 (1), sha1 (1), ossec (1)
> **Definitions:** is a  (3)
> **Analogies:** just like (1), such as (1), for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 5. Identifying Your Targets

[↑ Back to Table of Contents](#table-of-contents)

#### [Network discovery](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-discovery?u=76281980&t=0)** - Performing documentation and ruleset reviews will provide you with considerable insights into your customer's network. But ultimately, those reviews are academic exercises. If you want practical, current state information, then scanning those targets to validate your observations is a reasonable next step. Use the information you collected, while reviewing network diagrams and firewall configs to build your list of target networks. You'll need this information to properly configure your network discovery scanning tools. It's important to note that there are two distinct types of discovery scanning techniques; active and passive. Active scanners interact with the target systems directly. They send specific network packets intended to elicit a specific response. A ping scan will use the internet control message protocol, or ICMP, to determine whether a target system is up or down. More in-depth scans will attempt to fingerprint the operating system and to identify services on that host with which an attacker could potentially interact. Passive scanners do not interact with the target systems directly. Instead, they sit on the network and perform packet captures, extracting source IP, destination IP, and service information from those packets. An example of passive network scanning, would be using wire shark to collect data
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-discovery?u=76281980&t=95)** and then running scripts against the output to automatically analyze the data for the host information. Vulnerability scanning vendors like Tenable and Qualys, have introduced passive network scanners. Devices that sit on your network, automatically monitor that network traffic, and analyze the traffic to identify live network hosts. These technologies are especially useful for organizations interested in scanning industrial control system, or ICS networks. Certain ICS devices weren't designed in a way that supports active scanning of open ports or available services. Then I've seen ICS devices revert to factory default settings following a simple network scan. If your customer is running technologies that might crash when being actively scanned, then you should definitely explore your passive scanning options.

> [!info]- Semantic Content
>
> **Env Vars:** ics (3), icmp (1)
> **Prerequisites:** you'll need (1), configure (1)
> **Definitions:** is a  (1)
> **Speakers:** - performing (1)

#### [Open-source intelligence](https://www.linkedin.com/learning/security-testing-essential-training-2022/open-source-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/open-source-intelligence?u=76281980&t=0)** - [Teacher] Another passive information gathering technique is open-source intelligence or OSINT gathering. With OSINT gathering, you use publicly available repositories in an effort to identify target systems without ever touching the target systems themselves. OSINT gathering can be very useful but it's not without its drawbacks. For one, OSINT gathering could be inaccurate or outdated. OSINT gathering may return information about a system that was decommissioned months ago resulting in a false positive. Another drawback to OSINT gathering is that it's often geared toward internet-facing systems. It's highly likely that you'll find useful relevant information about live hosts on the customer's internal network using this technique. The one exception to that rule is a DNS zone transfer. If your customer hasn't properly restricted DNS zone transfers to internal authorized hosts, or better yet disabled them entirely, then it may be possible for you to extract a list of internal host names and IP addresses by performing a zone transfer against an internet-facing DNS server. If you're interested in performing OSINT gathering, check out these resources. Showdan, Census the BGP Toolkit and the DNS Zone Transfer tool on [pentest-tools.com](https://pentest-tools.com). The first three resources are passive,
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/open-source-intelligence?u=76281980&t=95)** but the DNS Zone Transfer tool would be considered semi passive. That means that you would need to interact directly with the DNS server, but the query that you send to the DNS server could be interpreted as normal or expected network traffic. Of course, you could save a lot of time and just ask the customer to export DNS for you. To be safe, please secure permission from your customer before attempting to perform a DNS zone transfer. If you'd like to test your DNS zone transfer skills in a non-production environment, head over to DigiNinja's ZoneTransfer.me site at this URL. We're going to take a look at how to perform unique [[Nmap]] scans to identify live hosts on a network. First though, one more consideration. When you perform network discovery activity, it's possible that you might find something that isn't supposed to be there. What if you find a host system on a customer's network where there shouldn't be one? Well, you stop what you're doing and you contact the customer. If an unauthorized device has been added to their network whether physical or virtual, they'll want to investigate where that device came from and who it belongs to. That device could have been added by an employee who brought a device in from home and unknowingly violated the customer's [[Network Security]] policy. But it could also be a device that a malicious attacker added to the network in order to continue attacking
>
> **[3:11](https://www.linkedin.com/learning/security-testing-essential-training-2022/open-source-intelligence?u=76281980&t=191)** the customer from an internal network location. It's up to the customer to determine this information but it's up to you to let the customer know about the device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1), [[Network Security]] (1)
> **Env Vars:** dns (10), osint (7), bgp (1), url (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [pentest-tools.com](https://pentest-tools.com) (1)
> **Speakers:** - [teacher] (1)

#### [Network port and service identification](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-port-and-service-identification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-port-and-service-identification?u=76281980&t=0)** - [Instructor] Identifying live hosts is only the first step. The open network ports and services with which you can interact are much more interesting. If the customer's disabled ping at the host level or if they're filtering ping at the network level, your scanner is likely to overlook active hosts. Fortunately, [[Nmap]] has a built-in flag that assumes every host is alive. While scanning with this flag enabled will take a bit longer, it noticeably improves the accuracy of your results. What are we looking for? First and foremost, unencrypted protocols. Telnet for remote administration or file transfer protocol, FTP for file transfers. Why these protocols? They contain unencrypted credentials in transit. You might also find internal network passwords in your network packet capture for internal unencrypted HTTP websites. We're also looking for remote administration tools. My list, SSH, RDP, VNC, and HTTPS.
>
> **[1:18](https://www.linkedin.com/learning/security-testing-essential-training-2022/network-port-and-service-identification?u=76281980&t=78)** Finding an open port is good, but finding service and version information is even better. The nmap -A flag was designed for this exact activity. Quick note on Nmap. By default, Nmap only scans for the most common 1000 ports. 1000 is a lot, sure, but not when considering that there are over 65,000 TCP ports to examine, which doesn't include the UDP ports. You can use the -p flag to narrow your search to a single port, something like port 80, or to scan for everything, Ports 1 through 65,535. Scanning for all ports will take much longer, plus it will generate a lot of network traffic. It's very noisy, but if you can perform that scan without having a negative impact on the production network, your output will be comprehensive. When scanning a DMZ, scan from both the internal network location and an external network location. The external scan will show you what services an unauthorized outsider might attempt to interact with. But the internal scan will show you what services an attacker could target from a compromised host within the DMZ.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (4)
> **Env Vars:** dmz (2), ftp (1), http (1), ssh (1), rdp (1)
> **CLI Commands:** find (1), ssh (1)
> **Ports:** port 80 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Nmap demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/nmap-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/nmap-demo?u=76281980&t=0)** - [Instructor] For the [[Nmap]] demo, we're going to be in our Cali [[Linux]] Virtual Machine and you can get to Nmap a couple of ways. It's very easy to get to it from the command line, but I wanted to show you under the applications menu, if you start in O one, information gathering, you'll see the Nmap eyeball icon right here. Let's go ahead and click that, and it opens Nmap with all of the menu options or the tool options displayed to you. Now, let me go ahead and do Nmap minus help and then we're going to pipe that to more. And this gives you the option to see all those help options on a screen by screen basis. Nmap is a very simple tool as I mentioned to use, but a very detailed and robust tool as you take advantage of more and more of the parameters that you can feed to the tool. One of the most popular examples that I've seen in my own experience, when you try to scan a network device and the device doesn't respond. Nmap has a utility or a parameter that allows you to avoid the ping scan and assume that the host is up. And this is a great way to get port information and service information from hosts that pretend to not be online to avoid scans like this. But what we're going to do,
>
> **[1:32](https://www.linkedin.com/learning/security-testing-essential-training-2022/nmap-demo?u=76281980&t=92)** let me go ahead and clear to get to the top of the screen. We're going to run a basic Nmap scan by typing nmap scan me .nmap .org. Now, this is a server that the Nmap team maintains specifically to help folks like you learn how to use the tool. And by just throwing a basic scan at it, we'll click enter. It's going to start the utility and then start collecting information about that host. Well, let's give it a second to run and see what it finds. Okay, it's already done. In less than 15 seconds, it tells us that this server has an SSH service listening on port 22 that you can connect to it over report 80 http that it's got Nping dash echo listening at 9929 and three, one, three, three, seven, a service that's responding as elite listening at this port. If we wanted to see more details during this scan, what I recommend is let's do the lowercase V and then the capital A, so Nmap minus V lowercase minus A uppercase and scan me .[nmap.org](https://nmap.org). Now, here you're going to get a very verbose response. It's going to tell you everything that's happening
>
> **[3:06](https://www.linkedin.com/learning/security-testing-essential-training-2022/nmap-demo?u=76281980&t=186)** as it's happening while it's scanning that host. We're getting information about what scans are running at which time. We're getting the IP address. And this is helpful to understand did I send the right parameters to Nmap? Is it actually running or has something stopped? One thing I want to point out, we're getting more information with this stache. If we scroll up, we'll see that Nmap with this basic scan was only looking at one thousand ports. Now folks, with a network background, know that there are sixty five thousand five hundred thirty six. Do I have that number right, ports available? That if you wanted to scan every port you could tell Nmap, scan them all. If you want to scan one port, you can tell Nmap just scan to see if it's listening for this one service. But as we scroll down, we'll see that at the SSH service that it actually pulls back the host key and it gives us some information about the encryption that's enabled. At the website, it pulls back the HTTP header information, it pulls back information about what options that web server supports. It even pulls back the version of that server. And lets us know the type of Linux box that this Apache instance is running on. So, as I mentioned in the earlier video, if you go to highon .coffee,
>
> **[4:39](https://www.linkedin.com/learning/security-testing-essential-training-2022/nmap-demo?u=76281980&t=279)** you'll see a lot of very useful Nmap scans. And what I'm going to recommend that you do as a follow up to this demo is run those scans against scanme.[nmap.org](https://nmap.org). Try using the tool to see what kind of output you can get. And then one last trick, if you run an Nmap scan and then use the output symbol, greater than symbol on the Linux command line and then just give it a file name like, results dot text. It's going to take all of the data that you saw here on screen and write it to a text file so that you can review it at your leisure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (20), [[Linux]] (3)
> **CLI Commands:** ssh (2), apache (1)
> **Env Vars:** ssh (2), http (1)
> **UI Navigation:** scroll up (1), scroll down (1), go to (1)
> **Definitions:** is a  (3)
> **URLs:** [nmap.org](https://nmap.org) (2)
> **Tools:** command line (2)
> **Ports:** port 22 (1)

#### [Vulnerability scanning](https://www.linkedin.com/learning/security-testing-essential-training-2022/vulnerability-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/vulnerability-scanning?u=76281980&t=0)** - [Narrator] You've identified active hosts on the network, you've also identified the services and ports available on those hosts. So, what's next? Now, you want to check for vulnerabilities. A vulnerability is a weakness that could potentially be intentionally exploited by an attacker, or unintentionally exploited by a service or a network condition. I once performed a vulnerability scan against a switch so old that the scan caused the switch to reboot mid-scan. Because that switch connected two production networks, the monitoring system triggered an alert which resulted in a phone call with multiple people to investigate why the network was experiencing a production down outage. Now, the outage only lasted a few seconds, but the impact to the system and network administrators was both inconvenient and frustrating. Was the outage caused by an unauthorized outsider with malicious intent? Nope. It did, however, help the network team make the case to leadership that they needed to set aside budget to perform a long overdue upgrade of that switch. If a scanner discovers a vulnerability, that scanner will provide a description of the vulnerability, a severity score, and guidance on how the system administrator or application developer might remediate that vulnerability. This is often true for both commercial and open source
>
> **[1:36](https://www.linkedin.com/learning/security-testing-essential-training-2022/vulnerability-scanning?u=76281980&t=96)** vulnerability scanning solutions. As I mentioned earlier, you'll want to consider whether or not to run authenticated scans or unauthenticated scans when assessing technical vulnerabilities. While authenticated scan results will be more complete, they are accompanied with a greater risk of having an unintended negative impact to the target system or application. To recap my recommendations from earlier here's what I do in my own consulting engagements. Authenticated scans of all hosts from an internal network location, unauthenticated scans of all hosts from an external network location, authenticated scans of non-production instances of internet facing web applications, unauthenticated scans of production instances of those same internet facing web applications, and finally, offline scans of production instances of mobile applications.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Determining severity](https://www.linkedin.com/learning/security-testing-essential-training-2022/determining-severity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/determining-severity?u=76281980&t=0)** - [Narrator] Vulnerabilities are ranked by severity depending on the likelihood that an attacker might be able to exploit the vulnerability and the potential impact that would be felt in the event that the exploit was successful. On the low end, for example, an external system leaking internal network information such as internal host names might be considered a low severity vulnerability. An internet facing system susceptible to command injection attacks, however might allow an attacker to take full administrative control of internal systems. Command Injection weaknesses are often considered high severity vulnerabilities. The common vulnerability scoring system or a CVSS is an open industry standard that uses a number of base metrics to determine the severity of a vulnerability. These metrics include the access vector. How might the vulnerability be exploited? Attack complexity. Is the attack easy or difficult to pull off? And authentication. Does the attacker need to be logged in in order to successfully exploit the vulnerability? The CVSS also takes into account impact metrics like confidentiality, integrity and availability to determine how bad it would be if the exploit were successful. The final severity score is determined using a documented repeatable calculation that takes all
>
> **[1:36](https://www.linkedin.com/learning/security-testing-essential-training-2022/determining-severity?u=76281980&t=96)** of these metrics as inputs. Where the CVSS focuses on operating system vulnerabilities. The common weakness enumeration or CWE category is applied to software vulnerabilities. Publicly disclosed vulnerabilities are often assessed using these systems. And then commercial vulnerability scanning vendors will incorporate signatures for these vulnerabilities along with their corresponding scores into their scanning technologies.

> [!info]- Semantic Content
>
> **Env Vars:** cvss (3), cwe (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Nessus demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus-demo?u=76281980&t=0)** - [Instructor] For the Nessus demo, we'll be back in our [[Kali Linux]] virtual machine. Now, Nessus isn't installed by default in Kali, but you can install it by navigating to [tenable.com](https://tenable.com), going to the Nessus download section, and then scrolling down to the fourth item in the list, the debian9_amd64 installer. You can see it very clearly here in the middle column helps you identify which version is appropriate for the Kali Linux instance you're running. Once you've got that file downloaded, you'll use the dpkg utility to install Nessus within the VM. The command you'll want to run is sudo dpkg -i, and then the name of the Debian file you downloaded. It only takes seconds to install, but then there's one other step you'll need to run. In order to start the Nessus daemon as a service, you'll type in /bin/systemctl start, and then nessusd, as in daemon, .service. Now Nessus is up and running and you can navigate to the user interface at the URL kali, for the localhost, :8834 in Firefox.
>
> **[1:26](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus-demo?u=76281980&t=86)** If this is the first time that you've run Nessus within your Kali instance, you'll be prompted with a certificate warning, and that's okay. Kali comes with a self-signed certificate out of the box. And because this is a demo, it's fine to use that. For a production deployment, you'd want to replace it with an approved certificate from your certificate management system. You'll also be prompted to create a username and password. I've chosen kali kali. Same combination I used to login to the VM just for simplicity. And you'll also have to enter the registration key that you received via email when you registered with a Tenable website. Once those steps are complete, this is a screen that you'll see to begin using the Nessus utility. Now, what I recommend you do is click New Scan. And then down here where it says Basic Network Scan, we're going to jump right into that. Host Discovery would be similar to an [[Nmap]] scan, looking for hosts and available services. The network scan is going to look for vulnerabilities. On the scan configuration screen, we'll just give it a quick name, quick description, and the host that I want you to scan is 127.0.0.1. That's the localhost. That's the virtual machine itself. Normally, we wouldn't scan a system from itself in production, but this is a good way to get an understanding
>
> **[2:59](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus-demo?u=76281980&t=179)** of not only how does Nessus work, but how secure is a virtual machine that you're using right now. I also want you to go to Credentials. And you'll see here under Host, if you click on SSH, you'll be prompted to enter credentials for the scan. Now if you select password as the authentication method, you can type kali into the username box and kali into the password box. Now, they do call out that you shouldn't use this as an option if you have certificate-based authentication available. But for the purpose of the demo, this is fine. With credentials plugged in, so that we can have a full view of this host. We'll click Save, and now we're ready to run this scan whenever we are prepared. On the right hand side, if you see the play icon, you can click launch and then we have an indicator that the scan is actively running. At this point, you can click on the scan and you can see in real time vulnerabilities that are detected as the hosts begin to respond. Let's let this scan run for a moment. If we navigate to the Hosts tab, we'll see the percentage complete for each scan as it's running and the number of vulnerabilities and findings that have been discovered so far. We can also navigate to the Vulnerabilities tab and begin analyzing those vulnerabilities
>
> **[4:36](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus-demo?u=76281980&t=276)** that have been detected before this scan is even complete. If we navigate into this first finding, SSL Multiple Issues, we'll see that the information gathered by the scanner includes some basic details about the SSL certificate as well as a vulnerability that they've classified as medium severity. Specifically, the vulnerability we're seeing here is that the SSL certificate, the one that we do with self-signed, cannot be trusted. Let's click on that. For each vulnerability that Nessus detects is going to include a description, a solution, and external references where you can read more about this finding. The reason for this is that Tenable wants to enable you as the security assessor to have an effective conversation with the people who are more likely responsible for managing the vulnerable systems and applications. If you're speaking with a [[Linux]] system administrator, or [[Windows]] system administrator, an application developer, they're likely to know more about their technology than you do. And that's okay. That's what they were hired to do. You need to be able to communicate to them what exposures exist based on the current configuration of that system. And if that includes vulnerabilities related to untrusted SSL certificates, you can share this information with them.
>
> **[6:09](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus-demo?u=76281980&t=369)** You can share the URLs and then you can ask them to take the action outline in the solution. Now not every action is going to be appropriate. You may determine that it's okay to have an untrusted SSL certificate on a system that you're using occasionally for testing. But on a production system, that's internet facing, that would be a vulnerability that would attract attackers to your environment. So you'd want to give that context, that guidance to the people managing those systems so that they can take the appropriate action. Let's go back to Hosts and let's allow this scan to finish. Once the scan is complete, you can view the vulnerabilities that have been detected on a one-by-one basis. You can look at the top threats where Nessus has prioritized certain findings or you could generate a report. Alternately, you could export those findings to a different format. But if you're sharing this information with the system admins and with the developers, that's a great way to get the information in front of them as well. What I would encourage you to do for some additional testing with this tool is to analyze a Windows system using the same process I've shared. In this course, I have a demo for CIS-CAT that requires using a [[Windows 10]] virtual machine. If your system is powerful enough to run two [[Virtual Machines]],
>
> **[7:43](https://www.linkedin.com/learning/security-testing-essential-training-2022/nessus-demo?u=76281980&t=463)** you could point Nessus at that Windows machine and see how they compare. Give it a shot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Kali Linux]] (2), [[Nmap]] (1), [[Linux]] (1), [[Windows 10]] (1)
> **Env Vars:** ssl (5), url (1), ssh (1), cis (1), cat (1)
> **UI Navigation:** navigate to (3), click on (3), go to (1)
> **CLI Commands:** sudo (1), systemctl (1), ssh (1), cat (1)
> **Definitions:** is a  (4)
> **Prerequisites:** install (3), you'll need (1)
> **URLs:** [tenable.com](https://tenable.com) (1)
> **Ports:** :8834 (1)

#### [Wireless scanning](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireless-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireless-scanning?u=76281980&t=0)** - [Presenter] Wireless networks were slowly gaining traction in the enterprise in the early two thousands, but when Apple released the first iPhone in June, 2007, that marked the true beginning of what we consider the mobile enterprise that's so prevalent today. Now, it's common to see multiple wireless networks in use in a corporate environment. We often see one for managed devices, one for personal devices. Sometimes you'll even find a dedicated wireless network for [[IoT|internet of things]] or [[IoT]] devices. And with an increasing reliance on wireless technology comes a corresponding increase in our efforts to secure those technologies. Before embarking on a wireless network scan, step back and ask a few key questions. Which locations should have wireless enabled? Are there any environmental considerations that might interfere with your scanning? Things like protective film on the [[Windows]] or interference from nearby wireless networks. What security settings should be applied to the wireless networks you're assessing? This would be a great time to refer to the [[Wireless Networking]] security policy. What does a normal day look like to these in scope wireless networks? Your scans are only going to be useful if the endpoints are actually connected during the time you're performing your assessment. And does the customer have any wireless security technologies that might interfere with your scanner? When performing wireless network scans, security assessors
>
> **[1:38](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireless-scanning?u=76281980&t=98)** often connect a second wireless antenna to their laptop. All scanning traffic is collected through this antenna to avoid mingling scanning data with regular network traffic. This is a list of possible wireless security configurations in the order of least secure to most secure. You can have open/unencrypted wireless networks. You could enable Wired Equivalent [[Privacy]] or WEP, which is known to be insecure. You could implement [[Wi-Fi]] Protected Access or WPA, also broken, or you could implement Wi-Fi Protected Access to WPA2 or WPA3, and either the personal configuration or the enterprise configuration. From a [[Penetration Testing]] standpoint, any wireless security configuration prior to WPA2 represents a significant risk to the organization. Tools and techniques for compromising wireless networks with these weaker security protocols have been available for years and they're incredibly effective at what they do. Ideally, your customer will be using at least WPA2 enterprise or ideally WPA3, both of which combine strong encryption with certificate based authentication. An attacker targeting a WPA2 encrypted network only needs the wireless network password
>
> **[3:11](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireless-scanning?u=76281980&t=191)** to access the network. By including the additional requirement of a security certificate, WPA2 enterprise networks are much more difficult for an attacker to compromise. One of the reasons we don't see a lot of WPA3 in play yet is because of device support, but that is coming as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (2), [[IoT|Internet of things]] (1), [[IoT]] (1), [[Windows]] (1), [[Wireless Networking]] (1)
> **Env Vars:** wpa2 (5), wpa3 (3), iot (1), wep (1), wpa (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** iphone (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Wireless testing process](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireless-testing-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireless-testing-process?u=76281980&t=0)** - [Instructor] Passive wireless network scanning tools monitor the air for traffic from the wireless access points. If you are able to connect to the network being monitored, you can also use passive wireless network scanning tools to monitor traffic on that network. When using [[Wireshark]], the experience is virtually the same as when capturing packets on a wired network. Airmon-ng, one of the tools in the Aircrack-ng suite, is my favorite passive wireless scanning tool. When you run Airmon-ng, it creates a virtual wireless network adapter on your system. Airmon-ng shows you the nearby wireless networks, including their encryption settings, their network channels and even the MAC addresses of both the wireless access points and any clients connected to those APs. By adding Airodump-ng to the mix, you can attempt to collect authentication handshakes between wireless clients and wireless access points. This technique clearly falls under active wireless scanning. Since the next tool in the suite, Aireplay-ng, forces a wireless client to disconnect from the access point. So the tool can intercept the handshake when that client immediately attempts to reconnect. on WPA2 personal networks for example, pen testers can often capture wireless handshakes using these tools.
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/wireless-testing-process?u=76281980&t=94)** And then attempt to brute force the encrypted value within the handshake offline, using Aircrack-ng. If successful, the penetration tester can use the plain text value found in the brute force output to authenticate directly to that same network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Env Vars:** mac (1), wpa2 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Aircrack-ng demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng-demo?u=76281980&t=0)** - [Instructor] For the Aircrack demo, we're going to be connecting a physical wireless network adapter to your virtual [[Kali Linux]] machine instance. As I mentioned in a previous video, I like to use the ALFA adapters. And for this particular demo, I'm using the AWUS036ACH model. I'm using this model because of that Realtek chip set. It's easier to get it up and running in Kali with that chip set. Although, you have a lot of options available. Depending on the adapter that you've selected, you'll want to research the directions for connecting it to Kali before continuing with this demo in your own lab. Once you get the wireless network adapter connected, you'll open a terminal window and type ifconfig. Within that list, you should now see an entry for wlan0. This is the network interface that Kali understands to be your wireless network adapter. That means that using this interface, your Kali VM can now see [[Wireless Networking]] traffic in the real world. We're going to clear the screen. And we're going to run one quick utility built into the Aircrack suite, airmon-ng and we're going to run it with the parameters check kill. And what this is going to do is check for running processes that might interfere with Aircrack. And if it finds them, kill them.
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng-demo?u=76281980&t=95)** This is just a way to make sure everything's going to work without error. And as you can see here, I have no processes running in the background. If you had processes running that would've interfered with the demo, this utility would've killed them, meaning that you're ready to get started. So let's start by running sudo airmon-ng start wlan0.
>
> **[2:01](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng-demo?u=76281980&t=121)** And what we're saying is we want to take that wlan0 network adapter and enable monitor mode. This is going to let us watch all the traffic that's flowing in and out of that adapter. And now let's just go ahead and take a look and see what we can find. sudo airodump-ng wlan0. And look at that. What we're seeing here are all of the wireless access points nearby that my wireless adapter can see. The BSSID column contains the MAC addresses for those adapters. The channel shows me what channel the adapters are running on. The ENC shows me the type of encryption that's enabled. We've got some private shared keys here. And oh, the ESSID is the name of the wireless network. Now the one that I want to target is that Linksys01374 that keeps moving around. And you can see it's a bit tricky to keep track of what's happening on screen. So let's Ctrl + C and I want to throw some additional parameters at that airodump. So we'll do sudo airodump-ng. I want to look at, well number one, let's limit it to channel 11 because I know that's the channel the access points running on. Let's add the BSSID, the 14:91 that you see here. And then at the very end,
>
> **[3:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng-demo?u=76281980&t=214)** I'm going to use a -w to write data to files beginning with the letters psk. What I'm going to do when I'm capturing this data is create a local copy of what I'm capturing. And then at the very end of this string, this command you want to mention wlan0 because that's the network adapter that we're monitoring. Now let's see what we can find. Ah, so much cleaner. So you can see the BSSID is that Linksys. You can see that it's encrypted with a WPA2 private shared key broadcasting on channel 11. So now what we want to do, and this is a scenario you might run into in a penetration test, is we want to take clients and you'll see those clients show up in the station column at the bottom of the list. And we want to force them to deauthenticate. We want them to let go of their connection to that access point because when that happens, they'll immediately try to reauthenticate. This is native functionality in smartphones, tablets, laptops. When they reauthenticate, they're going to send that wireless handshake which includes the encryption key to the access point. And because we're telling the airodump utility to write what we're seeing to those PSK files, what we're saying is when this device reauthenticates, we are going to try to capture that handshake. Now the command that you see here is in a second window. It's very important
>
> **[5:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng-demo?u=76281980&t=308)** that you don't stop the airodump activity. You want that to keep collecting data. But open a second terminal window and type sudo aireplay-ng, we'll do minus zero one that's telling it we want to de authenticate the client. The -a tells us the access point. The 14:91 is the BSSID that you see up here. And the -c tells us a specific client that we want to target. Now here, I've only got one to choose from. But if you had a dozen, you could be very selective in who you're going to deauthenticate from that access point. And the very last thing you include here is again wlan0. Let's hit Enter and enter the password for Kali. And you can see that it was successfully sent that deauth request. Now, one thing to know about doing this in the real world is that this isn't a one-and-done test. You often need to send that again and again and again. And you'll want send it multiple times depending on whether or not you're being disruptive. Again, if somebody's smartphone keeps disconnecting from [[Wi-Fi]], they're probably going to notice. They may not notice one or two disconnects. But let's go ahead and maximize this window. And let's take a look at the files in here. Now you can see we've got a .cap file
>
> **[6:44](https://www.linkedin.com/learning/security-testing-essential-training-2022/aircrack-ng-demo?u=76281980&t=404)** that begins with psk. This is the packet capture. A .csv, a kismet.csv, kismet.netxml, and a log.csv. These are all of the files that you might need for any subsequent attempts to attack it. So what I'm going to give you as homework, if you get to this point in the demo, I want you to look up the Aircrack utility and see if you can crack a password within that wireless handshake. Tricky to show in demos for classes here on [[LinkedIn]] Learning, because it's very much hit or miss. You might get a password in two minutes. You might get a password in two hours. But if you are doing wireless pen testing as part of your security assessor activity, getting to this step and then trying to crack that password offline is the way you level up your wireless testing skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (1), [[Wireless Networking]] (1), [[Wi-Fi]] (1), [[LinkedIn]] (1)
> **Env Vars:** bssid (4), alfa (1), awus036ach (1), mac (1), enc (1)
> **CLI Commands:** sudo (4), find (2), make (1)
> **File Paths:** kismet.csv (1), log.csv (1)
> **Ports:** :91 (2)
> **Tools:** terminal (2)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** previous video (1)


### 6. Vulnerability Validation

[↑ Back to Table of Contents](#table-of-contents)

#### [Password cracking](https://www.linkedin.com/learning/security-testing-essential-training-2022/password-cracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/password-cracking?u=76281980&t=0)** - [Narrator] There is tremendous value in helping an organization identify vulnerabilities that an attacker could potentially exploit. There's even greater value in providing them with guidance on how to address those vulnerabilities. At some point, however, you'll be challenged to prove that the vulnerability actually exists and that the vulnerability could be exploited by a potential attacker. That's why you need to spend some time learning tools and techniques for vulnerability validation. One of the most useful vulnerability validation techniques you should have at your disposal is the ability to crack passwords. The security vendor F5 analyzed a decades worth of data breaches, and in December, 2017, they published their findings. One of their goals was to determine the initial attack vectors for those breaches. Based on their data, they determined that the initial attack vector for 87% of these data breaches was either an [[Application Security]] weakness, an identity and access management weakness, or some combination of the two. To put that another way, attackers were able to either guess or brute-force passwords, log in as existing users and wreak havoc. As a penetration tester, I can attest to this firsthand. When I'm hired to target an organization, I found the most success in compromising accounts
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/password-cracking?u=76281980&t=94)** with weak passwords and then using those accounts to impersonate an authorized user. In order to understand how to crack passwords, it helps to understand how passwords are stored. When a user creates a new account in an application. Security-minded developers often hash that password so that they don't have to store it in plaintext. This hashing process takes the initial value and performs a one-way function on that string to generate a new value, one that ideally can't be reverse-engineered to reveal the initial password. When a user logs into that application, the application takes the user's plaintext password, performs the exact same hashing function on that string and compares it to the original value. If they match, then the original password string must also match, so the application lets the user in. If they don't match, that means the user provided a different string than what the application expected. No password, no access. Password cracking tools and techniques often rely on a wordlist that contains all of the possible passwords that you'd like to include in your test. Determining which words to include in your wordlist is where the art and the science of password cracking overlap. Fortunately, the information security industry was built on the shoulders of giants, and you're able to rely on work that security researchers
>
> **[3:09](https://www.linkedin.com/learning/security-testing-essential-training-2022/password-cracking?u=76281980&t=189)** have contributed to the field. In 2009, the media website [rockyou.com](https://rockyou.com) was breached and a security researcher published the list of 32 million passwords that were exposed in just that one breach. This list represented the largest collection of passwords that we knew people were actually using to log into this website. And the RockYou list has been a favorite of pen testers ever since. Variations of the RockYou wordlist have been built into [[Kali Linux]] directly, and we're going to take a look at using [[Hashcat]] with the RockYou list to crack some passwords. But as I mentioned earlier, we're just scratching the surface when it comes to password cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1), [[Kali Linux]] (1), [[Hashcat]] (1)
> **URLs:** [rockyou.com](https://rockyou.com) (1)
> **Speakers:** - [narrator] (1)

#### [Hashcat demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat-demo?u=76281980&t=0)** - [Instructor] For the [[Hashcat]] demo, we're going to be back in [[Kali Linux]]. Now, hashcat again is a ridiculously powerful tool and there's a lot you can do with it above and beyond what we're going to be covering in the demo. I want to give you enough to get started, to give you some basic functionality in the tool so that you can grow from there. If you open a terminal window you'll be able to run hashcat from a command line and what I recommend doing is running hashcat -h for help and piping it to more. These are all of the options that you can feed to the hashcat utility. I've got a couple that we're going to be using, in particular the -m. We need to know the hash type of the passwords we're trying to crack and -a, the attack mode that we want to use when we're going after the passwords. And as you use the space bar to go through the [[Representational State Transfer (REST)|rest]] of the file, you'll get to a point where you see all of the options that you can throw to those parameters like the hash modes I mentioned, there are over 350 available in the current version of hashcat. Each one is listed here and the number you see on the left corresponds to what you'll throw at the command line but we'll get into that in just a moment. Let me create some password dump files and dictionaries and then I'll show you what hashcat can do. So what I'd like to start with is by creating a password dictionary and we'll do that by echoing words to screen. Let's start with [[LinkedIn]],
>
> **[1:38](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat-demo?u=76281980&t=98)** echo -n "LinkedIn" in double quotes and then I want to pipe that to md5sum, so I want to create an md5 of the [[Microsoft Word|word]] LinkedIn and then I want to pipe that to tr -d " -". And that removes the trailing space and the trailing dash from the hash value. We're going to take that output of that md5 hash function and send it to the file hashes.dict. And if we cat hashes.dict, we'll see that e884c5, it contains an md5 hash of the word LinkedIn. We're going to do this with a couple more. Let's start with a very popular password, how about we use the word password? And again, the double greater than will append to hashes.dict. I want to do one that I love using during penetration test, the name of the company and then the year the company was founded. You'll find that help desks tend to use this combination or some variation of that when they're creating passwords for new employees. And then I want to add one more, we are going to add the word ADMIN in all upper case characters. And now if we cat that hashes dictionary
>
> **[3:12](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat-demo?u=76281980&t=192)** we'll see there are four md5 hashes, each one corresponding to the plain text word that we added to this. Now, our goal with using hashcat is to take an md5 hash, something that we've captured in a password dump and tell hashcat what was the plain text value that was used to generate this hash. And so I'm going to do this. We're going take that ADMIN word that we just added to the dictionary and we're going to create a password dump file. We're just going to call it password.dump, that contains the hash value of ADMIN. So if you look at cat password.dump, we have 73acd9, if we cat hashes we can see that the dictionary file says these are four of the hashes that we're aware of. Now for the magic, let's clear the screen. Now, before I do this, I want to point out neither one of these files contains the word admin. There's no correlation, there's no connection. So let's send hashcat a few parameters. We're going to start with -m 0, which tells hashcat that I want to use the md5 hashing function. Again, this is all spelled out in the help file and then -a 0, which says let's use a straight attack instead of combination or brute force,
>
> **[4:48](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat-demo?u=76281980&t=288)** we're just going to go through all these hashes and see what we can come up with. I'm going to change one line here where it says show. The next thing that I want to do is do -o, and then we're just going to call a file output.txt. So we're telling hashcat with that -o parameter if you crack a password, put the md5 hash and the plain text password in this output file. And then the only other two parameters that this particular type of attack needs is the name of the dictionary file and the password dump. Now, one thing I want to point out about Kali Linux, if you go to user, share, word list, there are multiple sub directories that contain word lists that you can use for these types of attacks. [[Dirb]], D I R B is short for Directory Buster, it's a popular web app attack utility. There's a file in there called common.txt, and that common file has hundreds of plain text words that are common in password dumps. And so what we're doing is we're saying if you go through that common file and create an md5 hash that matches anything in this hashes dictionary, I want you to tell me what that match, that pairing is in the output file. Let's hit return and see what happens. Now as this is running, it's going to go fairly quick. It took what, three seconds here on the vm
>
> **[6:24](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat-demo?u=76281980&t=384)** and that's fine for a couple of hashes. In an actual scenario where you have hundreds or thousands of hashes, you might want to use a dedicated machine instead of doing it in a [[Linux]] virtual machine. Many pen test shops have dedicated systems for password cracking that have additional memory, they have additional GPUs, graphic processing units, but let's see if we got any output. And we did, let's cat the output file and here's the hash and it says that hash corresponds to the word ADMIN. So what hashcat has done is going through that word list in the directory buster directory, the common.txt file, created md5 hashes and then just did a one-to-one comparison. Now what's interesting, and here I want to go back and change the output.txt to --show.
>
> **[7:24](https://www.linkedin.com/learning/security-testing-essential-training-2022/hashcat-demo?u=76281980&t=444)** And what you'll see is there are a couple of options here, password and ADMIN. These are hashes that I've already cracked with hashcat on my machine. Hashcat creates something called a pot file where just as a matter of efficiency, if it already knows the hash it's not going to go through and create it again, that's unnecessary processing power. It's just going to keep it in this pot file. So if you use the --show, you may find that the hash you're trying to crack is in that pot file. Again, incredibly powerful utility. Some folks never use password cracking depending on what you're hired to do. But if you are one of those folks who wants to take a password dump and go through this password cracking utility, hashcat is a fantastic tool to start that process with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hashcat]] (16), [[Microsoft Word|Word]] (11), [[LinkedIn]] (4), [[Kali Linux]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** cat (5), find (2)
> **Env Vars:** admin (5), dirb (1)
> **File Paths:** output.txt (2), common.txt (2)
> **Tools:** command line (2), terminal (1)
> **Definitions:** is a  (2), short for (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Penetration test planning](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-planning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-planning?u=76281980&t=0)** - [Instructor] In my experience, the best way to validate your information security program is through a penetration test. Practically speaking, [[Penetration Testing]] can often be summed up in two concepts: privilege escalation and lateral movement. The initial goal is often to compromise a single system or application by compromising a set of valid credentials. From there, you'll want to escalate your privileges ideally assuming or creating an administrative account. Once you migrate your activity to that administrative account, you'll want to move to another system or another application, pillaging sensitive data along the way. While the goal of many penetration tests is to compromise domain admin credentials, this isn't always the case. If performing a pen test as part of your [[PCI DSS]] compliance efforts, you should be attempting to compromise cardholder data. If you can access unencrypted credit cards via an [[Application Security]] vulnerability, or a set of credentials authorized to access that data, then you've accomplished your goal without compromising domain admin credentials. Understanding why your customer engaged you to perform a penetration test is essential if you intend to conduct a pen test in line with the customer's expectations. [[NIST]] subscribes to a four-stage penetration testing methodology: planning, discovery, attack, and reporting.
>
> **[1:38](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-planning?u=76281980&t=98)** The attack stage can be broken down into four distinct cyclical activities: gaining access, escalating privileges, system browsing and installing additional tools. In my own consulting experience, though, I prefer to follow the penetration testing execution standard or PTES. The PTES outlines a seven-stage methodology: pre-engagement interactions, intelligence gathering, [[Threat Modeling]], vulnerability analysis, exploitation, post exploitation, and reporting. Your first activity should always be to ensure that the scope, methodology and goals have been explicitly identified. You should also ensure that you have a written statement from an authorized party explicitly granting you permission to test the in scope systems and applications for weaknesses. What should you focus on during a penetration test? It could be any combination of the following: internet-facing systems, internet-facing applications, mobile applications, internal systems, internal applications, physical [[Microsoft Office|office]] locations, company employees, through social engineering, and systems and applications hosted by a third party.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (3), [[PCI DSS]] (1), [[Application Security]] (1), [[NIST]] (1), [[Threat Modeling]] (1)
> **Env Vars:** ptes (2), pci (1), dss (1), nist (1)
> **Speakers:** - [instructor] (1)

#### [Penetration test tools](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-tools?u=76281980&t=0)** - [Instructor] Once your customer has identified what's in scope, and what's out of scope, you should perform your own reconnaissance. Use the tools and techniques outlined in this course. Combine them with OSINT gathering tools and techniques and then compare your findings to your customer's requested scope. They may be surprised to see that you found systems and applications that they didn't realize they still had online. One of my favorite OSINT gathering tools is the "Discover" [[Python (Programming Language)|python]] script from Lee Baird. You can download "Discover" from Lee's [[GitHub]] repository using the link here. In order to get the best results from this tool, you'll need to spend a bit of time configuring the tool with API keys for the services you intend to access. The APIs that I recommend you configure are as follows: Bing, BuiltWith, Censys, both the API and the secret key, FullContact, GitHub, [[Google]], API and CSE, Hashes, Ipinfo, [[LinkedIn]], client and secret, Shodan, and Twitter, both API and secret. Once you've configured these API keys within the tool you simply run the tool from the command line and enter the top level domains you'd like to analyze. Within seconds, you'll have an extensive set of open source intelligence on your customer.
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-tools?u=76281980&t=94)** When it comes to vulnerability analysis in a penetration test, there are multiple schools of thoughts. [[NIST]] encourages the use of vulnerability scanners. While you're likely to get detailed, accurate results on your targets using these tools, they'll almost certainly trigger alerts in your customer's security information event management system. They may even trigger an intrusion prevention system that automatically blocks your testing system from accessing any of the customer's IT assets. I know a number of pen-testers who forgo noisy automated scans, opting instead to focus on OSINT and user credentials. OSINT gathering rarely, if ever, touches the target network so the likelihood of OSINT gathering tripping alarms, and getting blacklisted is virtually nonexistent. Once you know which systems and applications are accessible from the internet, you'll want credentials so you can attempt to log in. OSINT gathering is certain to turn up email addresses and likely to turn up internal usernames. With just a single email address or a single username, you should be able to determine the naming convention that the customer follows. With email, is it first name dot last name? First name underscore last name? First initial, last name? The web application, Hunter, available at [hunter.io](https://hunter.io), can answer that question for you.
>
> **[3:09](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-tools?u=76281980&t=189)** [[Metadata]] extraction tools like FOCA, and Metagoofil, can often extract internal network usernames from publicly available documents. If you find a single username, enough to determine the customer's naming convention, you could scour LinkedIn for other employees working at the same company. From there, determining other valid user names should be pretty straightforward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[LinkedIn]] (2), [[Python (Programming Language)|Python]] (1), [[Google]] (1), [[NIST]] (1)
> **Env Vars:** osint (6), api (5), cse (1), nist (1), foca (1)
> **Tools:** github (2), command line (1)
> **CLI Commands:** python (1), find (1)
> **Prerequisites:** you'll need (1), configure (1)
> **URLs:** [hunter.io](https://hunter.io) (1)
> **Speakers:** - [instructor] (1)

#### [Penetration test techniques](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-techniques?u=76281980&t=0)** - [Presenter] One of my favorite [[Penetration Testing]] techniques is password spraying. Instead of trying to brute force an application with one user name and multiple passwords, you instead use multiple user names and a single password. Why? Well, think about it for a moment. How many applications are going to lock out users after a single failed log on attempt. All you need is a password that at lease one person is likely to using today. And if you're not sure where to start, try this. Combine the current season, the year, and a special character. For example, Summer2023!. Will that work? Chances are it will. It meets all of the most common password complexity requirements, uppercase letters, lowercase letters, alphanumeric, at least eight characters, and the inclusion of a special character. What's worse, the changing of the seasons occurs roughly every 90 days, which is the same that many organizations still require their users to select a new password. On a side note, if that's how you're creating your password, I recommend you change that behavior. Penetration testing techniques are constantly changing, constantly evolving, and successful pen testers maintain an awareness of current tools and techniques, both offensive and defensive.
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/penetration-test-techniques?u=76281980&t=94)** Two additional resources I recommend you check out are the Red Team Field Manual, RTFM, and the Blue Team Field Manual, BTFM. As you do more and more work in this field, you'll find that the information contained within these two books will be relevant in almost every pent test you conduct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (2)
> **Env Vars:** rtfm (1), btfm (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Social engineering](https://www.linkedin.com/learning/security-testing-essential-training-2022/social-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/social-engineering?u=76281980&t=0)** - [Narrator] We tend to think of [[Penetration Testing]] as a technical exercise, but criminals learned long ago that it's much easier to hack a person. That's why social engineering has been and will remain a highly effective method for compromising organizations. That's also why it's important for penetration testers to include social engineering in our engagements. Social engineering often involves tricking targets into taking an action on the attacker's behalf. Examples of this are opening a malicious email attachment or visiting a malicious website, both with the intent of installing malware on the target system. This is known as [[Phishing]] and it's generally considered to be the most common social engineering attack method. Another common tactic in social engineering is attempting to trick users into sharing valid credentials. This could be done via a phone call where the attacker impersonates someone the user is likely to trust, maybe somebody on the help desk. This might also be done by convincing the user to visit a log on page that looks and feels like a website the user trusts, when it's really a website owned and controlled by the attacker. A fantastic tool for staging and executing social engineering attacks is the social engineer toolkit or set. Set is an open source [[Python (Programming Language)|python]] tool, originally written by Dave Kennedy,
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/social-engineering?u=76281980&t=93)** one of the most active and influential members of the Information Security Community. Set is pre-installed in [[Kali Linux]] and it's accessible under the social engineering tools of the applications menu. Set contains nearly a dozen different attack vectors, helping you automate social engineering attacks against websites, wireless networks, email accounts, mobile devices, and even [[Arduino]] devices. When it comes to website attack vectors, set includes seven unique attack methods in addition to credential harvesting. Remember that the intent of social engineering isn't to embarrass your targets. Rather, it's to help the organization determine whether or not their [[Security Awareness]] efforts are having the desired effect. More importantly, the results of your social engineering tests should provide your customer with targeted guidance on how they might improve their resilience to these types of attacks. While phishing campaigns are far and away the most popular form of social engineering tests, I recommend that you consider including the following as well. Perform a physical site visit, attempt to bypass the front desk and walk around the customer's [[Microsoft Office|office]] area. An attacker who can gain physical access to their facilities could likely install unauthorized [[Hardware]] on their internal network. Authenticate to applications protected by two-factor authentication. Your customer may believe that sites protected
>
> **[3:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/social-engineering?u=76281980&t=188)** by two-factor authentication are impervious to attack. If you compromise a valid set of credentials, you can attempt to socially engineer the user into sharing a valid passcode or automatically approving a request, when you attempt to authenticate. You do this by preconditioning the user to believe that you're a help desk employee, testing the authentication system. You could target password self-service portals, one of my favorites. Password reset functionality is often exposed to end users in the form of these password reset portals. When configuring their secret questions, far too many users provide answers that you can discover by performing OSINT gathering against that individual. If you can find the answers to those secret questions, you may be able to reset that user's password. This is an indirect form of social engineering since it doesn't require interacting with the target directly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (2), [[Penetration Testing]] (1), [[Python (Programming Language)|Python]] (1), [[Kali Linux]] (1), [[Arduino]] (1)
> **Definitions:** is an  (2), known as (1)
> **CLI Commands:** python (1), find (1)
> **Env Vars:** osint (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [SET demo](https://www.linkedin.com/learning/security-testing-essential-training-2022/set-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/set-demo?u=76281980&t=0)** - [Instructor] For the Social-Engineers Toolkit demo, we're going to click on Applications. We're going to scroll down to Section 13, Social Engineering Tools. And then we're going to click Social Engineering Toolkit. Now, this tool does need to run with root permission, so enter "Kali", for the password And it starts up right away. The menu in Social Engineering Toolkit is text based. So we're going to navigate through the menu to build out a specific type of social engineering attack. While there are a number of options available, we're going to use a site cloning attack in an attempt to get people to give us their username and password. To enable this, we type "1", Social-Engineering Attacks, and hit Enter. Then type "2", Website Attack Vectors. Type "3", Credential Harvesting Attack Method. And then type "2", Site Cloner. Now, the one option that we need to enter here is the IP address for the results to come back to. If we trick somebody into giving us their credentials, we want a copy of those credentials somewhere that we control. I'm going to use the [[Kali Linux]] Virtual Machine, 10.0.2.15. So we'll accept the defaults. And now we need to know what website we want to clone. [[OWASP]] maintains a directory of vulnerable web applications that you can use to test your [[Web Application Security]] skills.
>
> **[1:37](https://www.linkedin.com/learning/security-testing-essential-training-2022/set-demo?u=76281980&t=97)** One of the web applications is Hack This [Site.org](https://Site.org). And what I like about this one, especially for a demo, is that it has a username and password field. That's what we're looking for, a way to get those credentials. Now this real website is hosted at 137.74.187, and you can see all the IP addresses here. These are external IP addresses, but what we are going to do, is we are going to create a copy on our Kali image. And so I'm going to type in: [https://www.hackthissite.org](https://www.hackthissite.org)/,
>
> **[2:21](https://www.linkedin.com/learning/security-testing-essential-training-2022/set-demo?u=76281980&t=141)** do a trailing slash, hit Enter. And in seconds, we have a cloned version of this website running on our Kali image. And how do I know this? Let's go to a new tab, and go to 10.0.2.15,
>
> **[2:42](https://www.linkedin.com/learning/security-testing-essential-training-2022/set-demo?u=76281980&t=162)** that's the IP address for Kali. That's not the IP address for the original website. And why am I making a point of that? Because look how gorgeous this is. If I compare the version that was created by Social Engineering Toolkit to the actual website, they're virtually identical. Now, let's assume that I've sent this to a user and said, "Hey, I need you to log into the website". So Jared comes here, types in his username, and he types in his password. When I click Login, you'll notice in the URL it's taken me to the legitimate website, and I'm on the main page like I haven't logged in at all. More often than not a user is going to think they mistyped something. Maybe I mistyped my password, let me try it again. And they're going to go about their day without having any idea that you just captured a copy of their username and password on your attacking machine. So Social-Engineers Toolkit, again, has many, many more tools that you can use when conducting a social engineering test. But if you want to try to trick people into giving you their passwords as part of a pen test, give Social-Engineering Toolkit a try. I think you'll find this site cloner tool to be incredibly effective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (1), [[OWASP]] (1), [[Web Application Security]] (1)
> **UI Navigation:** go to (2), click on (1), scroll down (1)
> **Versions:** 10.0.2 (2), 137.74.187 (1)
> **URLs:** [site.org](https://site.org) (1), [https://www.hackthissite.org](https://www.hackthissite.org) (1)
> **Env Vars:** owasp (1), url (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 7. Additional Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [Coordinating your assessments](https://www.linkedin.com/learning/security-testing-essential-training-2022/coordinating-your-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/coordinating-your-assessments?u=76281980&t=0)** - [Instructor] The information that you collect during security assessments is often highly sensitive as is the report that you'll ultimately generate and deliver to your customer. With this in mind, you need to make sure that you've given careful thought to how you'll conduct each assessment and how you'll coordinate the resources and the communications throughout the engagement. Here are a few items that I recommend you think through beforehand, documenting your planned approach to each one. Identify the stakeholders, stakeholders are those people who have an interest, or a stake in the assessment. While you're likely to be initially engaged by the information security team the set of stakeholders extends far beyond that group. Common stakeholders include network administrators, system administrators, and application administrators for any in scope systems or applications. Since your testing activity could potentially, trigger alerts or alarms, including calls to the help desk to report suspicious activity you should also consider engaging the managers of the team's responsible for those responses. Otherwise, you could inadvertently trigger the [[Incident Response]] plan, an unnecessary activity that could easily be avoided with the right communication beforehand. Schedule the assessment when it's least likely to impact operations. If you've ever worked in an enterprise environment
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/coordinating-your-assessments?u=76281980&t=93)** you know that there are certain times of the year that it's forbidden to modify IT systems and applications. In retail this tends to happen during holiday seasons where shopping trends go up in volume. In other industries, this happens as large IT projects come to a close, and changes related to those projects are migrated into production. Performing security assessments during times such as these introduces unnecessary risk. Ensure that your assessment team has the access that they need. If your customer wants you to perform authenticated tests of internet facing applications, or if your customers want you to emulate a malicious insider then you'll need credentials in order to conduct those tests. Also, if your customer wants you to perform any physical social engineering tests that we discussed make sure that you have a written statement from the engagement contact that authorizes you to perform those tests. Your assessment team should carry a copy of that document with them at all times. Document your engagement incident response plan. What should you do if you discover the customer has already been compromised by an actual attacker? What if your testing activities have an unintended consequence on one of the target systems creating a service disruption? You should think through these scenarios ahead of time so that you can document your communication
>
> **[3:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/coordinating-your-assessments?u=76281980&t=188)** and escalation plan for the engagement. If all goes well, you'll never need to refer to this document, but it is much better to have it ready than to go into an incident unprepared. Document your engagement communication plan. How will you keep your customer apprised of your testing activities? In my experience, some customers prefer weekly status emails while other customers want twice daily updates of the testing activity, a message in the morning outlying planned activity for the day and a message in the evening summarizing both work completed and any notable findings. It's important that you both align your communication plan with your customer expectations, and that you establish a secure means of exchanging engagement information to ensure that sensitive information doesn't end up in an unencrypted mailbox somewhere. The best way to get answers to questions you might have is to have a pre-engagement meeting with your customer where you discuss these items in detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Incident Response]] (2)
> **CLI Commands:** make (2)
> **Cross-References:** we discussed (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Data analysis](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-analysis?u=76281980&t=0)** - [Narrator] Although reporting is often reserved for the final stage of a security assessment, you should be analyzing your findings, as you go. This sounds easier to do than it is in practice, though. I believe one of the reasons for this challenge is the nature of the work itself. Security assessments, particularly penetration tests, can be both intriguing and exciting. Part of the appeal of working in this field, is that penetration testers are explicitly authorized to do things that they might very well be arrested for, under different circumstances. Even better, we're not just allowed to do this, we're paid for our efforts. Many of the penetration testers I know, are inherently curious. And they enjoy playing games and solving puzzles. That part of the brain that works through seemingly disconnected bits of information and [[Forms]] meaningful patterns, is a part of the brain that makes pen testers good at what they do. However, it can also distract them from the ultimate goal of the engagement. We can get so caught up in testing new exploits and exploring company network drives to see what we can find, that we lose track of time. And when you have a tight timeframe in which to complete your assessment, losing track of time can be disastrous. Fortunately, you can begin to build your time management discipline now. We've covered a number of tools that you'll likely use
>
> **[1:35](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-analysis?u=76281980&t=95)** on future security assessments. I recommend that you continue using those tools in a lab setting and that you add one additional exercise to the mix. Let's use Nessus, for example. Use Nessus to run a vulnerability scan of a system in your lab environment. If you don't have a system ready to go, you can download a virtual machine image from [osboxes.org](https://osboxes.org) and use that image for your testing. Even better, you can pull down an intentionally vulnerable [[Linux]] system, from a site like, [vulnhub.com](https://vulnhub.com). Once the Nessus scan is complete, start a timer. Give yourself no more than 60 minutes. Pretend that you've been engaged by a customer to do a security assessment of that single virtual machine. Analyze the results of the Nessus scan with the intent of summarizing your observations and recommendations, in a draft report. Work on that analysis and reporting until the timer runs out. Hard stop. At the end of the 60 minutes, I wouldn't expect you to have a clean, polished report that's ready to deliver to the customer. What I would expect though, is that you've identified the most critical findings and that you can speak knowledgeably about what you've found and why it matters to the customer. Repeat this exercise a few times before your next actual security assessment. And I have a hunch that your next engagement report will be noticeably stronger.
>
> **[3:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-analysis?u=76281980&t=188)** Why? Because each time you perform an exercise like this one, you're enhancing your analysis skills. Ultimately, you'll want to use the results of your analysis to tell a larger story. The customer doesn't care whether or not they have any critical, exploitable vulnerabilities on internet facing systems. The customer wants to know why that matters to them. They want to know how those findings might have a negative impact on their business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Linux]] (1)
> **URLs:** [osboxes.org](https://osboxes.org) (1), [vulnhub.com](https://vulnhub.com) (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Providing context](https://www.linkedin.com/learning/security-testing-essential-training-2022/providing-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/providing-context?u=76281980&t=0)** - [Instructor] In your analysis, make sure you don't automatically dismiss lower-severity vulnerabilities. We've seen multiple instances of where security researchers were able to chain lower-severity vulnerabilities together in order to compromise the target. The one such example was an attack against D-Link routers back in October of 2018. Security researchers chained together the following lower-severity vulnerabilities in a coordinated attack against vulnerable devices: directory traversal, administrative password is stored in plaintext, and arbitrary code execution. By exploiting the first vulnerability, the researchers were able to browse to sensitive directories on the devices. The admin password was stored in plaintext in a file in one of those directories. Once the researchers logged into the device using the admin credentials, they were then able to find and exploit a remote code execution vulnerability that was only visible to authenticated users. Any one of these vulnerabilities might represent a potential risk to the device, but by chaining them together, an attacker could do some real damage. A vulnerability scan won't provide this context but a penetration test will, assuming, that is, that the pen tester performed the necessary analysis to connect these puzzle pieces together.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Data handling](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-handling?u=76281980&t=0)** - [Instructor] Think for a moment about how much sensitive data you'll be collecting and how much sensitive information you'll be creating during a security assessment. Every scan that you run will leave artifacts, both within the scanning tools themselves and in the reports generated by those tools. You'll be recording your thoughts and comments in documents, spreadsheets, maybe even mind maps throughout the assessment as you puzzle out what damage an attacker could potentially inflict using the vulnerabilities you've uncovered. As you communicate with the customer, and with anyone on your team who is assisting with the assessment, you'll be leaving potentially sensitive information in voicemails and email messages. And just consider the final report, if that report fell into the hands of someone who wanted to harm your customer it would serve as a step-by-step guide on how to do damage as quickly and efficiently as possible. It goes without saying that your data-handling procedures need to be as well thought out as the testing activities themselves. There are four key areas of data handling that you'll want to consider, collection, storage, transmission, and destruction. As a rule, only collect information you need for the engagement. Collecting too much information introduces unnecessary liability.
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-handling?u=76281980&t=94)** Where exactly do you draw the line? Now, I'm afraid there isn't a clear answer that applies to every security assessment. Go into each assessment with this consideration in mind though, and you're more likely to find the right balance. Where possible you'll want to enforce strong encryption on data at [[Representational State Transfer (REST)|rest]]. Data should be stored on encrypted drives, especially on laptops, to protect against accidental disclosure if one of those devices is ever lost or stolen. Enabling BitLocker on [[Windows]] or FileVault on Macs is one possible solution. Another is using VeraCrypt to create an encrypted volume where sensitive data can be stored on disk. Data should never be transmitted over unencrypted channels. Instead of using traditional email to exchange sensitive information, consider using an encrypted email service. Better yet, you could use an encrypted online file exchange service. Companies like Box and Citrix, who purchased ShareFile, offer managed solutions designed to enable the secure exchange of sensitive information between companies. Make sure you're following the principle of least privilege when it comes to accessing assessment information. Define a finite list of who should have access, and what they should have access to. Once an engagement is complete you have the option
>
> **[3:08](https://www.linkedin.com/learning/security-testing-essential-training-2022/data-handling?u=76281980&t=188)** of destroying all sensitive data relating to the engagement or vaulting it on the client's behalf. If you're deleting that data tools like CCleaner or BleachBit are popular in the Windows space, while utilities like shred, wipe, and secure-delete can get the job done on a [[Linux]]-based file system. At a minimum I recommend that you use a file deletion utility that supports the US Department of Defense 5220.22-M wipe standard, also known as the three-pass overwrite. While using technology to support your secure data-handling procedures is essential don't overlook your low-tech options. Including a cover page on your report and marking every page as company confidential is one way to reduce the risk that the final report will end up in the wrong hands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Linux]] (1)
> **CLI Commands:** find (1), make (1)
> **Versions:** 5220.22 (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Drafting your report](https://www.linkedin.com/learning/security-testing-essential-training-2022/drafting-your-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/drafting-your-report?u=76281980&t=0)** - [Instructor] With your security assessment complete and the report drafted, you're ready to deliver it to the customer, almost. Don't get in the habit of writing a single draft of the report and sending it on to the customer, not if you want to work with that customer a second time. You're likely to have three general audiences who ultimately want to read your report, executives, management, and staff. Executives want the big picture, the 30,000-foot view. The executive summary should be as short as possible, and the language used in the executive summary should be more business centric. These execs will use the information in the executive summary to make budget and staffing decisions. Management will be responsible for allocating the resources necessary to remediate any findings. This might include assigning staff members from other projects, which could impact those project timelines. It could also include purchasing additional licenses, updating security documentation, or communicating those changes to other members of the company. Staff members will be the ones making the actual changes. These are the network administrators, the system administrators, the application developers. Where management will want a punch-down list of necessary changes, the staff members will want as much detailed remediation information as you can share.
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/drafting-your-report?u=76281980&t=93)** Keep these three audiences in mind when drafting your report. Don't deliver anything to the customer until you're certain that your draft report speaks to all three audiences.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Delivering your report](https://www.linkedin.com/learning/security-testing-essential-training-2022/delivering-your-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/delivering-your-report?u=76281980&t=0)** - [Presenter] Once you have a draft of the report ready, revisit your original statement of work. You should be able to map every item in the report back to your original conversations with the customer. Including this step in the report revision process will help you ensure that the final deliverables are in line with the customer expectations. I also recommend that you deliver the report in stages. Schedule a meeting with your primary stakeholder. Use this time to deliver a draft version of the report, often called a readout. The draft report still should be somewhat polished, both well-formatted and free from spelling errors. The intent of this draft delivery is to give your stakeholder a chance to respond to any findings and more importantly, to make recommendations for the final deliverable. Remember, the purpose of the report is to help the customer improve their information security program. If you can refine the report to include additional information, especially information that might be unique to the customer's company culture or specific security challenges, then your report is more likely to have a greater positive impact post-delivery. Following the initial draft review meeting, spend some time reviewing the report and then schedule a final delivery meeting with the key stakeholders. The inclusion of those stakeholders is essential, since they'll ultimately be the most affected
>
> **[1:34](https://www.linkedin.com/learning/security-testing-essential-training-2022/delivering-your-report?u=76281980&t=94)** by the changes recommended within the report. This final delivery meeting can potentially be somewhat contentious, sometimes based on factors entirely beyond your control. If, for example, the customer has been experiencing an internal power struggle over who has responsibility for different areas of operations and information security, then certain stakeholders may consider the final report a threat to their position within the company. That's why it's important that you deliver both the technical findings with the report, as well as the context around those findings. Why are the findings important? Why should the customer consider implementing your recommended changes? How will those changes benefit not only the company, but the employees and the customers who rely on the company? I've said it before, and I'll keep saying it. Context is everything. With your final report ready, follow the procedures you've outlined in your data handling plan to share the final deliverables with the customer, and you can mark your security assessment as complete.

> [!info]- Semantic Content
>
> **Best Practices:** recommended (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/security-testing-essential-training-2022/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/next-steps?u=76281980&t=0)** - [Jerod] Thank you so much for working through this course with me. I really hope you find the information you learned along the way both practical and useful. There's only so much I can cover in the time allotted for a course like this one though, and I wouldn't be doing right by you unless I shared additional resources, ones that might help you along the way after we wrap up here. Make sure to check out the resource handout that accompanies this course. Now that you're equipped with all of the [[Security Testing]] knowledge, what's next? Well, you should put it in a practice. That's what. Even after nearly two decades of working in IT and information security, I still used my home lab on a regular basis. All the demos that I shared in this course were based on my experience in corporate and consulting environments, but you can be sure I ran through them in my lab environment to make sure they were current, accurate, and relevant to what you're likely to bump into in your day to day work. If you don't have a home lab, put one together so you can keep your skills sharp. The lab doesn't have to be complicated and it doesn't need to require anything aside from your laptop, a virtual machine player, and a handful of VMs on your hard drive. Dig deeper into what you can do with the tools we covered in this course. Better yet, download similar tools in this space so you can compare and contrast. Sign up for trials of enterprise grade tools
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/next-steps?u=76281980&t=93)** so you can evaluate their functionality against the free and open source tools you install in your lab. Add to your security toolbox, sharpen your skills. Lay out your own Mise en place. When I started working in information security I had no idea what I wanted to focus on. I was so hungry to learn that I tackled anything and everything that came my way. Over the years, I found that I enjoyed some areas more than others. Areas like [[Application Security]], security frameworks, identity and access management. I could talk for days on those topics, and I was able to explore those interests while performing security assessments. As you get more hands on experience performing security assessments, chances are you'll have a similar experience. You'll soon realize what areas of security really captivate you. When that happens, don't shy away from it. Run toward it instead. We have a critical need in this industry for professionals who possess both the interest and the aptitude to do the work that needs to be done. If that's you, embrace it. Go after it. If you work in a corporate environment, the best way for you to apply this knowledge is to volunteer to perform one of the assessments that we covered at the beginning of this course. If another group or team is already performing those assessments internally,
>
> **[3:07](https://www.linkedin.com/learning/security-testing-essential-training-2022/next-steps?u=76281980&t=187)** ask if you can shadow them on the next one. If any of these assessments are being overlooked, volunteer to do the first one. Take your notes from this course. Build your action plan and dive in. If you're a student, internships are one way to go and mentorships are another. Approach your academic advisor and communicate your interests. Set up a profile on [[LinkedIn]] and begin networking with local information security professionals. If you ask enough people about whether or not they might be interested in mentoring you, you may just be surprised at how many times you receive an absolutely in reply. Most importantly, don't stop learning. Keep practicing, keep studying. Keep at it until you're doing what makes you happy. Thanks again for your time and good luck with your next security assessment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (1), [[Application Security]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** we covered (2)
> **Prerequisites:** install (1), set up (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [jerod] (1)

#### [Additional resources](https://www.linkedin.com/learning/security-testing-essential-training-2022/additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/security-testing-essential-training-2022/additional-resources?u=76281980&t=0)** - [Instructor] While I spend a lot of my time reading blogs and scouring [[GitHub]], I do have a few books that I return to time and again. If you're interested, I recommend that you consider adding these books to your own shelf: "RTFM: The Red Team Field Manual," "BTFM: The Blue Team Field Manual," "Hash Crack: The Password Cracking Manual,: and "[[Penetration Testing]]: "A Hands on Introduction to Hacking." I mentioned multiple [[NIST]] special publications throughout the course, referencing 801-15, the Technical Guide to Information [[Security Testing]] and Assessment more than any of the others. NIST special publications are incredibly detailed and free to download, and I recommend that you review these three publications more closely when you have the opportunity: Special Publication 800-30 Rev 1: "Guide for Conducting Risk Assessments," Special Publication 800-53 Rev 5: "Security and [[Privacy]] Controls "for Federal Information Systems and Organizations," and Special Publication 800-115: "Technical Guide to Information Security "Testing and Assessment." Getting involved in professional groups is a fantastic way to connect with other information security professionals. If you live near a major metropolitan area, I recommend that you check out local chapter meetings of one or more of these organizations:
>
> **[1:33](https://www.linkedin.com/learning/security-testing-essential-training-2022/additional-resources?u=76281980&t=93)** ISSA, ISACA, ISC Squared, InfraGard, and [[OWASP]]. If a chapter doesn't exist yet, maybe you should start one. If you'd rather do something independent, maybe you could start your own group or join forces with one that's already underway. Don't spend all of your time in a book or behind a computer screen, though. Try to attend security conferences every now and then. [Infosec-conferences.com](https://Infosec-conferences.com) has a robust list of information security conferences all around the world. Search for a city near you and I'm sure you'll find at least one conference worth checking out. Better yet, see if you can find a security BSides within driving distance. BSides conferences are run by security professionals for security professionals. They're both accessible and very affordable and they're one of the best things to happen in the information security community in years. If you can't find a BSides near you, start one. The BSides team would love to help you do just that. You can visit them online at [securitybsides.com](https://securitybsides.com). If you can't make a conference in person, you could also visit YouTube to watch recorded talks posted after each event. Adrian Crenshaw, who goes by the online handle irongeek_adc, travels from conference to conference throughout the year, recording talks
>
> **[3:07](https://www.linkedin.com/learning/security-testing-essential-training-2022/additional-resources?u=76281980&t=187)** and uploading them to his YouTube channel. Head on over to [irongeek.com](https://irongeek.com) for a complete list of conferences that Adrian's attended and videos that he's recorded. Finally, I recommend that you keep in touch with me as you continue to move forward in your career. I'm easy enough to find here on [[LinkedIn]] and I publish my slides to conference talks on my SlideShare account and on my LinkedIn profile. I also maintain a website in my spare time, [simplifyingcybersecurity.com](https://simplifyingcybersecurity.com). I built the site to help folks like you continue to sharpen your skills and grow your own careers. If you see something out there that helps you do what you're trying to do, excellent. If not, let me know what you're looking for and I'll see what I can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2), [[LinkedIn]] (2), [[GitHub]] (1), [[Penetration Testing]] (1), [[Privacy]] (1)
> **Env Vars:** nist (2), rtfm (1), btfm (1), issa (1), isaca (1)
> **CLI Commands:** find (4), make (1)
> **URLs:** [infosec-conferences.com](https://infosec-conferences.com) (1), [securitybsides.com](https://securitybsides.com) (1), [irongeek.com](https://irongeek.com) (1), [simplifyingcybersecurity.com](https://simplifyingcybersecurity.com) (1)
> **Code Identifiers:** irongeek_adc (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jerod Brennen]]

## Resources

- Exercise files available

## Skills Covered

- Network Security
- Security Testing

## Path Context

### In [[Explore a Career in Application Security]]
← [[Learning the OWASP Top 10]] | **4 of 7** | [[Dynamic Application Security Testing]] →

### In [[Strategies for Managing Vulnerabilities and Mitigating Cyber Risks]]
← [[Vulnerability Management in Cybersecurity- The Basics]] | **2 of 6** | [[Vulnerability Management with Nessus]] →

## Appears In

- [[Explore a Career in Application Security]]
- [[Strategies for Managing Vulnerabilities and Mitigating Cyber Risks]]

## Related Courses

_Courses sharing skills:_

- [[Leveraging AI for Security Testing]] — Security Testing
- [[Cisco Network Security- Cisco Firewall Technologies]] — Network Security
- [[Cisco Network Security- Secure Routing and Switching]] — Network Security
- [[Cisco Network Security Core Security Concepts]] — Network Security
- [[DevSecOps- Automated Security Testing]] — Security Testing

---

[↑ Back to top](#)