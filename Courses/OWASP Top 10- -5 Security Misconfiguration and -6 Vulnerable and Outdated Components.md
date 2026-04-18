---
type: course
slug: owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components
url: "https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components"
duration_minutes: 33
duration: 33m
level: Intermediate
updated: 11/7/2022
learners: 177777
skills:
  - Vulnerability Assessment
  - Application Security
exercise_files: false
tags:
  - course
  - topic/security
  - skill/vulnerability-assessment
  - skill/application-security
status: not-started
created: 2026-04-17
---

# OWASP Top 10: #5 Security Misconfiguration and #6 Vulnerable and Outdated Components

> Security vulnerabilities should be top of mind when it comes to safely accessing web applications within an organization. There’s always something that can go wrong if you’re not careful, but how do you prepare for a possible attack? In this course, instructor and application security expert Caroline Wong gives you an overview of two of the most common vulnerabilities listed on the 2021 Open Web A

> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components) | 33m | Intermediate | 178K learners

## Instructor

- [[Caroline Wong]]

## Skills Covered

- Vulnerability Assessment
- Application Security

## Table of Contents

### Introduction

#### 2021 OWASP Top 10
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=0)** - [Caroline] We use web applications every day in both our personal and our professional lives.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=6)** We want them to be safe and secure.
>
> **[0:09](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=9)** The best way to secure web applications is to find and fix security vulnerabilities.
>
> **[0:15](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=15)** OWASP stands for Open Web Applications Security Project and the top 10 list is a resource for any and everyone who is involved in building web applications.
>
> **[0:26](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=26)** It helps us to understand the most common types of security vulnerabilities.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=31)** This course covers the fifth and sixth categories in the 2021 OWASP top 10, security misconfiguration and vulnerable and outdated components.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=41)** I'm Caroline Wong, Chief Strategy Officer at Cobalt.
>
> **[0:45](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=45)** I've worked in the cybersecurity field since 2005.
>
> **[0:49](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=49)** I've seen firsthand how security vulnerabilities get introduced into web applications.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=55)** I've also learned how to identify and address them.
>
> **[0:58](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=58)** Come and join me.
>
> **[0:59](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/2021-owasp-top-10?u=76281980&t=59)** Let's empower ourselves so that we can build more secure web applications.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [caroline] (1)

