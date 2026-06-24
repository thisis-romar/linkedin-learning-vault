---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-data-collection-for-ai-implementation
url: "https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation"
duration_minutes: 53
duration: 53m
level: Intermediate
updated: 10/29/2025
learners: 726358
skills:
  - Data Collection
  - Responsible AI
  - Artificial Intelligence (AI)
  - Data Ethics
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE6Tsl_hateww/learning-public-crop_675_1200/B4EZl4cdeBGoAY-/0/1758662352119?e=2147483647&amp;v=beta&amp;t=JcBECtFfdSuCQsLQRDO_Z2ofJeEz7q8tE3yWYbFJmHw"
linkedin_topic: Data Science
learning_paths:
  - '[Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)'
prev_courses:
  - '[Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md)'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Collection","position":6,"total":6,"prev":"Complete Guide to Python for Data Engineering- From Beginner to Advanced","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/data-collection
  - skill/responsible-ai
  - skill/artificial-intelligence-ai
  - skill/data-ethics
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Ethical%20Data%20Collection%20for%20AI%20Implementation.md)

![Ethical Data Collection for AI Implementation](https://media.licdn.com/dms/image/v2/D4E0DAQE6Tsl_hateww/learning-public-crop_675_1200/B4EZl4cdeBGoAY-/0/1758662352119?e=2147483647&amp;v=beta&amp;t=JcBECtFfdSuCQsLQRDO_Z2ofJeEz7q8tE3yWYbFJmHw)

# Ethical Data Collection for AI Implementation

> For any AI implementation, data collection is the first major computation stage within the AI development lifecycle. The quality, trustworthiness, and long-term value of AI-powered products hinges on incorporating ethical practices, which includes maintaining transparency and accountability. Ethical considerations include respecting the rights and privacy of individuals whose data is being collect

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation) | 53m | Intermediate | 726K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Ethics comes before the data](#ethics-comes-before-the-data)
- [**1. Balancing Effectiveness and Ethics**](#1-balancing-effectiveness-and-ethics) (4 videos)
  - [Defining ethical objectives and key results](#defining-ethical-objectives-and-key-results)
  - [Developing a data governance framework](#developing-a-data-governance-framework)
  - [Implementing data protection measures](#implementing-data-protection-measures)
  - [Selecting data collection tools](#selecting-data-collection-tools)
- [**2. Ethical Strategies for Responsible Data Collection**](#2-ethical-strategies-for-responsible-data-collection) (4 videos)
  - [Obtaining explicit and ongoing data collection consent](#obtaining-explicit-and-ongoing-data-collection-consent)
  - [Protecting privacy through anonymization and encryption](#protecting-privacy-through-anonymization-and-encryption)
  - [Mitigating biases in data](#mitigating-biases-in-data)
  - [Following ethical review processes](#following-ethical-review-processes)
- [**3. Practical Concerns Blocking Responsible Data Collection**](#3-practical-concerns-blocking-responsible-data-collection) (4 videos)
  - [Violating data privacy regulations](#violating-data-privacy-regulations)
  - [Lacking an established data strategy](#lacking-an-established-data-strategy)
  - [Choosing the right tools and configurations](#choosing-the-right-tools-and-configurations)
  - [Mishandling data assets and the fear of messing up](#mishandling-data-assets-and-the-fear-of-messing-up)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Ethics comes before the data](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/ethics-comes-before-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/ethics-comes-before-the-data?u=76281980&t=0)** - As companies jump into integrating AI, one of the most overlooked steps I see is the lack of a strong [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) process. If this isn't stable, then your AI tools won't receive valuable information. Hi, I'm Brandeis Marshall, a former college professor, turn [Data Ethics](../../Skills/Data%20Science/Data%20Ethics.md) consultant. I designed this course to help you and your teams embrace ethical data collection management. Ready to roll? Okay, let's hop in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (2), [Data Ethics](../../Skills/Data%20Science/Data%20Ethics.md) (1)
> **Speakers:** - as (1)


### 1. Balancing Effectiveness and Ethics

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining ethical objectives and key results](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/defining-ethical-objectives-and-key-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/defining-ethical-objectives-and-key-results?u=76281980&t=1)** - Just a few years ago, ethical [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) wasn't on most companies' radars. What changed customer demand? See, 85% of customers want to know a company's data policies before buying. And nearly 50% of customers will switch brands if policies aren't clear. Wow, right? Now, companies are investing in building ethical data practices so they can maintain customer trust and loyalty. So we'll start where companies should start by describing clear ethical guidelines for data collection and usage. These involve the data collection process that includes clarity, integrity, and [Accountability](../../Skills/Data%20Science/Accountability.md). The principles of ethical data collection, transparency, [Privacy](../../Skills/Data%20Science/Privacy.md), and informed consent. And these principles ensure the data is collected responsibly and with respect for individual's rights and autonomy. Each principle aligns with a specific guideline. Let's map these out and explore how each guideline is implemented. We'll also suggest a battery of questions each team can respond to periodically. First up, there's transparency. It intends to provide clear explanations of data is collected, stored, and managed.
>
> **[1:37](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/defining-ethical-objectives-and-key-results?u=76281980&t=97)** This clarity gives transparency a tangible and concrete lens for the team members who handle data. Your team can then document responses and periodically revise the following questions. What's the source of the data? What type of data will be collected? How much data will be needed? And what's the internal data procurement policy? The next principle is privacy. Protecting an individual's privacy involves limiting data collection to what is necessary for the slated purpose. Guidelines that assess the company's privacy coverage must uphold the company's integrity standards and practice. Your team needs to understand the circumstances around the collected data. It's important to have comprehensive answers to these questions like, what are the legitimate reasons for data collection? Are they adhering to legal and ethical standards with your industry? Where will the data be recorded? Where will the data be stored and for how long? Who has access to the data within the company and when? And last, we have informed consent. This is the stickiest of the principles. Your company has to figure out how
>
> **[3:13](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/defining-ethical-objectives-and-key-results?u=76281980&t=193)** to inform its customers about what data is collected, why it's collected, and how it will be used. I've gathered common customer questions that your company will most likely need to answer. It'll help them fill any gaps in your company's external data policy. So here are the questions. How are consent and permission of use obtained and reviewed? Will the data be shared externally? And what and how will it be shared? What are the [Data Security](../../Skills/Data%20Science/Data%20Security.md) measures implemented? How are the companies addressing the issues related to their data protection impact assessment and not introducing additional harms in the process? We've just grounded ethical data collection principles and guidelines that are anchored in real questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (6), [Privacy](../../Skills/Data%20Science/Privacy.md) (4), [Accountability](../../Skills/Data%20Science/Accountability.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1)
> **Speakers:** - just (1)

#### [Developing a data governance framework](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/developing-a-data-governance-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/developing-a-data-governance-framework?u=76281980&t=0)** - Okay. Real talk. How many [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) frameworks or policies have you heard about? How many have you helped create, and how many have you helped enforce? As a data nerd since before [Google](../../Glossary/Service/Google.md), the numbers that come to my mind decrease sharply with each question. According to a 2024 study, 71% of organizations reported having a data governance program, up from 60% the previous year. What we're doing in this video is sharing the high level components that should be part of your company's data governance framework. And honestly, like you've seen with most other policies, it requires more than just defining and documenting processes. Let's start with point one. Be transparent about the direct benefits of having a data governance policy, especially for your company. On top of the leaderboard is protecting intellectual property. Keeping your company's data reliable and accurate makes it more usable to help the business reach its revenue goals. Data insights turn into data assets that then turn into sellable [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services for your customers. Now that we're clear about our motivation
>
> **[1:34](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/developing-a-data-governance-framework?u=76281980&t=94)** and incentives, we can move on to point two, the nuts and bolts of data governance policies. [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), integrity, and [Security Metrics](../../Skills/Cybersecurity/Security%20Metrics.md) need to be identified, implemented, and managed by data experts across the company. One way I've seen this represented well is adding conceptual models to the policy. There's a lower likelihood of ambiguity as to which metrics are important and which ones are considered acceptable scores. Frankly, those who enforce this data governance policy need to know what's considered success. If they don't have a way to establish normal operating activities, then they won't be able to recalibrate their priorities. Governance won't be reached or sustained. And this brings us to point three. You'll have to outline the feedback and revision schedule given the ongoing data usage, accessibility, and compliance activities. Let's consider the iPhone as our example. I have an iPhone 11. Yeah, I know it's old tech from 2019. Each year I spend more and more time creating enough space to download and install a major software update. And several times a year, I'm offloading apps
>
> **[3:10](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/developing-a-data-governance-framework?u=76281980&t=190)** and downloading media files to my laptop to install the smaller software patches. How do you think Apple is able to create these software updates and patches? They monitor and track data changes and performance. They have a comprehensive set of assessments, gap analysis structures, and feedback processes. All data governance policies should include this level of detail. So with this structure framed out, you now have a better idea of how to help revise your company's policy. Next, you'll learn a few measures to better protect sensitive data within your company's ecosystem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (7), [Google](../../Glossary/Service/Google.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1), [Security Metrics](../../Skills/Cybersecurity/Security%20Metrics.md) (1)
> **Code Identifiers:** iphone (2)
> **Prerequisites:** install (2)
> **Speakers:** - okay (1)

#### [Implementing data protection measures](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/implementing-data-protection-measures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/implementing-data-protection-measures?u=76281980&t=0)** - Let's now turn our attention from discussing theory to practical implementations. Protecting sensitive data is one of the first major tests for any [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) system. This practice started in the 1960s when digital passwords were invented. Over the decades, keeping data safe and away from bad actors has become an essential part of [Business Operations](../../Skills/Data%20Science/Business%20Operations.md). Why? Well, it takes an average of 194 days to identify a data breach and can take 28 days less when sufficient countermeasures are maintained. So let's walk through three common data protection countermeasures. Each approach works as a piece of the puzzle to ward off potential invaders. We'll begin with the most well known and well-used security methods. Requiring login credentials. Known in tech circles as access control, these measures regulate who and what can be viewed, used, and modified within the computing system. Identification comes first. That's your username, for example. Then your identity needs to be verified, usually through a password or two, and then and only then will the resources you've been granted access to be available to you.
>
> **[1:36](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/implementing-data-protection-measures?u=76281980&t=96)** The second step, verifying your identity, is where there's a heavy and continued concentration of effort. And that leads to the second line of defense, implementing encryption [Algorithms](../../Skills/Software%20Development/Algorithms.md). Data encryption scrambles readable data into an unreadable data format. The authorized way to decrypt this is to have the specific digital combination called a private key. Strong passwords, two factor authentication, and other user controlled security measures make it harder to achieve unauthorized access. The third countermeasure is anonymization. Here the goal is to transform PII so that it's very hard to identify individuals. PII can be information that directly or indirectly distinguishes a person, like customer IDs. One popular technique is data masking, which replaces the original data with fake values. Think of your utility bill that you access using your assigned unique, non-identifiable customer id. Another familiar technique is data erasure where content is permanently deleted and unrecoverable. For example, when a team is creating an external dataset, they would remove info like customer's names,
>
> **[3:14](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/implementing-data-protection-measures?u=76281980&t=194)** home addresses, and emails. These protection measures are just a sampling of how data assets are fortified by your company, your team, and your customers. It's kind of like a home security system that ensures intruders have difficulty entering through most of the doors and [Windows](../../Glossary/Service/Windows.md). As a house can be vulnerable to a determined thief, so is your data that's stored in an online system, but the good news is that there are tools to collect data more ethically while keeping it as secure as possible. Let's head to the next video so you know what to look for when making these selections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Business Operations](../../Skills/Data%20Science/Business%20Operations.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Analogies:** for example (2), kind of like (1)
> **Env Vars:** pii (2)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - let (1)

#### [Selecting data collection tools](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/selecting-data-collection-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/selecting-data-collection-tools?u=76281980&t=0)** - One activity that the tech industry is good at is releasing a new tech tool. While it's hard to pin down how many data and AI tools are released every year, [Google](../../Glossary/Service/Google.md) alone shared 60 of its biggest AI announcements in 2024. Not one of them focused on ethical or responsible data practices, except for a brief mention of new [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) resources for developers and researchers. And here lies the perpetual problem. You don't know which handful of these thousands of tools could help you, your team, and your company be better stewards of AI. When choosing [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) tool support, the questions cover a range of ethical considerations. Which tools stay in compliance with data protection laws? How is user consent handled? Which ones enforce strong [Privacy](../../Skills/Data%20Science/Privacy.md) controls, and how user friendly is the interface? While I'd love to give you recommendations, I can't in good conscience do that without knowing the answers to your needs and potential tool uses. I'll share, in this video, important capabilities, you should make your top priority. Let's start with point one.
>
> **[1:36](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/selecting-data-collection-tools?u=76281980&t=96)** Outline the ethical safeguards you and your team deem most important, especially in data handling. The key features I'd suggest are, granular data access controls, versatile anonymization techniques, and robust consent management. Remember, it's best to settle on the boundaries you want to enforce before searching for tools. So let's say you now have a good idea of your tool criteria. What's next? This leads us to point two, a [Data Management](../../Skills/Software%20Development/Data%20Management.md) platform that's aligned with your needs. Of course, having great data organization features are a must, but go deeper. You may want data encryption protocols to follow ethical standards for your industry, and be above expectations in terms of compliance procedures. You may also want to ensure that the audit trail functionalities give detailed reports. We all know that there is nothing worse than troubleshooting an issue with vague, and therefore useless output logs. Okay, we've reached our third and final point, identifying tools that respect privacy and legal standards by default.
>
> **[3:13](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/selecting-data-collection-tools?u=76281980&t=193)** For instance, a popular data collection activity includes web scraping. While I don't recommend it, be aware that there are web scraping rules such as following robots.text file instructions, and not infringing on any website's terms of service. Clear documentation and built-in compliance mechanisms for these tools make it easier to monitor how responsible you're being with the data collected. Hope these tips give you helpful insights into picking good tools for you and your team, and know that these resources can change over time, as your team's needs change, tools' usefulness shifts, and ethical standards evolve. Reviewing your data collection tools every 18 months or so keeps you accountable in maintaining high ethical standards, and that only contributes to the company's positive reputation. Next, we'll take a deeper look into how to collect data with more intentionality. We'll cover consent, privacy, bias, mitigation, and ethical review. See you in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (3), [Privacy](../../Skills/Data%20Science/Privacy.md) (3), [Google](../../Glossary/Service/Google.md) (1), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Best Practices:** it's best to (1)
> **Warnings:** be aware (1)
> **Speakers:** - one (1)


### 2. Ethical Strategies for Responsible Data Collection

[↑ Back to Table of Contents](#table-of-contents)

#### [Obtaining explicit and ongoing data collection consent](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/obtaining-explicit-and-ongoing-data-collection-consent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/obtaining-explicit-and-ongoing-data-collection-consent?u=76281980&t=0)** - As a computer science educator and researcher, my own introduction to the data industry didn't come with a manual. I gave no thought to where the data inputs came from or how the data outputs were used. I considered my work like a closed circuit. I had blinders on, and honestly, that's how I was taught. If data is accessible to you, it's available for you to use in any part of the computing work, but we know better now. Data ultimately originates with people, with us. It's our human actions, interactions, observations, and opinions that are packaged as data assets. This drives companies to obtain our consent, to repurpose as their data assets. From a technologist perspective, we want to be confident that the data we're using has been cleanly collected, that the people behind the data understands the use of their interactions, the potential risks and benefits, and their agreement to participate. [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) consent is done in three major phases, so let's cover them here. In phase one, companies provide a disclosure of information notification.
>
> **[1:34](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/obtaining-explicit-and-ongoing-data-collection-consent?u=76281980&t=94)** It's typically a document crafted to be clear, continuous, conscious, and coercion free by a legal team in collaboration with the IT division. All this means is that there's ongoing, voluntary, enthusiastic mutual agreement without pressure or manipulation between the company and its customers. This document usually includes a description of the data to be used or disclosed, an explanation of the potential benefits and risks, and where the information may be disclosed. It can also share the expiration date for the authorization and how the company is protecting users' confidentiality. In phase two, companies confirm whether or not any informed consent is understood. That's right, notification isn't sufficient. You'll look for your customers to explain, in their own words, what they understand. It may come in a form of simple question-answer, like yes-no, agree-disagree-unsure, or multiple choice questions. Another powerful way to assess understanding involves allowing your customers to ask questions. Their concerns can be known upfront and addressed through an FAQ site, for example.
>
> **[3:10](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/obtaining-explicit-and-ongoing-data-collection-consent?u=76281980&t=190)** And the final phase focuses on documenting your customers informed consent. Most often, confirming consent is in the form of a signed and dated document. Other options include verbal and implied consent. Verbal consent is rather straightforward, but implied consent isn't as obvious. It's inferring consent from your customer's actions like completing one of your surveys. Although obtaining informed consent requires adding steps to your data collection process, it's doing good business. All in all, there are more pros than cons when it comes to data collection consent. It builds trust, enhance transparency, and reduces legal risks. Let's continue sharing ethical strategies and discover ways to better preserve your customer's [Privacy](../../Skills/Data%20Science/Privacy.md) up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (3), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Env Vars:** faq (1)
> **Analogies:** for example (1)
> **Speakers:** - as (1)

#### [Protecting privacy through anonymization and encryption](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/protecting-privacy-through-anonymization-and-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/protecting-privacy-through-anonymization-and-encryption?u=76281980&t=0)** - [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) seems like the easier step once you start implementing data protection protocols. Am I right? But now the issues around data handling surface and it becomes complicated very fast. Deciding how to protect personally identifiable information is up for debate. Should your team work on de-identifying the data, encrypt it or both? And what must your team do to stay in [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) with existing and impending stipulations? We have to stay up to date on an alphabet soup of regulations like GDPR, CCPA and HIPAA. Your risk mitigation plan should focus on integrating [Privacy](../../Skills/Data%20Science/Privacy.md) considerations into the design and development of systems and processes. So let's compare the purposes of data masking and encryption techniques. We'll also walk through synthetic data generation use cases since it's becoming more popular. And we'll wrap up with one of the most effective defenses to online user identities, improving employees' privacy awareness and training. Let's begin with the go-to ethical data collection strategy. It's a combination of data masking,
>
> **[1:36](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/protecting-privacy-through-anonymization-and-encryption?u=76281980&t=96)** which substitutes details with fictional content and data encryption that digitally scrambles sensitive information. Masking data is typically performed for customers' names and addresses, while encryption is more for passwords, online transactions and so on. Either way, encryption is reversible with the correct key, but masking isn't. Which information to mask and encrypt is most likely determined by another business unit and auditors since masking doesn't pass most audits. On top of data masking and encryption, your team could consider using synthetic data generation. For heavily regulated industries like [Banking](../../Skills/Software%20Development/Banking.md) and insurance, it's become an accepted option to test the robustness of data masking and encryption methods while preventing data exposure. And this last strategy of improving employees' privacy awareness and training should maybe be the first line of defense. Studies have reported that over 60% of [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) issues stem from internal threats, some of which include accidental mishandling of data. This can happen inadvertently.
>
> **[3:13](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/protecting-privacy-through-anonymization-and-encryption?u=76281980&t=193)** You've kept a VPN session open, or you've shared sensitive company information using an open or public network. So building your data privacy awareness is highly recommended. Once a year is the usual frequency, but if you can do it every three months, that would be better. We'll now turn our attention to a necessary and much discussed ethical AI topic, bias identification and mitigation. It may be a little uncomfortable for some, but it'll have you leaning into your humanistic side. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (3), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (2), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (2), [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** gdpr (1), ccpa (1), hipaa (1), vpn (1)
> **Best Practices:** recommended (1)
> **Speakers:** - data (1)

#### [Mitigating biases in data](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mitigating-biases-in-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mitigating-biases-in-data?u=76281980&t=0)** - It's time to talk about bias. It's always a popular and polarizing topic in our industry. A few years ago, a data journalist reached out to me. She wanted to talk about the degree of bias in a dataset containing 20,000 newswire sentences from around 2003. I shared with her that I consider bias a euphemism. The words that are used are varied. There's fairness, there's responsibility, there's algorithmic bias, there's a number of terms. But really, it's dancing around the real topic. A dataset is inherently entrenched in systemic racism and sexism. At the time, at best, it was considered controversial. And at worst, just plain wrong. But not anymore. Now, we have use cases, instances, and examples of how disparities exist in our digital environments. The bias debate is over. The focus has turned to reducing harmful effects systematically. Even if your job duties don't specify bias mitigation, you play an integral role in the propagation throughout AI systems, like it or not. Bias mitigation is a responsibility of everyone who handles, reviews, and interprets data. Now, you can lessen the presence of bias when a plan
>
> **[1:39](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mitigating-biases-in-data?u=76281980&t=99)** of attack involves addressing imbalances of the data [Algorithms](../../Skills/Software%20Development/Algorithms.md) and process routines. Of course, the overarching necessity is how well people are embedded between and throughout these routines. Data routines tend to come first. More specifically, it's about how representative across demographic characteristics the dataset is. You wanna collect data that covers a wide range of scenarios, demographics, and perspectives. It requires you to be thoughtful about diversifying your data sources and performing regular data audits. When you found imbalances, and you will, many teams decide to add synthetic data to reduce under-representation of certain groups. Did you hear my voice change a bit? That's because adding synthetic data solves one form of bias, but could introduce others. This is what gave me pause. It leads us to the second set of routines to reduce harmful effects, algorithms. Regularization, re-weighting, and adversarial training techniques are just a few approaches to improve fairness and mitigate imbalances. Algorithmic fairness metrics like demographic parody,
>
> **[3:16](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mitigating-biases-in-data?u=76281980&t=196)** disparate impacts, equal opportunity, and equal odds help to pinpoint unfairness levels. But you know that data protocols and algorithms aren't sufficient to identify, remedy, and ward off biases. You need processes to oversee, review, and audit how these data and algorithms operate. Having a [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) team with diverse backgrounds and perspectives can identify biases faster. Performing audits and reviews once or twice a year of collected data are excellent options to monitor outputs for biases. Now, you're not haphazardly creating processes. You're guided by existing [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) frameworks like DAMA-DMBOK or [Data Management](../../Skills/Software%20Development/Data%20Management.md) Body of Knowledge to improve [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) and data profiling insights. Part of the [Continuous Monitoring](../../Skills/Data%20Science/Continuous%20Monitoring.md) and improvement is handled by algorithms while the more nuanced parts are covered by human oversight teams. These teams catch cascading biases and other harmful effects that may slip through your routines. There's a systematic way that they work, and that's what you'll learn more about in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (5), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Data Management](../../Skills/Software%20Development/Data%20Management.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Env Vars:** dama (1), dmbok (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - it (1)

#### [Following ethical review processes](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/following-ethical-review-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/following-ethical-review-processes?u=76281980&t=1)** - Before leaving the Ethical Strategies discussion, we should talk through [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) review boards and committees. They aren't common. Less than 1% of S&P 500 companies reported having an AI ethics board in 2022 and 2023. And only 1.6% of S&P 500 companies even have an explicit board or committee focused on AI oversight. So I know what you're thinking, given these small percentages, then it doesn't make sense for companies to have ethics boards. I'll tell you to slow your role. The question isn't just about the current percentages, it's about the year over year percentages, and that's enlightening. Since 2022, scrutiny of AI from boards and committees have increased over 150% in many industries. Popularity is only expected to grow as more companies adopt AI technologies, your natural questions likely cover what ethics boards do and how they should operate. In short, ethics review committees play an integral role in ensuring that clients' rights and [Privacy](../../Skills/Data%20Science/Privacy.md) are protected. After the committee defines its principles and guidelines, their primary responsibility is
>
> **[1:35](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/following-ethical-review-processes?u=76281980&t=95)** to review the ethical soundness of the [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) design. This means evaluating the potential risks to clients from the economical to the psychological, along with anticipated potential benefits from using their data in AI systems. Regular and adequate scrutiny of informed consent procedures and data protection methods, round out the committee member's ethical soundness assessment. The ongoing role of the committee focuses on monitoring the company's data and AI services. They're making sure that these services are compliant with regional and national regulations. The committee request and reviews reports that detailed unanticipated harms that have risen, and they also suggest improvements to the company's data and AI services. However, their approval of the company's actions isn't guaranteed, but desired. The last big role of an ethics review committee lies in ensuring clients' welfare throughout the data collection process. It's a simple, yet hard pursuit, doing good by your clients, while avoiding the introduction of more harms. By promoting your client's autonomy, they can make more informed decisions about how much data to give you. And the biggest pro
>
> **[3:09](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/following-ethical-review-processes?u=76281980&t=189)** of having a well-established ethics review committee is that your clients believe their data is safer and therefore better protected, which strengthens their trust in the company. Clients who feel their rights are sufficiently safeguarded may provide more accurate data, that trust helps your bottom line. So far, you've been given viable options on incorporating data collection best practices. Some are easy tweaks to what you've already implemented, while others call for a more company-wide effort, real talk, though there are practical roadblocks that limit the effectiveness of applying these strategies. We'll get into them in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (7), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (3), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **CLI Commands:** make (2)
> **Versions:** 1.6 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - before (1)


### 3. Practical Concerns Blocking Responsible Data Collection

[↑ Back to Table of Contents](#table-of-contents)

#### [Violating data privacy regulations](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/violating-data-privacy-regulations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/violating-data-privacy-regulations?u=76281980&t=0)** - When strategy meets implementation, friction and tension are inevitable. And that's what happens once ethical strategies are attempted. There can be compounding reasons for both internal and external pushback. The prevailing public narrative insists that integrating ethical principles in AI results in slowed innovation and wastes the company's money. What's not commonly shared is the cost of moving fast, breaking, and not correcting AI services. These monetary and non-monetary costs can have both short-term and long-term impacts. Companies are guided by a collection of regulations. It's a bit of alphabet soup across the globe. HIPAA, GDPR, CCPA, EU's AI Act, et cetera. The AI regulations proposed and enacted into law that we see now are built on data-focused regulations. For example, US [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) regulations date back to 1974 as a mechanism to promote fairness within information systems. So violating them has consequences. The most overt consequence is monetary. The US Federal Trade Commission,
>
> **[1:37](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/violating-data-privacy-regulations?u=76281980&t=97)** the UK's Information Commissioner's [Office](../../Skills/Web%20Development/Microsoft%20Office.md), and similar government agencies around the world impose substantial fines for these violations with wide-ranging penalty amounts. At this time, HIPAA's penalties go from $100 to $1.5 million per violation. CCPA's penalty price tag varies depending on whether the violation was deemed unintentional, up to $2,500 per violation, or intentional, up to $7,500 per violation. And GDPR's penalties are among the highest at up to 20 million euros or 4% of gross revenue, whichever is higher. The next impactful consequence, reputational damage, tends to linger with the company. The sequence of events remains relatively common. A company collects sensitive data, but it's not stored securely. A data breach happens where the data is copied and/or deleted from their system. Customers lose trust in the company, sales decrease, and the company struggles to rebound.
>
> **[3:13](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/violating-data-privacy-regulations?u=76281980&t=193)** Some are forced to shut down, like Code Spaces in 2014 and National Public Data in 2024. And this brings us to the last major consequence: legal action. Individuals or groups may choose to sue your company if they were affected by a data breach. Let's use the very public $725 million class action settlement against Meta Platforms as an example. The US courts determined that [Facebook](../../Glossary/Service/Facebook.md) violated users' [Privacy](../../Skills/Data%20Science/Privacy.md) as part of their Cambridge Analytica dealings. The legal action route is lengthy. In Facebook's case, it took seven years and was extremely costly. Facebook reportedly paid over $5 billion in FTC fines and $100 million to the SEC. Protecting all [Forms](../../Skills/Web%20Development/Forms.md) of sensitive data should be at the top of that priority list. No one wants any of these headaches. Up next, we'll discuss one of the biggest stumbling blocks in deploying responsible [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) actions: the lack of a well-conceived data strategy. When you don't know what data you have,
>
> **[4:53](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/violating-data-privacy-regulations?u=76281980&t=293)** you don't know what data you need, and then you can't determine what data is useful. Let's go learn all about these cascading and costly effects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (3), [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** hipaa (2), gdpr (2), ccpa (2), ftc (1), sec (1)
> **Versions:** 1.5 (1)
> **Analogies:** for example (1)
> **Speakers:** - when (1)

#### [Lacking an established data strategy](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/lacking-an-established-data-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/lacking-an-established-data-strategy?u=76281980&t=1)** - Like you, I've been having many, many conversations about AI. From [Banking](../../Skills/Software%20Development/Banking.md), to healthcare, to manufacturing. The main talking points hone in on understanding where and how AI tools are used. The leadership in AI companies are grappling with a related yet broader question. Is our tool use being done in the "right way"? Company leadership want to know whether or not their AI service is of benefit to their staff, useful in servicing their clients and a valuable contributor to their revenue bottom line. Then, the conversation inevitably turns to their data strategy. They have great questions and an incomplete path to answer them. Because they don't know how information flows throughout their company. They can't understand what they're doing right if they're not tracking data operations across department units. Let's say the unspoken reality. You don't have a company-wide data strategy and maintenance plan. Many teams, including yours, have crafted their own data standards and management processes.
>
> **[1:34](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/lacking-an-established-data-strategy?u=76281980&t=94)** So what can happen when there's an underdeveloped strategy in place? While this creates little data silos that makes a team run smoothly, teams end up using different subsets of the company's data when working cross-functionally. This leads to more inconsistent information and inefficient collaboration. Without regular [Data Literacy](../../Skills/Data%20Science/Data%20Literacy.md) training and support, productivity further degrades as teams struggle to interpret and use data effectively. By the time data outputs reach leadership, it's largely uninformative to company-wide decisions. Internal data operation gaps also reveal and exacerbate external ones. Woes introduce with a poor data strategy come from three different directions. First, operational inefficiencies waste time as teams are correcting mistakes, and reports and analysis, cleaning up errors and searching for data. Then, customer loyalty wanes and sales start to slump. In more severe cases, compliance fines and other legal issues happen. Reputational damage ensues. Okay, that sounds bad, right? Well, there's another serious consequence to be aware of.
>
> **[3:11](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/lacking-an-established-data-strategy?u=76281980&t=191)** Without a well conceived and implemented data strategy, your digital systems become outdated and security measures are no longer effective. Your systems are vulnerable with higher occurrences of data loss, data corruption and data breaches. Increased vulnerabilities and cyber attacks dominate daily task activities. Performance issues creep in. So handling more data isn't a realistic possibility. The company is in defense mode rather than offensive. All in all, any collected data, no matter how ethically sourced it is, isn't secure. All that work would seemingly have been done in vain. Frankly, the data isn't in a healthy digital environment to be sufficiently useful. I don't share all of this to scare you, but to keep you informed and made aware. Let's head together to the next video and cover strategies and technology features as you review your data strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Banking](../../Skills/Software%20Development/Banking.md) (1), [Data Literacy](../../Skills/Data%20Science/Data%20Literacy.md) (1)
> **Cross-References:** next video (1)
> **Warnings:** be aware (1)
> **Speakers:** - like (1)

#### [Choosing the right tools and configurations](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/choosing-the-right-tools-and-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/choosing-the-right-tools-and-configurations?u=76281980&t=0)** - Spoiler alert, there's no one right AI tool for ethical [Data Collection](../../Skills/Data%20Science/Data%20Collection.md), and in fact, it goes for any phase in the data lifecycle. For instance, when I was computer science faculty, I was very persnickety about which AI enhanced tools I used. Platforms like TurnItIn, Gradescope, and zyBooks are very popular. Each collects instructor and student data regularly and uses that data for its AI model training. Some of my colleagues used all three. I decided to only use zyBooks and here's why. zyBooks is an interactive learning platform with its own curriculum. The students weren't uploading any of their own work into the zyBooks platform. While students engagements with the platform were recorded, each part of their critical thinking and problem solving process wasn't captured. The full scope of their work wasn't digitized. The other two platforms I felt were two intrusive to a student's learning process. I manually graded written and coding assignments since my class sizes were small enough. I say all this to share that you'll have to decide where you and your teams ethical boundaries lie. I highly encourage you and your team
>
> **[1:36](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/choosing-the-right-tools-and-configurations?u=76281980&t=96)** to write down your ethical and responsible data handling stance before searching for or selecting a tool. Some tools are flashy and draw you in, but in practice can be a bigger headache than you need. So let's be a little bit more methodical and discerning in our choices. First, take a closer look at a tool's data anonymization features. Their data protection protocols should be transparent and abide by current regulations. It wouldn't hurt to read their publicly available [Privacy](../../Skills/Data%20Science/Privacy.md) policies. How they would organize, de-identify, and use your customer's data should be in there. Second, become familiar with the tools data encryption services. Search online for public statements or product articles about their encryption safeguards. You may likely need to talk with a company representative to understand the type of encryption [Algorithms](../../Skills/Software%20Development/Algorithms.md) the company uses. For example, currently, Advanced Encryption Standard, or AES, is considered the best with a large number key length. Be aware that they may not tell you this detail though. The third and last consideration is privacy-enhancing technology or PETs. PETs are a collection of [Data Security](../../Skills/Data%20Science/Data%20Security.md) methods designed
>
> **[3:12](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/choosing-the-right-tools-and-configurations?u=76281980&t=192)** to protect personal data while still allowing for its use in analysis and other applications. This means that your internal data collaborations can still happen, but you're not sharing sensitive data assets across the company or with your third-party vendors. Adopting PETs as a standard data and AI [Product Development](../../Skills/Software%20Development/Product%20Development.md) approach and engaging with vendors that implement it is simply good business. As we head into the end of this chapter, we'll talk about a topic we've been avoiding. It's because we all know it happens to others and to ourselves. But we don't really wanna discuss it. I'm talking about how we handle and recover from mishandling data assets and how this tends to stop us from making the more responsible choice. Let's get into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [Product Development](../../Skills/Software%20Development/Product%20Development.md) (1)
> **Code Identifiers:** zybooks (4)
> **Definitions:** is an  (1), means that (1)
> **Analogies:** for instance (1), for example (1)
> **Env Vars:** aes (1)
> **Warnings:** be aware (1)
> **Speakers:** - spoiler (1)

#### [Mishandling data assets and the fear of messing up](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mishandling-data-assets-fear-of-messing-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mishandling-data-assets-fear-of-messing-up?u=76281980&t=0)** - The rate of tech change and the constant flow of data requests make human errors not only probable, but inevitable. In recent reporting, [Google](../../Glossary/Service/Google.md)'s [Gemini](../../Skills/Software%20Development/Gemini.md) receives over 8,500 visitors. There's over 1 million messages sent on [Slack](../../Skills/Software%20Development/Slack.md). And [Microsoft Teams](../../Skills/Cloud%20Computing/Microsoft%20Teams.md) records 229 million meeting minutes. And this is all happening in just one minute. That's every 60 seconds. Overlooking and forgetting some aspect of the [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) is truly understandable, even when it's still embarrassing. You know that the slip-up can cause reverberating effects downstream in the data pipeline. So your fear of messing up, some piece of it is natural. And with responsible data practices adding to your list, you may feel that the responsibility is too great, and you may feel that your error rate may go up. And you don't want that to happen, Ss you're slower to implement ethically-centered data practices. I get it. And you honestly may not feel like you have enough guidance or support to implement these practices well, with confidence.
>
> **[1:37](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mishandling-data-assets-fear-of-messing-up?u=76281980&t=97)** To help temper initial uncertainties, it's helpful to co-create a fundamental data handling cheat sheet or checklist with your team. I like to focus on the preparation and planning activities, like identifying the question this data is trying to answer, clarifying a reasonable scope of the data collection tasks, outlining the specific data requirements, determining how [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) might work, and standardizing data formats. This list may seem like a lot, but once you've refined your flow, you'll march through these with ease. I recommend concentrating your time on [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), [Privacy](../../Skills/Data%20Science/Privacy.md), and security efforts. This is where ethical considerations are highly debated. I suggest that you keep current on the ISO 8000 standard. This International Organization of Standardization series is a cornerstone framework for improving data quality across different types of data. Principles, terms, measurement, management, assessment, and governance of data quality are mapped out. It's dense and lengthy, and a great resource. The last tip I have for you
>
> **[3:09](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/mishandling-data-assets-fear-of-messing-up?u=76281980&t=189)** is to keep the IEEE standards on [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) and [Building Trust](../../Skills/Data%20Science/Building%20Trust.md) bookmarked on your workplace devices. No, seriously, since you're handling different types of data, have the compliance rules easily available. There's no need to create them from scratch, they're already done for you. And then you can productively discuss with your [Data Ethics](../../Skills/Data%20Science/Data%20Ethics.md) team or the company's [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) review committee about the degree in which your data collection process is handled responsibly, not just legally. And there you have it. You've reached the end of the chapter of the stopgaps to responsible data collection. Let's close things out in the next video where you'll take your learning to the next level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (4), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (3), [Google](../../Glossary/Service/Google.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1), [Slack](../../Skills/Software%20Development/Slack.md) (1)
> **Env Vars:** iso (1), ieee (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-data-collection-for-ai-implementation/next-steps?u=76281980&t=0)** - Well, that'll do it. We've reached the end of our time together. Congratulations. You've learned a few new tips, and you're ready to take action, right? And since there's always more to learn about implementing ethical data practices, I'd love to share a few resources with you. If you're interested, my book, "Data Conscience: Algorithmic Siege on our Humanity" walks through other data lifecycle phases and offers more ethical strategies. For those focusing on data mitigation, Dr. Nika White has a great [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course to navigate AI through an intersectional lens. Lastly, keep in touch with me on LinkedIn and check out my work and my Rebel Tech newsletter. Before you go, I wanna say thanks for taking this course. I'm excited that you're invested in creating a world that cares about building ethical data practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2)
> **Speakers:** - well (1)


## Instructor

- [Dr. Brandeis Marshall](../../Instructors/Data%20Science/Dr.%20Brandeis%20Marshall.md)

## Skills Covered

- Data Collection
- Responsible AI
- Artificial Intelligence (AI)
- Data Ethics

## Path Context

### In [Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)
← [Complete Guide to Python for Data Engineering- From Beginner to Advanced](Complete%20Guide%20to%20Python%20for%20Data%20Engineering-%20From%20Beginner%20to%20Advanced.md) | **6 of 6**

## Appears In

- [Introduction to Fundamental Skills for Data Work- Data Collection](../../Paths/Data%20Science/Learning%20Paths/Introduction%20to%20Fundamental%20Skills%20for%20Data%20Work-%20Data%20Collection.md)

## Related Courses

_Courses sharing skills:_

- [Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI](../Artificial%20Intelligence%20(AI)/Implement%20and%20Evaluate%20Cloud%20AI%20Solutions-%20Foundations%20of%20Responsible%20AI.md) — Artificial Intelligence (AI), Responsible AI
- [Responsible AI- Global Risks, Governance, and Human Oversight](../Artificial%20Intelligence%20(AI)/Responsible%20AI-%20Global%20Risks%2C%20Governance%2C%20and%20Human%20Oversight.md) — Artificial Intelligence (AI), Responsible AI
- [Understanding Ai S Global Impact Governance Equity And Responsibility](../Artificial%20Intelligence%20(AI)/Understanding%20Ai%20S%20Global%20Impact%20Governance%20Equity%20And%20Responsibility.md) — Artificial Intelligence (AI), Responsible AI
- [Responsible AI to the Rescue](../Artificial%20Intelligence%20(AI)/Responsible%20AI%20to%20the%20Rescue.md) — Artificial Intelligence (AI), Responsible AI
- [Principles of Responsible AI- Identifying, Understanding, and Mitigating Risks by All Tech Is Human](../Artificial%20Intelligence%20(AI)/Principles%20of%20Responsible%20AI-%20Identifying%2C%20Understanding%2C%20and%20Mitigating%20Risks%20by%20All%20Tech%20Is%20Human.md) — Artificial Intelligence (AI), Responsible AI

---

[↑ Back to top](#)