---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-auditing-ai-systems
url: "https://www.linkedin.com/learning/introduction-to-auditing-ai-systems"
duration_minutes: 79
duration: 1h 19m
level: Beginner
updated: 9/19/2023
learners: 334419
skills:
  - AI Software Development
  - IT Audit
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFQ-T4a317kXw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694814155919?e=2147483647&amp;v=beta&amp;t=14WPhtMGwsnVUvOxaDFj_cpg9T2-CrXE2dtsd-dBkpw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Understanding Generative AI for Tech Leaders]]'
  - '[[Mastering Responsible AI- From Concept to Auditing]]'
prev_courses:
  - '[[ISO-IEC 42001-2023- Understanding and Implementing the Artificial Intelligence Management System (AIMS) Standard]]'
  - '[[Building a Responsible AI Program- Context, Culture, Content, and Commitment]]'
next_courses:
  - '[[Introduction to AI Governance]]'
  - '[[Algorithmic Auditing and Continuous Monitoring]]'
path_nav: '[{"path":"Understanding Generative AI for Tech Leaders","position":14,"total":22,"prev":"ISO-IEC 42001-2023- Understanding and Implementing the Artificial Intelligence Management System (AIMS) Standard","next":"Introduction to AI Governance"},{"path":"Mastering Responsible AI- From Concept to Auditing","position":6,"total":7,"prev":"Building a Responsible AI Program- Context, Culture, Content, and Commitment","next":"Algorithmic Auditing and Continuous Monitoring"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/it-help-desk
  - topic/security
  - topic/data-science
  - skill/ai-software-development
  - skill/it-audit
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20to%20Auditing%20AI%20Systems.md)