#### OWASP Top 10 series
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=1)** - [Instructor] Here are a few things that may be helpful to know so that you can get the most out of this course.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=6)** First, this course covers the fifth and sixth categories in the 2021 OWASP Top 10.
>
> **[0:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=12)** I recommend watching my previous courses that cover the first few categories.
>
> **[0:17](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=17)** You may also want to watch my OWASP Basics course which provides a high level overview of all of the items in the 2021 Top 10.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=27)** This course is designed for anyone who is involved in building web applications and wants to make them secure.
>
> **[0:34](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=34)** This includes software developers, architects, product and project managers, and of course, security professionals.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/owasp-top-10-series?u=76281980&t=41)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** owasp (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 1. Security Misconfiguration

#### What is security misconfiguration?
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=0)** - [Instructor] In order to understand the concept of security misconfiguration, it is helpful to first discuss the definition of the term configuration.
>
> **[0:10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=10)** A dictionary definition is as follows, an arrangement of elements in a particular form, figure or combination.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=19)** Developing web applications is fundamentally an exercise of organizing building blocks in a particular way to achieve a specific outcome.
>
> **[0:28](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=28)** Sometimes I like to think of software engineering as a massive Lego project.
>
> **[0:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=33)** This vulnerability category is about the idea that some configurations for web applications are more secure than others, and we as technology professionals should intentionally choose and support secure configurations while decreasing our use of insecure configurations.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=53)** Does your smartphone require a passcode or biometric like facial recognition or your fingerprint in order to use it?
>
> **[1:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=61)** If it does, that's a secure configuration.
>
> **[1:05](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=65)** If it does not, pause this video and set one up right now.
>
> **[1:10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=70)** I'm serious. It's that important.
>
> **[1:13](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=73)** (theatrical music) Do you have your phone set to automatically back up your data on a regular basis?
>
> **[1:24](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=84)** Are you notified when software updates are available?
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=87)** Just like our phones, web applications have dozens and dozens of different settings.
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=92)** Each and every single one is an opportunity to choose a configuration and some configurations are more secure than others.
>
> **[1:40](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=100)** It's important to recognize that even configurations which you do not consciously choose, also known as default settings or the settings which are chosen by default when you first open up your new smartphone and take it out of the box, are still configuration choices that have a definitive impact on your risk profile.
>
> **[2:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=120)** 80% of the breaches described in the Basic Web Application Attacks section of the 2022 Verizon Data Breach Investigations Report have to do with stolen credentials.
>
> **[2:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=132)** You know what are some of the easiest credentials to steal?
>
> **[2:15](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=135)** Default credentials that never get changed, like when the password to access an admin account is the word admin.
>
> **[2:24](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=144)** Another really easy way to steal credentials is to find them just laying around for anyone who can access the public-facing internet to take.
>
> **[2:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=152)** An Amazon Web Services AWS S3 bucket is kind of like a file folder that's stored in the cloud on the internet.
>
> **[2:41](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=161)** If credentials are stored in an S3 bucket and that S3 bucket is not protected by proper authentication, then they're available for anyone to access, view, and compromise.
>
> **[2:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=173)** These are just a couple of common examples of security misconfigurations.
>
> **[2:58](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-is-security-misconfiguration?u=76281980&t=178)** In order to prevent these vulnerabilities from being exploited in an attack, someone has to make the intentional decision to change the configuration from an insecure setting to a more secure one.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), aws (1), make (1)
> **Code Keywords:** require (1), public (1), protected (1)
> **Definitions:** is an  (1), known as (1)
> **Analogies:** just like (1), kind of like (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (theatrical music) (1)

#### Example #1: 2020 SolarWinds data breach
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=0)** - [Narrator] The Solar Winds Breach of 2020 was described by ABC News as the biggest digital espionage campaign ever uncovered.
>
> **[0:09](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=9)** 18,000 global organizations had downloaded the malicious software update, including government agencies, hospitals, universities, and major companies, including Cisco, Intel, Deloitte, and Microsoft.
>
> **[0:24](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=24)** While the exact number of actively breached organizations is not known, it is estimated to have been in the hundreds.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=32)** What exactly is solar winds and why would hackers want to attack them?
>
> **[0:37](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=37)** Solar winds makes IT management software, very popular IT management software.
>
> **[0:44](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=44)** Their corporate website says that their clients include 498 of the Fortune 500 firms.
>
> **[0:51](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=51)** The software that was breached in 2020 was monitoring software called Orion.
>
> **[0:57](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=57)** You can think of it as being somewhat similar to a security system for a personal home.
>
> **[1:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=62)** Keeping track of cameras and locks and alarms but for a company's IT networking infrastructure.
>
> **[1:10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=70)** Imagine what kind of information a hacker could access if they had full control of your home security system.
>
> **[1:17](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=77)** Somewhat ironically, security systems are often highly trusted and have a lot of access to critical information.
>
> **[1:25](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=85)** This means that if they are compromised, the attacker can gain a lot of access too.
>
> **[1:31](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=91)** You may have heard a lot of different terms used to describe the Solar Winds attack.
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=96)** Software supply chain attack, advanced persistent threat, APT, and so on.
>
> **[1:42](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=102)** The thing about malicious hacking attacks that lead to big breaches is that they don't happen all in one step.
>
> **[1:50](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=110)** They happen across multiple different steps over time.
>
> **[1:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=113)** This is sometimes called a chained exploit.
>
> **[1:57](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=117)** So which part of the Solar Winds attack had to do with security misconfiguration?
>
> **[2:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=122)** One of the very first steps.
>
> **[2:04](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=124)** In order to get access to Solar Winds in the first place, hackers exploited a not very secure password, which was not protected by multifactor authentication.
>
> **[2:15](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=135)** This was unfortunately, a simple security misconfiguration.
>
> **[2:20](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=140)** Solar Winds had used the password, solar winds 123 to quote unquote protect the company's update server.
>
> **[2:28](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=148)** It's no wonder malicious threat actors took advantage and planted some malware.
>
> **[2:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=152)** The software was compromised long before anyone at Solar Winds found out about it.
>
> **[2:38](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=158)** This was actually discovered and reported by a Solar Winds customer, Fire Eye, when they began to notice early indications of the malware infected version of Orion.
>
> **[2:50](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=170)** It took a long time for the breach to be discovered and this is why it's known as an advanced persistent threat or APT.
>
> **[2:58](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=178)** Solar Winds was also the first step in a multiple phase attack.
>
> **[3:03](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=183)** The hackers wanted to compromise Orion in order to gain access to all of the Solar Winds customers with Orion installed on their networking systems.
>
> **[3:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=192)** Because Solar Wins was a software vendor for the primary target of the attack, their customers.
>
> **[3:19](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=199)** This is why it is known as a supply chain attack.
>
> **[3:23](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=203)** For the purpose of learning about this (indistinct) vulnerability category, our key takeaway is that the very first step of the Solar Winds attack took advantage of a simple security misconfiguration.
>
> **[3:36](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-1-2020-solarwinds-data-breach?u=76281980&t=216)** If this vulnerability had been identified and fixed or prevented in the first place, the rest of the breach might have been impossible for the attackers to carry out.

