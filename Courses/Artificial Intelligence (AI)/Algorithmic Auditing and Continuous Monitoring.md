---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: algorithmic-auditing-and-continuous-monitoring
url: "https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring"
duration_minutes: 63
duration: 1h 3m
level: Beginner
updated: 9/29/2023
learners: 334419
skills:
  - Continuous Monitoring
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF-Fcwt-2ewCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695847845401?e=2147483647&amp;v=beta&amp;t=Dszmz_NYSskcjmG5qMR4ww64lMKfnYyYmt3cnJAIjOk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Mastering Responsible AI- From Concept to Auditing]]'
prev_courses:
  - '[[Introduction to Auditing AI Systems]]'
path_nav: '[{"path":"Mastering Responsible AI- From Concept to Auditing","position":7,"total":7,"prev":"Introduction to Auditing AI Systems","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - topic/data-science
  - skill/continuous-monitoring
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Algorithmic%20Auditing%20and%20Continuous%20Monitoring.md)

![Algorithmic Auditing and Continuous Monitoring](https://media.licdn.com/dms/image/v2/D560DAQF-Fcwt-2ewCQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695847845401?e=2147483647&amp;v=beta&amp;t=Dszmz_NYSskcjmG5qMR4ww64lMKfnYyYmt3cnJAIjOk)

# Algorithmic Auditing and Continuous Monitoring

> As artificial intelligence becomes integrated into nearly every sector, establishing robust AI governance processes will be critical to maximizing its benefits and mitigating risks. Legislative acts like the EU AI Act in 2023—which will require any developer of a high-risk AI system seeking to enter the EU market to implement algorithmic auditing—and the NIST AI Risk Management Framework in the Un

> [LinkedIn Learning](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring) | 1h 3m | Beginner | 334K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Algorithmic auditing and continuous monitoring uses](#algorithmic-auditing-and-continuous-monitoring-uses)
  - [Responsible AI principles and practices](#responsible-ai-principles-and-practices)
- [**1. Algorithmic Auditing and Continuous Monitoring**](#1-algorithmic-auditing-and-continuous-monitoring) (4 videos)
  - [What is algorithmic auditing?](#what-is-algorithmic-auditing)
  - [What is continuous monitoring?](#what-is-continuous-monitoring)
  - [Voluntary and required algorithmic auditing](#voluntary-and-required-algorithmic-auditing)
  - [Algorithmic auditing and the job market](#algorithmic-auditing-and-the-job-market)
- [**2. Skills for Algorithmic Auditors and Continuous Monitoring Teams**](#2-skills-for-algorithmic-auditors-and-continuous-monitoring-teams) (4 videos)
  - [Establishing an effective governance structure](#establishing-an-effective-governance-structure)
  - [Data collection and analysis](#data-collection-and-analysis)
  - [Identifying and managing bias](#identifying-and-managing-bias)
  - [Setting up a continuous monitoring process](#setting-up-a-continuous-monitoring-process)
- [**3. Case Study: Auditing and Continuous Monitoring Tools and Techniques in Practice**](#3-case-study-auditing-and-continuous-monitoring-tools-and-techniques-in-practice) (6 videos)
  - [Case study: RedTech 30](#case-study-redtech-30)
  - [RedTech 30: Governance structure](#redtech-30-governance-structure)
  - [RedTech 30: Data sampling](#redtech-30-data-sampling)
  - [RedTech 30: Data and code review](#redtech-30-data-and-code-review)
  - [RedTech 30: Testing and debugging](#redtech-30-testing-and-debugging)
  - [RedTech 30: Continuous monitoring](#redtech-30-continuous-monitoring)
- [**Conclusion**](#conclusion) (1 videos)
  - [Responsible AI resources](#responsible-ai-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Algorithmic auditing and continuous monitoring uses](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/algorithmic-auditing-and-continuous-monitoring-uses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/algorithmic-auditing-and-continuous-monitoring-uses?u=76281980&t=0)** - Algorithmic auditing allows you to identify and address potential risks, such as bias data or inappropriate model design, before it's too late. Knowing potential risks upfront and monitoring over time will save you time, money, and potential liability if your AI-enabled tool causes harm. I've designed this course for every team, from the technical teams to the C-suite. I'll cover data testing, [[Code Review]], bias detection, algorithmic transparency, and compliance. Then you'll put these concepts into practice through a case study. Join me to develop your skills in the responsible development and use of AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (1)
> **Analogies:** such as (1)
> **Speakers:** - algorithmic (1)

#### [Responsible AI principles and practices](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/responsible-ai-principles-and-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/responsible-ai-principles-and-practices?u=76281980&t=0)** - In 2014, over 40,000 Michigan residents received a letter from the Michigan Unemployment Insurance Agency, stating they had fraudulently claimed unemployment benefits and owed tens of thousands of dollars to the state. The problem? They were eligible. They had been falsely flagged by an automated system that promised to not only detect fraudulent claims, but to automatically demand repayment. While algorithmic or AI-enabled systems like the one deployed by the Michigan Unemployment Insurance Agency pose serious risks, putting in place appropriate safeguards can ensure the significant benefits they hold are realized. Use of [[Artificial Intelligence (AI)|artificial intelligence]], AI, is revolutionizing industries and transforming the way we live and work. With this rapid expansion comes the need to implement safeguards that support responsible design, development, and deployment. As the benefits and risks of AI-enabled technologies become better understood, companies, nonprofits, academic institutions, governments, and intergovernmental organizations have developed [[Responsible AI]] principles and practices. While responsible AI principles often vary in style and scope across these different organizations, consensus has emerged around eight core principles: [[Accountability]], [[Privacy]] and security, reliability and safety, transparency and explainability, fairness and non-discrimination, professional responsibility,
>
> **[1:33](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/responsible-ai-principles-and-practices?u=76281980&t=93)** human control, and the promotion of human values like civil and human rights. Let's explore how these eight core responsible AI principles can be implemented in practice. A developer or user of an AI-enabled tool can support accountability by monitoring the proper functioning of the tool throughout its lifecycle. To support privacy and security, developers may implement privacy by design features, such as data minimization, collecting and processing only personal data necessary to achieve the objective. To support security, developers may decide to run an AI model locally on a user's device, so that no personal data is transferred. To ensure reliability and safety, a developer or third party may implement algorithmic auditing, assessing the performance of an algorithm, including whether appropriate governance and oversight mechanisms are in place, [[Data Quality]], accuracy, robustness, and model performance. Performance reliability is closely related to safety. If an AI system is implemented in a high-risk area, for example, determining appropriate healthcare interventions, algorithmic auditing and [[Continuous Monitoring]] are critical. We'll do a deeper dive into algorithmic auditing and continuous monitoring in the next video. Communicating how and why AI is being used can build trust through transparency and explainability. This should include descriptions
>
> **[3:04](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/responsible-ai-principles-and-practices?u=76281980&t=184)** of benefits and limitations, including how algorithmic auditing and continuous monitoring are used to maximize benefits and address limitations. Because AI systems are built on data that can reflect societal biases, one strategy for supporting fairness and non-discrimination is to implement robust tests, including algorithmic auditing, to identify sources of bias in the data or model and methods to correct these biases before deployment and throughout its use. There's a recognition of the need for professional responsibility among those who design, develop, or deploy AI. Strategies to strengthen professional responsibility include actively considering the societal and long-term effects of an AI system and responsibly acting on these considerations, even if it means deciding not to implement an AI system due to its real and potential risks. Human control may mean, for example, that a developer conducts an algorithmic audit and continuous monitoring to ensure the AI-enabled system is performing as intended. In other words, a human is evaluating and monitoring the system to identify and mitigate any adverse effects. Above all, developers and users of AI should support the promotion of human values, for example, civil and human rights. To put this into practice, AI developers can conduct human rights impact assessments, often referred to as HRIAs of their AI system, to identify and mitigate potential human rights harms.
>
> **[4:41](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/responsible-ai-principles-and-practices?u=76281980&t=281)** Before you move on to the next video, take a few minutes to make a list of ways you and your organization may implement practices that operationalize the responsible AI principles. Do you currently have any assessment processes that achieve the principles? Where do you need to strengthen your processes so that you can support every responsible AI principle?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (5), [[Continuous Monitoring]] (4), [[Privacy]] (3), [[Accountability]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Analogies:** for example (3), such as (1)
> **Cross-References:** in the next (1), next video (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - in (1)


### 1. Algorithmic Auditing and Continuous Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [What is algorithmic auditing?](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-algorithmic-auditing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-algorithmic-auditing?u=76281980&t=0)** - Algorithmic auditing refers to a range of approaches used to understand and evaluate an algorithmic system, including AI-enabled systems. There are many different types of algorithmic audits. They can include an assessment of the governance frameworks and documentation, empirical tests of performance, and technical evaluation of data, code or methods. The strongest algorithmic audit would include all three, governance, empirical, and technical audits. Governance audits assess whether appropriate policies and practices are in place to support responsible design, development and deployment of an AI system. As part of a governance audit, a project manager may be required to conduct an impact or risk assessment in partnership with the development team to identify any potential risks or adverse impacts, including assessing whether the AI system is violating any laws and regulations. For example, a governance audit can evaluate whether the use and processing of personal data in the AI system violates data protection laws. An empirical audit is outcomes-focused and does not evaluate the internal workings of the system. This type of audit is primarily focused on assessing whether the system is performing as intended, not why it is or is not performing as intended. In 2016, ProPublica conducted an empirical audit
>
> **[1:35](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-algorithmic-auditing?u=76281980&t=95)** of an algorithmic tool used by judges to determine an individual's likelihood to re-offend. A defendant's likelihood to re-offend would be used to inform their sentencing. The audit revealed that the model had a fatal flaw. Comparing the model's results with data on actual re-offense, it was twice as likely to inaccurately label Black defendants with a high [[Probability]] to re-offend than white defendants, and white defendants were more often labeled as unlikely to re-offend. In any audit, human judgment is still needed. For example, a developer of an AI tool may decide it's important to mitigate racial bias. However, by focusing solely on racial discrimination, the model may inadvertently overlook gender bias or bias that emerges at the intersection of race and gender. It's important to be transparent about what features are being evaluated in an empirical audit and whether any features of relevance were not assessed and why. A technical audit typically has three components. The first, defining the purpose and scoping the audit, including what components will be tested, how often, and what constitutes failure. Second, evaluating data inputs, model, and output to ensure alignment with [[Responsible AI]] principles such as non-discrimination and [[Privacy]]. Third, documenting all processes and component one and two to allow for [[Continuous Monitoring]]. Let's explore an example.
>
> **[3:08](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-algorithmic-auditing?u=76281980&t=188)** Imagine that you work at a company that helps businesses recruit technical freelancers. You're a senior developer and have been tasked with developing a new service that will help your customers identify freelance employment opportunities they're eligible for. As a first step, you collect all data on current freelance employment opportunities posted by employers on your site, including necessary experience and skills, time commitments, pay rates, and a list of freelancers the employers have been successfully paired with. You also collect data on customers who have engaged in freelance employment opportunities. You document the types of freelance jobs they've completed, their experience and skills, time commitments and pay rates. You consulted with your company's legal and policy teams and have been advised to perform a technical audit to ensure this service does not perform in a biased or discriminatory way. The technical audit you perform includes the following three steps. First, you define the purpose and scoping of the audit, including what components will be tested, how often and what constitutes failure. You define the purpose of your technical audit as identifying whether the model may be discriminatory based off of protected characteristics like gender, race, or age. You decide that it's important to do this twice throughout the year because the model will be learning in real time from successful and non-successful matches between employers and freelancers.
>
> **[4:41](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-algorithmic-auditing?u=76281980&t=281)** You now move to the second step, to evaluate the data inputs, model and outputs. You take a representative sample of the data and compile descriptive [[Statistics]], including percent of those who had successful and unsuccessful freelance matches broken down by gender, race, and age. You then perform inferential statistics to identify whether protected characteristics like race, gender and age are significant predictors of whether a freelancer is successfully or unsuccessfully matched with an employer. It's of course, important to document whether these protected characteristics are highly correlated with other features that lead to successful freelance matches, like skills or ability to commit to large amounts of time on a project, and whether these correlations may have ingrained biases. Given this knowledge, you test whether the model you have developed furthers any biases identified. You carefully test your model and configure it to minimize biases through repeated tests. Third, to promote transparency and [[Accountability]], you document all processes in steps one and two to enable a record for the next technical audit. Governance, empirical and technical audits each serve important purposes. Now you can use auditing to inform your continuous monitoring process, which we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (2), [[Statistics]] (2), [[Probability]] (1), [[Responsible AI]] (1), [[Privacy]] (1)
> **Analogies:** for example (2), such as (1), imagine (1)
> **Definitions:** refers to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - algorithmic (1)

#### [What is continuous monitoring?](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-continuous-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-continuous-monitoring?u=76281980&t=0)** - In the last video, you put yourself in the position of a senior developer tasked with developing an AI enabled tool that would match employers with potential freelancers and freelancers with potential employers on your service. You led a technical audit where you performed a technical assessment of the data and model for any biases. As part of that process, it became clear that the AI enabled tool should undergo [[Continuous Monitoring]] to better ensure it does not develop or perpetuate biases. But first, what is continuous monitoring? Continuous monitoring tracks an AI system over time including data and model performance. Continuous monitoring typically has four components. First, define the purpose and scoping of the continuous monitoring, including what aspects of the AI system will be tested and when. Second, establish a cadence for monitoring the AI system. The monitoring cadence is often related to risk, AI systems that pose higher risks must be monitored more frequently or in real time. Third, develop metrics for identifying whether risks are appropriately mitigated, whether new risks have emerged, whether data or model drift has occurred, and whether a failure or incident has occurred. Fourth document, all processes and components one and two. Continuous technical monitoring can be used to identify anomalies in your data and model. Here are some examples, data drift, where you evaluate
>
> **[1:36](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-continuous-monitoring?u=76281980&t=96)** whether a statistically significant change has occurred in the data in a way that affects model performance. Data errors, where you evaluate whether the data exhibit characteristics that affect model performance such as duplicates or incomplete data and improper [[Data Processing]]. Model drift, where you evaluate whether there is a significant shift in the model performance or its accuracy. It's important that thresholds be set for allowable levels of data drift, model drift, and data errors. For applications in high risk areas such as healthcare, employment, and education, these thresholds should be set narrowly so as to not cause harm. Let's now turn to continuous non-technical monitoring. Non-technical monitoring focuses on evaluating the impacts of an AI enabled tool in a live environment, and including use case verification where you monitor that the deployed AI system is used in specific use cases for which it was developed. Context affirmation, where you monitor any regulatory or legal changes, including internal or external policy changes that will affect the appropriateness, accuracy, or reliability of the AI system. Usage appropriateness, where you monitor the AI system to ensure it is still achieving the goals and objectives of deployment. A robust continuous monitoring process will include both technical and non-technical monitoring. In order to support successful implementation of continuous monitoring you should
>
> **[3:08](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/what-is-continuous-monitoring?u=76281980&t=188)** critically evaluate whether and how your team can reliably implement continuous monitoring. In order to do so, you should first, ensure there are dedicated personnel who are assigned to oversee and record the continuous monitoring process. If the technical and non-technical continuous monitoring processes are completed by different teams, these teams must be in communication and provide summaries of their continuous monitoring processes and output reports to each other. Second, ensure that the continuous monitoring process includes explicit thresholds for what constitutes failure. These thresholds should be set in relation to the potential adverse impacts the system holds, especially for individual rights. If the AI is being applied in a high risk area the threshold for error must be minimal. In the next video, you'll learn about voluntary and required algorithmic auditing. Before you watch the video, think through how you might implement algorithmic auditing and continuous monitoring in your organization and write down your thoughts. Are there established oversight processes within your organization where these could be easily integrated? What teams or personnel should be responsible?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (13), [[Data Processing]] (1)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Voluntary and required algorithmic auditing](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/voluntary-and-required-algorithmic-auditing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/voluntary-and-required-algorithmic-auditing?u=76281980&t=0)** - In the last two videos, you were introduced to algorithmic auditing and [[Continuous Monitoring]]. Both of these are processes put in place to better ensure AI are designed and deployed responsibly. While many AI developers have started to implement algorithmic audits and continuous monitoring voluntarily, legislation is being proposed and passed into law that requires developers to conduct algorithmic audits and continuous monitoring especially in high risk application areas. In the United States, the National Institute of Standards and Technology, [[NIST]], introduced its voluntary AI [[Risk Management Framework (RMF)|risk management framework]] in 2023. The NIST AI RMF provides guidance to AI developers on how to incorporate trustworthiness considerations into the design, development, use and evaluation of AI [[Microsoft Products|products]], services, and systems. NIST defines trustworthiness as evaluating whether an AI system is valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, [[Privacy]] enhanced, fair with harmful bias managed. To implement elements of trustworthiness, the NIST AI RMF focuses its actions through four functions. Govern, map, measure, and manage. The govern function is a cross-cutting function that is often related to compliance or evaluation. Attention to establishing appropriate governance mechanisms ensures that your implementation of the NIST AI RMF is successful.
>
> **[1:34](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/voluntary-and-required-algorithmic-auditing?u=76281980&t=94)** Strong governance drives responsible technical strategies. For example, the governed function can include an assessment of legal and regulatory requirements, and that compliance is integrated into all organizational processes, procedures and practices, including ensuring roles and responsibilities are assigned to appropriate personnel. The map function enables the identification of benefits and risks and appropriate intervention points to maximize benefits and manage risks. For example, the map function can include identifying targeted application areas based on capabilities and limitations, identification of risk tolerances and appropriate interventions such as algorithmic auditing and continuous monitoring. The measure function employs quantitative, qualitative or mixed methods, tools, techniques, and methodologies to analyze, assess, benchmark, and monitor AI risk and related impacts. For example, the measure function can include regular assessments and documentation of reliability, safety and non-discrimination. The managed function entails allocating resources to address the mapped and measured benefits and risks on a regular basis and as defined by the govern function. For example, the manage function includes implementation of strategies to maximize benefits and manage risks, such as implementation of continuous monitoring. The NIST AI RMF is accompanied by the NIST AI RMF Playbook, which provides guidance on how to implement the NIST AI RMF
>
> **[3:09](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/voluntary-and-required-algorithmic-auditing?u=76281980&t=189)** across these four domains. The European Union's [[Artificial Intelligence (AI)|Artificial Intelligence]] Act or EU AI Act is the most comprehensive piece of legislation regulating AI to date. The EU AI Act takes a risk-based approach to [[AI Governance]], AI applications that pose greater than minimal risk to health, safety and individual rights, must have risk mitigation strategies put in place. Let's dive into an example of what a conformity assessment will look like. Researchers at the University of Oxford have developed guidance on how to implement a conformity assessment in alignment with the EU AI Act. Their conformity assessment process has three stages. First, an internal review protocol, which provides guidance on how to assess [[Quality Assurance]] and risk management of the AI system. Second, the summary data sheet to be submitted to the EU database, which includes vital information on the AI system, including purpose and third, an optional external scorecard which should be made available to customers and other stakeholders of the AI system. It should include a summary of the purpose, values, data and governance of the AI system. Now that you've been introduced to the NIST AI Risk Management Framework and the EU AI Acts conformity assessment, please think about how you and your organization may implement these processes. Choose one area and then take steps to improve and review your progress regularly. Next, I'll dive deeper into algorithmic auditing and continuous monitoring processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (9), [[Continuous Monitoring]] (6), [[Risk Management Framework (RMF)|Risk management framework]] (2), [[Microsoft Products|Products]] (1), [[Privacy]] (1)
> **Env Vars:** nist (9), rmf (6)
> **Analogies:** for example (4), such as (2)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Algorithmic auditing and the job market](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/algorithmic-auditing-and-the-job-market?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/algorithmic-auditing-and-the-job-market?u=76281980&t=0)** - As greater awareness of the potential risks of AI enabled systems become better understood, lawmakers and regulators are increasingly putting in place requirements for AI developers and users to implement algorithmic auditing and [[Continuous Monitoring]]. As we explored in the last video, the EU AI Act places requirements on developers and employers of high risk AI systems. In other words, those that may have an effect on individual rights to conduct risk assessments and appropriate mitigation and management strategies before the tool can be used. While this law is implemented in the EU, it will have far reaching effects beyond the EUs borders. AI developers globally will be required to comply with the EU AI Act if their tool will be used anywhere within the European Union. Developers and deployers of these high risk systems will require personnel who have the skills to undertake algorithmic auditing and continuous monitoring. It is important to emphasize that it's not only the technical development teams who will need these skills, but also C-suite, project managers, policy and legal teams, and more. Individuals with a background in computer science, data analysis, machine learning, law, [[Ethics]], and the social sciences are likely to find ample opportunities in this growing field. Skills taught in this course will be particularly valuable, specifically data testing, [[Code Review]], bias detection,
>
> **[1:36](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/algorithmic-auditing-and-the-job-market?u=76281980&t=96)** algorithmic transparency and compliance. By completing this course, you are positioning yourself to be a leader in this growing field.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (2), [[Ethics]] (1), [[Code Review]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Definitions:** in other words (1)
> **Prerequisites:** required to (1)
> **Speakers:** - as (1)


### 2. Skills for Algorithmic Auditors and Continuous Monitoring Teams

[↑ Back to Table of Contents](#table-of-contents)

#### [Establishing an effective governance structure](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/establishing-an-effective-governance-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/establishing-an-effective-governance-structure?u=76281980&t=0)** - A multinational [[Cloud Services]] company needed to increase its [[Software Development]] team quickly. They'd just been awarded a prestigious contract and only had a few months to develop and scale the tool for their new client. In order to streamline the recruitment process they developed a machine learning tool that would review applications and identify who to interview first. The tool was deployed on the incoming resumes. At first, it seemed perfect. Strong candidates were rising to the top but a peculiar characteristic of the top candidates stood out to the hiring team. All of the top candidates played lacrosse. It turned out that the CEO and several high performing employees had played lacrosse in college. The training data had been pulled from the company's existing employee data creating an unintended bias. This incident was a wake up call for the team and made them realize the importance of a well-defined algorithmic auditing and [[Continuous Monitoring]] process as part of their [[Responsible AI]] governance strategy. How might you build in processes to assess unintended consequences in your audit? Let's identify how you can build this process in your organization. First, define your objectives. Remember that the objective of the machine learning hiring tool was for unbiased recruitment. It's critical to understand the purpose of your [[Algorithms]] and to rigorously evaluate the data and test the model to ensure appropriate performance. Set clear measurable goals
>
> **[1:35](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/establishing-an-effective-governance-structure?u=76281980&t=95)** for what your algorithm should achieve and how the auditing process will effectively evaluate and test performance. Second, establish auditing metrics and criteria. Different algorithms have different implications. For a recommendation algorithm you might be interested in ensuring accuracy and reliability of recommended content, but for a hiring algorithm, mitigating bias or discriminatory results is likely more relevant. Establish the metrics and criteria that reflect your objectives. Third, assemble your auditing team. No single person can handle all aspects of an audit. Your team should include data scientists, legal experts, ethicists, and individuals who understand the context where the algorithm operates. It is important that everyone understands that each provides an important aspect of the audit. Fourth, conduct your audit. There are three primary components of your audit. First, inspect the underlying data for any errors, omissions, or biases. Does the data need to be cleaned further? Do you need to fix the data in any way? Second, evaluate the code. Is the code accurate? Third, assess the model's behavior. You're looking for alignment between what the algorithm is supposed to do and what it is actually doing. Is the model producing results as you would expect? Fifth, schedule, regular review and revisions. Your algorithm is unlikely to be static. It's part of a dynamic system that changes over time.
>
> **[3:11](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/establishing-an-effective-governance-structure?u=76281980&t=191)** You should periodically review your auditing process to make sure it's performing as intended. If your algorithm is being deployed in a high risk area, for example, in making hiring decisions, you should review your auditing process more frequently to mitigate any potential oversights. If your algorithm is being deployed in a low risk area, for example, automated removal of spam messages sent to your customer service chatbot, reviews can be less frequent. And sixth, implement a continuous monitoring system. After the initial audit don't just walk away. Set up a system for monitoring the algorithm's behavior over time. You're looking for changes that might affect performance and triggers that should prompt a re-audit. Seventh, prioritize transparency and reporting. Document everything. It is important to document the objectives and how your auditing process accurately assesses these objectives. By documenting this process it can be used to enable continuous assessment. You should also prioritize sharing audit documentation with relevant stakeholders. Doing so promotes [[Accountability]] and helps build trust. Eight, prepare for external audits. If you're applying an algorithm in a high risk area for example, an employment or healthcare, be prepared for third party audits. Even if you're not required to implement a third party audit doing so can offer a valuable outside perspective and provide an additional level of assurance. Make sure your process is robust enough to stand up
>
> **[4:46](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/establishing-an-effective-governance-structure?u=76281980&t=286)** to external scrutiny. Just remember the lacrosse bias anecdote. Even the best intentioned algorithms can have unintended consequences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Continuous Monitoring]] (2), [[Cloud Services]] (1), [[Software Development]] (1), [[Responsible AI]] (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (1), required to (1)
> **Env Vars:** ceo (1)
> **Best Practices:** recommended (1)
> **Speakers:** - a (1)

#### [Data collection and analysis](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/data-collection-and-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/data-collection-and-analysis?u=76281980&t=0)** - During the pandemic, a local bookstore in Davis, California decided to open an online store. The owners had always prided themselves on providing tailored recommendations to each of their patrons, memorizing their likes and dislikes and encouraging them to try new genres. The owners recruited a computer science student at UC Davis to help them build a recommendation algorithm that would provide tailored recommendations to their patrons online. After months of work, the owners and patrons were puzzled. Even though each of the patrons had submitted a form indicating their likes and dislikes, the algorithm kept recommending obscure cookbooks to just about everyone. "101 Ways to Create a Savory Dish with Gummy Bears" was not received enthusiastically by all. When they conducted an audit of the data, it was clear what had happened. The computer science student, a foodie and cookbook enthusiast, had been using the test account for personal purchases and her overwhelming preference for obscure cookbooks had skewed the dataset. This seemingly amusing incident drives home a critical point. The quality and integrity of data are critical in developing and auditing [[Algorithms]]. It also highlighted the importance of [[Data Privacy]] as personal bias should not influence the broader data set. When you collect and analyze data for algorithmic auditing, focus on [[Data Quality]] and [[Privacy]] and keep the following areas in mind. I recommend taking notes to help you answer the course assessment questions. Number one, identify relevant data.
>
> **[1:36](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/data-collection-and-analysis?u=76281980&t=96)** First, it's important to fully understand the type of data your algorithm uses. Is it user data, transactional data, sensor data, or something else? Dig deeper into these data categories. Are you using personally identifiable information? Are you combining users' personal data with transactional data? Understanding the data and its interrelationships will help you know what to look for during the audit. Second, [[Data Collection]]. In order to accurately assess your data, you need to collect a representative sample. The data shouldn't be skewed by outliers or biases, which is what happened in our cookbook incident. Third, data quality assessment. Assess your data's quality. You want data that's accurate, complete, consistent, and relevant. Data quality issues can create misleading results during the audit. Tools and techniques such as data profiling, [[Data Cleaning]], and validation checks can help. Let's explore five common [[Data Validation]] checks further. Data type check. Ensure data entered into a field is the correct type. If data should be numeric, letters, or special symbols, should be rejected. Range check. Some data will have a particular range. For example, latitude and longitude should be between negative 90 and 90. Any values falling outside of this range should be considered invalid Format check. Some data has a predefined format. For example, entering a birthdate as month, day, year. Ensuring data is entered
>
> **[3:08](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/data-collection-and-analysis?u=76281980&t=188)** in the correct format is important for accuracy. Consistency check. It's important to ensure data consistency in your dataset. For example, ensuring the delivery date for a package is after the order date. Uniqueness check. Some data, such as IDs and email addresses, are unique. It's important to check the data to identify redundancies. Fourth, respect data privacy. Be mindful of privacy considerations when collecting and analyzing data. Use anonymization and data masking techniques to protect individuals' identities. Follow the principles of data minimization and purpose limitation, which is the collection and use of only the data you absolutely need for the intended purpose. Fifth, analyze the data. Now, analyze the data. Look at how the algorithm processes and uses the data. Consider whether it's handling the data appropriately and making decisions based on relevant factors. Are you noticing any strange results? Is the model performing consistently? Sixth, periodic reevaluation. Data drift is a common occurrence where the statistical properties of data change over time. Data drift can occur if you're collecting new data that's being used in your algorithm and is especially common in real time collection and integration of data into your model. Regular reevaluation of your data and its impacts on your algorithm ensures
>
> **[4:42](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/data-collection-and-analysis?u=76281980&t=282)** that your model performs accurately over time. Seventh, documentation and transparency. Lastly, document your findings and make them available to stakeholders. Transparency fosters trust and helps to demonstrate that you're using data responsibly. Just remember the cookbook incident. A seemingly small oversight in data collection and use can lead to bigger issues in algorithm performance. In the next video, we'll explore ways to analyze your data for bias. Before watching the video, identify three types of bias that could be present in the bookstore's dataset and add your list to the Q and A.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (3), [[Data Privacy]] (2), [[Privacy]] (2), [[Data Collection]] (2), [[Algorithms]] (1)
> **Analogies:** for example (3), such as (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - during (1)

#### [Identifying and managing bias](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/identifying-and-managing-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/identifying-and-managing-bias?u=76281980&t=0)** - In fall 2021, a national bank launched a program to streamline its loan application process. The bank worked with a third party to develop a sophisticated algorithm that would consider various factors for each applicant. It identified their repayment history on other loans and income to determine whether they were eligible for a loan. The loan officers noticed a trend emerging. Individuals from certain neighborhoods were being disproportionately flagged as high risk for defaulting. During an audit of the algorithm, it was determined that home addresses inadvertently introduced a bias against certain neighborhoods. This experience underscores the importance of detecting and mitigating algorithmic bias. Bias, whether conscious or unconscious, can lead to unfair outcomes. Here are five strategies for identifying and managing biases. The National Institute of Standards and Technology, [[NIST]], released a report to guide AI developers, deployers, and users on how to identify and manage bias. In their report, they provide a summary of three dominant categories of AI bias. The first, systemic biases, procedures and practices of institutions that result in certain social groups being advantaged or disadvantaged in comparison to other social groups. Second, human biases. Human biases are marked by how an individual perceives information to make a decision. These biases are often implicit,
>
> **[1:34](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/identifying-and-managing-bias?u=76281980&t=94)** meaning the individual is unaware of their bias thinking. Third, statistical and computational biases. These biases emerge when a dataset used is not representative, or a model places more weight on certain groups. These biases are not necessarily present because of prejudice or discriminatory intent, but that the data may be under representative of all demographics or there are inappropriate assumptions in the model. Auditing and [[Continuous Monitoring]] are valuable methods for identifying and managing statistical and computational biases. Second, bias detection. Detecting bias can be challenging. You might need to evaluate your data, investigate your algorithm's [[Decision-Making]] process and conduct extensive testing. Tools and techniques such as disparate impact analysis, bias and fairness metrics, and counterfactual testing can be useful. Third, bias management. Once biases are detected, management strategies need to be put in place. This could involve pre-processing the data to address identified biases, adjusting the algorithm itself, or including human oversight to ensure fairness. Fourth, [[Diversity and Inclusion]]. Including diverse perspectives in your team can help spot and address bias. This includes people from different backgrounds, experiences and disciplines. A more diverse team is likely to recognize a wider range of potential biases.
>
> **[3:08](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/identifying-and-managing-bias?u=76281980&t=188)** Fifth, education and training. Finally, training your team to understand and address algorithmic bias is essential. This includes understanding the governance and technical aspects of bias identification and management. Continuous monitoring is essential as the data, context, or usage of the algorithm might change over time. We'll explore how to effectively use continuous monitoring to identify and manage bias in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (3), [[NIST]] (1), [[Decision-Making]] (1), [[Diversity and Inclusion]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** nist (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### [Setting up a continuous monitoring process](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/setting-up-a-continuous-monitoring-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/setting-up-a-continuous-monitoring-process?u=76281980&t=0)** - In this chapter, you've learned how to establish an effective governance structure, [[Data Collection]] and analysis for algorithmic auditing and strategies to identify and manage algorithmic bias. Each of these is important to ensure robust algorithmic auditing. This process should be reflected in a [[Continuous Monitoring]] procedure that helps ensure risk identification and management is sustained throughout the lifecycle of the AI tool. A strong continuous monitoring process should include the following six strategies. One, set monitoring objectives. Two, determine metrics. Three, establish monitoring infrastructure. Four, conduct regular audits. Five, implement a feedback loop. Six, be transparent. Let's take a deeper dive into each of these. One, set monitoring objectives. Your continuous monitoring builds upon your algorithmic auditing. Findings from your algorithmic audit will reveal your monitoring objectives. For example, did you identify that your data and models are prone to drift, or that your data or model will likely exhibit biases over time? Two, determine metrics. Establish metrics based on your monitoring objectives. For example, this could be setting a threshold for accuracy, precision, or specific fairness metrics. During monitoring if these metrics go beyond
>
> **[1:35](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/setting-up-a-continuous-monitoring-process?u=76281980&t=95)** an allowable range, intervention is needed. Intervention could be correcting the data, adjusting model features, or pausing or discontinuing use of the tool. Establish monitoring infrastructure, number three. Deploy tools and technologies that can help track performance. This can be done in real time or at established time intervals. I recommend that monitoring be more frequent if the AI is applied in a high risk area such as healthcare or finance. Continuous monitoring can include the integration of automated systems that can analyze and log data, track changes, and flag anomalies when they occur. Four, conduct regular audits. Algorithmic auditing shouldn't happen only once, especially in high risk areas. It's important to conduct regular algorithmic audits to better ensure you've identified and managed risks in your continuous monitoring process. Five, implement a feedback loop. The insights gained from monitoring and periodic audits should feed back into the system leading to regular algorithm updates and refinements. This continuous learning and updating process is vital to keep your algorithm performing as intended over time. Number six, be transparent. It's important to be transparent with internal and external stakeholders on the results of continuous monitoring and the steps your team has taken to remedy any anomalies. This is a great way to help build trust and it can build greater awareness
>
> **[3:08](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/setting-up-a-continuous-monitoring-process?u=76281980&t=188)** around the importance of this process. When you establish a strong continuous monitoring process, it will help you better identify and respond to potential failure points before they occur, saving you time, money, and frustration. Next, I'll cover a case study to help you further explore how skills in algorithmic auditing and continuous monitoring can be implemented.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (7), [[Data Collection]] (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)


### 3. Case Study: Auditing and Continuous Monitoring Tools and Techniques in Practice

[↑ Back to Table of Contents](#table-of-contents)

#### [Case study: RedTech 30](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/case-study-redtech-30?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/case-study-redtech-30?u=76281980&t=0)** - We're now going to apply the concepts we've learned in this course to a case study on a fictional company. Red30 Tech, a global leader in the development of AI-powered enterprise Solutions, took on the challenge of revolutionizing the home loan approval process for one of its customers, a fintech company operating across the United States. Red30 Tech is developing an AI-enabled tool called HomeLoanAI that seeks to expedite and improve the accuracy of identifying individuals eligible for home loans, reduce manual workload, and optimize loan disbursement. Let's learn about their goals. The primary goal of HomeLoanAI is to accurately predict loan eligibility based on a multitude of factors with greater speed and efficiency than traditional, manual processes. Red30 Tech is also striving to eliminate human biases from the approval process, and improve overall customer satisfaction by quickening loan approval and denial times. Let's explore the data they used. To train the HomeLoanAI model, Red30 Tech used historical data of past loan applicants in a large city on the West Coast of the United States including demographic information, zip code, financial history, credit scores, education, employment details, and loan repayment records. They have complied with all [[Data Privacy]] laws
>
> **[1:34](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/case-study-redtech-30?u=76281980&t=94)** and regulations including anonymizing and de-identifying personal information. Let's review their model type. Given the nature of the problem, a binary classification, eligible or not eligible for a loan, Red30 Tech opted to use a gradient boosting decision tree model. You'll learn more about it later on. This model type is known for its accuracy and ability to handle a wide range of data types, making it a strong choice for their diverse data set. Let's identify their team structure. The Red30 Tech team developing and overseeing HomeLoanAI is structured into the following teams. Data scientists, tasked with pre-processing the data, developing and validating the AI model, and iteratively improving its performance. Data engineers, responsible for managing [[Data Ingestion]], cleaning, and structuring. Compliance officers, ensure all activities comply with financial regulations and data privacy laws. Project managers, coordinate between different team members, manage resources, and keep the project on schedule. In the next videos, we'll evaluate Red30 Tech's governance structure, data sampling, [[Code Review]], testing, debugging, and [[Continuous Monitoring]] process. Pause the video and take a moment to reflect. Are there any issues you currently see with Red30 Tech's data, model, or team structure?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Privacy]] (2), [[Data Ingestion]] (1), [[Code Review]] (1), [[Continuous Monitoring]] (1)
> **Cross-References:** in the next (1)
> **Speakers:** - we (1)

#### [RedTech 30: Governance structure](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-governance-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-governance-structure?u=76281980&t=0)** - In Chapter 2, Video 1, you learned how to establish an effective governance structure. In that video, we explored the importance of the following eight strategies. One, defining your objectives. Two, establishing auditing metrics and criteria. Three, assembling your auditing team. Four, conducting your audit. Five, scheduling regular reviews and revisions. Six, implementing a [[Continuous Monitoring]] system. Seven, prioritizing transparency and reporting. And eight, preparing for external audits. We'll apply the eight strategies to the Red30 Tech case study now. First, define your objectives. The case study prompt provided us with a summary of two goals Red30 Tech hopes to achieve via its Home Loan AI tool. The first, accurately predict loan eligibility based on a multitude of factors with greater speed and efficiency than traditional manual processes. The second goal, eliminate human biases from the approval process and improve overall customer satisfaction by quickening loan approval and denial times. At first, these objectives look comprehensive. Develop an effective and efficient AI tool that mitigates biases in home loan decisions. What might be missing? Part of Red30 Tech's objectives for developing Home Loan AI should include a process where they'll evaluate the data
>
> **[1:35](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-governance-structure?u=76281980&t=95)** and test the model to ensure appropriate performance. They must set clear, measurable goals for what Home Loan AI will achieve and how they will audit and monitor performance over time. Number two, establishing auditing metrics and criteria. Since Red30 Tech is building an AI-enabled tool to assist in identifying home loan eligibility, it's essential they prioritize assessing accuracy and mitigating biased or discriminatory results. What would you recommend Red30 Tech evaluate? Here are a couple of suggestions. Establish metrics to evaluate whether data collected represents any institutional or implicit biases. Establish metrics to evaluate whether the model is producing biased or inaccurate results. We'll explore potential issues with Red30 Tech's data and model in the next two videos. Third, assembling your auditing team. In the case study, you were introduced to the Red30 Tech team in charge of Home Loan AI. As a reminder, the team included data scientists, data engineers, compliance officers, and project managers. Who might be missing? Remember that an auditing team should not only include technical personnel who can evaluate the data and models and policy compliance personnel who can provide guidance on relevant laws, regulations, and policies,
>
> **[3:07](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-governance-structure?u=76281980&t=187)** but also those who have specific domain expertise. Red30 Tech's auditing team should also include finance experts who have domain knowledge to help select and interpret relevant data and validate the model's performance. Fourth, conducting your audit. Remember that your audit has three primary components. First, inspect the underlying data for any errors, omissions, or biases. Second, evaluate the code. Is the code accurate? Is it performing falsely in any way? Third, assess the model's behavior. You're looking for alignment between what the algorithm is supposed to do and what it is actually doing. Is the model producing results as you would expect? In the next two videos, you'll evaluate Red30 Tech's data and model used in Home Loan AI. Are there any red flags you already see with the Home Loan AI data or model? The fifth, scheduling regular reviews and revisions. Red30 Tech's Home Loan AI will be used to determine home loan eligibility. As such, this is considered high risk. When determining the cadence of reviews and revisions, consider whether the model will be utilizing new data over time. If it is, the model may be prone to data or model drift whereby the data and model begins to perform in ways not originally intended. How often do you think Red30 Tech should review its data and model?
>
> **[4:42](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-governance-structure?u=76281980&t=282)** Six, implementing a continuous monitoring system. As you've learned throughout this course, it is imperative to not stop at only one audit, but to use regular auditing as a mechanism to inform a robust continuous monitoring system. Seventh, prioritizing transparency and reporting. Red30 Tech should document its auditing and continuous monitoring for internal stakeholders to track the data and model performance over time and to promote external credibility. Has Red30 Tech identified members of its team to document its auditing and continuous monitoring? No, as of right now, it is unclear who on the team would be tasked with this role. In order to capture all relevant information, it's recommended that the data scientists and data engineers should provide technical reports to the compliance officers and project managers who would be tasked with ensuring all necessary records are kept. Eighth, preparing for external audits. By documenting the data, model, designs, and decisions for how to address any risks identified, Red30 Tech will be well-positioned to comply with an external audit on the performance of Home Loan AI. Before you get into the next video, are there particular aspects of the governance structure you would improve further? If there are, how would you improve them? Write your comments in the Q&A below,
>
> **[6:15](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-governance-structure?u=76281980&t=375)** so we can keep improving and keep the conversation going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (5)
> **Cross-References:** in the next (2), next video (1)
> **Best Practices:** recommended (1)
> **Speakers:** - in (1)

#### [RedTech 30: Data sampling](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-sampling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-sampling?u=76281980&t=0)** - Development of high risk AI systems requires careful consideration of data. If data is inaccurate, incomplete, or biased, the model will subsequently perform in an inaccurate, incomplete, or biased way. Let's explore data sampling through our case study on Red 30 Tech's home loan AI tool. To develop their model, the team is using historical data of past loan applicants from a large city on the west coast of the United States, including their demographic information like age, race and gender, zip code, financial history, credit scores, education, employment details, and loan repayment records. Notice any red flags on the data collected? The first red flag is the limited sample of residents who live in a large city. If the model is going to be deployed nationally, it should include data representative of all areas where it will be applied. Red 30 Tech should collect a sample of data that is representative of all individuals the model will be applied to across the United States. Notice any additional red flags? Another red flag is that the model uses data that could represent institutional biases or implicit biases. For example, by using zip code the model may replicate institutional biases where certain communities have historically
>
> **[1:33](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-sampling?u=76281980&t=93)** been denied socioeconomic opportunities and collection of demographic information such as age, race and gender could result in biased decisions. It's imperative that Red 30 Tech conduct assessments to ensure protected characteristics such as age, race and gender are not inadvertently leading to approval or denial of loans. Next, I'll go over strategies for data and [[Code Review]], including how you can test for biases in the data and model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - development (1)

#### [RedTech 30: Data and code review](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-and-code-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-and-code-review?u=76281980&t=0)** - In order to better ensure Red30 Tech's home loan AI system is working appropriately, your team should conduct a data review and [[Code Review]]. In this video, I'll cover the elements of a data review and code review and then you'll evaluate Red30 Tech's home loan AI tool. When conducting a data review, you should consider the following eight criteria. First, data provenance. It's imperative to understand and document the origin of the data, how it was collected, and any transformations or cleaning the data has gone through. Second, [[Data Quality]]. When assessing data quality, it's important to check the data for the three Cs: completeness, consistency, and correctness. Is the data complete? Does it include all data points you need? Is the data consistent? Are there any anomalies that need to be corrected? Is the data correct? Are there any errors? Are there duplicates? Third, data relevance. It's important to ensure the data you are using is relevant to the use case you are applying it to. This is also closely tied to the concept of data minimization. Collect and use only the data absolutely necessary for your model. It is inappropriate to use additional data that is not relevant to the use case. Fourth, data representativeness. Remember when we evaluated the data used
>
> **[1:32](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-and-code-review?u=76281980&t=92)** to train home loan AI in the last video? Because the data was collected only on residents of a large city, it wasn't relevant to the nationwide application of home loan AI. Fifth, [[Data Security]]. It is important to ensure your data is secure. Data must be stored and processed in a way that prevents unauthorized access or data breaches. Sixth, [[Data Privacy]]. Most high-risk AI systems use sensitive data, so it's important that data protection laws and regulations are followed. This includes using data minimization, data anonymization, and de-identification techniques. Seventh, fairness and non-discrimination. We've spent a lot of time in this course discussing data and model bias. As you've learned, data must be checked to ensure it doesn't perpetuate or amplify unfairness or discrimination. Eighth, appropriate data labeling. This is one of the most important aspects of data review. For supervised machine learning, data contain labeled examples, applications whereby you are providing the model with example input/output pairs in their relationship. Unsupervised machine learning, on the other hand, does not use labeled data. Red30 Tech is using a form of supervised machine learning in its development of home loan AI. When conducting code review, your team should ensure the model is sound, robust, and responsible. In order to do this, your team should consider the following five criteria. First, accuracy. Red30 Tech decided to use
>
> **[3:05](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-and-code-review?u=76281980&t=185)** a gradient boosting decision tree model because of its ability to handle diverse data types. Since home loan AI uses a variety of data types, for example, demographic, financial, and geolocation data, this model should work well, but during algorithmic auditing, it's important to evaluate whether the model is performing as intended and that it's not discriminatory. Second, robustness. It's important to ensure your model is robust to changes in its data, application in different situations, and robust to adversarial machine learning attacks whereby the model may be fed spurious data to affect its performance. This is called data poisoning. Third, security. Red30 Tech's home loan AI uses very sensitive data, so it's imperative that the model is not prone to adversarial machine learning attacks that may reveal sensitive data. For example, the team will want to test whether there are any situations where a query submitted to home loan AI may inadvertently reveal an individual's sensitive personally identifiable information. Fourth, fairness and non-discrimination. The code should be checked to ensure no features of the model, such as independent variables that are correlated or independent variables that are stronger predictors of the dependent variable, do not inadvertently result in a biased decision. Fifth, transparency and explainability. When possible, high-risk AI systems should be understandable and explainable to end users
>
> **[4:37](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-data-and-code-review?u=76281980&t=277)** so they can be more accountable. It may also provide an opportunity for stakeholder feedback that can improve the quality and accuracy of the model. Before we start the next video on model testing and debugging, think about how you would establish or improve a robust data and code review process within your organization. Add your comments to the Q&A below.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (4), [[Data Quality]] (2), [[Data Security]] (1), [[Data Privacy]] (1)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** in the last (1), next video (1)
> **Definitions:** is called (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - in (1)

#### [RedTech 30: Testing and debugging](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-testing-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-testing-and-debugging?u=76281980&t=0)** - You've just learned about data and [[Code Review]] and have been tasked with testing and debugging Red 30 Tech's Home Loan AI. In this lesson, you'll learn about two types of model testing, and we'll explore several debugging procedures you can implement. Let's learn about two types of model testing, validation testing, and stress testing. Validation testing uses a validation dataset to test the model's performance. This dataset should be different from the one used for training but still representative of the problem space. Does the model perform as expected when using the validation dataset? If it doesn't, why? How would you test Home Loan AI using validation testing? We can subject the model to a representative dataset and evaluate whether the model performs as intended. Stress testing places the model under extreme conditions, for example, using high volumes of data to assess its robustness and reliability. Another stress test can include testing the model on how it performs on edge cases or extreme or unusual scenarios. For Home Loan AI, this can include an applicant who performs extremely well and extremely poorly simultaneously on factors considered in the model. Once a model has been tested, it's important to debug the model of any of the anomalies identified. There are several methods and tools that can be used to debug a model, including checking for errors in the code.
>
> **[1:33](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-testing-and-debugging?u=76281980&t=93)** Is your model inappropriately placing greater emphasis on some factors over others? Reevaluating assumptions made in model development? Perhaps your testing revealed that you inappropriately assumed some factors were more important than others. During your testing, you realized that this relationship is inaccurate and results in false or discriminatory results. Reevaluate your assumptions, retrain your model, and test again. During validation testing, you may have realized that your model performs poorly on individuals representing certain socioeconomic demographics regardless of someone's true ability to repay or default on a home loan. If this happens, it's imperative that you go back and analyze your data and model to see if it has embedded biases and think through ways to remedy this harm. You can apply methodologies like feature importance analysis that helps you identify whether a model is overly dependent on certain features or inappropriately excluding certain features. In the next video, I'll explain a [[Continuous Monitoring]] plan for Red 30 Tech's Home Loan AI, but before that, write down how you would implement model testing and debugging into the development and deployment process within your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Code Review]] (1), [[Continuous Monitoring]] (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - you (1)

#### [RedTech 30: Continuous monitoring](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-continuous-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-continuous-monitoring?u=76281980&t=0)** - Earlier in this course, you learned that a strong [[Continuous Monitoring]] process should include the following six strategies: set monitoring objectives, determine metrics, establish monitoring infrastructure, conduct regular audits, implement a feedback loop, and be transparent. Let's explore how this continuous monitoring process can be implemented by Red 30 Tech in its oversight of home loan AI. Set monitoring objectives. Earlier, we learned that Red 30 Tech used historic data including demographic information, zip code, financial history, credit scores, education, employment details, and loan repayment records to train its home loan AI model. Given the potential for historic bias to be present in the dataset, Red 30 Tech should monitor its data and model to best ensure it does not produce biased results. Determine metrics. Red 30 tech needs to establish metrics for identifying bias and when intervention is necessary. For example, if there are a disproportionate number of false positives or false negatives for individuals based on their race alone. Establish monitoring infrastructure. Red 30 Tech's data scientists and data engineers must work together to establish an automated system that can analyze and log data, track changes, and flag anomalies when they occur. Conduct regular audits. Given the high risk nature of home loan AI,
>
> **[1:33](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/redtech-30-continuous-monitoring?u=76281980&t=93)** the data scientists should conduct regular audits of the model's performance, including investigating whether data drift or model drift have occurred. Implement a feedback loop. As the team identifies any performance issues, these should be continuously used to update the data and model to support optimal performance. Be transparent. Most importantly, be transparent about your process and the steps you've taken to improve the data and model including making this work publicly available. This will help to build trust and greater awareness of the importance of continuous monitoring. Take a moment to think through and write down any additional data or model features the Red 30 Tech team should review.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (3)
> **Cross-References:** earlier in (1)
> **Analogies:** for example (1)
> **Speakers:** - earlier (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Responsible AI resources](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/responsible-ai-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/algorithmic-auditing-and-continuous-monitoring/responsible-ai-resources?u=76281980&t=0)** - In this course, you learned [[Responsible AI]] principles and how they form the foundation of effective algorithmic auditing and [[Continuous Monitoring]]. Before you go, I have some recommendations so you can apply what you've learned. If your organization is developing or implementing AI-enabled technologies, especially in high-risk areas such as healthcare or finance, it is important to put in place a robust algorithmic auditing and continuous monitoring process. Remember that it's not just important for the data scientists and engineers to be involved, but also C-suite executives, product managers, policy and legal teams. The National Institute of Standards and Technology, [[NIST]], has developed the NIST AI [[Risk Management Framework (RMF)|Risk Management Framework]]. It's a helpful guide for AI risk identification and mitigation. You can find courses on NIST on [[LinkedIn]], and many companies, including [[Microsoft]], Amazon and [[Google]] offer continuous monitoring guidance and packages. By learning skills in effective algorithmic auditing and continuous monitoring, you're positioning yourself to be a key asset to any organization developing or using AI-enabled tools. Feel free to connect with me on LinkedIn, where I post about advancements in emergent technologies and appropriate governance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Monitoring]] (4), [[NIST]] (3), [[LinkedIn]] (2), [[Responsible AI]] (1), [[Risk Management Framework (RMF)|Risk management framework]] (1)
> **Env Vars:** nist (3)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


## Instructor

- [[Brandie Nonnecke]]

## Resources

- Exercise files available

## Skills Covered

- Continuous Monitoring

## Path Context

### In [[Mastering Responsible AI- From Concept to Auditing]]
← [[Introduction to Auditing AI Systems]] | **7 of 7**

## Appears In

- [[Mastering Responsible AI- From Concept to Auditing]]

---

[↑ Back to top](#)