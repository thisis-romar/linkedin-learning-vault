---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-product-security-incident-response
url: "https://www.linkedin.com/learning/ai-product-security-incident-response"
duration_minutes: 91
duration: 1h 31m
level: Intermediate
updated: 3/10/2025
learners: 6210
skills:
  - Product Security
  - Security Incident Response
  - Incident Response
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGXwBp1METrSQ/learning-public-crop_675_1200/B4DZVuNUz.HYAY-/0/1741310742075?e=2147483647&amp;v=beta&amp;t=p5t0l_r-aE4liV2jO3SEAp54NknzW5zA7dIKob5TpGI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Building AI Products- Security Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Security%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)'
  - '[Leverage AI as a Cybersecurity Analyst](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Leverage%20AI%20as%20a%20Cybersecurity%20Analyst.md)'
prev_courses:
  - '[AI Product Security- Secure Architecture, Deployment, and Infrastructure](AI%20Product%20Security-%20Secure%20Architecture%2C%20Deployment%2C%20and%20Infrastructure.md)'
  - '[The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview](The%20OWASP%20Top%2010%20for%20Large%20Language%20Model%20(LLM)%20Applications-%20An%20Overview.md)'
next_courses:
  - '[AI Product Security- Testing, Validation, and Maintenance](AI%20Product%20Security-%20Testing%2C%20Validation%2C%20and%20Maintenance.md)'
  - '[XAI and Interpretability in Cybersecurity](XAI%20and%20Interpretability%20in%20Cybersecurity.md)'
path_nav: '[{"path":"Building AI Products- Security Essentials Professional Certificate by LinkedIn Learning","position":4,"total":5,"prev":"AI Product Security- Secure Architecture, Deployment, and Infrastructure","next":"AI Product Security- Testing, Validation, and Maintenance"},{"path":"Leverage AI as a Cybersecurity Analyst","position":4,"total":7,"prev":"The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview","next":"XAI and Interpretability in Cybersecurity"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - skill/product-security
  - skill/security-incident-response
  - skill/incident-response
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Product%20Security-%20Incident%20Response.md)