> [!info]- Semantic Content
>
> **Env Vars:** apt (2), abc (1)
> **CLI Commands:** apt (2)
> **Code Keywords:** protected (1), this ( (1)
> **Definitions:** means that (1), known as (1)
> **Analogies:** think of it as (1), imagine (1)
> **Speakers:** - [narrator] (1)

#### Example #2: State of Pentesting Report
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=0)** - [Instructor] I am the Chief Strategy Officer at Cobalt, a Pentest as a Service company.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=6)** Every year we publish a data driven research report that is based on the thousands of pentests that are performed in the previous year.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=14)** The 2022 State of Pentesting Report provides insights from 2,380 pentests conducted in 2021.
>
> **[0:23](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=23)** This report contains some interesting findings with regards to typical vulnerability categories for web applications.
>
> **[0:31](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=31)** What was the top vulnerability category reported in 2022?
>
> **[0:35](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=35)** Security misconfiguration, 38% of all vulnerability findings.
>
> **[0:41](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=41)** What was the top vulnerability category reported in 2021?
>
> **[0:45](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=45)** Security misconfiguration, 28% of all vulnerability findings.
>
> **[0:51](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=51)** How about in 2020?
>
> **[0:54](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=54)** What about 2019? 2018?
>
> **[0:56](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=56)** You guessed it.
>
> **[0:58](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=58)** The top vulnerability category was security misconfiguration.
>
> **[1:03](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=63)** The data driven State of Pentesting Report wasn't published before 2018 but I think it's fair to assume that security misconfiguration has been a top vulnerability category for even longer than the past five years.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=78)** The 2019 State of Pentesting Report dives deep into more specific types of security misconfigurations.
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=87)** That year, 30.1% of security misconfigurations were security headers.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=93)** 28% were application settings.
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=96)** 12% were encryption settings 11% were server configurations.
>
> **[1:41](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=101)** 9% were mobile settings 4% were cloud settings.
>
> **[1:46](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=106)** and 2% were improper security controls.
>
> **[1:49](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=109)** This report also has pointers to strong resources for mitigating security misconfiguration including SANS White Papers on building an application vulnerability management program and web application design.
>
> **[2:03](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=123)** OWASP projects on mobile security, secure headers, insecure configuration management, secure deployment, and blocking brute force attacks, and others.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/example-2-state-of-pentesting-report?u=76281980&t=134)** All Cobalt State of Pentesting Research Reports are available for download at no cost.