![Introduction to Auditing AI Systems](https://media.licdn.com/dms/image/v2/D560DAQFQ-T4a317kXw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694814155919?e=2147483647&amp;v=beta&amp;t=14WPhtMGwsnVUvOxaDFj_cpg9T2-CrXE2dtsd-dBkpw)

# Introduction to Auditing AI Systems

> AI regulation is here, so you may be wondering how to adapt. And if you’re an enterprise organization, startup, or AI practitioner, you probably already know that there are very few existing training resources for technical teams. In this course, instructor Ayodele Odubela gives you a hands-on overview of how to assess AI for bias and discrimination to create fairer AI systems.Explore the fundamen

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems) | 1h 19m | Beginner | 334K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome to the new world of AI audits](#welcome-to-the-new-world-of-ai-audits)
- [**1. New Paradigm of AI Audits**](#1-new-paradigm-of-ai-audits) (4 videos)
  - [What is an AI audit?](#what-is-an-ai-audit)
  - [How are audits used?](#how-are-audits-used)
  - [The state of AI legislation](#the-state-of-ai-legislation)
  - [Ethics of scoring and classifying humans](#ethics-of-scoring-and-classifying-humans)
- [**2. Why Audit AI Systems?**](#2-why-audit-ai-systems) (4 videos)
  - [AI audit limitations and opportunities](#ai-audit-limitations-and-opportunities)
  - [Development workflows](#development-workflows)
  - [AI performance](#ai-performance)
  - [Statistical parity](#statistical-parity)
- [**3. Data for AI Audits**](#3-data-for-ai-audits) (3 videos)
  - [Data for auditing AI](#data-for-auditing-ai)
  - [Sources of bias in data](#sources-of-bias-in-data)
  - [Types of bias and data sampling methods](#types-of-bias-and-data-sampling-methods)
- [**4. Principles for AI Audits**](#4-principles-for-ai-audits) (4 videos)
  - [Why explainability matters](#why-explainability-matters)
  - [Levels of transparency](#levels-of-transparency)
  - [Responsible AI principles: Compliance](#responsible-ai-principles-compliance)
  - [Preparing for AI regulation](#preparing-for-ai-regulation)
- [**5. Model Audits**](#5-model-audits) (6 videos)
  - [Types of model audits](#types-of-model-audits)
  - [Stages of a model audit](#stages-of-a-model-audit)
  - [Model audit: Home loans](#model-audit-home-loans)
  - [Auditing training data](#auditing-training-data)
  - [Audit outcomes: Explainability statements](#audit-outcomes-explainability-statements)
  - [Continuous audits](#continuous-audits)
- [**Conclusion**](#conclusion) (2 videos)
  - [Generative AI](#generative-ai)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to the new world of AI audits](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/welcome-to-the-new-world-of-ai-audits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/welcome-to-the-new-world-of-ai-audits?u=76281980&t=0)** - Are you trying to decide whether or not your AI models need auditing or are you working to audit another firm's AI? If so, this course is for you. Hi, I'm Ayodele Odubela, a Data Scientist and AI Auditor. In this course, I'll cover what an AI audit is, the role of benchmark data, and steps you can take to mitigate algorithmic harm. You can take what you learn in this course and have meaningful conversations about how AI audits can help operationalize [[Responsible AI]] in your organization. So I'm calling all of you data professionals out there to join me on this learning journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (1)
> **Speakers:** - are (1)


### 1. New Paradigm of AI Audits

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an AI audit?](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/what-is-an-ai-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/what-is-an-ai-audit?u=76281980&t=0)** - [Narrator] Over the past two decades you may have heard about several incidents of harmful AI due to little governance and oversight. For example, facial recognition technology has been used to falsely arrest citizens, a result of skewed historical data, poorly designed [[Algorithms]], and a lack of mitigation strategies to avoid these consequences. These incidents have led to a reduced public trust in AI and its potential benefits. However, the situation is changing as new regulations are being implemented globally to address issues with how human data is collected and the decisions of AI systems. Since the adoption of the GDPR, there's been a growing emphasis on [[Responsible AI]] development. Companies must now collect data and build machine learning in ways that are compliant and, ideally, ethical. As a result, the AI audit has become a popular tool for understanding if an AI system or its components comply with company policy, industry standards, or regulations. An AI audit consists of various public disclosures, internal procedures, code tests and documentation to identify disparities in AI system outcomes. An AI audit typically identifies biased outcomes for various kinds of AI systems and focuses on auditing the data, model, or overall system outcomes. In addition, some AI audits attempt to identify the root cause of a performance disparity. It's critical that AI auditors and AI developers
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/what-is-an-ai-audit?u=76281980&t=95)** both outline the goals of an AI audit and what they hope the audit achieves. AI audits borrow from practices in financial auditing, which provide governance, [[Accountability]], and oversight. Audits look at the data, model, or reevaluate a previously audited system. As AI has been adopted and used more widely in high risk scenarios, such as healthcare and finance, AI systems are increasingly used to make critical decisions. For example, determining which patients are seen first in an emergency room. In such situations, the risk to human life is very high. Algorithmic audits can be performed internally, meaning the people who work for the company that develop the algorithm are tasked with evaluating it, or externally, meaning a third party group of auditors analyze the outcomes of an AI system. There are various challenges with each that we'll discuss later in this course. To conduct an AI audit, practitioners rely on industry standards, such as the [[NIST]] AI [[Risk Management Framework (RMF)|Risk Management Framework]], or other regulatory guidance. There's a growing movement in algorithmic auditing that's more community-based, similar to the well-established practice of bug bounties, where external hackers are rewarded for finding vulnerabilities and bugs in software. While AI auditing is on the rise, there are a few governing bodies that audit and monitor the auditors. This course aims to provide you with an understanding of what an AI audit should look like and an overview of third-party audits. Third-party audits help ensure that auditing organizations
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/what-is-an-ai-audit?u=76281980&t=191)** don't falsify positive results to benefit themselves. At the same time, auditors should also face downsides when they falsely label AI systems as compliant. The results of an AI audit are used to identify areas for improvement and aid in the development of harm mitigation plans. AI systems can unintentionally cause harm to people through misidentifications or getting wrongfully denied financial opportunities. Biased AI can also lead to allocation harms, where automated decisions unfairly extend or withhold resources, or quality of service harms, where AI systems don't work as expected for some groups as they do for others. Lastly, AI systems can exhibit stereotyping harms. This happens when [[Supervised Learning]] systems use historical data to stereotype people based on past examples and assume similar patterns when faced with data subjects who have similar attributes, such as race and gender. Most external audits happen after a model is already built, so they can cause harm even before they're assessed. Now that we have a basic understanding about the context around why we audit AI systems, let's go over how we use AI audits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Responsible AI]] (1), [[Accountability]] (1), [[NIST]] (1), [[Risk Management Framework (RMF)|Risk management framework]] (1)
> **Analogies:** such as (3), for example (2), similar to (1)
> **Env Vars:** gdpr (1), nist (1)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)

#### [How are audits used?](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/how-are-audits-used?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/how-are-audits-used?u=76281980&t=0)** - [Instructor] The results of an AI audit are used for various purposes including improving the performance of AI systems, ensuring compliance with regulations, and [[Building Trust]] with internal and external stakeholders. While the recent push for AI audits aims to help companies stay compliant with regulations, audits can also be performed to better understand how bias impacts an AI system. As [[Responsible AI]] matures, we'll attempt to more concretely define harm mitigation techniques. AI risk assessments or impact assessments while important, often differ from AI audits. A risk assessment is a chance to make an informed guess about the kinds and levels of risk facing an AI system. These are often stepping stones to AI audits. Risk assessments involve various stakeholders but they often don't investigate outcomes based on assessing the predictions and algorithm makes on new data. They can also be conducted by various groups such as investigative journalists and government agencies, and they may not necessarily be assessed by technical means. Rather, risk assessments attempt to identify potential risks and inform mitigation strategies by prioritizing the most harmful risks to address first. Alternatively, AI audits are used to certify the results of an AI system are fair enough for use in the general public or in specific industries. Often the results of AI audits are either passing or failing to meet compliance with a regulation. Auditing companies also include recommendations
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/how-are-audits-used?u=76281980&t=96)** for changes to make, including the collection or use of new training data, retraining AI models, or changing the [[Algorithms]] used by the system. Another outcome of an AI audit is to ensure companies comply with regulation, especially in industries such as healthcare, HR, finance, and criminal justice. In these industries, AI systems are subject to additional [[Privacy]] and anti-discrimination laws. AI audits can also be used to build trust with stakeholders including customers, investors, and regulators. Audit results are expected to be communicated publicly. By communicating the results of an audit on the company's website, social media or in press releases, companies can demonstrate a commitment to one responsible AI principle, transparency. Providing clear communication about the outcomes of an AI audit whether positive or negative, help improve AI transparency practices. Some teams can also open source their data or models and ask for public feedback as a method of building trust. AI audits can also be used to identify potential biases in AI systems and sometimes help teams find the sources of these biases. The results of an AI audit need to be binary, either compliant or non-compliant to actually be effective. Considering most audits occur with regard to relevant regulations, an AI system can't merely break the law somewhat. AI audits have several functions. The first is to be a well-documented account
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/how-are-audits-used?u=76281980&t=190)** of the specifics of an AI system. Audits often reveal to technical teams where they can make improvements in [[Data Quality]] or modeling choices to make their systems work better for their data subjects. As we learn more about auditing AI systems throughout this course, keep in mind the AI audits are merely a process to check for [[Legal Compliance]]. Audits don't automatically make bias tools fair or ensure that ethical decisions are being made. For example, AI audits should avoid normalizing tasks that are harmful to certain communities. Facial recognition tools in practice have harmful effects including promoting gender stereotypes, surveillance issues, and excluding transgender, non-binary and gender non-conforming people. In this case, minimizing performance disparities may not be a responsible AI task, and we should more broadly consider if the tool is appropriate at all. Now let's talk about some new AI legislation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (3), [[Building Trust]] (2), [[Algorithms]] (1), [[Privacy]] (1), [[Data Quality]] (1)
> **CLI Commands:** make (5), find (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [The state of AI legislation](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/the-state-of-ai-legislation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/the-state-of-ai-legislation?u=76281980&t=0)** - [Instructor] AI legislation is becoming increasingly common across the world. Federal and local governments have introduced measures to regulate how AI is used to ensure that they comply with [[Privacy]] and transparency expectations. In 2018, the European Union's General Data Protection Regulation, or GDPR, which addressed the use of personal data and AI decisions, went into effect. It gives individuals the right to know how their data's being used and the right to have their data erased, among others. It also requires companies to ensure that their AI systems do not discriminate against certain groups of people and that they're transparent in their [[Decision-Making]] processes. Right before recording this course, the EU passed AI regulation to further guide the use of algorithmic tools. The regulation aims to prohibit the use of AI in high-risk applications, such as transportation and medical devices. The act also outlines the AI system should be audited before being used. Additionally, it proposes compliance with the GDPR for algorithm training data. China has taken a different approach to regulating AI. In 2019, China introduced its new generation [[Artificial Intelligence (AI)|artificial intelligence]] development plan, which aims to create a comprehensive AI industry and to develop a globally-leading AI innovation center. However, as AI technology advances rapidly, so too does China's regulatory framework. In 2022, China introduced new regulations on AI,
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/the-state-of-ai-legislation?u=76281980&t=96)** which require companies to disclose the [[Algorithms]] they use to ensure that their systems are transparent and accountable. African countries are also beginning to regulate AI. In 2021, Kenya introduced the Data Protection Act, which regulates the use of personal data within AI systems. The act requires companies to obtain consent from individuals before using their personal data. Singapore introduced the [[Personal Data Protection]] Act in 2012, which regulates the use of personal data used to train AI, then in 2021, Singapore introduced the Model [[AI Governance]] Framework, which provides guidance for companies on how to develop and deploy AI systems that impact Singaporeans safely. In 2019, the California Consumer Privacy Act, which requires companies to disclose what data they're collecting and gives consumers the right to opt out of having their data sold was passed. In order to be compliant with the CCPA, a business must show that they're protecting records that consumers agree to share with them, such as email addresses, social security numbers and browsing histories. Overall, the regulatory landscape for AI is changing rapidly. As AI technology continues to develop, it's likely that more countries will introduce legislation to regulate its use. The challenge for governments and companies alike will be to strike a balance between promoting innovation and ensuring the AI systems are developed and deployed responsibly. Let's talk more about [[Legal Compliance]] in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Decision-Making]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Algorithms]] (1), [[Personal Data Protection]] (1)
> **Env Vars:** gdpr (2), ccpa (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Ethics of scoring and classifying humans](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ethics-of-scoring-and-classifying-humans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ethics-of-scoring-and-classifying-humans?u=76281980&t=0)** - [Instructor] The [[Ethics]] of scoring and classifying humans has been a contentious issue in machine learning for some time. Machine learning is often described as applied [[Statistics]], which unfortunately has roots in some biased practices. The fathers of statistics, Francis Galton, Carl Pearson, and Ronald Fisher, were proud eugenicists who developed popular statistic methods to discriminate and improve the human gene pool through selective breeding and sterilization. As a product of statistics, AI often perpetuates unwanted patterns of data and raises concerns about the unfair treatment of marginalized groups. While modern approaches to scoring and classifying humans don't explicitly advocate for eugenic practices, they can perpetuate similar [[Forms]] of bias, including digital phenology. An algorithm trained on data that reflects existing social inequalities will likely associate demographic characteristics with negative outcomes. For example, the Compass algorithm is a risk-assessment tool used to predict the likelihood of a criminal defendant committing future crimes. The Compass algorithm is used by judges and probation officers to inform decisions about bail, sentencing, and parole. The algorithm was audited by ProPublica, and they found that Black defendants were far more likely than white defendants to be incorrectly classified at higher risk of recidivism, while white defendants were more likely than Black defendants to be incorrectly flagged as low risk.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ethics-of-scoring-and-classifying-humans?u=76281980&t=94)** To address these ethical concerns, researchers and practitioners in the field of machine learning proposed various approaches to promote fairness, transparency, and [[Accountability]]. These include the use of fairness metrics to evaluate the performance of [[Algorithms]] across different demographic groups. Additionally, there are ongoing discussions about which definitions of fairness to use and if data subjects should be considered individually or in groups. The question of whether it's ethical to score and classify people is a complex and nuanced one. Classification based on attributes often correlated with race, gender, sexual orientation, or disability can lead to unfair treatment, exclusion, and unequal access to opportunities. We must consider who benefits from projects that segment us. Overwhelmingly, it's organizations that collect personal data. Algorithms that rank and group people have few human-centered benefits, so we should assess the power imbalance that AI tools inherently take. Without the ability to opt out or use AI tools on large companies back, consumers are often vulnerable to decisions made on technical teams. Keep in mind that there are many philosophical questions to ask and that AI development is a socio-technical task. There are both technical and social aspects to development, and we should get used to contending with some of these conflicts. While algorithmic audits are are often framed merely in terms of technical fixes, it shouldn't just be engineers involved in the process. As an artifact of statistics route,
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ethics-of-scoring-and-classifying-humans?u=76281980&t=188)** we often use Western metrics to assign what's normal and the cases that are deprioritized for not meeting these arbitrary normal conditions. While we can inquire about what metrics we would have developed if not to advance a specific race, we must consider how dominant perspectives align mostly with those likely to be harmed the least. As there are various opinions about right and wrong, we may want to consider moving away from ethics as our frame of reference and look more towards taking accountability for outcomes. AI systems don't have to be technically flawed to cause harm, but looking merely at disparate impacts can let us miss the forest for the trees. To sum things up, AI has roots in statistics which were developed to rank and divide people, although modern uses don't uphold similar values. So we should be more thoughtful about how we make decisions about people. Now let's move on to the opportunities and limitations of auditing AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (5), [[Ethics]] (2), [[Accountability]] (2), [[Algorithms]] (2), [[Forms]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Why Audit AI Systems?

[↑ Back to Table of Contents](#table-of-contents)

#### [AI audit limitations and opportunities](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-audit-limitations-and-opportunities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-audit-limitations-and-opportunities?u=76281980&t=0)** - [Narrator] While AI audits provide a way to improve the outcomes of AI systems, there are various limitations that make it clear AI audits are not a silver bullet for [[Responsible AI]]. There are parts of AI that can be biased but get ignored by a typical audit. Some applications of AI are nuanced and can't be improved by purely technical means. For example, in the United States, studies show policing data is flawed due to patterns of policing in minority communities. So, AI systems that are trained on historical criminal records can have parity between groups, but raise serious ethical questions. In another example, [[Generative AI Tools]] have caused various worker strikes including the Writer's Guild of America and SAG-AFTRA, some of Hollywood's largest unions. The adoption of [[Generative AI]] raises many questions about worker rights, universal basic income, and copyright, but an AI audit can often neglect societal contexts. Another limitation is the lack of oversight for auditors. Currently, there are no formal qualifications or certifications required for AI auditors, leading to a lack of consistency in audit results. Lacking standards for audits can result in poor-quality assessments, pressures to give systems a passing grade, and inexperienced auditors certifying AI tools. Additionally, demographic data is a critical component for comparing outcomes across protected classes. Unfortunately, prior [[Data Privacy]] laws
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-audit-limitations-and-opportunities?u=76281980&t=94)** require companies to avoid collecting or eventually destroy demographic information, so auditors are in the vulnerable position to collect this data. This is a great example why regulation on AI and data privacy should be developed side by side. The process of being audited can often be a stressful one, leading companies to manipulate or modify their systems to seem more favorable than they really are. Making system changes under scrutiny is crucial to avoid. These preventative changes can hinder the effectiveness of an AI audit and lead to inaccurate results. In addition, companies may not always implement recommendations that aren't seen as severe. Despite these limitations, AI audits offer several opportunities, including the ability to avoid AI incidents by catching disparities before deployment. Ideally, companies will conduct internal audits in addition to monitoring AI performance and conduct routine audits. Regaining public trust is a concern for many companies, as fears around job replacement and contestability are important to the general public. With hype and attention at an all time high, consumers are skeptical about trusting organizations with their data. Being proactive rather than reactive about sharing model assumptions can make organizations leaders in responsible AI. AI audits also provide an opportunity to improve AI systems continually. By identifying areas for improvement through the audit process, companies can retrain and update their models
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-audit-limitations-and-opportunities?u=76281980&t=188)** to ensure they make preferable decisions consistently, which should also help models remain accurate and generalizable. Keep in mind, AI audits have both limitations and opportunities that must be carefully considered. While they can provide valuable insights into the fairness and performance of a system, auditors should also consider the broader ethical implications in addition to compliance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (2), [[Data Privacy]] (2), [[Generative AI Tools]] (1), [[Generative AI]] (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Env Vars:** sag (1), aftra (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Development workflows](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/development-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/development-workflows?u=76281980&t=0)** - [Instructor] The way we develop AI is heavily influenced by how leaders in Silicon Valley develop software. There's a race to get [[Microsoft Products|products]] to market investor-driven FOMO, or the fear of missing out, and a push for extremely high returns on investments. Ultimately, AI inherited poor engineering practices from traditional software. Product management teams often try to match industry analyst forecasts on timelines for developing software. However, these forecasts can't successfully be applied to AI tools. Many assume building AI takes the same form and time is traditional software but dealing with training data and model hyperparameters add complexity. The current AI development lifecycle promotes poor [[Data Privacy]] practices and hinders auditability. Changing development workflows requires teams to adjust incentive structures away from just profits. Often, organizations have ignored negative impacts and favored financial gains. While existing regulations have lacked adequate enforcement to change this. In minor cases, a tool may not work for someone, and in bad cases, there are people who will suffer severe harm to their mental health and financial stability. And in the worst cases, there can be life threatening consequences of AI that most developers and organizations aren't prepared to deal with. There have also been artists expressing hopelessness due to the popularity of AI-generated art
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/development-workflows?u=76281980&t=94)** as it may both infringe on their copyright as well as impede their ability to work. In the case of users dealing with sensitive mental health issues, AI companions can reinforce negative thinking patterns and encourage users to commit crimes or self-harm. Because AI harms can be life-threatening, technical teams must adjust how we develop AI, including the [[Design Patterns]] and deployment ecosystems. AI development follows a sequential workflow, where teams go through a series of stages such as [[Data Collection]], model building, testing, and deployment. A more responsible approach would include multi-stakeholder feedback, like from sociologists, behavioral scientists and domain experts, but also plan for continuous evaluation and user preferability testing. Teams should perform risk assessments to understand how any changes or updates might impact their users, data subjects, and society at large. These risk assessments will allow teams to think critically about how their systems can have disparate impact before development even starts. Remember, bias can enter and reenter AI systems at any stage of development. So at a minimum, better documentation can help mature any [[Responsible AI]] practice. Engineering teams should create data sheets for each training data set used to understand the origins, influences, and potential issues with the training data. Additionally, model cards are a way
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/development-workflows?u=76281980&t=188)** to document ML models, including their limitations, trade-offs, assumptions and intended usage. Teams should work closely with users and data subjects as they develop AI. User preferability tests require teams to gather users for a design session where proposed [[Algorithms]] can be demoed for feedback. This feedback can be used to communicate how an AI is implemented in their products. These changes allow external auditors to better understand the decisions and processes of how an AI system was developed and provide better recommendations at the conclusion of an audit. Teams can also expect to build better products with direct user feedback and documentation. Now let's talk about some metrics we use to measure AI performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Data Privacy]] (1), [[Design Patterns]] (1), [[Data Collection]] (1), [[Responsible AI]] (1)
> **Env Vars:** fomo (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [AI performance](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-performance?u=76281980&t=0)** - [Instructor] In order to perform a good AI audit it's important to know the different types of ML models. What factors can impact model performance and common metrics used to measure performance. There are four main types of machine learning, supervised unsupervised, semi-supervised, and [[Reinforcement Learning]]. In [[Supervised Learning]] a computer is trained on a labeled dataset meaning that the desired outcomes are already known. A supervised model then makes predictions about what class a new example is in. Unsupervised learning, on the other hand involves training a model on an unlabeled dataset meaning that the desired outputs aren't known in advance. An unsupervised model then identifies patterns within the data on its own which often group similar data points together. Semi-supervised learning uses partially labeled and partially unlabeled datasets and it's often useful when labeling data can be expensive or time consuming. Reinforcement learning uses digital agents to learn by interacting with an environment and receiving feedback in the form of rewards or punishments. The goal is to maximize the rewards received by the agent over time. Reinforcement learning is commonly used for tasks in robotics. Now let's take a deeper peek into supervised learning, models that predict what group of data point belongs to, like if a cell is cancerous or benign, are classification models. When we're auditing ML models
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-performance?u=76281980&t=94)** we're typically dealing with classification models. Let's move a little bit into model metrics. Imagine you have a bunch of different fruit like apples, bananas, and oranges. You can sort them into different groups based on their color or their type. One important metric for classification models is accuracy. This is like counting how many apples a model correctly predicts out of all of the fruit. It makes predictions on. So if there are 10 fruits in total and a computer correctly identifies eight of them it has an accuracy of 80%. Another metric is precision. This is like counting how many of the fruits a model predicts as a certain type were actually that type. So if the model predicts four fruits as apples but only three of them actually were apples, then its precision would be 75%. A third metric is recall. This counts up how many of the actual apples the computer identified as apples. So if there's five apples in total, but the computer only identified three of them correctly, then its recall for apples would be 60%. Lastly, a metric that takes a good balance of precision and recall is F1 score. Imagine we're sorting through only into two groups, apples and bananas, in our game, you get points for every fruit you put in the right basket but you also lose points if you put fruit in the wrong basket. In this case, the F1 score represents how well you're doing at any point in the game. AI performance is impacted by various factors including the quality and quantity
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/ai-performance?u=76281980&t=187)** of training data, feature selected for the model model complexity and model hyper parameters. Performance is also influenced by algorithm choice pre-processing techniques and deployment environments. The presence of outliers, class imbalance or missing values can also impact model performance. Optimizing for these issues can lead to improved model performance while ignoring or improperly handling them can lead to extremely poor outcomes. With this basic understanding of how we evaluate machine learning, we can better understand how to audit machine learning models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (3), [[Supervised Learning]] (3)
> **Analogies:** imagine (2)
> **Speakers:** - [instructor] (1)

#### [Statistical parity](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/statistical-parity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/statistical-parity?u=76281980&t=0)** - [Instructor] There are various metrics we can use to help us find disparities in AI system outcomes. These metrics evaluate different aspects of fairness in predictive models, but in some cases, they can contradict each other due to inherent trade-offs and assumptions between them. You should know that there are at least 21 quantifiable definitions of fairness and careful consideration should be taken to decide which definitions are best aligned with organizational goals. Now, let's cover some of the metrics we use for measuring fairness. First, we can use the equal opportunity metric to assess whether a model provides an equal chance for all individuals regardless of their membership in a particular group to receive a positive outcome. Let's say we have a model that predicts whether a job candidate will be successful in a role. In this case, the positive outcome means the candidate gets the job. Our goal is to have a model that's equally accurate in predicting the success of candidates from different groups such as race or gender. Another metric we can use is equalized odds. Now, imagine we're predicting whether a loan applicant will default on their loan or not. This metric evaluates how well the model performs in predicting both true and false positive rates across different groups. Equalized odds evaluates both the true positive rate and false positive rate for each subgroup separately. If these differ significantly between subgroups, it suggests that the model treats certain groups unfairly. Another common metric is demographic parity.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/statistical-parity?u=76281980&t=96)** This measures the percentage of positive outcomes for each group. It compares the number of positive outcomes to the total number of outcomes, meaning if the percentage is significantly different between both groups, then there are biased outcomes. A metric we also use when conducting an AI audit is a classification error rate. This metric is more general and is a basic measure of how good a classifier is. This is commonly used in AI audits, because we can compare the classification error for multiple groups and use the results to identify disparities. While there are many industry accepted fairness metrics, it's essential to consider the context in which an AI system is being used and ensure that the metrics selected are appropriate for that context. Our [[Algorithms]] should avoid perpetuating historical injustices and calculating the fairness of predictions and disparity in outcomes can help us mitigate these issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), imagine (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 3. Data for AI Audits

[↑ Back to Table of Contents](#table-of-contents)

#### [Data for auditing AI](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/data-for-auditing-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/data-for-auditing-ai?u=76281980&t=0)** - [Instructor] There are two main methods for auditing AI systems. The first method is to take a sample of prior predictions, then add demographics for each individual and calculate if adverse impact exists in model outcomes. The second is to manually run completely new data through a model and track the results along protected classes. For this method, we need to acquire benchmark data to perform an audit. Data used to benchmark AI systems are crucial. This data should include information about protected classes and sometimes their proxies. Protected classes are groups given specific legal protections, outlined in prior laws. Ideally, benchmark data should be representative of the populations a model would be used on. Some common proxies for race include zip code and skin tone while height and weight are often proxies for gender. These proxies can make it hard to identify bias issues because they can still discriminate without a protected class existing in a dataset. Data for AI audits can come from various places, including a company's existing data, data purchased from data brokers or collected for the purpose of auditing. Now, let's imagine we're auditing a hospital's emergency room triage system. The existing data used in the model includes patient records, which have vital sign information as well as details like weight, race and age. So how would we test how this model makes predictions
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/data-for-auditing-ai?u=76281980&t=94)** about new patients? Without access to existing data, we'd struggle to find public data with a demographic information like what we're looking for. So we'd embark on a [[Data Collection]] journey. Auditors can often rely on demographic data from data brokers, as they're more likely to have this PII, or personally identifiable information. Sometimes auditors can leverage data collected from an AI system's production environment or leverage some synthetic data. Before engaging in the data collection process, auditors should pre-engineer the makeup of the data set. There are a few key aspects of viable benchmark data sets. First, benchmark data sets should be relevant to the problem and capture the characteristics of a problem's domain. These data sets should also be large enough to capture variations in protected classes. Next, good benchmark data sets have to be non-redundant and should not contain similar or greatly overlapping records. For classification problems, data sets should contain both positive and negative cases so that the capability of methods to distinguish between them can be tested. Benchmark datasets should also be somewhat balanced. So whether we have two classes or 20, we'd want to design benchmark data to have relatively equal sizes. Let's take, for example, a data set to determine someone's credit worthiness. This should be made up of nearly equal examples of credit worthy and non-credit worthy records.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/data-for-auditing-ai?u=76281980&t=190)** In order for audits to maintain credibility, communicating clearly about the assumptions made when designing benchmark data sets is highly critical.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (2)
> **CLI Commands:** make (1), find (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** pii (1)
> **Speakers:** - [instructor] (1)

#### [Sources of bias in data](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/sources-of-bias-in-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/sources-of-bias-in-data?u=76281980&t=0)** - [Instructor] There are various ways that training data can be biased. In this video, we'll discover how data can be flawed and produce AI systems that can discriminate. Sometimes innocuous data can actually exhibit statistical attributes that result in negative outcomes for those in protected classes. Often imbalanced data captures the world accurately but isn't so ideal. For example, a data set about students having three times more male software engineering majors than female majors is accurate, but maybe it's not the right thing to train AI systems on. So should we build for the world as it is, but perpetuate inequality, or design for the world as it should be with a sharp eye on who gets to decide what AI prioritizes. If teams make these decisions for their consumers, we should consider how that may not lead to the most favorable outcomes for consumers. If we build a machine learning model based on the engineering student data, it's not clear the types of decisions a model will make based on this imbalance. Unfortunately, many [[Algorithms]] can interpret this data to mean that men are better suited to being software engineers, and are thus preferred over women. So who should decide what we do? We have to prioritize the people dealing with the worst negative impacts of these tools first. In some other cases, [[Generative AI Tools]] leverage thousands of examples of text and images that are under existing copyright.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/sources-of-bias-in-data?u=76281980&t=94)** This has caused the FTC to investigate some [[Generative AI]] makers. This means some data used to train AI hasn't been leveraged with user consent in mind, and companies profit from the sale of these models without compensating the data creators. Other technical factors that can create biased outcomes include large proportions of missing data, flawed [[Data Annotation]], conditional demographic disparity, and inconsistencies in preprocessing, such as normalization and outlier removal. There are also major questions about [[Hardware]] calibration when it comes to data collected by sensors. These systems can often fail for marginalized groups, and when they do so broadly, they represent one type of systemic bias, measurement bias. Organizations can get meaningful consent from data subjects, intentionally balance training data to be representative of the populations being subject to the tools, and conduct regular audits and track performance, as well as fairness drift. Meaningful consent should focus on key elements of consumer data, allow individuals to control the level of detail they get about their data, and provide clear options to say yes or no to sharing data. Additionally, consumers should be able to revoke data access and have their data deleted on request. Lastly, and what might be a surprise to some, the identified risk mitigation measures should be implemented prior to the deployment of an AI tool.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/sources-of-bias-in-data?u=76281980&t=190)** Remember, any good audit emphasizes the importance of ongoing monitoring and evaluation to ensure changes are documented and tracked over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Generative AI Tools]] (1), [[Generative AI]] (1), [[Data Annotation]] (1), [[Hardware]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** ftc (1)
> **Speakers:** - [instructor] (1)

#### [Types of bias and data sampling methods](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/types-of-bias-and-data-sampling-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/types-of-bias-and-data-sampling-methods?u=76281980&t=0)** - [Instructor] There are several methods of data sampling that can impact model performance. In this video, we'll cover how teams sample data and the types of bias that data can encode. Historically, most companies use convenient sampling to create datasets to train AI models. This involves selecting data points based on their availability or accessibility. Convenience sampling can be easy to access, but it can also introduce bias as a resulting dataset may not be representative of broader populations. Poorly sampled data can lead to poor predictions and missed opportunities, so other sampling methods can help combat these problems. Other common methods include random sampling, which means selecting data points at random from a larger population. When data scientists use random sampling each data point has an equal chance of being included in the dataset. Commonly, stratified sampling is used to achieve data representative of the underlying demographic patterns. With stratified sampling, a population is divided into subgroups based on certain characteristics, such as gender, and then each subgroup is sampled individually. This can help ensure that the resulting dataset includes records from each subgroup. Cluster sampling means dividing a population into clusters like neighborhoods or schools and then randomly selecting clusters to sample from. This method can also be more cost-effective
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/types-of-bias-and-data-sampling-methods?u=76281980&t=93)** than others as it's easier to collect data from individuals within a cluster than from individuals across a wider geographic area. However, a big caveat here is that these clusters may not represent the broader population well. Now that we have a better understanding about how data is selected, let's go over the potential biases poor sampling methods can cause. Machine learning [[Algorithms]] can exhibit different types of bias, which can affect how fairly they make decisions. Some of the most common types of bias that can impact machine learning are sampling, selection, confirmation, and labeling bias. Imagine if a political poll only surveyed people in the wealthiest zip codes in a state. This would lead to an inaccurate representation of the opinions of those in that state. It can't be understated how impactful data sampling can be as a source of bias in machine learning. Sampling bias occurs when the training data isn't representative of populations it's deployed on. If a model is trained on data that only includes certain demographic groups, it may not perform well on data from other groups, causing quality of service harms. Sampling bias frequently occurs in any type of study, including surveys, experiments, and observational studies. Selection bias occurs when the data used to train the model is biased in some way due to the selection process. If a study on the health effects of smoking only included individuals who already had a smoking-related illness, this would lead
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/types-of-bias-and-data-sampling-methods?u=76281980&t=188)** to a biased sample that may not accurately represent the entire population of smokers at risk. Confirmation bias occurs when a model is designed to confirm preexisting beliefs. If a model is built to draw associations between physical characteristics and criminality, it's likely the developer is attempting to confirm their hypothesis about certain groups. To overcome confirmation bias, it's important to actively seek out alternative data and actively question the assumptions engineering teams hold. Labeling bias occurs when the labels or categories assigned to the data used to train ML are inaccurate, incomplete, or biased. There are various causes of labeling bias, but this is one of the hardest to identify and fix since it happens so early in the modeling process. Human error, limited labels, and cultural bias can all impact data labels. Label validation and active efforts to increase diversity in the data labeling process can help mitigate labeling bias. Now let's move into the different types of audits we can conduct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Analogies:** such as (1), imagine (1)
> **CLI Commands:** make (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)


### 4. Principles for AI Audits

[↑ Back to Table of Contents](#table-of-contents)

#### [Why explainability matters](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/why-explainability-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/why-explainability-matters?u=76281980&t=0)** - [Instructor] Explainability in AI models refers to the ability to understand the factors that influenced why a decision was made. As AI models become even slightly more complex, the ability to explain them grows exponentially more difficult. AI systems can use [[Deep Learning]], or [[Neural Networks]] with multiple hidden layers, which can be effective, but make understanding decisions harder. When users understand how AI models make decisions, and feel comfortable with them, they're more likely to be satisfied with services and feel empowered to speak up about issues they encounter. This can be a positive feedback loop, for teams to improve their tools. A focus on explainability allows companies to comply with regulations and ethical standards. Since the GDPR gives people the right to know about the logic behind automated systems that affect them, it's often easier for teams to choose the best explainable model, rather than trying to explain black box models for only a small lift in performance. Another benefit is when business stakeholders understand how decisions are made, ensuring that decisions are fair, transparent, and promote equity is far easier. Explainable AI has various benefits for companies, including the ability to speed up time to results, increased ability to mitigate risk, and lower model governance costs. [[NIST]] identifies four main components of explainable AI. The first is explanation, or simply that AI systems provide a reason for making decisions.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/why-explainability-matters?u=76281980&t=97)** Next is meaningful, as all explanations should be explainable to users and practitioners. Meaningful explanation should consider the level of technical expertise user audiences have. In addition, explanation should be accurate to the system's processes and their domain. Explainable tools fulfill the principle of knowledge limits when they're deployed under conditions they were designed for, and produce reliable explanations. What happens if we don't understand the systems we rely on? Researchers have found that minor changes with some spray paint or stickers on a stop sign fooled a deep neural network into misidentifying the sign. This goes to show that if we don't understand the systems we build, we can't ensure that we agree with their decisions. Thankfully, there are some technical tools we can use, to help us explain model decisions easier. Shapely additive explanations, or SHAP, gets its theoretical foundations from game theory. In a model that predicts rain, SHAP calculates the importance of clouds as a feature, by removing and adding the subset of other features. This leads to different combinations of features that contribute to a prediction. Local interpretable model agnostic explanations, or LIME, is an explanation technique that creates human friendly explanations when underlying models can't. In an image classification model that detects fish, LIME is able to highlight which parts of an image, that explained why the model thought
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/why-explainability-matters?u=76281980&t=192)** there were fish in that image. There are various types of explanations companies can provide to users, and for various reasons. For example, the EU AI Act introduces specific transparency obligations, such as disclosing when a bot is being used. Users should also be able to easily opt out of interacting with an AI system. And explainability helps them decide whether or not they'd like to opt out. Now, let's discover another [[Responsible AI]] principle, transparency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1), [[Neural Networks]] (1), [[NIST]] (1), [[Responsible AI]] (1)
> **Env Vars:** shap (2), lime (2), gdpr (1), nist (1)
> **CLI Commands:** make (2)
> **Definitions:** refers to (1), is an  (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Levels of transparency](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/levels-of-transparency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/levels-of-transparency?u=76281980&t=0)** - [Presenter] Transparency in AI is critical to [[Building Trust]] and maintaining compliance with existing and proposed regulations. Companies that use AI tools have an obligation to communicate with their users and the public at large about AI in their [[Microsoft Products|products]]. Organizations should inform consumers where they use AI, how complex their AI is, and what types of things are being predicted about them. Additionally, companies should disclose how users can opt out or receive recourse for harms they may encounter. In addition to federal laws, state level regulations have been proposed that would require companies to include AI specific transparency in their [[Privacy]] policies. Of course, the challenge here is balancing how much companies should disclose so their customers are informed, but not so much that they lose valuable intellectual property. Let's start defining some levels of transparency. Level 1 might look like companies providing basic information about AI in their products. This could be a statement in the terms and conditions or a privacy policy that states a product uses AI. However, these disclosures should be easy to access and understand. It's likely at this level that the information provided is general and doesn't go into detail about the specific models. Next is functional transparency. At this level, we'd expect broad statements about how models work, what features they enable, and how it impacts the [[User Experience (UX)|user experience]]. This helps users understand the functionality
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/levels-of-transparency?u=76281980&t=93)** of the models they're subject to. Companies can disclose this through transparency notes or links to detailed information within the products themselves. The third level of transparency is algorithmic transparency. At this level, information about the specific AI models used, like their type and some key features, are shared. Organizations should share how they collected training data and the models used, such as [[Decision Trees]] or [[Neural Networks]]. We'd also expect details about the types of decisions models make and if they're verified by humans or not. Level 4 is full transparency. At this level, companies provide near complete transparency about the AI models and how it's used in their products. This includes information on training data, [[Algorithms]], and specifics on how they're updated over time. This level of transparency also communicates if there were any limitations they identified. In addition, at this level, companies can provide users with the most comprehensive understanding of how AI's used in the products they interact with. The level of transparency that a company provides depends on various factors, such as the complexity of the AI model, the type of user interaction and regulatory requirements. For example, government agencies, HR software makers, and insurance underwriters have to provide a higher level of transparency than social media companies. In addition, the level of transparency provided
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/levels-of-transparency?u=76281980&t=188)** can also vary based on a user's role and access to a product. A user who interacts with an AI-driven product as a consumer may only require basic or functional transparency, while a customer who has access to an AI model's underlying data and potentially algorithms may require full transparency. Transparency in AI is critical to building trust and [[Accountability]]. The level of transparency a company provides depends on various factors, but companies still have an obligation to communicate with their users when they're using AI in their tools. By providing transparent communication about AI models, companies can ensure that their users have a clear understanding of how the technology works and how it impacts them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (5), [[Building Trust]] (2), [[Privacy]] (2), [[Algorithms]] (2), [[User Experience (UX)|User experience]] (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [presenter] (1)

#### [Responsible AI principles: Compliance](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/responsible-ai-principles-compliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/responsible-ai-principles-compliance?u=76281980&t=0)** - [Narrator] Now let's talk about [[Responsible AI]]. AI audits are meant to address a single aspect of the RAI lifecycle: compliance. While compliance is important and has clear consequences, it represents just one aspect of responsible AI. In this video, we'll cover sensitive aspects of AI that aren't always visible when talking merely about compliance and the limitations of AI. Turning AI principles into procedures and actions can be difficult for some teams, but compliance can typically be achieved with a comprehensive audit. Many AI incidents that happen on social media, such as spreading disinformation or hate speech, don't technically break the law. Additionally, social media sites can drive masses of voters to the polls after showing them misinformation without legal penalties. We live in a world of pervasive inequality, oppression, and discrimination. Acknowledging this allows us to understand how AI can perpetuate existing patterns of injustice. One of the ways this happens is because of historical data, but that's not the only source of bias in AI systems. As we see the responsible AI space mature, we should remember that our tools are influenced by surveillance capitalism and Silicon Valley's engineering culture. Unfortunately, due to its ability to scale quickly, AI shouldn't be treated like every other piece of software. We must always consider power and intention, in addition to compliant AI. Many bias problems arise as AI [[Microsoft Products|products]] are built
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/responsible-ai-principles-compliance?u=76281980&t=93)** without mitigating issues before deployment. Creating mitigations to deal with bad actors or unintended uses isn't a common one among technical teams. This is one way human and systemic biases can creep into AI systems unnoticed. Additionally, design choices impact user perception. Some language model interfaces have a blinking [[Cursor]] and seem to type generated text letter-by-letter, giving the impression the tool is thinking and communicating the way a human would. However, this is a design choice rather than an example of AI intelligence. In reality, a whole snippet of text is generated almost instantly, but the choice to design these tools to seem human has a major impact on how people perceive AI tools. even if underlying models have been audited for bias, These interfaces are designed in a way that can make people think they have more capabilities than they do. Despite the cool things we can do with AI, there are hard limitations on its capabilities. To machines, human qualities like gender and race are impossible to identify. Cameras, microphones, and other sensors can only predict on unobservable phenomena like race with features like skin tone, but people of all ancestries can be albino, and many Indian, Maori, and Black people have similar skin tones. Race is ultimately a social construct and nearly impossible to teach computers. There's so many exceptions that wind up making these predictive tools pretty unscientific.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/responsible-ai-principles-compliance?u=76281980&t=189)** Additionally, these types of applications tend to act as a form of digital phrenology. Phrenology is a pseudoscience that suggests one's personality traits are related to the shape and bumps on their skull. Digital phrenology problems attempt to use images of people's faces to predict sexuality, criminality, and other unobservable characteristics. When a tool says it can detect motion, it means that it can detect facial expressions and assumes that it correlates strongly to how someone is really feeling. Not only are facial expressions a bad measure of emotion, we often hide our emotions, smile when we're uncomfortable, and these tools falsely assume proxies for emotions are standard across 8 billion people, so AI can't truly detect our race, gender, age, or emotions. Some of these features, as you'll notice, are protected classes. What might this mean? Since AI can't help us accurately guess someone's age, our best strategy would be just to ask them. You might find that many approaches to responsible AI are surprisingly human and require us to work with subject matter experts in linguistics, behavioral science, and interaction design. Now, let's discuss the [[Ethics]] of scoring and classifying humans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (4), [[Microsoft Products|Products]] (1), [[Ethics]] (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** rai (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Preparing for AI regulation](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/preparing-for-ai-regulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/preparing-for-ai-regulation?u=76281980&t=0)** - [Instructor] We're no longer operating under what used to feel like a Wild West when it comes to AI regulation, especially as the FTC has begun investigations into enterprise AI developers, and New York City has implemented a new law requiring third-party audits with financial consequences. Organizations should prepare for AI regulation to come quickly, even if they aren't in regulated industries. Over the next few years, it'll be surprising if we don't see AI regulation passed at the federal level. So far, many of the proposed regulations have been geared towards algorithmic transparency, and respecting human rights. A major theme in upcoming regulation is the disclosure of how companies use AI as well as a push towards disclosing where their training data comes from, and who owns it. Companies must first establish positions responsible for compliant AI policies. The thorough inventory of their AI systems, deployment environments, training data and their sources should be conducted. Internal policies, procedures, and guardrails also need to be created to ease a third-party auditing process. This framework should be influenced by industry standards such as, [[NIST]] AI [[Risk Management Framework (RMF)|Risk Management Framework]]. Documentation is a crucial part of [[Data Governance]], so it's encouraged that organizations improve documentation standards, and track aspects of the AI development lifecycle, such as potential consequences. Key decisions and model details. Teams can also use tools
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/preparing-for-ai-regulation?u=76281980&t=94)** for tracking [[Data Lineage]] and quality, such as Collibra or work with data governance consultants to develop governance policies. Companies should establish a process for regularly monitoring the performance of AI models. Machine learning operations is a set of practices that aims to deploy, and maintain production models efficiently. Real-world performance should be measured on a continuous basis, as well as how well model fairness, and accuracy tends to drift over time. It's very common that metrics drift, the longer models are in production, and their predictions become less accurate. Tracking drift and creating alerts when drift reaches an unwanted threshold is the primary method for mitigating this issue. This is also the right time for organizations to develop robust data governance methodologies. Organizations can do this by reviewing existing practices, and focusing on [[Data Quality]] and [[Data Privacy]]. Companies should prepare to disclose their training data, and model files with external auditors. One of the best ways to get on top of AI audits is to collect self-reported demographic data from users directly. A great method of doing so would be via surveys teams can incentivize with free [[Microsoft Products|products]] or compensation. For auditors, be prepared to work with ambiguity. One of the challenges with working in such a new field, means you may not always be provided with the direction to complete an audit. While governing bodies have the right idea, few governments are informed enough
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/preparing-for-ai-regulation?u=76281980&t=187)** about the AI design and development lifecycle to provide auditors with good guidance. In addition, consider some of the available resources like ForHumanity Foundations of Independent Audit of AI Systems Certification. ForHumanity is a nonprofit that certifies AI auditors, and a great outlet to learn more about AI regulations. Now, let's cover some risk management frameworks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (3), [[NIST]] (1), [[Risk Management Framework (RMF)|Risk management framework]] (1), [[Data Lineage]] (1), [[Data Quality]] (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (3)
> **Env Vars:** ftc (1), nist (1)
> **Speakers:** - [instructor] (1)


### 5. Model Audits

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of model audits](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/types-of-model-audits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/types-of-model-audits?u=76281980&t=0)** - [Instructor] Model audits should always be considered in context of their target principles. Teams should decide if they're auditing for bias, fairness, or compliance. We have to decide if we want to measure system outcomes or specific ML models. We also have to consider what metrics matter, which demographic groups and intersections of them are of interest, as well as whether we're auditing a system before or after deployment. With all this to consider, every auditor must determine what's in scope for their audit. In practice, auditors find themselves limiting scope for various reasons. That can include lack of data or system access, limited compute to make new predictions, or because some regulations don't require comprehensive audits. Data audits analyze how data is collected, manipulated, and stored, in addition to its underlying features, such as protected classes and their proxies. Often, these audits benefit from the use of [[Data Governance]] tools. Data audits can help identify bias in training data and how the assumptions made about that data can skew model predictions. A model audit investigates a single ML model for bias, compliance, or alignment with company policy. This typically involves calculating disparity metrics for model predictions and providing necessary retraining or model updates to fix any identified disparities. A comprehensive system audit involves examining the algorithmic choice, inputs, outputs, and contexts from a sociotechnical lens. It aims to identify issues that a model audit
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/types-of-model-audits?u=76281980&t=96)** or data audit might miss. In a recent example, a system audit might have identified the use of language models for translation in high-risk applications, such as those seeking asylum, as inappropriate. A system audit looks at the technical details, as well as social contexts to decide if systems are appropriate as deployed. Continuous audits try to test a system's outcomes over time. Part of continuous auditing requires inspecting predictions on new data, but audit results should also be compared to prior audits. This allows teams to make crucial decisions, like to keep models in production or depreciate them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Stages of a model audit](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/stages-of-a-model-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/stages-of-a-model-audit?u=76281980&t=0)** - [Instructor] Now that we understand the types of audits we can conduct, let's go over the stages of an audit. The first stage is scoping, which involves defining the scope, and objectives of an audit. The auditing team must work with stakeholders to understand the objectives of an AI system, the data sources used and the potential concerns associated with the system. This stage also involves identifying the key personnel, and departments involved in development and deployment. The second stage is mapping. In this stage, auditors would map the data flow and [[System Architecture]]. This stage requires the audit team to identify data sources, collection methods used and models used. This helps the audit team understand in detail how the system operates, and when decisions are made. The third stage of an AI audit is artifact collection, which involves collecting and reviewing the artifacts or documents. This can include the code base, training data, test data, and model validation results. An audit team must review these artifacts to create strong mental models about factors that impact system outcomes. The next stage when AI audit is testing. This involves testing the system with adversarial data or data, which it hasn't been exposed to to identify potential risks. At this stage, we can test for accuracy, fairness, reliability and security. Auditing teams must develop test scenarios, and use cases to simulate real-world incidents, and evaluate the performance on those.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/stages-of-a-model-audit?u=76281980&t=94)** The fifth stage of an AI audit is to reflect on the findings and observations from the previous stages. The audit team must analyze the data, and identify the root causes whenever possible. This stage also involves discussing the findings with stakeholders and obtaining their feedback. The next stage of an AI audit involves providing recommendations to stakeholders based on the findings of the audit. The recommendations may include changes to system design, deployment processes, or changes to the training data or [[Algorithms]] themselves. Sometimes auditing teams will find that they have specific suggestions for addressing any biases identified within a system. The final stage of an AI audit requires preparing the post audit reports. These reports should include an executive summary. An overview of the audit scope and objectives. A detailed description of findings And recommendations for mitigating harms. Each stage plays a critical role in highlighting risks and documenting outcomes, whether good or bad. Again, note that AI audits aren't a one-size fits all solution, and depending on the context in which you're conducting an audit, each stage may not be perfectly aligned. Make sure to work with stakeholders, and regulators to ensure your audit effectively captures any systemic disparities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[System Architecture]] (1), [[Algorithms]] (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Model audit: Home loans](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/model-audit-home-loans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/model-audit-home-loans?u=76281980&t=0)** - [Instructor] For this video, we'll pretend we're offering home loans to qualified applicants. Our goal is to use a model that helps us avoid offering too many loans to people who would default on them while still offering as many loans as possible to people who won't default. First, we should identify here that our incentives as a bank or loan officer are different than the ones of loan applicants. Since we will lose money if customers default, we have incentives to deny loans to people who might not default but are considered more risky than others. An interesting aspect of this example is that credit worthiness is subjective. We aren't predicting quantified facts such as your height. Since each company will have a unique risk threshold, we can't truly label someone uncredited worthy under every single context. This is common in machine learning as we lean heavily on proxies for aspects of life that we can't simply quantify. To keep this audit simple, we'll only look at one protected class, gender. Keep in mind that real life audits should ideally look at multiple protected classes and their intersections. Without this disaggregated inspection, the gender study wouldn't have identified that black women specifically face poor outcomes of facial recognition systems. So if we assess our loan algorithm on the axis of gender, we'll want to know how many of the women that applied for a loan were denied. Let's say we analyze this
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/model-audit-home-loans?u=76281980&t=94)** as each batch of applicants comes in. So we have a thousand women and a thousand men for our algorithm to make decisions on. The results of our algorithm are in of men who applied, 70% were approved and of women who applied only 40% were approved. In this case, we'll use impact ratio to understand if there's a true disparity here. To calculate the impact ratio, you divide the number of candidates belonging to a subgroup of a protected class that were approved, by the total number of applicants in the same subcategory. This leaves us with a 0.57 impact ratio for women, and of course, an impact ratio of one for our privilege group. Since our impact ratio is less than 80%, there is a violation of the four-fifths rule here, meaning our algorithm adversely impacts women applicants. While these results will draw many questions, it's up to us in the post auditing stage to identify the sources and implement mitigations. Once an audit has been conducted, teams should reflect on if the models in place are appropriate, still function as intended or if they can be simplified and made more explainable. Now let's look at how we can communicate audit results.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Versions:** 0.57 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Auditing training data](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/auditing-training-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/auditing-training-data?u=76281980&t=0)** - [Instructor] One of the primary sources of bias in AI systems is skewed or incomplete data. To mitigate this, it's important to identify sources of bias and design [[Algorithms]] to be robust to the issues they cause. When a data audit is conducted we're not looking to find disparities between outcomes. We're actually looking to find the gaps in the data itself that can skew models. Before we even begin a data audit we should create a data sheet for the data set at hand. A data sheet tasks us with answering questions about data sets in seven key areas. This piece of documentation will allow us to assess the underlying motivations for creating and distributing a data set and what power structures they may perpetuate. Data sheets also have us inspect how a data set is composed. We seek better understanding of how large of a sample a data set represents. If there's redundancies or if there's confidential information we should be aware of. Data sheets can help us expose issues in pre-processing, [[Data Cleaning]], and labeling. By documenting what methods are used it can be easier to find bugs caused by these issues. Data sets should also have a specific use rather than being general purpose. This means we should identify if a particular data set is already being used to train a mill and link all papers and systems back to their source data. Distribution is a major component of [[Data Privacy]] that can go undocumented in many systems.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/auditing-training-data?u=76281980&t=95)** It should be precisely clear who owns and distributes a dataset, distribution methods, and clear communication on what tasks a dataset should and shouldn't be used for. Datasets, like models, need parties responsible for their maintenance especially if they're shared publicly. Contact information about maintainers should easily be available and maintainers should communicate how often datasets are updated. Data sheets can be phenomenally helpful for inquiring about the source and contents of a dataset and allow teams to question the data they rely on often in ways they haven't before. After having an understanding of the makeup of our data we want to try and assess how representative it is. To do this, we'd count the examples in each group of protected classes. Don't be alarmed if after counting examples we notice a large disparity between dominant and marginalized groups. We can collect additional data to help with this. We know that from prior research, race and zip code are highly correlated in the United States but we want to find out if there are other correlations between protected classes and other features. We can use statistical methods to find correlations and document those to be flagged when modeling. To mitigate issues caused by skewed data we can collect additional data, leverage or create synthetic data, or use data augmentation techniques to balance the dataset. Statistically, we can up sample from minority groups or down sample from dominant groups. When we audit data, it's crucial to keep context in mind
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/auditing-training-data?u=76281980&t=190)** and consider how imbalanced power structures influence the composition and use of different dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Data Cleaning]] (1), [[Data Privacy]] (1)
> **CLI Commands:** find (5)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Audit outcomes: Explainability statements](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/audit-outcomes-explainability-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/audit-outcomes-explainability-statements?u=76281980&t=0)** - [Instructor] Earlier, I mentioned that one of the [[Microsoft Products|products]] of an AI audit is an explainability statement. In this video, we'll walk through a real explainability statement I had the opportunity to help create. If you'd like to follow along as I go through each section in this document, visit this link and download the pdf. Beamery is a UK-based company that develops talent acquisition tools for companies looking to hire. As a result of a third party audit of Beam Marie's AI systems, we develop this public statement to cover our findings. The statement starts off by clearly stating how much of a core value transparency is and that enabling their customers to be compliant with New York City's AEDT Law is a priority. Next, this document dives into mentioning which products and for what functions Beamery uses AI in. Let's uncover a few of them. Connect is a product that helps organizations attract qualified talent and connect candidates to the right career opportunity for them. It's explained that candidate portals leverage recommendation techniques to match their skills and experiences to roles. This explainability statement also covers crucial [[Responsible AI]] principles such as a commitment to providing a social benefit, avoiding bias creation, empowering users using AI transparently, and continuous improvement. Beamery also details the bias mitigation process and key aspects of explainability.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/audit-outcomes-explainability-statements?u=76281980&t=95)** In the case of their recommendations, users are able to see the influence of each component like skills and seniority. This statement also explains how Beamery doesn't use user PII to make predictions, but it also outlines that there are trade-offs to being unaware of demographic information. Lastly, this statement also describes some of the details of the third party audit, including striving to provide a more comprehensive audit than the bare minimum requirement of the law. For further reference, a link to their information security practices is also available. As you can see, this statement covers many of the topics we've outlined so far in this course about disclosing where [[Algorithms]] are used and why.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Responsible AI]] (1), [[Algorithms]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** aedt (1), pii (1)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Continuous audits](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/continuous-audits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/continuous-audits?u=76281980&t=0)** - [Instructor] Continuous AI auditing for compliance and bias mitigation is an essential process to make sure models remain safe for use. It's not enough to simply check a model for compliance or fairness once. As AI tools quickly learn from their environments, we should continuously monitor their performance and conduct audits at meaningful intervals. Often, continuous audits can be an extension of prior audits to better cover the scope of models in an AI system. This is pretty common as new AI enabled features are added to [[Microsoft Products|products]] and need to undergo auditing. In some cases, further audits attempt to expand the depth of prior audits. If a past audit had to be reduced in scope to only audit the data, a further audit might be a good time to audit the models or conduct a comprehensive system audit. Organization should work with users, data subjects, and regulators to identify what an appropriate audit frequency would be. For products with a slower moving development lifecycle, it's possible to wait up to a year between audits, but that's not typically the right pace for startups. We should consider AI audits as part of any [[Responsible AI]] practice and not just a singular event. New regulations also require audits, especially in high-risk deployments, to undergo continuous auditing to remain compliant. Continuous AI audits allow organizations to take corrective actions, rather than letting new harms go unnoticed or unmitigated.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/continuous-audits?u=76281980&t=94)** A continuous audit typically takes the same form as a traditional model or system audit. However, auditors should have access to past results, Depending on the results of prior audits, it's possible to consider audit results in comparison to or independent of prior audits. To determine which path is best, teams and auditors should consider changes to the model's problem domain, user behavior, and development environments. Continuous AI auditing for compliance and bias mitigation should be an ongoing effort for organizations, both internally and externally. It requires collaboration among various stakeholders including data scientists, legal teams, ethicists, and domain experts to approve the continued use of AI tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Responsible AI]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Generative AI](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/generative-ai?u=76281980&t=0)** - [Instructor] [[Generative AI]] introduces new, complex challenges for its responsible design, development, and operation. On a basic level, [[Generative AI Tools]] are designed to generate data that's similar to the training data it was exposed to. Rather than predicting certain features, like if a transaction is fraudulent or not, generative tools seek to create new content, such as images, text, and audio. Since [[ChatGPT]] has gone public, there's been a lot of attention on generative AI tools. So let's cover some of the unique risks they face and some of the challenges they pose to auditors. Right now, the most popular generative AI tools are [[Large Language Models (LLM)|large language models]], or models with lots of parameters that can exhibit zero-shot learning. When I say they need lots of parameters, I mean current LLMs typically have between 10 and 100 billion parameters. Having this many parameters gives large language models new emergent abilities. One of these is zero-shot learning. This is the ability to perform a task, even if a model has not been explicitly trained to do so. What this means is you can ask an LLM to give you political bumper sticker ideas, even if no one else has asked it to do so before. To be able to create billions of parameters, language models require vast amounts of data. This data is often scraped from sites around the web, leading various authors to demand payment
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/generative-ai?u=76281980&t=94)** for the use of their work. Although data scraping is an industry standard, in many cases, it can violate company policies and copyright laws. Without carefully curating this data, it may contain extreme biases, errors, noise, or sensitive information. Generative AI developers have to be very careful about what data they expose models to. This has led to teams hiring content moderators to mark content as offensive, explicit, or otherwise unsuitable for training. Most content moderators and data annotators are at the bottom of hierarchical labor structures and compensated the least of all data workers. Social and labor conditions can make these workers dependent on these roles, which can potentially prevent them from raising questions about unclear instructions or speaking up about working conditions. However, this isn't always the case. To moderate the training data for one commercial LLM, one company contracted Kenyan content moderators for less than $2 per hour to work full-time, scouring explicit content and images. These workers expressed that they were overworked and dealt with severe mental implications, such as PTSD, from seeing and reading graphic, often sexual content on a full-time basis. However, these workers successfully voted to unionize. While tech companies have upheld a veneer of AI working like magic,
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/generative-ai?u=76281980&t=186)** there has always been a human toll. Even before generative AI, modern annotation practices still pay near cents to create the data AI relies on. Now let's move into some of the unique challenges of generative AI. One risk generative AI poses is around content integrity. [[Generative AI|Gen AI]] can be used to create realistic content that can deceive, manipulate, or harm users, such as social engineering or deepfake images. This poses a unique challenges to auditors who should evaluate how generative AI systems are secured against internal and external threats. While generative AI tools can seen deceptively good, they're far less accurate and tend to completely create new false information. This is a negative effect of zero-shot learning. Instead of guardrails that tell users there's not enough information to satisfy a prompt, generative AI tools have invented new legal cases, falsely cited criminal investigations, and improperly attributes books and other academic works. Unfortunately, these tools don't understand their outputs. They focus on predicting the most statistically likely next [[Microsoft Word|word]]. So generative AI tools have led to an influx of nonsensical e-books and other [[Microsoft Products|products]] flooding consumer marketplaces. While not a direct impact of organizations using generative AI, their adoption will cause companies in various industries to become data literate
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/generative-ai?u=76281980&t=278)** and adopt to novel consumer behavior. It's far harder to even evaluate generative AI tools, since no single answer exists for generative tasks. This means there aren't benchmark data sets to audit these tools. And even if we wanted to audit generative AI models, we'd have to do so internally or in collaboration with generative AI developers. While this space is still evolving, keep an eye towards meaningful research and efforts to analyze the outputs of generative AI systems. Hype and adoption for these tools seem to be at an all-time high, so be aware. Their responses are not merely facts and should be vetted by domain experts with enough knowledge to identify inaccuracies. Now that you have an understanding of how audits are conducted and some of the challenges generative AI poses, let's talk about next steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (11), [[Generative AI Tools]] (7), [[Large Language Models (LLM)|Large language models]] (2), [[ChatGPT]] (1), [[Microsoft Word|Word]] (1)
> **Analogies:** such as (3), similar to (1)
> **Env Vars:** llm (2), ptsd (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-auditing-ai-systems/next-steps?u=76281980&t=0)** - Now that you've discovered when, why, and how we audit AI systems, don't stop now. AI audits are one tool to operationalize [[Responsible AI]], and shouldn't be the only harm mitigation technique you leverage. For a refresher on other methods, check out my Foundations of RAI course. If you're interested in becoming a certified auditor, ForHumanity has an in-depth certification you can complete as a next step. Again, I'm Ayodele Odubela. Feel free to connect with me on [[LinkedIn]], and thank you so much for joining me in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (1), [[LinkedIn]] (1)
> **Env Vars:** rai (1)
> **Speakers:** - now (1)


## Instructor

- [[Ayodele Odubela]]

## Resources

- Exercise files available

## Skills Covered

- AI Software Development
- IT Audit
- Artificial Intelligence (AI)

## Path Context

### In [[Understanding Generative AI for Tech Leaders]]
← [[ISO-IEC 42001-2023- Understanding and Implementing the Artificial Intelligence Management System (AIMS) Standard]] | **14 of 22** | [[Introduction to AI Governance]] →

### In [[Mastering Responsible AI- From Concept to Auditing]]
← [[Building a Responsible AI Program- Context, Culture, Content, and Commitment]] | **6 of 7** | [[Algorithmic Auditing and Continuous Monitoring]] →

## Appears In

- [[Understanding Generative AI for Tech Leaders]]
- [[Mastering Responsible AI- From Concept to Auditing]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)