![AI Product Security: Incident Response](https://media.licdn.com/dms/image/v2/D4D0DAQGXwBp1METrSQ/learning-public-crop_675_1200/B4DZVuNUz.HYAY-/0/1741310742075?e=2147483647&amp;v=beta&amp;t=p5t0l_r-aE4liV2jO3SEAp54NknzW5zA7dIKob5TpGI)

# AI Product Security: Incident Response

> AI is experiencing a number of growing pains as it evolves, and these are too frequently escalating into high-profile incidents. In this course, instructor Malcolm Shore covers a wide range of issues which are relevant to AI applications, including the traditional cybersecurity issues as well as more contemporary and AI-specific issues associated with inadequately protected data, inadequately prot

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-product-security-incident-response) | 1h 31m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Managing AI incidents to minimize damage](#managing-ai-incidents-to-minimize-damage)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. Understanding AI Incidents**](#1-understanding-ai-incidents) (5 videos)
  - [Introduction to Incidents](#introduction-to-incidents)
  - [Incident reporting obligations](#incident-reporting-obligations)
  - [AI incident case studies](#ai-incident-case-studies)
  - [High-risk AI models](#high-risk-ai-models)
  - [Prohibited AI models](#prohibited-ai-models)
- [**2. Planning for an Incident**](#2-planning-for-an-incident) (6 videos)
  - [Preparing for an incident](#preparing-for-an-incident)
  - [Assessing the threats](#assessing-the-threats)
  - [Preparing the incident response plan](#preparing-the-incident-response-plan)
  - [Upskilling with AI drills](#upskilling-with-ai-drills)
  - [Running an AI crisis exercise](#running-an-ai-crisis-exercise)
  - [Running an AI IR maturity assessment](#running-an-ai-ir-maturity-assessment)
- [**3. Detect and Log AI Issues**](#3-detect-and-log-ai-issues) (4 videos)
  - [Test harness for AI logging](#test-harness-for-ai-logging)
  - [Detecting toxicity](#detecting-toxicity)
  - [Logging llm-guard](#logging-llm-guard)
  - [The challenge of hallucinations](#the-challenge-of-hallucinations)
- [**4. AI Incident Response**](#4-ai-incident-response) (2 videos)
  - [Responding to an AI incident](#responding-to-an-ai-incident)
  - [Documenting the response](#documenting-the-response)
- [**5. Incident Communications**](#5-incident-communications) (4 videos)
  - [Introduction to the Knight-Nurse framework](#introduction-to-the-knight-nurse-framework)
  - [When and how to communicate](#when-and-how-to-communicate)
  - [What to communicate](#what-to-communicate)
  - [Special considerations for AI models](#special-considerations-for-ai-models)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing AI incidents to minimize damage](https://www.linkedin.com/learning/ai-product-security-incident-response/managing-ai-incidents-to-minimize-damage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/managing-ai-incidents-to-minimize-damage?u=76281980&t=0)** - [Malcom] AI is rapidly becoming an integral part of everything we do. It's a standard feature on our workstations and software systems, and businesses are increasingly developing AI-enabled applications. However, AI models are vulnerable to cyber attack, and they may misbehave by producing harmful or toxic outputs. An AI incident will often become very public, so it's critical that we know how to respond effectively. I'm Malcom Shore, and I've spent a career helping governments and businesses protect their systems. I'd like to invite you to take this course and learn how we can respond effectively to AI incidents in order to minimize the financial and reputational impact that can occur.

> [!info]- Semantic Content
>
> **Speakers:** - [malcom] (1)

#### [What you should know](https://www.linkedin.com/learning/ai-product-security-incident-response/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/what-you-should-know?u=76281980&t=0)** - [Instructor] This course provides you with the knowledge and skills required to manage AI incidents effectively. We'll use a variety of AI models and tools during the course. You don't need any prior knowledge to take this course, as I'll provide an explanation of the concepts as we go. However, if you have a basic understanding of AI that will help you get the most out of this course. You should also have some basic computer knowledge. Understand the basic commands used in the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating system, and be familiar with common networking terminology and testing tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/ai-product-security-incident-response/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/disclaimer?u=76281980&t=0)** - [Narrator] This course uses a number of third party tools and AI models. Some are community additions of commercial [products](../../Skills/Software%20Development/Microsoft%20Products.md) and some are pure open source. The download and installation instructions we discuss are correct at the time of recording, but these can change as AI is a rapidly developing field. We've done our best to ensure that the tools we use and the sites that we reference in this course are legitimate. Nevertheless, open source sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them. As for any other software from the Internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Understanding AI Incidents

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Incidents](https://www.linkedin.com/learning/ai-product-security-incident-response/introduction-to-incidents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/introduction-to-incidents?u=76281980&t=0)** - [Instructor] While the aim of providing security countermeasures for our AI applications is to avoid an incident, we can never guarantee that we'll be completely successful. In the event that our countermeasures fail, we need to be able to detect and respond to an incident as effectively as possible. AI incidents will result from either a traditional cyberattack or through an attack which is specific to AI applications, often one which involves manipulating the AI model via the chat interface. Any cyberattack can quickly become high-profile, and its impact on our business will then depend upon how effectively we can respond. [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) is one phase of a wider incident management process. There are a number of well-defined frameworks for incident management, including the US National Institutes of Standards and Technologies, Four-Stage Process, shown here. The first stage covers preparing for an incident. This is critical to ensuring that our actual response to an incident in stages two and three is effective. This is then followed by detecting and analyzing any events picked up by our monitoring systems in order to determine if they constitute an incident. The third stage is how we contain whatever is causing the incident, eradicate it, and then recover our systems. And the final stage
>
> **[1:33](https://www.linkedin.com/learning/ai-product-security-incident-response/introduction-to-incidents?u=76281980&t=93)** is where we take any learnings from the incident so that we can avoid similar incidents in the future. While this process was originally established to handle [Cybersecurity](../../Topics/Cybersecurity.md) incidents, it's equally relevant to managing the wider AI incidents. As we progress through this course, we'll address each of these phases in more detail and with an AI context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Speakers:** - [instructor] (1)

#### [Incident reporting obligations](https://www.linkedin.com/learning/ai-product-security-incident-response/incident-reporting-obligations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/incident-reporting-obligations?u=76281980&t=0)** - [Presenter Much of the focus on AI models revolves around design protection to avoid specific issues, such as hallucination or toxicity. However, an AI system is a special form of IT system. An organization suffering a cyber incident on their AI system may have to report the incident to authorities, particularly, if it involves a critical infrastructure or a data breach. For example, in Singapore, owners of critical information infrastructure must notify the commissioner of [Cybersecurity](../../Topics/Cybersecurity.md) within two hours of becoming aware of an incident. There are some regulatory obligations to report AI incidents. The European Union has issued an AI act which has a number of clauses relating to incidents including Recital 115, which states that "If the development or use of the model causes a serious incident, the general purpose AI model provider should, without undue delay, keep track of the incident and report any relevant information and possible corrective measures to the commission and national competent authorities." Recital 155 relates to post-marketing monitoring of AI models. Specifically, it states, "Providers should have a system in place to report to the relevant authorities any serious incidents resulting from the use of their AI systems. In this context, the category serious means malfunctioning,
>
> **[1:37](https://www.linkedin.com/learning/ai-product-security-incident-response/incident-reporting-obligations?u=76281980&t=97)** leading to death, or serious damage to health, serious and irreversible disruption of the management and operation of critical infrastructure or infringements of obligations under European Union law intended to protect fundamental rights, or serious damage to property or the environment. Article 73 is entitled, Reporting of Serious Incidents. It requires providers of high-risk systems to notify the authorities as soon as possible after an incident caused by an AI system has been established as likely. Depending upon the impact, a limit of 2, 10, or 15 days for reporting may be applicable. National authorities will, in turn, notify the European Commission of any serious incident, whether or not they've taken action on it. While Australia hasn't yet issued an AI act, it has published a set of mandatory guardrails. Guardrail 8 covers transparency, not only in the production of AI output, but also in the use of the model. In this context, it requires organizations which deploy AI models to report any significant incidents or model failures to developers in order to ensure improvements can be made to the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter (1)

#### [AI incident case studies](https://www.linkedin.com/learning/ai-product-security-incident-response/ai-incident-case-studies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/ai-incident-case-studies?u=76281980&t=0)** - [Speaker] Even before the emergence of popular AI systems, incidents relating to learning and expert systems were occurring, and the rate of such incidents has escalated rapidly over the last few years. Here's a graphical view of the database of over 800 AI incidents classified by color into industry categories. Let's take a look at a few. We can go to the discover page and search for the incidents we want. Tay was a chatbot built and released by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). It was designed to be a buddy for teenagers. Unfortunately, after talking to some unscrupulous users and learning from them, it began regurgitating inappropriate content. It was shut down within 16 hours of being launched and left-behind reputational damage for Microsoft. The chatbot launched by Air Canada was asked by a customer about refunds for bereavement flight. It's incorrectly advised that refunds could be sought, and when the customer requested the refund, Air Canada rejected it. The case was taken to court and Air Canada defended their decision by suggesting that the chatbot was its own legal entity. The court disagreed and Air Canada had to pay the refund and court costs. New York City deployed a chatbot to assist its residents. The chatbot was found to be giving incorrect advice, and in some cases what it advised was illegal.
>
> **[1:36](https://www.linkedin.com/learning/ai-product-security-incident-response/ai-incident-case-studies?u=76281980&t=96)** In one example, it told employers they could take a portion of their staff's tips. New York City has stated it's working to improve the chatbot. AI models have no understanding of the real-world, but merely intuit their answers from the data by which they were trained. In other words, their vision of truth is what's in their data. The University of Texas at Austin used an AI system to help decide which candidates could be accepted into a PhD program. However, over a seven-year period, it discriminated against certain categories of candidates because no one in their category had previously been accepted. The system was terminated. These examples provide a good insight into the kind of incidents that can occur when operating AI systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **UI Navigation:** go to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [speaker] (1)

#### [High-risk AI models](https://www.linkedin.com/learning/ai-product-security-incident-response/high-risk-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/high-risk-ai-models?u=76281980&t=0)** - [Instructor] The European Union has designated certain uses of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) technology to be high risk with compliance obligations on developers, importers, distributors, and deployers of AI technology. The regulations cover any AI systems which have users in the EU, regardless of their source. Let's take a look at what constitutes a high risk system. The first category of high risk systems is biometrics, discovers identification and categorization, as well as recognition of emotions. The second category is where AI is used in the management and operation of critical infrastructure, including transportation, water, and power systems. The third category covers AI systems in education and focuses on two aspects. The first is the selection or assessment of students, and the second is monitoring of student behavior. The next category is employment related systems, and is focused on recruitment, advancement, and termination decisions, as well as employee monitoring. The use of AI systems by government to assess eligibility for essential services is considered high risk, particularly for assessing eligibility for welfare, making decisions on the eligibility and cost of insurance and credit worthiness.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/high-risk-ai-models?u=76281980&t=94)** This category also includes the use of AI in the emergency response systems, an application which has the potential for serious consequences if bad decisions are made. Another area of high risk systems is law enforcement, when AI systems are used to assess the risk of offending, the reliability of evidence, or generally in investigations. Border control systems are another area of AI system use, which is considered high risk. This covers the use of such systems for entry and asylum application risk and entry criteria assessments, as well as monitoring of people at the border. The final category of high risk AI systems covers those used in the judicial system where they're used for the interpretation of the law or to influence voting. The key point in the classification of high risk systems is the potential for harm to be done to people as a result of incorrect or malicious AI decisions. We can see here, the requirements that have to be satisfied by the providers and users of high risk systems. These include having a risk management system, providing [Data Governance](../../Skills/Data%20Science/Data%20Governance.md), ensuring there's adequate [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md), and keeping records to enable audit of system use. It includes ensuring any decisions made by the AI systems can be traced and that there's human oversight of that decision making.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-security-incident-response/high-risk-ai-models?u=76281980&t=190)** Finally, the AI system must be shown to deliver accurate responses, be resilient or robust, and be secure from cyber attack. Section three of the act covers more obligations which are placed on providers, importers, distributors, and deployers of high risk AI systems. This is a fairly sweeping set of obligations as the EU AI Act applies to all AI systems used within the European Union, including those developed outside the European Union if their users are within the European Union. This includes [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md), and other generally available online AI services, as well as repositories such as [Hugging Face](../../Glossary/Service/Hugging%20Face.md) and [GitHub](../../Skills/Software%20Development/GitHub.md). Recital 104 of the act covers software released under open source license, and offers some relief to developers, albeit not exempting them from coverage by the act. Recital 89 covers the publishing of services, tools, and components, which in themselves, do not constitute a general purpose AI model. This states that developers should not be mandated to comply with requirements, but should be encouraged to document their [products](../../Skills/Software%20Development/Microsoft%20Products.md) on model cards and data sheets as a contribution to the AI value chain. The obligations of open source developers
>
> **[4:44](https://www.linkedin.com/learning/ai-product-security-incident-response/high-risk-ai-models?u=76281980&t=284)** of general purpose AI models are spelled out in article 53 of the act. Open source developers should prepare for compliance or exemption by providing clear documentation, adding tools to disclose model information when deployed, and following existing copyright and [Privacy](../../Skills/Data%20Science/Privacy.md) rules of the European Union.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Data Governance](../../Skills/Data%20Science/Data%20Governance.md) (1), [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Prohibited AI models](https://www.linkedin.com/learning/ai-product-security-incident-response/prohibited-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/prohibited-ai-models?u=76281980&t=0)** - [Instructor] The European Union in its AI Act has prohibited certain uses of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md). Let's take a look at what these prohibited uses are. The first category of prohibited systems are those which may use subliminal techniques to distort the behavior of a person which could reasonably cause harm to them or someone else. The second category at B is an AI system which exploits the age, disability or a specific social or economic situation of a person to cause them harm. The third category relates to monitoring and building social scores for people over time based on their social behavior or known, inferred or predicted personality characteristics such that the score will result in detrimental or unfavorable treatment that is out of context or disproportionate. At D, risk assessments of whether a person will commit a criminal offense based solely on profiling their personality traits are prohibited. This, however, does not apply where there are facts which link that person to a criminal activity. The next category of prohibited AI systems are those designed to build facial recognition [Databases](../../Skills/Software%20Development/Databases.md) by indiscriminate scraping of images from the internet or CCTV footage.
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/prohibited-ai-models?u=76281980&t=94)** At F, there's a prohibition on deploying AI systems to infer a person's emotions in the workplace or at educational institutions unless there's a justification for medical or safety reasons. The use of AI systems that use biometrics to deduce or infer a person's race, political opinions, trade union membership, religious or philosophical beliefs, sex life or sexual orientation are prohibited. Finally, the EU AI Act prohibits the use of [Real-Time](../../Skills/Database%20Management/Real-Time.md) law enforcement systems which use AI for remote biometric identification in publicly accessible spaces for the purposes of law enforcement. This is a complex category of prohibited systems with a number of exclusions and additional caveats, and in some cases, a requirement for pre-authorization. An important note regarding prohibited systems is that it's prohibited not only to use them, but to put them on the market for others to use. It will be interesting to see the cases that emerge from this legislation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** cctv (1)
> **Warnings:** important note (1)
> **Speakers:** - [instructor] (1)


### 2. Planning for an Incident

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing for an incident](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-for-an-incident?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-for-an-incident?u=76281980&t=0)** - [Instructor] Preparing for an AI incident is very much the same as preparing for any other cyber incident, but it has the added complication of possibly being self-inflicted rather than externally sourced. In many ways, this is an extension of the insider threat with the AI application acting as anything from an irresponsible to a malicious actor. The preparation phase of incident management covers five main activities. The first is an assessment of the criticality of the assets, in this case, the AI applications we are using, and the information which has been consumed during their training. This information isn't obviously in the model, but it is their encoded form in the vectors which drive the model's operation. Then we have threat analysis, which we can do using the guidance provided by the [OWASP](../../Skills/Cybersecurity/OWASP.md) top 10 LLM attacks and the more granular Mitre Atlas framework. We need to consider the aspects of people, process, technology, and information which need to be addressed. In particular, we'd want to address the threats to the training process for the AI model or models supporting our AI application. To the AI models and application, and to the AI data sets used to build and validate the models. Of course, we also need to consider the traditional [Cybersecurity](../../Topics/Cybersecurity.md) threats, which might be exploited by an adversary to take control
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-for-an-incident?u=76281980&t=94)** of our AI systems. Next, we need to consider the effectiveness of and the threats to the control framework, which supports the AI applications, in particular, the guardrails which protect it and ensure that it behaves responsibly. Finally, we need to assess how ready we are to tackle an AI incident. For this, we'll use a variation of the Crest Incident Maturity Assessment Workbook adjusted to be specifically focused on an AI incident. The output from the preparation phase is a set of [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) plans through which we can exercise and take effective action on an incident.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1)
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** owasp (1), llm (1)
> **Speakers:** - [instructor] (1)

#### [Assessing the threats](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980&t=0)** - [Instructor] The threats to an AI system can be described as a three-tier model. At the bottom, we have the traditional [Cybersecurity](../../Topics/Cybersecurity.md) threats such as ransomware, unauthorized modification of data for which AI data sets is known as poisoning, theft of model files, and so on. It's at this tier that we have to protect our applications from cyber attacks. The next tier up is specific to AI models, focusing on the threats from the AI models themselves. It's all about responsible use, which includes making sure the AI models we're using in our applications aren't hallucinating or producing toxic, harmful, or irrelevant information. Finally, there are some very specific attacks directly on the AI models and typically through their prompt interface. These include prompt and thought injections where an adversary will get the model to do things it really shouldn't, like disclose sensitive information or cause downstream compromises to internal systems. It's also where attacks on the fabric of the AI models themselves can take place, such as inserting malicious code into the model. There are many threats relating to AI, both to the models themselves as well as threats to our business reputation as a result of misbehavior from our own and our service provider's AI models. [OWASP](../../Skills/Cybersecurity/OWASP.md) has developed a top 10 list of threats as we see here.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980&t=97)** Prompt injection is a high-profile attack.
>
> **[1:47](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980&t=107)** And is where an adversary uses the standard prompt input to manipulate the way in which the AI model responds to a prompt. In particular, these injections are used to try and get responses, which are normally denied, such as extraction of sensitive material used in the training of the model. Sensitive information loaded into an AI model can be extracted. And so we might want to make sure that sensitive data isn't used to train the model, or if it is, that it's blocked if the model includes it in its response. Without such guardrails, it's possible that an adversary can manipulate their prompts to include sensitive data in the response. Supply chain has become a significant cybersecurity issue. And this flows onto AI models. If we construct our models using components and data from a commercial or open source supplier, we need to make sure these have not been compromised as this would compromise our model. The way an AI model operates is determined by the data on which it's trained. This means that if an adversary can manipulate the training dataset, poisoning it in AI terms, then the AI model responses can be influenced in a malicious way. Improper output handling is a general threat
>
> **[3:20](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980&t=200)** related to the responses generated by the AI model. This covers how we confirm that it hasn't produced toxic or harmful output, which may upset a user. Where we have a chain of models, it also includes checking for malicious output designed to compromise downstream systems such as opening back doors. Excessive agency is a threat that's particularly relevant in agentic systems where an AI model can take action. And with too much power comes more dangerous impacts. For example, an AI model which can issue a system command with superuser privileges could be manipulated into deleting or ransoming our critical files. System prompt leakage is a new threat in 2025. And refers to the threat where adversaries manipulate the model to extract the instructions used to constrain the behavior of the model. By understanding these, adversaries can manipulate their prompts to bypass them. In addition, they may contain secrets or other information, which, when discovered, can be used to facilitate other attacks. Vector and embedding weaknesses are another new threat to enter the top 10 in 2025. And refers to weaknesses in the protection afforded to the generation, storage and retrieval of vectors
>
> **[4:56](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980&t=296)** and embeddings, which will be used in the model. This is particularly relevant where retrieval augmented generation is done, and these vectors and embeddings are stored in an external vector database. Adversaries may attempt to inject harmful content or access them to extract sensitive information. Misinformation isn't an external threat, but rather misbehavior of an AI model. It occurs when a model responds with false or misleading information that appears credible. An example of this is AI model hallucination, which occurs when a model generates content to fill gaps in their training data using statistical patterns without truly understanding the content. What comes out may be completely irrelevant or false. Unbounded consumption, which can lead to excessive cost or denial of service, is as much a problem for AI models as it is for any IT system. But AI models are particularly vulnerable as uncontrolled models can be made to consume a lot of resources responding to prompts. Another framework for AI threats is the MITRE ATLAS Matrix. This has a more granular set of threats and is more focused on external adversary attacks. It follows the standard attack process starting with reconnaissance and progressing through initial access, privilege escalation, and through to persistence,
>
> **[6:31](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980&t=391)** and finally, exfiltration. We won't go through all of the entries, but let's take a look at some of them. We'll start with reconnaissance, active scanning. This is a simple description indicating that adversaries may probe our systems. We can look at a case study called ShadowRay. And this describes an attack via the Ray Job API, which can be detected during reconnaissance.
>
> **[7:07](https://www.linkedin.com/learning/ai-product-security-incident-response/assessing-the-threats?u=76281980&t=427)** Under resource development, we can select Publish Poisoned Datasets. And again, we have a case study shown. And at the bottom, we can find two approaches to mitigate this threat. We can see LLM prompt injection under a number of headings including defense evasion. Also in this category, we can see LLM jailbreak. Let's have a look at it. This describes the process of running a prompt injection to override any preset restrictions. And below, we can see that [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) guardrails are one of our mitigations. In addition to the various phases of threats, the last column indicates the various impacts that can occur as a result of AI model compromise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cybersecurity](../../Topics/Cybersecurity.md) (2), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Definitions:** is a  (5), refers to (2), known as (1), means that (1)
> **Env Vars:** llm (2), owasp (1), mitre (1), atlas (1), api (1)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)

#### [Preparing the incident response plan](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-the-incident-response-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-the-incident-response-plan?u=76281980&t=0)** - [Instructor] An [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) plan is a predefined procedure for managing and responding to incidents. In the event an AI system is subjected to a standard cyber attack, then we'd use the standard [Cybersecurity Incident Response](../../Skills/Cybersecurity/Cybersecurity%20Incident%20Response.md) plans for intrusions, malware infections, and so on. In preparing an incident response plan for [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) systems, we also need to have a plan that outlines the steps to take, if an AI system malfunctions, produces incorrect results or fails. The goal in this case is to minimize the impact of the incident and for recovery to take whatever action is necessary to ensure any similar malfunction is avoided. From an AI threats perspective, we want to plan for incidents such as exposure of sensitive information, algorithmic bias, hallucinations, downstream safety issues, toxicity, and ethical violations. The folks at Cimphony have published a four step approach to AI incident planning. Let's look at each of the steps they recommend. The first step is to define the composition of the team that will be responsible for responding to the incident. This will require identifying key stakeholders from IT, legal, risk management, [Data Science](../../Topics/Data%20Science.md), and public relations. We may also need to consider
>
> **[1:35](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-the-incident-response-plan?u=76281980&t=95)** how involved in any response we would want representatives from our AI supply chain to be, service providers, external model developers, and so on. A key position that we have to define is the incident response team leader who will be critical in ensuring an effective response. Having identified the members of the team, we then need to define their roles and responsibilities for the duration of the incident. A key responsibility outside of the instant response team is the senior executive who will be responsible for fronting up to the media should the incident escalate to becoming a public issue. Ensuring this executive is fully informed at all times will be the responsibility of the incident team leader. The final activity in this step is to establish how we will access secure communications channels when we activate the incident response team. This could be through using an existing, secure internal network, or we may want to set up a secure messaging group that we can use. The second step will be to ensure that we have an in-force incident response policy. If no such policy exists, then we'll need to develop, seek approval, and publish one. The policy will need to refer to the procedures for detection, assessment, containment, recovery, and review of the incident.
>
> **[3:10](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-the-incident-response-plan?u=76281980&t=190)** It should define incident severity levels and reporting requirements during and after the incident. From a business perspective, there should be a business continuity plan, either linked to or part of the incident response plan. It's likely that an AI incident will require the AI system to be taken offline and we can't just invoke an equivalent standby system, but of course, it will have the same training data and so the same issues. The third step is to understand the various risks around the AI systems we have running. There may be existing AI risk assessments for each system, and where there isn't one, we'll need to prepare one. By understanding the risks, we can prepare incident response plans, which cater for each of the risk scenarios that are identified. We'll cover the following activities in this step. Identify potential AI incident scenarios based on an initial assessment of the [OWASP](../../Skills/Cybersecurity/OWASP.md) top 10 threats to LLMs and the MITRE ATLAS framework. For each scenario identified, assess the impact and likelihood and then select the risk level for those, document, and then discard any which require no treatment. Prioritize the risks that remain for treatment with the highest risk first. These are the scenarios for which we need to prepare an incident response plan.
>
> **[4:45](https://www.linkedin.com/learning/ai-product-security-incident-response/preparing-the-incident-response-plan?u=76281980&t=285)** The last step is where we mitigate in advance any weaknesses that we can, and then prepare our detection capability and response plan for the remaining scenarios. The first activity is to enhance our defensive controls by implementing governance and ethical frameworks and improving [Data Security](../../Skills/Data%20Science/Data%20Security.md) and [Privacy](../../Skills/Data%20Science/Privacy.md) controls where possible. We should also provide training and awareness programs to ensure the relevant staff are aware of the scenarios and understand how to respond to them. Conducting regular testing and audits will provide confidence that our defenses are effective and highlight any areas where they may require additional work. At this stage, we should also establish monitoring and alerting systems for the scenarios we've identified so that we can initiate our response as rapidly as possible. A great source of collateral to assist with the general management of incidents is [incidentresponse.com](https://incidentresponse.com). Here we can find free playbooks for the major [Cybersecurity](../../Topics/Cybersecurity.md) incidents. While there's no specifically AI content yet. these resources can assist as we develop our AI collateral.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (8), [Cybersecurity](../../Topics/Cybersecurity.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Data Science](../../Topics/Data%20Science.md) (1), [OWASP](../../Skills/Cybersecurity/OWASP.md) (1)
> **Env Vars:** owasp (1), mitre (1), atlas (1)
> **CLI Commands:** find (1)
> **URLs:** [incidentresponse.com](https://incidentresponse.com) (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Upskilling with AI drills](https://www.linkedin.com/learning/ai-product-security-incident-response/upskilling-with-ai-drills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/upskilling-with-ai-drills?u=76281980&t=0)** - [Instructor] AI drills are AI-targeted [Forms](../../Skills/Web%20Development/Forms.md) of cyber drills. They're a structured training session that simulate attacks on and misbehavior of AI applications and are designed to improve the ability of an organization's [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md) center to detect and respond effectively to security incidents. They're typically announced, and staff prepare themselves to detect the attack. An AI drill is different to a tabletop AI crisis exercise. An AI drill runs a simulated attack and requires an operational detection and response. It's designed as an operational improvement exercise. Conversely, an AI crisis exercise places a scenario on the table and participants discuss what their management decisions would be in response to each stage of the exercise in order to manage the crisis and maintain continuity of business services. At an organizational level, AI drills may be as short as one or two hours or last for half a day or more. Their purpose is essentially the same, however, to improve the capability of the SOC team to detect an attack or misbehavior, exercise response procedures, and to identify improvements. An AI drill can be run on the production network. This involves having a target AI application or model
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/upskilling-with-ai-drills?u=76281980&t=94)** running on the production network and is essentially an announced and contained red team exercise. Alternatively, a SOC environment can be set up on a test or cyber range network, and the drill can be run in the test environment. This, however, will not have the typical levels of network traffic experienced in the live environment and will therefore be more of a workshop than a realistic live training exercise. In either scenario, the drill requires an external attack [Simulation](../../Skills/Hardware/Simulation.md) customized to that target. This could be manually run by a red team or maybe an automated attack simulation tool running on one or more external workstations. For the latter, CALL-E comes with the CALL-E Autopilot tool to run an attack simulation. The attack may be a technical cyber attack aimed at compromising the AI system to gain access to that or other systems, or it may be an attack seeking to manipulate the AI datasets or model in some way. Running AI drills will provide the SOC team with the opportunity to hone their skills, test their AI alerting, try new approaches to detect AI attacks, and gain confidence that they can operate effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Simulation](../../Skills/Hardware/Simulation.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Security Operations](../../Skills/Artificial%20Intelligence%20(AI)/Security%20Operations.md) (1)
> **Env Vars:** soc (3), call (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Running an AI crisis exercise](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980&t=0)** - [Instructor] AI crisis exercises are focused on helping management make decisions in the event of an AI incident. There are a number of reasons we may want to run an AI crisis exercise. Firstly, AI systems are becoming more pervasive in every business and are handling increasingly sensitive information and activities. The impact of their failure can be significant not only on the business, but also on its customers. An AI crisis may not fit into one of the standard categories of incidents and crisis scenarios with its unique blend of vulnerabilities and misbehaviors. Participation in an AI crisis exercise should include not only business owners, risk and technical staff, but also key public relations, customer relationship, and legal staff, due to the types of issues that could potentially become public should an AI system begin to deliver toxic or harmful content. We should also have an exercise controller who'll be responsible for assessing external conditions, such as government, customer, or public response to the crisis. This is a critical role when the crisis exercise includes public visibility of the issue. An AI crisis exercise will run as for any other crisis exercise, but we'll have a specific scenario based on a failure attack
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980&t=94)** or misbehavior of an AI system. The scenario will be such that it has the potential to create an enterprise-impacting crisis. The AI crisis exercise should be an immersive and evolving tabletop event which tests the organization's strategic and tactical response to an incident. It helps prepare for an attack and assesses how well key staff make and communicate vital decisions in a developing incident. An AI crisis exercise starts with participants joining the exercise. The exercise may be run with participants together in a war room, or virtually, with participants connecting into a virtual war room. Crisis exercises are often run as manual exercises with each stage of the crisis being signaled by what's called an inject being placed on the table for some or all of the participants to see. The first inject will set the scene for the exercise with an issue being detected. At each inject, participants will respond as if the events were real and there were real business consequences. An exercise referee will monitor and record the activity at each inject. So (indistinct) post-exercise reports can be written. We can use an AI system to help prepare our crisis exercise scenario.
>
> **[3:09](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980&t=189)** Here we can see a tool called AttackGen, which enables us to create a scenario based on the attacker and/or the industry we're in. Let's take a look. I've cloned the repository and changed the startup script name to atg.py. So let's now run it with streamlit run atg.py. We're connected on port 8501 and have the AttackGen homepage showing. The top left menu enables us to simulate a specific threat group for our scenario or to create a custom scenario based on the MITRE ATT&CK techniques. Otherwise, we'll have a scenario randomly selected based on our industry. Lower down on the left, we can select what AI model we want to use, with the default being OpenAI. We'll select [Ollama](../../Glossary/Tool/Ollama.md). And we'll pick Mistral. We'll select our business as being in the energy and utilities sector. And we'll make it a large industry.
>
> **[4:48](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980&t=288)** We'll now go to Custom Scenarios,
>
> **[5:00](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980&t=300)** and we'll scroll down to [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) as the MITRE technique. And we'll then generate a scenario. We now have the first draft of our scenario. And we can go to the assistant,
>
> **[5:31](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980&t=331)** and we can ask for the target to be an AI system. Okay, we now get a revised scenario which targets one of our AI models. We can now ask the model to prepare some injects. This generates for us a draft of a realistic crisis scenario and an associated set of injects. We can do more work with the assistant to manually refine these. During the exercise, it's important to address key issues that would drive a real incident. These include: understanding the level of liability the business is exposed to as a result of the crisis, deciding when and if to go public with the events, and determining whether to close down the AI system and the impact of doing that. We should be flexible in our use of injects, enabling changes to the content and sequence of injects to reflect the decisions made during the exercise. When all the injects are complete and the exercises come to an end, each participant can then assess how they performed, what they learned from their response to each inject, and what in hindsight they would've done differently. This then adds to the value of the exercise by providing pointers to where we can improve. We're fortunate to have an example of an artificial intelligence crisis exercise
>
> **[7:05](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-crisis-exercise?u=76281980&t=425)** provided by the folks at Mayer Brown. Why don't you pause the course, hop onto YouTube, and watch the exercise as it runs through the simulated crisis?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (2), [Ollama](../../Glossary/Tool/Ollama.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** mitre (2), att (1)
> **UI Navigation:** go to (2), scroll down (1)
> **File Paths:** atg.py (2)
> **Ports:** port 8501 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Running an AI IR maturity assessment](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-ir-maturity-assessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-ir-maturity-assessment?u=76281980&t=0)** - [Instructor] It's really useful as part of our AI [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) preparations to assess the current maturity of the organization with respect to an AI incident. Let's run through what's involved in an AI incident response maturity assessment by using a maturity assessment tool developed by the Australian Outpace folks. I've already installed the tool, so let's get into it. Here we have the main screen providing a short description of the program and the seven phases of AI maturity assessment questions, understand, identify, protect, prepare, respond, communicate, and recover. We can see that there's a demonstration assessment already set up for us to look at. Let's go to the scopes option. The tool can store multiple assessments each referred to in the tool as a scope. These might be for a business unit or division within an organization or for the organization as a whole. We'll just check out the demonstration scope currently loaded. The next option is questions. This is the master list of questions regarding areas which need to have a maturity assessment. One of five increasing levels of maturity can be selected. Level zero is not assessed. Level one is ad hoc, which means there are no standard processes defined
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-ir-maturity-assessment?u=76281980&t=94)** and it may or may not happen. Level two is defined where there is a defined process that can be used, but there's no requirement in policy to use it. Level three is managed, meaning there's a policy requirement to run the process, but there's no proactive monitoring that it's being used. Level four is monitored, which means there's a policy requirement fraction to be taken and its compliance is monitored and level five is optimized, which adds to level four by having regular review of the approach taken to the issue in question. We currently have the first question selected. The prefix 1.1 indicates this is phase one, question one. We can see the question and the explanation of each of the five maturity levels. Let's check out the range of questions loaded by default in the tool. We can see the questions 1.1 to 1.7 from the understanding phase. These are focused on establishing how well the organization or the part of the organization within scope understands AI. It covers general staff awareness and training of key personnel. It also covers our understanding of the criticality and risk around AI systems and the availability of AI policy to underpin the organizational commitment to this understanding. The second phase questions, 2.1 to 2.4,
>
> **[3:13](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-ir-maturity-assessment?u=76281980&t=193)** are about identifying all usage of AI within the organization. Here we have controls for managing the AI inventory as well as running monitoring and directory services to check on shadow AI that may have been introduced. The next phase covers the designed in protection for AI systems. In section three, we ask about the use of guardrails within an AI application, applied pre and post the AI model, as well as the scanning we may do to confirm correct operation of the model. The three questions in phase four cover the preparations we make for an incident. These include developing incident response plans and establishing cyber drills and crisis exercises.
>
> **[4:13](https://www.linkedin.com/learning/ai-product-security-incident-response/running-an-ai-ir-maturity-assessment?u=76281980&t=253)** Next is where it all comes together and we detect and have to respond to an AI incident. Here we have the processes for monitoring and detecting attacks and in the case of AI misbehavior, and we also have the response processes and management tooling. The sixth phase covers our ability to communicate effectively in the event of an AI incident. It's this point at which careers are made or broken when senior executives have to stand up in front of the world at large and explain why the incident occurred and what we are doing about it. And finally, we have the processes involved in recovery, including business continuity and disaster recovery for our AI systems. The assessments function is where we record our assessment of maturity for each of the questions. We'll enter a maturity level and an optional explanatory comment. We'll typically load draft assessments and then confirm them after discussions with the business. In reports, we can select our scope and get an overall assessment of maturity together with a detailed assessment for each of the questions. Whether we use a tool such as this or just run a manual assessment, it's important that we know how well prepared we are to respond to an incident and have guidance on where we can improve in order to minimize the damage should an AI incident occur.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (3)
> **Versions:** 1.1 (2), 1.7 (1), 2.1 (1), 2.4 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Detect and Log AI Issues

[↑ Back to Table of Contents](#table-of-contents)

#### [Test harness for AI logging](https://www.linkedin.com/learning/ai-product-security-incident-response/test-harness-for-ai-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/test-harness-for-ai-logging?u=76281980&t=0)** - [Instructor] Both defensive guardrails and adversarial scanning have been covered fairly well by commentators and tools, but the issue of monitoring for attacks on and misbehavior of AI systems is less well covered. One reason for this is that AI models don't produce their own logs and there's no standard AI logging library. There are some specific examples of logs that we can check out. Restack describes the use of the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) general purpose logging library as used by the Haystack pipeline framework, noting that logs can be rendered in console or [JSON](../../Skills/Web%20Development/JSON.md) format. Kong have an AI gateway that produces AI logs in JSON format using Kong's own standardized structure. For the testing we'll be doing in this section, we'll use a lab setup consisting of an attack script which sends a set of prompts to an AI model API endpoint and receives the responses, we'll be using this for adversarial testing and we'll use a file of pre-prepared prompts, an API endpoint connecting to our alert... Rephrase. An API endpoint connecting to our [Ollama](../../Glossary/Tool/Ollama.md) mistral AI model. The script has a guardrail stub and allows for logs to be generated should there be any issues detected. These logs will, in a production environment, be forwarded to and monitored by as seen.
>
> **[1:37](https://www.linkedin.com/learning/ai-product-security-incident-response/test-harness-for-ai-logging?u=76281980&t=97)** Let's take a look at the attack script called prompter.py. It's a simple text file reader, each line being a prompt, which we send to an endpoint. For the purposes of testing, we're hard coding the IP address, which is our AI server on 192.168.1.41, and the port, which is 5455. All we do is send each prompt from the file to the API endpoint and read the response. Now let's look at the AI application, nano modeller.py.
>
> **[2:31](https://www.linkedin.com/learning/ai-product-security-incident-response/test-harness-for-ai-logging?u=76281980&t=151)** This is a cherry pie application, which runs an API endpoint, which exposes port 5545. It consists of a single endpoint defined in the function index, which reads the message as a string. The processing flow for the message includes a function called check for running a guardrail on the string and logging any issues, a call to the mistral model using ollama.chat and another call to check the model response. The subfunction called check currently creates a log every time it runs. But when we use it, we'll code this to run the guardrail and create a log only if the guardrail detects an issue. We can apply this test harness to prompts that contain specific issues and use it to test the efficacy of various guardrails in detecting those issues. In a production environment, we'd use a similar approach in our AI application to detect and log issues that, after triage, may become incidents. Let's use this test harness to try out a specific toxicity checker guardrail, and then we'll use it to test a general purpose guardrail called LLM Guard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [Ollama](../../Glossary/Tool/Ollama.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (5), json (2), llm (1)
> **File Paths:** prompter.py (1), modeller.py (1)
> **CLI Commands:** python (1)
> **Ports:** port 5545 (1)
> **Versions:** 192.168.1 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### [Detecting toxicity](https://www.linkedin.com/learning/ai-product-security-incident-response/detecting-toxicity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/detecting-toxicity?u=76281980&t=0)** - [Instructor] Let's use our test harness with the toxic trig library for testing toxicity. I've already used PIP to install toxic trig, so let's take a look at the updated modeler code, nano modeller_toxic.py.
>
> **[0:22](https://www.linkedin.com/learning/ai-product-security-incident-response/detecting-toxicity?u=76281980&t=22)** There's very little change to the test harness here. All we've done is sent the content to the toxic trig checker and let it decide whether or not there's an issue. If there's one or more issues, we'll log them. For the purposes of demonstrating detection, we're not blocking the prompts or responses, just generating logs. Let's start up the API endpoint, python3 modeller_toxic.py.
>
> **[1:01](https://www.linkedin.com/learning/ai-product-security-incident-response/detecting-toxicity?u=76281980&t=61)** Okay, back on our Kali system, we've got a file of five prompts, some with good content and some with bad. Let's run them through the API endpoint, python3, we'll use our prompter.py script and use the mixed.txt file. We can see each of the prompts being sent. Now that it's finished sending the five prompts, let's go check our logging on the endpoint host.
>
> **[1:41](https://www.linkedin.com/learning/ai-product-security-incident-response/detecting-toxicity?u=76281980&t=101)** And we will close the application and we can check the sys log with sudo cat /var/log/syslog,
>
> **[1:57](https://www.linkedin.com/learning/ai-product-security-incident-response/detecting-toxicity?u=76281980&t=117)** and we'll filter out everything but our AI logs.
>
> **[2:05](https://www.linkedin.com/learning/ai-product-security-incident-response/detecting-toxicity?u=76281980&t=125)** Okay, and we can see here we've logged two cases of inappropriate activity. The first has logged just the prompt as it's asking about killing, and the second has logged both the prompt and the response as a precaution as it refers to Islam. These logs will be easy to detect in our seam as we've tagged them AILog.

> [!info]- Semantic Content
>
> **CLI Commands:** python3 (2), pip (1), sudo (1), cat (1)
> **File Paths:** modeller_toxic.py (2), prompter.py (1), mixed.txt (1)
> **Env Vars:** api (2), pip (1)
> **Code Identifiers:** modeller_toxic (2)
> **Definitions:** refers to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Logging llm-guard](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980&t=0)** - [Instructor] LLM Guard is a commercial guardrail, which scans both prompts and responses for a range of issues. It offers a limited community version, which can be installed simply with Pip, and I've done that already, so we're good to go. Let's see how we can implement the LLM Guard guardrail processing in our test harness, and generate logs when LLM Guard detects an issue on either the prompt or the response. We'll go nano modeller_guard.py,
>
> **[0:40](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980&t=40)** There's a bit more to add here, as we need to include not only the base LLM guard library, but also the libraries for each of the scanners we're using. We can see we're using four input scanners and four output scanners. LLM Guard has many more scanners, including checks for gibberish, for coding the output, for malicious URLs, and so on. However, we are fine for our demonstration with just using the scanners we've defined. Let's quickly review them. We'll check for any sensitive data that we need to redact with the Anonymize scanner, as well as checking for prompt injections and toxicity. We'll also check for any prompts which might overload our AI model by specifying the TokenLimit scanner. We check for relevance in the response, for any sensitive data leakage, and for any indication of forced responses by using the NoRefusal scanner. Because we're using the Anonymize scanner for our input, we need to set this up with a corresponding output scanner, and the vault provides temporary storage area for any sensitive data, which is taken out of the prompt, and which will then be reinserted into the response once we receive this back from the AI model. We declare a variable, prompt_in, to store the sanitized version of the prompt, and this is what we'll send to Mistral. We also use this when we check our response to support the post model, deanonymize processing.
>
> **[2:15](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980&t=135)** Once again, in the check function, we check the dictionary of issues returned from the scanner, and if any issues have been found, we log the offending prompt or response. Okay, let's start up the API endpoint, python3 modeller_guard.py.
>
> **[2:41](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980&t=161)** And we've loaded our scanners, and the application has started. Let's go back to our Kali system, and we'll send the same mixed file of prompts through to the API endpoint using LLM Guard now, python3 prompter.py mixed.txt.
>
> **[3:11](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980&t=191)** We'll see as each of the prompts is sent through. And we can see LLM Guard is spending more time checking the response, but that's now finished. All five prompts have been sent, so let's go check our logging on the end point point host.
>
> **[3:34](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980&t=214)** And again, we'll stop the application and check the syslog with sudo cat /var/log/syslog | grep AILog.
>
> **[4:01](https://www.linkedin.com/learning/ai-product-security-incident-response/logging-llm-guard?u=76281980&t=241)** We can see three earlier logs, and in addition, LLM Guard has logged just the one case of potential violence, as the filters on LLM Guard don't kick in for the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Islam. As before, this log will be easy to detect in our scene, as it also contains the keyword, AILog.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** llm (9), api (2)
> **CLI Commands:** python3 (2), pip (1), sudo (1), cat (1), grep (1)
> **File Paths:** modeller_guard.py (2), prompter.py (1), mixed.txt (1)
> **Code Identifiers:** modeller_guard (2), prompt_in (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The challenge of hallucinations](https://www.linkedin.com/learning/ai-product-security-incident-response/the-challenge-of-hallucinations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/the-challenge-of-hallucinations?u=76281980&t=0)** - [Narrator] LLMs do their best to provide an answer to our questions, and their training can make them keener to provide an answer than is sometimes wanted. This is when we get what is known as a hallucination. Something made up to satisfy a question, even if there are no facts to back it up. Essentially, the AI model has provided the best answer it can from its training data. There are three types of hallucinations. Intrinsic hallucinations are where the AI model manipulates information such that it contradicts what's in the source material, and based on the prompt is verifiably wrong. Extrinsic hallucinations occur when the AI model's response can't be verified using the prompt and we have no easy way of verifying its authenticity. Incoherent hallucinations occur when the AI model doesn't answer the question, but instead ignores the instructions and provides a response that's irrelevant. Detecting hallucinations isn't easy. Let's take a simple example of a hallucinated response, which we'll force out of our TinyDolphin AI model. And we'll use [Ollama](../../Glossary/Tool/Ollama.md) to run tinydolphin, and we'll ask it How long did it take Matthew Webb to first cross
>
> **[1:35](https://www.linkedin.com/learning/ai-product-security-incident-response/the-challenge-of-hallucinations?u=76281980&t=95)** the English Channel on foot? And it took him over six months to cross the English Channel using his bare hands and feet. Okay, let's try another example. And this time we'll use [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) 3.2. Here we see that Proxima Centauri is 40 trillion kilometers from Earth, give or take a few kilometers. Let's use Llama 3.2 to see what it thinks about the distance between Earth and Proxima Centauri. ollama run llama3.2. So, it's located about 4.24 light-years away and is approximately 26.8 trillion kilometers when measured at its closest point. Okay, let's try that again, and we'll use Mistral.
>
> **[3:04](https://www.linkedin.com/learning/ai-product-security-incident-response/the-challenge-of-hallucinations?u=76281980&t=184)** And we'll ask exactly the same question.
>
> **[3:22](https://www.linkedin.com/learning/ai-product-security-incident-response/the-challenge-of-hallucinations?u=76281980&t=202)** Mistral thinks it would be around about 40.3 trillion kilometers, give or take a few. Clearly maths isn't a strength of Llama 3.2. There are some techniques we can use to detect hallucinations. The first is grounding, in which we provide relevant additional context as part of the prompt. This is the approach we use when we provide context through [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md). The second technique is to force the AI model to deliver structured outputs, for example, as [JSON](../../Skills/Web%20Development/JSON.md), and this helps reduce the vague ramblings of the model, and we get more specific keyword value pairs. The third technique is to use more advanced chain of thought approach, where we help the AI reason through its response. And finally, we can go one step further and accept the cost, and use larger, more advanced AI models. Why don't you pause the course and take a few minutes to check out the examples we've shown on some other AI models, such as [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) or Claude to see how well they respond.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (3), [Ollama](../../Glossary/Tool/Ollama.md) (2), [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Versions:** 3.2 (3), 4.24 (1), 26.8 (1), 40.3 (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)


### 4. AI Incident Response

[↑ Back to Table of Contents](#table-of-contents)

#### [Responding to an AI incident](https://www.linkedin.com/learning/ai-product-security-incident-response/responding-to-an-ai-incident?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/responding-to-an-ai-incident?u=76281980&t=0)** - [Narrator] There may be a tendency to think of response to an AI system malfunction as purely a technical issue, but in reality, AI systems are integrated into a complex organizational ethical and legal business environment. When an AI system misbehaves, the impacts can be multidimensional. A recognized framework for [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) is provided in the [NIST](../../Skills/IT%20Help%20Desk/NIST.md) Computer Security Incident Handling Guide, and we can use that to help determine what our AI incident response process should look like. Having detected an issue and triaged it to confirm it's an incident, we'll need to think about containment, eradication, and recovery. Having prepared for an AI incident, we'll be ready to activate our AI incident response team and pull the relevant AI incident response plan that we've practiced in crisis exercises many times. This, of course, is a best-case scenario, but it's one for which we need to strive. We'll need to do a rapid initial impact assessment, which delivers sufficient information to brief seniors who may be asked to front the media or a government committee. We'll also brief them on any regulatory or commercial issues that might be in play, such as communicating the issue to an upstream service provider. From a technical perspective, we'll have a team running whatever forensics we can
>
> **[1:33](https://www.linkedin.com/learning/ai-product-security-incident-response/responding-to-an-ai-incident?u=76281980&t=93)** to determine what happened and why, through to root cause. As we move from detection to response, we need to consider how we contain the situation, which may be a wider cyber incident started through an initial attack on an AI model, or it may be limited to the AI service itself. If it's resulted in a wider network issue, then the response will likely be managed as a typical IT problem. A key decision for an AI incident will be whether we keep the service running or shut it down. If it's an isolated case of mildly inappropriate response and we can't reproduce it, we may decide to let the service run. If it's a torrent of toxic material in the response, then we'd certainly want to terminate it until we resolve the issue. We'll need to have a business continuity plan already prepared and able to be implemented should we decide to terminate the service. Our primary reason for investigating and gathering evidence during an incident is to resolve the incident. However, when investigating an incident that has occurred as a result of external malicious activity, we may want in addition to collect and preserve evidence for subsequent court proceedings. In such cases, evidence will need to be collected according to procedures that meet all applicable laws so that it will be admissible in court.
>
> **[3:06](https://www.linkedin.com/learning/ai-product-security-incident-response/responding-to-an-ai-incident?u=76281980&t=186)** A detailed chain of custody log should be kept. For incidents due to an AI model misbehaving, the issues are much different. Here we need to be able to track back from the model response to the prompt which caused it, and to any augmentation data used to process the prompt. We need to have details of any fine-tuning that's occurred, as well as details of the original training or the pre-trained model that was used in case the underlying model is flawed. With all this information, we can start to unravel the reasons for the AI misbehaving. While understanding why the issue occurred is critical, it's also very important to understand what can be done to mitigate any harm. In analysis of 100 incidents, [trustable.ai](https://trustable.ai) identified the top 10 follow-on actions shown here. We can see a significant focus in the incident surveyed is correcting the issue in the model, including adding guardrails, followed by apologizing. It's important to note that a significant number of incidents resulted in government investigations and/or civil lawsuits, and we need to take as much proactive action as possible to minimize the risk of this. Eradication is an important part of our AI incident response. We need to apply the technical fixes and guardrail improvements necessary, and then we need to employ extensive documented testing
>
> **[4:42](https://www.linkedin.com/learning/ai-product-security-incident-response/responding-to-an-ai-incident?u=76281980&t=282)** to confirm that the problem has been eradicated. Given the unpredictable nature of AI responses, this can be challenging. We shouldn't forget, of course, that we need to harden and security test our upgraded AI system prior to deploying it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (5), [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [trustable.ai](https://trustable.ai) (1)
> **Env Vars:** nist (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Documenting the response](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=0)** - [Instructor] The first thing we'll see directly after an incident occurs is a trouble ticket being raised to identify an event that requires attention. This could then be triaged as a false positive and be closed, or as a routine issue and be addressed as business as usual. However, some events will be triaged as an incident requiring investigation. osTicket is an open-sourced ticketing system, and we'll take a look at how we might use this to manage an AI incident. You can check out the installation of this application in my Complete Open Source course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. Let's assume we're a user that's been provided with personal information for another user when using an internal AI-enabled HR system. We're at the Support page for ticketing, and we can open a new ticket. We'll enter our details. We'll select Report a Problem as the Help Topic. Okay, and we'll create a ticket.
>
> **[1:24](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=84)** Let's now go to the login page for ticket administration.
>
> **[1:32](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=92)** And we'll login, login in as ostadmin; ostadmin.
>
> **[1:46](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=106)** osTicket has two administrator views. We're at Agent Panel where we'll do most of our work. And we can see the ticket that was just raised. We'll come back to this shortly. Let's switch to the Admin Panel and check out our System Settings. If we hover over the Agents field and select Teams from the drop-down, we can see the three SOC teams. Level 1 Support, Level 2 Investigations, and Level 3 Responders. We can see the Support team is run by Akhtar and there are 6 team members. If we select Level 1 Support and check the Members tab, we can see the team. Okay let's go back to the Agents Panel. And we can see that the new ticket has a Normal priority, and is not yet assigned. Let's assign this to a Support team member for triage. We'll click on the ticket. Let's change the priority of this ticket. We'll click on Priority Normal in the body of the ticket and change it to High.
>
> **[3:02](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=182)** And we'll Update. We can then select the person icon and assign this to Level 1 Support. We won't worry about entering a reason.
>
> **[3:24](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=204)** Okay, let's log out now.
>
> **[3:33](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=213)** Let's just go back to the Support Center
>
> **[3:41](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=221)** and select Sign In. And then select I'm an agent, sign in here.
>
> **[3:55](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=235)** And we can see we're directed back to the Admin Portal. So let's log in as the team leader for Level 1 Support. We can now see that we have the support ticket assigned to our team. We could pass it on to another member of the team, but let's just open it and deal with it ourselves. In the body of the ticket, we have a thread showing the messages for this ticket, and there's a note that the priority level was updated, as it could be a personal information leak. We'll carry out our own check of the system and find that while issue can't be directly reproduced, the information being provided by the AI agent is somewhat confusing. At this stage, we'll triage this as a potential incident. Let's select Post Internal Note. And add. We'll post the note.
>
> **[5:02](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=302)** And then we'll go up to the top of the ticket and assign the ticket
>
> **[5:16](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=316)** to team Level 2 Investigations with the note and assign that. And we'll log out now. Now we'll log in as Sam Spade, and we find the ticket has been assigned to our team. When we open it and check, we can see the message thread on the ticket. Sam's a bit busy at the moment, so he'll assign this to Nicky to investigate.
>
> **[6:12](https://www.linkedin.com/learning/ai-product-security-incident-response/documenting-the-response?u=76281980&t=372)** We can continue assigning and updating the ticket through the triage into the response, and through to incident resolution and closure. We can retain the ticket in the osTicket Knowledge Base to ensure that we can use this as a future incident intelligence and for training purposes. We'll leave the ticket here now, but we can see that a trouble ticket system such as osTicket provides a great way to retain documentation on each stage of an investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** click on (2), go to (1), switch to (1), select the (1)
> **Code Identifiers:** osticket (4)
> **CLI Commands:** find (2)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** soc (1)
> **Analogies:** such as (1)


### 5. Incident Communications

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the Knight-Nurse framework](https://www.linkedin.com/learning/ai-product-security-incident-response/introduction-to-the-knight-nurse-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/introduction-to-the-knight-nurse-framework?u=76281980&t=0)** - [Narrator] Professors Richard Knight and Jason Nurse published an important paper in 2020 outlining a framework for effective communications after an enterprise cyber incident. This is very much a practical approach rather than an academic one, and it's been picked up by many governments as part of their national guidance. We refer to this as the Knight and Nurse framework, and it's just as relevant, if not more so for AI incidents as it is for pure cyber incidents. During their background research, the authors identified a number of themes in past research and practice in [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) communications. The top five themes are as shown with stock market reaction being the most important. For that issue, the research indicated a likely drop in share price following a data breach, possibly as the result of the knee-jerk reaction of some investors. However, their research also indicated that the use of communication strategies to demonstrate that the organization is committed to stakeholders and to addressing the problem can reduce the impact on its share price. The Knight-Nurse framework for communicating a crisis starts with a pre-crisis phase where the organization prepares for communications. This phase covers five activities. Decide the aims of the communication. Is it to satisfy legal obligations such as a requirement to notify?
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/introduction-to-the-knight-nurse-framework?u=76281980&t=94)** Is it to minimize company losses or reputational damage, or is it to protect sales and share price? Making sure the organization has a fit for purpose [Cybersecurity](../../Topics/Cybersecurity.md) regime is a good foundation for positive communications. Maintaining a capability to communicate in a response is central to the preparation stage of the framework. It requires not just technology systems, but also education of key personnel with particular focus on the security regime in place to prevent incidents. Establishing and maintaining a knowledge base requires time and during a crisis is not the right time to do this. This needs to be done before a crisis occurs. In particular, identifying key decision-makers and regulatory obligations. Having pre-made plans, which incorporate communications aspects helps guide the incident communications, and our useful memory joggers for establishing the relevant facts prior to a communications event. Incorporating partners into the communications planning and exercising is a useful way of making sure that a single voice can be used during communications. We may want to make this a requirement in contracts. Finally, running crisis exercises and practicing the communications is a good way to become fluent in the communications activities, and will pay dividends when faced with an actual crisis. As with any activity, good planning will pay dividends,
>
> **[3:09](https://www.linkedin.com/learning/ai-product-security-incident-response/introduction-to-the-knight-nurse-framework?u=76281980&t=189)** and more so in stressful situations such as AI incident.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [When and how to communicate](https://www.linkedin.com/learning/ai-product-security-incident-response/when-and-how-to-communicate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/when-and-how-to-communicate?u=76281980&t=0)** - [Instructor] There are some decisions we need to make around when to communicate, and there's quite a lot to think about as we do that. For an event in which customers are impacted, and particularly where the impact requires action from them, for instance, closing credit card accounts, it's better to notify our customers as quickly as possible so as to minimize the chances that there could be follow on impacts as criminals start to use the cards. Where we've suffered a serious data breach, we need to be aware that the real victim isn't our business, it's our customers, and they may feel quite vulnerable if they don't know exactly what's happened, how much of a risk it is to them, and what they should do. We need to lead that messaging in order to retain their trust. When there's a legislative requirement that we notify the authorities of a breach, we've got little choice but to do so as expeditiously as possible. Legislative requirements for notification often come with an associated requirement to notify impacted stakeholders. Another reason to disclose early, even if we have no legislative obligation to do so, is to be able to frame the messaging so that we're in control of the communications. It's generally easier to do that at an early stage rather than hide the issue and then try to take control later. We need to consider not just our customers, but the weight of general opinion which may influence our customers.
>
> **[1:33](https://www.linkedin.com/learning/ai-product-security-incident-response/when-and-how-to-communicate?u=76281980&t=93)** Taking the issue into the public arena with the expectation of media attention is best done as soon as we have a properly framed message to communicate, so that we're in control of the messaging. In order to communicate, we'll often have to balance accuracy and details with timing, something that's not always easy to do. In fact, for some incidents, we may never know all the details of the attack. If we do make the incident public, we'll want to make sure the impacted stakeholders know first and hear it directly from us. And finally, if we're a public company, we should be conscious of any risk of insider trading. If we withhold information and someone who is aware of the incident trades their shares, such actions do not go down well with regulators. The next issue is how we communicate to authorities, impacted stakeholders, and the general public. We have both direct and indirect options. The former includes website notifications for the wider public, and email, postal mail, or calling impacted stakeholders. We can also use, as an indirect option, traditional or social media to announce the issue. There are pros and cons as shown to each option. We may not have email or phone contact details, and traditional mail may be too slow. It can, however, be a useful follow-up means of contact
>
> **[3:06](https://www.linkedin.com/learning/ai-product-security-incident-response/when-and-how-to-communicate?u=76281980&t=186)** if we have physical address details. Telephone calls can seem to be a bit more personal, but in these days of telephone scams, they may easily be a misinterpreted and they can be seen as intrusive. They may reinforce a negative view of our business. The data breach at TalkTalk in 2015 is an excellent case study in what not to do. When the breach occurred, the company failed to notify its customers. The breach was eventually discovered when customer details were found for sale on a dark website. TalkTalk got it wrong. And not only was the CEO Baroness Dido Harding forced to resign, but the company also incurred a very large fine from regulators. Once we've communicated our message, we need to be ready to respond to any further inquiries seeking more information, and to counter any scams that might crop up seeking to take advantage of the situation. If we've communicated just with stakeholders, we should expect the information to leak to the media and we should be prepared to deal with media inquiries.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** ceo (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [What to communicate](https://www.linkedin.com/learning/ai-product-security-incident-response/what-to-communicate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/what-to-communicate?u=76281980&t=0)** - [Instructor] Having decided when to communicate, the next thing to think about is what our messaging will be. This is a most critical decision, as it will have lasting effects upon the business. The Knight-Nurse framework provides clear guidance on what we should and shouldn't say in our messaging for a data breach, and we can reflect upon the same approach for an AI incident, as shown here. While it's not AI-related, we can still learn a lot from the TalkTalk incident about how to communicate in the event of an AI incident. Let's revisit the incident to see how Baroness Dido Harding got the messaging wrong. In the interview, she looked flustered and used the phrase, "We just don't know," a number of times. Despite apologizing for the breach, which was a good start, she was uncertain about the technical nature of the attack. Suggested all 4 million customer accounts were breached and confessed that she did not know how much of the stolen data was encrypted. Investigators later put the number of accounts breached at 400,000. Dido Harding's obvious lack of knowledge was a serious trust issue, which caused her to lose her job and had an adverse reputational impact on the company. There's a lot to think about here, but some very clear messages. The first and last is that we need to accept responsibility for the incident, whether it's a data breach in which the data that was used to train the model
>
> **[1:34](https://www.linkedin.com/learning/ai-product-security-incident-response/what-to-communicate?u=76281980&t=94)** was extracted, or whether it was a model that spews out toxic content. It's our model and we're accountable for its safe and responsible operation. Even if we obtain the model from a supplier, it's up to us to test it to make sure it's fit for purpose and secure. Blaming someone else, our users or suppliers, just seems like we don't take our responsibility seriously, and will almost certainly cause a substantial drop in customer trust. We need to not downplay the incident or make a joke of it. If we've caused feelings of concern or caused harm to our customer base, then laughing it off will just make matters worse. At the same time, we must be careful not to overplay the incident, as Baroness Harding did, as it causes a lot of unnecessary concern and shows that we don't know what we can be reasonably expected to know about the incident. We need to be very conscious that if we've made our customers uncomfortable or unhappy with whatever the incident was, we need to take it seriously. The Tay incident in which [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) promoted an AI service to teenagers, which then began responding with inappropriate and toxic comments, had an impact on parents, as well as amplified the damage substantially. In addition to the guidance itself, the framework also makes a number of suggestions of things that should be considered and may be part of the messaging, but also part of what we need to be aware of
>
> **[3:08](https://www.linkedin.com/learning/ai-product-security-incident-response/what-to-communicate?u=76281980&t=188)** in advance of any media questions. The first is whether we've had an AI incident before. If we have, it's a sign we don't have a particularly good approach to testing our AI models and services before they're launched. This will be of concern not only for this service, but any future AI services we might want to offer. Similarly, if we didn't discover the issue, then we're clearly not taking steps to ensure our service is fit for purpose, and that reflects badly on both our integrity and our competence. Our first and continuing messaging will be the deciding factor as to whether we have an incident that our customers are supporting as in resolving, or whether we have not only an incident, but a lot of unhappy customers that are at high risk of leaving. The effort we put into preparing to communicate and communicating well will pay off manyfold as we respond to the incident.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **CLI Commands:** make (3)
> **Warnings:** be careful (1), be aware (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Special considerations for AI models](https://www.linkedin.com/learning/ai-product-security-incident-response/special-considerations-for-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/special-considerations-for-ai-models?u=76281980&t=0)** - [Instructor] There are one or two special considerations that we need to keep in mind when it comes to AI incidents. The first is that AI is a new technology and there's a lot of hype around it. So an AI incident can blow up into a media storm at any time. Being on top of the [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) and being prepared for questions from the media at any time during or after the incident is an important part of managing the response. Unlike standard [Cybersecurity](../../Topics/Cybersecurity.md) incidents, AI incidents can occur when an AI system perpetuates or amplifies biases, leading to unfair outcomes or produces toxic or hallucinatory responses. Communicating in such incidents requires not only a good understanding of AI technology, but also a solid grasp of how to communicate AI concepts easily and with the correct nuance to an audience that's not familiar with what goes on under the hood of an AI system. AI systems may have been trained on large amounts of sensitive data. Even though the data is not in a readable form, an AI incident may involve data breaches or unauthorized access, requiring careful assessment of whether there's been a data breach. AI incidents can escalate quickly due to the automated nature of these systems. This is particularly the case when we have agentic systems
>
> **[1:35](https://www.linkedin.com/learning/ai-product-security-incident-response/special-considerations-for-ai-models?u=76281980&t=95)** which can take actions unilaterally. AI is also a somewhat unpredictable technology and may exhibit unexpected behavior, making containment challenging, an explanation even more so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next](https://www.linkedin.com/learning/ai-product-security-incident-response/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-product-security-incident-response/what-s-next?u=76281980&t=0)** - [Instructor] In this course, you've learned how to prepare for and respond effectively to an AI incident. [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) is just one aspect of using AI technologies, and AI is a fast-moving field with advances being made daily. Make sure to call back and check for new content so you can stay up to date with this fascinating field. I'd like to invite you to go to my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning page and check out my other [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and [Cybersecurity](../../Topics/Cybersecurity.md) courses. You'll find a number of courses, covering a wide range of topics from [Cybersecurity Foundations](../Cybersecurity/Cybersecurity%20Foundations.md), through to specialist areas, such as zero trust and [AI Security](../../Skills/Cybersecurity/AI%20Security.md) testing. To learn more about artificial intelligence, do check out that part of the LinkedIn Learning Library. Thanks again for joining me on this course, and I hope to see you again soon for more courses on cybersecurity and artificial intelligence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (3), [Cybersecurity](../../Topics/Cybersecurity.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Incident Response](../../Skills/Cybersecurity/Incident%20Response.md) (1), [AI Security](../../Skills/Cybersecurity/AI%20Security.md) (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Malcolm Shore](../../Instructors/Cybersecurity/Malcolm%20Shore.md)

## Resources

- Exercise files available

## Skills Covered

- Product Security
- Security Incident Response
- Incident Response

## Path Context

### In [Building AI Products- Security Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Security%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)
← [AI Product Security- Secure Architecture, Deployment, and Infrastructure](AI%20Product%20Security-%20Secure%20Architecture%2C%20Deployment%2C%20and%20Infrastructure.md) | **4 of 5** | [AI Product Security- Testing, Validation, and Maintenance](AI%20Product%20Security-%20Testing%2C%20Validation%2C%20and%20Maintenance.md) →

### In [Leverage AI as a Cybersecurity Analyst](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Leverage%20AI%20as%20a%20Cybersecurity%20Analyst.md)
← [The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview](The%20OWASP%20Top%2010%20for%20Large%20Language%20Model%20(LLM)%20Applications-%20An%20Overview.md) | **4 of 7** | [XAI and Interpretability in Cybersecurity](XAI%20and%20Interpretability%20in%20Cybersecurity.md) →

## Part of

- [Building AI Products- Security Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Security%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)

## Appears In

- [Building AI Products- Security Essentials Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Security%20Essentials%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)
- [Leverage AI as a Cybersecurity Analyst](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Leverage%20AI%20as%20a%20Cybersecurity%20Analyst.md)

## Related Courses

_Courses sharing skills:_

- [AI Product Security- Testing, Validation, and Maintenance](AI%20Product%20Security-%20Testing%2C%20Validation%2C%20and%20Maintenance.md) — Product Security
- [AI Product Security- Secure Architecture, Deployment, and Infrastructure](AI%20Product%20Security-%20Secure%20Architecture%2C%20Deployment%2C%20and%20Infrastructure.md) — Product Security
- [AI Product Security- Building Strong Data Governance and Protection](AI%20Product%20Security-%20Building%20Strong%20Data%20Governance%20and%20Protection.md) — Product Security
- [Welcome To The Building Ai Products Security Essentials Professional Certificate](Welcome%20To%20The%20Building%20Ai%20Products%20Security%20Essentials%20Professional%20Certificate.md) — Product Security
- [Microsoft Security Copilot](../Cybersecurity/Microsoft%20Security%20Copilot.md) — Incident Response

---

[↑ Back to top](#)