> [!info]- Semantic Content
>
> **Env Vars:** sans (1), owasp (1)
> **Versions:** 30.1 (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique #1: Repeatable hardening
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=0)** - [Instructor What does the word Hardening mean when it comes to application security?
>
> **[0:04](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=4)** Hardening a web application means identifying all of the various components and adjusting the configurations of those components to a more secure setting.
>
> **[0:15](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=15)** A hardening standard is a document that provides instructions on how to do this for a particular type of technology.
>
> **[0:22](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=22)** Hardening standards exist for browsers, operating systems, server software, visualization platforms, Cloud providers, mobile devices, network devices, desktop software, and even multi-function print devices.
>
> **[0:36](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=36)** CIS, the Center for Internet Security, provides dozens of these standards, which they call benchmarks.
>
> **[0:43](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=43)** These are developed by a community of tens of thousands of volunteer cybersecurity professionals with experience in academia, government, and industry.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=53)** It's a truly amazing project.
>
> **[0:55](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=55)** Let's take a look at the CIS Benchmark for Amazon Web Services.
>
> **[1:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=60)** First of all, it's 215 pages long.
>
> **[1:04](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=64)** There's a lot of custom configuration and setting changes that need to take place in order to harden an AWS implementation.
>
> **[1:13](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=73)** It is not secure out of the box.
>
> **[1:17](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=77)** The recommendations cover topics like identity and access management, ensure security questions are registered in the AWS account, logging, ensure CloudTrail is enabled, ensure the S3 bucket used to store CloudTrails logs is not publicly accessible, and many more.
>
> **[1:35](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=95)** Back in the day, security professionals collaborated with Ops professionals to go through various technology settings one-by-one.
>
> **[1:43](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=103)** In one of my first roles as a security policy and compliance engineer at an electronic commerce company, I remember meeting with Ops folks and talking through the latest CIS benchmarks at that time.
>
> **[1:55](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=115)** It was pretty onerous.
>
> **[1:58](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=118)** Today, some things are easier thanks to virtual machines.
>
> **[2:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=122)** In addition to the hardening benchmarks themselves, CIS also provides a set of virtual machine, VM, images, which are pre-hardened according to the benchmark recommendations.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=134)** These are also available for several common platforms, like AWS, Azure, Google Cloud, and Oracle Cloud.
>
> **[2:23](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=143)** Today, organizations can simply use the already hardened virtual images provided by CIS.
>
> **[2:30](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=150)** Conveniently, these are recognized as secure configurations by PCI DSS, the Payment Card Industry Data Security Standard, HIPAA, the Health Insurance Portability and Accountability Act, FISMA, the US Federal Information Security Management Act, FedRAMP, the US Federal Risk and Authorization Management Program, and NIST, the US National Institute of Standards and Technology.
>
> **[2:56](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=176)** These already hardened virtual images are one of the great benefits and convenience of the Cloud for reducing cybersecurity risk.
>
> **[3:04](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-repeatable-hardening?u=76281980&t=184)** If you can spin up a virtual environment in the Cloud quickly, it also means you have the opportunity to spin up a hardened virtual environment in the Cloud just as quickly.

