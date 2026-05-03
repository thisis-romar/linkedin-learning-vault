---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: building-a-privacy-program-in-the-age-of-genai
url: "https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai"
duration_minutes: 51
duration: 51m
level: Beginner
updated: 2/14/2025
learners: 4865
skills:
  - Privacy Compliance
  - Data Privacy
  - Privacy
  - Governance, Risk Management, and Compliance (GRC)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGJbeH8CObhAw/learning-public-crop_675_1200/B4EZTXHm7gHMAc-/0/1738775883722?e=2147483647&amp;v=beta&amp;t=mwwf-O2dSOaRVCZsbWVqMhfeoMyJ9Zpu-qVrYm4owWY"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Build a Privacy Program]]'
prev_courses:
  - '[[Understanding and Prioritizing Data Privacy]]'
next_courses:
  - '[[Privacy, Governance, and Compliance- Data Classification and Inventory]]'
path_nav: '[{"path":"Build a Privacy Program","position":3,"total":5,"prev":"Understanding and Prioritizing Data Privacy","next":"Privacy, Governance, and Compliance- Data Classification and Inventory"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/data-science
  - topic/database-management
  - skill/privacy-compliance
  - skill/data-privacy
  - skill/privacy
  - skill/governance-risk-management-and-compliance-grc
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Building%20a%20Privacy%20Program%20in%20the%20Age%20of%20GenAI.md)

