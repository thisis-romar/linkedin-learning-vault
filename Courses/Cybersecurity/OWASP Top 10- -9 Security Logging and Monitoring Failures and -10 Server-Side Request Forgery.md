---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery
url: "https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery"
duration_minutes: 38
duration: 38m
level: Intermediate
updated: 10/25/2023
learners: 177777
skills:
  - OWASP
  - Web Application Security
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE0V039sXCgYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698100979131?e=2147483647&amp;v=beta&amp;t=mZX-fsDwfHm2OQMiVLk09StJxCjBBbTkZkLTvqraFUk"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Master the OWASP Top 10](../../Paths/Cybersecurity/Learning%20Paths/Master%20the%20OWASP%20Top%2010.md)'
prev_courses:
  - '[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures](OWASP%20Top%2010-%20-7%20Identification%20and%20Authentication%20Failures%20and%20-8%20Software%20and%20Data%20Integrity%20Failures.md)'
path_nav: '[{"path":"Master the OWASP Top 10","position":6,"total":6,"prev":"OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/owasp
  - skill/web-application-security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/OWASP%20Top%2010-%20-9%20Security%20Logging%20and%20Monitoring%20Failures%20and%20-10%20Server-Side%20Request%20Forgery.md)

![OWASP Top 10: #9 Security Logging and Monitoring Failures and #10 Server-Side Request Forgery](https://media.licdn.com/dms/image/v2/D4E0DAQE0V039sXCgYg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698100979131?e=2147483647&amp;v=beta&amp;t=mZX-fsDwfHm2OQMiVLk09StJxCjBBbTkZkLTvqraFUk)

# OWASP Top 10: #9 Security Logging and Monitoring Failures and #10 Server-Side Request Forgery

> It’s important to protect your organization against security vulnerabilities, but how do you prepare for a possible attack? In this course, join instructor and application security expert Caroline Wong as she gives you an overview of the ninth and tenth most common vulnerabilities listed on the 2021 Open Web Application Security Project (OWASP) Top 10 List: security logging and monitoring failures

> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery) | 38m | Intermediate | 178K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [2021 OWASP Top 10](#2021-owasp-top-10)
  - [OWASP Top 10 series](#owasp-top-10-series)
- [**1. Security Monitoring and Logging Failures**](#1-security-monitoring-and-logging-failures) (6 videos)
  - [What are security monitoring and logging failures?](#what-are-security-monitoring-and-logging-failures)
  - [Example 1: 2018 Starwood data breach](#example-1-2018-starwood-data-breach)
  - [Example 2: 2021 South Georgia Medical Center insider threat](#example-2-2021-south-georgia-medical-center-insider-threat)
  - [Prevention technique: Ensure logging includes sufficient user context](#prevention-technique-ensure-logging-includes-sufficient-user-context)
  - [Prevention technique: Ensure monitoring and alerting are active and consistent](#prevention-technique-ensure-monitoring-and-alerting-are-active-and-consistent)
  - [Prevention technique: Establish an incident response and recovery plan](#prevention-technique-establish-an-incident-response-and-recovery-plan)
- [**2. Server-Side Request Forgery**](#2-server-side-request-forgery) (6 videos)
  - [What is Server-Side Request Forgery (SSRF)?](#what-is-server-side-request-forgery-ssrf)
  - [Example 1: 2019 Capital One breach](#example-1-2019-capital-one-breach)
  - [Example 2: 2017 GitHub Enterprise chained exploits](#example-2-2017-github-enterprise-chained-exploits)
  - [Prevention technique: Network layer prevention techniques](#prevention-technique-network-layer-prevention-techniques)
  - [Prevention technique: Application layer](#prevention-technique-application-layer)
  - [Prevention technique: Require authentication for internal services](#prevention-technique-require-authentication-for-internal-services)
- [**Conclusion**](#conclusion) (1 videos)
  - [Explore more of the OWASP Top 10](#explore-more-of-the-owasp-top-10)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [2021 OWASP Top 10](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/2021-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/2021-owasp-top-10?u=76281980&t=0)** - We use web applications every day in both our personal and our professional lives. We want them to be safe and secure. The best way to secure web applications is to find and fix security vulnerabilities. [OWASP](../../Skills/Cybersecurity/OWASP.md) stands for Open [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) Project and the top 10 List is a resource for any and everyone who is involved in building web applications. It helps us to understand the most common types of security vulnerabilities. This course covers the last two categories in the 2021 OWASP Top 10 , security logging and monitoring failures, and server side request forgery. I'm Caroline Wong, chief Strategy Officer at Cobalt. I've also learned how to identify and address them. Come and join me. Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (2), [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) (1)
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - we (1)

#### [OWASP Top 10 series](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/owasp-top-10-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/owasp-top-10-series?u=76281980&t=0)** - [Narrator] Here are a few things that may be helpful to know so that you can get the most out of this course. First, this course covers the ninth and 10th categories in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10. I recommend watching my previous courses that cover the first several categories. You may also want to watch my OWASP Basics course which provides a high level overview of all of the items in the 2021 Top 10. This course is designed for anyone who is involved in building web applications and wants to make them secure. This includes software developers, architects, product and project managers, and of course, security professionals. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (2)
> **Env Vars:** owasp (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


### 1. Security Monitoring and Logging Failures

[↑ Back to Table of Contents](#table-of-contents)

#### [What are security monitoring and logging failures?](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/what-are-security-monitoring-and-logging-failures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/what-are-security-monitoring-and-logging-failures?u=76281980&t=0)** - [Instructor] The ninth vulnerability category for the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is security monitoring and logging failures. The official OWASP website says, "This category is to help detect, escalate, and respond to active breaches. Without logging and monitoring, breaches cannot be detected." Many of the activities recommended by OWASP have to do with preventing a security breach, but this control is specific to identifying a breach that is actually happening. Whenever I think about security logging and monitoring, I immediately think about the security cameras installed outside my house. The primary reason we have these security cameras is because we want to monitor the activity around our home. We want to reduce the risk of intrusions, vandalism, theft, and property damage. Installing the cameras gives us a sense of security and might also deter theft and other unwanted activity. A critical aspect of effective security cameras is that just having them is not enough. To provide the intended benefits, they need to be installed and configured properly. Someone needs to decide where to put the cameras since the location of the cameras and their angle will determine what images and video they capture.
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/what-are-security-monitoring-and-logging-failures?u=76281980&t=95)** They need to be connected to a reliable power supply in order to be active, and ours also needs to be connected to [wifi](../../Glossary/Standard/Wi-Fi.md). Our security cameras are managed via a software application, so we need to install that software application and decide which settings to use. This includes how much video is going to be stored at any given time, where it will be stored, and when it will be deleted or no longer available. Perhaps most importantly, someone needs to see the video footage in order to assess an ongoing situation. The setup needs to be configured such that it alerts when something is happening that we should be looking at. As you can see, there's a lot involved in making security cameras work effectively, beyond just purchasing some [Hardware](../../Topics/Hardware.md). Similarly, security monitoring and logging for web applications requires a number of different activities to occur in order to be most effective. We'll cover the most important recommendations in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3), [Wifi](../../Glossary/Standard/Wi-Fi.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** owasp (3)
> **Prerequisites:** install (1), setup (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Example 1: 2018 Starwood data breach](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-1-2018-starwood-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-1-2018-starwood-data-breach?u=76281980&t=0)** - [Instructor] Marriott International is a group of 30 hotel brands with more than 6,000 properties worldwide. On November 30th, 2018, Marriott announced that a [Data Security](../../Skills/Data%20Science/Data%20Security.md) incident had occurred in which unauthorized users had gained access to their guest reservation database, affecting up to 500 million guests. The data types which had been compromised included a lot of sensitive information like names, mailing addresses, phone numbers, email addresses, passport numbers, dates of birth, payment card numbers and payment card expiration dates. Woo, I would not be happy if I found out that hackers had stolen this type of data from me. How would you feel? From my perspective, the most alarming characteristic of this particular security incident is that, during their investigation, Marriott discovered that unauthorized access to the network had been occurring since 2014. Bad actors literally had access to private guest data for four years. This is exactly the type of situation that logging and monitoring controls are intended to prevent. With proper logging and monitoring in place, an organization greatly increases the chances that once a system has been compromised, they can find out right away. This will allow them to [react](../../Skills/Web%20Development/React.js.md) and respond,
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-1-2018-starwood-data-breach?u=76281980&t=93)** potentially containing a security incident before it spreads and causes further damage. In a news announcement on the company website, Marriott's president and CEO wrote, "We deeply regret this incident happened. "We fell short of what our guests deserve "and what we expect of ourselves. "We are doing everything we can to support our guests "and using lessons learned to be better moving forward." Marriott alerted all of their affected guests via email, and also set up a dedicated website and call center in order to respond to questions about the incident. They also provided one-year of free WebWatcher enrollment to guests, a monitoring service that alerts customers if evidence of customer information is found online. Guests based in the United States were also provided fraud consultation services and reimbursement coverage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** ceo (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Example 2: 2021 South Georgia Medical Center insider threat](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-2-2021-south-georgia-medical-center-insider-threat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-2-2021-south-georgia-medical-center-insider-threat?u=76281980&t=0)** - [Instructor] I want to tell you about what a security incident looks like when proper security monitoring is in place. In [stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) contrast to the four year period between the Marriott data breach and when it was discovered, the 2021 South Georgia Medical Center breach occurred on November 12th, and was found out that very same day. South Georgia Medical Center, commonly known as SGMC, is a not-for-profit medical system located in Valdosta, Georgia. They serve about 400,000 residents across 15 counties. On November 11th, 2021, an employee resigned from the medical center. On November 12th, the next day, the employee downloaded a significant amount of electronic patient data onto a USB drive. This private data included names, dates of birth and test results of more than 40,000 patients. I don't know about you, but I really don't like the idea of a stranger having access to my medical test results. In this case, security monitoring and logging software had been installed to alert when unauthorized downloads were taking place. On the very same day that this inappropriate download occurred, the security software rang alarm bells and the organization was positioned to respond right away. The data had not been deleted from medical center systems. Ronald Dean, the hospital's president and CEO said,
>
> **[1:38](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-2-2021-south-georgia-medical-center-insider-threat?u=76281980&t=98)** "We don't have any reason to believe that the downloaded information was used in any way." The former employee was charged with felony computer theft and felony computer invasion of [Privacy](../../Skills/Data%20Science/Privacy.md). On the day the breach took place, they actually had legitimate access to the information, but violated policy by downloading the information to a personal USB stick. Affected patients were notified by mail and were offered free credit and identity monitoring services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** usb (2), sgmc (1), ceo (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Ensure logging includes sufficient user context](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-ensure-logging-includes-sufficient-user-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-ensure-logging-includes-sufficient-user-context?u=76281980&t=0)** - [Presenter] The first part of this category's description on the official [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 website addresses this prevention technique: Ensure logging includes sufficient user context. It says, "Insufficient logging, detection, monitoring, and active response occurs anytime auditable events such as logins, failed logins, and high-value transactions are not logged; warnings and errors generate no, inadequate, or unclear log messages. The most important concept to understand is that logging and monitoring is only as valuable as the types of information that are being logged and monitored. If you have logs and they're monitored, but they don't contain the information that you need to understand what's going on or make informed decisions about what to do about it, then it's likely that your logs may not include valuable information. I recommend reviewing the OWASP cheat sheets on logging and logging vocabulary. The logging cheat sheet provides a list of recommended events to log. These include input and output validation failures, authentication and authorization successes and failures, session management failures, application errors and system events, use of higher risk functionality. Why is it recommended to log so many failure events?
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-ensure-logging-includes-sufficient-user-context?u=76281980&t=96)** Think about it for a moment. If someone's trying to attack something, they're probably trying multiple times to get in and failing. Each time you see repeated failures, it's a possible indication of a security event. What does higher risk functionality mean here? The last item in that list was higher risk functionality. What does that mean? Some examples of higher risk functionality are adding or deleting users, changes to user privileges, use of administrative privileges, access to restricted data, data import or export, submission of user-generated content. In each of these cases, it is extremely important to include user context in the logs. You need to know which actions are being attempted by which user. The user in this case could be a human or a machine and the context to record might be source address or user identity information. The OWASP Logging Cheat Sheet says, "Application logs must record when, where, who and what for each event."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (3)
> **Env Vars:** owasp (3)
> **Best Practices:** recommended (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### [Prevention technique: Ensure monitoring and alerting are active and consistent](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-ensure-monitoring-and-alerting-are-active-and-consistent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-ensure-monitoring-and-alerting-are-active-and-consistent?u=76281980&t=0)** - [Instructor] The second prevention technique for this category is to ensure that monitoring and alerting is active and consistent. If this is the first time you're hearing about this, you might think to yourself, "Gosh, that sounds incredibly obvious." If you're going to perform any security control, ideally, it should be active and consistent. Here's the nuance. This category is called security logging and monitoring failures. But there's actually three critical activities that need to be performed in order for this security control to be effective. These are, number one, logging, number two, monitoring, and number three, alerting. Here are a few key statements from the official [OWASP](../../Skills/Cybersecurity/OWASP.md) description related to this prevention technique. Logs of applications and APIs must be monitored for suspicious activity. In other words, just having logs for apps and APIs is not enough. They must be monitored in order to provide the organization with the capability to respond quickly in the event of an incident or attack. Appropriate alerting thresholds and response escalation processes must be in place. In addition to the logs being captured and monitoring taking place, mechanisms need to be in place for alerts
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-ensure-monitoring-and-alerting-are-active-and-consistent?u=76281980&t=93)** to be sent to and received by the folks who can respond in the event that something suspicious is taking place. There should be a set of instructions for how [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) should escalate throughout an organization, depending on how severe the incident seems during the initial analysis. The application must detect, escalate, or alert for active attacks in [Real-Time](../../Skills/Database%20Management/Real-Time.md), or near-real-time. When it comes to this particular security control, time is of the essence. One way to think about it is like a wildfire. If there's a fire somewhere near my house, then I want to know about it right away. The sooner an organization can be alerted to the possibility of an attack, the sooner they can respond. The sooner they can respond, the sooner they can put remediation measures in place to stop threat actors. Every hour counts, because if you can detect someone malicious on your systems and lock them out, then you're also able to prevent them from making a larger, more devastating impact. Remember, in order for this security control to be effective, logging, monitoring, and alerting must be in place. All of these components need to be active and consistent in order to provide a reliable line of defense for a web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1)
> **Definitions:** is called (1), in other words (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Establish an incident response and recovery plan](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-establish-an-incident-response-and-recovery-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-establish-an-incident-response-and-recovery-plan?u=76281980&t=0)** - [Narrator] The third prevention technique for this category is to establish an [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) and recovery plan. The main purpose of implementing a logging monitoring and alerting program for web applications is to find out as early as possible when an attack is occurring. Naturally, as soon as an attack is detected, it's time to respond to the incident. During a live incident, the individuals involved will likely experience significant stress, and need to focus their energy and time. Having a plan in place that was thought out ahead of time and reviewed by affected stakeholders should help reduce confusion about exactly who is supposed to be doing what and when. Throughout an incident's lifecycle, several decisions will also need to be made. An incident response plan will support decision making from a roles and responsibilities perspective, and may also include timing that depends on organizational risk tolerance as well as [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) factors. According to incident response expert Robert Lelewski, the number one issue that occurs during incidents is not properly managing internal communication. There are many different stakeholders involved in incident response and which ones to involve at which stage will depend on the nature of the specific incident.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-establish-an-incident-response-and-recovery-plan?u=76281980&t=93)** Typically, one of the first groups to get involved is the technical owners of the affected applications or systems. They will be most intimate with how things are supposed to work, and they can assess what's not working as expected. They will have the access and permissions required to make changes that will help to stop an ongoing incident, and they will be able to provide evidence to forensics analysts to determine what happened. These folks are likely going to be required to put whatever they had been working on and prioritizing to the side while they focus on the incident. Ideally, the first time they learn that they're required to be involved during incident response is not during an incident itself, but rather during the formation of an incident response plan. I grew up in California and when I was in school, we often practiced what we might do in the case of an earthquake. I'm really glad that the first time I learned what to do was not during an actual active earthquake. Can you think of a time in your life when you made a plan before something challenging happened to make sure you were prepared just in case it did? If customer data is involved in an incident, then customer facing teams may be involved as well as they will be responsible for reporting the incident to the customers who have been affected,
>
> **[3:07](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-establish-an-incident-response-and-recovery-plan?u=76281980&t=187)** either because their data was accessed or because the application may be unavailable for a period of time while the incident is ongoing. Legal and [Privacy](../../Skills/Data%20Science/Privacy.md) teams may also be brought in to provide guidance on timelines and requirements for breach reporting. Leadership and executive teams will be interested in frequent updates as to the incident status, and these will need to be provided on a regular basis. Depending on a variety of other factors, public relations teams and law enforcement facing teams may also be brought in at various points in the incident response plan. Incident response involves a lot of coordination between different groups of people, and it can get complicated quick. An important point to remember is that the sooner an incident response process begins, the sooner it can be completed. Incidents that are detected at earlier stages of an attack also have less impact than incidents which are detected at later stages of an attack. This is why logging, monitoring and alerting are critically important activities for [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (9), [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) (1)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [narrator] (1)


### 2. Server-Side Request Forgery

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Server-Side Request Forgery (SSRF)?](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/what-is-server-side-request-forgery-ssrf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/what-is-server-side-request-forgery-ssrf?u=76281980&t=0)** - [Instructor] The final vulnerability category in the 2021 [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10 is SSRF, which stands for server-side request forgery. The name of this vulnerability category is descriptive, and as you might be able to guess, these vulnerabilities involve a hacker manipulating a server to forge or send unintended requests. It's important to understand that a web application is made up of several different components. These typically include: a web browser, also called a client, a web application server, a database server, caching services, and APIs. When it comes to server-side request forgery, the server we're talking about is the web application server. A web application server is kind of like the backbone of a web app. And it acts like an intermediary between the client, or browser, and the application. During an SSRF attack, the web application server may be tricked into making unintended requests such as: accessing internal files, such as configuration files, accessing internal APIs, port scans to look for open ports or vulnerable services, requests to database servers in an attempt to access restricted data or execute [Database Queries](../../Skills/Software%20Development/Database%20Queries.md),
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/what-is-server-side-request-forgery-ssrf?u=76281980&t=95)** requests for cloud [Metadata](../../Skills/Web%20Development/Metadata.md), such as access keys or credentials. The impact of these unintended requests can lead to undesirable results. The attacker may be able to gain access to internal [Databases](../../Skills/Software%20Development/Databases.md), internal APIs, or other systems that should not be accessible for unauthorized users. The attacker may be able to trick the web application into disclosing sensitive information from internal resources, such as internal IP addresses, server names, or configuration information. In a severe situation, the attacker may be able to perform remote execution, also known as RCE, by executing their own malicious code on the web app server or on other systems accessible by the web app server. One way that I think about server-side request forgery is sort of like a digital version of [Phishing](../../Skills/Software%20Development/Phishing.md). In a phishing attack, the attacker tries to convince their target, a human, to willingly provide sensitive information. Sometimes this works, because the attacker is able to effectively convince their target that they legitimately deserve access to the information. In a server-side request forgery attack, it's as though the attacker is pretending to be the server and asking internal systems for sensitive information.
>
> **[3:09](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/what-is-server-side-request-forgery-ssrf?u=76281980&t=189)** This type of vulnerability can lead to significant consequences when exploited.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (2), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** such as (4), kind of like (1)
> **Env Vars:** ssrf (2), owasp (1), rce (1)
> **Definitions:** stands for (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [Example 1: 2019 Capital One breach](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-1-2019-capital-one-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-1-2019-capital-one-breach?u=76281980&t=0)** - [Narrator] Capital One is a financial services organization that provides commercial and retail [Banking](../../Skills/Software%20Development/Banking.md) as well as credit card services. Between March and July, 2019, their cloud environment suffered a major [Cybersecurity](../../Topics/Cybersecurity.md) attack, one that leveraged an SSRF vulnerability. Personal data, belonging to more than 100 million Capital One customers, was compromised due to this data breach. Stolen data included credit card and bank account information, addresses and social security numbers from across a range of dates between 2005 and 2019. The attacker posted the stolen information on [GitHub](../../Skills/Software%20Development/GitHub.md). GitHub is a software platform, intended to provide collaboration between developers and information posted there can be downloaded and used by others. At the time, Capital One had made significant progress toward a [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md) to fully transition to a cloud model. They had planned to close their data centers in 2020. Sensitive customer data was being stored on Amazon S3 buckets, storage containers for objects in the cloud. And unfortunately, these were not properly protected. The web application firewall was misconfigured and the hacker performed an SSRF attack and gained access to the data.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-1-2019-capital-one-breach?u=76281980&t=94)** The hacker was able to access more than 700 folders, containing confidential information, relating to users of Capital One's credit cards, as well as individuals who had applied for their credit card services. An interesting aspect of this particular breach is that the hacker who performed the attack was employed by Amazon at the time. When an insider is the malicious hacker in a cybersecurity attack, this is called insider threat. In July, 2019, a Washington State Court indicted the former Amazon employee, who was responsible for the attack. The hacker had posted in [Slack](../../Skills/Software%20Development/Slack.md) and on GitHub, her intent to breach and share Capital One data, providing clues to the FBI for her arrest. Capital One provided free credit monitoring and identity protection to all the individuals who were affected by the incident.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Banking](../../Skills/Software%20Development/Banking.md) (1), [Digital Transformation](../../Skills/Software%20Development/Digital%20Transformation.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1)
> **Tools:** github (3), slack (1)
> **Env Vars:** ssrf (2), fbi (1)
> **Definitions:** is a  (2), is called (1)
> **Speakers:** - [narrator] (1)

#### [Example 2: 2017 GitHub Enterprise chained exploits](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-2-2017-github-enterprise-chained-exploits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-2-2017-github-enterprise-chained-exploits?u=76281980&t=0)** - [Instructor] [GitHub](../../Skills/Software%20Development/GitHub.md) Enterprise is a platform that teams of software developers use to build and deploy code. In 2017, security researcher Orange Tsai decided to try and hack GitHub Enterprise to see what types of vulnerabilities he could find and exploit. Orange decided that the first step of his hacking would involve SSRF attacks. In his blog post, he says, "Before I examine the architecture of GitHub Enterprise, my intuition tells me there are so many internal services inside GitHub Enterprise. If I can play with them, I believe I can find something interesting. So I am focused on finding more server-side request forgery, SSRF vulnerabilities." Orange did manage to find a successful SSRF attack. He discovered that the SSRF attack alone could be used to launch a denial of service or DoS attack, which would render some services unavailable for use. This in itself is an interesting discovery, but Orange was not satisfied. He wanted to see what else he could do to further infiltrate the GitHub Enterprise system. He persistently keeps working at trying to hack the software and a few days later discovers that there is actually a second SSRF vulnerability in a system called graphite,
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/example-2-2017-github-enterprise-chained-exploits?u=76281980&t=94)** which is used for graphing [Statistics](../../Skills/Data%20Science/Statistics.md). Orange uses the first SSRF attack in combination with the second SSRF attack, and then manages to combine them with an injection attack. Through this rather sophisticated sequence of chaining exploits, he manages to achieve a remote code execution or RCE. RCE is sort of like the gold medal of hacking for the security researcher community, it means that the hacker has discovered a way to run their own code, potentially malicious, remotely in the target application. It is extremely powerful and extremely dangerous. Orange reported the chained exploit to GitHub, and they fixed it within about a week. He was awarded more than $10,000 for the vulnerability report. In 2017, Orange also presented this chained exploit at the Black Hat Security Conference in the United States.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** ssrf (7), rce (2)
> **Tools:** github (6)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1), is an  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Network layer prevention techniques](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-network-layer-prevention-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-network-layer-prevention-techniques?u=76281980&t=0)** - [Instructor] The first statement from [OWASP](../../Skills/Cybersecurity/OWASP.md) about prevention for SSRF is to segment remote resource access functionality in separate networks. This is called network segmentation. The simplest way to think about network segmentation is to think of it as taking one big network and instead turning it into several small networks that are separated from each other. There are many ways to implement network segmentation. The Australia [Cybersecurity](../../Topics/Cybersecurity.md) Center has published an informative resource that describes these different techniques in a paper called Implementing Network Segmentation and Segregation. The second statement from OWASP about SSRF prevention is to enforce deny by default firewall policies or network access control rules to block all but essential intranet traffic. Denied by default simply means that all network traffic that is not explicitly allowed according to firewall policy, is blocked is kind of like the school that my kids attend. There is a list of the kids and the teachers and the staff who are expected and allowed to enter the school building, and everyone else is denied by default. Parents and other caregivers must check in at the front desk before they can enter the school. Network access control rules typically
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-network-layer-prevention-techniques?u=76281980&t=95)** apply to all the users and devices on a network and limit trusted network access to specific users or devices only. OWASP provides a couple of hints to accompany these statements. The first says, establish an ownership and a lifecycle for firewall rules based on applications. A firewall, like any cybersecurity tool, is going to be most effective when it has active ownership. This means that someone is responsible for regular tuning and configuration of the firewall to keep it up to date with intended firewall policies. A firewall rule lifecycle will include creating firewall rules, modifying those firewall rules, and reviewing and maintaining them. A firewall that is not looked after and just sits there without a proactive lifecycle will simply not be as effective. The final hint provided by OWASP to accompany these [Network Security](../../Skills/Cybersecurity/Network%20Security.md) prevention statements is to log all accepted and blocked network flows on firewalls. If suspicious or unauthorized traffic flows are occurring then logging both the successful and the unsuccessful attempts will provide insight into possible SSRF vulnerabilities and related attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (4), [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Env Vars:** owasp (4), ssrf (3)
> **Definitions:** is called (1), is a  (1), means that (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Application layer](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-application-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-application-layer?u=76281980&t=0)** - [Instructor] [OWASP](../../Skills/Cybersecurity/OWASP.md) provides a handful of application layer-specific prevention techniques for SSRF, and I'm going to talk through them, one by one. The first application layer prevention technique is to sanitize and validate all client-supplied input data. Hackers will commonly attack web applications via user input. When users are submitting information to a web application, such as typing into a data field, the application should first ensure that the data type matches what is expected and then ensure the software is interpreting the data as data and not as an instruction to be interpreted and executed. The next time you're filling out a web application form, consider writing something into a data field that is completely wrong, like putting your first name into a date of birth field. How does the web app respond? Does it respond with an error message, or does it allow you to keep going? The second application layer prevention technique is to enforce the URL schema, port, and destination with a positive allow list. URL stands for Uniform Resource Locator, and it simply means a website address. URL schema, port and destination all have to do with how a resource is accessed via a URL. This prevention technique recommends the communication
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-application-layer?u=76281980&t=95)** and data transfer that involves URLs should be defined using a positive allow list. A positive allow list means that the URLs that are allowed are on the list, and everything that is not on the list is blocked. The third application layer technique is do not send raw responses to clients. This means that when a server receives a response from an external resource, it should not simply provide it to the client making the request. Instead, it should process and review it to ensure that any suspicious or malicious content is removed before providing a clean version over to the client. The fourth application layer technique is to disable HTTP redirections. The phrase, "disable HTTP redirections," means that the server is not allowed to automatically go to URLs that are provided in a response from an external resource. Instead, the server takes some steps to assess the redirect URL before it proceeds. There may be cases where the server continues with the redirection but only after further validation. If the validation does not pass, then the server will not continue with the redirect. The final application layer tip from OWASP tells us, Do not mitigate SSRF via the use of a denial list
>
> **[3:13](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-application-layer?u=76281980&t=193)** or regular expression. Attackers have payload lists, tools, and skills to bypass deny lists." This means that it's simply no use to attempt keeping and enforcing a list of bad URLs or external resources. SSRF is a case where it doesn't work to try and prevent vulnerabilities from being exploited by allowing all traffic except for traffic that has been identified as bad and is on a do not allow list. Rather, make sure to deny all by default and use a positive allow list instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (2)
> **Env Vars:** url (5), ssrf (3), owasp (2), http (2)
> **Definitions:** means that (3), stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Prevention technique: Require authentication for internal services](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-require-authentication-for-internal-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-require-authentication-for-internal-services?u=76281980&t=0)** - [Instructor] One of the most dangerous impacts of a well-exploited SSRF vulnerability is that an attacker may be able to access internal resources that should not be publicly available. Therefore, an important prevention technique is to implement additional security controls on the internal resources themselves. Specifically, this [OWASP](../../Skills/Cybersecurity/OWASP.md) recommendation is to require authentication for internal services. Internal services may include [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) and retrieval systems, like [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) and [MongoDB](../../Skills/Software%20Development/MongoDB.md), Elasticsearch helps with full tech search, and MongoDB provides flexible and scalable storage. Both of these internal services and many others often contains sensitive or confidential information that an organization would not want an outsider, much less a malicious hacker to access. Authentication is a verification method that ensures users are who they say they are, particularly when trying to access a resource that may contain private information. When it comes to web applications, we are familiar with authentication methods that we use every day. These include username and password, two-factor or [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md), single sign-on, and digital certificates.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/prevention-technique-require-authentication-for-internal-services?u=76281980&t=94)** Setting up authentication for internal services and not just the front end logins adds an additional layer of defense in depth to combat the potential negative impact of SSRF vulnerabilities. Here's one way to think about it. A house requires a key to get in through the front door, but once you're inside the house, you have freedom to walk from room to room through doors that do not have locks. This recommendation basically says put a lock on the door to your [office](../../Skills/Web%20Development/Microsoft%20Office.md) so that if someone is trying to get in and access your private files or computer, they need to authenticate before they enter. One of the worst things that could happen with an SSRF vulnerability is unintended access to internal resources. Make sure authentication is required for those internal resources, and that will help you to secure your web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (2), [MongoDB](../../Skills/Software%20Development/MongoDB.md) (2), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Multi-factor Authentication](../../Skills/Software%20Development/Multi-factor%20Authentication.md) (1)
> **Env Vars:** ssrf (3), owasp (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore more of the OWASP Top 10](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/explore-more-of-the-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-9-security-logging-and-monitoring-failures-and-10-server-side-request-forgery/explore-more-of-the-owasp-top-10?u=76281980&t=0)** - [Instructor] And there you have it. Items number nine and 10 in the [OWASP](../../Skills/Cybersecurity/OWASP.md) Top 10. Security logging and monitoring failures and server side request forgery have both been key information security concepts for decades now. I so appreciate our time together discussing [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) planning, network segmentation, and so much more. Here's the most important thing that I need you to know. It's not enough to just learn about how to find, fix, and prevent security vulnerabilities. In order to build more secure web applications, we have to actually do these things. If your role has anything to do with [Software Development](../../Topics/Software%20Development.md) you have an opportunity to ask about and insist on including security activities in all stages of the software development process. It's up to us. Let's do it. Let's keep learning together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Development](../../Topics/Software%20Development.md) (2), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Caroline Wong](../../Instructors/Cybersecurity/Caroline%20Wong.md)

## Skills Covered

- OWASP
- Web Application Security

## Path Context

### In [Master the OWASP Top 10](../../Paths/Cybersecurity/Learning%20Paths/Master%20the%20OWASP%20Top%2010.md)
← [OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures](OWASP%20Top%2010-%20-7%20Identification%20and%20Authentication%20Failures%20and%20-8%20Software%20and%20Data%20Integrity%20Failures.md) | **6 of 6**

## Appears In

- [Master the OWASP Top 10](../../Paths/Cybersecurity/Learning%20Paths/Master%20the%20OWASP%20Top%2010.md)

## Related Courses

_Courses sharing skills:_

- [Learning the OWASP Top 10](Learning%20the%20OWASP%20Top%2010.md) — OWASP, Web Application Security
- [Wordpress Building A Secure Site](../Web%20Development/Wordpress%20Building%20A%20Secure%20Site.md) — Web Application Security
- [OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures](OWASP%20Top%2010-%20-7%20Identification%20and%20Authentication%20Failures%20and%20-8%20Software%20and%20Data%20Integrity%20Failures.md) — OWASP
- [OWASP Top 10- -3 Injection and -4 Insecure Design](OWASP%20Top%2010-%20-3%20Injection%20and%20-4%20Insecure%20Design.md) — Web Application Security
- [OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures](OWASP%20Top%2010-%20-1%20Broken%20Access%20Control%20and%20-2%20Cryptographic%20Failures.md) — OWASP

---

[↑ Back to top](#)