> [!info]- Semantic Content
>
> **Env Vars:** cis (5), aws (3), pci (1), dss (1), hipaa (1)
> **CLI Commands:** aws (3)
> **Code Keywords:** function (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor (1)

#### Prevention technique #2: Minimal platform
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=1)** - [Presenter] Security misconfiguration can happen anywhere in a web application stack.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=6)** Simply put, if you build and operate your application with fewer components and features, then there's less that you need to harden and configure securely.
>
> **[0:15](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=15)** This use only what you need and eliminate the rest approach to managing risk associated with security misconfiguration is called minimal platform.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=27)** I like to think about minimal platform kind of like having a capsule wardrobe, or applying the Marie Condo tidying up methodology from her book, tier web app stack.
>
> **[0:37](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=37)** Consider each port service page, account and privilege, do you need it, are you using it, is it bringing you joy?
>
> **[0:45](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=45)** If not, eliminate it.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=47)** What are the absolute minimum features, components, documentation, and samples required to build and operate your web app?
>
> **[0:56](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=56)** Use those and discard the rest.
>
> **[0:59](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=59)** It sounds straightforward, but the reality of modern software development is that it's easier to leave things on, or fail to remove extraneous documentation as developers and operations folks respond to the high pressure of building new features and bringing them to market as fast as possible.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=78)** As with most security controls, the trade-off has to do with where you choose to invest your energy and your time.
>
> **[1:24](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=84)** It's also a mindset shift.
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=87)** If I allow trash to build up over time in my home and in my backyard, it's going to take a concerted effort, significant resources and a lot of time to get it all cleaned up.
>
> **[1:39](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=99)** If I routinely go through my day and pick up trash as it's created, or when I see it at, the end of the day, things will be cleaner and it'll feel like a relatively small effort.
>
> **[1:50](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=110)** In order to effectively prevent security misconfiguration it's critical that developers and ops folks keep the concept of minimal platform top of mind all the time.
>
> **[2:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=122)** When a new feature, or framework is being implemented that's the time to make sure anything unnecessary is removed.
>
> **[2:09](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=129)** It's also the right time during testing and during operation.
>
> **[2:14](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=134)** I want to acknowledge a nuanced reality of actual software development.
>
> **[2:19](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=139)** The reason that sometimes things that aren't being used don't get eliminated is because developers and ops folks work in groups.
>
> **[2:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=147)** And software gets developed iteratively over time.
>
> **[2:31](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=151)** It may actually be impossible to know if a particular feature is being used or not, this is not easy.
>
> **[2:38](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=158)** The best way to start is to eliminate all of the things that are blatantly obvious.
>
> **[2:44](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=164)** Take the CIS Docker Benchmark, for example.
>
> **[2:47](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=167)** Item five point 12 says, "Ensure that "the container's root system is mounted as read only."
>
> **[2:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=173)** Item 5.30 says, "Ensure that the host's "user namespaces are not shared."
>
> **[2:59](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-minimal-platform?u=76281980&t=179)** These are just two instances of ensuring that privilege and access are restricted to only what is absolutely necessary.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), docker (1)
> **Analogies:** kind of like (1), for example (1)
> **Env Vars:** cis (1)
> **Versions:** 5.30 (1)
> **Definitions:** is called (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [presenter] (1)

#### Prevention technique #3: Configuration review
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=0)** - [Presenter] Perhaps the most important technique for preventing security misconfiguration is configuration review.
>
> **[0:07](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=7)** This simply means check your settings and ensure they are as secure as you intend for them to be.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=13)** It's all well and good to reduce your web app tech stack down to a minimal platform and to harden new instances.
>
> **[0:21](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=21)** These techniques will help to prevent security misconfiguration in the future.
>
> **[0:26](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=26)** But what about security misconfigurations that already exist in your already deployed software right now?
>
> **[0:34](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=34)** All active software should undergo periodic configuration review in order to identify misconfigurations and fix them.
>
> **[0:43](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=43)** Depending on exactly what components are in your tech stack, there are likely tools that exist that can help you to perform some of this configuration review.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=53)** One example is the CIS Controls Self Assessment Tool, or CSAT, which is available from the Center for Internet Security.
>
> **[1:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=62)** Keep in mind that like any defect discovery method, configuration review requires both automated and manual means in order for it to be truly effective.
>
> **[1:13](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=73)** Tools can help to identify problem areas, but the most challenging part is typically once the problems are identified and need to be fixed.
>
> **[1:22](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=82)** Even if security folks are the ones who found the problems, they're often not in the roles that have the access to be able to fix the issues.
>
> **[1:31](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=91)** This next step involves partnering with critically important stakeholders to collaborate and ensure that the insecure configurations can be changed to secure settings.
>
> **[1:42](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=102)** Realistically, in order to get this done, there's also a significant amount of detailed tracking that is required to support this effort.
>
> **[1:52](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=112)** Consider a web app tech stack with 10 different components.
>
> **[1:57](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=117)** Each of those components has 100 secure configurations.
>
> **[2:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=122)** Simple math tells us that's 1,000 individual items to review, track and monitor over time.
>
> **[2:10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=130)** Security misconfigurations themselves can be extremely problematic, like in the case where an S3 bucket is left available to access by the public on the internet.
>
> **[2:20](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=140)** Others, like leaving too much information in error messages, can seem less scary at first, but can be combined with other security vulnerabilities to build chained exploits.
>
> **[2:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=152)** These often lead to the most damaging security attacks and breaches.
>
> **[2:37](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-configuration-review?u=76281980&t=157)** A great way to manage security misconfiguration review in any type of web app security practice is to engage with a pen test as a service provider who provides on-demand manual security testing, as well as a platform to help you track findings and remediation.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1), public (1)
> **Env Vars:** cis (1), csat (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [presenter] (1)


### 2. Insecure Design

#### What are vulnerable and outdated components?
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=0)** - [Narrator] Building web applications is not like receiving a brand new Lego kit in the mail with perfect pieces nicely organized and clear instructions.
>
> **[0:10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=10)** It's also not like sitting down at your laptop with a blank document editor to begin writing a novel.
>
> **[0:16](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=16)** More often in real life, building a web app is a little bit more like starting with the frame of a car that was new 20 or 50 years ago, rummaging around in a junkyard to find parts, buying some new parts and putting it all together to try and get the car to run.
>
> **[0:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=33)** I remember learning computer science when I was in college in the early 2000s.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=39)** Each of my projects started with a blank slate and I single-handedly designed and developed each program from start to finish.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=47)** This style of software development is sometimes called Greenfield.
>
> **[0:52](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=52)** This is not how web applications are built in real life.
>
> **[0:56](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=56)** More often than not, new code must integrate with and play nicely with existing software components known as legacy software.
>
> **[1:06](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=66)** The thing about legacy software is that sometimes it's vulnerable and sometimes it's outdated.
>
> **[1:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=72)** When you're working on a quote unquote new application or when you update an existing application and you are using vulnerable or outdated components, there's risk involved.
>
> **[1:25](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=85)** Managing vulnerable and outdated components is a completely normal, everyday type of activity when you're working on a team and building web applications.
>
> **[1:34](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/what-are-vulnerable-and-outdated-components?u=76281980&t=94)** When you know how to mitigate these types of risk, you're better positioned to build more secure software and protect the data of your clients and colleagues.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Real-world example #1: Equifax breach 2017
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=1)** - [Narrator] Equifax is an American credit monitoring company.
>
> **[0:04](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=4)** It uses sensitive financial and personal information to calculate credit scores, which are then used by individuals trying to obtain a loan.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=13)** In the 2017 Equifax breach, nearly 150 million records were stolen.
>
> **[0:20](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=20)** Compromised information included social security number, date of birth, address, and credit report information.
>
> **[0:28](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=28)** Additionally, more than 200,000 credit card numbers were also breached in the attack.
>
> **[0:35](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=35)** This type of information is pretty much exactly what a bad actor needs to commit identity theft.
>
> **[0:42](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=42)** How did this happen?
>
> **[0:44](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=44)** Unfortunately, Equifax was using vulnerable and outdated software components.
>
> **[0:48](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=48)** And these were exploited by malicious hackers.
>
> **[0:52](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=52)** The specific vulnerable software component involved in the breach is an open source component called Apache Struts.
>
> **[0:59](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=59)** This particular vulnerability could be leveraged to perform RCE, or remote code execution.
>
> **[1:07](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=67)** Remote code execution is a particularly severe type of attack.
>
> **[1:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=72)** Basically, the hacker can execute their own code remotely on the victim's software.
>
> **[1:18](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=78)** You can think of it like a remote control car.
>
> **[1:20](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=80)** The hacker controls the remote to the car.
>
> **[1:23](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=83)** It's not good.
>
> **[1:25](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=85)** There are a few different theories as to the timeline of how the Equifax breach occurred.
>
> **[1:31](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=91)** In March, 2017, the vulnerability was published to the public.
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=96)** This information became available both to the folks at Equifax managing the software containing the now outdated and vulnerable component, as well as malicious hackers looking to exploit that same vulnerability.
>
> **[1:51](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=111)** In May, information was stolen from Equifax servers but this wasn't discovered until July.
>
> **[1:58](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-1-equifax-breach-2017?u=76281980&t=118)** Individuals who were affected by the breach and the public were notified in September.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Code Keywords:** public (2)
> **CLI Commands:** apache (1)
> **Env Vars:** rce (1)
> **Analogies:** think of it like (1)
> **Speakers:** - [narrator] (1)