![Building a Privacy Program in the Age of GenAI](https://media.licdn.com/dms/image/v2/D4E0DAQGJbeH8CObhAw/learning-public-crop_675_1200/B4EZTXHm7gHMAc-/0/1738775883722?e=2147483647&amp;v=beta&amp;t=mwwf-O2dSOaRVCZsbWVqMhfeoMyJ9Zpu-qVrYm4owWY)

# Building a Privacy Program in the Age of GenAI

> Dive into the world of privacy and data governance as Nishant Bhajaria—a privacy and security leader—guides you through essential topics such as data classification, inventory, and the importance of timely data deletion. Discover how to implement robust third-party risk management processes, ensuring that your company's external partnerships contribute to a secure data ecosystem. Understand the ri

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai) | 51m | Beginner | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What privacy means in the age of GenAI](#what-privacy-means-in-the-age-of-genai)
  - [Who this course is for](#who-this-course-is-for)
- [**1. Introduction to Privacy**](#1-introduction-to-privacy) (5 videos)
  - [The real meaning of "big data"](#the-real-meaning-of-big-data)
  - [Privacy and security](#privacy-and-security)
  - [Regulations and standards](#regulations-and-standards)
  - [Privacy and internal stakeholders](#privacy-and-internal-stakeholders)
  - [Building data governance into organizational operations](#building-data-governance-into-organizational-operations)
- [**2. Privacy and Key Governance Milestones**](#2-privacy-and-key-governance-milestones) (4 videos)
  - [Code governance](#code-governance)
  - [Data classification](#data-classification)
  - [Data inventory](#data-inventory)
  - [Third-party risk assessment](#third-party-risk-assessment)
- [**3. Building Privacy Tooling, Processes, Hierarchies, and Consolidations**](#3-building-privacy-tooling-processes-hierarchies-and-consolidations) (6 videos)
  - [Data deletion](#data-deletion)
  - [Data sharing](#data-sharing)
  - [Build vs. buy](#build-vs-buy)
  - [Decentralized vs. centralized](#decentralized-vs-centralized)
  - [Privacy leadership and the chief privacy officer](#privacy-leadership-and-the-chief-privacy-officer)
  - [Data Subject Access Requests (DSARs) and rights management](#data-subject-access-requests-dsars-and-rights-management)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What privacy means in the age of GenAI](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/what-privacy-means-in-the-age-of-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/what-privacy-means-in-the-age-of-genai?u=76281980&t=0)** - It feels like every post on [[LinkedIn]] these days has three parts: a noun, a verb, and the [[Microsoft Word|word]] [[Generative AI|gen AI]]. But what about [[Privacy]] in this age of gen AI? We're living through an age of dramatic change. We have seen other shifts, but this one feels different. Previous evolutions that come to mind include the following: intel shift from memory to processors in the 1980s, the internet revolution of the 1990s, the mobile computing, global identity, and social media era as it began in the early-2000s. And finally, the [[Cloud Computing]] chapter that began in the early 2010s. It's deploying human insight to build technology, which will then change human life in ways we are yet to imagine. Given these stakes, the privacy from gen AI says that no regulation law can foresee them, let alone forestall them. The risks and opportunities are huge. How do we respect our consumer's identities, healthcare choices, personal preferences? How do we catch bias and consent gaps, provide for physical safety, and do all of this with the efficiency Wall Street demands? This course will show you how. Are you ready? I am. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[LinkedIn]] (1), [[Microsoft Word|Word]] (1), [[Cloud Computing]] (1)
> **Analogies:** imagine (1)
> **Speakers:** - it (1)

#### [Who this course is for](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/who-this-course-is-for?u=76281980&t=0)** - Traditionally, courses in transient security are built either for engineers or attorneys. But we have seen over the last several years when it comes to transient security, silos don't work anymore, especially when the technology is groundbreaking and affects us in ways we cannot even imagine. I've led programs and build teams in this domain at multiple large companies, and strongly believe that if you work with data, you need to understand [[Privacy]] from both an engineering perspective and a policy standpoint. Therefore, an engineer can no longer remain confined in code. Similarly, an attorney can no longer operate within the confines of the law and high level first principles. This course is aimed at a much wider audience. If you collect data to build complex models that make decisions on people's lives like mine, this course is for you. If you manage platforms that store and process large volumes of that data, this course is for you. If your job is to make sense of complex laws written by people who do not understand engineering or code, this course is for you. If you're the CEO or an executive middle management, a venture capitalist, or an investor in a company that depends upon all of this data, this course is for you. Even if you do none of these things, but consumer services and [[Microsoft Products|products]] affected by all of this data, this course is for you. My main goal behind this course is to bring people together in the workplace, in colleges and trade schools, at cafeterias and bootcamps, to build a common shared vocabulary so we can collectively and responsibly build and confidently consume everything that gene AI makes possible. I'm so excited to teach you, learn from you, so we can come together as empowered consumers and creators in this golden age of innovation. Let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** ceo (1)
> **Analogies:** imagine (1)
> **Speakers:** - traditionally (1)


### 1. Introduction to Privacy

[↑ Back to Table of Contents](#table-of-contents)

#### [The real meaning of "big data"](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/the-real-meaning-of-big-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/the-real-meaning-of-big-data?u=76281980&t=0)** - [Instructor] To use a cliche, data is like oxygen. Just as you and I need oxygen to breathe, companies need data to survive and thrive. There is a key difference, though. Instead of being stuck at 21% like oxygen, data grows, keeps growing, and then grows some more. Once data enters the company systems, growth is the only way to go, it seems. But why is that? Rather than just blaming big tech companies, a lot of whom are on my resume, by the way, let me offer you a more detailed theory. This is about efficiency and velocity. Companies are accountable to shareholders, who demand efficiency because efficiency in theory leads to growth, higher margins, and bigger profits. This means that the innovators who work for these companies often resist processes and bureaucracies they deem unnecessary. Engineers, for example, insist on easy access to data and tools. This often leads to multiple copies of data, loose controls, and weak checkpoints. Data, as you can see on this slide, spreads throughout the company systems like fire through dry grass. Engineers working on AI, for example, feel like they need their own programs to have access to their own dedicated datasets. Security teams, for example, believe that keeping the company's data safe requires them to have their own copies of the data as well. This leads to a massive proliferation of data and the tools that create even more copies of the data as well. Consumers, like you and I, also play a part. We demand velocity, which is just a fast service. When we open a retail app, for example, we want the best deals and the fastest shipping possible. When we open a rideshare app,
>
> **[1:33](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/the-real-meaning-of-big-data?u=76281980&t=93)** we want our taxis to show up as quickly as possible. Collectively, we have built an ecosystem that necessitates and facilitates the replication of data. This is how what starts as data becomes [[Big Data]], as this funnel shows going from the ingestion point on the far left to the data warehouses on the far right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Privacy and security](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-security?u=76281980&t=0)** - [Presenter] Security and [[Privacy]] are different, but very closely connected. If someone is able to inappropriately access user data, it is not just a security violation for your business. This could also be a violation of the privacy rights of your employees and your customers. That is why security and privacy are very closely connected. It is helpful to look at two major security breaches and how they share the same vulnerabilities. This is important for two reasons. Your privacy program will need to partner with security teams on tooling to prevent and mitigate breaches. How you collect, store, and handle data should account for breaches that we know about. To that end, let's learn from two very high-profile breaches. In December, 2013, now, more than a decade ago, Target released a statement confirming a breach, saying that more than 40 million credit and debit card accounts may have been impacted between November 27th and December 15th, 2013. The type of data stolen, also known as track data, allows thieves to create counterfeit cards by encoding the information onto any card with a magnetic stripe. If the thieves were able to intercept PIN data for debit transactions, they could theoretically be able to reproduce stolen debit cards and use those cards to withdraw cash from ATMs anywhere in the US. This story exploded in the [[Cybersecurity]] and privacy circles when blogger brand Krebs reported that hackers had broken into Target's network. The hackers used login credentials stolen from a heating, ventilation, and air conditioning company, that is an HVAC company, that Target used at a number of its locations. The attackers began their process
>
> **[1:32](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-security?u=76281980&t=92)** by stealing the credentials of Target's HVAC vendor, Fazio Mechanical Services. According to Krebs On Security, which first broke the story of the breach, the attackers infected Fazio with general purpose malware known as Citadel through an email [[Phishing]] campaign. With Citadel firmly in place, the attackers waited until the malware offered Fazio's login credentials. The attackers then used the stolen credentials to gain access to web services Target hosted for vendors. You can see how the attackers used malware to attack a vendor to get close to Target. That is the learning here. Fazio's leader said that the company did not perform remote monitoring or control of the HVAC systems for Target. For you, the listener, the key takeaway is big companies like Target often used third-party vendors like Fazio for specialized tasks, and that thinking may prove to be problematic in this case. These vendors often operate lean and hence fail to invest in security and do the bare minimum to cut costs. Just as cost cutting and lack of security expertise pose a privacy risk, so can carelessness. Many of us believe that engineers have gotten wiser because they now know how bad things can be when the breaches happen. The stakes now are much higher, so surely, surely engineers have gotten smarter, right? Well, this optimism seems unwarranted in the face of other breaches, which brings me into the more recent Colonial Pipeline breach. In early 2021, one of the nation's largest pipelines, which carries the refined gasoline engine jet fuel from Texas up to the East Coast all the way up to New York was forced to shut down after being hit by ransomware.
>
> **[3:08](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-security?u=76281980&t=188)** The operator of the system, a company named Coronal Pipeline, said that it had shut down it's 5,500 miles of pipeline. Again, that's 5,500 miles of pipeline, which it said carried 45% of these coast fuel supplies in order to contain the breach. That is, again, you didn't hear that wrong, 45% of these coast supplies for fuel in the US. The hack that took down the largest fuel pipeline in the US and led shortages across the East Coast was a result of a single compromise password according to the consultant who responded to the attack. So how did this happen? Hackers gain entry into the networks of Coronal Pipeline company on April 29th through a [[Virtual Private Network (VPN)|virtual private network]] or a VPN account. The VPN was set up to allow employees to remotely access the company's computer network. The account's password has since been discovered multiple times inside a batch of leak passwords on the dark web. The VPN account didn't use [[Multi-factor Authentication]] or MFA. This allowed the hackers to breach Colonial's network using just a compromised username and password. This exact set of events could occur at the hospital, grocery store, clothing store, fitness enterprises, gaming companies, or even government agencies. The privacy implications in those cases could be even more staggering considering the kind of data they hold. This leaves us with a key lesson: critical personal data in storage coupled with weak security means a privacy incident is waiting to happen. It could happen today. It could happen tomorrow. It's a question of when, not if.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (8), [[Cybersecurity]] (1), [[Phishing]] (1), [[Virtual Private Network (VPN)|Virtual private network]] (1), [[Multi-factor Authentication]] (1)
> **Env Vars:** hvac (3), vpn (3), pin (1), mfa (1)
> **Definitions:** known as (2), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [Regulations and standards](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/regulations-and-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/regulations-and-standards?u=76281980&t=0)** - [Instructor] What starts conversations about [[Privacy]] at many companies is regulatory risk. Yes, you know and I know that the North Star should be to build consumer trust and business efficiency, but the first spark of attention for privacy is typically caused by audits and fines. Data can be both an asset and a liability, and that is the case not just for your reputational balance sheet, but your financial balance sheet as well. In order to understand that, it is vital that you understand the regulatory landscape privacy operates under. Regulations are the force of law, and if violated, could mean financial penalties. It is helpful to have access to a legal department within your company or outside counsel to advise you on your responsibilities for your privacy program. Let's first look at regulations from a conversational angle. I'll show you one example of how a specific privacy law came about and how it impacts privacy and companies decades later. In 1987, Judge Robert Bork, then a judge of the U.S. Court of Appeals in the District of Columbia, was nominated by President Reagan for the Supreme Court. On the subject of privacy, Judge Bork generally believed that Americans would only guarantee the privacy protections specifically conferred upon them by legislation. Coincidentally, Judge Bork happened to frequent Potomac Video, the same video rental store as then Washington City Paper writer Michael Dolan. Mr. Dolan went to the assistant manager of this video store and asked for a look at Bork's rental history. He got the full list. This raised many privacy concerns, resulting in Congress passing the Video [[Privacy Protection]] Act, or the VPPA, in 1988. The passage of this law had implications decades later on
>
> **[1:36](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/regulations-and-standards?u=76281980&t=96)** for companies like Red Box, Netflix, and Hulu on how they could handle the viewing histories of their users. It is unlikely, even impossible I would say, that Congress even imagined companies like Redbox, Hulu, and Netflix when they passed the VPPA. Let's look at some key takeaways. Decisions you make or the government makes on privacy can have long-term and often unintended consequences. Remember, this whole saga began with a video rental store, most of whom have gone out of business but the law continues to shape how streaming services share data and are a key source of entertainment for millions of consumers like you and I. It is not common for the technical and legal domains to be in [[Flux]] at the same time, but today we are at a unique moment. Laws are changing as we speak, and technologies in the age of [[Generative AI|gen AI]] are changing as well. Consider the scale of modern computing, internet penetration, [[Data Processing]], mobile device usage, adoption of gen AI models, and all these other changes. Given all of that, you can now get a true sense of how challenging it is to create the right regulations, implement them, and adapt them to the changing world we all live in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (10), [[Privacy Protection]] (1), [[Flux]] (1), [[Data Processing]] (1)
> **Env Vars:** vppa (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Privacy and internal stakeholders](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-and-internal-stakeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-and-internal-stakeholders?u=76281980&t=0)** - [Instructor] Whether you work at a legacy top down organization or a growth-centric bottom up company, your work will impact and be impacted by many stakeholders. Your success will depend upon your ability to identify and manage internal stakeholders efficiently and smartly. Let's look at the top four. You will need to align your [[Privacy]] strategy with the business. This include product management, engineering, sales, marketing, data, AI, anybody who makes the company money. These teams have one thing in common. They have a responsibility to grow the business. Too many privacy and security leaders take on a holier-than-thou approach and end up treating the business leaders as the enemy. This approach may make you feel good at first, but get you nowhere fast. You will end up unnecessarily blocking them or they will work around you. Or worst case, both will be true at the same time. Been there, done that, still regret it. What has worked much better for me is understanding the goals of these business leaders and co-creating a roadmap with them, in partnership with them, that enables data-driven decisions and minimizes surprises for them and for me. Second, you should find common cause with stakeholders and leaders in the platform, infrastructure, and warehousing teams. Those teams need to ensure operational reliability, low latency, and rapid recovery. Their job is to reduce surprises and give the business a sense of predictability. Like yours, for example, right? They care about the following: manageable data size, efficient use of the company's IT resources,
>
> **[1:33](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-and-internal-stakeholders?u=76281980&t=93)** and that means that you can work with them on a risk management strategy. That way, your business stakeholders have to adjust just once privacy in platform rather than have to adjust twice. My not so subtle advice here for you folks is the following. Look for ways to boost business efficiency and demolish forever the stereotype that privacy is a blocker and you care about the business not one bit. You care about the business because privacy and security and efficiency and profit are all of your business and my business at the same time. Remember that. Third, work with security teams to repurpose some of their existing security tools around encryption and access management for privacy goals as well. This is not just a smart efficiency play, but also enables your organization a more comprehensive risk mitigation strategy. Finally, the legal team will be a key ally for you, but with a caveat. Legal teams are responsible for shaping the company's privacy policy and defending it in court if necessary. They can provide you the why behind privacy so that you can then work with engineering and other leaders across the company to determine the when and the how. A [[Microsoft Word|word]] of caution. In many companies, the vocabulary used by attorneys and non-attorneys can vary significantly. For example, for an attorney, the word delete would mean complete destruction of data as if it was never collected to begin with. For an engineer, removing just some of the data so as to not identify the person but keeping some of the data behind can count as deletion as well. And this is why building these internal relationships is critical and I would recommend you do it early and often as much as possible across your career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (8), [[Microsoft Word|Word]] (2)
> **CLI Commands:** make (1), find (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (2)
> **Warnings:** caveat (1), caution (1)
> **Speakers:** - [instructor] (1)

#### [Building data governance into organizational operations](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/building-data-governance-into-organizational-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/building-data-governance-into-organizational-operations?u=76281980&t=0)** - [Instructor] Oftentimes folks use phrases that sound very smart but don't always know what that [[Microsoft Word|word]] truly means. One such phrase is [[Data Governance]]. So what does data governance really mean? To my knowledge, there is no universally accepted definition of data governance for all of us to use. So let's come up with the definition of data governance and then a strategy to implement governance in your organization. Data governance refers to the ability to collect, identify, track, and protect customer data and business data for your company. It includes risk analysis around the data, policies to manage the risk, and tools to enforce those policies consistently at scale across the board. A few things stick out in this definition. First, the definition speaks to collecting data with an apparatus to understand the risk posed by the data and building a strategy to manage the risk. This means you need to know what data you're collecting, why you're collecting it, and how to enforce policies to protect the data. Second, you need to achieve these goals at scale and consistently, which means a mix of manual and automated enforcement. This process is called [[Data Classification]], and you'll want to do this as early in the collection process as possible. Practically speaking, this diagram is what search enforcement looks like. As soon as you ingest data, you could classify and categorize the data based on risk and delete any unneeded data at the outset, and then repeat these steps later before archiving the data. Besides classification and inventory,
>
> **[1:34](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/building-data-governance-into-organizational-operations?u=76281980&t=94)** data governance also requires you to look at code and software. This is especially true in the age of [[Generative AI|Gen AI]] where code powers models, which then create more data, which then feed into other models and so on. You will need tools and mechanisms to detect in real time code that violates your [[Privacy]] commitments, so as to avoid [[Data Privacy]] issues down the line. Governance is about doing the most code with the least amount of risk. It therefore needs to cover code as well as data. Data governance serves a key purpose to operationalize [[Data Management]] to reduce risk and increase efficiency. As we dive deeper into data governance, let's capture its three key components. First, data classification, second, data inventory, and third, policy enforcement. These three components all work together. We will look at all three of them later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (8), [[Data Classification]] (2), [[Microsoft Word|Word]] (1), [[Privacy]] (1), [[Data Privacy]] (1)
> **Definitions:** refers to (1), is called (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)


### 2. Privacy and Key Governance Milestones

[↑ Back to Table of Contents](#table-of-contents)

#### [Code governance](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/code-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/code-governance?u=76281980&t=0)** - [Instructor] A key component of [[Data Governance]] is code and software, since code creates and processes the data. [[Privacy]] and security leaders often focus on data, since data represents a very visible, a very tangible, a very changeable risk vector. Companies collect user data. Companies get fined when they misuse user data. Companies suffer damage when they lose data in breaches, so I'm not surprised and neither should you be that companies invest a lot of resources in adjusting their data for risk. However, just focusing on data and ignoring the risks emanating from the code is like trying to lose weight by exercising only without any care for consumption and diet. Remember, data does not appear or persist in your systems by magic or automatically, especially with the wide adoption of [[Microservices]] and [[Large Language Models (LLM)|large language models]] or LLMs, it is highly likely that your code is creating, collecting and processing a large portion of your data and at the end of the day, the context of privacy is created not just by data, not just by a customer or an engineer. It is created by the combination of data and logic, which is in the code, how your code gets used, how your data gets used, who uses it in what way, for what purpose, for how long. All of these are decisions that are governed by code that the engineers write. This code is then decentralized in several locations in your company's tech system. This code will often create logs. This code will create other code. This code will create new secrets. This score will create data movements. Therefore, I highly recommend making code coverage
>
> **[1:34](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/code-governance?u=76281980&t=94)** a key part of your data governance strategy. Let's look at some ideas on how to do that. You should scan your code as it is being written, when it is being modified, when it is being invoked by a new code. The reason? You need to understand the impact of your code on high-risk data from the perspective of your business and your tech infrastructure. This is why a governance program that focuses on data alone is insufficient. Without that code context, it only focuses on the what rather than the how and the why. These scans can also flag early on if the engineering and the legal teams need to conduct more hands-on impact assessments. That way you can prioritize reviews for projects that are high risk, but avoid unnecessary reviews that will only delay low-risk projects. This is how we move from privacy by design to privacy by code. This is how we move from privacy as compliance to privacy as innovation and finally, this is how we move from privacy as risk to privacy as a business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (8), [[Data Governance]] (2), [[Microservices]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Speakers:** - [instructor] (1)

#### [Data classification](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-classification?u=76281980&t=0)** - [Instructor] A key component of [[Privacy]] is data. Data can do many things, identify the users whose data it is, describe the behavior and preferences of those users, help build [[Microsoft Products|products]] that are attractive for those users. However, data can become a liability if you fail to correctly protect it, and that is why [[Data Classification]] is so important. Data classification is a process of sorting and ranking data based on privacy risk. When you start the classification process, you need to ask some questions about the data. What sort of data is this in terms of volume and definition? Why do we need to collect it? Why do we need to collect so much off it? What does this data tell us about our customers and our businesses? What would happen if this data were to be mishandled? In order for the classification to be practical and useful, consider how you use the data before you classify it. Remember, risk depends not just upon the data itself, but how and how often you use the data. Here is a table that provides a sample classification level. Data that is classified as restricted tends to meet some of the following criteria. It uniquely identifies a specific individual. Note that this could be a bit subjective. A name like [[John the Ripper|John]] Smith may not uniquely identify someone, but a name like mine, Nishan Bhajaria, offers a much high level of identifiability. It is possible to join this data with other data that is publicly available and that could identify a specific individual. Third, information about an individual made available in this data
>
> **[1:33](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-classification?u=76281980&t=93)** could place them in a unique bucket. Example, let's imagine an online pharmacy that stores a table containing data about people taking blood pressure medication. In the table, the consumers of the medication could be represented by random IDs rather than their name. Such a table might be proudly safe when it comes to all of New York City, given the high population of the city and the high number of people taking blood pressure medication who live in New York City. The same table, if it were to contain information about people living in a much smaller town, might represent a privacy risk since that town would have much fewer people. Additionally, restricted data tends to be individualized, while confidential data tends to be more aggregated. Therefore, restricted data should typically have tighter access controls and lower retention timelines, while confidential data could have looser access requirements and much longer retention timelines. Let's do a simple data classification exercise, since like me, you might learn better by doing and not just listening. Let's assume a pharmacy needs to analyze medical purchases so as to plan for new orders accordingly. In that database, the information that personally identifies patients and what medications they take would fall into the restricted category, and should be tied to very strict access controls and very tight retention periods. This table represents a database in which you have names of individuals listed with the medications they filled at the pharmacy. This information obviously will be classified as a restricted, however, let's assume you want to retain this data for longer chunks of time and/or allow more people to access it. We'll now use our principle of the inverse relationship
>
> **[3:05](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-classification?u=76281980&t=185)** between data specificity and data retention. To retain this data longer, we need to reduce the identification risk. This table shows how you may do that. In this table, you can see a database that has redacted the name of the patients and yet retain the data we really care about, that is, how many times specific medications were purchased in the pharmacy. The absence of personally identifiable information in this table means that you could classify this table as confidential, which means you could retain this data for longer. For example, you could use data in this table to compare December 2019 to December 2018, so as to plan for January 2020. We have now understood how data classification works. It is now time to dig deeper into [[Data Governance]] by looking at data inventory in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Classification]] (4), [[Privacy]] (3), [[Microsoft Products|Products]] (1), [[John the Ripper|John]] (1), [[Data Governance]] (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Data inventory](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-inventory?u=76281980&t=0)** - [Instructor] As we have seen before, [[Data Governance]] has three key components, [[Data Classification]], data inventory, and policy enforcement. These three components all work together. Data classification that we covered in the previous video will help tailor your data protection strategy based on [[Privacy]] risk. Data inventory, on the other hand, refers to the process of tagging the data to match its classification. These two images have explained what data inventory means. On the left, you see a disorganized stash of books. It is very hard to efficiently search for a book in this case. On the right, you see a neatly collated set of books that will make search and discovery much, much easier. These images serve as a simple metaphor for data before and after inventory. Speaking more practically, on the left, you see a mix of data types that are informative but hard to process and even harder to understand in terms of risk. On the right, you see the data broken out in a much more descriptive fashion, with privacy risk information as well. It will be far easier for you to protect the data once it is categorized. For example, let's assume you have a data deletion tool that deletes data once a user account is inactive for 60 days or more. In order for this tool to locate the data and then delete it, you will need to tag that data. Such a tag would indicate what that data field is and how long it can be retained for. This table is an example of how you can create different kinds of tags for your most sensitive data, which I'm calling level one data in this case. The table shows that for the data you wish to tag, you need to do two things.
>
> **[1:32](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-inventory?u=76281980&t=92)** First, identify whether it is business data or personal data that belongs to a user. Second, specify details around retention and preservation. When you then seek to run your deletion API, for example, it will enforce the appropriate deletion logic based on how the tags in your data match with appropriate policies. Data inventory is therefore the enforcement mechanism for privacy. Finally, timing is critical when it comes to design inventory. Many companies categorize data at the tail end of the data funnel. This could be out of sheer laziness, or lack of knowledge, or because engineers think that waiting for inventory will slow them down. I have been there and done that and made that mistake. I strongly recommend that you categorize data much earlier, as close to the collection stage as possible. If you decide to categorize data at the tail end of the funnel, it'll become very difficult to enforce automated policies for deletion and retention. The sheer volume of data will make it difficult to identify and classify the data, let alone enforce any kind of policies. Applying tags to the data at the point of ingestion will help scale privacy engineering for your organization. Let's assume, for example, that you decide that a field of data has now a lower privacy risk. All you would need to do is change the tag applied to the data and the corresponding policy would apply. Data inventory is not just about privacy, but also about business maturity. As you inventory your data and enforce policies at scale, you will start seeing some trends and changes that will often be much more revealing than many objective metrics. Here are some anecdotal and cultural science to look for,
>
> **[3:05](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-inventory?u=76281980&t=185)** based on my years of experience in this domain. First, at what point do you have so much data that protecting it becomes way too expensive? Second, what do you do when your ability to delete the data at scale is dwarfed by the sheer amount of data you collect? Third, when is the inflection point when you stop discovering data that engineers have tucked away? Fourth, what does privacy do to help [[Data Quality]]? Could you make common cause with teams that care about quality, like the [[Generative AI|gen AI]] team, for example? Remember, proactive and preemptive data inventory will help minimize risk and maximize efficiency. Let's close with the saying, early to bed, early to rise, before you use any data, remember to classify and categorize.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (7), [[Data Classification]] (2), [[Data Governance]] (1), [[Data Quality]] (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (3)
> **Cross-References:** we covered (1), previous video (1)
> **Definitions:** refers to (1), is an  (1)
> **Env Vars:** api (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Third-party risk assessment](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/third-party-risk-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/third-party-risk-assessment?u=76281980&t=0)** - [Instructor] We have talked about the value of cross-functional partnerships in [[Privacy]]. In this video, we will see how privacy teams can add value by driving a solid third party risk management process. Third party risk management is important for two reasons. First, no company can do everything by itself. Companies can only assign their finite resources to a specific set of priorities and bets. And second, as a result, companies of all sizes engage third party vendors to meet a specific goal. For example, retail companies use payment vendors, like PayPal, to process payments rather than building their own payment system from scratch. Let's use billing as an example. The verification of consumer identity, actual charging of the card, the recording of the transaction, refunds, et cetera, are all often handling by third party vendors. As a result, we have seen a significant growth of these vendors that every company now depends upon. Because of the specialized nature of their service, these vendors often lack the right data production controls, and more importantly, often are onboarded without going through a detailed risk assessment. It means that the checks and balances and controls that exist within a company for homegrown solutions, paradoxically, do not apply to these third party vendors. Your privacy program willing to account for this risk and address it. First, as part of a privacy program, you should develop a third party risk management process that is defined, documented, and tracked throughout the company's business workflows. Simply put, the risk management process should be indifferent to the idea of a perimeter. Any team, it's work,
>
> **[1:32](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/third-party-risk-assessment?u=76281980&t=92)** be it within the company's work structure, or as part of a third party should be covered by this program. One of the biggest benefits of this approach is that the companies will often identify, not just privacy risks, but also redundancies, like multiple third party vendors serving the same function. That way a privacy program can reduce, not just risk, but also cost. When budgets are tight and margins are slim, your privacy program can help you save money and not just block things. Second, your third party risk management process can serve as an outside auditor for these vendors and audit their privacy controls as well as their remediation strategies. This help companies avoid risks that are often hidden because of the immaturity of third party vendors who, as I said before, specialize in core areas, but lack privacy maturity. Finally, a functional and scalable and responsive privacy program could help the company onboard new third parties more easily and help them scale in an ongoing basis. That way, your privacy and [[Cybersecurity]] program can enable business growth in a more flexible and forward-thinking manner. I recommend putting all your third parties through this rigor to protect the benefits they provide without growing the risks. This will also help build your privacy programs' partnership muscle, and avoid new risks as the company grows on an ongoing basis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (12), [[Cybersecurity]] (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Building Privacy Tooling, Processes, Hierarchies, and Consolidations

[↑ Back to Table of Contents](#table-of-contents)

#### [Data deletion](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-deletion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-deletion?u=76281980&t=0)** - [Narrator] Diamonds may be forever, but data should not be. If you fail to delete data in a timely fashion, you run the risk of external breaches and internal misuse, and you might end up paying a lot of money to store and protect data you no longer actually need. And if all that isn't bad enough, excessive and outdated data could hurt your ability to use AI models to grow your business. Too many companies need to solve data deletion, but don't know where to start in this video. Let's you and I change that, shall we? Before we jump in though, let's define data deletion. Deletion means to physically or logically destroy identifiable user data so that it cannot be recovered or to anonymize data so that it cannot reasonably be re-identified by anyone either at your company or anywhere else. I recommend two best practices when it comes to deletion. First, regardless of the definition, deletion needs to cover systems ranging from real time [[Databases]], archival databases as well as any backup systems where a company could store their data. Second, it is critical that the engineering implementation of data deletion matches the company's publicly disclosed policy on deletion and retention. Some examples include what data is deleted, how it's changed, or what systems are impacted among others. This is important to consider since deletion is often a regulatory requirement that you have to prove during audits. In short, your deletion tools should do what your policies say you do.
>
> **[1:33](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-deletion?u=76281980&t=93)** Companies need to delete data so that they can comply with regulatory requirements like the ones spelled out in laws like the GDPR and others like it. So it's important that the [[Privacy]] team work with the legal team to define the company's deletion policy. Now, I'm not just talking about the long small print policy that only makes sense to the attorneys who wrote it. You need a deletion and retention policy that engineers can understand and privacy engineers can implement and enforce. When it comes to deletion, the privacy team needs to partner with the [[Representational State Transfer (REST)|rest]] of the company to make some decisions. The first question I would ask is, will the company use one central tool to delete data or require each decentralized team to delete their own data? Both approaches have strengths and weaknesses. If a central team builds deletion tooling, they have to account for the diverse tech stacks, services, locations and dependencies of data across the stack. They will need to focus on role and responsibilities as well. Does the central deleting tool focus on informing these decentralized teams who will then be accountable to actually do the deletion, or does the central team wish to delete the data since the decentralized teams may lack the bandwidth to delete the data themselves? The first approach may require additional validation by the central team to make sure that the decentralized teams actually deleted the data correctly. The second approach runs the risk that the central tooling may delete data incorrectly or inconsistently, which could then lead to downtime and disruptions across the company. Other details you may need to account for is that companies may need to preserve some data for tax
>
> **[3:06](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-deletion?u=76281980&t=186)** and litigation purposes. Additionally, it may be hard for the company to delete some data since you may not know exactly who collected it and for what purpose. And this kind of makes my point around too much collection being bad for business In closing, as you can see, something as simple sounding as deletion can actually be very complex, which is why it is critical to think of deletion as an extension of your overall [[Data Governance]] initiative.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (3), [[Databases]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Data Governance]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** gdpr (1)
> **Speakers:** - [narrator] (1)

#### [Data sharing](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-sharing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-sharing?u=76281980&t=0)** - [Instructor] For many companies, if not all, [[Data Sharing]] is key for business growth, but can also lead to [[Privacy]] risks. A key challenge for your program would be to build privacy controls, so that's to share data as efficiently and safely as possible. I've seen many companies cause unnecessary friction that slows down legitimate sharing of data. When that happens, your creative engineers will find ways to work around and share data anyways, which defeats the purpose of having those controls to begin with. I would know because I used to be one of those engineers. There are, of course, risks inherent to data sharing, but there are some that stand out for me. First, once data actually leaves your company, you can exert very little, if any, control over what happens to that data. Second, the entities you share data with may not have meaningful privacy controls. Third, whoever you share data with could have more sophisticated abilities to process that data than you do. Fourth, it often takes a while to fully understand the implication of data sharing. So in this case, no news is not necessarily good news. De-risking the sharing of data requires two things. First, knowing why the data needs to be shared to begin with. Second, understanding how you can anonymize the data and mitigate risk before you share it to begin with. Let's look at some ideas on how to share data in a privacy-conscious fashion. Applying these ideas will be a lot easier if you can classify and inventory your data as early in the process as possible, which makes clear why [[Data Governance]] is so important. When it comes to data sharing,
>
> **[1:33](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-sharing?u=76281980&t=93)** I have a key guiding principle. The more precisely identifiable the data, the tighter the privacy controls need to be around data sharing. This means that precise data should be short-lived and less accessible. By contrast, more aggregated data can be retained for a longer chunk of time and be available to more people. There is no fixed codified set of techniques for safe data sharing, but let me give you a few to start with. You should ensure that any entity you share data with follows best practices like the following. First, deleting unique identifiers in precise times in geolocations after an agreed upon period, like 90 days, for example. Second, dispose of identifiers and optionally replace them with internal uniquely built values. Not maintaining individual data used solely for aggregation. Once data is aggregated, the individual records should be deleted. Keeping individual level data in memory only, and only anonymized data to risk. These will all help de-risk the sharing significantly. And here's a key tip. There may be situations where you want to identify somebody whose data you have shared. And for those use cases, you may need to create a table that links their external IDs, like passport number, for example, to the internal identifiers. If you do this, you'll want to carefully manage access to this table so as to prevent [[Privacy Issues]]. Let's look at an example. In this visual on your screen, first, table A is the internal table with your customer data linked to the user's passport number. As you know, the passport number uniquely identifies everyone without a doubt as to who they are, which is why when you share this user's data externally,
>
> **[3:07](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/data-sharing?u=76281980&t=187)** you will want to create an ID specific to that vendor or that partner. You will want to create a new table with the data you used to share, but linked to this customer internal ID, not the passport number. That way, if this data were to leak because of somebody's mistake, it'll be much harder to associate the data back to this specific user. This is the table on the far right, that is table C, and the table in the middle is table B that links the passport number to this custom ID. This is the table that will require tight and manageable access since the table is the bridge between the full data and the anonymized data. That way you can share anonymously and yet identify internally. Real-world scenarios will have a lot more complexity, but this gives you a logical foundation to build on. Given the decentralized nature of modern tech stacks and data, there is no one technique to address privacy issues when it comes to sharing. Therefore, I would strongly recommend applying smart and flexible privacy controls for data sharing. This will help grow your business and shrink your privacy risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Sharing]] (7), [[Privacy]] (7), [[Privacy Issues]] (2), [[Data Governance]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Build vs. buy](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/build-vs-buy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/build-vs-buy?u=76281980&t=0)** - [Narrator] For your [[Privacy]] program to reduce risk, you need tools and automation. Otherwise, you'll end up with feel good force principles, but little change in your risk and trust posture. You need to make some key decisions, like what tools to build, who builds them, when to build them, how to measure them, etc. There is, however, a much more important decision that needs to be made that too many companies delay often until it's too late, and that is build versus buy. So in other words, should you build privacy tools in-house or is it safer and more cost effective to buy them from a vendor? You shouldn't think of these as mutually exclusive, though. Many companies often go for a combination with differing levels of success. I'll walk you through the trade offs in this build. We were debate that I've personally encountered throughout my career. My hope is to provide you with these anecdotal insights so that you can consider them carefully before you make your decision. First, the tools you build for revenue and engagement and growth are typically owned and managed by a handful of teams with bespoke processes and tech stacks. This allows for focus and expertise. Privacy tooling, on the other hand, requires contributions from and creates impact upon several independent teams. This often leads to a lack of dedicated ownership and insufficient expertise. You should account for this before building privacy tools for your company. Set reasonable expectations around coverage and responsiveness, and also buffer your teams with contractors who can provide redundancy in the event of attrition. Second, privacy tooling serves several diverse customers
>
> **[1:34](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/build-vs-buy?u=76281980&t=94)** ranging from enterprise partners, regulators, internal engineers, attorneys, auditors, etc. Building for so many stakeholders requires a mix of breadth and depth that many engineers lack. Third, as companies grow, shrink, and acquire and diversify, their business model, long-term goals and risk-appetites all shift. These changes of inevitable effects on tooling that span the enterprise. The challenge for privacy tools is even greater in these situations because these tools have to enable compliance with regulations as well as adapt to business changes. Fourth, too many third party solutions have flooded at the market in recent years. However, just as volume and wisdom are not the same thing, this glut of privacy tooling does not always mean high quality options. These tools are often poorly built, tend to lack detailed context, and often pitched incorrectly and fail to adapt after landing in a initial set of customers and funding. My advice involve your privacy legal teams and engineers to wet third party solutions from the get go. Buying third party solutions is like buying a secondhand car. There is no substitute for popping the hood open and getting your hands dirty. Finally, too many companies make do with manual processes for privacy, hoping to defer privacy tooling for much later. But when a crisis arrives, companies panic and buy tool hoping that this tool will be the catch-all panacea to all their privacy problems at one go. This is like going to the grocery store on an empty stomach. The results are rarely, if ever, good. My advice? Plan, plan, plan ahead.
>
> **[3:06](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/build-vs-buy?u=76281980&t=186)** Do your research, check with allies in the industry for their experiences and feedback. Hopefully you now have a decent starting point on how to plan for the build. We by debate when it arrives at your doorstep.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (11)
> **CLI Commands:** make (3)
> **Definitions:** in other words (1)
> **Speakers:** - [narrator] (1)

#### [Decentralized vs. centralized](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/decentralized-vs-centralized?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/decentralized-vs-centralized?u=76281980&t=0)** - [Instructor] Building [[Privacy]] tooling in-house or buying third party off the shelf tools is a debate with no easy answers, but another big decision awaits you as you shape your privacy program, and that's team structure, decentralized versus centralized. Let me explain. I've said this often, modern innovative companies and increasingly legacy companies as well are building teams focused on depth rather than breadth. They optimize for specialization and domain expertise over cross-functional coverage. This presents two challenges for privacy. First, many decentralized engineering teams have their own tech stacks, release pipelines, and roadmaps. This speeds up their innovation, but often creates disconnects that could cause downstream [[Privacy Issues]]. Second, engineers and product managers are often incentivized to focus on their key deliverables and metrics. They have little or no incentive to dedicate time to projects that while critical for compliance and trust, are not part of their own roadmap and promotions. An idea I often hear about but have rarely seen work as decentralized time allocation. This is where the company, in order to spread the pain around equally forces engineering teams and product teams to allocate a certain percentage of their time for privacy automation. On the plus side, this creates a sense of shared ownership and shared community knowledge across the company. It also forces teams to work together where otherwise they'd be disconnected in their silos and only come together during a crisis. On the downside though, forcing all these teams to actually coordinate their efforts
>
> **[1:33](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/decentralized-vs-centralized?u=76281980&t=93)** requires program management expertise and executive sponsorship that is very hard to continuously sustain. Also, when push comes to shove, engineers will almost always prioritize their own features unless there is a top-down aggressive mandate. This is why the centralized approach is more scalable, flexible, and sustainable, especially when paired with a decentralized approach as well. When it comes time to operational tooling, having a centralized team is a safer bet for three key reasons. First, this team can own the tooling for the most critical and common use cases across the company. Second, they can build variations of tooling to support and enable diverse stakeholders across the board. And third, they can align with other teams like [[Legal Compliance]], GRC, et cetera, and build tooling that can meet multiple goals for compliance at once. This team can grow and shrink in line with business needs. I have often approved rotations where engineers from non privacy teams who join my centralized privacy teams to build more full stack, cross-functional expertise. I have also seen engineers reporting into me in a central privacy team join other teams across the company based on connections they made while helping other teams build privacy tooling as well. So this centralized team structure has business benefits beyond privacy as well. Just as it makes business sense to centralize technical privacy operations, it is critical to decentralize strategic privacy sponsorship. Let me explain. You should consider building a horizontal privacy team of varied senior leaders that span the business end to end. This team would include leaders from engineering, marketing,
>
> **[3:08](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/decentralized-vs-centralized?u=76281980&t=188)** finance, platform, storage, et cetera. This model offers two big advantages. First, since privacy risks and tooling will eventually affect most teams anyways, it makes sense to proactively educate these leaders to the privacy domain. Second, rather than be stuck in reactive mode, these leaders can remain aligned with privacy risks and gaps and help make the case for funding and other support on an ongoing basis. This is better than the central privacy team becoming the sole face of all privacy asks end to end again and again. While each company is different, having these flexible models will help address privacy proactively, continuously, and scalably rather than be stuck in never-ending crisis mode that affects many companies to this day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (18), [[Privacy Issues]] (1), [[Legal Compliance]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Env Vars:** grc (1)
> **Speakers:** - [instructor] (1)

#### [Privacy leadership and the chief privacy officer](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-leadership-and-the-chief-privacy-officer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-leadership-and-the-chief-privacy-officer?u=76281980&t=0)** - [Instructor] Let's talk about the role of the chief [[Privacy]] officer, or the CPO. This is a new-ish role that is distinct from the role of the chief information security officer, or the CISO. CISOs typically focus on infrastructure security, while CPOs build a privacy program using the security apparatus as a starting point. I've led several programs and advised several others, and understanding these two roles is pretty critical. Done correctly, you will benefit from the security apparatus a good CISO will put in place when you try and build a privacy program with tools, training, and practices. Done poorly, though, you might end up with turf wars and confusion from both the privacy teams and the security teams, not to mention, you will create a poor customer experience for your internal stakeholders. So let's look at what the CPO will need to accomplish and then you can decide to fill this role accordingly in your company. The CPO will be your chief privacy advocate across the company. They have three key responsibilities. Fist, convince [[Executive Leadership]] that your customers and their data should be treated with trust and transparency. Second, benchmark based on industry trends and regulatory sentiment so that privacy is top-of-mind in [[Product Design]]. Third, establish credibility that privacy is the right thing to do, both as a matter of principle, as well as for business long-term. Remember, there is a big difference between being an advocate and a crusader. Let's look at the role in more detail. First, the CPO is a translator, like a bridge between islands. I've led privacy and trust programs at many companies and the first responsibility of the CPO is to connect the different parts of the business together and make sure that the company
>
> **[1:32](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/privacy-leadership-and-the-chief-privacy-officer?u=76281980&t=92)** has a coherent privacy message and a strategy. The CPO must ensure that [[Executive Leadership]] is an active participant in help resolving any disagreements. Remember, these leaders are very busy and they work with their feet. In my own career, on one occasion, the finance team wanted to retain all credit card data, even after the customer had added a new credit card. I had to ask some awkward questions. Why do we need more than one valid credit card for a customer? When you go to a store and buy groceries, the clerk doesn't need two cards today. Asking these questions diplomatically and setting the stage for the finance team and the legal team to work it out is one example of how a privacy leader can help your program succeed. Next, converting privacy principles to actionable guidance. A key responsibility of the CPO is to partner with others to build artifacts and standards. These will be the practical interpretations of the first principles a company creates. For example, if the executive leaderships says we will retain only the data we know we need, an example of the standard would be to set a very specific expiration date on customer retention tables based on when the customer last used the company's services. Finally, the CPO is the educator in chief. Remember, privacy is new, subjective, and contextual and not always top-of-mind for the company's leaders. The CPO needs to evangelize, educate, and amplify the message to create a privacy-aware culture across the company. Think of it this way. The modern chief privacy officer is like an engineer for the attorneys and the attorney for the engineers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (14), [[Executive Leadership]] (2), [[Product Design]] (1)
> **Env Vars:** cpo (9), ciso (2)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data Subject Access Requests (DSARs) and rights management](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/dsar-rights-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/dsar-rights-management?u=76281980&t=0)** - [Instructor] When it comes to [[Privacy]], security, and customer transparency, the conversation on the regulatory side is often about empowering customers. For far too long, it has been believed and it has been true that companies that collect customer data have a lot of power. And that's because they have the data, the ability to join that data to other data, and comprehend more about the customers than the customers themselves may appreciate at times. In theory, the principle was that while using this data, companies could offer capabilities and [[Microsoft Products|products]] to their customers for free or very low cost, and at the same time, make sure that those offerings were personalized for that customer, win-win, right? Well, up to a point. Because of the ad tech industry and bad actors in the tech industry, it became clear that there was a massive imbalance of power. The customers didn't always appreciate which parts of their data belonged to the companies. The companies struggled to create good governance and often struggled to protect data. It was from this power imbalance that customer rights were created in laws like the GDPR and the CPRA. You may have heard of phrases like the right to be forgotten, the right to transparency, et cetera. These basically offer the customer the right to have their data deleted by the companies that collect the data to begin with. They also offer customers the right to request a copy of their data held by companies. This is known as a Data Subject Access Request or D-S-A-R, DSAR. What does this mean for you as a company? It basically means that any customer could email you and ask you for a copy of all the data you have about that customer,
>
> **[1:33](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/dsar-rights-management?u=76281980&t=93)** and then they could make the exact same request with regards to deletion. So in other words, any data you have about the customer can be requested at any moment for deletion or export, and these are both high risks for your company. Exporting data or deleting data are both irreversible actions. If you delete data in an incomplete fashion or you delete data in a way that cannot be verified, you run the following risk. Customer A emails company B and says, "Delete all my data." Company B deletes all their data, or at least thinks that they've done that, but company B lacks [[Data Governance]]. This could be because they'd lack [[Data Classification]] or they lack data inventory, but what this does mean is that the odds of them deleting data incorrectly are now very high. As a result, if they were to then get a request for a DSAR by the same customer, you might end up in a situation where you discover data after the fact that you should have deleted in the first place. Now you have to export that data to the customer, essentially handing the customer evidence that you did not correctly delete their data in the first place. This is not going to be a silent failure. It's going to be a failure that's going to look bad from a compliance perspective, and it's going to damage your company's reputation. It does not have to be this way. Once you have solid data governance in place and automated DSARs, you can locate and export data to fulfill all your export obligations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (2), [[Privacy]] (1), [[Microsoft Products|Products]] (1), [[Data Classification]] (1)
> **Env Vars:** dsar (2), gdpr (1), cpra (1)
> **Definitions:** known as (1), basically means (1), in other words (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-a-privacy-program-in-the-age-of-genai/next-steps?u=76281980&t=1)** - Thank you so much for taking this course. I hope you found the lessons around [[Data Privacy]] in the age of [[Generative AI|gen AI]] useful and educational. But data and models don't stop growing and learning, do they? And so it should be with our own knowledge and learning as well. I would recommend digging into other [[LinkedIn]] Learning courses, especially ones that combine [[Data Management]] and innovation with security and [[Privacy]]. You will learn not just how to innovate with data, but to do so responsibly and smartly. Please ask me questions, and I'll answer other questions you may find in the course page in the Q&A section. This will help collective learning in the community setting, which is in-keeping with the spirit of the open and mutually beneficial internet we all care about. Thank you again for your time and support, and I'll see you in my next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Privacy]] (1), [[LinkedIn]] (1), [[Data Management]] (1), [[Privacy]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - thank (1)


## Instructor

- [[Nishant Bhajaria]]

## Skills Covered

- Privacy Compliance
- Data Privacy
- Privacy
- Governance, Risk Management, and Compliance (GRC)

## Path Context

### In [[Build a Privacy Program]]
← [[Understanding and Prioritizing Data Privacy]] | **3 of 5** | [[Privacy, Governance, and Compliance- Data Classification and Inventory]] →

## Appears In

- [[Build a Privacy Program]]

## Related Courses

_Courses sharing skills:_

- [[Understanding and Prioritizing Data Privacy]] — Privacy, Privacy Compliance, Data Privacy
- [[Privacy in the New World of Work]] — Privacy, Data Privacy
- [[Privacy, Governance, and Compliance- Data Sharing]] — Privacy, Data Privacy
- [[Privacy, Governance, and Compliance- Data Classification and Inventory]] — Privacy, Privacy Compliance
- [[GitHub Foundations- Privacy, Security, and Administration]] — Privacy

---

[↑ Back to top](#)