#### Real-world example #2: Target breach 2013
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=0)** - [Instructor] The 2013 Target breach was called the biggest retail hack in history.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=6)** It remains one of the biggest retail shopping breaches of all time.
>
> **[0:10](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=10)** 40 million credit and debit card numbers were impacted and personal information for up to 70 million customers was compromised.
>
> **[0:19](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=19)** In the months following the breach, Target had to respond to nearly 100 lawsuits.
>
> **[0:25](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=25)** How did the breach occur?
>
> **[0:26](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=26)** Target's digital infrastructure, like so many companies, is highly interconnected.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=32)** This means that the security, or lack thereof, of one software component can affect the risk profile of all the other connected digital assets.
>
> **[0:43](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=43)** In this case, malicious attackers were able to install malware on one part of Target's corporate network which then led to compromise of information throughout the rest of the network.
>
> **[0:54](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=54)** In November of 2013, hackers installed malware on one of Target's third-party vendors, a refrigeration contractor.
>
> **[1:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=62)** An employee at the refrigeration contractor clicked on a phishing email sent by the attackers and the malware collected login credentials for several internal Target software portals.
>
> **[1:14](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=74)** It's likely that the attackers had been performing recon activities to learn as much as they could about the interconnections of Target's network.
>
> **[1:23](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=83)** Several internal Windows servers were then compromised and the malware spread to Target's POS, point of sale systems.
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=92)** This is where the credit and debit card data was stolen.
>
> **[1:36](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=96)** Target found out about the attack about a month after the systems were compromised and disclosed the breach to the public.
>
> **[1:43](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/real-world-example-2-target-breach-2013?u=76281980&t=103)** They took several actions to prevent similar attacks from being successful in the future.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), public (1)
> **Env Vars:** pos (1)
> **Definitions:** means that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique #1: Remove unnecessary features
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=0)** - A good friend and former manager of mine often says, if you're in a situation where a toddler is holding a pair of scissors, don't try to secure that situation.
>
> **[0:11](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=11)** Change the situation completely by removing the scissors.
>
> **[0:16](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=16)** In this analogy, the toddler is your web application and the scissors are unnecessary features and components, which could potentially be vulnerable and/or outdated.
>
> **[0:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=27)** It's normal when developing web applications to use dependencies at one point in time that aren't used in a later version of the software.
>
> **[0:37](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=37)** It's best practice to remove these, which can help optimize performance, and reduce maintenance activities.
>
> **[0:44](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=44)** There's also an added security benefit.
>
> **[0:47](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=47)** When you remove something from a web application that is not necessary for it to work, whether that be a feature component, file, documentation, or dependency, then you also don't have to worry about keeping track of or managing risk for that unnecessary thing going forward.
>
> **[1:04](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=64)** A couple of tools that can be used to check for unused dependencies include Depcheck and npm-check.
>
> **[1:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=72)** Depcheck is described on [npmjs.com](https://npmjs.com) as a tool for analyzing the dependencies in a project to see how each dependency is used, which dependencies are useless, and which dependencies are missing.
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=87)** Npm-check checks to see if your packages are up-to-date and in use.
>
> **[1:33](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=93)** You may want to check-in with your security and development teams, to ask which tools they are using to check for unused dependencies and what process is being followed to remove unnecessary features and components.
>
> **[1:47](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-1-remove-unnecessary-features?u=76281980&t=107)** If you don't find anything, use it as an opportunity to collaborate with your colleagues and put something in place.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (2), find (1)
> **URLs:** [npmjs.com](https://npmjs.com) (1)
> **Best Practices:** best practice (1)
> **Speakers:** - a (1)

#### Prevention technique #2: Continuous inventory management
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=1)** - [Instructor] Let's talk about the silliest cybersecurity term I know, SBOM.
>
> **[0:06](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=6)** SBOM sounds scary, doesn't it?
>
> **[0:09](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=9)** Literally, it has the word bomb in it.
>
> **[0:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=12)** The funny thing is that SBOMs are actually not scary at all.
>
> **[0:16](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=16)** They're actually quite boring.
>
> **[0:18](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=18)** SBOM stands for software bill of materials.
>
> **[0:22](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=22)** Basically, it's the ingredient list for a web application.
>
> **[0:26](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=26)** If I'm allergic to a certain ingredient, then I want to know if it's in the food that I'm about to eat.
>
> **[0:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=32)** Similarly, if a software component in my web application is risky or insecure then I want to know about it.
>
> **[0:39](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=39)** It's impossible for me to manage the risk involved in various components of my web applications if I don't have a process to continually track and update my web app ingredient list.
>
> **[0:49](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=49)** SBOM, software bill of materials.
>
> **[0:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=53)** If you do have an up-to-date SBOM and a process to make sure it stays that way, then you can build a patching and vulnerability management process that takes each ingredient into consideration and allows you to keep an eye out for patches and updates that need to be applied urgently.
>
> **[1:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=72)** The other day I received an email notification from a local store where we shop frequently about a problem with some peanut butter that we had purchased.
>
> **[1:22](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=82)** The peanut butter had been found to have something wrong with it, and we were advised not to eat it.
>
> **[1:27](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=87)** This notification helped me to protect me and my family, and the critical part is that the purchased food in my pantry was being tracked somewhere.
>
> **[1:38](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=98)** We need to do this for our web applications, too.
>
> **[1:42](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-2-continuous-inventory-management?u=76281980&t=102)** There is software that can help us manage our build of materials, but ultimately making this work is a governance activity requiring engineering teams to choose to have the discipline to either stay within a top-down list of already approved technologies or to update stakeholders as needed when new technologies are put into use.

> [!info]- Semantic Content
>
> **Env Vars:** sbom (5)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Prevention technique #3: Leverage virtual patching
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=1)** - [Narrator] Fundamentally managing vulnerable and outdated components is about being able to do the following.
>
> **[0:07](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=7)** Number one, track the components.
>
> **[0:09](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=9)** Number two, identify vulnerabilities.
>
> **[0:13](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=13)** Number three, fix the vulnerabilities, usually by installing an update or patch.
>
> **[0:18](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=18)** There are cases, however, in which it's not that easy to install an update or patch.
>
> **[0:24](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=24)** If the vulnerability is found in third party software, the customer using that software may be completely dependent on that vendor's timeframe for deploying a patch.
>
> **[0:34](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=34)** If the software organization that built the software is no longer active or has decided not to make patches available for old software that is still in use, you won't be able to patch.
>
> **[0:44](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=44)** For organizations that completely outsource software development, fixing vulnerabilities often comes with additional cost and time that might not have been included in an original project plan or budget.
>
> **[0:57](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=57)** Even if your organization has a patch or update in-hand and complete control to deploy new code, installing a patch can take a lot of time, sometimes days, weeks, or months.
>
> **[1:09](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=69)** This is typically attributed to getting buy-ins from different stakeholders, prioritizing the patch for an upcoming sprint, and doing testing for the patch before it's applied.
>
> **[1:19](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=79)** In other cases, installing a patch may be deemed to be prohibitively expensive.
>
> **[1:25](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=85)** So what exactly do you do if you have an outdated or vulnerable component, but you can't install a patch?
>
> **[1:32](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=92)** Use a virtual patch, also commonly referred to as an external patch or a just-in-time patch.
>
> **[1:40](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=100)** There are a few different types of tools that can help with virtual patching.
>
> **[1:44](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=104)** Number one, intrusion prevention system, IPS.
>
> **[1:49](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=109)** Number two, web application firewall, WAF.
>
> **[1:53](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=113)** Number three, web server plugin.
>
> **[1:57](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=117)** Number four, application layer filter.
>
> **[2:00](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=120)** Fundamentally, the way that each of these operates is to inspect and analyze input flowing into a web application.
>
> **[2:07](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=127)** This involves specific complex operations, and it's not a silver bullet.
>
> **[2:12](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=132)** As with any other automated security detection system, the ideal setup minimizes both false positives and false negatives.
>
> **[2:22](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=142)** You don't want to block legitimate input and you don't want to miss identification of malicious input.
>
> **[2:28](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/prevention-technique-3-leverage-virtual-patching?u=76281980&t=148)** If you'd like to dive deeper into this topic, I recommend checking out the latest OWASP best practice guides.

> [!info]- Semantic Content
>
> **Env Vars:** ips (1), waf (1), owasp (1)
> **Prerequisites:** install (2), setup (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Explore more of the OWASP Top 10
> [LinkedIn Learning](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=1)** - [Instructor] And there you have it.
>
> **[0:02](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=2)** Items number five and six in the OWASP Top 10.
>
> **[0:05](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=5)** Security misconfiguration and vulnerable and outdated components have been key information security concepts for decades now.
>
> **[0:14](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=14)** The problems that lead to data breaches are known and we must continue to find, fix, and prevent these security vulnerabilities.
>
> **[0:23](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=23)** We have an opportunity to build more secure web applications in the future.
>
> **[0:28](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=28)** I hope you'll join me in my next course that covers the seventh and eighth vulnerability categories, identification and authentication failures and software and data integrity failures.
>
> **[0:40](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=40)** Similar to this course, we'll learn about each vulnerability category, dive into real life examples, and discuss prevention techniques.
>
> **[0:48](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=48)** Let's keep learning together.
>
> **[0:50](https://www.linkedin.com/learning/owasp-top-10-5-security-misconfiguration-and-6-vulnerable-and-outdated-components/explore-more-of-the-owasp-top-10?u=76281980&t=50)** There's more to explore in the 2021 OWASP Top 10.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1), let (1)
> **Env Vars:** owasp (2)
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Master the OWASP Top 10]]
← [[OWASP Top 10- -3 Injection and -4 Insecure Design]] | **4 of 6** | [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] →

## Appears In

- [[Master the OWASP Top 10]]

## Related Courses

_Courses sharing skills:_

- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Application Security
- [[OWASP Top 10- -1 Broken Access Control and -2 Cryptographic Failures]] — Application Security
- [[Node Js Security]] — Application Security
- [[Microservices- Security]] — Application Security
- [[Artificial Intelligence and Application Security]] — Application Security
